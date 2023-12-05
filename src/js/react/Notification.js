import * as React from "react";
import { useState } from "react";
import empty from "../../bell.webp";
import {
    Pagination,
    Typography,
    Avatar,
    ListItemAvatar,
    List,
    ListItemText,
    Divider,
    ListItem,
} from "@mui/material";
import useUser from "./useUser";
import { userRepository } from "../../firebase";
import { EVENT_TYPE } from "../models/event";
import { useNavigate } from "react-router-dom";

/**
 * @class Notification
 * @classdesc Notification - A functional React component that renders a list of notifications.
 * @param {Object} props - Props including userId and closePanel function.
 * @returns {React.Component} A component displaying user notifications.
 */
export default function Notification({ userId, closePanel }) {
    const [page, setPage] = useState(1);
    const itemsPerPage = 8; // You can adjust this value as needed

    const [notifications, setNotifications] = useState([]);
    const navigate = useNavigate();

    /**
     * @memberof Notification
     * @function useEffect
     * @description useEffect hook for fetching notifications when the component mounts.
     */
    React.useEffect(() => {
        if (userId != null) {
            userRepository.getNotifications(userId.uid).then((result) => {
                setNotifications(result);
            });
        }
    }, []);
    /**
       * @memberof Notification
       * @function handleChangePage
       * @description Handles the pagination change.
       * @param {Object} event - The event object.
       * @param {number} newPage - The new page number.
       */
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <div>
            <List sx={{ width: "100%", bgcolor: "background.paper" }}>
                {parseNotifications(notifications)
                    .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                    .map((item) => (
                        <React.Fragment key={item.id}>
                            <ListItem alignItems="flex-start" sx={styles.listItem}>
                                <ListItemAvatar>
                                    <Avatar
                                        alt={item.author}
                                        src={item.avatar}
                                        onClick={() => {
                                            if (item.isUpcomingEvent) {
                                            } else {
                                                navigate(`/profile/${item.userFrom}`);
                                            }
                                            closePanel();
                                        }}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={item.name}
                                    onClick={() => {
                                        if (item.isFlashcard) {
                                            navigate(`/flashcardshare/${item.sharedFlashcardId}`);
                                        } else if (item.isFollower) {
                                            navigate(`/profile/${item.userFrom}`);
                                        } else if (item.isUpcomingEvent) {
                                            navigate(item.path);
                                        } else {
                                            navigate(`/quizmain/${item.sharedQuizId}`);
                                        }
                                        closePanel();
                                    }}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: "inline" }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                                onClick={() => {
                                                    if (item.isFlashcard) {
                                                        navigate(`/flashcard-ui/${item.sharedFlashcardId}`);
                                                    } else if (item.isFollower) {
                                                        navigate(`/profile/${item.userFrom}`);
                                                    } else if (item.isUpcomingEvent) {
                                                        navigate(item.path);
                                                    } else {
                                                        navigate(`/quizmain/${item.sharedQuizId}`);
                                                    }
                                                    closePanel();
                                                }}
                                            >
                                                {item.author}
                                            </Typography>
                                            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                                            <Typography
                                                sx={{
                                                    display: "inline",
                                                    marginLeft: "auto",
                                                    color: "rgba(0, 0, 0, 0.54)", // Light grey color
                                                }}
                                                component="span"
                                                variant="body2"
                                            >
                                                {item.when}
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </React.Fragment>
                    ))}
            </List>
            {notifications.length >= itemsPerPage && (
                <Pagination
                    count={Math.ceil(notifications.length / itemsPerPage)}
                    page={page}
                    onChange={handleChangePage}
                    color="primary"
                />
            )}
        </div>
    );
}

const styles = {
    listItem: {
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "#f5f5f5", // Light grey background on hover
        },
    },
};
/**
 * @memberof Notification
 * @function createNewFollowerEvent
 * @description Creates a new follower event from a notification.
 * @param {Object} notification - The notification object.
 * @returns {Object} A formatted event object for a new follower.
 */
