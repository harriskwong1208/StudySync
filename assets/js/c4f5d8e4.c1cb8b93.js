"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[4195],{9337:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294);function r(e){function t(){return t=e.id?e.id:(t=(t=(t=e.caption).replaceAll("."," ")).replaceAll(" ","-")).toLowerCase()}return n.createElement("figure",{id:t(),align:e.align?e.align:"center",style:e.style?e.style:{}},e.children,e.src?n.createElement("img",{src:e.src,alt:e.alt}):n.createElement(n.Fragment,null),n.createElement("figcaption",{align:e.align?e.align:"center",style:{fontWeight:"bold"}},e.caption),n.createElement("figcaption",{align:e.align?e.align:"center",style:{}},e.subcaption))}},8140:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var n=a(7294),r=a(6010),s=a(9960),i=a(2263),l=a(782),o=a(7462),c=a(3905);const d={toc:[{value:"Project Overview",id:"project-overview",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Project Abstract",id:"project-abstract",level:2},{value:"Title",id:"title",level:3},{value:"Key Features:",id:"key-features",level:3},{value:"High Level Requirement",id:"high-level-requirement",level:2},{value:"Conceptual Design",id:"conceptual-design",level:2},{value:"Architecture:",id:"architecture",level:3},{value:"Background",id:"background",level:2},{value:"Required Resources",id:"required-resources",level:2},{value:"Collaborators",id:"collaborators",level:2}]};function u(e){let{components:t,...a}=e;return(0,c.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://classroom.github.com/open-in-codespaces?assignment_repo_id=11817743"},(0,c.kt)("img",{parentName:"a",src:"https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg",alt:"Open in Codespaces"}))),(0,c.kt)("div",{align:"center"},(0,c.kt)("h1",{id:"studysync"},"StudySync"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://temple-cis-projects-in-cs.atlassian.net/jira/software/c/projects/DT/issues"},(0,c.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Report%20Issues-Jira-0052CC?style=flat&logo=jira-software",alt:"Report Issue on Jira"})),"\n",(0,c.kt)("a",{parentName:"p",href:"https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml"},(0,c.kt)("img",{parentName:"a",src:"https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml/badge.svg",alt:"Deploy Docs"})),"\n",(0,c.kt)("a",{parentName:"p",href:"https://applebaumian.github.io/tu-cis-4398-docs-template/"},(0,c.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-Documentation%20Website-brightgreen",alt:"Documentation Website Link"})))),(0,c.kt)("h2",{id:"project-overview"},"Project Overview"),(0,c.kt)("p",null,"StudySync is a web-based studying tool that allows users to add flashcards with terms and definitions to study from. The added flashcards can be customized by upvoting/downvoting cards , adding comments to a friend\u2019s study set, and organizing cards\u2019 priority levels, upcoming dates and difficulty levels. Users can also add friends and create flashcards and quizzes/tests for each other. They can also compete based on the score of the tests they made for each other. This project is a full stack application that requires the use of JavaScript, HTML, CSS, Nodejs, ExpressJs, Firebase and ReactJs. ExpressJs and NodeJs are used to create a server and API that ReactJs can use to provide users an interface to interact with. Users can login and store all of their information into the Firebase database. This application is similar to quizlet in helping students use cards to learn new terms and definitions, however, StudySync will be more interactive as it has more customization options and allows students to add friends and help each other learn."),(0,c.kt)("h2",{id:"keywords"},"Keywords"),(0,c.kt)("p",null,"Quizlet, HTML, CSS, JS, ReactJS, Firebase, NodeJs"),(0,c.kt)("h2",{id:"project-abstract"},"Project Abstract"),(0,c.kt)("h3",{id:"title"},"Title"),(0,c.kt)("p",null,"StudySync - A Comprehensive Web-based Study Tool. To design an interactive, web-based studying platform where users can customize flashcards for effective learning, add friends, and challenge each other with quizzes."),(0,c.kt)("h3",{id:"key-features"},"Key Features:"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("strong",{parentName:"li"},"Flashcard Creation & Customization:")," Users can add terms and definitions to flashcards. These cards can be further customized based on priority, difficulty, and upcoming study dates."),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("strong",{parentName:"li"},"Interactivity & Collaboration:")," Users can upvote/downvote cards, add comments, and organize their study materials."),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("strong",{parentName:"li"},"Social Learning:")," The platform allows users to add friends, create quizzes/tests for each other, and even compete based on test scores."),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("strong",{parentName:"li"},"User Account Management:")," Secure login capabilities with personal data stored in a Firebase database.")),(0,c.kt)("h2",{id:"high-level-requirement"},"High Level Requirement"),(0,c.kt)("p",null,"StudySync is a comprehensive, user-centric digital study tool designed for enhanced interactive learning. Users can craft, customize, and categorize flashcards for efficient knowledge retention, bolstered by features like prioritization, comments, and upvote/downvote mechanisms. Moreover, it fosters a collaborative learning ecosystem where users can connect with peers, exchange study materials, challenge each other through quizzes, and track their collaborative progress. Embedded with a user-friendly interface powered by ReactJs and backed by a robust Firebase database, StudySync offers a secure, seamless experience, marrying the best of individualized study and social learning."),(0,c.kt)("h2",{id:"conceptual-design"},"Conceptual Design"),(0,c.kt)("h3",{id:"architecture"},"Architecture:"),(0,c.kt)("p",null,"The application is designed as a full-stack web application."),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("strong",{parentName:"li"},"Frontend:")," Developed using ReactJs, offering an interactive interface for users."),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("strong",{parentName:"li"},"Backend:")," Built using NodeJs and ExpressJs, responsible for server operations and API functionalities."),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("strong",{parentName:"li"},"Database:")," Firebase is chosen as the database system to store user information, flashcards, comments, and quiz scores."),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("strong",{parentName:"li"},"Integration:")," The backend will serve the frontend through API endpoints, with data interchange in JSON format.")),(0,c.kt)("h2",{id:"background"},"Background"),(0,c.kt)("p",null,"The idea of StudySync is derived from platforms like Quizlet, which assist students in using cards to learn new terms and definitions.Unlike traditional study tools, StudySync introduces a gamified and collaborative approach to learning. The system offers a plethora of customization options, including the ability to upvote/downvote flashcards and organize them based on various parameters. Additionally, the social aspect of adding friends and creating shared learning experiences stands out."),(0,c.kt)("h2",{id:"required-resources"},"Required Resources"),(0,c.kt)("p",null,"To successfully develop StudySync, we'll need a thorough understanding of ReactJS, NodeJS, ExpressJS, and Firebase. Hardware-wise, potent development computers and a robust server (either on-premise or cloud-based) are crucial. On the software front, essential tools include development frameworks for React, Node, and Firebase, an IDE like Visual Studio Code, version control via GitHub, and testing tools like Jest and Postman. "),(0,c.kt)("h2",{id:"collaborators"},"Collaborators"),(0,c.kt)("table",null,(0,c.kt)("tr",null,(0,c.kt)("td",{align:"center"},(0,c.kt)("a",{href:"https://github.com/ApplebaumIan"},(0,c.kt)("img",{src:"https://avatars.githubusercontent.com/u/9451941?v=4",width:"100;",alt:"ApplebaumIan"}),(0,c.kt)("br",null),(0,c.kt)("sub",null,(0,c.kt)("b",null,"Ian Tyler Applebaum")))),(0,c.kt)("td",{align:"center"},(0,c.kt)("a",{href:"https://github.com/tuh18904temple"},(0,c.kt)("img",{src:"https://avatars.githubusercontent.com/u/111998266?v=4",width:"100;",alt:"leighflagg"}),(0,c.kt)("br",null),(0,c.kt)("sub",null,(0,c.kt)("b",null,"Shen Liu")))),(0,c.kt)("td",{align:"center"},(0,c.kt)("a",{href:"https://github.com/tuo85214temple"},(0,c.kt)("img",{src:"https://avatars.githubusercontent.com/u/123430237?s=400&u=8a0c706c017ba40d3d13690851efac759017bfd6&v=4",width:"100;",alt:"leighflagg"}),(0,c.kt)("br",null),(0,c.kt)("sub",null,(0,c.kt)("b",null,"Kai Guo")))),(0,c.kt)("td",{align:"center"},(0,c.kt)("a",{href:"https://[github.com//mingjiew522)"},(0,c.kt)("img",{src:"https://avatars.githubusercontent.com/u/112578002?v=4",width:"100;",alt:"leighflagg"}),(0,c.kt)("br",null),(0,c.kt)("sub",null,(0,c.kt)("b",null,"Mingjie Wu")))),(0,c.kt)("td",{align:"center"},(0,c.kt)("a",{href:"https://github.com/harriskwong1208"},(0,c.kt)("img",{src:"https://avatars.githubusercontent.com/u/123189023?v=4",width:"100;",alt:"leighflagg"}),(0,c.kt)("br",null),(0,c.kt)("sub",null,(0,c.kt)("b",null,"Harris Kwong")))),(0,c.kt)("td",{align:"center"},(0,c.kt)("a",{href:"https://github.com/tuk74678"},(0,c.kt)("img",{src:"https://avatars.githubusercontent.com/u/70645481?v=4",width:"100;",alt:"leighflagg"}),(0,c.kt)("br",null),(0,c.kt)("sub",null,(0,c.kt)("b",null,"Leapheng Keam")))),(0,c.kt)("td",{align:"center"},(0,c.kt)("a",{href:"https://github.com/atoaidoocr7"},(0,c.kt)("img",{src:"https://avatars.githubusercontent.com/u/77356776?v=4",width:"100;",alt:"atoaidoo"}),(0,c.kt)("br",null),(0,c.kt)("sub",null,(0,c.kt)("b",null,"Ato Aidoo")))))))}function h(){return n.createElement("div",{className:"container",style:{marginTop:"50px",marginBottom:"100px"}},n.createElement(u,null))}u.isMDXComponent=!0;const m="heroBanner_qdFl",g="buttons_AeoN";var p=a(6706);function b(){const{siteConfig:e}=(0,i.Z)();return n.createElement("header",{className:(0,r.Z)("hero hero--primary",m)},n.createElement("div",{className:"container"},n.createElement("h1",{className:"hero__title"},e.title),n.createElement("p",{className:"hero__subtitle"},e.tagline),n.createElement("div",{className:g},n.createElement(s.Z,{className:"button button--secondary button--lg",to:"/tutorial/intro"},"Docusaurus Tutorial - 5min \u23f1\ufe0f"))))}function k(){const{siteConfig:e}=(0,i.Z)();return n.createElement(l.Z,{title:`Hello from ${e.title}`,description:"Description will go into a meta tag in <head />"},n.createElement(b,null),n.createElement("main",null,n.createElement(p.Z,null,n.createElement(h,null))))}},6706:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(4912);function s(e){return n.createElement(n.Fragment,null,n.createElement(r.Z,e))}},6922:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(9337),s=a(9676);const i={React:n,...n,Figure:r.Z,dinosaur:s.Z}},9676:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAT3UlEQVR42u1dCVQVV5pWXNt2N0czykl33KImZ7IgKgqIghq3KCDK+qowCek2c2K0Mx3idBxakzYxJnZiq3Gf6Bg7UdN2R51MxnTSia3gew9Rwccm7oqiiIK4sPxTt1hEHo9XvPVW1fed852Dr+67UNb/1f3/+9/731atAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8i2CxGjDUJXzMGmcSZnmoHAF7B6GMJvYPNwq5gk1AmMS/YJMbaahtkNsRLbeghmoU4d7cDAO+NCEbhQCMjrZbe5q81bhdyVOwuXbtqZdDSZ+yau9oBgNcgGeIvmzDQJkUy1ix8ZKMtsWvuagcAXsNYs/iyLSNlIgk2GebLQjKJQ6R/32+mbcWYI8KTrm6HJwR4170yCV80Y6T1I4kklH122lFNG9e2wxMC3Ao/U1KnQLPgF2SK/xeri5TiIxlikX1DBXVANpoXSy/DzGCjYfdYs2FRiFkcxWxEu/GF0RAm3fT1Bv8JJyV+LLlV08ccnNuFCQeGAdrheWkkXxaSGueruZFDurlrzfn4QSbDGRgAqJD3JK4NMcU8oo3RIz1hOB4q6AZeCzKK0aoXCIs58DBBt9Esfip5Ke3UPkN1Eg8TdB8N+5grr+JRxPAJHiLoTgaZhf97MiuqvVqTgNPxEEEPcK0qBTIyNa6rnWw1CLooJjHMUZc6KMWnNs9xDg8Q9ACLQtMMvbhfeFi7tuoLZMhBz1NczaUw2H4OFizhAYFe5l0uM+61m53wgMAWM+C7aBr425Ey2c8umPpdxmO+oxQPWz8cvnOmTGf7Gf1DDHXs25lYxMrIfmafOdnvOe4WONZsk4XhaD7nkJpAPQN96w2a/cw+c7S/QYsC6vuq46D/CHD+7zQaRvDmYsXVbG6CEWmZQ5YGWRk0+8zR/phb1bg/9pkLgvVk/twso+EViETbfPw1PyuDHrDQ36n4o6GL1eHRn7skDhlrEnZyuvbKMN/TIglKM9AzmyfLbzL2sBjZz89sniJfg2G7Nvbwad+m3qB9OrQh/z0RTschzK1yXZAu8zi/CxQ9NJL4fT6d+kwdQG27drB6q9WxXbcO1GfaAPL78wswcBfx6Y2T6ZHxv5DJfuY1acj5Kl55JHHPtOCBaOozZQC18mltUxhWlNoyobjwDQVyng/hVhyBaYbBrEKhW0aNL2Y85LO2lB37daHhX86AAemAPC4z6R5sEt9j6nWXONr8vJ3D4qhj287tIRIIxMP7PmrKd151p1vV3MjRtmt7eiT0F+QbN4z6xQ6T/eO2XdrbbP8z3y5wtyAQT+VAxAh336wcczQVhPfsKM+ANJWsYp+xRFS7Hh2b/C6LSWBIEIgnsuh73T1b1VRA3ql/dxq5d5bd74/4OlJu21TgjtktCMT9uwbdFJDXjx5TBzQ5cigRR71I/hZJ7bpbTwf3mT4QxgSBuHtbrSHcnUlAlstwxXqdgcmjmsyTIJkIgag2SGcZ8qYCckcWyAUdTpBnsBr398yWKTAoCESd07xD3rFeHMdmqxztj81uNe5v6B+CYVAQiAeD9qPiIOkP/NIVN9l//nArg/ZNeNLh/nzjn7Tqr//rw2FQEIg6M+lN7RcY/LvR3PQHupdh6S9R+LH5ZMh8i17NfoeS81bSO6fX0cfn/ps2X/wL7bzyv/TNtYP0z5KjdLw0hwrKL1DR/Rt0r+q+Plys0d/HyMtDGib4nNlx5ur+QPcZuLPQTSa9bjk0oyuM2dX9adm4Zx57jeIzk+lXliX0Ru4KSjm1hlac/S/69MKXtP3yXvrr1b/Td8WplHbzOGWV5dPZO5fo+v0Slxi4ZgTiiUw66BoD/32BPQO/zI2Ba0cgbs6kg9aMPfFbWn5mM/258H80a+CaEYi7M+ngA7JR4ERpHgFqEogbM+lgDSelv0LfFx+B1SNIBxtzWsarlH27ABavZoF4YsOUHhliEuX4AlCOwsJC2rVrF7+JwjHGuU8Em4X9MHDn+afzOzRtzGVlZbR69WqKjY2lqKgoev/996m4uNihvqqrqyklJYU6dKhf3Kq/Pel6izuKK246bYQXLlygvXv30ldffUWZmZlO9cX6CAwMpI4dO1Lbtm3pueeeo61btzrUV1ZWFj3++ONWKxseffRRMpvNLe7vzTffrClF5ONDEydOhIuldb53ZqNTxpyfn08RERFWBsiM2mQytbi/+fPn29zCnJSU1KK+ioqKyNe3poTpU089RRs3bqTt27dTQEBAvUiuXr2quL8ff/xRFgYT7e7duxGk64E/FBsdFsfhw4epR48eNTsvO3WioKAgmjRpEvXu3Vv+rHPnzvTTTz8p7u/dd9+tqXwouS/Lly+nS5cuUUlJCa1fv17ui11j7pFSTJs2Tf4O+7tu3bpV//ndu3fr3v40Y8YMRX1VVFTQkCFD5O8sW7YMmXS98MLdQofEYbFYqFu3brLBsBGEBa11KC0tpcTERPkaa8NGGXs4ePCg/HZu06YN7du3z+r6/v3769/e6enpdvvbs2dPTeHrnj1l968xLl68SN2712yR/vbbb+3299lnn8ltn3jiCbp37x4y6XphedWdFouDBbiDBw+WDWb27NlUWVlp1aaqqooiIyPlNsOHD3/IqBrj9u3bNGjQILnt4sWLbbZbuHCh3Mbf37/J31kH9rvq+mPBuS2w0Yi18fPzk4NvW2C/iwmDtd22bRsy6RAINWvM48aNq48z2L9tgblH/fv3l9suWLDAZrt58+bJbZ5++ulmhcRGpscee8yu4a9YsUJuM2zYMNk1soXy8nLq16+f3Hbnzp0227EJAtZm4MCBVv0hkw4XS8aNGzdkV4S9bZmxMMM6f/683e+lpaVR+/Y1W5A//PBDq+vr1q2Tr7E2GRkZil2nrl27Um5ubpOTBuwaa/PNN9/Y7a/u97MRgsUmjcE+Y8JgbbZs2YJMut6oZGnJ6NGjHz5bQzKYggLlWXf2BmbxA/suC+LZbNKOHTsoLi6OWrduLXPz5s2K+2P5DNYXC5rz8h6sGbt8+bI8qrFrrI3S4JuNNOw7ycnJVtfffvvtZkcjTPNqnMtOb7BrRGPGjJFnlpiRfPDBB826VbbABNGrVy/rii/t2tGqVata7OY9++yz8ve7dOkiC41NAdfNng0dOlR2x5TCaDTKfwf77tKlS2UhsJiEuXFs0oCJ+9ChQ+pYauKOPel65sT0JJckCpXmJVhgzLLZM2fOpEWLFj00ArR0oqCp/AuLj9hI0lIwkbKRrG7mqy42YVyyZIl61mJhqYnruercdtUuI2HTzZs2baK1a9fSkSPOrURm8U1droOxb9++tGHDBixWxGJFkVJLjmEFYoMcCYuxmpsBQ5Cuu+Xu8+hk2SmoQ63L3ZFJ90w8cuD6YVi9KgWCTLrHuDB3uVwep5qqoQC1CASZdM8z+sQb9P6ZTbSjcD+KNnAvEGTSUfYHAkGQDoGhcBymeUGUHkUmHdS6wG5VlmFPOgjq/gAdEMQRbCCoZYEgkw5CIMikgxAIMukgBIJMOgiBIEgHIRBM84KgegSCTDoIgSCTzvcWXbNAv7bE0/oL0fSPG1F0+k4k3aoMp4rqmUSkL8LFAus563gCbb88h4ruR+hOCKoQCIJ07/CFDAP9rWg23a+GILgVCDLp3uGSghi6WREOMXAvEGTSPcrxUpzxtTRqQAQqEQgCck9WNzFQasksCEBVAkEm3WMjB8SBIB20QbhVmOYFbXBpQazLDYjlR25XhetGIJOyXuw5JntuF2TSNVd61EAlLpytqpa4sjCWJmSLMtdcidG2QKhV67CcxHVh2WJVLVcik65zjmVZ9QyRxmcKFHpSJMkoaGqOSHGnDPTGuXj53w1pLIvSnECk+yoPzRZPh2Un/r3x/YZZEifBxdLrcpOMB6JQyt3Fc7QokOb4OoJ0vdEs0LgTLRNGHQ/cnE07JZEcLo2SXTCtC2RCdmJ8aI64MNSSOI25YMik64COiqMxPy6M0cMI0oDCGmTSdeBWuUIcYbWBe6kGZrdacM/VIafF7sikazggb2nMYU8gJZURehJIVUhO0iPIpGt29HCdOBj/qDMXS3ohfIogXctLUDJd516xaeCvb8yhMv24WGekQP2VsFNJ3TDNq1G60r2qY4IkFLWLpIX3fMojIkEm3QsV0LMFlwuEcfS/P0N+ft29ypdf/qWnBEJhFiEJmXQIRDH7RQ2uP5fcW+zbt6PHBDIhJ/EluFhwsRRxzsl4OmgeTyZTiFdZXDzVUwLJd6uLhSBdO0H63huzdRWkM9fKreJAJl07SULGjy7H6iuTbhHXI5Ou8URhGBKFHCcKEZB7fxQ5iqUm/C41QSadk8WKrhHJJ4X6crFCLeKfkEnXiavl7HL31LJZutgPUrfcPSxXmIoNU3rcMGURsGGKpw1TyKTzKZTxmWJtnkT6OSOBxhyYRX6fPW9lML0C+3k9KdgUR47s4dSWW4kF3Gy5RSbdtXTUMEaM6NG84bVuRUNSAiThSCNNlkCDk/25FAfjqFE9XVO0IVtcW1uwoTLMInyEsj86FohSllaGU7mOyv5MPR7bIyRrXmcUjoNAQFR3h0BAVHeHQEBUdwchEFR3ByEQVHdHkA6BQCCY5oVAIBBk0tUrEH//Htwm/jyZSedWIMikc55JVxFdkkmHiwWBgAjSIRAQmXQQAkEmHYRAkEkHeRDIP0ujaOG5eJqWK8j8jfQzOyQHAkEmXfcC2XA12uaOuk1F0RAIgnRtC4Qd4XyifBZZ7kRaHefMRg5722wbjySsD9YX61MLx0OH5cwNnJwX1xXTvDoTyF3JeD8pjKHncx4Y+xTp51VXYuRrrM3CJk6ybUx22u2D/mLlPuquTc4RavqrVv2e9LthOcKqgPNRP0MmXQcCqZAMdsFZ28b/unTNf1QvGpceZ1cg48xx5NPOh4Z/PsVmG79tz1Prtj5q3ZPekD/4mZLaIZOu9dpXx+1XKBl3XFlFk9BMAw1+a4Tddo8Zhqkyk95EQbz5cLG0Xsk9S3TLUQfN8ddnErRS9seMIF3rZ4FYPC+QF3IFrQjkFjLpOAvE5UwsMGhFIBZk0rV+FsgJweMC+Vilp95a34uwBpl0rdffNXtWIKzS+9Hbs2hlYSwZThnkqWA2onx+LZr7KeDGFdxDsw3jwnIS18mnSWWLd9iIEmpJfMvtU8DIpHtwBMny/Ahii/8mBe88JxRb8BJIc3tCEUG6Nt0re/zgcozqBVLrfm3GNK+aC1Ef408cjBM5Po2qhfdS6dZTppBJd2/cEWoRuRQIY8/RfdWQSbfP3LlhSoPuxSGpcb7IpMO1UsIe/n1UkUm3OxrmCsF2jTs09aU+0kO5zQwcLhYHTBe5Fgdb1HirMlwLLtbdSVkv9lSS01ha93CCzMpP4UGQzve5g+7iHzk+z7CF97JWadIvr8EDqmJZcmTSvUSzd5aWKOX8swn1y+tVLpCD001JnezHHkdE/yYe1B17IkEm3U3BeTq/o8faK9Hy0nvVn3JrET5SvAxeeii/sfGwqqSY5DVk0j3sXh3jd/Rgm7V43+Ou8F7uSyyT+P1EizjdnkC+sDPk7x+TPrcvMukemr3K5DtA532PuyP3EZojvtvc9G6mggd3LcgoLAg49PD6FQTp7li5K6hGIE3tcVejQGSRWBKn2RpBLrXgAbK2vws0zu2PaV7t7P1whnV73NUuEHZstC2B3HFwtuVIkEn8cKxRiJFGkn8NyZgbGGw07IaROzmCZKtLIGyPu6oz6fY2VkkP5R4MEwJxlCGmOG4y6ferw525l5u2BHIdhsmRQOBiOUy2gNLhGCRb/M6ZIB3U8PZaZ5haNosbgRTcjXT8XnKFqbZGkK9gmDxtjlKPOLZwNs37j1uzHbwXYWlzOwMXwTCRKFSaKJyeK8huFU8jh5K6xNaJQqGUuVU2R476aVqzOAqGiaUmSnjmXiTXy0xePZOgLN7ISxymfL06pfhID+YcjJMTgXAah7xymu9CclfuR8jFJhTcy1EHSvgYlsE41VVq1NPccX0O1wJhFVcU3UuOmNzyfeWpcb7Ih/C1YYqnfAirsnijkt8l7iz/EZ1vUJQMnJif0NvRQnBrYZw8bZriRyDbrvE9euwpnqOs1E+OsNjhogsBh17sKT2YIhgnLxunRC7WZc3OF6ic4w1SN6WRLTJP0ehxOSRrXmfn6lwZxWgYJ8r+NKywmMbhdG5DLrkYp+ReqsbnGCa7qij1pzBOVDdh3HqN7zMN/3pjttLA/D9dVt8q6suoNmNNwl9gnPreRPV76c1czbE4WKJyUo6il8euFErxcWkROD9TUqdgk2EfjJOf3IgnRfLepViqrOY37mCbtKbmKhLH1pDvU9q6pVIi29SOmS19zWxNqC3MUM25W6Vg5KhmhRlaUavWHjgoxzAHs1scBe4ZclUOl4sjJt9AxrIoboVRUhmuNCA/F2ZJnOTRs0BC0wy9gk3iamyr5ad2lquCd1alZM2VGG6PNGBJQJbnCM+ze7+sSslKr56RPj7D0K92WQrWbnEiFLYsxZG1W2zEYMszeC0herUiQv77FGTIz7EDcRSVEPUYKMUnyGgYIY0qyVIAuVN6WMdrdyZiuYqXgvixRwX5KOjxmTWLHdnORLZchfnrEdLb9+XTCZKLEiv78GfvRXA0QsykmxXhlF8eST8UR9G6i9H0q7x4Cm10H2HZQoUkhmsSj0/IFnZOyBFeDctNGNoKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsI3/BxVeQNnL1kBuAAAAAElFTkSuQmCC"}}]);