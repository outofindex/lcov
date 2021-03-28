var l=(e,r)=>()=>(r||(r={exports:{}},e(r.exports,r)),r.exports);var N=l(V=>{"use strict";Object.defineProperty(V,"__esModule",{value:!0});function Yr(e){return e==null?"":typeof e=="string"||e instanceof String?e:JSON.stringify(e)}V.toCommandValue=Yr});var ie=l(S=>{"use strict";var Jr=S&&S.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r};Object.defineProperty(S,"__esModule",{value:!0});var Wr=Jr(require("os")),te=N();function oe(e,r,t){let n=new ne(e,r,t);process.stdout.write(n.toString()+Wr.EOL)}S.issueCommand=oe;function Zr(e,r=""){oe(e,{},r)}S.issue=Zr;var se="::",ne=class{constructor(r,t,n){r||(r="missing.command"),this.command=r,this.properties=t,this.message=n}toString(){let r=se+this.command;if(this.properties&&Object.keys(this.properties).length>0){r+=" ";let t=!0;for(let n in this.properties)if(this.properties.hasOwnProperty(n)){let o=this.properties[n];o&&(t?t=!1:r+=",",r+=`${n}=${Qr(o)}`)}}return r+=`${se}${Kr(this.message)}`,r}};function Kr(e){return te.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function Qr(e){return te.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}});var le=l($=>{"use strict";var ue=$&&$.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r};Object.defineProperty($,"__esModule",{value:!0});var ae=ue(require("fs")),Xr=ue(require("os")),et=N();function rt(e,r){let t=process.env[`GITHUB_${e}`];if(!t)throw new Error(`Unable to find environment variable for file command ${e}`);if(!ae.existsSync(t))throw new Error(`Missing file at path: ${t}`);ae.appendFileSync(t,`${et.toCommandValue(r)}${Xr.EOL}`,{encoding:"utf8"})}$.issueCommand=rt});var ge=l(p=>{"use strict";var tt=p&&p.__awaiter||function(e,r,t,n){function o(s){return s instanceof t?s:new t(function(u){u(s)})}return new(t||(t=Promise))(function(s,u){function i(h){try{a(n.next(h))}catch(d){u(d)}}function f(h){try{a(n.throw(h))}catch(d){u(d)}}function a(h){h.done?s(h.value):o(h.value).then(i,f)}a((n=n.apply(e,r||[])).next())})},ce=p&&p.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r};Object.defineProperty(p,"__esModule",{value:!0});var y=ie(),fe=le(),nt=N(),F=ce(require("os")),ot=ce(require("path")),he;(function(e){e[e.Success=0]="Success",e[e.Failure=1]="Failure"})(he=p.ExitCode||(p.ExitCode={}));function st(e,r){let t=nt.toCommandValue(r);if(process.env[e]=t,process.env.GITHUB_ENV||""){let o="_GitHubActionsFileCommandDelimeter_",s=`${e}<<${o}${F.EOL}${t}${F.EOL}${o}`;fe.issueCommand("ENV",s)}else y.issueCommand("set-env",{name:e},t)}p.exportVariable=st;function it(e){y.issueCommand("add-mask",{},e)}p.setSecret=it;function ut(e){process.env.GITHUB_PATH||""?fe.issueCommand("PATH",e):y.issueCommand("add-path",{},e),process.env.PATH=`${e}${ot.delimiter}${process.env.PATH}`}p.addPath=ut;function at(e,r){let t=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(r&&r.required&&!t)throw new Error(`Input required and not supplied: ${e}`);return t.trim()}p.getInput=at;function lt(e,r){y.issueCommand("set-output",{name:e},r)}p.setOutput=lt;function ct(e){y.issue("echo",e?"on":"off")}p.setCommandEcho=ct;function ft(e){process.exitCode=he.Failure,de(e)}p.setFailed=ft;function ht(){return process.env.RUNNER_DEBUG==="1"}p.isDebug=ht;function dt(e){y.issueCommand("debug",{},e)}p.debug=dt;function de(e){y.issue("error",e instanceof Error?e.toString():e)}p.error=de;function pt(e){y.issue("warning",e instanceof Error?e.toString():e)}p.warning=pt;function vt(e){process.stdout.write(e+F.EOL)}p.info=vt;function pe(e){y.issue("group",e)}p.startGroup=pe;function ve(){y.issue("endgroup")}p.endGroup=ve;function gt(e,r){return tt(this,void 0,void 0,function*(){pe(e);let t;try{t=yield r()}finally{ve()}return t})}p.group=gt;function mt(e,r){y.issueCommand("save-state",{name:e},r)}p.saveState=mt;function yt(e){return process.env[`STATE_${e}`]||""}p.getState=yt});var ye=l((bn,me)=>{var bt=["agent","auth","createConnection","defaultPort","family","headers","host","hostname","insecureHTTPParser","localAddress","lookup","maxHeaderSize","method","path","port","protocol","setHost","socketPath","timeout","ca","cert","ciphers","clientCertEngine","crl","dhparam","ecdhCurve","honorCipherOrder","key","passphrase","pfx","rejectUnauthorized","secureOptions","secureProtocol","servername","sessionIdContext","highWaterMark"];me.exports=(e={})=>(r=e)=>{var t={protocol:r.protocol||"http:",hostname:r.hostname||"localhost",port:r.port||80,method:(r.method||"GET").toUpperCase(),path:r.path||"/",headers:r.headers?JSON.parse(JSON.stringify(r.headers)):{},timeout:r.timeout||5e3};return{options:bt.reduce((n,o)=>(t[o]!==void 0?n[o]=t[o]:r[o]!==void 0&&(n[o]=r[o]),n),{})}}});var we=l((wn,be)=>{var wt=require("url");be.exports=e=>({options:r})=>(e=typeof e=="string"?wt.parse(e):e,r.protocol=e.protocol,r.hostname=e.hostname,r.port=e.port,r.path=e.path,{options:r})});var _e=l((Cn,Ce)=>{var Ct=require("url");Ce.exports=e=>({options:r})=>{r.path=(()=>{var n=`${r.protocol}//${r.hostname}`;return r.port&&!/^(?:80|443)$/.test(r.port)&&(n+=`:${r.port}`),n+=r.path,n})(),r.headers.host=r.hostname;var t=typeof e=="string"?Ct.parse(e):e;return r.protocol=t.protocol,r.hostname=t.hostname,r.port=t.port,{options:r}}});var qe=l((_n,Oe)=>{var je=require("querystring");Oe.exports=(e,r={})=>({options:t})=>{if(r.followed)return{options:t};if(typeof e=="object"){e=JSON.parse(JSON.stringify(e));var[n,o]=t.path.split("?");o=je.parse(o),e=_t(je.stringify(Object.assign(o,e))),t.path=n+(e?`?${e}`:"")}else if(typeof e=="string"){var[n,o]=t.path.split("?");t.path=n+(o?`?${o}&${e}`:`?${e}`)}return{options:t}};var _t=e=>e.replace(/[!'()*]/g,r=>"%"+r.charCodeAt(0).toString(16).toUpperCase())});var xe=l((On,Se)=>{var Ot=require("querystring");Se.exports=e=>({options:r,options:{headers:t}})=>{var n=Object.keys(t).find(s=>s.toLowerCase()==="content-type");n||(t["content-type"]="application/x-www-form-urlencoded");var o=typeof e=="string"?e:typeof e=="object"?jt(Ot.stringify(JSON.parse(JSON.stringify(e)))):"";return{options:r,body:o}};var jt=e=>e.replace(/[!'()*]/g,r=>"%"+r.charCodeAt(0).toString(16).toUpperCase())});var ke=l((jn,Ee)=>{Ee.exports=e=>({options:r,options:{headers:t}})=>{e=typeof e=="object"?JSON.stringify(e):e||"";var n=Object.keys(t).find(o=>o.toLowerCase()==="content-type");return n||(t["content-type"]="application/json"),{options:r,body:e}}});var $e=l((qn,Te)=>{Te.exports=e=>({options:r})=>({options:r,body:e})});var Me=l((Sn,Pe)=>{Pe.exports=({user:e,pass:r})=>({options:t,options:{headers:n},body:o})=>(n.Authorization=`Basic ${Buffer.from(`${e}:${r||""}`,"utf8").toString("base64")}`,{options:t,body:o})});var Ne=l((xn,Be)=>{var qt=require("fs"),St=require("stream");Be.exports=()=>({options:e,options:{headers:r},body:t})=>new Promise(n=>{var o=Object.keys(r).find(i=>i.toLowerCase()==="content-length"),s=Object.keys(r).find(i=>i.toLowerCase()==="transfer-encoding");if(r[o]||r[s]==="chunked"){n({options:e,body:t});return}var u=(i,f,a)=>{typeof i=="string"?a(null,Buffer.byteLength(i)):i instanceof Buffer||i&&i.constructor&&i.constructor.name==="BufferListStream"?a(null,i.length):i instanceof St.Stream?i.hasOwnProperty("fd")?qt.stat(i.path,(h,d)=>a(h,d&&d.size)):i.hasOwnProperty("httpVersion")?a(!i.headers["content-length"],parseInt(i.headers["content-length"])):i._items?function h(d){if(d===i._items.length){a(null,f);return}var w=i._items[d];w._knownLength?(f+=parseInt(w._knownLength),h(++d)):u(w,f,(j,U)=>{if(j){a(j);return}f+=U,h(++d)})}(0):a(!0):a(!0)};u(t,0,(i,f)=>{i?r["transfer-encoding"]="chunked":r["content-length"]=f,n({options:e,body:t})})})});var Ge=l((En,Ae)=>{var Ie={};Ae.exports=Ie;var Le={reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29],black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],gray:[90,39],grey:[90,39],brightRed:[91,39],brightGreen:[92,39],brightYellow:[93,39],brightBlue:[94,39],brightMagenta:[95,39],brightCyan:[96,39],brightWhite:[97,39],bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgGray:[100,49],bgGrey:[100,49],bgBrightRed:[101,49],bgBrightGreen:[102,49],bgBrightYellow:[103,49],bgBrightBlue:[104,49],bgBrightMagenta:[105,49],bgBrightCyan:[106,49],bgBrightWhite:[107,49],blackBG:[40,49],redBG:[41,49],greenBG:[42,49],yellowBG:[43,49],blueBG:[44,49],magentaBG:[45,49],cyanBG:[46,49],whiteBG:[47,49]};Object.keys(Le).forEach(function(e){var r=Le[e],t=Ie[e]=[];t.open="["+r[0]+"m",t.close="["+r[1]+"m"})});var Re=l((kn,ze)=>{"use strict";ze.exports=function(e,r){r=r||process.argv;var t=r.indexOf("--"),n=/^-{1,2}/.test(e)?"":"--",o=r.indexOf(n+e);return o!==-1&&(t===-1?!0:o<t)}});var Ve=l((Tn,Ue)=>{"use strict";var xt=require("os"),b=Re(),v=process.env,x=void 0;b("no-color")||b("no-colors")||b("color=false")?x=!1:(b("color")||b("colors")||b("color=true")||b("color=always"))&&(x=!0);"FORCE_COLOR"in v&&(x=v.FORCE_COLOR.length===0||parseInt(v.FORCE_COLOR,10)!==0);function Et(e){return e===0?!1:{level:e,hasBasic:!0,has256:e>=2,has16m:e>=3}}function kt(e){if(x===!1)return 0;if(b("color=16m")||b("color=full")||b("color=truecolor"))return 3;if(b("color=256"))return 2;if(e&&!e.isTTY&&x!==!0)return 0;var r=x?1:0;if(process.platform==="win32"){var t=xt.release().split(".");return Number(process.versions.node.split(".")[0])>=8&&Number(t[0])>=10&&Number(t[2])>=10586?Number(t[2])>=14931?3:2:1}if("CI"in v)return["TRAVIS","CIRCLECI","APPVEYOR","GITLAB_CI"].some(function(o){return o in v})||v.CI_NAME==="codeship"?1:r;if("TEAMCITY_VERSION"in v)return/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(v.TEAMCITY_VERSION)?1:0;if("TERM_PROGRAM"in v){var n=parseInt((v.TERM_PROGRAM_VERSION||"").split(".")[0],10);switch(v.TERM_PROGRAM){case"iTerm.app":return n>=3?3:2;case"Hyper":return 3;case"Apple_Terminal":return 2}}return/-256(color)?$/i.test(v.TERM)?2:/^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(v.TERM)||"COLORTERM"in v?1:(v.TERM==="dumb",r)}function D(e){var r=kt(e);return Et(r)}Ue.exports={supportsColor:D,stdout:D(process.stdout),stderr:D(process.stderr)}});var De=l(($n,Fe)=>{Fe.exports=function(r,t){var n="";r=r||"Run the trap, drop the bass",r=r.split("");var o={a:["@","\u0104","\u023A","\u0245","\u0394","\u039B","\u0414"],b:["\xDF","\u0181","\u0243","\u026E","\u03B2","\u0E3F"],c:["\xA9","\u023B","\u03FE"],d:["\xD0","\u018A","\u0500","\u0501","\u0502","\u0503"],e:["\xCB","\u0115","\u018E","\u0258","\u03A3","\u03BE","\u04BC","\u0A6C"],f:["\u04FA"],g:["\u0262"],h:["\u0126","\u0195","\u04A2","\u04BA","\u04C7","\u050A"],i:["\u0F0F"],j:["\u0134"],k:["\u0138","\u04A0","\u04C3","\u051E"],l:["\u0139"],m:["\u028D","\u04CD","\u04CE","\u0520","\u0521","\u0D69"],n:["\xD1","\u014B","\u019D","\u0376","\u03A0","\u048A"],o:["\xD8","\xF5","\xF8","\u01FE","\u0298","\u047A","\u05DD","\u06DD","\u0E4F"],p:["\u01F7","\u048E"],q:["\u09CD"],r:["\xAE","\u01A6","\u0210","\u024C","\u0280","\u042F"],s:["\xA7","\u03DE","\u03DF","\u03E8"],t:["\u0141","\u0166","\u0373"],u:["\u01B1","\u054D"],v:["\u05D8"],w:["\u0428","\u0460","\u047C","\u0D70"],x:["\u04B2","\u04FE","\u04FC","\u04FD"],y:["\xA5","\u04B0","\u04CB"],z:["\u01B5","\u0240"]};return r.forEach(function(s){s=s.toLowerCase();var u=o[s]||[" "],i=Math.floor(Math.random()*u.length);typeof o[s]!="undefined"?n+=o[s][i]:n+=s}),n}});var Ye=l((Pn,He)=>{He.exports=function(r,t){r=r||"   he is here   ";var n={up:["\u030D","\u030E","\u0304","\u0305","\u033F","\u0311","\u0306","\u0310","\u0352","\u0357","\u0351","\u0307","\u0308","\u030A","\u0342","\u0313","\u0308","\u034A","\u034B","\u034C","\u0303","\u0302","\u030C","\u0350","\u0300","\u0301","\u030B","\u030F","\u0312","\u0313","\u0314","\u033D","\u0309","\u0363","\u0364","\u0365","\u0366","\u0367","\u0368","\u0369","\u036A","\u036B","\u036C","\u036D","\u036E","\u036F","\u033E","\u035B","\u0346","\u031A"],down:["\u0316","\u0317","\u0318","\u0319","\u031C","\u031D","\u031E","\u031F","\u0320","\u0324","\u0325","\u0326","\u0329","\u032A","\u032B","\u032C","\u032D","\u032E","\u032F","\u0330","\u0331","\u0332","\u0333","\u0339","\u033A","\u033B","\u033C","\u0345","\u0347","\u0348","\u0349","\u034D","\u034E","\u0353","\u0354","\u0355","\u0356","\u0359","\u035A","\u0323"],mid:["\u0315","\u031B","\u0300","\u0301","\u0358","\u0321","\u0322","\u0327","\u0328","\u0334","\u0335","\u0336","\u035C","\u035D","\u035E","\u035F","\u0360","\u0362","\u0338","\u0337","\u0361"," \u0489"]},o=[].concat(n.up,n.down,n.mid);function s(f){var a=Math.floor(Math.random()*f);return a}function u(f){var a=!1;return o.filter(function(h){a=h===f}),a}function i(f,a){var h="",d,w;a=a||{},a.up=typeof a.up!="undefined"?a.up:!0,a.mid=typeof a.mid!="undefined"?a.mid:!0,a.down=typeof a.down!="undefined"?a.down:!0,a.size=typeof a.size!="undefined"?a.size:"maxi",f=f.split("");for(w in f)if(!u(w)){switch(h=h+f[w],d={up:0,down:0,mid:0},a.size){case"mini":d.up=s(8),d.mid=s(2),d.down=s(8);break;case"maxi":d.up=s(16)+3,d.mid=s(4)+1,d.down=s(64)+3;break;default:d.up=s(8)+1,d.mid=s(6)/2,d.down=s(8)+1;break}var j=["up","mid","down"];for(var U in j)for(var B=j[U],re=0;re<=d[B];re++)a[B]&&(h=h+n[B][s(n[B].length)])}return h}return i(r,t)}});var We=l((Mn,Je)=>{Je.exports=function(e){return function(r,t,n){if(r===" ")return r;switch(t%3){case 0:return e.red(r);case 1:return e.white(r);case 2:return e.blue(r)}}}});var Ke=l((Bn,Ze)=>{Ze.exports=function(e){return function(r,t,n){return t%2==0?r:e.inverse(r)}}});var Xe=l((Nn,Qe)=>{Qe.exports=function(e){var r=["red","yellow","green","blue","magenta"];return function(t,n,o){return t===" "?t:e[r[n++%r.length]](t)}}});var rr=l((An,er)=>{er.exports=function(e){var r=["underline","inverse","grey","yellow","red","green","blue","white","cyan","magenta","brightYellow","brightRed","brightGreen","brightBlue","brightWhite","brightCyan","brightMagenta"];return function(t,n,o){return t===" "?t:e[r[Math.round(Math.random()*(r.length-2))]](t)}}});var ir=l((Ln,tr)=>{var c={};tr.exports=c;c.themes={};var Tt=require("util"),q=c.styles=Ge(),nr=Object.defineProperties,$t=new RegExp(/[\r\n]+/g);c.supportsColor=Ve().supportsColor;typeof c.enabled=="undefined"&&(c.enabled=c.supportsColor()!==!1);c.enable=function(){c.enabled=!0};c.disable=function(){c.enabled=!1};c.stripColors=c.strip=function(e){return(""+e).replace(/\x1B\[\d+m/g,"")};var In=c.stylize=function(r,t){if(!c.enabled)return r+"";var n=q[t];return!n&&t in c?c[t](r):n.open+r+n.close},Pt=/[|\\{}()[\]^$+*?.]/g,Mt=function(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(Pt,"\\$&")};function or(e){var r=function t(){return Nt.apply(t,arguments)};return r._styles=e,r.__proto__=Bt,r}var sr=function(){var e={};return q.grey=q.gray,Object.keys(q).forEach(function(r){q[r].closeRe=new RegExp(Mt(q[r].close),"g"),e[r]={get:function(){return or(this._styles.concat(r))}}}),e}(),Bt=nr(function(){},sr);function Nt(){var e=Array.prototype.slice.call(arguments),r=e.map(function(u){return u!=null&&u.constructor===String?u:Tt.inspect(u)}).join(" ");if(!c.enabled||!r)return r;for(var t=r.indexOf(`
`)!=-1,n=this._styles,o=n.length;o--;){var s=q[n[o]];r=s.open+r.replace(s.closeRe,s.open)+s.close,t&&(r=r.replace($t,function(u){return s.close+u+s.open}))}return r}c.setTheme=function(e){if(typeof e=="string"){console.log("colors.setTheme now only accepts an object, not a string.  If you are trying to set a theme from a file, it is now your (the caller's) responsibility to require the file.  The old syntax looked like colors.setTheme(__dirname + '/../themes/generic-logging.js'); The new syntax looks like colors.setTheme(require(__dirname + '/../themes/generic-logging.js'));");return}for(var r in e)(function(t){c[t]=function(n){if(typeof e[t]=="object"){var o=n;for(var s in e[t])o=c[e[t][s]](o);return o}return c[e[t]](n)}})(r)};function At(){var e={};return Object.keys(sr).forEach(function(r){e[r]={get:function(){return or([r])}}}),e}var It=function(r,t){var n=t.split("");return n=n.map(r),n.join("")};c.trap=De();c.zalgo=Ye();c.maps={};c.maps.america=We()(c);c.maps.zebra=Ke()(c);c.maps.rainbow=Xe()(c);c.maps.random=rr()(c);for(var Lt in c.maps)(function(e){c[e]=function(r){return It(c.maps[e],r)}})(Lt);nr(c,At())});var H=l((Gn,ur)=>{var Gt=ir();ur.exports=Gt});var ar=l(Y=>{"use strict";Y.indent=function(r){return new Array(r+1).join(" ")};Y.getMaxIndexLength=function(e){var r=0;return Object.getOwnPropertyNames(e).forEach(function(t){e[t]!==void 0&&(r=Math.max(r,t.length))}),r}});var cr=l((Rn,lr)=>{lr.exports={_from:"prettyjson@^1.2.1",_id:"prettyjson@1.2.1",_inBundle:!1,_integrity:"sha1-/P+rQdGcq0365eV15kJGYZsS0ok=",_location:"/prettyjson",_phantomChildren:{},_requested:{type:"range",registry:!0,raw:"prettyjson@^1.2.1",name:"prettyjson",escapedName:"prettyjson",rawSpec:"^1.2.1",saveSpec:null,fetchSpec:"^1.2.1"},_requiredBy:["/"],_resolved:"https://registry.npmjs.org/prettyjson/-/prettyjson-1.2.1.tgz",_shasum:"fcffab41d19cab4dfae5e575e64246619b12d289",_spec:"prettyjson@^1.2.1",_where:"/home/s/projects/request-logs",author:{name:"Rafael de Oleza",email:"rafeca@gmail.com",url:"https://github.com/rafeca"},bin:{prettyjson:"bin/prettyjson"},bugs:{url:"https://github.com/rafeca/prettyjson/issues"},bundleDependencies:!1,dependencies:{colors:"^1.1.2",minimist:"^1.2.0"},deprecated:!1,description:"Package for formatting JSON data in a coloured YAML-style, perfect for CLI output",devDependencies:{coveralls:"^2.11.15",istanbul:"^0.4.5",jshint:"^2.9.4",mocha:"^3.1.2","mocha-lcov-reporter":"^1.2.0",should:"^11.1.1"},homepage:"http://rafeca.com/prettyjson",keywords:["json","cli","formatting","colors"],license:"MIT",main:"./lib/prettyjson",name:"prettyjson",repository:{type:"git",url:"git+https://github.com/rafeca/prettyjson.git"},scripts:{changelog:"git log $(git describe --tags --abbrev=0)..HEAD --pretty='* %s' --first-parent",coverage:"istanbul cover _mocha --report lcovonly -- -R spec",coveralls:"npm run coverage && cat ./coverage/lcov.info | coveralls && rm -rf ./coverage",jshint:"jshint lib/*.js test/*.js",test:"npm run jshint && mocha --reporter spec",testwin:"node ./node_modules/mocha/bin/mocha --reporter spec"},version:"1.2.1"}});var fr=l(P=>{"use strict";var C=H(),_=ar();P.version=cr().version;var A=function(e,r,t){return!!(typeof e=="boolean"||typeof e=="number"||typeof e=="function"||e===null||e instanceof Date||typeof e=="string"&&e.indexOf(`
`)===-1||t.inlineArrays&&!r&&Array.isArray(e)&&A(e[0],!0,t))},zt=function(e,r){if(r.noColor)return e;if(typeof e=="string")return r.stringColor?C[r.stringColor](e):e;var t=e+"";return e===!0?C.green(t):e===!1?C.red(t):e===null?C.grey(t):typeof e=="number"?C[r.numberColor](t):typeof e=="function"?"function() {}":Array.isArray(e)?e.join(", "):t},Rt=function(e,r){var t=e.split(`
`);return t=t.map(function(n){return _.indent(r)+n}),t.join(`
`)},E=function(e,r,t){if(A(e,!1,r))return[_.indent(t)+zt(e,r)];if(typeof e=="string")return[_.indent(t)+'"""',Rt(e,t+r.defaultIndentation),_.indent(t)+'"""'];if(Array.isArray(e)){if(e.length===0)return[_.indent(t)+r.emptyArrayMsg];var n=[];return e.forEach(function(i){var f="- ";r.noColor||(f=C[r.dashColor](f)),f=_.indent(t)+f,A(i,!1,r)?(f+=E(i,r,0)[0],n.push(f)):(n.push(f),n.push.apply(n,E(i,r,t+r.defaultIndentation)))}),n}if(e instanceof Error)return E({message:e.message,stack:e.stack.split(`
`)},r,t);var o=r.noAlign?0:_.getMaxIndexLength(e),s,u=[];return Object.getOwnPropertyNames(e).forEach(function(i){if(s=i+": ",r.noColor||(s=C[r.keysColor](s)),s=_.indent(t)+s,e[i]!==void 0)if(A(e[i],!1,r)){var f=r.noAlign?0:o-i.length;s+=E(e[i],r,f)[0],u.push(s)}else u.push(s),u.push.apply(u,E(e[i],r,t+r.defaultIndentation))}),u};P.render=function(r,t,n){return n=n||0,t=t||{},t.emptyArrayMsg=t.emptyArrayMsg||"(empty array)",t.keysColor=t.keysColor||"green",t.dashColor=t.dashColor||"green",t.numberColor=t.numberColor||"blue",t.defaultIndentation=t.defaultIndentation||2,t.noColor=!!t.noColor,t.noAlign=!!t.noAlign,t.stringColor=t.stringColor||null,E(r,t,n).join(`
`)};P.renderString=function(r,t,n){var o="",s;if(typeof r!="string"||r==="")return"";if(r[0]!=="{"&&r[0]!=="["){var u;r.indexOf("{")===-1?u=r.indexOf("["):r.indexOf("[")===-1||r.indexOf("{")<r.indexOf("[")?u=r.indexOf("{"):u=r.indexOf("["),o+=r.substr(0,u)+`
`,r=r.substr(u)}try{s=JSON.parse(r)}catch(i){return C.red("Error:")+" Not valid JSON!"}return o+=P.render(s,t,n),o}});var dr=l((Vn,hr)=>{var g=H(),Ut=fr(),J;hr.exports=e=>(J=e,J.nocolor&&(g.enabled=!1),{header:Vt,method:Ft,status:Dt,url:Ht,content:Yt});var Vt=e=>/req/.test(e)?g.cyan.inverse(e):/res/.test(e)?g.yellow.inverse(e):/json|body|form/.test(e)?g.white.inverse(e):null,Ft=e=>/GET/.test(e)?g.green(e):/POST|PUT/.test(e)?g.cyan(e):/DELETE/.test(e)?g.red(e):/HEAD|OPTIONS|CONNECT/.test(e)?g.yellow(e):/TRACE/.test(e)?g.gray(e):null,Dt=(e,r)=>/^1/.test(e)?g.white(`${e} ${r}`):/^2/.test(e)?g.green(`${e} ${r}`):/^3/.test(e)?g.yellow(`${e} ${r}`):/^4/.test(e)?g.red(`${e} ${r}`):/^5/.test(e)?g.red.bold(`${e} ${r}`):null,Ht=({protocol:e,hostname:r,port:t,path:n})=>g.white.inverse([`${e}//`,r,t?`:${t}`:"",n||"/"].join("")),Yt=e=>Ut.render(e,J.nocolor?{noColor:!0}:{keysColor:"brightBlue",stringColor:"white",numberColor:"cyan",dashColor:"white",inlineArrays:!0},4)});var yr=l((Fn,pr)=>{var Jt=require("querystring"),m,O,vr,gr,mr,k;pr.exports=e=>(m=e,{header:O,method:vr,status:gr,url:mr,content:k}=dr()(m),{request:Wt,response:I});var Wt={send:({req:e,body:r,options:t})=>{if(m.req&&e&&(console.log(O("req"),vr(t.method),mr(t)),console.log(k(Object.keys(e._headerNames).reduce((o,s)=>(o[e._headerNames[s]]=e._headers[s],o),{})))),m.req&&m.body&&r&&(console.log(O("body")),r.constructor.name==="MultiStream"?r._raw.forEach(o=>{console.log(typeof o=="object"?o.path?`file stream: ${o.path}`:o.hasOwnProperty("httpVersion")?["http stream:",o.headers["content-type"],o.headers["content-length"]].filter(Boolean).join(" "):o:o)}):console.log(r)),m.req&&m.json&&r){var n=Object.keys(t.headers).find(o=>o.toLowerCase()==="content-type");/json|javascript/.test(t.headers[n])?(console.log(O("json")),console.log(k(JSON.parse(r)))):/application\/x-www-form-urlencoded/.test(t.headers[n])&&(console.log(O("form")),console.log(k(Jt.parse(r))))}}},I={send:({res:e})=>{m.res&&e&&(console.log(O("res"),gr(e.statusCode,e.statusMessage)),console.log(k(e.headers)))},string:({body:e})=>{m.res&&m.body&&e&&(console.log(O("body")),console.log(e))},parse:({res:e,body:r})=>{if(m.res&&m.json&&r){var t=Object.keys(e.headers).find(o=>o.toLowerCase()==="content-type"),n=/json|javascript/.test(e.headers[t])?"json":/application\/x-www-form-urlencoded/.test(e.headers[t])?"form":null;n&&(console.log(O(n)),console.log(k(r)))}},status:({res:e,body:r,raw:t})=>{I.send({res:e}),I.string({body:t}),I.parse({res:e,body:r})}}});var Cr=l((Dn,br)=>{var Zt=["req","res","body","json","nocolor","sync"],W=(process.env.DEBUG||"").split(",").filter(Boolean).map(e=>e.trim()).filter(e=>Zt.includes(e)).reduce((e,r)=>(e[r]=!0,e),{}),wr=yr();typeof wr=="function"&&({request:L,response:G}=wr(W));var L,G,Z={};br.exports=e=>{if(!!Object.keys(W).length){if(W.sync){if(e.send&&e.send.req){var r=e.send.req.id;Z[r]=e.send}else if(e.status){var r=e.status.res.id;L.send(Z[r]),G.status(e.status),delete Z[r]}}else if(!e.status){var t=Object.keys(e)[0];L[t]&&L[t](e[t]),G[t]&&G[t](e[t])}}}});var M=l((Hn,_r)=>{_r.exports=e=>{if(process.env.DEBUG)try{Cr()(e)}catch(r){}}});var qr=l((Yn,Or)=>{var Kt=require("http"),Qt=require("https"),Xt=require("stream"),en=require("crypto"),jr=M();Or.exports=()=>({options:e,body:r})=>new Promise((t,n)=>{var o=en.randomBytes(20).toString("hex"),s=(/https/.test(e.protocol)?Qt:Kt).request(e).on("response",u=>{u.id=o,jr({send:{res:u}}),t({options:e,res:u})}).on("error",n).on("timeout",()=>{var u=new Error("request-compose: timeout");u.code="ETIMEDOUT",s.emit("error",u),s.abort()}).setTimeout(e.timeout);r instanceof Xt.Stream?r.pipe(s):s.end(r),s.id=o,jr({send:{req:s,body:r,options:e}})})});var xr=l((Jn,Sr)=>{Sr.exports=()=>({options:e,res:r})=>new Promise((t,n)=>{var o=[];r.on("data",s=>o.push(s)).on("end",()=>{o=Buffer.concat(o),t({options:e,res:r,body:o})}).on("error",n)})});var kr=l((Wn,Er)=>{var K=require("zlib");Er.exports=()=>({options:e,res:r,body:t,raw:n})=>new Promise((o,s)=>{var u=Object.keys(r.headers).find(a=>a.toLowerCase()==="content-encoding"),i=/gzip/i.test(r.headers[u])?"gunzip":/deflate/i.test(r.headers[u])?"inflate":!1;if(i){n=t;var f={flush:K.Z_SYNC_FLUSH,finishFlush:K.Z_SYNC_FLUSH};K[i](t,f,(a,h)=>{if(a){s(a);return}o({options:e,res:r,body:h,raw:n})})}else o({options:e,res:r,body:t,raw:n})})});var $r=l((Zn,Tr)=>{var rn=M();Tr.exports=e=>({options:r,res:t,body:n,raw:o})=>(o=n,n=Buffer.from(n).toString(e),rn({string:{res:t,body:n}}),{options:r,res:t,body:n,raw:o})});var Mr=l((Kn,Pr)=>{var tn=require("querystring"),nn=M();Pr.exports=()=>({options:e,res:r,res:{headers:t},body:n,raw:o})=>{o=n;var s=Object.keys(t).find(u=>u.toLowerCase()==="content-type");if(/json|javascript/.test(t[s]))try{n=JSON.parse(n)}catch(u){}else if(/application\/x-www-form-urlencoded/.test(t[s]))try{n=tn.parse(n)}catch(u){}return nn({parse:{res:r,body:n}}),{options:e,res:r,body:n,raw:o}}});var Q=l((Qn,Br)=>{Br.exports=({res:e,body:r,raw:t=r})=>{var n=new Error;return n.message=`${e.statusCode} ${e.statusMessage}`,n.res=e,n.body=r,n.raw=t,n}});var Ar=l((Xn,Nr)=>{var on=Q(),sn=M();Nr.exports=()=>({options:e,res:r,body:t,raw:n})=>{if(sn({status:{res:r,body:t,raw:n}}),/^(2|3)/.test(r.statusCode))return{options:e,res:r,body:t,raw:n};if(/^(4|5)/.test(r.statusCode))throw on({options:e,res:r,body:t,raw:n})}});var Lr=l((eo,Ir)=>{var X=require("url"),un=Q();Ir.exports=(e,r)=>({options:t,res:n,body:o,raw:s})=>{if(!/^3/.test(n.statusCode))return{options:t,res:n,body:o,raw:s};var u={max:3,all:!1,method:!0,referer:!1,auth:!0,followed:0,hostname:t.hostname},i=Object.assign(u,e.redirect),f=Object.keys(n.headers).find(w=>w.toLowerCase()==="location"),a=n.headers[f];if(!a||!i.all&&/patch|put|post|delete/i.test(t.method))return{options:t,res:n,body:o,raw:s};/^https?:/.test(a)||(a=X.resolve(t.protocol+"//"+t.hostname+(t.port&&t.port!==80?`:${t.port}`:""),a.startsWith("/")?a:(t.path+`/${a}`).replace(/\/{2,}/g,"/")));var h=Object.assign({},e,{url:a,redirect:i});if(h.headers=JSON.parse(JSON.stringify(h.headers||{})),!i.auth&&i.hostname!==X.parse(a).hostname){var f=Object.keys(h.headers).find(j=>j.toLowerCase()==="authorization");f&&delete h.headers[f],delete h.auth,delete h.oauth}if(!i.method&&/patch|put|post|delete/i.test(t.method)&&(h.method="GET"),i.referer&&(h.headers.referer=X.resolve(t.protocol+"//"+t.hostname+(t.port&&t.port!==80?`:${t.port}`:""),t.path)),i.followed<i.max)return i.followed++,r(h);var d=un({res:n,body:o,raw:s});throw d.message="request-compose: exceeded maximum redirects",d}});var Hr=l((ro,Gr)=>{var zr=()=>(...e)=>r=>e.reduce((t,n)=>t.then(n),Promise.resolve(r)),z=zr(),Rr={defaults:ye(),url:we(),proxy:_e(),qs:qe(),form:xe(),json:ke(),body:$e(),auth:Me(),length:Ne(),send:qr()},Ur={buffer:xr(),gzip:kr(),string:$r(),parse:Mr(),status:Ar(),redirect:Lr()},ee=e=>r=>z(e.defaults(r),(()=>r.url?e.url(r.url):({options:t})=>({options:t}))(),(()=>r.proxy?e.proxy(r.proxy):({options:t})=>({options:t}))(),(()=>r.qs?e.qs(r.qs,r.redirect):({options:t})=>({options:t}))(),(()=>r.cookie?e.cookie(r.cookie):({options:t})=>({options:t}))(),(()=>r.form?e.form(r.form):r.json?e.json(r.json):r.multipart?e.multipart(r.multipart):r.body?e.body(r.body):({options:t})=>({options:t}))(),(()=>r.auth?e.auth(r.auth):r.oauth?e.oauth(r.oauth):({options:t,body:n})=>({options:t,body:n}))(),(()=>({options:t,body:n})=>n?e.length()({options:t,body:n}):{options:t})(),e.send())(),Vr=(e,r)=>t=>z(n=>ee(e)(t),(()=>t.cookie?r.cookie(t.cookie):({options:n,res:o})=>({options:n,res:o}))(),r.buffer(),r.gzip(),r.string(t.encoding),r.parse(),r.status(),r.redirect(t,Vr(e,r)))(),Fr=(e,r)=>t=>z(n=>ee(e)(t),(()=>t.cookie?r.cookie(t.cookie):({options:n,res:o})=>({options:n,res:o}))(),r.buffer(),r.gzip(),r.status(),r.redirect(t,Fr(e,r)))(),an=(e,r)=>t=>z(n=>ee(e)(t),(()=>t.cookie?r.cookie(t.cookie):({options:n,res:o})=>({options:n,res:o}))(),r.status())(),Dr=e=>((r=Object.assign({},Rr,e.Request),t=Object.assign({},Ur,e.Response))=>Object.assign(zr(),{Request:r,Response:t,client:Vr(r,t),buffer:Fr(r,t),stream:an(r,t),extend:Dr}))();Gr.exports=Dr({Request:Rr,Response:Ur})});var T=require("fs"),ln=ge(),R=Hr(),to=R.buffer,cn=e=>{var r=[/Statements : (.*?)%/,/Branches : (.*?)%/,/Functions : (.*?)%/,/Lines : (.*?)%/],t=r.map(n=>parseFloat(n.exec(e)[1])).reduce((n,o)=>n+=o)/r.length;return parseFloat(t.toFixed(2))},fn=async e=>{var r="coverage",t=e,n=[{threshold:95,color:"brightgreen"},{threshold:90,color:"green"},{threshold:85,color:"yellowgreen"},{threshold:80,color:"yellow"},{threshold:75,color:"orange"},{threshold:70,color:"red"}],{color:o}=n.find(({threshold:u,color:i})=>e>=u)||{color:"red"},{body:s}=await R.buffer({url:`https://img.shields.io/badge/${r}-${t}-${o}`,qs:{style:"flat-square"}});T.writeFileSync("coverage.svg",s)},hn=async()=>{var{res:e,body:r}=await R.client({method:"GET",url:"https://api.github.com/rate_limit",headers:{authorization:`Bearer ${process.env.INPUT_TOKEN}`,"user-agent":"request-compose"}})},dn=R(cn,fn,hn);(async()=>{try{var e=process.env.INPUT_COVERAGE;await dn(e),console.log("__dirname"),console.log(__dirname),console.log(T.readdirSync(__dirname)),console.log("process.cwd()"),console.log(process.cwd()),console.log(T.readdirSync(process.cwd())),console.log("/home/runner/work/lcov/lcov"),console.log(T.readdirSync("/home/runner/work/lcov/lcov")),console.log("/home/runner/work/lcov/lcov/main"),console.log(T.readdirSync("/home/runner/work/lcov/lcov/main")),console.log("/home/runner/work/lcov/lcov/docs"),console.log(T.readdirSync("/home/runner/work/lcov/lcov/docs"))}catch(r){ln.setFailed(r.message)}})();