function createNewFollowerEvent(notification) {
    let data = {
        id: notification.id,
        name: "New Follower!",
    };
    data.author = notification.userFrom.name + " followed you!";
    data.avatar = notification.userFrom.imageURL;
    data.when = timeAgo(notification.createdAt);
    data.userFrom = notification.userFrom.id;
    data.isFollower = true;
    data.currUser = notification.event.newFollowerEvent.followingId;
    return data;
}
/**
 * @memberof Notification
 * @function createSharedQuizEvent
 * @description Creates a data object for a shared quiz notification.
 * @param {Object} notification - The notification object containing quiz information.
 * @returns {Object} A formatted event object for a shared quiz notification.
 */
function createSharedQuizEvent(notification) {
    let data = {
        id: notification.id,
        name: `${notification.userFrom.name} shared a Quiz with you!`,
    };
    data.author = notification.quiz.name;
    data.avatar = notification.userFrom.imageURL;
    data.when = timeAgo(notification.createdAt);
    data.userFrom = notification.userFrom.id;
    data.isQuiz = true;
    data.sharedQuizId = notification.quiz.id;
    data.currUser = notification.event.shareQuizEvent.sharedWith;
    return data;
}
/**
 * @memberof Notification
 * @function createSharedFlashcardEvent
 * @description Creates a data object for a shared flashcard notification.
 * @param {Object} notification - The notification object containing flashcard information.
 * @returns {Object} A formatted event object for a shared flashcard notification.
 */
function createSharedFlashcardEvent(notification) {
    let data = {
        id: notification.id,
        name: `${notification.userFrom.name} shared a Flashcard with you!`,
    };
    data.author = notification.flashcard.name;
    data.avatar = notification.userFrom.imageURL;
    data.when = timeAgo(notification.createdAt);
    data.sharedFlashcardId = notification.flashcard.id;
    data.userFrom = notification.userFrom.id;
    data.isFlashcard = true;
    data.currUser = notification.event.shareFlashcardEvent.sharedWith;
    return data;
}
/**
 * @memberof Notification
 * @function timeAgo
 * @description Converts a timestamp to a string indicating time elapsed.
 * @param {number} timestamp - The timestamp to convert.
 * @returns {string} A string representation of the time elapsed since the timestamp.
 */
function timeAgo(timestamp) {
    const seconds = (Date.now() - timestamp) / 1000;

    if (seconds < 60) {
        return `${Math.floor(seconds)}s`;
    } else if (seconds < 3600) {
        const minutes = Math.floor(seconds / 60);
        return `${minutes}m`;
    } else if (seconds < 86400) {
        const hours = Math.floor(seconds / 3600);
        return `${hours}h`;
    } else {
        const days = Math.floor(seconds / 86400);
        return `${days}d`;
    }
}
/**
 * @memberof Notification
 * @function parseNotifications
 * @description Parses and processes an array of notification objects.
 * @param {Array} notifications - An array of notification objects to be processed.
 * @returns {Array} An array of formatted notification data objects.
 */
function parseNotifications(notifications) {
    const data = [];
    for (const notification of notifications) {
        if (notification.isUpcomingEvent) {
            const upcomingEvent = notification.upcomingEvent;
            let obj = {
                id: notification.id,
                name: `You have an upcoming event at ${upcomingEvent.time}`,
                author: upcomingEvent.name,
            };
            obj.when = timeAgo(notification.createdAt);
            obj.isUpcomingEvent = true;
            obj.avatar = empty;

            const path =
                upcomingEvent.type == "Quiz"
                    ? `quizmain/${upcomingEvent.itemId}`
                    : `flashcard-ui/${upcomingEvent.itemId}`;
            obj.path = path;
            data.push(obj);
        }
        if (!notification.event) continue;
        switch (notification.event.eventType) {
            case EVENT_TYPE.NEW_FOLLOWER:
                data.push(createNewFollowerEvent(notification));
                break;
            case EVENT_TYPE.SHARE_QUIZ:
                data.push(createSharedQuizEvent(notification));
                break;
            case EVENT_TYPE.SHARE_FLASHCARD:
                data.push(createSharedFlashcardEvent(notification));
                break;
            default:
                break;
        }
    }
    return data;
}
