if(!window.JSON)window.JSON={};
(function(){function h(j){return j<10?"0"+j:j}function t(j){g.lastIndex=0;return g.test(j)?'"'+j.replace(g,function(r){var a=l[r];return typeof a==="string"?a:"\\u"+("0000"+r.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+j+'"'}function m(j,r){var a,n,s,u,b=i,d,e=r[j];if(e&&typeof e==="object"&&typeof e.toJSON==="function")e=e.toJSON(j);if(typeof o==="function")e=o.call(r,j,e);switch(typeof e){case "string":return t(e);case "number":return isFinite(e)?String(e):"null";case "boolean":case "null":return String(e);
case "object":if(!e)return"null";i+=p;d=[];if(Object.prototype.toString.apply(e)==="[object Array]"){u=e.length;for(a=0;a<u;a+=1)d[a]=m(a,e)||"null";s=d.length===0?"[]":i?"[\n"+i+d.join(",\n"+i)+"\n"+b+"]":"["+d.join(",")+"]";i=b;return s}if(o&&typeof o==="object"){u=o.length;for(a=0;a<u;a+=1){n=o[a];if(typeof n==="string")if(s=m(n,e))d.push(t(n)+(i?": ":":")+s)}}else for(n in e)if(Object.hasOwnProperty.call(e,n))if(s=m(n,e))d.push(t(n)+(i?": ":":")+s);s=d.length===0?"{}":i?"{\n"+i+d.join(",\n"+i)+
"\n"+b+"}":"{"+d.join(",")+"}";i=b;return s}}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+h(this.getUTCMonth()+1)+"-"+h(this.getUTCDate())+"T"+h(this.getUTCHours())+":"+h(this.getUTCMinutes())+":"+h(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()}}var c=window.JSON,f=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
g=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,i,p,l={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},o;if(typeof c.stringify!=="function")c.stringify=function(j,r,a){var n;p=i="";if(typeof a==="number")for(n=0;n<a;n+=1)p+=" ";else if(typeof a==="string")p=a;if((o=r)&&typeof r!=="function"&&(typeof r!=="object"||typeof r.length!=="number"))throw Error("JSON.stringify");return m("",{"":j})};
if(typeof c.parse!=="function")c.parse=function(j,r){function a(s,u){var b,d,e=s[u];if(e&&typeof e==="object")for(b in e)if(Object.hasOwnProperty.call(e,b)){d=a(e,b);if(d!==undefined)e[b]=d;else delete e[b]}return r.call(s,u,e)}var n;j=String(j);f.lastIndex=0;if(f.test(j))j=j.replace(f,function(s){return"\\u"+("0000"+s.charCodeAt(0).toString(16)).slice(-4)});if(/^[\],:{}\s]*$/.test(j.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){n=eval("("+j+")");return typeof r==="function"?a({"":n},""):n}throw new SyntaxError("JSON.parse");}})();
(function(h,t){var m=h.History=h.History||{},c=h.jQuery;if(typeof m.Adapter!=="undefined")throw Error("History.js Adapter has already been loaded...");m.Adapter={bind:function(f,g,i){c(f).bind(g,i)},trigger:function(f,g,i){c(f).trigger(g,i)},extractEventData:function(f,g,i){return g&&g.originalEvent&&g.originalEvent[f]||i&&i[f]||t},onDomLoad:function(f){c(f)}};typeof m.init!=="undefined"&&m.init()})(window);
(function(h){var t=h.document,m=h.setInterval||m,c=h.History=h.History||{};if(typeof c.initHtml4!=="undefined")throw Error("History.js HTML4 Support has already been loaded...");c.initHtml4=function(){if(typeof c.initHtml4.initialized!=="undefined")return false;else c.initHtml4.initialized=true;c.enabled=true;c.savedHashes=[];c.isLastHash=function(f){var g=c.getHashByIndex();return f===g};c.isHashEqual=function(f,g){f=encodeURIComponent(f).replace(/%25/g,"%");g=encodeURIComponent(g).replace(/%25/g,
"%");return f===g};c.saveHash=function(f){if(c.isLastHash(f))return false;c.savedHashes.push(f);return true};c.getHashByIndex=function(f){var g=null;return g=typeof f==="undefined"?c.savedHashes[c.savedHashes.length-1]:f<0?c.savedHashes[c.savedHashes.length+f]:c.savedHashes[f]};c.discardedHashes={};c.discardedStates={};c.discardState=function(f,g,i){var p=c.getHashByState(f);c.discardedStates[p]={discardedState:f,backState:i,forwardState:g};return true};c.discardHash=function(f,g,i){c.discardedHashes[f]=
{discardedHash:f,backState:i,forwardState:g};return true};c.discardedState=function(f){f=c.getHashByState(f);return c.discardedStates[f]||false};c.discardedHash=function(f){return c.discardedHashes[f]||false};c.recycleState=function(f){var g=c.getHashByState(f);c.discardedState(f)&&delete c.discardedStates[g];return true};if(c.emulated.hashChange){c.hashChangeInit=function(){c.checkerFunction=null;var f="",g,i,p;if(c.isInternetExplorer()){g=t.createElement("iframe");g.setAttribute("id","historyjs-iframe");
g.style.display="none";t.body.appendChild(g);g.contentWindow.document.open();g.contentWindow.document.close();i="";p=false;c.checkerFunction=function(){if(p)return false;p=true;var l=c.getHash(),o=c.getHash(g.contentWindow.document.location);if(l!==f){f=l;if(o!==l){i=l;g.contentWindow.document.open();g.contentWindow.document.close();g.contentWindow.document.location.hash=c.escapeHash(l)}c.Adapter.trigger(h,"hashchange")}else if(o!==i){i=o;c.setHash(o,false)}p=false;return true}}else c.checkerFunction=
function(){var l=c.getHash();if(l!==f){f=l;c.Adapter.trigger(h,"hashchange")}return true};c.intervalList.push(m(c.checkerFunction,c.options.hashChangeInterval));return true};c.Adapter.onDomLoad(c.hashChangeInit)}if(c.emulated.pushState){c.onHashChange=function(f){f=f&&f.newURL||c.getLocationHref();var g=c.getHashByUrl(f);f=null;if(c.isLastHash(g)){c.busy(false);return false}c.doubleCheckComplete();c.saveHash(g);if(g&&c.isTraditionalAnchor(g)){c.Adapter.trigger(h,"anchorchange");c.busy(false);return false}f=
c.extractState(c.getFullUrl(g||c.getLocationHref(),false),true);if(c.isLastSavedState(f)){c.busy(false);return false}c.getHashByState(f);if(g=c.discardedState(f)){c.getHashByIndex(-2)===c.getHashByState(g.forwardState)?c.back(false):c.forward(false);return false}c.pushState(f.data,f.title,encodeURI(f.url),false);return true};c.Adapter.bind(h,"hashchange",c.onHashChange);c.pushState=function(f,g,i,p){i=encodeURI(i).replace(/%25/g,"%");if(c.getHashByUrl(i))throw Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
if(p!==false&&c.busy()){c.pushQueue({scope:c,callback:c.pushState,args:arguments,queue:p});return false}c.busy(true);var l=c.createStateObject(f,g,i),o=c.getHashByState(l),j=c.getState(false);j=c.getHashByState(j);var r=c.getHash();c.storeState(l);c.expectedStateId=l.id;c.recycleState(l);c.setTitle(l);if(o===j){c.busy(false);return false}if(!c.isHashEqual(o,r)&&!c.isHashEqual(o,c.getShortUrl(c.getLocationHref()))){c.setHash(o,false);return false}c.saveState(l);c.Adapter.trigger(h,"statechange");c.busy(false);
return true};c.replaceState=function(f,g,i,p){i=encodeURI(i).replace(/%25/g,"%");if(c.getHashByUrl(i))throw Error("History.js does not support states with fragment-identifiers (hashes/anchors).");if(p!==false&&c.busy()){c.pushQueue({scope:c,callback:c.replaceState,args:arguments,queue:p});return false}c.busy(true);var l=c.createStateObject(f,g,i),o=c.getState(false),j=c.getStateByIndex(-2);c.discardState(o,l,j);c.pushState(l.data,l.title,l.url,false);return true}}if(c.emulated.pushState)if(c.getHash()&&
!c.emulated.hashChange)c.Adapter.onDomLoad(function(){c.Adapter.trigger(h,"hashchange")})};typeof c.init!=="undefined"&&c.init()})(window);
(function(h,t){var m=h.console||t,c=h.document,f=h.navigator,g=h.sessionStorage||false,i=h.setTimeout,p=h.clearTimeout,l=h.setInterval,o=h.clearInterval,j=h.JSON,r=h.alert,a=h.History=h.History||{},n=h.history;j.stringify=j.stringify||j.encode;j.parse=j.parse||j.decode;if(typeof a.init!=="undefined")throw Error("History.js Core has already been loaded...");a.init=function(){if(typeof a.Adapter==="undefined")return false;typeof a.initCore!=="undefined"&&a.initCore();typeof a.initHtml4!=="undefined"&&
a.initHtml4();return true};a.initCore=function(){if(typeof a.initCore.initialized!=="undefined")return false;else a.initCore.initialized=true;a.options=a.options||{};a.options.hashChangeInterval=a.options.hashChangeInterval||100;a.options.safariPollInterval=a.options.safariPollInterval||500;a.options.doubleCheckInterval=a.options.doubleCheckInterval||500;a.options.storeInterval=a.options.storeInterval||1E3;a.options.busyDelay=a.options.busyDelay||250;a.options.debug=a.options.debug||false;a.options.initialTitle=
a.options.initialTitle||c.title;a.intervalList=[];a.clearAllIntervals=function(){var b,d=a.intervalList;if(typeof d!=="undefined"&&d!==null){for(b=0;b<d.length;b++)o(d[b]);a.intervalList=null}};a.debug=function(){a.options.debug&&a.log.apply(a,arguments)};a.log=function(){var b=!(typeof m==="undefined"||typeof m.log==="undefined"||typeof m.log.apply==="undefined"),d=c.getElementById("log"),e,k,q,v;if(b){k=Array.prototype.slice.call(arguments);e=k.shift();typeof m.debug!=="undefined"?m.debug.apply(m,
[e,k]):m.log.apply(m,[e,k])}else e="\n"+arguments[0]+"\n";k=1;for(q=arguments.length;k<q;++k){v=arguments[k];if(typeof v==="object"&&typeof j!=="undefined")try{v=j.stringify(v)}catch(w){}e+="\n"+v+"\n"}if(d){d.value+=e+"\n-----\n";d.scrollTop=d.scrollHeight-d.clientHeight}else b||r(e);return true};a.getInternetExplorerMajorVersion=function(){return a.getInternetExplorerMajorVersion.cached=typeof a.getInternetExplorerMajorVersion.cached!=="undefined"?a.getInternetExplorerMajorVersion.cached:function(){for(var b=
3,d=c.createElement("div"),e=d.getElementsByTagName("i");(d.innerHTML="<\!--[if gt IE "+ ++b+"]><i></i><![endif]--\>")&&e[0];);return b>4?b:false}()};a.isInternetExplorer=function(){return a.isInternetExplorer.cached=typeof a.isInternetExplorer.cached!=="undefined"?a.isInternetExplorer.cached:Boolean(a.getInternetExplorerMajorVersion())};a.emulated={pushState:!Boolean(h.history&&h.history.pushState&&h.history.replaceState&&!(/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(f.userAgent)||/AppleWebKit\/5([0-2]|3[0-2])/i.test(f.userAgent))),
hashChange:Boolean(!("onhashchange"in h||"onhashchange"in c)||a.isInternetExplorer()&&a.getInternetExplorerMajorVersion()<8)};a.enabled=!a.emulated.pushState;a.bugs={setHash:Boolean(!a.emulated.pushState&&f.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(f.userAgent)),safariPoll:Boolean(!a.emulated.pushState&&f.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(f.userAgent)),ieDoubleCheck:Boolean(a.isInternetExplorer()&&a.getInternetExplorerMajorVersion()<8),
hashEscape:Boolean(a.isInternetExplorer()&&a.getInternetExplorerMajorVersion()<7)};a.isEmptyObject=function(b){for(var d in b)return false;return true};a.cloneObject=function(b){if(b){b=j.stringify(b);b=j.parse(b)}else b={};return b};a.getRootUrl=function(){var b=c.location.protocol+"//"+(c.location.hostname||c.location.host);if(c.location.port)b+=":"+c.location.port;b+="/";return b};a.getBaseHref=function(){var b=c.getElementsByTagName("base"),d=null;d="";if(b.length===1){d=b[0];d=d.href.replace(/[^\/]+$/,
"")}if(d=d.replace(/\/+$/,""))d+="/";return d};a.getBaseUrl=function(){return a.getBaseHref()||a.getBasePageUrl()||a.getRootUrl()};a.getPageUrl=function(){return((a.getState(false,false)||{}).url||a.getLocationHref()).replace(/\/+$/,"").replace(/[^\/]+$/,function(b){return/\./.test(b)?b:b+"/"})};a.getBasePageUrl=function(){return a.getLocationHref().replace(/[#\?].*/,"").replace(/[^\/]+$/,function(b){return/[^\/]$/.test(b)?"":b}).replace(/\/+$/,"")+"/"};a.getFullUrl=function(b,d){var e=b,k=b.substring(0,
1);d=typeof d==="undefined"?true:d;/[a-z]+\:\/\//.test(b)||(e=k==="/"?a.getRootUrl()+b.replace(/^\/+/,""):k==="#"?a.getPageUrl().replace(/#.*/,"")+b:k==="?"?a.getPageUrl().replace(/[\?#].*/,"")+b:d?a.getBaseUrl()+b.replace(/^(\.\/)+/,""):a.getBasePageUrl()+b.replace(/^(\.\/)+/,""));return e.replace(/\#$/,"")};a.getShortUrl=function(b){var d=a.getBaseUrl(),e=a.getRootUrl();if(a.emulated.pushState)b=b.replace(d,"");b=b.replace(e,"/");if(a.isTraditionalAnchor(b))b="./"+b;return b=b.replace(/^(\.\/)+/g,
"./").replace(/\#$/,"")};a.getLocationHref=function(b){b=b||c;if(b.URL===b.location.href)return b.location.href;if(b.location.href===decodeURIComponent(b.URL))return b.URL;if(b.location.hash&&decodeURIComponent(b.location.href.replace(/^[^#]+/,""))===b.location.hash)return b.location.href;return b.URL||b.location.href};a.store={};a.idToState=a.idToState||{};a.stateToId=a.stateToId||{};a.urlToId=a.urlToId||{};a.storedStates=a.storedStates||[];a.savedStates=a.savedStates||[];a.normalizeStore=function(){a.store.idToState=
a.store.idToState||{};a.store.urlToId=a.store.urlToId||{};a.store.stateToId=a.store.stateToId||{}};a.getState=function(b,d){if(typeof b==="undefined")b=true;if(typeof d==="undefined")d=true;var e=a.getLastSavedState();if(!e&&d)e=a.createStateObject();if(b){e=a.cloneObject(e);e.url=e.cleanUrl||e.url}return e};a.getIdByState=function(b){var d=a.extractId(b.url),e;if(!d){e=a.getStateString(b);if(typeof a.stateToId[e]!=="undefined")d=a.stateToId[e];else if(typeof a.store.stateToId[e]!=="undefined")d=
a.store.stateToId[e];else{for(;;){d=(new Date).getTime()+String(Math.random()).replace(/\D/g,"");if(typeof a.idToState[d]==="undefined"&&typeof a.store.idToState[d]==="undefined")break}a.stateToId[e]=d;a.idToState[d]=b}}return d};a.normalizeState=function(b){var d;if(!b||typeof b!=="object")b={};if(typeof b.normalized!=="undefined")return b;if(!b.data||typeof b.data!=="object")b.data={};d={};d.normalized=true;d.title=b.title||"";d.url=a.getFullUrl(b.url?decodeURIComponent(b.url):a.getLocationHref());
d.hash=a.getShortUrl(d.url);d.data=a.cloneObject(b.data);d.id=a.getIdByState(d);d.cleanUrl=d.url.replace(/\??\&_suid.*/,"");d.url=d.cleanUrl;b=!a.isEmptyObject(d.data);if(d.title||b){d.hash=a.getShortUrl(d.url).replace(/\??\&_suid.*/,"");/\?/.test(d.hash)||(d.hash+="?");d.hash+="&_suid="+d.id}d.hashedUrl=a.getFullUrl(d.hash);if((a.emulated.pushState||a.bugs.safariPoll)&&a.hasUrlDuplicate(d))d.url=d.hashedUrl;return d};a.createStateObject=function(b,d,e){b={data:b,title:d,url:encodeURIComponent(e||
"")};return b=a.normalizeState(b)};a.getStateById=function(b){b=String(b);return a.idToState[b]||a.store.idToState[b]||t};a.getStateString=function(b){b={data:a.normalizeState(b).data,title:b.title,url:b.url};return j.stringify(b)};a.getStateId=function(b){return a.normalizeState(b).id};a.getHashByState=function(b){return a.normalizeState(b).hash};a.extractId=function(b){return((b=/(.*)\&_suid=([0-9]+)$/.exec(b))?String(b[2]||""):"")||false};a.isTraditionalAnchor=function(b){return!/[\/\?\.]/.test(b)};
a.extractState=function(b,d){var e=null,k,q;d=d||false;if(k=a.extractId(b))e=a.getStateById(k);if(!e){q=a.getFullUrl(b);if(k=a.getIdByUrl(q)||false)e=a.getStateById(k);if(!e&&d&&!a.isTraditionalAnchor(b))e=a.createStateObject(null,null,q)}return e};a.getIdByUrl=function(b){return a.urlToId[b]||a.store.urlToId[b]||t};a.getLastSavedState=function(){return a.savedStates[a.savedStates.length-1]||t};a.getLastStoredState=function(){return a.storedStates[a.storedStates.length-1]||t};a.hasUrlDuplicate=function(b){var d=
false;return d=(d=a.extractState(b.url))&&d.id!==b.id};a.storeState=function(b){a.urlToId[b.url]=b.id;a.storedStates.push(a.cloneObject(b));return b};a.isLastSavedState=function(b){var d=false;if(a.savedStates.length){b=b.id;d=a.getLastSavedState();d=d.id;d=b===d}return d};a.saveState=function(b){if(a.isLastSavedState(b))return false;a.savedStates.push(a.cloneObject(b));return true};a.getStateByIndex=function(b){var d=null;return d=typeof b==="undefined"?a.savedStates[a.savedStates.length-1]:b<0?
a.savedStates[a.savedStates.length+b]:a.savedStates[b]};a.getHash=function(b){if(!b)b=c.location;return b.href.replace(/^[^#]*/,"").substr(1)};a.unescapeHash=function(b){b=a.normalizeHash(b);return b=decodeURIComponent(b)};a.normalizeHash=function(b){return b.replace(/[^#]*#/,"").replace(/#.*/,"")};a.setHash=function(b,d){var e;if(d!==false&&a.busy()){a.pushQueue({scope:a,callback:a.setHash,args:arguments,queue:d});return false}a.busy(true);if((e=a.extractState(b,true))&&!a.emulated.pushState)a.pushState(e.data,
e.title,e.url,false);else if(a.getHash()!==b)if(a.bugs.setHash){e=a.getPageUrl();a.pushState(null,null,e+"#"+b,false)}else c.location.hash=b;return a};a.escapeHash=function(b){b=a.normalizeHash(b);b=h.encodeURIComponent(b);a.bugs.hashEscape||(b=b.replace(/\%21/g,"!").replace(/\%26/g,"&").replace(/\%3D/g,"=").replace(/\%3F/g,"?"));return b};a.getHashByUrl=function(b){b=String(b).replace(/([^#]*)#?([^#]*)#?(.*)/,"$2");return b=a.unescapeHash(b)};a.setTitle=function(b){var d=b.title,e;if(!d)if((e=a.getStateByIndex(0))&&
e.url===b.url)d=e.title||a.options.initialTitle;try{c.getElementsByTagName("title")[0].innerHTML=d.replace("<","&lt;").replace(">","&gt;").replace(" & "," &amp; ")}catch(k){}c.title=d;return a};a.queues=[];a.busy=function(b){if(typeof b!=="undefined")a.busy.flag=b;else if(typeof a.busy.flag==="undefined")a.busy.flag=false;if(!a.busy.flag){p(a.busy.timeout);var d=function(){var e,k;if(!a.busy.flag)for(e=a.queues.length-1;e>=0;--e){k=a.queues[e];if(k.length!==0){k=k.shift();a.fireQueueItem(k);a.busy.timeout=
i(d,a.options.busyDelay)}}};a.busy.timeout=i(d,a.options.busyDelay)}return a.busy.flag};a.busy.flag=false;a.fireQueueItem=function(b){return b.callback.apply(b.scope||a,b.args||[])};a.pushQueue=function(b){a.queues[b.queue||0]=a.queues[b.queue||0]||[];a.queues[b.queue||0].push(b);return a};a.queue=function(b,d){if(typeof b==="function")b={callback:b};if(typeof d!=="undefined")b.queue=d;a.busy()?a.pushQueue(b):a.fireQueueItem(b);return a};a.clearQueue=function(){a.busy.flag=false;a.queues=[];return a};
a.stateChanged=false;a.doubleChecker=false;a.doubleCheckComplete=function(){a.stateChanged=true;a.doubleCheckClear();return a};a.doubleCheckClear=function(){if(a.doubleChecker){p(a.doubleChecker);a.doubleChecker=false}return a};a.doubleCheck=function(b){a.stateChanged=false;a.doubleCheckClear();if(a.bugs.ieDoubleCheck)a.doubleChecker=i(function(){a.doubleCheckClear();a.stateChanged||b();return true},a.options.doubleCheckInterval);return a};a.safariStatePoll=function(){var b=a.extractState(a.getLocationHref());
if(!a.isLastSavedState(b)){b||a.createStateObject();a.Adapter.trigger(h,"popstate");return a}};a.back=function(b){if(b!==false&&a.busy()){a.pushQueue({scope:a,callback:a.back,args:arguments,queue:b});return false}a.busy(true);a.doubleCheck(function(){a.back(false)});n.go(-1);return true};a.forward=function(b){if(b!==false&&a.busy()){a.pushQueue({scope:a,callback:a.forward,args:arguments,queue:b});return false}a.busy(true);a.doubleCheck(function(){a.forward(false)});n.go(1);return true};a.go=function(b,
d){var e;if(b>0)for(e=1;e<=b;++e)a.forward(d);else if(b<0)for(e=-1;e>=b;--e)a.back(d);else throw Error("History.go: History.go requires a positive or negative integer passed.");return a};if(a.emulated.pushState){var s=function(){};a.pushState=a.pushState||s;a.replaceState=a.replaceState||s}else{a.onPopState=function(b,d){var e=false;e=false;a.doubleCheckComplete();if(e=a.getHash()){if(e=a.extractState(e||a.getLocationHref(),true))a.replaceState(e.data,e.title,e.url,false);else{a.Adapter.trigger(h,
"anchorchange");a.busy(false)}return a.expectedStateId=false}(e=(e=a.Adapter.extractEventData("state",b,d)||false)?a.getStateById(e):a.expectedStateId?a.getStateById(a.expectedStateId):a.extractState(a.getLocationHref()))||(e=a.createStateObject(null,null,a.getLocationHref()));a.expectedStateId=false;if(a.isLastSavedState(e)){a.busy(false);return false}a.storeState(e);a.saveState(e);a.setTitle(e);a.Adapter.trigger(h,"statechange");a.busy(false);return true};a.Adapter.bind(h,"popstate",a.onPopState);
a.pushState=function(b,d,e,k){if(a.getHashByUrl(e)&&a.emulated.pushState)throw Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(k!==false&&a.busy()){a.pushQueue({scope:a,callback:a.pushState,args:arguments,queue:k});return false}a.busy(true);var q=a.createStateObject(b,d,e);if(a.isLastSavedState(q))a.busy(false);else{a.storeState(q);a.expectedStateId=q.id;n.pushState(q.id,q.title,q.url);a.Adapter.trigger(h,"popstate")}return true};a.replaceState=function(b,
d,e,k){if(a.getHashByUrl(e)&&a.emulated.pushState)throw Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(k!==false&&a.busy()){a.pushQueue({scope:a,callback:a.replaceState,args:arguments,queue:k});return false}a.busy(true);var q=a.createStateObject(b,d,e);if(a.isLastSavedState(q))a.busy(false);else{a.storeState(q);a.expectedStateId=q.id;n.replaceState(q.id,q.title,q.url);a.Adapter.trigger(h,"popstate")}return true}}if(g)try{a.store=j.parse(g.getItem("History.store"))||
{}}catch(u){a.store={}}else a.store={};a.normalizeStore();a.Adapter.bind(h,"beforeunload",a.clearAllIntervals);a.Adapter.bind(h,"unload",a.clearAllIntervals);a.saveState(a.storeState(a.extractState(a.getLocationHref(),true)));if(g){a.onUnload=function(){var b,d;try{b=j.parse(g.getItem("History.store"))||{}}catch(e){b={}}b.idToState=b.idToState||{};b.urlToId=b.urlToId||{};b.stateToId=b.stateToId||{};for(d in a.idToState)if(a.idToState.hasOwnProperty(d))b.idToState[d]=a.idToState[d];for(d in a.urlToId)if(a.urlToId.hasOwnProperty(d))b.urlToId[d]=
a.urlToId[d];for(d in a.stateToId)if(a.stateToId.hasOwnProperty(d))b.stateToId[d]=a.stateToId[d];a.store=b;a.normalizeStore();g.setItem("History.store",j.stringify(b))};a.intervalList.push(l(a.onUnload,a.options.storeInterval));a.Adapter.bind(h,"beforeunload",a.onUnload);a.Adapter.bind(h,"unload",a.onUnload)}if(!a.emulated.pushState){a.bugs.safariPoll&&a.intervalList.push(l(a.safariStatePoll,a.options.safariPollInterval));if(f.vendor==="Apple Computer, Inc."||(f.appCodeName||"")==="Mozilla"){a.Adapter.bind(h,
"hashchange",function(){a.Adapter.trigger(h,"popstate")});if(a.getHash())a.Adapter.onDomLoad(function(){a.Adapter.trigger(h,"hashchange")})}}};a.init()})(window);
