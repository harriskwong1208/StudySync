"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3961],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var s=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=s.createContext({}),c=function(e){var t=s.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(a),p=n,m=u["".concat(l,".").concat(p)]||u[p]||h[p]||r;return a?s.createElement(m,i(i({ref:t},d),{},{components:a})):s.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<r;c++)i[c]=a[c];return s.createElement.apply(null,i)}return s.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5531:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=a(7462),n=(a(7294),a(3905));const r={sidebar_position:1},i=void 0,o={unversionedId:"system-architecture/design",id:"system-architecture/design",title:"design",description:"Client",source:"@site/docs/system-architecture/design.md",sourceDirName:"system-architecture",slug:"/system-architecture/design",permalink:"/project-studysync/docs/system-architecture/design",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-studysync/edit/main/documentation/docs/system-architecture/design.md",tags:[],version:"current",lastUpdatedBy:"Shen Liu",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"System Architecture",permalink:"/project-studysync/docs/category/system-architecture"},next:{title:"API Specification",permalink:"/project-studysync/docs/category/api-specification"}},l={},c=[{value:"Client",id:"client",level:2},{value:"Server",id:"server",level:2},{value:"Database",id:"database",level:2},{value:"Database Model",id:"database-model",level:4},{value:"Use case 1",id:"use-case-1",level:2},{value:"Use case 2",id:"use-case-2",level:2},{value:"Use case 3",id:"use-case-3",level:2},{value:"Use case 4",id:"use-case-4",level:2},{value:"Use case 5",id:"use-case-5",level:2},{value:"Use case 6",id:"use-case-6",level:2},{value:"Use case 7",id:"use-case-7",level:2},{value:"Use case 8",id:"use-case-8",level:2}],d={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,s.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"client"},"Client"),(0,n.kt)("p",null,"The StudySync web interface offers a user-centric dashboard that centralizes learning tools, friend interactions, and personalized notifications. After logging in, users can access a suite of study tools, view and interact with friends' content, receive system and friend notifications, and manage their profile, all seamlessly interconnected for an efficient and engaging learning experience."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/Capstone-Projects-2023-Fall/project-studysync/assets/111998266/1c1f832c-66f8-4687-ac0b-89185ad4812d",alt:"stydysync2"})),(0,n.kt)("h2",{id:"server"},"Server"),(0,n.kt)("p",null,"StudySync is an easy-to-use learning platform where users can study, interact with friends, and manage their profiles. It\u2019s powered by Firebase from Google Cloud, ensuring everything runs smoothly and securely. Users can quickly access up-to-date study materials like flashcards and quizzes, and the platform can respond in real-time to keep users engaged. "),(0,n.kt)("p",null,"The server part of StudySync uses Firebase, and it acts like the spine of the platform, making sure everything talks to each other safely and quickly. we mainly look after sign-ins and managing data. When someone logs in, Firebase makes sure the login details are correct and keeps the user's session safe while they use the platform.From the user-friendly dashboard on the user's side, users can ask to see or change data, and the Firebase Database on the server side takes care of these requests. This lets users see and interact with their study materials and profiles instantly and consistently.The way Firebase services blend with the user side means users get a smooth, safe, and quick experience. They get a central place for learning tools and interactions, and they receive personalized notifications without hassle. This collaboration between the server and user side lets StudySync give a fun learning experience, focusing on easy interactions and safe access to learning materials."),(0,n.kt)("h2",{id:"database"},"Database"),(0,n.kt)("h4",{id:"database-model"},"Database Model"),(0,n.kt)("p",null,"StudySync will be using a Firebase NoSQL database to store all data. The database will be made up of the following collections: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"User"),": This collection stores everything related to a single user. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Notifications"),": Stores all the metadata related to a notification"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Event"),": Store metadata for each event"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FlashCard"),": Representation of an entire stack of flashcards. Made up of flashcard items"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FlashCardItem"),": A single flash card"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Quiz"),": A quiz object generated based on a flash card."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"EventType"),": This is a static list of different types of events. ")),(0,n.kt)("p",null,"For single properties on a user model such as email, password and name, we will just store it in the user the corresponding collection. For more complex properties such as notifications, followers and following, flashcards and events, we will store the ids of each corresponding field in the user collection and query the respective collection as needed. To be more specific, in the case of notifications, the actual data for notifications will be stored in the Notifications collections, anytime we need to query user notifications, we can do this easily by fetching all the notification ids for that user from the Users collection and then querying the Notifications collection using those ids. This same idea applies to fetching events for Notifications"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/Capstone-Projects-2023-Fall/project-studysync/assets/77356776/ba3896cb-671b-4a2f-aaa4-8e74e4f356e0",alt:"StudySync (5)"})),(0,n.kt)("h2",{id:"use-case-1"},"Use case 1"),(0,n.kt)("p",null,"A user forgets to review because of daily chores and uses StudySync to review before midterm is approaching."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"User login using Google api."),(0,n.kt)("li",{parentName:"ol"},"After logging into the account, the user finds the study outline."),(0,n.kt)("li",{parentName:"ol"},"Then he found the flash cards for his subject."),(0,n.kt)("li",{parentName:"ol"},"Next the user will proceed to flash Select Q&A mode."),(0,n.kt)("li",{parentName:"ol"},"Finally, the user completes the quiz and the correct answer is displayed."),(0,n.kt)("li",{parentName:"ol"},"The last wrong questions will be collected and then these questions will be saved in a new topic.\n",(0,n.kt)("img",{parentName:"li",src:"https://github.com/Capstone-Projects-2023-Fall/project-studysync/blob/53128b973c9cfe249e60377e8d03e7ed18598a09/documentation/docs/requirements/static/user%20case1.drawio.png",alt:"image"}))),(0,n.kt)("h2",{id:"use-case-2"},"Use case 2"),(0,n.kt)("p",null,"A user is about to take a naturalization test but doesn't have time to study for it due to work, so he needs to practice for the test using StudySyne."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Users open the website and enter their account password to log in."),(0,n.kt)("li",{parentName:"ol"},"Then since there is nothing on StudySyne that he needs to learn, he needs to enter the questions himself."),(0,n.kt)("li",{parentName:"ol"},"He then adds the naturalization test questions he has studied and uploads them to StudySyne."),(0,n.kt)("li",{parentName:"ol"},"After completing the upload of the question bank he chose flash card mode for memory training."),(0,n.kt)("li",{parentName:"ol"},"When the flash card comes out there are three options, recognize, don't recognize."),(0,n.kt)("li",{parentName:"ol"},"Finally, the questions you recognize will be skipped in the next exercise, and the questions you don't recognize will show the answer and then continue to appear in the next exercise.\n",(0,n.kt)("img",{parentName:"li",src:"https://github.com/Capstone-Projects-2023-Fall/project-studysync/blob/53128b973c9cfe249e60377e8d03e7ed18598a09/documentation/docs/requirements/static/user%20case2.drawio.png",alt:"image"}))),(0,n.kt)("h2",{id:"use-case-3"},"Use case 3"),(0,n.kt)("p",null,"  A user was recommended a learning program by his classmates that said he could have a quiz competition."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"He opened the website his classmate gave him and created the account password."),(0,n.kt)("li",{parentName:"ol"},"Then he went to the friends list and chose to add a friend."),(0,n.kt)("li",{parentName:"ol"},"After adding his friends he received an invitation to a quiz contest sent to him by his classmate."),(0,n.kt)("li",{parentName:"ol"},"After completing the quiz the scores and rankings of the inviter as well as all invited people appeared.\n",(0,n.kt)("img",{parentName:"li",src:"https://github.com/Capstone-Projects-2023-Fall/project-studysync/assets/111998266/2bccda65-2a0a-4397-9911-85f3f90a95cc",alt:"image"}))),(0,n.kt)("h2",{id:"use-case-4"},"Use case 4"),(0,n.kt)("p",null,"  A user wants to study the subject he wants but, he doesn't find the flash card for the subject he wants in StudySync."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"He opened StudySync and automatically logged in"),(0,n.kt)("li",{parentName:"ol"},"After he didn't find a flash card for the subject he wanted to study he turned on the AI topic generation function"),(0,n.kt)("li",{parentName:"ol"},"After pressing AI Flash Card Generator you will first see all the flash cards and you can filter them."),(0,n.kt)("li",{parentName:"ol"},"After completing the screening you can study, then while flash card studying you are not satisfied with a particular topic then choose to be dissatisfied with that topic."),(0,n.kt)("li",{parentName:"ol"},"The question will then be deleted from the pool.")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(5893).Z,width:"638",height:"649"})),(0,n.kt)("h2",{id:"use-case-5"},"Use case 5"),(0,n.kt)("p",null,"   A user wants to take a quiz created by themselves or a friend."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"User logs in to StudySync."),(0,n.kt)("li",{parentName:"ol"},'User then navigate to the "Quiz" section.'),(0,n.kt)("li",{parentName:"ol"},'At the "Quiz" section, user has a wide range of quizzes either created by themselves or friends.'),(0,n.kt)("li",{parentName:"ol"},"Then the user completes the quiz and submits their answers."),(0,n.kt)("li",{parentName:"ol"},"The system will then calculate and the display user's score on the leaderboard.\n",(0,n.kt)("img",{src:a(3124).Z,width:"697",height:"653"}))),(0,n.kt)("h2",{id:"use-case-6"},"Use case 6"),(0,n.kt)("p",null,"   A user wants to add friends on StudySync."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"User will have to log in to their own account."),(0,n.kt)("li",{parentName:"ol"},'Then navigate to the "Add Friend" section.'),(0,n.kt)("li",{parentName:"ol"},"User enters the friend's email or username."),(0,n.kt)("li",{parentName:"ol"},'Once the friend\'s name popup, user recognizes their friends then clicks "add as friend".'),(0,n.kt)("li",{parentName:"ol"},"The friend receives the friend request and is able to accept or reject it.\n",(0,n.kt)("img",{src:a(1674).Z,width:"776",height:"648"}))),(0,n.kt)("h2",{id:"use-case-7"},"Use case 7"),(0,n.kt)("p",null,"   A user has been studying for 6 hours and wants to take a break but also wants to save the quiz's progress."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"User is taking a quiz but then realizes he/she wants to take a quick coffee break."),(0,n.kt)("li",{parentName:"ol"},'User clicks "Save&Exit" button in order for the quiz to be saved and quit.'),(0,n.kt)("li",{parentName:"ol"},"The system saves the user's progress."),(0,n.kt)("li",{parentName:"ol"},'After the break, the user logs in and goes to the "Quiz" section to resume the paused quiz.'),(0,n.kt)("li",{parentName:"ol"},"User chooses to resume the quiz from where they left off.\n",(0,n.kt)("img",{parentName:"li",src:"https://github.com/Capstone-Projects-2023-Fall/project-studysync/assets/70645481/6c3ec83d-a6e2-4428-bc51-369ef8718b0f",alt:"mermaid-diagram-2023-09-30-214956"}))),(0,n.kt)("h2",{id:"use-case-8"},"Use case 8"),(0,n.kt)("p",null,"  A user finds out some flashcards need to be updated in order to improve accuracy."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"User logs in to StudySynce as usual."),(0,n.kt)("li",{parentName:"ol"},"Then user has to go to their created flashcards."),(0,n.kt)("li",{parentName:"ol"},"User finds out which flashcards need to be updated."),(0,n.kt)("li",{parentName:"ol"},"User makes some changes to the flashcard definition and details."),(0,n.kt)("li",{parentName:"ol"},"User saves changes and then flashcards are updated and ready to be learned.\n",(0,n.kt)("img",{parentName:"li",src:"https://github.com/Capstone-Projects-2023-Fall/project-studysync/assets/70645481/6f6a7cf5-f333-45fe-aa63-a8db1ad3da41",alt:"mermaid-diagram-2023-09-30-214822"}))))}u.isMDXComponent=!0},5893:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/UseCase4-5703bdef50ac0caa4944a80512bcce21.png"},3124:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/UseCase5-0531c13d5686b54bb13287321ed51858.png"},1674:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/UseCase6-47bb1e0775270bfe5af1d7a3d0ab82b5.png"}}]);