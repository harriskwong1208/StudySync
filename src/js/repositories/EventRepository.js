import Event from "../models/event";
import { EVENT_TYPE } from "../models/event";
import { setDoc, doc, collection, addDoc} from "firebase/firestore";
import { getAllItems, getItemById, removeDocumentFromCollection, updateNonArrayDocumentFields } from "../utils/sharedRepositoryFunctions";
const { v4: uuidv4 } = require("uuid");

export class EventRepository {
    constructor(database) {
        this.database = database;
    }

    /** Create new follwer event */
    async createNewFollowerEvent(followerId, followingId) {
        const event = new Event(
            `${followerId} followed ${followingId}`,
            EVENT_TYPE.NEW_FOLLOWER,
            uuidv4()
        );
        event.createNewFollowerEvent(followerId, followingId);
        return await this.createEvent(event, EVENT_TYPE.NEW_FOLLOWER);
    }

    /** Create share quiz event */
    async createShareQuizEvent(sharedBy, sharedWith, itemId) {
        const event = new Event(
            `${sharedBy} shared quiz with ${sharedWith}`,
            EVENT_TYPE.SHARE_QUIZ,
            uuidv4()
        );
        event.createShareQuizEvent(sharedBy, sharedWith, itemId);
        return await this.createEvent(event, EVENT_TYPE.SHARE_QUIZ);
    }

    /** Create share flashcard event */
    async createShareFlashcardEvent(sharedBy, sharedWith, itemId) {
        const event = new Event(
            `${sharedBy} shared flashcard with ${sharedWith}`,
            EVENT_TYPE.SHARE_FLASHCARD,
            uuidv4()
        );
        event.createShareFlashcardEvent(sharedBy, sharedWith, itemId);
        return await this.createEvent(event, EVENT_TYPE.SHARE_FLASHCARD);
    }

    /**Helper function to create event */
    async createEvent(event, eventType) {
        try {
            const eventsRef = doc(this.database, "events", event.id);
            await setDoc(eventsRef, event.toJSON());
            return event.id;
        } catch (error) {
            console.log(`error adding ${eventType} event: ${error}`);
        }
    }

    async getAllEvents() {
        return await getAllItems(this.database, "events", null);
    }

    async getEventById(id) {
        return await getItemById(this.database, id, "events", "event");
    }

    /**Upcoming Events */
    async createUpcomingEvent(upcomingEvent){
        try {
            const eventsCollectionRef = collection(this.database, "upcomingEvents");
            const docRef = await addDoc(eventsCollectionRef, upcomingEvent.toJSON());
            return docRef.id;
        } catch (error) {
            console.log(`error adding event: ${error}`);
            throw error
        }  
    }

    async getUpcomingEventById(upcomingEventId){
        return await getItemById(this.database, upcomingEventId, "upcomingEvents", "upcoming event");
    }

    async deleteUpcomingEvent(upcomingEventId){
        await removeDocumentFromCollection(this.database, upcomingEventId, "upcomingEvents", "upcoming event")
    }

    /**Pass in an updated object to update */
    async updateUpcomingEvent(upcomingEventId, updatedUpcomingEvent){
        await updateNonArrayDocumentFields(this.database, upcomingEventId, "upcomingEvents", updatedUpcomingEvent)
    }

    async updateUpcomingEventDate(upcomingEventId, newDate){
        await this.updateUpcomingEvent(upcomingEventId, {date: newDate})
    }
    async updateUpcomingEventTime(upcomingEventId, newTime){
        await this.updateUpcomingEvent(upcomingEventId, {date: newTime})
    }
    
    async updateUpcomingEventName(upcomingEventId, newName){
        await this.updateUpcomingEvent(upcomingEventId, {dateTime: newName})
    }
}
