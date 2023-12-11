"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3961],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var s=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},o=Object.keys(e);for(s=0;s<o.length;s++)a=o[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)a=o[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=s.createContext({}),c=function(e){var t=s.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=c(a),p=n,m=h["".concat(l,".").concat(p)]||h[p]||u[p]||o;return a?s.createElement(m,r(r({ref:t},d),{},{components:a})):s.createElement(m,r({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[h]="string"==typeof e?e:n,r[1]=i;for(var c=2;c<o;c++)r[c]=a[c];return s.createElement.apply(null,r)}return s.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5531:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var s=a(7462),n=(a(7294),a(3905));const o={sidebar_position:1},r=void 0,i={unversionedId:"system-architecture/design",id:"system-architecture/design",title:"design",description:"Frontend",source:"@site/docs/system-architecture/design.md",sourceDirName:"system-architecture",slug:"/system-architecture/design",permalink:"/project-studysync/docs/system-architecture/design",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-studysync/edit/main/documentation/docs/system-architecture/design.md",tags:[],version:"current",lastUpdatedBy:"Ato Aidoo",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"System Architecture",permalink:"/project-studysync/docs/category/system-architecture"},next:{title:"Development Environment",permalink:"/project-studysync/docs/system-architecture/development-environment"}},l={},c=[{value:"Frontend",id:"frontend",level:2},{value:"Dashboard Component &amp; Mysets Component &amp; Social Component &amp; Profile Component",id:"dashboard-component--mysets-component--social-component--profile-component",level:2},{value:"Dashboard",id:"dashboard",level:3},{value:"Mysets",id:"mysets",level:3},{value:"Social",id:"social",level:3},{value:"Profile",id:"profile",level:3},{value:"Flashcard Component",id:"flashcard-component",level:2},{value:"Quiz Component",id:"quiz-component",level:2},{value:"Events Component",id:"events-component",level:2},{value:"Leaderboard Component",id:"leaderboard-component",level:2},{value:"Notificatin Component",id:"notificatin-component",level:2},{value:"Backend",id:"backend",level:2},{value:"Database",id:"database",level:2},{value:"Database Model",id:"database-model",level:4},{value:"Collections",id:"collections",level:4},{value:"Static Structures",id:"static-structures",level:4},{value:"Use case 1",id:"use-case-1",level:2},{value:"Use case 2",id:"use-case-2",level:2},{value:"Use case 3",id:"use-case-3",level:2},{value:"Use case 4",id:"use-case-4",level:2},{value:"Use case 5",id:"use-case-5",level:2},{value:"Use case 6",id:"use-case-6",level:2},{value:"Use case 7",id:"use-case-7",level:2},{value:"Use case 8",id:"use-case-8",level:2}],d={toc:c};function h(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,s.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"frontend"},"Frontend"),(0,n.kt)("p",null,"The StudySync platform is designed to enhance students' learning experiences by providing a centralized dashboard for streamlined access to educational resources. With an emphasis on collaboration and efficiency, it facilitates AI-powered creation of flashcards and quizzes, fostering an interactive learning environment. Students can effortlessly share these resources with friends, enriching the collective study process. Additionally, StudySync allows users to schedule study sessions, ensuring consistent and focused learning engagements."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/Capstone-Projects-2023-Fall/project-studysync/assets/111998266/73ecb3b8-85df-4e9f-b924-9184f90749d0",alt:"component diagram drawio"})),(0,n.kt)("h2",{id:"dashboard-component--mysets-component--social-component--profile-component"},"Dashboard Component & Mysets Component & Social Component & Profile Component"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/Capstone-Projects-2023-Fall/project-studysync/assets/111998266/f2d242e5-7e21-4794-ad3c-aba61eed57e7",alt:"mul"})),(0,n.kt)("p",null,"The image shows the react component that make the dashboard page, mysets page, social page and profile page. These components interact with the userRepository class to fetch the data from database."),(0,n.kt)("h3",{id:"dashboard"},"Dashboard"),(0,n.kt)("p",null,"Dashboard component uses the methods inside the userRepository to fetch the data from database and all the other database operation, it displays the upcoming events, friends, recent flashcards and recent quizzes."),(0,n.kt)("h3",{id:"mysets"},"Mysets"),(0,n.kt)("p",null,"Mysets component uses the methods inside the userRepository to fetch the data from database and all the other database operation, it displays flashcards and  quizzes and allow user to share them. ScheduleDialog will allow user to set the time to study."),(0,n.kt)("h3",{id:"social"},"Social"),(0,n.kt)("p",null,"Social component uses the methods inside the userRepository to fetch the data from database and all the other database operation, it displays user's following and followers. This page also allow user to find users."),(0,n.kt)("h3",{id:"profile"},"Profile"),(0,n.kt)("p",null,"Profile component uses the methods inside the userRepository to fetch the data from database and all the other database operation, it displays user's information. User can edit its own information here or click on the flashcards to redirect to the flashcard component."),(0,n.kt)("h2",{id:"flashcard-component"},"Flashcard Component"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/Capstone-Projects-2023-Fall/project-studysync/assets/111998266/ea3a7b9e-4471-4dd7-822c-bacc3e96e2cf",alt:"flashcard"})),(0,n.kt)("p",null,"Here is the flashcard component. It uses the methods inside the flashcardRepo to fetch the data from database and all the other database operation. User can create a flashcard set here. And then click the flashcard button to redirect the flashcardUICom. This is the component where user can create and study their flashcards."),(0,n.kt)("h2",{id:"quiz-component"},"Quiz Component"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/Capstone-Projects-2023-Fall/project-studysync/assets/111998266/d058df8f-6bb1-444c-8b17-64003a0893fa",alt:"quiz"})),(0,n.kt)("p",null,"Here is the Quiz component. It uses the methods inside the QuizRepository to fetch the data from database and all the other database operation. QuizList allows user to create multiple quizzes for one flashcard set. MainQuizPage allows user to actual take the quiz."),(0,n.kt)("h2",{id:"events-component"},"Events Component"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/Capstone-Projects-2023-Fall/project-studysync/assets/111998266/42e4de4c-7f22-4a67-a4d6-d0e104805c76",alt:"events"})),(0,n.kt)("p",null,"Here is the Event component. It uses the methods inside the EventRepository to fetch the data from database and all the other database operation. User can edit upcoming events in the page. EventCard is the style of each event."),(0,n.kt)("h2",{id:"leaderboard-component"},"Leaderboard Component"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/Capstone-Projects-2023-Fall/project-studysync/assets/111998266/d0629776-a849-4a1a-8bf3-8629aa6b8283",alt:"leaderboard"})),(0,n.kt)("p",null,"Here is the leaderboard component. It uses the methods inside the QuizRepository to fetch the data from database and all the other database operation. User can see the score comparison here."),(0,n.kt)("h2",{id:"notificatin-component"},"Notificatin Component"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/Capstone-Projects-2023-Fall/project-studysync/assets/111998266/39e06236-8265-4572-a8f4-cfe471e3f668",alt:"notification"})),(0,n.kt)("p",null,"Here is the notification component. It uses the methods inside the NotificationRepository to fetch the data from database and all the other database operation. NotificationBadge styles the notification page. Users will receive notifications for various interactions such as following or unfollowing a user, sharing flashcards or quizzes, and reminders for upcoming events."),(0,n.kt)("h2",{id:"backend"},"Backend"),(0,n.kt)("p",null,"StudySync, an innovative learning platform, seamlessly integrates Firebase's robust features to deliver an engaging user experience. Its use of Firebase hosting ensures rapid content delivery and secure hosting, while Firebase Cloud Functions allow for efficient serverless back-end operations. This harmonious integration provides users with real-time access to study tools and a responsive platform that adapts to their interactive needs."),(0,n.kt)("p",null,"Beyond smooth operations, Firebase's advanced capabilities also include real-time database updates and secure user authentication, contributing to a cohesive ecosystem. StudySync users benefit from a dynamic platform where learning materials are instantly accessible, interactions are safeguarded, and updates are immediately reflected, all thanks to Firebase's comprehensive suite of tools that underpin the platform's performance and reliability."),(0,n.kt)("h2",{id:"database"},"Database"),(0,n.kt)("h4",{id:"database-model"},"Database Model"),(0,n.kt)("p",null,"StudySync will be using a Firebase NoSQL database to store all data. "),(0,n.kt)("p",null,"For single properties on a user model such as email, password and name, we will just store it in the user the corresponding collection. For more complex properties such as notifications, followers and following, flashcards and events, we will store the ids of each corresponding field in the user collection and query the respective collection as needed. To be more specific, in the case of notifications, the actual data for notifications will be stored in the Notifications collections, anytime we need to query user notifications, we can do this easily by fetching all the notification ids for that user from the Users collection and then querying the Notifications collection using those ids. This same idea applies to fetching events for Notifications"),(0,n.kt)("h4",{id:"collections"},"Collections"),(0,n.kt)("p",null,"The database will be made up of the following collections: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Users"),": This collection stores everything related to a single user. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Notifications"),": Stores all the metadata related to a notification"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Events"),": Store metadata for each event"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Upcoming Events"),": Store metadata for each event"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FlashCardSets"),": Representation of an entire stack of flashcards. Made up of flashcard items"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Quizzes"),": A quiz object generated based on a flash card.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/Capstone-Projects-2023-Fall/project-studysync/assets/77356776/5a44e8e3-acb0-4407-9ae6-e7f706bd3e0d",alt:"Study Sync DB Diagram"})),(0,n.kt)("h4",{id:"static-structures"},"Static Structures"),(0,n.kt)("p",null,"Events and Upcoming Events collections will use these structures. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Event_Type"),": An enum/object representing the type of event. Either a NewFollower, ShareQuiz, or ShareFlashcard event."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Share Event"),": Underlying Model for ShareQuiz event and ShareFlashcard event"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"New FollowerEvent"),": Represents a NewFollowerEvent"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Upcoming_Event_Type"),": An enum/object representing the type of event. Either study for QUIZ or study for FLASHCARD")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/Capstone-Projects-2023-Fall/project-studysync/assets/77356776/2585a54f-2ee0-48a3-b7f5-dd70a7c13b2e",alt:"Study Sync Static"})),(0,n.kt)("h2",{id:"use-case-1"},"Use case 1"),(0,n.kt)("p",null,"A user forgets to review because of daily chores and uses StudySync to review before midterm is approaching."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"User login using StudySynce credential."),(0,n.kt)("li",{parentName:"ol"},"After logging into the account, the user navigates to Study Tool tab to check his flashcard decks."),(0,n.kt)("li",{parentName:"ol"},"Then he found the flashcard topic for his subject."),(0,n.kt)("li",{parentName:"ol"},'After reviewing the flashcards, the user went back to Study Tool page and select "Quiz".'),(0,n.kt)("li",{parentName:"ol"},"Finally, the user completes the quiz and the correct answer is displayed."),(0,n.kt)("li",{parentName:"ol"},"After submission, the quiz shows all the correct answer and quiz score will be saved to the leaderboard.\n",(0,n.kt)("img",{parentName:"li",src:"https://github.com/Capstone-Projects-2023-Fall/project-studysync/assets/123430237/23609bc1-daf0-40c4-916e-c6b169d03936",alt:"user case1"}))),(0,n.kt)("h2",{id:"use-case-2"},"Use case 2"),(0,n.kt)("p",null,"A user is about to take a naturalization test but doesn't have time to study for it due to work, so he needs to practice for the test using StudySyne."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Users opens the website and logs in with their StudySync accounts."),(0,n.kt)("li",{parentName:"ol"},"Then since there is nothing on StudySync that he needs to learn, the user needs to add some flashcards."),(0,n.kt)("li",{parentName:"ol"},"He then adds the naturalization test questions he has studied and uploads them to StudySync."),(0,n.kt)("li",{parentName:"ol"},"After completing the upload of the question bank he chose flashcard mode to study those terms and definitions."),(0,n.kt)("li",{parentName:"ol"},"When the flashcard comes out there are three options, know, don't know, and not sure."),(0,n.kt)("li",{parentName:"ol"},"Finally, the rating for those questions will be saved and can be used to generate questions for quiz.\n",(0,n.kt)("img",{parentName:"li",src:"https://github.com/Capstone-Projects-2023-Fall/project-studysync/assets/123430237/192b3e85-9173-4d86-b0c7-5dfe55447132",alt:"user case2"}))),(0,n.kt)("h2",{id:"use-case-3"},"Use case 3"),(0,n.kt)("p",null,"  A user was recommended a learning program by his classmates that said he could have a quiz competition."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"He navigates to StudySync website and sign up for a new StudySync account."),(0,n.kt)("li",{parentName:"ol"},"Then he went to the friends list and chose to add a friend."),(0,n.kt)("li",{parentName:"ol"},"After adding his friends he is able to receive a shared quiz from one of his friends."),(0,n.kt)("li",{parentName:"ol"},"The user then has the ability to do the quiz that was shared by his friends.\n",(0,n.kt)("img",{parentName:"li",src:"https://github.com/Capstone-Projects-2023-Fall/project-studysync/assets/123430237/9dbe93cc-fcc5-4435-9335-26b936b4ab41",alt:"user case3"}))),(0,n.kt)("h2",{id:"use-case-4"},"Use case 4"),(0,n.kt)("p",null,"  A user wants to study the subject he wants but, he doesn't find the flash card for the subject he wants in StudySync."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The user navigates to StudySync website and then logs in."),(0,n.kt)("li",{parentName:"ol"},"After he didn't find any flashcard for the subject he wanted to study, he turned on the AI topic generation function."),(0,n.kt)("li",{parentName:"ol"},"After pressing AI Assist button, the user is able to specify the description of his desired flashcards."),(0,n.kt)("li",{parentName:"ol"},"Once the AI has finished the flashcard generating, the user is able to study the flashcard and is also able to rate them."),(0,n.kt)("li",{parentName:"ol"},'After learning, the user is able to go "Quiz" mode and generate questions by using AI question generating feature.'),(0,n.kt)("li",{parentName:"ol"},"The user didn't like the questions generated by AI, so he/she decides to edit the questions as well as the answer choices and  then save it.")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(5893).Z,width:"638",height:"649"})),(0,n.kt)("h2",{id:"use-case-5"},"Use case 5"),(0,n.kt)("p",null,"   A user wants to take a quiz created by themselves or a friend and compare it to his/her friends."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"User logs in to StudySync."),(0,n.kt)("li",{parentName:"ol"},"User then navigate to the mySets section."),(0,n.kt)("li",{parentName:"ol"},"At the mySets section, user has a wide range of quizzes either created by themselves or shared by friends."),(0,n.kt)("li",{parentName:"ol"},"User selects a quiz and completes it."),(0,n.kt)("li",{parentName:"ol"},"The system will then calculate and the display user's score on the leaderboard."),(0,n.kt)("li",{parentName:"ol"},"User then navigates to the leaderboard page to compare scores with his/her friends.\n",(0,n.kt)("img",{src:a(784).Z,width:"930",height:"595"}))),(0,n.kt)("h2",{id:"use-case-6"},"Use case 6"),(0,n.kt)("p",null,"   Jack wants to add John as a friend on StudySync."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Jack will have to log in to his own account."),(0,n.kt)("li",{parentName:"ol"},"Then navigate to the socials section."),(0,n.kt)("li",{parentName:"ol"},"Jack searches for John."),(0,n.kt)("li",{parentName:"ol"},"Once the John's name popup, Jack recognizes his friends then selects follow."),(0,n.kt)("li",{parentName:"ol"},"John receives the follow notification and follows the Jack back."),(0,n.kt)("li",{parentName:"ol"},"John and Jack are now friends on StudySync as they have now follow each other.\n",(0,n.kt)("img",{src:a(5231).Z,width:"756",height:"566"}))),(0,n.kt)("h2",{id:"use-case-7"},"Use case 7"),(0,n.kt)("p",null,"   A user has been studying for 6 hours and wants to take a break but also wants to save the quiz's progress."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"User is taking a quiz but then realizes he/she wants to take a quick coffee break."),(0,n.kt)("li",{parentName:"ol"},'User clicks "Save&Exit" button in order for the quiz to be saved and quit.'),(0,n.kt)("li",{parentName:"ol"},"The system saves the user's progress."),(0,n.kt)("li",{parentName:"ol"},"After the break, the user goes to the mySets section and pick the quiz to resume."),(0,n.kt)("li",{parentName:"ol"},"User finishes the quiz and saves its data to the database.")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(3155).Z,width:"514",height:"568"})),(0,n.kt)("h2",{id:"use-case-8"},"Use case 8"),(0,n.kt)("p",null,"  A user finds out some flashcards need to be updated in order to improve accuracy."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"User logs in to StudySynce as usual."),(0,n.kt)("li",{parentName:"ol"},"Then user goes to MySets to view owned/shared flashcards."),(0,n.kt)("li",{parentName:"ol"},"User finds out which flashcard set need to be updated."),(0,n.kt)("li",{parentName:"ol"},"User selects flashcard set and makes changes to the flashcard definition and details."),(0,n.kt)("li",{parentName:"ol"},"User saves changes and then flashcards are updated and ready to be learned.\n",(0,n.kt)("img",{src:a(4071).Z,width:"854",height:"627"}))))}h.isMDXComponent=!0},5893:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/UseCase4-5703bdef50ac0caa4944a80512bcce21.png"},784:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/usecase5new-46d9924741f9c2fe99f6f817c3675b33.png"},5231:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/usecase6new-d31c7a0e6bc0ad0c718a03d4c777b2e2.png"},3155:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/usecase7new-830b487312ecf431a0cd120f19ef9de7.png"},4071:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/usecase8-75d8f81ac1f65bc3cbd287fc6405e87a.png"}}]);