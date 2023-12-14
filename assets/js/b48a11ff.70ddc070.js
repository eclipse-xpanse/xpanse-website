"use strict";(self.webpackChunkxpanse_website=self.webpackChunkxpanse_website||[]).push([[8920],{13157:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=a(85893),t=a(11151);const r={sidebar_position:6},i="Database",o={id:"database",title:"Database",description:"Development Environments",source:"@site/docs/database.md",sourceDirName:".",slug:"/database",permalink:"/xpanse/docs/database",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Cloud Provider Credentials",permalink:"/xpanse/docs/cloud-provider-credentials"},next:{title:"Plugins",permalink:"/xpanse/docs/plugins"}},l={},d=[{value:"Development Environments",id:"development-environments",level:2},{value:"Admin UI",id:"admin-ui",level:3},{value:"Cleanup",id:"cleanup",level:3},{value:"Production Environments",id:"production-environments",level:2},{value:"MySQL DB",id:"mysql-db",level:3},{value:"Versions Supported",id:"versions-supported",level:4},{value:"Default Configuration",id:"default-configuration",level:4},{value:"Overriding Default Configuration",id:"overriding-default-configuration",level:4},{value:"MySQL as a Docker Container",id:"mysql-as-a-docker-container",level:4},{value:"Starting new container",id:"starting-new-container",level:5},{value:"Database Objects Creation",id:"database-objects-creation",level:4}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"database",children:"Database"}),"\n",(0,s.jsx)(n.h2,{id:"development-environments",children:"Development Environments"}),"\n",(0,s.jsx)(n.p,{children:"For all development purposes, we use a file-based H2 database which is automatically created during the server startup."}),"\n",(0,s.jsx)(n.h3,{id:"admin-ui",children:"Admin UI"}),"\n",(0,s.jsxs)(n.p,{children:["The UI to the H2 DB can be accessed at ",(0,s.jsx)(n.code,{children:"http://localhost:8080/h2-console/login.jsp"}),".\nCredentials to this admin UI can be\nfound ",(0,s.jsx)(n.a,{href:"https://github.com/eclipse-xpanse/xpanse/blob/main/runtime/src/main/resources/application.properties#L10",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"cleanup",children:"Cleanup"}),"\n",(0,s.jsx)(n.p,{children:"Since it is a file-based database, the entries are not lost with reboot of the server."}),"\n",(0,s.jsx)(n.p,{children:"To clean up the database, the database files must be simply deleted and the server must be restarted for new fresh DB\nfiles to be recreated. Execute the below command on the root of the folder xpanse project."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"rm *.db\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Note:\nThe H2 database is purely for development and test purposes only and must be avoided for production installation of\nXpanse."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"production-environments",children:"Production Environments"}),"\n",(0,s.jsxs)(n.p,{children:["We plan to support multiple RDBMS flavors. By ",(0,s.jsx)(n.strong,{children:"support"}),", we mean configurations for the database added and also all\nfunctionalities tested."]}),"\n",(0,s.jsx)(n.h3,{id:"mysql-db",children:"MySQL DB"}),"\n",(0,s.jsxs)(n.p,{children:["At the moment, this is the only DB that is fully supported.\nTo use ",(0,s.jsx)(n.code,{children:"MySQL"})," as the database for Xpanse, it must be activated by starting the application with profile ",(0,s.jsx)(n.code,{children:"mysql"})," and\nby replacing the placeholders for database",(0,s.jsx)(n.code,{children:"username"})," and ",(0,s.jsx)(n.code,{children:"password"})," as below."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"java -jar xpanse-runtime-1.0.0-SNAPSHOT.jar \\\n          -Dspring.profiles.active=mysql \\\n          -Dspring.datasource.username=${database-username} \\\n          -Dspring.datasource.password=${database-password}\n"})}),"\n",(0,s.jsx)(n.h4,{id:"versions-supported",children:"Versions Supported"}),"\n",(0,s.jsxs)(n.p,{children:["Current supported version of MySQL is ",(0,s.jsx)(n.code,{children:"8.1.0"}),". This is the latest LTS release of MySQL."]}),"\n",(0,s.jsx)(n.h4,{id:"default-configuration",children:"Default Configuration"}),"\n",(0,s.jsx)(n.p,{children:"The above command will start the Xpanse runtime with the following default configurations:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"MySQL running on the same machine where Xpanse is running. (Same localhost)"}),"\n",(0,s.jsxs)(n.li,{children:["Database is listening on port ",(0,s.jsx)(n.code,{children:"3306"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Name of the database is ",(0,s.jsx)(n.code,{children:"xpanse"}),". This must be created on the DB server. It will ",(0,s.jsx)(n.strong,{children:"not"})," be automatically created."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The Default configuration file can be\nfound ",(0,s.jsx)(n.a,{href:"https://github.com/eclipse-xpanse/xpanse/blob/main/runtime/src/main/resources/application-mysql.properties#L6",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"overriding-default-configuration",children:"Overriding Default Configuration"}),"\n",(0,s.jsx)(n.p,{children:"We can override the above two default configurations by starting the application as below by replacing the placeholders\nwith actual values."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"java -jar xpanse-runtime-1.0.0-SNAPSHOT.jar \\\n          -Dspring.profiles.active=mysql \\\n          -Dspring.datasource.username=<replace-with-db-username> \\\n          -Dspring.datasource.password=<replace-with-db-password> \\\n          -D spring.datasource.url=jdbc:mysql://<replace-with-db-hostname>:<replace-with-db-port>/<replace-with-db-name>\n\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," It is safe to provide the database-related properties as environment variables rather than passing them\ndirectly in the command line.\nIn case of this,\nthe same property name must be set in UPPERCASE and underscore separated instead of dot for all variables."]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," Using this startup command, the database can run on any machine that is reachable from the Xpanse runtime\napplication."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"mysql-as-a-docker-container",children:"MySQL as a Docker Container"}),"\n",(0,s.jsxs)(n.p,{children:["MySQL offers official Docker images for running a database as a container.\nMore details can be found here on the official page of MySQL\nwebsite ",(0,s.jsx)(n.a,{href:"https://dev.mysql.com/doc/mysql-installation-excerpt/8.0/en/docker-mysql-getting-started.html",children:"here"})," and on\nDockerHub ",(0,s.jsx)(n.a,{href:"https://hub.docker.com/_/mysql/",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h5,{id:"starting-new-container",children:"Starting new container"}),"\n",(0,s.jsxs)(n.p,{children:["While starting the MySQL docker container for the first time, we can configure ",(0,s.jsx)(n.code,{children:"database-host"}),", ",(0,s.jsx)(n.code,{children:"database-port"})," and\n",(0,s.jsx)(n.code,{children:"database-name"})," as below and the same can be used in starting the Xpanse runtime using the command described\n",(0,s.jsx)(n.a,{href:"#overriding-default-configuration",children:"above"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker pull mysql:8.1.0\n"})}),"\n",(0,s.jsxs)(n.p,{children:["By starting the container with the below command, the database is started by automatically configuring the database with\nXpanse database name, database user and password. In addition to that, password for the DB ",(0,s.jsx)(n.code,{children:"root"})," user can also be\nupdated to the value of our choice."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker run --name ${container-name} \\\n            -e MYSQL_ROOT_PASSWORD=<replace-with-db-root-password> \\\n            -e MYSQL_DATABASE=<replace-with-db-name> \\\n            -e MYSQL_USER=<replace-with-db-user> \\\n            -e MYSQL_PASSWORD=<replace-with-db-password> \\\n            -p 3306:<replace-with-db-port> -d mysql:8.1.0\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," To avoid passing database related properties in command line, we can use the ",(0,s.jsx)(n.code,{children:" --env-file"})," option of the ",(0,s.jsx)(n.code,{children:" docker run"})," command to store all sensitive data."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"database-objects-creation",children:"Database Objects Creation"}),"\n",(0,s.jsx)(n.p,{children:"The application automatically creates all database objects such as tables needed by the application when it boots\nup and uses a database for the first time."})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>i});var s=a(67294);const t={},r=s.createContext(t);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);