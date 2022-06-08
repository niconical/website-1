"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[3217],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=p(n),k=r,c=s["".concat(d,".").concat(k)]||s[k]||u[k]||l;return n?a.createElement(c,o(o({ref:t},m),{},{components:n})):a.createElement(c,o({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9250:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={},d="Installation",p={unversionedId:"installation",id:"installation",title:"Installation",description:"Since v0.1.0 (alpha/beta), Koordinator requires Kubernetes version >= 1.18.",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/docs/installation",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/installation.md",tags:[],version:"current",lastUpdatedBy:"Joseph",lastUpdatedAt:1654678495,formattedLastUpdatedAt:"6/8/2022",frontMatter:{},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Overview",permalink:"/docs/key-designs/overview"}},m={},u=[{value:"Install with helms",id:"install-with-helms",level:2},{value:"Upgrade with helm",id:"upgrade-with-helm",level:2},{value:"Optional: download charts manually",id:"optional-download-charts-manually",level:2},{value:"Install koord-runtime-proxy (experimental)",id:"install-koord-runtime-proxy-experimental",level:2},{value:"Installing from sources",id:"installing-from-sources",level:3},{value:"Setup Kubelet",id:"setup-kubelet",level:3},{value:"Setup koord-runtime-proxy",id:"setup-koord-runtime-proxy",level:3},{value:"Options",id:"options",level:2},{value:"Optional: chart parameters",id:"optional-chart-parameters",level:3},{value:"Optional: feature-gate",id:"optional-feature-gate",level:3},{value:"Optional: the local image for China",id:"optional-the-local-image-for-china",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Installation parameters for AWS EKS",id:"installation-parameters-for-aws-eks",level:3},{value:"Uninstall",id:"uninstall",level:2}],s={toc:u};function k(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Since v0.1.0 (alpha/beta), Koordinator requires ",(0,l.kt)("strong",{parentName:"p"},"Kubernetes version >= 1.18"),"."),(0,l.kt)("h2",{id:"install-with-helms"},"Install with helms"),(0,l.kt)("p",null,"Koordinator can be simply installed by helm v3.5+, which is a simple command-line tool and you can get it from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/helm/helm/releases"},"here"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Firstly add koordinator charts repository if you haven't do this.\n$ helm repo add koordinator-sh https://koordinator-sh.github.io/charts/\n\n# [Optional]\n$ helm repo update\n\n# Install the latest version.\n$ helm install koordinator koordinator-sh/koordinator --version 0.4.0\n")),(0,l.kt)("h2",{id:"upgrade-with-helm"},"Upgrade with helm"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Firstly add koordinator charts repository if you haven't do this.\n$ helm repo add koordinator-sh https://koordinator-sh.github.io/charts/\n\n# [Optional]\n$ helm repo update\n\n# Upgrade the latest version.\n$ helm upgrade koordinator koordinator-sh/koordinator --version 0.4.0 [--force]\n")),(0,l.kt)("p",null,"Note that:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Before upgrade, you ",(0,l.kt)("strong",{parentName:"li"},"must")," firstly read the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/koordinator-sh/koordinator/blob/master/CHANGELOG.md"},"Change Log"),"\nto make sure that you have understand the breaking changes in the new version."),(0,l.kt)("li",{parentName:"ol"},"If you want to drop the chart parameters you configured for the old release or set some new parameters,\nit is recommended to add ",(0,l.kt)("inlineCode",{parentName:"li"},"--reset-values")," flag in ",(0,l.kt)("inlineCode",{parentName:"li"},"helm upgrade")," command.\nOtherwise you should use ",(0,l.kt)("inlineCode",{parentName:"li"},"--reuse-values")," flag to reuse the last release's values.")),(0,l.kt)("h2",{id:"optional-download-charts-manually"},"Optional: download charts manually"),(0,l.kt)("p",null,"If you have problem with connecting to ",(0,l.kt)("inlineCode",{parentName:"p"},"https://koordinator-sh.github.io/charts/")," in production, you might need to download the chart from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/koordinator-sh/charts/releases"},"here")," manually and install or upgrade with it."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm install/upgrade koordinator /PATH/TO/CHART\n")),(0,l.kt)("h2",{id:"install-koord-runtime-proxy-experimental"},"Install koord-runtime-proxy (experimental)"),(0,l.kt)("p",null,"koord-runtime-proxy acts as a proxy between kubelet and containerd(dockerd under dockershim scenario), which is designed to intercept CRI request, and apply some resource management policies, such as setting different cgroup parameters by pod priorities under hybrid workload orchestration scenario, applying new isolation policies for latest Linux kernel, CPU architecture, and etc."),(0,l.kt)("h3",{id:"installing-from-sources"},"Installing from sources"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/koordinator-sh/koordinator.git\n$ cd koordinator\n$ make build-koord-runtime-proxy\n")),(0,l.kt)("h3",{id:"setup-kubelet"},"Setup Kubelet"),(0,l.kt)("p",null,"To make koord-runtime-proxy a proxy between kubelet and containerd(dockerd), kubelet parameters should be altered as shown below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubelet <other options> \\\n   --container-runtime=remote \\\n   --container-runtime=unix:///var/run/koord-runtimeproxy/runtimeproxy.sock\n")),(0,l.kt)("h3",{id:"setup-koord-runtime-proxy"},"Setup koord-runtime-proxy"),(0,l.kt)("p",null,"Firstly, please make sure your runtime backend is containerd or dockerd."),(0,l.kt)("p",null,"Under containerd scenario, koord-runtime-proxy can be setup with command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"koord-runtime-proxy \\\n   --remote-runtime-service-endpoint=<runtime socketFile path> \\\n   --remote-image-service-endpoint=<image socketFile path>\n")),(0,l.kt)("p",null,"If containerd listening CRI request on default /var/run/koord-runtimeproxy/runtimeproxy.sock, koord-runtime-proxy can be setup by:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"koord-runtime-proxy\n")),(0,l.kt)("p",null,"Under docker scenario, koord-runtime-proxy should be setup with the additional parameter ",(0,l.kt)("inlineCode",{parentName:"p"},"--backend-runtime-mode Docker"),", and without ",(0,l.kt)("inlineCode",{parentName:"p"},"remote-image-service-endpoint"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"koord-runtime-proxy \\\n   --backend-runtime-mode=Docker \\\n   --remote-runtime-service-endpoint=<runtime socketFile path>\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("p",null,"Note that installing this chart directly means it will use the default template values for Koordinator."),(0,l.kt)("p",null,"You may have to set your specific configurations if it is deployed into a production cluster, or you want to configure feature-gates."),(0,l.kt)("h3",{id:"optional-chart-parameters"},"Optional: chart parameters"),(0,l.kt)("p",null,"The following table lists the configurable parameters of the chart and their default values."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"featureGates")),(0,l.kt)("td",{parentName:"tr",align:null},"Feature gates for Koordinator, empty string means all by default"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"}," "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"installation.namespace")),(0,l.kt)("td",{parentName:"tr",align:null},"namespace for Koordinator installation"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"koordinator-system"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"installation.createNamespace")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to create the installation.namespace"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"imageRepositoryHost")),(0,l.kt)("td",{parentName:"tr",align:null},"Image repository host"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"}," "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.log.level")),(0,l.kt)("td",{parentName:"tr",align:null},"Log level that koord-manager printed"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"4"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.replicas")),(0,l.kt)("td",{parentName:"tr",align:null},"Replicas of koord-manager deployment"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.image.repository")),(0,l.kt)("td",{parentName:"tr",align:null},"Repository for koord-manager image"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"koordinatorsh/koord-manager"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.image.tag")),(0,l.kt)("td",{parentName:"tr",align:null},"Tag for koord-manager image"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"v0.4.0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.resources.limits.cpu")),(0,l.kt)("td",{parentName:"tr",align:null},"CPU resource limit of koord-manager container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1000m"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.resources.limits.memory")),(0,l.kt)("td",{parentName:"tr",align:null},"Memory resource limit of koord-manager container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1Gi"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.resources.requests.cpu")),(0,l.kt)("td",{parentName:"tr",align:null},"CPU resource request of koord-manager container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"500m"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.resources.requests.memory")),(0,l.kt)("td",{parentName:"tr",align:null},"Memory resource request of koord-manager container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"256Mi"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.metrics.port")),(0,l.kt)("td",{parentName:"tr",align:null},"Port of metrics served"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"8080"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.webhook.port")),(0,l.kt)("td",{parentName:"tr",align:null},"Port of webhook served"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"9443"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.nodeAffinity")),(0,l.kt)("td",{parentName:"tr",align:null},"Node affinity policy for koord-manager pod"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.nodeSelector")),(0,l.kt)("td",{parentName:"tr",align:null},"Node labels for koord-manager pod"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.tolerations")),(0,l.kt)("td",{parentName:"tr",align:null},"Tolerations for koord-manager pod"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.resyncPeriod")),(0,l.kt)("td",{parentName:"tr",align:null},"Resync period of informer koord-manager, defaults no resync"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.hostNetwork")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether koord-manager pod should run with hostnetwork"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scheduler.log.level")),(0,l.kt)("td",{parentName:"tr",align:null},"Log level that koord-scheduler printed"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"4"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scheduler.replicas")),(0,l.kt)("td",{parentName:"tr",align:null},"Replicas of koord-scheduler deployment"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scheduler.image.repository")),(0,l.kt)("td",{parentName:"tr",align:null},"Repository for koord-scheduler image"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"koordinatorsh/koord-scheduler"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scheduler.image.tag")),(0,l.kt)("td",{parentName:"tr",align:null},"Tag for koord-scheduler image"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"v0.4.0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scheduler.resources.limits.cpu")),(0,l.kt)("td",{parentName:"tr",align:null},"CPU resource limit of koord-scheduler container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1000m"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scheduler.resources.limits.memory")),(0,l.kt)("td",{parentName:"tr",align:null},"Memory resource limit of koord-scheduler container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1Gi"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scheduler.resources.requests.cpu")),(0,l.kt)("td",{parentName:"tr",align:null},"CPU resource request of koord-scheduler container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"500m"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scheduler.resources.requests.memory")),(0,l.kt)("td",{parentName:"tr",align:null},"Memory resource request of koord-scheduler container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"256Mi"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scheduler.port")),(0,l.kt)("td",{parentName:"tr",align:null},"Port of metrics served"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"10251"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scheduler.nodeAffinity")),(0,l.kt)("td",{parentName:"tr",align:null},"Node affinity policy for koord-scheduler pod"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scheduler.nodeSelector")),(0,l.kt)("td",{parentName:"tr",align:null},"Node labels for koord-scheduler pod"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scheduler.tolerations")),(0,l.kt)("td",{parentName:"tr",align:null},"Tolerations for koord-scheduler pod"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scheduler.hostNetwork")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether koord-scheduler pod should run with hostnetwork"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"koordlet.log.level")),(0,l.kt)("td",{parentName:"tr",align:null},"Log level that koordlet printed"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"4"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"koordlet.image.repository")),(0,l.kt)("td",{parentName:"tr",align:null},"Repository for koordlet image"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"koordinatorsh/koordlet"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"koordlet.image.tag")),(0,l.kt)("td",{parentName:"tr",align:null},"Tag for koordlet image"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"v0.4.0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"koordlet.resources.limits.cpu")),(0,l.kt)("td",{parentName:"tr",align:null},"CPU resource limit of koordlet container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"500m"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"koordlet.resources.limits.memory")),(0,l.kt)("td",{parentName:"tr",align:null},"Memory resource limit of koordlet container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"256Mi"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"koordlet.resources.requests.cpu")),(0,l.kt)("td",{parentName:"tr",align:null},"CPU resource request of koordlet container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"koordlet.resources.requests.memory")),(0,l.kt)("td",{parentName:"tr",align:null},"Memory resource request of koordlet container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"webhookConfiguration.failurePolicy.pods")),(0,l.kt)("td",{parentName:"tr",align:null},"The failurePolicy for pods in mutating webhook configuration"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Ignore"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"webhookConfiguration.timeoutSeconds")),(0,l.kt)("td",{parentName:"tr",align:null},"The timeoutSeconds for all webhook configuration"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"30"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"crds.managed")),(0,l.kt)("td",{parentName:"tr",align:null},"Koordinator will not install CRDs with chart if this is false"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"imagePullSecrets")),(0,l.kt)("td",{parentName:"tr",align:null},"The list of image pull secrets for koordinator image"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("p",null,"Specify each parameter using the ",(0,l.kt)("inlineCode",{parentName:"p"},"--set key=value[,key=value]")," argument to ",(0,l.kt)("inlineCode",{parentName:"p"},"helm install")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"helm upgrade"),"."),(0,l.kt)("h3",{id:"optional-feature-gate"},"Optional: feature-gate"),(0,l.kt)("p",null,"Feature-gate controls some influential features in Koordinator:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Effect (if closed)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PodMutatingWebhook")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to open a mutating webhook for Pod ",(0,l.kt)("strong",{parentName:"td"},"create")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"Don't inject koordinator.sh/qosClass, koordinator.sh/priority and don't replace koordinator extend resources ad so on")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PodValidatingWebhook")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to open a validating webhook for Pod ",(0,l.kt)("strong",{parentName:"td"},"create/update")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"It is possible to create some Pods that do not conform to the Koordinator specification, causing some unpredictable problems")))),(0,l.kt)("p",null,"If you want to configure the feature-gate, just set the parameter when install or upgrade. Such as:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ helm install koordinator https://... --set featureGates="PodMutatingWebhook=true\\,PodValidatingWebhook=true"\n')),(0,l.kt)("p",null,"If you want to enable all feature-gates, set the parameter as ",(0,l.kt)("inlineCode",{parentName:"p"},"featureGates=AllAlpha=true"),"."),(0,l.kt)("h3",{id:"optional-the-local-image-for-china"},"Optional: the local image for China"),(0,l.kt)("p",null,"If you are in China and have problem to pull image from official DockerHub, you can use the registry hosted on Alibaba Cloud:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm install koordinator https://... --set imageRepositoryHost=koordinator-registry.cn-hangzhou.cr.aliyuncs.com\n")),(0,l.kt)("h2",{id:"best-practices"},"Best Practices"),(0,l.kt)("h3",{id:"installation-parameters-for-aws-eks"},"Installation parameters for AWS EKS"),(0,l.kt)("p",null,"When using a custom CNI (such as Weave or Calico) on EKS, the webhook cannot be reached by default. This happens because the control plane cannot be configured to run on a custom CNI on EKS, so the CNIs differ between control plane and worker nodes."),(0,l.kt)("p",null,"To address this, the webhook can be run in the host network so it can be reached, by setting ",(0,l.kt)("inlineCode",{parentName:"p"},"--set manager.hostNetwork=true")," when use helm install or upgrade."),(0,l.kt)("h2",{id:"uninstall"},"Uninstall"),(0,l.kt)("p",null,"Note that this will lead to all resources created by Koordinator, including webhook configurations, services, namespace, CRDs and CR instances managed by Koordinator controller, to be deleted!"),(0,l.kt)("p",null,"Please do this ONLY when you fully understand the consequence."),(0,l.kt)("p",null,"To uninstall koordinator if it is installed with helm charts:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ helm uninstall koordinator\nrelease "koordinator" uninstalled\n')))}k.isMDXComponent=!0}}]);