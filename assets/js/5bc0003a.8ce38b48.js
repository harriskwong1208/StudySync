"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[8794],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,y=d["".concat(c,".").concat(m)]||d[m]||p[m]||s;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9380:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const s={sidebar_position:2},i="System Block Diagram",o={unversionedId:"requirements/system-block-diagram",id:"requirements/system-block-diagram",title:"System Block Diagram",description:"image",source:"@site/docs/requirements/system-block-diagram.md",sourceDirName:"requirements",slug:"/requirements/system-block-diagram",permalink:"/project-studysync/docs/requirements/system-block-diagram",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-studysync/edit/main/documentation/docs/requirements/system-block-diagram.md",tags:[],version:"current",lastUpdatedBy:"mingjiew522",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"System Overview",permalink:"/project-studysync/docs/requirements/system-overview"},next:{title:"General Requirements",permalink:"/project-studysync/docs/requirements/general-requirements"}},c={},l=[],u={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"system-block-diagram"},"System Block Diagram"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/Capstone-Projects-2023-Fall/project-studysync/assets/112578002/fd4272b0-e601-4698-87c5-7e6eaaa6c9d6",alt:"image"})),(0,a.kt)("p",null,"Users start using StudySync by going to the website on a browser, entering an engaging space created with React Frontend. Here, they log in securely with Firebase Authentication, making sure their experience is safe. Once logged in, users can easily interact with their study materials, with the Frontend and Firebase Database working together to let users access and change their learning resources in real time. All of this happens smoothly and reliably on Google Cloud, giving users a dependable and unified learning platform. All these parts work together to create a secure, interactive learning experience, powered by advanced technology, making studying easier and more enjoyable for everyone."),(0,a.kt)("p",null,"Describing the User Journey"),(0,a.kt)("p",null,"User Interaction with Browser:\nUsers start their journey when they access the StudySync platform through a web browser.\nHere, they interact with the interface and access different features, facilitated by the Frontend designed using React."),(0,a.kt)("p",null,"Frontend and Authentication:\nWhen users need to log in or sign up, the Frontend interacts with Firebase Authentication.\nThis block verifies the user credentials and handles secure user sessions, allowing or denying access based on the verification."),(0,a.kt)("p",null,"Frontend and Database Interaction:\nOnce authenticated, users can create, modify, or interact with the study materials.\nThe Frontend fetches and sends data to and from the Firebase Database, ensuring users can retrieve and store their flashcards, quizzes, and other study materials."),(0,a.kt)("p",null,"Google Cloud Hosting:\nThe entire platform is hosted on Google Cloud through Firebase services.\nThis provides a robust and scalable environment, ensuring seamless access to the StudySync platform for all users, regardless of traffic load."),(0,a.kt)("p",null,"User Experience:\nUsers experience an interactive and user-friendly environment through the React-powered Frontend.\nThey can leverage the comprehensive features offered by StudySync, such as flashcard creation, quizzes, and social learning, with the assurance of secure and seamless interactions facilitated by Firebase services."))}d.isMDXComponent=!0}}]);