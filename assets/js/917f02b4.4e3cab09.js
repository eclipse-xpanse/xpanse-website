"use strict";(self.webpackChunkxpanse_website=self.webpackChunkxpanse_website||[]).push([[246],{8688:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"developer-setup","title":"Developer Setup","description":"This page explains the steps necessary to be set up on the developer machines to start development of xpanse.","source":"@site/docs/developer-setup.mdx","sourceDirName":".","slug":"/developer-setup","permalink":"/xpanse/docs/developer-setup","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"Database","permalink":"/xpanse/docs/database"},"next":{"title":"Modes","permalink":"/xpanse/docs/modes"}}');var a=t(4848),i=t(8453),o=t(7346);const l={sidebar_position:6},r="Developer Setup",d={},c=[{value:"Prerequisite tools",id:"prerequisite-tools",level:2},{value:"Setup and run xpanse project",id:"setup-and-run-xpanse-project",level:2},{value:"Dependent Components",id:"dependent-components",level:2},{value:"Master Docker Compose",id:"master-docker-compose",level:3},{value:"Individual Component Configuration",id:"individual-component-configuration",level:3},{value:"Database",id:"database",level:3},{value:"Deployer Tools Installation",id:"deployer-tools-installation",level:3},{value:"Auto Installation",id:"auto-installation",level:4},{value:"Using Docker Images",id:"using-docker-images",level:4},{value:"Manual Installation",id:"manual-installation",level:4},{value:"Terraform CLI Installation",id:"terraform-cli-installation",level:5},{value:"OpenTofu CLI Installation",id:"opentofu-cli-installation",level:5},{value:"Auth Layer Installation",id:"auth-layer-installation",level:3},{value:"No Auth Mode",id:"no-auth-mode",level:4},{value:"OAuth Mode",id:"oauth-mode",level:4},{value:"policy-man",id:"policy-man",level:3},{value:"Manual start",id:"manual-start",level:4},{value:"Docker Image",id:"docker-image",level:4},{value:"UI Module",id:"ui-module",level:3},{value:"Auth modes",id:"auth-modes",level:4}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"developer-setup",children:"Developer Setup"})}),"\n",(0,a.jsx)(n.p,{children:"This page explains the steps necessary to be set up on the developer machines to start development of xpanse."}),"\n",(0,a.jsx)(n.h2,{id:"prerequisite-tools",children:"Prerequisite tools"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Java 21 - OpenJDK or Eclipse Adoptium"}),"\n",(0,a.jsx)(n.li,{children:"GIT client"}),"\n",(0,a.jsx)(n.li,{children:"Maven for Java applications"}),"\n",(0,a.jsx)(n.li,{children:"Docker"}),"\n",(0,a.jsx)(n.li,{children:"Docker compose"}),"\n",(0,a.jsx)(n.li,{children:"NodeJS for UI module"}),"\n",(0,a.jsx)(n.li,{children:"NPM for UI module."}),"\n",(0,a.jsx)(n.li,{children:"Go SDK"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"setup-and-run-xpanse-project",children:"Setup and run xpanse project"}),"\n",(0,a.jsx)(n.p,{children:"To run the main xpanse application, the following steps must be executed."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Fork the ",(0,a.jsx)(o.A,{name:"xpanse project",url:"https://github.com/eclipse-xpanse/xpanse"}),"."]}),"\n",(0,a.jsx)(n.li,{children:"Clone the fork."}),"\n",(0,a.jsxs)(n.li,{children:["We can then either compile the project using maven and start the application from CLI or\njust execute the main class ",(0,a.jsx)(o.A,{name:"XpanseApplication.java",url:"https://github.com/eclipse-xpanse/xpanse/blob/main/runtime/src/main/java/org/eclipse/xpanse/runtime/XpanseApplication.java"})," from your preferred IDE."]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{title:"minimum required profiles",type:"info",children:(0,a.jsxs)(n.p,{children:["For developers, the minimum required profiles to be activated are ",(0,a.jsx)(n.strong,{children:"noauth"})," and ",(0,a.jsx)(n.strong,{children:"dev"}),"."]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"./mvnw clean install -DskipTests\njava -Dspring.profiles.active=noauth,dev -jar runtime/target/xpanse-runtime-*-SNAPSHOT.jar\n"})}),"\n",(0,a.jsx)(n.p,{children:"To confirm the server is started, you can try to access the swagger UI from your browser."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"http://localhost:8080/swagger-ui/index.html\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The runtime can be controlled by activating different spring profiles and configuration parameters.\nMore information about this can be found ",(0,a.jsx)(o.A,{name:"here",url:"./spring-profiles"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"dependent-components",children:"Dependent Components"}),"\n",(0,a.jsx)(n.p,{children:"For regular development activities, xpanse needs some predefined applications from its stack based on the use case.\nBut in most cases, the dependencies are kept as minimal as possible."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Component"}),(0,a.jsx)(n.th,{children:"Mandatory"}),(0,a.jsx)(n.th,{children:"Default"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Database"}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"H2 Database"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"terra-boot"}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"terraform-local"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"tofu-maker"}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"opentofu-local"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"policy-man"}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"Necessary only for testing policies"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"zitadel"}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"We can also use 'noauth' mode"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"UI"}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"We can test APIs directly"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Redis Cache"}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"Caffeine Cache"})]})]})]}),"\n",(0,a.jsx)(n.p,{children:"To set up the above-mentioned components, we can either use a master docker-compose configuration\nwhich will start all components with default configuration."}),"\n",(0,a.jsx)(n.p,{children:"Or we can also make start individual components based on the use case."}),"\n",(0,a.jsx)(n.h3,{id:"master-docker-compose",children:"Master Docker Compose"}),"\n",(0,a.jsx)(n.p,{children:"By executing the below commands, we can start all components in one click."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"# Download docker compose configuration file.\nwget https://raw.githubusercontent.com/eclipse-xpanse/xpanse-relops/refs/heads/main/local/docker-compose.yml\n\n# Run the database and application containers.\ndocker compose up --d\n"})}),"\n",(0,a.jsx)(n.admonition,{title:"local-docker-stack profile to be enabled",type:"danger",children:(0,a.jsxs)(n.p,{children:["Then ensure to enable the spring profile ",(0,a.jsx)(n.code,{children:"local-docker-stack"})," in xpanse application to ensure communication between docker containers\nand the xpanse running on host."]})}),"\n",(0,a.jsx)(n.admonition,{title:"disable containers if necessary",type:"tip",children:(0,a.jsx)(n.p,{children:"If you think that any of the containers in the docker compose file isn't necessary for your use case,\nyou can simply comment them out."})}),"\n",(0,a.jsx)(n.h3,{id:"individual-component-configuration",children:"Individual Component Configuration"}),"\n",(0,a.jsx)(n.h3,{id:"database",children:"Database"}),"\n",(0,a.jsx)(n.p,{children:"By default, the development environment uses h2 database.\nOther than this, xpanse supports MySql as well at the moment."}),"\n",(0,a.jsx)(n.p,{children:"If you wish to test with MySql, the MySql container can be started using the below command."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"docker run --name mysql-db -p 3306:3306 -e MYSQL_PASSWORD=Xpanse@2023 -e MYSQL_ROOT_PASSWORD=xpanse -e MYSQL_DATABASE=xpanse -e MYSQL_USER=xpanse -d mysql:latest\n"})}),"\n",(0,a.jsx)(n.h3,{id:"deployer-tools-installation",children:"Deployer Tools Installation"}),"\n",(0,a.jsx)(n.p,{children:"Depending on the type of deployers you intend to use,\nthe below steps can be used to install the necessary deployers for local development."}),"\n",(0,a.jsx)(n.admonition,{title:"Deployer Development",type:"info",children:(0,a.jsxs)(n.p,{children:["These steps are necessary for development activities in the main xpanse application as well as\ndeployer applications such as ",(0,a.jsx)(n.strong,{children:"terra-boot"})," or ",(0,a.jsx)(n.strong,{children:"tofu-maker"}),"."]})}),"\n",(0,a.jsx)(n.h4,{id:"auto-installation",children:"Auto Installation"}),"\n",(0,a.jsx)(n.p,{children:"During the deployment job, the deployer automatically downloads the necessary deployer binaries.\nIf you have an active and stable connection, then there is nothing to be done in this case."}),"\n",(0,a.jsx)(n.h4,{id:"using-docker-images",children:"Using Docker Images"}),"\n",(0,a.jsxs)(n.p,{children:["If you wish to use remote deployers such as ",(0,a.jsx)(n.strong,{children:"terra-boot"})," or ",(0,a.jsx)(n.strong,{children:"tofu-maker"}),"\nthen you can pull the latest docker containers and configure the xpanse runtime to use it."]}),"\n",(0,a.jsx)(n.p,{children:"In this case, the images already contain the default supported Terraform and OpenTofu versions respectively and\nadditionally can install new versions on demand."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"docker run -p 9090:9090 -d --name terra-boot --add-host=host.docker.internal:host-gateway ghcr.io/eclipse-xpanse/terra-boot:latest\ndocker run -p 9092:9092 -d --name tofu-maker --add-host=host.docker.internal:host-gateway ghcr.io/eclipse-xpanse/tofu-maker:latest\n"})}),"\n",(0,a.jsx)(n.admonition,{title:"local-docker-stack profile to be enabled",type:"danger",children:(0,a.jsxs)(n.p,{children:["Then ensure to enable the spring profile ",(0,a.jsx)(n.code,{children:"local-docker-stack"})," in xpanse application to ensure communication between docker containers\nand the xpanse running on host."]})}),"\n",(0,a.jsx)(n.h4,{id:"manual-installation",children:"Manual Installation"}),"\n",(0,a.jsx)(n.p,{children:"If you wish you manually install the deployers for whatever reason, then the below steps are necessary."}),"\n",(0,a.jsx)(n.admonition,{title:"Necessary for local or remote deployment",type:"important",children:(0,a.jsx)(n.p,{children:"This method is necessary for local and remote deployment if the auto installation isn't possible."})}),"\n",(0,a.jsx)(n.h5,{id:"terraform-cli-installation",children:"Terraform CLI Installation"}),"\n",(0,a.jsxs)(n.p,{children:["Terraform CLI can be installed using the steps from\nthe ",(0,a.jsx)(o.A,{name:"official guide",url:"https://developer.hashicorp.com/terraform/install"}),"."]}),"\n",(0,a.jsx)(n.h5,{id:"opentofu-cli-installation",children:"OpenTofu CLI Installation"}),"\n",(0,a.jsxs)(n.p,{children:["Terraform CLI can be installed using the steps from\nthe ",(0,a.jsx)(o.A,{name:"official guide",url:"https://opentofu.org/docs/intro/install/"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"auth-layer-installation",children:"Auth Layer Installation"}),"\n",(0,a.jsx)(n.h4,{id:"no-auth-mode",children:"No Auth Mode"}),"\n",(0,a.jsxs)(n.p,{children:["If feature under development doesn't need any authentication or authorization features,\nthen it can be turned off completely by simply activating the ",(0,a.jsx)(n.code,{children:"noauth"})," spring profile."]}),"\n",(0,a.jsx)(n.h4,{id:"oauth-mode",children:"OAuth Mode"}),"\n",(0,a.jsx)(n.p,{children:"This is the default mode, and by default we use Zitadel as the identity provider.\nWe build a fully configured development Zitadel application and DB images which contains\nall necessary configurations as well as test users."}),"\n",(0,a.jsx)(n.p,{children:"Run the below command to start the OAuth stack."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"# Download the docker compose configuration.\nwget https://raw.githubusercontent.com/eclipse-xpanse/xpanse-iam/refs/heads/main/zitadel/local/run/docker-compose.yml\n\n# Run the database and application containers.\ndocker compose up --d\n"})}),"\n",(0,a.jsxs)(n.admonition,{title:"Admin User",type:"important",children:[(0,a.jsx)(n.p,{children:"Also, in case you wish to connect and check and change the configuration of the Zitadel instance,\nthe admin user can be used"}),(0,a.jsxs)(n.p,{children:["URL\u2014",(0,a.jsx)(n.a,{href:"http://localhost:8088",children:"http://localhost:8088"})]}),(0,a.jsxs)(n.p,{children:["username\u2014",(0,a.jsx)(n.a,{href:"mailto:zitadel-admin@zitadel.localhost",children:"zitadel-admin@zitadel.localhost"})]}),(0,a.jsx)(n.p,{children:"password - Zitadel@123"})]}),"\n",(0,a.jsxs)(n.p,{children:["The necessary end users with multiple combinations of roles and metadata can be found ",(0,a.jsx)(o.A,{url:"https://raw.githubusercontent.com/eclipse-xpanse/xpanse-iam/refs/heads/main/zitadel/terraform/environments/local.tfvars",name:"here"}),"\n. Here, we must use the provided ",(0,a.jsx)(n.strong,{children:"email address"})," as the username for OAuth application."]}),"\n",(0,a.jsx)(n.admonition,{title:"client configuration",type:"tip",children:(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"zitadel-local"})," spring profile already contains the configuration details necessary to connect to this local\nZitadel instance. The developer has no other extra task to be done."]})}),"\n",(0,a.jsxs)(n.p,{children:["More information about Zitadel can be found ",(0,a.jsx)(o.A,{url:"https://github.com/eclipse-xpanse/xpanse-iam/blob/main/zitadel/README.md",name:"here"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"policy-man",children:"policy-man"}),"\n",(0,a.jsx)(n.p,{children:"policy-man is a Golang-based application."}),"\n",(0,a.jsx)(n.h4,{id:"manual-start",children:"Manual start"}),"\n",(0,a.jsxs)(n.p,{children:["We will need Golang SDK to be installed and the steps mentioned ",(0,a.jsx)(o.A,{url:"https://github.com/eclipse-xpanse/policy-man/blob/main/README.md#how-to-use",name:"here"}),"\ncan be used to start the application."]}),"\n",(0,a.jsx)(n.h4,{id:"docker-image",children:"Docker Image"}),"\n",(0,a.jsxs)(n.p,{children:["Easiest way to simply start the ",(0,a.jsx)(n.code,{children:"policy-man"})," application using the released docker images."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"docker run -p 8090:8090 -d --name policy-man ghcr.io/eclipse-xpanse/policy-man:latest --host=0.0.0.0\n"})}),"\n",(0,a.jsx)(n.admonition,{title:"No changes necessary on xpanse",type:"info",children:(0,a.jsx)(n.p,{children:"Irrespective of the above methods used to start policy-man,\nno changes are necessary on the xpanse side.\nThe default configuration already points to correct local instances of the application."})}),"\n",(0,a.jsx)(n.h3,{id:"ui-module",children:"UI Module"}),"\n",(0,a.jsx)(n.p,{children:"UI module requires node and NPM binaries installed on the developer machine."}),"\n",(0,a.jsx)(n.h4,{id:"auth-modes",children:"Auth modes"}),"\n",(0,a.jsxs)(n.p,{children:["Depending on the necessity, the UI can be started ",(0,a.jsx)(o.A,{url:"https://github.com/eclipse-xpanse/xpanse-ui/blob/main/package.json#L28",name:"with"})," or ",(0,a.jsx)(o.A,{url:"https://github.com/eclipse-xpanse/xpanse-ui/blob/main/package.json#L24",name:"without"})," auth mode."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"# Start with noauth mode\nnpm run start\n\n# start with auth mode\nnpm run start-with-zitadel-local\n"})}),"\n",(0,a.jsxs)(n.p,{children:["More documentation on UI can be found ",(0,a.jsx)(o.A,{url:"./ui",name:"here"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},7346:(e,n,t)=>{t.d(n,{A:()=>a});t(6540);var s=t(4848);function a(e){let{name:n,url:t,isOpenInNewTab:a=!0}=e;return(0,s.jsx)("a",{href:t,className:"link-text",target:a?"_blank":"_self",children:n})}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(6540);const a={},i=s.createContext(a);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);