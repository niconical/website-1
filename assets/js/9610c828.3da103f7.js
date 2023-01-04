"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[6281],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=a.createContext({}),s=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,m=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),c=o,h=p["".concat(m,".").concat(c)]||p[c]||u[c]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7698:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return c},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={},m="Memory QoS",s={unversionedId:"user-manuals/memory-qos",id:"version-v1.1/user-manuals/memory-qos",title:"Memory QoS",description:"Introduction",source:"@site/versioned_docs/version-v1.1/user-manuals/memory-qos.md",sourceDirName:"user-manuals",slug:"/user-manuals/memory-qos",permalink:"/docs/user-manuals/memory-qos",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/user-manuals/memory-qos.md",tags:[],version:"v1.1",lastUpdatedBy:"Siyu Wang",lastUpdatedAt:1672728732,formattedLastUpdatedAt:"1/3/2023",frontMatter:{},sidebar:"docs",previous:{title:"CPU Burst",permalink:"/docs/user-manuals/cpu-burst"},next:{title:"Performance Collector",permalink:"/docs/user-manuals/performance-collector"}},d={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Background",id:"background",level:3},{value:"Setup",id:"setup",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Installation",id:"installation",level:3},{value:"Configurations",id:"configurations",level:3},{value:"Use Memory QoS",id:"use-memory-qos",level:2},{value:"Use an annotation to enable Memory QoS for the pod",id:"use-an-annotation-to-enable-memory-qos-for-the-pod",level:3},{value:"Use a ConfigMap to enable memory QoS for all the containers in a cluster",id:"use-a-configmap-to-enable-memory-qos-for-all-the-containers-in-a-cluster",level:3},{value:"(Optional) Advanced Settings",id:"optional-advanced-settings",level:3},{value:"Example",id:"example",level:3}],p={toc:u};function c(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"memory-qos"},"Memory QoS"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The Koordlet provides the ",(0,r.kt)("em",{parentName:"p"},"Memory Quality of Service")," (QoS) feature for containers. You can use this feature to\noptimize the performance of memory-sensitive applications while ensuring fair memory scheduling among containers. This\ntopic describes how to enable the memory QoS feature for containers."),(0,r.kt)("h3",{id:"background"},"Background"),(0,r.kt)("p",null,"The following memory limits apply to containers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The memory limit of the container. If the amount of memory that a container uses, including the page cache, is about\nto reach the memory limit of the container, the memory reclaim mechanism of the OS kernel is triggered. As a result,\nthe application in the container may not be able to request or release memory resources as normal."),(0,r.kt)("li",{parentName:"ul"},"The memory limit of the node. If the memory limit of a container is greater than the memory request of the container,\nthe container can overcommit memory resources. In this case, the available memory on the node may become insufficient.\nThis causes the OS kernel to reclaim memory from containers. As a result, the performance of your application is\ndowngraded. In extreme cases, the node cannot run as normal.")),(0,r.kt)("p",null,"To improve the performance of applications and the stability of nodes, Koordinator provides the memory QoS feature for\ncontainers. We recommend that you use Anolis OS as the node OS. For other OS, we will try our best to adapt, and users\ncan still enable it without side effects. After you enable the memory QoS feature for a container, Koordlet\nautomatically configures the memory control group (memcg) based on the configuration of the container. This helps you\noptimize the performance of memory-sensitive applications while ensuring fair memory scheduling on the node."),(0,r.kt)("p",null,"Memory QoS provides the following optimizations to improve the memory utilization of pods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When the memory used by a pod is about to reach the memory limit of the pod, the memcg performs asynchronous reclaim for a specific amount of memory. This prevents the reclaim of all the memory that the pod uses and therefore minimizes the adverse impact on the application performance caused by direct memory reclaim."),(0,r.kt)("li",{parentName:"ul"},"Memory reclaim is performed in a fairer manner among pods. When the available memory on a node becomes insufficient, memory reclaim is first performed on pods that use more memory than their memory requests. This ensures sufficient memory on the node when a pod applies for a large amount of memory."),(0,r.kt)("li",{parentName:"ul"},"If the BestEffort pods on a node use more memory than their memory requests, the system prioritizes the memory requirements of Guaranteed pods and Burstable pods over the memory requirements of BestEffort pods.")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"image",src:n(5425).Z,width:"448",height:"309"})),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kubernetes >= 1.18"),(0,r.kt)("li",{parentName:"ul"},"Koordinator >= 0.3")),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Please make sure Koordinator components are correctly installed in your cluster. If not, please refer to\n",(0,r.kt)("a",{parentName:"p",href:"/docs/installation"},"Installation"),"."),(0,r.kt)("h3",{id:"configurations"},"Configurations"),(0,r.kt)("p",null,"Koordlet has already enabled Memory QoS feature (",(0,r.kt)("inlineCode",{parentName:"p"},"-feature-gates=AllAlpha=true"),").\nIf not, please enable it manually by updating the feature gate in the koordlet daemonset."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: Memory QoS is controlled by the ",(0,r.kt)("inlineCode",{parentName:"p"},"CgroupReconcile")," feature-gate.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  name: koordlet\nspec:\n  selector:\n    matchLabels:\n      koord-app: koordlet\n  template:\n    metadata:\n      labels:\n        koord-app: koordlet\n    spec:\n      containers:\n        - command:\n            - /koordlet\n          args:\n            - -CgroupRootDir=/host-cgroup/\n            - -feature-gates=XXXX,CgroupReconcile=true # enable CPU Burst feature\n            ...\n")),(0,r.kt)("h2",{id:"use-memory-qos"},"Use Memory QoS"),(0,r.kt)("p",null,"When you enable memory QoS for the containers in a pod, the memcg is automatically configured based on the specified\nratios and pod parameters. To enable memory QoS for the containers in a pod, perform the following steps."),(0,r.kt)("h3",{id:"use-an-annotation-to-enable-memory-qos-for-the-pod"},"Use an annotation to enable Memory QoS for the pod"),(0,r.kt)("p",null,"Add the following annotations to enable memory QoS for the containers in a pod:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'annotations:\n  # To enable memory QoS for the containers in a pod, set the value to auto.\n  koordinator.sh/memoryQOS: \'{"policy": "auto"}\'\n  # To disable memory QoS for the containers in a pod, set the value to none.\n  #koordinator.sh/memoryQOS: \'{"policy": "none"}\'\n')),(0,r.kt)("h3",{id:"use-a-configmap-to-enable-memory-qos-for-all-the-containers-in-a-cluster"},"Use a ConfigMap to enable memory QoS for all the containers in a cluster"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: slo-controller-config\n  namespace: koordinator-system\ndata:\n  resource-qos-config: |-\n    {\n      "clusterStrategy": {\n        "lsClass": {\n           "memoryQOS": {\n             "enable": true\n           }\n         },\n        "beClass": {\n           "memoryQOS": {\n             "enable": true\n           }\n         }\n      }\n    }\n')),(0,r.kt)("h3",{id:"optional-advanced-settings"},"(Optional) Advanced Settings"),(0,r.kt)("p",null,"The following table describes the advanced parameters that you can use to configure fine-grained memory QoS\nconfigurations at the pod level and cluster level."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enable"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null," ",(0,r.kt)("li",null," true ")," ",(0,r.kt)("li",null," false ")," ")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null," ",(0,r.kt)("li",null," true: enables memory QoS for all the containers in a cluster. The default memory QoS settings for the QoS class of the containers are used. ")," ",(0,r.kt)("li",null," false: disables memory QoS for all the containers in a cluster. The memory QoS settings are restored to the original settings for the QoS class of the containers. ")," "))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"policy"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null," ",(0,r.kt)("li",null," auto ")," ",(0,r.kt)("li",null," default ")," ",(0,r.kt)("li",null," none ")," ")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null," ",(0,r.kt)("li",null," auto: enables memory QoS for the containers in the pod and uses the recommended memory QoS settings. The recommended memory QoS settings are prioritized over the cluster-wide memory QoS settings. ")," ",(0,r.kt)("li",null," default: specifies that the pod inherits the cluster-wide memory QoS settings. ")," ",(0,r.kt)("li",null," none: disables memory QoS for the pod. The relevant memory QoS settings are restored to the original settings. The original settings are prioritized over the cluster-wide memory QoS settings. ")," "))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minLimitPercent"),(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null},"0~100"),(0,r.kt)("td",{parentName:"tr",align:null},"Unit: %. Default value:",(0,r.kt)("inlineCode",{parentName:"td"},"0"),". The default value indicates that this parameter is disabled. This parameter specifies the unreclaimable proportion of the memory request of a pod. The amount of unreclaimable memory is calculated based on the following formula: ",(0,r.kt)("inlineCode",{parentName:"td"},"Value of memory.min = Memory request \xd7 Value of minLimitPercent/100"),". This parameter is suitable for scenarios where applications are sensitive to the page cache. You can use this parameter to cache files to optimize read and write performance. For example, if you specify Memory ",(0,r.kt)("inlineCode",{parentName:"td"},"Request=100MiB")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"minLimitPercent=100")," for a container, ",(0,r.kt)("inlineCode",{parentName:"td"},"the value of memory.min is 104857600"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lowLimitPercent"),(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null},"0~100"),(0,r.kt)("td",{parentName:"tr",align:null},"Unit: %. Default value:",(0,r.kt)("inlineCode",{parentName:"td"},"0"),". The default value indicates that this parameter is disabled. This parameter specifies the relatively unreclaimable proportion of the memory request of a pod. The amount of relatively unreclaimable memory is calculated based on the following formula: ",(0,r.kt)("inlineCode",{parentName:"td"},"Value of memory.low = Memory request \xd7 Value of lowLimitPercent/100"),". For example, if you specify ",(0,r.kt)("inlineCode",{parentName:"td"},"Memory Request=100MiB")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"lowLimitPercent=100")," for a container, ",(0,r.kt)("inlineCode",{parentName:"td"},"the value of memory.low is 104857600"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"throttlingPercent"),(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null},"0~100"),(0,r.kt)("td",{parentName:"tr",align:null},"Unit: %. Default value:",(0,r.kt)("inlineCode",{parentName:"td"},"0"),". The default value indicates that this parameter is disabled. This parameter specifies the memory throttling threshold for the ratio of the memory usage of a container to the memory limit of the container. The memory throttling threshold for memory usage is calculated based on the following formula: ",(0,r.kt)("inlineCode",{parentName:"td"},"Value of memory.high = Memory limit \xd7 Value of throttlingPercent/100"),". If the memory usage of a container exceeds the memory throttling threshold, the memory used by the container will be reclaimed. This parameter is suitable for container memory overcommitment scenarios. You can use this parameter to cgroups from triggering OOM. For example, if you specify ",(0,r.kt)("inlineCode",{parentName:"td"},"Memory Limit=100MiB")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"throttlingPercent=80")," for a container, ",(0,r.kt)("inlineCode",{parentName:"td"},"the value of memory.high is 83886080"),", which is equal to 80 MiB.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wmarkRatio"),(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null},"0~100"),(0,r.kt)("td",{parentName:"tr",align:null},"Unit: %. Default value:",(0,r.kt)("inlineCode",{parentName:"td"},"95"),". A value of ",(0,r.kt)("inlineCode",{parentName:"td"},"0")," indicates that this parameter is disabled. This parameter specifies the threshold of the usage of the memory limit or the value of ",(0,r.kt)("inlineCode",{parentName:"td"},"memory.high")," that triggers asynchronous memory reclaim. If ",(0,r.kt)("inlineCode",{parentName:"td"},"throttlingPercent")," is disabled, the asynchronous memory reclaim threshold for memory usage is calculated based on the following formula: ",(0,r.kt)("inlineCode",{parentName:"td"},"Value of memory.wmark_high = Memory limit \xd7 wmarkRatio/100"),". If ",(0,r.kt)("inlineCode",{parentName:"td"},"throttlingPercent")," is enabled, the asynchronous memory reclaim threshold for memory usage is calculated based on the following formula: ",(0,r.kt)("inlineCode",{parentName:"td"},"Value of memory.wmark_high = Value of memory.high \xd7 wmarkRatio/100"),". If the usage of the memory limit or the value of memory.high exceeds the threshold, the memcg backend asynchronous reclaim feature is triggered. For example, if you specify ",(0,r.kt)("inlineCode",{parentName:"td"},"Memory Limit=100MiB"),"for a container, the memory throttling setting is",(0,r.kt)("inlineCode",{parentName:"td"},"memory.high=83886080"),", the reclaim ratio setting is ",(0,r.kt)("inlineCode",{parentName:"td"},"memory.wmark_ratio=95"),", and the reclaim threshold setting is ",(0,r.kt)("inlineCode",{parentName:"td"},"memory.wmark_high=79691776"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wmarkMinAdj"),(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null},"-25~50"),(0,r.kt)("td",{parentName:"tr",align:null},"Unit: %. The default value is ",(0,r.kt)("inlineCode",{parentName:"td"},"-25")," for the ",(0,r.kt)("inlineCode",{parentName:"td"},"LS"),"/ ",(0,r.kt)("inlineCode",{parentName:"td"},"LSR")," QoS class and ",(0,r.kt)("inlineCode",{parentName:"td"},"50")," for the ",(0,r.kt)("inlineCode",{parentName:"td"},"BE")," QoS class. A value of 0 indicates that this parameter is disabled. This parameter specifies the adjustment to the global minimum watermark for a container. A negative value decreases the global minimum watermark and therefore postpones memory reclaim for the container. A positive value increases the global minimum watermark and therefore antedates memory reclaim for the container. For example, if you create a pod whose QoS class is LS, the default setting of this parameter is ",(0,r.kt)("inlineCode",{parentName:"td"},"memory.wmark_min_adj=-25"),", which indicates that the minimum watermark is decreased by 25% for the containers in the pod.")))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",{start:0},(0,r.kt)("li",{parentName:"ol"},"The testing environment is shown below:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kubernetes: 1.20"),(0,r.kt)("li",{parentName:"ul"},"Nodes:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Stress Node: an ECS instance (8 vCPU, 32GB RAM) for performing stress tests."),(0,r.kt)("li",{parentName:"ul"},"Tested Node: an ECS instance (8 vCPU, 32GB RAM) runs the workload and serves.")))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a file named redis-demo.yaml with the following YAML template:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: redis-demo-config\ndata:\n  redis-config: |\n    appendonly yes\n    appendfsync no\n---\napiVersion: v1\nkind: Pod\nmetadata:\n  name: redis-demo\n  labels:\n    name: redis-demo\n  annotations:\n    koordinator.sh/memoryQOS: \'{"policy": "auto"}\' # Add this annotation to enable memory QoS\n    koordinator.sh/qosClass: \'LS\' # Set the QoS class of the Redis pod to LS\nspec:\n  containers:\n  - name: redis\n    image: redis:5.0.4\n    command:\n      - redis-server\n      - "/redis-master/redis.conf"\n    env:\n    - name: MASTER\n      value: "true"\n    ports:\n    - containerPort: 6379\n    resources:\n      limits:\n        cpu: "2"\n        memory: "6Gi"\n      requests:\n        cpu: "2"\n        memory: "2Gi"\n    volumeMounts:\n    - mountPath: /redis-master-data\n      name: data\n    - mountPath: /redis-master\n      name: config\n  volumes:\n    - name: data\n      emptyDir: {}\n    - name: config\n      configMap:\n        name: redis-demo-config\n        items:\n        - key: redis-config\n          path: redis.conf\n  nodeName: # Set nodeName to the name of the tested node\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: redis-demo\nspec:\n  ports:\n  - name: redis-port\n    port: 6379\n    protocol: TCP\n    targetPort: 6379\n  selector:\n    name: redis-demo\n  type: ClusterIP\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Run the following command to deploy Redis Server as the test application.")),(0,r.kt)("p",null,"You can access the redis-demo Service from within the cluster."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f redis-demo.yaml\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Simulate the scenario of memory overcommitment.")),(0,r.kt)("p",null,"Use the Stress tool to increase the load on memory and trigger memory reclaim. The sum of the memory limits of all pods\non the node exceeds the physical memory of the node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"a. Create a file named stress-demo.yaml with the following YAML template:\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: stress-demo\n  labels:\n    name: stress-demo\n  annotations:\n    koordinator.sh/memoryQOS: '{\"policy\": \"auto\"}' # Add this annotation to enable memory QoS\n    koordinator.sh/qosClass: 'BE' # Set the QoS class of the Stress pod to BE\nspec:\n  containers:\n    - args:\n        - '--vm'\n        - '2'\n        - '--vm-bytes'\n        - 11G\n        - '-c'\n        - '2'\n        - '--vm-hang'\n        - '2'\n      command:\n        - stress\n      image: polinux/stress\n      imagePullPolicy: Always\n      name: stress\n  restartPolicy: Always\n  nodeName: # Set nodeName to the name of the tested node, which is the node on which the Redis pod is deployed\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"b. Run the following command to deploy stress-demo:\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f stress-demo.yaml\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Run the following command to query the global minimum watermark of the node:")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note In memory overcommitment scenarios, if the global minimum watermark of the node is set to a low value, OOM\nkillers may be triggered for all pods on the node even before memory reclaim is performed. Therefore, we recommend\nthat you set the global minimum watermark to a high value. In this example, the global minimum watermark is set\nto 4,000,000 KB for the tested node that has 32 GiB of memory.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat /proc/sys/vm/min_free_kbytes\n")),(0,r.kt)("p",null,"Expected output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"4000000\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Use the following YAML template to deploy the memtier-benchmark tool to send requests to the tested node:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  labels:\n    name: memtier-demo\n  name: memtier-demo\nspec:\n  containers:\n    - command:\n        - memtier_benchmark\n        - '-s'\n        - 'redis-demo'\n        - '--data-size'\n        - '200000'\n        - \"--ratio\"\n        - \"1:4\"\n      image: 'redislabs/memtier_benchmark:1.3.0'\n      name: memtier\n  restartPolicy: Never\n  nodeName: # Set nodeName to the name of the stress node that is used to send requests.\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Run the following command to query the test results from memtier-benchmark:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs -f memtier-demo\n")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Use the following YAML template to disable memory QoS for the Redis pod and Stress pod. Then, perform stress tests\nagain and compare the results.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: redis-demo\n  labels:\n    name: redis-demo\n  annotations:\n    koordinator.sh/memoryQOS: '{\"policy\": \"none\"}' # Disable memory QoS.\n    koordinator.sh/qosClass: 'LS'\nspec:\n  ...\n\n---\napiVersion: v1\nkind: Pod\nmetadata:\n  name: stress-demo\n  labels:\n    name: stress-demo\n  annotations:\n    koordinator.sh/memoryQOS: '{\"policy\": \"none\"}' # Disable memory QoS.\n    koordinator.sh/qosClass: 'BE'\n")),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"Check the results of Memory QoS enabled and disabled.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Disabled: Set the memory QoS policy of the pod to ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},"Enabled: Set the memory QoS policy of the pod to ",(0,r.kt)("inlineCode",{parentName:"li"},"auto")," (the recommended parameters of memory QoS are used).")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric"),(0,r.kt)("th",{parentName:"tr",align:null},"Disabled"),(0,r.kt)("th",{parentName:"tr",align:null},"Enabled"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Latency-avg"),(0,r.kt)("td",{parentName:"tr",align:null},"51.32 ms"),(0,r.kt)("td",{parentName:"tr",align:null},"47.25 ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Throughput-avg"),(0,r.kt)("td",{parentName:"tr",align:null},"149.0 MB/s"),(0,r.kt)("td",{parentName:"tr",align:null},"161.9 MB/s")))),(0,r.kt)("p",null,"The table shows that the latency of the Redis pod is reduced by 7.9% and the throughput of the Redis pod is increased\nby 8.7% after memory QoS is enabled. This indicates that the memory QoS feature can optimize the performance of\napplications in memory overcommitment scenarios."))}c.isMDXComponent=!0},5425:function(e,t,n){t.Z=n.p+"assets/images/memory-qos-2f778181544286ce590da80acbd20be1.png"}}]);