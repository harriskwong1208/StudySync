"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[6654],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),g=i,m=u["".concat(l,".").concat(g)]||u[g]||p[g]||r;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:1},s="Activities for StudySync Project",o={unversionedId:"development-plan/activities",id:"development-plan/activities",title:"Activities for StudySync Project",description:"Requirements Gathering",source:"@site/docs/development-plan/activities.md",sourceDirName:"development-plan",slug:"/development-plan/activities",permalink:"/project-studysync/docs/development-plan/activities",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-studysync/edit/main/documentation/docs/development-plan/activities.md",tags:[],version:"current",lastUpdatedBy:"Shen Liu",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Software Development Plan",permalink:"/project-studysync/docs/category/software-development-plan"},next:{title:"Tasks",permalink:"/project-studysync/docs/development-plan/tasks"}},l={},c=[{value:"Requirements Gathering",id:"requirements-gathering",level:2},{value:"Top-Level Design",id:"top-level-design",level:2},{value:"Detailed Design",id:"detailed-design",level:2},{value:"Flashcard and Quiz Pages:",id:"flashcard-and-quiz-pages",level:3},{value:"Social Sharing and Progress Tracking:",id:"social-sharing-and-progress-tracking",level:3},{value:"User Authentication and Profile Management:",id:"user-authentication-and-profile-management",level:3},{value:"Scheduling and Study Planning:",id:"scheduling-and-study-planning",level:3},{value:"Backend and Database Integration:",id:"backend-and-database-integration",level:3},{value:"AI Integration for Content Generation:",id:"ai-integration-for-content-generation",level:3},{value:"Hosting and Deployment:",id:"hosting-and-deployment",level:3},{value:"Testing Strategies for Studysync Project",id:"testing-strategies-for-studysync-project",level:2},{value:"Unit Testing",id:"unit-testing",level:3},{value:"Integration Testing",id:"integration-testing",level:3},{value:"Acceptance Testing",id:"acceptance-testing",level:3},{value:"Continuous Integration and Deployment",id:"continuous-integration-and-deployment",level:3}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"activities-for-studysync-project"},"Activities for StudySync Project"),(0,i.kt)("h2",{id:"requirements-gathering"},"Requirements Gathering"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Research on React, Firebase, and AI integration will be required for effective development of the StudySync web application."),(0,i.kt)("li",{parentName:"ol"},"To understand how these technologies synergize, proof of concept prototypes will be created."),(0,i.kt)("li",{parentName:"ol"},"Gathering information about AI algorithms for generating flashcards and quizzes through ChatGPT API is essential."),(0,i.kt)("li",{parentName:"ol"},"Investigate different social features implemented in competing apps to enhance user engagement."),(0,i.kt)("li",{parentName:"ol"},"Explore hosting solutions: Firebase Hosting.")),(0,i.kt)("h2",{id:"top-level-design"},"Top-Level Design"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Develop a navigation system for accessing different features like flashcards, quizzes, social sharing, and user settings."),(0,i.kt)("li",{parentName:"ol"},"Implement AI-generated flashcards and quizzes, allowing users to learn and test themselves on various topics."),(0,i.kt)("li",{parentName:"ol"},"Set up user authentication and profile management using Firebase."),(0,i.kt)("li",{parentName:"ol"},"Enable social interaction features, allowing users to share flashcards and compare quiz scores."),(0,i.kt)("li",{parentName:"ol"},"Integrate scheduling tools for users to plan their study sessions effectively.")),(0,i.kt)("h2",{id:"detailed-design"},"Detailed Design"),(0,i.kt)("h3",{id:"flashcard-and-quiz-pages"},"Flashcard and Quiz Pages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Users can create, view, and interact with AI-generated or custom flashcards and quizzes."),(0,i.kt)("li",{parentName:"ul"},"Implement search and filter mechanisms for ease of access to specific topics.")),(0,i.kt)("h3",{id:"social-sharing-and-progress-tracking"},"Social Sharing and Progress Tracking:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Develop features for users to share flashcards and quiz results with peers."),(0,i.kt)("li",{parentName:"ul"},"Implement a leaderboard system to encourage competition and progress tracking.")),(0,i.kt)("h3",{id:"user-authentication-and-profile-management"},"User Authentication and Profile Management:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Implement secure login, registration, and profile management functionalities."),(0,i.kt)("li",{parentName:"ul"},"Enable users to customize their learning experience and manage account settings.")),(0,i.kt)("h3",{id:"scheduling-and-study-planning"},"Scheduling and Study Planning:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Integrate a calendar tool for users to schedule their study sessions and receive reminders.")),(0,i.kt)("h3",{id:"backend-and-database-integration"},"Backend and Database Integration:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Set up Firebase for backend services and data storage."),(0,i.kt)("li",{parentName:"ul"},"Create APIs for efficient communication between the frontend and the database.")),(0,i.kt)("h3",{id:"ai-integration-for-content-generation"},"AI Integration for Content Generation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Integrate ChatGPT API for generating educational content dynamically.")),(0,i.kt)("h3",{id:"hosting-and-deployment"},"Hosting and Deployment:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Choose firebase hosting as the solution.")),(0,i.kt)("h2",{id:"testing-strategies-for-studysync-project"},"Testing Strategies for Studysync Project"),(0,i.kt)("h3",{id:"unit-testing"},"Unit Testing"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"React Frontend"),": Unit tests will be written using Jest along with React Testing Library. These tests will focus on individual components' functionality and their interactions with the state."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Firebase Backend"),": For backend unit testing, we'll use Firebase's emulator suite and appropriate testing frameworks to simulate database interactions and API responses.")),(0,i.kt)("h3",{id:"integration-testing"},"Integration Testing"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We will use tools like Jest for integration testing to ensure that the React components and Firebase backend work together seamlessly, particularly focusing on data fetching, updating, and user authentication processes.")),(0,i.kt)("h3",{id:"acceptance-testing"},"Acceptance Testing"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"User Acceptance Testing (UAT) will be conducted with select user groups to gather feedback on the app\u2019s usability, AI-generated content quality, and overall user experience."),(0,i.kt)("li",{parentName:"ul"},"This phase will also include testing the social sharing features, leaderboard functionality, and the effectiveness of the study scheduling system.")),(0,i.kt)("h3",{id:"continuous-integration-and-deployment"},"Continuous Integration and Deployment"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We will set up CI/CD pipelines to automate testing and deployment processes. This will include running unit and integration tests on every code commit to ensure code quality and application stability.")))}u.isMDXComponent=!0}}]);