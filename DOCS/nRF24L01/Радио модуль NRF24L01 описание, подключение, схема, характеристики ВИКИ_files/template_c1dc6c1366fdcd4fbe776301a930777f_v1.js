
; /* Start:"a:4:{s:4:"full";s:70:"/bitrix/templates/aspro_next/js/vendor/lity/lity.min.js?15537618956601";s:6:"source";s:55:"/bitrix/templates/aspro_next/js/vendor/lity/lity.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! Lity - v2.3.1 - 2018-04-20
* http://sorgalla.com/lity/
* Copyright (c) 2015-2018 Jan Sorgalla; Licensed MIT */

!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(c){return b(a,c)}):"object"==typeof module&&"object"==typeof module.exports?module.exports=b(a,require("jquery")):a.lity=b(a,a.jQuery||a.Zepto)}("undefined"!=typeof window?window:this,function(a,b){"use strict";function c(a){var b=B();return N&&a.length?(a.one(N,b.resolve),setTimeout(b.resolve,500)):b.resolve(),b.promise()}function d(a,c,d){if(1===arguments.length)return b.extend({},a);if("string"==typeof c){if(void 0===d)return void 0===a[c]?null:a[c];a[c]=d}else b.extend(a,c);return this}function e(a){for(var b,c=decodeURI(a.split("#")[0]).split("&"),d={},e=0,f=c.length;e<f;e++)c[e]&&(b=c[e].split("="),d[b[0]]=b[1]);return d}function f(a,c){return a+(a.indexOf("?")>-1?"&":"?")+b.param(c)}function g(a,b){var c=a.indexOf("#");return-1===c?b:(c>0&&(a=a.substr(c)),b+a)}function h(a){return b('<span class="lity-error"/>').append(a)}function i(a,c){var d=c.opener()&&c.opener().data("lity-desc")||"Image with no description",e=b('<img src="'+a+'" alt="'+d+'"/>'),f=B(),g=function(){f.reject(h("Failed loading image"))};return e.on("load",function(){if(0===this.naturalWidth)return g();f.resolve(e)}).on("error",g),f.promise()}function j(a,c){var d,e,f;try{d=b(a)}catch(a){return!1}return!!d.length&&(e=b('<i style="display:none !important"/>'),f=d.hasClass("lity-hide"),c.element().one("lity:remove",function(){e.before(d).remove(),f&&!d.closest(".lity-content").length&&d.addClass("lity-hide")}),d.removeClass("lity-hide").after(e))}function k(a){var c=J.exec(a);return!!c&&o(g(a,f("https://www.youtube"+(c[2]||"")+".com/embed/"+c[4],b.extend({autoplay:1},e(c[5]||"")))))}function l(a){var c=K.exec(a);return!!c&&o(g(a,f("https://player.vimeo.com/video/"+c[3],b.extend({autoplay:1},e(c[4]||"")))))}function m(a){var c=M.exec(a);return!!c&&(0!==a.indexOf("http")&&(a="https:"+a),o(g(a,f("https://www.facebook.com/plugins/video.php?href="+a,b.extend({autoplay:1},e(c[4]||""))))))}function n(a){var b=L.exec(a);return!!b&&o(g(a,f("https://www.google."+b[3]+"/maps?"+b[6],{output:b[6].indexOf("layer=c")>0?"svembed":"embed"})))}function o(a){return'<div class="lity-iframe-container"><iframe frameborder="0" allowfullscreen src="'+a+'"/></div>'}function p(){return z.documentElement.clientHeight?z.documentElement.clientHeight:Math.round(A.height())}function q(a){var b=v();b&&(27===a.keyCode&&b.options("esc")&&b.close(),9===a.keyCode&&r(a,b))}function r(a,b){var c=b.element().find(G),d=c.index(z.activeElement);a.shiftKey&&d<=0?(c.get(c.length-1).focus(),a.preventDefault()):a.shiftKey||d!==c.length-1||(c.get(0).focus(),a.preventDefault())}function s(){b.each(D,function(a,b){b.resize()})}function t(a){1===D.unshift(a)&&(C.addClass("lity-active"),A.on({resize:s,keydown:q})),b("body > *").not(a.element()).addClass("lity-hidden").each(function(){var a=b(this);void 0===a.data(F)&&a.data(F,a.attr(E)||null)}).attr(E,"true")}function u(a){var c;a.element().attr(E,"true"),1===D.length&&(C.removeClass("lity-active"),A.off({resize:s,keydown:q})),D=b.grep(D,function(b){return a!==b}),c=D.length?D[0].element():b(".lity-hidden"),c.removeClass("lity-hidden").each(function(){var a=b(this),c=a.data(F);c?a.attr(E,c):a.removeAttr(E),a.removeData(F)})}function v(){return 0===D.length?null:D[0]}function w(a,c,d,e){var f,g="inline",h=b.extend({},d);return e&&h[e]?(f=h[e](a,c),g=e):(b.each(["inline","iframe"],function(a,b){delete h[b],h[b]=d[b]}),b.each(h,function(b,d){return!d||(!(!d.test||d.test(a,c))||(f=d(a,c),!1!==f?(g=b,!1):void 0))})),{handler:g,content:f||""}}function x(a,e,f,g){function h(a){k=b(a).css("max-height",p()+"px"),j.find(".lity-loader").each(function(){var a=b(this);c(a).always(function(){a.remove()})}),j.removeClass("lity-loading").find(".lity-content").empty().append(k),m=!0,k.trigger("lity:ready",[l])}var i,j,k,l=this,m=!1,n=!1;e=b.extend({},H,e),j=b(e.template),l.element=function(){return j},l.opener=function(){return f},l.options=b.proxy(d,l,e),l.handlers=b.proxy(d,l,e.handlers),l.resize=function(){m&&!n&&k.css("max-height",p()+"px").trigger("lity:resize",[l])},l.close=function(){if(m&&!n){n=!0,u(l);var a=B();if(g&&(z.activeElement===j[0]||b.contains(j[0],z.activeElement)))try{g.focus()}catch(a){}return k.trigger("lity:close",[l]),j.removeClass("lity-opened").addClass("lity-closed"),c(k.add(j)).always(function(){k.trigger("lity:remove",[l]),j.remove(),j=void 0,a.resolve()}),a.promise()}},i=w(a,l,e.handlers,e.handler),j.attr(E,"false").addClass("lity-loading lity-opened lity-"+i.handler).appendTo("body").focus().on("click","[data-lity-close]",function(a){b(a.target).is("[data-lity-close]")&&l.close()}).trigger("lity:open",[l]),t(l),b.when(i.content).always(h)}function y(a,c,d){a.preventDefault?(a.preventDefault(),d=b(this),a=d.data("lity-target")||d.attr("href")||d.attr("src")):d=b(d);var e=new x(a,b.extend({},d.data("lity-options")||d.data("lity"),c),d,z.activeElement);if(!a.preventDefault)return e}var z=a.document,A=b(a),B=b.Deferred,C=b("html"),D=[],E="aria-hidden",F="lity-"+E,G='a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),iframe,object,embed,[contenteditable],[tabindex]:not([tabindex^="-"])',H={esc:!0,handler:null,handlers:{image:i,inline:j,youtube:k,vimeo:l,googlemaps:n,facebookvideo:m,iframe:o},template:'<div class="lity" role="dialog" aria-label="Dialog Window (Press escape to close)" tabindex="-1"><div class="lity-wrap" data-lity-close role="document"><div class="lity-loader" aria-hidden="true">Loading...</div><div class="lity-container"><div class="lity-content"></div><button class="lity-close" type="button" aria-label="Close (Press escape to close)" data-lity-close>&times;</button></div></div></div>'},I=/(^data:image\/)|(\.(png|jpe?g|gif|svg|webp|bmp|ico|tiff?)(\?\S*)?$)/i,J=/(youtube(-nocookie)?\.com|youtu\.be)\/(watch\?v=|v\/|u\/|embed\/?)?([\w-]{11})(.*)?/i,K=/(vimeo(pro)?.com)\/(?:[^\d]+)?(\d+)\??(.*)?$/,L=/((maps|www)\.)?google\.([^\/\?]+)\/?((maps\/?)?\?)(.*)/i,M=/(facebook\.com)\/([a-z0-9_-]*)\/videos\/([0-9]*)(.*)?$/i,N=function(){var a=z.createElement("div"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return b[c];return!1}();return i.test=function(a){return I.test(a)},y.version="2.3.1",y.options=b.proxy(d,y,H),y.handlers=b.proxy(d,y,H.handlers),y.current=v,b(z).on("click.lity","[data-lity]",y),y});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:60:"/bitrix/templates/aspro_next/js/prism.min.js?158439580016588";s:6:"source";s:44:"/bitrix/templates/aspro_next/js/prism.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* PrismJS 1.19.0
https://prismjs.com/download.html#themes=prism-okaidia&languages=clike+c+cpp&plugins=line-numbers+normalize-whitespace+match-braces */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(u){var c=/\blang(?:uage)?-([\w-]+)\b/i,r=0,C={manual:u.Prism&&u.Prism.manual,disableWorkerMessageHandler:u.Prism&&u.Prism.disableWorkerMessageHandler,util:{encode:function e(r){return r instanceof _?new _(r.type,e(r.content),r.alias):Array.isArray(r)?r.map(e):r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++r}),e.__id},clone:function n(e,t){var a,r,i=C.util.type(e);switch(t=t||{},i){case"Object":if(r=C.util.objId(e),t[r])return t[r];for(var o in a={},t[r]=a,e)e.hasOwnProperty(o)&&(a[o]=n(e[o],t));return a;case"Array":return r=C.util.objId(e),t[r]?t[r]:(a=[],t[r]=a,e.forEach(function(e,r){a[r]=n(e,t)}),a);default:return e}},getLanguage:function(e){for(;e&&!c.test(e.className);)e=e.parentElement;return e?(e.className.match(c)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(e){var r=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack)||[])[1];if(r){var n=document.getElementsByTagName("script");for(var t in n)if(n[t].src==r)return n[t]}return null}}},languages:{extend:function(e,r){var n=C.util.clone(C.languages[e]);for(var t in r)n[t]=r[t];return n},insertBefore:function(n,e,r,t){var a=(t=t||C.languages)[n],i={};for(var o in a)if(a.hasOwnProperty(o)){if(o==e)for(var l in r)r.hasOwnProperty(l)&&(i[l]=r[l]);r.hasOwnProperty(o)||(i[o]=a[o])}var s=t[n];return t[n]=i,C.languages.DFS(C.languages,function(e,r){r===s&&e!=n&&(this[e]=i)}),i},DFS:function e(r,n,t,a){a=a||{};var i=C.util.objId;for(var o in r)if(r.hasOwnProperty(o)){n.call(r,o,r[o],t||o);var l=r[o],s=C.util.type(l);"Object"!==s||a[i(l)]?"Array"!==s||a[i(l)]||(a[i(l)]=!0,e(l,n,o,a)):(a[i(l)]=!0,e(l,n,null,a))}}},plugins:{},highlightAll:function(e,r){C.highlightAllUnder(document,e,r)},highlightAllUnder:function(e,r,n){var t={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};C.hooks.run("before-highlightall",t),t.elements=Array.prototype.slice.apply(t.container.querySelectorAll(t.selector)),C.hooks.run("before-all-elements-highlight",t);for(var a,i=0;a=t.elements[i++];)C.highlightElement(a,!0===r,t.callback)},highlightElement:function(e,r,n){var t=C.util.getLanguage(e),a=C.languages[t];e.className=e.className.replace(c,"").replace(/\s+/g," ")+" language-"+t;var i=e.parentNode;i&&"pre"===i.nodeName.toLowerCase()&&(i.className=i.className.replace(c,"").replace(/\s+/g," ")+" language-"+t);var o={element:e,language:t,grammar:a,code:e.textContent};function l(e){o.highlightedCode=e,C.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,C.hooks.run("after-highlight",o),C.hooks.run("complete",o),n&&n.call(o.element)}if(C.hooks.run("before-sanity-check",o),!o.code)return C.hooks.run("complete",o),void(n&&n.call(o.element));if(C.hooks.run("before-highlight",o),o.grammar)if(r&&u.Worker){var s=new Worker(C.filename);s.onmessage=function(e){l(e.data)},s.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:!0}))}else l(C.highlight(o.code,o.grammar,o.language));else l(C.util.encode(o.code))},highlight:function(e,r,n){var t={code:e,grammar:r,language:n};return C.hooks.run("before-tokenize",t),t.tokens=C.tokenize(t.code,t.grammar),C.hooks.run("after-tokenize",t),_.stringify(C.util.encode(t.tokens),t.language)},matchGrammar:function(e,r,n,t,a,i,o){for(var l in n)if(n.hasOwnProperty(l)&&n[l]){var s=n[l];s=Array.isArray(s)?s:[s];for(var u=0;u<s.length;++u){if(o&&o==l+","+u)return;var c=s[u],g=c.inside,f=!!c.lookbehind,h=!!c.greedy,d=0,m=c.alias;if(h&&!c.pattern.global){var p=c.pattern.toString().match(/[imsuy]*$/)[0];c.pattern=RegExp(c.pattern.source,p+"g")}c=c.pattern||c;for(var y=t,v=a;y<r.length;v+=r[y].length,++y){var k=r[y];if(r.length>e.length)return;if(!(k instanceof _)){if(h&&y!=r.length-1){if(c.lastIndex=v,!(S=c.exec(e)))break;for(var b=S.index+(f&&S[1]?S[1].length:0),w=S.index+S[0].length,A=y,P=v,x=r.length;A<x&&(P<w||!r[A].type&&!r[A-1].greedy);++A)(P+=r[A].length)<=b&&(++y,v=P);if(r[y]instanceof _)continue;O=A-y,k=e.slice(v,P),S.index-=v}else{c.lastIndex=0;var S=c.exec(k),O=1}if(S){f&&(d=S[1]?S[1].length:0);w=(b=S.index+d)+(S=S[0].slice(d)).length;var E=k.slice(0,b),N=k.slice(w),j=[y,O];E&&(++y,v+=E.length,j.push(E));var L=new _(l,g?C.tokenize(S,g):S,m,S,h);if(j.push(L),N&&j.push(N),Array.prototype.splice.apply(r,j),1!=O&&C.matchGrammar(e,r,n,y,v,!0,l+","+u),i)break}else if(i)break}}}}},tokenize:function(e,r){var n=[e],t=r.rest;if(t){for(var a in t)r[a]=t[a];delete r.rest}return C.matchGrammar(e,n,r,0,0,!1),n},hooks:{all:{},add:function(e,r){var n=C.hooks.all;n[e]=n[e]||[],n[e].push(r)},run:function(e,r){var n=C.hooks.all[e];if(n&&n.length)for(var t,a=0;t=n[a++];)t(r)}},Token:_};function _(e,r,n,t,a){this.type=e,this.content=r,this.alias=n,this.length=0|(t||"").length,this.greedy=!!a}if(u.Prism=C,_.stringify=function r(e,n){if("string"==typeof e)return e;if(Array.isArray(e)){var t="";return e.forEach(function(e){t+=r(e,n)}),t}var a={type:e.type,content:r(e.content,n),tag:"span",classes:["token",e.type],attributes:{},language:n},i=e.alias;i&&(Array.isArray(i)?Array.prototype.push.apply(a.classes,i):a.classes.push(i)),C.hooks.run("wrap",a);var o="";for(var l in a.attributes)o+=" "+l+'="'+(a.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+o+">"+a.content+"</"+a.tag+">"},!u.document)return u.addEventListener&&(C.disableWorkerMessageHandler||u.addEventListener("message",function(e){var r=JSON.parse(e.data),n=r.language,t=r.code,a=r.immediateClose;u.postMessage(C.highlight(t,C.languages[n],n)),a&&u.close()},!1)),C;var e=C.util.currentScript();function n(){C.manual||C.highlightAll()}if(e&&(C.filename=e.src,e.hasAttribute("data-manual")&&(C.manual=!0)),!C.manual){var t=document.readyState;"loading"===t||"interactive"===t&&e&&e.defer?document.addEventListener("DOMContentLoaded",n):window.requestAnimationFrame?window.requestAnimationFrame(n):window.setTimeout(n,16)}return C}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};
Prism.languages.c=Prism.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+/,lookbehind:!0},keyword:/\b(?:__attribute__|_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,function:/[a-z_]\w*(?=\s*\()/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,number:/(?:\b0x(?:[\da-f]+\.?[\da-f]*|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ful]*/i}),Prism.languages.insertBefore("c","string",{macro:{pattern:/(^\s*)#\s*[a-z]+(?:[^\r\n\\]|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,alias:"property",inside:{string:{pattern:/(#\s*include\s*)(?:<.+?>|("|')(?:\\?.)+?\2)/,lookbehind:!0},directive:{pattern:/(#\s*)\b(?:define|defined|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\b/,lookbehind:!0,alias:"keyword"}}},constant:/\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/}),delete Prism.languages.c.boolean;
Prism.languages.cpp=Prism.languages.extend("c",{"class-name":{pattern:/(\b(?:class|enum|struct)\s+)\w+/,lookbehind:!0},keyword:/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char8_t|char16_t|char32_t|class|compl|concept|const|consteval|constexpr|constinit|const_cast|continue|co_await|co_return|co_yield|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+\.?[\da-f']*|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+\.?[\d']*|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]*/i,greedy:!0},operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:true|false)\b/}),Prism.languages.insertBefore("cpp","string",{"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}});
!function(){if("undefined"!=typeof self&&self.Prism&&self.document){var l="line-numbers",c=/\n(?!$)/g,m=function(e){var t=a(e)["white-space"];if("pre-wrap"===t||"pre-line"===t){var n=e.querySelector("code"),r=e.querySelector(".line-numbers-rows"),s=e.querySelector(".line-numbers-sizer"),i=n.textContent.split(c);s||((s=document.createElement("span")).className="line-numbers-sizer",n.appendChild(s)),s.style.display="block",i.forEach(function(e,t){s.textContent=e||"\n";var n=s.getBoundingClientRect().height;r.children[t].style.height=n+"px"}),s.textContent="",s.style.display="none"}},a=function(e){return e?window.getComputedStyle?getComputedStyle(e):e.currentStyle||null:null};window.addEventListener("resize",function(){Array.prototype.forEach.call(document.querySelectorAll("pre."+l),m)}),Prism.hooks.add("complete",function(e){if(e.code){var t=e.element,n=t.parentNode;if(n&&/pre/i.test(n.nodeName)&&!t.querySelector(".line-numbers-rows")){for(var r=!1,s=/(?:^|\s)line-numbers(?:\s|$)/,i=t;i;i=i.parentNode)if(s.test(i.className)){r=!0;break}if(r){t.className=t.className.replace(s," "),s.test(n.className)||(n.className+=" line-numbers");var l,a=e.code.match(c),o=a?a.length+1:1,u=new Array(o+1).join("<span></span>");(l=document.createElement("span")).setAttribute("aria-hidden","true"),l.className="line-numbers-rows",l.innerHTML=u,n.hasAttribute("data-start")&&(n.style.counterReset="linenumber "+(parseInt(n.getAttribute("data-start"),10)-1)),e.element.appendChild(l),m(n),Prism.hooks.run("line-numbers",e)}}}}),Prism.hooks.add("line-numbers",function(e){e.plugins=e.plugins||{},e.plugins.lineNumbers=!0}),Prism.plugins.lineNumbers={getLine:function(e,t){if("PRE"===e.tagName&&e.classList.contains(l)){var n=e.querySelector(".line-numbers-rows"),r=parseInt(e.getAttribute("data-start"),10)||1,s=r+(n.children.length-1);t<r&&(t=r),s<t&&(t=s);var i=t-r;return n.children[i]}}}}}();
!function(){var i=Object.assign||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t]);return e};function e(e){this.defaults=i({},e)}function l(e){for(var n=0,t=0;t<e.length;++t)e.charCodeAt(t)=="\t".charCodeAt(0)&&(n+=3);return e.length+n}e.prototype={setDefaults:function(e){this.defaults=i(this.defaults,e)},normalize:function(e,n){for(var t in n=i(this.defaults,n)){var r=t.replace(/-(\w)/g,function(e,n){return n.toUpperCase()});"normalize"!==t&&"setDefaults"!==r&&n[t]&&this[r]&&(e=this[r].call(this,e,n[t]))}return e},leftTrim:function(e){return e.replace(/^\s+/,"")},rightTrim:function(e){return e.replace(/\s+$/,"")},tabsToSpaces:function(e,n){return n=0|n||4,e.replace(/\t/g,new Array(++n).join(" "))},spacesToTabs:function(e,n){return n=0|n||4,e.replace(RegExp(" {"+n+"}","g"),"\t")},removeTrailing:function(e){return e.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(e){return e.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(e){var n=e.match(/^[^\S\n\r]*(?=\S)/gm);return n&&n[0].length?(n.sort(function(e,n){return e.length-n.length}),n[0].length?e.replace(RegExp("^"+n[0],"gm"),""):e):e},indent:function(e,n){return e.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++n).join("\t")+"$&")},breakLines:function(e,n){n=!0===n?80:0|n||80;for(var t=e.split("\n"),r=0;r<t.length;++r)if(!(l(t[r])<=n)){for(var i=t[r].split(/(\s+)/g),o=0,a=0;a<i.length;++a){var s=l(i[a]);n<(o+=s)&&(i[a]="\n"+i[a],o=s)}t[r]=i.join("")}return t.join("\n")}},"undefined"!=typeof module&&module.exports&&(module.exports=e),"undefined"!=typeof Prism&&(Prism.plugins.NormalizeWhitespace=new e({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Prism.hooks.add("before-sanity-check",function(e){var n=Prism.plugins.NormalizeWhitespace;if(!e.settings||!1!==e.settings["whitespace-normalization"])if(e.element&&e.element.parentNode||!e.code){var t=e.element.parentNode,r=/(?:^|\s)no-whitespace-normalization(?:\s|$)/;if(e.code&&t&&"pre"===t.nodeName.toLowerCase()&&!r.test(t.className)&&!r.test(e.element.className)){for(var i=t.childNodes,o="",a="",s=!1,l=0;l<i.length;++l){var c=i[l];c==e.element?s=!0:"#text"===c.nodeName&&(s?a+=c.nodeValue:o+=c.nodeValue,t.removeChild(c),--l)}if(e.element.children.length&&Prism.plugins.KeepMarkup){var u=o+e.element.innerHTML+a;e.element.innerHTML=n.normalize(u,e.settings),e.code=e.element.textContent}else e.code=o+e.code+a,e.code=n.normalize(e.code,e.settings)}}else e.code=n.normalize(e.code,e.settings)}))}();
!function(){if("undefined"!=typeof self&&self.Prism&&self.document){var c=/(?:^|\s)match-braces(?:\s|$)/,a=/(?:^|\s)brace-hover(?:\s|$)/,l=/(?:^|\s)brace-selected(?:\s|$)/,n=/(?:^|\s)no-brace-hover(?:\s|$)/,t=/(?:^|\s)no-brace-select(?:\s|$)/,u={"(":")","[":"]","{":"}"},f={"(":"brace-round","[":"brace-square","{":"brace-curly"},m=0,r=/^(pair-\d+-)(open|close)$/;Prism.hooks.add("complete",function(e){var a=e.element,n=a.parentElement;if(n&&"PRE"==n.tagName){for(var t=[],r=a;r;r=r.parentElement)if(c.test(r.className)){t.push("(","[","{");break}if(0!=t.length){n.__listenerAdded||(n.addEventListener("mousedown",function(){var e=n.querySelector("code");Array.prototype.slice.call(e.querySelectorAll(".brace-selected")).forEach(function(e){e.className=e.className.replace(l," ")})}),Object.defineProperty(n,"__listenerAdded",{value:!0}));var o=Array.prototype.slice.call(a.querySelectorAll("span.token.punctuation")),i=[];t.forEach(function(e){for(var a=u[e],n=f[e],t=[],r=[],s=0;s<o.length;s++){var c=o[s];if(0==c.childElementCount){var l=c.textContent;l===e?(i.push({index:s,open:!0,element:c}),c.className+=" "+n,c.className+=" brace-open",r.push(s)):l===a&&(i.push({index:s,open:!1,element:c}),c.className+=" "+n,c.className+=" brace-close",r.length&&t.push([s,r.pop()]))}}t.forEach(function(e){var a="pair-"+m+++"-",n=o[e[0]],t=o[e[1]];n.id=a+"open",t.id=a+"close",[n,t].forEach(function(e){e.addEventListener("mouseenter",p),e.addEventListener("mouseleave",d),e.addEventListener("click",h)})})});var s=0;i.sort(function(e,a){return e.index-a.index}),i.forEach(function(e){e.open?(e.element.className+=" brace-level-"+(s%12+1),s++):(s=Math.max(0,s-1),e.element.className+=" brace-level-"+(s%12+1))})}}})}function s(e){var a=r.exec(e.id);return document.querySelector("#"+a[1]+("open"==a[2]?"close":"open"))}function p(){for(var e=this.parentElement;e;e=e.parentElement)if(n.test(e.className))return;[this,s(this)].forEach(function(e){e.className=(e.className.replace(a," ")+" brace-hover").replace(/\s+/g," ")})}function d(){[this,s(this)].forEach(function(e){e.className=e.className.replace(a," ")})}function h(){for(var e=this.parentElement;e;e=e.parentElement)if(t.test(e.className))return;[this,s(this)].forEach(function(e){e.className=(e.className.replace(l," ")+" brace-selected").replace(/\s+/g," ")})}}();

/* End */
;
; /* Start:"a:4:{s:4:"full";s:70:"/bitrix/templates/aspro_next/js/prism-init-additional.js?1584396653235";s:6:"source";s:56:"/bitrix/templates/aspro_next/js/prism-init-additional.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
jQuery(document).ready(function($) {
	
	// ?????????????????? ???????????? ???????????? ?????? ???????? <pre> ?????????? ???????????????? ?????????????????? ????????
	$( "pre" ).addClass( "language-cpp line-numbers match-braces" );
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:67:"/bitrix/templates/aspro_next/js/jquery.actual.min.js?15438444901238";s:6:"source";s:52:"/bitrix/templates/aspro_next/js/jquery.actual.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! Copyright 2012, Ben Lin (http://dreamerslab.com/)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 1.0.18
 *
 * Requires: jQuery >= 1.2.3
 */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a);
}else{a(jQuery);}}(function(a){a.fn.addBack=a.fn.addBack||a.fn.andSelf;a.fn.extend({actual:function(b,l){if(!this[b]){throw'$.actual => The jQuery method "'+b+'" you called does not exist';
}var f={absolute:false,clone:false,includeMargin:false,display:"block"};var i=a.extend(f,l);var e=this.eq(0);var h,j;if(i.clone===true){h=function(){var m="position: absolute !important; top: -1000 !important; ";
e=e.clone().attr("style",m).appendTo("body");};j=function(){e.remove();};}else{var g=[];var d="";var c;h=function(){c=e.parents().addBack().filter(":hidden");
d+="visibility: hidden !important; display: "+i.display+" !important; ";if(i.absolute===true){d+="position: absolute !important; ";}c.each(function(){var m=a(this);
var n=m.attr("style");g.push(n);m.attr("style",n?n+";"+d:d);});};j=function(){c.each(function(m){var o=a(this);var n=g[m];if(n===undefined){o.removeAttr("style");
}else{o.attr("style",n);}});};}h();var k=/(outer)/.test(b)?e[b](i.includeMargin):e[b]();j();return k;}});}));
/* End */
;
; /* Start:"a:4:{s:4:"full";s:73:"/bitrix/templates/aspro_next/vendor/js/jquery.bxslider.js?154384449066080";s:6:"source";s:57:"/bitrix/templates/aspro_next/vendor/js/jquery.bxslider.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/**
 * bxSlider v4.2.12
 * Copyright 2013-2015 Steven Wanderski
 * Written while drinking Belgian ales and listening to jazz
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */

;(function($) {

  var defaults = {

    // GENERAL
    mode: 'horizontal',
    slideSelector: '',
    infiniteLoop: true,
    hideControlOnEnd: false,
    speed: 500,
    easing: null,
    slideMargin: 0,
    startSlide: 0,
    randomStart: false,
    captions: false,
    ticker: false,
    tickerHover: false,
    adaptiveHeight: false,
    adaptiveHeightSpeed: 500,
    video: false,
    useCSS: true,
    preloadImages: 'visible',
    responsive: true,
    slideZIndex: 50,
    wrapperClass: 'bx-wrapper',

    // TOUCH
    touchEnabled: true,
    swipeThreshold: 50,
    oneToOneTouch: true,
    preventDefaultSwipeX: true,
    preventDefaultSwipeY: false,

    // ACCESSIBILITY
    ariaLive: true,
    ariaHidden: true,

    // KEYBOARD
    keyboardEnabled: false,

    // PAGER
    pager: true,
    pagerType: 'full',
    pagerShortSeparator: ' / ',
    pagerSelector: null,
    buildPager: null,
    pagerCustom: null,

    // CONTROLS
    controls: true,
    nextText: 'Next',
    prevText: 'Prev',
    nextSelector: null,
    prevSelector: null,
    autoControls: false,
    startText: 'Start',
    stopText: 'Stop',
    autoControlsCombine: false,
    autoControlsSelector: null,

    // AUTO
    auto: false,
    pause: 4000,
    autoStart: true,
    autoDirection: 'next',
    stopAutoOnClick: false,
    autoHover: false,
    autoDelay: 0,
    autoSlideForOnePage: false,

    // CAROUSEL
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 0,
    slideWidth: 0,
    shrinkItems: false,

    // CALLBACKS
    onSliderLoad: function() { return true; },
    onSlideBefore: function() { return true; },
    onSlideAfter: function() { return true; },
    onSlideNext: function() { return true; },
    onSlidePrev: function() { return true; },
    onSliderResize: function() { return true; },
	onAutoChange: function() { return true; } //calls when auto slides starts and stops
  };

  $.fn.bxSlider = function(options) {

    if (this.length === 0) {
      return this;
    }

    // support multiple elements
    if (this.length > 1) {
      this.each(function() {
        $(this).bxSlider(options);
      });
      return this;
    }

    // create a namespace to be used throughout the plugin
    var slider = {},
    // set a reference to our slider element
    el = this,
    // get the original window dimens (thanks a lot IE)
    windowWidth = $(window).width(),
    windowHeight = $(window).height();

    // Return if slider is already initialized
    if ($(el).data('bxSlider')) { return; }

    /**
     * ===================================================================================
     * = PRIVATE FUNCTIONS
     * ===================================================================================
     */

    /**
     * Initializes namespace settings to be used throughout plugin
     */
    var init = function() {
      // Return if slider is already initialized
      if ($(el).data('bxSlider')) { return; }
      // merge user-supplied options with the defaults
      slider.settings = $.extend({}, defaults, options);
      // parse slideWidth setting
      slider.settings.slideWidth = parseInt(slider.settings.slideWidth);
      // store the original children
      slider.children = el.children(slider.settings.slideSelector);
      // check if actual number of slides is less than minSlides / maxSlides
      if (slider.children.length < slider.settings.minSlides) { slider.settings.minSlides = slider.children.length; }
      if (slider.children.length < slider.settings.maxSlides) { slider.settings.maxSlides = slider.children.length; }
      // if random start, set the startSlide setting to random number
      if (slider.settings.randomStart) { slider.settings.startSlide = Math.floor(Math.random() * slider.children.length); }
      // store active slide information
      slider.active = { index: slider.settings.startSlide };
      // store if the slider is in carousel mode (displaying / moving multiple slides)
      slider.carousel = slider.settings.minSlides > 1 || slider.settings.maxSlides > 1 ? true : false;
      // if carousel, force preloadImages = 'all'
      if (slider.carousel) { slider.settings.preloadImages = 'all'; }
      // calculate the min / max width thresholds based on min / max number of slides
      // used to setup and update carousel slides dimensions
      slider.minThreshold = (slider.settings.minSlides * slider.settings.slideWidth) + ((slider.settings.minSlides - 1) * slider.settings.slideMargin);
      slider.maxThreshold = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
      // store the current state of the slider (if currently animating, working is true)
      slider.working = false;
      // initialize the controls object
      slider.controls = {};
      // initialize an auto interval
      slider.interval = null;
      // determine which property to use for transitions
      slider.animProp = slider.settings.mode === 'vertical' ? 'top' : 'left';
      // determine if hardware acceleration can be used
      slider.usingCSS = slider.settings.useCSS && slider.settings.mode !== 'fade' && (function() {
        // create our test div element
        var div = document.createElement('div'),
        // css transition properties
        props = ['WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
        // test for each property
        for (var i = 0; i < props.length; i++) {
          if (div.style[props[i]] !== undefined) {
            slider.cssPrefix = props[i].replace('Perspective', '').toLowerCase();
            slider.animProp = '-' + slider.cssPrefix + '-transform';
            return true;
          }
        }
        return false;
      }());
      // if vertical mode always make maxSlides and minSlides equal
      if (slider.settings.mode === 'vertical') { slider.settings.maxSlides = slider.settings.minSlides; }
      // save original style data
      el.data('origStyle', el.attr('style'));
      el.children(slider.settings.slideSelector).each(function() {
        $(this).data('origStyle', $(this).attr('style'));
      });

      // perform all DOM / CSS modifications
      setup();
    };

    /**
     * Performs all DOM and CSS modifications
     */
    var setup = function() {
      var preloadSelector = slider.children.eq(slider.settings.startSlide); // set the default preload selector (visible)

      // wrap el in a wrapper
      el.wrap('<div class="' + slider.settings.wrapperClass + '"><div class="bx-viewport"></div></div>');
      // store a namespace reference to .bx-viewport
      slider.viewport = el.parent();

      // add aria-live if the setting is enabled and ticker mode is disabled
      if (slider.settings.ariaLive && !slider.settings.ticker) {
        slider.viewport.attr('aria-live', 'polite');
      }
      // add a loading div to display while images are loading
      slider.loader = $('<div class="bx-loading" />');
      slider.viewport.prepend(slider.loader);
      // set el to a massive width, to hold any needed slides
      // also strip any margin and padding from el
      el.css({
        width: slider.settings.mode === 'horizontal' ? (slider.children.length * 1000 + 215) + '%' : 'auto',
        position: 'relative'
      });
      // if using CSS, add the easing property
      if (slider.usingCSS && slider.settings.easing) {
        el.css('-' + slider.cssPrefix + '-transition-timing-function', slider.settings.easing);
      // if not using CSS and no easing value was supplied, use the default JS animation easing (swing)
      } else if (!slider.settings.easing) {
        slider.settings.easing = 'swing';
      }
      // make modifications to the viewport (.bx-viewport)
      slider.viewport.css({
        width: '100%',
        overflow: 'hidden',
        position: 'relative'
      });
      slider.viewport.parent().css({
        maxWidth: getViewportMaxWidth()
      });
      // apply css to all slider children
      slider.children.css({
        // the float attribute is a reserved word in compressors like YUI compressor and need to be quoted #48
        'float': slider.settings.mode === 'horizontal' ? 'left' : 'none',
        listStyle: 'none',
        position: 'relative'
      });
      // apply the calculated width after the float is applied to prevent scrollbar interference
      slider.children.css('width', getSlideWidth());
      // if slideMargin is supplied, add the css
      if (slider.settings.mode === 'horizontal' && slider.settings.slideMargin > 0) { slider.children.css('marginRight', slider.settings.slideMargin); }
      if (slider.settings.mode === 'vertical' && slider.settings.slideMargin > 0) { slider.children.css('marginBottom', slider.settings.slideMargin); }
      // if "fade" mode, add positioning and z-index CSS
      if (slider.settings.mode === 'fade') {
        slider.children.css({
          position: 'absolute',
          zIndex: 0,
          display: 'none'
        });
        // prepare the z-index on the showing element
        slider.children.eq(slider.settings.startSlide).css({zIndex: slider.settings.slideZIndex, display: 'block'});
      }
      // create an element to contain all slider controls (pager, start / stop, etc)
      slider.controls.el = $('<div class="bx-controls" />');
      // if captions are requested, add them
      if (slider.settings.captions) { appendCaptions(); }
      // check if startSlide is last slide
      slider.active.last = slider.settings.startSlide === getPagerQty() - 1;
      // if video is true, set up the fitVids plugin
      if (slider.settings.video) { el.fitVids(); }
      if (slider.settings.preloadImages === 'all' || slider.settings.ticker) { preloadSelector = slider.children; }
      // only check for control addition if not in "ticker" mode
      if (!slider.settings.ticker) {
        // if controls are requested, add them
        if (slider.settings.controls) { appendControls(); }
        // if auto is true, and auto controls are requested, add them
        if (slider.settings.auto && slider.settings.autoControls) { appendControlsAuto(); }
        // if pager is requested, add it
        if (slider.settings.pager) { appendPager(); }
        // if any control option is requested, add the controls wrapper
        if (slider.settings.controls || slider.settings.autoControls || slider.settings.pager) { slider.viewport.after(slider.controls.el); }
      // if ticker mode, do not allow a pager
      } else {
        slider.settings.pager = false;
      }
      loadElements(preloadSelector, start);
    };

    var loadElements = function(selector, callback) {
      var total = selector.find('img:not([src=""]), iframe').length,
      count = 0;
      if (total === 0) {
        callback();
        return;
      }
      selector.find('img:not([src=""]), iframe').each(function() {
        $(this).one('load error', function() {
          if (++count === total) { callback(); }
        }).each(function() {
          if (this.complete || this.src == '') { $(this).trigger('load'); }
        });
      });
    };

    /**
     * Start the slider
     */
    var start = function() {
      // if infinite loop, prepare additional slides
      if (slider.settings.infiniteLoop && slider.settings.mode !== 'fade' && !slider.settings.ticker) {
        var slice    = slider.settings.mode === 'vertical' ? slider.settings.minSlides : slider.settings.maxSlides,
        sliceAppend  = slider.children.slice(0, slice).clone(true).addClass('bx-clone'),
        slicePrepend = slider.children.slice(-slice).clone(true).addClass('bx-clone');
        if (slider.settings.ariaHidden) {
          sliceAppend.attr('aria-hidden', true);
          slicePrepend.attr('aria-hidden', true);
        }
        el.append(sliceAppend).prepend(slicePrepend);
      }
      // remove the loading DOM element
      slider.loader.remove();
      // set the left / top position of "el"
      setSlidePosition();
      // if "vertical" mode, always use adaptiveHeight to prevent odd behavior
      if (slider.settings.mode === 'vertical') { slider.settings.adaptiveHeight = true; }
      // set the viewport height
      slider.viewport.height(getViewportHeight());
      // make sure everything is positioned just right (same as a window resize)
      el.redrawSlider();
      // onSliderLoad callback
      slider.settings.onSliderLoad.call(el, slider.active.index);
      // slider has been fully initialized
      slider.initialized = true;
      // bind the resize call to the window
      if (slider.settings.responsive) { $(window).bind('resize', resizeWindow); }
      // if auto is true and has more than 1 page, start the show
      if (slider.settings.auto && slider.settings.autoStart && (getPagerQty() > 1 || slider.settings.autoSlideForOnePage)) { initAuto(); }
      // if ticker is true, start the ticker
      if (slider.settings.ticker) { initTicker(); }
      // if pager is requested, make the appropriate pager link active
      if (slider.settings.pager) { updatePagerActive(slider.settings.startSlide); }
      // check for any updates to the controls (like hideControlOnEnd updates)
      if (slider.settings.controls) { updateDirectionControls(); }
      // if touchEnabled is true, setup the touch events
      if (slider.settings.touchEnabled && !slider.settings.ticker) { initTouch(); }
      // if keyboardEnabled is true, setup the keyboard events
      if (slider.settings.keyboardEnabled && !slider.settings.ticker) {
        $(document).keydown(keyPress);
      }
    };

    /**
     * Returns the calculated height of the viewport, used to determine either adaptiveHeight or the maxHeight value
     */
    var getViewportHeight = function() {
      var height = 0;
      // first determine which children (slides) should be used in our height calculation
      var children = $();
      // if mode is not "vertical" and adaptiveHeight is false, include all children
      if (slider.settings.mode !== 'vertical' && !slider.settings.adaptiveHeight) {
        children = slider.children;
      } else {
        // if not carousel, return the single active child
        if (!slider.carousel) {
          children = slider.children.eq(slider.active.index);
        // if carousel, return a slice of children
        } else {
          // get the individual slide index
          var currentIndex = slider.settings.moveSlides === 1 ? slider.active.index : slider.active.index * getMoveBy();
          // add the current slide to the children
          children = slider.children.eq(currentIndex);
          // cycle through the remaining "showing" slides
          for (i = 1; i <= slider.settings.maxSlides - 1; i++) {
            // if looped back to the start
            if (currentIndex + i >= slider.children.length) {
              children = children.add(slider.children.eq(i - 1));
            } else {
              children = children.add(slider.children.eq(currentIndex + i));
            }
          }
        }
      }
      // if "vertical" mode, calculate the sum of the heights of the children
      if (slider.settings.mode === 'vertical') {
        children.each(function(index) {
          height += $(this).outerHeight();
        });
        // add user-supplied margins
        if (slider.settings.slideMargin > 0) {
          height += slider.settings.slideMargin * (slider.settings.minSlides - 1);
        }
      // if not "vertical" mode, calculate the max height of the children
      } else {
        height = Math.max.apply(Math, children.map(function() {
          return $(this).outerHeight(false);
        }).get());
      }

      if (slider.viewport.css('box-sizing') === 'border-box') {
        height += parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom')) +
              parseFloat(slider.viewport.css('border-top-width')) + parseFloat(slider.viewport.css('border-bottom-width'));
      } else if (slider.viewport.css('box-sizing') === 'padding-box') {
        height += parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom'));
      }

      return height;
    };

    /**
     * Returns the calculated width to be used for the outer wrapper / viewport
     */
    var getViewportMaxWidth = function() {
      var width = '100%';
      if (slider.settings.slideWidth > 0) {
        if (slider.settings.mode === 'horizontal') {
          width = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
        } else {
          width = slider.settings.slideWidth;
        }
      }
      return width;
    };

    /**
     * Returns the calculated width to be applied to each slide
     */
    var getSlideWidth = function() {
      var newElWidth = slider.settings.slideWidth, // start with any user-supplied slide width
      wrapWidth      = slider.viewport.width();    // get the current viewport width
      // if slide width was not supplied, or is larger than the viewport use the viewport width
      if (slider.settings.slideWidth === 0 ||
        (slider.settings.slideWidth > wrapWidth && !slider.carousel) ||
        slider.settings.mode === 'vertical') {
        newElWidth = wrapWidth;
      // if carousel, use the thresholds to determine the width
      } else if (slider.settings.maxSlides > 1 && slider.settings.mode === 'horizontal') {
        if (wrapWidth > slider.maxThreshold) {
          return newElWidth;
        } else if (wrapWidth < slider.minThreshold) {
          newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.minSlides - 1))) / slider.settings.minSlides;
        } else if (slider.settings.shrinkItems) {
          newElWidth = Math.floor((wrapWidth + slider.settings.slideMargin) / (Math.ceil((wrapWidth + slider.settings.slideMargin) / (newElWidth + slider.settings.slideMargin))) - slider.settings.slideMargin);
        }
      }
      return newElWidth;
    };

    /**
     * Returns the number of slides currently visible in the viewport (includes partially visible slides)
     */
    var getNumberSlidesShowing = function() {
      var slidesShowing = 1,
      childWidth = null;
      if (slider.settings.mode === 'horizontal' && slider.settings.slideWidth > 0) {
        // if viewport is smaller than minThreshold, return minSlides
        if (slider.viewport.width() < slider.minThreshold) {
          slidesShowing = slider.settings.minSlides;
        // if viewport is larger than maxThreshold, return maxSlides
        } else if (slider.viewport.width() > slider.maxThreshold) {
          slidesShowing = slider.settings.maxSlides;
        // if viewport is between min / max thresholds, divide viewport width by first child width
        } else {
          childWidth = slider.children.first().width() + slider.settings.slideMargin;
          slidesShowing = Math.floor((slider.viewport.width() +
            slider.settings.slideMargin) / childWidth) || 1;
        }
      // if "vertical" mode, slides showing will always be minSlides
      } else if (slider.settings.mode === 'vertical') {
        slidesShowing = slider.settings.minSlides;
      }
      return slidesShowing;
    };

    /**
     * Returns the number of pages (one full viewport of slides is one "page")
     */
    var getPagerQty = function() {
      var pagerQty = 0,
      breakPoint = 0,
      counter = 0;
      // if moveSlides is specified by the user
      if (slider.settings.moveSlides > 0) {
        if (slider.settings.infiniteLoop) {
          pagerQty = Math.ceil(slider.children.length / getMoveBy());
        } else {
          // when breakpoint goes above children length, counter is the number of pages
          while (breakPoint < slider.children.length) {
            ++pagerQty;
            breakPoint = counter + getNumberSlidesShowing();
            counter += slider.settings.moveSlides <= getNumberSlidesShowing() ? slider.settings.moveSlides : getNumberSlidesShowing();
          }
		  return counter;
        }
      // if moveSlides is 0 (auto) divide children length by sides showing, then round up
      } else {
        pagerQty = Math.ceil(slider.children.length / getNumberSlidesShowing());
      }
      return pagerQty;
    };

    /**
     * Returns the number of individual slides by which to shift the slider
     */
    var getMoveBy = function() {
      // if moveSlides was set by the user and moveSlides is less than number of slides showing
      if (slider.settings.moveSlides > 0 && slider.settings.moveSlides <= getNumberSlidesShowing()) {
        return slider.settings.moveSlides;
      }
      // if moveSlides is 0 (auto)
      return getNumberSlidesShowing();
    };

    /**
     * Sets the slider's (el) left or top position
     */
    var setSlidePosition = function() {
      var position, lastChild, lastShowingIndex;
      // if last slide, not infinite loop, and number of children is larger than specified maxSlides
      if (slider.children.length > slider.settings.maxSlides && slider.active.last && !slider.settings.infiniteLoop) {
        if (slider.settings.mode === 'horizontal') {
          // get the last child's position
          lastChild = slider.children.last();
          position = lastChild.position();
          // set the left position
          setPositionProperty(-(position.left - (slider.viewport.width() - lastChild.outerWidth())), 'reset', 0);
        } else if (slider.settings.mode === 'vertical') {
          // get the last showing index's position
          lastShowingIndex = slider.children.length - slider.settings.minSlides;
          position = slider.children.eq(lastShowingIndex).position();
          // set the top position
          setPositionProperty(-position.top, 'reset', 0);
        }
      // if not last slide
      } else {
        // get the position of the first showing slide
        position = slider.children.eq(slider.active.index * getMoveBy()).position();
        // check for last slide
        if (slider.active.index === getPagerQty() - 1) { slider.active.last = true; }
        // set the respective position
        if (position !== undefined) {
          if (slider.settings.mode === 'horizontal') { setPositionProperty(-position.left, 'reset', 0); }
          else if (slider.settings.mode === 'vertical') { setPositionProperty(-position.top, 'reset', 0); }
        }
      }
    };

    /**
     * Sets the el's animating property position (which in turn will sometimes animate el).
     * If using CSS, sets the transform property. If not using CSS, sets the top / left property.
     *
     * @param value (int)
     *  - the animating property's value
     *
     * @param type (string) 'slide', 'reset', 'ticker'
     *  - the type of instance for which the function is being
     *
     * @param duration (int)
     *  - the amount of time (in ms) the transition should occupy
     *
     * @param params (array) optional
     *  - an optional parameter containing any variables that need to be passed in
     */
    var setPositionProperty = function(value, type, duration, params) {
      var animateObj, propValue;
      // use CSS transform
      if (slider.usingCSS) {
        // determine the translate3d value
        propValue = slider.settings.mode === 'vertical' ? 'translate3d(0, ' + value + 'px, 0)' : 'translate3d(' + value + 'px, 0, 0)';
        // add the CSS transition-duration
        el.css('-' + slider.cssPrefix + '-transition-duration', duration / 1000 + 's');
        if (type === 'slide') {
          // set the property value
          el.css(slider.animProp, propValue);
          if (duration !== 0) {
            // bind a callback method - executes when CSS transition completes
            el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(e) {
              //make sure it's the correct one
              if (!$(e.target).is(el)) { return; }
              // unbind the callback
              el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
              updateAfterSlideTransition();
            });
          } else { //duration = 0
            updateAfterSlideTransition();
          }
        } else if (type === 'reset') {
          el.css(slider.animProp, propValue);
        } else if (type === 'ticker') {
          // make the transition use 'linear'
          el.css('-' + slider.cssPrefix + '-transition-timing-function', 'linear');
          el.css(slider.animProp, propValue);
          if (duration !== 0) {
            el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(e) {
              //make sure it's the correct one
              if (!$(e.target).is(el)) { return; }
              // unbind the callback
              el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
              // reset the position
              setPositionProperty(params.resetValue, 'reset', 0);
              // start the loop again
              tickerLoop();
            });
          } else { //duration = 0
            setPositionProperty(params.resetValue, 'reset', 0);
            tickerLoop();
          }
        }
      // use JS animate
      } else {
        animateObj = {};
        animateObj[slider.animProp] = value;
        if (type === 'slide') {
          el.animate(animateObj, duration, slider.settings.easing, function() {
            updateAfterSlideTransition();
          });
        } else if (type === 'reset') {
          el.css(slider.animProp, value);
        } else if (type === 'ticker') {
          el.animate(animateObj, duration, 'linear', function() {
            setPositionProperty(params.resetValue, 'reset', 0);
            // run the recursive loop after animation
            tickerLoop();
          });
        }
      }
    };

    /**
     * Populates the pager with proper amount of pages
     */
    var populatePager = function() {
      var pagerHtml = '',
      linkContent = '',
      pagerQty = getPagerQty();
      // loop through each pager item
      for (var i = 0; i < pagerQty; i++) {
        linkContent = '';
        // if a buildPager function is supplied, use it to get pager link value, else use index + 1
        if (slider.settings.buildPager && $.isFunction(slider.settings.buildPager) || slider.settings.pagerCustom) {
          linkContent = slider.settings.buildPager(i);
          slider.pagerEl.addClass('bx-custom-pager');
        } else {
          linkContent = i + 1;
          slider.pagerEl.addClass('bx-default-pager');
        }
        // var linkContent = slider.settings.buildPager && $.isFunction(slider.settings.buildPager) ? slider.settings.buildPager(i) : i + 1;
        // add the markup to the string
        pagerHtml += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link">' + linkContent + '</a></div>';
      }
      // populate the pager element with pager links
      slider.pagerEl.html(pagerHtml);
    };

    /**
     * Appends the pager to the controls element
     */
    var appendPager = function() {
      if (!slider.settings.pagerCustom) {
        // create the pager DOM element
        slider.pagerEl = $('<div class="bx-pager" />');
        // if a pager selector was supplied, populate it with the pager
        if (slider.settings.pagerSelector) {
          $(slider.settings.pagerSelector).html(slider.pagerEl);
        // if no pager selector was supplied, add it after the wrapper
        } else {
          slider.controls.el.addClass('bx-has-pager').append(slider.pagerEl);
        }
        // populate the pager
        populatePager();
      } else {
        slider.pagerEl = $(slider.settings.pagerCustom);
      }
      // assign the pager click binding
      slider.pagerEl.on('click touchend', 'a', clickPagerBind);
    };

    /**
     * Appends prev / next controls to the controls element
     */
    var appendControls = function() {
      slider.controls.next = $('<a class="bx-next" href="">' + slider.settings.nextText + '</a>');
      slider.controls.prev = $('<a class="bx-prev" href="">' + slider.settings.prevText + '</a>');
      // bind click actions to the controls
      slider.controls.next.bind('click touchend', clickNextBind);
      slider.controls.prev.bind('click touchend', clickPrevBind);
      // if nextSelector was supplied, populate it
      if (slider.settings.nextSelector) {
        $(slider.settings.nextSelector).append(slider.controls.next);
      }
      // if prevSelector was supplied, populate it
      if (slider.settings.prevSelector) {
        $(slider.settings.prevSelector).append(slider.controls.prev);
      }
      // if no custom selectors were supplied
      if (!slider.settings.nextSelector && !slider.settings.prevSelector) {
        // add the controls to the DOM
        slider.controls.directionEl = $('<div class="bx-controls-direction" />');
        // add the control elements to the directionEl
        slider.controls.directionEl.append(slider.controls.prev).append(slider.controls.next);
        // slider.viewport.append(slider.controls.directionEl);
        slider.controls.el.addClass('bx-has-controls-direction').append(slider.controls.directionEl);
      }
    };

    /**
     * Appends start / stop auto controls to the controls element
     */
    var appendControlsAuto = function() {
      slider.controls.start = $('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + slider.settings.startText + '</a></div>');
      slider.controls.stop = $('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + slider.settings.stopText + '</a></div>');
      // add the controls to the DOM
      slider.controls.autoEl = $('<div class="bx-controls-auto" />');
      // bind click actions to the controls
      slider.controls.autoEl.on('click', '.bx-start', clickStartBind);
      slider.controls.autoEl.on('click', '.bx-stop', clickStopBind);
      // if autoControlsCombine, insert only the "start" control
      if (slider.settings.autoControlsCombine) {
        slider.controls.autoEl.append(slider.controls.start);
      // if autoControlsCombine is false, insert both controls
      } else {
        slider.controls.autoEl.append(slider.controls.start).append(slider.controls.stop);
      }
      // if auto controls selector was supplied, populate it with the controls
      if (slider.settings.autoControlsSelector) {
        $(slider.settings.autoControlsSelector).html(slider.controls.autoEl);
      // if auto controls selector was not supplied, add it after the wrapper
      } else {
        slider.controls.el.addClass('bx-has-controls-auto').append(slider.controls.autoEl);
      }
      // update the auto controls
      updateAutoControls(slider.settings.autoStart ? 'stop' : 'start');
    };

    /**
     * Appends image captions to the DOM
     */
    var appendCaptions = function() {
      // cycle through each child
      slider.children.each(function(index) {
        // get the image title attribute
        var title = $(this).find('img:first').attr('title');
        // append the caption
        if (title !== undefined && ('' + title).length) {
          $(this).append('<div class="bx-caption"><span>' + title + '</span></div>');
        }
      });
    };

    /**
     * Click next binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickNextBind = function(e) {
      e.preventDefault();
      if (slider.controls.el.hasClass('disabled')) { return; }
      // if auto show is running, stop it
      if (slider.settings.auto && slider.settings.stopAutoOnClick) { el.stopAuto(); }
      el.goToNextSlide();
    };

    /**
     * Click prev binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickPrevBind = function(e) {
      e.preventDefault();
      if (slider.controls.el.hasClass('disabled')) { return; }
      // if auto show is running, stop it
      if (slider.settings.auto && slider.settings.stopAutoOnClick) { el.stopAuto(); }
      el.goToPrevSlide();
    };

    /**
     * Click start binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickStartBind = function(e) {
      el.startAuto();
      e.preventDefault();
    };

    /**
     * Click stop binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickStopBind = function(e) {
      el.stopAuto();
      e.preventDefault();
    };

    /**
     * Click pager binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickPagerBind = function(e) {
      var pagerLink, pagerIndex;
      e.preventDefault();
      if (slider.controls.el.hasClass('disabled')) {
        return;
      }
      // if auto show is running, stop it
      if (slider.settings.auto  && slider.settings.stopAutoOnClick) { el.stopAuto(); }
      pagerLink = $(e.currentTarget);
      if (pagerLink.attr('data-slide-index') !== undefined) {
        pagerIndex = parseInt(pagerLink.attr('data-slide-index'));
        // if clicked pager link is not active, continue with the goToSlide call
        if (pagerIndex !== slider.active.index) { el.goToSlide(pagerIndex); }
      }
    };

    /**
     * Updates the pager links with an active class
     *
     * @param slideIndex (int)
     *  - index of slide to make active
     */
    var updatePagerActive = function(slideIndex) {
      // if "short" pager type
      var len = slider.children.length; // nb of children
      if (slider.settings.pagerType === 'short') {
        if (slider.settings.maxSlides > 1) {
          len = Math.ceil(slider.children.length / slider.settings.maxSlides);
        }
        slider.pagerEl.html((slideIndex + 1) + slider.settings.pagerShortSeparator + len);
        return;
      }
      // remove all pager active classes
      slider.pagerEl.find('a').removeClass('active');
      // apply the active class for all pagers
      slider.pagerEl.each(function(i, el) { $(el).find('a').eq(slideIndex).addClass('active'); });
    };

    /**
     * Performs needed actions after a slide transition
     */
    var updateAfterSlideTransition = function() {
      // if infinite loop is true
      if (slider.settings.infiniteLoop) {
        var position = '';
        // first slide
        if (slider.active.index === 0) {
          // set the new position
          position = slider.children.eq(0).position();
        // carousel, last slide
        } else if (slider.active.index === getPagerQty() - 1 && slider.carousel) {
          position = slider.children.eq((getPagerQty() - 1) * getMoveBy()).position();
        // last slide
        } else if (slider.active.index === slider.children.length - 1) {
          position = slider.children.eq(slider.children.length - 1).position();
        }
        if (position) {
          if (slider.settings.mode === 'horizontal') { setPositionProperty(-position.left, 'reset', 0); }
          else if (slider.settings.mode === 'vertical') { setPositionProperty(-position.top, 'reset', 0); }
        }
      }
      // declare that the transition is complete
      slider.working = false;
      // onSlideAfter callback
      slider.settings.onSlideAfter.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
    };

    /**
     * Updates the auto controls state (either active, or combined switch)
     *
     * @param state (string) "start", "stop"
     *  - the new state of the auto show
     */
    var updateAutoControls = function(state) {
      // if autoControlsCombine is true, replace the current control with the new state
      if (slider.settings.autoControlsCombine) {
        slider.controls.autoEl.html(slider.controls[state]);
      // if autoControlsCombine is false, apply the "active" class to the appropriate control
      } else {
        slider.controls.autoEl.find('a').removeClass('active');
        slider.controls.autoEl.find('a:not(.bx-' + state + ')').addClass('active');
      }
    };

    /**
     * Updates the direction controls (checks if either should be hidden)
     */
    var updateDirectionControls = function() {
      if (getPagerQty() === 1) {
        slider.controls.prev.addClass('disabled');
        slider.controls.next.addClass('disabled');
      } else if (!slider.settings.infiniteLoop && slider.settings.hideControlOnEnd) {
        // if first slide
        if (slider.active.index === 0) {
          slider.controls.prev.addClass('disabled');
          slider.controls.next.removeClass('disabled');
        // if last slide
        } else if (slider.active.index === getPagerQty() - 1) {
          slider.controls.next.addClass('disabled');
          slider.controls.prev.removeClass('disabled');
        // if any slide in the middle
        } else {
          slider.controls.prev.removeClass('disabled');
          slider.controls.next.removeClass('disabled');
        }
      }
    };
	/* auto start and stop functions */
	var windowFocusHandler = function() { el.startAuto(); };
	var windowBlurHandler = function() { el.stopAuto(); };
    /**
     * Initializes the auto process
     */
    var initAuto = function() {
      // if autoDelay was supplied, launch the auto show using a setTimeout() call
      if (slider.settings.autoDelay > 0) {
        var timeout = setTimeout(el.startAuto, slider.settings.autoDelay);
      // if autoDelay was not supplied, start the auto show normally
      } else {
        el.startAuto();

        //add focus and blur events to ensure its running if timeout gets paused
        $(window).focus(windowFocusHandler).blur(windowBlurHandler);
      }
      // if autoHover is requested
      if (slider.settings.autoHover) {
        // on el hover
        el.hover(function() {
          // if the auto show is currently playing (has an active interval)
          if (slider.interval) {
            // stop the auto show and pass true argument which will prevent control update
            el.stopAuto(true);
            // create a new autoPaused value which will be used by the relative "mouseout" event
            slider.autoPaused = true;
          }
        }, function() {
          // if the autoPaused value was created be the prior "mouseover" event
          if (slider.autoPaused) {
            // start the auto show and pass true argument which will prevent control update
            el.startAuto(true);
            // reset the autoPaused value
            slider.autoPaused = null;
          }
        });
      }
    };

    /**
     * Initializes the ticker process
     */
    var initTicker = function() {
      var startPosition = 0,
      position, transform, value, idx, ratio, property, newSpeed, totalDimens;
      // if autoDirection is "next", append a clone of the entire slider
      if (slider.settings.autoDirection === 'next') {
        el.append(slider.children.clone().addClass('bx-clone'));
      // if autoDirection is "prev", prepend a clone of the entire slider, and set the left position
      } else {
        el.prepend(slider.children.clone().addClass('bx-clone'));
        position = slider.children.first().position();
        startPosition = slider.settings.mode === 'horizontal' ? -position.left : -position.top;
      }
      setPositionProperty(startPosition, 'reset', 0);
      // do not allow controls in ticker mode
      slider.settings.pager = false;
      slider.settings.controls = false;
      slider.settings.autoControls = false;
      // if autoHover is requested
      if (slider.settings.tickerHover) {
        if (slider.usingCSS) {
          idx = slider.settings.mode === 'horizontal' ? 4 : 5;
          slider.viewport.hover(function() {
            transform = el.css('-' + slider.cssPrefix + '-transform');
            value = parseFloat(transform.split(',')[idx]);
            setPositionProperty(value, 'reset', 0);
          }, function() {
            totalDimens = 0;
            slider.children.each(function(index) {
              totalDimens += slider.settings.mode === 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
            });
            // calculate the speed ratio (used to determine the new speed to finish the paused animation)
            ratio = slider.settings.speed / totalDimens;
            // determine which property to use
            property = slider.settings.mode === 'horizontal' ? 'left' : 'top';
            // calculate the new speed
            newSpeed = ratio * (totalDimens - (Math.abs(parseInt(value))));
            tickerLoop(newSpeed);
          });
        } else {
          // on el hover
          slider.viewport.hover(function() {
            el.stop();
          }, function() {
            // calculate the total width of children (used to calculate the speed ratio)
            totalDimens = 0;
            slider.children.each(function(index) {
              totalDimens += slider.settings.mode === 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
            });
            // calculate the speed ratio (used to determine the new speed to finish the paused animation)
            ratio = slider.settings.speed / totalDimens;
            // determine which property to use
            property = slider.settings.mode === 'horizontal' ? 'left' : 'top';
            // calculate the new speed
            newSpeed = ratio * (totalDimens - (Math.abs(parseInt(el.css(property)))));
            tickerLoop(newSpeed);
          });
        }
      }
      // start the ticker loop
      tickerLoop();
    };

    /**
     * Runs a continuous loop, news ticker-style
     */
    var tickerLoop = function(resumeSpeed) {
      var speed = resumeSpeed ? resumeSpeed : slider.settings.speed,
      position = {left: 0, top: 0},
      reset = {left: 0, top: 0},
      animateProperty, resetValue, params;

      // if "next" animate left position to last child, then reset left to 0
      if (slider.settings.autoDirection === 'next') {
        position = el.find('.bx-clone').first().position();
      // if "prev" animate left position to 0, then reset left to first non-clone child
      } else {
        reset = slider.children.first().position();
      }
      animateProperty = slider.settings.mode === 'horizontal' ? -position.left : -position.top;
      resetValue = slider.settings.mode === 'horizontal' ? -reset.left : -reset.top;
      params = {resetValue: resetValue};
      setPositionProperty(animateProperty, 'ticker', speed, params);
    };

    /**
     * Check if el is on screen
     */
    var isOnScreen = function(el) {
      var win = $(window),
      viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
      },
      bounds = el.offset();

      viewport.right = viewport.left + win.width();
      viewport.bottom = viewport.top + win.height();
      bounds.right = bounds.left + el.outerWidth();
      bounds.bottom = bounds.top + el.outerHeight();

      return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    };

    /**
     * Initializes keyboard events
     */
    var keyPress = function(e) {
      var activeElementTag = document.activeElement.tagName.toLowerCase(),
      tagFilters = 'input|textarea',
      p = new RegExp(activeElementTag,['i']),
      result = p.exec(tagFilters);

      if (result == null && isOnScreen(el)) {
        if (e.keyCode === 39) {
          clickNextBind(e);
          return false;
        } else if (e.keyCode === 37) {
          clickPrevBind(e);
          return false;
        }
      }
    };

    /**
     * Initializes touch events
     */
    var initTouch = function() {
      // initialize object to contain all touch values
      slider.touch = {
        start: {x: 0, y: 0},
        end: {x: 0, y: 0}
      };
      slider.viewport.bind('touchstart MSPointerDown pointerdown', onTouchStart);

      //for browsers that have implemented pointer events and fire a click after
      //every pointerup regardless of whether pointerup is on same screen location as pointerdown or not
      slider.viewport.on('click', '.bxslider a', function(e) {
        if (slider.viewport.hasClass('click-disabled')) {
          e.preventDefault();
          slider.viewport.removeClass('click-disabled');
        }
      });
    };

    /**
     * Event handler for "touchstart"
     *
     * @param e (event)
     *  - DOM event object
     */
    var onTouchStart = function(e) {
      //disable slider controls while user is interacting with slides to avoid slider freeze that happens on touch devices when a slide swipe happens immediately after interacting with slider controls
      slider.controls.el.addClass('disabled');

      if (slider.working) {
        e.preventDefault();
        slider.controls.el.removeClass('disabled');
      } else {
        // record the original position when touch starts
        slider.touch.originalPos = el.position();
        var orig = e.originalEvent,
        touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig];
        // record the starting touch x, y coordinates
        slider.touch.start.x = touchPoints[0].pageX;
        slider.touch.start.y = touchPoints[0].pageY;

        var chromePointerEvents = typeof PointerEvent === 'function'; if (chromePointerEvents) { if (orig.pointerId === undefined) { return; } }
        if (slider.viewport.get(0).setPointerCapture) {
          slider.pointerId = orig.pointerId;
          slider.viewport.get(0).setPointerCapture(slider.pointerId);
        }
        // bind a "touchmove" event to the viewport
        slider.viewport.bind('touchmove MSPointerMove pointermove', onTouchMove);
        // bind a "touchend" event to the viewport
        slider.viewport.bind('touchend MSPointerUp pointerup', onTouchEnd);
        slider.viewport.bind('MSPointerCancel pointercancel', onPointerCancel);
      }
    };

    /**
     * Cancel Pointer for Windows Phone
     *
     * @param e (event)
     *  - DOM event object
     */
    var onPointerCancel = function(e) {
      /* onPointerCancel handler is needed to deal with situations when a touchend
      doesn't fire after a touchstart (this happens on windows phones only) */
      setPositionProperty(slider.touch.originalPos.left, 'reset', 0);

      //remove handlers
      slider.controls.el.removeClass('disabled');
      slider.viewport.unbind('MSPointerCancel pointercancel', onPointerCancel);
      slider.viewport.unbind('touchmove MSPointerMove pointermove', onTouchMove);
      slider.viewport.unbind('touchend MSPointerUp pointerup', onTouchEnd);
      if (slider.viewport.get(0).releasePointerCapture) {
        slider.viewport.get(0).releasePointerCapture(slider.pointerId);
      }
    };

    /**
     * Event handler for "touchmove"
     *
     * @param e (event)
     *  - DOM event object
     */
    var onTouchMove = function(e) {
      var orig = e.originalEvent,
      touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig],
      // if scrolling on y axis, do not prevent default
      xMovement = Math.abs(touchPoints[0].pageX - slider.touch.start.x),
      yMovement = Math.abs(touchPoints[0].pageY - slider.touch.start.y),
      value = 0,
      change = 0;

      // x axis swipe
      if ((xMovement * 3) > yMovement && slider.settings.preventDefaultSwipeX) {
        e.preventDefault();
      // y axis swipe
      } else if ((yMovement * 3) > xMovement && slider.settings.preventDefaultSwipeY) {
        e.preventDefault();
      }
      if (slider.settings.mode !== 'fade' && slider.settings.oneToOneTouch) {
        // if horizontal, drag along x axis
        if (slider.settings.mode === 'horizontal') {
          change = touchPoints[0].pageX - slider.touch.start.x;
          value = slider.touch.originalPos.left + change;
        // if vertical, drag along y axis
        } else {
          change = touchPoints[0].pageY - slider.touch.start.y;
          value = slider.touch.originalPos.top + change;
        }
        setPositionProperty(value, 'reset', 0);
      }
    };

    /**
     * Event handler for "touchend"
     *
     * @param e (event)
     *  - DOM event object
     */
    var onTouchEnd = function(e) {
      slider.viewport.unbind('touchmove MSPointerMove pointermove', onTouchMove);
      //enable slider controls as soon as user stops interacing with slides
      slider.controls.el.removeClass('disabled');
      var orig    = e.originalEvent,
      touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig],
      value       = 0,
      distance    = 0;
      // record end x, y positions
      slider.touch.end.x = touchPoints[0].pageX;
      slider.touch.end.y = touchPoints[0].pageY;
      // if fade mode, check if absolute x distance clears the threshold
      if (slider.settings.mode === 'fade') {
        distance = Math.abs(slider.touch.start.x - slider.touch.end.x);
        if (distance >= slider.settings.swipeThreshold) {
          if (slider.touch.start.x > slider.touch.end.x) {
            el.goToNextSlide();
          } else {
            el.goToPrevSlide();
          }
          el.stopAuto();
        }
      // not fade mode
      } else {
        // calculate distance and el's animate property
        if (slider.settings.mode === 'horizontal') {
          distance = slider.touch.end.x - slider.touch.start.x;
          value = slider.touch.originalPos.left;
        } else {
          distance = slider.touch.end.y - slider.touch.start.y;
          value = slider.touch.originalPos.top;
        }
        // if not infinite loop and first / last slide, do not attempt a slide transition
        if (!slider.settings.infiniteLoop && ((slider.active.index === 0 && distance > 0) || (slider.active.last && distance < 0))) {
          setPositionProperty(value, 'reset', 200);
        } else {
          // check if distance clears threshold
          if (Math.abs(distance) >= slider.settings.swipeThreshold) {
            if (distance < 0) {
              el.goToNextSlide();
            } else {
              el.goToPrevSlide();
            }
            el.stopAuto();
          } else {
            // el.animate(property, 200);
            setPositionProperty(value, 'reset', 200);
          }
        }
      }
      slider.viewport.unbind('touchend MSPointerUp pointerup', onTouchEnd);
      if (slider.viewport.get(0).releasePointerCapture) {
        slider.viewport.get(0).releasePointerCapture(slider.pointerId);
      }
    };

    /**
     * Window resize event callback
     */
    var resizeWindow = function(e) {
      // don't do anything if slider isn't initialized.
      if (!slider.initialized) { return; }
      // Delay if slider working.
      if (slider.working) {
        window.setTimeout(resizeWindow, 10);
      } else {
        // get the new window dimens (again, thank you IE)
        var windowWidthNew = $(window).width(),
        windowHeightNew = $(window).height();
        // make sure that it is a true window resize
        // *we must check this because our dinosaur friend IE fires a window resize event when certain DOM elements
        // are resized. Can you just die already?*
        if (windowWidth !== windowWidthNew || windowHeight !== windowHeightNew) {
          // set the new window dimens
          windowWidth = windowWidthNew;
          windowHeight = windowHeightNew;
          // update all dynamic elements
          el.redrawSlider();
          // Call user resize handler
          slider.settings.onSliderResize.call(el, slider.active.index);
        }
      }
    };

    /**
     * Adds an aria-hidden=true attribute to each element
     *
     * @param startVisibleIndex (int)
     *  - the first visible element's index
     */
    var applyAriaHiddenAttributes = function(startVisibleIndex) {
      var numberOfSlidesShowing = getNumberSlidesShowing();
      // only apply attributes if the setting is enabled and not in ticker mode
      if (slider.settings.ariaHidden && !slider.settings.ticker) {
        // add aria-hidden=true to all elements
        slider.children.attr('aria-hidden', 'true');
        // get the visible elements and change to aria-hidden=false
        slider.children.slice(startVisibleIndex, startVisibleIndex + numberOfSlidesShowing).attr('aria-hidden', 'false');
      }
    };

    /**
     * Returns index according to present page range
     *
     * @param slideOndex (int)
     *  - the desired slide index
     */
    var setSlideIndex = function(slideIndex) {
      if (slideIndex < 0) {
        if (slider.settings.infiniteLoop) {
          return getPagerQty() - 1;
        }else {
          //we don't go to undefined slides
          return slider.active.index;
        }
      // if slideIndex is greater than children length, set active index to 0 (this happens during infinite loop)
      } else if (slideIndex >= getPagerQty()) {
        if (slider.settings.infiniteLoop) {
          return 0;
        } else {
          //we don't move to undefined pages
          return slider.active.index;
        }
      // set active index to requested slide
      } else {
        return slideIndex;
      }
    };

    /**
     * ===================================================================================
     * = PUBLIC FUNCTIONS
     * ===================================================================================
     */

    /**
     * Performs slide transition to the specified slide
     *
     * @param slideIndex (int)
     *  - the destination slide's index (zero-based)
     *
     * @param direction (string)
     *  - INTERNAL USE ONLY - the direction of travel ("prev" / "next")
     */
    el.goToSlide = function(slideIndex, direction) {
      // onSlideBefore, onSlideNext, onSlidePrev callbacks
      // Allow transition canceling based on returned value
      var performTransition = true,
      moveBy = 0,
      position = {left: 0, top: 0},
      lastChild = null,
      lastShowingIndex, eq, value, requestEl;
      // store the old index
      slider.oldIndex = slider.active.index;
      //set new index
      slider.active.index = setSlideIndex(slideIndex);

      // if plugin is currently in motion, ignore request
      if (slider.working || slider.active.index === slider.oldIndex) { return; }
      // declare that plugin is in motion
      slider.working = true;

      performTransition = slider.settings.onSlideBefore.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);

      // If transitions canceled, reset and return
      if (typeof (performTransition) !== 'undefined' && !performTransition) {
        slider.active.index = slider.oldIndex; // restore old index
        slider.working = false; // is not in motion
        return;
      }

      if (direction === 'next') {
        // Prevent canceling in future functions or lack there-of from negating previous commands to cancel
        if (!slider.settings.onSlideNext.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index)) {
          performTransition = false;
        }
      } else if (direction === 'prev') {
        // Prevent canceling in future functions or lack there-of from negating previous commands to cancel
        if (!slider.settings.onSlidePrev.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index)) {
          performTransition = false;
        }
      }

      // check if last slide
      slider.active.last = slider.active.index >= getPagerQty() - 1;
      // update the pager with active class
      if (slider.settings.pager || slider.settings.pagerCustom) { updatePagerActive(slider.active.index); }
      // // check for direction control update
      if (slider.settings.controls) { updateDirectionControls(); }
      // if slider is set to mode: "fade"
      if (slider.settings.mode === 'fade') {
        // if adaptiveHeight is true and next height is different from current height, animate to the new height
        if (slider.settings.adaptiveHeight && slider.viewport.height() !== getViewportHeight()) {
          slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
        }
        // fade out the visible child and reset its z-index value
        slider.children.filter(':visible').fadeOut(slider.settings.speed).css({zIndex: 0});
        // fade in the newly requested slide
        slider.children.eq(slider.active.index).css('zIndex', slider.settings.slideZIndex + 1).fadeIn(slider.settings.speed, function() {
          $(this).css('zIndex', slider.settings.slideZIndex);
          updateAfterSlideTransition();
        });
      // slider mode is not "fade"
      } else {
        // if adaptiveHeight is true and next height is different from current height, animate to the new height
        if (slider.settings.adaptiveHeight && slider.viewport.height() !== getViewportHeight()) {
          slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
        }
        // if carousel and not infinite loop
        if (!slider.settings.infiniteLoop && slider.carousel && slider.active.last) {
          if (slider.settings.mode === 'horizontal') {
            // get the last child position
            lastChild = slider.children.eq(slider.children.length - 1);
            position = lastChild.position();
            // calculate the position of the last slide
            moveBy = slider.viewport.width() - lastChild.outerWidth();
          } else {
            // get last showing index position
            lastShowingIndex = slider.children.length - slider.settings.minSlides;
            position = slider.children.eq(lastShowingIndex).position();
          }
          // horizontal carousel, going previous while on first slide (infiniteLoop mode)
        } else if (slider.carousel && slider.active.last && direction === 'prev') {
          // get the last child position
          eq = slider.settings.moveSlides === 1 ? slider.settings.maxSlides - getMoveBy() : ((getPagerQty() - 1) * getMoveBy()) - (slider.children.length - slider.settings.maxSlides);
          lastChild = el.children('.bx-clone').eq(eq);
          position = lastChild.position();
        // if infinite loop and "Next" is clicked on the last slide
        } else if (direction === 'next' && slider.active.index === 0) {
          // get the last clone position
          position = el.find('> .bx-clone').eq(slider.settings.maxSlides).position();
          slider.active.last = false;
        // normal non-zero requests
        } else if (slideIndex >= 0) {
          //parseInt is applied to allow floats for slides/page
          requestEl = slideIndex * parseInt(getMoveBy());
          position = slider.children.eq(requestEl).position();
        }

        /* If the position doesn't exist
         * (e.g. if you destroy the slider on a next click),
         * it doesn't throw an error.
         */
        if (typeof (position) !== 'undefined') {
          value = slider.settings.mode === 'horizontal' ? -(position.left - moveBy) : -position.top;
          // plugin values to be animated
          setPositionProperty(value, 'slide', slider.settings.speed);
        }
        slider.working = false;
      }
      if (slider.settings.ariaHidden) { applyAriaHiddenAttributes(slider.active.index * getMoveBy()); }
    };

    /**
     * Transitions to the next slide in the show
     */
    el.goToNextSlide = function() {
      // if infiniteLoop is false and last page is showing, disregard call
      if (!slider.settings.infiniteLoop && slider.active.last) { return; }
	  if (slider.working == true){ return ;}
      var pagerIndex = parseInt(slider.active.index) + 1;
      el.goToSlide(pagerIndex, 'next');
    };

    /**
     * Transitions to the prev slide in the show
     */
    el.goToPrevSlide = function() {
      // if infiniteLoop is false and last page is showing, disregard call
      if (!slider.settings.infiniteLoop && slider.active.index === 0) { return; }
	  if (slider.working == true){ return ;}
      var pagerIndex = parseInt(slider.active.index) - 1;
      el.goToSlide(pagerIndex, 'prev');
    };

    /**
     * Starts the auto show
     *
     * @param preventControlUpdate (boolean)
     *  - if true, auto controls state will not be updated
     */
    el.startAuto = function(preventControlUpdate) {
      // if an interval already exists, disregard call
      if (slider.interval) { return; }
      // create an interval
      slider.interval = setInterval(function() {
        if (slider.settings.autoDirection === 'next') {
          el.goToNextSlide();
        } else {
          el.goToPrevSlide();
        }
      }, slider.settings.pause);
	  //allback for when the auto rotate status changes
	  slider.settings.onAutoChange.call(el, true);
      // if auto controls are displayed and preventControlUpdate is not true
      if (slider.settings.autoControls && preventControlUpdate !== true) { updateAutoControls('stop'); }
    };

    /**
     * Stops the auto show
     *
     * @param preventControlUpdate (boolean)
     *  - if true, auto controls state will not be updated
     */
    el.stopAuto = function(preventControlUpdate) {
      // if no interval exists, disregard call
      if (!slider.interval) { return; }
      // clear the interval
      clearInterval(slider.interval);
      slider.interval = null;
	  //allback for when the auto rotate status changes
	  slider.settings.onAutoChange.call(el, false);
      // if auto controls are displayed and preventControlUpdate is not true
      if (slider.settings.autoControls && preventControlUpdate !== true) { updateAutoControls('start'); }
    };

    /**
     * Returns current slide index (zero-based)
     */
    el.getCurrentSlide = function() {
      return slider.active.index;
    };

    /**
     * Returns current slide element
     */
    el.getCurrentSlideElement = function() {
      return slider.children.eq(slider.active.index);
    };

    /**
     * Returns a slide element
     * @param index (int)
     *  - The index (zero-based) of the element you want returned.
     */
    el.getSlideElement = function(index) {
      return slider.children.eq(index);
    };

    /**
     * Returns number of slides in show
     */
    el.getSlideCount = function() {
      return slider.children.length;
    };

    /**
     * Return slider.working variable
     */
    el.isWorking = function() {
      return slider.working;
    };

    /**
     * Update all dynamic slider elements
     */
    el.redrawSlider = function() {
      // resize all children in ratio to new screen size
      slider.children.add(el.find('.bx-clone')).outerWidth(getSlideWidth());
      // adjust the height
      slider.viewport.css('height', getViewportHeight());
      // update the slide position
      if (!slider.settings.ticker) { setSlidePosition(); }
      // if active.last was true before the screen resize, we want
      // to keep it last no matter what screen size we end on
      if (slider.active.last) { slider.active.index = getPagerQty() - 1; }
      // if the active index (page) no longer exists due to the resize, simply set the index as last
      if (slider.active.index >= getPagerQty()) { slider.active.last = true; }
      // if a pager is being displayed and a custom pager is not being used, update it
      if (slider.settings.pager && !slider.settings.pagerCustom) {
        populatePager();
        updatePagerActive(slider.active.index);
      }
      if (slider.settings.ariaHidden) { applyAriaHiddenAttributes(slider.active.index * getMoveBy()); }
    };

    /**
     * Destroy the current instance of the slider (revert everything back to original state)
     */
    el.destroySlider = function() {
      // don't do anything if slider has already been destroyed
      if (!slider.initialized) { return; }
      slider.initialized = false;
      $('.bx-clone', this).remove();
      slider.children.each(function() {
        if ($(this).data('origStyle') !== undefined) {
          $(this).attr('style', $(this).data('origStyle'));
        } else {
          $(this).removeAttr('style');
        }
      });
      if ($(this).data('origStyle') !== undefined) {
        this.attr('style', $(this).data('origStyle'));
      } else {
        $(this).removeAttr('style');
      }
      $(this).unwrap().unwrap();
      if (slider.controls.el) { slider.controls.el.remove(); }
      if (slider.controls.next) { slider.controls.next.remove(); }
      if (slider.controls.prev) { slider.controls.prev.remove(); }
      if (slider.pagerEl && slider.settings.controls && !slider.settings.pagerCustom) { slider.pagerEl.remove(); }
      $('.bx-caption', this).remove();
      if (slider.controls.autoEl) { slider.controls.autoEl.remove(); }
      clearInterval(slider.interval);
      if (slider.settings.responsive) { $(window).unbind('resize', resizeWindow); }
      if (slider.settings.keyboardEnabled) { $(document).unbind('keydown', keyPress); }
      //remove self reference in data
      $(this).removeData('bxSlider');
	  // remove global window handlers
	  $(window).off('blur', windowBlurHandler).off('focus', windowFocusHandler);
    };

    /**
     * Reload the slider (revert all DOM changes, and re-initialize)
     */
    el.reloadSlider = function(settings) {
      if (settings !== undefined) { options = settings; }
      el.destroySlider();
      init();
      //store reference to self in order to access public functions later
      $(el).data('bxSlider', this);
    };

    init();

    $(el).data('bxSlider', this);

    // returns the current jQuery object
    return this;
  };

})(jQuery);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:58:"/bitrix/templates/aspro_next/js/jqModal.js?154384449011022";s:6:"source";s:42:"/bitrix/templates/aspro_next/js/jqModal.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
 * jqModal - Minimalist Modaling with jQuery
 *
 * Copyright (c) 2007-2014 Brice Burgess @iceburg_net
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 * 
 * $Version: 1.0.2 (2014.04.10 +r19)
 * Requires: jQuery 1.2.3+
 */

(function($) {
	
	/**
	 * Initialize a set of elements as "modals". Modals typically are popup dialogs,
	 * notices, modal windows, &c. 
	 * 
	 * @name jqm
	 * @param options user defined options, augments defaults.
	 * @type jQuery
	 * @cat Plugins/jqModal
	 */
	
	$.fn.jqm=function(options){
		
		var o = $.extend({}, $.jqm.params, options);

		return this.each(function(){
			var e = $(this),
				jqm = $(this).data('jqm');
			
			if(!jqm) jqm = {ID: I++};
			
			// add/extend options to modal and mark as initialized
			e.data('jqm',$.extend(o,jqm)).addClass('jqm-init');
			
			// ... Attach events to trigger showing of this modal
			o.trigger&&$(this).jqmAddTrigger(o.trigger);
		});
	};
	
	
	/**
	 * Matching modals will have their jqmShow() method fired by attaching a
	 *   onClick event to elements matching `trigger`.
	 * 
	 * @name jqmAddTrigger
	 * @param trigger a selector String, jQuery collection of elements, or a DOM element.
	 */
	$.fn.jqmAddTrigger=function(trigger){
		return this.each(function(){
			if(!addTrigger($(this), 'jqmShow', trigger))
				err("jqmAddTrigger must be called on initialized modals")
		});
	};
	
	
	/**
	 * Matching modals will have their jqmHide() method fired by attaching an
	 *   onClick event to elements matching `trigger`.
	 * 
	 * @name jqmAddClose
	 * @param trigger a selector String, jQuery collection of elements, or a DOM element.
	 */
	$.fn.jqmAddClose=function(trigger){
		return this.each(function(){
			if(!addTrigger($(this), 'jqmHide', trigger))
				err("jqmAddClose must be called on initialized modals")
		});
	};
	
	
	/**
	 * Open matching modals (if not shown)
	 */
	$.fn.jqmShow=function(trigger){
		return this.each(function(){ !this._jqmShown&&show($(this), trigger); });
	};
	
	/**
	 * Close matching modals
	 */
	$.fn.jqmHide=function(trigger){
		return this.each(function(){ this._jqmShown&&hide($(this), trigger); });
	};
	
	
	// utility functions
	
	var
		err = function(msg){
			if(window.console && window.console.error) window.console.error(msg);
		
		
	}, show = function(e, t){
		
		/**
		 * e = modal element (as jQuery object)
		 * t = triggering element
		 * 
		 * o = options
		 * z = z-index of modal
		 * v = overlay element (as jQuery object)
		 * h = hash (for jqModal <= r15 compatibility)
		 */
		
		var o = e.data('jqm'),
			t = t || window.event,
			z = (parseInt(e.css('z-index'))),
			z = (z > 0) ? z : 3000,
			v = $('<div></div>').addClass(o.overlayClass).css({height:'100%',width:'100%',position:'fixed',left:0,top:0,'z-index':z-1,opacity:o.overlay/100}),
		
			// maintain legacy "hash" construct
			h = {w: e, c: o, o: v, t: t};
			
		e.css('z-index',z);

		if(o.ajax){
			var target = o.target || e,
				url = o.ajax;
			
			target = (typeof target == 'string') ? $(target,e) : $(target);
			if(url.substr(0,1) == '@') url = $(t).attr(url.substring(1));
			
			 // Load the Ajax Content (and once loaded);
			   // Fire the onLoad callback (if exists),
			   // Attach closing events to elements inside the modal that match the closingClass,
			   // and Execute the jqModal default Open Callback
			target.html(o.ajaxText).load(url,function(){
				o.onLoad && o.onLoad.call(this,h);
				open(h);
			});	
		}
		else { open(h); }
		
	}, hide = function(e, t){
		/**
		 * e = modal element (as jQuery object)
		 * t = triggering element
		 * 
		 * o = options
		 * h = hash (for jqModal <= r15 compatibility)
		 */
		
		var o = e.data('jqm'),
			t = t || window.event,
		
		// maintain legacy "hash" construct
		h = {w: e, c: o, o: e.data('jqmv'), t: t};
		
		close(h);
		
	}, onShow = function(hash){
		// onShow callback. Responsible for showing a modal and overlay.
		//  return false to stop opening modal. 
		
		// hash object;
	    //  w: (jQuery object) The modal element
	    //  c: (object) The modal's options object 
	    //  o: (jQuery object) The overlay element
	    //  t: (DOM object) The triggering element
		
		// display the overlay (prepend to body) if not disabled
		
		// prevent double click
		if( hash.w[0]._jqmShown )
			return false;
			
		if(hash.c.overlay > 0)
			hash.o.prependTo('body');
			
		// make modal visible
		hash.w.show();
		
		// call focusFunc (attempts to focus on first input in modal)
		$.jqm.focusFunc(hash.w);
		
		return true;
		
		
	}, onHide = function(hash){
		// onHide callback. Responsible for hiding a modal and overlay.
		//  return false to stop closing modal. 
		
		// hash object;
	    //  w: (jQuery object) The modal element
	    //  c: (object) The modal's options object 
	    //  o: (jQuery object) The overlay element
	    //  t: (DOM object) The triggering element
		
		// hide modal and if overlay, remove overlay.
		hash.w.hide() && hash.o && hash.o.remove();
		
		return true;
		
		
	},  addTrigger = function(e, key, trigger){
		// addTrigger: Adds a jqmShow or jqmHide (key) for a modal (e) 
		//  all elements that match trigger string (trigger)\
		
		// return false if e is not an initialized modal element
		if(!e.data('jqm')) return false;
		
		return $(trigger).each(function(){
			// register modal to trigger elements
			this[key] = this[key] || [];
			this[key].push(e);
			
		}).click(function(){
			
			var trigger = this;
			
			// foreadh modal registered to this trigger, call jqmShow || 
			//   jqmHide (key) on modal passing trigger element (e)
			$.each(this[key], function(i, e){ e[key](trigger); });
			
			// stop trigger click event from bubbling
			return false;
		});
		
		
	},  open = function(h){
		// open: executes the onOpen callback + performs common tasks if successful

		// transform legacy hash into new var shortcuts 
		 var e = h.w,
		 	v = h.o,
		 	o = h.c;	

		// execute onShow callback
		if(o.onShow(h) !== false){
			// mark modal as shown
			e[0]._jqmShown = true;
			
			// if modal dialog 
			//
			// Bind the Keep Focus Function [F] if no other Modals are open (!A[0]) +
			// Add this modal to the opened modals stack (A) for nested modal support
			// 
			// else, close dialog when overlay is clicked
			if(o.modal){ !A[0]&&F('bind'); A.push(e); }
            else e.jqmAddClose(v);
			
			//  Attach closing events to elements inside the modal that match the closingClass
			o.closeClass&&e.jqmAddClose($('.' + o.closeClass,e));
			
			// IF toTop is true and overlay exists;
			//  Add placeholder element <span id="jqmP#ID_of_modal"/> before modal to
			//  remember it's position in the DOM and move it to a child of the body tag (after overlay)
			o.toTop&&v&&e.before('<span id="jqmP'+o.ID+'"></span>').insertAfter(v);
			
			// remember overlay (for closing function)
			e.data('jqmv',v);
		}
		
		
	},  close = function(h){
		// close: executes the onHide callback + performs common tasks if successful

		// transform legacy hash into new var shortcuts 
		 var e = h.w,
		 	v = h.o,
		 	o = h.c;

		// execute onShow callback
		if(o.onHide(h) !== false){
			// mark modal as !shown
			e[0]._jqmShown = false;
			
			 // If modal, remove from modal stack.
			 // If no modals in modal stack, unbind the Keep Focus Function
			 if(o.modal){A.pop();!A[0]&&F('unbind');}
			 
			 // IF toTop was passed and an overlay exists;
			 //  Move modal back to its "remembered" position.
			 o.toTop&&v&&$('#jqmP'+o.ID).after(e).remove();
		}
		
		
	},  F = function(t){
		// F: The Keep Focus Function (for modal: true dialos)
		// Binds or Unbinds (t) the Focus Examination Function (X) to keypresses and clicks
		
		$(document)[t]("keypress keydown mousedown",X);
		
		
	}, X = function(e){
		// X: The Focus Examination Function (for modal: true dialogs)

		var modal = $(e.target).data('jqm') || $(e.target).parents('.jqm-init:first').data('jqm'),
			activeModal = A[A.length-1].data('jqm');
		
		// allow bubbling if event target is within active modal dialog
		if(modal && modal.ID == activeModal.ID) return true; 

		// else, trigger focusFunc (focus on first input element and halt bubbling)
		return $.jqm.focusFunc(activeModal);
	}, 
	
	I = 0,   // modal ID increment (for nested modals) 
	A = [];  // array of active modals (used to lock interactivity to appropriate modal)
	
	
	// $.jqm, overridable defaults
	$.jqm = {
		/**
		 *  default options
		 *    
		 * (Integer)   overlay      - [0-100] Translucency percentage (opacity) of the body covering overlay. Set to 0 for NO overlay, and up to 100 for a 100% opaque overlay.  
		 * (String)    overlayClass - Applied to the body covering overlay. Useful for controlling overlay look (tint, background-image, &c) with CSS.
		 * (String)    closeClass   - Children of the modal element matching `closeClass` will fire the onHide event (to close the modal).
		 * (Mixed)     trigger      - Matching elements will fire the onShow event (to display the modal). Trigger can be a selector String, a jQuery collection of elements, a DOM element, or a False boolean.
		 * (String)    ajax         - URL to load content from via an AJAX request. False to disable ajax. If ajax begins with a "@", the URL is extracted from the attribute of the triggering element (e.g. use '@data-url' for; <a href="#" class="jqModal" data-url="modal.html">...)	                
		 * (Mixed)     target       - Children of the modal element to load the ajax response into. If false, modal content will be overwritten by ajax response. Useful for retaining modal design. 
		 *                            Target may be a selector string, jQuery collection of elements, or a DOM element -- and MUST exist as a child of the modal element.
		 * (String)    ajaxText     - Text shown while waiting for ajax return. Replaces HTML content of `target` element.
		 * (Boolean)   modal        - If true, user interactivity will be locked to the modal window until closed.
		 * (Boolean)   toTop        - If true, modal will be posistioned as a first child of the BODY element when opened, and its DOM posistion restored when closed. Useful for overcoming z-Index container issues.
		 * (Function)  onShow       - User defined callback function fired when modal opened.
		 * (Function)  onHide       - User defined callback function fired when modal closed.
		 * (Function)  onLoad       - User defined callback function fired when ajax content loads.
		 */
		params: {
			overlay: 50,
			overlayClass: 'jqmOverlay',
			closeClass: 'jqmClose',
			trigger: '.jqModal',
			ajax: false,
			target: false,
			ajaxText: '',
			modal: false,
			toTop: false,
			onShow: onShow,
			onHide: onHide,
			onLoad: false
		},
		
		// focusFunc is fired when a modal is shown, or when interaction occurs outside
		// a modal enabled dialog. Passed the modal element. 
		focusFunc: function(e) { $(':input:visible:first',e).focus(); return false; }
	};
	
})( jQuery );
/* End */
;
; /* Start:"a:4:{s:4:"full";s:67:"/bitrix/templates/aspro_next/vendor/js/bootstrap.js?154384449027908";s:6:"source";s:51:"/bitrix/templates/aspro_next/vendor/js/bootstrap.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 * Bootstrap v3.0.0
 *
 * Copyright 2013 Twitter, Inc
 * Licensed under the Apache License v2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Designed and built with all the love in the world @twitter by @mdo and @fat.
 */

+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function f(){e.trigger("closed.bs.alert").remove()}var c=a(this),d=c.attr("data-target");d||(d=c.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,""));var e=a(d);b&&b.preventDefault(),e.length||(e=c.hasClass("alert")?c:c.parent()),e.trigger(b=a.Event("close.bs.alert"));if(b.isDefaultPrevented())return;e.removeClass("in"),a.support.transition&&e.hasClass("fade")?e.one(a.support.transition.end,f).emulateTransitionEnd(150):f()};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),typeof b=="string"&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d)};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.is("input")?"val":"html",e=c.data();a+="Text",e.resetText||c.data("resetText",c[d]()),c[d](e[a]||this.options[a]),setTimeout(function(){a=="loadingText"?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons"]');if(a.length){var b=this.$element.find("input").prop("checked",!this.$element.hasClass("active")).trigger("change");b.prop("type")==="radio"&&a.find(".active").removeClass("active")}this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f=typeof c=="object"&&c;e||d.data("bs.button",e=new b(this,f)),c=="toggle"?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.pause=="hover"&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();if(b>this.$items.length-1||b<0)return;return this.sliding?this.$element.one("slid",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){if(this.sliding)return;return this.slide("next")},b.prototype.prev=function(){if(this.sliding)return;return this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g=b=="next"?"left":"right",h=b=="next"?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}this.sliding=!0,f&&this.pause();var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});if(e.hasClass("active"))return;this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")}));if(a.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(j);if(j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid")},0)}).emulateTransitionEnd(600)}else{this.$element.trigger(j);if(j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return f&&this.cycle(),this};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),typeof c=="object"&&c),g=typeof c=="string"?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),typeof c=="number"?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c=a(this),d,e=a(c.attr("data-target")||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),c.data()),g=c.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=c.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(window.jQuery),+function(a){function e(){a(b).remove(),a(c).each(function(b){var c=f(a(this));if(!c.hasClass("open"))return;c.trigger(b=a.Event("hide.bs.dropdown"));if(b.isDefaultPrevented())return;c.removeClass("open").trigger("hidden.bs.dropdown")})}function f(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}"use strict";var b=".dropdown-backdrop",c="[data-toggle=dropdown]",d=function(b){var c=a(b).on("click.bs.dropdown",this.toggle)};d.prototype.toggle=function(b){var c=a(this);if(c.is(".disabled, :disabled"))return;var d=f(c),g=d.hasClass("open");e();if(!g){"ontouchstart"in document.documentElement&&!d.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",e),d.trigger(b=a.Event("show.bs.dropdown"));if(b.isDefaultPrevented())return;d.toggleClass("open").trigger("shown.bs.dropdown"),c.focus()}return!1},d.prototype.keydown=function(b){if(!/(38|40|27)/.test(b.keyCode))return;var d=a(this);b.preventDefault(),b.stopPropagation();if(d.is(".disabled, :disabled"))return;var e=f(d),g=e.hasClass("open");if(!g||g&&b.keyCode==27)return b.which==27&&e.find(c).focus(),d.click();var h=a("[role=menu] li:not(.divider):visible a",e);if(!h.length)return;var i=h.index(h.filter(":focus"));b.keyCode==38&&i>0&&i--,b.keyCode==40&&i<h.length-1&&i++,~i||(i=0),h.eq(i).focus()};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),e=c.data("dropdown");e||c.data("dropdown",e=new d(this)),typeof b=="string"&&e[b].call(c)})},a.fn.dropdown.Constructor=d,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",c,d.prototype.toggle).on("keydown.bs.dropdown.data-api",c+", [role=menu]",d.prototype.keydown)}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d);if(this.isShown||d.isDefaultPrevented())return;this.isShown=!0,this.escape(),this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show(),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)})},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b);if(!this.isShown||b.isDefaultPrevented())return;this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal()},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]!==a.target&&!this.$element.has(a.target).length&&this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){a.which==27&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",a.proxy(function(a){if(a.target!==a.currentTarget)return;this.options.backdrop=="static"?this.$element[0].focus.call(this.$element[0]):this.hide.call(this)},this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in");if(!b)return;e?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),typeof c=="object"&&c);f||e.data("bs.modal",f=new b(this,g)),typeof c=="string"?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(window.jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);var e=this.options.trigger.split(" ");for(var f=e.length;f--;){var g=e[f];if(g=="click")this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if(g!="manual"){var h=g=="hover"?"mouseenter":"focus",i=g=="hover"?"mouseleave":"blur";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&typeof b.delay=="number"&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);clearTimeout(c.timeout),c.hoverState="in";if(!c.options.delay||!c.options.delay.show)return c.show();c.timeout=setTimeout(function(){c.hoverState=="in"&&c.show()},c.options.delay.show)},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);clearTimeout(c.timeout),c.hoverState="out";if(!c.options.delay||!c.options.delay.hide)return c.hide();c.timeout=setTimeout(function(){c.hoverState=="out"&&c.hide()},c.options.delay.hide)},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);if(b.isDefaultPrevented())return;var c=this.tip();this.setContent(),this.options.animation&&c.addClass("fade");var d=typeof this.options.placement=="function"?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,e=/\s?auto?\s?/i,f=e.test(d);f&&(d=d.replace(e,"")||"top"),c.detach().css({top:0,left:0,display:"block"}).addClass(d),this.options.container?c.appendTo(this.options.container):c.insertAfter(this.$element);var g=this.getPosition(),h=c[0].offsetWidth,i=c[0].offsetHeight;if(f){var j=this.$element.parent(),k=d,l=document.documentElement.scrollTop||document.body.scrollTop,m=this.options.container=="body"?window.innerWidth:j.outerWidth(),n=this.options.container=="body"?window.innerHeight:j.outerHeight(),o=this.options.container=="body"?0:j.offset().left;d=d=="bottom"&&g.top+g.height+i-l>n?"top":d=="top"&&g.top-l-i<0?"bottom":d=="right"&&g.right+h>m?"left":d=="left"&&g.left-h<o?"right":d,c.removeClass(k).addClass(d)}var p=this.getCalculatedOffset(d,g,h,i);this.applyPlacement(p,d),this.$element.trigger("shown.bs."+this.type)}},b.prototype.applyPlacement=function(a,b){var c,d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),a.top=a.top+g,a.left=a.left+h,d.offset(a).addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;b=="top"&&j!=f&&(c=!0,a.top=a.top+f-j);if(/bottom|top/.test(b)){var k=0;a.left<0&&(k=a.left*-2,a.left=0,d.offset(a),i=d[0].offsetWidth,j=d[0].offsetHeight),this.replaceArrow(k-e+i,i,"left")}else this.replaceArrow(j-f,j,"top");c&&d.offset(a)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function e(){b.hoverState!="in"&&c.detach()}var b=this,c=this.tip(),d=a.Event("hide.bs."+this.type);this.$element.trigger(d);if(d.isDefaultPrevented())return;return c.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?c.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),this.$element.trigger("hidden.bs."+this.type),this},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||typeof a.attr("data-original-title")!="string")&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},typeof b.getBoundingClientRect=="function"?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return a=="bottom"?{top:b.top+b.height,left:b.left+b.width/2-c/2}:a=="top"?{top:b.top-d,left:b.left+b.width/2-c/2}:a=="left"?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||(typeof c.title=="function"?c.title.call(b[0]):c.title),a},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f=typeof c=="object"&&c;e||d.data("bs.tooltip",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(window.jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||(typeof b.content=="function"?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f=typeof c=="object"&&c;e||d.data("bs.popover",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(window.jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,""));if(b.parent("li").hasClass("active"))return;var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});b.trigger(f);if(f.isDefaultPrevented())return;var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})},b.prototype.activate=function(b,c,d){function g(){e.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),f?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var e=c.find("> .active"),f=d&&a.support.transition&&e.hasClass("fade");f?e.one(a.support.transition.end,g).emulateTransitionEnd(150):g(),e.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),typeof c=="string"&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;typeof f!="object"&&(h=g=f),typeof g=="function"&&(g=f.top()),typeof h=="function"&&(h=f.bottom());var i=this.unpin!=null&&d+this.unpin<=e.top?!1:h!=null&&e.top+this.$element.height()>=c-h?"bottom":g!=null&&d<=g?"top":!1;if(this.affixed===i)return;this.unpin&&this.$element.css("top",""),this.affixed=i,this.unpin=i=="bottom"?e.top-d:null,this.$element.removeClass(b.RESET).addClass("affix"+(i?"-"+i:"")),i=="bottom"&&this.$element.offset({top:document.body.offsetHeight-h-this.$element.height()})};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f=typeof c=="object"&&c;e||d.data("bs.affix",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(this.transitioning||this.$element.hasClass("in"))return;var b=a.Event("show.bs.collapse");this.$element.trigger(b);if(b.isDefaultPrevented())return;var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])},b.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass("in"))return;var b=a.Event("hide.bs.collapse");this.$element.trigger(b);if(b.isDefaultPrevented())return;var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};if(!a.support.transition)return d.call(this);this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350)},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),typeof c=="object"&&c);e||d.data("bs.collapse",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c=a(this),d,e=c.attr("data-target")||b.preventDefault()||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":c.data(),i=c.attr("data-parent"),j=i&&a(i);if(!g||!g.transitioning)j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(c).addClass("collapsed"),c[f.hasClass("in")?"addClass":"removeClass"]("collapsed");f.collapse(h)})}(window.jQuery),+function(a){function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(c).is("body")?a(window):a(c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}"use strict",b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);var c=this,d=this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#\w/.test(e)&&a(e);return f&&f.length&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})},b.prototype.process=function(){var a=this.$scrollElement.scrollTop()+this.options.offset,b=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,c=b-this.$scrollElement.height(),d=this.offsets,e=this.targets,f=this.activeTarget,g;if(a>=c)return f!=(g=e.last()[0])&&this.activate(g);for(g=d.length;g--;)f!=e[g]&&a>=d[g]&&(!d[g+1]||a<=d[g+1])&&this.activate(e[g])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parents(".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f=typeof c=="object"&&c;e||d.data("bs.scrollspy",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(window.jQuery),+function(a){function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(a.style[c]!==undefined)return{end:b[c]}}"use strict",a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(window.jQuery)
/* End */
;
; /* Start:"a:4:{s:4:"full";s:70:"/bitrix/templates/aspro_next/vendor/js/jquery.appear.js?15438444903188";s:6:"source";s:55:"/bitrix/templates/aspro_next/vendor/js/jquery.appear.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function($) {
	$.fn.appear = function(fn, options) {

		var settings = $.extend({

			//arbitrary data to pass to fn
			data: undefined,

			//call fn only on the first appear?
			one: true,

			// X & Y accuracy
			accX: 0,
			accY: 0

		}, options);

		return this.each(function() {

			var t = $(this);

			//whether the element is currently visible
			t.appeared = false;

			if (!fn) {

				//trigger the custom event
				t.trigger('appear', settings.data);
				return;
			}

			var w = $(window);

			//fires the appear event when appropriate
			var check = function() {

				//is the element hidden?
				if (!t.is(':visible')) {

					//it became hidden
					t.appeared = false;
					return;
				}

				//is the element inside the visible window?
				var a = w.scrollLeft();
				var b = w.scrollTop();
				var o = t.offset();
				var x = o.left;
				var y = o.top;

				var ax = settings.accX;
				var ay = settings.accY;
				var th = t.height();
				var wh = w.height();
				var tw = t.width();
				var ww = w.width();

				if (y + th + ay >= b &&
					y <= b + wh + ay &&
					x + tw + ax >= a &&
					x <= a + ww + ax) {

					//trigger the custom event
					if (!t.appeared) t.trigger('appear', settings.data);

				} else {

					//it scrolled out of view
					t.appeared = false;
				}
			};

			//create a modified fn with some additional logic
			var modifiedFn = function() {

				//mark the element as visible
				t.appeared = true;

				//is this supposed to happen only once?
				if (settings.one) {

					//remove the check
					w.unbind('scroll', check);
					var i = $.inArray(check, $.fn.appear.checks);
					if (i >= 0) $.fn.appear.checks.splice(i, 1);
				}

				//trigger the original fn
				fn.apply(this, arguments);
			};

			//bind the modified fn to the element
			if (settings.one) t.one('appear', settings.data, modifiedFn);
			else t.bind('appear', settings.data, modifiedFn);

			//check whenever the window scrolls
			w.scroll(check);

			//check whenever the dom changes
			$.fn.appear.checks.push(check);

			//check now
			(check)();
		});
	};

	//keep a queue of appearance checks
	$.extend($.fn.appear, {

		checks: [],
		timeout: null,

		//process the queue
		checkAll: function() {
			var length = $.fn.appear.checks.length;
			if (length > 0) while (length--) ($.fn.appear.checks[length])();
		},

		//check the queue asynchronously
		run: function() {
			if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
			$.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
		}
	});

	//run checks when these methods are called
	$.each(['append', 'prepend', 'after', 'before', 'attr',
		'removeAttr', 'addClass', 'removeClass', 'toggleClass',
		'remove', 'css', 'show', 'hide'], function(i, n) {
		var old = $.fn[n];
		if (old) {
			$.fn[n] = function() {
				var r = old.apply(this, arguments);
				$.fn.appear.run();
				return r;
			}
		}
	});

})(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:56:"/bitrix/templates/aspro_next/js/browser.js?1543844490996";s:6:"source";s:42:"/bitrix/templates/aspro_next/js/browser.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var matched, browser;

jQuery.uaMatch = function( ua ) {
    ua = ua.toLowerCase();

    var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
        /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
        /(msie)[\s?]([\w.]+)/.exec( ua ) ||       
        /(trident)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
        ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
        [];

    return {
        browser: match[ 1 ] || "",
        version: match[ 2 ] || "0"
    };
};

matched = jQuery.uaMatch( navigator.userAgent );
//IE 11+ fix (Trident) 
matched.browser = matched.browser == 'trident' ? 'msie' : matched.browser;
browser = {};

if ( matched.browser ) {
    browser[ matched.browser ] = true;
    browser.version = matched.version;
}

// Chrome is Webkit, but Webkit is also Safari.
if ( browser.chrome ) {
    browser.webkit = true;
} else if ( browser.webkit ) {
    browser.safari = true;
}

jQuery.browser = browser;
/* End */
;
; /* Start:"a:4:{s:4:"full";s:66:"/bitrix/templates/aspro_next/js/jquery.fancybox.js?154384449045889";s:6:"source";s:50:"/bitrix/templates/aspro_next/js/jquery.fancybox.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.0 (Mon, 20 Aug 2012)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */

(function (window, document, $, undefined) {
	"use strict";

	var W = $(window),
		D = $(document),
		F = $.fancybox = function () {
			F.open.apply( this, arguments );
		},
		didUpdate = null,
		isTouch	  = document.createTouch !== undefined,

		isQuery	= function(obj) {
			return obj && obj.hasOwnProperty && obj instanceof $;
		},
		isString = function(str) {
			return str && $.type(str) === "string";
		},
		isPercentage = function(str) {
			return isString(str) && str.indexOf('%') > 0;
		},
		isScrollable = function(el) {
			return (el && !(el.style.overflow && el.style.overflow === 'hidden') && ((el.clientWidth && el.scrollWidth > el.clientWidth) || (el.clientHeight && el.scrollHeight > el.clientHeight)));
		},
		getScalar = function(value, dim) {
			var value_ = parseInt(value, 10);

			if (dim && isPercentage(value)) {
				value_ = F.getViewport()[ dim ] / 100 * value_;
			}

			return Math.ceil(value_);
		},
		getValue = function(value, dim) {
			return getScalar(value, dim) + 'px';
		};

	$.extend(F, {
		// The current version of fancyBox
		version: '2.1.0',

		defaults: {
			padding : 15,
			margin  : 20,

			width     : 800,
			height    : 600,
			minWidth  : 100,
			minHeight : 100,
			maxWidth  : 9999,
			maxHeight : 9999,

			autoSize   : true,
			autoHeight : false,
			autoWidth  : false,

			autoResize  : !isTouch,
			autoCenter  : !isTouch,
			fitToView   : true,
			aspectRatio : false,
			topRatio    : 0.5,
			leftRatio   : 0.5,

			scrolling : 'auto', // 'auto', 'yes' or 'no'
			wrapCSS   : '',

			arrows     : true,
			closeBtn   : true,
			closeClick : false,
			nextClick  : false,
			mouseWheel : true,
			autoPlay   : false,
			playSpeed  : 3000,
			preload    : 3,
			modal      : false,
			loop       : true,

			ajax  : {
				dataType : 'html',
				headers  : { 'X-fancyBox': true }
			},
			iframe : {
				scrolling : 'auto',
				preload   : true
			},
			swf : {
				wmode: 'transparent',
				allowfullscreen   : 'true',
				allowscriptaccess : 'always'
			},

			keys  : {
				next : {
					13 : 'left', // enter
					34 : 'up',   // page down
					39 : 'left', // right arrow
					40 : 'up'    // down arrow
				},
				prev : {
					8  : 'right',  // backspace
					33 : 'down',   // page up
					37 : 'right',  // left arrow
					38 : 'down'    // up arrow
				},
				close  : [27], // escape key
				play   : [32], // space - start/stop slideshow
				toggle : [70]  // letter "f" - toggle fullscreen
			},

			direction : {
				next : 'left',
				prev : 'right'
			},

			scrollOutside  : true,

			// Override some properties
			index   : 0,
			type    : null,
			href    : null,
			content : null,
			title   : null,

			// HTML templates
			tpl: {
				wrap     : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
				image    : '<img class="fancybox-image" src="{href}" alt="" />',
				iframe   : '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0"' + (browser.msie ? ' allowtransparency="true"' : '') + '></iframe>',
				error    : '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
				closeBtn : '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
				next     : '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
				prev     : '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
			},

			// Properties for each animation type
			// Opening fancyBox
			openEffect  : 'fade', // 'elastic', 'fade' or 'none'
			openSpeed   : 250,
			openEasing  : 'swing',
			openOpacity : true,
			openMethod  : 'zoomIn',

			// Closing fancyBox
			closeEffect  : 'fade', // 'elastic', 'fade' or 'none'
			closeSpeed   : 250,
			closeEasing  : 'swing',
			closeOpacity : true,
			closeMethod  : 'zoomOut',

			// Changing next gallery item
			nextEffect : 'elastic', // 'elastic', 'fade' or 'none'
			nextSpeed  : 250,
			nextEasing : 'swing',
			nextMethod : 'changeIn',

			// Changing previous gallery item
			prevEffect : 'elastic', // 'elastic', 'fade' or 'none'
			prevSpeed  : 250,
			prevEasing : 'swing',
			prevMethod : 'changeOut',

			// Enabled helpers
			helpers : {
				overlay : {
					closeClick : true,
					speedOut   : 200,
					showEarly  : true,
					css        : {}
				},
				title : {
					type : 'float' // 'float', 'inside', 'outside' or 'over'
				}
			},

			// Callbacks
			onCancel     : $.noop, // If canceling
			beforeLoad   : $.noop, // Before loading
			afterLoad    : $.noop, // After loading
			beforeShow   : $.noop, // Before changing in current item
			afterShow    : $.noop, // After opening
			beforeChange : $.noop, // Before changing gallery item
			beforeClose  : $.noop, // Before closing
			afterClose   : $.noop  // After closing
		},

		//Current state
		group    : {}, // Selected group
		opts     : {}, // Group options
		previous : null,  // Previous element
		coming   : null,  // Element being loaded
		current  : null,  // Currently loaded element
		isActive : false, // Is activated
		isOpen   : false, // Is currently open
		isOpened : false, // Have been fully opened at least once

		wrap  : null,
		skin  : null,
		outer : null,
		inner : null,

		player : {
			timer    : null,
			isActive : false
		},

		// Loaders
		ajaxLoad   : null,
		imgPreload : null,

		// Some collections
		transitions : {},
		helpers     : {},

		/*
		 *	Static methods
		 */

		open: function (group, opts) {
			if (!group) {
				return;
			}

			if (!$.isPlainObject(opts)) {
				opts = {};
			}

			// Close if already active
			if (false === F.close(true)) {
				return;
			}

			// Normalize group
			if (!$.isArray(group)) {
				group = isQuery(group) ? $(group).get() : [group];
			}

			// Recheck if the type of each element is `object` and set content type (image, ajax, etc)
			$.each(group, function(i, element) {
				var obj = {},
					href,
					title,
					content,
					type,
					rez,
					hrefParts,
					selector;

				if ($.type(element) === "object") {
					// Check if is DOM element
					if (element.nodeType) {
						element = $(element);
					}

					if (isQuery(element)) {
						obj = {
							href    : element.attr('href'),
							title   : element.attr('title'),
							isDom   : true,
							element : element
						};

						if ($.metadata) {
							$.extend(true, obj, element.metadata());
						}

					} else {
						obj = element;
					}
				}

				href  = opts.href  || obj.href || (isString(element) ? element : null);
				title = opts.title !== undefined ? opts.title : obj.title || '';

				content = opts.content || obj.content;
				type    = content ? 'html' : (opts.type  || obj.type);

				if (!type && obj.isDom) {
					type = element.data('fancybox-type');

					if (!type) {
						rez  = element.prop('class').match(/fancybox\.(\w+)/);
						type = rez ? rez[1] : null;
					}
				}

				if (isString(href)) {
					// Try to guess the content type
					if (!type) {
						if (F.isImage(href)) {
							type = 'image';

						} else if (F.isSWF(href)) {
							type = 'swf';

						} else if (href.charAt(0) === '#') {
							type = 'inline';

						} else if (isString(element)) {
							type    = 'html';
							content = element;
						}
					}

					// Split url into two pieces with source url and content selector, e.g,
					// "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
					if (type === 'ajax') {
						hrefParts = href.split(/\s+/, 2);
						href      = hrefParts.shift();
						selector  = hrefParts.shift();
					}
				}

				if (!content) {
					if (type === 'inline') {
						if (href) {
							content = $( isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href ); //strip for ie7

						} else if (obj.isDom) {
							content = element;
						}

					} else if (type === 'html') {
						content = href;

					} else if (!type && !href && obj.isDom) {
						type    = 'inline';
						content = element;
					}
				}

				$.extend(obj, {
					href     : href,
					type     : type,
					content  : content,
					title    : title,
					selector : selector
				});

				group[ i ] = obj;
			});

			// Extend the defaults
			F.opts = $.extend(true, {}, F.defaults, opts);

			// All options are merged recursive except keys
			if (opts.keys !== undefined) {
				F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
			}

			F.group = group;

			return F._start(F.opts.index);
		},

		// Cancel image loading or abort ajax request
		cancel: function () {
			var coming = F.coming;

			if (!coming || false === F.trigger('onCancel')) {
				return;
			}

			F.hideLoading();

			if (F.ajaxLoad) {
				F.ajaxLoad.abort();
			}

			F.ajaxLoad = null;

			if (F.imgPreload) {
				F.imgPreload.onload = F.imgPreload.onerror = null;
			}

			// If the first item has been canceled, then clear everything
			if (coming.wrap) {
				coming.wrap.stop(true).trigger('onReset').remove();
			}

			if (!F.current) {
				F.trigger('afterClose');
			}

			F.coming = null;
		},

		// Start closing animation if is open; remove immediately if opening/closing
		close: function (immediately) {
			F.cancel();

			if (false === F.trigger('beforeClose')) {
				return;
			}

			F.unbindEvents();

			if (!F.isOpen || immediately === true) {
				$('.fancybox-wrap').stop(true).trigger('onReset').remove();

				F._afterZoomOut();

			} else {
				F.isOpen = F.isOpened = false;
				F.isClosing = true;

				$('.fancybox-item, .fancybox-nav').remove();

				F.wrap.stop(true, true).removeClass('fancybox-opened');

				if (F.wrap.css('position') === 'fixed') {
					F.wrap.css(F._getPosition( true ));
				}

				F.transitions[ F.current.closeMethod ]();
			}
		},

		// Manage slideshow:
		//   $.fancybox.play(); - toggle slideshow
		//   $.fancybox.play( true ); - start
		//   $.fancybox.play( false ); - stop
		play: function ( action ) {
			var clear = function () {
					clearTimeout(F.player.timer);
				},
				set = function () {
					clear();

					if (F.current && F.player.isActive) {
						F.player.timer = setTimeout(F.next, F.current.playSpeed);
					}
				},
				stop = function () {
					clear();

					$('body').unbind('.player');

					F.player.isActive = false;

					F.trigger('onPlayEnd');
				},
				start = function () {
					if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
						F.player.isActive = true;

						$('body').bind({
							'afterShow.player onUpdate.player'   : set,
							'onCancel.player beforeClose.player' : stop,
							'beforeLoad.player' : clear
						});

						set();

						F.trigger('onPlayStart');
					}
				};

			if (action === true || (!F.player.isActive && action !== false)) {
				start();
			} else {
				stop();
			}
		},

		// Navigate to next gallery item
		next: function ( direction ) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.next;
				}

				F.jumpto(current.index + 1, direction, 'next');
			}
		},

		// Navigate to previous gallery item
		prev: function ( direction ) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.prev;
				}

				F.jumpto(current.index - 1, direction, 'prev');
			}
		},

		// Navigate to gallery item by index
		jumpto: function ( index, direction, router ) {
			var current = F.current;

			if (!current) {
				return;
			}

			index = getScalar(index);

			F.direction = direction || current.direction[ (index >= current.index ? 'next' : 'prev') ];
			F.router    = router || 'jumpto';

			if (current.loop) {
				if (index < 0) {
					index = current.group.length + (index % current.group.length);
				}

				index = index % current.group.length;
			}

			if (current.group[ index ] !== undefined) {
				F.cancel();

				F._start(index);
			}
		},

		// Center inside viewport and toggle position type to fixed or absolute if needed
		reposition: function (e, onlyAbsolute) {
			var pos;

			if (F.isOpen) {
				pos = F._getPosition(onlyAbsolute);

				if (e && e.type === 'scroll') {
					delete pos.position;

					F.wrap.stop(true, true).animate(pos, 200);

				} else {
					F.wrap.css(pos);
				}
			}
		},

		update: function (e) {
			var type = (e && e.type),
				anyway = !type || type === 'orientationchange';

			if (anyway) {
				clearTimeout(didUpdate);

				didUpdate = null;
			}

			if (!F.isOpen || didUpdate) {
				return;
			}

			// Help browser to restore document dimensions
			if (anyway || isTouch) {
				F.wrap.removeAttr('style').addClass('fancybox-tmp');

				F.trigger('onUpdate');
			}

			didUpdate = setTimeout(function() {
				var current = F.current;

				if (!current) {
					return;
				}

				F.wrap.removeClass('fancybox-tmp');

				if (type !== 'scroll') {
					F._setDimension();
				}

				if (!(type === 'scroll' && current.canShrink)) {
					F.reposition(e);
				}

				F.trigger('onUpdate');

				didUpdate = null;

			}, (isTouch ? 500 : (anyway ? 20 : 300)));
		},

		// Shrink content to fit inside viewport or restore if resized
		toggle: function ( action ) {
			if (F.isOpen) {
				F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;

				F.update();
			}
		},

		hideLoading: function () {
			D.unbind('keypress.fb');

			$('#fancybox-loading').remove();
		},

		showLoading: function () {
			var el, viewport;

			F.hideLoading();

			// If user will press the escape-button, the request will be canceled
			D.bind('keypress.fb', function(e) {
				if ((e.which || e.keyCode) === 27) {
					e.preventDefault();
					F.cancel();
				}
			});

			el = $('<div id="fancybox-loading"><div></div></div>').click(F.cancel).appendTo('body');

			if (!F.defaults.fixed) {
				viewport = F.getViewport();

				el.css({
					position : 'absolute',
					top  : (viewport.h * 0.5) + viewport.y,
					left : (viewport.w * 0.5) + viewport.x
				});
			}
		},

		getViewport: function () {
			var lock = F.current ? F.current.locked : false,
				rez  = {
					x: W.scrollLeft(),
					y: W.scrollTop()
				};

			if (lock) {
				rez.w = lock[0].clientWidth;
				rez.h = lock[0].clientHeight;

			} else {
				// See http://bugs.jquery.com/ticket/6724
				rez.w = isTouch && window.innerWidth  ? window.innerWidth  : W.width();
				rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
			}

			return rez;
		},

		// Unbind the keyboard / clicking actions
		unbindEvents: function () {
			if (F.wrap && isQuery(F.wrap)) {
				F.wrap.unbind('.fb');
			}

			D.unbind('.fb');
			W.unbind('.fb');
		},

		bindEvents: function () {
			var current = F.current,
				keys;

			if (!current) {
				return;
			}

			// Changing document height on iOS devices triggers a 'resize' event,
			// that can change document height... repeating infinitely
			W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb' ) + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);

			keys = current.keys;

			if (keys) {
				D.bind('keydown.fb', function (e) {
					var code   = e.which || e.keyCode,
						target = e.target || e.srcElement;

					// Ignore key combinations and key events within form elements
					if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
						$.each(keys, function(i, val) {
							if (current.group.length > 1 && val[ code ] !== undefined) {
								F[ i ]( val[ code ] );

								e.preventDefault();
								return false;
							}

							if ($.inArray(code, val) > -1) {
								F[ i ] ();

								e.preventDefault();
								return false;
							}
						});
					}
				});
			}

			if ($.fn.mousewheel && current.mouseWheel) {
				F.wrap.bind('mousewheel.fb', function (e, delta, deltaX, deltaY) {
					var target = e.target || null,
						parent = $(target),
						canScroll = false;

					while (parent.length) {
						if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
							break;
						}

						canScroll = isScrollable( parent[0] );
						parent    = $(parent).parent();
					}

					if (delta !== 0 && !canScroll) {
						if (F.group.length > 1 && !current.canShrink) {
							if (deltaY > 0 || deltaX > 0) {
								F.prev( deltaY > 0 ? 'down' : 'left' );

							} else if (deltaY < 0 || deltaX < 0) {
								F.next( deltaY < 0 ? 'up' : 'right' );
							}

							e.preventDefault();
						}
					}
				});
			}
		},

		trigger: function (event, o) {
			var ret, obj = o || F.coming || F.current;

			if (!obj) {
				return;
			}

			if ($.isFunction( obj[event] )) {
				ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
			}

			if (ret === false) {
				return false;
			}

			if (event === 'onCancel' && !F.isOpened) {
				F.isActive = false;
			}

			if (obj.helpers) {
				$.each(obj.helpers, function (helper, opts) {
					if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
						F.helpers[helper][event](opts, obj);
					}
				});
			}

			$.event.trigger(event + '.fb');
		},

		isImage: function (str) {
			return isString(str) && str.match(/\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$/i);
		},

		isSWF: function (str) {
			return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
		},

		_start: function (index) {
			var coming = {},
				obj,
				href,
				type,
				margin,
				padding;

			index = getScalar( index );
			obj   = F.group[ index ] || null;

			if (!obj) {
				return false;
			}

			coming = $.extend(true, {}, F.opts, obj);

			// Convert margin and padding properties to array - top, right, bottom, left
			margin  = coming.margin;
			padding = coming.padding;

			if ($.type(margin) === 'number') {
				coming.margin = [margin, margin, margin, margin];
			}

			if ($.type(padding) === 'number') {
				coming.padding = [padding, padding, padding, padding];
			}

			// 'modal' propery is just a shortcut
			if (coming.modal) {
				$.extend(true, coming, {
					closeBtn   : false,
					closeClick : false,
					nextClick  : false,
					arrows     : false,
					mouseWheel : false,
					keys       : null,
					helpers: {
						overlay : {
							closeClick : false
						}
					}
				});
			}

			// 'autoSize' property is a shortcut, too
			if (coming.autoSize) {
				coming.autoWidth = coming.autoHeight = true;
			}

			if (coming.width === 'auto') {
				coming.autoWidth = true;
			}

			if (coming.height === 'auto') {
				coming.autoHeight = true;
			}

			/*
			 * Add reference to the group, so it`s possible to access from callbacks, example:
			 * afterLoad : function() {
			 *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
			 * }
			 */

			coming.group  = F.group;
			coming.index  = index;

			// Give a chance for callback or helpers to update coming item (type, title, etc)
			F.coming = coming;

			if (false === F.trigger('beforeLoad')) {
				F.coming = null;

				return;
			}

			type = coming.type;
			href = coming.href;

			if (!type) {
				F.coming = null;

				//If we can not determine content type then drop silently or display next/prev item if looping through gallery
				if (F.current && F.router && F.router !== 'jumpto') {
					F.current.index = index;

					return F[ F.router ]( F.direction );
				}

				return false;
			}

			F.isActive = true;

			if (type === 'image' || type === 'swf') {
				coming.autoHeight = coming.autoWidth = false;
				coming.scrolling  = 'visible';
			}

			if (type === 'image') {
				coming.aspectRatio = true;
			}

			if (type === 'iframe' && isTouch) {
				coming.scrolling = 'scroll';
			}

			// Build the neccessary markup
			coming.wrap = $(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo( coming.parent );

			$.extend(coming, {
				skin  : $('.fancybox-skin',  coming.wrap),
				outer : $('.fancybox-outer', coming.wrap),
				inner : $('.fancybox-inner', coming.wrap)
			});

			$.each(["Top", "Right", "Bottom", "Left"], function(i, v) {
				coming.skin.css('padding' + v, getValue(coming.padding[ i ]));
			});

			F.trigger('onReady');

			// Check before try to load; 'inline' and 'html' types need content, others - href
			if (type === 'inline' || type === 'html') {
				if (!coming.content || !coming.content.length) {
					return F._error( 'content' );
				}

			} else if (!href) {
				return F._error( 'href' );
			}

			if (type === 'image') {
				F._loadImage();

			} else if (type === 'ajax') {
				F._loadAjax();

			} else if (type === 'iframe') {
				F._loadIframe();

			} else {
				F._afterLoad();
			}
		},

		_error: function ( type ) {
			$.extend(F.coming, {
				type       : 'html',
				autoWidth  : true,
				autoHeight : true,
				minWidth   : 0,
				minHeight  : 0,
				scrolling  : 'no',
				hasError   : type,
				content    : F.coming.tpl.error
			});

			F._afterLoad();
		},

		_loadImage: function () {
			// Reset preload image so it is later possible to check "complete" property
			var img = F.imgPreload = new Image();

			img.onload = function () {
				this.onload = this.onerror = null;

				F.coming.width  = this.width;
				F.coming.height = this.height;

				F._afterLoad();
			};

			img.onerror = function () {
				this.onload = this.onerror = null;

				F._error( 'image' );
			};

			img.src = F.coming.href;

			if (img.complete === undefined || !img.complete) {
				F.showLoading();
			}
		},

		_loadAjax: function () {
			var coming = F.coming;

			F.showLoading();

			F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
				url: coming.href,
				error: function (jqXHR, textStatus) {
					if (F.coming && textStatus !== 'abort') {
						F._error( 'ajax', jqXHR );

					} else {
						F.hideLoading();
					}
				},
				success: function (data, textStatus) {
					if (textStatus === 'success') {
						coming.content = data;

						F._afterLoad();
					}
				}
			}));
		},

		_loadIframe: function() {
			var coming = F.coming,
				iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
					.attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling)
					.attr('src', coming.href);

			// This helps IE
			$(coming.wrap).bind('onReset', function () {
				try {
					$(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
				} catch (e) {}
			});

			if (coming.iframe.preload) {
				F.showLoading();

				iframe.one('load', function() {
					$(this).data('ready', 1);

					// iOS will lose scrolling if we resize
					if (!isTouch) {
						$(this).bind('load.fb', F.update);
					}

					// Without this trick:
					//   - iframe won't scroll on iOS devices
					//   - IE7 sometimes displays empty iframe
					$(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();

					F._afterLoad();
				});
			}

			coming.content = iframe.appendTo( coming.inner );

			if (!coming.iframe.preload) {
				F._afterLoad();
			}
		},

		_preloadImages: function() {
			var group   = F.group,
				current = F.current,
				len     = group.length,
				cnt     = current.preload ? Math.min(current.preload, len - 1) : 0,
				item,
				i;

			for (i = 1; i <= cnt; i += 1) {
				item = group[ (current.index + i ) % len ];

				if (item.type === 'image' && item.href) {
					new Image().src = item.href;
				}
			}
		},

		_afterLoad: function () {
			var coming   = F.coming,
				previous = F.current,
				placeholder = 'fancybox-placeholder',
				current,
				content,
				type,
				scrolling,
				href,
				embed;

			F.hideLoading();

			if (!coming || F.isActive === false) {
				return;
			}

			if (false === F.trigger('afterLoad', coming, previous)) {
				coming.wrap.stop(true).trigger('onReset').remove();

				F.coming = null;

				return;
			}

			if (previous) {
				F.trigger('beforeChange', previous);

				previous.wrap.stop(true).removeClass('fancybox-opened')
					.find('.fancybox-item, .fancybox-nav')
					.remove();

				if (previous.wrap.css('position') === 'fixed') {
					previous.wrap.css(F._getPosition( true ));
				}
			}

			F.unbindEvents();

			current   = coming;
			content   = coming.content;
			type      = coming.type;
			scrolling = coming.scrolling;

			$.extend(F, {
				wrap  : current.wrap,
				skin  : current.skin,
				outer : current.outer,
				inner : current.inner,
				current  : current,
				previous : previous
			});

			href = current.href;

			switch (type) {
				case 'inline':
				case 'ajax':
				case 'html':
					if (current.selector) {
						content = $('<div>').html(content).find(current.selector);

					} else if (isQuery(content)) {
						if (!content.data(placeholder)) {
							content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter( content ).hide() );
						}

						content = content.show().detach();

						current.wrap.bind('onReset', function () {
							if ($(this).find(content).length) {
								content.hide().replaceAll( content.data(placeholder) ).data(placeholder, false);
							}
						});
					}
				break;

				case 'image':
					content = current.tpl.image.replace('{href}', href);
				break;

				case 'swf':
					content = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
					embed   = '';

					$.each(current.swf, function(name, val) {
						content += '<param name="' + name + '" value="' + val + '"></param>';
						embed   += ' ' + name + '="' + val + '"';
					});

					content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
				break;
			}

			if (!(isQuery(content) && content.parent().is(current.inner))) {
				current.inner.append( content );
			}

			// Give a chance for helpers or callbacks to update elements
			F.trigger('beforeShow');

			// Set scrolling before calculating dimensions
			current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));

			// Set initial dimensions and start position
			F._setDimension();

			current.wrap.removeClass('fancybox-tmp');

			current.pos = $.extend({}, current.dim, F._getPosition( true ));

			F.isOpen = false;
			F.coming = null;

			F.bindEvents();

			if (!F.isOpened) {
				$('.fancybox-wrap').not( current.wrap ).stop(true).trigger('onReset').remove();

			} else if (previous.prevMethod) {
				F.transitions[ previous.prevMethod ]();
			}

			F.transitions[ F.isOpened ? current.nextMethod : current.openMethod ]();

			F._preloadImages();
		},

		_setDimension: function () {
			var viewport   = F.getViewport(),
				steps      = 0,
				canShrink  = false,
				canExpand  = false,
				wrap       = F.wrap,
				skin       = F.skin,
				inner      = F.inner,
				current    = F.current,
				width      = current.width,
				height     = current.height,
				minWidth   = current.minWidth,
				minHeight  = current.minHeight,
				maxWidth   = current.maxWidth,
				maxHeight  = current.maxHeight,
				scrolling  = current.scrolling,
				scrollOut  = current.scrollOutside ? current.scrollbarWidth : 0,
				margin     = current.margin,
				wMargin    = margin[1] + margin[3],
				hMargin    = margin[0] + margin[2],
				wPadding,
				hPadding,
				wSpace,
				hSpace,
				origWidth,
				origHeight,
				origMaxWidth,
				origMaxHeight,
				ratio,
				width_,
				height_,
				maxWidth_,
				maxHeight_,
				iframe,
				body;

			// Reset dimensions so we could re-check actual size
			wrap.add(skin).add(inner).width('auto').height('auto');

			wPadding = skin.outerWidth(true)  - skin.width();
			hPadding = skin.outerHeight(true) - skin.height();

			// Any space between content and viewport (margin, padding, border, title)
			wSpace = wMargin + wPadding;
			hSpace = hMargin + hPadding;

			origWidth  = isPercentage(width)  ? (viewport.w - wSpace) * getScalar(width)  / 100 : width;
			origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;

			if (current.type === 'iframe') {
				iframe = current.content;

				if (current.autoHeight && iframe.data('ready') === 1) {
					try {
						if (iframe[0].contentWindow.document.location) {
							inner.width( origWidth ).height(9999);

							body = iframe.contents().find('body');

							if (scrollOut) {
								body.css('overflow-x', 'hidden');
							}

							origHeight = body.height();
						}

					} catch (e) {}
				}

			} else if (current.autoWidth || current.autoHeight) {
				inner.addClass( 'fancybox-tmp' );

				// Set width or height in case we need to calculate only one dimension
				if (!current.autoWidth) {
					inner.width( origWidth );
				}

				if (!current.autoHeight) {
					inner.height( origHeight );
				}

				if (current.autoWidth) {
					origWidth = inner.width();
				}

				if (current.autoHeight) {
					origHeight = inner.height();
				}

				inner.removeClass( 'fancybox-tmp' );
			}

			width  = getScalar( origWidth );
			height = getScalar( origHeight );

			ratio  = origWidth / origHeight;

			// Calculations for the content
			minWidth  = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
			maxWidth  = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);

			minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
			maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);

			// These will be used to determine if wrap can fit in the viewport
			origMaxWidth  = maxWidth;
			origMaxHeight = maxHeight;

			maxWidth_  = viewport.w - wMargin;
			maxHeight_ = viewport.h - hMargin;

			if (current.aspectRatio) {
				if (width > maxWidth) {
					width  = maxWidth;
					height = width / ratio;
				}

				if (height > maxHeight) {
					height = maxHeight;
					width  = height * ratio;
				}

				if (width < minWidth) {
					width  = minWidth;
					height = width / ratio;
				}

				if (height < minHeight) {
					height = minHeight;
					width  = height * ratio;
				}

			} else {
				width  = Math.max(minWidth,  Math.min(width,  maxWidth));
				height = Math.max(minHeight, Math.min(height, maxHeight));
			}

			// Try to fit inside viewport (including the title)
			if (current.fitToView) {
				maxWidth  = Math.min(viewport.w - wSpace, maxWidth);
				maxHeight = Math.min(viewport.h - hSpace, maxHeight);

				inner.width( getScalar( width ) ).height( getScalar( height ) );

				wrap.width( getScalar( width + wPadding ) );

				// Real wrap dimensions
				width_  = wrap.width();
				height_ = wrap.height();

				if (current.aspectRatio) {
					while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
						if (steps++ > 19) {
							break;
						}

						height = Math.max(minHeight, Math.min(maxHeight, height - 10));
						width  = height * ratio;

						if (width < minWidth) {
							width  = minWidth;
							height = width / ratio;
						}

						if (width > maxWidth) {
							width  = maxWidth;
							height = width / ratio;
						}

						inner.width( getScalar( width ) ).height( getScalar( height ) );

						wrap.width( getScalar( width + wPadding ) );

						width_  = wrap.width();
						height_ = wrap.height();
					}

				} else {
					width  = Math.max(minWidth,  Math.min(width,  width  - (width_  - maxWidth_)));
					height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
				}
			}

			if (scrollOut && scrolling === 'auto' && height < origHeight && (width + wPadding + scrollOut) < maxWidth_) {
				width += scrollOut;
			}

			inner.width( getScalar( width ) ).height( getScalar( height ) );

			wrap.width( getScalar( width + wPadding ) );

			width_  = wrap.width();
			height_ = wrap.height();

			canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
			canExpand = current.aspectRatio ? (width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight) : ((width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight));

			$.extend(current, {
				dim : {
					width	: getValue( width_ ),
					height	: getValue( height_ )
				},
				origWidth  : origWidth,
				origHeight : origHeight,
				canShrink  : canShrink,
				canExpand  : canExpand,
				wPadding   : wPadding,
				hPadding   : hPadding,
				wrapSpace  : height_ - skin.outerHeight(true),
				skinSpace  : skin.height() - height
			});

			if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
				inner.height('auto');
			}
		},

		_getPosition: function (onlyAbsolute) {
			var current  = F.current,
				viewport = F.getViewport(),
				margin   = current.margin,
				width    = F.wrap.width()  + margin[1] + margin[3],
				height   = F.wrap.height() + margin[0] + margin[2],
				rez      = {
					position: 'absolute',
					top  : margin[0],
					left : margin[3]
				};

			if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
				rez.position = 'fixed';

			} else if (!current.locked) {
				rez.top  += viewport.y;
				rez.left += viewport.x;
			}

			rez.top  = getValue(Math.max(rez.top,  rez.top  + ((viewport.h - height) * current.topRatio)));
			rez.left = getValue(Math.max(rez.left, rez.left + ((viewport.w - width)  * current.leftRatio)));

			return rez;
		},

		_afterZoomIn: function () {
			var current = F.current;

			if (!current) {
				return;
			}

			F.isOpen = F.isOpened = true;

			F.wrap.addClass('fancybox-opened').css('overflow', 'visible');

			F.reposition();

			// Assign a click event
			if (current.closeClick || current.nextClick) {
				F.inner.css('cursor', 'pointer').bind('click.fb', function(e) {
					if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
						F[ current.closeClick ? 'close' : 'next' ]();
					}
				});
			}

			// Create a close button
			if (current.closeBtn) {
				$(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', F.close);
			}

			// Create navigation arrows
			if (current.arrows && F.group.length > 1) {
				if (current.loop || current.index > 0) {
					$(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
				}

				if (current.loop || current.index < F.group.length - 1) {
					$(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
				}
			}

			F.trigger('afterShow');

			// Stop the slideshow if this is the last item
			if (!current.loop && current.index === current.group.length - 1) {
				F.play( false );

			} else if (F.opts.autoPlay && !F.player.isActive) {
				F.opts.autoPlay = false;

				F.play();
			}
		},

		_afterZoomOut: function () {
			var current = F.current;

			$('.fancybox-wrap').stop(true).trigger('onReset').remove();

			$.extend(F, {
				group  : {},
				opts   : {},
				router : false,
				current   : null,
				isActive  : false,
				isOpened  : false,
				isOpen    : false,
				isClosing : false,
				wrap   : null,
				skin   : null,
				outer  : null,
				inner  : null
			});

			F.trigger('afterClose', current);
		}
	});

	/*
	 *	Default transitions
	 */

	F.transitions = {
		getOrigPosition: function () {
			var current  = F.current,
				element  = current.element,
				orig     = current.orig,
				pos      = {},
				width    = 50,
				height   = 50,
				hPadding = current.hPadding,
				wPadding = current.wPadding,
				viewport = F.getViewport();

			if (!orig && current.isDom && element.is(':visible')) {
				orig = element.find('img:first');

				if (!orig.length) {
					orig = element;
				}
			}

			if (isQuery(orig)) {
				pos = orig.offset();

				if (orig.is('img')) {
					width  = orig.outerWidth();
					height = orig.outerHeight();
				}

			} else {
				pos.top  = viewport.y + (viewport.h - height) * current.topRatio;
				pos.left = viewport.x + (viewport.w - width)  * current.leftRatio;
			}

			if (current.locked) {
				pos.top  -= viewport.y;
				pos.left -= viewport.x;
			}

			pos = {
				top     : getValue(pos.top  - hPadding * current.topRatio),
				left    : getValue(pos.left - wPadding * current.leftRatio),
				width   : getValue(width  + wPadding),
				height  : getValue(height + hPadding)
			};

			return pos;
		},

		step: function (now, fx) {
			var ratio,
				padding,
				value,
				prop       = fx.prop,
				current    = F.current,
				wrapSpace  = current.wrapSpace,
				skinSpace  = current.skinSpace;

			if (prop === 'width' || prop === 'height') {
				ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);

				if (F.isClosing) {
					ratio = 1 - ratio;
				}

				padding = prop === 'width' ? current.wPadding : current.hPadding;
				value   = now - padding;

				F.skin[ prop ](  getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) ) );
				F.inner[ prop ]( getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) - (skinSpace * ratio) ) );
			}
		},

		zoomIn: function () {
			var current  = F.current,
				startPos = current.pos,
				effect   = current.openEffect,
				elastic  = effect === 'elastic',
				endPos   = $.extend({opacity : 1}, startPos);

			// Remove "position" property that breaks older IE
			delete endPos.position;

			if (elastic) {
				startPos = this.getOrigPosition();

				if (current.openOpacity) {
					startPos.opacity = 0.1;
				}

			} else if (effect === 'fade') {
				startPos.opacity = 0.1;
			}

			F.wrap.css(startPos).animate(endPos, {
				duration : effect === 'none' ? 0 : current.openSpeed,
				easing   : current.openEasing,
				step     : elastic ? this.step : null,
				complete : F._afterZoomIn
			});
		},

		zoomOut: function () {
			var current  = F.current,
				effect   = current.closeEffect,
				elastic  = effect === 'elastic',
				endPos   = {opacity : 0.1};

			if (elastic) {
				endPos = this.getOrigPosition();

				if (current.closeOpacity) {
					endPos.opacity = 0.1;
				}
			}

			F.wrap.animate(endPos, {
				duration : effect === 'none' ? 0 : current.closeSpeed,
				easing   : current.closeEasing,
				step     : elastic ? this.step : null,
				complete : F._afterZoomOut
			});
		},

		changeIn: function () {
			var current   = F.current,
				effect    = current.nextEffect,
				startPos  = current.pos,
				endPos    = { opacity : 1 },
				direction = F.direction,
				distance  = 200,
				field;

			startPos.opacity = 0.1;

			if (effect === 'elastic') {
				field = direction === 'down' || direction === 'up' ? 'top' : 'left';

				if (direction === 'down' || direction === 'right') {
					startPos[ field ] = getValue(getScalar(startPos[ field ]) - distance);
					endPos[ field ]   = '+=' + distance + 'px';

				} else {
					startPos[ field ] = getValue(getScalar(startPos[ field ]) + distance);
					endPos[ field ]   = '-=' + distance + 'px';
				}
			}

			// Workaround for http://bugs.jquery.com/ticket/12273
			if (effect === 'none') {
				F._afterZoomIn();

			} else {
				F.wrap.css(startPos).animate(endPos, {
					duration : current.nextSpeed,
					easing   : current.nextEasing,
					complete : F._afterZoomIn
				});
			}
		},

		changeOut: function () {
			var previous  = F.previous,
				effect    = previous.prevEffect,
				endPos    = { opacity : 0.1 },
				direction = F.direction,
				distance  = 200;

			if (effect === 'elastic') {
				endPos[ direction === 'down' || direction === 'up' ? 'top' : 'left' ] = ( direction === 'up' || direction === 'left' ? '-' : '+' ) + '=' + distance + 'px';
			}

			previous.wrap.animate(endPos, {
				duration : effect === 'none' ? 0 : previous.prevSpeed,
				easing   : previous.prevEasing,
				complete : function () {
					$(this).trigger('onReset').remove();
				}
			});
		}
	};

	/*
	 *	Overlay helper
	 */

	F.helpers.overlay = {
		overlay: null,

		update: function () {
			var width = '100%', offsetWidth;

			// Reset width/height so it will not mess
			this.overlay.width(width).height('100%');

			// jQuery does not return reliable result for IE
			if ($.browser.msie) {
				offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

				if (D.width() > offsetWidth) {
					width = D.width();
				}

			} else if (D.width() > W.width()) {
				width = D.width();
			}

			this.overlay.width(width).height(D.height());
		},

		// This is where we can manipulate DOM, because later it would cause iframes to reload
		onReady: function (opts, obj) {
			$('.fancybox-overlay').stop(true, true);

			if (!this.overlay) {
				$.extend(this, {
					overlay : $('<div class="fancybox-overlay"></div>').appendTo( obj.parent ),
					margin  : D.height() > W.height() || $('body').css('overflow-y') === 'scroll' ? $('body').css('margin-right') : false,
					el : document.all && !document.querySelector ? $('html') : $('body')
				});
			}

			if (obj.fixed && !isTouch) {
				this.overlay.addClass('fancybox-overlay-fixed');

				if (obj.autoCenter) {
					this.overlay.append( obj.wrap );

					obj.locked = this.overlay;
				}
			}

			if (opts.showEarly === true) {
				this.beforeShow.apply(this, arguments);
			}
		},

		beforeShow : function(opts, obj) {
			var overlay = this.overlay.unbind('.fb').width('auto').height('auto').css( opts.css );

			if (opts.closeClick) {
				overlay.bind('click.fb', function(e) {
					if ($(e.target).hasClass('fancybox-overlay')) {
						F.close();
					}
				});
			}

			if (obj.fixed && !isTouch) {
				if (obj.locked) {
					this.el.addClass('fancybox-lock');

					if (this.margin !== false) {
						$('body').css('margin-right', getScalar( this.margin ) + obj.scrollbarWidth);
					}
				}

			} else {
				this.update();
			}

			overlay.show();
		},

		onUpdate : function(opts, obj) {
			if (!obj.fixed || isTouch) {
				this.update();
			}
		},

		afterClose: function (opts) {
			var that  = this,
				speed = opts.speedOut || 0;

			// Remove overlay if exists and fancyBox is not opening
			// (e.g., it is not being open using afterClose callback)
			if (that.overlay && !F.isActive) {
				that.overlay.fadeOut(speed || 0, function () {
					$('body').css('margin-right', that.margin);

					that.el.removeClass('fancybox-lock');

					that.overlay.remove();

					that.overlay = null;
				});
			}
		}
	};

	/*
	 *	Title helper
	 */

	F.helpers.title = {
		beforeShow: function (opts) {
			var text = F.current.title,
				type = opts.type,
				title,
				target;

			if (!isString(text) || $.trim(text) === '') {
				return;
			}

			title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');

			switch (type) {
				case 'inside':
					target = F.skin;
				break;

				case 'outside':
					target = F.wrap;
				break;

				case 'over':
					target = F.inner;
				break;

				default: // 'float'
					target = F.skin;

					title
						.appendTo('body')
						.width(title.width()) //This helps for some browsers
						.wrapInner('<span class="child"></span>');

						//Increase bottom margin so this title will also fit into viewport
						F.current.margin[2] += Math.abs( getScalar(title.css('margin-bottom')) );
				break;
			}

			if (opts.position === 'top') {
				title.prependTo(target);

			} else {
				title.appendTo(target);
			}
		}
	};

	// jQuery plugin initialization
	$.fn.fancybox = function (options) {
		var index,
			that     = $(this),
			selector = this.selector || '',
			run      = function(e) {
				var what = $(this).blur(), idx = index, relType, relVal;

				if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
					relType = options.groupAttr || 'data-fancybox-group';
					relVal  = what.attr(relType);

					if (!relVal) {
						relType = 'rel';
						relVal  = what.get(0)[ relType ];
					}

					if (relVal && relVal !== '' && relVal !== 'nofollow') {
						what = selector.length ? $(selector) : that;
						what = what.filter('[' + relType + '="' + relVal + '"]');
						idx  = what.index(this);
					}

					options.index = idx;

					// Stop an event from bubbling if everything is fine
					if (F.open(what, options) !== false) {
						e.preventDefault();
					}
				}
			};

		options = options || {};
		index   = options.index || 0;

		if (!selector || options.live === false) {
			that.unbind('click.fb-start').bind('click.fb-start', run);
		} else {
			D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
		}

		return this;
	};

	// Tests that need a body at doc ready
	D.ready(function() {
		if ( $.scrollbarWidth === undefined ) {
			// http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
			$.scrollbarWidth = function() {
				var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
					child  = parent.children(),
					width  = child.innerWidth() - child.height( 99 ).innerWidth();

				parent.remove();

				return width;
			};
		}

		if ( $.support.fixedPosition === undefined ) {
			$.support.fixedPosition = (function() {
				var elem  = $('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
					fixed = ( elem[0].offsetTop === 20 || elem[0].offsetTop === 15 );

				elem.remove();

				return fixed;
			}());
		}

		$.extend(F.defaults, {
			scrollbarWidth : $.scrollbarWidth(),
			fixed  : $.support.fixedPosition,
			parent : $('body')
		});
	});

}(window, document, jQuery));
/* End */
;
; /* Start:"a:4:{s:4:"full";s:68:"/bitrix/templates/aspro_next/js/jquery.flexslider.js?154384449056266";s:6:"source";s:52:"/bitrix/templates/aspro_next/js/jquery.flexslider.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
 * jQuery FlexSlider v2.6.3
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
;
(function ($) {

  var focused = true;

  //FlexSlider: Object Instance
  $.flexslider = function(el, options) {
    var slider = $(el);

    // making variables public
    slider.vars = $.extend({}, $.flexslider.defaults, options);

    var namespace = slider.vars.namespace,
        msGesture = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
        touch = (( "ontouchstart" in window ) || msGesture || window.DocumentTouch && document instanceof DocumentTouch) && slider.vars.touch,
        // depricating this idea, as devices are being released with both of these events
        eventType = "click touchend MSPointerUp keyup",
        watchedEvent = "",
        watchedEventClearTimer,
        vertical = slider.vars.direction === "vertical",
        reverse = slider.vars.reverse,
        carousel = (slider.vars.itemWidth > 0),
        fade = slider.vars.animation === "fade",
        asNav = slider.vars.asNavFor !== "",
        methods = {};

    // Store a reference to the slider object
    $.data(el, "flexslider", slider);

    // Private slider methods
    methods = {
      init: function() {
        slider.animating = false;
        // Get current slide and make sure it is a number
        slider.currentSlide = parseInt( ( slider.vars.startAt ? slider.vars.startAt : 0), 10 );
        if ( isNaN( slider.currentSlide ) ) { slider.currentSlide = 0; }
        slider.animatingTo = slider.currentSlide;
        slider.atEnd = (slider.currentSlide === 0 || slider.currentSlide === slider.last);
        slider.containerSelector = slider.vars.selector.substr(0,slider.vars.selector.search(' '));
        slider.slides = $(slider.vars.selector, slider);
        slider.container = $(slider.containerSelector, slider);
        slider.count = slider.slides.length;
        // SYNC:
        slider.syncExists = $(slider.vars.sync).length > 0;
        // SLIDE:
        if (slider.vars.animation === "slide") { slider.vars.animation = "swing"; }
        slider.prop = (vertical) ? "top" : "marginLeft";
        slider.args = {};
        // SLIDESHOW:
        slider.manualPause = false;
        slider.stopped = false;
        //PAUSE WHEN INVISIBLE
        slider.started = false;
        slider.startTimeout = null;
        // TOUCH/USECSS:
        slider.transitions = !slider.vars.video && !fade && slider.vars.useCSS && (function() {
          var obj = document.createElement('div'),
              props = ['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
          for (var i in props) {
            if ( obj.style[ props[i] ] !== undefined ) {
              slider.pfx = props[i].replace('Perspective','').toLowerCase();
              slider.prop = "-" + slider.pfx + "-transform";
              return true;
            }
          }
          return false;
        }());
        slider.ensureAnimationEnd = '';
        // CONTROLSCONTAINER:
        if (slider.vars.controlsContainer !== "") slider.controlsContainer = $(slider.vars.controlsContainer).length > 0 && $(slider.vars.controlsContainer);
        // MANUAL:
        if (slider.vars.manualControls !== "") slider.manualControls = $(slider.vars.manualControls).length > 0 && $(slider.vars.manualControls);

        // CUSTOM DIRECTION NAV:
        if (slider.vars.customDirectionNav !== "") slider.customDirectionNav = $(slider.vars.customDirectionNav).length === 2 && $(slider.vars.customDirectionNav);

        // RANDOMIZE:
        if (slider.vars.randomize) {
          slider.slides.sort(function() { return (Math.round(Math.random())-0.5); });
          slider.container.empty().append(slider.slides);
        }

        slider.doMath();

        // INIT
        slider.setup("init");

        // CONTROLNAV:
        if (slider.vars.controlNav) { methods.controlNav.setup(); }

        // DIRECTIONNAV:
        if (slider.vars.directionNav) { methods.directionNav.setup(); }

        // KEYBOARD:
        if (slider.vars.keyboard && ($(slider.containerSelector).length === 1 || slider.vars.multipleKeyboard)) {
          $(document).bind('keyup', function(event) {
            var keycode = event.keyCode;
            if (!slider.animating && (keycode === 39 || keycode === 37)) {
              var target = (keycode === 39) ? slider.getTarget('next') :
                           (keycode === 37) ? slider.getTarget('prev') : false;
              slider.flexAnimate(target, slider.vars.pauseOnAction);
            }
          });
        }
        // MOUSEWHEEL:
        if (slider.vars.mousewheel) {
          slider.bind('mousewheel', function(event, delta, deltaX, deltaY) {
            event.preventDefault();
            var target = (delta < 0) ? slider.getTarget('next') : slider.getTarget('prev');
            slider.flexAnimate(target, slider.vars.pauseOnAction);
          });
        }

        // PAUSEPLAY
        if (slider.vars.pausePlay) { methods.pausePlay.setup(); }

        //PAUSE WHEN INVISIBLE
        if (slider.vars.slideshow && slider.vars.pauseInvisible) { methods.pauseInvisible.init(); }

        // SLIDSESHOW
        if (slider.vars.slideshow) {
          if (slider.vars.pauseOnHover) {
            slider.hover(function() {
              if (!slider.manualPlay && !slider.manualPause) { slider.pause(); }
            }, function() {
              if (!slider.manualPause && !slider.manualPlay && !slider.stopped) { slider.play(); }
            });
          }
          // initialize animation
          //If we're visible, or we don't use PageVisibility API
          if(!slider.vars.pauseInvisible || !methods.pauseInvisible.isHidden()) {
            (slider.vars.initDelay > 0) ? slider.startTimeout = setTimeout(slider.play, slider.vars.initDelay) : slider.play();
          }
        }

        // ASNAV:
        if (asNav) { methods.asNav.setup(); }

        // TOUCH
        if (touch && slider.vars.touch) { methods.touch(); }

        // FADE&&SMOOTHHEIGHT || SLIDE:
        if (!fade || (fade && slider.vars.smoothHeight)) { $(window).bind("resize orientationchange", methods.resize); }

        slider.find("img").attr("draggable", "false");

        // API: start() Callback
        setTimeout(function(){
          slider.vars.start(slider);
        }, 200);
      },
      asNav: {
        setup: function() {
          slider.asNav = true;
          slider.animatingTo = Math.floor(slider.currentSlide/slider.move);
          slider.currentItem = slider.currentSlide;
          slider.slides.removeClass(namespace + "active-slide").eq(slider.currentItem).addClass(namespace + "active-slide");
          if(!msGesture){
              slider.slides.on(eventType, function(e){
                e.preventDefault();
                var $slide = $(this),
                    target = $slide.index();
                var posFromLeft = $slide.offset().left - $(slider).scrollLeft(); // Find position of slide relative to left of slider container
                if( posFromLeft <= 0 && $slide.hasClass( namespace + 'active-slide' ) ) {
                  slider.flexAnimate(slider.getTarget("prev"), true);
                } else if (!$(slider.vars.asNavFor).data('flexslider').animating && !$slide.hasClass(namespace + "active-slide")) {
                  slider.direction = (slider.currentItem < target) ? "next" : "prev";
                  slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
                }
              });
          }else{
              el._slider = slider;
              slider.slides.each(function (){
                  var that = this;
                  that._gesture = new MSGesture();
                  that._gesture.target = that;
                  that.addEventListener("MSPointerDown", function (e){
                      e.preventDefault();
                      if(e.currentTarget._gesture) {
                        e.currentTarget._gesture.addPointer(e.pointerId);
                      }
                  }, false);
                  that.addEventListener("MSGestureTap", function (e){
                      e.preventDefault();
                      var $slide = $(this),
                          target = $slide.index();
                      if (!$(slider.vars.asNavFor).data('flexslider').animating && !$slide.hasClass('active')) {
                          slider.direction = (slider.currentItem < target) ? "next" : "prev";
                          slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
                      }
                  });
              });
          }
        }
      },
      controlNav: {
        setup: function() {
          if (!slider.manualControls) {
            methods.controlNav.setupPaging();
          } else { // MANUALCONTROLS:
            methods.controlNav.setupManual();
          }
        },
        setupPaging: function() {
          var type = (slider.vars.controlNav === "thumbnails") ? 'control-thumbs' : 'control-paging',
              j = 1,
              item,
              slide;

          slider.controlNavScaffold = $('<ol class="'+ namespace + 'control-nav ' + namespace + type + '"></ol>');

          if (slider.pagingCount > 1) {
            for (var i = 0; i < slider.pagingCount; i++) {
              slide = slider.slides.eq(i);
              if ( undefined === slide.attr( 'data-thumb-alt' ) ) { slide.attr( 'data-thumb-alt', '' ); }
              var altText = ( '' !== slide.attr( 'data-thumb-alt' ) ) ? altText = ' alt="' + slide.attr( 'data-thumb-alt' ) + '"' : '';
              item = (slider.vars.controlNav === "thumbnails") ? '<img src="' + slide.attr( 'data-thumb' ) + '"' + altText + '/>' : '<a href="#">' + j + '</a>';
              if ( 'thumbnails' === slider.vars.controlNav && true === slider.vars.thumbCaptions ) {
                var captn = slide.attr( 'data-thumbcaption' );
                if ( '' !== captn && undefined !== captn ) { item += '<span class="' + namespace + 'caption">' + captn + '</span>'; }
              }
              slider.controlNavScaffold.append('<li>' + item + '</li>');
              j++;
            }
          }

          // CONTROLSCONTAINER:
          (slider.controlsContainer) ? $(slider.controlsContainer).append(slider.controlNavScaffold) : slider.append(slider.controlNavScaffold);
          methods.controlNav.set();

          methods.controlNav.active();

          slider.controlNavScaffold.delegate('a, img', eventType, function(event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              var $this = $(this),
                  target = slider.controlNav.index($this);

              if (!$this.hasClass(namespace + 'active')) {
                slider.direction = (target > slider.currentSlide) ? "next" : "prev";
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              }
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();

          });
        },
        setupManual: function() {
          slider.controlNav = slider.manualControls;
          methods.controlNav.active();

          slider.controlNav.bind(eventType, function(event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              var $this = $(this),
                  target = slider.controlNav.index($this);

              if (!$this.hasClass(namespace + 'active')) {
                (target > slider.currentSlide) ? slider.direction = "next" : slider.direction = "prev";
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              }
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        set: function() {
          var selector = (slider.vars.controlNav === "thumbnails") ? 'img' : 'a';
          slider.controlNav = $('.' + namespace + 'control-nav li ' + selector, (slider.controlsContainer) ? slider.controlsContainer : slider);
        },
        active: function() {
          slider.controlNav.removeClass(namespace + "active").eq(slider.animatingTo).addClass(namespace + "active");
        },
        update: function(action, pos) {
          if (slider.pagingCount > 1 && action === "add") {
            slider.controlNavScaffold.append($('<li><a href="#">' + slider.count + '</a></li>'));
          } else if (slider.pagingCount === 1) {
            slider.controlNavScaffold.find('li').remove();
          } else {
            slider.controlNav.eq(pos).closest('li').remove();
          }
          methods.controlNav.set();
          (slider.pagingCount > 1 && slider.pagingCount !== slider.controlNav.length) ? slider.update(pos, action) : methods.controlNav.active();
        }
      },
      directionNav: {
        setup: function() {
          var directionNavScaffold = $('<ul class="' + namespace + 'direction-nav"><li class="' + namespace + 'nav-prev"><a class="' + namespace + 'prev" href="#">' + slider.vars.prevText + '</a></li><li class="' + namespace + 'nav-next"><a class="' + namespace + 'next" href="#">' + slider.vars.nextText + '</a></li></ul>');

          // CUSTOM DIRECTION NAV:
          if (slider.customDirectionNav) {
            slider.directionNav = slider.customDirectionNav;
          // CONTROLSCONTAINER:
          } else if (slider.controlsContainer) {
            $(slider.controlsContainer).append(directionNavScaffold);
            slider.directionNav = $('.' + namespace + 'direction-nav li a', slider.controlsContainer);
          } else {
            slider.append(directionNavScaffold);
            slider.directionNav = $('.' + namespace + 'direction-nav li a', slider);
          }

          methods.directionNav.update();

          slider.directionNav.bind(eventType, function(event) {
            event.preventDefault();
            var target;

            if (watchedEvent === "" || watchedEvent === event.type) {
              target = ($(this).hasClass(namespace + 'next')) ? slider.getTarget('next') : slider.getTarget('prev');
              slider.flexAnimate(target, slider.vars.pauseOnAction);
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        update: function() {
          var disabledClass = namespace + 'disabled';
          if (slider.pagingCount === 1 || slider.pagingCount < 1) {
            slider.directionNav.addClass(disabledClass).attr('tabindex', '-1');
            slider.directionNav.parent().addClass(disabledClass);
          } else if (!slider.vars.animationLoop) {
            if (slider.animatingTo === 0) {
              slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "prev").addClass(disabledClass).attr('tabindex', '-1');
        slider.directionNav.parent().removeClass(disabledClass);
        slider.directionNav.filter('.' + namespace + "prev").parent().addClass(disabledClass);
            } else if (slider.animatingTo === slider.last) {
              slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "next").addClass(disabledClass).attr('tabindex', '-1');
        slider.directionNav.parent().removeClass(disabledClass);
        slider.directionNav.filter('.' + namespace + "next").parent().addClass(disabledClass);
            } else {
              slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');
        slider.directionNav.parent().removeClass(disabledClass);
            }
          } else {
            slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');
      slider.directionNav.parent().removeClass(disabledClass);
          }
        }
      },
      pausePlay: {
        setup: function() {
          var pausePlayScaffold = $('<div class="' + namespace + 'pauseplay"><a href="#"></a></div>');

          // CONTROLSCONTAINER:
          if (slider.controlsContainer) {
            slider.controlsContainer.append(pausePlayScaffold);
            slider.pausePlay = $('.' + namespace + 'pauseplay a', slider.controlsContainer);
          } else {
            slider.append(pausePlayScaffold);
            slider.pausePlay = $('.' + namespace + 'pauseplay a', slider);
          }

          methods.pausePlay.update((slider.vars.slideshow) ? namespace + 'pause' : namespace + 'play');

          slider.pausePlay.bind(eventType, function(event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              if ($(this).hasClass(namespace + 'pause')) {
                slider.manualPause = true;
                slider.manualPlay = false;
                slider.pause();
              } else {
                slider.manualPause = false;
                slider.manualPlay = true;
                slider.play();
              }
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        update: function(state) {
          (state === "play") ? slider.pausePlay.removeClass(namespace + 'pause').addClass(namespace + 'play').html(slider.vars.playText) : slider.pausePlay.removeClass(namespace + 'play').addClass(namespace + 'pause').html(slider.vars.pauseText);
        }
      },
      touch: function() {
        var startX,
          startY,
          offset,
          cwidth,
          dx,
          startT,
          onTouchStart,
          onTouchMove,
          onTouchEnd,
          scrolling = false,
          localX = 0,
          localY = 0,
          accDx = 0;

        if(!msGesture){
            onTouchStart = function(e) {
              if (slider.animating) {
                e.preventDefault();
              } else if ( ( window.navigator.msPointerEnabled ) || e.touches.length === 1 ) {
                slider.pause();
                // CAROUSEL:
                cwidth = (vertical) ? slider.h : slider. w;
                startT = Number(new Date());
                // CAROUSEL:

                // Local vars for X and Y points.
                localX = e.touches[0].pageX;
                localY = e.touches[0].pageY;

                offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 :
                         (carousel && reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                         (carousel && slider.currentSlide === slider.last) ? slider.limit :
                         (carousel) ? ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.currentSlide :
                         (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                startX = (vertical) ? localY : localX;
                startY = (vertical) ? localX : localY;

                el.addEventListener('touchmove', onTouchMove, false);
                el.addEventListener('touchend', onTouchEnd, false);
              }
            };

            onTouchMove = function(e) {
              // Local vars for X and Y points.

              localX = e.touches[0].pageX;
              localY = e.touches[0].pageY;

              dx = (vertical) ? startX - localY : startX - localX;
              scrolling = (vertical) ? (Math.abs(dx) < Math.abs(localX - startY)) : (Math.abs(dx) < Math.abs(localY - startY));

              var fxms = 500;

              if ( ! scrolling || Number( new Date() ) - startT > fxms ) {
                e.preventDefault();
                if (!fade && slider.transitions) {
                  if (!slider.vars.animationLoop) {
                    dx = dx/((slider.currentSlide === 0 && dx < 0 || slider.currentSlide === slider.last && dx > 0) ? (Math.abs(dx)/cwidth+2) : 1);
                  }
                  slider.setProps(offset + dx, "setTouch");
                }
              }
            };

            onTouchEnd = function(e) {
              // finish the touch by undoing the touch session
              el.removeEventListener('touchmove', onTouchMove, false);

              if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
                var updateDx = (reverse) ? -dx : dx,
                    target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');

                if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth/2)) {
                  slider.flexAnimate(target, slider.vars.pauseOnAction);
                } else {
                  if (!fade) { slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true); }
                }
              }
              el.removeEventListener('touchend', onTouchEnd, false);

              startX = null;
              startY = null;
              dx = null;
              offset = null;
            };

            el.addEventListener('touchstart', onTouchStart, false);
        }else{
            el.style.msTouchAction = "none";
            el._gesture = new MSGesture();
            el._gesture.target = el;
            el.addEventListener("MSPointerDown", onMSPointerDown, false);
            el._slider = slider;
            el.addEventListener("MSGestureChange", onMSGestureChange, false);
            el.addEventListener("MSGestureEnd", onMSGestureEnd, false);

            function onMSPointerDown(e){
                e.stopPropagation();
                if (slider.animating) {
                    e.preventDefault();
                }else{
                    slider.pause();
                    el._gesture.addPointer(e.pointerId);
                    accDx = 0;
                    cwidth = (vertical) ? slider.h : slider. w;
                    startT = Number(new Date());
                    // CAROUSEL:

                    offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 :
                        (carousel && reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                            (carousel && slider.currentSlide === slider.last) ? slider.limit :
                                (carousel) ? ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.currentSlide :
                                    (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                }
            }

            function onMSGestureChange(e) {
                e.stopPropagation();
                var slider = e.target._slider;
                if(!slider){
                    return;
                }
                var transX = -e.translationX,
                    transY = -e.translationY;

                //Accumulate translations.
                accDx = accDx + ((vertical) ? transY : transX);
                dx = accDx;
                scrolling = (vertical) ? (Math.abs(accDx) < Math.abs(-transX)) : (Math.abs(accDx) < Math.abs(-transY));

                if(e.detail === e.MSGESTURE_FLAG_INERTIA){
                    setImmediate(function (){
                        el._gesture.stop();
                    });

                    return;
                }

                if (!scrolling || Number(new Date()) - startT > 500) {
                    e.preventDefault();
                    if (!fade && slider.transitions) {
                        if (!slider.vars.animationLoop) {
                            dx = accDx / ((slider.currentSlide === 0 && accDx < 0 || slider.currentSlide === slider.last && accDx > 0) ? (Math.abs(accDx) / cwidth + 2) : 1);
                        }
                        slider.setProps(offset + dx, "setTouch");
                    }
                }
            }

            function onMSGestureEnd(e) {
                e.stopPropagation();
                var slider = e.target._slider;
                if(!slider){
                    return;
                }
                if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
                    var updateDx = (reverse) ? -dx : dx,
                        target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');

                    if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth/2)) {
                        slider.flexAnimate(target, slider.vars.pauseOnAction);
                    } else {
                        if (!fade) { slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true); }
                    }
                }

                startX = null;
                startY = null;
                dx = null;
                offset = null;
                accDx = 0;
            }
        }
      },
      resize: function() {
        if (!slider.animating && slider.is(':visible')) {
          if (!carousel) { slider.doMath(); }

          if (fade) {
            // SMOOTH HEIGHT:
            methods.smoothHeight();
          } else if (carousel) { //CAROUSEL:
            slider.slides.width(slider.computedW);

            slider.update(slider.pagingCount);
            // slider.setProps();
          }
          else if (vertical) { //VERTICAL:
            slider.viewport.height(slider.h);
            slider.setProps(slider.h, "setTotal");
          } else {
            // SMOOTH HEIGHT:
            if (slider.vars.smoothHeight) { methods.smoothHeight(); }
            slider.newSlides.width(slider.computedW);
            slider.setProps(slider.computedW, "setTotal");
          }
        }
      },
      smoothHeight: function(dur) {
        if (!vertical || fade) {
          var $obj = (fade) ? slider : slider.viewport;
          (dur) ? $obj.animate({"height": slider.slides.eq(slider.animatingTo).innerHeight()}, dur) : $obj.innerHeight(slider.slides.eq(slider.animatingTo).innerHeight());
        }
      },
      sync: function(action) {
        var $obj = $(slider.vars.sync).data("flexslider"),
            target = slider.animatingTo;

        switch (action) {
          case "animate": $obj.flexAnimate(target, slider.vars.pauseOnAction, false, true); break;
          case "play": if (!$obj.playing && !$obj.asNav) { $obj.play(); } break;
          case "pause": $obj.pause(); break;
        }
      },
      uniqueID: function($clone) {
        // Append _clone to current level and children elements with id attributes
        $clone.filter( '[id]' ).add($clone.find( '[id]' )).each(function() {
          var $this = $(this);
          $this.attr( 'id', $this.attr( 'id' ) + '_clone' );
        });
        return $clone;
      },
      pauseInvisible: {
        visProp: null,
        init: function() {
          var visProp = methods.pauseInvisible.getHiddenProp();
          if (visProp) {
            var evtname = visProp.replace(/[H|h]idden/,'') + 'visibilitychange';
            document.addEventListener(evtname, function() {
              if (methods.pauseInvisible.isHidden()) {
                if(slider.startTimeout) {
                  clearTimeout(slider.startTimeout); //If clock is ticking, stop timer and prevent from starting while invisible
                } else {
                  slider.pause(); //Or just pause
                }
              }
              else {
                if(slider.started) {
                  slider.play(); //Initiated before, just play
                } else {
                  if (slider.vars.initDelay > 0) {
                    setTimeout(slider.play, slider.vars.initDelay);
                  } else {
                    slider.play(); //Didn't init before: simply init or wait for it
                  }
                }
              }
            });
          }
        },
        isHidden: function() {
          var prop = methods.pauseInvisible.getHiddenProp();
          if (!prop) {
            return false;
          }
          return document[prop];
        },
        getHiddenProp: function() {
          var prefixes = ['webkit','moz','ms','o'];
          // if 'hidden' is natively supported just return it
          if ('hidden' in document) {
            return 'hidden';
          }
          // otherwise loop over all the known prefixes until we find one
          for ( var i = 0; i < prefixes.length; i++ ) {
              if ((prefixes[i] + 'Hidden') in document) {
                return prefixes[i] + 'Hidden';
              }
          }
          // otherwise it's not supported
          return null;
        }
      },
      setToClearWatchedEvent: function() {
        clearTimeout(watchedEventClearTimer);
        watchedEventClearTimer = setTimeout(function() {
          watchedEvent = "";
        }, 3000);
      }
    };

    // public methods
    slider.flexAnimate = function(target, pause, override, withSync, fromNav) {
      if (!slider.vars.animationLoop && target !== slider.currentSlide) {
        slider.direction = (target > slider.currentSlide) ? "next" : "prev";
      }

      if (asNav && slider.pagingCount === 1) slider.direction = (slider.currentItem < target) ? "next" : "prev";

      if (!slider.animating && (slider.canAdvance(target, fromNav) || override)/* && slider.is(":visible")*/) {
        if (asNav && withSync) {
          var master = $(slider.vars.asNavFor).data('flexslider');
          slider.atEnd = target === 0 || target === slider.count - 1;
          master.flexAnimate(target, true, false, true, fromNav);
          slider.direction = (slider.currentItem < target) ? "next" : "prev";
          master.direction = slider.direction;

          // ++ added by kach
          slider.currentItem = target;
          slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
          var newtarget = Math.floor((target + 1)/slider.visible) > 0 ? (Math.floor((target + 1 - slider.visible) / slider.move)) : 0;
          if(newtarget != slider.currentSlide){
            target = newtarget;
          }
          else{
            return false;
          }
          // ++

          // -- removed by kach
          /*
          if (Math.ceil((target + 1)/slider.visible) - 1 !== slider.currentSlide && target !== 0) {
            slider.currentItem = target;
            slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
            target = Math.floor(target/slider.visible);
          } else {
            slider.currentItem = target;
            slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
            return false;
          }
          */
          // --
        }

        slider.animating = true;
        slider.animatingTo = target;

        // SLIDESHOW:
        if (pause) { slider.pause(); }

        // API: before() animation Callback
        slider.vars.before(slider);

        // SYNC:
        if (slider.syncExists && !fromNav) { methods.sync("animate"); }

        // CONTROLNAV
        if (slider.vars.controlNav) { methods.controlNav.active(); }

        // !CAROUSEL:
        // CANDIDATE: slide active class (for add/remove slide)
        if (!carousel) { slider.slides.removeClass(namespace + 'active-slide').eq(target).addClass(namespace + 'active-slide'); }

        // INFINITE LOOP:
        // CANDIDATE: atEnd
        slider.atEnd = target === 0 || target === slider.last;

        // DIRECTIONNAV:
        if (slider.vars.directionNav) { methods.directionNav.update(); }

        if (target === slider.last) {
          // API: end() of cycle Callback
          slider.vars.end(slider);
          // SLIDESHOW && !INFINITE LOOP:
          if (!slider.vars.animationLoop) { slider.pause(); }
        }

        // SLIDE:
        if (!fade) {
          var dimension = (vertical) ? slider.slides.filter(':first').height() : slider.computedW,
              margin, slideString, calcNext;

          // INFINITE LOOP / REVERSE:
          if (carousel) {
            margin = slider.vars.itemMargin;
            calcNext = ((slider.itemW + margin) * slider.move) * slider.animatingTo;
            slideString = (calcNext > slider.limit && slider.visible !== 1) ? slider.limit : calcNext;
          } else if (slider.currentSlide === 0 && target === slider.count - 1 && slider.vars.animationLoop && slider.direction !== "next") {
            slideString = (reverse) ? (slider.count + slider.cloneOffset) * dimension : 0;
          } else if (slider.currentSlide === slider.last && target === 0 && slider.vars.animationLoop && slider.direction !== "prev") {
            slideString = (reverse) ? 0 : (slider.count + 1) * dimension;
          } else {
            slideString = (reverse) ? ((slider.count - 1) - target + slider.cloneOffset) * dimension : (target + slider.cloneOffset) * dimension;
          }
          slider.setProps(slideString, "", slider.vars.animationSpeed);
          if (slider.transitions) {
            if (!slider.vars.animationLoop || !slider.atEnd) {
              slider.animating = false;
              slider.currentSlide = slider.animatingTo;
            }

            // Unbind previous transitionEnd events and re-bind new transitionEnd event
            slider.container.unbind("webkitTransitionEnd transitionend");
            slider.container.bind("webkitTransitionEnd transitionend", function() {
              clearTimeout(slider.ensureAnimationEnd);
              slider.wrapup(dimension);
            });

            // Insurance for the ever-so-fickle transitionEnd event
            clearTimeout(slider.ensureAnimationEnd);
            slider.ensureAnimationEnd = setTimeout(function() {
              slider.wrapup(dimension);
            }, slider.vars.animationSpeed + 100);

          } else {
            slider.container.animate(slider.args, slider.vars.animationSpeed, slider.vars.easing, function(){
              slider.wrapup(dimension);
            });
          }
        } else { // FADE:
          if (!touch) {
            slider.slides.eq(slider.currentSlide).css({"zIndex": 1}).animate({"opacity": 0}, slider.vars.animationSpeed, slider.vars.easing);
            slider.slides.eq(target).css({"zIndex": 2}).animate({"opacity": 1}, slider.vars.animationSpeed, slider.vars.easing, slider.wrapup);
          } else {
            slider.slides.eq(slider.currentSlide).css({ "opacity": 0, "zIndex": 1 });
            slider.slides.eq(target).css({ "opacity": 1, "zIndex": 2 });
            slider.wrapup(dimension);
          }
        }
        // SMOOTH HEIGHT:
        if (slider.vars.smoothHeight) { methods.smoothHeight(slider.vars.animationSpeed); }
      }
    };
    slider.wrapup = function(dimension) {
      // SLIDE:
      if (!fade && !carousel) {
        if (slider.currentSlide === 0 && slider.animatingTo === slider.last && slider.vars.animationLoop) {
          slider.setProps(dimension, "jumpEnd");
        } else if (slider.currentSlide === slider.last && slider.animatingTo === 0 && slider.vars.animationLoop) {
          slider.setProps(dimension, "jumpStart");
        }
      }
      slider.animating = false;
      slider.currentSlide = slider.animatingTo;
      // API: after() animation Callback
      slider.vars.after(slider);
    };

    // SLIDESHOW:
    slider.animateSlides = function() {
      if (!slider.animating && focused ) { slider.flexAnimate(slider.getTarget("next")); }
    };
    // SLIDESHOW:
    slider.pause = function() {
      clearInterval(slider.animatedSlides);
      slider.animatedSlides = null;
      slider.playing = false;
      // PAUSEPLAY:
      if (slider.vars.pausePlay) { methods.pausePlay.update("play"); }
      // SYNC:
      if (slider.syncExists) { methods.sync("pause"); }
    };
    // SLIDESHOW:
    slider.play = function() {
      if (slider.playing) { clearInterval(slider.animatedSlides); }
      slider.animatedSlides = slider.animatedSlides || setInterval(slider.animateSlides, slider.vars.slideshowSpeed);
      slider.started = slider.playing = true;
      // PAUSEPLAY:
      if (slider.vars.pausePlay) { methods.pausePlay.update("pause"); }
      // SYNC:
      if (slider.syncExists) { methods.sync("play"); }
    };
    // STOP:
    slider.stop = function () {
      slider.pause();
      slider.stopped = true;
    };
    slider.canAdvance = function(target, fromNav) {
      // ASNAV:
      var last = (asNav) ? slider.pagingCount - 1 : slider.last;
      return (fromNav) ? true :
             (asNav && slider.currentItem === slider.count - 1 && target === 0 && slider.direction === "prev") ? true :
             (asNav && slider.currentItem === 0 && target === slider.pagingCount - 1 && slider.direction !== "next") ? false :
             (target === slider.currentSlide && !asNav) ? false :
             (slider.vars.animationLoop) ? true :
             (slider.atEnd && slider.currentSlide === 0 && target === last && slider.direction !== "next") ? false :
             (slider.atEnd && slider.currentSlide === last && target === 0 && slider.direction === "next") ? false :
             true;
    };
    slider.getTarget = function(dir) {
      slider.direction = dir;
      if (dir === "next") {
        return (slider.currentSlide === slider.last) ? 0 : slider.currentSlide + 1;
      } else {
        return (slider.currentSlide === 0) ? slider.last : slider.currentSlide - 1;
      }
    };

    // SLIDE:
    slider.setProps = function(pos, special, dur) {
      var target = (function() {
        var posCheck = (pos) ? pos : ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo,
            posCalc = (function() {
              if (carousel) {
                return (special === "setTouch") ? pos :
                       (reverse && slider.animatingTo === slider.last) ? 0 :
                       (reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                       (slider.animatingTo === slider.last) ? slider.limit : posCheck;
              } else {
                switch (special) {
                  case "setTotal": return (reverse) ? ((slider.count - 1) - slider.currentSlide + slider.cloneOffset) * pos : (slider.currentSlide + slider.cloneOffset) * pos;
                  case "setTouch": return (reverse) ? pos : pos;
                  case "jumpEnd": return (reverse) ? pos : slider.count * pos;
                  case "jumpStart": return (reverse) ? slider.count * pos : pos;
                  default: return pos;
                }
              }
            }());

            return (posCalc * -1) + "px";
          }());

      if (slider.transitions) {
        target = (vertical) ? "translate3d(0," + target + ",0)" : "translate3d(" + target + ",0,0)";
        dur = (dur !== undefined) ? (dur/1000) + "s" : "0s";
        slider.container.css("-" + slider.pfx + "-transition-duration", dur);
         slider.container.css("transition-duration", dur);
      }

      slider.args[slider.prop] = target;
      if (slider.transitions || dur === undefined) { slider.container.css(slider.args); }

      slider.container.css('transform',target);
    };

    slider.setup = function(type) {
      // SLIDE:
      if (!fade) {
        var sliderOffset, arr;

        if (type === "init") {
          slider.viewport = $('<div class="' + namespace + 'viewport"></div>').css({"overflow": "hidden", "position": "relative"}).appendTo(slider).append(slider.container);
          // INFINITE LOOP:
          slider.cloneCount = 0;
          slider.cloneOffset = 0;
          // REVERSE:
          if (reverse) {
            arr = $.makeArray(slider.slides).reverse();
            slider.slides = $(arr);
            slider.container.empty().append(slider.slides);
          }
        }
        // INFINITE LOOP && !CAROUSEL:
        if (slider.vars.animationLoop && !carousel) {
          slider.cloneCount = 2;
          slider.cloneOffset = 1;
          // clear out old clones
          if (type !== "init") { slider.container.find('.clone').remove(); }
          slider.container.append(methods.uniqueID(slider.slides.first().clone().addClass('clone')).attr('aria-hidden', 'true'))
                          .prepend(methods.uniqueID(slider.slides.last().clone().addClass('clone')).attr('aria-hidden', 'true'));
        }
        slider.newSlides = $(slider.vars.selector, slider);

        sliderOffset = (reverse) ? slider.count - 1 - slider.currentSlide + slider.cloneOffset : slider.currentSlide + slider.cloneOffset;
        // VERTICAL:
        if (vertical && !carousel) {
          slider.container.height((slider.count + slider.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
          setTimeout(function(){
            slider.newSlides.css({"display": "block"});
            slider.doMath();
            slider.viewport.height(slider.h);
            slider.setProps(sliderOffset * slider.h, "init");
          }, (type === "init") ? 100 : 0);
        } else {
          slider.container.width((slider.count + slider.cloneCount) * 200 + "%");
          slider.setProps(sliderOffset * slider.computedW, "init");
          setTimeout(function(){
            slider.doMath();
            slider.newSlides.css({"width": slider.computedW, "marginRight" : slider.computedM, "float": "left", "display": "block"});
            // SMOOTH HEIGHT:
            if (slider.vars.smoothHeight) { methods.smoothHeight(); }
          }, (type === "init") ? 100 : 0);
        }
      } else { // FADE:
        slider.slides.css({"width": "100%", "float": "left", "marginRight": "-100%", "position": "relative"});
        if (type === "init") {
          if (!touch) {
            //slider.slides.eq(slider.currentSlide).fadeIn(slider.vars.animationSpeed, slider.vars.easing);
            if (slider.vars.fadeFirstSlide == false) {
              slider.slides.css({ "opacity": 0, "display": "block", "zIndex": 1 }).eq(slider.currentSlide).css({"zIndex": 2}).css({"opacity": 1});
            } else {
              slider.slides.css({ "opacity": 0, "display": "block", "zIndex": 1 }).eq(slider.currentSlide).css({"zIndex": 2}).animate({"opacity": 1},slider.vars.animationSpeed,slider.vars.easing);
            }
          } else {
            slider.slides.css({ "opacity": 0, "display": "block", "webkitTransition": "opacity " + slider.vars.animationSpeed / 1000 + "s ease", "zIndex": 1 }).eq(slider.currentSlide).css({ "opacity": 1, "zIndex": 2});
          }
        }
        // SMOOTH HEIGHT:
        if (slider.vars.smoothHeight) { methods.smoothHeight(); }
      }
      // !CAROUSEL:
      // CANDIDATE: active slide
      if (!carousel) { slider.slides.removeClass(namespace + "active-slide").eq(slider.currentSlide).addClass(namespace + "active-slide"); }

      //FlexSlider: init() Callback
      slider.vars.init(slider);
    };

    slider.doMath = function() {
      var slide = slider.slides.first(),
          slideMargin = slider.vars.itemMargin,
          minItems = slider.vars.minItems,
          maxItems = slider.vars.maxItems;

      slider.w = (slider.viewport===undefined) ? slider.width() : slider.viewport.width();
      slider.h = slide.height();
      slider.boxPadding = slide.outerWidth() - slide.width();

      // CAROUSEL:
      if (carousel) {
        slider.itemT = slider.vars.itemWidth + slideMargin;
        slider.itemM = slideMargin;
        slider.minW = (minItems) ? minItems * slider.itemT : slider.w;
        slider.maxW = (maxItems) ? (maxItems * slider.itemT) - slideMargin : slider.w;
        slider.itemW = (slider.minW > slider.w) ? (slider.w - (slideMargin * (minItems - 1)))/minItems :
                       (slider.maxW < slider.w) ? (slider.w - (slideMargin * (maxItems - 1)))/maxItems :
                       (slider.vars.itemWidth > slider.w) ? slider.w : slider.vars.itemWidth;

        //slider.visible = Math.floor(slider.w / slider.itemW); // -- removed by kach
        slider.visible = Math.floor((slider.itemT > slider.itemW ? slider.w + slider.itemM : slider.w)/(slider.itemT > slider.itemW ? slider.itemT : slider.itemW)); // ++ added by kach
        slider.move = (slider.vars.move > 0 && slider.vars.move < slider.visible ) ? slider.vars.move : slider.visible;
        slider.pagingCount = Math.ceil(((slider.count - slider.visible)/slider.move) + 1);
        slider.last =  slider.pagingCount - 1;
        slider.limit = (slider.pagingCount === 1) ? 0 :
                       (slider.vars.itemWidth > slider.w) ? (slider.itemW * (slider.count - 1)) + (slideMargin * (slider.count - 1)) : ((slider.itemW + slideMargin) * slider.count) - slider.w - slideMargin;
      } else {
        slider.itemW = slider.w;
        slider.itemM = slideMargin;
        slider.pagingCount = slider.count;
        slider.last = slider.count - 1;
      }
      slider.computedW = slider.itemW - slider.boxPadding;
      slider.computedM = slider.itemM;
    };

    slider.update = function(pos, action) {
      slider.doMath();

      // update currentSlide and slider.animatingTo if necessary
      if (!carousel) {
        if (pos < slider.currentSlide) {
          slider.currentSlide += 1;
        } else if (pos <= slider.currentSlide && pos !== 0) {
          slider.currentSlide -= 1;
        }
        slider.animatingTo = slider.currentSlide;
      }

      // update controlNav
      if (slider.vars.controlNav && !slider.manualControls) {
        if ((action === "add" && !carousel) || slider.pagingCount > slider.controlNav.length) {
          methods.controlNav.update("add");
        } else if ((action === "remove" && !carousel) || slider.pagingCount < slider.controlNav.length) {
          /*if (carousel && slider.currentSlide > slider.last) {
            slider.currentSlide -= 1;
            slider.animatingTo -= 1;
          }*/
          methods.controlNav.update("remove", slider.last);
        }
      }
      // update directionNav
      if (slider.vars.directionNav) { methods.directionNav.update(); }

    };

    slider.addSlide = function(obj, pos) {
      var $obj = $(obj);

      slider.count += 1;
      slider.last = slider.count - 1;

      // append new slide
      if (vertical && reverse) {
        (pos !== undefined) ? slider.slides.eq(slider.count - pos).after($obj) : slider.container.prepend($obj);
      } else {
        (pos !== undefined) ? slider.slides.eq(pos).before($obj) : slider.container.append($obj);
      }

      // update currentSlide, animatingTo, controlNav, and directionNav
      slider.update(pos, "add");

      // update slider.slides
      slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
      // re-setup the slider to accomdate new slide
      slider.setup();

      //FlexSlider: added() Callback
      slider.vars.added(slider);
    };
    slider.removeSlide = function(obj) {
      var pos = (isNaN(obj)) ? slider.slides.index($(obj)) : obj;

      // update count
      slider.count -= 1;
      slider.last = slider.count - 1;

      // remove slide
      if (isNaN(obj)) {
        $(obj, slider.slides).remove();
      } else {
        (vertical && reverse) ? slider.slides.eq(slider.last).remove() : slider.slides.eq(obj).remove();
      }

      // update currentSlide, animatingTo, controlNav, and directionNav
      slider.doMath();
      slider.update(pos, "remove");

      // update slider.slides
      slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
      // re-setup the slider to accomdate new slide
      slider.setup();

      // FlexSlider: removed() Callback
      slider.vars.removed(slider);
    };

    //FlexSlider: Initialize
    methods.init();
  };

  // Ensure the slider isn't focussed if the window loses focus.
  $( window ).blur( function ( e ) {
    focused = false;
  }).focus( function ( e ) {
    focused = true;
  });

  //FlexSlider: Default Settings
  $.flexslider.defaults = {
    namespace: "flex-",             //{NEW} String: Prefix string attached to the class of every element generated by the plugin
    selector: ".slides > li",       //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
    animation: "fade",              //String: Select your animation type, "fade" or "slide"
    easing: "swing",                //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
    direction: "horizontal",        //String: Select the sliding direction, "horizontal" or "vertical"
    reverse: false,                 //{NEW} Boolean: Reverse the animation direction
    animationLoop: true,            //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
    smoothHeight: false,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
    startAt: 0,                     //Integer: The slide that the slider should start on. Array notation (0 = first slide)
    slideshow: true,                //Boolean: Animate slider automatically
    slideshowSpeed: 7000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
    animationSpeed: 600,            //Integer: Set the speed of animations, in milliseconds
    initDelay: 0,                   //{NEW} Integer: Set an initialization delay, in milliseconds
    randomize: false,               //Boolean: Randomize slide order
    fadeFirstSlide: true,           //Boolean: Fade in the first slide when animation type is "fade"
    thumbCaptions: false,           //Boolean: Whether or not to put captions on thumbnails when using the "thumbnails" controlNav.

    // Usability features
    pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
    pauseOnHover: false,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
    pauseInvisible: true,       //{NEW} Boolean: Pause the slideshow when tab is invisible, resume when visible. Provides better UX, lower CPU usage.
    useCSS: true,                   //{NEW} Boolean: Slider will use CSS3 transitions if available
    touch: true,                    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
    video: false,                   //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches

    // Primary Controls
    controlNav: true,               //Boolean: Create navigation for paging control of each slide? Note: Leave true for manualControls usage
    directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
    prevText: "Previous",           //String: Set the text for the "previous" directionNav item
    nextText: "Next",               //String: Set the text for the "next" directionNav item

    // Secondary Navigation
    keyboard: true,                 //Boolean: Allow slider navigating via keyboard left/right keys
    multipleKeyboard: false,        //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
    mousewheel: false,              //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
    pausePlay: false,               //Boolean: Create pause/play dynamic element
    pauseText: "Pause",             //String: Set the text for the "pause" pausePlay item
    playText: "Play",               //String: Set the text for the "play" pausePlay item

    // Special properties
    controlsContainer: "",          //{UPDATED} jQuery Object/Selector: Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be $(".flexslider-container"). Property is ignored if given element is not found.
    manualControls: "",             //{UPDATED} jQuery Object/Selector: Declare custom control navigation. Examples would be $(".flex-control-nav li") or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
    customDirectionNav: "",         //{NEW} jQuery Object/Selector: Custom prev / next button. Must be two jQuery elements. In order to make the events work they have to have the classes "prev" and "next" (plus namespace)
    sync: "",                       //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
    asNavFor: "",                   //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider

    // Carousel Options
    itemWidth: 0,                   //{NEW} Integer: Box-model width of individual carousel items, including horizontal borders and padding.
    itemMargin: 0,                  //{NEW} Integer: Margin between carousel items.
    minItems: 1,                    //{NEW} Integer: Minimum number of carousel items that should be visible. Items will resize fluidly when below this.
    maxItems: 0,                    //{NEW} Integer: Maxmimum number of carousel items that should be visible. Items will resize fluidly when above this limit.
    move: 0,                        //{NEW} Integer: Number of carousel items that should move on animation. If 0, slider will move all visible items.
    allowOneSlide: true,           //{NEW} Boolean: Whether or not to allow a slider comprised of a single slide

    // Callback API
    start: function(){},            //Callback: function(slider) - Fires when the slider loads the first slide
    before: function(){},           //Callback: function(slider) - Fires asynchronously with each slider animation
    after: function(){},            //Callback: function(slider) - Fires after each slider animation completes
    end: function(){},              //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
    added: function(){},            //{NEW} Callback: function(slider) - Fires after a slide is added
    removed: function(){},           //{NEW} Callback: function(slider) - Fires after a slide is removed
    init: function() {}             //{NEW} Callback: function(slider) - Fires after the slider is initially setup
  };

  //FlexSlider: Plugin Function
  $.fn.flexslider = function(options) {
    if (options === undefined) { options = {}; }

    if (typeof options === "object") {
      return this.each(function() {
        var $this = $(this),
            selector = (options.selector) ? options.selector : ".slides > li",
            $slides = $this.find(selector);

      if ( ( $slides.length === 1 && options.allowOneSlide === false ) || $slides.length === 0 ) {
          $slides.fadeIn(400);
          if (options.start) { options.start($this); }
        } else if ($this.data('flexslider') === undefined) {
          new $.flexslider(this, options);
        }
      });
    } else {
      // Helper strings to quickly perform functions on the slider
      var $slider = $(this).data('flexslider');
      switch (options) {
        case "play": $slider.play(); break;
        case "pause": $slider.pause(); break;
        case "stop": $slider.stop(); break;
        case "next": $slider.flexAnimate($slider.getTarget("next"), true); break;
        case "prev":
        case "previous": $slider.flexAnimate($slider.getTarget("prev"), true); break;
        default: if (typeof options === "number") { $slider.flexAnimate(options, true); }
      }
    }
  };
})(jQuery);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:68:"/bitrix/templates/aspro_next/vendor/js/moment.min.js?154384449034436";s:6:"source";s:52:"/bitrix/templates/aspro_next/vendor/js/moment.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
//! moment.js
//! version : 2.10.3
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function a(){return Dc.apply(null,arguments)}function b(a){Dc=a}function c(a){return"[object Array]"===Object.prototype.toString.call(a)}function d(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function e(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function f(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function g(a,b){for(var c in b)f(b,c)&&(a[c]=b[c]);return f(b,"toString")&&(a.toString=b.toString),f(b,"valueOf")&&(a.valueOf=b.valueOf),a}function h(a,b,c,d){return za(a,b,c,d,!0).utc()}function i(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function j(a){return null==a._pf&&(a._pf=i()),a._pf}function k(a){if(null==a._isValid){var b=j(a);a._isValid=!isNaN(a._d.getTime())&&b.overflow<0&&!b.empty&&!b.invalidMonth&&!b.nullInput&&!b.invalidFormat&&!b.userInvalidated,a._strict&&(a._isValid=a._isValid&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour)}return a._isValid}function l(a){var b=h(0/0);return null!=a?g(j(b),a):j(b).userInvalidated=!0,b}function m(a,b){var c,d,e;if("undefined"!=typeof b._isAMomentObject&&(a._isAMomentObject=b._isAMomentObject),"undefined"!=typeof b._i&&(a._i=b._i),"undefined"!=typeof b._f&&(a._f=b._f),"undefined"!=typeof b._l&&(a._l=b._l),"undefined"!=typeof b._strict&&(a._strict=b._strict),"undefined"!=typeof b._tzm&&(a._tzm=b._tzm),"undefined"!=typeof b._isUTC&&(a._isUTC=b._isUTC),"undefined"!=typeof b._offset&&(a._offset=b._offset),"undefined"!=typeof b._pf&&(a._pf=j(b)),"undefined"!=typeof b._locale&&(a._locale=b._locale),Fc.length>0)for(c in Fc)d=Fc[c],e=b[d],"undefined"!=typeof e&&(a[d]=e);return a}function n(b){m(this,b),this._d=new Date(+b._d),Gc===!1&&(Gc=!0,a.updateOffset(this),Gc=!1)}function o(a){return a instanceof n||null!=a&&null!=a._isAMomentObject}function p(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function q(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&p(a[d])!==p(b[d]))&&g++;return g+f}function r(){}function s(a){return a?a.toLowerCase().replace("_","-"):a}function t(a){for(var b,c,d,e,f=0;f<a.length;){for(e=s(a[f]).split("-"),b=e.length,c=s(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=u(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&q(e,c,!0)>=b-1)break;b--}f++}return null}function u(a){var b=null;if(!Hc[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=Ec._abbr,require("./locale/"+a),v(b)}catch(c){}return Hc[a]}function v(a,b){var c;return a&&(c="undefined"==typeof b?x(a):w(a,b),c&&(Ec=c)),Ec._abbr}function w(a,b){return null!==b?(b.abbr=a,Hc[a]||(Hc[a]=new r),Hc[a].set(b),v(a),Hc[a]):(delete Hc[a],null)}function x(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return Ec;if(!c(a)){if(b=u(a))return b;a=[a]}return t(a)}function y(a,b){var c=a.toLowerCase();Ic[c]=Ic[c+"s"]=Ic[b]=a}function z(a){return"string"==typeof a?Ic[a]||Ic[a.toLowerCase()]:void 0}function A(a){var b,c,d={};for(c in a)f(a,c)&&(b=z(c),b&&(d[b]=a[c]));return d}function B(b,c){return function(d){return null!=d?(D(this,b,d),a.updateOffset(this,c),this):C(this,b)}}function C(a,b){return a._d["get"+(a._isUTC?"UTC":"")+b]()}function D(a,b,c){return a._d["set"+(a._isUTC?"UTC":"")+b](c)}function E(a,b){var c;if("object"==typeof a)for(c in a)this.set(c,a[c]);else if(a=z(a),"function"==typeof this[a])return this[a](b);return this}function F(a,b,c){for(var d=""+Math.abs(a),e=a>=0;d.length<b;)d="0"+d;return(e?c?"+":"":"-")+d}function G(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(Mc[a]=e),b&&(Mc[b[0]]=function(){return F(e.apply(this,arguments),b[1],b[2])}),c&&(Mc[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function H(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function I(a){var b,c,d=a.match(Jc);for(b=0,c=d.length;c>b;b++)Mc[d[b]]?d[b]=Mc[d[b]]:d[b]=H(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function J(a,b){return a.isValid()?(b=K(b,a.localeData()),Lc[b]||(Lc[b]=I(b)),Lc[b](a)):a.localeData().invalidDate()}function K(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Kc.lastIndex=0;d>=0&&Kc.test(a);)a=a.replace(Kc,c),Kc.lastIndex=0,d-=1;return a}function L(a,b,c){_c[a]="function"==typeof b?b:function(a){return a&&c?c:b}}function M(a,b){return f(_c,a)?_c[a](b._strict,b._locale):new RegExp(N(a))}function N(a){return a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function O(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),"number"==typeof b&&(d=function(a,c){c[b]=p(a)}),c=0;c<a.length;c++)ad[a[c]]=d}function P(a,b){O(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function Q(a,b,c){null!=b&&f(ad,a)&&ad[a](b,c._a,c,a)}function R(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function S(a){return this._months[a.month()]}function T(a){return this._monthsShort[a.month()]}function U(a,b,c){var d,e,f;for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;12>d;d++){if(e=h([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}function V(a,b){var c;return"string"==typeof b&&(b=a.localeData().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),R(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a)}function W(b){return null!=b?(V(this,b),a.updateOffset(this,!0),this):C(this,"Month")}function X(){return R(this.year(),this.month())}function Y(a){var b,c=a._a;return c&&-2===j(a).overflow&&(b=c[cd]<0||c[cd]>11?cd:c[dd]<1||c[dd]>R(c[bd],c[cd])?dd:c[ed]<0||c[ed]>24||24===c[ed]&&(0!==c[fd]||0!==c[gd]||0!==c[hd])?ed:c[fd]<0||c[fd]>59?fd:c[gd]<0||c[gd]>59?gd:c[hd]<0||c[hd]>999?hd:-1,j(a)._overflowDayOfYear&&(bd>b||b>dd)&&(b=dd),j(a).overflow=b),a}function Z(b){a.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)}function $(a,b){var c=!0,d=a+"\n"+(new Error).stack;return g(function(){return c&&(Z(d),c=!1),b.apply(this,arguments)},b)}function _(a,b){kd[a]||(Z(b),kd[a]=!0)}function aa(a){var b,c,d=a._i,e=ld.exec(d);if(e){for(j(a).iso=!0,b=0,c=md.length;c>b;b++)if(md[b][1].exec(d)){a._f=md[b][0]+(e[6]||" ");break}for(b=0,c=nd.length;c>b;b++)if(nd[b][1].exec(d)){a._f+=nd[b][0];break}d.match(Yc)&&(a._f+="Z"),ta(a)}else a._isValid=!1}function ba(b){var c=od.exec(b._i);return null!==c?void(b._d=new Date(+c[1])):(aa(b),void(b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b))))}function ca(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function da(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function ea(a){return fa(a)?366:365}function fa(a){return a%4===0&&a%100!==0||a%400===0}function ga(){return fa(this.year())}function ha(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=Aa(a).add(f,"d"),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function ia(a){return ha(a,this._week.dow,this._week.doy).week}function ja(){return this._week.dow}function ka(){return this._week.doy}function la(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function ma(a){var b=ha(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}function na(a,b,c,d,e){var f,g,h=da(a,0,1).getUTCDay();return h=0===h?7:h,c=null!=c?c:e,f=e-h+(h>d?7:0)-(e>h?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:ea(a-1)+g}}function oa(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function pa(a,b,c){return null!=a?a:null!=b?b:c}function qa(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function ra(a){var b,c,d,e,f=[];if(!a._d){for(d=qa(a),a._w&&null==a._a[dd]&&null==a._a[cd]&&sa(a),a._dayOfYear&&(e=pa(a._a[bd],d[bd]),a._dayOfYear>ea(e)&&(j(a)._overflowDayOfYear=!0),c=da(e,0,a._dayOfYear),a._a[cd]=c.getUTCMonth(),a._a[dd]=c.getUTCDate()),b=0;3>b&&null==a._a[b];++b)a._a[b]=f[b]=d[b];for(;7>b;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];24===a._a[ed]&&0===a._a[fd]&&0===a._a[gd]&&0===a._a[hd]&&(a._nextDay=!0,a._a[ed]=0),a._d=(a._useUTC?da:ca).apply(null,f),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[ed]=24)}}function sa(a){var b,c,d,e,f,g,h;b=a._w,null!=b.GG||null!=b.W||null!=b.E?(f=1,g=4,c=pa(b.GG,a._a[bd],ha(Aa(),1,4).year),d=pa(b.W,1),e=pa(b.E,1)):(f=a._locale._week.dow,g=a._locale._week.doy,c=pa(b.gg,a._a[bd],ha(Aa(),f,g).year),d=pa(b.w,1),null!=b.d?(e=b.d,f>e&&++d):e=null!=b.e?b.e+f:f),h=na(c,d,e,g,f),a._a[bd]=h.year,a._dayOfYear=h.dayOfYear}function ta(b){if(b._f===a.ISO_8601)return void aa(b);b._a=[],j(b).empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,k=0;for(e=K(b._f,b._locale).match(Jc)||[],c=0;c<e.length;c++)f=e[c],d=(h.match(M(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&j(b).unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),k+=d.length),Mc[f]?(d?j(b).empty=!1:j(b).unusedTokens.push(f),Q(f,d,b)):b._strict&&!d&&j(b).unusedTokens.push(f);j(b).charsLeftOver=i-k,h.length>0&&j(b).unusedInput.push(h),j(b).bigHour===!0&&b._a[ed]<=12&&b._a[ed]>0&&(j(b).bigHour=void 0),b._a[ed]=ua(b._locale,b._a[ed],b._meridiem),ra(b),Y(b)}function ua(a,b,c){var d;return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&12>b&&(b+=12),d||12!==b||(b=0),b):b}function va(a){var b,c,d,e,f;if(0===a._f.length)return j(a).invalidFormat=!0,void(a._d=new Date(0/0));for(e=0;e<a._f.length;e++)f=0,b=m({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._f=a._f[e],ta(b),k(b)&&(f+=j(b).charsLeftOver,f+=10*j(b).unusedTokens.length,j(b).score=f,(null==d||d>f)&&(d=f,c=b));g(a,c||b)}function wa(a){if(!a._d){var b=A(a._i);a._a=[b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],ra(a)}}function xa(a){var b,e=a._i,f=a._f;return a._locale=a._locale||x(a._l),null===e||void 0===f&&""===e?l({nullInput:!0}):("string"==typeof e&&(a._i=e=a._locale.preparse(e)),o(e)?new n(Y(e)):(c(f)?va(a):f?ta(a):d(e)?a._d=e:ya(a),b=new n(Y(a)),b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b))}function ya(b){var f=b._i;void 0===f?b._d=new Date:d(f)?b._d=new Date(+f):"string"==typeof f?ba(b):c(f)?(b._a=e(f.slice(0),function(a){return parseInt(a,10)}),ra(b)):"object"==typeof f?wa(b):"number"==typeof f?b._d=new Date(f):a.createFromInputFallback(b)}function za(a,b,c,d,e){var f={};return"boolean"==typeof c&&(d=c,c=void 0),f._isAMomentObject=!0,f._useUTC=f._isUTC=e,f._l=c,f._i=a,f._f=b,f._strict=d,xa(f)}function Aa(a,b,c,d){return za(a,b,c,d,!1)}function Ba(a,b){var d,e;if(1===b.length&&c(b[0])&&(b=b[0]),!b.length)return Aa();for(d=b[0],e=1;e<b.length;++e)b[e][a](d)&&(d=b[e]);return d}function Ca(){var a=[].slice.call(arguments,0);return Ba("isBefore",a)}function Da(){var a=[].slice.call(arguments,0);return Ba("isAfter",a)}function Ea(a){var b=A(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=x(),this._bubble()}function Fa(a){return a instanceof Ea}function Ga(a,b){G(a,0,0,function(){var a=this.utcOffset(),c="+";return 0>a&&(a=-a,c="-"),c+F(~~(a/60),2)+b+F(~~a%60,2)})}function Ha(a){var b=(a||"").match(Yc)||[],c=b[b.length-1]||[],d=(c+"").match(td)||["-",0,0],e=+(60*d[1])+p(d[2]);return"+"===d[0]?e:-e}function Ia(b,c){var e,f;return c._isUTC?(e=c.clone(),f=(o(b)||d(b)?+b:+Aa(b))-+e,e._d.setTime(+e._d+f),a.updateOffset(e,!1),e):Aa(b).local();return c._isUTC?Aa(b).zone(c._offset||0):Aa(b).local()}function Ja(a){return 15*-Math.round(a._d.getTimezoneOffset()/15)}function Ka(b,c){var d,e=this._offset||0;return null!=b?("string"==typeof b&&(b=Ha(b)),Math.abs(b)<16&&(b=60*b),!this._isUTC&&c&&(d=Ja(this)),this._offset=b,this._isUTC=!0,null!=d&&this.add(d,"m"),e!==b&&(!c||this._changeInProgress?$a(this,Va(b-e,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?e:Ja(this)}function La(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function Ma(a){return this.utcOffset(0,a)}function Na(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Ja(this),"m")),this}function Oa(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(Ha(this._i)),this}function Pa(a){return a=a?Aa(a).utcOffset():0,(this.utcOffset()-a)%60===0}function Qa(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Ra(){if(this._a){var a=this._isUTC?h(this._a):Aa(this._a);return this.isValid()&&q(this._a,a.toArray())>0}return!1}function Sa(){return!this._isUTC}function Ta(){return this._isUTC}function Ua(){return this._isUTC&&0===this._offset}function Va(a,b){var c,d,e,g=a,h=null;return Fa(a)?g={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(g={},b?g[b]=a:g.milliseconds=a):(h=ud.exec(a))?(c="-"===h[1]?-1:1,g={y:0,d:p(h[dd])*c,h:p(h[ed])*c,m:p(h[fd])*c,s:p(h[gd])*c,ms:p(h[hd])*c}):(h=vd.exec(a))?(c="-"===h[1]?-1:1,g={y:Wa(h[2],c),M:Wa(h[3],c),d:Wa(h[4],c),h:Wa(h[5],c),m:Wa(h[6],c),s:Wa(h[7],c),w:Wa(h[8],c)}):null==g?g={}:"object"==typeof g&&("from"in g||"to"in g)&&(e=Ya(Aa(g.from),Aa(g.to)),g={},g.ms=e.milliseconds,g.M=e.months),d=new Ea(g),Fa(a)&&f(a,"_locale")&&(d._locale=a._locale),d}function Wa(a,b){var c=a&&parseFloat(a.replace(",","."));return(isNaN(c)?0:c)*b}function Xa(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function Ya(a,b){var c;return b=Ia(b,a),a.isBefore(b)?c=Xa(a,b):(c=Xa(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c}function Za(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(_(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=Va(c,d),$a(this,e,a),this}}function $a(b,c,d,e){var f=c._milliseconds,g=c._days,h=c._months;e=null==e?!0:e,f&&b._d.setTime(+b._d+f*d),g&&D(b,"Date",C(b,"Date")+g*d),h&&V(b,C(b,"Month")+h*d),e&&a.updateOffset(b,g||h)}function _a(a){var b=a||Aa(),c=Ia(b,this).startOf("day"),d=this.diff(c,"days",!0),e=-6>d?"sameElse":-1>d?"lastWeek":0>d?"lastDay":1>d?"sameDay":2>d?"nextDay":7>d?"nextWeek":"sameElse";return this.format(this.localeData().calendar(e,this,Aa(b)))}function ab(){return new n(this)}function bb(a,b){var c;return b=z("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=o(a)?a:Aa(a),+this>+a):(c=o(a)?+a:+Aa(a),c<+this.clone().startOf(b))}function cb(a,b){var c;return b=z("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=o(a)?a:Aa(a),+a>+this):(c=o(a)?+a:+Aa(a),+this.clone().endOf(b)<c)}function db(a,b,c){return this.isAfter(a,c)&&this.isBefore(b,c)}function eb(a,b){var c;return b=z(b||"millisecond"),"millisecond"===b?(a=o(a)?a:Aa(a),+this===+a):(c=+Aa(a),+this.clone().startOf(b)<=c&&c<=+this.clone().endOf(b))}function fb(a){return 0>a?Math.ceil(a):Math.floor(a)}function gb(a,b,c){var d,e,f=Ia(a,this),g=6e4*(f.utcOffset()-this.utcOffset());return b=z(b),"year"===b||"month"===b||"quarter"===b?(e=hb(this,f),"quarter"===b?e/=3:"year"===b&&(e/=12)):(d=this-f,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-g)/864e5:"week"===b?(d-g)/6048e5:d),c?e:fb(e)}function hb(a,b){var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),f=a.clone().add(e,"months");return 0>b-f?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)}function ib(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function jb(){var a=this.clone().utc();return 0<a.year()&&a.year()<=9999?"function"==typeof Date.prototype.toISOString?this.toDate().toISOString():J(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):J(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function kb(b){var c=J(this,b||a.defaultFormat);return this.localeData().postformat(c)}function lb(a,b){return this.isValid()?Va({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function mb(a){return this.from(Aa(),a)}function nb(a,b){return this.isValid()?Va({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function ob(a){return this.to(Aa(),a)}function pb(a){var b;return void 0===a?this._locale._abbr:(b=x(a),null!=b&&(this._locale=b),this)}function qb(){return this._locale}function rb(a){switch(a=z(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function sb(a){return a=z(a),void 0===a||"millisecond"===a?this:this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms")}function tb(){return+this._d-6e4*(this._offset||0)}function ub(){return Math.floor(+this/1e3)}function vb(){return this._offset?new Date(+this):this._d}function wb(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function xb(){return k(this)}function yb(){return g({},j(this))}function zb(){return j(this).overflow}function Ab(a,b){G(0,[a,a.length],0,b)}function Bb(a,b,c){return ha(Aa([a,11,31+b-c]),b,c).week}function Cb(a){var b=ha(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==a?b:this.add(a-b,"y")}function Db(a){var b=ha(this,1,4).year;return null==a?b:this.add(a-b,"y")}function Eb(){return Bb(this.year(),1,4)}function Fb(){var a=this.localeData()._week;return Bb(this.year(),a.dow,a.doy)}function Gb(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}function Hb(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function Ib(a){return this._weekdays[a.day()]}function Jb(a){return this._weekdaysShort[a.day()]}function Kb(a){return this._weekdaysMin[a.day()]}function Lb(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=Aa([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b}function Mb(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=Hb(a,this.localeData()),this.add(a-b,"d")):b}function Nb(a){var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function Ob(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)}function Pb(a,b){G(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}function Qb(a,b){return b._meridiemParse}function Rb(a){return"p"===(a+"").toLowerCase().charAt(0)}function Sb(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function Tb(a){G(0,[a,3],0,"millisecond")}function Ub(){return this._isUTC?"UTC":""}function Vb(){return this._isUTC?"Coordinated Universal Time":""}function Wb(a){return Aa(1e3*a)}function Xb(){return Aa.apply(null,arguments).parseZone()}function Yb(a,b,c){var d=this._calendar[a];return"function"==typeof d?d.call(b,c):d}function Zb(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b}function $b(){return this._invalidDate}function _b(a){return this._ordinal.replace("%d",a)}function ac(a){return a}function bc(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)}function cc(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)}function dc(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b;this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function ec(a,b,c,d){var e=x(),f=h().set(d,b);return e[c](f,a)}function fc(a,b,c,d,e){if("number"==typeof a&&(b=a,a=void 0),a=a||"",null!=b)return ec(a,b,c,e);var f,g=[];for(f=0;d>f;f++)g[f]=ec(a,f,c,e);return g}function gc(a,b){return fc(a,b,"months",12,"month")}function hc(a,b){return fc(a,b,"monthsShort",12,"month")}function ic(a,b){return fc(a,b,"weekdays",7,"day")}function jc(a,b){return fc(a,b,"weekdaysShort",7,"day")}function kc(a,b){return fc(a,b,"weekdaysMin",7,"day")}function lc(){var a=this._data;return this._milliseconds=Rd(this._milliseconds),this._days=Rd(this._days),this._months=Rd(this._months),a.milliseconds=Rd(a.milliseconds),a.seconds=Rd(a.seconds),a.minutes=Rd(a.minutes),a.hours=Rd(a.hours),a.months=Rd(a.months),a.years=Rd(a.years),this}function mc(a,b,c,d){var e=Va(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}function nc(a,b){return mc(this,a,b,1)}function oc(a,b){return mc(this,a,b,-1)}function pc(){var a,b,c,d=this._milliseconds,e=this._days,f=this._months,g=this._data,h=0;return g.milliseconds=d%1e3,a=fb(d/1e3),g.seconds=a%60,b=fb(a/60),g.minutes=b%60,c=fb(b/60),g.hours=c%24,e+=fb(c/24),h=fb(qc(e)),e-=fb(rc(h)),f+=fb(e/30),e%=30,h+=fb(f/12),f%=12,g.days=e,g.months=f,g.years=h,this}function qc(a){return 400*a/146097}function rc(a){return 146097*a/400}function sc(a){var b,c,d=this._milliseconds;if(a=z(a),"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+12*qc(b),"month"===a?c:c/12;switch(b=this._days+Math.round(rc(this._months/12)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;case"millisecond":return Math.floor(864e5*b)+d;default:throw new Error("Unknown unit "+a)}}function tc(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*p(this._months/12)}function uc(a){return function(){return this.as(a)}}function vc(a){return a=z(a),this[a+"s"]()}function wc(a){return function(){return this._data[a]}}function xc(){return fb(this.days()/7)}function yc(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function zc(a,b,c){var d=Va(a).abs(),e=fe(d.as("s")),f=fe(d.as("m")),g=fe(d.as("h")),h=fe(d.as("d")),i=fe(d.as("M")),j=fe(d.as("y")),k=e<ge.s&&["s",e]||1===f&&["m"]||f<ge.m&&["mm",f]||1===g&&["h"]||g<ge.h&&["hh",g]||1===h&&["d"]||h<ge.d&&["dd",h]||1===i&&["M"]||i<ge.M&&["MM",i]||1===j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,yc.apply(null,k)}function Ac(a,b){return void 0===ge[a]?!1:void 0===b?ge[a]:(ge[a]=b,!0)}function Bc(a){var b=this.localeData(),c=zc(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function Cc(){var a=he(this.years()),b=he(this.months()),c=he(this.days()),d=he(this.hours()),e=he(this.minutes()),f=he(this.seconds()+this.milliseconds()/1e3),g=this.asSeconds();return g?(0>g?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"}var Dc,Ec,Fc=a.momentProperties=[],Gc=!1,Hc={},Ic={},Jc=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,Kc=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Lc={},Mc={},Nc=/\d/,Oc=/\d\d/,Pc=/\d{3}/,Qc=/\d{4}/,Rc=/[+-]?\d{6}/,Sc=/\d\d?/,Tc=/\d{1,3}/,Uc=/\d{1,4}/,Vc=/[+-]?\d{1,6}/,Wc=/\d+/,Xc=/[+-]?\d+/,Yc=/Z|[+-]\d\d:?\d\d/gi,Zc=/[+-]?\d+(\.\d{1,3})?/,$c=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,_c={},ad={},bd=0,cd=1,dd=2,ed=3,fd=4,gd=5,hd=6;G("M",["MM",2],"Mo",function(){return this.month()+1}),G("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),G("MMMM",0,0,function(a){return this.localeData().months(this,a)}),y("month","M"),L("M",Sc),L("MM",Sc,Oc),L("MMM",$c),L("MMMM",$c),O(["M","MM"],function(a,b){b[cd]=p(a)-1}),O(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);null!=e?b[cd]=e:j(c).invalidMonth=a});var id="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),jd="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),kd={};a.suppressDeprecationWarnings=!1;var ld=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,md=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],nd=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],od=/^\/?Date\((\-?\d+)/i;a.createFromInputFallback=$("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),G(0,["YY",2],0,function(){return this.year()%100}),G(0,["YYYY",4],0,"year"),G(0,["YYYYY",5],0,"year"),G(0,["YYYYYY",6,!0],0,"year"),y("year","y"),L("Y",Xc),L("YY",Sc,Oc),L("YYYY",Uc,Qc),L("YYYYY",Vc,Rc),L("YYYYYY",Vc,Rc),O(["YYYY","YYYYY","YYYYYY"],bd),O("YY",function(b,c){c[bd]=a.parseTwoDigitYear(b)}),a.parseTwoDigitYear=function(a){return p(a)+(p(a)>68?1900:2e3)};var pd=B("FullYear",!1);G("w",["ww",2],"wo","week"),G("W",["WW",2],"Wo","isoWeek"),y("week","w"),y("isoWeek","W"),L("w",Sc),L("ww",Sc,Oc),L("W",Sc),L("WW",Sc,Oc),P(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=p(a)});var qd={dow:0,doy:6};G("DDD",["DDDD",3],"DDDo","dayOfYear"),y("dayOfYear","DDD"),L("DDD",Tc),L("DDDD",Pc),O(["DDD","DDDD"],function(a,b,c){c._dayOfYear=p(a)}),a.ISO_8601=function(){};var rd=$("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(){var a=Aa.apply(null,arguments);return this>a?this:a}),sd=$("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(){var a=Aa.apply(null,arguments);return a>this?this:a});Ga("Z",":"),Ga("ZZ",""),L("Z",Yc),L("ZZ",Yc),O(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=Ha(a)});var td=/([\+\-]|\d\d)/gi;a.updateOffset=function(){};var ud=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,vd=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;Va.fn=Ea.prototype;var wd=Za(1,"add"),xd=Za(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";var yd=$("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});G(0,["gg",2],0,function(){return this.weekYear()%100}),G(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Ab("gggg","weekYear"),Ab("ggggg","weekYear"),Ab("GGGG","isoWeekYear"),Ab("GGGGG","isoWeekYear"),y("weekYear","gg"),y("isoWeekYear","GG"),L("G",Xc),L("g",Xc),L("GG",Sc,Oc),L("gg",Sc,Oc),L("GGGG",Uc,Qc),L("gggg",Uc,Qc),L("GGGGG",Vc,Rc),L("ggggg",Vc,Rc),P(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=p(a)}),P(["gg","GG"],function(b,c,d,e){c[e]=a.parseTwoDigitYear(b)}),G("Q",0,0,"quarter"),y("quarter","Q"),L("Q",Nc),O("Q",function(a,b){b[cd]=3*(p(a)-1)}),G("D",["DD",2],"Do","date"),y("date","D"),L("D",Sc),L("DD",Sc,Oc),L("Do",function(a,b){return a?b._ordinalParse:b._ordinalParseLenient}),O(["D","DD"],dd),O("Do",function(a,b){b[dd]=p(a.match(Sc)[0],10)});var zd=B("Date",!0);G("d",0,"do","day"),G("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),G("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),G("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),G("e",0,0,"weekday"),G("E",0,0,"isoWeekday"),y("day","d"),y("weekday","e"),y("isoWeekday","E"),L("d",Sc),L("e",Sc),L("E",Sc),L("dd",$c),L("ddd",$c),L("dddd",$c),P(["dd","ddd","dddd"],function(a,b,c){var d=c._locale.weekdaysParse(a);null!=d?b.d=d:j(c).invalidWeekday=a}),P(["d","e","E"],function(a,b,c,d){b[d]=p(a)});var Ad="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Bd="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Cd="Su_Mo_Tu_We_Th_Fr_Sa".split("_");G("H",["HH",2],0,"hour"),G("h",["hh",2],0,function(){return this.hours()%12||12}),Pb("a",!0),Pb("A",!1),y("hour","h"),L("a",Qb),L("A",Qb),L("H",Sc),L("h",Sc),L("HH",Sc,Oc),L("hh",Sc,Oc),O(["H","HH"],ed),O(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),O(["h","hh"],function(a,b,c){b[ed]=p(a),j(c).bigHour=!0});var Dd=/[ap]\.?m?\.?/i,Ed=B("Hours",!0);G("m",["mm",2],0,"minute"),y("minute","m"),L("m",Sc),L("mm",Sc,Oc),O(["m","mm"],fd);var Fd=B("Minutes",!1);G("s",["ss",2],0,"second"),y("second","s"),L("s",Sc),L("ss",Sc,Oc),O(["s","ss"],gd);var Gd=B("Seconds",!1);G("S",0,0,function(){return~~(this.millisecond()/100)}),G(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),Tb("SSS"),Tb("SSSS"),y("millisecond","ms"),L("S",Tc,Nc),L("SS",Tc,Oc),L("SSS",Tc,Pc),L("SSSS",Wc),O(["S","SS","SSS","SSSS"],function(a,b){b[hd]=p(1e3*("0."+a))});var Hd=B("Milliseconds",!1);G("z",0,0,"zoneAbbr"),G("zz",0,0,"zoneName");var Id=n.prototype;Id.add=wd,Id.calendar=_a,Id.clone=ab,Id.diff=gb,Id.endOf=sb,Id.format=kb,Id.from=lb,Id.fromNow=mb,Id.to=nb,Id.toNow=ob,Id.get=E,Id.invalidAt=zb,Id.isAfter=bb,Id.isBefore=cb,Id.isBetween=db,Id.isSame=eb,Id.isValid=xb,Id.lang=yd,Id.locale=pb,Id.localeData=qb,Id.max=sd,Id.min=rd,Id.parsingFlags=yb,Id.set=E,Id.startOf=rb,Id.subtract=xd,Id.toArray=wb,Id.toDate=vb,Id.toISOString=jb,Id.toJSON=jb,Id.toString=ib,Id.unix=ub,Id.valueOf=tb,Id.year=pd,Id.isLeapYear=ga,Id.weekYear=Cb,Id.isoWeekYear=Db,Id.quarter=Id.quarters=Gb,Id.month=W,Id.daysInMonth=X,Id.week=Id.weeks=la,Id.isoWeek=Id.isoWeeks=ma,Id.weeksInYear=Fb,Id.isoWeeksInYear=Eb,Id.date=zd,Id.day=Id.days=Mb,Id.weekday=Nb,Id.isoWeekday=Ob,Id.dayOfYear=oa,Id.hour=Id.hours=Ed,Id.minute=Id.minutes=Fd,Id.second=Id.seconds=Gd,Id.millisecond=Id.milliseconds=Hd,Id.utcOffset=Ka,Id.utc=Ma,Id.local=Na,Id.parseZone=Oa,Id.hasAlignedHourOffset=Pa,Id.isDST=Qa,Id.isDSTShifted=Ra,Id.isLocal=Sa,Id.isUtcOffset=Ta,Id.isUtc=Ua,Id.isUTC=Ua,Id.zoneAbbr=Ub,Id.zoneName=Vb,Id.dates=$("dates accessor is deprecated. Use date instead.",zd),Id.months=$("months accessor is deprecated. Use month instead",W),Id.years=$("years accessor is deprecated. Use year instead",pd),Id.zone=$("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",La);var Jd=Id,Kd={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Ld={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM D, YYYY LT"},Md="Invalid date",Nd="%d",Od=/\d{1,2}/,Pd={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",
hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Qd=r.prototype;Qd._calendar=Kd,Qd.calendar=Yb,Qd._longDateFormat=Ld,Qd.longDateFormat=Zb,Qd._invalidDate=Md,Qd.invalidDate=$b,Qd._ordinal=Nd,Qd.ordinal=_b,Qd._ordinalParse=Od,Qd.preparse=ac,Qd.postformat=ac,Qd._relativeTime=Pd,Qd.relativeTime=bc,Qd.pastFuture=cc,Qd.set=dc,Qd.months=S,Qd._months=id,Qd.monthsShort=T,Qd._monthsShort=jd,Qd.monthsParse=U,Qd.week=ia,Qd._week=qd,Qd.firstDayOfYear=ka,Qd.firstDayOfWeek=ja,Qd.weekdays=Ib,Qd._weekdays=Ad,Qd.weekdaysMin=Kb,Qd._weekdaysMin=Cd,Qd.weekdaysShort=Jb,Qd._weekdaysShort=Bd,Qd.weekdaysParse=Lb,Qd.isPM=Rb,Qd._meridiemParse=Dd,Qd.meridiem=Sb,v("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===p(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),a.lang=$("moment.lang is deprecated. Use moment.locale instead.",v),a.langData=$("moment.langData is deprecated. Use moment.localeData instead.",x);var Rd=Math.abs,Sd=uc("ms"),Td=uc("s"),Ud=uc("m"),Vd=uc("h"),Wd=uc("d"),Xd=uc("w"),Yd=uc("M"),Zd=uc("y"),$d=wc("milliseconds"),_d=wc("seconds"),ae=wc("minutes"),be=wc("hours"),ce=wc("days"),de=wc("months"),ee=wc("years"),fe=Math.round,ge={s:45,m:45,h:22,d:26,M:11},he=Math.abs,ie=Ea.prototype;ie.abs=lc,ie.add=nc,ie.subtract=oc,ie.as=sc,ie.asMilliseconds=Sd,ie.asSeconds=Td,ie.asMinutes=Ud,ie.asHours=Vd,ie.asDays=Wd,ie.asWeeks=Xd,ie.asMonths=Yd,ie.asYears=Zd,ie.valueOf=tc,ie._bubble=pc,ie.get=vc,ie.milliseconds=$d,ie.seconds=_d,ie.minutes=ae,ie.hours=be,ie.days=ce,ie.weeks=xc,ie.months=de,ie.years=ee,ie.humanize=Bc,ie.toISOString=Cc,ie.toString=Cc,ie.toJSON=Cc,ie.locale=pb,ie.localeData=qb,ie.toIsoString=$("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Cc),ie.lang=yd,G("X",0,0,"unix"),G("x",0,0,"valueOf"),L("x",Xc),L("X",Zc),O("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),O("x",function(a,b,c){c._d=new Date(p(a))}),a.version="2.10.3",b(Aa),a.fn=Jd,a.min=Ca,a.max=Da,a.utc=h,a.unix=Wb,a.months=gc,a.isDate=d,a.locale=v,a.invalid=l,a.duration=Va,a.isMoment=o,a.weekdays=ic,a.parseZone=Xb,a.localeData=x,a.isDuration=Fa,a.monthsShort=hc,a.weekdaysMin=kc,a.defineLocale=w,a.weekdaysShort=jc,a.normalizeUnits=z,a.relativeTimeThreshold=Ac;var je=a;return je});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:67:"/bitrix/templates/aspro_next/vendor/js/footable.js?1543844490268108";s:6:"source";s:50:"/bitrix/templates/aspro_next/vendor/js/footable.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
* FooTable v3 - FooTable is a jQuery plugin that aims to make HTML tables on smaller devices look awesome.
* @version 3.1.5
* @link http://fooplugins.com
* @copyright Steven Usher & Brad Vincent 2015
* @license Released under the GPLv3 license.
*/
(function($, F){
	// add in console we use in case it's missing
	window.console = window.console || { log:function(){}, error:function(){} };

	/**
	 * The jQuery plugin initializer.
	 * @function jQuery.fn.footable
	 * @param {(object|FooTable.Defaults)} [options] - The options to initialize the plugin with.
	 * @param {function} [ready] - A callback function to execute for each initialized plugin.
	 * @returns {jQuery}
	 */
	$.fn.footable = function (options, ready) {
		options = options || {};
		// make sure we only work with tables
		return this.filter('table').each(function (i, tbl) {
			F.init(tbl, options, ready);
		});
	};

	var debug_defaults = {
		events: []
	};
	F.__debug__ = JSON.parse(localStorage.getItem('footable_debug')) || false;
	F.__debug_options__ = JSON.parse(localStorage.getItem('footable_debug_options')) || debug_defaults;

	/**
	 * Gets or sets the internal debug variable which enables some additional logging to the console.
	 * When enabled this value is stored in the localStorage so it can persist across page reloads.
	 * @param {boolean} value - Whether or not to enable additional logging.
	 * @param {object} [options] - Any debug specific options.
	 * @returns {(boolean|undefined)}
	 */
	F.debug = function(value, options){
		if (!F.is.boolean(value)) return F.__debug__;
		F.__debug__ = value;
		if (F.__debug__){
			localStorage.setItem('footable_debug', JSON.stringify(F.__debug__));
			F.__debug_options__ = $.extend(true, {}, debug_defaults, options || {});
			if (F.is.hash(options)){
				localStorage.setItem('footable_debug_options', JSON.stringify(F.__debug_options__));
			}
		} else {
			localStorage.removeItem('footable_debug');
			localStorage.removeItem('footable_debug_options');
		}
	};

	/**
	 * Gets the FooTable instance of the supplied table if one exists.
	 * @param {(jQuery|jQuery.selector|HTMLTableElement)} table - The jQuery table object, selector or the HTMLTableElement to retrieve FooTable from.
	 * @returns {(FooTable.Table|undefined)}
	 */
	F.get = function(table){
		return $(table).first().data('__FooTable__');
	};

	/**
	 * Initializes a new instance of FooTable on the supplied table.
	 * @param {(jQuery|jQuery.selector|HTMLTableElement)} table - The jQuery table object, selector or the HTMLTableElement to initialize FooTable on.
	 * @param {object} options - The options to initialize FooTable with.
	 * @param {function} [ready] - A callback function to execute once the plugin is initialized.
	 * @returns {FooTable.Table}
	 */
	F.init = function(table, options, ready){
		var ft = F.get(table);
		if (ft instanceof F.Table) ft.destroy();
		return new F.Table(table, options, ready);
	};

	/**
	 * Gets the FooTable.Row instance for the supplied element.
	 * @param {(jQuery|jQuery.selector|HTMLTableElement)} element - A jQuery object, selector or the HTMLElement of an element to retrieve the FooTable.Row for.
	 * @returns {FooTable.Row}
	 */
	F.getRow = function(element){
		// to get the FooTable.Row object simply walk up the DOM, find the TR and grab the __FooTableRow__ data value
		var $row = $(element).closest('tr');
		// if this is a detail row get the previous row in the table to get the main TR element
		if ($row.hasClass('footable-detail-row')){
			$row = $row.prev();
		}
		// grab the row object
		return $row.data('__FooTableRow__');
	};

	// The below are external type definitions mainly used as pointers to jQuery docs for important information
	/**
	 * jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API
	 * that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.
	 * @name jQuery
	 * @constructor
	 * @returns {jQuery}
	 * @see {@link http://api.jquery.com/}
	 */

	/**
	 * This object provides a subset of the methods of the Deferred object (then, done, fail, always, pipe, and state) to prevent users from changing the state of the Deferred.
	 * @typedef {object} jQuery.Promise
	 * @see {@link http://api.jquery.com/Types/#Promise}
	 */

	/**
	 * As of jQuery 1.5, the Deferred object provides a way to register multiple callbacks into self-managed callback queues, invoke callback queues as appropriate,
	 * and relay the success or failure state of any synchronous or asynchronous function.
	 * @typedef {object} jQuery.Deferred
	 * @see {@link http://api.jquery.com/Types/#Deferred}
	 */

	/**
	 * jQuery's event system normalizes the event object according to W3C standards. The event object is guaranteed to be passed to the event handler. Most properties from
	 * the original event are copied over and normalized to the new event object.
	 * @typedef {object} jQuery.Event
	 * @see {@link http://api.jquery.com/category/events/event-object/}
	 */

	/**
	 * Provides a way to execute callback functions based on one or more objects, usually Deferred objects that represent asynchronous events.
	 * @memberof jQuery
	 * @function when
	 * @param {...jQuery.Deferred} deferreds - Any number of deferred objects to wait for.
	 * @returns {jQuery.Promise}
	 * @see {@link http://api.jquery.com/jQuery.when/}
	 */

	/**
	 * The jQuery.fn namespace used to register plugins with jQuery.
	 * @memberof jQuery
	 * @namespace fn
	 * @see {@link http://learn.jquery.com/plugins/basic-plugin-creation/}
	 */
})(
	jQuery,
	/**
	 * The core FooTable namespace containing all the plugin code.
	 * @namespace
	 */
	FooTable = window.FooTable || {}
);
(function(F){
	var returnTrue = function(){ return true; };

	/**
	 * This namespace contains commonly used array utility methods.
	 * @namespace {object} FooTable.arr
	 */
	F.arr = {};

	/**
	 * Iterates over each item in the supplied array and performs the supplied function passing in the current item as the first argument.
	 * @memberof FooTable.arr
	 * @function each
	 * @param {Array} array - The array to iterate
	 * @param {function} func - The function to execute for each item. The first argument supplied to this function is the current item and the second is the current index.
	 */
	F.arr.each = function (array, func) {
		if (!F.is.array(array) || !F.is.fn(func)) return;
		for (var i = 0, len = array.length; i < len; i++) {
			if (func(array[i], i) === false) break;
		}
	};

	/**
	 * Get all items in the supplied array that optionally matches the supplied where function. If no items are found an empty array is returned.
	 * @memberof FooTable.arr
	 * @function get
	 * @param {Array} array - The array to get items from.
	 * @param {function} where - This function must return a boolean value, true includes the item in the result array.
	 * @returns {Array}
	 */
	F.arr.get = function (array, where) {
		var result = [];
		if (!F.is.array(array)) return result;
		if (!F.is.fn(where)) return array;
		for (var i = 0, len = array.length; i < len; i++) {
			if (where(array[i], i)) result.push(array[i]);
		}
		return result;
	};

	/**
	 * Get a boolean value indicating if any item exists in the supplied array that optionally matches the supplied where function.
	 * @memberof FooTable.arr
	 * @function any
	 * @param {Array} array - The array to check.
	 * @param {function} [where] - [Optional] This function must return a boolean value, true indicates that the current item is a valid match.
	 * @returns {boolean}
	 */
	F.arr.any = function (array, where) {
		if (!F.is.array(array)) return false;
		where = F.is.fn(where) ? where : returnTrue;
		for (var i = 0, len = array.length; i < len; i++) {
			if (where(array[i], i)) return true;
		}
		return false;
	};

	/**
	 * Checks if the supplied value exists in the array.
	 * @memberof FooTable.arr
	 * @function contains
	 * @param {Array} array - The array to check.
	 * @param {*} value - The value to check for.
	 * @returns {boolean}
	 */
	F.arr.contains = function(array, value){
		if (!F.is.array(array) || F.is.undef(value)) return false;
		for (var i = 0, len = array.length; i < len; i++) {
			if (array[i] == value) return true;
		}
		return false;
	};

	/**
	 * Get the first item in the supplied array that optionally matches the supplied where function. If no item is found null is returned.
	 * @memberof FooTable.arr
	 * @function first
	 * @param {Array} array - The array to get the item from.
	 * @param {function} [where] - [Optional] This function must return a boolean value, true indicates that the current item can be returned.
	 * @returns {(*|null)}
	 */
	F.arr.first = function (array, where) {
		if (!F.is.array(array)) return null;
		where = F.is.fn(where) ? where : returnTrue;
		for (var i = 0, len = array.length; i < len; i++) {
			if (where(array[i], i)) return array[i];
		}
		return null;
	};

	/**
	 * Creates a new array from the results of the supplied getter function. If no items are found an empty array is returned, to exclude an item from the results return null.
	 * @memberof FooTable.arr
	 * @function map
	 * @param {Array} array - The array to iterate.
	 * @param {function} getter - This function must return either a new value or null.
	 * The first argument is the result being returned at this point in the iteration. The second argument is the current item being iterated.
	 * @returns {(*|null)}
	 */
	F.arr.map = function (array, getter) {
		var result = [], returned = null;
		if (!F.is.array(array) || !F.is.fn(getter)) return result;
		for (var i = 0, len = array.length; i < len; i++) {
			if ((returned = getter(array[i], i)) != null) result.push(returned);
		}
		return result;
	};

	/**
	 * Removes items from the array matching the supplied where function. All removed items are returned in a new array.
	 * @memberof FooTable.arr
	 * @function remove
	 * @param {Array} array - The array to iterate and remove items from.
	 * @param {function} where - This function must return a boolean value, true includes the item in the result array.
	 * @returns {*}
	 */
	F.arr.remove = function (array, where) {
		var remove = [], removed = [];
		if (!F.is.array(array) || !F.is.fn(where)) return removed;
		var i = 0, len = array.length;
		for (; i < len; i++) {
			if (where(array[i], i, removed)){
				remove.push(i);
				removed.push(array[i]);
			}
		}
		// sort the indexes to be removed from largest to smallest
		remove.sort(function(a, b){ return b - a; });
		i = 0; len = remove.length;
		for(; i < len; i++){
			var index = remove[i] - i;
			array.splice(index, 1);
		}
		return removed;
	};

	/**
	 * Deletes a single item from the array. The item if removed is returned.
	 * @memberof FooTable.arr
	 * @function delete
	 * @param {Array} array - The array to iterate and delete the item from.
	 * @param {*} item - The item to find and delete.
	 * @returns {(*|null)}
	 */
	F.arr.delete = function(array, item){
		var remove = -1, removed = null;
		if (!F.is.array(array) || F.is.undef(item)) return removed;
		var i = 0, len = array.length;
		for (; i < len; i++) {
			if (array[i] == item){
				remove = i;
				removed = array[i];
				break;
			}
		}
		if (remove != -1) array.splice(remove, 1);
		return removed;
	};

	/**
	 * Replaces a single item in the array with a new one.
	 * @memberof FooTable.arr
	 * @function replace
	 * @param {Array} array - The array to iterate and replace the item in.
	 * @param {*} oldItem - The item to be replaced.
	 * @param {*} newItem - The item to be inserted.
	 */
	F.arr.replace = function(array, oldItem, newItem){
		var index = array.indexOf(oldItem);
		if (index !== -1) array[index] = newItem;
	};

})(FooTable);
(function (F) {

	/**
	 * This namespace contains commonly used 'is' type methods that return boolean values.
	 * @namespace FooTable.is
	 */
	F.is = {};

	/**
	 * Checks if the type of the value is the same as that supplied.
	 * @memberof FooTable.is
	 * @function type
	 * @param {*} value - The value to check the type of.
	 * @param {string} type - The type to check for.
	 * @returns {boolean}
	 */
	F.is.type = function (value, type) {
		return typeof value === type;
	};

	/**
	 * Checks if the value is defined.
	 * @memberof FooTable.is
	 * @function defined
	 * @param {*} value - The value to check is defined.
	 * @returns {boolean}
	 */
	F.is.defined = function (value) {
		return typeof value !== 'undefined';
	};

	/**
	 * Checks if the value is undefined.
	 * @memberof FooTable.is
	 * @function undef
	 * @param {*} value - The value to check is undefined.
	 * @returns {boolean}
	 */
	F.is.undef = function (value) {
		return typeof value === 'undefined';
	};

	/**
	 * Checks if the value is an array.
	 * @memberof FooTable.is
	 * @function array
	 * @param {*} value - The value to check.
	 * @returns {boolean}
	 */
	F.is.array = function (value) {
		return '[object Array]' === Object.prototype.toString.call(value);
	};

	/**
	 * Checks if the value is a date.
	 * @memberof FooTable.is
	 * @function date
	 * @param {*} value - The value to check.
	 * @returns {boolean}
	 */
	F.is.date = function (value) {
		return '[object Date]' === Object.prototype.toString.call(value) && !isNaN(value.getTime());
	};

	/**
	 * Checks if the value is a boolean.
	 * @memberof FooTable.is
	 * @function boolean
	 * @param {*} value - The value to check.
	 * @returns {boolean}
	 */
	F.is.boolean = function (value) {
		return '[object Boolean]' === Object.prototype.toString.call(value);
	};

	/**
	 * Checks if the value is a string.
	 * @memberof FooTable.is
	 * @function string
	 * @param {*} value - The value to check.
	 * @returns {boolean}
	 */
	F.is.string = function (value) {
		return '[object String]' === Object.prototype.toString.call(value);
	};

	/**
	 * Checks if the value is a number.
	 * @memberof FooTable.is
	 * @function number
	 * @param {*} value - The value to check.
	 * @returns {boolean}
	 */
	F.is.number = function (value) {
		return '[object Number]' === Object.prototype.toString.call(value) && !isNaN(value);
	};

	/**
	 * Checks if the value is a function.
	 * @memberof FooTable.is
	 * @function fn
	 * @param {*} value - The value to check.
	 * @returns {boolean}
	 */
	F.is.fn = function (value) {
		return (F.is.defined(window) && value === window.alert) || '[object Function]' === Object.prototype.toString.call(value);
	};

	/**
	 * Checks if the value is an error.
	 * @memberof FooTable.is
	 * @function error
	 * @param {*} value - The value to check.
	 * @returns {boolean}
	 */
	F.is.error = function (value) {
		return '[object Error]' === Object.prototype.toString.call(value);
	};

	/**
	 * Checks if the value is an object.
	 * @memberof FooTable.is
	 * @function object
	 * @param {*} value - The value to check.
	 * @returns {boolean}
	 */
	F.is.object = function (value) {
		return '[object Object]' === Object.prototype.toString.call(value);
	};

	/**
	 * Checks if the value is a hash.
	 * @memberof FooTable.is
	 * @function hash
	 * @param {*} value - The value to check.
	 * @returns {boolean}
	 */
	F.is.hash = function (value) {
		return F.is.object(value) && value.constructor === Object && !value.nodeType && !value.setInterval;
	};

	/**
	 * Checks if the supplied object is an HTMLElement
	 * @memberof FooTable.is
	 * @function element
	 * @param {object} obj - The object to check.
	 * @returns {boolean}
	 */
	F.is.element = function (obj) {
		return typeof HTMLElement === 'object'
			? obj instanceof HTMLElement
			: obj && typeof obj === 'object' && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === 'string';
	};

	/**
	 * This is a simple check to determine if an object is a jQuery promise object. It simply checks the object has a "then" and "promise" function defined.
	 * The promise object is created as an object literal inside of jQuery.Deferred.
	 * It has no prototype, nor any other truly unique properties that could be used to distinguish it.
	 * This method should be a little more accurate than the internal jQuery one that simply checks for a "promise" method.
	 * @memberof FooTable.is
	 * @function promise
	 * @param {object} obj - The object to check.
	 * @returns {boolean}
	 */
	F.is.promise = function(obj){
		return F.is.object(obj) && F.is.fn(obj.then) && F.is.fn(obj.promise);
	};

	/**
	 * Checks if the supplied object is an instance of a jQuery object.
	 * @memberof FooTable.is
	 * @function jq
	 * @param {object} obj - The object to check.
	 * @returns {boolean}
	 */
	F.is.jq = function(obj){
		return F.is.defined(window.jQuery) && obj instanceof jQuery && obj.length > 0;
	};

	/**
	 * Checks if the supplied object is a moment.js date object.
	 * @memberof FooTable.is
	 * @function moment
	 * @param {object} obj - The object to check.
	 * @returns {boolean}
	 */
	F.is.moment = function(obj){
		return F.is.defined(window.moment) && F.is.object(obj) && F.is.boolean(obj._isAMomentObject)
	};

	/**
	 * Checks if the supplied value is an object and if it is empty.
	 * @memberof FooTable.is
	 * @function emptyObject
	 * @param {*} value - The value to check.
	 * @returns {boolean}
	 */
	F.is.emptyObject = function(value){
		if (!F.is.hash(value)) return false;
		for(var prop in value) {
			if(value.hasOwnProperty(prop))
				return false;
		}
		return true;
	};

	/**
	 * Checks if the supplied value is an array and if it is empty.
	 * @memberof FooTable.is
	 * @function emptyArray
	 * @param {*} value - The value to check.
	 * @returns {boolean}
	 */
	F.is.emptyArray = function(value){
		return F.is.array(value) ? value.length === 0 : true;
	};

	/**
	 * Checks if the supplied value is a string and if it is empty.
	 * @memberof FooTable.is
	 * @function emptyString
	 * @param {*} value - The value to check.
	 * @returns {boolean}
	 */
	F.is.emptyString = function(value){
		return F.is.string(value) ? value.length === 0 : true;
	};

})(FooTable);
(function (F) {
	/**
	 * This namespace contains commonly used string utility methods.
	 * @namespace FooTable.str
	 */
	F.str = {};

	/**
	 * Checks if the supplied string contains the given substring.
	 * @memberof FooTable.str
	 * @function contains
	 * @param {string} str - The string to check.
	 * @param {string} contains - The string to check for.
	 * @param {boolean} [ignoreCase=false] - Whether or not to ignore casing when performing the check.
	 * @returns {boolean}
	 */
	F.str.contains = function (str, contains, ignoreCase) {
		if (F.is.emptyString(str) || F.is.emptyString(contains)) return false;
		return contains.length <= str.length
			&& (ignoreCase ? str.toUpperCase().indexOf(contains.toUpperCase()) : str.indexOf(contains)) !== -1;
	};

	/**
	 * Checks if the supplied string contains the exact given substring.
	 * @memberof FooTable.str
	 * @function contains
	 * @param {string} str - The string to check.
	 * @param {string} contains - The string to check for.
	 * @param {boolean} [ignoreCase=false] - Whether or not to ignore casing when performing the check.
	 * @returns {boolean}
	 */
	F.str.containsExact = function (str, contains, ignoreCase) {
		if (F.is.emptyString(str) || F.is.emptyString(contains) || contains.length > str.length) return false;
		return new RegExp('\\b'+ F.str.escapeRegExp(contains)+'\\b', ignoreCase ? 'i' : '').test(str);
	};

	/**
	 * Checks if the supplied string contains the given word.
	 * @memberof FooTable.str
	 * @function containsWord
	 * @param {string} str - The string to check.
	 * @param {string} word - The word to check for.
	 * @param {boolean} [ignoreCase=false] - Whether or not to ignore casing when performing the check.
	 * @returns {boolean}
	 */
	F.str.containsWord = function(str, word, ignoreCase){
		if (F.is.emptyString(str) || F.is.emptyString(word) || str.length < word.length)
			return false;
		var parts = str.split(/\W/);
		for (var i = 0, len = parts.length; i < len; i++){
			if (ignoreCase ? parts[i].toUpperCase() == word.toUpperCase() : parts[i] == word) return true;
		}
		return false;
	};

	/**
	 * Returns the remainder of a string split on the first index of the given substring.
	 * @memberof FooTable.str
	 * @function from
	 * @param {string} str - The string to split.
	 * @param {string} from - The substring to split on.
	 * @returns {string}
	 */
	F.str.from = function (str, from) {
		if (F.is.emptyString(str)) return str;
		return F.str.contains(str, from) ? str.substring(str.indexOf(from) + 1) : str;
	};

	/**
	 * Checks if a string starts with the supplied prefix.
	 * @memberof FooTable.str
	 * @function startsWith
	 * @param {string} str - The string to check.
	 * @param {string} prefix - The prefix to check for.
	 * @returns {boolean}
	 */
	F.str.startsWith = function (str, prefix) {
		if (F.is.emptyString(str)) return str == prefix;
		return str.slice(0, prefix.length) == prefix;
	};

	/**
	 * Takes the supplied string and converts it to camel case.
	 * @memberof FooTable.str
	 * @function toCamelCase
	 * @param {string} str - The string to camel case.
	 * @returns {string}
	 */
	F.str.toCamelCase = function (str) {
		if (F.is.emptyString(str)) return str;
		if (str.toUpperCase() === str) return str.toLowerCase();
		return str.replace(/^([A-Z])|[-\s_](\w)/g, function (match, p1, p2) {
			if (F.is.string(p2)) return p2.toUpperCase();
			return p1.toLowerCase();
		});
	};

	/**
	 * Generates a random string 9 characters long using the optional prefix if supplied.
	 * @memberof FooTable.str
	 * @function random
	 * @param {string} [prefix] - The prefix to append to the 9 random characters.
	 * @returns {string}
	 */
	F.str.random = function(prefix){
		prefix = F.is.emptyString(prefix) ? '' : prefix;
		return prefix + Math.random().toString(36).substr(2, 9);
	};

	/**
	 * Escapes a string for use in a regular expression.
	 * @memberof FooTable.str
	 * @function escapeRegExp
	 * @param {string} str - The string to escape.
	 * @returns {string}
	 */
	F.str.escapeRegExp = function(str){
		if (F.is.emptyString(str)) return str;
		return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	};

})(FooTable);
(function (F) {
	"use strict";

	if (!Object.create) {
		Object.create = (function () {
			var Object = function () {};
			return function (prototype) {
				if (arguments.length > 1)
					throw Error('Second argument not supported');

				if (!F.is.object(prototype))
					throw TypeError('Argument must be an object');

				Object.prototype = prototype;
				var result = new Object();
				Object.prototype = null;
				return result;
			};
		})();
	}

	/**
	 * This base implementation does nothing except provide access to the {@link FooTable.Class#extend} method.
	 * @constructs FooTable.Class
	 * @classdesc This class is based off of John Resig's [Simple JavaScript Inheritance]{@link http://ejohn.org/blog/simple-javascript-inheritance} but it has been updated to be ES 5.1
	 * compatible by implementing an [Object.create polyfill]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#Polyfill}
	 * for older browsers.
	 * @see {@link http://ejohn.org/blog/simple-javascript-inheritance}
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#Polyfill}
	 * @returns {FooTable.Class}
	 */
	function Class() {}

	var __extendable__ = /xyz/.test(function () {xyz;}) ? /\b_super\b/ : /.*/;

	// this._super() within the context of the new function is a pointer to the original function
	// except if the hook param is specified then the this._super variable is the result of the original function
	Class.__extend__ = function(proto, name, func, original){
		// to all who venture here, here be dragons!
		proto[name] = F.is.fn(original) && __extendable__.test(func) ?
			(function (name, fn) {
				return function () {
					var tmp, ret;
					tmp = this._super;
					this._super = original;
					ret = fn.apply(this, arguments);
					this._super = tmp;
					return ret;
				};
			})(name, func) : func;
	};

	/**
	 * Creates a new class that inherits from this class which in turn allows itself to be extended or if a name and function is supplied extends only that specific function on the class.
	 * @param {(object|string)} arg1 - An object containing any new methods/members to implement or the name of the method to extend.
	 * @param {function} arg2 - If the first argument is a method name then this is the new function to replace it with.
	 * @returns {FooTable.Class} A new class that inherits from the base class.
	 * @example <caption>The below shows an example of how to implement inheritance using this method.</caption>
	 * var Person = FooTable.Class.extend({
	 *   construct: function(isDancing){
	 *     this.dancing = isDancing;
	 *   },
	 *   dance: function(){
	 *     return this.dancing;
	 *   }
	 * });
	 *
	 * var Ninja = Person.extend({
	 *   construct: function(){
	 *     this._super( false );
	 *   },
	 *   dance: function(){
	 *     // Call the inherited version of dance()
	 *     return this._super();
	 *   },
	 *   swingSword: function(){
	 *     return true;
	 *   }
	 * });
	 *
	 * var p = new Person(true);
	 * p.dance(); // => true
	 *
	 * var n = new Ninja();
	 * n.dance(); // => false
	 * n.swingSword(); // => true
	 *
	 * // Should all be true
	 * p instanceof Person && p instanceof FooTable.Class &&
	 * n instanceof Ninja && n instanceof Person && n instanceof FooTable.Class
	 */
	Class.extend = function (arg1 , arg2) {
		var args = Array.prototype.slice.call(arguments);
		arg1 = args.shift();
		arg2 = args.shift();

		function __extend__(proto, name, func, original){
			// to all who venture here, here be dragons!
			proto[name] = F.is.fn(original) && __extendable__.test(func) ?
				(function (name, fn, ofn) {
					return function () {
						var tmp, ret;
						tmp = this._super;
						this._super = ofn;
						ret = fn.apply(this, arguments);
						this._super = tmp;
						return ret;
					};
				})(name, func, original) : func;
		}

		if (F.is.hash(arg1)){
			var proto = Object.create(this.prototype),
				_super = this.prototype;
			for (var name in arg1) {
				if (name === '__ctor__') continue;
				__extend__(proto, name, arg1[name], _super[name]);
			}
			var obj = F.is.fn(proto.__ctor__) ? proto.__ctor__ : function () {
				if (!F.is.fn(this.construct))
					throw new SyntaxError('FooTable class objects must be constructed with the "new" keyword.');
				this.construct.apply(this, arguments);
			};
			proto.construct = F.is.fn(proto.construct) ? proto.construct : function(){};
			obj.prototype = proto;
			proto.constructor = obj;
			obj.extend = Class.extend;
			return obj;
		} else if (F.is.string(arg1) && F.is.fn(arg2)) {
			__extend__(this.prototype, arg1, arg2, this.prototype[arg1]);
		}
	};

	F.Class = Class;

	F.ClassFactory = F.Class.extend(/** @lends FooTable.ClassFactory */{
		/**
		 * This is a simple factory for {@link FooTable.Class} objects allowing them to be registered using a friendly name
		 * and then new instances can be created using this friendly name.
		 * @constructs
		 * @extends FooTable.Class
		 * @returns {FooTable.ClassFactory}
		 * @this FooTable.ClassFactory
		 */
		construct: function(){
			/**
			 * An object containing all registered classes.
			 * @type {{}}
			 */
			this.registered = {};
		},
		/**
		 * Checks if the factory contains a class registered using the supplied name.
		 * @instance
		 * @param {string} name - The name of the class to check.
		 * @returns {boolean}
		 * @this FooTable.ClassFactory
		 */
		contains: function(name){
			return F.is.defined(this.registered[name]);
		},
		/**
		 * Gets an array of all registered names.
		 * @instance
		 * @returns {Array.<string>}
		 * @this FooTable.ClassFactory
		 */
		names: function(){
			var names = [], name;
			for (name in this.registered){
				if (!this.registered.hasOwnProperty(name)) continue;
				names.push(name);
			}
			return names;
		},
		/**
		 * Registers a class object using the supplied friendly name and priority. The priority is only taken into account when loading all registered classes
		 * using the {@link FooTable.ClassFactory#load} method.
		 * @instance
		 * @param {string} name - The friendly name of the class.
		 * @param {function} klass - The class to register.
		 * @param {number} priority - This determines the order that the class is created when using the {@link FooTable.ClassFactory#load} method, higher values are loaded first.
		 * @this FooTable.ClassFactory
		 */
		register: function(name, klass, priority){
			if (!F.is.string(name) || !F.is.fn(klass)) return;
			var current = this.registered[name];
			this.registered[name] = {
				name: name,
				klass: klass,
				priority: F.is.number(priority) ? priority : (F.is.defined(current) ? current.priority : 0)
			};
		},
		/**
		 * Creates new instances of all registered classes using there priority and the supplied arguments to return them in an array.
		 * @instance
		 * @param {object} subs - An object containing classes to substitute on load.
		 * @param {*} arg1 - The first argument to supply when creating new instances of all registered classes.
		 * @param {*} [argN...] - Any number of additional arguments to supply when creating new instances of all registered classes.
		 * @returns {Array.<FooTable.Class>}
		 * @this FooTable.ClassFactory
		 */
		load: function(subs, arg1, argN){
			var self = this, args = Array.prototype.slice.call(arguments), reg = [], loaded = [], name, klass;
			subs = args.shift() || {};
			for (name in self.registered){
				if (!self.registered.hasOwnProperty(name)) continue;
				var component = self.registered[name];
				if (subs.hasOwnProperty(name)){
					klass = subs[name];
					if (F.is.string(klass)) klass = F.getFnPointer(subs[name]);
					if (F.is.fn(klass)){
						component = {name: name, klass: klass, priority: self.registered[name].priority};
					}
				}
				reg.push(component);
			}
			for (name in subs){
				if (!subs.hasOwnProperty(name) || self.registered.hasOwnProperty(name)) continue;
				klass = subs[name];
				if (F.is.string(klass)) klass = F.getFnPointer(subs[name]);
				if (F.is.fn(klass)){
					reg.push({name: name, klass: klass, priority: 0});
				}
			}
			reg.sort(function(a, b){ return b.priority - a.priority; });
			F.arr.each(reg, function(r){
				if (F.is.fn(r.klass)){
					loaded.push(self._make(r.klass, args));
				}
			});
			return loaded;
		},
		/**
		 * Create a new instance of a single class using the supplied name and arguments.
		 * @instance
		 * @param {string} name - The name of the class to create.
		 * @param {*} arg1 - The first argument to supply to the new instance.
		 * @param {*} [argN...] - Any number of additional arguments to supply to the new instance.
		 * @returns {FooTable.Class}
		 * @this FooTable.ClassFactory
		 */
		make: function(name, arg1, argN){
			var self = this, args = Array.prototype.slice.call(arguments), reg;
			name = args.shift();
			reg = self.registered[name];
			if (F.is.fn(reg.klass)){
				return self._make(reg.klass, args);
			}
			return null;
		},
		/**
		 * This in effect lets us use the "apply" method on a function using the "new" keyword.
		 * @instance
		 * @private
		 * @param {function} klass
		 * @param args
		 * @returns {FooTable.Class}
		 * @this FooTable.ClassFactory
		 */
		_make: function(klass, args){
			function Class() {
				return klass.apply(this, args);
			}
			Class.prototype = klass.prototype;
			return new Class();
		}
	});

})(FooTable);
(function($, F){

	/**
	 * Converts the supplied cssText string into JSON object.
	 * @param {string} cssText - The cssText to convert to a JSON object.
	 * @returns {object}
	 */
	F.css2json = function(cssText){
		if (F.is.emptyString(cssText)) return {};
		var json = {}, props = cssText.split(';'), pair, key, value;
		for (var i = 0, i_len = props.length; i < i_len; i++){
			if (F.is.emptyString(props[i])) continue;
			pair = props[i].split(':');
			if (F.is.emptyString(pair[0]) || F.is.emptyString(pair[1])) continue;
			key = F.str.toCamelCase($.trim(pair[0]));
			value = $.trim(pair[1]);
			json[key] = value;
		}
		return json;
	};

	/**
	 * Attempts to retrieve a function pointer using the given name.
	 * @param {string} functionName - The name of the function to fetch a pointer to.
	 * @returns {(function|object|null)}
	 */
	F.getFnPointer = function(functionName){
		if (F.is.emptyString(functionName)) return null;
		var pointer = window,
			parts = functionName.split('.');
		F.arr.each(parts, function(part){
			if (pointer[part]) pointer = pointer[part];
		});
		return F.is.fn(pointer) ? pointer : null;
	};

	/**
	 * Checks the value for function properties such as the {@link FooTable.Column#formatter} option which could also be specified using just the name
	 * and attempts to return the correct function pointer or null if none was found matching the value.
	 * @param {FooTable.Class} self - The class to use as the 'this' keyword within the context of the function.
	 * @param {(function|string)} value - The actual function or the name of the function for the property.
	 * @param {function} [def] - A default function to return if none is found.
	 * @returns {(function|null)}
	 */
	F.checkFnValue = function(self, value, def){
		def = F.is.fn(def) ? def : null;
		function wrap(t, fn, d){
			if (!F.is.fn(fn)) return d;
			return function(){
				return fn.apply(t, arguments);
			};
		}
		return F.is.fn(value) ? wrap(self, value, def) : (F.is.type(value, 'string') ? wrap(self, F.getFnPointer(value), def) : def);
	};

})(jQuery, FooTable);
(function($, F){

	F.Cell = F.Class.extend(/** @lends FooTable.Cell */{
		/**
		 * The cell class containing all the properties for cells.
		 * @constructs
		 * @extends FooTable.Class
		 * @param {FooTable.Table} table -  The root {@link FooTable.Table} this cell belongs to.
		 * @param {FooTable.Row} row - The parent {@link FooTable.Row} this cell belongs to.
		 * @param {FooTable.Column} column - The {@link FooTable.Column} this cell falls under.
		 * @param {(*|HTMLElement|jQuery)} valueOrElement - Either the value or the element for the cell.
		 * @returns {FooTable.Cell}
		 * @this FooTable.Cell
		 */
		construct: function (table, row, column, valueOrElement) {
			/**
			 * The root {@link FooTable.Table} for the cell.
			 * @instance
			 * @readonly
			 * @type {FooTable.Table}
			 */
			this.ft = table;
			/**
			 * The parent {@link FooTable.Row} for the cell.
			 * @instance
			 * @readonly
			 * @type {FooTable.Row}
			 */
			this.row = row;
			/**
			 * The {@link FooTable.Column} this cell falls under.
			 * @instance
			 * @readonly
			 * @type {FooTable.Column}
			 */
			this.column = column;
			this.created = false;
			this.define(valueOrElement);
		},
		/**
		 * This is supplied either the value or the cell element/jQuery object if it exists.
		 * If supplied the element we need set the $el property and parse the value from it.
		 * @instance
		 * @protected
		 * @param {(*|jQuery)} valueOrElement - The value or element to define the cell.
		 * @this FooTable.Cell
		 */
		define: function(valueOrElement){
			/**
			 * The jQuery table cell object this instance wraps.
			 * @instance
			 * @type {jQuery}
			 */
			this.$el = F.is.element(valueOrElement) || F.is.jq(valueOrElement) ? $(valueOrElement) : null;
			/**
			 * The jQuery row object that represents this cell in the details table.
			 * @type {jQuery}
			 */
			this.$detail = null;

			var hasOptions = F.is.hash(valueOrElement) && F.is.hash(valueOrElement.options) && F.is.defined(valueOrElement.value);

			/**
			 * The value of the cell.
			 * @instance
			 * @type {*}
			 */
			this.value = this.column.parser.call(this.column, F.is.jq(this.$el) ? this.$el : (hasOptions ? valueOrElement.value : valueOrElement), this.ft.o);

			/**
			 * Contains any options for the cell. These are the options supplied through the plugin constructor as part of the row object itself.
			 * @type {object}
			 */
			this.o = $.extend(true, {
				classes: null,
				style: null
			}, hasOptions ? valueOrElement.options : {});
			/**
			 * An array of CSS classes for the cell.
			 * @instance
			 * @protected
			 * @type {Array.<string>}
			 */
			this.classes = F.is.jq(this.$el) && this.$el.attr('class') ? this.$el.attr('class').match(/\S+/g) : (F.is.array(this.o.classes) ? this.o.classes : (F.is.string(this.o.classes) ? this.o.classes.match(/\S+/g) : []));
			/**
			 * The inline styles for the cell.
			 * @instance
			 * @protected
			 * @type {object}
			 */
			this.style = F.is.jq(this.$el) && this.$el.attr('style') ? F.css2json(this.$el.attr('style')) : (F.is.hash(this.o.style) ? this.o.style : (F.is.string(this.o.style) ? F.css2json(this.o.style) : {}));
		},
		/**
		 * After the cell has been defined this ensures that the $el and #detail properties are jQuery objects by either creating or updating them.
		 * @instance
		 * @protected
		 * @this FooTable.Cell
		 */
		$create: function(){
			if (this.created) return;
			/*if(F.is.jq(this.$el))
			{*/
			(this.$el = F.is.jq(this.$el) ? this.$el : $('<td/>'))
				.data('value', this.value)
				.contents().detach().end()
				.append(this.format(this.value));

			this._setClasses(this.$el);
			this._setStyle(this.$el);

			this.$detail = $('<tr/>').addClass(this.row.classes.join(' '))
				.data('__FooTableCell__', this)
				.append($('<th/>'))
				.append($('<td/>'));
			// }
			this.created = true;
		},
		/**
		 * Collapses this cell and displays it in the details row.
		 * @instance
		 * @protected
		 */
		collapse: function(){
			if (!this.created) return;
			this.$detail.children('th').html(this.column.title);
			this.$el.clone()
				.attr('id', this.$el.attr('id') ? this.$el.attr('id') + '-detail' : undefined)
				.css('display', 'table-cell')
				.html('')
				.append(this.$el.contents().detach())
				.replaceAll(this.$detail.children('td').first());

			if (!F.is.jq(this.$detail.parent()))
				this.$detail.appendTo(this.row.$details.find('.footable-details > tbody'));
		},
		/**
		 * Restores this cell from a detail row back into the normal row.
		 * @instance
		 * @protected
		 */
		restore: function(){
			if (!this.created) return;
			if (F.is.jq(this.$detail.parent())){
				var $cell = this.$detail.children('td').first();
				this.$el
					.attr('class', $cell.attr('class'))
					.attr('style', $cell.attr('style'))
					.css('display', (this.column.hidden || !this.column.visible) ? 'none' : 'table-cell')
					.append($cell.contents().detach());
			}
			this.$detail.detach();
		},
		/**
		 * Helper method to call this cell's column parser function supplying the required parameters.
		 * @instance
		 * @protected
		 * @returns {*}
		 * @see FooTable.Column#parser
		 * @this FooTable.Cell
		 */
		parse: function(){
			return this.column.parser.call(this.column, this.$el, this.ft.o);
		},
		/**
		 * Helper method to call this cell's column formatter function using the supplied value and any additional required parameters.
		 * @instance
		 * @protected
		 * @param {*} value - The value to format.
		 * @returns {(string|HTMLElement|jQuery)}
		 * @see FooTable.Column#formatter
		 * @this FooTable.Cell
		 */
		format: function(value){
			return this.column.formatter.call(this.column, value, this.ft.o, this.row.value);
		},
		/**
		 * Allows easy access to getting or setting the cell's value. If the value is set all associated properties are also updated along with the actual element.
		 * Using this method also allows us to supply an object containing options and the value for the cell.
		 * @instance
		 * @param {*} [value] - The value to set for the cell. If not supplied the current value of the cell is returned.
		 * @param {boolean} [redraw=true] - Whether or not to redraw the row once the value has been set.
		 * @param {boolean} [redrawSelf=true] - Whether or not to redraw the cell itself once the value has been set, if `false` this will override the supplied `redraw` value and prevent the row from redrawing as well.
		 * @returns {(*|undefined)}
		 * @this FooTable.Cell
		 */
		val: function(value, redraw, redrawSelf){
			if (F.is.undef(value)){
				// get
				return this.value;
			}
			// set
			var self = this, hasOptions = F.is.hash(value) && F.is.hash(value.options) && F.is.defined(value.value);
			this.o = $.extend(true, {
				classes: self.classes,
				style: self.style
			}, hasOptions ? value.options : {});

			this.value = hasOptions ? value.value : value;
			this.classes = F.is.array(this.o.classes) ? this.o.classes : (F.is.string(this.o.classes) ? this.o.classes.match(/\S+/g) : []);
			this.style = F.is.hash(this.o.style) ? this.o.style : (F.is.string(this.o.style) ? F.css2json(this.o.style) : {});

			redrawSelf = F.is.boolean(redrawSelf) ? redrawSelf : true;
			if (this.created && redrawSelf){
				this.$el.data('value', this.value).empty();

				var $detail = this.$detail.children('td').first().empty(),
					$target = F.is.jq(this.$detail.parent()) ? $detail : this.$el;

				$target.append(this.format(this.value));

				this._setClasses($target);
				this._setStyle($target);

				if (F.is.boolean(redraw) ? redraw : true) this.row.draw();
			}
		},
		_setClasses: function($el){
			var hasColClasses = !F.is.emptyArray(this.column.classes),
				hasClasses = !F.is.emptyArray(this.classes),
				classes = null;
			$el.removeAttr('class');
			if (!hasColClasses && !hasClasses) return;
			if (hasColClasses && hasClasses){
				classes = this.classes.concat(this.column.classes).join(' ');
			} else if (hasColClasses) {
				classes = this.column.classes.join(' ');
			} else if (hasClasses){
				classes = this.classes.join(' ');
			}
			if (!F.is.emptyString(classes)){
				$el.addClass(classes);
			}
		},
		_setStyle: function($el){
			var hasColStyle = !F.is.emptyObject(this.column.style),
				hasStyle = !F.is.emptyObject(this.style),
				style = null;
			$el.removeAttr('style');
			if (!hasColStyle && !hasStyle) return;
			if (hasColStyle && hasStyle){
				style = $.extend({}, this.column.style, this.style);
			} else if (hasColStyle) {
				style = this.column.style;
			} else if (hasStyle){
				style = this.style;
			}
			if (F.is.hash(style)){
				$el.css(style);
			}
		}
	});

})(jQuery, FooTable);
(function($, F){

	F.Column = F.Class.extend(/** @lends FooTable.Column */{
		/**
		 * The column class containing all the properties for columns. All members marked as "readonly" should not be used when defining {@link FooTable.Defaults#columns}.
		 * @constructs
		 * @extends FooTable.Class
		 * @param {FooTable.Table} instance -  The parent {@link FooTable.Table} this component belongs to.
		 * @param {object} definition - An object containing all the properties to set for the column.
		 * @param {string} [type] - The type of column, "text" by default.
		 * @returns {FooTable.Column}
		 * @this FooTable.Column
		 */
		construct: function(instance, definition, type){
			/**
			 * The root {@link FooTable.Table} for the column.
			 * @instance
			 * @readonly
			 * @type {FooTable.Table}
			 */
			this.ft = instance;
			/**
			 * The type of data displayed by the column.
			 * @instance
			 * @readonly
			 * @type {string}
			 */
			this.type = F.is.emptyString(type) ? 'text' : type;
			/**
			 * Whether or not the column was parsed from a standard table row containing data instead of from an actual header row.
			 * @instance
			 * @readonly
			 * @type {boolean}
			 */
			this.virtual = F.is.boolean(definition.virtual) ? definition.virtual : false;
			/**
			 * The jQuery cell object for the column header.
			 * @instance
			 * @readonly
			 * @type {jQuery}
			 */
			this.$el = F.is.jq(definition.$el) ? definition.$el : null;
			/**
			 * The index of the column in the table. This is set by the plugin during initialization.
			 * @instance
			 * @readonly
			 * @type {number}
			 * @default -1
			 */
			this.index = F.is.number(definition.index) ? definition.index : -1;
			/**
			 * Whether or not this in an internal only column.
			 * @instance
			 * @readonly
			 * @type {boolean}
			 * @description Internal columns or there cells will not be returned when calling methods such as `FooTable.Row#val`.
			 */
			this.internal = false;
			this.define(definition);
			this.$create();
		},
		/**
		 * This is supplied the column definition in the form of a simple object created by merging options supplied via the plugin constructor with those parsed from the DOM.
		 * @instance
		 * @protected
		 * @param {object} definition - The object containing the column definition.
		 * @this FooTable.Column
		 */
		define: function(definition){
			/**
			 * Whether or not this column is hidden from view and appears in the details row.
			 * @type {boolean}
			 * @default false
			 */
			this.hidden = F.is.boolean(definition.hidden) ? definition.hidden : false;
			/**
			 * Whether or not this column is completely hidden from view and will not appear in the details row.
			 * @type {boolean}
			 * @default true
			 */
			this.visible = F.is.boolean(definition.visible) ? definition.visible : true;

			/**
			 * The name of the column. This name must correspond to the property name of the JSON row data.
			 * @type {string}
			 * @default null
			 */
			this.name = F.is.string(definition.name) ? definition.name : null;
			if (this.name == null) this.name = 'col'+(definition.index+1);
			/**
			 * The title to display in the column header, this can be HTML.
			 * @type {string}
			 * @default null
			 */
			this.title = F.is.string(definition.title) ? definition.title : null;
			if (!this.virtual && this.title == null && F.is.jq(this.$el)) this.title = this.$el.html();
			if (this.title == null) this.title = 'Column '+(definition.index+1);
			/**
			 * The styles to apply to all cells in this column.
			 * @type {object}
			 */
			this.style = F.is.hash(definition.style) ? definition.style : (F.is.string(definition.style) ? F.css2json(definition.style) : {});
			/**
			 * The classes to apply to all cells in this column.
			 * @type {Array.<string>}
			 */
			this.classes = F.is.array(definition.classes) ? definition.classes : (F.is.string(definition.classes) ? definition.classes.match(/\S+/g) : []);

			// override any default functions ensuring when they are executed "this" within the context of the function points to the instance of this object.
			this.parser = F.checkFnValue(this, definition.parser, this.parser);
			this.formatter = F.checkFnValue(this, definition.formatter, this.formatter);
		},
		/**
		 * After the column has been defined this ensures that the $el property is a jQuery object by either creating or updating the current value.
		 * @instance
		 * @protected
		 * @this FooTable.Column
		 */
		$create: function(){
			(this.$el = !this.virtual && F.is.jq(this.$el) ? this.$el : $('<th/>')).html(this.title).addClass(this.classes.join(' ')).css(this.style);
		},
		/**
		 * This is supplied either the cell value or jQuery object to parse. Any value can be returned from this method and will be provided to the {@link FooTable.Column#format} function
		 * to generate the cell contents.
		 * @instance
		 * @protected
		 * @param {(*|jQuery)} valueOrElement - The value or jQuery cell object.
		 * @returns {string}
		 * @this FooTable.Column
		 */
		parser: function(valueOrElement){
			if (F.is.element(valueOrElement) || F.is.jq(valueOrElement)){ // use jQuery to get the value
				var data = $(valueOrElement).data('value');
				return F.is.defined(data) ? data : $(valueOrElement).html();
			}
			if (F.is.defined(valueOrElement) && valueOrElement != null) return valueOrElement+''; // use the native toString of the value
			return null; // otherwise we have no value so return null
		},
		/**
		 * This is supplied the value retrieved from the {@link FooTable.Column#parse} function and must return a string, HTMLElement or jQuery object.
		 * The return value from this function is what is displayed in the cell in the table.
		 * @instance
		 * @protected
		 * @param {string} value - The value to format.
		 * @param {object} options - The current plugin options.
		 * @param {object} rowData - An object containing the current row data.
		 * @returns {(string|HTMLElement|jQuery)}
		 * @this FooTable.Column
		 */
		formatter: function(value, options, rowData){
			return value == null ? '' : value;
		},
		/**
		 * Creates a cell for this column from the supplied {@link FooTable.Row} object. This allows different column types to return different types of cells.
		 * @instance
		 * @protected
		 * @param {FooTable.Row} row - The row to create the cell from.
		 * @returns {FooTable.Cell}
		 * @this FooTable.Column
		 */
		createCell: function(row){
			var element = F.is.jq(row.$el) ? row.$el.children('td,th').get(this.index) : null,
				data = F.is.hash(row.value) ? row.value[this.name] : null;
			return new F.Cell(this.ft, row, this, element || data);
		}
	});

	F.columns = new F.ClassFactory();

	F.columns.register('text', F.Column);

})(jQuery, FooTable);
(function ($, F) {

	F.Component = F.Class.extend(/** @lends FooTable.Component */{
		/**
		 * The base class for all FooTable components.
		 * @constructs
		 * @extends FooTable.Class
		 * @param {FooTable.Table} instance - The parent {@link FooTable.Table} object for the component.
		 * @param {boolean} enabled - Whether or not the component is enabled.
		 * @throws {TypeError} The instance parameter must be an instance of {@link FooTable.Table}.
		 * @returns {FooTable.Component}
		 */
		construct: function (instance, enabled) {
			if (!(instance instanceof F.Table))
				throw new TypeError('The instance parameter must be an instance of FooTable.Table.');

			/**
			 * The parent {@link FooTable.Table} for the component.
			 * @type {FooTable.Table}
			 */
			this.ft = instance;
			/**
			 * Whether or not this component is enabled. Disabled components only have there preinit method called allowing for this value to be overridden.
			 * @type {boolean}
			 */
			this.enabled = F.is.boolean(enabled) ? enabled : false;
		},
		/**
		 * The preinit method is called during the parent {@link FooTable.Table} constructor call.
		 * @param {object} data - The jQuery.data() object of the root table.
		 * @instance
		 * @protected
		 * @function
		 */
		preinit: function(data){},
		/**
		 * The init method is called during the parent {@link FooTable.Table} constructor call.
		 * @instance
		 * @protected
		 * @function
		 */
		init: function(){},
		/**
		 * This method is called from the {@link FooTable.Table#destroy} method.
		 * @instance
		 * @protected
		 * @function
		 */
		destroy: function(){},
		/**
		 * This method is called from the {@link FooTable.Table#draw} method.
		 * @instance
		 * @protected
		 * @function
		 */
		predraw: function(){},
		/**
		 * This method is called from the {@link FooTable.Table#draw} method.
		 * @instance
		 * @protected
		 * @function
		 */
		draw: function(){},
		/**
		 * This method is called from the {@link FooTable.Table#draw} method.
		 * @instance
		 * @protected
		 * @function
		 */
		postdraw: function(){}
	});

	F.components = new F.ClassFactory();

})(jQuery, FooTable);
(function ($, F) {
	/**
	 * Contains all the available options for the FooTable plugin.
	 * @name FooTable.Defaults
	 * @function
	 * @constructor
	 * @returns {FooTable.Defaults}
	 */
	F.Defaults = function () {
		/**
		 * Whether or not events raised using the {@link FooTable.Table#raise} method are propagated up the DOM. By default this is set to false and all events bubble up the DOM as per usual
		 * however the reason for this option is if we have nested tables. If false the parent table would receive all the events raised by it's children and any handlers bound to both the
		 * parent and child would be triggered which is not the desired behavior.
		 * @type {boolean}
		 * @default false
		 */
		this.stopPropagation = false;
		/**
		 * An object in which the string keys represent one or more space-separated event types and optional namespaces, and the values represent a handler function to be called for the event(s).
		 * @type {object.<string, function>}
		 * @default NULL
		 * @example <caption>This example shows how to pass an object containing the events and handlers.</caption>
		 * "on": {
		 * 	"click": function(e){
		 * 		// bind a custom click event to do something whenever the table is clicked
		 * 	},
		 * 	"init.ft.table": function(e, ft){
		 * 		// bind to the FooTable initialize event to do something
		 * 	}
		 * }
		 */
		this.on = null;
	};

	/**
	 * Contains all the default options for the plugin.
	 * @type {FooTable.Defaults}
	 */
	F.defaults = new F.Defaults();

})(jQuery, FooTable);
(function($, F){

	F.Row = F.Class.extend(/** @lends FooTable.Row */{
		/**
		 * The row class containing all the properties for a row and its' cells.
		 * @constructs
		 * @extends FooTable.Class
		 * @param {FooTable.Table} table -  The parent {@link FooTable.Table} this component belongs to.
		 * @param {Array.<FooTable.Column>} columns - The array of {@link FooTable.Column} for this row.
		 * @param {(*|HTMLElement|jQuery)} dataOrElement - Either the data for the row (create) or the element (parse) for the row.
		 * @returns {FooTable.Row}
		 */
		construct: function (table, columns, dataOrElement) {
			/**
			 * The {@link FooTable.Table} for the row.
			 * @type {FooTable.Table}
			 */
			this.ft = table;
			/**
			 * The array of {@link FooTable.Column} for this row.
			 * @type {Array.<FooTable.Column>}
			 */
			this.columns = columns;

			this.created = false;
			this.define(dataOrElement);
		},
		/**
		 * This is supplied either the object containing the values for the row or the row element/jQuery object if it exists.
		 * If supplied the element we need to set the $el property and parse the cells from it using the column index.
		 * If we have an object we parse the cells from it using the column name.
		 * @param {(object|jQuery)} dataOrElement - The row object or element to define the row.
		 */
		define: function(dataOrElement){
			/**
			 * The jQuery table row object this instance wraps.
			 * @instance
			 * @protected
			 * @type {jQuery}
			 */
			this.$el = F.is.element(dataOrElement) || F.is.jq(dataOrElement) ? $(dataOrElement) : null;
			/**
			 * The jQuery toggle element for the row.
			 * @instance
			 * @protected
			 * @type {jQuery}
			 */
			this.$toggle = $('<span/>', {'class': 'footable-toggle fooicon fooicon-plus'});

			var isObj = F.is.hash(dataOrElement),
				hasOptions = isObj && F.is.hash(dataOrElement.options) && F.is.hash(dataOrElement.value);

			/**
			 * The value of the row.
			 * @instance
			 * @protected
			 * @type {Object}
			 */
			this.value = isObj ? (hasOptions ? dataOrElement.value : dataOrElement) : null;

			/**
			 * Contains any options for the row.
			 * @type {object}
			 */
			this.o = $.extend(true, {
				expanded: false,
				classes: null,
				style: null
			}, hasOptions ? dataOrElement.options : {});

			/**
			 * Whether or not this row is expanded and will display it's detail row when there are any hidden columns.
			 * @instance
			 * @protected
			 * @type {boolean}
			 */
			this.expanded = F.is.jq(this.$el) ? (this.$el.data('expanded') || this.o.expanded) : this.o.expanded;
			/**
			 * An array of CSS classes for the row.
			 * @instance
			 * @protected
			 * @type {Array.<string>}
			 */
			this.classes = F.is.jq(this.$el) && this.$el.attr('class') ? this.$el.attr('class').match(/\S+/g) : (F.is.array(this.o.classes) ? this.o.classes : (F.is.string(this.o.classes) ? this.o.classes.match(/\S+/g) : []));
			/**
			 * The inline styles for the row.
			 * @instance
			 * @protected
			 * @type {object}
			 */
			this.style = F.is.jq(this.$el) && this.$el.attr('style') ? F.css2json(this.$el.attr('style')) : (F.is.hash(this.o.style) ? this.o.style : (F.is.string(this.o.style) ? F.css2json(this.o.style) : {}));

			/**
			 * The cells array. This is populated before the call to the {@link FooTable.Row#$create} method.
			 * @instance
			 * @type {Array.<FooTable.Cell>}
			 */
			this.cells = this.createCells();

			// this ensures the value contains the parsed cell values and not the supplied values
			var self = this;
			self.value = {};
			F.arr.each(self.cells, function(cell){
				self.value[cell.column.name] = cell.val();
			});
		},
		/**
		 * After the row has been defined this ensures that the $el property is a jQuery object by either creating or updating the current value.
		 * @instance
		 * @protected
		 * @this FooTable.Row
		 */
		$create: function(){
			if (this.created) return;
			(this.$el = F.is.jq(this.$el) ? this.$el : $('<tr/>'))
				.data('__FooTableRow__', this);

			this._setClasses(this.$el);
			this._setStyle(this.$el);

			if (this.ft.rows.toggleColumn == 'last') this.$toggle.addClass('last-column');

			this.$details = $('<tr/>', { 'class': 'footable-detail-row' })
				.append($('<td/>', { colspan: this.ft.columns.visibleColspan })
					.append($('<table/>', { 'class': 'footable-details ' + this.ft.classes.join(' ') })
						.append('<tbody/>')));

			var self = this;
			F.arr.each(self.cells, function(cell){
				if (!cell.created) cell.$create();
				self.$el.append(cell.$el);
			});
			self.$el.off('click.ft.row').on('click.ft.row', { self: self }, self._onToggle);
			this.created = true;
		},
		/**
		 * This is called during the construct method and uses the current column definitions to create an array of {@link FooTable.Cell} objects for the row.
		 * @instance
		 * @protected
		 * @returns {Array.<FooTable.Cell>}
		 * @this FooTable.Row
		 */
		createCells: function(){
			var self = this;
			return F.arr.map(self.columns, function(col){
				return col.createCell(self);
			});
		},
		/**
		 * Allows easy access to getting or setting the row's data. If the data is set all associated properties are also updated along with the actual element.
		 * Using this method also allows us to supply an object containing options and the data for the row at the same time.
		 * @instance
		 * @param {object} [data] - The data to set for the row. If not supplied the current value of the row is returned.
		 * @param {boolean} [redraw=true] - Whether or not to redraw the table once the value has been set.
		 * @param {boolean} [redrawSelf=true] - Whether or not to redraw the row itself once the value has been set, if `false` this will override the supplied `redraw` value and prevent the table from redrawing as well.
		 * @returns {(*|undefined)}
		 */
		val: function(data, redraw, redrawSelf){
			var self = this;
			if (!F.is.hash(data)){
				// get - check the value property and build it from the cells if required.
				if (!F.is.hash(this.value) || F.is.emptyObject(this.value)){
					this.value = {};
					F.arr.each(this.cells, function(cell){
						if (!cell.column.internal){
							self.value[cell.column.name] = cell.val();
						}
					});
				}
				return this.value;
			}
			// set
			this.collapse(false);
			var isObj = F.is.hash(data),
				hasOptions = isObj && F.is.hash(data.options) && F.is.hash(data.value);

			this.o = $.extend(true, {
				expanded: self.expanded,
				classes: self.classes,
				style: self.style
			}, hasOptions ? data.options : {});

			this.expanded = this.o.expanded;
			this.classes = F.is.array(this.o.classes) ? this.o.classes : (F.is.string(this.o.classes) ? this.o.classes.match(/\S+/g) : []);
			this.style = F.is.hash(this.o.style) ? this.o.style : (F.is.string(this.o.style) ? F.css2json(this.o.style) : {});
			if (isObj) {
				if ( hasOptions ) data = data.value;
				if (F.is.hash(this.value)){
					for (var prop in data) {
						if (!data.hasOwnProperty(prop)) continue;
						this.value[prop] = data[prop];
					}
				} else {
					this.value = data;
				}
			} else {
				this.value = null;
			}

			redrawSelf = F.is.boolean(redrawSelf) ? redrawSelf : true;
			F.arr.each(this.cells, function(cell){
				if (!cell.column.internal && F.is.defined(self.value[cell.column.name])){
					cell.val(self.value[cell.column.name], false, redrawSelf);
				}
			});

			if (this.created && redrawSelf){
				this._setClasses(this.$el);
				this._setStyle(this.$el);
				if (F.is.boolean(redraw) ? redraw : true) this.draw();
			}
		},
		_setClasses: function($el){
			var hasClasses = !F.is.emptyArray(this.classes),
				classes = null;
			$el.removeAttr('class');
			if (!hasClasses) return;
			else classes = this.classes.join(' ');
			if (!F.is.emptyString(classes)){
				$el.addClass(classes);
			}
		},
		_setStyle: function($el){
			var hasStyle = !F.is.emptyObject(this.style),
				style = null;
			$el.removeAttr('style');
			if (!hasStyle) return;
			else style = this.style;
			if (F.is.hash(style)){
				$el.css(style);
			}
		},
		/**
		 * Sets the current row to an expanded state displaying any hidden columns in a detail row just below it.
		 * @instance
		 * @fires FooTable.Row#"expand.ft.row"
		 */
		expand: function(){
			if (!this.created) return;
			var self = this;
			/**
			 * The expand.ft.row event is raised before the the row is expanded.
			 * Calling preventDefault on this event will stop the row being expanded.
			 * @event FooTable.Row#"expand.ft.row"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {FooTable.Row} row - The row about to be expanded.
			 */
			self.ft.raise('expand.ft.row',[self]).then(function(){
				self.__hidden__ = F.arr.map(self.cells, function(cell){
					return cell.column.hidden && cell.column.visible ? cell : null;
				});

				if (self.__hidden__.length > 0){
					self.$details.insertAfter(self.$el)
						.children('td').first()
						.attr('colspan', self.ft.columns.visibleColspan);

					F.arr.each(self.__hidden__, function(cell){
						cell.collapse();
					});
				}
				self.$el.attr('data-expanded', true);
				self.$toggle.removeClass('fooicon-plus').addClass('fooicon-minus');
				self.expanded = true;
				self.ft.raise('expanded.ft.row', [self]);
			});
		},
		/**
		 * Sets the current row to a collapsed state removing the detail row if it exists.
		 * @instance
		 * @param {boolean} [setExpanded] - Whether or not to set the {@link FooTable.Row#expanded} property to false.
		 * @fires FooTable.Row#"collapse.ft.row"
		 */
		collapse: function(setExpanded){
			if (!this.created) return;
			var self = this;
			/**
			 * The collapse.ft.row event is raised before the the row is collapsed.
			 * Calling preventDefault on this event will stop the row being collapsed.
			 * @event FooTable.Row#"collapse.ft.row"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {FooTable.Row} row - The row about to be expanded.
			 */
			self.ft.raise('collapse.ft.row',[self]).then(function(){
				F.arr.each(self.__hidden__, function(cell){
					cell.restore();
				});
				self.$details.detach();
				self.$el.removeAttr('data-expanded');
				self.$toggle.removeClass('fooicon-minus').addClass('fooicon-plus');
				if (F.is.boolean(setExpanded) ? setExpanded : true) self.expanded = false;
				self.ft.raise('collapsed.ft.row', [self]);
			});
		},
		/**
		 * Prior to drawing this moves the details contents back to there original cells and detaches the toggle element from the row.
		 * @instance
		 * @param {boolean} [detach] - Whether or not to detach the row.
		 * @this FooTable.Row
		 */
		predraw: function(detach){
			if (this.created){
				if (this.expanded){
					this.collapse(false);
				}
				this.$toggle.detach();
				detach = F.is.boolean(detach) ? detach : true;
				if (detach) this.$el.detach();
			}
		},
		/**
		 * Draws the current row and cells.
		 * @instance
		 * @this FooTable.Row
		 */
		draw: function($parent){
			if (!this.created) this.$create();
			if (F.is.jq($parent)) $parent.append(this.$el);
			var self = this;
			F.arr.each(self.cells, function(cell){
				cell.$el.css('display', (cell.column.hidden || !cell.column.visible  ? 'none' : 'table-cell'));
				if (self.ft.rows.showToggle && self.ft.columns.hasHidden){
					if ((self.ft.rows.toggleColumn == 'first' && cell.column.index == self.ft.columns.firstVisibleIndex)
						|| (self.ft.rows.toggleColumn == 'last' && cell.column.index == self.ft.columns.lastVisibleIndex)) {
						cell.$el.prepend(self.$toggle);
					}
				}
				cell.$el.add(cell.column.$el).removeClass('footable-first-visible footable-last-visible');
				if (cell.column.index == self.ft.columns.firstVisibleIndex){
					cell.$el.add(cell.column.$el).addClass('footable-first-visible');
				}
				if (cell.column.index == self.ft.columns.lastVisibleIndex){
					cell.$el.add(cell.column.$el).addClass('footable-last-visible');
				}
			});
			if (this.expanded){
				this.expand();
			}
		},
		/**
		 * Toggles the row between it's expanded and collapsed state if there are hidden columns.
		 * @instance
		 * @this FooTable.Row
		 */
		toggle: function(){
			if (this.created && this.ft.columns.hasHidden){
				if (this.expanded) this.collapse();
				else this.expand();
			}
		},
		/**
		 * Handles the toggle click event for rows.
		 * @instance
		 * @param {jQuery.Event} e - The jQuery.Event object for the click event.
		 * @private
		 * @this jQuery
		 */
		_onToggle: function (e) {
			var self = e.data.self;
			// only execute the toggle if the event.target is one of the approved initiators
			if ($(e.target).is(self.ft.rows.toggleSelector)){
				self.toggle();
			}
		}
	});

})(jQuery, FooTable);

(function ($, F) {

	/**
	 * An array of all currently loaded instances of the plugin.
	 * @protected
	 * @readonly
	 * @type {Array.<FooTable.Table>}
	 */
	F.instances = [];

	F.Table = F.Class.extend(/** @lends FooTable.Table */{
		/**
		 * This class is the core of the plugin and drives the logic of all components.
		 * @constructs
		 * @this FooTable.Table
		 * @extends FooTable.Class
		 * @param {(HTMLTableElement|jQuery)} element - The element or jQuery table object to bind the plugin to.
		 * @param {object} options - The options to initialize the plugin with.
		 * @param {function} [ready] - A callback function to execute once the plugin is initialized.
		 * @returns {FooTable.Table}
		 */
		construct: function (element, options, ready) {
			//BEGIN MEMBERS
			/**
			 * The timeout ID for the resize event.
			 * @instance
			 * @private
			 * @type {?number}
			 */
			this._resizeTimeout = null;
			/**
			 * The ID of the FooTable instance.
			 * @instance
			 * @type {number}
			 */
			this.id = F.instances.push(this);
			/**
			 * Whether or not the plugin and all components and add-ons are fully initialized.
			 * @instance
			 * @type {boolean}
			 */
			this.initialized = false;
			/**
			 * The jQuery table object the plugin is bound to.
			 * @instance
			 * @type {jQuery}
			 */
			this.$el = (F.is.jq(element) ? element : $(element)).first(); // ensure one table, one instance
			/**
			 * A loader jQuery instance
			 * @instance
			 * @type {jQuery}
			 */
			this.$loader = $('<div/>', { 'class': 'footable-loader' }).append($('<span/>', {'class': 'fooicon fooicon-loader'}));
			/**
			 * The options for the plugin. This is a merge of user defined options and the default options.
			 * @instance
			 * @type {object}
			 */
			this.o = $.extend(true, {}, F.defaults, options);
			/**
			 * The jQuery data object for the table at initialization.
			 * @instance
			 * @type {object}
			 */
			this.data = this.$el.data() || {};
			/**
			 * An array of all CSS classes on the table that do not start with "footable".
			 * @instance
			 * @protected
			 * @type {Array.<string>}
			 */
			this.classes = [];
			/**
			 * All components for this instance of the plugin. These are executed in the order they appear in the array for the initialize phase and in reverse order for the destroy phase of the plugin.
			 * @instance
			 * @protected
			 * @type {object}
			 * @prop {Array.<FooTable.Component>} internal - The internal components for the plugin. These are executed either before all other components in the initialize phase or after them in the destroy phase of the plugin.
			 * @prop {Array.<FooTable.Component>} core - The core components for the plugin. These are executed either after the internal components in the initialize phase or before them in the destroy phase of the plugin.
			 * @prop {Array.<FooTable.Component>} custom - The custom components for the plugin. These are executed either after the core components in the initialize phase or before them in the destroy phase of the plugin.
			 */
			this.components = F.components.load((F.is.hash(this.data.components) ? this.data.components : this.o.components), this);
			/**
			 * The breakpoints component for this instance of the plugin.
			 * @instance
			 * @type {FooTable.Breakpoints}
			 */
			this.breakpoints = this.use(FooTable.Breakpoints);
			/**
			 * The columns component for this instance of the plugin.
			 * @instance
			 * @type {FooTable.Columns}
			 */
			this.columns = this.use(FooTable.Columns);
			/**
			 * The rows component for this instance of the plugin.
			 * @instance
			 * @type {FooTable.Rows}
			 */
			this.rows = this.use(FooTable.Rows);

			//END MEMBERS
			this._construct(ready);
		},
		/**
		 * Once all properties are set this performs the actual initialization of the plugin calling the {@link FooTable.Table#_preinit} and
		 * {@link FooTable.Table#_init} methods as well as raising the {@link FooTable.Table#"ready.ft.table"} event.
		 * @this FooTable.Table
		 * @instance
		 * @param {function} [ready] - A callback function to execute once the plugin is initialized.
		 * @private
		 * @returns {jQuery.Promise}
		 * @fires FooTable.Table#"ready.ft.table"
		 */
		_construct: function(ready){
			var self = this;
			return this._preinit().then(function(){
				return self._init().then(function(){
					/**
					 * The ready.ft.table event is raised after the plugin has been initialized and the table drawn.
					 * Calling preventDefault on this event will stop the ready callback being executed.
					 * @event FooTable.Table#"ready.ft.table"
					 * @param {jQuery.Event} e - The jQuery.Event object for the event.
					 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
					 */
					return self.raise('ready.ft.table').then(function(){
						if (F.is.fn(ready)) ready.call(self, self);
					});
				});
			}).always(function(arg){
				self.$el.show();
				if (F.is.error(arg)){
					console.error('FooTable: unhandled error thrown during initialization.', arg);
				}
			});
		},
		/**
		 * The preinit method is called prior to the plugins actual initialization and provides itself and it's components an opportunity to parse any additional option values.
		 * @instance
		 * @private
		 * @returns {jQuery.Promise}
		 * @fires FooTable.Table#"preinit.ft.table"
		 */
		_preinit: function(){
			var self = this;
			/**
			 * The preinit.ft.table event is raised before any components.
			 * Calling preventDefault on this event will disable the entire plugin.
			 * @event FooTable.Table#"preinit.ft.table"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {object} data - The jQuery data object from the root table element.
			 */
			return this.raise('preinit.ft.table', [self.data]).then(function(){
				var classes = (self.$el.attr('class') || '').match(/\S+/g) || [];

				self.o.ajax = F.checkFnValue(self, self.data.ajax, self.o.ajax);
				self.o.stopPropagation = F.is.boolean(self.data.stopPropagation)
					? self.data.stopPropagation
					: self.o.stopPropagation;

				for (var i = 0, len = classes.length; i < len; i++){
					if (!F.str.startsWith(classes[i], 'footable')) self.classes.push(classes[i]);
				}

				self.$el.hide().after(self.$loader);
				return self.execute(false, false, 'preinit', self.data);
			});
		},
		/**
		 * Initializes this instance of the plugin and calls the callback function if one is supplied once complete.
		 * @this FooTable.Table
		 * @instance
		 * @private
		 * @return {jQuery.Promise}
		 * @fires FooTable.Table#"init.ft.table"
		 */
		_init: function(){
			var self = this;
			/**
			 * The init.ft.table event is raised before any components are initialized.
			 * Calling preventDefault on this event will disable the entire plugin.
			 * @event FooTable.Table#"init.ft.table"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */
			return self.raise('init.ft.table').then(function(){
				var $thead = self.$el.children('thead'),
					$tbody = self.$el.children('tbody'),
					$tfoot = self.$el.children('tfoot');
				self.$el.addClass('footable footable-' + self.id);
				if (F.is.hash(self.o.on)) self.$el.on(self.o.on);
				if ($tfoot.length == 0) self.$el.append($tfoot = $('<tfoot/>'));
				if ($tbody.length == 0) self.$el.append('<tbody/>');
				if ($thead.length == 0) self.$el.prepend($thead = $('<thead/>'));
				return self.execute(false, true, 'init').then(function(){
					self.$el.data('__FooTable__', self);
					if ($tfoot.children('tr').length == 0) $tfoot.remove();
					if ($thead.children('tr').length == 0) $thead.remove();

					/**
					 * The postinit.ft.table event is raised after any components are initialized but before the table is
					 * drawn for the first time.
					 * Calling preventDefault on this event will disable the initial drawing of the table.
					 * @event FooTable.Table#"postinit.ft.table"
					 * @param {jQuery.Event} e - The jQuery.Event object for the event.
					 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
					 */
					return self.raise('postinit.ft.table').then(function(){
						return self.draw();
					}).always(function(){
						$(window).off('resize.ft'+self.id, self._onWindowResize)
							.on('resize.ft'+self.id, { self: self }, self._onWindowResize);
						self.initialized = true;
					});
				});
			});
		},
		/**
		 * Destroys this plugin removing it from the table.
		 * @this FooTable.Table
		 * @instance
		 * @fires FooTable.Table#"destroy.ft.table"
		 */
		destroy: function () {
			var self = this;
			/**
			 * The destroy.ft.table event is called before all core components.
			 * Calling preventDefault on this event will prevent the entire plugin from being destroyed.
			 * @event FooTable.Table#"destroy.ft.table"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */
			return self.raise('destroy.ft.table').then(function(){
				return self.execute(true, true, 'destroy').then(function () {
					self.$el.removeData('__FooTable__').removeClass('footable-' + self.id);
					if (F.is.hash(self.o.on)) self.$el.off(self.o.on);
					$(window).off('resize.ft'+self.id, self._onWindowResize);
					self.initialized = false;
					F.instances[self.id] = null;
				});
			}).fail(function(err){
				if (F.is.error(err)){
					console.error('FooTable: unhandled error thrown while destroying the plugin.', err);
				}
			});
		},
		/**
		 * Raises an event on this instance supplying the args array as additional parameters to the handlers.
		 * @this FooTable.Table
		 * @instance
		 * @param {string} eventName - The name of the event to raise, this can include namespaces.
		 * @param {Array} [args] - An array containing additional parameters to be passed to any bound handlers.
		 * @returns {jQuery.Event}
		 */
		raise: function(eventName, args){
			var self = this,
				debug = F.__debug__ && (F.is.emptyArray(F.__debug_options__.events) || F.arr.any(F.__debug_options__.events, function(name){ return F.str.contains(eventName, name); }));
			args = args || [];
			args.unshift(this);
			return $.Deferred(function(d){
				var evt = $.Event(eventName);
				if (self.o.stopPropagation == true){
					self.$el.one(eventName, function (e) {e.stopPropagation();});
				}
				if (debug) console.log('FooTable:'+eventName+': ', args);
				self.$el.trigger(evt, args);
				if (evt.isDefaultPrevented()){
					if (debug) console.log('FooTable: default prevented for the "'+eventName+'" event.');
					d.reject(evt);
				}	else d.resolve(evt);
			});
		},
		/**
		 * Attempts to retrieve the instance of the supplied component type for this instance.
		 * @this FooTable.Table
		 * @instance
		 * @param {object} type - The content type to retrieve for this instance.
		 * @returns {(*|null)}
		 */
		use: function(type){
			for (var i = 0, len = this.components.length; i < len; i++){
				if (this.components[i] instanceof type) return this.components[i];
			}
			return null;
		},
		/**
		 * Performs the drawing of the table.
		 * @this FooTable.Table
		 * @instance
		 * @protected
		 * @returns {jQuery.Promise}
		 * @fires FooTable.Table#"predraw.ft.table"
		 * @fires FooTable.Table#"draw.ft.table"
		 * @fires FooTable.Table#"postdraw.ft.table"
		 */
		draw: function () {
			var self = this;

			// Clone the current table and insert it into the original's place
			var $elCopy = self.$el.clone().insertBefore(self.$el);

			// Detach `self.$el` from the DOM, retaining its event handlers
			self.$el.detach();

			// when drawing the order that the components are executed is important so chain the methods but use promises to retain async safety.
			return self.execute(false, true, 'predraw').then(function(){
				/**
				 * The predraw.ft.table event is raised after all core components and add-ons have executed there predraw functions but before they execute there draw functions.
				 * @event FooTable.Table#"predraw.ft.table"
				 * @param {jQuery.Event} e - The jQuery.Event object for the event.
				 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
				 */
				return self.raise('predraw.ft.table').then(function(){
					return self.execute(false, true, 'draw').then(function(){
						/**
						 * The draw.ft.table event is raised after all core components and add-ons have executed there draw functions.
						 * @event FooTable.Table#"draw.ft.table"
						 * @param {jQuery.Event} e - The jQuery.Event object for the event.
						 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
						 */
						return self.raise('draw.ft.table').then(function(){
							return self.execute(false, true, 'postdraw').then(function(){
								/**
								 * The postdraw.ft.table event is raised after all core components and add-ons have executed there postdraw functions.
								 * @event FooTable.Table#"postdraw.ft.table"
								 * @param {jQuery.Event} e - The jQuery.Event object for the event.
								 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
								 */
								return self.raise('postdraw.ft.table');
							});
						});
					});
				});
			}).fail(function(err){
				if (F.is.error(err)){
					console.error('FooTable: unhandled error thrown during a draw operation.', err);
				}
			}).always(function(){
				// Replace the copy that we added above with the modified `self.$el`
				$elCopy.replaceWith(self.$el);
				self.$loader.remove();
			});
		},
		/**
		 * Executes the specified method with the optional number of parameters on all components and waits for the promise from each to be resolved before executing the next.
		 * @this FooTable.Table
		 * @instance
		 * @protected
		 * @param {boolean} reverse - Whether or not to execute the component methods in the reverse order to what they were registered in.
		 * @param {boolean} enabled - Whether or not to execute the method on enabled components only.
		 * @param {string} methodName - The name of the method to execute.
		 * @param {*} [param1] - The first parameter for the method.
		 * @param {...*} [paramN] - Any number of additional parameters for the method.
		 * @returns {jQuery.Promise}
		 */
		execute: function(reverse, enabled, methodName, param1, paramN){
			var self = this, args = Array.prototype.slice.call(arguments);
			reverse = args.shift();
			enabled = args.shift();
			var components = enabled ? F.arr.get(self.components, function(c){ return c.enabled; }) : self.components.slice(0);
			args.unshift(reverse ? components.reverse() : components);
			return self._execute.apply(self, args);
		},
		/**
		 * Executes the specified method with the optional number of parameters on all supplied components waiting for the result of each before executing the next.
		 * @this FooTable.Table
		 * @instance
		 * @private
		 * @param {Array.<FooTable.Component>} components - The components to call the method on.
		 * @param {string} methodName - The name of the method to execute
		 * @param {*} [param1] - The first parameter for the method.
		 * @param {...*} [paramN] - Any additional parameters for the method.
		 * @returns {jQuery.Promise}
		 */
		_execute: function(components, methodName, param1, paramN){
			if (!components || !components.length) return $.when();
			var self = this, args = Array.prototype.slice.call(arguments),
				component;
			components = args.shift();
			methodName = args.shift();
			component = components.shift();

			if (!F.is.fn(component[methodName]))
				return self._execute.apply(self, [components, methodName].concat(args));

			return $.Deferred(function(d){
				try {
					var result = component[methodName].apply(component, args);
					if (F.is.promise(result)){
						return result.then(d.resolve, d.reject);
					} else {
						d.resolve(result);
					}
				} catch (err) {
					d.reject(err);
				}
			}).then(function(){
				return self._execute.apply(self, [components, methodName].concat(args));
			});
		},
		/**
		 * Listens to the window resize event and performs a check to see if the breakpoint has changed.
		 * @this window
		 * @instance
		 * @private
		 * @fires FooTable.Table#"resize.ft.table"
		 */
		_onWindowResize: function (e) {
			var self = e.data.self;
			if (self._resizeTimeout != null) { clearTimeout(self._resizeTimeout); }
			self._resizeTimeout = setTimeout(function () {
				self._resizeTimeout = null;
				/**
				 * The resize event is raised a short time after window resize operations cease.
				 * @event FooTable.Table#"resize.ft.table"
				 * @param {jQuery.Event} e - The jQuery.Event object for the event.
				 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
				 */
				self.raise('resize.ft.table').then(function(){
					self.breakpoints.check();
				});
			}, 300);
		}
	});

})(jQuery, FooTable);
(function($, F){

	F.ArrayColumn = F.Column.extend(/** @lends FooTable.ArrayColumn */{
		/**
		 * @summary A column to handle Array values.
		 * @constructs
		 * @extends FooTable.Column
		 * @param {FooTable.Table} instance -  The parent {@link FooTable.Table} this column belongs to.
		 * @param {object} definition - An object containing all the properties to set for the column.
		 */
		construct: function(instance, definition) {
			this._super(instance, definition, 'array');
		},
		/**
		 * @summary Parses the supplied value or element to retrieve a column value.
		 * @description This is supplied either the cell value or jQuery object to parse. This method will return either the Array containing the values or null.
		 * @instance
		 * @protected
		 * @param {(*|jQuery)} valueOrElement - The value or jQuery cell object.
		 * @returns {(array|null)}
		 */
		parser: function(valueOrElement){
			if (F.is.element(valueOrElement) || F.is.jq(valueOrElement)){ // use jQuery to get the value
				var $el = $(valueOrElement), data = $el.data('value'); // .data() will automatically convert a JSON string to an array
				if (F.is.array(data)) return data;
				data = $el.html();
				try {
					data = JSON.parse(data);
				} catch(err) {
					data = null;
				}
				return F.is.array(data) ? data : null; // if we have an array return it
			}
			if (F.is.array(valueOrElement)) return valueOrElement; // if we have an array return it
			return null; // otherwise we have no value so return null
		},
		/**
		 * @summary Formats the column value and creates the HTML seen within a cell.
		 * @description This is supplied the value retrieved from the {@link FooTable.ArrayColumn#parser} function and must return a string, HTMLElement or jQuery object.
		 * The return value from this function is what is displayed in the cell in the table.
		 * @instance
		 * @protected
		 * @param {?Array} value - The value to format.
		 * @param {object} options - The current plugin options.
		 * @param {object} rowData - An object containing the current row data.
		 * @returns {(string|HTMLElement|jQuery)}
		 */
		formatter: function(value, options, rowData){
			return F.is.array(value) ? JSON.stringify(value) : '';
		}
	});

	F.columns.register('array', F.ArrayColumn);

})(jQuery, FooTable);
(function($, F){

	if (F.is.undef(window.moment)){
		// The DateColumn requires moment.js to parse and format date values. Goto http://momentjs.com/ to get it.
		return;
	}

	F.DateColumn = F.Column.extend(/** @lends FooTable.DateColumn */{
		/**
		 * The date column class is used to handle date values. This column is dependent on [moment.js]{@link http://momentjs.com/} to provide date parsing and formatting functionality.
		 * @constructs
		 * @extends FooTable.Column
		 * @param {FooTable.Table} instance -  The parent {@link FooTable.Table} this column belongs to.
		 * @param {object} definition - An object containing all the properties to set for the column.
		 * @returns {FooTable.DateColumn}
		 */
		construct: function(instance, definition){
			this._super(instance, definition, 'date');
			/**
			 * The format string to use when parsing and formatting dates.
			 * @instance
			 * @type {string}
			 */
			this.formatString = F.is.string(definition.formatString) ? definition.formatString : 'MM-DD-YYYY';
		},
		/**
		 * This is supplied either the cell value or jQuery object to parse. Any value can be returned from this method and will be provided to the {@link FooTable.DateColumn#format} function
		 * to generate the cell contents.
		 * @instance
		 * @protected
		 * @param {(*|jQuery)} valueOrElement - The value or jQuery cell object.
		 * @returns {(moment|null)}
		 * @this FooTable.DateColumn
		 */
		parser: function(valueOrElement){
			if (F.is.element(valueOrElement) || F.is.jq(valueOrElement)){
				var data = $(valueOrElement).data('value');
				valueOrElement = F.is.defined(data) ? data : $(valueOrElement).text();
				if (F.is.string(valueOrElement)) valueOrElement = isNaN(valueOrElement) ? valueOrElement : +valueOrElement;
			}
			if (F.is.date(valueOrElement)) return moment(valueOrElement);
			if (F.is.object(valueOrElement) && F.is.boolean(valueOrElement._isAMomentObject)) return valueOrElement;
			if (F.is.string(valueOrElement)){
				// if it looks like a number convert it and do nothing else otherwise create a new moment using the string value and formatString
				if (isNaN(valueOrElement)){
					return moment(valueOrElement, this.formatString);
				} else {
					valueOrElement = +valueOrElement;
				}
			}
			if (F.is.number(valueOrElement)){
				return moment(valueOrElement);
			}
			return null;
		},
		/**
		 * This is supplied the value retrieved from the {@link FooTable.DateColumn#parser} function and must return a string, HTMLElement or jQuery object.
		 * The return value from this function is what is displayed in the cell in the table.
		 * @instance
		 * @protected
		 * @param {*} value - The value to format.
		 * @param {object} options - The current plugin options.
		 * @param {object} rowData - An object containing the current row data.
		 * @returns {(string|HTMLElement|jQuery)}
		 * @this FooTable.DateColumn
		 */
		formatter: function(value, options, rowData){
			return F.is.object(value) && F.is.boolean(value._isAMomentObject) && value.isValid() ? value.format(this.formatString) : '';
		},
		/**
		 * This is supplied either the cell value or jQuery object to parse. A string value must be returned from this method and will be used during filtering operations.
		 * @param {(*|jQuery)} valueOrElement - The value or jQuery cell object.
		 * @returns {string}
		 * @this FooTable.DateColumn
		 */
		filterValue: function(valueOrElement){
			// if we have an element or a jQuery object use jQuery to get the value
			if (F.is.element(valueOrElement) || F.is.jq(valueOrElement)) valueOrElement = $(valueOrElement).data('filterValue') || $(valueOrElement).text();
			// if options are supplied with the value
			if (F.is.hash(valueOrElement) && F.is.hash(valueOrElement.options)){
				if (F.is.string(valueOrElement.options.filterValue)) valueOrElement = valueOrElement.options.filterValue;
				if (F.is.defined(valueOrElement.value)) valueOrElement = valueOrElement.value;
			}
			// if the value is a moment object just return the formatted value
			if (F.is.object(valueOrElement) && F.is.boolean(valueOrElement._isAMomentObject)) return valueOrElement.format(this.formatString);
			// if its a string
			if (F.is.string(valueOrElement)){
				// if its not a number return it
				if (isNaN(valueOrElement)){
					return valueOrElement;
				} else { // otherwise convert it and carry on
					valueOrElement = +valueOrElement;
				}
			}
			// if the value is a number or date convert to a moment object and return the formatted result.
			if (F.is.number(valueOrElement) || F.is.date(valueOrElement)){
				return moment(valueOrElement).format(this.formatString);
			}
			// try use the native toString of the value if its not undefined or null
			if (F.is.defined(valueOrElement) && valueOrElement != null) return valueOrElement+'';
			return ''; // otherwise we have no value so return an empty string
		}
	});

	F.columns.register('date', F.DateColumn);

})(jQuery, FooTable);

(function($, F){

	F.HTMLColumn = F.Column.extend(/** @lends FooTable.HTMLColumn */{
		/**
		 * The HTML column class is used to handle any raw HTML columns.
		 * @constructs
		 * @extends FooTable.Column
		 * @param {FooTable.Table} instance -  The parent {@link FooTable.Table} this column belongs to.
		 * @param {object} definition - An object containing all the properties to set for the column.
		 * @returns {FooTable.HTMLColumn}
		 */
		construct: function(instance, definition){
			this._super(instance, definition, 'html');
		},
		/**
		 * This is supplied either the cell value or jQuery object to parse. Any value can be returned from this method and will be provided to the {@link FooTable.HTMLColumn#format} function
		 * to generate the cell contents.
		 * @instance
		 * @protected
		 * @param {(*|jQuery)} valueOrElement - The value or jQuery cell object.
		 * @returns {(jQuery|null)}
		 * @this FooTable.HTMLColumn
		 */
		parser: function(valueOrElement){
			if (F.is.string(valueOrElement)) valueOrElement = $($.trim(valueOrElement));
			if (F.is.element(valueOrElement)) valueOrElement = $(valueOrElement);
			if (F.is.jq(valueOrElement)){
				var tagName = valueOrElement.prop('tagName').toLowerCase();
				if (tagName == 'td' || tagName == 'th'){
					var data = valueOrElement.data('value');
					return F.is.defined(data) ? data : valueOrElement.contents();
				}
				return valueOrElement;
			}
			return null;
		}
	});

	F.columns.register('html', F.HTMLColumn);

})(jQuery, FooTable);
(function($, F){

	F.NumberColumn = F.Column.extend(/** @lends FooTable.NumberColumn */{
		/**
		 * The number column class is used to handle simple number columns.
		 * @constructs
		 * @extends FooTable.Column
		 * @param {FooTable.Table} instance -  The parent {@link FooTable.Table} this column belongs to.
		 * @param {object} definition - An object containing all the properties to set for the column.
		 * @returns {FooTable.NumberColumn}
		 */
		construct: function(instance, definition){
			this._super(instance, definition, 'number');
			this.decimalSeparator = F.is.string(definition.decimalSeparator) ? definition.decimalSeparator : '.';
			this.thousandSeparator = F.is.string(definition.thousandSeparator) ? definition.thousandSeparator : ',';
			this.decimalSeparatorRegex = new RegExp(F.str.escapeRegExp(this.decimalSeparator), 'g');
			this.thousandSeparatorRegex = new RegExp(F.str.escapeRegExp(this.thousandSeparator), 'g');
			this.cleanRegex = new RegExp('[^\-0-9' + F.str.escapeRegExp(this.decimalSeparator) + ']', 'g');
		},
		/**
		 * This is supplied either the cell value or jQuery object to parse. Any value can be returned from this method and will be provided to the {@link FooTable.Column#formatter} function
		 * to generate the cell contents.
		 * @instance
		 * @protected
		 * @param {(*|jQuery)} valueOrElement - The value or jQuery cell object.
		 * @returns {(number|null)}
		 * @this FooTable.NumberColumn
		 */
		parser: function(valueOrElement){
			if (F.is.element(valueOrElement) || F.is.jq(valueOrElement)){
				var data = $(valueOrElement).data('value');
				valueOrElement = F.is.defined(data) ? data : $(valueOrElement).text().replace(this.cleanRegex, '');
			}
			if (F.is.string(valueOrElement)){
				valueOrElement = valueOrElement.replace(this.thousandSeparatorRegex, '').replace(this.decimalSeparatorRegex, '.');
				valueOrElement = parseFloat(valueOrElement);
			}
			if (F.is.number(valueOrElement)) return valueOrElement;
			return null;
		},
		/**
		 * This is supplied the value retrieved from the {@link FooTable.NumberColumn#parse} function and must return a string, HTMLElement or jQuery object.
		 * The return value from this function is what is displayed in the cell in the table.
		 * @instance
		 * @protected
		 * @param {number} value - The value to format.
		 * @param {object} options - The current plugin options.
		 * @param {object} rowData - An object containing the current row data.
		 * @returns {(string|HTMLElement|jQuery)}
		 * @this FooTable.NumberColumn
		 */
		formatter: function(value, options, rowData){
			if (value == null) return '';
			var s = (value + '').split('.');
			if (s.length == 2 && s[0].length > 3) {
				s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, this.thousandSeparator);
			}
			return s.join(this.decimalSeparator);
		}
	});

	F.columns.register('number', F.NumberColumn);

})(jQuery, FooTable);
(function($, F){

	F.ObjectColumn = F.Column.extend(/** @lends FooTable.ObjectColumn */{
		/**
		 * @summary A column to handle Object values.
		 * @constructs
		 * @extends FooTable.Column
		 * @param {FooTable.Table} instance -  The parent {@link FooTable.Table} this column belongs to.
		 * @param {object} definition - An object containing all the properties to set for the column.
		 */
		construct: function(instance, definition) {
			this._super(instance, definition, 'object');
		},
		/**
		 * @summary Parses the supplied value or element to retrieve a column value.
		 * @description This is supplied either the cell value or jQuery object to parse. This method will return either the Object containing the values or null.
		 * @instance
		 * @protected
		 * @param {(*|jQuery)} valueOrElement - The value or jQuery cell object.
		 * @returns {(object|null)}
		 */
		parser: function(valueOrElement){
			if (F.is.element(valueOrElement) || F.is.jq(valueOrElement)){ // use jQuery to get the value
				var $el = $(valueOrElement), data = $el.data('value'); // .data() will automatically convert a JSON string to an object
				if (F.is.object(data)) return data;
				data = $el.html();
				try {
					data = JSON.parse(data);
				} catch(err) {
					data = null;
				}
				return F.is.object(data) ? data : null; // if we have an object return it
			}
			if (F.is.object(valueOrElement)) return valueOrElement; // if we have an object return it
			return null; // otherwise we have no value so return null
		},
		/**
		 * @summary Formats the column value and creates the HTML seen within a cell.
		 * @description This is supplied the value retrieved from the {@link FooTable.ObjectColumn#parser} function and must return a string, HTMLElement or jQuery object.
		 * The return value from this function is what is displayed in the cell in the table.
		 * @instance
		 * @protected
		 * @param {*} value - The value to format.
		 * @param {object} options - The current plugin options.
		 * @param {object} rowData - An object containing the current row data.
		 * @returns {(string|HTMLElement|jQuery)}
		 */
		formatter: function(value, options, rowData){
			return F.is.object(value) ? JSON.stringify(value) : '';
		}
	});

	F.columns.register('object', F.ObjectColumn);

})(jQuery, FooTable);
(function($, F){

	F.Breakpoint = F.Class.extend(/** @lends FooTable.Breakpoint */{
		/**
		 * The breakpoint class containing the name and maximum width for the breakpoint.
		 * @constructs
		 * @extends FooTable.Class
		 * @param {string} name - The name of the breakpoint. Must contain no spaces or special characters.
		 * @param {number} width - The width of the breakpoint in pixels.
		 * @returns {FooTable.Breakpoint}
		 */
		construct: function(name, width){
			/**
			 * The name of the breakpoint.
			 * @type {string}
			 */
			this.name = name;
			/**
			 * The maximum width of the breakpoint in pixels.
			 * @type {number}
			 */
			this.width = width;
		}
	});

})(jQuery, FooTable);
(function($, F){
	F.Breakpoints = F.Component.extend(/** @lends FooTable.Breakpoints */{
		/**
		 * Contains the logic to calculate and apply breakpoints for the plugin.
		 * @constructs
		 * @extends FooTable.Component
		 * @param {FooTable.Table} table -  The parent {@link FooTable.Table} this component belongs to.
		 * @returns {FooTable.Breakpoints}
		 */
		construct: function(table){
			// call the base class constructor
			this._super(table, true);

			/* PROTECTED */
			/**
			 * This provides a shortcut to the {@link FooTable.Table#options} object.
			 * @protected
			 * @type {FooTable.Table#options}
			 */
			this.o = table.o;

			/* PUBLIC */
			/**
			 * The current breakpoint.
			 * @type {FooTable.Breakpoint}
			 */
			this.current = null;
			/**
			 * An array of {@link FooTable.Breakpoint} objects created from parsing the options.
			 * @type {Array.<FooTable.Breakpoint>}
			 */
			this.array = [];
			/**
			 * Whether or not breakpoints cascade. When set to true all breakpoints larger than the current will be hidden along with it.
			 * @type {boolean}
			 */
			this.cascade = this.o.cascade;
			/**
			 * Whether or not to calculate breakpoints on the width of the parent element rather than the viewport.
			 * @type {boolean}
			 */
			this.useParentWidth = this.o.useParentWidth;
			/**
			 * This value is updated each time the current breakpoint changes and contains a space delimited string of the names of the current breakpoint and all those smaller than it.
			 * @type {string}
			 */
			this.hidden = null;

			/* PRIVATE */
			/**
			 * This value is set once when the {@link FooTable.Breakpoints#array} is generated and contains a space delimited string of all the breakpoint class names.
			 * @type {string}
			 * @private
			 */
			this._classNames = '';

			// check if a function was supplied to override the default getWidth
			this.getWidth = F.checkFnValue(this, this.o.getWidth, this.getWidth);
		},

		/* PROTECTED */
		/**
		 * Checks the supplied data and options for the breakpoints component.
		 * @instance
		 * @protected
		 * @param {object} data - The jQuery data object from the parent table.
		 * @fires FooTable.Breakpoints#"preinit.ft.breakpoints"
		 */
		preinit: function(data){
			var self = this;
			/**
			 * The preinit.ft.breakpoints event is raised before any UI is created and provides the tables jQuery data object for additional options parsing.
			 * Calling preventDefault on this event will disable the entire plugin.
			 * @event FooTable.Breakpoints#"preinit.ft.breakpoints"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {object} data - The jQuery data object of the table raising the event.
			 */
			return this.ft.raise('preinit.ft.breakpoints', [data]).then(function(){
				self.cascade = F.is.boolean(data.cascade) ? data.cascade : self.cascade;
				self.o.breakpoints = F.is.hash(data.breakpoints) ? data.breakpoints : self.o.breakpoints;
				self.getWidth = F.checkFnValue(self, data.getWidth, self.getWidth);
				if (self.o.breakpoints == null) self.o.breakpoints = { "xs": 480, "sm": 768, "md": 992, "lg": 1200 };
				// Create a nice friendly array to work with out of the breakpoints object.
				for (var name in self.o.breakpoints) {
					if (!self.o.breakpoints.hasOwnProperty(name)) continue;
					self.array.push(new F.Breakpoint(name, self.o.breakpoints[name]));
					self._classNames += 'breakpoint-' + name + ' ';
				}
				// Sort the breakpoints so the largest is checked first
				self.array.sort(function (a, b) {
					return b.width - a.width;
				});
			});
		},
		/**
		 * Initializes the class parsing the options into a sorted array of {@link FooTable.Breakpoint} objects.
		 * @instance
		 * @protected
		 * @fires FooTable.Breakpoints#"init.ft.breakpoints"
		 */
		init: function(){
			var self = this;
			/**
			 * The init.ft.breakpoints event is raised before any UI is generated.
			 * Calling preventDefault on this event will disable the entire plugin.
			 * @event FooTable.Breakpoints#"init.ft.breakpoints"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */
			return this.ft.raise('init.ft.breakpoints').then(function(){
				self.current = self.get();
			});
		},
		/**
		 * Whenever the table is drawn this ensures the correct breakpoint class is applied to the table.
		 * @instance
		 * @protected
		 */
		draw: function(){
			this.ft.$el.removeClass(this._classNames).addClass('breakpoint-' + this.current.name);
		},

		/* PUBLIC */
		/**
		 * Calculates the current breakpoint from the {@link FooTable.Breakpoints#array} and sets the {@link FooTable.Breakpoints#current} property.
		 * @instance
		 * @returns {FooTable.Breakpoint}
		 */
		calculate: function(){
			var self = this, current = null, hidden = [], breakpoint, prev = null, width = self.getWidth();
			for (var i = 0, len = self.array.length; i < len; i++) {
				breakpoint = self.array[i];
				// if the width is smaller than the smallest breakpoint set the smallest as the current.
				// if the width is larger than the largest breakpoint set the largest as the current.
				// otherwise if the width is somewhere in between check all breakpoints testing if the width
				// is greater than the current but smaller than the previous.
				if ((!current && i == len -1)
					|| (width >= breakpoint.width && (prev instanceof F.Breakpoint ? width < prev.width : true))) {
					current = breakpoint;
				}
				if (!current) hidden.push(breakpoint.name);
				prev = breakpoint;
			}
			hidden.push(current.name);
			self.hidden = hidden.join(' ');
			return current;
		},
		/**
		 * Supplied a columns breakpoints this returns a boolean value indicating whether or not the column is visible.
		 * @param {string} breakpoints - A space separated string of breakpoint names.
		 * @returns {boolean}
		 */
		visible: function(breakpoints){
			if (F.is.emptyString(breakpoints)) return true;
			if (breakpoints === 'all') return false;
			var parts = breakpoints.split(' '), i = 0, len = parts.length;
			for (; i < len; i++){
				if (this.cascade ? F.str.containsWord(this.hidden, parts[i]) : parts[i] == this.current.name) return false;
			}
			return true;
		},
		/**
		 * Performs a check between the current breakpoint and the previous breakpoint and performs a redraw if they differ.
		 * @instance
		 * @fires FooTable.Breakpoints#"before.ft.breakpoints"
		 * @fires FooTable.Breakpoints#"after.ft.breakpoints"
		 */
		check: function(){
			var self = this, bp = self.get();
			if (!(bp instanceof F.Breakpoint)
				|| bp == self.current)
				return;

			/**
			 * The before.ft.breakpoints event is raised if the breakpoint has changed but before the UI is redrawn and is supplied both the current breakpoint
			 * and the next "new" one that is about to be applied.
			 * Calling preventDefault on this event will prevent the next breakpoint from being applied.
			 * @event FooTable.Breakpoints#"before.ft.breakpoints"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {FooTable.Breakpoint} current - The current breakpoint.
			 * @param {FooTable.Breakpoint} next - The breakpoint that is about to be applied.
			 */
			self.ft.raise('before.ft.breakpoints', [self.current, bp]).then(function(){
				var previous = self.current;
				self.current = bp;
				return self.ft.draw().then(function(){
					/**
					 * The after.ft.breakpoints event is raised after the breakpoint has changed and the UI is redrawn and is supplied both the "new" current breakpoint
					 * and the previous one that was replaced.
					 * @event FooTable.Breakpoints#"after.ft.breakpoints"
					 * @param {jQuery.Event} e - The jQuery.Event object for the event.
					 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
					 * @param {FooTable.Breakpoint} current - The current breakpoint.
					 * @param {FooTable.Breakpoint} previous - The breakpoint that was just replaced.
					 */
					self.ft.raise('after.ft.breakpoints', [self.current, previous]);
				});
			});
		},
		/**
		 * Attempts to return a {@link FooTable.Breakpoint} instance when passed a {@link FooTable.Breakpoint},
		 * the {@link FooTable.Breakpoint#name} string or if nothing is supplied the current breakpoint.
		 * @instance
		 * @param {(FooTable.Breakpoint|string|number)} [breakpoint] - The breakpoint to retrieve.
		 * @returns {FooTable.Breakpoint}
		 */
		get: function(breakpoint){
			if (F.is.undef(breakpoint)) return this.calculate();
			if (breakpoint instanceof F.Breakpoint) return breakpoint;
			if (F.is.string(breakpoint)) return F.arr.first(this.array, function (bp) { return bp.name == breakpoint; });
			if (F.is.number(breakpoint)) return breakpoint >= 0 && breakpoint < this.array.length ? this.array[breakpoint] : null;
			return null;
		},
		/**
		 * Gets the width used to determine breakpoints whether it be from the viewport, parent or a custom function.
		 * @instance
		 * @returns {number}
		 */
		getWidth: function(){
			if (F.is.fn(this.o.getWidth)) return this.o.getWidth(this.ft);
			if (this.useParentWidth == true) return this.getParentWidth();
			return this.getViewportWidth();
		},
		/**
		 * Gets the tables direct parents width.
		 * @instance
		 * @returns {number}
		 */
		getParentWidth: function(){
			return this.ft.$el.parent().width();
		},
		/**
		 * Gets the current viewport width.
		 * @instance
		 * @returns {number}
		 */
		getViewportWidth: function(){
			return Math.max(document.documentElement.clientWidth, window.innerWidth, 0);
		}
	});

	F.components.register('breakpoints', F.Breakpoints, 1000);

})(jQuery, FooTable);
(function(F){
	/**
	 * A space delimited string of breakpoint names that specify when the column will be hidden. You can also specify "all" to make a column permanently display in an expandable detail row.
	 * @type {string}
	 * @default null
	 * @example <caption>The below shows how this value would be set</caption>
	 * breakpoints: "md"
	 */
	F.Column.prototype.breakpoints = null;

	F.Column.prototype.__breakpoints_define__ = function(definition){
		this.breakpoints = F.is.emptyString(definition.breakpoints) ? null : definition.breakpoints;
	};

	F.Column.extend('define', function(definition){
		this._super(definition);
		this.__breakpoints_define__(definition);
	});
})(FooTable);
(function(F){
	/**
	 * An object containing the breakpoints for the plugin.
	 * @type {object.<string, number>}
	 * @default { "xs": 480, "sm": 768, "md": 992, "lg": 1200 }
	 */
	F.Defaults.prototype.breakpoints = null;

	/**
	 * Whether or not breakpoints cascade. When set to true all breakpoints larger than the current will also be hidden along with it.
	 * @type {boolean}
	 * @default false
	 */
	F.Defaults.prototype.cascade = false;

	/**
	 * Whether or not to calculate breakpoints on the width of the parent element rather than the viewport.
	 * @type {boolean}
	 * @default false
	 */
	F.Defaults.prototype.useParentWidth = false;

	/**
	 * A function used to override the default getWidth function with a custom one.
	 * @type {function}
	 * @default null
	 * @example <caption>The below shows what the default getWidth function would look like.</caption>
	 * getWidth: function(instance){
	 * 	if (instance.o.useParentWidth == true) return instance.$el.parent().width();
	 * 	return instance.breakpoints.getViewportWidth();
	 * }
	 */
	F.Defaults.prototype.getWidth = null;
})(FooTable);
(function($, F){
	F.Columns = F.Component.extend(/** @lends FooTable.Columns */{
		/**
		 * The columns class contains all the logic for handling columns.
		 * @constructs
		 * @extends FooTable.Component
		 * @param {FooTable.Table} table -  The parent {@link FooTable.Table} this component belongs to.
		 * @returns {FooTable.Columns}
		 */
		construct: function(table){
			// call the base class constructor
			this._super(table, true);

			/* PROTECTED */
			/**
			 * This provides a shortcut to the {@link FooTable.Table#options} object.
			 * @protected
			 * @type {FooTable.Table#options}
			 */
			this.o = table.o;

			/* PUBLIC */
			/**
			 * An array of {@link FooTable.Column} objects created from parsing the options and/or DOM.
			 * @type {Array.<FooTable.Column>}
			 */
			this.array = [];
			/**
			 * The jQuery header row object.
			 * @type {jQuery}
			 */
			this.$header = null;
			/**
			 * Whether or not to display the header row.
			 * @type {boolean}
			 */
			this.showHeader = table.o.showHeader;

			this._fromHTML = F.is.emptyArray(table.o.columns) && !F.is.promise(table.o.columns);
		},

		/* PROTECTED */
		/**
		 * This parses the columns from either the tables rows or the supplied options.
		 * @instance
		 * @protected
		 * @param {object} data - The tables jQuery data object.
		 * @returns {jQuery.Promise}
		 * @this FooTable.Columns
		 */
		parse: function(data){
			var self = this;
			return $.Deferred(function(d){
				function merge(cols1, cols2){
					var merged = [];
					// check if either of the arrays is empty as it can save us having to merge them by index.
					if (cols1.length == 0 || cols2.length == 0){
						merged = cols1.concat(cols2);
					} else {
						// at this point we have two arrays of column definitions, we now need to merge them based on there index properties
						// first figure out the highest column index provided so we can loop that many times to merge all columns and provide
						// defaults where nothing was specified (fill in the gaps in the array as it were).
						var highest = 0;
						F.arr.each(cols1.concat(cols2), function(c){
							if (c.index > highest) highest = c.index;
						});
						highest++;
						for (var i = 0, cols1_c, cols2_c; i < highest; i++){
							cols1_c = {};
							F.arr.each(cols1, function(c){
								if (c.index == i){
									cols1_c = c;
									return false;
								}
							});
							cols2_c = {};
							F.arr.each(cols2, function(c){
								if (c.index == i){
									cols2_c = c;
									return false;
								}
							});
							merged.push($.extend(true, {}, cols1_c, cols2_c));
						}
					}
					return merged;
				}

				var json = [], html = [];
				// get the column options from the content
				var $header = self.ft.$el.find('tr.footable-header, thead > tr:last:has([data-breakpoints]), tbody > tr:first:has([data-breakpoints]), thead > tr:last, tbody > tr:first').first(), $cell, cdata;
				if ($header.length > 0){
					var virtual = $header.parent().is('tbody') && $header.children().length == $header.children('td').length;
					if (!virtual) self.$header = $header.addClass('footable-header');
					$header.children('td,th').each(function(i, cell){
						$cell = $(cell);
						cdata = $cell.data();
						cdata.index = i;
						cdata.$el = $cell;
						cdata.virtual = virtual;
						html.push(cdata);
					});
					if (virtual) self.showHeader = false;
				}
				// get the supplied column options
				if (F.is.array(self.o.columns) && !F.is.emptyArray(self.o.columns)){
					F.arr.each(self.o.columns, function(c, i){
						c.index = i;
						json.push(c);
					});
					self.parseFinalize(d, merge(json, html));
				} else if (F.is.promise(self.o.columns)){
					self.o.columns.then(function(cols){
						F.arr.each(cols, function(c, i){
							c.index = i;
							json.push(c);
						});
						self.parseFinalize(d, merge(json, html));
					}, function(xhr){
						d.reject(Error('Columns ajax request error: ' + xhr.status + ' (' + xhr.statusText + ')'));
					});
				} else {
					self.parseFinalize(d, merge(json, html));
				}
			});
		},
		/**
		 * Used to finalize the parsing of columns it is supplied the parse deferred object which must be resolved with an array of {@link FooTable.Column} objects
		 * or rejected with an error.
		 * @instance
		 * @protected
		 * @param {jQuery.Deferred} deferred - The deferred object used for parsing.
		 * @param {Array.<object>} cols - An array of all merged column definitions.
		 */
		parseFinalize: function(deferred, cols){
			// we now have a merged array of all column definitions supplied to the plugin, time to make the objects.
			var self = this, columns = [], column;
			F.arr.each(cols, function(def){
				// if we have a column registered using the definition type then create an instance of that column otherwise just create a default text column.
				if (column = F.columns.contains(def.type) ? F.columns.make(def.type, self.ft, def) : new F.Column(self.ft, def))
					columns.push(column);
			});
			if (F.is.emptyArray(columns)){
				deferred.reject(Error("No columns supplied."));
			} else {
				// make sure to sort by the column index as the merge process may have mixed them up
				columns.sort(function(a, b){ return a.index - b.index; });
				deferred.resolve(columns);
			}
		},
		/**
		 * The columns preinit method is used to parse and check the column options supplied from both static content and through the constructor.
		 * @instance
		 * @protected
		 * @param {object} data - The jQuery data object from the root table element.
		 * @this FooTable.Columns
		 */
		preinit: function(data){
			var self = this;
			/**
			 * The preinit.ft.columns event is raised before any UI is created and provides the tables jQuery data object for additional options parsing.
			 * Calling preventDefault on this event will disable the entire plugin.
			 * @event FooTable.Columns#"preinit.ft.columns"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {object} data - The jQuery data object of the table raising the event.
			 */
			return self.ft.raise('preinit.ft.columns', [data]).then(function(){
				return self.parse(data).then(function(columns){
					self.array = columns;
					self.showHeader = F.is.boolean(data.showHeader) ? data.showHeader : self.showHeader;
				});
			});
		},
		/**
		 * Initializes the columns creating the table header if required.
		 * @instance
		 * @protected
		 * @fires FooTable.Columns#"init.ft.columns"
		 * @this FooTable.Columns
		 */
		init: function(){
			var self = this;
			/**
			 * The init.ft.columns event is raised after the header row is created/parsed for column data.
			 * @event FooTable.Columns#"init.ft.columns"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} instance - The instance of the plugin raising the event.
			 * @param {Array.<FooTable.Column>} columns - The array of {@link FooTable.Column} objects parsed from the options and/or DOM.
			 */
			return this.ft.raise('init.ft.columns', [ self.array ]).then(function(){
				self.$create();
			});
		},
		/**
		 * Destroys the columns component removing any UI generated from the table.
		 * @instance
		 * @protected
		 * @fires FooTable.Columns#"destroy.ft.columns"
		 */
		destroy: function(){
			/**
			 * The destroy.ft.columns event is raised before its UI is removed.
			 * Calling preventDefault on this event will prevent the component from being destroyed.
			 * @event FooTable.Columns#"destroy.ft.columns"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */
			var self = this;
			this.ft.raise('destroy.ft.columns').then(function(){
				if (!self._fromHTML) self.$header.remove();
			});
		},
		/**
		 * The predraw method called from within the {@link FooTable.Table#draw} method.
		 * @instance
		 * @protected
		 * @this FooTable.Columns
		 */
		predraw: function(){
			var self = this, first = true;
			self.visibleColspan = 0;
			self.firstVisibleIndex = 0;
			self.lastVisibleIndex = 0;
			self.hasHidden = false;
			F.arr.each(self.array, function(col){
				col.hidden = !self.ft.breakpoints.visible(col.breakpoints);
				if (!col.hidden && col.visible){
					if (first){
						self.firstVisibleIndex = col.index;
						first = false;
					}
					self.lastVisibleIndex = col.index;
					self.visibleColspan++;
				}
				if (col.hidden) self.hasHidden = true;
			});
			self.ft.$el.toggleClass('breakpoint', self.hasHidden);
		},
		/**
		 * Performs the actual drawing of the columns, hiding or displaying them depending on there breakpoints.
		 * @instance
		 * @protected
		 * @this FooTable.Columns
		 */
		draw: function(){
			F.arr.each(this.array, function(col){
				col.$el.css('display', (col.hidden || !col.visible  ? 'none' : 'table-cell'));
			});
			if (!this.showHeader && F.is.jq(this.$header.parent())){
				this.$header.detach();
			}
		},
		/**
		 * Creates the header row for the table from the parsed column definitions.
		 * @instance
		 * @protected
		 * @this FooTable.Columns
		 */
		$create: function(){
			var self = this;
			self.$header = F.is.jq(self.$header) ? self.$header : $('<tr/>', {'class': 'footable-header'});
			self.$header.children('th,td').detach();
			F.arr.each(self.array, function(col){
				self.$header.append(col.$el);
			});
			if (self.showHeader && !F.is.jq(self.$header.parent())){
				self.ft.$el.children('thead').append(self.$header);
			}
		},
		/**
		 * Attempts to return a {@link FooTable.Column} instance when passed the {@link FooTable.Column} instance, the {@link FooTable.Column#name} string or the {@link FooTable.Column#index} number.
		 * If supplied a function this will return an array by iterating all columns passing the index and column itself to the supplied callback as arguments.
		 * Returning true in the callback will include the column in the result.
		 * @instance
		 * @param {(FooTable.Column|string|number|function)} column - The column to retrieve.
		 * @returns {(Array.<FooTable.Column>|FooTable.Column|null)} The column if one is found otherwise it returns NULL.
		 * @example <caption>This example shows retrieving a column by name assuming a column called "id" exists. The <code>columns</code> object is an instance of {@link FooTable.Columns}.</caption>
		 * var column = columns.get('id');
		 * if (column instanceof FooTable.Column){
		 * 	// found the "id" column
		 * } else {
		 * 	// no column with a name of "id" exists
		 * }
		 * // to get an array of all hidden columns
		 * var columns = columns.get(function(col){
		 *  return col.hidden;
		 * });
		 */
		get: function(column){
			if (column instanceof F.Column) return column;
			if (F.is.string(column)) return F.arr.first(this.array, function (col) { return col.name == column; });
			if (F.is.number(column)) return F.arr.first(this.array, function (col) { return col.index == column; });
			if (F.is.fn(column)) return F.arr.get(this.array, column);
			return null;
		},
		/**
		 * Takes an array of column names, index's or actual {@link FooTable.Column} and ensures that an array of only {@link FooTable.Column} is returned.
		 * @instance
		 * @param {(Array.<string>|Array.<number>|Array.<FooTable.Column>)} columns - The array of column names, index's or {@link FooTable.Column} to check.
		 * @returns {Array.<FooTable.Column>}
		 */
		ensure: function(columns){
			var self = this, result = [];
			if (!F.is.array(columns)) return result;
			F.arr.each(columns, function(name){
				result.push(self.get(name));
			});
			return result;
		}
	});

	F.components.register('columns', F.Columns, 900);

})(jQuery, FooTable);
(function(F){
	/**
	 * An array containing the column options or a jQuery promise that resolves returning the columns. The index of the definitions must match the index of each column as it should appear in the table. For more information on the options available see the {@link FooTable.Column} object.
	 * @type {(Array.<object>|jQuery.Promise)}
	 * @default []
	 * @example <caption>The below shows column definitions for a row defined as <code>{ id: Number, name: String, age: Number }</code>. The ID column has a fixed width, the table is initially sorted on the Name column and the Age column will be hidden on phones.</caption>
	 * columns: [
	 * 	{ name: 'id', title: 'ID', type: 'number' },
	 *	{ name: 'name', title: 'Name', sorted: true, direction: 'ASC' }
	 *	{ name: 'age', title: 'Age', type: 'number', breakpoints: 'xs' }
	 * ]
	 */
	F.Defaults.prototype.columns = [];

	/**
	 * Specifies whether or not the column headers should be displayed.
	 * @type {boolean}
	 * @default true
	 */
	F.Defaults.prototype.showHeader = true;
})(FooTable);
(function ($, F) {
	F.Rows = F.Component.extend(/** @lends FooTable.Rows */{
		/**
		 * The rows class contains all the logic for handling rows.
		 * @constructs
		 * @extends FooTable.Component
		 * @param {FooTable.Table} table -  The parent {@link FooTable.Table} this component belongs to.
		 * @returns {FooTable.Rows}
		 */
		construct: function (table) {
			// call the base class constructor
			this._super(table, true);

			/**
			 * This provides a shortcut to the {@link FooTable.Table#options} object.
			 * @instance
			 * @protected
			 * @type {FooTable.Table#options}
			 */
			this.o = table.o;
			/**
			 * The current working array of {@link FooTable.Row} objects.
			 * @instance
			 * @protected
			 * @type {Array.<FooTable.Row>}
			 * @default []
			 */
			this.array = [];
			/**
			 * The base array of rows parsed from either the DOM or the constructor options.
			 * The {@link FooTable.Rows#current} member is populated with a shallow clone of this array
			 * during the predraw operation before any core or custom components are executed.
			 * @instance
			 * @protected
			 * @type {Array.<FooTable.Row>}
			 * @default []
			 */
			this.all = [];
			/**
			 * Whether or not to display a toggle in each row when it contains hidden columns.
			 * @type {boolean}
			 * @default true
			 */
			this.showToggle = table.o.showToggle;
			/**
			 * The CSS selector used to filter row click events. If the event.target property matches the selector the row will be toggled.
			 * @type {string}
			 * @default "tr,td,.footable-toggle"
			 */
			this.toggleSelector = table.o.toggleSelector;
			/**
			 * Specifies which column the row toggle is appended to. Supports only two values; "first" and "last"
			 * @type {string}
			 */
			this.toggleColumn = table.o.toggleColumn;
			/**
			 * The text to display when the table has no rows.
			 * @type {string}
			 */
			this.emptyString = table.o.empty;
			/**
			 * Whether or not the first rows details are expanded by default when displayed on a device that hides any columns.
			 * @type {boolean}
			 */
			this.expandFirst = table.o.expandFirst;
			/**
			 * Whether or not all row details are expanded by default when displayed on a device that hides any columns.
			 * @type {boolean}
			 */
			this.expandAll = table.o.expandAll;
			/**
			 * The jQuery object that contains the empty row control.
			 * @type {jQuery}
			 */
			this.$empty = null;
			this._fromHTML = F.is.emptyArray(table.o.rows) && !F.is.promise(table.o.rows);
		},
		/**
		 * This parses the rows from either the tables rows or the supplied options.
		 * @instance
		 * @protected
		 * @returns {jQuery.Promise}
		 */
		parse: function(){
			var self = this;
			return $.Deferred(function(d){
				var $rows = self.ft.$el.children('tbody').children('tr');
				if (F.is.array(self.o.rows) && self.o.rows.length > 0){
					self.parseFinalize(d, self.o.rows);
				} else if (F.is.promise(self.o.rows)){
					self.o.rows.then(function(rows){
						self.parseFinalize(d, rows);
					}, function(xhr){
						d.reject(Error('Rows ajax request error: ' + xhr.status + ' (' + xhr.statusText + ')'));
					});
				} else if (F.is.jq($rows)){
					self.parseFinalize(d, $rows);
					$rows.detach();
				} else {
					self.parseFinalize(d, []);
				}
			});
		},
		/**
		 * Used to finalize the parsing of rows it is supplied the parse deferred object which must be resolved with an array of {@link FooTable.Row} objects
		 * or rejected with an error.
		 * @instance
		 * @protected
		 * @param {jQuery.Deferred} deferred - The deferred object used for parsing.
		 * @param {(Array.<object>|jQuery)} rows - An array of row values and options or the jQuery object containing all rows.
		 */
		parseFinalize: function(deferred, rows){
			var self = this, result = $.map(rows, function(r){
				return new F.Row(self.ft, self.ft.columns.array, r);
			});
			deferred.resolve(result);
		},
		/**
		 * The columns preinit method is used to parse and check the column options supplied from both static content and through the constructor.
		 * @instance
		 * @protected
		 * @param {object} data - The jQuery data object from the root table element.
		 * @fires FooTable.Rows#"preinit.ft.rows"
		 */
		preinit: function(data){
			var self = this;
			/**
			 * The preinit.ft.rows event is raised before any UI is created and provides the tables jQuery data object for additional options parsing.
			 * Calling preventDefault on this event will disable the entire plugin.
			 * @event FooTable.Rows#"preinit.ft.rows"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {object} data - The jQuery data object of the table raising the event.
			 */
			return self.ft.raise('preinit.ft.rows', [data]).then(function(){
				return self.parse().then(function(rows){
					self.all = rows;
					self.array = self.all.slice(0);
					self.showToggle = F.is.boolean(data.showToggle) ? data.showToggle : self.showToggle;
					self.toggleSelector = F.is.string(data.toggleSelector) ? data.toggleSelector : self.toggleSelector;
					self.toggleColumn = F.is.string(data.toggleColumn) ? data.toggleColumn : self.toggleColumn;
					if (self.toggleColumn != "first" && self.toggleColumn != "last") self.toggleColumn = "first";
					self.emptyString = F.is.string(data.empty) ? data.empty : self.emptyString;
					self.expandFirst = F.is.boolean(data.expandFirst) ? data.expandFirst : self.expandFirst;
					self.expandAll = F.is.boolean(data.expandAll) ? data.expandAll : self.expandAll;
				});
			});
		},
		/**
		 * Initializes the rows class using the supplied table and options.
		 * @instance
		 * @protected
		 * @fires FooTable.Rows#"init.ft.rows"
		 */
		init: function () {
			var self = this;
			/**
			 * The init.ft.rows event is raised after the the rows are parsed from either the DOM or the options.
			 * Calling preventDefault on this event will disable the entire plugin.
			 * @event FooTable.Rows#"init.ft.rows"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} instance - The instance of the plugin raising the event.
			 * @param {Array.<FooTable.Row>} rows - The array of {@link FooTable.Row} objects parsed from the DOM or the options.
			 */
			return self.ft.raise('init.ft.rows', [self.all]).then(function(){
				self.$create();
			});
		},
		/**
		 * Destroys the rows component removing any UI generated from the table.
		 * @instance
		 * @protected
		 * @fires FooTable.Rows#"destroy.ft.rows"
		 */
		destroy: function(){
			/**
			 * The destroy.ft.rows event is raised before its UI is removed.
			 * Calling preventDefault on this event will prevent the component from being destroyed.
			 * @event FooTable.Rows#"destroy.ft.rows"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */
			var self = this;
			this.ft.raise('destroy.ft.rows').then(function(){
				F.arr.each(self.array, function(row){
					row.predraw(!self._fromHTML);
				});
				self.all = self.array = [];
			});
		},
		/**
		 * Performs the predraw operations that are required including creating the shallow clone of the {@link FooTable.Rows#array} to work with.
		 * @instance
		 * @protected
		 */
		predraw: function(){
			F.arr.each(this.array, function(row){
				row.predraw();
			});
			this.array = this.all.slice(0);
		},
		$create: function(){
			this.$empty = $('<tr/>', { 'class': 'footable-empty' }).append($('<td/>').text(this.emptyString));
		},
		/**
		 * Performs the actual drawing of the table rows.
		 * @instance
		 * @protected
		 */
		draw: function(){
			var self = this, $tbody = self.ft.$el.children('tbody'), first = true;
			// if we have rows
			if (self.array.length > 0){
				self.$empty.detach();
				// loop through them appending to the tbody and then drawing
				F.arr.each(self.array, function(row){
					if ((self.expandFirst && first) || self.expandAll){
						row.expanded = true;
						first = false;
					}
					row.draw($tbody);
				});
			} else {
				// otherwise display the $empty row
				self.$empty.children('td').attr('colspan', self.ft.columns.visibleColspan);
				$tbody.append(self.$empty);
			}
		},
		/**
		 * Loads a JSON array of row objects into the table
		 * @instance
		 * @param {Array.<object>} data - An array of row objects to load.
		 * @param {boolean} [append=false] - Whether or not to append the new rows to the current rows array or to replace them entirely.
		 */
		load: function(data, append){
			var self = this, rows = $.map(data, function(r){
				return new F.Row(self.ft, self.ft.columns.array, r);
			});
			F.arr.each(this.array, function(row){
				row.predraw();
			});
			this.all = (F.is.boolean(append) ? append : false) ? this.all.concat(rows) : rows;
			this.array = this.all.slice(0);
			this.ft.draw();
		},
		/**
		 * Expands all visible rows.
		 * @instance
		 */
		expand: function(){
			F.arr.each(this.array, function(row){
				row.expand();
			});
		},
		/**
		 * Collapses all visible rows.
		 * @instance
		 */
		collapse: function(){
			F.arr.each(this.array, function(row){
				row.collapse();
			});
		}
	});

	F.components.register('rows', F.Rows, 800);

})(jQuery, FooTable);
(function(F){
	/**
	 * An array of JSON objects containing the row data or a jQuery promise that resolves returning the row data.
	 * @type {(Array.<object>|jQuery.Promise)}
	 * @default []
	 */
	F.Defaults.prototype.rows = [];

	/**
	 * A string to display when there are no rows in the table.
	 * @type {string}
	 * @default "No results"
	 */
	F.Defaults.prototype.empty = 'No results';

	/**
	 * Whether or not the toggle is appended to each row.
	 * @type {boolean}
	 * @default true
	 */
	F.Defaults.prototype.showToggle = true;

	/**
	 * The CSS selector used to filter row click events. If the event.target property matches the selector the row will be toggled.
	 * @type {string}
	 * @default "tr,td,.footable-toggle"
	 */
	F.Defaults.prototype.toggleSelector = 'tr,td,.footable-toggle';

	/**
	 * Specifies which column to display the row toggle in. The only supported values are "first" or "last".
	 * @type {string}
	 * @default "first"
	 */
	F.Defaults.prototype.toggleColumn = 'first';

	/**
	 * Whether or not the first rows details are expanded by default when displayed on a device that hides any columns.
	 * @type {boolean}
	 */
	F.Defaults.prototype.expandFirst = false;

	/**
	 * Whether or not all row details are expanded by default when displayed on a device that hides any columns.
	 * @type {boolean}
	 */
	F.Defaults.prototype.expandAll = false;
})(FooTable);
(function(F){
	/**
	 * Loads a JSON array of row objects into the table
	 * @param {Array.<object>} data - An array of row objects to load.
	 * @param {boolean} [append=false] - Whether or not to append the new rows to the current rows array or to replace them entirely.
	 */
	F.Table.prototype.loadRows = function(data, append){
		this.rows.load(data, append);
	};
})(FooTable);
(function(F){
	F.Filter = F.Class.extend(/** @lends FooTable.Filter */{
		/**
		 * The filter object contains the query to filter by and the columns to apply it to.
		 * @constructs
		 * @extends FooTable.Class
		 * @param {string} name - The name for the filter.
		 * @param {(string|FooTable.Query)} query - The query for the filter.
		 * @param {Array.<FooTable.Column>} columns - The columns to apply the query to.
		 * @param {string} [space="AND"] - How the query treats space chars.
		 * @param {boolean} [connectors=true] - Whether or not to replace phrase connectors (+.-_) with spaces.
		 * @param {boolean} [ignoreCase=true] - Whether or not ignore case when matching.
		 * @param {boolean} [hidden=true] - Whether or not this is a hidden filter.
		 * @returns {FooTable.Filter}
		 */
		construct: function(name, query, columns, space, connectors, ignoreCase, hidden){
			/**
			 * The name of the filter.
			 * @instance
			 * @type {string}
			 */
			this.name = name;
			/**
			 * A string specifying how the filter treats space characters. Can be either "OR" or "AND".
			 * @instance
			 * @type {string}
			 */
			this.space = F.is.string(space) && (space == 'OR' || space == 'AND') ? space : 'AND';
			/**
			 * Whether or not to replace phrase connectors (+.-_) with spaces before executing the query.
			 * @instance
			 * @type {boolean}
			 */
			this.connectors = F.is.boolean(connectors) ? connectors : true;
			/**
			 * Whether or not ignore case when matching.
			 * @instance
			 * @type {boolean}
			 */
			this.ignoreCase = F.is.boolean(ignoreCase) ? ignoreCase : true;
			/**
			 * Whether or not this is a hidden filter.
			 * @instance
			 * @type {boolean}
			 */
			this.hidden = F.is.boolean(hidden) ? hidden : false;
			/**
			 * The query for the filter.
			 * @instance
			 * @type {(string|FooTable.Query)}
			 */
			this.query = query instanceof F.Query ? query : new F.Query(query, this.space, this.connectors, this.ignoreCase);
			/**
			 * The columns to apply the query to.
			 * @instance
			 * @type {Array.<FooTable.Column>}
			 */
			this.columns = columns;
		},
		/**
		 * Checks if the current filter matches the supplied string.
		 * If the current query property is a string it will be auto converted to a {@link FooTable.Query} object to perform the match.
		 * @instance
		 * @param {string} str - The string to check.
		 * @returns {boolean}
		 */
		match: function(str){
			if (!F.is.string(str)) return false;
			if (F.is.string(this.query)){
				this.query = new F.Query(this.query, this.space, this.connectors, this.ignoreCase);
			}
			return this.query instanceof F.Query ? this.query.match(str) : false;
		},
		/**
		 * Checks if the current filter matches the supplied {@link FooTable.Row}.
		 * @instance
		 * @param {FooTable.Row} row - The row to check.
		 * @returns {boolean}
		 */
		matchRow: function(row){
			var self = this, text = F.arr.map(row.cells, function(cell){
				return F.arr.contains(self.columns, cell.column) ? cell.filterValue : null;
			}).join(' ');
			return self.match(text);
		}
	});

})(FooTable);
(function ($, F) {
	F.Filtering = F.Component.extend(/** @lends FooTable.Filtering */{
		/**
		 * The filtering component adds a search input and column selector dropdown to the table allowing users to filter the using space delimited queries.
		 * @constructs
		 * @extends FooTable.Component
		 * @param {FooTable.Table} table - The parent {@link FooTable.Table} object for the component.
		 * @returns {FooTable.Filtering}
		 */
		construct: function (table) {
			// call the constructor of the base class
			this._super(table, table.o.filtering.enabled);

			/* PUBLIC */
			/**
			 * The filters to apply to the current {@link FooTable.Rows#array}.
			 * @instance
			 * @type {Array.<FooTable.Filter>}
			 */
			this.filters = table.o.filtering.filters;
			/**
			 * The delay in milliseconds before the query is auto applied after a change.
			 * @instance
			 * @type {number}
			 */
			this.delay = table.o.filtering.delay;
			/**
			 * The minimum number of characters allowed in the search input before it is auto applied.
			 * @instance
			 * @type {number}
			 */
			this.min = table.o.filtering.min;
			/**
			 * Specifies how whitespace in a filter query is handled.
			 * @instance
			 * @type {string}
			 */
			this.space = table.o.filtering.space;
			/**
			 * Whether or not to replace phrase connectors (+.-_) with spaces before executing the query.
			 * @instance
			 * @type {boolean}
			 */
			this.connectors = table.o.filtering.connectors;
			/**
			 * Whether or not ignore case when matching.
			 * @instance
			 * @type {boolean}
			 */
			this.ignoreCase = table.o.filtering.ignoreCase;
			/**
			 * Whether or not search queries are treated as phrases when matching.
			 * @instance
			 * @type {boolean}
			 */
			this.exactMatch = table.o.filtering.exactMatch;
			/**
			 * The placeholder text to display within the search $input.
			 * @instance
			 * @type {string}
			 */
			this.placeholder = table.o.filtering.placeholder;
			/**
			 * The title to display at the top of the search input column select.
			 * @type {string}
			 */
			this.dropdownTitle = table.o.filtering.dropdownTitle;
			/**
			 * The position of the $search input within the filtering rows cell.
			 * @type {string}
			 */
			this.position = table.o.filtering.position;
			/**
			 * Whether or not to focus the search input after the search/clear button is clicked or after auto applying the search input query.
			 * @type {boolean}
			 */
			this.focus = table.o.filtering.focus;
			/**
			 * A selector specifying where to place the filtering components form, if null the form is displayed within a row in the head of the table.
			 * @type {string}
			 */
			this.container = table.o.filtering.container;
			/**
			 * The jQuery object of the element containing the entire filtering form.
			 * @instance
			 * @type {jQuery}
			 */
			this.$container = null;
			/**
			 * The jQuery row object that contains all the filtering specific elements.
			 * @instance
			 * @type {jQuery}
			 */
			this.$row = null;
			/**
			 * The jQuery cell object that contains the search input and column selector.
			 * @instance
			 * @type {jQuery}
			 */
			this.$cell = null;
			/**
			 * The jQuery form object of the form that contains the search input and column selector.
			 * @instance
			 * @type {jQuery}
			 */
			this.$form = null;
			/**
			 * The jQuery object of the column selector dropdown.
			 * @instance
			 * @type {jQuery}
			 */
			this.$dropdown = null;
			/**
			 * The jQuery object of the search input.
			 * @instance
			 * @type {jQuery}
			 */
			this.$input = null;
			/**
			 * The jQuery object of the search button.
			 * @instance
			 * @type {jQuery}
			 */
			this.$button = null;

			/* PRIVATE */
			/**
			 * The timeout ID for the filter changed event.
			 * @instance
			 * @private
			 * @type {?number}
			 */
			this._filterTimeout = null;
			/**
			 * The regular expression used to check for encapsulating quotations.
			 * @instance
			 * @private
			 * @type {RegExp}
			 */
			this._exactRegExp = /^"(.*?)"$/;
		},

		/* PROTECTED */
		/**
		 * Checks the supplied data and options for the filtering component.
		 * @instance
		 * @protected
		 * @param {object} data - The jQuery data object from the parent table.
		 * @fires FooTable.Filtering#"preinit.ft.filtering"
		 */
		preinit: function(data){
			var self = this;
			/**
			 * The preinit.ft.filtering event is raised before the UI is created and provides the tables jQuery data object for additional options parsing.
			 * Calling preventDefault on this event will disable the component.
			 * @event FooTable.Filtering#"preinit.ft.filtering"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {object} data - The jQuery data object of the table raising the event.
			 */
			return self.ft.raise('preinit.ft.filtering').then(function(){
				// first check if filtering is enabled via the class being applied
				if (self.ft.$el.hasClass('footable-filtering'))
					self.enabled = true;
				// then check if the data-filtering-enabled attribute has been set
				self.enabled = F.is.boolean(data.filtering)
					? data.filtering
					: self.enabled;

				// if filtering is not enabled exit early as we don't need to do anything else
				if (!self.enabled) return;

				self.space = F.is.string(data.filterSpace)
					? data.filterSpace
					: self.space;

				self.min = F.is.number(data.filterMin)
					? data.filterMin
					: self.min;

				self.connectors = F.is.boolean(data.filterConnectors)
					? data.filterConnectors
					: self.connectors;

				self.ignoreCase = F.is.boolean(data.filterIgnoreCase)
					? data.filterIgnoreCase
					: self.ignoreCase;

				self.exactMatch = F.is.boolean(data.filterExactMatch)
					? data.filterExactMatch
					: self.exactMatch;

				self.focus = F.is.boolean(data.filterFocus)
					? data.filterFocus
					: self.focus;

				self.delay = F.is.number(data.filterDelay)
					? data.filterDelay
					: self.delay;

				self.placeholder = F.is.string(data.filterPlaceholder)
					? data.filterPlaceholder
					: self.placeholder;

				self.dropdownTitle = F.is.string(data.filterDropdownTitle)
					? data.filterDropdownTitle
					: self.dropdownTitle;

				self.container = F.is.string(data.filterContainer)
					? data.filterContainer
					: self.container;

				self.filters = F.is.array(data.filterFilters)
					? self.ensure(data.filterFilters)
					: self.ensure(self.filters);

				if (self.ft.$el.hasClass('footable-filtering-left'))
					self.position = 'left';
				if (self.ft.$el.hasClass('footable-filtering-center'))
					self.position = 'center';
				if (self.ft.$el.hasClass('footable-filtering-right'))
					self.position = 'right';

				self.position = F.is.string(data.filterPosition)
					? data.filterPosition
					: self.position;
			},function(){
				self.enabled = false;
			});
		},
		/**
		 * Initializes the filtering component for the plugin.
		 * @instance
		 * @protected
		 * @fires FooTable.Filtering#"init.ft.filtering"
		 */
		init: function () {
			var self = this;
			/**
			 * The init.ft.filtering event is raised before its UI is generated.
			 * Calling preventDefault on this event will disable the component.
			 * @event FooTable.Filtering#"init.ft.filtering"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */
			return self.ft.raise('init.ft.filtering').then(function(){
				self.$create();
			}, function(){
				self.enabled = false;
			});
		},
		/**
		 * Destroys the filtering component removing any UI from the table.
		 * @instance
		 * @protected
		 * @fires FooTable.Filtering#"destroy.ft.filtering"
		 */
		destroy: function () {
			var self = this;
			/**
			 * The destroy.ft.filtering event is raised before its UI is removed.
			 * Calling preventDefault on this event will prevent the component from being destroyed.
			 * @event FooTable.Filtering#"destroy.ft.filtering"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */
			return self.ft.raise('destroy.ft.filtering').then(function(){
				self.ft.$el.removeClass('footable-filtering')
					.find('thead > tr.footable-filtering').remove();
			});
		},
		/**
		 * Creates the filtering UI from the current options setting the various jQuery properties of this component.
		 * @instance
		 * @protected
		 * @this FooTable.Filtering
		 */
		$create: function () {
			var self = this;
			// generate the cell that actually contains all the UI.
			var $form_grp = $('<div/>', {'class': 'form-group footable-filtering-search'})
					.append($('<label/>', {'class': 'sr-only', text: 'Search'})),
				$input_grp = $('<div/>', {'class': 'input-group'}).appendTo($form_grp),
				$input_grp_btn = $('<div/>', {'class': 'input-group-btn'}),
				$dropdown_toggle = $('<button/>', {type: 'button', 'class': 'btn btn-default dropdown-toggle'})
					.on('click', { self: self }, self._onDropdownToggleClicked)
					.append($('<span/>', {'class': 'caret'})),
				position;

			switch (self.position){
				case 'left': position = 'footable-filtering-left'; break;
				case 'center': position = 'footable-filtering-center'; break;
				default: position = 'footable-filtering-right'; break;
			}
			self.ft.$el.addClass('footable-filtering').addClass(position);

			self.$container = self.container === null ? $() : $(self.container).first();
			if (!self.$container.length){
				// add it to a row and then populate it with the search input and column selector dropdown.
				self.$row = $('<tr/>', {'class': 'footable-filtering'}).prependTo(self.ft.$el.children('thead'));
				self.$cell = $('<th/>').attr('colspan', self.ft.columns.visibleColspan).appendTo(self.$row);
				self.$container = self.$cell;
			} else {
				self.$container.addClass('footable-filtering-external').addClass(position);
			}
			self.$form = $('<form/>', {'class': 'form-inline'}).append($form_grp).appendTo(self.$container);

			self.$input = $('<input/>', {type: 'text', 'class': 'form-control', placeholder: self.placeholder});

			self.$button = $('<button/>', {type: 'button', 'class': 'btn btn-primary'})
				.on('click', { self: self }, self._onSearchButtonClicked)
				.append($('<span/>', {'class': 'fooicon fooicon-search'}));

			self.$dropdown = $('<ul/>', {'class': 'dropdown-menu dropdown-menu-right'});
			if (!F.is.emptyString(self.dropdownTitle)){
				self.$dropdown.append($('<li/>', {'class': 'dropdown-header','text': self.dropdownTitle}));
			}
			self.$dropdown.append(
				F.arr.map(self.ft.columns.array, function (col) {
					return col.filterable ? $('<li/>').append(
						$('<a/>', {'class': 'checkbox'}).append(
							$('<label/>', {html: col.title}).prepend(
								$('<input/>', {type: 'checkbox', checked: true}).data('__FooTableColumn__', col)
							)
						)
					) : null;
				})
			);

			if (self.delay > 0){
				self.$input.on('keypress keyup paste', { self: self }, self._onSearchInputChanged);
				self.$dropdown.on('click', 'input[type="checkbox"]', {self: self}, self._onSearchColumnClicked);
			}

			$input_grp_btn.append(self.$button, $dropdown_toggle, self.$dropdown);
			$input_grp.append(self.$input, $input_grp_btn);
		},
		/**
		 * Performs the filtering of rows before they are appended to the page.
		 * @instance
		 * @protected
		 */
		predraw: function(){
			if (F.is.emptyArray(this.filters))
				return;

			var self = this;
			self.ft.rows.array = $.grep(self.ft.rows.array, function(r){
				return r.filtered(self.filters);
			});
		},
		/**
		 * As the rows are drawn by the {@link FooTable.Rows#draw} method this simply updates the colspan for the UI.
		 * @instance
		 * @protected
		 */
		draw: function(){
			if (F.is.jq(this.$cell)){
				this.$cell.attr('colspan', this.ft.columns.visibleColspan);
			}
			var search = this.find('search');
			if (search instanceof F.Filter){
				var query = search.query.val();
				if (this.exactMatch && this._exactRegExp.test(query)){
					query = query.replace(this._exactRegExp, '$1');
				}
				this.$input.val(query);
			} else {
				this.$input.val(null);
			}
			this.setButton(!F.arr.any(this.filters, function(f){ return !f.hidden; }));
		},

		/* PUBLIC */
		/**
		 * Adds or updates the filter using the supplied name, query and columns.
		 * @instance
		 * @param {(string|FooTable.Filter|object)} nameOrFilter - The name for the filter or the actual filter object itself.
		 * @param {(string|FooTable.Query)} [query] - The query for the filter. This is only optional when the first parameter is a filter object.
		 * @param {(Array.<number>|Array.<string>|Array.<FooTable.Column>)} [columns] - The columns to apply the filter to.
		 * 	If not supplied the filter will be applied to all selected columns in the search input dropdown.
		 * @param {boolean} [ignoreCase=true] - Whether or not ignore case when matching.
		 * @param {boolean} [connectors=true] - Whether or not to replace phrase connectors (+.-_) with spaces.
		 * @param {string} [space="AND"] - How the query treats space chars.
		 * @param {boolean} [hidden=true] - Whether or not this is a hidden filter.
		 */
		addFilter: function(nameOrFilter, query, columns, ignoreCase, connectors, space, hidden){
			var f = this.createFilter(nameOrFilter, query, columns, ignoreCase, connectors, space, hidden);
			if (f instanceof F.Filter){
				this.removeFilter(f.name);
				this.filters.push(f);
			}
		},
		/**
		 * Removes the filter using the supplied name if it exists.
		 * @instance
		 * @param {string} name - The name of the filter to remove.
		 */
		removeFilter: function(name){
			F.arr.remove(this.filters, function(f){ return f.name == name; });
		},
		/**
		 * Performs the required steps to handle filtering including the raising of the {@link FooTable.Filtering#"before.ft.filtering"} and {@link FooTable.Filtering#"after.ft.filtering"} events.
		 * @instance
		 * @param {boolean} [focus=false] - Whether or not to set the focus to the input once filtering is complete.
		 * @returns {jQuery.Promise}
		 * @fires FooTable.Filtering#"before.ft.filtering"
		 * @fires FooTable.Filtering#"after.ft.filtering"
		 */
		filter: function(focus){
			var self = this;
			self.filters = self.ensure(self.filters);
			/**
			 * The before.ft.filtering event is raised before a filter is applied and allows listeners to modify the filter or cancel it completely by calling preventDefault on the jQuery.Event object.
			 * @event FooTable.Filtering#"before.ft.filtering"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {Array.<FooTable.Filter>} filters - The filters that are about to be applied.
			 */
			return self.ft.raise('before.ft.filtering', [self.filters]).then(function(){
				self.filters = self.ensure(self.filters);
				if (focus){
					var start = self.$input.prop('selectionStart'),
						end = self.$input.prop('selectionEnd');
				}
				return self.ft.draw().then(function(){
					if (focus){
						self.$input.focus().prop({
							selectionStart: start,
							selectionEnd: end
						});
					}
					/**
					 * The after.ft.filtering event is raised after a filter has been applied.
					 * @event FooTable.Filtering#"after.ft.filtering"
					 * @param {jQuery.Event} e - The jQuery.Event object for the event.
					 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
					 * @param {FooTable.Filter} filter - The filters that were applied.
					 */
					self.ft.raise('after.ft.filtering', [self.filters]);
				});
			});
		},
		/**
		 * Removes the current search filter.
		 * @instance
		 * @returns {jQuery.Promise}
		 * @fires FooTable.Filtering#"before.ft.filtering"
		 * @fires FooTable.Filtering#"after.ft.filtering"
		 */
		clear: function(){
			this.filters = F.arr.get(this.filters, function(f){ return f.hidden; });
			return this.filter(this.focus);
		},
		/**
		 * Toggles the button icon between the search and clear icons based on the supplied value.
		 * @instance
		 * @param {boolean} search - Whether or not to display the search icon.
		 */
		setButton: function(search){
			if (!search){
				this.$button.children('.fooicon').removeClass('fooicon-search').addClass('fooicon-remove');
			} else {
				this.$button.children('.fooicon').removeClass('fooicon-remove').addClass('fooicon-search');
			}
		},
		/**
		 * Finds a filter by name.
		 * @param {string} name - The name of the filter to find.
		 * @returns {(FooTable.Filter|null)}
		 */
		find: function(name){
			return F.arr.first(this.filters, function(f){ return f.name == name; });
		},
		/**
		 * Gets an array of {@link FooTable.Column} to apply the search filter to. This also doubles as the default columns for filters which do not specify any columns.
		 * @instance
		 * @returns {Array.<FooTable.Column>}
		 */
		columns: function(){
			if (F.is.jq(this.$dropdown)){
				// if we have a dropdown containing the column names get the selected columns from there
				return this.$dropdown.find('input:checked').map(function(){
					return $(this).data('__FooTableColumn__');
				}).get();
			} else {
				// otherwise find all columns that are set to be filterable.
				return this.ft.columns.get(function(c){ return c.filterable; });
			}
		},
		/**
		 * Takes an array of plain objects containing the filter values or actual {@link FooTable.Filter} objects and ensures that an array of only {@link FooTable.Filter} is returned.
		 * If supplied a plain object that object must contain a name, query and columns properties which are used to create a new {@link FooTable.Filter}.
		 * @instance
		 * @param {({name: string, query: (string|FooTable.Query), columns: (Array.<string>|Array.<number>|Array.<FooTable.Column>)}|Array.<FooTable.Filter>)} filters - The array of filters to check.
		 * @returns {Array.<FooTable.Filter>}
		 */
		ensure: function(filters){
			var self = this, parsed = [], filterable = self.columns();
			if (!F.is.emptyArray(filters)){
				F.arr.each(filters, function(f){
					f = self._ensure(f, filterable);
					if (f instanceof F.Filter) parsed.push(f);
				});
			}
			return parsed;
		},

		/**
		 * Creates a new filter using the supplied object or individual parameters to populate it.
		 * @instance
		 * @param {(string|FooTable.Filter|object)} nameOrObject - The name for the filter or the actual filter object itself.
		 * @param {(string|FooTable.Query)} [query] - The query for the filter. This is only optional when the first parameter is a filter object.
		 * @param {(Array.<number>|Array.<string>|Array.<FooTable.Column>)} [columns] - The columns to apply the filter to.
		 * 	If not supplied the filter will be applied to all selected columns in the search input dropdown.
		 * @param {boolean} [ignoreCase=true] - Whether or not ignore case when matching.
		 * @param {boolean} [connectors=true] - Whether or not to replace phrase connectors (+.-_) with spaces.
		 * @param {string} [space="AND"] - How the query treats space chars.
		 * @param {boolean} [hidden=true] - Whether or not this is a hidden filter.
		 * @returns {*}
		 */
		createFilter: function(nameOrObject, query, columns, ignoreCase, connectors, space, hidden){
			if (F.is.string(nameOrObject)){
				nameOrObject = {name: nameOrObject, query: query, columns: columns, ignoreCase: ignoreCase, connectors: connectors, space: space, hidden: hidden};
			}
			return this._ensure(nameOrObject, this.columns());
		},

		/* PRIVATE */
		_ensure: function(filter, selectedColumns){
			if ((F.is.hash(filter) || filter instanceof F.Filter) && !F.is.emptyString(filter.name) && (!F.is.emptyString(filter.query) || filter.query instanceof F.Query)){
				filter.columns = F.is.emptyArray(filter.columns) ? selectedColumns : this.ft.columns.ensure(filter.columns);
				filter.ignoreCase = F.is.boolean(filter.ignoreCase) ? filter.ignoreCase : this.ignoreCase;
				filter.connectors = F.is.boolean(filter.connectors) ? filter.connectors : this.connectors;
				filter.hidden = F.is.boolean(filter.hidden) ? filter.hidden : false;
				filter.space = F.is.string(filter.space) && (filter.space === 'AND' || filter.space === 'OR') ? filter.space : this.space;
				filter.query = F.is.string(filter.query) ? new F.Query(filter.query, filter.space, filter.connectors, filter.ignoreCase) : filter.query;
				return (filter instanceof F.Filter)
					? filter
					: new F.Filter(filter.name, filter.query, filter.columns, filter.space, filter.connectors, filter.ignoreCase, filter.hidden);
			}
			return null;
		},
		/**
		 * Handles the change event for the {@link FooTable.Filtering#$input}.
		 * @instance
		 * @private
		 * @param {jQuery.Event} e - The event object for the event.
		 */
		_onSearchInputChanged: function (e) {
			var self = e.data.self;
			var alpha = e.type == 'keypress' && !F.is.emptyString(String.fromCharCode(e.charCode)),
				ctrl = e.type == 'keyup' && (e.which == 8 || e.which == 46),
				paste = e.type == 'paste'; // backspace & delete

			// if alphanumeric characters or specific control characters
			if(alpha || ctrl || paste) {
				if (e.which == 13) e.preventDefault();
				if (self._filterTimeout != null) clearTimeout(self._filterTimeout);
				self._filterTimeout = setTimeout(function(){
					self._filterTimeout = null;
					var query = self.$input.val();
					if (query.length >= self.min){
						if (self.exactMatch && !self._exactRegExp.test(query)){
							query = '"' + query + '"';
						}
						self.addFilter('search', query);
						self.filter(self.focus);
					} else if (F.is.emptyString(query)){
						self.clear();
					}
				}, self.delay);
			}
		},
		/**
		 * Handles the click event for the {@link FooTable.Filtering#$button}.
		 * @instance
		 * @private
		 * @param {jQuery.Event} e - The event object for the event.
		 */
		_onSearchButtonClicked: function (e) {
			e.preventDefault();
			var self = e.data.self;
			if (self._filterTimeout != null) clearTimeout(self._filterTimeout);
			var $icon = self.$button.children('.fooicon');
			if ($icon.hasClass('fooicon-remove')) self.clear();
			else {
				var query = self.$input.val();
				if (query.length >= self.min){
					if (self.exactMatch && !self._exactRegExp.test(query)){
						query = '"' + query + '"';
					}
					self.addFilter('search', query);
					self.filter(self.focus);
				}
			}
		},
		/**
		 * Handles the click event for the column checkboxes in the {@link FooTable.Filtering#$dropdown}.
		 * @instance
		 * @private
		 * @param {jQuery.Event} e - The event object for the event.
		 */
		_onSearchColumnClicked: function (e) {
			var self = e.data.self;
			if (self._filterTimeout != null) clearTimeout(self._filterTimeout);
			self._filterTimeout = setTimeout(function(){
				self._filterTimeout = null;
				var $icon = self.$button.children('.fooicon');
				if ($icon.hasClass('fooicon-remove')){
					$icon.removeClass('fooicon-remove').addClass('fooicon-search');
					self.addFilter('search', self.$input.val());
					self.filter();
				}
			}, self.delay);
		},
		/**
		 * Handles the click event for the {@link FooTable.Filtering#$dropdown} toggle.
		 * @instance
		 * @private
		 * @param {jQuery.Event} e - The event object for the event.
		 */
		_onDropdownToggleClicked: function (e) {
			e.preventDefault();
			e.stopPropagation();
			var self = e.data.self;
			self.$dropdown.parent().toggleClass('open');
			if (self.$dropdown.parent().hasClass('open')) $(document).on('click.footable', { self: self }, self._onDocumentClicked);
			else $(document).off('click.footable', self._onDocumentClicked);
		},
		/**
		 * Checks all click events when the dropdown is visible and closes the menu if the target is not the dropdown.
		 * @instance
		 * @private
		 * @param {jQuery.Event} e - The event object for the event.
		 */
		_onDocumentClicked: function(e){
			if ($(e.target).closest('.dropdown-menu').length == 0){
				e.preventDefault();
				var self = e.data.self;
				self.$dropdown.parent().removeClass('open');
				$(document).off('click.footable', self._onDocumentClicked);
			}
		}
	});

	F.components.register('filtering', F.Filtering, 500);

})(jQuery, FooTable);

(function(F){
	F.Query = F.Class.extend(/** @lends FooTable.Query */{
		/**
		 * The query object is used to parse and test the filtering component's queries
		 * @constructs
		 * @extends FooTable.Class
		 * @param {string} query - The string value of the query.
		 * @param {string} [space="AND"] - How the query treats whitespace.
		 * @param {boolean} [connectors=true] - Whether or not to replace phrase connectors (+.-_) with spaces.
		 * @param {boolean} [ignoreCase=true] - Whether or not ignore case when matching.
		 * @returns {FooTable.Query}
		 */
		construct: function(query, space, connectors, ignoreCase){
			/* PRIVATE */
			/**
			 * Holds the previous value of the query and is used internally in the {@link FooTable.Query#val} method.
			 * @type {string}
			 * @private
			 */
			this._original = null;
			/**
			 * Holds the value for the query. Access to this variable is provided through the {@link FooTable.Query#val} method.
			 * @type {string}
			 * @private
			 */
			this._value = null;
			/* PUBLIC */
			/**
			 * A string specifying how the query treats whitespace. Can be either "OR" or "AND".
			 * @type {string}
			 */
			this.space = F.is.string(space) && (space == 'OR' || space == 'AND') ? space : 'AND';
			/**
			 * Whether or not to replace phrase connectors (+.-_) with spaces before executing the query.
			 * @instance
			 * @type {boolean}
			 */
			this.connectors = F.is.boolean(connectors) ? connectors : true;
			/**
			 * Whether or not ignore case when matching.
			 * @instance
			 * @type {boolean}
			 */
			this.ignoreCase = F.is.boolean(ignoreCase) ? ignoreCase : true;
			/**
			 * The left side of the query if one exists. OR takes precedence over AND.
			 * @type {FooTable.Query}
			 * @example <caption>The below shows what is meant by the "left" side of a query</caption>
			 * query = "Dave AND Mary" - "Dave" is the left side of the query.
			 * query = "Dave AND Mary OR John" - "Dave and Mary" is the left side of the query.
			 */
			this.left = null;
			/**
			 * The right side of the query if one exists. OR takes precedence over AND.
			 * @type {FooTable.Query}
			 * @example <caption>The below shows what is meant by the "right" side of a query</caption>
			 * query = "Dave AND Mary" - "Mary" is the right side of the query.
			 * query = "Dave AND Mary OR John" - "John" is the right side of the query.
			 */
			this.right = null;
			/**
			 * The parsed parts of the query. This contains the information used to actually perform a match against a string.
			 * @type {Array}
			 */
			this.parts = [];
			/**
			 * The type of operand to apply to the results of the individual parts of the query.
			 * @type {string}
			 */
			this.operator = null;
			this.val(query);
		},
		/**
		 * Gets or sets the value for the query. During set the value is parsed setting all properties as required.
		 * @param {string} [value] - If supplied the value to set for this query.
		 * @returns {(string|undefined)}
		 */
		val: function(value){
			// get
			if (F.is.emptyString(value)) return this._value;

			// set
			if (F.is.emptyString(this._original)) this._original = value;
			else if (this._original == value) return;

			this._value = value;
			this._parse();
		},
		/**
		 * Tests the supplied string against the query.
		 * @param {string} str - The string to test.
		 * @returns {boolean}
		 */
		match: function(str){
			if (F.is.emptyString(this.operator) || this.operator === 'OR')
				return this._left(str, false) || this._match(str, false) || this._right(str, false);
			if (this.operator === 'AND')
				return this._left(str, true) && this._match(str, true) && this._right(str, true);
		},
		/**
		 * Matches this queries parts array against the supplied string.
		 * @param {string} str - The string to test.
		 * @param {boolean} def - The default value to return based on the operand.
		 * @returns {boolean}
		 * @private
		 */
		_match: function(str, def){
			var self = this, result = false, empty = F.is.emptyString(str);
			if (F.is.emptyArray(self.parts) && self.left instanceof F.Query) return def;
			if (F.is.emptyArray(self.parts)) return result;
			if (self.space === 'OR'){
				// with OR we give the str every part to test and if any match it is a success, we do exit early if a negated match occurs
				F.arr.each(self.parts, function(p){
					if (p.empty && empty){
						result = true;
						if (p.negate){
							result = false;
							return result;
						}
					} else {
						var match = (p.exact ? F.str.containsExact : F.str.contains)(str, p.query, self.ignoreCase);
						if (match && !p.negate) result = true;
						if (match && p.negate) {
							result = false;
							return result;
						}
					}
				});
			} else {
				// otherwise with AND we check until the first failure and then exit
				result = true;
				F.arr.each(self.parts, function(p){
					if (p.empty){
						if ((!empty && !p.negate) || (empty && p.negate)) result = false;
						return result;
					} else {
						var match = (p.exact ? F.str.containsExact : F.str.contains)(str, p.query, self.ignoreCase);
						if ((!match && !p.negate) || (match && p.negate)) result = false;
						return result;
					}
				});
			}
			return result;
		},
		/**
		 * Matches the left side of the query if one exists with the supplied string.
		 * @param {string} str - The string to test.
		 * @param {boolean} def - The default value to return based on the operand.
		 * @returns {boolean}
		 * @private
		 */
		_left: function(str, def){
			return (this.left instanceof F.Query) ? this.left.match(str) : def;
		},
		/**
		 * Matches the right side of the query if one exists with the supplied string.
		 * @param {string} str - The string to test.
		 * @param {boolean} def - The default value to return based on the operand.
		 * @returns {boolean}
		 * @private
		 */
		_right: function(str, def){
			return (this.right instanceof F.Query) ? this.right.match(str) : def;
		},
		/**
		 * Parses the private {@link FooTable.Query#_value} property and populates the object.
		 * @private
		 */
		_parse: function(){
			if (F.is.emptyString(this._value)) return;
			// OR takes precedence so test for it first
			if (/\sOR\s/.test(this._value)){
				// we have an OR so split the value on the first occurrence of OR to get the left and right sides of the statement
				this.operator = 'OR';
				var or = this._value.split(/(?:\sOR\s)(.*)?/);
				this.left = new F.Query(or[0], this.space, this.connectors, this.ignoreCase);
				this.right = new F.Query(or[1], this.space, this.connectors, this.ignoreCase);
			} else if (/\sAND\s/.test(this._value)) {
				// there are no more OR's so start with AND
				this.operator = 'AND';
				var and = this._value.split(/(?:\sAND\s)(.*)?/);
				this.left = new F.Query(and[0], this.space, this.connectors, this.ignoreCase);
				this.right = new F.Query(and[1], this.space, this.connectors, this.ignoreCase);
			} else {
				// we have no more statements to parse so set the parts array by parsing each part of the remaining query
				var self = this;
				this.parts = F.arr.map(this._value.match(/(?:[^\s"]+|"[^"]*")+/g), function(str){
					return self._part(str);
				});
			}
		},
		/**
		 * Parses a single part of a query into an object to use during matching.
		 * @param {string} str - The string representation of the part.
		 * @returns {{query: string, negate: boolean, phrase: boolean, exact: boolean}}
		 * @private
		 */
		_part: function(str){
			var p = {
				query: str,
				negate: false,
				phrase: false,
				exact: false,
				empty: false
			};
			// support for NEGATE operand - (minus sign). Remove this first so we can get onto phrase checking
			if (F.str.startsWith(p.query, '-')){
				p.query = F.str.from(p.query, '-');
				p.negate = true;
			}
			// support for PHRASES (exact matches)
			if (/^"(.*?)"$/.test(p.query)){ // if surrounded in quotes strip them and nothing else
				p.query = p.query.replace(/^"(.*?)"$/, '$1');
				p.phrase = true;
				p.exact = true;
			} else if (this.connectors && /(?:\w)+?([-_\+\.])(?:\w)+?/.test(p.query)) { // otherwise replace supported phrase connectors (-_+.) with spaces
				p.query = p.query.replace(/(?:\w)+?([-_\+\.])(?:\w)+?/g, function(match, p1){
					return match.replace(p1, ' ');
				});
				p.phrase = true;
			}
			p.empty = p.phrase && F.is.emptyString(p.query);
			return p;
		}
	});

})(FooTable);
(function(F){

	/**
	 * The value used by the filtering component during filter operations. Must be a string and can be set using the data-filter-value attribute on the cell itself.
	 * If this is not supplied it is set to the result of the toString method called on the value for the cell. Added by the {@link FooTable.Filtering} component.
	 * @type {string}
	 * @default null
	 */
	F.Cell.prototype.filterValue = null;

	// this is used to define the filtering specific properties on cell creation
	F.Cell.prototype.__filtering_define__ = function(valueOrElement){
		this.filterValue = this.column.filterValue.call(this.column, valueOrElement);
	};

	// this is used to update the filterValue property whenever the cell value is changed
	F.Cell.prototype.__filtering_val__ = function(value){
		if (F.is.defined(value)){
			// set only
			this.filterValue = this.column.filterValue.call(this.column, value);
		}
	};

	// overrides the public define method and replaces it with our own
	F.Cell.extend('define', function(valueOrElement){
		this._super(valueOrElement);
		this.__filtering_define__(valueOrElement);
	});
	// overrides the public val method and replaces it with our own
	F.Cell.extend('val', function(value, redraw, redrawSelf){
		var val = this._super(value, redraw, redrawSelf);
		this.__filtering_val__(value);
		return val;
	});
})(FooTable);
(function($, F){
	/**
	 * Whether or not the column can be used during filtering. Added by the {@link FooTable.Filtering} component.
	 * @type {boolean}
	 * @default true
	 */
	F.Column.prototype.filterable = true;

	/**
	 * This is supplied either the cell value or jQuery object to parse. A string value must be returned from this method and will be used during filtering operations.
	 * @param {(*|jQuery)} valueOrElement - The value or jQuery cell object.
	 * @returns {string}
	 * @this FooTable.Column
	 */
	F.Column.prototype.filterValue = function(valueOrElement){
		// if we have an element or a jQuery object use jQuery to get the value
		if (F.is.element(valueOrElement) || F.is.jq(valueOrElement)){
			var data = $(valueOrElement).data('filterValue');
			return F.is.defined(data) ? ''+data : $(valueOrElement).text();
		}
		// if options are supplied with the value
		if (F.is.hash(valueOrElement) && F.is.hash(valueOrElement.options)){
			if (F.is.string(valueOrElement.options.filterValue)) return valueOrElement.options.filterValue;
			if (F.is.defined(valueOrElement.value)) valueOrElement = valueOrElement.value;
		}
		if (F.is.defined(valueOrElement) && valueOrElement != null) return valueOrElement+''; // use the native toString of the value
		return ''; // otherwise we have no value so return an empty string
	};

	// this is used to define the filtering specific properties on column creation
	F.Column.prototype.__filtering_define__ = function(definition){
		this.filterable = F.is.boolean(definition.filterable) ? definition.filterable : this.filterable;
		this.filterValue = F.checkFnValue(this, definition.filterValue, this.filterValue);
	};

	// overrides the public define method and replaces it with our own
	F.Column.extend('define', function(definition){
		this._super(definition); // call the base so we don't have to redefine any previously set properties
		this.__filtering_define__(definition); // then call our own
	});
})(jQuery, FooTable);
(function(F){
	/**
	 * An object containing the filtering options for the plugin. Added by the {@link FooTable.Filtering} component.
	 * @type {object}
	 * @prop {boolean} enabled=false - Whether or not to allow filtering on the table.
	 * @prop {({name: string, query: (string|FooTable.Query), columns: (Array.<string>|Array.<number>|Array.<FooTable.Column>)}|Array.<FooTable.Filter>)} filters - The filters to apply to the current {@link FooTable.Rows#array}.
	 * @prop {number} delay=1200 - The delay in milliseconds before the query is auto applied after a change (any value equal to or less than zero will disable this).
	 * @prop {number} min=1 - The minimum number of characters allowed in the search input before it is auto applied.
	 * @prop {string} space="AND" - Specifies how whitespace in a filter query is handled.
	 * @prop {string} placeholder="Search" - The string used as the placeholder for the search input.
	 * @prop {string} dropdownTitle=null - The title to display at the top of the search input column select.
	 * @prop {string} position="right" - The string used to specify the alignment of the search input.
	 * @prop {string} connectors=true - Whether or not to replace phrase connectors (+.-_) with space before executing the query.
	 * @prop {boolean} ignoreCase=true - Whether or not ignore case when matching.
	 * @prop {boolean} exactMatch=false - Whether or not search queries are treated as phrases when matching.
	 * @prop {boolean} focus=true - Whether or not to focus the search input after the search/clear button is clicked or after auto applying the search input query.
	 * @prop {string} container=null - A selector specifying where to place the filtering components form, if null the form is displayed within a row in the head of the table.
	 */
	F.Defaults.prototype.filtering = {
		enabled: false,
		filters: [],
		delay: 1200,
		min: 1,
		space: 'AND',
		placeholder: 'Search',
		dropdownTitle: null,
		position: 'right',
		connectors: true,
		ignoreCase: true,
		exactMatch: false,
		focus: true,
		container: null
	};
})(FooTable);
(function(F){
	/**
	 * Checks if the row is filtered using the supplied filters.
	 * @this FooTable.Row
	 * @param {Array.<FooTable.Filter>} filters - The filters to apply.
	 * @returns {boolean}
	 */
	F.Row.prototype.filtered = function(filters){
		var result = true, self = this;
		F.arr.each(filters, function(f){
			if ((result = f.matchRow(self)) == false) return false;
		});
		return result;
	};
})(FooTable);
(function($, F){

	F.Sorter = F.Class.extend(/** @lends FooTable.Sorter */{
		/**
		 * The sorter object contains the column and direction to sort by.
		 * @constructs
		 * @extends FooTable.Class
		 * @param {FooTable.Column} column - The column to sort.
		 * @param {string} direction - The direction to sort by.
		 * @returns {FooTable.Sorter}
		 */
		construct: function(column, direction){
			/**
			 * The column to sort.
			 * @type {FooTable.Column}
			 */
			this.column = column;
			/**
			 * The direction to sort by.
			 * @type {string}
			 */
			this.direction = direction;
		}
	});

})(jQuery, FooTable);
(function ($, F) {
	F.Sorting = F.Component.extend(/** @lends FooTable.Sorting */{
		/**
		 * The sorting component adds a small sort button to specified column headers allowing users to sort those columns in the table.
		 * @constructs
		 * @extends FooTable.Component
		 * @param {FooTable.Table} table - The parent {@link FooTable.Table} object for the component.
		 * @returns {FooTable.Sorting}
		 */
		construct: function (table) {
			// call the constructor of the base class
			this._super(table, table.o.sorting.enabled);

			/* PROTECTED */
			/**
			 * This provides a shortcut to the {@link FooTable.Table#options}.[sorting]{@link FooTable.Defaults#sorting} object.
			 * @instance
			 * @protected
			 * @type {object}
			 */
			this.o = table.o.sorting;
			/**
			 * The current sorted column.
			 * @instance
			 * @type {FooTable.Column}
			 */
			this.column = null;
			/**
			 * Whether or not to allow sorting to occur, should be set using the {@link FooTable.Sorting#toggleAllowed} method.
			 * @instance
			 * @type {boolean}
			 */
			this.allowed = true;
			/**
			 * The initial sort state of the table, this value is used for determining if the sorting has occurred or to reset the state to default.
			 * @instance
			 * @type {{isset: boolean, rows: Array.<FooTable.Row>, column: string, direction: ?string}}
			 */
			this.initial = null;
		},

		/* PROTECTED */
		/**
		 * Checks the supplied data and options for the sorting component.
		 * @instance
		 * @protected
		 * @param {object} data - The jQuery data object from the parent table.
		 * @fires FooTable.Sorting#"preinit.ft.sorting"
		 * @this FooTable.Sorting
		 */
		preinit: function(data){
			var self = this;
			/**
			 * The preinit.ft.sorting event is raised before the UI is created and provides the tables jQuery data object for additional options parsing.
			 * Calling preventDefault on this event will disable the component.
			 * @event FooTable.Sorting#"preinit.ft.sorting"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {object} data - The jQuery data object of the table raising the event.
			 */
			this.ft.raise('preinit.ft.sorting', [data]).then(function(){
				if (self.ft.$el.hasClass('footable-sorting'))
					self.enabled = true;
				self.enabled = F.is.boolean(data.sorting)
					? data.sorting
					: self.enabled;
				if (!self.enabled) return;
				self.column = F.arr.first(self.ft.columns.array, function(col){ return col.sorted; });
			}, function(){
				self.enabled = false;
			});
		},
		/**
		 * Initializes the sorting component for the plugin using the supplied table and options.
		 * @instance
		 * @protected
		 * @fires FooTable.Sorting#"init.ft.sorting"
		 * @this FooTable.Sorting
		 */
		init: function () {
			/**
			 * The init.ft.sorting event is raised before its UI is generated.
			 * Calling preventDefault on this event will disable the component.
			 * @event FooTable.Sorting#"init.ft.sorting"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */
			var self = this;
			this.ft.raise('init.ft.sorting').then(function(){
				if (!self.initial){
					var isset = !!self.column;
					self.initial = {
						isset: isset,
						// grab a shallow copy of the rows array prior to sorting - allows us to reset without an initial sort
						rows: self.ft.rows.all.slice(0),
						// if there is a sorted column store its name and direction
						column: isset ? self.column.name : null,
						direction: isset ? self.column.direction : null
					}
				}
				F.arr.each(self.ft.columns.array, function(col){
					if (col.sortable){
						col.$el.addClass('footable-sortable').append($('<span/>', {'class': 'fooicon fooicon-sort'}));
					}
				});
				self.ft.$el.on('click.footable', '.footable-sortable', { self: self }, self._onSortClicked);
			}, function(){
				self.enabled = false;
			});
		},
		/**
		 * Destroys the sorting component removing any UI generated from the table.
		 * @instance
		 * @protected
		 * @fires FooTable.Sorting#"destroy.ft.sorting"
		 */
		destroy: function () {
			/**
			 * The destroy.ft.sorting event is raised before its UI is removed.
			 * Calling preventDefault on this event will prevent the component from being destroyed.
			 * @event FooTable.Sorting#"destroy.ft.sorting"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */
			var self = this;
			this.ft.raise('destroy.ft.paging').then(function(){
				self.ft.$el.off('click.footable', '.footable-sortable', self._onSortClicked);
				self.ft.$el.children('thead').children('tr.footable-header')
					.children('.footable-sortable').removeClass('footable-sortable footable-asc footable-desc')
					.find('span.fooicon').remove();
			});
		},
		/**
		 * Performs the actual sorting against the {@link FooTable.Rows#current} array.
		 * @instance
		 * @protected
		 */
		predraw: function () {
			if (!this.column) return;
			var self = this, col = self.column;
			self.ft.rows.array.sort(function (a, b) {
				return col.direction == 'DESC'
						? col.sorter(b.cells[col.index].sortValue, a.cells[col.index].sortValue)
						: col.sorter(a.cells[col.index].sortValue, b.cells[col.index].sortValue);
			});
		},
		/**
		 * Updates the sorting UI setting the state of the sort buttons.
		 * @instance
		 * @protected
		 */
		draw: function () {
			if (!this.column) return;
			var self = this,
				$sortable = self.ft.$el.find('thead > tr > .footable-sortable'),
				$active = self.column.$el;

			$sortable.removeClass('footable-asc footable-desc').children('.fooicon').removeClass('fooicon-sort fooicon-sort-asc fooicon-sort-desc');
			$sortable.not($active).children('.fooicon').addClass('fooicon-sort');
			$active.addClass(self.column.direction == 'DESC' ? 'footable-desc' : 'footable-asc')
				.children('.fooicon').addClass(self.column.direction == 'DESC' ? 'fooicon-sort-desc' : 'fooicon-sort-asc');
		},

		/* PUBLIC */
		/**
		 * Sets the sorting options and calls the {@link FooTable.Table#draw} method to perform the actual sorting.
		 * @instance
		 * @param {(string|number|FooTable.Column)} column - The column name, index or the actual {@link FooTable.Column} object to sort by.
		 * @param {string} [direction="ASC"] - The direction to sort by, either ASC or DESC.
		 * @returns {jQuery.Promise}
		 * @fires FooTable.Sorting#"before.ft.sorting"
		 * @fires FooTable.Sorting#"after.ft.sorting"
		 */
		sort: function(column, direction){
			return this._sort(column, direction);
		},
		/**
		 * Toggles whether or not sorting is currently allowed.
		 * @param {boolean} [state] - You can optionally specify the state you want it to be, if not supplied the current value is flipped.
		 */
		toggleAllowed: function(state){
			state = F.is.boolean(state) ? state : !this.allowed;
			this.allowed = state;
			this.ft.$el.toggleClass('footable-sorting-disabled', !this.allowed);
		},
		/**
		 * Checks whether any sorting has occurred for the table.
		 * @returns {boolean}
		 */
		hasChanged: function(){
			return !(!this.initial || !this.column ||
				(this.column.name === this.initial.column &&
					(this.column.direction === this.initial.direction || (this.initial.direction === null && this.column.direction === 'ASC')))
			);
		},
		/**
		 * Resets the table sorting to the initial state recorded in the components init method.
		 */
		reset: function(){
			if (!!this.initial){
				if (this.initial.isset){
					// if the initial value specified a column, sort by it
					this.sort(this.initial.column, this.initial.direction);
				} else {
					// if there was no initial column then we need to reset the rows to there original order
					if (!!this.column){
						// if there is a currently sorted column remove the asc/desc classes and set it to null.
						this.column.$el.removeClass('footable-asc footable-desc');
						this.column = null;
					}
					// replace the current all rows array with the one stored in the initial value
					this.ft.rows.all = this.initial.rows;
					// force the table to redraw itself using the updated rows array
					this.ft.draw();
				}
			}
		},

		/* PRIVATE */
		/**
		 * Performs the required steps to handle sorting including the raising of the {@link FooTable.Sorting#"before.ft.sorting"} and {@link FooTable.Sorting#"after.ft.sorting"} events.
		 * @instance
		 * @private
		 * @param {(string|number|FooTable.Column)} column - The column name, index or the actual {@link FooTable.Column} object to sort by.
		 * @param {string} [direction="ASC"] - The direction to sort by, either ASC or DESC.
		 * @returns {jQuery.Promise}
		 * @fires FooTable.Sorting#"before.ft.sorting"
		 * @fires FooTable.Sorting#"after.ft.sorting"
		 */
		_sort: function(column, direction){
			if (!this.allowed) return $.Deferred().reject('sorting disabled');
			var self = this;
			var sorter = new F.Sorter(self.ft.columns.get(column), F.Sorting.dir(direction));
			/**
			 * The before.ft.sorting event is raised before a sort is applied and allows listeners to modify the sorter or cancel it completely by calling preventDefault on the jQuery.Event object.
			 * @event FooTable.Sorting#"before.ft.sorting"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {FooTable.Sorter} sorter - The sorter that is about to be applied.
			 */
			return self.ft.raise('before.ft.sorting', [sorter]).then(function(){
				F.arr.each(self.ft.columns.array, function(col){
					if (col != self.column) col.direction = null;
				});
				self.column = self.ft.columns.get(sorter.column);
				if (self.column) self.column.direction = F.Sorting.dir(sorter.direction);
				return self.ft.draw().then(function(){
					/**
					 * The after.ft.sorting event is raised after a sorter has been applied.
					 * @event FooTable.Sorting#"after.ft.sorting"
					 * @param {jQuery.Event} e - The jQuery.Event object for the event.
					 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
					 * @param {FooTable.Sorter} sorter - The sorter that has been applied.
					 */
					self.ft.raise('after.ft.sorting', [sorter]);
				});
			});
		},
		/**
		 * Handles the sort button clicked event.
		 * @instance
		 * @private
		 * @param {jQuery.Event} e - The event object for the event.
		 */
		_onSortClicked: function (e) {
			var self = e.data.self, $header = $(this).closest('th,td'),
				direction = $header.is('.footable-asc, .footable-desc')
					? ($header.hasClass('footable-desc') ? 'ASC' : 'DESC')
					: 'ASC';
			self._sort($header.index(), direction);
		}
	});

	/**
	 * Checks the supplied string is a valid direction and if not returns ASC as default.
	 * @static
	 * @protected
	 * @param {string} str - The string to check.
	 */
	F.Sorting.dir = function(str){
		return F.is.string(str) && (str == 'ASC' || str == 'DESC') ? str : 'ASC';
	};

	F.components.register('sorting', F.Sorting, 600);

})(jQuery, FooTable);
(function(F){

	/**
	 * The value used by the sorting component during sort operations. Can be set using the data-sort-value attribute on the cell itself.
	 * If this is not supplied it is set to the result of the toString method called on the value for the cell. Added by the {@link FooTable.Sorting} component.
	 * @type {string}
	 * @default null
	 */
	F.Cell.prototype.sortValue = null;

	// this is used to define the sorting specific properties on cell creation
	F.Cell.prototype.__sorting_define__ = function(valueOrElement){
		this.sortValue = this.column.sortValue.call(this.column, valueOrElement);
	};

	// this is used to update the sortValue property whenever the cell value is changed
	F.Cell.prototype.__sorting_val__ = function(value){
		if (F.is.defined(value)){
			// set only
			this.sortValue = this.column.sortValue.call(this.column, value);
		}
	};

	// overrides the public define method and replaces it with our own
	F.Cell.extend('define', function(valueOrElement){
		this._super(valueOrElement);
		this.__sorting_define__(valueOrElement);
	});
	// overrides the public val method and replaces it with our own
	F.Cell.extend('val', function(value, redraw, redrawSelf){
		var val = this._super(value, redraw, redrawSelf);
		this.__sorting_val__(value);
		return val;
	});
})(FooTable);
(function($, F){
	/**
	 * The direction to sort if the {@link FooTable.Column#sorted} property is set to true. Can be "ASC", "DESC" or NULL. Added by the {@link FooTable.Sorting} component.
	 * @type {string}
	 * @default null
	 */
	F.Column.prototype.direction = null;
	/**
	 * Whether or not the column can be sorted. Added by the {@link FooTable.Sorting} component.
	 * @type {boolean}
	 * @default true
	 */
	F.Column.prototype.sortable = true;
	/**
	 * Whether or not the column is sorted. Added by the {@link FooTable.Sorting} component.
	 * @type {boolean}
	 * @default false
	 */
	F.Column.prototype.sorted = false;

	/**
	 * This is supplied two values from the column for a comparison to be made and the result returned. Added by the {@link FooTable.Sorting} component.
	 * @param {*} a - The first value to be compared.
	 * @param {*} b - The second value to compare to the first.
	 * @returns {number}
	 * @example <caption>This example shows using pseudo code what a sort function would look like.</caption>
	 * "sorter": function(a, b){
	 * 	if (a is less than b by some ordering criterion) {
	 * 		return -1;
	 * 	}
	 * 	if (a is greater than b by the ordering criterion) {
	 * 		return 1;
	 * 	}
	 * 	// a must be equal to b
	 * 	return 0;
	 * }
	 */
	F.Column.prototype.sorter = function(a, b){
		if (typeof a === 'string') a = a.toLowerCase();
		if (typeof b === 'string') b = b.toLowerCase();
		if (a === b) return 0;
		if (a < b) return -1;
		return 1;
	};

	/**
	 * This is supplied either the cell value or jQuery object to parse. A value must be returned from this method and will be used during sorting operations.
	 * @param {(*|jQuery)} valueOrElement - The value or jQuery cell object.
	 * @returns {*}
	 * @this FooTable.Column
	 */
	F.Column.prototype.sortValue = function(valueOrElement){
		// if we have an element or a jQuery object use jQuery to get the value
		if (F.is.element(valueOrElement) || F.is.jq(valueOrElement)){
			var data = $(valueOrElement).data('sortValue');
			return F.is.defined(data) ? data : this.parser(valueOrElement);
		}
		// if options are supplied with the value
		if (F.is.hash(valueOrElement) && F.is.hash(valueOrElement.options)){
			if (F.is.string(valueOrElement.options.sortValue)) return valueOrElement.options.sortValue;
			if (F.is.defined(valueOrElement.value)) valueOrElement = valueOrElement.value;
		}
		if (F.is.defined(valueOrElement) && valueOrElement != null) return valueOrElement;
		return null;
	};

	// this is used to define the sorting specific properties on column creation
	F.Column.prototype.__sorting_define__ = function(definition){
		this.sorter = F.checkFnValue(this, definition.sorter, this.sorter);
		this.direction = F.is.type(definition.direction, 'string') ? F.Sorting.dir(definition.direction) : null;
		this.sortable = F.is.boolean(definition.sortable) ? definition.sortable : true;
		this.sorted = F.is.boolean(definition.sorted) ? definition.sorted : false;
		this.sortValue = F.checkFnValue(this, definition.sortValue, this.sortValue);
	};

	// overrides the public define method and replaces it with our own
	F.Column.extend('define', function(definition){
		this._super(definition);
		this.__sorting_define__(definition);
	});

})(jQuery, FooTable);
(function(F){
	/**
	 * An object containing the sorting options for the plugin. Added by the {@link FooTable.Sorting} component.
	 * @type {object}
	 * @prop {boolean} enabled=false - Whether or not to allow sorting on the table.
	 */
	F.Defaults.prototype.sorting = {
		enabled: false
	};
})(FooTable);
(function($, F){

	F.HTMLColumn.extend('__sorting_define__', function(definition){
		this._super(definition);
		this.sortUse = F.is.string(definition.sortUse) && $.inArray(definition.sortUse, ['html','text']) !== -1 ? definition.sortUse : 'html';
	});

	/**
	 * This is supplied either the cell value or jQuery object to parse. A value must be returned from this method and will be used during sorting operations.
	 * @param {(*|jQuery)} valueOrElement - The value or jQuery cell object.
	 * @returns {*}
	 * @this FooTable.HTMLColumn
	 */
	F.HTMLColumn.prototype.sortValue = function(valueOrElement){
		// if we have an element or a jQuery object use jQuery to get the data value or pass it off to the parser
		if (F.is.element(valueOrElement) || F.is.jq(valueOrElement)){
			var data = $(valueOrElement).data('sortValue');
			return F.is.defined(data) ? data : this.parser(valueOrElement);
		}
		// if options are supplied with the value
		if (F.is.hash(valueOrElement) && F.is.hash(valueOrElement.options)){
			if (F.is.string(valueOrElement.options.sortValue)) return valueOrElement.options.sortValue;
			if (F.is.defined(valueOrElement.value)) valueOrElement = valueOrElement.value;
		}
		if (F.is.defined(valueOrElement) && valueOrElement != null) return valueOrElement;
		return null;
	};

})(jQuery, FooTable);
(function($, F){

	/**
	 * This is supplied either the cell value or jQuery object to parse. A value must be returned from this method and will be used during sorting operations.
	 * @param {(*|jQuery)} valueOrElement - The value or jQuery cell object.
	 * @returns {*}
	 */
	F.NumberColumn.prototype.sortValue = function(valueOrElement){
		// if we have an element or a jQuery object use jQuery to get the data value or pass it off to the parser
		if (F.is.element(valueOrElement) || F.is.jq(valueOrElement)){
			var data = $(valueOrElement).data('sortValue');
			return F.is.number(data) ? data : this.parser(valueOrElement);
		}
		// if options are supplied with the value
		if (F.is.hash(valueOrElement) && F.is.hash(valueOrElement.options)){
			if (F.is.string(valueOrElement.options.sortValue)) return this.parser(valueOrElement);
			if (F.is.number(valueOrElement.options.sortValue)) return valueOrElement.options.sortValue;
			if (F.is.number(valueOrElement.value)) return valueOrElement.value;
		}
		if (F.is.string(valueOrElement)) return this.parser(valueOrElement);
		if (F.is.number(valueOrElement)) return valueOrElement;
		return null;
	};

})(jQuery, FooTable);
(function(F){
	/**
	 * Sort the table using the specified column and direction. Added by the {@link FooTable.Sorting} component.
	 * @instance
	 * @param {(string|number|FooTable.Column)} column - The column name, index or the actual {@link FooTable.Column} object to sort by.
	 * @param {string} [direction="ASC"] - The direction to sort by, either ASC or DESC.
	 * @returns {jQuery.Promise}
	 * @fires FooTable.Sorting#"change.ft.sorting"
	 * @fires FooTable.Sorting#"changed.ft.sorting"
	 * @see FooTable.Sorting#sort
	 */
	F.Table.prototype.sort = function(column, direction){
		return this.use(F.Sorting).sort(column, direction);
	};
})(FooTable);
(function($, F){

	F.Pager = F.Class.extend(/** @lends FooTable.Pager */{
		/**
		 * The pager object contains the page number and direction to page to.
		 * @constructs
		 * @extends FooTable.Class
		 * @param {number} total - The total number of pages available.
		 * @param {number} current - The current page number.
		 * @param {number} size - The number of rows per page.
		 * @param {number} page - The page number to goto.
		 * @param {boolean} forward - A boolean indicating the direction of paging, TRUE = forward, FALSE = back.
		 * @returns {FooTable.Pager}
		 */
		construct: function(total, current, size, page, forward){
			/**
			 * The total number of pages available.
			 * @type {number}
			 */
			this.total = total;
			/**
			 * The current page number.
			 * @type {number}
			 */
			this.current = current;
			/**
			 * The number of rows per page.
			 * @type {number}
			 */
			this.size = size;
			/**
			 * The page number to goto.
			 * @type {number}
			 */
			this.page = page;
			/**
			 * A boolean indicating the direction of paging, TRUE = forward, FALSE = back.
			 * @type {boolean}
			 */
			this.forward = forward;
		}
	});

})(jQuery, FooTable);
(function($, F){
	F.Paging = F.Component.extend(/** @lends FooTable.Paging */{
		/**
		 * The paging component adds a pagination control to the table allowing users to navigate table rows via pages.
		 * @constructs
		 * @extends FooTable.Component
		 * @param {FooTable.Table} table - The parent {@link FooTable.Table} object for the component.
		 * @returns {FooTable.Filtering}
		 */
		construct: function(table){
			// call the base constructor
			this._super(table, table.o.paging.enabled);

			/* PROTECTED */
			/**
			 * An object containing the strings used by the paging buttons.
			 * @type {{ first: string, prev: string, next: string, last: string }}
			 */
			this.strings = table.o.paging.strings;

			/* PUBLIC */
			/**
			 * The current page number to display.
			 * @instance
			 * @type {number}
			 */
			this.current = table.o.paging.current;
			/**
			 * The number of rows to display per page.
			 * @instance
			 * @type {number}
			 */
			this.size = table.o.paging.size;
			/**
			 * The maximum number of page links to display at once.
			 * @instance
			 * @type {number}
			 */
			this.limit = table.o.paging.limit;
			/**
			 * The position of the pagination control within the paging rows cell.
			 * @instance
			 * @type {string}
			 */
			this.position = table.o.paging.position;
			/**
			 * The format string used to generate the text displayed under the pagination control.
			 * @instance
			 * @type {string}
			 */
			this.countFormat = table.o.paging.countFormat;
			/**
			 * A selector specifying where to place the paging components UI, if null the UI is displayed within a row in the foot of the table.
			 * @instance
			 * @type {string}
			 */
			this.container = table.o.paging.container;
				/**
			 * The total number of pages.
			 * @instance
			 * @type {number}
			 */
			this.total = -1;
			/**
			 * The number of rows in the {@link FooTable.Rows#array} before paging is applied.
			 * @instance
			 * @type {number}
			 */
			this.totalRows = 0;
			/**
			 * A number indicating the previous page displayed.
			 * @instance
			 * @type {number}
			 */
			this.previous = -1;
			/**
			 * The count string generated using the {@link FooTable.Filtering#countFormat} option. This value is only set after the first call to the {@link FooTable.Filtering#predraw} method.
			 * @instance
			 * @type {string}
			 */
			this.formattedCount = null;
			/**
			 * The jQuery object of the element containing the entire paging UI.
			 * @instance
			 * @type {jQuery}
			 */
			this.$container = null;
			/**
			 * The jQuery object of the element wrapping all the paging UI elements.
			 * @instance
			 * @type {jQuery}
			 */
			this.$wrapper = null;
			/** +
			 * The jQuery row object that contains all the paging specific elements.
			 * @instance
			 * @type {jQuery}
			 */
			this.$row = null;
			/**
			 * The jQuery cell object that contains the pagination control and total count.
			 * @instance
			 * @type {jQuery}
			 */
			this.$cell = null;
			/**
			 * The jQuery object that contains the links for the pagination control.
			 * @instance
			 * @type {jQuery}
			 */
			this.$pagination = null;
			/**
			 * The jQuery object that contains the row count.
			 * @instance
			 * @type {jQuery}
			 */
			this.$count = null;
			/**
			 * Whether or not the pagination row is detached from the table.
			 * @instance
			 * @type {boolean}
			 */
			this.detached = true;

			/* PRIVATE */
			/**
			 * Used to hold the number of page links created.
			 * @instance
			 * @type {number}
			 * @private
			 */
			this._createdLinks = 0;
		},

		/* PROTECTED */
		/**
		 * Checks the supplied data and options for the paging component.
		 * @instance
		 * @protected
		 * @param {object} data - The jQuery data object from the parent table.
		 * @fires FooTable.Paging#"preinit.ft.paging"
		 */
		preinit: function(data){
			var self = this;
			/**
			 * The preinit.ft.paging event is raised before the UI is created and provides the tables jQuery data object for additional options parsing.
			 * Calling preventDefault on this event will disable the component.
			 * @event FooTable.Paging#"preinit.ft.paging"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {object} data - The jQuery data object of the table raising the event.
			 */
			this.ft.raise('preinit.ft.paging', [data]).then(function(){
				if (self.ft.$el.hasClass('footable-paging'))
					self.enabled = true;
				self.enabled = F.is.boolean(data.paging)
					? data.paging
					: self.enabled;

				if (!self.enabled) return;

				self.size = F.is.number(data.pagingSize)
					? data.pagingSize
					: self.size;

				self.current = F.is.number(data.pagingCurrent)
					? data.pagingCurrent
					: self.current;

				self.limit = F.is.number(data.pagingLimit)
					? data.pagingLimit
					: self.limit;

				if (self.ft.$el.hasClass('footable-paging-left'))
					self.position = 'left';
				if (self.ft.$el.hasClass('footable-paging-center'))
					self.position = 'center';
				if (self.ft.$el.hasClass('footable-paging-right'))
					self.position = 'right';

				self.position = F.is.string(data.pagingPosition)
					? data.pagingPosition
					: self.position;

				self.countFormat = F.is.string(data.pagingCountFormat)
					? data.pagingCountFormat
					: self.countFormat;

				self.container = F.is.string(data.pagingContainer)
					? data.pagingContainer
					: self.container;

				self.total = Math.ceil(self.ft.rows.all.length / self.size);
			}, function(){
				self.enabled = false;
			});
		},
		/**
		 * Initializes the paging component for the plugin using the supplied table and options.
		 * @instance
		 * @protected
		 * @fires FooTable.Paging#"init.ft.paging"
		 */
		init: function(){
			/**
			 * The init.ft.paging event is raised before its UI is generated.
			 * Calling preventDefault on this event will disable the component.
			 * @event FooTable.Paging#"init.ft.paging"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */
			var self = this;
			this.ft.raise('init.ft.paging').then(function(){
				self.$create();
			}, function(){
				self.enabled = false;
			});
		},
		/**
		 * Destroys the paging component removing any UI generated from the table.
		 * @instance
		 * @protected
		 * @fires FooTable.Paging#"destroy.ft.paging"
		 */
		destroy: function () {
			/**
			 * The destroy.ft.paging event is raised before its UI is removed.
			 * Calling preventDefault on this event will prevent the component from being destroyed.
			 * @event FooTable.Paging#"destroy.ft.paging"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */
			var self = this;
			this.ft.raise('destroy.ft.paging').then(function(){
				self.ft.$el.removeClass('footable-paging')
					.find('tfoot > tr.footable-paging').remove();
				self.detached = true;
				self._createdLinks = 0;
			});
		},
		/**
		 * Performs the actual paging against the {@link FooTable.Rows#current} array removing all rows that are not on the current visible page.
		 * @instance
		 * @protected
		 */
		predraw: function(){
			this.total = Math.ceil(this.ft.rows.array.length / this.size);
			this.current = this.current > this.total ? this.total : (this.current < 1 ? 1 : this.current);
			this.totalRows = this.ft.rows.array.length;
			if (this.totalRows > this.size){
				this.ft.rows.array = this.ft.rows.array.splice((this.current - 1) * this.size, this.size);
			}
			this.formattedCount = this.format(this.countFormat);
		},
		/**
		 * Updates the paging UI setting the state of the pagination control.
		 * @instance
		 * @protected
		 */
		draw: function(){
			if (this.total <= 1){
				if (!this.detached){
					if (this.$row){
						this.$row.detach();
					} else {
						this.$wrapper.detach();
					}
					this.detached = true;
				}
			} else {
				if (this.detached){
					if (this.$row){
						var $tfoot = this.ft.$el.children('tfoot');
						if ($tfoot.length == 0){
							$tfoot = $('<tfoot/>');
							this.ft.$el.append($tfoot);
						}
						this.$row.appendTo($tfoot);
					} else {
						this.$wrapper.appendTo(this.$container);
					}
					this.detached = false;
				}
				if (F.is.jq(this.$cell)){
					this.$cell.attr('colspan', this.ft.columns.visibleColspan);
				}
				this._createLinks();
				this._setVisible(this.current, this.current > this.previous);
				this._setNavigation(true);
				this.$count.text(this.formattedCount);
			}
		},
		/**
		 * Creates the paging UI from the current options setting the various jQuery properties of this component.
		 * @instance
		 * @protected
		 */
		$create: function(){
			this._createdLinks = 0;
			var position = 'footable-paging-center';
			switch (this.position){
				case 'left': position = 'footable-paging-left'; break;
				case 'right': position = 'footable-paging-right'; break;
			}
			this.ft.$el.addClass('footable-paging').addClass(position);

			this.$container = this.container === null ? null : $(this.container).first();
			if (!F.is.jq(this.$container)){
				var $tfoot = this.ft.$el.children('tfoot');
				if ($tfoot.length == 0){
					$tfoot = $('<tfoot/>');
					this.ft.$el.append($tfoot);
				}
				// add it to a row and then populate it with the search input and column selector dropdown.
				this.$row = $('<tr/>', {'class': 'footable-paging'}).prependTo($tfoot);
				this.$container = this.$cell = $('<td/>').attr('colspan', this.ft.columns.visibleColspan).appendTo(this.$row);
			} else {
				this.$container.addClass('footable-paging-external').addClass(position);
			}
			this.$wrapper = $('<div/>', {'class': 'footable-pagination-wrapper'}).appendTo(this.$container);
			this.$pagination = $('<ul/>', { 'class': 'pagination' }).on('click.footable', 'a.footable-page-link', { self: this }, this._onPageClicked);
			this.$count = $('<span/>', { 'class': 'label label-default' });
			this.$wrapper.append(this.$pagination, $('<div/>', {'class': 'divider'}), this.$count);
			this.detached = false;
		},

		/* PUBLIC */
		/**
		 * @summary Uses the supplied format string and replaces the placeholder strings with the current values.
		 * @description This method is used to generate the short description label for the pagination control. i.e. Showing X of Y records. The placeholders for this string are the following:
		 * * {CP} - The current page number.
		 * * {TP} - The total number of pages.
		 * * {PF} - The first row of the current page.
		 * * {PL} - The last row of the current page.
		 * * {TR} - The total rows available.
		 * These placeholders can be supplied in a string like; "Showing {PF} to {PL} of {TR} rows."
		 * @param {string} formatString - The string to be formatted with the paging specific variables.
		 * @returns {string}
		 */
		format: function(formatString){
			var firstRow = (this.size * (this.current - 1)) + 1,
				lastRow = this.size * this.current;
			if (this.ft.rows.array.length == 0){
				firstRow = 0;
				lastRow = 0;
			} else {
				lastRow = lastRow > this.totalRows ? this.totalRows : lastRow;
			}
			return formatString.replace(/\{CP}/g, this.current)
				.replace(/\{TP}/g, this.total)
				.replace(/\{PF}/g, firstRow)
				.replace(/\{PL}/g, lastRow)
				.replace(/\{TR}/g, this.totalRows);
		},
		/**
		 * Pages to the first page.
		 * @instance
		 * @returns {jQuery.Promise}
		 * @fires FooTable.Paging#"before.ft.paging"
		 * @fires FooTable.Paging#"after.ft.paging"
		 */
		first: function(){
			return this._set(1);
		},
		/**
		 * Pages to the previous page.
		 * @instance
		 * @returns {jQuery.Promise}
		 * @fires FooTable.Paging#"before.ft.paging"
		 * @fires FooTable.Paging#"after.ft.paging"
		 */
		prev: function(){
			return this._set(this.current - 1 > 0 ? this.current - 1 : 1);
		},
		/**
		 * Pages to the next page.
		 * @instance
		 * @returns {jQuery.Promise}
		 * @fires FooTable.Paging#"before.ft.paging"
		 * @fires FooTable.Paging#"after.ft.paging"
		 */
		next: function(){
			return this._set(this.current + 1 < this.total ? this.current + 1 : this.total);
		},
		/**
		 * Pages to the last page.
		 * @instance
		 * @returns {jQuery.Promise}
		 * @fires FooTable.Paging#"before.ft.paging"
		 * @fires FooTable.Paging#"after.ft.paging"
		 */
		last: function(){
			return this._set(this.total);
		},
		/**
		 * Pages to the specified page.
		 * @instance
		 * @param {number} page - The page number to go to.
		 * @returns {jQuery.Promise}
		 * @fires FooTable.Paging#"before.ft.paging"
		 * @fires FooTable.Paging#"after.ft.paging"
		 */
		goto: function(page){
			return this._set(page > this.total ? this.total : (page < 1 ? 1 : page));
		},
		/**
		 * Shows the previous X number of pages in the pagination control where X is the value set by the {@link FooTable.Defaults#paging} - limit option value.
		 * @instance
		 */
		prevPages: function(){
			var page = this.$pagination.children('li.footable-page.visible:first').data('page') - 1;
			this._setVisible(page, true);
			this._setNavigation(false);
		},
		/**
		 * Shows the next X number of pages in the pagination control where X is the value set by the {@link FooTable.Defaults#paging} - limit option value.
		 * @instance
		 */
		nextPages: function(){
			var page = this.$pagination.children('li.footable-page.visible:last').data('page') + 1;
			this._setVisible(page, false);
			this._setNavigation(false);
		},
		/**
		 * Gets or sets the current page size.
		 * @instance
		 * @param {(number|string)} [value] - The new page size to use, this value is supplied to `parseInt` so strings can be used. If not supplied or an invalid valid the current page size is returned.
		 * @returns {(number|undefined)}
		 */
		pageSize: function(value){
			value = parseInt(value);
			if (isNaN(value)){
				return this.size;
			}
			this.size = value;
			this.total = Math.ceil(this.ft.rows.all.length / this.size);
			if (F.is.jq(this.$wrapper)){
				if (this.$container.is("td")){
					this.$row.remove();
				} else {
					this.$wrapper.remove();
				}
			}
			this.$create();
			this.ft.draw();
		},

		/* PRIVATE */
		/**
		 * Performs the required steps to handle paging including the raising of the {@link FooTable.Paging#"before.ft.paging"} and {@link FooTable.Paging#"after.ft.paging"} events.
		 * @instance
		 * @private
		 * @param {number} page - The page to set.
		 * @returns {jQuery.Promise}
		 * @fires FooTable.Paging#"before.ft.paging"
		 * @fires FooTable.Paging#"after.ft.paging"
		 */
		_set: function(page){
			var self = this,
				pager = new F.Pager(self.total, self.current, self.size, page, page > self.current);
			/**
			 * The before.ft.paging event is raised before a sort is applied and allows listeners to modify the pager or cancel it completely by calling preventDefault on the jQuery.Event object.
			 * @event FooTable.Paging#"before.ft.paging"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {FooTable.Pager} pager - The pager that is about to be applied.
			 */
			return self.ft.raise('before.ft.paging', [pager]).then(function(){
				pager.page = pager.page > pager.total ? pager.total	: pager.page;
				pager.page = pager.page < 1 ? 1 : pager.page;
				if (self.current == page) return $.when();
				self.previous = self.current;
				self.current = pager.page;
				return self.ft.draw().then(function(){
					/**
					 * The after.ft.paging event is raised after a pager has been applied.
					 * @event FooTable.Paging#"after.ft.paging"
					 * @param {jQuery.Event} e - The jQuery.Event object for the event.
					 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
					 * @param {FooTable.Pager} pager - The pager that has been applied.
					 */
					self.ft.raise('after.ft.paging', [pager]);
				});
			});
		},
		/**
		 * Creates the pagination links using the current state of the plugin. If the total number of pages is the same as
		 * the last time this function was executed it does nothing.
		 * @instance
		 * @private
		 */
		_createLinks: function(){
			if (this._createdLinks === this.total) return;
			var self = this,
				multiple = self.total > 1,
				link = function(attr, html, klass){
					return $('<li/>', {
						'class': klass
					}).attr('data-page', attr)
						.append($('<a/>', {
							'class': 'footable-page-link',
							href: '#'
						}).data('page', attr).html(html));
				};
			self.$pagination.empty();
			if (multiple) {
				self.$pagination.append(link('first', self.strings.first, 'footable-page-nav'));
				self.$pagination.append(link('prev', self.strings.prev, 'footable-page-nav'));
				if (self.limit > 0 && self.limit < self.total){
					self.$pagination.append(link('prev-limit', self.strings.prevPages, 'footable-page-nav'));
				}
			}
			for (var i = 0, $li; i < self.total; i++){
				$li = link(i + 1, i + 1, 'footable-page');
				self.$pagination.append($li);
			}
			if (multiple){
				if (self.limit > 0 && self.limit < self.total){
					self.$pagination.append(link('next-limit', self.strings.nextPages, 'footable-page-nav'));
				}
				self.$pagination.append(link('next', self.strings.next, 'footable-page-nav'));
				self.$pagination.append(link('last', self.strings.last, 'footable-page-nav'));
			}
			self._createdLinks = self.total;
		},
		/**
		 * Sets the state for the navigation links of the pagination control and optionally sets the active class state on the current page link.
		 * @instance
		 * @private
		 * @param {boolean} active - Whether or not to set the active class state on the individual page links.
		 */
		_setNavigation: function(active){
			if (this.current == 1) {
				this.$pagination.children('li[data-page="first"],li[data-page="prev"]').addClass('disabled');
			} else {
				this.$pagination.children('li[data-page="first"],li[data-page="prev"]').removeClass('disabled');
			}

			if (this.current == this.total) {
				this.$pagination.children('li[data-page="next"],li[data-page="last"]').addClass('disabled');
			} else {
				this.$pagination.children('li[data-page="next"],li[data-page="last"]').removeClass('disabled');
			}

			if ((this.$pagination.children('li.footable-page.visible:first').data('page') || 1) == 1) {
				this.$pagination.children('li[data-page="prev-limit"]').addClass('disabled');
			} else {
				this.$pagination.children('li[data-page="prev-limit"]').removeClass('disabled');
			}

			if ((this.$pagination.children('li.footable-page.visible:last').data('page') || this.limit) == this.total) {
				this.$pagination.children('li[data-page="next-limit"]').addClass('disabled');
			} else {
				this.$pagination.children('li[data-page="next-limit"]').removeClass('disabled');
			}

			if (this.limit > 0 && this.total < this.limit){
				this.$pagination.children('li[data-page="prev-limit"],li[data-page="next-limit"]').css('display', 'none');
			} else {
				this.$pagination.children('li[data-page="prev-limit"],li[data-page="next-limit"]').css('display', '');
			}

			if (active){
				this.$pagination.children('li.footable-page').removeClass('active').filter('li[data-page="' + this.current + '"]').addClass('active');
			}
		},
		/**
		 * Sets the visible page using the supplied parameters.
		 * @instance
		 * @private
		 * @param {number} page - The page to make visible.
		 * @param {boolean} right - If set to true the supplied page will be the right most visible pagination link.
		 */
		_setVisible: function(page, right){
			if (this.limit > 0 && this.total > this.limit){
				if (!this.$pagination.children('li.footable-page[data-page="'+page+'"]').hasClass('visible')){
					var start = 0, end = 0;
					if (right == true){
						end = page > this.total ? this.total : page;
						start = end - this.limit;
					} else {
						start = page < 1 ? 0 : page - 1;
						end = start + this.limit;
					}
					if (start < 0){
						start = 0;
						end = this.limit > this.total ? this.total : this.limit;
					}
					if (end > this.total){
						end = this.total;
						start = this.total - this.limit < 0 ? 0 : this.total - this.limit;
					}
					this.$pagination.children('li.footable-page').removeClass('visible').slice(start, end).addClass('visible');
				}
			} else {
				this.$pagination.children('li.footable-page').removeClass('visible').slice(0, this.total).addClass('visible');
			}
		},
		/**
		 * Handles the click event for all links in the pagination control.
		 * @instance
		 * @private
		 * @param {jQuery.Event} e - The event object for the event.
		 */
		_onPageClicked: function(e){
			e.preventDefault();
			if ($(e.target).closest('li').is('.active,.disabled')) return;

			var self = e.data.self, page = $(this).data('page');
			switch(page){
				case 'first': self.first();
					return;
				case 'prev': self.prev();
					return;
				case 'next': self.next();
					return;
				case 'last': self.last();
					return;
				case 'prev-limit': self.prevPages();
					return;
				case 'next-limit': self.nextPages();
					return;
				default: self._set(page);
					return;
			}
		}
	});

	F.components.register('paging', F.Paging, 400);

})(jQuery, FooTable);
(function(F){
	/**
	 * An object containing the paging options for the plugin. Added by the {@link FooTable.Paging} component.
	 * @type {object}
	 * @prop {boolean} enabled=false - Whether or not to allow paging on the table.
	 * @prop {string} countFormat="{CP} of {TP}" - A string format used to generate the page count text.
	 * @prop {number} current=1 - The page number to display.
	 * @prop {number} limit=5 - The maximum number of page links to display at once.
	 * @prop {string} position="center" - The string used to specify the alignment of the pagination control.
	 * @prop {number} size=10 - The number of rows displayed per page.
	 * @prop {string} container=null - A selector specifying where to place the paging components UI, if null the UI is displayed within a row in the foot of the table.
	 * @prop {object} strings - An object containing the strings used by the paging buttons.
	 * @prop {string} strings.first="&laquo;" - The string used for the 'first' button.
	 * @prop {string} strings.prev="&lsaquo;" - The string used for the 'previous' button.
	 * @prop {string} strings.next="&rsaquo;" - The string used for the 'next' button.
	 * @prop {string} strings.last="&raquo;" - The string used for the 'last' button.
	 * @prop {string} strings.prevPages="..." - The string used for the 'previous X pages' button.
	 * @prop {string} strings.nextPages="..." - The string used for the 'next X pages' button.
	 */
	F.Defaults.prototype.paging = {
		enabled: false,
		countFormat: '{CP} of {TP}',
		current: 1,
		limit: 5,
		position: 'center',
		size: 10,
		container: null,
		strings: {
			first: '&laquo;',
			prev: '&lsaquo;',
			next: '&rsaquo;',
			last: '&raquo;',
			prevPages: '...',
			nextPages: '...'
		}
	};
})(FooTable);
(function(F){
	/**
	 * Navigates to the specified page number. Added by the {@link FooTable.Paging} component.
	 * @instance
	 * @param {number} num - The page number to go to.
	 * @returns {jQuery.Promise}
	 * @fires FooTable.Paging#paging_changing
	 * @fires FooTable.Paging#paging_changed
	 * @see FooTable.Paging#goto
	 */
	F.Table.prototype.gotoPage = function(num){
		return this.use(F.Paging).goto(num);
	};

	/**
	 * Navigates to the next page. Added by the {@link FooTable.Paging} component.
	 * @instance
	 * @returns {jQuery.Promise}
	 * @fires FooTable.Paging#paging_changing
	 * @fires FooTable.Paging#paging_changed
	 * @see FooTable.Paging#next
	 */
	F.Table.prototype.nextPage = function(){
		return this.use(F.Paging).next();
	};

	/**
	 * Navigates to the previous page. Added by the {@link FooTable.Paging} component.
	 * @instance
	 * @returns {jQuery.Promise}
	 * @fires FooTable.Paging#paging_changing
	 * @fires FooTable.Paging#paging_changed
	 * @see FooTable.Paging#prev
	 */
	F.Table.prototype.prevPage = function(){
		return this.use(F.Paging).prev();
	};

	/**
	 * Navigates to the first page. Added by the {@link FooTable.Paging} component.
	 * @instance
	 * @returns {jQuery.Promise}
	 * @fires FooTable.Paging#paging_changing
	 * @fires FooTable.Paging#paging_changed
	 * @see FooTable.Paging#first
	 */
	F.Table.prototype.firstPage = function(){
		return this.use(F.Paging).first();
	};

	/**
	 * Navigates to the last page. Added by the {@link FooTable.Paging} component.
	 * @instance
	 * @returns {jQuery.Promise}
	 * @fires FooTable.Paging#paging_changing
	 * @fires FooTable.Paging#paging_changed
	 * @see FooTable.Paging#last
	 */
	F.Table.prototype.lastPage = function(){
		return this.use(F.Paging).last();
	};

	/**
	 * Shows the next X number of pages in the pagination control where X is the value set by the {@link FooTable.Defaults#paging} - limit.size option value. Added by the {@link FooTable.Paging} component.
	 * @instance
	 * @see FooTable.Paging#nextPages
	 */
	F.Table.prototype.nextPages = function(){
		return this.use(F.Paging).nextPages();
	};

	/**
	 * Shows the previous X number of pages in the pagination control where X is the value set by the {@link FooTable.Defaults#paging} - limit.size option value. Added by the {@link FooTable.Paging} component.
	 * @instance
	 * @see FooTable.Paging#prevPages
	 */
	F.Table.prototype.prevPages = function(){
		return this.use(F.Paging).prevPages();
	};

	/**
	 * Gets or sets the current page size
	 * @instance
	 * @param {number} [value] - The new page size to use.
	 * @returns {(number|undefined)}
	 * @see FooTable.Paging#pageSize
	 */
	F.Table.prototype.pageSize = function(value){
		return this.use(F.Paging).pageSize(value);
	};
})(FooTable);
(function($, F){

	F.Editing = F.Component.extend(/** @lends FooTable.Editing */{
		/**
		 * The editing component adds a column with edit and delete buttons to each row as well as a single add row button in the footer.
		 * @constructs
		 * @extends FooTable.Component
		 * @param {FooTable.Table} table - The parent {@link FooTable.Table} object for the component.
		 * @returns {FooTable.Editing}
		 */
		construct: function(table){
			// call the base constructor
			this._super(table, table.o.editing.enabled);

			/**
			 * Whether or not to automatically page to a new row when it is added to the table.
			 * @type {boolean}
			 */
			this.pageToNew = table.o.editing.pageToNew;

			/**
			 * Whether or not the editing column and add row button are always visible.
			 * @type {boolean}
			 */
			this.alwaysShow = table.o.editing.alwaysShow;

			/**
			 * The options for the editing column. @see {@link FooTable.EditingColumn} for more info.
			 * @type {object}
			 * @prop {string} classes="footable-editing" - A space separated string of class names to apply to all cells in the column.
			 * @prop {string} name="editing" - The name of the column.
			 * @prop {string} title="" - The title displayed in the header row of the table for the column.
			 * @prop {boolean} filterable=false - Whether or not the column should be filterable when using the filtering component.
			 * @prop {boolean} sortable=false - Whether or not the column should be sortable when using the sorting component.
			 */
			this.column = $.extend(true, {}, table.o.editing.column, {visible: this.alwaysShow});

			/**
			 * The position of the editing column in the table as well as the alignment of the buttons.
			 * @type {string}
			 */
			this.position = table.o.editing.position;


			/**
			 * The text that appears in the show button. This can contain HTML.
			 * @type {string}
			 */
			this.showText = table.o.editing.showText;

			/**
			 * The text that appears in the hide button. This can contain HTML.
			 * @type {string}
			 */
			this.hideText = table.o.editing.hideText;

			/**
			 * The text that appears in the add button. This can contain HTML.
			 * @type {string}
			 */
			this.addText = table.o.editing.addText;

			/**
			 * The text that appears in the edit button. This can contain HTML.
			 * @type {string}
			 */
			this.editText = table.o.editing.editText;

			/**
			 * The text that appears in the delete button. This can contain HTML.
			 * @type {string}
			 */
			this.deleteText = table.o.editing.deleteText;
			
			/**
			 * The text that appears in the view button. This can contain HTML.
			 * @type {string}
			 */
			this.viewText = table.o.editing.viewText;

			/**
			 * Whether or not to show the Add Row button.
			 * @type {boolean}
			 */
			this.allowAdd = table.o.editing.allowAdd;

			/**
			 * Whether or not to show the Edit Row button.
			 * @type {boolean}
			 */
			this.allowEdit = table.o.editing.allowEdit;

			/**
			 * Whether or not to show the Delete Row button.
			 * @type {boolean}
			 */
			this.allowDelete = table.o.editing.allowDelete;

			/**
			 * Whether or not to show the View Row button.
			 * @type {boolean}
			 */
			this.allowView = table.o.editing.allowView;

			/**
			 * Caches the row button elements to help with performance.
			 * @type {(null|jQuery)}
			 * @private
			 */
			this._$buttons = null;

			/**
			 * This object is used to contain the callbacks for the add, edit and delete row buttons.
			 * @type {object}
			 * @prop {function} addRow
			 * @prop {function} editRow
			 * @prop {function} deleteRow
			 * @prop {function} viewRow
			 */
			this.callbacks = {
				addRow: F.checkFnValue(this, table.o.editing.addRow),
				editRow: F.checkFnValue(this, table.o.editing.editRow),
				deleteRow: F.checkFnValue(this, table.o.editing.deleteRow),
				viewRow: F.checkFnValue(this, table.o.editing.viewRow)
			};
		},
		/* PROTECTED */
		/**
		 * Checks the supplied data and options for the editing component.
		 * @instance
		 * @protected
		 * @param {object} data - The jQuery data object from the parent table.
		 * @fires FooTable.Editing#"preinit.ft.editing"
		 */
		preinit: function(data){
			var self = this;
			/**
			 * The preinit.ft.editing event is raised before the UI is created and provides the tables jQuery data object for additional options parsing.
			 * Calling preventDefault on this event will disable the component.
			 * @event FooTable.Editing#"preinit.ft.editing"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {object} data - The jQuery data object of the table raising the event.
			 */
			this.ft.raise('preinit.ft.editing', [data]).then(function(){
				if (self.ft.$el.hasClass('footable-editing'))
					self.enabled = true;

				self.enabled = F.is.boolean(data.editing)
					? data.editing
					: self.enabled;

				if (!self.enabled) return;

				self.pageToNew = F.is.boolean(data.editingPageToNew) ? data.editingPageToNew : self.pageToNew;

				self.alwaysShow = F.is.boolean(data.editingAlwaysShow) ? data.editingAlwaysShow : self.alwaysShow;

				self.position = F.is.string(data.editingPosition) ? data.editingPosition : self.position;

				self.showText = F.is.string(data.editingShowText) ? data.editingShowText : self.showText;

				self.hideText = F.is.string(data.editingHideText) ? data.editingHideText : self.hideText;

				self.addText = F.is.string(data.editingAddText) ? data.editingAddText : self.addText;

				self.editText = F.is.string(data.editingEditText) ? data.editingEditText : self.editText;

				self.deleteText = F.is.string(data.editingDeleteText) ? data.editingDeleteText : self.deleteText;

				self.viewText = F.is.string(data.editingViewText) ? data.editingViewText : self.viewText;

				self.allowAdd = F.is.boolean(data.editingAllowAdd) ? data.editingAllowAdd : self.allowAdd;

				self.allowEdit = F.is.boolean(data.editingAllowEdit) ? data.editingAllowEdit : self.allowEdit;

				self.allowDelete = F.is.boolean(data.editingAllowDelete) ? data.editingAllowDelete : self.allowDelete;

				self.allowView = F.is.boolean(data.editingAllowView) ? data.editingAllowView : self.allowView;

				self.column = new F.EditingColumn(self.ft, self, $.extend(true, {}, self.column, data.editingColumn, {visible: self.alwaysShow}));

				if (self.ft.$el.hasClass('footable-editing-left'))
					self.position = 'left';

				if (self.ft.$el.hasClass('footable-editing-right'))
					self.position = 'right';

				if (self.position === 'right'){
					self.column.index = self.ft.columns.array.length;
				} else {
					self.column.index = 0;
					for (var i = 0, len = self.ft.columns.array.length; i < len; i++){
						self.ft.columns.array[i].index += 1;
					}
				}
				self.ft.columns.array.push(self.column);
				self.ft.columns.array.sort(function(a, b){ return a.index - b.index; });

				self.callbacks.addRow = F.checkFnValue(self, data.editingAddRow, self.callbacks.addRow);
				self.callbacks.editRow = F.checkFnValue(self, data.editingEditRow, self.callbacks.editRow);
				self.callbacks.deleteRow = F.checkFnValue(self, data.editingDeleteRow, self.callbacks.deleteRow);
				self.callbacks.viewRow = F.checkFnValue(self, data.editingViewRow, self.callbacks.viewRow);
			}, function(){
				self.enabled = false;
			});
		},
		/**
		 * Initializes the editing component for the plugin using the supplied table and options.
		 * @instance
		 * @protected
		 * @fires FooTable.Editing#"init.ft.editing"
		 */
		init: function(){
			/**
			 * The init.ft.editing event is raised before its UI is generated.
			 * Calling preventDefault on this event will disable the component.
			 * @event FooTable.Editing#"init.ft.editing"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */
			var self = this;
			this.ft.raise('init.ft.editing').then(function(){
				self.$create();
			}, function(){
				self.enabled = false;
			});
		},
		/**
		 * Destroys the editing component removing any UI generated from the table.
		 * @instance
		 * @protected
		 * @fires FooTable.Editing#"destroy.ft.editing"
		 */
		destroy: function () {
			/**
			 * The destroy.ft.editing event is raised before its UI is removed.
			 * Calling preventDefault on this event will prevent the component from being destroyed.
			 * @event FooTable.Editing#"destroy.ft.editing"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */
			var self = this;
			this.ft.raise('destroy.ft.editing').then(function(){
				self.ft.$el.removeClass('footable-editing footable-editing-always-show footable-editing-no-add footable-editing-no-edit footable-editing-no-delete footable-editing-no-view')
					.off('click.ft.editing').find('tfoot > tr.footable-editing').remove();
			});
		},
		/**
		 * Creates the editing UI from the current options setting the various jQuery properties of this component.
		 * @instance
		 * @protected
		 */
		$create: function(){
			var self = this, position = self.position === 'right' ? 'footable-editing-right' : 'footable-editing-left';
			self.ft.$el.addClass('footable-editing').addClass(position)
				.on('click.ft.editing', '.footable-show', {self: self}, self._onShowClick)
				.on('click.ft.editing', '.footable-hide', {self: self}, self._onHideClick)
				.on('click.ft.editing', '.footable-edit', {self: self}, self._onEditClick)
				.on('click.ft.editing', '.footable-delete', {self: self}, self._onDeleteClick)
				.on('click.ft.editing', '.footable-view', {self: self}, self._onViewClick)
				.on('click.ft.editing', '.footable-add', {self: self}, self._onAddClick);

			self.$cell = $('<td/>').attr('colspan', self.ft.columns.visibleColspan).append(self.$buttonShow());
			if (self.allowAdd){
				self.$cell.append(self.$buttonAdd());
			}
			self.$cell.append(self.$buttonHide());

			if (self.alwaysShow){
				self.ft.$el.addClass('footable-editing-always-show');
			}

			if (!self.allowAdd) self.ft.$el.addClass('footable-editing-no-add');
			if (!self.allowEdit) self.ft.$el.addClass('footable-editing-no-edit');
			if (!self.allowDelete) self.ft.$el.addClass('footable-editing-no-delete');
			if (!self.allowView) self.ft.$el.addClass('footable-editing-no-view');

			var $tfoot = self.ft.$el.children('tfoot');
			if ($tfoot.length == 0){
				$tfoot = $('<tfoot/>');
				self.ft.$el.append($tfoot);
			}
			self.$row = $('<tr/>', { 'class': 'footable-editing' }).append(self.$cell).appendTo($tfoot);
		},
		/**
		 * Creates the show button for the editing component.
		 * @instance
		 * @protected
		 * @returns {(string|HTMLElement|jQuery)}
		 */
		$buttonShow: function(){
			return '<button type="button" class="btn btn-primary footable-show">' + this.showText + '</button>';
		},
		/**
		 * Creates the hide button for the editing component.
		 * @instance
		 * @protected
		 * @returns {(string|HTMLElement|jQuery)}
		 */
		$buttonHide: function(){
			return '<button type="button" class="btn btn-default footable-hide">' + this.hideText + '</button>';
		},
		/**
		 * Creates the add button for the editing component.
		 * @instance
		 * @protected
		 * @returns {(string|HTMLElement|jQuery)}
		 */
		$buttonAdd: function(){
			return '<button type="button" class="btn btn-primary footable-add">' + this.addText + '</button> ';
		},
		/**
		 * Creates the edit button for the editing component.
		 * @instance
		 * @protected
		 * @returns {(string|HTMLElement|jQuery)}
		 */
		$buttonEdit: function(){
			return '<button type="button" class="btn btn-default footable-edit">' + this.editText + '</button> ';
		},
		/**
		 * Creates the delete button for the editing component.
		 * @instance
		 * @protected
		 * @returns {(string|HTMLElement|jQuery)}
		 */
		$buttonDelete: function(){
			return '<button type="button" class="btn btn-default footable-delete">' + this.deleteText + '</button>';
		},
		/**
		 * Creates the view button for the editing component.
		 * @instance
		 * @protected
		 * @returns {(string|HTMLElement|jQuery)}
		 */
		$buttonView: function(){
			return '<button type="button" class="btn btn-default footable-view">' + this.viewText + '</button> ';
		},
		/**
		 * Creates the button group for the row buttons.
		 * @instance
		 * @protected
		 * @returns {(string|HTMLElement|jQuery)}
		 */
		$rowButtons: function(){
			if (F.is.jq(this._$buttons)) return this._$buttons.clone();
			this._$buttons = $('<div class="btn-group btn-group-xs" role="group"></div>');
			if (this.allowView) this._$buttons.append(this.$buttonView());
			if (this.allowEdit) this._$buttons.append(this.$buttonEdit());
			if (this.allowDelete) this._$buttons.append(this.$buttonDelete());
			return this._$buttons;
		},
		/**
		 * Performs the drawing of the component.
		 */
		draw: function(){
			this.$cell.attr('colspan', this.ft.columns.visibleColspan);
		},
		/**
		 * Handles the edit button click event.
		 * @instance
		 * @private
		 * @param {jQuery.Event} e - The jQuery.Event object for the event.
		 * @fires FooTable.Editing#"edit.ft.editing"
		 */
		_onEditClick: function(e){
			e.preventDefault();
			var self = e.data.self, row = $(this).closest('tr').data('__FooTableRow__');
			if (row instanceof F.Row){
				/**
				 * The edit.ft.editing event is raised before its callback is executed.
				 * Calling preventDefault on this event will prevent the callback from being executed.
				 * @event FooTable.Editing#"edit.ft.editing"
				 * @param {jQuery.Event} e - The jQuery.Event object for the event.
				 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
				 * @param {FooTable.Row} row - The row to be edited.
				 */
				self.ft.raise('edit.ft.editing', [row]).then(function(){
					self.callbacks.editRow.call(self.ft, row);
				});
			}
		},
		/**
		 * Handles the delete button click event.
		 * @instance
		 * @private
		 * @param {jQuery.Event} e - The jQuery.Event object for the event.
		 * @fires FooTable.Editing#"delete.ft.editing"
		 */
		_onDeleteClick: function(e){
			e.preventDefault();
			var self = e.data.self, row = $(this).closest('tr').data('__FooTableRow__');
			if (row instanceof F.Row){
				/**
				 * The delete.ft.editing event is raised before its callback is executed.
				 * Calling preventDefault on this event will prevent the callback from being executed.
				 * @event FooTable.Editing#"delete.ft.editing"
				 * @param {jQuery.Event} e - The jQuery.Event object for the event.
				 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
				 * @param {FooTable.Row} row - The row to be deleted.
				 */
				self.ft.raise('delete.ft.editing', [row]).then(function(){
					self.callbacks.deleteRow.call(self.ft, row);
				});
			}
		},
		/**
		 * Handles the view button click event.
		 * @instance
		 * @private
		 * @param {jQuery.Event} e - The jQuery.Event object for the event.
		 * @fires FooTable.Editing#"view.ft.editing"
		 */
		_onViewClick: function(e){
			e.preventDefault();
			var self = e.data.self, row = $(this).closest('tr').data('__FooTableRow__');
			if (row instanceof F.Row){
				/**
				 * The view.ft.editing event is raised before its callback is executed.
				 * Calling preventDefault on this event will prevent the callback from being executed.
				 * @event FooTable.Editing#"view.ft.editing"
				 * @param {jQuery.Event} e - The jQuery.Event object for the event.
				 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
				 * @param {FooTable.Row} row - The row to be viewed.
				 */
				self.ft.raise('view.ft.editing', [row]).then(function(){
					self.callbacks.viewRow.call(self.ft, row);
				});
			}
		},
		/**
		 * Handles the add button click event.
		 * @instance
		 * @private
		 * @param {jQuery.Event} e - The jQuery.Event object for the event.
		 * @fires FooTable.Editing#"add.ft.editing"
		 */
		_onAddClick: function(e){
			e.preventDefault();
			var self = e.data.self;
			/**
			 * The add.ft.editing event is raised before its callback is executed.
			 * Calling preventDefault on this event will prevent the callback from being executed.
			 * @event FooTable.Editing#"add.ft.editing"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */
			self.ft.raise('add.ft.editing').then(function(){
				self.callbacks.addRow.call(self.ft);
			});
		},
		/**
		 * Handles the show button click event.
		 * @instance
		 * @private
		 * @param {jQuery.Event} e - The jQuery.Event object for the event.
		 * @fires FooTable.Editing#"show.ft.editing"
		 */
		_onShowClick: function(e){
			e.preventDefault();
			var self = e.data.self;
			/**
			 * The show.ft.editing event is raised before its callback is executed.
			 * Calling preventDefault on this event will prevent the callback from being executed.
			 * @event FooTable.Editing#"show.ft.editing"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */
			self.ft.raise('show.ft.editing').then(function(){
				self.ft.$el.addClass('footable-editing-show');
				self.column.visible = true;
				self.ft.draw();
			});
		},
		/**
		 * Handles the hide button click event.
		 * @instance
		 * @private
		 * @param {jQuery.Event} e - The jQuery.Event object for the event.
		 * @fires FooTable.Editing#"show.ft.editing"
		 */
		_onHideClick: function(e){
			e.preventDefault();
			var self = e.data.self;
			/**
			 * The hide.ft.editing event is raised before its callback is executed.
			 * Calling preventDefault on this event will prevent the callback from being executed.
			 * @event FooTable.Editing#"hide.ft.editing"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */
			self.ft.raise('hide.ft.editing').then(function(){
				self.ft.$el.removeClass('footable-editing-show');
				self.column.visible = false;
				self.ft.draw();
			});
		}
	});

	F.components.register('editing', F.Editing, 850);

})(jQuery, FooTable);

(function($, F){

	F.EditingColumn = F.Column.extend(/** @lends FooTable.EditingColumn */{
		/**
		 * The Editing column class is used to create the column containing the editing buttons.
		 * @constructs
		 * @extends FooTable.Column
		 * @param {FooTable.Table} instance -  The parent {@link FooTable.Table} this column belongs to.
		 * @param {FooTable.Editing} editing - The parent {@link FooTable.Editing} component this column is used with.
		 * @param {object} definition - An object containing all the properties to set for the column.
		 * @returns {FooTable.EditingColumn}
		 */
		construct: function(instance, editing, definition){
			this._super(instance, definition, 'editing');
			this.editing = editing;
			this.internal = true;
		},
		/**
		 * After the column has been defined this ensures that the $el property is a jQuery object by either creating or updating the current value.
		 * @instance
		 * @protected
		 * @this FooTable.Column
		 */
		$create: function(){
			(this.$el = !this.virtual && F.is.jq(this.$el) ? this.$el : $('<th/>', {'class': 'footable-editing'})).html(this.title);
		},
		/**
		 * This is supplied either the cell value or jQuery object to parse. Any value can be returned from this method and
		 * will be provided to the {@link FooTable.EditingColumn#format} function
		 * to generate the cell contents.
		 * @instance
		 * @protected
		 * @param {(*|jQuery)} valueOrElement - The value or jQuery cell object.
		 * @returns {(jQuery)}
		 */
		parser: function(valueOrElement){
			if (F.is.string(valueOrElement)) valueOrElement = $($.trim(valueOrElement));
			if (F.is.element(valueOrElement)) valueOrElement = $(valueOrElement);
			if (F.is.jq(valueOrElement)){
				var tagName = valueOrElement.prop('tagName').toLowerCase();
				if (tagName == 'td' || tagName == 'th') return valueOrElement.data('value') || valueOrElement.contents();
				return valueOrElement;
			}
			return null;
		},
		/**
		 * Creates a cell to be used in the supplied row for this column.
		 * @param {FooTable.Row} row - The row to create the cell for.
		 * @returns {FooTable.Cell}
		 */
		createCell: function(row){
			var $buttons = this.editing.$rowButtons(), $cell = $('<td/>').append($buttons);
			if (F.is.jq(row.$el)){
				if (this.index === 0){
					$cell.prependTo(row.$el);
				} else {
					$cell.insertAfter(row.$el.children().eq(this.index-1));
				}
			}
			return new F.Cell(this.ft, row, this, $cell || $cell.html());
		}
	});

	F.columns.register('editing', F.EditingColumn);

})(jQuery, FooTable);
(function($, F) {

	/**
	 * An object containing the editing options for the plugin. Added by the {@link FooTable.Editing} component.
	 * @type {object}
	 * @prop {boolean} enabled=false - Whether or not to allow editing on the table.
	 * @prop {boolean} pageToNew=true - Whether or not to automatically page to a new row when it is added to the table.
	 * @prop {string} position="right" - The position of the editing column in the table as well as the alignment of the buttons.
	 * @prop {boolean} alwaysShow=false - Whether or not the editing column and add row button are always visible.
	 * @prop {function} addRow - The callback function to execute when the add row button is clicked.
	 * @prop {function} editRow - The callback function to execute when the edit row button is clicked.
	 * @prop {function} deleteRow - The callback function to execute when the delete row button is clicked.
	 * @prop {function} viewRow - The callback function to execute when the view row button is clicked.
	 * @prop {string} showText - The text that appears in the show button. This can contain HTML.
	 * @prop {string} hideText - The text that appears in the hide button. This can contain HTML.
	 * @prop {string} addText - The text that appears in the add button. This can contain HTML.
	 * @prop {string} editText - The text that appears in the edit button. This can contain HTML.
	 * @prop {string} deleteText - The text that appears in the delete button. This can contain HTML.
	 * @prop {string} viewText - The text that appears in the view button. This can contain HTML.
	 * @prop {boolean} allowAdd - Whether or not to show the Add Row button.
	 * @prop {boolean} allowEdit - Whether or not to show the Edit Row button.
	 * @prop {boolean} allowDelete - Whether or not to show the Delete Row button.
	 * @prop {boolean} allowView - Whether or not to show the View Row button.
	 * @prop {object} column - The options for the editing column. @see {@link FooTable.EditingColumn} for more info.
	 * @prop {string} column.classes="footable-editing" - A space separated string of class names to apply to all cells in the column.
	 * @prop {string} column.name="editing" - The name of the column.
	 * @prop {string} column.title="" - The title displayed in the header row of the table for the column.
	 * @prop {boolean} column.filterable=false - Whether or not the column should be filterable when using the filtering component.
	 * @prop {boolean} column.sortable=false - Whether or not the column should be sortable when using the sorting component.
	 */
	F.Defaults.prototype.editing = {
		enabled: false,
		pageToNew: true,
		position: 'right',
		alwaysShow: false,
		addRow: function(){},
		editRow: function(row){},
		deleteRow: function(row){},
		viewRow: function(row){},
		showText: '<span class="fooicon fooicon-pencil" aria-hidden="true"></span> Edit rows',
		hideText: 'Cancel',
		addText: 'New row',
		editText: '<span class="fooicon fooicon-pencil" aria-hidden="true"></span>',
		deleteText: '<span class="fooicon fooicon-trash" aria-hidden="true"></span>',
		viewText: '<span class="fooicon fooicon-stats" aria-hidden="true"></span>',
		allowAdd: true,
		allowEdit: true,
		allowDelete: true,
		allowView: false,
		column: {
			classes: 'footable-editing',
			name: 'editing',
			title: '',
			filterable: false,
			sortable: false
		}
	};

})(jQuery, FooTable);

(function($, F){

	if (F.is.defined(F.Paging)){
		/**
		 * Holds a shallow clone of the un-paged {@link FooTable.Rows#array} value before paging occurs and superfluous rows are removed. Added by the {@link FooTable.Editing} component.
		 * @instance
		 * @public
		 * @type {Array<FooTable.Row>}
		 */
		F.Paging.prototype.unpaged = [];

		// override the default predraw method with one that sets the unpaged property.
		F.Paging.extend('predraw', function(){
			this.unpaged = this.ft.rows.array.slice(0); // create a shallow clone for later use
			this._super(); // call the original method
		});
	}

})(jQuery, FooTable);
(function($, F){

	/**
	 * Adds the row to the table.
	 * @param {boolean} [redraw=true] - Whether or not to redraw the table, defaults to true but for bulk operations this
	 * can be set to false and then followed by a call to the {@link FooTable.Table#draw} method.
	 * @returns {jQuery.Deferred}
	 */
	F.Row.prototype.add = function(redraw){
		redraw = F.is.boolean(redraw) ? redraw : true;
		var self = this;
		return $.Deferred(function(d){
			var index = self.ft.rows.all.push(self) - 1;
			if (redraw){
				return self.ft.draw().then(function(){
					d.resolve(index);
				});
			} else {
				d.resolve(index);
			}
		});
	};

	/**
	 * Removes the row from the table.
	 * @param {boolean} [redraw=true] - Whether or not to redraw the table, defaults to true but for bulk operations this
	 * can be set to false and then followed by a call to the {@link FooTable.Table#draw} method.
	 * @returns {jQuery.Deferred}
	 */
	F.Row.prototype.delete = function(redraw){
		redraw = F.is.boolean(redraw) ? redraw : true;
		var self = this;
		return $.Deferred(function(d){
			var index = self.ft.rows.all.indexOf(self);
			if (F.is.number(index) && index >= 0 && index < self.ft.rows.all.length){
				self.ft.rows.all.splice(index, 1);
				if (redraw){
					return self.ft.draw().then(function(){
						d.resolve(self);
					});
				}
			}
			d.resolve(self);
		});
	};

	if (F.is.defined(F.Paging)){
		// override the default add method with one that supports paging
		F.Row.extend('add', function(redraw){
			redraw = F.is.boolean(redraw) ? redraw : true;
			var self = this,
				added = this._super(redraw),
				editing = self.ft.use(F.Editing),
				paging;
			if (editing && editing.pageToNew && (paging = self.ft.use(F.Paging)) && redraw){
				return added.then(function(){
					var index = paging.unpaged.indexOf(self); // find this row in the unpaged array (this array will be sorted and filtered)
					var page = Math.ceil((index + 1) / paging.size); // calculate the page the new row is on
					if (paging.current !== page){ // goto the page if we need to
						return paging.goto(page);
					}
				});
			}
			return added;
		});
	}

	if (F.is.defined(F.Sorting)){
		// override the default val method with one that supports sorting and paging
		F.Row.extend('val', function(data, redraw){
			redraw = F.is.boolean(redraw) ? redraw : true;
			var result = this._super(data);
			if (!F.is.hash(data)){
				return result;
			}
			var self = this;
			if (redraw){
				self.ft.draw().then(function(){
					var editing = self.ft.use(F.Editing), paging;
					if (F.is.defined(F.Paging) && editing && editing.pageToNew && (paging = self.ft.use(F.Paging))){
						var index = paging.unpaged.indexOf(self); // find this row in the unpaged array (this array will be sorted and filtered)
						var page = Math.ceil((index + 1) / paging.size); // calculate the page the new row is on
						if (paging.current !== page){ // goto the page if we need to
							return paging.goto(page);
						}
					}
				});
			}
			return result;
		});
	}

})(jQuery, FooTable);
(function(F){

	/**
	 * Adds a row to the underlying {@link FooTable.Rows#all} array.
	 * @param {(object|FooTable.Row)} dataOrRow - A hash containing the row values or an actual {@link FooTable.Row} object.
	 * @param {boolean} [redraw=true] - Whether or not to redraw the table, defaults to true but for bulk operations this
	 * can be set to false and then followed by a call to the {@link FooTable.Table#draw} method.
	 */
	F.Rows.prototype.add = function(dataOrRow, redraw){
		var row = dataOrRow;
		if (F.is.hash(dataOrRow)){
			row = new FooTable.Row(this.ft, this.ft.columns.array, dataOrRow);
		}
		if (row instanceof FooTable.Row){
			row.add(redraw);
		}
	};

	/**
	 * Updates a row in the underlying {@link FooTable.Rows#all} array.
	 * @param {(number|FooTable.Row)} indexOrRow - The index to update or the actual {@link FooTable.Row} object.
	 * @param {object} data - A hash containing the new row values.
	 * @param {boolean} [redraw=true] - Whether or not to redraw the table, defaults to true but for bulk operations this
	 * can be set to false and then followed by a call to the {@link FooTable.Table#draw} method.
	 */
	F.Rows.prototype.update = function(indexOrRow, data, redraw){
		var len = this.ft.rows.all.length, 
			row = indexOrRow;
		if (F.is.number(indexOrRow) && indexOrRow >= 0 && indexOrRow < len){
			row = this.ft.rows.all[indexOrRow];
		}
		if (row instanceof FooTable.Row && F.is.hash(data)){
			row.val(data, redraw);
		}
	};

	/**
	 * Deletes a row from the underlying {@link FooTable.Rows#all} array.
	 * @param {(number|FooTable.Row)} indexOrRow - The index to delete or the actual {@link FooTable.Row} object.
	 * @param {boolean} [redraw=true] - Whether or not to redraw the table, defaults to true but for bulk operations this
	 * can be set to false and then followed by a call to the {@link FooTable.Table#draw} method.
	 */
	F.Rows.prototype.delete = function(indexOrRow, redraw){
		var len = this.ft.rows.all.length, 
			row = indexOrRow;
		if (F.is.number(indexOrRow) && indexOrRow >= 0 && indexOrRow < len){
			row = this.ft.rows.all[indexOrRow];
		}
		if (row instanceof FooTable.Row){
			row.delete(redraw);
		}
	};

})(FooTable);

(function($, F){

	// global int to use if the table has no ID
	var _uid = 0,
	// a hash value for the current url
		_url_hash = (function(str){
			var i, l, hval = 0x811c9dc5;
			for (i = 0, l = str.length; i < l; i++) {
				hval ^= str.charCodeAt(i);
				hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
			}
			return hval >>> 0;
		})(location.origin + location.pathname);

	F.State = F.Component.extend(/** @lends FooTable.State */{
		/**
		 * The state component adds the ability for the table to remember its basic state for filtering, paging and sorting.
		 * @constructs
		 * @extends FooTable.Component
		 * @param {FooTable.Table} table - The parent {@link FooTable.Table} object for the component.
		 * @returns {FooTable.State}
		 */
		construct: function(table){
			// call the constructor of the base class
			this._super(table, table.o.state.enabled);
			// Change this value if an update to this component requires any stored data to be reset
			this._key = '1';
			/**
			 * The key to use to store the state for this table.
			 * @type {(null|string)}
			 */
			this.key = this._key + (F.is.string(table.o.state.key) ? table.o.state.key : this._uid());
			/**
			 * Whether or not to allow the filtering component to store it's state.
			 * @type {boolean}
			 */
			this.filtering = F.is.boolean(table.o.state.filtering) ? table.o.state.filtering : true;
			/**
			 * Whether or not to allow the paging component to store it's state.
			 * @type {boolean}
			 */
			this.paging = F.is.boolean(table.o.state.paging) ? table.o.state.paging : true;
			/**
			 * Whether or not to allow the sorting component to store it's state.
			 * @type {boolean}
			 */
			this.sorting = F.is.boolean(table.o.state.sorting) ? table.o.state.sorting : true;
		},
		/* PROTECTED */
		/**
		 * Checks the supplied data and options for the state component.
		 * @instance
		 * @protected
		 * @param {object} data - The jQuery data object from the parent table.
		 * @fires FooTable.State#"preinit.ft.state"
		 * @this FooTable.State
		 */
		preinit: function(data){
			var self = this;
			/**
			 * The preinit.ft.state event is raised before the UI is created and provides the tables jQuery data object for additional options parsing.
			 * Calling preventDefault on this event will disable the component.
			 * @event FooTable.State#"preinit.ft.state"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {object} data - The jQuery data object of the table raising the event.
			 */
			this.ft.raise('preinit.ft.state', [data]).then(function(){

				self.enabled = F.is.boolean(data.state)
					? data.state
					: self.enabled;

				if (!self.enabled) return;

				self.key = self._key + (F.is.string(data.stateKey) ? data.stateKey : self.key);

				self.filtering = F.is.boolean(data.stateFiltering) ? data.stateFiltering : self.filtering;

				self.paging = F.is.boolean(data.statePaging) ? data.statePaging : self.paging;

				self.sorting = F.is.boolean(data.stateSorting) ? data.stateSorting : self.sorting;

			}, function(){
				self.enabled = false;
			});
		},
		/**
		 * Gets the state value for the specified key for this table.
		 * @instance
		 * @param {string} key - The key to get the value for.
		 * @returns {(*|null)}
		 */
		get: function(key){
			return JSON.parse(localStorage.getItem(this.key + ':' + key));
		},
		/**
		 * Sets the state value for the specified key for this table.
		 * @instance
		 * @param {string} key - The key to set the value for.
		 * @param {*} data - The value to store for the key. This value must be JSON.stringify friendly.
		 */
		set: function(key, data){
			localStorage.setItem(this.key + ':' + key, JSON.stringify(data));
		},
		/**
		 * Clears the state value for the specified key for this table.
		 * @instance
		 * @param {string} key - The key to clear the value for.
		 */
		remove: function(key){
			localStorage.removeItem(this.key + ':' + key);
		},
		/**
		 * Executes the {@link FooTable.Component#readState} function on all components.
		 * @instance
		 */
		read: function(){
			this.ft.execute(false, true, 'readState');
		},
		/**
		 * Executes the {@link FooTable.Component#writeState} function on all components.
		 * @instance
		 */
		write: function(){
			this.ft.execute(false, true, 'writeState');
		},
		/**
		 * Executes the {@link FooTable.Component#clearState} function on all components.
		 * @instance
		 */
		clear: function(){
			this.ft.execute(false, true, 'clearState');
		},
		/**
		 * Generates a unique identifier for the current {@link FooTable.Table} if one is not supplied through the options.
		 * This value is a combination of the url hash and either the element ID or an incremented global int value.
		 * @instance
		 * @returns {*}
		 * @private
		 */
		_uid: function(){
			var id = this.ft.$el.attr('id');
			return _url_hash + '_' + (F.is.string(id) ? id : ++_uid);
		}
	});

	F.components.register('state', F.State, 700);

})(jQuery, FooTable);
(function(F){

	/**
	 * This method is called from the {@link FooTable.State#read} method and allows a component to retrieve its' stored state.
	 * @instance
	 * @protected
	 * @function
	 */
	F.Component.prototype.readState = function(){};

	/**
	 * This method is called from the {@link FooTable.State#write} method and allows a component to write its' current state to the store.
	 * @instance
	 * @protected
	 * @function
	 */
	F.Component.prototype.writeState = function(){};

	/**
	 * This method is called from the {@link FooTable.State#clear} method and allows a component to clear any stored state.
	 * @instance
	 * @protected
	 * @function
	 */
	F.Component.prototype.clearState = function(){};

})(FooTable);
(function(F){

	/**
	 * An object containing the state options for the plugin. Added by the {@link FooTable.State} component.
	 * @type {object}
	 * @prop {boolean} enabled=false - Whether or not to allow state to be stored for the table. This overrides the individual component enable options.
	 * @prop {boolean} filtering=true - Whether or not to allow the filtering state to be stored.
	 * @prop {boolean} paging=true - Whether or not to allow the filtering state to be stored.
	 * @prop {boolean} sorting=true - Whether or not to allow the filtering state to be stored.
	 * @prop {string} key=null - The unique key to use to store the table's data.
	 */
	F.Defaults.prototype.state = {
		enabled: false,
		filtering: true,
		paging: true,
		sorting: true,
		key: null
	};

})(FooTable);
(function(F){

	if (!F.Filtering) return;

	/**
	 * Allows the filtering component to retrieve its' stored state.
	 */
	F.Filtering.prototype.readState = function(){
		if (this.ft.state.filtering){
			var state = this.ft.state.get('filtering');
			if (F.is.hash(state) && !F.is.emptyArray(state.filters)){
				this.filters = this.ensure(state.filters);
			}
		}
	};

	/**
	 * Allows the filtering component to write its' current state to the store.
	 */
	F.Filtering.prototype.writeState = function(){
		if (this.ft.state.filtering) {
			var filters = F.arr.map(this.filters, function (f) {
				return {
					name: f.name,
					query: f.query instanceof F.Query ? f.query.val() : f.query,
					columns: F.arr.map(f.columns, function (c) {
						return c.name;
					}),
					hidden: f.hidden,
					space: f.space,
					connectors: f.connectors,
					ignoreCase: f.ignoreCase
				};
			});
			this.ft.state.set('filtering', {filters: filters});
		}
	};

	/**
	 * Allows the filtering component to clear any stored state.
	 */
	F.Filtering.prototype.clearState = function(){
		if (this.ft.state.filtering) {
			this.ft.state.remove('filtering');
		}
	};

})(FooTable);
(function(F){

	if (!F.Paging) return;

	/**
	 * Allows the paging component to retrieve its' stored state.
	 */
	F.Paging.prototype.readState = function(){
		if (this.ft.state.paging) {
			var state = this.ft.state.get('paging');
			if (F.is.hash(state)) {
				this.current = state.current;
				this.size = state.size;
			}
		}
	};

	/**
	 * Allows the paging component to write its' current state to the store.
	 */
	F.Paging.prototype.writeState = function(){
		if (this.ft.state.paging) {
			this.ft.state.set('paging', {
				current: this.current,
				size: this.size
			});
		}
	};

	/**
	 * Allows the paging component to clear any stored state.
	 */
	F.Paging.prototype.clearState = function(){
		if (this.ft.state.paging) {
			this.ft.state.remove('paging');
		}
	};

})(FooTable);
(function(F){

	if (!F.Sorting) return;

	/**
	 * Allows the sorting component to retrieve its' stored state.
	 */
	F.Sorting.prototype.readState = function(){
		if (this.ft.state.sorting) {
			var state = this.ft.state.get('sorting');
			if (F.is.hash(state)) {
				var column = this.ft.columns.get(state.column);
				if (column instanceof F.Column) {
					this.column = column;
					this.column.direction = state.direction;
				}
			}
		}
	};

	/**
	 * Allows the sorting component to write its' current state to the store.
	 */
	F.Sorting.prototype.writeState = function(){
		if (this.ft.state.sorting && this.column instanceof F.Column){
			this.ft.state.set('sorting', {
				column: this.column.name,
				direction: this.column.direction
			});
		}
	};

	/**
	 * Allows the sorting component to clear any stored state.
	 */
	F.Sorting.prototype.clearState = function(){
		if (this.ft.state.sorting) {
			this.ft.state.remove('sorting');
		}
	};

})(FooTable);
(function(F){

	// hook into the _construct method so we can add the state property to the table.
	F.Table.extend('_construct', function(ready){
		this.state = this.use(FooTable.State);
		return this._super(ready);
	});

	// hook into the _preinit method so we can trigger a plugin wide read state operation.
	F.Table.extend('_preinit', function(){
		var self = this;
		return self._super().then(function(){
			if (self.state.enabled){
				self.state.read();
			}
		});
	});

	// hook into the draw method so we can trigger a plugin wide write state operation.
	F.Table.extend('draw', function(){
		var self = this;
		return self._super().then(function(){
			if (self.state.enabled){
				self.state.write();
			}
		});
	});

})(FooTable);
(function($, F){

	F.Export = F.Component.extend(/** @lends FooTable.Export */{
		/**
		 * @summary This component provides some basic export functionality.
		 * @memberof FooTable
		 * @constructs Export
		 * @param {FooTable.Table} table - The current instance of the plugin.
		 */
		construct: function(table){
			// call the constructor of the base class
			this._super(table, true);
			/**
			 * @summary A snapshot of the working set of rows prior to being trimmed by the paging component.
			 * @memberof FooTable.Export#
			 * @name snapshot
			 * @type {FooTable.Row[]}
			 */
			this.snapshot = [];
		},
		/**
		 * @summary Hooks into the predraw pipeline after sorting and filtering have taken place but prior to paging.
		 * @memberof FooTable.Export#
		 * @function predraw
		 * @description This method allows us to take a snapshot of the working set of rows before they are trimmed by the paging component and is called by the plugin instance.
		 */
		predraw: function(){
			this.snapshot = this.ft.rows.array.slice(0);
		},
		/**
		 * @summary Return the columns as simple JavaScript objects in an array.
		 * @memberof FooTable.Export#
		 * @function columns
		 * @returns {Object[]}
		 */
		columns: function(){
			var result = [];
			F.arr.each(this.ft.columns.array, function(column){
				if (!column.internal){
					result.push({
						type: column.type,
						name: column.name,
						title: column.title,
						visible: column.visible,
						hidden: column.hidden,
						classes: column.classes,
						style: column.style
					});
				}
			});
			return result;
		},
		/**
		 * @summary Return the rows as simple JavaScript objects in an array.
		 * @memberof FooTable.Export#
		 * @function rows
		 * @param {boolean} [filtered=false] - Whether or not to exclude filtered rows from the result.
		 * @returns {Object[]}
		 */
		rows: function(filtered){
			filtered = F.is.boolean(filtered) ? filtered : false;
			var rows = filtered ? this.ft.rows.all : this.snapshot, result = [];
			F.arr.each(rows, function(row){
				result.push(row.val());
			});
			return result;
		},
		/**
		 * @summary Return the columns and rows as a properly formatted JSON object.
		 * @memberof FooTable.Export#
		 * @function json
		 * @param {boolean} [filtered=false] - Whether or not to exclude filtered rows from the result.
		 * @returns {Object}
		 */
		json: function(filtered){
			return JSON.parse(JSON.stringify({columns: this.columns(),rows: this.rows(filtered)}));
		},
		/**
		 * @summary Return the columns and rows as a properly formatted CSV value.
		 * @memberof FooTable.Export#
		 * @function csv
		 * @param {boolean} [filtered=false] - Whether or not to exclude filtered rows from the result.
		 * @returns {string}
		 */
		csv: function(filtered){
			var csv = "", columns = this.columns(), value, escaped;
			F.arr.each(columns, function(column, i){
				escaped = '"' + column.title.replace(/"/g, '""') + '"';
				csv += (i === 0 ? escaped : "," + escaped);
			});
			csv += "\n";

			var rows = filtered ? this.ft.rows.all : this.snapshot;
			F.arr.each(rows, function(row){
				F.arr.each(row.cells, function(cell, i){
					if (!cell.column.internal){
						value = cell.column.stringify.call(cell.column, cell.value, cell.ft.o, cell.row.value);
						escaped = '"' + value.replace(/"/g, '""') + '"';
						csv += (i === 0 ? escaped : "," + escaped);
					}
				});
				csv += "\n";
			});
			return csv;
		}
	});

	// register the component using a priority of 490 which falls just after filtering (500) and before paging (400).
	F.components.register("export", F.Export, 490);

})(jQuery, FooTable);
(function(F){
	// this is used to define the filtering specific properties on column creation
	F.Column.prototype.__export_define__ = function(definition){
		this.stringify = F.checkFnValue(this, definition.stringify, this.stringify);
	};

	// overrides the public define method and replaces it with our own
	F.Column.extend('define', function(definition){
		this._super(definition); // call the base so we don't have to redefine any previously set properties
		this.__export_define__(definition); // then call our own
	});

	/**
	 * @summary Return the supplied value as a string.
	 * @memberof FooTable.Column#
	 * @function stringify
	 * @returns {string}
	 */
	F.Column.prototype.stringify = function(value, options, rowData){
		return value + "";
	};

	// override the base method for DateColumns
	F.DateColumn.prototype.stringify = function(value, options, rowData){
		return F.is.object(value) && F.is.boolean(value._isAMomentObject) && value.isValid() ? value.format(this.formatString) : '';
	};

	// override the base method for ObjectColumns
	F.ObjectColumn.prototype.stringify = function(value, options, rowData){
		return F.is.object(value) ? JSON.stringify(value) : "";
	};

	// override the base method for ArrayColumns
	F.ArrayColumn.prototype.stringify = function(value, options, rowData){
		return F.is.array(value) ? JSON.stringify(value) : "";
	};

})(FooTable);
(function(F){
	/**
	 * @summary Return the columns and rows as a properly formatted JSON object.
	 * @memberof FooTable.Table#
	 * @function toJSON
	 * @param {boolean} [filtered=false] - Whether or not to exclude filtered rows from the result.
	 * @returns {Object}
	 */
	F.Table.prototype.toJSON = function(filtered){
		return this.use(F.Export).json(filtered);
	};

	/**
	 * @summary Return the columns and rows as a properly formatted CSV value.
	 * @memberof FooTable.Table#
	 * @function toCSV
	 * @param {boolean} [filtered=false] - Whether or not to exclude filtered rows from the result.
	 * @returns {string}
	 */
	F.Table.prototype.toCSV = function(filtered){
		return this.use(F.Export).csv(filtered);
	};

})(FooTable);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:70:"/bitrix/templates/aspro_next/js/jquery.validate.min.js?154384449022254";s:6:"source";s:54:"/bitrix/templates/aspro_next/js/jquery.validate.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! jQuery Validation Plugin - v1.13.1 - 10/14/2014
 * http://jqueryvalidation.org/
 * Copyright (c) 2014 J??rn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.validateDelegate(":submit","click",function(b){c.settings.submitHandler&&(c.submitButton=b.target),a(b.target).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(b.target).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.submit(function(b){function d(){var d,e;return c.settings.submitHandler?(c.submitButton&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),e=c.settings.submitHandler.call(c,c.currentForm,b),c.submitButton&&d.remove(),void 0!==e?e:!1):!0}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c;return a(this[0]).is("form")?b=this.validate().form():(b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b})),b},removeAttrs:function(b){var c={},d=this;return a.each(b.split(/\s/),function(a,b){c[b]=d.attr(b),d.removeAttr(b)}),c},rules:function(b,c){var d,e,f,g,h,i,j=this[0];if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(b,c){i[c]=f[c],delete f[c],"required"===c&&a(j).removeAttr("aria-required")}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g),a(j).attr("aria-required","true")),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}),a.extend(a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){return!!a.trim(""+a(b).val())},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(a,b){(9!==b.which||""!==this.elementValue(a))&&(a.name in this.submitted||a===this.lastElement)&&this.element(a)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date ( ISO ).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c=a.data(this[0].form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!this.is(e.ignore)&&e[d].call(c,this[0],b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']","focusin focusout keyup",b).validateDelegate("select, option, [type='radio'], [type='checkbox']","click",b),this.settings.invalidHandler&&a(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler),a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c=this.clean(b),d=this.validationTargetFor(c),e=!0;return this.lastElement=d,void 0===d?delete this.invalid[c.name]:(this.prepareElement(d),this.currentElements=a(d),e=this.check(d)!==!1,e?delete this.invalid[d.name]:this.invalid[d.name]=!0),a(b).attr("aria-invalid",!e),this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),e},showErrors:function(b){if(b){a.extend(this.errorMap,b),this.errorList=[];for(var c in b)this.errorList.push({message:b[c],element:this.findByName(c)[0]});this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled], [readonly]").not(this.settings.ignore).filter(function(){return!this.name&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in c||!b.objectLength(a(this).rules())?!1:(c[this.name]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([]),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d=a(b),e=b.type;return"radio"===e||"checkbox"===e?a("input[name='"+b.name+"']:checked").val():"number"===e&&"undefined"!=typeof b.validity?b.validity.badInput?!1:d.val():(c=d.val(),"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f=a(b).rules(),g=a.map(f,function(a,b){return b}).length,h=!1,i=this.elementValue(b);for(d in f){e={method:d,parameters:f[d]};try{if(c=a.validator.methods[d].call(this,i,b,e.parameters),"dependency-mismatch"===c&&1===g){h=!0;continue}if(h=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(j){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",j),j}}if(!h)return this.objectLength(f)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a];return void 0},defaultMessage:function(b,c){return this.findDefined(this.customMessage(b.name,c),this.customDataMessage(b,c),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c],"<strong>Warning: No message defined for "+b.name+"</strong>")},formatAndAdd:function(b,c){var d=this.defaultMessage(b,c.method),e=/\$?\{(\d+)\}/g;"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),this.errorList.push({message:d,element:b,method:c.method}),this.errorMap[b.name]=d,this.submitted[b.name]=d},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g=this.errorsFor(b),h=this.idOrName(b),i=a(b).attr("aria-describedby");g.length?(g.removeClass(this.settings.validClass).addClass(this.settings.errorClass),g.html(c)):(g=a("<"+this.settings.errorElement+">").attr("id",h+"-error").addClass(this.settings.errorClass).html(c||""),d=g,this.settings.wrapper&&(d=g.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement(d,a(b)):d.insertAfter(b),g.is("label")?g.attr("for",h):0===g.parents("label[for='"+h+"']").length&&(f=g.attr("id").replace(/(:|\.|\[|\])/g,"\\$1"),i?i.match(new RegExp("\\b"+f+"\\b"))||(i+=" "+f):i=f,a(b).attr("aria-describedby",i),e=this.groups[b.name],e&&a.each(this.groups,function(b,c){c===e&&a("[name='"+b+"']",this.currentForm).attr("aria-describedby",g.attr("id"))}))),!c&&this.settings.success&&(g.text(""),"string"==typeof this.settings.success?g.addClass(this.settings.success):this.settings.success(g,b)),this.toShow=this.toShow.add(g)},errorsFor:function(b){var c=this.idOrName(b),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+d.replace(/\s+/g,", #")),this.errors().filter(e)},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+b+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):!0},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(a){this.pending[a.name]||(this.pendingRequest++,this.pending[a.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b){return a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),/min|max/.test(c)&&(null===g||/number|range|text/.test(g))&&(d=Number(d)),d||0===d?e[c]=d:g===c&&"range"!==g&&(e[c]=!0);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b);for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),void 0!==d&&(e[c]=d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0!==e.param?e.param:!0:delete b[d]}}),a.each(b,function(d,e){b[d]=a.isFunction(e)?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:a.trim(b).length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},date:function(a,b){/*return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())*/ /*customized!!!*/ var check = false,re=new RegExp((typeof(VALIDATE_DATE_MASK)!=='undefined'?VALIDATE_DATE_MASK:'^[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{4}$')),adata,gg,mm,aaaa,xdata;if(re.test(a)){adata=a.split('.');if(adata.length===1){adata=a.split('-');if(adata.length===1){adata=a.split(' ');if(adata.length===1){adata=a.split('/');if(adata.length===1){adata=a.split(':');}}}}gg=parseInt(adata[0],10);mm=parseInt(adata[1],10);aaaa=parseInt(adata[2],10);xdata=new Date(aaaa,mm-1,gg,12,0,0,0);if((xdata.getUTCFullYear()===aaaa)&&(xdata.getUTCMonth()===mm-1)&&(xdata.getUTCDate()===gg)){check = true;}else{check = false;}}else{check = false;}return this.optional(b)||check;},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},creditcard:function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9 \-]+/.test(a))return!1;var c,d,e=0,f=0,g=!1;if(a=a.replace(/\D/g,""),a.length<13||a.length>19)return!1;for(c=a.length-1;c>=0;c--)d=a.charAt(c),f=parseInt(d,10),g&&(f*=2)>9&&(f-=9),e+=f,g=!g;return e%10===0},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||d>=e},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||c>=a},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d){if(this.optional(c))return"dependency-mismatch";var e,f,g=this.previousValue(c);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),g.originalMessage=this.settings.messages[c.name].remote,this.settings.messages[c.name].remote=g.message,d="string"==typeof d&&{url:d}||d,g.old===b?g.valid:(g.old=b,e=this,this.startRequest(c),f={},f[c.name]=b,a.ajax(a.extend(!0,{url:d,mode:"abort",port:"validate"+c.name,dataType:"json",data:f,context:e.currentForm,success:function(d){var f,h,i,j=d===!0||"true"===d;e.settings.messages[c.name].remote=g.originalMessage,j?(i=e.formSubmitted,e.prepareElement(c),e.formSubmitted=i,e.successList.push(c),delete e.invalid[c.name],e.showErrors()):(f={},h=d||e.defaultMessage(c,"remote"),f[c.name]=g.message=a.isFunction(h)?h(b):h,e.invalid[c.name]=!0,e.showErrors(f)),g.valid=j,e.stopRequest(c,j)}},d)),"pending")}}}),a.format=function(){throw"$.format has been deprecated. Please use $.validator.format instead."};var b,c={};a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)}),a.extend(a.fn,{validateDelegate:function(b,c,d){return this.bind(c,function(c){var e=a(c.target);return e.is(b)?d.apply(e,arguments):void 0})}})});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:78:"/bitrix/templates/aspro_next/js/jquery.inputmask.bundle.min.js?154384449070933";s:6:"source";s:62:"/bitrix/templates/aspro_next/js/jquery.inputmask.bundle.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(e){function t(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var i={};t.m=e,t.c=i,t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,i){"use strict";var n,a,r;"function"==typeof Symbol&&Symbol.iterator,a=[i(2)],void 0!==(r="function"==typeof(n=function(e){return e})?n.apply(t,a):n)&&(e.exports=r)},function(e,t,i){"use strict";var n,a,r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};a=[i(0),i(5),i(6)],void 0!==(r="function"==typeof(n=function(e,t,i,n){function a(t,i,o){if(!(this instanceof a))return new a(t,i,o);this.el=n,this.events={},this.maskset=n,this.refreshValue=!1,!0!==o&&(e.isPlainObject(t)?i=t:(i=i||{},t&&(i.alias=t)),this.opts=e.extend(!0,{},this.defaults,i),this.noMasksCache=i&&i.definitions!==n,this.userOptions=i||{},this.isRTL=this.opts.numericInput,r(this.opts.alias,i,this.opts))}function r(t,i,o){var s=a.prototype.aliases[t];return s?(s.alias&&r(s.alias,n,o),e.extend(!0,o,s),e.extend(!0,o,i),!0):(null===o.mask&&(o.mask=t),!1)}function s(t,i){function r(t,r,o){var s=!1;if(null!==t&&""!==t||((s=null!==o.regex)?t=(t=o.regex).replace(/^(\^)(.*)(\$)$/,"$2"):(s=!0,t=".*")),1===t.length&&!1===o.greedy&&0!==o.repeat&&(o.placeholder=""),o.repeat>0||"*"===o.repeat||"+"===o.repeat){var l="*"===o.repeat?0:"+"===o.repeat?1:o.repeat;t=o.groupmarker[0]+t+o.groupmarker[1]+o.quantifiermarker[0]+l+","+o.repeat+o.quantifiermarker[1]}var u,c=s?"regex_"+o.regex:o.numericInput?t.split("").reverse().join(""):t;return a.prototype.masksCache[c]===n||!0===i?(u={mask:t,maskToken:a.prototype.analyseMask(t,s,o),validPositions:{},_buffer:n,buffer:n,tests:{},excludes:{},metadata:r,maskLength:n},!0!==i&&(a.prototype.masksCache[c]=u,u=e.extend(!0,{},a.prototype.masksCache[c]))):u=e.extend(!0,{},a.prototype.masksCache[c]),u}if(e.isFunction(t.mask)&&(t.mask=t.mask(t)),e.isArray(t.mask)){if(t.mask.length>1){if(null===t.keepStatic){t.keepStatic="auto";for(var o=0;o<t.mask.length;o++)if(t.mask[o].charAt(0)!==t.mask[0].charAt(0)){t.keepStatic=!0;break}}var s=t.groupmarker[0];return e.each(t.isRTL?t.mask.reverse():t.mask,function(i,a){s.length>1&&(s+=t.groupmarker[1]+t.alternatormarker+t.groupmarker[0]),a.mask===n||e.isFunction(a.mask)?s+=a:s+=a.mask}),r(s+=t.groupmarker[1],t.mask,t)}t.mask=t.mask.pop()}return t.mask&&t.mask.mask!==n&&!e.isFunction(t.mask.mask)?r(t.mask.mask,t.mask,t):r(t.mask,t.mask,t)}function l(e){var t=i.createElement("input"),n="on"+e,a=n in t;return a||(t.setAttribute(n,"return;"),a="function"==typeof t[n]),t=null,a}function u(r,s,c){function d(e,t,i){t=t||0;var a,r,o,s=[],l=0,u=v();do{!0===e&&h().validPositions[l]?(r=(o=h().validPositions[l]).match,a=o.locator.slice(),s.push(!0===i?o.input:!1===i?r.nativeDef:N(l,r))):(r=(o=P(l,a,l-1)).match,a=o.locator.slice(),(!1===c.jitMasking||l<u||"number"==typeof c.jitMasking&&isFinite(c.jitMasking)&&c.jitMasking>l)&&s.push(!1===i?r.nativeDef:N(l,r))),"auto"===c.keepStatic&&r.newBlockMarker&&null!==r.fn&&(c.keepStatic=l-1),l++}while(($===n||l<$)&&(null!==r.fn||""!==r.def)||t>l);return""===s[s.length-1]&&s.pop(),!1===i&&h().maskLength!==n||(h().maskLength=l-1),s}function h(){return s}function g(e){var t=h();t.buffer=n,!0!==e&&(t.validPositions={},t.p=0)}function v(e,t,i){var a=-1,r=-1,o=i||h().validPositions;e===n&&(e=-1);for(var s in o){var l=parseInt(s);o[l]&&(t||!0!==o[l].generatedInput)&&(l<=e&&(a=l),l>=e&&(r=l))}return-1!==a&&e-a>1||r<e?a:r}function k(t,i,a,r){var o,s=t,l=e.extend(!0,{},h().validPositions),u=!1;for(h().p=t,o=i-1;o>=s;o--)h().validPositions[o]!==n&&(!0!==a&&(!h().validPositions[o].match.optionality&&function(e){var t=h().validPositions[e];if(t!==n&&null===t.match.fn){var i=h().validPositions[e-1],a=h().validPositions[e+1];return i!==n&&a!==n}return!1}(o)||!1===c.canClearPosition(h(),o,v(n,!0),r,c))||delete h().validPositions[o]);for(g(!0),o=s+1;o<=v();){for(;h().validPositions[s]!==n;)s++;if(o<s&&(o=s+1),h().validPositions[o]===n&&j(o))o++;else{var p=P(o);!1===u&&l[s]&&l[s].match.def===p.match.def?(h().validPositions[s]=e.extend(!0,{},l[s]),h().validPositions[s].input=p.input,delete h().validPositions[o],o++):A(s,p.match.def)?!1!==_(s,p.input||N(o),!0)&&(delete h().validPositions[o],o++,u=!0):j(o)||(o++,s--),s++}}if(!0!==r)for(o=v(-1,!0);h().validPositions[o]&&!0===h().validPositions[o].generatedInput;)delete h().validPositions[o--];g(!0)}function y(e,t,i){for(var a,r=S(e=e>0?e-1:0),o=r.alternation!==n?r.locator[r.alternation].toString().split(","):[],s=0;s<t.length&&(!((a=t[s]).match&&(c.greedy&&!0!==a.match.optionalQuantifier||(!1===a.match.optionality||!1===a.match.newBlockMarker)&&!0!==a.match.optionalQuantifier)&&(r.alternation===n||r.alternation!==a.alternation||a.locator[r.alternation]!==n&&D(a.locator[r.alternation].toString().split(","),o)))||!0===i&&(null!==a.match.fn||/[0-9a-bA-Z]/.test(a.match.def)));s++);return a}function b(e){var t=e.locator[e.alternation];return"string"==typeof t&&t.length>0&&(t=t.split(",")[0]),t!==n?t.toString():""}function x(e,t){for(var i=(e.alternation!=n?e.mloc[b(e)]:e.locator).join("");i.length<t;)i+="0";return i}function P(e,t,i){return h().validPositions[e]||y(e,C(e,t?t.slice():t,i))}function S(e){return h().validPositions[e]?h().validPositions[e]:C(e)[0]}function A(e,t){for(var i=!1,n=C(e),a=0;a<n.length;a++)if(n[a].match&&n[a].match.def===t){i=!0;break}return i}function C(t,i,a){function r(i,a,s,l){function u(s,l,p){function m(t,i){var n=0===e.inArray(t,i.matches);return n||e.each(i.matches,function(e,a){if(!0===a.isQuantifier&&(n=m(t,i.matches[e-1])))return!1}),n}function k(t,i,a){var r,o;if((h().tests[t]||h().validPositions[t])&&e.each(h().tests[t]||[h().validPositions[t]],function(e,t){if(t.mloc[i])return r=t,!1;var s=a!==n?a:t.alternation,l=t.locator[s]!==n?t.locator[s].toString().indexOf(i):-1;(o===n||l<o)&&-1!==l&&(r=t,o=l)}),r){var s=r.locator[r.alternation];return(r.mloc[i]||r.mloc[s]||r.locator).slice((a!==n?a:r.alternation)+1)}return a!==n?k(t,i):n}function y(e,t){function i(e){for(var t,i,n=[],a=0,r=e.length;a<r;a++)if("-"===e.charAt(a))for(i=e.charCodeAt(a+1);++t<i;)n.push(String.fromCharCode(t));else t=e.charCodeAt(a),n.push(e.charAt(a));return n.join("")}return c.regex&&null!==e.match.fn&&null!==t.match.fn?-1!==i(t.match.def.replace(/[\[\]]/g,"")).indexOf(i(e.match.def.replace(/[\[\]]/g,""))):e.match.def===t.match.nativeDef}function b(e,t){if(t===n||e.alternation===t.alternation&&-1===e.locator[e.alternation].toString().indexOf(t.locator[t.alternation])){e.mloc=e.mloc||{};var i=e.locator[e.alternation];if(i!==n){if("string"==typeof i&&(i=i.split(",")[0]),e.mloc[i]===n&&(e.mloc[i]=e.locator.slice()),t!==n){for(var a in t.mloc)"string"==typeof a&&(a=a.split(",")[0]),e.mloc[a]===n&&(e.mloc[a]=t.mloc[a]);e.locator[e.alternation]=Object.keys(e.mloc).join(",")}return!0}e.alternation=n}return!1}if(f>1e4)throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+h().mask;if(f===t&&s.matches===n)return d.push({match:s,locator:l.reverse(),cd:v,mloc:{}}),!0;if(s.matches!==n){if(s.isGroup&&p!==s){if(s=u(i.matches[e.inArray(s,i.matches)+1],l))return!0}else if(s.isOptional){var x=s;if(s=r(s,a,l,p)){if(!m(o=d[d.length-1].match,x))return!0;g=!0,f=t}}else if(s.isAlternator){var P,S=s,A=[],C=d.slice(),M=l.length,E=a.length>0?a.shift():-1;if(-1===E||"string"==typeof E){var w,D=f,O=a.slice(),_=[];if("string"==typeof E)_=E.split(",");else for(w=0;w<S.matches.length;w++)_.push(w.toString());if(h().excludes[t]){for(var j=_.slice(),F=0,T=h().excludes[t].length;F<T;F++)_.splice(_.indexOf(h().excludes[t][F].toString()),1);0===_.length&&(h().excludes[t]=n,_=j)}(!0===c.keepStatic||isFinite(parseInt(c.keepStatic))&&D>=c.keepStatic)&&(_=_.slice(0,1));for(var R=0;R<_.length;R++){w=parseInt(_[R]),d=[],a=k(f,w,M)||O.slice(),S.matches[w]&&u(S.matches[w],[w].concat(l),p)&&(s=!0),P=d.slice(),f=D,d=[];for(var N=0;N<P.length;N++){var G=P[N],B=!1;G.alternation=G.alternation||M,b(G);for(var I=0;I<A.length;I++){var L=A[I];if("string"!=typeof E||G.alternation!==n&&-1!==e.inArray(G.locator[G.alternation].toString(),_)){if(G.match.nativeDef===L.match.nativeDef){B=!0,b(L,G);break}if(y(G,L)){b(G,L)&&(B=!0,A.splice(A.indexOf(L),0,G));break}if(y(L,G)){b(L,G);break}if(z=L,null===(U=G).match.fn&&null!==z.match.fn&&z.match.fn.test(U.match.def,h(),t,!1,c,!1)){b(G,L)&&(B=!0,A.splice(A.indexOf(L),0,G));break}}}B||A.push(G)}}d=C.concat(A),f=t,g=d.length>0,s=A.length>0,a=O.slice()}else s=u(S.matches[E]||i.matches[E],[E].concat(l),p);if(s)return!0}else if(s.isQuantifier&&p!==i.matches[e.inArray(s,i.matches)-1])for(var H=s,V=a.length>0?a.shift():0;V<(isNaN(H.quantifier.max)?V+1:H.quantifier.max)&&f<=t;V++){var K=i.matches[e.inArray(H,i.matches)-1];if(s=u(K,[V].concat(l),K)){if((o=d[d.length-1].match).optionalQuantifier=V>H.quantifier.min-1,m(o,K)){if(V>H.quantifier.min-1){g=!0,f=t;break}return!0}return!0}}else if(s=r(s,a,l,p))return!0}else f++;var U,z}for(var p=a.length>0?a.shift():0;p<i.matches.length;p++)if(!0!==i.matches[p].isQuantifier){var m=u(i.matches[p],[p].concat(s),l);if(m&&f===t)return m;if(f>t)break}}var o,s,l,u,p=h().maskToken,f=i?a:0,m=i?i.slice():[0],d=[],g=!1,v=i?i.join(""):"";if(t>-1){if(i===n){for(var k,b=t-1;(k=h().validPositions[b]||h().tests[b])===n&&b>-1;)b--;k!==n&&b>-1&&(s=b,l=k,u=[],e.isArray(l)||(l=[l]),l.length>0&&(l[0].alternation===n?0===(u=y(s,l.slice()).locator.slice()).length&&(u=l[0].locator.slice()):e.each(l,function(e,t){if(""!==t.def)if(0===u.length)u=t.locator.slice();else for(var i=0;i<u.length;i++)t.locator[i]&&-1===u[i].toString().indexOf(t.locator[i])&&(u[i]+=","+t.locator[i])})),v=(m=u).join(""),f=b)}if(h().tests[t]&&h().tests[t][0].cd===v)return h().tests[t];for(var x=m.shift();x<p.length&&!(r(p[x],m,[x])&&f===t||f>t);x++);}return(0===d.length||g)&&d.push({match:{fn:null,optionality:!0,casing:null,def:"",placeholder:""},locator:[],mloc:{},cd:v}),i!==n&&h().tests[t]?e.extend(!0,[],d):(h().tests[t]=e.extend(!0,[],d),h().tests[t])}function M(){return h()._buffer===n&&(h()._buffer=d(!1,1),h().buffer===n&&(h().buffer=h()._buffer.slice())),h()._buffer}function E(e){return h().buffer!==n&&!0!==e||(h().buffer=d(!0,v(),!0)),h().buffer}function w(e,t,i){var a,r;if(!0===e)g(),e=0,t=i.length;else for(a=e;a<t;a++)delete h().validPositions[a];for(r=e,a=e;a<t;a++)if(g(!0),i[a]!==c.skipOptionalPartCharacter){var o=_(r,i[a],!0,!0);!1!==o&&(g(!0),r=o.caret!==n?o.caret:o.pos+1)}}function D(t,i,a){for(var r,o=c.greedy?i:i.slice(0,1),s=!1,l=a!==n?a.split(","):[],u=0;u<l.length;u++)-1!==(r=t.indexOf(l[u]))&&t.splice(r,1);for(var p=0;p<t.length;p++)if(-1!==e.inArray(t[p],o)){s=!0;break}return s}function O(t,i,a,r,o){var s,l,u,p,f,m,d,k=e.extend(!0,{},h().validPositions),y=!1,x=o!==n?o:v();if(-1===x&&o===n)l=(p=S(s=0)).alternation;else for(;x>=0;x--)if((u=h().validPositions[x])&&u.alternation!==n){if(p&&p.locator[u.alternation]!==u.locator[u.alternation])break;s=x,l=h().validPositions[s].alternation,p=u}if(l!==n){d=parseInt(s),h().excludes[d]=h().excludes[d]||[],!0!==t&&h().excludes[d].push(b(p));var P=[],A=0;for(f=d;f<v(n,!0)+1;f++)(m=h().validPositions[f])&&!0!==m.generatedInput&&/[0-9a-bA-Z]/.test(m.input)?P.push(m.input):f<t&&A++,delete h().validPositions[f];for(;h().excludes[d]&&h().excludes[d].length<10;){var C=-1*A,M=P.slice();for(h().tests[d]=n,g(!0),y=!0;M.length>0;){var E=M.shift();if(E!==c.skipOptionalPartCharacter&&!(y=_(v(n,!0)+1,E,!1,r,!0)))break}if(y&&i!==n){var w=v(t)+1;for(f=d;f<v()+1;f++)((m=h().validPositions[f])===n||null==m.match.fn)&&f<t+C&&C++;y=_((t+=C)>w?w:t,i,a,r,!0)}if(y)break;if(g(),p=S(d),h().validPositions=e.extend(!0,{},k),!h().excludes[d]){y=O(t,i,a,r,d-1);break}var D=b(p);if(-1!==h().excludes[d].indexOf(D)){y=O(t,i,a,r,d-1);break}for(h().excludes[d].push(D),f=d;f<v(n,!0)+1;f++)delete h().validPositions[f]}}return h().excludes[d]=n,y}function _(t,i,r,o,s,l){function u(e){return X?e.begin-e.end>1||e.begin-e.end==1:e.end-e.begin>1||e.end-e.begin==1}function p(i,r,s){var l=!1;return e.each(C(i),function(p,f){var d=f.match;if(E(!0),!1!==(l=null!=d.fn?d.fn.test(r,h(),i,s,c,u(t)):(r===d.def||r===c.skipOptionalPartCharacter)&&""!==d.def&&{c:N(i,d,!0)||d.def,pos:i})){var y=l.c!==n?l.c:r;y=y===c.skipOptionalPartCharacter&&null===d.fn?N(i,d,!0)||d.def:y;var b=i,x=E();if(l.remove!==n&&(e.isArray(l.remove)||(l.remove=[l.remove]),e.each(l.remove.sort(function(e,t){return t-e}),function(e,t){k(t,t+1,!0)})),l.insert!==n&&(e.isArray(l.insert)||(l.insert=[l.insert]),e.each(l.insert.sort(function(e,t){return e-t}),function(e,t){_(t.pos,t.c,!0,o)})),l.refreshFromBuffer){var P=l.refreshFromBuffer;if(w(!0===P?P:P.start,P.end,x),l.pos===n&&l.c===n)return l.pos=v(),!1;if((b=l.pos!==n?l.pos:i)!==i)return l=e.extend(l,_(b,y,!0,o)),!1}else if(!0!==l&&l.pos!==n&&l.pos!==i&&(b=l.pos,w(i,b,E().slice()),b!==i))return l=e.extend(l,_(b,y,!0)),!1;return(!0===l||l.pos!==n||l.c!==n)&&(p>0&&g(!0),m(b,e.extend({},f,{input:function(t,i,n){switch(c.casing||i.casing){case"upper":t=t.toUpperCase();break;case"lower":t=t.toLowerCase();break;case"title":var r=h().validPositions[n-1];t=0===n||r&&r.input===String.fromCharCode(a.keyCode.SPACE)?t.toUpperCase():t.toLowerCase();break;default:if(e.isFunction(c.casing)){var o=Array.prototype.slice.call(arguments);o.push(h().validPositions),t=c.casing.apply(this,o)}}return t}(y,d,b)}),o,u(t))||(l=!1),!1)}}),l}function f(t,i,a){var r;if(t===n)for(t=i-1;t>0&&!h().validPositions[t];t--);for(var o=t;o<i;o++)if(h().validPositions[o]===n&&!j(o,!0)){var s=0==o?S(o):h().validPositions[o-1];if(s){var l,u=x(s),c=C(o).slice(),p=n,f=S(o);if(""===c[c.length-1].match.def&&c.pop(),e.each(c,function(e,t){l=x(t,u.length);var i=Math.abs(l-u);(p===n||i<p)&&null===t.match.fn&&!0!==t.match.optionality&&!0!==t.match.optionalQuantifier&&(p=i,f=t)}),(f=e.extend({},f,{input:N(o,f.match,!0)||f.match.def})).generatedInput=!0,m(o,f,!0),!0!==a){var d=h().validPositions[i].input;h().validPositions[i]=n,r=_(i,d,!0,!0)}}}return r}function m(t,i,a,r){if(r||c.insertMode&&h().validPositions[t]!==n&&a===n){var o,s=e.extend(!0,{},h().validPositions),l=v(n,!0);for(o=t;o<=l;o++)delete h().validPositions[o];h().validPositions[t]=e.extend(!0,{},i);var u,p=!0,m=h().validPositions,d=!1;for(o=u=t;o<=l;o++){var k=s[o];if(k!==n)for(var y=u;""!==S(y).match.def&&(null===k.match.fn&&m[o]&&(!0===m[o].match.optionalQuantifier||!0===m[o].match.optionality)||null!=k.match.fn);){if(y++,!1===d&&s[y]&&s[y].match.def===k.match.def)h().validPositions[y]=e.extend(!0,{},s[y]),h().validPositions[y].input=k.input,f(n,y,!0),u=y,p=!0;else if(A(y,k.match.def)){var b=_(y,k.input,!0,!0);p=!1!==b,u=b.caret||b.insert?v():y,d=!0}else if(!(p=!0===k.generatedInput)&&""===S(y).match.def)break;if(p)break}if(!p)break}if(!p)return h().validPositions=e.extend(!0,{},s),g(!0),!1}else h().validPositions[t]=e.extend(!0,{},i);return g(!0),!0}r=!0===r;var d=t;t.begin!==n&&(d=X&&!u(t)?t.end:t.begin);var y=!0,b=e.extend(!0,{},h().validPositions);if(e.isFunction(c.preValidation)&&!r&&!0!==o&&!0!==l&&(y=c.preValidation(E(),d,i,u(t),c)),!0===y){if(f(n,d,!0),u(t)&&(K(0,a.keyCode.DELETE,t,!0,!0),d=h().p),($===n||d<$)&&(y=p(d,i,r),(!r||!0===o)&&!1===y&&!0!==l)){var P=h().validPositions[d];if(!P||null!==P.match.fn||P.match.def!==i&&i!==c.skipOptionalPartCharacter){if((c.insertMode||h().validPositions[F(d)]===n)&&!j(d,!0))for(var M=d+1,D=F(d);M<=D;M++)if(!1!==(y=p(M,i,r))){y=f(d,y.pos!==n?y.pos:M)||y,d=M;break}}else y={caret:F(d)}}!1!==y||null===c.keepStatic||!1===c.keepStatic||r||!0===s||(y=O(d,i,r,o)),!0===y&&(y={pos:d})}if(e.isFunction(c.postValidation)&&!1!==y&&!r&&!0!==o&&!0!==l){var T=c.postValidation(E(!0),y,c);if(T!==n){if(T.refreshFromBuffer&&T.buffer){var R=T.refreshFromBuffer;w(!0===R?R:R.start,R.end,T.buffer)}y=!0===T?y:T}}return y&&y.pos===n&&(y.pos=d),!1!==y&&!0!==l||(g(!0),h().validPositions=e.extend(!0,{},b)),y}function j(e,t){var i=P(e).match;if(""===i.def&&(i=S(e).match),null!=i.fn)return i.fn;if(!0!==t&&e>-1){var n=C(e);return n.length>1+(""===n[n.length-1].match.def?1:0)}return!1}function F(e,t){for(var i=e+1;""!==S(i).match.def&&(!0===t&&(!0!==S(i).match.newBlockMarker||!j(i))||!0!==t&&!j(i));)i++;return i}function T(e,t){var i,n=e;if(n<=0)return 0;for(;--n>0&&(!0===t&&!0!==S(n).match.newBlockMarker||!0!==t&&!j(n)&&((i=C(n)).length<2||2===i.length&&""===i[1].match.def)););return n}function R(t,i,a,r,o){if(r&&e.isFunction(c.onBeforeWrite)){var s=c.onBeforeWrite.call(J,r,i,a,c);if(s){if(s.refreshFromBuffer){var l=s.refreshFromBuffer;w(!0===l?l:l.start,l.end,s.buffer||i),i=E(!0)}a!==n&&(a=s.caret!==n?s.caret:a)}}t!==n&&(t.inputmask._valueSet(i.join("")),a===n||r!==n&&"blur"===r.type?z(t,a,0===i.length):I(t,a),!0===o&&(te=!0,e(t).trigger("input")))}function N(t,i,a){if((i=i||S(t).match).placeholder!==n||!0===a)return e.isFunction(i.placeholder)?i.placeholder(c):i.placeholder;if(null===i.fn){if(t>-1&&h().validPositions[t]===n){var r,o=C(t),s=[];if(o.length>1+(""===o[o.length-1].match.def?1:0))for(var l=0;l<o.length;l++)if(!0!==o[l].match.optionality&&!0!==o[l].match.optionalQuantifier&&(null===o[l].match.fn||r===n||!1!==o[l].match.fn.test(r.match.def,h(),t,!0,c))&&(s.push(o[l]),null===o[l].match.fn&&(r=o[l]),s.length>1&&/[0-9a-bA-Z]/.test(s[0].match.def)))return c.placeholder.charAt(t%c.placeholder.length)}return i.def}return c.placeholder.charAt(t%c.placeholder.length)}function G(t,i,r,o,s){var l=o.slice(),u="",p=-1,f=n;if(g(),r||!0===c.autoUnmask)p=F(p);else{var m=M().slice(0,F(-1)).join(""),k=l.join("").match(new RegExp("^"+a.escapeRegex(m),"g"));k&&k.length>0&&(l.splice(0,k.length*m.length),p=F(p))}-1===p?(h().p=F(p),p=0):h().p=p,e.each(l,function(i,a){if(a!==n)if(h().validPositions[i]===n&&l[i]===N(i)&&j(i,!0)&&!1===_(i,l[i],!0,n,n,!0))h().p++;else{var o=new e.Event("_checkval");o.which=a.charCodeAt(0),u+=a;var s=v(n,!0),m=S(s),g=P(s+1,m?m.locator.slice():n,s);if(y=p,b=u,-1===d(!0,0,!1).slice(y,F(y)).join("").indexOf(b)||j(y)||S(y).match.nativeDef!==b.charAt(0)&&(" "!==S(y).match.nativeDef||S(y+1).match.nativeDef!==b.charAt(0))||r||c.autoUnmask){var k=r?i:null==g.match.fn&&g.match.optionality&&s+1<h().p?s+1:h().p;(f=oe.keypressEvent.call(t,o,!0,!1,r,k))&&(p=k+1,u="")}else f=oe.keypressEvent.call(t,o,!0,!1,!0,s+1);R(n,E(),f.forwardPosition,o,!1)}var y,b}),i&&R(t,E(),f?f.forwardPosition:n,s||new e.Event("checkval"),s&&"input"===s.type)}function B(t){if(t){if(t.inputmask===n)return t.value;t.inputmask&&t.inputmask.refreshValue&&oe.setValueEvent.call(t)}var i=[],a=h().validPositions;for(var r in a)a[r].match&&null!=a[r].match.fn&&i.push(a[r].input);var o=0===i.length?"":(X?i.reverse():i).join("");if(e.isFunction(c.onUnMask)){var s=(X?E().slice().reverse():E()).join("");o=c.onUnMask.call(J,s,o,c)}return o}function I(a,r,o,s){function l(e){return!0===s||!X||"number"!=typeof e||c.greedy&&""===c.placeholder||(e=a.inputmask.__valueGet.call(a).length-e),e}var u;if(r===n)return a.setSelectionRange?(r=a.selectionStart,o=a.selectionEnd):t.getSelection?(u=t.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode!==a&&u.commonAncestorContainer!==a||(r=u.startOffset,o=u.endOffset):i.selection&&i.selection.createRange&&(o=(r=0-(u=i.selection.createRange()).duplicate().moveStart("character",-a.inputmask._valueGet().length))+u.text.length),{begin:l(r),end:l(o)};if(e.isArray(r)&&(o=X?r[0]:r[1],r=X?r[1]:r[0]),r.begin!==n&&(o=X?r.begin:r.end,r=X?r.end:r.begin),"number"==typeof r){r=l(r),o="number"==typeof(o=l(o))?o:r;var p=parseInt(((a.ownerDocument.defaultView||t).getComputedStyle?(a.ownerDocument.defaultView||t).getComputedStyle(a,null):a.currentStyle).fontSize)*o;if(a.scrollLeft=p>a.scrollWidth?p:0,!1===c.insertMode&&r===o&&o++,a.inputmask.caretPos={begin:r,end:o},a.setSelectionRange)a.selectionStart=r,a.selectionEnd=o;else if(t.getSelection){if(u=i.createRange(),a.firstChild===n||null===a.firstChild){var f=i.createTextNode("");a.appendChild(f)}u.setStart(a.firstChild,r<a.inputmask._valueGet().length?r:a.inputmask._valueGet().length),u.setEnd(a.firstChild,o<a.inputmask._valueGet().length?o:a.inputmask._valueGet().length),u.collapse(!0);var m=t.getSelection();m.removeAllRanges(),m.addRange(u)}else a.createTextRange&&((u=a.createTextRange()).collapse(!0),u.moveEnd("character",o),u.moveStart("character",r),u.select());z(a,{begin:r,end:o})}}function L(t){var i,a,r=E(),o=r.length,s=v(),l={},u=h().validPositions[s],c=u!==n?u.locator.slice():n;for(i=s+1;i<r.length;i++)c=(a=P(i,c,i-1)).locator.slice(),l[i]=e.extend(!0,{},a);var p=u&&u.alternation!==n?u.locator[u.alternation]:n;for(i=o-1;i>s&&((a=l[i]).match.optionality||a.match.optionalQuantifier&&a.match.newBlockMarker||p&&(p!==l[i].locator[u.alternation]&&null!=a.match.fn||null===a.match.fn&&a.locator[u.alternation]&&D(a.locator[u.alternation].toString().split(","),p.toString().split(","))&&""!==C(i)[0].def))&&r[i]===N(i,a.match);i--)o--;return t?{l:o,def:l[o]?l[o].match:n}:o}function H(e){for(var t,i=L(),a=e.length,r=h().validPositions[v()];i<a&&!j(i,!0)&&(t=r!==n?P(i,r.locator.slice(""),r):S(i))&&!0!==t.match.optionality&&(!0!==t.match.optionalQuantifier&&!0!==t.match.newBlockMarker||i+1===a&&""===(r!==n?P(i+1,r.locator.slice(""),r):S(i+1)).match.def);)i++;for(;(t=h().validPositions[i-1])&&t&&t.match.optionality&&t.input===c.skipOptionalPartCharacter;)i--;return e.splice(i),e}function V(t){if(e.isFunction(c.isComplete))return c.isComplete(t,c);if("*"===c.repeat)return n;var i=!1,a=L(!0),r=T(a.l);if(a.def===n||a.def.newBlockMarker||a.def.optionality||a.def.optionalQuantifier){i=!0;for(var o=0;o<=r;o++){var s=P(o).match;if(null!==s.fn&&h().validPositions[o]===n&&!0!==s.optionality&&!0!==s.optionalQuantifier||null===s.fn&&t[o]!==N(o,s)){i=!1;break}}}return i}function K(e,t,i,r,o){if((c.numericInput||X)&&(t===a.keyCode.BACKSPACE?t=a.keyCode.DELETE:t===a.keyCode.DELETE&&(t=a.keyCode.BACKSPACE),X)){var s=i.end;i.end=i.begin,i.begin=s}if(t===a.keyCode.BACKSPACE&&(i.end-i.begin<1||!1===c.insertMode)?(i.begin=T(i.begin),h().validPositions[i.begin]!==n&&h().validPositions[i.begin].input===c.groupSeparator&&i.begin--):t===a.keyCode.DELETE&&i.begin===i.end&&(i.end=j(i.end,!0)&&h().validPositions[i.end]&&h().validPositions[i.end].input!==c.radixPoint?i.end+1:F(i.end)+1,h().validPositions[i.begin]!==n&&h().validPositions[i.begin].input===c.groupSeparator&&i.end++),k(i.begin,i.end,!1,r),!0!==r&&null!==c.keepStatic&&!1!==c.keepStatic){var l=O(!0);l&&(i.begin=l.caret!==n?l.caret:l.pos?F(l.pos.begin?l.pos.begin:l.pos):v(-1,!0))}var u=v(i.begin,!0);if(u<i.begin||-1===i.begin)h().p=F(u);else if(!0!==r&&(h().p=i.begin,!0!==o))for(;h().p<u&&h().validPositions[h().p]===n;)h().p++}function U(n){var a=(n.ownerDocument.defaultView||t).getComputedStyle(n,null),r=i.createElement("div");r.style.width=a.width,r.style.textAlign=a.textAlign,q=i.createElement("div"),n.inputmask.colorMask=q,q.className="im-colormask",n.parentNode.insertBefore(q,n),n.parentNode.removeChild(n),q.appendChild(r),q.appendChild(n),n.style.left=r.offsetLeft+"px",e(n).on("click",function(e){return I(n,function(e){var t,r=i.createElement("span");for(var o in a)isNaN(o)&&-1!==o.indexOf("font")&&(r.style[o]=a[o]);r.style.textTransform=a.textTransform,r.style.letterSpacing=a.letterSpacing,r.style.position="absolute",r.style.height="auto",r.style.width="auto",r.style.visibility="hidden",r.style.whiteSpace="nowrap",i.body.appendChild(r);var s,l=n.inputmask._valueGet(),u=0;for(t=0,s=l.length;t<=s;t++){if(r.innerHTML+=l.charAt(t)||"_",r.offsetWidth>=e){var c=e-u,p=r.offsetWidth-e;r.innerHTML=l.charAt(t),t=(c-=r.offsetWidth/3)<p?t-1:t;break}u=r.offsetWidth}return i.body.removeChild(r),t}(e.clientX)),oe.clickEvent.call(n,[e])}),e(n).on("keydown",function(e){e.shiftKey||!1===c.insertMode||setTimeout(function(){z(n)},0)})}function z(e,t,a){function r(e){if(e===n&&(e=""),p||null!==o.fn&&s.input!==n)if(p&&(null!==o.fn&&s.input!==n||""===o.def)){p=!1;var t=u.length;u[t-1]=u[t-1]+"</span>",u.push(e)}else u.push(e);else p=!0,u.push("<span class='im-static'>"+e)}var o,s,l,u=[],p=!1,f=0;if(q!==n){var m=E();if(t===n?t=I(e):t.begin===n&&(t={begin:t,end:t}),!0!==a){var d=v();do{h().validPositions[f]?(s=h().validPositions[f],o=s.match,l=s.locator.slice(),r(m[f])):(s=P(f,l,f-1),o=s.match,l=s.locator.slice(),(!1===c.jitMasking||f<d||"number"==typeof c.jitMasking&&isFinite(c.jitMasking)&&c.jitMasking>f)&&r(N(f,o))),f++}while(($===n||f<$)&&(null!==o.fn||""!==o.def)||d>f||p);p&&r(),i.activeElement===e&&(u.splice(t.begin,0,t.begin===t.end?'<mark class="im-caret" style="border-right-width: 1px;border-right-style: solid;">':'<mark class="im-caret-select">'),u.splice(t.end+1,0,"</mark>"))}var g=q.getElementsByTagName("div")[0];g.innerHTML=u.join(""),e.inputmask.positionColorMask(e,g)}}s=s||this.maskset,c=c||this.opts;var Q,W,$,q,Z,J=this,Y=this.el,X=this.isRTL,ee=!1,te=!1,ie=!1,ne=!1,ae=!1,re={on:function(t,i,r){var o=function(t){var i=this;if(i.inputmask===n&&"FORM"!==this.nodeName){var o=e.data(i,"_inputmask_opts");o?new a(o).mask(i):re.off(i)}else{if("setvalue"===t.type||"FORM"===this.nodeName||!(i.disabled||i.readOnly&&!("keydown"===t.type&&t.ctrlKey&&67===t.keyCode||!1===c.tabThrough&&t.keyCode===a.keyCode.TAB))){switch(t.type){case"input":if(!0===te)return te=!1,t.preventDefault();p&&(ae=!0);break;case"keydown":ee=!1,te=!1;break;case"keypress":if(!0===ee)return t.preventDefault();ee=!0;break;case"click":if(f||m){var s=arguments;return setTimeout(function(){r.apply(i,s)},0),!1}}var l=r.apply(i,arguments);return ae&&(ae=!1,setTimeout(function(){I(i,i.inputmask.caretPos,n,!0)})),!1===l&&(t.preventDefault(),t.stopPropagation()),l}t.preventDefault()}};t.inputmask.events[i]=t.inputmask.events[i]||[],t.inputmask.events[i].push(o),-1!==e.inArray(i,["submit","reset"])?null!==t.form&&e(t.form).on(i,o):e(t).on(i,o)},off:function(t,i){var n;t.inputmask&&t.inputmask.events&&(i?(n=[])[i]=t.inputmask.events[i]:n=t.inputmask.events,e.each(n,function(i,n){for(;n.length>0;){var a=n.pop();-1!==e.inArray(i,["submit","reset"])?null!==t.form&&e(t.form).off(i,a):e(t).off(i,a)}delete t.inputmask.events[i]}))}},oe={keydownEvent:function(t){var i=this,n=e(i),r=t.keyCode,o=I(i);if(r===a.keyCode.BACKSPACE||r===a.keyCode.DELETE||m&&r===a.keyCode.BACKSPACE_SAFARI||t.ctrlKey&&r===a.keyCode.X&&!l("cut"))t.preventDefault(),K(0,r,o),R(i,E(!0),h().p,t,i.inputmask._valueGet()!==E().join("")),i.inputmask._valueGet()===M().join("")?n.trigger("cleared"):!0===V(E())&&n.trigger("complete");else if(r===a.keyCode.END||r===a.keyCode.PAGE_DOWN){t.preventDefault();var s=F(v());c.insertMode||s!==h().maskLength||t.shiftKey||s--,I(i,t.shiftKey?o.begin:s,s,!0)}else r===a.keyCode.HOME&&!t.shiftKey||r===a.keyCode.PAGE_UP?(t.preventDefault(),I(i,0,t.shiftKey?o.begin:0,!0)):(c.undoOnEscape&&r===a.keyCode.ESCAPE||90===r&&t.ctrlKey)&&!0!==t.altKey?(G(i,!0,!1,Q.split("")),n.trigger("click")):r!==a.keyCode.INSERT||t.shiftKey||t.ctrlKey?!0===c.tabThrough&&r===a.keyCode.TAB?(!0===t.shiftKey?(null===S(o.begin).match.fn&&(o.begin=F(o.begin)),o.end=T(o.begin,!0),o.begin=T(o.end,!0)):(o.begin=F(o.begin,!0),o.end=F(o.begin,!0),o.end<h().maskLength&&o.end--),o.begin<h().maskLength&&(t.preventDefault(),I(i,o.begin,o.end))):t.shiftKey||!1===c.insertMode&&(r===a.keyCode.RIGHT?setTimeout(function(){var e=I(i);I(i,e.begin)},0):r===a.keyCode.LEFT&&setTimeout(function(){var e=I(i);I(i,X?e.begin+1:e.begin-1)},0)):(c.insertMode=!c.insertMode,I(i,c.insertMode||o.begin!==h().maskLength?o.begin:o.begin-1));c.onKeyDown.call(this,t,E(),I(i).begin,c),ie=-1!==e.inArray(r,c.ignorables)},keypressEvent:function(t,i,r,o,s){var l=this,u=e(l),p=t.which||t.charCode||t.keyCode;if(!(!0===i||t.ctrlKey&&t.altKey)&&(t.ctrlKey||t.metaKey||ie))return p===a.keyCode.ENTER&&Q!==E().join("")&&(Q=E().join(""),setTimeout(function(){u.trigger("change")},0)),!0;if(p){46===p&&!1===t.shiftKey&&""!==c.radixPoint&&(p=c.radixPoint.charCodeAt(0));var f,m=i?{begin:s,end:s}:I(l),d=String.fromCharCode(p);h().writeOutBuffer=!0;var v=_(m,d,o);if(!1!==v&&(g(!0),f=v.caret!==n?v.caret:F(v.pos.begin?v.pos.begin:v.pos),h().p=f),f=c.numericInput&&v.caret===n?T(f):f,!1!==r&&(setTimeout(function(){c.onKeyValidation.call(l,p,v,c)},0),h().writeOutBuffer&&!1!==v)){var k=E();R(l,k,f,t,!0!==i),!0!==i&&setTimeout(function(){!0===V(k)&&u.trigger("complete")},0)}if(t.preventDefault(),i)return!1!==v&&(v.forwardPosition=f),v}},pasteEvent:function(i){var n,a=this,r=i.originalEvent||i,o=e(a),s=a.inputmask._valueGet(!0),l=I(a);X&&(n=l.end,l.end=l.begin,l.begin=n);var u=s.substr(0,l.begin),p=s.substr(l.end,s.length);if(u===(X?M().reverse():M()).slice(0,l.begin).join("")&&(u=""),p===(X?M().reverse():M()).slice(l.end).join("")&&(p=""),X&&(n=u,u=p,p=n),t.clipboardData&&t.clipboardData.getData)s=u+t.clipboardData.getData("Text")+p;else{if(!r.clipboardData||!r.clipboardData.getData)return!0;s=u+r.clipboardData.getData("text/plain")+p}var f=s;if(e.isFunction(c.onBeforePaste)){if(!1===(f=c.onBeforePaste.call(J,s,c)))return i.preventDefault();f||(f=s)}return G(a,!1,!1,X?f.split("").reverse():f.toString().split("")),R(a,E(),F(v()),i,Q!==E().join("")),!0===V(E())&&o.trigger("complete"),i.preventDefault()},inputFallBackEvent:function(t){var i,n,r=this,o=r.inputmask._valueGet();if(E().join("")!==o){var s=I(r);if(n=s,"."===(i=o).charAt(n.begin-1)&&""!==c.radixPoint&&((i=i.split(""))[n.begin-1]=c.radixPoint.charAt(0),i=i.join("")),o=function(e,t,i){if(f){var n=t.replace(E().join(""),"");if(1===n.length){var a=t.split("");a.splice(i.begin,0,n),t=a.join("")}}return t}(0,o=i,s),E().join("")!==o){var l=E().join(""),u=o.length>l.length?-1:0,p=o.substr(0,s.begin),m=o.substr(s.begin),d=l.substr(0,s.begin+u),h=l.substr(s.begin+u),g=s,v="",k=!1;if(p!==d){for(var y=(k=p.length>=d.length)?p.length:d.length,b=0;p.charAt(b)===d.charAt(b)&&b<y;b++);k&&(0===u&&(g.begin=b),v+=p.slice(b,g.end))}if(m!==h&&(m.length>h.length?v+=m.slice(0,1):m.length<h.length&&(g.end+=h.length-m.length,k||""===c.radixPoint||""!==m||p.charAt(g.begin+u-1)!==c.radixPoint||(g.begin--,v=c.radixPoint))),R(r,E(),{begin:g.begin+u,end:g.end+u}),v.length>0)e.each(v.split(""),function(t,i){var n=new e.Event("keypress");n.which=i.charCodeAt(0),ie=!1,oe.keypressEvent.call(r,n)});else{g.begin===g.end-1&&(g.begin=T(g.begin+1),g.begin===g.end-1?I(r,g.begin):I(r,g.begin,g.end));var x=new e.Event("keydown");x.keyCode=a.keyCode.DELETE,oe.keydownEvent.call(r,x),!1===c.insertMode&&I(r,I(r).begin-1)}t.preventDefault()}}},setValueEvent:function(t){this.inputmask.refreshValue=!1;var i=this.inputmask._valueGet(!0);e.isFunction(c.onBeforeMask)&&(i=c.onBeforeMask.call(J,i,c)||i),i=i.split(""),G(this,!0,!1,X?i.reverse():i),Q=E().join(""),(c.clearMaskOnLostFocus||c.clearIncomplete)&&this.inputmask._valueGet()===M().join("")&&this.inputmask._valueSet("")},focusEvent:function(e){var t=this,i=t.inputmask._valueGet();c.showMaskOnFocus&&(!c.showMaskOnHover||c.showMaskOnHover&&""===i)&&(t.inputmask._valueGet()!==E().join("")?R(t,E(),F(v())):!1===ne&&I(t,F(v()))),!0===c.positionCaretOnTab&&!1===ne&&oe.clickEvent.apply(t,[e,!0]),Q=E().join("")},mouseleaveEvent:function(e){if(ne=!1,c.clearMaskOnLostFocus&&i.activeElement!==this){var t=E().slice(),n=this.inputmask._valueGet();n!==this.getAttribute("placeholder")&&""!==n&&(-1===v()&&n===M().join("")?t=[]:H(t),R(this,t))}},clickEvent:function(t,a){var r=this;setTimeout(function(){if(i.activeElement===r){var t=I(r);if(a&&(X?t.end=t.begin:t.begin=t.end),t.begin===t.end)switch(c.positionCaretOnClick){case"none":break;case"select":I(r,0,E().length);break;case"radixFocus":if(function(t){if(""!==c.radixPoint){var i=h().validPositions;if(i[t]===n||i[t].input===N(t)){if(t<F(-1))return!0;var a=e.inArray(c.radixPoint,E());if(-1!==a){for(var r in i)if(a<r&&i[r].input!==N(r))return!1;return!0}}}return!1}(t.begin)){var o=E().join("").indexOf(c.radixPoint);I(r,c.numericInput?F(o):o);break}default:var s=t.begin,l=v(s,!0),u=F(l);if(s<u)I(r,j(s,!0)||j(s-1,!0)?s:F(s));else{var p=h().validPositions[l],f=P(u,p?p.match.locator:n,p),m=N(u,f.match);if(""!==m&&E()[u]!==m&&!0!==f.match.optionalQuantifier&&!0!==f.match.newBlockMarker||!j(u,!0)&&f.match.def===m){var d=F(u);(s>=d||s===u)&&(u=d)}I(r,u)}}}},0)},dblclickEvent:function(e){var t=this;setTimeout(function(){I(t,0,F(v()))},0)},cutEvent:function(n){var r=e(this),o=I(this),s=n.originalEvent||n,l=t.clipboardData||s.clipboardData,u=X?E().slice(o.end,o.begin):E().slice(o.begin,o.end);l.setData("text",X?u.reverse().join(""):u.join("")),i.execCommand&&i.execCommand("copy"),K(0,a.keyCode.DELETE,o),R(this,E(),h().p,n,Q!==E().join("")),this.inputmask._valueGet()===M().join("")&&r.trigger("cleared")},blurEvent:function(t){var i=e(this);if(this.inputmask){var a=this.inputmask._valueGet(),r=E().slice();""===a&&q===n||(c.clearMaskOnLostFocus&&(-1===v()&&a===M().join("")?r=[]:H(r)),!1===V(r)&&(setTimeout(function(){i.trigger("incomplete")},0),c.clearIncomplete&&(g(),r=c.clearMaskOnLostFocus?[]:M().slice())),R(this,r,n,t)),Q!==E().join("")&&(Q=r.join(""),i.trigger("change"))}},mouseenterEvent:function(e){ne=!0,i.activeElement!==this&&c.showMaskOnHover&&this.inputmask._valueGet()!==E().join("")&&R(this,E())},submitEvent:function(e){Q!==E().join("")&&W.trigger("change"),c.clearMaskOnLostFocus&&-1===v()&&Y.inputmask._valueGet&&Y.inputmask._valueGet()===M().join("")&&Y.inputmask._valueSet(""),c.removeMaskOnSubmit&&(Y.inputmask._valueSet(Y.inputmask.unmaskedvalue(),!0),setTimeout(function(){R(Y,E())},0))},resetEvent:function(e){Y.inputmask.refreshValue=!0,setTimeout(function(){W.trigger("setvalue")},0)}};if(a.prototype.positionColorMask=function(e,t){e.style.left=t.offsetLeft+"px"},r!==n)switch(r.action){case"isComplete":return Y=r.el,V(E());case"unmaskedvalue":return Y!==n&&r.value===n||(Z=r.value,Z=(e.isFunction(c.onBeforeMask)&&c.onBeforeMask.call(J,Z,c)||Z).split(""),G(n,!1,!1,X?Z.reverse():Z),e.isFunction(c.onBeforeWrite)&&c.onBeforeWrite.call(J,n,E(),0,c)),B(Y);case"mask":!function(t){re.off(t);var a=function(t,a){var r=t.getAttribute("type"),s="INPUT"===t.tagName&&-1!==e.inArray(r,a.supportsInputType)||t.isContentEditable||"TEXTAREA"===t.tagName;if(!s)if("INPUT"===t.tagName){var l=i.createElement("input");l.setAttribute("type",r),s="text"===l.type,l=null}else s="partial";return!1!==s?function(t){function r(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():-1!==v()||!0!==a.nullable?i.activeElement===this&&a.clearMaskOnLostFocus?(X?H(E().slice()).reverse():H(E().slice())).join(""):l.call(this):"":l.call(this)}function s(t){u.call(this,t),this.inputmask&&e(this).trigger("setvalue")}var l,u,c;if(!t.inputmask.__valueGet){if(!0!==a.noValuePatching){if(Object.getOwnPropertyDescriptor){"function"!=typeof Object.getPrototypeOf&&(Object.getPrototypeOf="object"===o("test".__proto__)?function(e){return e.__proto__}:function(e){return e.constructor.prototype});var p=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t),"value"):n;p&&p.get&&p.set?(l=p.get,u=p.set,Object.defineProperty(t,"value",{get:r,set:s,configurable:!0})):"INPUT"!==t.tagName&&(l=function(){return this.textContent},u=function(e){this.textContent=e},Object.defineProperty(t,"value",{get:r,set:s,configurable:!0}))}else i.__lookupGetter__&&t.__lookupGetter__("value")&&(l=t.__lookupGetter__("value"),u=t.__lookupSetter__("value"),t.__defineGetter__("value",r),t.__defineSetter__("value",s));t.inputmask.__valueGet=l,t.inputmask.__valueSet=u}t.inputmask._valueGet=function(e){return X&&!0!==e?l.call(this.el).split("").reverse().join(""):l.call(this.el)},t.inputmask._valueSet=function(e,t){u.call(this.el,null===e||e===n?"":!0!==t&&X?e.split("").reverse().join(""):e)},l===n&&(l=function(){return this.value},u=function(e){this.value=e},function(t){if(e.valHooks&&(e.valHooks[t]===n||!0!==e.valHooks[t].inputmaskpatch)){var i=e.valHooks[t]&&e.valHooks[t].get?e.valHooks[t].get:function(e){return e.value},r=e.valHooks[t]&&e.valHooks[t].set?e.valHooks[t].set:function(e,t){return e.value=t,e};e.valHooks[t]={get:function(e){if(e.inputmask){if(e.inputmask.opts.autoUnmask)return e.inputmask.unmaskedvalue();var t=i(e);return-1!==v(n,n,e.inputmask.maskset.validPositions)||!0!==a.nullable?t:""}return i(e)},set:function(t,i){var n,a=e(t);return n=r(t,i),t.inputmask&&a.trigger("setvalue"),n},inputmaskpatch:!0}}}(t.type),c=t,re.on(c,"mouseenter",function(t){var i=e(this);this.inputmask._valueGet()!==E().join("")&&i.trigger("setvalue")}))}}(t):t.inputmask=n,s}(t,c);if(!1!==a&&(W=e(Y=t),-1===($=Y!==n?Y.maxLength:n)&&($=n),!0===c.colorMask&&U(Y),p&&("inputmode"in Y&&(Y.inputmode=c.inputmode,Y.setAttribute("inputmode",c.inputmode)),!0===c.disablePredictiveText&&("autocorrect"in Y?Y.autocorrect=!1:(!0!==c.colorMask&&U(Y),Y.type="password"))),!0===a&&(re.on(Y,"submit",oe.submitEvent),re.on(Y,"reset",oe.resetEvent),re.on(Y,"mouseenter",oe.mouseenterEvent),re.on(Y,"blur",oe.blurEvent),re.on(Y,"focus",oe.focusEvent),re.on(Y,"mouseleave",oe.mouseleaveEvent),!0!==c.colorMask&&re.on(Y,"click",oe.clickEvent),re.on(Y,"dblclick",oe.dblclickEvent),re.on(Y,"paste",oe.pasteEvent),re.on(Y,"dragdrop",oe.pasteEvent),re.on(Y,"drop",oe.pasteEvent),re.on(Y,"cut",oe.cutEvent),re.on(Y,"complete",c.oncomplete),re.on(Y,"incomplete",c.onincomplete),re.on(Y,"cleared",c.oncleared),p||!0===c.inputEventOnly?Y.removeAttribute("maxLength"):(re.on(Y,"keydown",oe.keydownEvent),re.on(Y,"keypress",oe.keypressEvent)),re.on(Y,"compositionstart",e.noop),re.on(Y,"compositionupdate",e.noop),re.on(Y,"compositionend",e.noop),re.on(Y,"keyup",e.noop),re.on(Y,"input",oe.inputFallBackEvent),re.on(Y,"beforeinput",e.noop)),re.on(Y,"setvalue",oe.setValueEvent),Q=M().join(""),""!==Y.inputmask._valueGet(!0)||!1===c.clearMaskOnLostFocus||i.activeElement===Y)){var r=e.isFunction(c.onBeforeMask)&&c.onBeforeMask.call(J,Y.inputmask._valueGet(!0),c)||Y.inputmask._valueGet(!0);""!==r&&G(Y,!0,!1,X?r.split("").reverse():r.split(""));var s=E().slice();Q=s.join(""),!1===V(s)&&c.clearIncomplete&&g(),c.clearMaskOnLostFocus&&i.activeElement!==Y&&(-1===v()?s=[]:H(s)),R(Y,s),i.activeElement===Y&&I(Y,F(v()))}}(Y);break;case"format":return Z=(e.isFunction(c.onBeforeMask)&&c.onBeforeMask.call(J,r.value,c)||r.value).split(""),G(n,!0,!1,X?Z.reverse():Z),r.metadata?{value:X?E().slice().reverse().join(""):E().join(""),metadata:u.call(this,{action:"getmetadata"},s,c)}:X?E().slice().reverse().join(""):E().join("");case"isValid":r.value?(Z=r.value.split(""),G(n,!0,!0,X?Z.reverse():Z)):r.value=E().join("");for(var se=E(),le=L(),ue=se.length-1;ue>le&&!j(ue);ue--);return se.splice(le,ue+1-le),V(se)&&r.value===E().join("");case"getemptymask":return M().join("");case"remove":return Y&&Y.inputmask&&(W=e(Y),Y.inputmask._valueSet(c.autoUnmask?B(Y):Y.inputmask._valueGet(!0)),re.off(Y),Y.inputmask.colorMask&&((q=Y.inputmask.colorMask).removeChild(Y),q.parentNode.insertBefore(Y,q),q.parentNode.removeChild(q)),Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Y),"value")&&Y.inputmask.__valueGet&&Object.defineProperty(Y,"value",{get:Y.inputmask.__valueGet,set:Y.inputmask.__valueSet,configurable:!0}):i.__lookupGetter__&&Y.__lookupGetter__("value")&&Y.inputmask.__valueGet&&(Y.__defineGetter__("value",Y.inputmask.__valueGet),Y.__defineSetter__("value",Y.inputmask.__valueSet)),Y.inputmask=n),Y;case"getmetadata":if(e.isArray(s.metadata)){var ce=d(!0,0,!1).join("");return e.each(s.metadata,function(e,t){if(t.mask===ce)return ce=t,!1}),ce}return s.metadata}}var c=navigator.userAgent,p=l("touchstart"),f=/iemobile/i.test(c),m=/iphone/i.test(c)&&!f;return a.prototype={dataAttribute:"data-inputmask",defaults:{placeholder:"_",optionalmarker:["[","]"],quantifiermarker:["{","}"],groupmarker:["(",")"],alternatormarker:"|",escapeChar:"\\",mask:null,regex:null,oncomplete:e.noop,onincomplete:e.noop,oncleared:e.noop,repeat:0,greedy:!0,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,alias:null,onKeyDown:e.noop,onBeforeMask:null,onBeforePaste:function(t,i){return e.isFunction(i.onBeforeMask)?i.onBeforeMask.call(this,t,i):t},onBeforeWrite:null,onUnMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:e.noop,skipOptionalPartCharacter:" ",numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",radixPointDefinitionSymbol:n,groupSeparator:"",keepStatic:null,positionCaretOnTab:!0,tabThrough:!1,supportsInputType:["text","tel","password","search"],ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123,0,229],isComplete:null,canClearPosition:e.noop,preValidation:null,postValidation:null,staticDefinitionSymbol:n,jitMasking:!1,nullable:!0,inputEventOnly:!1,noValuePatching:!1,positionCaretOnClick:"lvp",casing:null,inputmode:"verbatim",colorMask:!1,disablePredictiveText:!1,importDataAttributes:!0},definitions:{9:{validator:"[0-91-9]",definitionSymbol:"*"},a:{validator:"[A-Za-z?-???A-y?]",definitionSymbol:"*"},"*":{validator:"[0-91-9A-Za-z?-???A-y?]"}},aliases:{},masksCache:{},mask:function(o){var l=this;return"string"==typeof o&&(o=i.getElementById(o)||i.querySelectorAll(o)),o=o.nodeName?[o]:o,e.each(o,function(i,o){var c=e.extend(!0,{},l.opts);if(function(i,a,o,s){if(!0===a.importDataAttributes){var l,u,c,p,f=function(e,a){null!==(a=a!==n?a:i.getAttribute(s+"-"+e))&&("string"==typeof a&&(0===e.indexOf("on")?a=t[a]:"false"===a?a=!1:"true"===a&&(a=!0)),o[e]=a)},m=i.getAttribute(s);if(m&&""!==m&&(m=m.replace(/'/g,'"'),u=JSON.parse("{"+m+"}")),u){c=n;for(p in u)if("alias"===p.toLowerCase()){c=u[p];break}}f("alias",c),o.alias&&r(o.alias,o,a);for(l in a){if(u){c=n;for(p in u)if(p.toLowerCase()===l.toLowerCase()){c=u[p];break}}f(l,c)}}return e.extend(!0,a,o),("rtl"===i.dir||a.rightAlign)&&(i.style.textAlign="right"),("rtl"===i.dir||a.numericInput)&&(i.dir="ltr",i.removeAttribute("dir"),a.isRTL=!0),Object.keys(o).length}(o,c,e.extend(!0,{},l.userOptions),l.dataAttribute)){var p=s(c,l.noMasksCache);p!==n&&(o.inputmask!==n&&(o.inputmask.opts.autoUnmask=!0,o.inputmask.remove()),o.inputmask=new a(n,n,!0),o.inputmask.opts=c,o.inputmask.noMasksCache=l.noMasksCache,o.inputmask.userOptions=e.extend(!0,{},l.userOptions),o.inputmask.isRTL=c.isRTL||c.numericInput,o.inputmask.el=o,o.inputmask.maskset=p,e.data(o,"_inputmask_opts",c),u.call(o.inputmask,{action:"mask"}))}}),o&&o[0]&&o[0].inputmask||this},option:function(t,i){return"string"==typeof t?this.opts[t]:"object"===(void 0===t?"undefined":o(t))?(e.extend(this.userOptions,t),this.el&&!0!==i&&this.mask(this.el),this):void 0},unmaskedvalue:function(e){return this.maskset=this.maskset||s(this.opts,this.noMasksCache),u.call(this,{action:"unmaskedvalue",value:e})},remove:function(){return u.call(this,{action:"remove"})},getemptymask:function(){return this.maskset=this.maskset||s(this.opts,this.noMasksCache),u.call(this,{action:"getemptymask"})},hasMaskedValue:function(){return!this.opts.autoUnmask},isComplete:function(){return this.maskset=this.maskset||s(this.opts,this.noMasksCache),u.call(this,{action:"isComplete"})},getmetadata:function(){return this.maskset=this.maskset||s(this.opts,this.noMasksCache),u.call(this,{action:"getmetadata"})},isValid:function(e){return this.maskset=this.maskset||s(this.opts,this.noMasksCache),u.call(this,{action:"isValid",value:e})},format:function(e,t){return this.maskset=this.maskset||s(this.opts,this.noMasksCache),u.call(this,{action:"format",value:e,metadata:t})},analyseMask:function(t,i,r){function o(e,t,i,n){this.matches=[],this.openGroup=e||!1,this.alternatorGroup=!1,this.isGroup=e||!1,this.isOptional=t||!1,this.isQuantifier=i||!1,this.isAlternator=n||!1,this.quantifier={min:1,max:1}}function s(t,o,s){s=s!==n?s:t.matches.length;var l=t.matches[s-1];if(i)0===o.indexOf("[")||k&&/\\d|\\s|\\w]/i.test(o)||"."===o?t.matches.splice(s++,0,{fn:new RegExp(o,r.casing?"i":""),optionality:t.isOptional,newBlockMarker:l===n||l.def!==o,casing:null,def:o,placeholder:n,nativeDef:o}):(k&&(o=o[o.length-1]),e.each(o.split(""),function(e,i){l=t.matches[s-1],t.matches.splice(s++,0,{fn:null,optionality:t.isOptional,newBlockMarker:l===n||l.def!==i&&null!==l.fn,casing:null,def:r.staticDefinitionSymbol||i,placeholder:r.staticDefinitionSymbol!==n?i:n,nativeDef:i})})),k=!1;else{var u=(r.definitions?r.definitions[o]:n)||a.prototype.definitions[o];u&&!k?t.matches.splice(s++,0,{fn:u.validator?"string"==typeof u.validator?new RegExp(u.validator,r.casing?"i":""):new function(){this.test=u.validator}:new RegExp("."),optionality:t.isOptional,newBlockMarker:l===n||l.def!==(u.definitionSymbol||o),casing:u.casing,def:u.definitionSymbol||o,placeholder:u.placeholder,nativeDef:o}):(t.matches.splice(s++,0,{fn:null,optionality:t.isOptional,newBlockMarker:l===n||l.def!==o&&null!==l.fn,casing:null,def:r.staticDefinitionSymbol||o,placeholder:r.staticDefinitionSymbol!==n?o:n,nativeDef:o}),k=!1)}}function l(){if(b.length>0){if(s(f=b[b.length-1],c),f.isAlternator){m=b.pop();for(var e=0;e<m.matches.length;e++)m.matches[e].isGroup=!1;b.length>0?(f=b[b.length-1]).matches.push(m):y.matches.push(m)}}else s(y,c)}var u,c,p,f,m,d,h,g=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,v=/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,k=!1,y=new o,b=[],x=[];for(i&&(r.optionalmarker[0]=n,r.optionalmarker[1]=n);u=i?v.exec(t):g.exec(t);){if(c=u[0],i)switch(c.charAt(0)){case"?":c="{0,1}";break;case"+":case"*":c="{"+c+"}"}if(k)l();else switch(c.charAt(0)){case r.escapeChar:k=!0,i&&l();break;case r.optionalmarker[1]:case r.groupmarker[1]:if((p=b.pop()).openGroup=!1,p!==n)if(b.length>0){if((f=b[b.length-1]).matches.push(p),f.isAlternator){m=b.pop();for(var P=0;P<m.matches.length;P++)m.matches[P].isGroup=!1,m.matches[P].alternatorGroup=!1;b.length>0?(f=b[b.length-1]).matches.push(m):y.matches.push(m)}}else y.matches.push(p);else l();break;case r.optionalmarker[0]:b.push(new o(!1,!0));break;case r.groupmarker[0]:b.push(new o(!0));break;case r.quantifiermarker[0]:var S=new o(!1,!1,!0),A=(c=c.replace(/[{}]/g,"")).split(","),C=isNaN(A[0])?A[0]:parseInt(A[0]),M=1===A.length?C:isNaN(A[1])?A[1]:parseInt(A[1]);if("*"!==M&&"+"!==M||(C="*"===M?0:1),S.quantifier={min:C,max:M},b.length>0){var E=b[b.length-1].matches;(u=E.pop()).isGroup||((h=new o(!0)).matches.push(u),u=h),E.push(u),E.push(S)}else(u=y.matches.pop()).isGroup||(i&&null===u.fn&&"."===u.def&&(u.fn=new RegExp(u.def,r.casing?"i":"")),(h=new o(!0)).matches.push(u),u=h),y.matches.push(u),y.matches.push(S);break;case r.alternatormarker:if(b.length>0){var w=(f=b[b.length-1]).matches[f.matches.length-1];d=f.openGroup&&(w.matches===n||!1===w.isGroup&&!1===w.isAlternator)?b.pop():f.matches.pop()}else d=y.matches.pop();if(d.isAlternator)b.push(d);else if(d.alternatorGroup?(m=b.pop(),d.alternatorGroup=!1):m=new o(!1,!1,!1,!0),m.matches.push(d),b.push(m),d.openGroup){d.openGroup=!1;var D=new o(!0);D.alternatorGroup=!0,b.push(D)}break;default:l()}}for(;b.length>0;)p=b.pop(),y.matches.push(p);return y.matches.length>0&&(function t(a){a&&a.matches&&e.each(a.matches,function(e,o){var l=a.matches[e+1];(l===n||l.matches===n||!1===l.isQuantifier)&&o&&o.isGroup&&(o.isGroup=!1,i||(s(o,r.groupmarker[0],0),!0!==o.openGroup&&s(o,r.groupmarker[1]))),t(o)})}(y),x.push(y)),(r.numericInput||r.isRTL)&&function e(t){t.matches=t.matches.reverse();for(var i in t.matches)if(t.matches.hasOwnProperty(i)){var a=parseInt(i);if(t.matches[i].isQuantifier&&t.matches[a+1]&&t.matches[a+1].isGroup){var o=t.matches[i];t.matches.splice(i,1),t.matches.splice(a+1,0,o)}t.matches[i].matches!==n?t.matches[i]=e(t.matches[i]):t.matches[i]=function(e){return e===r.optionalmarker[0]?e=r.optionalmarker[1]:e===r.optionalmarker[1]?e=r.optionalmarker[0]:e===r.groupmarker[0]?e=r.groupmarker[1]:e===r.groupmarker[1]&&(e=r.groupmarker[0]),e}(t.matches[i])}return t}(x[0]),x}},a.extendDefaults=function(t){e.extend(!0,a.prototype.defaults,t)},a.extendDefinitions=function(t){e.extend(!0,a.prototype.definitions,t)},a.extendAliases=function(t){e.extend(!0,a.prototype.aliases,t)},a.format=function(e,t,i){return a(t).format(e,i)},a.unmask=function(e,t){return a(t).unmaskedvalue(e)},a.isValid=function(e,t){return a(t).isValid(e)},a.remove=function(t){e.each(t,function(e,t){t.inputmask&&t.inputmask.remove()})},a.escapeRegex=function(e){return e.replace(new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"].join("|\\")+")","gim"),"\\$1")},a.keyCode={BACKSPACE:8,BACKSPACE_SAFARI:127,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,RIGHT:39,SPACE:32,TAB:9,UP:38,X:88,CONTROL:17},a})?n.apply(t,a):n)&&(e.exports=r)},function(e,t){e.exports=jQuery},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}i(4),i(7),i(8),i(9);var a=n(i(1)),r=n(i(0)),o=n(i(2));r.default===o.default&&i(10),window.Inputmask=a.default},function(e,t,i){"use strict";var n,a,r;"function"==typeof Symbol&&Symbol.iterator,a=[i(0),i(1)],void 0!==(r="function"==typeof(n=function(e,t){function i(e){if(!e.tokenizer){var t=[];for(var i in o)-1===t.indexOf(i[0])&&t.push(i[0]);e.tokenizer="("+t.join("+|")+")+?|.",e.tokenizer=new RegExp(e.tokenizer,"g")}return e.tokenizer}function n(e,n,a){for(var r,s="";r=i(a).exec(e);)void 0===n?s+=o[r[0]]?"("+o[r[0]][0]+")":t.escapeRegex(r[0]):o[r[0]]?s+=o[r[0]][3].call(n.date):s+=r[0];return s}function a(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}function r(e,t,n){var a,r,s,l,u,c,p,f,m={date:new Date(1,0,1)},d=e;if("string"==typeof d){for(;r=i(n).exec(t);){var h=d.slice(0,r[0].length);o.hasOwnProperty(r[0])&&(a=o[r[0]][2],s=o[r[0]][1],l=m,u=h,c=n,p=void 0,f=void 0,"year"===a?(l[a]=(f=4===(p=u).length?p:(new Date).getFullYear().toString().substr(0,4-p.length)+p,n.min&&n.min.year&&n.max&&n.max.year?(f=f.replace(/[^0-9]/g,""),f=p.charAt(0)===n.max.year.charAt(0)?p.replace(/[^0-9]/g,"0"):f+n.min.year.substr(f.length)):f=f.replace(/[^0-9]/g,"0"),f),l["raw"+a]=u):l[a]=c.min&&u.match(/[^0-9]/)?c.min[a]:u,void 0!==s&&s.call(l.date,"month"==a?parseInt(l[a])-1:l[a])),d=d.slice(h.length)}return m}}var o={d:["[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",Date.prototype.getDate],dd:["0[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",function(){return a(Date.prototype.getDate.call(this),2)}],ddd:[""],dddd:[""],m:["[1-9]|1[012]",Date.prototype.setMonth,"month",function(){return Date.prototype.getMonth.call(this)+1}],mm:["0[1-9]|1[012]",Date.prototype.setMonth,"month",function(){return a(Date.prototype.getMonth.call(this)+1,2)}],mmm:[""],mmmm:[""],yy:["[0-9]{2}",Date.prototype.setFullYear,"year",function(){return a(Date.prototype.getFullYear.call(this),2)}],yyyy:["[0-9]{4}",Date.prototype.setFullYear,"year",function(){return a(Date.prototype.getFullYear.call(this),4)}],h:["[1-9]|1[0-2]",Date.prototype.setHours,"hours",Date.prototype.getHours],hh:["0[1-9]|1[0-2]",Date.prototype.setHours,"hours",function(){return a(Date.prototype.getHours.call(this),2)}],hhh:["[0-9]+",Date.prototype.setHours,"hours",Date.prototype.getHours],H:["1?[0-9]|2[0-3]",Date.prototype.setHours,"hours",Date.prototype.getHours],HH:["[01][0-9]|2[0-3]",Date.prototype.setHours,"hours",function(){return a(Date.prototype.getHours.call(this),2)}],HHH:["[0-9]+",Date.prototype.setHours,"hours",Date.prototype.getHours],M:["[1-5]?[0-9]",Date.prototype.setMinutes,"minutes",Date.prototype.getMinutes],MM:["[0-5][0-9]",Date.prototype.setMinutes,"minutes",function(){return a(Date.prototype.getMinutes.call(this),2)}],s:["[1-5]?[0-9]",Date.prototype.setSeconds,"seconds",Date.prototype.getSeconds],ss:["[0-5][0-9]",Date.prototype.setSeconds,"seconds",function(){return a(Date.prototype.getSeconds.call(this),2)}],l:["[0-9]{3}",Date.prototype.setMilliseconds,"milliseconds",function(){return a(Date.prototype.getMilliseconds.call(this),3)}],L:["[0-9]{2}",Date.prototype.setMilliseconds,"milliseconds",function(){return a(Date.prototype.getMilliseconds.call(this),2)}],t:[""],tt:[""],T:[""],TT:[""],Z:[""],o:[""],S:[""]},s={isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"};return t.extendAliases({datetime:{mask:function(e){return e.inputFormat=s[e.inputFormat]||e.inputFormat,e.displayFormat=s[e.displayFormat]||e.displayFormat||e.inputFormat,e.outputFormat=s[e.outputFormat]||e.outputFormat||e.inputFormat,e.placeholder=e.placeholder!==t.prototype.defaults.placeholder?e.placeholder:e.inputFormat,e.min=r(e.min,e.inputFormat,e),e.max=r(e.max,e.inputFormat,e),e.regex=n(e.inputFormat,void 0,e),null},inputFormat:"isoDateTime",displayFormat:void 0,outputFormat:void 0,min:null,max:null,i18n:{dayNames:["Mon","Tue","Wed","Thu","Fri","Sat","Sun","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"]},postValidation:function(e,t,i){var n,a,o,s,l,u=t,c=r(e.join(""),i.inputFormat,i);return u&&c.date.getTime()==c.date.getTime()&&(s=c,l=u,u=(u=(!isFinite(s.day)||"29"==s.day&&!isFinite(s.rawyear)||new Date(s.date.getFullYear(),isFinite(s.month)?s.month:s.date.getMonth()+1,0).getDate()>=s.day)&&l)&&(n=c.date,o=!0,(a=i).min&&a.min.date.getTime()==a.min.date.getTime()&&(o=o&&a.min.date.getTime()<=n.getTime()),a.max&&a.max.date.getTime()==a.max.date.getTime()&&(o=o&&a.max.date.getTime()>=n.getTime()),o)),u},onKeyDown:function(n,r,o,s){if(n.ctrlKey&&n.keyCode===t.keyCode.RIGHT){for(var l,u=new Date,c="";l=i(s).exec(s.inputFormat);)"d"===l[0].charAt(0)?c+=a(u.getDate(),l[0].length):"m"===l[0].charAt(0)?c+=a(u.getMonth()+1,l[0].length):"yyyy"===l[0]?c+=u.getFullYear().toString():"y"===l[0].charAt(0)&&(c+=a(u.getYear(),l[0].length));this.inputmask._valueSet(c),e(this).trigger("setvalue")}},onUnMask:function(e,t,i){return n(i.outputFormat,r(e,i.inputFormat,i),i)},insertMode:!1}}),t})?n.apply(t,a):n)&&(e.exports=r)},function(e,t,i){"use strict";var n;"function"==typeof Symbol&&Symbol.iterator,void 0!==(n=function(){return window}.call(t,i,t,e))&&(e.exports=n)},function(e,t,i){"use strict";var n;"function"==typeof Symbol&&Symbol.iterator,void 0!==(n=function(){return document}.call(t,i,t,e))&&(e.exports=n)},function(e,t,i){"use strict";var n,a,r;"function"==typeof Symbol&&Symbol.iterator,a=[i(0),i(1)],void 0!==(r="function"==typeof(n=function(e,t){return t.extendDefinitions({A:{validator:"[A-Za-z?-???A-y?]",casing:"upper"},"&":{validator:"[0-9A-Za-z?-???A-y?]",casing:"upper"},"#":{validator:"[0-9A-Fa-f]",casing:"upper"}}),t.extendAliases({url:{definitions:{i:{validator:"."}},mask:"(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",insertMode:!1,autoUnmask:!1,inputmode:"url"},ip:{mask:"i[i[i]].i[i[i]].i[i[i]].i[i[i]]",definitions:{i:{validator:function(e,t,i,n,a){return i-1>-1&&"."!==t.buffer[i-1]?(e=t.buffer[i-1]+e,e=i-2>-1&&"."!==t.buffer[i-2]?t.buffer[i-2]+e:"0"+e):e="00"+e,new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(e)}}},onUnMask:function(e,t,i){return e},inputmode:"numeric"},email:{mask:"*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",greedy:!1,onBeforePaste:function(e,t){return(e=e.toLowerCase()).replace("mailto:","")},definitions:{"*":{validator:"[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",casing:"lower"},"-":{validator:"[0-9A-Za-z-]",casing:"lower"}},onUnMask:function(e,t,i){return e},inputmode:"email"},mac:{mask:"##:##:##:##:##:##"},vin:{mask:"V{13}9{4}",definitions:{V:{validator:"[A-HJ-NPR-Za-hj-npr-z\\d]",casing:"upper"}},clearIncomplete:!0,autoUnmask:!0}}),t})?n.apply(t,a):n)&&(e.exports=r)},function(e,t,i){"use strict";var n,a,r;"function"==typeof Symbol&&Symbol.iterator,a=[i(0),i(1)],void 0!==(r="function"==typeof(n=function(e,t,i){function n(e,i){for(var n="",a=0;a<e.length;a++)t.prototype.definitions[e.charAt(a)]||i.definitions[e.charAt(a)]||i.optionalmarker.start===e.charAt(a)||i.optionalmarker.end===e.charAt(a)||i.quantifiermarker.start===e.charAt(a)||i.quantifiermarker.end===e.charAt(a)||i.groupmarker.start===e.charAt(a)||i.groupmarker.end===e.charAt(a)||i.alternatormarker===e.charAt(a)?n+="\\"+e.charAt(a):n+=e.charAt(a);return n}return t.extendAliases({numeric:{mask:function(e){if(0!==e.repeat&&isNaN(e.integerDigits)&&(e.integerDigits=e.repeat),e.repeat=0,e.groupSeparator===e.radixPoint&&e.digits&&"0"!==e.digits&&("."===e.radixPoint?e.groupSeparator=",":","===e.radixPoint?e.groupSeparator=".":e.groupSeparator="")," "===e.groupSeparator&&(e.skipOptionalPartCharacter=i),e.autoGroup=e.autoGroup&&""!==e.groupSeparator,e.autoGroup&&("string"==typeof e.groupSize&&isFinite(e.groupSize)&&(e.groupSize=parseInt(e.groupSize)),isFinite(e.integerDigits))){var t=Math.floor(e.integerDigits/e.groupSize),a=e.integerDigits%e.groupSize;e.integerDigits=parseInt(e.integerDigits)+(0===a?t-1:t),e.integerDigits<1&&(e.integerDigits="*")}e.placeholder.length>1&&(e.placeholder=e.placeholder.charAt(0)),"radixFocus"===e.positionCaretOnClick&&""===e.placeholder&&!1===e.integerOptional&&(e.positionCaretOnClick="lvp"),e.definitions[";"]=e.definitions["~"],e.definitions[";"].definitionSymbol="~",!0===e.numericInput&&(e.positionCaretOnClick="radixFocus"===e.positionCaretOnClick?"lvp":e.positionCaretOnClick,e.digitsOptional=!1,isNaN(e.digits)&&(e.digits=2),e.decimalProtect=!1);var r="[+]";if(r+=n(e.prefix,e),!0===e.integerOptional?r+="~{1,"+e.integerDigits+"}":r+="~{"+e.integerDigits+"}",e.digits!==i){e.radixPointDefinitionSymbol=e.decimalProtect?":":e.radixPoint;var o=e.digits.toString().split(",");isFinite(o[0]&&o[1]&&isFinite(o[1]))?r+=e.radixPointDefinitionSymbol+";{"+e.digits+"}":(isNaN(e.digits)||parseInt(e.digits)>0)&&(e.digitsOptional?r+="["+e.radixPointDefinitionSymbol+";{1,"+e.digits+"}]":r+=e.radixPointDefinitionSymbol+";{"+e.digits+"}")}return r+=n(e.suffix,e),r+="[-]",e.greedy=!1,r},placeholder:"",greedy:!1,digits:"*",digitsOptional:!0,enforceDigitsOnBlur:!1,radixPoint:".",positionCaretOnClick:"radixFocus",groupSize:3,groupSeparator:"",autoGroup:!1,allowMinus:!0,negationSymbol:{front:"-",back:""},integerDigits:"+",integerOptional:!0,prefix:"",suffix:"",rightAlign:!0,decimalProtect:!0,min:null,max:null,step:1,insertMode:!0,autoUnmask:!1,unmaskAsNumber:!1,inputmode:"numeric",preValidation:function(t,n,a,r,o){if("-"===a||a===o.negationSymbol.front)return!0===o.allowMinus&&(o.isNegative=o.isNegative===i||!o.isNegative,""===t.join("")||{caret:n,dopost:!0});if(!1===r&&a===o.radixPoint&&o.digits!==i&&(isNaN(o.digits)||parseInt(o.digits)>0)){var s=e.inArray(o.radixPoint,t);if(-1!==s)return!0===o.numericInput?n===s:{caret:s+1}}return!0},postValidation:function(n,a,r){var o=r.suffix.split(""),s=r.prefix.split("");if(a.pos===i&&a.caret!==i&&!0!==a.dopost)return a;var l=a.caret!==i?a.caret:a.pos,u=n.slice();r.numericInput&&(l=u.length-l-1,u=u.reverse());var c=u[l];if(c===r.groupSeparator&&(c=u[l+=1]),l===u.length-r.suffix.length-1&&c===r.radixPoint)return a;c!==i&&c!==r.radixPoint&&c!==r.negationSymbol.front&&c!==r.negationSymbol.back&&(u[l]="?",r.prefix.length>0&&l>=(!1===r.isNegative?1:0)&&l<r.prefix.length-1+(!1===r.isNegative?1:0)?s[l-(!1===r.isNegative?1:0)]="?":r.suffix.length>0&&l>=u.length-r.suffix.length-(!1===r.isNegative?1:0)&&(o[l-(u.length-r.suffix.length-(!1===r.isNegative?1:0))]="?")),s=s.join(""),o=o.join("");var p=u.join("").replace(s,"");if(p=(p=(p=(p=p.replace(o,"")).replace(new RegExp(t.escapeRegex(r.groupSeparator),"g"),"")).replace(new RegExp("[-"+t.escapeRegex(r.negationSymbol.front)+"]","g"),"")).replace(new RegExp(t.escapeRegex(r.negationSymbol.back)+"$"),""),isNaN(r.placeholder)&&(p=p.replace(new RegExp(t.escapeRegex(r.placeholder),"g"),"")),p.length>1&&1!==p.indexOf(r.radixPoint)&&("0"===c&&(p=p.replace(/^\?/g,"")),p=p.replace(/^0/g,"")),p.charAt(0)===r.radixPoint&&""!==r.radixPoint&&!0!==r.numericInput&&(p="0"+p),""!==p){if(p=p.split(""),(!r.digitsOptional||r.enforceDigitsOnBlur&&"blur"===a.event)&&isFinite(r.digits)){var f=e.inArray(r.radixPoint,p),m=e.inArray(r.radixPoint,u);-1===f&&(p.push(r.radixPoint),f=p.length-1);for(var d=1;d<=r.digits;d++)r.digitsOptional&&(!r.enforceDigitsOnBlur||"blur"!==a.event)||p[f+d]!==i&&p[f+d]!==r.placeholder.charAt(0)?-1!==m&&u[m+d]!==i&&(p[f+d]=p[f+d]||u[m+d]):p[f+d]=a.placeholder||r.placeholder.charAt(0)}if(!0!==r.autoGroup||""===r.groupSeparator||c===r.radixPoint&&a.pos===i&&!a.dopost)p=p.join("");else{var h=p[p.length-1]===r.radixPoint&&a.c===r.radixPoint;p=t(function(e,t){var i="";if(i+="("+t.groupSeparator+"*{"+t.groupSize+"}){*}",""!==t.radixPoint){var n=e.join("").split(t.radixPoint);n[1]&&(i+=t.radixPoint+"*{"+n[1].match(/^\d*\??\d*/)[0].length+"}")}return i}(p,r),{numericInput:!0,jitMasking:!0,definitions:{"*":{validator:"[0-9?]",cardinality:1}}}).format(p.join("")),h&&(p+=r.radixPoint),p.charAt(0)===r.groupSeparator&&p.substr(1)}}if(r.isNegative&&"blur"===a.event&&(r.isNegative="0"!==p),p=s+p,p+=o,r.isNegative&&(p=r.negationSymbol.front+p,p+=r.negationSymbol.back),p=p.split(""),c!==i)if(c!==r.radixPoint&&c!==r.negationSymbol.front&&c!==r.negationSymbol.back)(l=e.inArray("?",p))>-1?p[l]=c:l=a.caret||0;else if(c===r.radixPoint||c===r.negationSymbol.front||c===r.negationSymbol.back){var g=e.inArray(c,p);-1!==g&&(l=g)}r.numericInput&&(l=p.length-l-1,p=p.reverse());var v={caret:c===i||a.pos!==i?l+(r.numericInput?-1:1):l,buffer:p,refreshFromBuffer:a.dopost||n.join("")!==p.join("")};return v.refreshFromBuffer?v:a},onBeforeWrite:function(n,a,r,o){if(n)switch(n.type){case"keydown":return o.postValidation(a,{caret:r,dopost:!0},o);case"blur":case"checkval":var s;if((l=o).parseMinMaxOptions===i&&(null!==l.min&&(l.min=l.min.toString().replace(new RegExp(t.escapeRegex(l.groupSeparator),"g"),""),","===l.radixPoint&&(l.min=l.min.replace(l.radixPoint,".")),l.min=isFinite(l.min)?parseFloat(l.min):NaN,isNaN(l.min)&&(l.min=Number.MIN_VALUE)),null!==l.max&&(l.max=l.max.toString().replace(new RegExp(t.escapeRegex(l.groupSeparator),"g"),""),","===l.radixPoint&&(l.max=l.max.replace(l.radixPoint,".")),l.max=isFinite(l.max)?parseFloat(l.max):NaN,isNaN(l.max)&&(l.max=Number.MAX_VALUE)),l.parseMinMaxOptions="done"),null!==o.min||null!==o.max){if(s=o.onUnMask(a.join(""),i,e.extend({},o,{unmaskAsNumber:!0})),null!==o.min&&s<o.min)return o.isNegative=o.min<0,o.postValidation(o.min.toString().replace(".",o.radixPoint).split(""),{caret:r,dopost:!0,placeholder:"0"},o);if(null!==o.max&&s>o.max)return o.isNegative=o.max<0,o.postValidation(o.max.toString().replace(".",o.radixPoint).split(""),{caret:r,dopost:!0,placeholder:"0"},o)}return o.postValidation(a,{caret:r,placeholder:"0",event:"blur"},o);case"_checkval":return{caret:r}}var l},regex:{integerPart:function(e,i){return i?new RegExp("["+t.escapeRegex(e.negationSymbol.front)+"+]?"):new RegExp("["+t.escapeRegex(e.negationSymbol.front)+"+]?\\d+")},integerNPart:function(e){return new RegExp("[\\d"+t.escapeRegex(e.groupSeparator)+t.escapeRegex(e.placeholder.charAt(0))+"]+")}},definitions:{"~":{validator:function(e,n,a,r,o,s){var l=r?new RegExp("[0-9"+t.escapeRegex(o.groupSeparator)+"]").test(e):new RegExp("[0-9]").test(e);if(!0===l){if(!0!==o.numericInput&&n.validPositions[a]!==i&&"~"===n.validPositions[a].match.def&&!s){var u=n.buffer.join(""),c=(u=(u=u.replace(new RegExp("[-"+t.escapeRegex(o.negationSymbol.front)+"]","g"),"")).replace(new RegExp(t.escapeRegex(o.negationSymbol.back)+"$"),"")).split(o.radixPoint);c.length>1&&(c[1]=c[1].replace(/0/g,o.placeholder.charAt(0))),"0"===c[0]&&(c[0]=c[0].replace(/0/g,o.placeholder.charAt(0))),u=c[0]+o.radixPoint+c[1]||"";var p=n._buffer.join("");for(u===o.radixPoint&&(u=p);null===u.match(t.escapeRegex(p)+"$");)p=p.slice(1);l=(u=(u=u.replace(p,"")).split(""))[a]===i?{pos:a,remove:a}:{pos:a}}}else r||e!==o.radixPoint||n.validPositions[a-1]!==i||(n.buffer[a]="0",l={pos:a+1});return l},cardinality:1},"+":{validator:function(e,t,i,n,a){return a.allowMinus&&("-"===e||e===a.negationSymbol.front)},cardinality:1,placeholder:""},"-":{validator:function(e,t,i,n,a){return a.allowMinus&&e===a.negationSymbol.back},cardinality:1,placeholder:""},":":{validator:function(e,i,n,a,r){var o="["+t.escapeRegex(r.radixPoint)+"]",s=new RegExp(o).test(e);return s&&i.validPositions[n]&&i.validPositions[n].match.placeholder===r.radixPoint&&(s={caret:n+1}),s},cardinality:1,placeholder:function(e){return e.radixPoint}}},onUnMask:function(e,i,n){if(""===i&&!0===n.nullable)return i;var a=e.replace(n.prefix,"");return a=(a=a.replace(n.suffix,"")).replace(new RegExp(t.escapeRegex(n.groupSeparator),"g"),""),""!==n.placeholder.charAt(0)&&(a=a.replace(new RegExp(n.placeholder.charAt(0),"g"),"0")),n.unmaskAsNumber?(""!==n.radixPoint&&-1!==a.indexOf(n.radixPoint)&&(a=a.replace(t.escapeRegex.call(this,n.radixPoint),".")),a=(a=a.replace(new RegExp("^"+t.escapeRegex(n.negationSymbol.front)),"-")).replace(new RegExp(t.escapeRegex(n.negationSymbol.back)+"$"),""),Number(a)):a},isComplete:function(e,i){var n=e.join("");if(e.slice().join("")!==n)return!1;var a=n.replace(i.prefix,"");return a=(a=a.replace(i.suffix,"")).replace(new RegExp(t.escapeRegex(i.groupSeparator)+"([0-9]{3})","g"),"$1"),","===i.radixPoint&&(a=a.replace(t.escapeRegex(i.radixPoint),".")),isFinite(a)},onBeforeMask:function(e,n){if(n.isNegative=i,e=e.toString().charAt(e.length-1)===n.radixPoint?e.toString().substr(0,e.length-1):e.toString(),""!==n.radixPoint&&isFinite(e)){var a=e.split("."),r=""!==n.groupSeparator?parseInt(n.groupSize):0;2===a.length&&(a[0].length>r||a[1].length>r||a[0].length<=r&&a[1].length<r)&&(e=e.replace(".",n.radixPoint))}var o=e.match(/,/g),s=e.match(/\./g);if(e=s&&o?s.length>o.length?(e=e.replace(/\./g,"")).replace(",",n.radixPoint):o.length>s.length?(e=e.replace(/,/g,"")).replace(".",n.radixPoint):e.indexOf(".")<e.indexOf(",")?e.replace(/\./g,""):e.replace(/,/g,""):e.replace(new RegExp(t.escapeRegex(n.groupSeparator),"g"),""),0===n.digits&&(-1!==e.indexOf(".")?e=e.substring(0,e.indexOf(".")):-1!==e.indexOf(",")&&(e=e.substring(0,e.indexOf(",")))),""!==n.radixPoint&&isFinite(n.digits)&&-1!==e.indexOf(n.radixPoint)){var l=e.split(n.radixPoint)[1].match(new RegExp("\\d*"))[0];if(parseInt(n.digits)<l.toString().length){var u=Math.pow(10,parseInt(n.digits));e=e.replace(t.escapeRegex(n.radixPoint),"."),e=(e=Math.round(parseFloat(e)*u)/u).toString().replace(".",n.radixPoint)}}return e},canClearPosition:function(e,t,i,n,a){var r=e.validPositions[t],o=r.input!==a.radixPoint||null!==e.validPositions[t].match.fn&&!1===a.decimalProtect||r.input===a.radixPoint&&e.validPositions[t+1]&&null===e.validPositions[t+1].match.fn||isFinite(r.input)||t===i||r.input===a.groupSeparator||r.input===a.negationSymbol.front||r.input===a.negationSymbol.back;return!o||"+"!==r.match.nativeDef&&"-"!==r.match.nativeDef||(a.isNegative=!1),o},onKeyDown:function(i,n,a,r){var o=e(this);if(i.ctrlKey)switch(i.keyCode){case t.keyCode.UP:o.val(parseFloat(this.inputmask.unmaskedvalue())+parseInt(r.step)),o.trigger("setvalue");break;case t.keyCode.DOWN:o.val(parseFloat(this.inputmask.unmaskedvalue())-parseInt(r.step)),o.trigger("setvalue")}}},currency:{prefix:"$ ",groupSeparator:",",alias:"numeric",placeholder:"0",autoGroup:!0,digits:2,digitsOptional:!1,clearMaskOnLostFocus:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",digits:0,radixPoint:""},percentage:{alias:"numeric",digits:2,digitsOptional:!0,radixPoint:".",placeholder:"0",autoGroup:!1,min:0,max:100,suffix:" %",allowMinus:!1}}),t})?n.apply(t,a):n)&&(e.exports=r)},function(e,t,i){"use strict";var n,a,r;"function"==typeof Symbol&&Symbol.iterator,a=[i(0),i(1)],void 0!==(r="function"==typeof(n=function(e,t){function i(e,t){var i=(e.mask||e).replace(/#/g,"0").replace(/\)/,"0").replace(/[+()#-]/g,""),n=(t.mask||t).replace(/#/g,"0").replace(/\)/,"0").replace(/[+()#-]/g,"");return i.localeCompare(n)}var n=t.prototype.analyseMask;return t.prototype.analyseMask=function(t,i,a){var r={};return a.phoneCodes&&(a.phoneCodes&&a.phoneCodes.length>1e3&&(function e(i,n,a){n=n||"",a=a||r,""!==n&&(a[n]={});for(var o="",s=a[n]||a,l=i.length-1;l>=0;l--)s[o=(t=i[l].mask||i[l]).substr(0,1)]=s[o]||[],s[o].unshift(t.substr(1)),i.splice(l,1);for(var u in s)s[u].length>500&&e(s[u].slice(),u,s)}((t=t.substr(1,t.length-2)).split(a.groupmarker[1]+a.alternatormarker+a.groupmarker[0])),t=function t(i){var n="",r=[];for(var o in i)e.isArray(i[o])?1===i[o].length?r.push(o+i[o]):r.push(o+a.groupmarker[0]+i[o].join(a.groupmarker[1]+a.alternatormarker+a.groupmarker[0])+a.groupmarker[1]):r.push(o+t(i[o]));return 1===r.length?n+=r[0]:n+=a.groupmarker[0]+r.join(a.groupmarker[1]+a.alternatormarker+a.groupmarker[0])+a.groupmarker[1],n}(r)),t=t.replace(/9/g,"\\9")),n.call(this,t,i,a)},t.extendAliases({abstractphone:{groupmarker:["<",">"],countrycode:"",phoneCodes:[],keepStatic:"auto",mask:function(e){return e.definitions={"#":t.prototype.definitions[9]},e.phoneCodes.sort(i)},onBeforeMask:function(e,t){var i=e.replace(/^0{1,2}/,"").replace(/[\s]/g,"");return(i.indexOf(t.countrycode)>1||-1===i.indexOf(t.countrycode))&&(i="+"+t.countrycode+i),i},onUnMask:function(e,t,i){return e.replace(/[()#-]/g,"")},inputmode:"tel"}}),t})?n.apply(t,a):n)&&(e.exports=r)},function(e,t,i){"use strict";var n,a,r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};a=[i(2),i(1)],void 0!==(r="function"==typeof(n=function(e,t){return void 0===e.fn.inputmask&&(e.fn.inputmask=function(i,n){var a,r=this[0];if(void 0===n&&(n={}),"string"==typeof i)switch(i){case"unmaskedvalue":return r&&r.inputmask?r.inputmask.unmaskedvalue():e(r).val();case"remove":return this.each(function(){this.inputmask&&this.inputmask.remove()});case"getemptymask":return r&&r.inputmask?r.inputmask.getemptymask():"";case"hasMaskedValue":return!(!r||!r.inputmask)&&r.inputmask.hasMaskedValue();case"isComplete":return!r||!r.inputmask||r.inputmask.isComplete();case"getmetadata":return r&&r.inputmask?r.inputmask.getmetadata():void 0;case"setvalue":e(r).val(n),r&&void 0===r.inputmask&&e(r).triggerHandler("setvalue");break;case"option":if("string"!=typeof n)return this.each(function(){if(void 0!==this.inputmask)return this.inputmask.option(n)});if(r&&void 0!==r.inputmask)return r.inputmask.option(n);break;default:return n.alias=i,a=new t(n),this.each(function(){a.mask(this)})}else{if("object"==(void 0===i?"undefined":o(i)))return a=new t(i),void 0===i.mask&&void 0===i.alias?this.each(function(){if(void 0!==this.inputmask)return this.inputmask.option(i);a.mask(this)}):this.each(function(){a.mask(this)});if(void 0===i)return this.each(function(){(a=new t(n)).mask(this)})}}),e.fn.inputmask})?n.apply(t,a):n)&&(e.exports=r)}]);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:67:"/bitrix/templates/aspro_next/js/jquery.easing.1.3.js?15438444908095";s:6:"source";s:52:"/bitrix/templates/aspro_next/js/jquery.easing.1.3.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright ? 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright ? 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
/* End */
;
; /* Start:"a:4:{s:4:"full";s:61:"/bitrix/templates/aspro_next/js/equalize.min.js?1543844490588";s:6:"source";s:47:"/bitrix/templates/aspro_next/js/equalize.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/**
 * equalize.js
 * Author & copyright (c) 2012: Tim Svensen
 * Dual MIT & GPL license
 *
 * Page: http://tsvensen.github.com/equalize.js
 * Repo: https://github.com/tsvensen/equalize.js/
 */
(function(b){b.fn.equalize=function(a){var d=!1,g=!1,c,e;b.isPlainObject(a)?(c=a.equalize||"height",d=a.children||!1,g=a.reset||!1):c=a||"height";if(!b.isFunction(b.fn[c]))return!1;e=0<c.indexOf("eight")?"height":"width";return this.each(function(){var a=d?b(this).find(d):b(this).children(),f=0;a.each(function(){var a=b(this);g&&a.css(e,"");a=a[c]();a>f&&(f=a)});a.css(e,f+"px")})}})(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:69:"/bitrix/templates/aspro_next/js/jquery.alphanumeric.js?15438444901901";s:6:"source";s:54:"/bitrix/templates/aspro_next/js/jquery.alphanumeric.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function ($) {
    $.fn.alphanumeric = function (p) {
        var input = $(this),
            az = "abcdefghijklmnopqrstuvwxyz",
            options = $.extend({
                ichars: '!@#$%^&*()+=[]\\\';,/{}|":<>?~`.- _',
                nchars: '',
                allow: ''
            }, p),
            s = options.allow.split(''),
            i = 0,
            ch,
            regex;

        for (i; i < s.length; i++) {
            if (options.ichars.indexOf(s[i]) != -1) {
                s[i] = '\\' + s[i];
            }
        }

        if (options.nocaps) {
            options.nchars += az.toUpperCase();
        }
        if (options.allcaps) {
            options.nchars += az;
        }

        options.allow = s.join('|');

        regex = new RegExp(options.allow, 'gi');
        ch = (options.ichars + options.nchars).replace(regex, '');

        input.keypress(function (e) {
            var key = String.fromCharCode(!e.charCode ? e.which : e.charCode);

            if (ch.indexOf(key) != -1 && !e.ctrlKey) {
                e.preventDefault();
            }
        });

        input.blur(function () {
            var value = input.val(),
                j = 0;

            for (j; j < value.length; j++) {
                if (ch.indexOf(value[j]) != -1) {
                    input.val('');
                    return false;
                }
            }
            return false;
        });

        return input;
    };

    $.fn.numeric = function (p) {
        var az = 'abcdefghijklmnopqrstuvwxyz',
            aZ = az.toUpperCase();

        return this.each(function () {
            $(this).alphanumeric($.extend({ nchars: az + aZ }, p));
        });
    };

    $.fn.alpha = function (p) {
        var nm = '1234567890';
        return this.each(function () {
            $(this).alphanumeric($.extend({ nchars: nm }, p));
        });
    };
})(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:63:"/bitrix/templates/aspro_next/js/jquery.cookie.js?15438444903066";s:6:"source";s:48:"/bitrix/templates/aspro_next/js/jquery.cookie.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals.
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));

/* End */
;
; /* Start:"a:4:{s:4:"full";s:67:"/bitrix/templates/aspro_next/js/jquery.plugin.min.js?15438444903178";s:6:"source";s:52:"/bitrix/templates/aspro_next/js/jquery.plugin.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/** Abstract base class for collection plugins v1.0.1.
	Written by Keith Wood (kbwood{at}iinet.com.au) December 2013.
	Licensed under the MIT (http://keith-wood.name/licence.html) license. */
(function(){var j=false;window.JQClass=function(){};JQClass.classes={};JQClass.extend=function extender(f){var g=this.prototype;j=true;var h=new this();j=false;for(var i in f){h[i]=typeof f[i]=='function'&&typeof g[i]=='function'?(function(d,e){return function(){var b=this._super;this._super=function(a){return g[d].apply(this,a||[])};var c=e.apply(this,arguments);this._super=b;return c}})(i,f[i]):f[i]}function JQClass(){if(!j&&this._init){this._init.apply(this,arguments)}}JQClass.prototype=h;JQClass.prototype.constructor=JQClass;JQClass.extend=extender;return JQClass}})();(function($){JQClass.classes.JQPlugin=JQClass.extend({name:'plugin',defaultOptions:{},regionalOptions:{},_getters:[],_getMarker:function(){return'is-'+this.name},_init:function(){$.extend(this.defaultOptions,(this.regionalOptions&&this.regionalOptions[''])||{});var c=camelCase(this.name);$[c]=this;$.fn[c]=function(a){var b=Array.prototype.slice.call(arguments,1);if($[c]._isNotChained(a,b)){return $[c][a].apply($[c],[this[0]].concat(b))}return this.each(function(){if(typeof a==='string'){if(a[0]==='_'||!$[c][a]){throw'Unknown method: '+a;}$[c][a].apply($[c],[this].concat(b))}else{$[c]._attach(this,a)}})}},setDefaults:function(a){$.extend(this.defaultOptions,a||{})},_isNotChained:function(a,b){if(a==='option'&&(b.length===0||(b.length===1&&typeof b[0]==='string'))){return true}return $.inArray(a,this._getters)>-1},_attach:function(a,b){a=$(a);if(a.hasClass(this._getMarker())){return}a.addClass(this._getMarker());b=$.extend({},this.defaultOptions,this._getMetadata(a),b||{});var c=$.extend({name:this.name,elem:a,options:b},this._instSettings(a,b));a.data(this.name,c);this._postAttach(a,c);this.option(a,b)},_instSettings:function(a,b){return{}},_postAttach:function(a,b){},_getMetadata:function(d){try{var f=d.data(this.name.toLowerCase())||'';f=f.replace(/'/g,'"');f=f.replace(/([a-zA-Z0-9]+):/g,function(a,b,i){var c=f.substring(0,i).match(/"/g);return(!c||c.length%2===0?'"'+b+'":':b+':')});f=$.parseJSON('{'+f+'}');for(var g in f){var h=f[g];if(typeof h==='string'&&h.match(/^new Date\((.*)\)$/)){f[g]=eval(h)}}return f}catch(e){return{}}},_getInst:function(a){return $(a).data(this.name)||{}},option:function(a,b,c){a=$(a);var d=a.data(this.name);if(!b||(typeof b==='string'&&c==null)){var e=(d||{}).options;return(e&&b?e[b]:e)}if(!a.hasClass(this._getMarker())){return}var e=b||{};if(typeof b==='string'){e={};e[b]=c}this._optionsChanged(a,d,e);$.extend(d.options,e)},_optionsChanged:function(a,b,c){},destroy:function(a){a=$(a);if(!a.hasClass(this._getMarker())){return}this._preDestroy(a,this._getInst(a));a.removeData(this.name).removeClass(this._getMarker())},_preDestroy:function(a,b){}});function camelCase(c){return c.replace(/-([a-z])/g,function(a,b){return b.toUpperCase()})}$.JQPlugin={createPlugin:function(a,b){if(typeof a==='object'){b=a;a='JQPlugin'}a=camelCase(a);var c=camelCase(b.name);JQClass.classes[c]=JQClass.classes[a].extend(b);new JQClass.classes[c]()}}})(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:71:"/bitrix/templates/aspro_next/js/jquery.countdown.min.js?154384449013137";s:6:"source";s:55:"/bitrix/templates/aspro_next/js/jquery.countdown.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(e){var t="countdown",i=0,s=1,n=2,o=3,r=4,a=5,l=6;e.JQPlugin.createPlugin({name:t,defaultOptions:{until:null,since:null,timezone:null,serverSync:null,format:"dHMS",layout:"",compact:!1,padZeroes:!1,significant:0,description:"",expiryUrl:"",expiryText:"",alwaysExpire:!1,onExpiry:null,onTick:null,tickInterval:1},regionalOptions:{"":{labels:["Years","Months","Weeks","Days","Hours","Minutes","Seconds"],labels1:["Year","Month","Week","Day","Hour","Minute","Second"],compactLabels:["y","m","w","d"],whichLabels:null,digits:["0","1","2","3","4","5","6","7","8","9"],timeSeparator:":",isRTL:!1}},_getters:["getTimes"],_rtlClass:t+"-rtl",_sectionClass:t+"-section",_amountClass:t+"-amount",_periodClass:t+"-period",_rowClass:t+"-row",_holdingClass:t+"-holding",_showClass:t+"-show",_descrClass:t+"-descr",_timerElems:[],_init:function(){function t(e){var a=1e12>e?n?performance.now()+performance.timing.navigationStart:s():e||s();a-r>=1e3&&(i._updateElems(),r=a),o(t)}var i=this;this._super(),this._serverSyncs=[];var s="function"==typeof Date.now?Date.now:function(){return(new Date).getTime()},n=window.performance&&"function"==typeof window.performance.now,o=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||null,r=0;!o||e.noRequestAnimationFrame?(e.noRequestAnimationFrame=null,setInterval(function(){i._updateElems()},980)):(r=window.animationStartTime||window.webkitAnimationStartTime||window.mozAnimationStartTime||window.oAnimationStartTime||window.msAnimationStartTime||s(),o(t))},UTCDate:function(e,t,i,s,n,o,r,a){"object"==typeof t&&t.constructor==Date&&(a=t.getMilliseconds(),r=t.getSeconds(),o=t.getMinutes(),n=t.getHours(),s=t.getDate(),i=t.getMonth(),t=t.getFullYear());var l=new Date;return l.setUTCFullYear(t),l.setUTCDate(1),l.setUTCMonth(i||0),l.setUTCDate(s||1),l.setUTCHours(n||0),l.setUTCMinutes((o||0)-(Math.abs(e)<30?60*e:e)),l.setUTCSeconds(r||0),l.setUTCMilliseconds(a||0),l},periodsToSeconds:function(e){return 31557600*e[0]+2629800*e[1]+604800*e[2]+86400*e[3]+3600*e[4]+60*e[5]+e[6]},resync:function(){var t=this;e("."+this._getMarker()).each(function(){var i=e.data(this,t.name);if(i.options.serverSync){for(var s=null,n=0;n<t._serverSyncs.length;n++)if(t._serverSyncs[n][0]==i.options.serverSync){s=t._serverSyncs[n];break}if(null==s[2]){var o=e.isFunction(i.options.serverSync)?i.options.serverSync.apply(this,[]):null;s[2]=(o?(new Date).getTime()-o.getTime():0)-s[1]}i._since&&i._since.setMilliseconds(i._since.getMilliseconds()+s[2]),i._until.setMilliseconds(i._until.getMilliseconds()+s[2])}});for(var i=0;i<t._serverSyncs.length;i++)null!=t._serverSyncs[i][2]&&(t._serverSyncs[i][1]+=t._serverSyncs[i][2],delete t._serverSyncs[i][2])},_instSettings:function(e,t){return{_periods:[0,0,0,0,0,0,0]}},_addElem:function(e){this._hasElem(e)||this._timerElems.push(e)},_hasElem:function(t){return e.inArray(t,this._timerElems)>-1},_removeElem:function(t){this._timerElems=e.map(this._timerElems,function(e){return e==t?null:e})},_updateElems:function(){for(var e=this._timerElems.length-1;e>=0;e--)this._updateCountdown(this._timerElems[e])},_optionsChanged:function(t,i,s){s.layout&&(s.layout=s.layout.replace(/&lt;/g,"<").replace(/&gt;/g,">")),this._resetExtraLabels(i.options,s);var n=i.options.timezone!=s.timezone;e.extend(i.options,s),this._adjustSettings(t,i,null!=s.until||null!=s.since||n);var o=new Date;(i._since&&i._since<o||i._until&&i._until>o)&&this._addElem(t[0]),this._updateCountdown(t,i)},_updateCountdown:function(t,i){if(t=t.jquery?t:e(t),i=i||this._getInst(t),i&&i.options){if(t.html(this._generateHTML(i)).toggleClass(this._rtlClass,i.options.isRTL),e.isFunction(i.options.onTick)){var s="lap"!=i._hold?i._periods:this._calculatePeriods(i,i._show,i.options.significant,new Date);(1==i.options.tickInterval||this.periodsToSeconds(s)%i.options.tickInterval==0)&&i.options.onTick.apply(t[0],[s])}var n="pause"!=i._hold&&(i._since?i._now.getTime()<i._since.getTime():i._now.getTime()>=i._until.getTime());if(n&&!i._expiring){if(i._expiring=!0,this._hasElem(t[0])||i.options.alwaysExpire){if(this._removeElem(t[0]),e.isFunction(i.options.onExpiry)&&i.options.onExpiry.apply(t[0],[]),i.options.expiryText){var o=i.options.layout;i.options.layout=i.options.expiryText,this._updateCountdown(t[0],i),i.options.layout=o}i.options.expiryUrl&&(window.location=i.options.expiryUrl)}i._expiring=!1}else"pause"==i._hold&&this._removeElem(t[0])}},_resetExtraLabels:function(e,t){for(var i in t)i.match(/[Ll]abels[02-9]|compactLabels1/)&&(e[i]=t[i]);for(var i in e)i.match(/[Ll]abels[02-9]|compactLabels1/)&&"undefined"==typeof t[i]&&(e[i]=null)},_adjustSettings:function(t,i,s){for(var n=null,o=0;o<this._serverSyncs.length;o++)if(this._serverSyncs[o][0]==i.options.serverSync){n=this._serverSyncs[o][1];break}if(null!=n)var r=i.options.serverSync?n:0,a=new Date;else{var l=e.isFunction(i.options.serverSync)?i.options.serverSync.apply(t[0],[]):null,a=new Date,r=l?a.getTime()-l.getTime():0;this._serverSyncs.push([i.options.serverSync,r])}var _=i.options.timezone;_=null==_?-a.getTimezoneOffset():_,(s||!s&&null==i._until&&null==i._since)&&(i._since=i.options.since,null!=i._since&&(i._since=this.UTCDate(_,this._determineTime(i._since,null)),i._since&&r&&i._since.setMilliseconds(i._since.getMilliseconds()+r)),i._until=this.UTCDate(_,this._determineTime(i.options.until,a)),r&&i._until.setMilliseconds(i._until.getMilliseconds()+r)),i._show=this._determineShow(i)},_preDestroy:function(e,t){this._removeElem(e[0]),e.empty()},pause:function(e){this._hold(e,"pause")},lap:function(e){this._hold(e,"lap")},resume:function(e){this._hold(e,null)},toggle:function(t){var i=e.data(t,this.name)||{};this[i._hold?"resume":"pause"](t)},toggleLap:function(t){var i=e.data(t,this.name)||{};this[i._hold?"resume":"lap"](t)},_hold:function(t,i){var s=e.data(t,this.name);if(s){if("pause"==s._hold&&!i){s._periods=s._savePeriods;var n=s._since?"-":"+";s[s._since?"_since":"_until"]=this._determineTime(n+s._periods[0]+"y"+n+s._periods[1]+"o"+n+s._periods[2]+"w"+n+s._periods[3]+"d"+n+s._periods[4]+"h"+n+s._periods[5]+"m"+n+s._periods[6]+"s"),this._addElem(t)}s._hold=i,s._savePeriods="pause"==i?s._periods:null,e.data(t,this.name,s),this._updateCountdown(t,s)}},getTimes:function(t){var i=e.data(t,this.name);return i?"pause"==i._hold?i._savePeriods:i._hold?this._calculatePeriods(i,i._show,i.options.significant,new Date):i._periods:null},_determineTime:function(e,t){var i=this,s=function(e){var t=new Date;return t.setTime(t.getTime()+1e3*e),t},n=function(e){e=e.toLowerCase();for(var t=new Date,s=t.getFullYear(),n=t.getMonth(),o=t.getDate(),r=t.getHours(),a=t.getMinutes(),l=t.getSeconds(),_=/([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g,p=_.exec(e);p;){switch(p[2]||"s"){case"s":l+=parseInt(p[1],10);break;case"m":a+=parseInt(p[1],10);break;case"h":r+=parseInt(p[1],10);break;case"d":o+=parseInt(p[1],10);break;case"w":o+=7*parseInt(p[1],10);break;case"o":n+=parseInt(p[1],10),o=Math.min(o,i._getDaysInMonth(s,n));break;case"y":s+=parseInt(p[1],10),o=Math.min(o,i._getDaysInMonth(s,n))}p=_.exec(e)}return new Date(s,n,o,r,a,l,0)},o=null==e?t:"string"==typeof e?n(e):"number"==typeof e?s(e):e;return o&&o.setMilliseconds(0),o},_getDaysInMonth:function(e,t){return 32-new Date(e,t,32).getDate()},_normalLabels:function(e){return e},_generateHTML:function(t){var _=this;t._periods=t._hold?t._periods:this._calculatePeriods(t,t._show,t.options.significant,new Date);for(var p=!1,c=0,u=t.options.significant,d=e.extend({},t._show),h=i;l>=h;h++)p|="?"==t._show[h]&&t._periods[h]>0,d[h]="?"!=t._show[h]||p?t._show[h]:null,c+=d[h]?1:0,u-=t._periods[h]>0?1:0;for(var m=[!1,!1,!1,!1,!1,!1,!1],h=l;h>=i;h--)t._show[h]&&(t._periods[h]?m[h]=!0:(m[h]=u>0,u--));var g=t.options.compact?t.options.compactLabels:t.options.labels,f=t.options.whichLabels||this._normalLabels,w=function(e){var i=t.options["compactLabels"+f(t._periods[e])];return d[e]?_._translateDigits(t,t._periods[e])+(i?i[e]:g[e])+" ":""},y=t.options.padZeroes?2:1,v=function(e){var i=t.options["labels"+f(t._periods[e])];return!t.options.significant&&d[e]||t.options.significant&&m[e]?'<span class="'+_._sectionClass+'"><span class="'+_._amountClass+'">'+_._minDigits(t,t._periods[e],y)+'</span><span class="'+_._periodClass+'">'+(i?i[e]:g[e])+"</span></span>":""};return t.options.layout?this._buildLayout(t,d,t.options.layout,t.options.compact,t.options.significant,m):(t.options.compact?'<span class="'+this._rowClass+" "+this._amountClass+(t._hold?" "+this._holdingClass:"")+'">'+w(i)+w(s)+w(n)+w(o)+(d[r]?this._minDigits(t,t._periods[r],2):"")+(d[a]?(d[r]?t.options.timeSeparator:"")+this._minDigits(t,t._periods[a],2):"")+(d[l]?(d[r]||d[a]?t.options.timeSeparator:"")+this._minDigits(t,t._periods[l],2):""):'<span class="'+this._rowClass+" "+this._showClass+(t.options.significant||c)+(t._hold?" "+this._holdingClass:"")+'">'+v(i)+v(s)+v(n)+v(o)+v(r)+v(a)+v(l))+"</span>"+(t.options.description?'<span class="'+this._rowClass+" "+this._descrClass+'">'+t.options.description+"</span>":"")},_buildLayout:function(t,_,p,c,u,d){for(var h=t.options[c?"compactLabels":"labels"],m=t.options.whichLabels||this._normalLabels,g=function(e){return(t.options[(c?"compactLabels":"labels")+m(t._periods[e])]||h)[e]},f=function(e,i){return t.options.digits[Math.floor(e/i)%10]},w={desc:t.options.description,sep:t.options.timeSeparator,yl:g(i),yn:this._minDigits(t,t._periods[i],1),ynn:this._minDigits(t,t._periods[i],2),ynnn:this._minDigits(t,t._periods[i],3),y1:f(t._periods[i],1),y10:f(t._periods[i],10),y100:f(t._periods[i],100),y1000:f(t._periods[i],1e3),ol:g(s),on:this._minDigits(t,t._periods[s],1),onn:this._minDigits(t,t._periods[s],2),onnn:this._minDigits(t,t._periods[s],3),o1:f(t._periods[s],1),o10:f(t._periods[s],10),o100:f(t._periods[s],100),o1000:f(t._periods[s],1e3),wl:g(n),wn:this._minDigits(t,t._periods[n],1),wnn:this._minDigits(t,t._periods[n],2),wnnn:this._minDigits(t,t._periods[n],3),w1:f(t._periods[n],1),w10:f(t._periods[n],10),w100:f(t._periods[n],100),w1000:f(t._periods[n],1e3),dl:g(o),dn:this._minDigits(t,t._periods[o],1),dnn:this._minDigits(t,t._periods[o],2),dnnn:this._minDigits(t,t._periods[o],3),d1:f(t._periods[o],1),d10:f(t._periods[o],10),d100:f(t._periods[o],100),d1000:f(t._periods[o],1e3),hl:g(r),hn:this._minDigits(t,t._periods[r],1),hnn:this._minDigits(t,t._periods[r],2),hnnn:this._minDigits(t,t._periods[r],3),h1:f(t._periods[r],1),h10:f(t._periods[r],10),h100:f(t._periods[r],100),h1000:f(t._periods[r],1e3),ml:g(a),mn:this._minDigits(t,t._periods[a],1),mnn:this._minDigits(t,t._periods[a],2),mnnn:this._minDigits(t,t._periods[a],3),m1:f(t._periods[a],1),m10:f(t._periods[a],10),m100:f(t._periods[a],100),m1000:f(t._periods[a],1e3),sl:g(l),sn:this._minDigits(t,t._periods[l],1),snn:this._minDigits(t,t._periods[l],2),snnn:this._minDigits(t,t._periods[l],3),s1:f(t._periods[l],1),s10:f(t._periods[l],10),s100:f(t._periods[l],100),s1000:f(t._periods[l],1e3)},y=p,v=i;l>=v;v++){var D="yowdhms".charAt(v),T=new RegExp("\\{"+D+"<\\}([\\s\\S]*)\\{"+D+">\\}","g");y=y.replace(T,!u&&_[v]||u&&d[v]?"$1":"")}return e.each(w,function(e,t){var i=new RegExp("\\{"+e+"\\}","g");y=y.replace(i,t)}),y},_minDigits:function(e,t,i){return t=""+t,t.length>=i?this._translateDigits(e,t):(t="0000000000"+t,this._translateDigits(e,t.substr(t.length-i)))},_translateDigits:function(e,t){return(""+t).replace(/[0-9]/g,function(t){return e.options.digits[t]})},_determineShow:function(e){var t=e.options.format,_=[];return _[i]=t.match("y")?"?":t.match("Y")?"!":null,_[s]=t.match("o")?"?":t.match("O")?"!":null,_[n]=t.match("w")?"?":t.match("W")?"!":null,_[o]=t.match("d")?"?":t.match("D")?"!":null,_[r]=t.match("h")?"?":t.match("H")?"!":null,_[a]=t.match("m")?"?":t.match("M")?"!":null,_[l]=t.match("s")?"?":t.match("S")?"!":null,_},_calculatePeriods:function(e,t,_,p){e._now=p,e._now.setMilliseconds(0);var c=new Date(e._now.getTime());e._since?p.getTime()<e._since.getTime()?e._now=p=c:p=e._since:(c.setTime(e._until.getTime()),p.getTime()>e._until.getTime()&&(e._now=p=c));var u=[0,0,0,0,0,0,0];if(t[i]||t[s]){var d=this._getDaysInMonth(p.getFullYear(),p.getMonth()),h=this._getDaysInMonth(c.getFullYear(),c.getMonth()),m=c.getDate()==p.getDate()||c.getDate()>=Math.min(d,h)&&p.getDate()>=Math.min(d,h),g=function(e){return 60*(60*e.getHours()+e.getMinutes())+e.getSeconds()},f=Math.max(0,12*(c.getFullYear()-p.getFullYear())+c.getMonth()-p.getMonth()+(c.getDate()<p.getDate()&&!m||m&&g(c)<g(p)?-1:0));u[i]=t[i]?Math.floor(f/12):0,u[s]=t[s]?f-12*u[i]:0,p=new Date(p.getTime());var w=p.getDate()==d,y=this._getDaysInMonth(p.getFullYear()+u[i],p.getMonth()+u[s]);p.getDate()>y&&p.setDate(y),p.setFullYear(p.getFullYear()+u[i]),p.setMonth(p.getMonth()+u[s]),w&&p.setDate(y)}var v=Math.floor((c.getTime()-p.getTime())/1e3),D=function(e,i){u[e]=t[e]?Math.floor(v/i):0,v-=u[e]*i};if(D(n,604800),D(o,86400),D(r,3600),D(a,60),D(l,1),v>0&&!e._since)for(var T=[1,12,4.3482,7,24,60,60],M=l,S=1,b=l;b>=i;b--)t[b]&&(u[M]>=S&&(u[M]=0,v=1),v>0&&(u[b]++,v=0,M=b,S=1)),S*=T[b];if(_)for(var b=i;l>=b;b++)_&&u[b]?_--:_||(u[b]=0);return u}})}(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:69:"/bitrix/templates/aspro_next/js/jquery.countdown-ru.js?15438444901382";s:6:"source";s:54:"/bitrix/templates/aspro_next/js/jquery.countdown-ru.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* http://keith-wood.name/countdown.html
 * Russian initialisation for the jQuery countdown extension
 * Written by Sergey K. (xslade{at}gmail.com) June 2010. */
(function($) {
        $.countdown.regionalOptions['ru'] = {
		labels: [BX.message('COUNTDOWN_YEAR0'), BX.message('COUNTDOWN_MONTH0'), BX.message('COUNTDOWN_WEAK0'), BX.message('COUNTDOWN_DAY0'), BX.message('COUNTDOWN_HOUR'), BX.message('COUNTDOWN_MIN'), BX.message('COUNTDOWN_SEC')],
		labels1: [BX.message('COUNTDOWN_YEAR1'), BX.message('COUNTDOWN_MONTH1'), BX.message('COUNTDOWN_WEAK1'), BX.message('COUNTDOWN_DAY1'), BX.message('COUNTDOWN_HOUR'), BX.message('COUNTDOWN_MIN'), BX.message('COUNTDOWN_SEC')],
		labels2: [BX.message('COUNTDOWN_YEAR2'), BX.message('COUNTDOWN_MONTH2'), BX.message('COUNTDOWN_WEAK2'), BX.message('COUNTDOWN_DAY2'), BX.message('COUNTDOWN_HOUR'), BX.message('COUNTDOWN_MIN'), BX.message('COUNTDOWN_SEC')],
		compactLabels: ['??', '??', '??', '??'], compactLabels1: ['??', '??', '??', '??'],
		whichLabels: function(amount) {
			var units = amount % 10;
			var tens = Math.floor((amount % 100) / 10);
			return (amount == 1 ? 1 : (units >= 2 && units <= 4 && tens != 1 ? 2 :
				(units == 1 && tens != 1 ? 1 : 0)));
		},
		digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
		timeSeparator: ':', isRTL: false};
	$.countdown.setDefaults($.countdown.regionalOptions['ru']);
})(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:66:"/bitrix/templates/aspro_next/js/jquery.ikSelect.js?154384449032030";s:6:"source";s:50:"/bitrix/templates/aspro_next/js/jquery.ikSelect.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! ikSelect 1.0.3
	Copyright (c) 2013 Igor Kozlov
	http://igorkozlov.me */

;(function ($, window, document, undefined) {
	var $window = $(window);
	var defaults = {
		syntax: '<div class="ik_select_link"><div class="ik_select_link_text"></div></div><div class="ik_select_dropdown"><div class="ik_select_list"></div></div>',
		autoWidth: true, // set select width according to the longest option
		ddFullWidth: true, // set dropdown width according to the longest option
		equalWidths: true, // include scrollbar width in fake select calculations
		dynamicWidth: false, // change fake select's width according to it's contents
		extractLink: false,
		customClass: '',
		linkCustomClass: '',
		ddCustomClass: '',
		ddMaxHeight: 200,
		filter: false,
		nothingFoundText: 'Nothing found',
		isDisabled: false,
		onInit: function() {},
		onShow: function () {},
		onHide: function () {},
		onKeyUp: function () {},
		onKeyDown: function () {},
		onHoverMove: function () {}
	};

	var instOpened; // instance of the currently opened select

	// browser detection part was taken from jQuery migrate
	// https://github.com/jquery/jquery-migrate/blob/e6bda6a84c294eb1319fceb48c09f51042c80892/src/core.js
	var uaMatch = function (ua) {
		ua = ua.toLowerCase();

		var match = /(chrome)[ \/]([\w.]+)/.exec(ua) ||
			/(webkit)[ \/]([\w.]+)/.exec(ua) ||
			/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
			/(msie) ([\w.]+)/.exec(ua) ||
			ua.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) ||
			[];

		return {
			browser: match[1] || '',
			version: match[2] || '0'
		};
	};

	if (! $.browser) {
		var matched = uaMatch(navigator.userAgent);
		var browser = {};

		if (matched.browser) {
			browser[matched.browser] = true;
			browser.version = matched.version;
		}

		if (browser.chrome) {
			browser.webkit = true;
		} else if (browser.webkit) {
			browser.safari = true;
		}

		$.browser = browser;
	}

	$.browser.mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile/i.test(navigator.userAgent);
	$.browser.operamini = Object.prototype.toString.call(window.operamini) === "[object OperaMini]";

	function IkSelect(element, options) {
		var dataOptions = {}; // parsed data- attributes

		this.el = element;
		this.$el = $(element); // original select

		for (var key in defaults) {
			dataOptions[key] = this.$el.data(key.toLowerCase());
		}

		this.options = $.extend({}, defaults, options, dataOptions);

		if ($.browser.mobile) {
			this.options.filter = false;
		}

		this.init();
	}

	$.extend(IkSelect.prototype, {
		init: function () {
			this.$wrapper = $('<div class="ik_select">' + this.options.syntax + '</div>'); // wrapper for the fake select and the fake dropdown
			this.$link = $('.ik_select_link', this.$wrapper); // fake select
			this.$linkText = $('.ik_select_link_text', this.$wrapper); // fake select's text
			this.$dropdown = $('.ik_select_dropdown', this.$wrapper); // fake dropdown
			this.$list = $('.ik_select_list', this.$wrapper); // options list inside the fake dropdown
			this.$listInner = $('<div class="ik_select_list_inner"/>'); // support dropdown for scrolling
			this.$active = $([]); // active fake option
			this.$hover = $([]); // hovered fake option
			this.hoverIndex = 0; // hovered fake option's index

			this.$optionSet = $([]);
			this.$optgroupSet = $([]);

			this.$list.append(this.$listInner);

			if (this.options.filter) {
				this.$filter = $([]); // filter text input
				this.$optionSetOriginal = $([]); // contains original list items when filtering
				this.$nothingFoundText = $('<div class="ik_select_nothing_found"/>').html(this.options.nothingFoundText);
				this.$filterWrap = $('.ik_select_filter_wrap', this.$wrapper);

				if (! this.$filterWrap.length) {
					this.$filterWrap = $('<div class="ik_select_filter_wrap"/>');
				}

				this.$filter = $('<input type="text" class="ik_select_filter">');

				this.$filterWrap.append(this.$filter);
				this.$list.prepend(this.$filterWrap);

				this.$filter.on({
					// keyboard controls should work even if the filter is in focus
					'keydown.ikSelect keyup.ikSelect': $.proxy(this, '_elKeyUpDown'),
					// actual filtering happens on keyup
					'keyup.ikSelect': $.proxy(this, '_filterKeyup')
				});
			}

			this.$wrapper.addClass(this.options.customClass);
			this.$link.addClass(this.options.linkCustomClass || (this.options.customClass && this.options.customClass + '-link'));
			this.$dropdown.addClass(this.options.ddCustomClass || (this.options.customClass && this.options.customClass + '-dd'));

			// creating fake option list
			this.reset();

			// disable select if an option or attribute are truthy
			this.toggle(!(this.options.isDisabled || this.$el.prop('disabled') || this.$el.hasClass('hidden')));

			// click event for fake select
			this.$link.on('click.ikSelect', $.proxy(this, '_linkClick'));

			this.$el.on({
				// when focus is on the original select add a focus class to the fake one
				'focus.ikSelect': $.proxy(this, '_elFocus'),
				// when focus lost remove the focus class from the fake one
				'blur.ikSelect': $.proxy(this, '_elBlur'),
				// make sure that the fake select shows correct data
				'change.ikSelect': $.proxy(this, '_syncOriginalOption'),
				// keyboard controls for the fake select
				'keydown.ikSelect keyup.ikSelect': $.proxy(this, '_elKeyUpDown')
			});

			this.$list.on({
				'click.ikSelect': $.proxy(this, '_optionClick'),
				'mouseover.ikSelect': $.proxy(this, '_optionMouseover')
			}, '.ik_select_option');

			// stop propagation of click events on the wrapper
			this.$wrapper.on('click', function () {
				return false;
			});

			// appending the fake select right after the original one
			this.$el.after(this.$wrapper);

			// set correct dimensions
			this.redraw();

			// move original select inside the wrapper
			this.$el.appendTo(this.$wrapper);

			this.options.onInit(this);
			this.$el.trigger('ikinit', this);
		},

		// click listener for fake select
		_linkClick: function () {
			if (this.isDisabled) {
				return;
			}
			if (this === instOpened) {
				this.hideDropdown();
			} else {
				this.showDropdown();
			}

		},

		// click listener for the fake options
		_optionClick: function () {
			this._makeOptionActive(this.searchIndexes ? this.$optionSetOriginal.index(this.$hover) : this.hoverIndex, true);
			this.hideDropdown();
			this.$el.change().focus();
		},

		// hover listener for the fake options
		_optionMouseover: function (event) {
			var $option = $(event.currentTarget);
			if ($option.hasClass('ik_select_option_disabled')) {
				return;
			}
			this.$hover.removeClass('ik_select_hover');
			this.$hover = $option.addClass('ik_select_hover');
			this.hoverIndex = this.$optionSet.index(this.$hover);
		},

		// makes fake option active without syncing the original select
		_makeOptionActive: function (index, shouldSync) {
			var $option = $(this.el.options[index]),
				text='';
			if($option.data('img_src')){
				text+='<span class="icon_color" style="background: url('+$option.data('img_src')+')"></span>';
				this.$link.addClass('img');
			}
			if($option.attr('title')){
				this.$link.attr('title', $option.attr('title'));
			}
			text+=$option.text();
			this.$linkText.html(text);

			this.$link.toggleClass('ik_select_link_novalue', !$option.attr('value'));

			this.$hover.removeClass('ik_select_hover');
			this.$active.removeClass('ik_select_active');
			this.$hover = this.$active = this.$optionSet.eq(index).addClass('ik_select_hover ik_select_active');
			this.hoverIndex = index;

			if (shouldSync) {
				this._syncFakeOption();
			}
		},

		// keyboard controls for the fake select
		_elKeyUpDown: function (event) {
			var $handle = $(event.currentTarget);
			var type = event.type;
			var keycode = event.which;
			var newTop;

			switch (keycode) {
			case 38: // up
				if (type === 'keydown') {
					event.preventDefault();
					this._moveToPrevActive();
				}
				break;
			case 40: // down
				if (type === 'keydown') {
					event.preventDefault();
					this._moveToNextActive();
				}
				break;
			case 33: // page up
				if (type === 'keydown') {
					event.preventDefault();
					newTop = this.$hover.position().top - this.$listInner.height();
					this._moveToPrevActive(function (optionTop) {
						return optionTop <= newTop;
					});
				}
				break;
			case 34: // page down
				if (type === 'keydown') {
					event.preventDefault();
					newTop = this.$hover.position().top + this.$listInner.height();
					this._moveToNextActive(function (optionTop) {
						return optionTop >= newTop;
					});
				}
				break;
			case 36: // home
				if (type === 'keydown' && $handle.is(this.$el)) {
					event.preventDefault();
					this._moveToFirstActive();
				}
				break;
			case 35: // end
				if (type === 'keydown' && $handle.is(this.$el)) {
					event.preventDefault();
					this._moveToLastActive();
				}
				break;
			case 32: // space
				if (type === 'keydown' && $handle.is(this.$el)) {
					event.preventDefault();
					if (! this.$dropdown.is(':visible')) {
						this._linkClick();
					} else {
						this.$hover.click();
					}
				}
				break;
			case 13: // enter
				if (type === 'keydown' && this.$dropdown.is(':visible')) {
					event.preventDefault();
					this.$hover.click();
				}
				break;
			case 27: // esc
				if (type === 'keydown' && this.$dropdown.is(':visible')) {
					event.preventDefault();
					this.hideDropdown();
				}
				break;
			case 9: // tab
				if (type === 'keydown') {
					if ($.browser.webkit && this.$dropdown.is(':visible')) {
						event.preventDefault();
					} else {
						this.hideDropdown();
					}
				}
				break;
			default:
				if (type === 'keyup' && $handle.is(this.$el)) {
					this._syncOriginalOption();
				}
				break;
			}

			// mozilla ignores preventDefault for select navigation
			// this ensures that original select is in sync
			if (type === 'keyup' && $.browser.mozilla) {
				this._syncFakeOption();
			}

			if (type === 'keydown') {
				this.options.onKeyDown(this, keycode);
				this.$el.trigger('ikkeydown', [this, keycode]);
			}
			if (type === 'keyup') {
				this.options.onKeyUp(this, keycode);
				this.$el.trigger('ikkeyup', [this, keycode]);
			}
		},

		// controls hover/active states for options and makes selected with keyboard options fully visible
		_moveTo: function (index) {
			var optionTopLine, optionBottomLine;
			var $optgroup;

			if (!this.$dropdown.is(':visible') && $.browser.webkit) {
				this.showDropdown();
				return this;
			}

			if (!this.$dropdown.is(':visible') || $.browser.mozilla) {
				this._makeOptionActive(index, true);
			} else {
				this.$hover.removeClass('ik_select_hover');
				this.$hover = this.$optionSet.eq(index).addClass('ik_select_hover');
				this.hoverIndex = index;
			}

			// make option fully visible
			optionTopLine = this.$hover.position().top;
			optionBottomLine = optionTopLine + this.$active.outerHeight();
			// make optgroup label visible if first option witin this optgroup is hovered
			if (!this.$hover.index()) {
				$optgroup = this.$hover.closest('.ik_select_optgroup');
				if ($optgroup.length) {
					optionTopLine = $optgroup.position().top;
				}
			}
			if (optionBottomLine > this.$listInner.height()) {
				this.$listInner.scrollTop(this.$listInner.scrollTop() + optionBottomLine - this.$listInner.height());
			} else if (optionTopLine < 0) {
				this.$listInner.scrollTop(this.$listInner.scrollTop() + optionTopLine);
			}

			this.options.onHoverMove(this);
			this.$el.trigger('ikhovermove', this);
		},

		_moveToFirstActive: function () {
			for (var i = 0; i < this.$optionSet.length; i++) {
				if (!this.$optionSet.eq(i).hasClass('ik_select_option_disabled')) {
					this._moveTo(i);
					break;
				}
			}
		},

		_moveToLastActive: function () {
			for (var i = this.$optionSet.length - 1; i >= 0; i++) {
				if (!this.$optionSet.eq(i).hasClass('ik_select_option_disabled')) {
					this._moveTo(i);
					break;
				}
			}
		},

		_moveToPrevActive: function (condition) {
			var $option;
			for (var i = this.hoverIndex - 1; i >= 0; i--) {
				$option = this.$optionSet.eq(i);
				if (!$option.hasClass('ik_select_option_disabled') && (typeof condition === 'undefined' || condition($option.position().top))) {
					this._moveTo(i);
					break;
				}
			}
		},

		_moveToNextActive: function (condition) {
			var $option;
			for (var i = this.hoverIndex + 1; i < this.$optionSet.length; i++) {
				$option = this.$optionSet.eq(i);
				if (!$option.hasClass('ik_select_option_disabled') && (typeof condition === 'undefined' || condition($option.position().top))) {
					this._moveTo(i);
					break;
				}
			}
		},

		// when focus is on the original select add a focus class to the fake one
		_elFocus:  function () {
			var wrapperOffsetTop, wrapperHeight, windowScrollTop, windowHeight;
			if (this.isDisabled) {
				return this;
			}
			this.$link.addClass('ik_select_link_focus');

			// scroll the window so that focused select is visible
			wrapperOffsetTop = this.$wrapper.offset().top;
			wrapperHeight = this.$wrapper.height();
			windowScrollTop = $window.scrollTop();
			windowHeight = $window.height();
			if ((wrapperOffsetTop + wrapperHeight > windowScrollTop + windowHeight) ||
				(wrapperOffsetTop < windowScrollTop)) {
				$window.scrollTop(wrapperOffsetTop - windowHeight / 2);
			}
		},

		// when focus lost remove the focus class from the fake one
		_elBlur: function () {
			this.$link.removeClass('ik_select_link_focus');
		},

		// filtering on key up
		_filterKeyup: function () {
			var filterVal = $.trim(this.$filter.val());
			var filterValOld;
			this.$listInner.show();

			if (typeof this.searchIndexes === 'undefined') {
				this.$optionSetOriginal = this.$optionSet;
				this.searchIndexes = $.makeArray(this.$optionSet.map(function (optionIndex, option) {
					return $(option).text().toLowerCase();
				}));
			}

			if (filterVal !== filterValOld) {
				if (filterVal === '') {
					this.$optionSet = this.$optionSetOriginal.show();
					this.$optgroupSet.show();
					this.$nothingFoundText.remove();
				} else {
					this.$optionSet = $([]);
					this.$optgroupSet.show();
					this.$optionSetOriginal.each($.proxy(function (optionIndex, option) {
						var $option = $(option);
						if (this.searchIndexes[optionIndex].indexOf(filterVal.toLowerCase()) >= 0) {
							this.$optionSet = this.$optionSet.add($option);
							$option.show();
						} else {
							$option.hide();
						}
					}, this));

					if (this.$optionSet.length) {
						this.$nothingFoundText.remove();
						this.$optgroupSet.each(function (optgroupIndex, optgroup) {
							var $optgroup = $(optgroup);
							if (!$('.ik_select_option:visible', $optgroup).length) {
								$optgroup.hide();
							}
						});

						if (!this.$hover.is(':visible')) {
							this._moveToFirstActive();
						}
					} else {
						this.$listInner.hide();
						this.$list.append(this.$nothingFoundText);
					}
				}

				filterValOld = filterVal;
			}
		},

		// sync selected option in the fake select with the original one
		_syncFakeOption: function () {
			this.el.selectedIndex = this.hoverIndex;
		},

		// sync selected option in the original select with the fake one
		_syncOriginalOption: function () {
			this._makeOptionActive(this.el.selectedIndex);
		},

		// sets fixed height to dropdown if it's bigger than ddMaxHeight
		_fixHeight: function () {
			this.$dropdown.show();
			this.$listInner.css('height', 'auto');
			if (this.$listInner.height() > this.options.ddMaxHeight) {
				this.$listInner.css({
					overflow: 'auto',
					height: this.options.ddMaxHeight,
					position: 'relative'
				});
			}
			this.$dropdown.hide();
		},

		// calculates the needed data for showing the dropdown
		redraw: function () {
			var maxWidthOuter, scrollbarWidth, wrapperParentWidth;

			if (this.options.filter) {
				this.$filter.hide();
			}

			this.$wrapper.css({
				position: 'relative'
			});
			this.$dropdown.css({
				position: 'absolute',
				zIndex: 9998,
				width: '100%'
			});
			this.$list.css({
				position: 'relative'
			});

			this._fixHeight();

			// width calculations for the fake select when "autoWidth" is "true"
			if (this.options.dynamicWidth || this.options.autoWidth || this.options.ddFullWidth) {
				this.$wrapper.width('');

				this.$dropdown.show().width(9999);
				this.$listInner.css('float', 'left');
				this.$list.css('float', 'left');
				maxWidthOuter = this.$list.outerWidth(true);
				scrollbarWidth = this.$listInner.width() - this.$listInnerUl.width();
				this.$list.css('float', '');
				this.$listInner.css('float', '');
				this.$dropdown.css('width', '100%');

				if (this.options.ddFullWidth) {
					this.$dropdown.width(maxWidthOuter + scrollbarWidth);
				}

				if (this.options.dynamicWidth) {
					this.$wrapper.css({
						display: 'inline-block',
						width: 'auto',
						verticalAlign: 'top'
					});
				} else if (this.options.autoWidth) {
					this.$wrapper.width(maxWidthOuter + (this.options.equalWidths ? scrollbarWidth : 0)).addClass('ik_select_autowidth');
				}

				wrapperParentWidth = this.$wrapper.parent().width();
				if (this.$wrapper.width() > wrapperParentWidth) {
					this.$wrapper.width(wrapperParentWidth);
				}
			}

			if (this.options.filter) {
				this.$filter.show().outerWidth(this.$filterWrap.width());
			}

			this.$dropdown.hide();

			// hide the original select
			this.$el.css({
				position: 'absolute',
				margin: 0,
				padding: 0,
				top: 0,
				left: -9999
			});

			// show the original select in mobile browsers
			if ($.browser.mobile) {
				this.$el.css({
					opacity: 0,
					left: 0,
					height: this.$wrapper.height(),
					width: this.$wrapper.width()
				});
			}
		},

		// creates or recreates dropdown and sets selected options's text into fake select
		reset: function () {
			var html = '';

			// init fake select's text
			this.$linkText.html(this.$el.val());

			this.$listInner.empty();

			// creating an ul>li list identical to the original dropdown
			html = '<ul>';
			this.$el.children().each($.proxy(function (childIndex, child) {
				var $child = $(child);
				var tagName = child.tagName.toLowerCase();
				var options;
				if (tagName === 'optgroup') {
					options = $child.children().map($.proxy(function (optionIndex, option) {
						return this._generateOptionObject($(option));
					}, this));
					options = $.makeArray(options);
					html += this._renderListOptgroup({
						label: $child.attr('label') || '&nbsp;',
						isDisabled: $child.is(':disabled'),
						options: options
					});
				} else if (tagName === 'option') {
					html += this._renderListOption(this._generateOptionObject($child));
				}
			}, this));
			html += '</ul>';
			this.$listInner.append(html);
			this._syncOriginalOption();

			this.$listInnerUl = $('> ul', this.$listInner);
			this.$optgroupSet = $('.ik_select_optgroup', this.$listInner);
			this.$optionSet = $('.ik_select_option', this.$listInner);
		},

		// hides dropdown
		hideDropdown: function () {
			if (this.options.filter) {
				this.$filter.val('');
				this._filterKeyup();
			}

			this.$dropdown.hide().appendTo(this.$wrapper).css({
				'left': '',
				'top': ''
			});
			if (this.options.extractLink) {
				this.$wrapper.outerWidth(this.$wrapper.data('outerWidth'));
				this.$wrapper.height('');
				this.$link.removeClass('ik_select_link_extracted').css({
					position: '',
					top: '',
					left: '',
					zIndex: ''
				}).prependTo(this.$wrapper);
			}
			instOpened = null;
			this.$el.focus();

			this.options.onHide(this);
			this.$el.trigger('ikhide', this);
		},

		// shows dropdown
		showDropdown: function () {
			var dropdownOffset, dropdownOuterWidth, dropdownOuterHeight;
			var wrapperOffset, wrapperOuterWidth;
			var windowWidth, windowHeight, windowScroll;
			var linkOffset;

			if (instOpened === this || !this.$optionSet.length) {
				return;
			} else if (instOpened) {
				instOpened.hideDropdown();
			}

			this._syncOriginalOption();
			if($('.show_un_props').length)
				this.$dropdown.addClass('show_un_props');
			else if($('.unshow_un_props').length)
				this.$dropdown.addClass('unshow_un_props');
			this.$dropdown.show();

			dropdownOffset = this.$dropdown.offset();
			dropdownOuterWidth = this.$dropdown.outerWidth(true);
			dropdownOuterHeight = this.$dropdown.outerHeight(true);
			wrapperOffset = this.$wrapper.offset();
			windowWidth = $window.width();
			windowHeight = $window.height();
			windowScroll = $window.scrollTop();

			// if the dropdown's right border is beyond window's edge then move the dropdown to the left so that it fits
			if (this.options.ddFullWidth && wrapperOffset.left + dropdownOuterWidth > windowWidth) {
				dropdownOffset.left = windowWidth - dropdownOuterWidth;
			}

			// if the dropdown's bottom border is beyond window's edge then move the dropdown to the top so that it fits
			if (dropdownOffset.top + dropdownOuterHeight > windowScroll + windowHeight) {
				dropdownOffset.top = windowScroll + windowHeight - dropdownOuterHeight;
			}

			this.$dropdown.css({
				left: dropdownOffset.left,
				top: dropdownOffset.top,
				width: this.$dropdown.width()
			}).appendTo('body');

			if (this.options.extractLink) {
				linkOffset = this.$link.offset();
				wrapperOuterWidth = this.$wrapper.outerWidth();
				this.$wrapper.data('outerWidth', wrapperOuterWidth);
				this.$wrapper.outerWidth(wrapperOuterWidth);
				this.$wrapper.outerHeight(this.$wrapper.outerHeight());
				this.$link.outerWidth(this.$link.outerWidth());
				this.$link.addClass('ik_select_link_extracted').css({
					position: 'absolute',
					top: linkOffset.top,
					left: linkOffset.left,
					zIndex: 9999
				}).appendTo('body');
			}

			this.$listInner.scrollTop(this.$active.position().top - this.$list.height() / 2);

			if (this.options.filter) {
				this.$filter.focus();
			} else {
				this.$el.focus();
			}

			instOpened = this;

			this.options.onShow(this);
			this.$el.trigger('ikshow', this);
		},

		_generateOptionObject: function ($option) {
			
			return {
				value: $option.val(),
				label: $option.html() || '&nbsp;',
				isDisabled: $option.is(':disabled'),
				dataParam: $option.data(),
				className: $option.attr('class'),
				title: $option.attr('title')
			};
		},

		// generates option code for the fake dropdown
		_renderListOption: function (option) {
			var html;
			var disabledClass = option.isDisabled ? ' ik_select_option_disabled' : '';
			var imgClass = option.dataParam.img_src ? ' img' : '';
			var missingClass = option.className=='hidden' ? ' missing' : '';
			var title = option.title;
			html = '<li class="ik_select_option' + disabledClass + imgClass + missingClass + '" title="'+title+'" data-value="' + option.value + '">';
			html += '<span class="ik_select_option_label" title="'+title+'">';
			if(option.dataParam.img_src){
				html += '<span class="icon_color" style="background: url('+option.dataParam.img_src+')"></span>';
			}
			html += option.label;
			html += '</span>';
			html += '</li>';
			return html;
		},

		// generates optgroup code for the fake dropdown
		_renderListOptgroup: function (optgroup) {
			var html;
			var disabledClass = optgroup.isDisabled ? ' ik_select_optgroup_disabled' : '';
			html = '<li class="ik_select_optgroup' + disabledClass + '">';
			html += '<div class="ik_select_optgroup_label">' + optgroup.label + '</div>';
			html += '<ul>';
			if ($.isArray(optgroup.options)) {
				$.each(optgroup.options, $.proxy(function (optionIndex, option) {
					html += this._renderListOption({
						value: option.value,
						label: option.label || '&nbsp;',
						isDisabled: option.isDisabled
					});
				}, this));
			}
			html += '</ul>';
			html += '</li>';
			return html;
		},

		// generates option code for the select
		_renderOption: function (option) {
			return '<option value="' + option.value + '">' + option.label + '</option>';
		},

		// generates optgroup code for the select
		_renderOptgroup: function (optgroup) {
			var html;
			html = '<optgroup label="' + optgroup.label + '">';
			if ($.isArray(optgroup.options)) {
				$.each(optgroup.options, $.proxy(function (optionIndex, option) {
					html += this._renderOption(option);
				}, this));
			}
			html += '</option>';
			return html;
		},

		addOptions: function (options, optionIndex, optgroupIndex) {
			var listHtml = '', selectHtml = '';
			var $destinationUl = this.$listInnerUl;
			var $destinationOptgroup = this.$el;
			var $ulOptions, $optgroupOptions;

			options = $.isArray(options) ? options : [options];

			$.each(options, $.proxy(function (index, option) {
				listHtml += this._renderListOption(option);
				selectHtml += this._renderOption(option);
			}, this));

			if ($.isNumeric(optgroupIndex) && optgroupIndex < this.$optgroupSet.length) {
				$destinationUl = this.$optgroupSet.eq(optgroupIndex);
				$destinationOptgroup = $('optgroup', this.$el).eq(optgroupIndex);
			}
			if ($.isNumeric(optionIndex)) {
				$ulOptions = $('.ik_select_option', $destinationUl);
				if (optionIndex < $ulOptions.length) {
					$ulOptions.eq(optionIndex).before(listHtml);
					$optgroupOptions = $('option', $destinationOptgroup);
					$optgroupOptions.eq(optionIndex).before(selectHtml);
				}
			}
			if (!$optgroupOptions) {
				$destinationUl.append(listHtml);
				$destinationOptgroup.append(selectHtml);
			}

			this.$optionSet = $('.ik_select_option', this.$listInner);
			this._fixHeight();
		},

		addOptgroups: function (optgroups, optgroupIndex) {
			var listHtml = '', selectHtml = '';
			if (!optgroups) {
				return;
			}
			optgroups = $.isArray(optgroups) ? optgroups : [optgroups];

			$.each(optgroups, $.proxy(function (optgroupIndex, optgroup) {
				listHtml += this._renderListOptgroup(optgroup);
				selectHtml += this._renderOptgroup(optgroup);
			}, this));

			if ($.isNumeric(optgroupIndex) && optgroupIndex < this.$optgroupSet.length) {
				this.$optgroupSet.eq(optgroupIndex).before(listHtml);
				$('optgroup', this.$el).eq(optgroupIndex).before(selectHtml);
			} else {
				this.$listInnerUl.append(listHtml);
				this.$el.append(selectHtml);
			}

			this.$optgroupSet = $('.ik_select_optgroup', this.$listInner);
			this.$optionSet = $('.ik_select_option', this.$listInner);
			this._fixHeight();
		},

		removeOptions: function (optionIndexes, optgroupIndex) {
			var $removeList = $([]);
			var $listContext;
			var $selectContext;

			if ($.isNumeric(optgroupIndex)) {
				if (optgroupIndex < 0) {
					$listContext = $('> .ik_select_option', this.$listInnerUl);
					$selectContext = $('> option', this.$el);
				} else if (optgroupIndex < this.$optgroupSet.length) {
					$listContext = $('.ik_select_option', this.$optgroupSet.eq(optgroupIndex));
					$selectContext = $('optgroup', this.$el).eq(optgroupIndex).find('option');
				}
			}
			if (!$listContext) {
				$listContext = this.$optionSet;
				$selectContext = $(this.el.options);
			}

			if (!$.isArray(optionIndexes)) {
				optionIndexes = [optionIndexes];
			}

			$.each(optionIndexes, $.proxy(function (index, optionIndex) {
				if (optionIndex < $listContext.length) {
					$removeList = $removeList.add($listContext.eq(optionIndex)).add($selectContext.eq(optionIndex));
				}
			}, this));

			$removeList.remove();
			this.$optionSet = $('.ik_select_option', this.$listInner);
			this._syncOriginalOption();
			this._fixHeight();
		},

		removeOptgroups: function (optgroupIndexes) {
			var $removeList = $([]);
			var $selectOptgroupSet = $('optgroup', this.el);

			if (!$.isArray(optgroupIndexes)) {
				optgroupIndexes = [optgroupIndexes];
			}

			$.each(optgroupIndexes, $.proxy(function (index, optgroupIndex) {
				if (optgroupIndex < this.$optgroupSet.length) {
					$removeList = $removeList.add(this.$optgroupSet.eq(optgroupIndex)).add($selectOptgroupSet.eq(optgroupIndex));
				}
			}, this));

			$removeList.remove();
			this.$optionSet = $('.ik_select_option', this.$listInner);
			this.$optgroupSet = $('.ik_select_optgroup', this.$listInner);
			this._syncOriginalOption();
			this._fixHeight();
		},

		// disable select
		disable: function () {
			this.toggle(false);
		},

		// enable select
		enable: function () {
			this.toggle(true);
		},

		// toggle select
		toggle: function (bool) {
			this.isDisabled = typeof bool !== 'undefined' ? !bool : !this.isDisabled;
			this.$el.prop('disabled', this.isDisabled);
			this.$link.toggleClass('ik_select_link_disabled', this.isDisabled);
		},

		// make option selected by value
		select: function (value, isIndex) {
			if (!isIndex) {
				this.$el.val(value);
			} else {
				this.el.selectedIndex = value;
			}
			this._syncOriginalOption();
		},

		disableOptgroups: function (optgroupIndexes) {
			this.toggleOptgroups(optgroupIndexes, false);
		},

		enableOptgroups: function (optgroupIndexes) {
			this.toggleOptgroups(optgroupIndexes, true);
		},

		toggleOptgroups: function (optgroupIndexes, bool) {
			if (!$.isArray(optgroupIndexes)) {
				optgroupIndexes = [optgroupIndexes];
			}

			$.each(optgroupIndexes, $.proxy(function (index, optgroupIndex) {
				var isDisabled;
				var $optionSet, indexes = [], indexFirst;
				var $optgroup = $('optgroup', this.$el).eq(optgroupIndex);
				isDisabled = typeof bool !== 'undefined' ? bool : $optgroup.prop('disabled');
				$optgroup.prop('disabled', !isDisabled);
				this.$optgroupSet.eq(optgroupIndex).toggleClass('ik_select_optgroup_disabled', !isDisabled);

				$optionSet = $('option', $optgroup);
				indexFirst = $(this.el.options).index($optionSet.eq(0));
				for (var i = indexFirst; i < indexFirst + $optionSet.length; i++) {
					indexes.push(i);
				}
				this.toggleOptions(indexes, true, isDisabled);
			}, this));

			this._syncOriginalOption();
		},

		disableOptions: function (lookupValues, isIndex) {
			this.toggleOptions(lookupValues, isIndex, false);
		},

		enableOptions: function (lookupValues, isIndex) {
			this.toggleOptions(lookupValues, isIndex, true);
		},

		toggleOptions: function (lookupValues, isIndex, bool) {
			var $selectOptionSet = $('option', this.el);
			if (!$.isArray(lookupValues)) {
				lookupValues = [lookupValues];
			}

			var toggleOption = $.proxy(function ($option, optionIndex) {
				var isDisabled = typeof bool !== 'undefined' ? bool : $option.prop('disabled');
				$option.prop('disabled', !isDisabled);
				this.$optionSet.eq(optionIndex).toggleClass('ik_select_option_disabled', !isDisabled);
			}, this);

			$.each(lookupValues, function (index, lookupValue) {
				if (!isIndex) {
					$selectOptionSet.each(function (optionIndex, option) {
						var $option = $(option);
						if ($option.val() === lookupValue) {
							toggleOption($option, optionIndex);
							return this;
						}
					});
				} else {
					toggleOption($selectOptionSet.eq(lookupValue), lookupValue);
				}
			});

			this._syncOriginalOption();
		},

		// detach plugin from the orignal select
		detach: function () {
			this.$el.off('.ikSelect').css({
				width: '',
				height: '',
				left: '',
				top: '',
				position: '',
				margin: '',
				padding: ''
			});

			this.$wrapper.before(this.$el);
			this.$wrapper.remove();
			this.$el.removeData('plugin_ikSelect');
		}
	});

	$.fn.ikSelect = function (options) {
		var args;
		//do nothing if opera mini
		if ($.browser.operamini) {
			return this;
		}

		args = Array.prototype.slice.call(arguments, 1);

		return this.each(function () {
			var plugin;
			if (!$.data(this, 'plugin_ikSelect')) {
				$.data(this, 'plugin_ikSelect', new IkSelect(this, options));
			} else if (typeof options === 'string') {
				plugin = $.data(this, 'plugin_ikSelect');
				if (typeof plugin[options] === 'function') {
					plugin[options].apply(plugin, args);
				}
			}
		});
	};

	$.ikSelect = {
		extendDefaults: function (options) {
			$.extend(defaults, options);
		}
	};

	$(document).bind('click.ikSelect', function () {
		if (instOpened) {
			instOpened.hideDropdown();
		}
	});
})(jQuery, window, document);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:80:"/bitrix/templates/aspro_next/js/jquery.mobile.custom.touch.min.js?15438444907784";s:6:"source";s:65:"/bitrix/templates/aspro_next/js/jquery.mobile.custom.touch.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! jQuery Mobile v1.4.5 | Copyright 2010, 2014 jQuery Foundation, Inc. | jquery.org/license */

(function(e,t,n){typeof define=="function"&&define.amd?define(["jquery"],function(r){return n(r,e,t),r.mobile}):n(e.jQuery,e,t)})(this,document,function(e,t,n,r){(function(e,t,n,r){function T(e){while(e&&typeof e.originalEvent!="undefined")e=e.originalEvent;return e}function N(t,n){var i=t.type,s,o,a,l,c,h,p,d,v;t=e.Event(t),t.type=n,s=t.originalEvent,o=e.event.props,i.search(/^(mouse|click)/)>-1&&(o=f);if(s)for(p=o.length,l;p;)l=o[--p],t[l]=s[l];i.search(/mouse(down|up)|click/)>-1&&!t.which&&(t.which=1);if(i.search(/^touch/)!==-1){a=T(s),i=a.touches,c=a.changedTouches,h=i&&i.length?i[0]:c&&c.length?c[0]:r;if(h)for(d=0,v=u.length;d<v;d++)l=u[d],t[l]=h[l]}return t}function C(t){var n={},r,s;while(t){r=e.data(t,i);for(s in r)r[s]&&(n[s]=n.hasVirtualBinding=!0);t=t.parentNode}return n}function k(t,n){var r;while(t){r=e.data(t,i);if(r&&(!n||r[n]))return t;t=t.parentNode}return null}function L(){g=!1}function A(){g=!0}function O(){E=0,v.length=0,m=!1,A()}function M(){L()}function _(){D(),c=setTimeout(function(){c=0,O()},e.vmouse.resetTimerDuration)}function D(){c&&(clearTimeout(c),c=0)}function P(t,n,r){var i;if(r&&r[t]||!r&&k(n.target,t))i=N(n,t),e(n.target).trigger(i);return i}function H(t){var n=e.data(t.target,s),r;!m&&(!E||E!==n)&&(r=P("v"+t.type,t),r&&(r.isDefaultPrevented()&&t.preventDefault(),r.isPropagationStopped()&&t.stopPropagation(),r.isImmediatePropagationStopped()&&t.stopImmediatePropagation()))}function B(t){var n=T(t).touches,r,i,o;n&&n.length===1&&(r=t.target,i=C(r),i.hasVirtualBinding&&(E=w++,e.data(r,s,E),D(),M(),d=!1,o=T(t).touches[0],h=o.pageX,p=o.pageY,P("vmouseover",t,i),P("vmousedown",t,i)))}function j(e){if(g)return;d||P("vmousecancel",e,C(e.target)),d=!0,_()}function F(t){if(g)return;var n=T(t).touches[0],r=d,i=e.vmouse.moveDistanceThreshold,s=C(t.target);d=d||Math.abs(n.pageX-h)>i||Math.abs(n.pageY-p)>i,d&&!r&&P("vmousecancel",t,s),P("vmousemove",t,s),_()}function I(e){if(g)return;A();var t=C(e.target),n,r;P("vmouseup",e,t),d||(n=P("vclick",e,t),n&&n.isDefaultPrevented()&&(r=T(e).changedTouches[0],v.push({touchID:E,x:r.clientX,y:r.clientY}),m=!0)),P("vmouseout",e,t),d=!1,_()}function q(t){var n=e.data(t,i),r;if(n)for(r in n)if(n[r])return!0;return!1}function R(){}function U(t){var n=t.substr(1);return{setup:function(){q(this)||e.data(this,i,{});var r=e.data(this,i);r[t]=!0,l[t]=(l[t]||0)+1,l[t]===1&&b.bind(n,H),e(this).bind(n,R),y&&(l.touchstart=(l.touchstart||0)+1,l.touchstart===1&&b.bind("touchstart",B).bind("touchend",I).bind("touchmove",F).bind("scroll",j))},teardown:function(){--l[t],l[t]||b.unbind(n,H),y&&(--l.touchstart,l.touchstart||b.unbind("touchstart",B).unbind("touchmove",F).unbind("touchend",I).unbind("scroll",j));var r=e(this),s=e.data(this,i);s&&(s[t]=!1),r.unbind(n,R),q(this)||r.removeData(i)}}}var i="virtualMouseBindings",s="virtualTouchID",o="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),u="clientX clientY pageX pageY screenX screenY".split(" "),a=e.event.mouseHooks?e.event.mouseHooks.props:[],f=e.event.props.concat(a),l={},c=0,h=0,p=0,d=!1,v=[],m=!1,g=!1,y="addEventListener"in n,b=e(n),w=1,E=0,S,x;e.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(x=0;x<o.length;x++)e.event.special[o[x]]=U(o[x]);y&&n.addEventListener("click",function(t){var n=v.length,r=t.target,i,o,u,a,f,l;if(n){i=t.clientX,o=t.clientY,S=e.vmouse.clickDistanceThreshold,u=r;while(u){for(a=0;a<n;a++){f=v[a],l=0;if(u===r&&Math.abs(f.x-i)<S&&Math.abs(f.y-o)<S||e.data(u,s)===f.touchID){t.preventDefault(),t.stopPropagation();return}}u=u.parentNode}}},!0)})(e,t,n),function(e){e.mobile={}}(e),function(e,t){var r={touch:"ontouchend"in n};e.mobile.support=e.mobile.support||{},e.extend(e.support,r),e.extend(e.mobile.support,r)}(e),function(e,t,r){function l(t,n,i,s){var o=i.type;i.type=n,s?e.event.trigger(i,r,t):e.event.dispatch.call(t,i),i.type=o}var i=e(n),s=e.mobile.support.touch,o="touchmove scroll",u=s?"touchstart":"mousedown",a=s?"touchend":"mouseup",f=s?"touchmove":"mousemove";e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(t,n){e.fn[n]=function(e){return e?this.bind(n,e):this.trigger(n)},e.attrFn&&(e.attrFn[n]=!0)}),e.event.special.scrollstart={enabled:!0,setup:function(){function s(e,n){r=n,l(t,r?"scrollstart":"scrollstop",e)}var t=this,n=e(t),r,i;n.bind(o,function(t){if(!e.event.special.scrollstart.enabled)return;r||s(t,!0),clearTimeout(i),i=setTimeout(function(){s(t,!1)},50)})},teardown:function(){e(this).unbind(o)}},e.event.special.tap={tapholdThreshold:750,emitTapOnTaphold:!0,setup:function(){var t=this,n=e(t),r=!1;n.bind("vmousedown",function(s){function a(){clearTimeout(u)}function f(){a(),n.unbind("vclick",c).unbind("vmouseup",a),i.unbind("vmousecancel",f)}function c(e){f(),!r&&o===e.target?l(t,"tap",e):r&&e.preventDefault()}r=!1;if(s.which&&s.which!==1)return!1;var o=s.target,u;n.bind("vmouseup",a).bind("vclick",c),i.bind("vmousecancel",f),u=setTimeout(function(){e.event.special.tap.emitTapOnTaphold||(r=!0),l(t,"taphold",e.Event("taphold",{target:o}))},e.event.special.tap.tapholdThreshold)})},teardown:function(){e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"),i.unbind("vmousecancel")}},e.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:30,getLocation:function(e){var n=t.pageXOffset,r=t.pageYOffset,i=e.clientX,s=e.clientY;if(e.pageY===0&&Math.floor(s)>Math.floor(e.pageY)||e.pageX===0&&Math.floor(i)>Math.floor(e.pageX))i-=n,s-=r;else if(s<e.pageY-r||i<e.pageX-n)i=e.pageX-n,s=e.pageY-r;return{x:i,y:s}},start:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y],origin:e(t.target)}},stop:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y]}},handleSwipe:function(t,n,r,i){if(n.time-t.time<e.event.special.swipe.durationThreshold&&Math.abs(t.coords[0]-n.coords[0])>e.event.special.swipe.horizontalDistanceThreshold&&Math.abs(t.coords[1]-n.coords[1])<e.event.special.swipe.verticalDistanceThreshold){var s=t.coords[0]>n.coords[0]?"swipeleft":"swiperight";return l(r,"swipe",e.Event("swipe",{target:i,swipestart:t,swipestop:n}),!0),l(r,s,e.Event(s,{target:i,swipestart:t,swipestop:n}),!0),!0}return!1},eventInProgress:!1,setup:function(){var t,n=this,r=e(n),s={};t=e.data(this,"mobile-events"),t||(t={length:0},e.data(this,"mobile-events",t)),t.length++,t.swipe=s,s.start=function(t){if(e.event.special.swipe.eventInProgress)return;e.event.special.swipe.eventInProgress=!0;var r,o=e.event.special.swipe.start(t),u=t.target,l=!1;s.move=function(t){if(!o||t.isDefaultPrevented())return;r=e.event.special.swipe.stop(t),l||(l=e.event.special.swipe.handleSwipe(o,r,n,u),l&&(e.event.special.swipe.eventInProgress=!1)),Math.abs(o.coords[0]-r.coords[0])>e.event.special.swipe.scrollSupressionThreshold&&t.preventDefault()},s.stop=function(){l=!0,e.event.special.swipe.eventInProgress=!1,i.off(f,s.move),s.move=null},i.on(f,s.move).one(a,s.stop)},r.on(u,s.start)},teardown:function(){var t,n;t=e.data(this,"mobile-events"),t&&(n=t.swipe,delete t.swipe,t.length--,t.length===0&&e.removeData(this,"mobile-events")),n&&(n.start&&e(this).off(u,n.start),n.move&&i.off(f,n.move),n.stop&&i.off(a,n.stop))}},e.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe.left",swiperight:"swipe.right"},function(t,n){e.event.special[t]={setup:function(){e(this).bind(n,e.noop)},teardown:function(){e(this).unbind(n)}}})}(e,this)});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:66:"/bitrix/templates/aspro_next/js/jquery.dotdotdot.js?15438444905908";s:6:"source";s:51:"/bitrix/templates/aspro_next/js/jquery.dotdotdot.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(t,e){function n(t,e,n){var r=t.children(),o=!1;t.empty();for(var i=0,d=r.length;d>i;i++){var l=r.eq(i);if(t.append(l),n&&t.append(n),a(t,e)){l.remove(),o=!0;break}n&&n.detach()}return o}function r(e,n,i,d,l){var s=!1,c="a table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style",u="script, .dotdotdot-keep";return e.contents().detach().each(function(){var f=this,h=t(f);if("undefined"==typeof f||3==f.nodeType&&0==t.trim(f.data).length)return!0;if(h.is(u))e.append(h);else{if(s)return!0;e.append(h),!l||h.is(d.after)||h.find(d.after).length||e[e.is(c)?"after":"append"](l),a(i,d)&&(s=3==f.nodeType?o(h,n,i,d,l):r(h,n,i,d,l),s||(h.detach(),s=!0)),s||l&&l.detach()}}),s}function o(e,n,r,o,d){var c=e[0];if(!c)return!1;var f=s(c),h=-1!==f.indexOf(" ")?" ":"???",p="letter"==o.wrap?"":h,g=f.split(p),v=-1,w=-1,y=0,b=g.length-1;for(o.fallbackToLetter&&0==y&&0==b&&(p="",g=f.split(p),b=g.length-1);b>=y&&(0!=y||0!=b);){var m=Math.floor((y+b)/2);if(m==w)break;w=m,l(c,g.slice(0,w+1).join(p)+o.ellipsis),a(r,o)?(b=w,o.fallbackToLetter&&0==y&&0==b&&(p="",g=g[0].split(p),v=-1,w=-1,y=0,b=g.length-1)):(v=w,y=w)}if(-1==v||1==g.length&&0==g[0].length){var T=e.parent();e.detach();var x=d&&d.closest(T).length?d.length:0;T.contents().length>x?c=u(T.contents().eq(-1-x),n):(c=u(T,n,!0),x||T.detach()),c&&(f=i(s(c),o),l(c,f),x&&d&&t(c).parent().append(d))}else f=i(g.slice(0,v+1).join(p),o),l(c,f);return!0}function a(t,e){return t.innerHeight()>e.maxHeight}function i(e,n){for(;t.inArray(e.slice(-1),n.lastCharacter.remove)>-1;)e=e.slice(0,-1);return t.inArray(e.slice(-1),n.lastCharacter.noEllipsis)<0&&(e+=n.ellipsis),e}function d(t){return{width:t.innerWidth(),height:t.innerHeight()}}function l(t,e){t.innerText?t.innerText=e:t.nodeValue?t.nodeValue=e:t.textContent&&(t.textContent=e)}function s(t){return t.innerText?t.innerText:t.nodeValue?t.nodeValue:t.textContent?t.textContent:""}function c(t){do t=t.previousSibling;while(t&&1!==t.nodeType&&3!==t.nodeType);return t}function u(e,n,r){var o,a=e&&e[0];if(a){if(!r){if(3===a.nodeType)return a;if(t.trim(e.text()))return u(e.contents().last(),n)}for(o=c(a);!o;){if(e=e.parent(),e.is(n)||!e.length)return!1;o=c(e[0])}if(o)return u(t(o),n)}return!1}function f(e,n){return e?"string"==typeof e?(e=t(e,n),e.length?e:!1):e.jquery?e:!1:!1}function h(t){for(var e=t.innerHeight(),n=["paddingTop","paddingBottom"],r=0,o=n.length;o>r;r++){var a=parseInt(t.css(n[r]),10);isNaN(a)&&(a=0),e-=a}return e}if(!t.fn.dotdotdot){t.fn.dotdotdot=function(e){if(0==this.length)return t.fn.dotdotdot.debug('No element found for "'+this.selector+'".'),this;if(this.length>1)return this.each(function(){t(this).dotdotdot(e)});var o=this;o.data("dotdotdot")&&o.trigger("destroy.dot"),o.data("dotdotdot-style",o.attr("style")||""),o.css("word-wrap","break-word"),"nowrap"===o.css("white-space")&&o.css("white-space","normal"),o.bind_events=function(){return o.bind("update.dot",function(e,d){e.preventDefault(),e.stopPropagation(),l.maxHeight="number"==typeof l.height?l.height:h(o),l.maxHeight+=l.tolerance,"undefined"!=typeof d&&(("string"==typeof d||"nodeType"in d&&1===d.nodeType)&&(d=t("<div />").append(d).contents()),d instanceof t&&(i=d)),g=o.wrapInner('<div class="dotdotdot" />').children(),g.contents().detach().end().append(i.clone(!0)).find("br").replaceWith("  <br />  ").end().css({height:"auto",width:"auto",border:"none",padding:0,margin:0});var c=!1,u=!1;return s.afterElement&&(c=s.afterElement.clone(!0),c.show(),s.afterElement.detach()),a(g,l)&&(u="children"==l.wrap?n(g,l,c):r(g,o,g,l,c)),g.replaceWith(g.contents()),g=null,t.isFunction(l.callback)&&l.callback.call(o[0],u,i),s.isTruncated=u,u}).bind("isTruncated.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(o[0],s.isTruncated),s.isTruncated}).bind("originalContent.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(o[0],i),i}).bind("destroy.dot",function(t){t.preventDefault(),t.stopPropagation(),o.unwatch().unbind_events().contents().detach().end().append(i).attr("style",o.data("dotdotdot-style")||"").data("dotdotdot",!1)}),o},o.unbind_events=function(){return o.unbind(".dot"),o},o.watch=function(){if(o.unwatch(),"window"==l.watch){var e=t(window),n=e.width(),r=e.height();e.bind("resize.dot"+s.dotId,function(){n==e.width()&&r==e.height()&&l.windowResizeFix||(n=e.width(),r=e.height(),u&&clearInterval(u),u=setTimeout(function(){o.trigger("update.dot")},100))})}else c=d(o),u=setInterval(function(){if(o.is(":visible")){var t=d(o);(c.width!=t.width||c.height!=t.height)&&(o.trigger("update.dot"),c=t)}},500);return o},o.unwatch=function(){return t(window).unbind("resize.dot"+s.dotId),u&&clearInterval(u),o};var i=o.contents(),l=t.extend(!0,{},t.fn.dotdotdot.defaults,e),s={},c={},u=null,g=null;return l.lastCharacter.remove instanceof Array||(l.lastCharacter.remove=t.fn.dotdotdot.defaultArrays.lastCharacter.remove),l.lastCharacter.noEllipsis instanceof Array||(l.lastCharacter.noEllipsis=t.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis),s.afterElement=f(l.after,o),s.isTruncated=!1,s.dotId=p++,o.data("dotdotdot",!0).bind_events().trigger("update.dot"),l.watch&&o.watch(),o},t.fn.dotdotdot.defaults={ellipsis:"... ",wrap:"word",fallbackToLetter:!0,lastCharacter:{},tolerance:0,callback:null,after:null,height:null,watch:!1,windowResizeFix:!0},t.fn.dotdotdot.defaultArrays={lastCharacter:{remove:[" ","???",",",";",".","!","?"],noEllipsis:[]}},t.fn.dotdotdot.debug=function(t){};var p=1,g=t.fn.html;t.fn.html=function(n){return n!=e&&!t.isFunction(n)&&this.data("dotdotdot")?this.trigger("update",[n]):g.apply(this,arguments)};var v=t.fn.text;t.fn.text=function(n){return n!=e&&!t.isFunction(n)&&this.data("dotdotdot")?(n=t("<div />").text(n).html(),this.trigger("update",[n])):v.apply(this,arguments)}}}(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:63:"/bitrix/templates/aspro_next/js/rating_likes.js?154384449010797";s:6:"source";s:47:"/bitrix/templates/aspro_next/js/rating_likes.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
if (!BXRL)
{
	var BXRL = {};
	var BXRLW = null;
}

RatingLikes = function(likeId, entityTypeId, entityId, available, userId, localize, template, pathToUserProfile, pathToAjax)
{
	this.enabled = true;
	this.likeId = likeId;
	this.entityTypeId = entityTypeId;
	this.entityId = entityId;
	this.available = (available == 'Y');
	this.userId = userId;
	this.localize = localize;
	this.template = template;
	this.pathToUserProfile = pathToUserProfile;
	this.pathToAjax = typeof(pathToAjax) == "string"? pathToAjax: '/bitrix/components/bitrix/rating.vote/vote.ajax.php';

	this.box = BX('bx-ilike-button-'+likeId);
	if (this.box === null)
	{
		this.enabled = false;
		return false;
	}

	this.button = BX.findChild(this.box, {className:'bx-ilike-left-wrap'}, true, false);
	this.wrapp = BX.findChild(this.box, {className:'all-wrapper'}, true, false);
	this.buttonText = BX.findChild(this.button, {className:'bx-ilike-text'}, true, false);
	this.count = BX.findChild(this.box,  {tagName:'span', className:'bx-ilike-right-wrap'}, true, false);
	this.countText	= BX.findChild(this.count, {tagName:'span', className:'bx-ilike-right'}, true, false);
	this.popup = null;
	this.popupId = null;
	this.popupOpenId = null;
	this.popupTimeoutId = null;
	this.popupContent = BX.findChild(BX('bx-ilike-popup-cont-'+likeId), {tagName:'span', className:'bx-ilike-popup'}, true, false);
	this.popupContentPage = 1;
	this.popupListProcess = false;
	this.popupTimeout = false;
	this.likeTimeout = false;

	this.lastVote = BX.hasClass(template == 'standart'? this.button: this.count, 'bx-you-like')? 'plus': 'cancel';
};

RatingLikes.LiveUpdate = function(params)
{
	if (params.USER_ID == BX.message('USER_ID'))
		return false;

	for(var i in BXRL)
	{
		if (BXRL.hasOwnProperty(i))
		{
			if (BXRL[i].entityTypeId == params.ENTITY_TYPE_ID && BXRL[i].entityId == params.ENTITY_ID)
			{
				var element = BXRL[i];
				element.countText.innerHTML = parseInt(params.TOTAL_POSITIVE_VOTES);
				element.count.insertBefore(
					BX.create("span", { props : { className : "bx-ilike-plus-one" }, style: {width: (element.countText.clientWidth-8)+'px', height: (element.countText.clientHeight-8)+'px'}, html: (params.TYPE == 'ADD'? '+1': '-1')})
					, element.count.firstChild);

				if (element.popup)
				{
					element.popup.close();
					element.popupContentPage = 1;
				}
			}
		}
	}
};

RatingLikes.Set = function(likeId, entityTypeId, entityId, available, userId, localize, template, pathToUserProfile, pathToAjax)
{
	if (template === undefined)
		template = 'standart';

	if (!BXRL[likeId] || BXRL[likeId].tryToSet <= 5)
	{
		var tryToSend = BXRL[likeId] && BXRL[likeId].tryToSet? BXRL[likeId].tryToSet: 1;
		BXRL[likeId] = new RatingLikes(likeId, entityTypeId, entityId, available, userId, localize, template, pathToUserProfile, pathToAjax);
		if (BXRL[likeId].enabled)
		{
			RatingLikes.Init(likeId);
		}
		else
		{
			setTimeout(function(){
				BXRL[likeId].tryToSet = tryToSend+1;
				RatingLikes.Set(likeId, entityTypeId, entityId, available, userId, localize, template, pathToUserProfile, pathToAjax);
			}, 500);
		}
	}
};

RatingLikes.Init = function(likeId)
{
	// like/unlike button
	if (BXRL[likeId].available)
	{

		BX.bind(BXRL[likeId].template == 'standart'? BXRL[likeId].button: BXRL[likeId].buttonText, 'click' ,function(e) {
			clearTimeout(BXRL[likeId].likeTimeout);
			if (BX.hasClass(BXRL[likeId].template == 'standart'? this: BXRL[likeId].count, 'bx-you-like'))
			{
				BXRL[likeId].buttonText.innerHTML	=	BXRL[likeId].localize['LIKE_N'];
				BXRL[likeId].countText.innerHTML		= 	parseInt(BXRL[likeId].countText.innerHTML)-1;
				BX.removeClass(BXRL[likeId].template == 'standart'? this: BXRL[likeId].count, 'bx-you-like');

				BXRL[likeId].likeTimeout = setTimeout(function(){
					if (BXRL[likeId].lastVote != 'cancel')
						RatingLikes.Vote(likeId, 'cancel');
				}, 1000);
			}
			else
			{
				BXRL[likeId].buttonText.innerHTML	=	BXRL[likeId].localize['LIKE_Y'];
				BXRL[likeId].countText.innerHTML 	= 	parseInt(BXRL[likeId].countText.innerHTML)+1;
				BX.addClass(BXRL[likeId].template == 'standart'? this: BXRL[likeId].count, 'bx-you-like');

				BXRL[likeId].likeTimeout = setTimeout(function(){
					if (BXRL[likeId].lastVote != 'plus')
						RatingLikes.Vote(likeId, 'plus');
				}, 1000);
			}
			BX.removeClass(this.box, 'bx-ilike-button-hover');
			BX.PreventDefault(e);
		});
		// Hover/unHover like-button
		BX.bind(BXRL[likeId].box, 'mouseover', function() {BX.addClass(this, 'bx-ilike-button-hover')});
		BX.bind(BXRL[likeId].box, 'mouseout', function() {BX.removeClass(this, 'bx-ilike-button-hover')});

	}
	else
	{
		if (BXRL[likeId].buttonText != undefined)
			BXRL[likeId].buttonText.innerHTML	=	BXRL[likeId].localize['LIKE_D'];
	}
	// get like-user-list
	RatingLikes.PopupScroll(likeId);
	console.log();
	BX.bind(BXRL[likeId].wrapp, 'mouseover' , function() {
		clearTimeout(BXRL[likeId].popupTimeoutId);
		BXRL[likeId].popupTimeoutId = setTimeout(function(){
			if (BXRLW == likeId)
				return false;
			if (BXRL[likeId].popupContentPage == 1)
				RatingLikes.List(likeId, 1);
			BXRL[likeId].popupTimeoutId = setTimeout(function() {
				RatingLikes.OpenWindow(likeId);
			}, 400);
		}, 400);
	});
	BX.bind(BXRL[likeId].wrapp, 'mouseout' , function() {
		clearTimeout(BXRL[likeId].popupTimeoutId);
	});
	/*BX.bind(BXRL[likeId].count, 'click' , function() {
		clearTimeout(BXRL[likeId].popupTimeoutId);
		if (BXRL[likeId].popupContentPage == 1)
			RatingLikes.List(likeId, 1);
		RatingLikes.OpenWindow(likeId);
	});*/

	BX.bind(BXRL[likeId].box, 'mouseover' , function() {
		clearTimeout(BXRL[likeId].popupTimeout);
	});
	BX.bind(BXRL[likeId].box, 'mouseout' , function() {
		clearTimeout(BXRL[likeId].popupTimeout);
		BXRL[likeId].popupTimeout = setTimeout(function(){
			if (BXRL[likeId].popup !== null)
			{
				BXRL[likeId].popup.close();
				BXRLW = null;
			}
		}, 1000);
	});
};

RatingLikes.OpenWindow = function(likeId)
{
	if (parseInt(BXRL[likeId].countText.innerHTML) == 0)
		return false;

	if (BXRL[likeId].popup == null)
	{
		BXRL[likeId].popup = new BX.PopupWindow('ilike-popup-'+likeId, (BXRL[likeId].template == 'standart'? BXRL[likeId].count: BXRL[likeId].box), {
			lightShadow : true,
			offsetLeft: 5,
			autoHide: true,
			closeByEsc: true,
			zIndex: 2005,
			bindOptions: {position: "top"},
			events : {
				onPopupClose : function() { BXRLW = null; },
				onPopupDestroy : function() {  }
			},
			content : BX('bx-ilike-popup-cont-'+likeId)
		});
		BXRL[likeId].popup.setAngle({});

		BX.bind(BX('ilike-popup-'+likeId), 'mouseout' , function() {
			clearTimeout(BXRL[likeId].popupTimeout);
			BXRL[likeId].popupTimeout = setTimeout(function(){
				BXRL[likeId].popup.close();
			}, 1000);
		});

		BX.bind(BX('ilike-popup-'+likeId), 'mouseover' , function() {
			clearTimeout(BXRL[likeId].popupTimeout);
		});
	}

	if (BXRLW != null)
		BXRL[BXRLW].popup.close();

	BXRLW = likeId;
	BXRL[likeId].popup.show();

	RatingLikes.AdjustWindow(likeId);
};

RatingLikes.Vote = function(likeId, voteAction)
{
	BX.ajax({
		url: BXRL[likeId].pathToAjax,
		method: 'POST',
		dataType: 'json',
		data: {'RATING_VOTE' : 'Y', 'RATING_VOTE_TYPE_ID' : BXRL[likeId].entityTypeId, 'RATING_VOTE_ENTITY_ID' : BXRL[likeId].entityId, 'RATING_VOTE_ACTION' : voteAction, 'sessid': BX.bitrix_sessid()},
		onsuccess: function(data)	{
			BXRL[likeId].lastVote = data.action;
			BXRL[likeId].countText.innerHTML = data.items_all;
			BXRL[likeId].popupContentPage = 1;

			BXRL[likeId].popupContent.innerHTML = '';
			spanTag0 = document.createElement("span");
			spanTag0.className = "bx-ilike-wait";
			BXRL[likeId].popupContent.appendChild(spanTag0);
			RatingLikes.AdjustWindow(likeId);

			if(BX('ilike-popup-'+likeId) && BX('ilike-popup-'+likeId).style.display == "block")
				RatingLikes.List(likeId, null);
		},
		onfailure: function(data)	{}
	});
	return false;
};

RatingLikes.List = function(likeId, page)
{
	if (parseInt(BXRL[likeId].countText.innerHTML) == 0)
		return false;

	if (page == null)
		page = BXRL[likeId].popupContentPage;
	BXRL[likeId].popupListProcess = true;
	BX.ajax({
		url: BXRL[likeId].pathToAjax,
		method: 'POST',
		dataType: 'json',
		data: {'RATING_VOTE_LIST' : 'Y', 'RATING_VOTE_TYPE_ID' : BXRL[likeId].entityTypeId, 'RATING_VOTE_ENTITY_ID' : BXRL[likeId].entityId, 'RATING_VOTE_LIST_PAGE' : page, 'PATH_TO_USER_PROFILE' : BXRL[likeId].pathToUserProfile, 'sessid': BX.bitrix_sessid()},
		onsuccess: function(data)
		{
			BXRL[likeId].countText.innerHTML = data.items_all;

			if ( parseInt(data.items_page) == 0 )
				return false;

			if (page == 1)
			{
				BXRL[likeId].popupContent.innerHTML = '';
				spanTag0 = document.createElement("span");
				spanTag0.className = "bx-ilike-bottom_scroll";
				BXRL[likeId].popupContent.appendChild(spanTag0);
			}
			BXRL[likeId].popupContentPage += 1;

			var avatarNode = null;

			for (var i = 0; i < data.items.length; i++)
			{
				if (data.items[i]['PHOTO_SRC'].length > 0)
				{
					avatarNode = BX.create("IMG", {
						attrs: {src: data.items[i]['PHOTO_SRC']},
						props: {className: "bx-ilike-popup-avatar-img"}
					});
				}
				else
				{
					avatarNode = BX.create("IMG", {
						attrs: {src: '/bitrix/images/main/blank.gif'},
						props: {className: "bx-ilike-popup-avatar-img bx-ilike-popup-avatar-img-default"}
					});
				}

				BXRL[likeId].popupContent.appendChild(
					BX.create("div", {
						/*attrs: {
							href: data.items[i]['URL'],
							target: '_blank'
						},*/
						props: {
							className: "bx-ilike-popup-img" + (!!data.items[i]['USER_TYPE'] ? " bx-ilike-popup-img-" + data.items[i]['USER_TYPE'] : "")
						},
						children: [
							BX.create("SPAN", {
								props: {
									className: "bx-ilike-popup-avatar-new"
								},
								children: [
									avatarNode,
									BX.create("SPAN", {
										props: {className: "bx-ilike-popup-avatar-status-icon"}
									})
								]
							}),
							BX.create("SPAN", {
								props: {
									className: "bx-ilike-popup-name-new"
								},
								html: data.items[i]['FULL_NAME']
							})
						]
					})
				);
			}

			RatingLikes.AdjustWindow(likeId);
			RatingLikes.PopupScroll(likeId);

			BXRL[likeId].popupListProcess = false;
		},
		onfailure: function(data)	{}
	});
	return false;
};

RatingLikes.AdjustWindow = function(likeId)
{
	if (BXRL[likeId].popup != null)
	{
		BXRL[likeId].popup.bindOptions.forceBindPosition = true;
		BXRL[likeId].popup.adjustPosition();
		BXRL[likeId].popup.bindOptions.forceBindPosition = false;
	}
};

RatingLikes.PopupScroll = function(likeId)
{
	BX.bind(BXRL[likeId].popupContent, 'scroll' , function() {
		if (this.scrollTop > (this.scrollHeight - this.offsetHeight) / 1.5)
		{
			RatingLikes.List(likeId, null);
			BX.unbindAll(this);
		}
	});
};

/* End */
;
; /* Start:"a:4:{s:4:"full";s:63:"/bitrix/templates/aspro_next/js/video_banner.js?154477979826074";s:6:"source";s:47:"/bitrix/templates/aspro_next/js/video_banner.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var players = {};

function pauseMainBanner(){
	$('.top_slider_wrapp .flexslider').flexslider('pause');
}

function playMainBanner(){
	$('.top_slider_wrapp .flexslider').flexslider('play');
}

function startMainBannerSlideVideo($slide){
	var slideActiveIndex = $slide.attr('data-slide_index')
	var $slides = $slide.closest('.slides').find('.box[data-slide_index="'+ slideActiveIndex +'"]') // current slide & cloned
	var videoSource = $slide.attr('data-video_source')
	if(videoSource){
		$slides.addClass('loading')
		pauseMainBanner()

		var videoPlayerSrc = $slide.attr('data-video_src')
		var videoSoundDisabled = $slide.attr('data-video_disable_sound')
		var bVideoSoundDisabled = videoSoundDisabled == 1
		var videoLoop = $slide.attr('data-video_loop')
		var bVideoLoop = videoLoop == 1
		var videoCover = $slide.attr('data-video_cover')
		var bVideoCover = videoCover == 1 && !isMobile
		var videoUnderText = $slide.attr('data-video_under_text')
		var bVideoUnderText = videoUnderText == 1
		var videoPlayer = $slide.attr('data-video_player')
		var bVideoPlayerYoutube = videoPlayer === 'YOUTUBE'
		var bVideoPlayerVimeo = videoPlayer === 'VIMEO'
		var bVideoPlayerRutube = videoPlayer === 'RUTUBE'
		var bVideoPlayerHtml5 = videoPlayer === 'HTML5'

		if(videoPlayerSrc && !$slide.find('.video').length){
			
			var InitPlayer = function(){
				$slides.each(function(i, node){
					var $_slide = $(node);
					var videoID = getRandomInt(100, 1000);
					var bClone = $_slide.hasClass('clone'),
						tmp_class = $_slide.attr('id');
					if(!$_slide.find('.video.'+tmp_class).length)
					{

						if(bVideoPlayerYoutube){
							$_slide.prepend('<iframe id="player_' + videoID + '" class="video ' + tmp_class + (bVideoCover ? ' cover' : '') + '" src="'+ videoPlayerSrc +'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="autoplay"></iframe>');
						}
						else if(bVideoPlayerVimeo){
							$_slide.prepend('<iframe id="player_' + videoID + '" class="video ' + tmp_class + (bVideoCover ? ' cover' : '') + '" src="'+ videoPlayerSrc +'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="autoplay"></iframe>');
						}
						else if(bVideoPlayerRutube){
							videoPlayerSrc = videoPlayerSrc + '&playerid=' + videoID;
							$_slide.prepend('<iframe id="player_' + videoID + '" class="video ' + tmp_class + (bVideoCover ? ' cover' : '') + '" src="'+ videoPlayerSrc +'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="autoplay"></iframe>');
						}
						else if(bVideoPlayerHtml5){
							$_slide.prepend('<video autobuffer playsinline webkit-playsinline autoplay id="player_' + videoID + '" class="video ' + tmp_class + (bVideoCover ? ' cover' : '') + '"' + (bVideoLoop ? ' loop ' : '') + (bVideoSoundDisabled || bClone ? ' muted ' : '') + '><source src="'+ videoPlayerSrc +'" type=\'video/mp4; codecs="avc1.42E01E, mp4a.40.2"\' /><p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that supports HTML5 video</p></iframe>');
						}
					}

					if(typeof(players) !== 'undefined' && players){
						players[videoID] = {
							id: 'player_' + videoID,
							mute: bVideoSoundDisabled || bClone,
							loop: bVideoLoop,
							cover: bVideoCover,
							videoPlayer: videoPlayer,
							slideIndex: slideActiveIndex,
							clone: bClone,
							playing: false
						};

						if(bVideoPlayerYoutube){
							window[players[videoID].id] = new YT.Player(
								players[videoID].id, {
									events: {
										'onReady': onYoutubePlayerReady,
										'onStateChange': onYoutubePlayerStateChange
									}
								}
							);
						}
						else if(bVideoPlayerVimeo){
						    window[players[videoID].id] = new Vimeo.Player(document.getElementById(players[videoID].id), {autopause: false, byline: false, loop: false, title: false});
						    window[players[videoID].id].on('loaded', onVimeoPlayerReady)
						    window[players[videoID].id].on('play', onVimeoPlayerStateChange)
						    window[players[videoID].id].on('pause', onVimeoPlayerStateChange)
						    window[players[videoID].id].on('ended', onVimeoPlayerStateChange)
						}
						else if(bVideoPlayerRutube){
							document.getElementById(players[videoID].id).onload = function(e){
								var videoID = this.id.replace('player_', '')
								players[videoID].contentWindow = this.contentWindow
								onRutubePlayerReady(videoID)
							}
						}
						else if(bVideoPlayerHtml5){
							document.getElementById(players[videoID].id).addEventListener('loadeddata', onHtml5PlayerReady)
							document.getElementById(players[videoID].id).addEventListener('play', onHtml5PlayerStateChange)
							document.getElementById(players[videoID].id).addEventListener('pause', onHtml5PlayerStateChange)
							document.getElementById(players[videoID].id).addEventListener('ended', onHtml5PlayerStateChange)
						}
					}
				});
			}

			if(!bVideoPlayerHtml5){
				var obPlayerVariable = ''
				var fnPlayerVariable = ''
				if(typeof window['YoutubePlayerScriptLoaded'] === 'undefined'){
					window['YoutubePlayerScriptLoaded'] = false
				}
				if(typeof window['VimeoPlayerScriptLoaded'] === 'undefined'){
					window['VimeoPlayerScriptLoaded'] = false
				}
				if(typeof window['RutubePlayerListnersAdded'] === 'undefined'){
					window['RutubePlayerListnersAdded'] = false
				}

				// load script
				if(bVideoPlayerYoutube){
					obPlayerVariable = 'YT'
					fnPlayerVariable = 'Player'
					if(!window['YoutubePlayerScriptLoaded']){
						var script = document.createElement('script');
						script.src = "https://www.youtube.com/iframe_api";
						var firstScriptTag = document.getElementsByTagName('script')[0];
						firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
						window['YoutubePlayerScriptLoaded'] = true;
					}
				}
				else if(bVideoPlayerVimeo){
					obPlayerVariable = 'Vimeo'
					if(!window['VimeoPlayerScriptLoaded']){
						var script = document.createElement('script');
						script.src = 'https://player.vimeo.com/api/player.js';
						(document.head || document.documentElement).appendChild(script);
						window['VimeoPlayerScriptLoaded'] = true
					}
				}
				else if(bVideoPlayerRutube){
					if(!window['RutubePlayerListnersAdded']){
						window.addEventListener('message', function(e){
							if(e.origin.indexOf('rutube.ru') !== -1){
							    var message = JSON.parse(e.data)
							    if(typeof message === 'object' && message){
							    	if(typeof message.type !== 'undefined' && message.type){
							    		var videoID = false

							    		for(var j in players){
									    	if(typeof players[j].contentWindow !== 'undefined'){
									    		if(players[j].contentWindow == e.source){
									    			videoID = j
									    			break
									    		}
									    	}
									    }

									    if(videoID){
										    switch (message.type) {
										        case 'player:changeState':
										            onRutubePlayerStateChange(videoID, message.data.state)
										            break
										        case 'player:currentTime':
										            onRutubePlayerCurrentTime(videoID, message.data.time)
										            break
										    }
										}
									}
							    }
							}
						});
					}
				}

				if(!obPlayerVariable.length){
					InitPlayer()
				}
				else{
					// wait player class
					if(typeof window[obPlayerVariable] === 'object'){
						if(!fnPlayerVariable.length || (fnPlayerVariable.length && typeof window[obPlayerVariable][fnPlayerVariable] === 'function')){

							InitPlayer()
						}
					}
					else{
						var waitPlayerInterval = setInterval(function(){
							if(typeof window[obPlayerVariable] === 'object'){
								if(!fnPlayerVariable.length || (fnPlayerVariable.length && typeof window[obPlayerVariable][fnPlayerVariable] === 'function')){

									clearInterval(waitPlayerInterval)

									InitPlayer()
								}
							}
						}, 50)
					}
				}

			}
			else{
				InitPlayer()
			}
		}
		else
		{
			// pause play video
			if(typeof(players) !== 'undefined' && players){
				for(var j in players){
					if(/*players[j].playing &&*/ !players[j].clone/* && (players[j].slideIndex != curSlideIndex)*/){
						if((typeof window[players[j].id] == 'object')){
							if(players[j].playing)
							{
								if(players[j].videoPlayer === 'YOUTUBE'){
									window[players[j].id].pauseVideo()
								}
								else if(players[j].videoPlayer === 'VIMEO'){
									window[players[j].id].pause()
								}
								else if(players[j].videoPlayer === 'RUTUBE'){
									document.getElementById(players[j].id).contentWindow.postMessage(JSON.stringify({
									    type: 'player:pause',
									    data: {}
									}), '*')
								}
								else if(players[j].videoPlayer === 'HTML5'){
									document.getElementById(players[j].id).pause()
								}
							}
							else if(players[j].slideIndex == slideActiveIndex)
							{
								if(players[j].videoPlayer === 'YOUTUBE'){
									window[players[j].id].playVideo()
								}
								else if(players[j].videoPlayer === 'VIMEO'){
									window[players[j].id].play()
								}
								else if(players[j].videoPlayer === 'RUTUBE'){
									document.getElementById(players[j].id).contentWindow.postMessage(JSON.stringify({
									    type: 'player:play',
									    data: {}
									}), '*')
								}
								else if(players[j].videoPlayer === 'HTML5'){
									document.getElementById(players[j].id).play()
								}
							}
						}
					}
				}
			}
		}
	}
}

var CoverPlayerHtml = function(curSlideIndex){
	var $videoCover = $('.video.cover');

	if($videoCover.length){
		//setTimeout(function(){
			var currenSlide = $('.box[data-slide_index="'+curSlideIndex+'"]');

			var bannersHeight = $('.top_slider_wrapp').height();
			var bannersWidth = $('.top_slider_wrapp').width();
			var videoHeight = $('.top_slider_wrapp video').outerHeight();
			var videoWidth = $('.top_slider_wrapp video').outerWidth();

			if(bannersHeight >= videoHeight && videoWidth >= bannersWidth){
				currenSlide.find('video.cover').height(bannersHeight+(jQuery.browser.mobile ? 30 : 0)).width('auto');
				
				if(currenSlide.hasClass('wvideo'))
					currenSlide.css('background-position-x', 'auto');

			}
			else if(bannersHeight < videoHeight && videoWidth < bannersWidth){
				currenSlide.find('video.cover').width(bannersWidth).height('auto');
				
				if(currenSlide.hasClass('wvideo'))
					currenSlide.css('background-position-y', 'auto');
			}

			//if(window.matchMedia('(min-width:992px)').matches){
				//setTimeout(function(){
					if(currenSlide.find('video.cover').length)
					{
						currenSlide.find('video.cover').css('margin-top', -videoHeight/2);
						var bannerWidth = $('.top_slider_wrapp video').width();
						// currenSlide.find('video.cover').css('margin-left', -bannerWidth/2);
					}
				//}, 300);
			/*}
			else{
				$('.top_slider_wrapp video').css('margin-top', 0);
			}*/
			setTimeout(function(){
				$('.video.cover').css('visibility', 'visible');
			}, 1300);
		//}, 10);
	}
}

var CoverPlayer = function(){
	var $videoCover = $('.video.cover')
	if($videoCover.length){
		var bannersHeight = $('.top_slider_wrapp').height()
		var bannersWidth = $('.top_slider_wrapp').width()
		var windowWidth = $(window).width()
		var height = windowWidth * 9 / 16
		$videoCover.css({'height': height + 'px', 'margin-top': ((bannersHeight - height) / 2) + 'px'})
	}
}

function onYoutubePlayerReady(e) {
	var videoID = e.target.a.id.replace('player_', '')
	if(videoID){
		var mute = players[videoID].mute
		var cover = players[videoID].cover
    	var clone = players[videoID].clone

    	// mute sound
		if(mute || clone){
			window[players[videoID].id].mute()
		}

    	// cover video
		if(cover){
	    	CoverPlayer()
	    }

    	// not start clone video playing
    	if(clone){
    		setTimeout(function(){
				e.target.pauseVideo()
    		}, 100)
    	}
    	else{
		    // stop slider
			pauseMainBanner()
			e.target.playVideo();

		    // e.target.playVideo();
		    // e.target.playVideo();
    	}

    	// update slide class
		var $slide = $('#player_' + videoID).closest('.box')
		$slide.addClass('started')
		// $slide.removeClass('loading')
    }
}

function onYoutubePlayerStateChange(e){
	var videoID = e.target.a.id.replace('player_', '')
    if(videoID){
    	var clone = players[videoID].clone
		var loop = players[videoID].loop
    	var slideIndex = players[videoID].slideIndex
    	if(!clone){
			if(e.data === YT.PlayerState.PLAYING){
				players[videoID].playing = true

				$('#player_'+videoID).closest('.box').find('.wrapper_inner').addClass('loading');
				$('#player_'+videoID).closest('.box').find('.wrapper_inner .btn-video').addClass('loading');

				// stop slider
				pauseMainBanner()

				e.target.playVideo()
			}
			else if(e.data === YT.PlayerState.PAUSED){
		    	players[videoID].playing = false

		    	// sync time in cloned players & pause
	    		var time = Math.floor(window[players[videoID].id].getCurrentTime() * 10) / 10

				$('#player_'+videoID).closest('.box').find('.wrapper_inner').removeClass('loading');
				$('#player_'+videoID).closest('.box').find('.wrapper_inner .btn-video').removeClass('loading');
	    		
				window[players[videoID].id].seekTo(time, true)
				for(var j in players){
					if(players[j].slideIndex == slideIndex && players[j].clone){
						
						if('getCurrentTime' in window[players[j].id])
						{
							window[players[j].id].pauseVideo()
							window[players[j].id].seekTo(time, true)
						}
					}
				}
			}
			else if(e.data === YT.PlayerState.ENDED){
				players[videoID].playing = false
		    	if(loop){
		    		e.target.playVideo()
		    	}
		    	else{
		    		// play slider
					playMainBanner()
		    	}
			}
		}
	}
}

function onVimeoPlayerReady(e){
	var videoID = this.element.id.replace('player_', '')
	if(videoID){
		var mute = players[videoID].mute
		var cover = players[videoID].cover
    	var clone = players[videoID].clone

    	// mute sound
		if(mute || clone){
			window[players[videoID].id].setVolume(0)
		}

    	// cover video
		if(cover){
	    	CoverPlayer()
	    }

    	// not start clone video playing
    	if(clone){
    		setTimeout(function(){
				window[players[videoID].id].pause()
    		}, 100)
    	}
    	else{
		    // stop slider
			pauseMainBanner()

		    window[players[videoID].id].play()
    	}

    	// update slide class
		var $slide = $('#player_' + videoID).closest('.box')
		$slide.addClass('started')
		// $slide.removeClass('loading')
    }
}

function onVimeoPlayerStateChange(e){
	var videoID = this.element.id.replace('player_', '')
	if(videoID){
		var cover = players[videoID].cover
    	var clone = players[videoID].clone
		var loop = players[videoID].loop
    	var slideIndex = players[videoID].slideIndex

    	if(!clone){
    		window[players[videoID].id].getPaused().then(function(paused){
    			if(paused){
			    	players[videoID].playing = false

			    	$('#player_'+videoID).closest('.box').find('.wrapper_inner').removeClass('loading');
					$('#player_'+videoID).closest('.box').find('.wrapper_inner .btn-video').removeClass('loading');

			    	// sync time in cloned players & pause
			    	window[players[videoID].id].getCurrentTime().then(function(seconds){
			    		var time = Math.floor(seconds * 10) / 10
			    		window[players[videoID].id].setCurrentTime(time).then(function(seconds){
							for(var j in players){
								if(players[j].slideIndex == slideIndex && players[j].clone){
									window[players[j].id].pause()
									window[players[j].id].setCurrentTime(time).then(function(seconds){})
								}
							}
			    		})
			    	})
    			}
    			else{
    				$('#player_'+videoID).closest('.box').find('.wrapper_inner').addClass('loading');
					$('#player_'+videoID).closest('.box').find('.wrapper_inner .btn-video').addClass('loading');
		    		window[players[videoID].id].getEnded().then(function(ended){
		    			if(ended){
							players[videoID].playing = false
					    	if(loop){
					    		window[players[videoID].id].play()
					    	}
					    	else{
					    		// play slider
								playMainBanner()
					    	}
		    			}
		    			else{
		    				players[videoID].playing = true


		    				// stop slider
							pauseMainBanner()
		    			}
		    		})
    			}
    		})
		}
	}
}

function onRutubePlayerReady(videoID){
	if(videoID){
		var mute = players[videoID].mute
		var cover = players[videoID].cover
    	var clone = players[videoID].clone
    	var player = document.getElementById(players[videoID].id)

    	// mute sound
		if(mute || clone){
			player.contentWindow.postMessage(JSON.stringify({
			    type: 'player:mute',
			    data: {}
			}), '*')
		}

    	// cover video
		if(cover){
	    	CoverPlayer()
	    }

    	// not start clone video playing
    	if(clone){
    		setTimeout(function(){
				player.contentWindow.postMessage(JSON.stringify({
				    type: 'player:pause',
				    data: {}
				}), '*')
    		}, 100)
    	}
    	else{
		    // stop slider
			pauseMainBanner()

		    player.contentWindow.postMessage(JSON.stringify({
			    type: 'player:play',
			    data: {}
			}), '*')
    	}

    	// update slide class
		var $slide = $('#player_' + videoID).closest('.box')
		$slide.addClass('started')
		// $slide.removeClass('loading')
    }
}

function onRutubePlayerCurrentTime(videoID, time){
	if(videoID){
		players[videoID].time = time
	}
}

function onRutubePlayerStateChange(videoID, state){
	if(videoID){
    	var clone = players[videoID].clone
		var loop = players[videoID].loop
    	var slideIndex = players[videoID].slideIndex
    	var player = document.getElementById(players[videoID].id)

    	if(!clone){
			if(state === 'playing'){
				$('#'+videoID).closest('.box').find('.wrapper_inner').addClass('loading');
				$('#'+videoID).closest('.box').find('.wrapper_inner .btn-video').addClass('loading');

				players[videoID].playing = true

				// stop slider
				pauseMainBanner()
			}
			else if(state === 'paused'){
				$('#'+videoID).closest('.box').find('.wrapper_inner').removeClass('loading');
				$('#'+videoID).closest('.box').find('.wrapper_inner .btn-video').removeClass('loading');

		    	players[videoID].playing = false

		    	// sync time in cloned players & pause
	    		var time = Math.floor(players[videoID].time * 10) / 10
				player.contentWindow.postMessage(JSON.stringify({
				    type: 'player:setCurrentTime',
				    data: {time: time}
				}), '*')
				for(var j in players){
					if(players[j].slideIndex == slideIndex && players[j].clone){
						document.getElementById(players[j].id).contentWindow.postMessage(JSON.stringify({
						    type: 'player:pause',
						    data: {}
						}), '*')
						document.getElementById(players[j].id).contentWindow.postMessage(JSON.stringify({
						    type: 'player:setCurrentTime',
						    data: {time: time}
						}), '*')
					}
				}
			}
			else if(state === 'stopped'){
				$('#'+videoID).closest('.box').find('.wrapper_inner').removeClass('loading');
				$('#'+videoID).closest('.box').find('.wrapper_inner .btn-video').removeClass('loading');

				players[videoID].playing = false
		    	if(loop){
		    		player.contentWindow.postMessage(JSON.stringify({
					    type: 'player:play',
					    data: {}
					}), '*')
		    	}
		    	else{
		    		// play slider
					playMainBanner()
		    	}
			}
		}
	}
}

function onHtml5PlayerReady(e){
	var videoID = e.target.id.replace('player_', '')
	if(videoID){
		var mute = players[videoID].mute
		var cover = players[videoID].cover
    	var clone = players[videoID].clone

    	// mute sound
		if(mute || clone){
			$('#' + players[videoID].id).prop('muted', true);
		}

    	// cover video
		if(cover){
	    	CoverPlayer()
	    }

    	// not start clone video playing
    	if(clone){
    		e.target.pause()
    	}
    	else{
		    // stop slider
			pauseMainBanner()

		    e.target.play()
    	}

    	// update slide class
		var $slide = $('#player_' + videoID).closest('.box')
		$slide.addClass('started')
		// $slide.removeClass('loading')
    }
}

function onHtml5PlayerStateChange(e){
	var videoID = e.target.id.replace('player_', '')
	if(videoID){
    	var cover = players[videoID].cover
    	var clone = players[videoID].clone
		var loop = players[videoID].loop
    	var slideIndex = players[videoID].slideIndex

    	if(!clone){
			if(e.target.paused){
		    	players[videoID].playing = false

		    	$('#player_'+videoID).closest('.box').find('.wrapper_inner').removeClass('loading');
				$('#player_'+videoID).closest('.box').find('.wrapper_inner .btn-video').removeClass('loading');

		    	// sync time in cloned players & pause
	    		var time = Math.floor(e.target.currentTime * 10) / 10
				e.target.currentTime = time
				for(var j in players){
					if(players[j].slideIndex == slideIndex && players[j].clone){
						document.getElementById(players[j].id).pause()
						document.getElementById(players[j].id).currentTime = time
					}
				}
			}
			else if(e.target.ended){
				players[videoID].playing = false
		    	if(loop){
		    		$('#player_'+videoID).closest('.box').find('.wrapper_inner').addClass('loading');
					$('#player_'+videoID).closest('.box').find('.wrapper_inner .btn-video').addClass('loading');

		    		e.target.play()
		    	}
		    	else{
		    		// play slider
					playMainBanner()
		    	}
			}
			else{
				players[videoID].playing = true

				$('#player_'+videoID).closest('.box').find('.wrapper_inner').addClass('loading');
				$('#player_'+videoID).closest('.box').find('.wrapper_inner .btn-video').addClass('loading');
				// stop slider
				pauseMainBanner()
			}
		}
	}
}

waitYTPlayer = function(delay, callback){
	if((typeof YT !== "undefined") && YT && YT.Player)
	{
		if(typeof callback == 'function')
			callback();
	}
	else
	{
		setTimeout(function(){
			waitYTPlayer(delay, callback);
		}, delay);
	}
}

// click on HTML5 video
$(document).on('click', 'video.video', function(e){
	var videoID = e.target.id.replace('player_', '')
    if(videoID){
    	if(players[videoID].playing){
			e.target.pause()
    	}
    	else{
    		//e.target.play()
    	}
    }
})

$('.top_slider_wrapp .box .wrapper_inner').on('click', function(e){
	if(!$(e.target).hasClass('btn-video'))
	{
		if($(this).hasClass('loading'))
		{
			e.stopPropagation();
			$(this).find('.btn-video').trigger('click');
		}
		if($(this).closest('.box').data('video_autoplay'))
			startMainBannerSlideVideo($(this).closest('.box'));
	}
})

$(document).on('click', '.top_slider_wrapp .box.wvideo', function(){
	$(this).find('.btn-video').trigger('click');
});

// START VIDEO BUTTON
$(document).on('click', '.top_slider_wrapp .box .btn-video', function(e){
	e.stopPropagation();
	if(!$(this).hasClass('loading'))
	{
		$(this).addClass('loading');
		$(this).closest('.wrapper_inner').addClass('loading');
	}
	else
	{
		$(this).removeClass('loading');
		$(this).closest('.wrapper_inner').removeClass('loading');
	}

	startMainBannerSlideVideo($(this).closest('.box'));
});

getRandomInt = function(min, max){
	return Math.floor(Math.random() * (max - min)) + min;
}

BX.addCustomEvent('onSlideEnd', function(eventdata) {
	try{
		ignoreResize.push(true);
		if(eventdata){
			var slider = eventdata.slider;
			if(slider){
				setTimeout(function(){
					$('.banners-big.front .btn-video, .banners-big.front .box').removeClass('loading');
				}, 300);
			}
		}
	}
	catch(e){}
	finally{
		ignoreResize.pop();
	}
});

var ignoreResize = [];

BX.addCustomEvent('onSlide', function(eventdata) {
	try{
		ignoreResize.push(true);
		if(eventdata){
			var slider = eventdata.slider;
			if(slider){
				var curSlide = slider.find('.box.flex-active-slide');
				var curSlideIndex = curSlide.attr('data-slide_index');

				if(typeof(curSlideIndex) !== 'undefined' && curSlideIndex.length){
					setTimeout(function(){
						CoverPlayerHtml(curSlideIndex);
					}, 200);

					// pause play video
					if(typeof(players) !== 'undefined' && players){
						for(var j in players){
							if(players[j].playing && !players[j].clone && (players[j].slideIndex != curSlideIndex)){
								if((typeof window[players[j].id] == 'object')){
									if(players[j].videoPlayer === 'YOUTUBE'){
										window[players[j].id].pauseVideo()
									}
									else if(players[j].videoPlayer === 'VIMEO'){
										window[players[j].id].pause()
									}
									else if(players[j].videoPlayer === 'RUTUBE'){
										document.getElementById(players[j].id).contentWindow.postMessage(JSON.stringify({
										    type: 'player:pause',
										    data: {}
										}), '*')
									}
									else if(players[j].videoPlayer === 'HTML5'){
										document.getElementById(players[j].id).pause()
									}
								}
							}
						}
					}
					// autoplay video
					var bVideoAutoPlay = curSlide.attr('data-video_autoplay') == 1
					if(bVideoAutoPlay){
						startMainBannerSlideVideo(curSlide)
					}
				}

				if(curSlide.find('video').length && !curSlide.find('.btn-video').length){
					var videoID = curSlide.find('video').attr('id');
					document.getElementById(videoID).play();
				}
			}
		}
	}
	catch(e){}
	finally{
		ignoreResize.pop();
	}
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:56:"/bitrix/templates/aspro_next/js/main.js?1588410963225806";s:6:"source";s:39:"/bitrix/templates/aspro_next/js/main.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var basketTimeoutSlide;
var resizeEventTimer;

BX.message.BASKET_QUICK_ORDER_BUTTON = "?????????????? ??????????";
BX.message.COUNTDOWN_YEAR0 = "??????";
BX.message.COUNTDOWN_MONTH0 = "??????????????";
BX.message.COUNTDOWN_WEAK0 = "????????????";
BX.message.COUNTDOWN_DAY0 = "????????";
BX.message.COUNTDOWN_HOUR = "??????.";
BX.message.COUNTDOWN_MIN = "??????.";
BX.message.COUNTDOWN_SEC = "??????.";
BX.message.COUNTDOWN_YEAR1 = "??????";
BX.message.COUNTDOWN_MONTH1 = "??????????";
BX.message.COUNTDOWN_WEAK1 = "????????????";
BX.message.COUNTDOWN_DAY1 = "????????";
BX.message.COUNTDOWN_YEAR2 = "????????";
BX.message.COUNTDOWN_MONTH2 = "????????????";
BX.message.COUNTDOWN_WEAK2 = "????????????";
BX.message.COUNTDOWN_DAY2 = "??????";
BX.message.JS_REQUIRED = "?????????????????? ?????? ????????";
BX.message.JS_FORMAT = "???????????????? ????????????";
BX.message.JS_PASSWORD_COPY = "???????????? ???? ??????????????????";
BX.message.JS_PASSWORD_LENGTH = "?????????????? 6 ????????????????";
BX.message.JS_ERROR = "?????????????? ?????????????????? ????????";
BX.message.JS_FILE_SIZE = "???????????????????????? ???????????? 5????";
BX.message.JS_DATE = "???????????????????????? ????????";
BX.message.JS_FILE_EXT = "???????????????????????? ???????????????????? ??????????";
BX.message.JS_RECAPTCHA_ERROR = "???????????????? ????????????????";
BX.message.FANCY_CLOSE = "??????????????";
BX.message.FANCY_NEXT = "??????????????????";
BX.message.FANCY_PREV = "????????????????????";
BX.message.BASKET_CLEAR_ALL_BUTTON = "????????????????";
BX.message.JS_REQUIRED_LICENSES = "?????????????????????? ?? ??????????????????";
BX.message.BASKET_CHANGE_TITLE = "?????? ??????????";

var funcDefined = function(func){
	try
	{
		if(typeof func == 'function')
			return true;
		else
			return typeof window[func] === "function";
	}
	catch (e)
	{
		return false;
	}
}

if(!funcDefined('setLocationSKU')){
	function setLocationSKU(ID){
		var objUrl = parseUrlQuery(),
			j = 0,
			prefix = '',
			query_string = '',
			url = '';
		if('oid' in objUrl)
		{
			if(parseInt(objUrl.oid)>0)
			{
				objUrl.oid = ID;
				for(var i in objUrl)
				{
					if(parseInt(j)>0)
						prefix = '&';
					query_string = query_string + prefix + i + '='+ objUrl[i];
					j++;
				}
				if(query_string)
				{
					url = location.pathname+'?'+query_string;
				}
				try
				{
					history.pushState(null, null, url);
					return;
				}
				catch(e){}
				location.hash = '#' + url.substr(1)
			}
		}
	}
}

if(!funcDefined('ShowOverlay')){
	ShowOverlay = function(){
		$('<div class="jqmOverlay waiting"></div>').appendTo('body');
	}
}
if(!funcDefined('HideOverlay')){
	HideOverlay = function(){
		$('.jqmOverlay').detach();
	}
}
if(!funcDefined('trimPrice')){
	var trimPrice = function trimPrice(s){
		s=s.split(" ").join("");
		s=s.split("&nbsp;").join("");
		return s;
	}
}

if(!funcDefined('markProductRemoveBasket')){
	var markProductRemoveBasket = function markProductRemoveBasket(id){
		$('.in-cart[data-item='+id+']').hide();
		$('.to-cart[data-item='+id+']').show();
		$('.to-cart[data-item='+id+']').closest('.button_block').removeClass('wide');
		$('.to-cart[data-item='+id+']').closest('.counter_wrapp').find('.counter_block').show();
		$('.counter_block[data-item='+id+']').show();
		$('.in-subscribe[data-item='+id+']').hide();
		$('.to-subscribe[data-item='+id+']').show();
		$('.wish_item[data-item='+id+']').removeClass("added");
		$('.wish_item[data-item='+id+'] .value:not(.added)').show();
		$('.wish_item[data-item='+id+'] .value.added').hide();
	}
}

if(!funcDefined('markProductAddBasket')){
	var markProductAddBasket = function markProductAddBasket(id){
		$('.to-cart[data-item='+id+']').hide();
		$('.to-cart[data-item='+id+']').closest('.counter_wrapp').find('.counter_block').hide();
		$('.to-cart[data-item='+id+']').closest('.button_block').addClass('wide');
		$('.in-cart[data-item='+id+']').show();
		$('.wish_item[data-item='+id+']').removeClass("added");
		$('.wish_item[data-item='+id+'] .value:not(.added)').show();
		$('.wish_item[data-item='+id+'] .value.added').hide();
	}
}

if(!funcDefined('markProductDelay')){
	var markProductDelay = function markProductDelay(id){
		$('.in-cart[data-item='+id+']').hide();
		$('.to-cart[data-item='+id+']').show();
		$('.to-cart[data-item='+id+']').closest('.counter_wrapp').find('.counter_block').show();
		$('.to-cart[data-item='+id+']').closest('.button_block').removeClass('wide');
		$('.wish_item[data-item='+id+']').addClass("added");
		$('.wish_item[data-item='+id+'] .value:not(.added)').hide();
		$('.wish_item[data-item='+id+'] .value.added').css('display','block');
	}
}

if(!funcDefined('markProductSubscribe')){
	var markProductSubscribe = function markProductSubscribe(id){
		$('.to-subscribe[data-item='+id+']').hide();
		$('.in-subscribe[data-item='+id+']').css('display','block');
	}
}

if(!funcDefined('basketFly')){
	var basketFly = function basketFly(action,opener){
		/*if(arNextOptions['PAGES']['BASKET_PAGE'])
			return;*/
		$.post( arNextOptions['SITE_DIR']+"ajax/basket_fly.php", "PARAMS="+$("#basket_form").find("input#fly_basket_params").val(), $.proxy(function( data ){
			var small=$('.opener .basket_count').hasClass('small'),
				basket_count=$(data).find('.basket_count').find('.items div').text();
			$('#basket_line .basket_fly').addClass('loaded').html(data);

			if(action=="refresh")
				$('li[data-type=AnDelCanBuy]').trigger('click');

			if(typeof(opener) == 'undefined')
			{
				if(window.matchMedia('(min-width: 769px)').matches)
				{
					if(action=='open')
					{
						if(small)
						{
							if(arNextOptions['THEME']['SHOW_BASKET_ONADDTOCART'] !== 'N')
								$('.opener .basket_count').click();
						}
						else
						{
							$('.opener .basket_count').removeClass('small')
							$('.tabs_content.basket li[item-section="AnDelCanBuy"]').addClass('cur');
							$('#basket_line ul.tabs li[item-section="AnDelCanBuy"]').addClass('cur');
						}
					}
					else if(action=='wish')
					{
						if(small)
						{
							if(arNextOptions['THEME']['SHOW_BASKET_ONADDTOCART'] !== 'N')
								$('.opener .wish_count').click();
						}
						else
						{
							$('.opener .wish_count').removeClass('small')
							$('.tabs_content.basket li[item-section="DelDelCanBuy"]').addClass('cur');
							$('#basket_line ul.tabs li[item-section="DelDelCanBuy"]').addClass('cur');
						}
					}
					else
					{
						if(arNextOptions['THEME']['SHOW_BASKET_ONADDTOCART'] !== 'N')
							$('.opener .basket_count').click();
					}
				}
			}
		}));
	}
}

//work with hash start
var lastHash = location.hash;
if("onhashchange" in window)
{
	$(window).bind('hashchange', function() {
		var newHash = location.hash;
		if(newHash == '#delayed')
		{
			if($('#basket_toolbar_button_delayed').length)
				$('#basket_toolbar_button_delayed').trigger('click');
		}
		else
		{
			if($('#basket_toolbar_button').length)
				$('#basket_toolbar_button').trigger('click');
		}
		// Do something
		var diff = compareHash(newHash, lastHash);
		// alert("Difference between old and new hash:\n"+diff[0]+"\n\n"+diff[1]);

		//At the end of the func:
		lastHash = newHash;
	});

	function compareHash(current, previous){
		for(var i=0, len=Math.min(current.length, previous.length); i<len; i++){
			if(current.charAt(0) != previous.charAt(0)) break;
		}
		current = current.substr(i);
		previous = previous.substr(i);
		for(var i=0, len=Math.min(current.length, previous.length); i<len; i++){
			if(current.substr(-1) != previous.substr(-1)) break;
		}

		//Array: Current = New hash, previous = old hash
		return [current, previous];
	}
}
$(document).on('click', "#basket_toolbar_button", function(){
	if(lastHash)
		location.hash = 'cart';
})
$(document).on('click', "#basket_toolbar_button_delayed", function(){
	if(lastHash)
		location.hash = 'delayed';
})
//work with hash end

$(document).on('click', "#basket_line .basket_fly .opener > div.clicked", function(){
	if(arNextOptions['PAGES']['BASKET_PAGE'])
		return;
	function onOpenFlyBasket(_this){
		$("#basket_line .basket_fly .tabs li").removeClass("cur");
		$("#basket_line .basket_fly .tabs_content li").removeClass("cur");
		$("#basket_line .basket_fly .remove_all_basket").removeClass("cur");
		if(!$(_this).is(".wish_count.empty"))
		{
			$("#basket_line .basket_fly .tabs_content li[item-section="+$(_this).data("type")+"]").addClass("cur");
			$("#basket_line .basket_fly .tabs li:eq("+$(_this).index()+")").addClass("cur");
			$("#basket_line .basket_fly .remove_all_basket."+$(_this).data("type")).addClass("cur");
		}
		else
		{
			$("#basket_line .basket_fly .tabs li").first().addClass("cur").siblings().removeClass("cur");
			$("#basket_line .basket_fly .tabs_content li").first().addClass("cur").siblings().removeClass("cur");
			$("#basket_line .basket_fly .remove_all_basket").first().addClass("cur");
		}
		$("#basket_line .basket_fly .opener > div.clicked").removeClass('small');
	}

	if(window.matchMedia('(min-width: 769px)').matches)
	{
		var _this = this;
		if(parseInt($("#basket_line .basket_fly").css("right")) < 0)
		{
			$("#basket_line .basket_fly").stop().animate({"right": "0"}, 333, function(){
				if($(_this).closest('.basket_fly.loaded').length)
				{
					onOpenFlyBasket(_this);
				}
				else
				{
					$.ajax({
						url: arNextOptions['SITE_DIR'] + 'ajax/basket_fly.php',
						type: 'post',
						success: function(html){
							$('#basket_line .basket_fly').addClass('loaded').html(html);
							onOpenFlyBasket(_this);
						}
					});
				}
			});
		}
		else if($(this).is(".wish_count:not(.empty)") && !$("#basket_line .basket_fly .basket_sort ul.tabs li.cur").is("[item-section=DelDelCanBuy]"))
		{
			$("#basket_line .basket_fly .tabs li").removeClass("cur");
			$("#basket_line .basket_fly .tabs_content li").removeClass("cur");
			$("#basket_line .basket_fly .remove_all_basket").removeClass("cur");
			$("#basket_line .basket_fly .tabs_content li[item-section="+$(this).data("type")+"]").addClass("cur");
			$("#basket_line  .basket_fly .tabs li:eq("+$(this).index()+")").first().addClass("cur");
			$("#basket_line .basket_fly .remove_all_basket."+$(this).data("type")).first().addClass("cur");
		}
		else if($(this).is(".basket_count") && $("#basket_line .basket_fly .basket_sort ul.tabs li.cur").length && !$("#basket_line .basket_fly .basket_sort ul.tabs li.cur").is("[item-section=AnDelCanBuy]"))
		{
			$("#basket_line .basket_fly .tabs li").removeClass("cur");
			$("#basket_line .basket_fly .tabs_content li").removeClass("cur");
			$("#basket_line .basket_fly .remove_all_basket").removeClass("cur");
			$("#basket_line  .basket_fly .tabs_content li:eq("+$(this).index()+")").addClass("cur");
			$("#basket_line  .basket_fly .tabs li:eq("+$(this).index()+")").first().addClass("cur");
			$("#basket_line .basket_fly .remove_all_basket."+$(this).data("type")).first().addClass("cur");
		}
		else
		{
			$("#basket_line .basket_fly").stop().animate({"right": -$("#basket_line .basket_fly").outerWidth()}, 150);
			$("#basket_line .basket_fly .opener > div.clicked").addClass('small');
		}
	}
});

if(!funcDefined("clearViewedProduct")){
	function clearViewedProduct(){
		try{
			var siteID = arNextOptions.SITE_ID;
			var localKey = 'NEXT_VIEWED_ITEMS_' + siteID;
			var cookieParams = {path: '/', expires: 30};
			if(typeof BX.localStorage !== 'undefined')
			{
				// remove local storage
				BX.localStorage.set(localKey, {}, 0);
			}
			// remove cookie
			$.removeCookie(localKey, cookieParams);
		}
		catch(e){
			console.error(e);
		}
	}
}

if(!funcDefined("setViewedProduct")){
	function setViewedProduct(id, arData){
		try{

			// save $.cookie option
			var bCookieJson = $.cookie.json;
			$.cookie.json = true;

			var siteID = arNextOptions.SITE_ID;
			var localKey = 'NEXT_VIEWED_ITEMS_' + siteID;
			var cookieParams = {path: '/', expires: 30};

			if((typeof BX.localStorage !== 'undefined') && (typeof id !== 'undefined') && (typeof arData !== 'undefined')){
				var PRODUCT_ID = (typeof arData.PRODUCT_ID !== 'undefined') ? arData.PRODUCT_ID : id;
				var arViewedLocal = BX.localStorage.get(localKey) ? BX.localStorage.get(localKey) : {};
				var arViewedCookie = $.cookie(localKey) ? $.cookie(localKey) : {};
				var count = 0;

				// delete some items (sync cookie & local storage)
				for(var _id in arViewedLocal){
					arViewedLocal[_id].IS_LAST = false;
					if(typeof arViewedCookie[_id] === 'undefined'){
						delete arViewedLocal[_id];
					}
				}
				for(var _id in arViewedCookie){
					if(typeof arViewedLocal[_id] === 'undefined'){
						delete arViewedCookie[_id];
					}
				}

				for(var _id in arViewedCookie){
					count++;
				}

				// delete item if other item (offer) of that PRODUCT_ID is exists
				if(typeof arViewedLocal[PRODUCT_ID] !== 'undefined'){
					if(arViewedLocal[PRODUCT_ID].ID != id){
						delete arViewedLocal[PRODUCT_ID];
						delete arViewedCookie[PRODUCT_ID];
					}
				}

				delete arViewedLocal[2243];
				delete arViewedCookie[2243];

				var time = new Date().getTime();
				arData.ID = id;
				arData.ACTIVE_FROM = time;
				arData.IS_LAST = true;
				arViewedLocal[PRODUCT_ID] = arData;
				arViewedCookie[PRODUCT_ID] = [time.toString(), arData.PICTURE_ID];

				$.cookie(localKey, arViewedCookie, cookieParams);
				BX.localStorage.set(localKey, arViewedLocal, 2592000);  // 30 days
			}
		}
		catch(e){
			console.error(e);
		}
		finally{
			// restore $.cookie option
			$.cookie.json = bCookieJson;
		}
	}
}



if(!funcDefined('initSelects')){
	function initSelects(target){
		var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
		if ( iOS ) return;
		if($("#bx-soa-order").length)
			return;
		// SELECT STYLING
		$(target).find('.wrapper1 select:visible').ikSelect({
			syntax: '<div class="ik_select_link"> \
						<span class="ik_select_link_text"></span> \
						<div class="trigger"></div> \
					</div> \
					<div class="ik_select_dropdown"> \
						<div class="ik_select_list"> \
						</div> \
					</div>',
			dynamicWidth: true,
			ddMaxHeight: 112,
			customClass: 'common_select',
			//equalWidths: true,
			onShow: function(inst){
				inst.$dropdown.css('top', (parseFloat(inst.$dropdown.css('top'))-5)+'px');
				if ( inst.$dropdown.outerWidth() < inst.$link.outerWidth() ){
					inst.$dropdown.css('width', inst.$link.outerWidth());
				}
				if ( inst.$dropdown.outerWidth() > inst.$link.outerWidth() ){
					inst.$dropdown.css('width', inst.$link.outerWidth());
				}
				var count=0,
					client_height=0;
				inst.$dropdown.css('left', inst.$link.offset().left);
				$(inst.$listInnerUl).find('li').each(function(){
					if(!$(this).hasClass('ik_select_option_disabled')){
						++count;
						client_height+=$(this).outerHeight();
					}
				})
				if(client_height<112){
					inst.$listInner.css('height', 'auto');
				}else{
					inst.$listInner.css('height', '112px');
				}
				inst.$link.addClass('opened');
				inst.$listInner.addClass('scroller');
				if($('.confirm_region').length)
					$('.confirm_region').remove();
			},
			onHide: function(inst){
				inst.$link.removeClass('opened');
			}
		});
		// END OF SELECT STYLING

		var timeout;
		$(window).on('resize', function(){
			ignoreResize.push(true);
				clearTimeout(timeout);
				timeout = setTimeout(function(){
					//$('select:visible').ikSelect('redraw');
					var inst='';
					if(inst=$('.common_select-link.opened + select').ikSelect().data('plugin_ikSelect')){
						inst.$dropdown.css('left', inst.$link.offset().left+'px');
					}
				}, 20);
			ignoreResize.pop();
		});
	}
}

if(!funcDefined('CheckTopMenuFullCatalogSubmenu')){
	CheckTopMenuFullCatalogSubmenu = function(){
		if(arNextOptions['THEME']['MENU_TYPE_VIEW'] != 'HOVER')
			return;

		var $menu = $('.menu_top_block');
		if($menu.length)
		{
			var $wrapmenu = $menu.parents('.wrap_menu');

			var wrapMenuWidth = $menu.closest('.wrapper_inner').actual('width');
			if(!wrapMenuWidth)
				wrapMenuWidth = $menu.closest('.wraps').actual('width');

			var bCatalogFirst = $menu.hasClass('catalogfirst');
			var findMenuLi = $('.menu_top_block:visible li.full');
			var parentSubmenuWidth = $menu.actual('outerWidth');
			var wrapMenuLeft = 0;
			var wrapMenuRight = 0;

			if($wrapmenu.length)
			{
				wrapMenuWidth = $wrapmenu.actual('outerWidth');
				wrapMenuLeft = $wrapmenu.offset().left;
				wrapMenuRight = wrapMenuLeft + wrapMenuWidth;
			}

			if($('.catalog_block.menu_top_block').length){
				if($('.catalog_block.menu_top_block').is(':visible'))
					findMenuLi=$('.menu_top_block.catalog_block li.full');
			}
			findMenuLi.each(function(){
				var $this = $(this);
				var $submenu = $this.find('>.dropdown');

				if($submenu.length){
					//if(bCatalogFirst){
						$submenu.css({left: parentSubmenuWidth + 'px', width: (wrapMenuWidth - parentSubmenuWidth) + 'px', 'padding-left': '0px', 'padding-right': '0px', 'opacity': 1});
					/*}
					else{
						$submenu.css({left: ($this.offset().left * -1) + 'px', width: ($(window).width() - 1) + 'px', 'padding-left': wrapMenuLeft + 'px', 'padding-right': ($(window).width() - wrapMenuRight) + 'px'});
					}*/
					// if(!isOnceInited && bCatalogFirst && arNextOptions["THEME"]["MENU_POSITION"] == "TOP"){
					if(!isOnceInited && arNextOptions["THEME"]["MENU_POSITION"] == "TOP"){
						$this.on('mouseenter', function(){
							$submenu.css('min-height', $this.closest('.dropdown').actual('outerHeight') + 'px');
						});
					}
				}
			});
		}
	}
}

$.fn.getMaxHeights = function( outer, classNull, minHeight ){
	var maxHeight = this.map( function( i, e ){
		var calc_height=0;
		$(e).css('height', '');

		if( outer == true )
			calc_height=$(e).actual('outerHeight');
		else
			calc_height=$(e).actual('height');

		return calc_height;
	}).get();
	for(var i = 0, c = maxHeight.length; i < c; ++i)
	{
		if(maxHeight[i] % 2)
			--maxHeight[i];
	}
	return Math.max.apply( this, maxHeight );
}

$.fn.equalizeHeights = function( outer, classNull, minHeight ){
	var maxHeight = this.map( function( i, e ){
		var minus_height=0,
			calc_height=0;


		if(classNull!==false)
		{
			if(!isMobile)
				minus_height=parseInt($(e).find(classNull).actual('outerHeight'));
		}

		if(minus_height)
			minus_height+=12;
		$(e).css('height', '');
		if( outer == true )
			calc_height=$(e).actual('outerHeight')-minus_height;
		else
			calc_height=$(e).actual('height')-minus_height;

		if(minHeight!==false)
		{
			if(calc_height<minHeight)
				calc_height+=(minHeight-calc_height);

			if(window.matchMedia('(max-width: 520px)').matches)
				calc_height=300;

			if(window.matchMedia('(max-width: 400px)').matches)
				calc_height=200;

		}
		return calc_height;
	}).get();

	for(var i = 0, c = maxHeight.length; i < c; ++i){
		if(maxHeight[i] % 2){
			--maxHeight[i];
		}
	}
	return this.height( Math.max.apply( this, maxHeight ) );
}

$.fn.getFloatWidth = function(){
	var width = 0
	if($(this).length){
		var rect = $(this)[0].getBoundingClientRect();
		if(!(width = rect.width))
			width = rect.right - rect.left;
	}
	return width
}

$.fn.sliceHeight = function( options ){
	function _slice(el){
		el.each(function() {
			$(this).css('line-height', '');
			$(this).css('height', '');
		});
		if(options.mobile == true)
		{
			if(window.matchMedia('(max-width: 550px)').matches)
				return;
		}
		if(typeof(options.autoslicecount) == 'undefined' || options.autoslicecount !== false){
			var elsw=(typeof(options.row) !== 'undefined' && options.row.length) ?  el.first().parents(options.row).getFloatWidth() : el.first().parents('.items').getFloatWidth(),
				elw=(typeof(options.item) !== 'undefined' && options.item.length) ? $(options.item).first().getFloatWidth() : (el.first().hasClass('item') ? el.first().getFloatWidth() : el.first().parents('.item').getFloatWidth());

			if(!elsw){
				elsw = el.first().parents('.row').getFloatWidth();
			}
			if(elw && options.fixWidth)
				elw -= options.fixWidth;

			if(elsw && elw){
				options.slice = Math.floor(elsw / elw);
			}
		}
		if(options.customSlice) //manual slice count
		{
			var arBreakpoints = Object.keys(options.breakpoint),
				bSliceNext = false;
			if(arBreakpoints.length)
			{
				elw=(typeof(options.item) !== 'undefined' && options.item.length) ? $(options.item).last().getFloatWidth() : (el.last().hasClass('item') ? el.last().getFloatWidth() : el.last().parents('.item').getFloatWidth());
				if(elw)
					options.sliceNext = Math.floor(elsw / elw);
				for(var key in arBreakpoints)
				{
					if(window.matchMedia(arBreakpoints[key].toString()).matches)
					{
						bSliceNext = true;
						options.slice = options.breakpoint[arBreakpoints[key]];
					}
				}
			}
		}
		if(typeof(options.typeResize) == 'undefined' || options.typeResize == false)
		{
			if(options.slice){
				for(var i = 0; i < el.length; i += options.slice){
					if(options.customSlice && options.sliceNext && bSliceNext && i) //manual slice count
						options.slice = options.sliceNext;
					$(el.slice(i, i + options.slice)).equalizeHeights(options.outer, options.classNull, options.minHeight, options.typeResize, options.typeValue);
				}
			}
			if(options.lineheight){
				var lineheightAdd = parseInt(options.lineheight);
				if(isNaN(lineheightAdd)){
					lineheightAdd = 0;
				}
				el.each(function() {
					$(this).css('line-height', ($(this).actual('height') + lineheightAdd) + 'px');
				});
			}
		}
	}
	var options = $.extend({
		slice: null,
		sliceNext: null,
		outer: false,
		lineheight: false,
		autoslicecount: true,
		classNull: false,
		minHeight: false,
		row:false,
		item:false,
		typeResize:false,
		typeValue:false,
		fixWidth:0,
		resize:true,
		mobile:false,
		customSlice:false,
		breakpoint:{},
	}, options);

	var el = $(this);

	ignoreResize.push(true);
	_slice(el);
	ignoreResize.pop();

	if(options.resize)
	{
		BX.addCustomEvent('onWindowResize', function(eventdata) {
			try{
				ignoreResize.push(true);
				_slice(el);
			}
			catch(e){}
			finally{
				ignoreResize.pop();
			}
		});
	}
	else
	{
		if(!ignoreResize.length)
		{
			// ignoreResize.push(true);
			_slice(el);
			// ignoreResize.pop();
		}
	}
}

$.fn.sliceHeightNoResize = function( options ){
	function _slice(el){

		el.each(function() {
			$(this).css('line-height', '');
			$(this).css('height', '');
		});
		if(typeof(options.autoslicecount) == 'undefined' || options.autoslicecount !== false){
			var elw = (el.first().hasClass('item') ? el.first().getFloatWidth() : el.first().parents('.item').getFloatWidth());
			var elsw = el.first().parents('.items').getFloatWidth();
			if(!elsw){
				elsw = el.first().parents('.row').getFloatWidth();
			}
			if(elsw && elw){
				options.slice = Math.floor(elsw / elw);
			}
		}

		if(options.slice){
			for(var i = 0; i < el.length; i += options.slice){

				$(el.slice(i, i + options.slice)).equalizeHeights(options.outer, options.classNull, options.minHeight);
			}
		}
		if(options.lineheight){
			var lineheightAdd = parseInt(options.lineheight);
			if(isNaN(lineheightAdd)){
				lineheightAdd = 0;
			}
			el.each(function() {
				$(this).css('line-height', ($(this).actual('height') + lineheightAdd) + 'px');
			});
		}
	}

	var options = $.extend({
		slice: null,
		outer: false,
		lineheight: false,
		autoslicecount: true,
		classNull: false,
		minHeight: false,
		options: false,
		resize: true,
	}, options);

	var el = $(this);
	_slice(el);
}

if(!funcDefined('initHoverBlock')){
	function initHoverBlock(target){
		/*$(target).find('.catalog_item.item_wrap').on('mouseenter', function(){
			$(this).addClass('hover');
		})
		$(target).find('.catalog_item.item_wrap').on('mouseleave', function(){
			$(this).removeClass('hover');
		})*/
	}
}
if(!funcDefined('setStatusButton')){
	function setStatusButton(){
		if(!funcDefined('setItemButtonStatus')){
			setItemButtonStatus = function(data){
				if(data.BASKET){
					for( var i in data.BASKET ){
						var id = data.BASKET[i];
						if(typeof id === 'number' || typeof id === 'string'){
							$('.to-cart[data-item='+id+']').hide();
							$('.counter_block[data-item='+id+']').hide();
							$('.in-cart[data-item='+id+']').show();
							$('.in-cart[data-item='+id+']').closest('.button_block').addClass('wide');
						}
					}
				}
				if(data.DELAY){
					for( var i in data.DELAY ){
						var id = data.DELAY[i];
						if(typeof id === 'number' || typeof id === 'string'){
							$('.wish_item.to[data-item='+id+']').hide();
							$('.wish_item.in[data-item='+id+']').show();
							if ($('.wish_item[data-item='+id+']').find(".value.added").length) {
								$('.wish_item[data-item='+id+']').addClass("added");
								$('.wish_item[data-item='+id+']').find(".value").hide();
								$('.wish_item[data-item='+id+']').find(".value.added").show();
							}
						}
					}
				}
				if(data.SUBSCRIBE){
					for( var i in data.SUBSCRIBE ){
						var id = data.SUBSCRIBE;
						if(typeof id === 'number' || typeof id === 'string'){
							$('.to-subscribe[data-item='+id+']').hide();
							$('.in-subscribe[data-item='+id+']').show();
						}
					}
				}
				if(data.COMPARE){
					for( var i in data.COMPARE ){
						var id = data.COMPARE;
						if(typeof id === 'number' || typeof id === 'string'){
							$('.compare_item.to[data-item='+id+']').hide();
							$('.compare_item.in[data-item='+id+']').show();
							if ($('.compare_item[data-item='+id+']').find(".value.added").length){
								$('.compare_item[data-item='+id+']').find(".value").hide();
								$('.compare_item[data-item='+id+']').find(".value.added").show();
							}
						}
					}
				}
			}
		}
		if(!Object.keys(arStatusBasketAspro).length)
		{
			if(typeof arNextOptions === 'undefined')
			{
				var arNextOptions = ({
					"SITE_DIR" : '/'
				});
			}
			$.ajax({
				url: arNextOptions["SITE_DIR"]+'ajax/getAjaxBasket.php',
				type: 'POST',
				success: function(data){
					arStatusBasketAspro = data;
					setItemButtonStatus(arStatusBasketAspro);
				}
			});
		}
		else
			setItemButtonStatus(arStatusBasketAspro);
	}
}


if(!funcDefined('onLoadjqm')){
	var onLoadjqm = function(name, hash, requestData, selector, requestTitle, isButton, thButton){

		$.each($(hash.t).get(0).attributes, function(index, attr){
			if(/^data\-autoload\-(.+)$/.test(attr.nodeName)){
				var key = attr.nodeName.match(/^data\-autoload\-(.+)$/)[1];
				var el = $('input[data-sid="'+key.toUpperCase()+'"]');
				// el.val( $(hash.t).data('autoload-'+key) ).attr('readonly', 'readonly');
				el.val(BX.util.htmlspecialcharsback($(hash.t).data('autoload-'+key))).attr('readonly', 'readonly');
				el.closest('.form-group').addClass('input-filed');
				el.attr('title', el.val());
			}
		});

		//show gift block
		if(hash.w.hasClass('send_gift_frame'))
		{
			var imgHtml = priceHtml = propsHtml = '';
			if($('.offers_img a').length)
				imgHtml = $('.offers_img a').html();
			else if($('.item_main_info .item_slider:not(.flex) .slides li').length)
				imgHtml = $('.item_main_info .item_slider .slides li:first a').html();

			if($('.item_main_info *[itemprop="offers"]').length) //show price
			{
				if($('.offers_img.wof').length || $('.prices_tab').length)
				{
					if($('.prices_block .price').length)
						priceHtml = $('.prices_block .cost.prices').html().replace('id', 'data-id');
				}
				else
				{
					if($('.prices_block .with_matrix').length)
						priceHtml = '<div class="with_matrix">'+$('.prices_block .with_matrix').html()+'</div>';
					else if($('.prices_block .price_group.min').length)
						priceHtml = $('.prices_block .price_group.min').html();
					else if($('.prices_block .price_matrix_wrapper').length)
						priceHtml = $('.prices_block .price_matrix_wrapper').html();
				}
			}

			if($('.buy_block .sku_props').length)
			{
				propsHtml = '<div class="props_item">';
				$('.buy_block .sku_props .bx_catalog_item_scu > div').each(function(){
					var title = $(this).find('.bx_item_section_name > span').html();
					propsHtml += '<div class="prop_item">'+
									'<span>'+
										title + (title.indexOf(':') > 0 ? '' : ': ')+
										(title.indexOf(':') > 0 ? '' : '<span class="val">'+$(this).find('ul li.active > span').text()+'</span>')+
									'</span>'+
								'</div>';

				})
				propsHtml += '</div>';
			}
			$('<div class="custom_block">'+
				'<div class="title">'+BX.message('POPUP_GIFT_TEXT')+'</div>'+
				'<div class="item_block">'+
					'<table class="item_list"><tr>'+
						'<td class="image">'+
							'<div>'+imgHtml+'</div>'+
						'</td>'+
						'<td class="text">'+
							'<div class="name">'+$('h1').text()+'</div>'+
							priceHtml+
							propsHtml+
						'</td>'+
					'</tr></table>'+
				'</div>'+
				'</div>').prependTo(hash.w.find('.form_body'))
		}

		if(arNextOptions['THEME']['REGIONALITY_SEARCH_ROW'] == 'Y' && (hash.w.hasClass('city_chooser_frame ') || hash.w.hasClass('city_chooser_small_frame')))
			hash.w.addClass('small_popup_regions')

		hash.w.addClass('show').css({
			'margin-left': ($(window).width() > hash.w.outerWidth() ? '-' + hash.w.outerWidth() / 2 + 'px' : '-' + $(window).width() / 2 + 'px'),
			// 'top': $(document).scrollTop() + (($(window).height() > hash.w.outerHeight() ? ($(window).height() - hash.w.outerHeight()) / 2 : 10))   + 'px',
			'top': (($(window).height() > hash.w.height()) ? Math.floor(($(window).height() - hash.w.height()) / 2) : 0) + 'px',
			'opacity': 1
		});

		var eventdata = {action:'loadForm'};
		BX.onCustomEvent('onCompleteAction', [eventdata, $(hash.t)[0]]);


		if(typeof(requestData) == 'undefined'){
			requestData = '';
		}
		if(typeof(selector) == 'undefined'){
			selector = false;
		}
		var width = $('.'+name+'_frame').width();
		$('.'+name+'_frame').css('margin-left', '-'+width/2+'px');

		if(name=='order-popup-call') {
		}
		else if(name=='order-button') {
			$(".order-button_frame").find("div[product_name]").find("input").val(hash.t.title).attr("readonly", "readonly").css({"overflow": "hidden", "text-overflow": "ellipsis"});
		}
		else if(name=='basket_error')
		{
			$(".basket_error_frame .pop-up-title").text(requestTitle);
			$(".basket_error_frame .ajax_text").html(requestData);

			if(window.matchMedia('(max-width: 991px)').matches)
			{
				$("body").addClass("all_viewed");
			}

			initSelects(document);
			if(isButton=="Y" && thButton)
				$("<div class='popup_button_basket_wr'><span class='popup_button_basket big_btn button' data-item="+thButton.data("item")+"><span class='btn btn-default'>"+BX.message("ERROR_BASKET_BUTTON")+"</span></span></div>").insertAfter($(".basket_error_frame .ajax_text"));
		}
		else if( name == 'one_click_buy') {
			$('#one_click_buy_form').submit( function() {
				if($('#one_click_buy_form').valid())
				{
					if($('.'+name+'_frame form input.error').length || $('.'+name+'_frame form textarea.error').length) {
						return false
					}
					else if(!$(this).find('#one_click_buy_form_button').hasClass('clicked')){

						if(!$(this).find('#one_click_buy_form_button').hasClass("clicked"))
							$(this).find('#one_click_buy_form_button').addClass("clicked");
						var form_url = $(this).attr('action');

						var bSend = true;
						if(window.renderRecaptchaById && window.asproRecaptcha && window.asproRecaptcha.key)
						{
							if(window.asproRecaptcha.params.recaptchaSize == 'invisible' && typeof grecaptcha != 'undefined')
							{
								if($('#one_click_buy_form').find('.g-recaptcha-response').val())
								{
									// eventdata.form.submit();
									bSend = true;
								}
								else
								{
									grecaptcha.execute($('#one_click_buy_form').find('.g-recaptcha').data('widgetid'));
									$(this).find('#one_click_buy_form_button').removeClass("clicked");
									bSend = false;
								}
							}
						}
						if(bSend)
						{
							$.ajax({
								url: $(this).attr('action'),
								data: $(this).serialize(),
								type: 'POST',
								dataType: 'json',
								error: function(data) {
									alert('Error connecting server');
								},
								success: function(data) {
									if(data.result == 'Y'){
										if(arNextOptions['COUNTERS']['USE_1CLICK_GOALS'] !== 'N'){
											var eventdata = {goal: 'goal_1click_success'};
											BX.onCustomEvent('onCounterGoals', [eventdata])
										}

										if(ocb_files.length)
										{
											var obData = new FormData(),
												bHasFiles = false;
											$.each( ocb_files, function( key, value ){
												if(value)
												{
													bHasFiles = true;
													obData.append( key+'_'+value.code , value[0] );
												}
											});
											if(bHasFiles)
											{
												$.ajax({
													url: form_url+'?uploadfiles&orderID='+data.message,
													type: 'POST',
													data: obData,
													cache: false,
													dataType: 'json',
													processData: false, // Don't process the files
													contentType: false, // this is string query
													error: function(data, exception) {
														if(data)
														{
															// if('statusText')
															console.log(data);
															console.log(exception);
														}
														alert('Error with files');
													},
													success: function( respond, textStatus, jqXHR ){
														$('.one_click_buy_result').show();
														$('.one_click_buy_result_success').show();
														purchaseCounter(data.message, arNextOptions["COUNTERS"]["TYPE"]["ONE_CLICK"]);
													}
												})
											}
											else
											{
												$('.one_click_buy_result').show();
												$('.one_click_buy_result_success').show();
												purchaseCounter(data.message, arNextOptions["COUNTERS"]["TYPE"]["ONE_CLICK"]);
											}
										}
										else
										{
											$('.one_click_buy_result').show();
											$('.one_click_buy_result_success').show();
											purchaseCounter(data.message, arNextOptions["COUNTERS"]["TYPE"]["ONE_CLICK"]);
										}
									}
									else{
										$('.one_click_buy_result').show();
										$('.one_click_buy_result_fail').show();
										if(('err' in data) && data.err)
											data.message=data.message+' \n'+data.err;
										$('.one_click_buy_result_text').html(data.message);
									}
									$('.one_click_buy_modules_button', self).removeClass('disabled');
									$('#one_click_buy_form').hide();
									$('#one_click_buy_form_result').show();
								}
							});
						}
					}
				}
				return false;
			});
		}
		else if( name == 'one_click_buy_basket') {
			$('#one_click_buy_form').on("submit", function(){
				if($('#one_click_buy_form').valid())
				{
					if($('.'+name+'_frame form input.error').length || $('.'+name+'_frame form textarea.error').length) {
						return false
					}
					else if(!$(this).find('#one_click_buy_form_button').hasClass('clicked')){

						if(!$(this).find('#one_click_buy_form_button').hasClass("clicked"))
							$(this).find('#one_click_buy_form_button').addClass("clicked");
						var form_url = $(this).attr('action');

						var bSend = true;
						if(window.renderRecaptchaById && window.asproRecaptcha && window.asproRecaptcha.key)
						{
							if(window.asproRecaptcha.params.recaptchaSize == 'invisible' && typeof grecaptcha != 'undefined')
							{
								if($('#one_click_buy_form').find('.g-recaptcha-response').val())
								{
									// eventdata.form.submit();
									bSend = true;
								}
								else
								{
									grecaptcha.execute($('#one_click_buy_form').find('.g-recaptcha').data('widgetid'));
									$(this).find('#one_click_buy_form_button').removeClass("clicked");
									bSend = false;
								}
							}
						}
						if(bSend)
						{
							$.ajax({
								url: $(this).attr('action'),
								data: $(this).serialize(),
								type: 'POST',
								dataType: 'json',
								error: function(data) {
									window.console&&console.log(data);
								},
								success: function(data) {
									if(data.result == 'Y') {
										if(arNextOptions['COUNTERS']['USE_FASTORDER_GOALS'] !== 'N'){
											var eventdata = {goal: 'goal_fastorder_success'};
											BX.onCustomEvent('onCounterGoals', [eventdata])
										}

										if(ocb_files.length)
										{
											var obData = new FormData(),
												bHasFiles = false;
											$.each( ocb_files, function( key, value ){
												if(value)
												{
													bHasFiles = true;
													obData.append( key+'_'+value.code , value[0] );
												}
											});
											if(bHasFiles)
											{
												$.ajax({
													url: form_url+'?uploadfiles&orderID='+data.message,
													type: 'POST',
													data: obData,
													cache: false,
													dataType: 'json',
													processData: false, // Don't process the files
													contentType: false, // this is string query
													error: function(data) {
														alert('Error with files');
													},
													success: function( respond, textStatus, jqXHR ){
														$('.one_click_buy_result').show();
														$('.one_click_buy_result_success').show();
														purchaseCounter(data.message, arNextOptions["COUNTERS"]["TYPE"]["ONE_CLICK"]);
													}
												})
											}
											else
											{
												$('.one_click_buy_result').show();
												$('.one_click_buy_result_success').show();
												purchaseCounter(data.message, arNextOptions["COUNTERS"]["TYPE"]["ONE_CLICK"]);
											}
										}
										else
										{
											$('.one_click_buy_result').show();
											$('.one_click_buy_result_success').show();
											purchaseCounter(data.message, arNextOptions["COUNTERS"]["TYPE"]["QUICK_ORDER"]);
										}
									}
									else{
										$('.one_click_buy_result').show();
										$('.one_click_buy_result_fail').show();
										if(('err' in data) && data.err)
											data.message=data.message+' \n'+data.err;
										$('.one_click_buy_result_text').text(data.message);
									}
									$('.one_click_buy_modules_button', self).removeClass('disabled');
									$('#one_click_buy_form').hide();
									$('#one_click_buy_form_result').show();
								}
							});
						}
					}
				}
				return false;
			});
		}

		$('.'+name+'_frame').show();
	}
}

$.fn.jqmEx = function(){
	// $(this).each(function(){
		var _this = $(this);
		var name = _this.data('name');
		var sFastViewClass = '';
		if(name.length){
			if(_this.closest('#fast_view_item').length)
				sFastViewClass = 'fast_view_popup';
			var script = arNextOptions['SITE_DIR'] + 'ajax/form.php';
			var paramsStr = ''; var trigger = ''; var arTriggerAttrs = {};
			$.each(_this.get(0).attributes, function(index, attr){
				var attrName = attr.nodeName;
				var attrValue = _this.attr(attrName);
				trigger += '[' + attrName + '=\"' + attrValue + '\"]';
				arTriggerAttrs[attrName] = attrValue;
				if(/^data\-param\-(.+)$/.test(attrName)){
					var key = attrName.match(/^data\-param\-(.+)$/)[1];
					paramsStr += key + '=' + attrValue + '&';
				}
			});
			var triggerAttrs = JSON.stringify(arTriggerAttrs);
			var encTriggerAttrs = encodeURIComponent(triggerAttrs);
			if(name == 'auth')
				script += '?' + paramsStr + 'auth=Y';
			else
				script += '?' + paramsStr + 'data-trigger=' + encTriggerAttrs;
			if(!$('.' + name + '_frame[data-trigger="' + encTriggerAttrs + '"]').length){
				if(_this.attr('disabled') != 'disabled'){
					$('body').find('.' + name + '_frame[data-trigger="' + encTriggerAttrs + '"]').remove();
					$('body').append('<div class="' + name + '_frame '+sFastViewClass+' jqmWindow popup" data-trigger="' + encTriggerAttrs + '"></div>');
					$('.' + name + '_frame[data-trigger="' + encTriggerAttrs + '"]').jqm({trigger: trigger, onLoad: function(hash){onLoadjqm(name, hash);}, onHide: function(hash){onHidejqm(name, hash);}, ajax:script});
				}
			}
		}
	// });
}

if(!funcDefined('onHidejqm')){
	var onHidejqm = function(name, hash){
		if (hash.w.find('.one_click_buy_result_success').is(':visible') && name=="one_click_buy_basket") {
			window.location.href = window.location.href;
		}

		if($('.xzoom-source').length)
			$('.xzoom-source').remove();
		if($('.xzoom-preview').length)
			$('.xzoom-preview').remove();

		// hash.w.css('opacity', 0).hide();
		hash.w.animate({'opacity': 0}, 200, function(){
			hash.w.hide();
			hash.w.empty();
			hash.o.remove();
			hash.w.removeClass('show');

			if(window.matchMedia('(max-width: 991px)').matches)
			{
				$("body").removeClass("all_viewed");
			}

			if(name == 'fast_view')
				$('.fast_view_popup').remove();
		});
	}
}

if(!funcDefined("oneClickBuy")) {
	var oneClickBuy = function (elementID, iblockID, that) {
		var name = 'one_click_buy';
		var elementQuantity = 1;
		var offerProps = false;
		var buy_btn=$(that).closest('.buy_block').find('.to-cart');
		var buy_btn2=$(that).closest('tr').find('.to-cart');

		if(typeof(that) !== 'undefined'){
			elementQuantity = $(that).attr('data-quantity');
			offerProps = $(that).attr('data-props');
		}

		if(elementQuantity < 0){
			elementQuantity = 1;
		}

		var tmp_props=buy_btn.data("props"),
			tmp_props2=buy_btn2.data("props"),
			props='',
			part_props='',
			add_props='N',
			fill_prop={},
			iblockid = buy_btn.data('iblockid'),
			item = buy_btn.attr('data-item');

		if(tmp_props){
			props=tmp_props.split(";");
		}else if(tmp_props2){
			props=tmp_props2.split(";");
		}
		if(buy_btn.data("part_props")){
			part_props=buy_btn.data("part_props");
		}
		if(buy_btn.data("add_props")){
			add_props=buy_btn.data("add_props");
		}

		fill_prop=fillBasketPropsExt(buy_btn, 'prop', buy_btn.data('bakset_div'));
		fill_prop.iblockID=iblockid;
		fill_prop.part_props=part_props;
		fill_prop.add_props=add_props;
		fill_prop.props=JSON.stringify(props);
		fill_prop.item=item;
		fill_prop.ocb_item="Y";

		if(window.matchMedia('(min-width:992px)').matches)
		{
			if(!$(that).hasClass('clicked'))
			{
				$(that).addClass('clicked');
				$('body').find('.'+name+'_frame').remove();
				$('body').find('.'+name+'_trigger').remove();
				$('body').append('<div class="'+name+'_frame popup"></div>');
				$('body').append('<div class="'+name+'_trigger"></div>');
				$('.'+name+'_frame').jqm({trigger: '.'+name+'_trigger', onHide: function(hash) { onHidejqm(name,hash); }, toTop: false, onLoad: function( hash ){ onLoadjqm(name, hash ); }, ajax: arNextOptions["SITE_DIR"]+'ajax/one_click_buy.php?ELEMENT_ID='+elementID+'&IBLOCK_ID='+iblockID+'&ELEMENT_QUANTITY='+elementQuantity+'&OFFER_PROPS='+fill_prop.props});
				$('.'+name+'_trigger').click();
			}
		}
		else
		{
			var script = arNextOptions['SITE_DIR'] + 'form/';
			script += '?name='+name+'&form_id=ocb&path='+window.location.pathname+'&ELEMENT_ID='+elementID+'&IBLOCK_ID='+iblockID+'&ELEMENT_QUANTITY='+elementQuantity+'&OFFER_PROPS='+fill_prop.props
			location.href = script;
		}
	}
}

if(!funcDefined("oneClickBuyBasket")) {
	var oneClickBuyBasket = function () {
		name = 'one_click_buy_basket';
		if(window.matchMedia('(min-width:992px)').matches)
		{
			if(!$('.fast_order').hasClass('clicked'))
			{
				$('.fast_order').addClass('clicked');
				$('body').find('.'+name+'_frame').remove();
				$('body').find('.'+name+'_trigger').remove();
				$('body').append('<div class="'+name+'_frame popup"></div>');
				$('body').append('<div class="'+name+'_trigger"></div>');
				$('.'+name+'_frame').jqm({trigger: '.'+name+'_trigger', onHide: function(hash) { onHidejqm(name,hash) }, onLoad: function( hash ){ onLoadjqm( name, hash ); }, ajax: arNextOptions["SITE_DIR"]+'ajax/one_click_buy_basket.php'});
				$('.'+name+'_trigger').click();
			}
		}
		else
		{
			var script = arNextOptions['SITE_DIR'] + 'form/';
			script += '?name='+name+'&form_id=ocb&path='+window.location.pathname+'&buy_basket=y';
			location.href = script;
		}
	}
}

if(!funcDefined("scroll_block")) {
	function scroll_block(block){
		var topPos = block.offset().top,
			headerH = $('header').outerHeight(true,true);
		if($(".stores_tab").length){
			$(".stores_tab").addClass("active").siblings().removeClass("active");
		}else{
			$(".prices_tab").addClass("active").siblings().removeClass("active");
			if($(".prices_tab .opener").length && !$(".prices_tab .opener .opened").length){
				var item = $(".prices_tab .opener").first();
				item.find(".opener_icon").addClass("opened");
				item.parents("tr").addClass("nb")
				item.parents("tr").next(".offer_stores").find(".stores_block_wrap").slideDown(200);
			}
		}
		$('html,body').animate({'scrollTop':topPos-80},150);
	}
}

if(!funcDefined("jqmEd")) {
	var jqmEd = function (name, form_id, open_trigger, requestData, selector, requestTitle, isButton, thButton){
		if(typeof(requestData) == "undefined"){
			requestData = '';
		}
		if(typeof(selector) == "undefined"){
			selector = false;
		}
		$('body').find('.'+name+'_frame').remove();
		$('body').append('<div class="'+name+'_frame jqmWindow popup"></div>');
		if(typeof open_trigger == "undefined" ){
			$('.'+name+'_frame').jqm({trigger: '.'+name+'_frame.popup',onHide: function(hash) { onHidejqm(name,hash); }, onLoad: function( hash ){ onLoadjqm( name , hash , requestData, selector); }, ajax: arNextOptions["SITE_DIR"]+'ajax/form.php?form_id='+form_id+(requestData.length ? '&' + requestData : '')});
		}else{
			if(name == 'enter'){
				$('.'+name+'_frame').jqm({trigger: open_trigger,onHide: function(hash) { onHidejqm(name,hash); },  onLoad: function( hash ){ onLoadjqm( name , hash , requestData, selector); }, ajax: arNextOptions["SITE_DIR"]+'ajax/auth.php'});
			}else if(name=='basket_error'){
				$('.'+name+'_frame').jqm({trigger: open_trigger, onHide: function(hash) { onHidejqm(name,hash); }, onLoad: function( hash ){ onLoadjqm( name , hash , requestData, selector, requestTitle, isButton, thButton); }, ajax: arNextOptions["SITE_DIR"]+'ajax/basket_error.php'});

			}else{
				$('.'+name+'_frame').jqm({trigger: open_trigger, onHide: function(hash) { onHidejqm(name,hash); }, onLoad: function( hash ){ onLoadjqm( name , hash , requestData, selector); }, ajax: arNextOptions["SITE_DIR"]+'ajax/form.php?form_id='+form_id+(requestData.length ? '&' + requestData : '')});
			}
			$(open_trigger).dblclick(function(){return false;})
		}
		return true;
	}
}

if (!funcDefined("replaceBasketPopup")){
	function replaceBasketPopup (hash){
		if(typeof hash != "undefined"){
			hash.w.hide();
			hash.o.hide();
		}
	}
}

if(!funcDefined("waitLayer")){
	function waitLayer(delay, callback){
		if((typeof dataLayer !== 'undefined') && (typeof callback === 'function')){
			callback();
		}
		else{
			setTimeout(function() {
				waitLayer(delay, callback);
			}, delay);
		}
	}
}

if(!funcDefined("InitTopestMenuGummi")){
	InitTopestMenuGummi = function(){
		if(!isOnceInited){
			function _init(){
				var arItems = $menuTopest.find('>li:not(.more)');
				var cntItems = arItems.length;
				if(cntItems){
					var itemsWidth = 0;
					for(var i = 0; i < cntItems; ++i){
						var item = arItems.eq(i);
						var itemWidth = item.actual('outerWidth',{includeMargin: true});
						arItemsHideWidth[i] = (itemsWidth += itemWidth) + (i !== (cntItems - 1) ? moreWidth : 0);
					}
				}
			}

			function _gummi(){
				var rowWidth = $menuTopest.actual('innerWidth');
				var arItems = $menuTopest.find('>li:not(.more),li.more>.dropdown>li');
				var cntItems = arItems.length;
				if(cntItems){
					var bMore = false;
					for(var i = cntItems - 1; i >= 0; --i){
						var item = arItems.eq(i);
						var bInMore = item.parents('.more').length > 0;
						if(!bInMore){
							if(arItemsHideWidth[i] > rowWidth){
								if(!bMore){
									bMore = true;
									more.removeClass('hidden');
								}
								var clone = item.clone();
								clone.find('>a').addClass('dark_font');
								clone.prependTo(moreDropdown);
								item.addClass('cloned');
							}
						}
					}
					for(var i = 0; i < cntItems; ++i){
						var item = arItems.eq(i);
						var bInMore = item.parents('.more').length > 0;
						if(bInMore){
							if(arItemsHideWidth[i] <= rowWidth){
								if(i === (cntItems - 1)){
									bMore = false;
									more.addClass('hidden');
								}
								var clone = item.clone();
								clone.find('>a').removeClass('dark_font');
								clone.insertBefore(more);
								item.addClass('cloned');
							}
						}
					}
					$menuTopest.find('li.cloned').remove();
				}
			}

			var $menuTopest = $('.menu.topest');
			if($menuTopest.length)
			{
				var more = $menuTopest.find('>.more');
				var moreDropdown = more.find('>.dropdown');
				var moreWidth = more.actual('outerWidth',{includeMargin: true});
				var arItemsHideWidth = [];

				ignoreResize.push(true);
				_init();
				_gummi();
				ignoreResize.pop();

				BX.addCustomEvent('onWindowResize', function(eventdata) {
					try{
						ignoreResize.push(true);
						_gummi();
					}
					catch(e){}
					finally{
						ignoreResize.pop();
					}
				});
			}
		}
	}
}

if(!funcDefined("InitTopMenuGummi")){
	InitTopMenuGummi = function(){
		function _init(){
			var arItems = $topMenu.closest('.wrap_menu').find('.inc_menu .menu_top_block >li:not(.more)');
			var cntItems = arItems.length;
			if(cntItems){
				var itemsWidth = 0;
				for(var i = 0; i < cntItems; ++i){
					var item = arItems.eq(i);
						var itemWidth = item.actual('outerWidth');
						arItemsHideWidth[i] = (itemsWidth += itemWidth) + (i !== (cntItems - 1) ? moreWidth : 0);
				}
			}

		}

		function _gummi(){
			var rowWidth = $wrapMenu.actual('innerWidth') - $wrapMenuLeft.actual('innerWidth');
			var arItems = $topMenu.find('>li:not(.more):not(.catalog),li.more>.dropdown>li');
			var cntItems = arItems.length;

			if(cntItems){
				var bMore = false;
				for(var i = cntItems - 1; i >= 0; --i){
					var item = arItems.eq(i);
					var bInMore = item.parents('.more').length > 0;
					if(!bInMore){
						if(arItemsHideWidth[i] > rowWidth){
							if(!bMore){
								bMore = true;
								more.removeClass('hidden');
							}
							var clone = item.clone();
							clone.find('>.dropdown').removeAttr('style').removeClass('toleft');
							clone.find('>a').addClass('dark_font').removeAttr('style');
							clone.prependTo(moreDropdown);
							item.addClass('cloned');
						}
					}
				}
				for(var i = 0; i < cntItems; ++i){
					var item = arItems.eq(i);
					var bInMore = item.parents('.more').length > 0;
					if(bInMore){
						if(arItemsHideWidth[i] <= rowWidth){
							if(i === (cntItems - 1)){
								bMore = false;
								more.addClass('hidden');
							}
							var clone = item.clone();
							clone.find('>a').removeClass('dark_font');
							clone.insertBefore(more);
							item.addClass('cloned');
						}
					}
				}
				$topMenu.find('li.cloned').remove();

				var cntItemsVisible = $topMenu.find('>li:not(.more):not(.catalog)').length;
				var o = rowWidth - arItemsHideWidth[cntItemsVisible - 1];
				var itemsPaddingAdd = Math.floor(o / (cntItemsVisible + (more.hasClass('hidden') ? 0 : 1)));
				var itemsPadding_new = itemsPadding_min + itemsPaddingAdd;
				var itemsPadding_new_l = Math.floor(itemsPadding_new / 2);
				var itemsPadding_new_r = itemsPadding_new - itemsPadding_new_l;

				$topMenu.find('>li:not(.catalog):visible>a').each(function(){
					$(this).css({'padding-left': itemsPadding_new_l + 'px'});
					$(this).css({'padding-right': itemsPadding_new_r + 'px'});
				});

				var lastItemPadding_new = itemsPadding_new + o - (cntItemsVisible + (more.is(':visible') ? 1 : 0)) * itemsPaddingAdd;
				var lastItemPadding_new_l = Math.floor(lastItemPadding_new / 2);
				var lastItemPadding_new_r = lastItemPadding_new - lastItemPadding_new_l;
				$topMenu.find('>li:visible').last().find('>a').css({'padding-left': lastItemPadding_new_l + 'px'});
				$topMenu.find('>li:visible').last().find('>a').css({'padding-right': lastItemPadding_new_r + 'px'});
			}
			CheckTopMenuFullCatalogSubmenu();
		}

		var $topMenu = $('.menu_top_block');
		if($menuTopest.length)
		{
			var $wrapMenu = $topMenu.parents('.wrap_menu');
			var $wrapMenuLeft = $wrapMenu.find('.catalog_menu_ext');
			var more = $topMenu.find('>.more');
			var moreWidth = more.actual('outerWidth',{includeMargin: true});
			more.addClass('hidden');
			var arItemsHideWidth = [];
			var moreDropdown = more.find('>.dropdown');
			var itemsPadding = parseInt(more.find('>a').css('padding-left')) * 2;
			var itemsPadding_min = itemsPadding;

			// setTimeout(function(){
				ignoreResize.push(true);
				_init();
				_gummi();
				ignoreResize.pop();
			// }, 100)

			BX.addCustomEvent('onWindowResize', function(eventdata) {
				try{
					ignoreResize.push(true);
					_gummi();
				}
				catch(e){}
				finally{
					ignoreResize.pop();
				}
			});

			/*BX.addCustomEvent('onTopPanelFixUnfix', function(eventdata) {
				ignoreResize.push(true);
				_gummi();
				ignoreResize.pop();
			});*/
		}
	}
}

if(!funcDefined("checkCounters")){
	function checkCounters(name){
		if(typeof name !== "undefined"){
			if(name == "google" && (arNextOptions["COUNTERS"]["GOOGLE_ECOMERCE"] == "Y" && arNextOptions["COUNTERS"]["GOOGLE_COUNTER"] > 0)){
				return true;
			}
			else if(name == "yandex" && (arNextOptions["COUNTERS"]["YANDEX_ECOMERCE"] == "Y" && arNextOptions["COUNTERS"]["YANDEX_COUNTER"] > 0)){
				return true;
			}
			else{
				return false;
			}
		}
		else if((arNextOptions["COUNTERS"]["YANDEX_ECOMERCE"] == "Y" && arNextOptions["COUNTERS"]["YANDEX_COUNTER"] > 0) || (arNextOptions["COUNTERS"]["GOOGLE_ECOMERCE"] == "Y" && arNextOptions["COUNTERS"]["GOOGLE_COUNTER"] > 0)) {
			return true;
		}
		else{
			return false;
		}
	}
}

if(!funcDefined("addBasketCounter")){
	function addBasketCounter(id){
		if(arNextOptions['COUNTERS']['USE_BASKET_GOALS'] !== 'N'){
			var eventdata = {goal: 'goal_basket_add', params: {id: id}};
			BX.onCustomEvent('onCounterGoals', [eventdata]);
		}
		if(checkCounters()){
			$.ajax({
				url:arNextOptions['SITE_DIR'] + "ajax/goals.php",
				dataType: "json",
				type: "POST",
				data: {"ID": id},
				success: function(item){
					if(!!item && !!item.ID){
						waitLayer(100, function() {
							dataLayer.push({
								"event": arNextOptions["COUNTERS"]['GOOGLE_EVENTS']['ADD2BASKET'],
							    "ecommerce": {
							    	"currencyCode": item.CURRENCY,
							        "add": {
							            "products": [{
						                    "id": item.ID,
						                    "name": item.NAME,
						                    "price": item.PRICE,
						                    "brand": item.BRAND,
						                    "category": item.CATEGORY,
						                    "quantity": item.QUANTITY
						                }]
							        }
							    }
							});
						});
					}
				}
			});
		}
	}
}

if(!funcDefined("purchaseCounter")){
	function purchaseCounter(order_id, type, callback){
		if(checkCounters()){
			$.ajax({
				url:arNextOptions['SITE_DIR'] + "ajax/goals.php",
				dataType: "json",
				type: "POST",
				data: {"ORDER_ID": order_id, "TYPE": type},
				success: function(order){
					var products = [];
					if(order.ITEMS){
						for(var i in order.ITEMS){
							products.push({
								"id": order.ITEMS[i].ID,
								"sku": order.ITEMS[i].ID,
			                    "name": order.ITEMS[i].NAME,
			                    "price": order.ITEMS[i].PRICE,
			                    "brand": order.ITEMS[i].BRAND,
			                    "category": order.ITEMS[i].CATEGORY,
			                    "quantity": order.ITEMS[i].QUANTITY
							});
						}
					}
					if(order.ID){
						waitLayer(100, function() {
							dataLayer.push({
								"event": arNextOptions["COUNTERS"]['GOOGLE_EVENTS']['PURCHASE'],
							    "ecommerce": d = {
							    	"purchase": {
								    	"actionField":{
								    		"id": order.ACCOUNT_NUMBER,
								    		"shipping": order.PRICE_DELIVERY,
								    		"tax": order.TAX_VALUE,
								    		"list": type,
								    		"revenue": order.PRICE
								    	},
							            "products": products
							        }
							    }
							});

							if(typeof callback !== 'undefined'){
								callback(d);
							}
						});
					}
				}
			});
		}
	}
}

if(!funcDefined("viewItemCounter")){
	function viewItemCounter(id, price_id){
		if(checkCounters()){
			$.ajax({
				url:arNextOptions['SITE_DIR'] + "ajax/goals.php",
				dataType: "json",
				type: "POST",
				data: {"PRODUCT_ID": id, "PRICE_ID": price_id},
				success: function(item){
					if(item.ID){
						waitLayer(100, function() {
							dataLayer.push({
								//"event": "",
								"ecommerce": {
									"detail": {
										"products": [{
											"id": item.ID,
											"name": item.NAME,
											"price": item.PRICE,
											"brand": item.BRAND,
											"category": item.CATEGORY
										}]
									}
								}
							});
						});
					}
				}
			});
		}
	}
}

if(!funcDefined("checkoutCounter")){
	function checkoutCounter(step, option, callback){
		if(checkCounters('google')){
			$.ajax({
				url:arNextOptions['SITE_DIR'] + "ajax/goals.php",
				dataType: "json",
				type: "POST",
				data: {"BASKET": "Y"},
				success: function(basket){
					var products = [];
					if(basket.ITEMS){
						for(var i in basket.ITEMS){
							products.push({
								"id": basket.ITEMS[i].ID,
			                    "name": basket.ITEMS[i].NAME,
			                    "price": basket.ITEMS[i].PRICE,
			                    "brand": basket.ITEMS[i].BRAND,
			                    "category": basket.ITEMS[i].CATEGORY,
			                    "quantity": basket.ITEMS[i].QUANTITY
							});
						}
					}
					if(products){
						waitLayer(100, function() {
							dataLayer.push({
								"event": arNextOptions["COUNTERS"]['GOOGLE_EVENTS']['CHECKOUT_ORDER'],
							    "ecommerce": {
							    	'checkout': {
								    	"actionField":{
								    		"step": step,
								    		"option": option
								    	},
								        "products": products
								    }
							    },
							    /*"eventCallback": function() {
							    	if((typeof callback !== 'undefined') && (typeof callback === 'function')){
							    		callback();
							    	}
							   }*/
							});
						});
					}
				}
			});
		}
	}
}

if(!funcDefined("delFromBasketCounter")){
	function delFromBasketCounter(id, callback){
		if(checkCounters()){
			$.ajax({
				url:arNextOptions['SITE_DIR'] + "ajax/goals.php",
				dataType: "json",
				type: "POST",
				data: {"ID": id},
				success: function(item){
					if(item.ID){
						waitLayer(100, function() {
							dataLayer.push({
								"event": arNextOptions["COUNTERS"]['GOOGLE_EVENTS']['REMOVE_BASKET'],
							    "ecommerce": {
							        "remove": {
							            "products": [{
						                    "id": item.ID,
						                    "name": item.NAME,
						                    "category": item.CATEGORY
						                }]
							        }
							    }
							});
							if(typeof callback == 'function'){
								callback();
							}
						});
					}
				}
			});
		}
	}
}

if(!funcDefined("setHeightCompany")){
	function setHeightCompany(){
		$('.md-50.img').height($('.md-50.big').outerHeight()-35);
	}
}

if(!funcDefined("initSly")){
	function initSly(){
		var $frame  = $(document).find('.frame');
		var $slidee = $frame.children('ul').eq(0);
		var $wrap   = $frame.parent();

		if(arNextOptions["PAGES"]["CATALOG_PAGE"] && $frame.length){
			$frame.sly({
				horizontal: 1,
				itemNav: 'basic',
				smart: 1,
				mouseDragging: 0,
				touchDragging: 0,
				releaseSwing: 0,
				startAt: 0,
				scrollBar: $wrap.find('.scrollbar'),
				scrollBy: 1,
				speed: 300,
				elasticBounds: 0,
				easing: 'swing',
				dragHandle: 1,
				dynamicHandle: 1,
				clickBar: 1,

				// Buttons
				forward: $wrap.find('.forward'),
				backward: $wrap.find('.backward'),
			});
			$frame.sly('reload');
		}
	}
}

if(!funcDefined("createTableCompare")){
	function createTableCompare(originalTable, appendDiv, cloneTable){

		try{
			var clone = originalTable.clone().removeAttr('id').addClass('clone');
			if(cloneTable.length){
				cloneTable.remove();
				appendDiv.html('');
				appendDiv.html(clone);
			}else{
				appendDiv.append(clone);
			}
		}
		catch(e){}
		finally{

		}
	}
}

if(!funcDefined('fillBasketPropsExt')){
	fillBasketPropsExt = function(that, prop_code, basket_prop_div){
		var
			i = 0,
			propCollection = null,
			foundValues = false,
			basketParams = {},
			obBasketProps = null;

		// obBasketProps = that.closest('.catalog_detail').find('.basket_props_block');
		obBasketProps = BX(basket_prop_div);

		if (!!obBasketProps)
		{
			propCollection = obBasketProps.getElementsByTagName('select');
			if (!!propCollection && !!propCollection.length)
			{
				for (i = 0; i < propCollection.length; i++)
				{
					if (!propCollection[i].disabled)
					{
						switch(propCollection[i].type.toLowerCase())
						{
							case 'select-one':
								basketParams[propCollection[i].name] = propCollection[i].value;
								foundValues = true;
								break;
							default:
								break;
						}
					}
				}
			}
			propCollection = obBasketProps.getElementsByTagName('input');
			if (!!propCollection && !!propCollection.length)
			{
				for (i = 0; i < propCollection.length; i++)
				{
					if (!propCollection[i].disabled)
					{
						switch(propCollection[i].type.toLowerCase())
						{
							case 'hidden':
								basketParams[propCollection[i].name] = propCollection[i].value;
								foundValues = true;
								break;
							case 'radio':
								if (propCollection[i].checked)
								{
									basketParams[propCollection[i].name] = propCollection[i].value;
									foundValues = true;
								}
								break;
							default:
								break;
						}
					}
				}
			}
		}
		if (!foundValues)
		{
			basketParams[prop_code] = [];
			basketParams[prop_code][0] = 0;
		}
		return basketParams;
	}
}
if(!funcDefined('showBasketError')){
	showBasketError = function(mess, title, addButton, th){
		var title_set=(title ? title : BX.message("ERROR_BASKET_TITLE")),
			isButton="N",
			thButton="";
		if(typeof addButton!==undefined){
			isButton="Y";
		}
		if(typeof th!==undefined){
			thButton=th;
		}
		$("body").append("<span class='add-error-bakset' style='display:none;'></span>");
		jqmEd('basket_error', 'error-bakset', '.add-error-bakset', mess, this, title_set, isButton, thButton);
		$("body .add-error-bakset").click();
		$("body .add-error-bakset").remove();
	}
}

CheckTopMenuDotted = function(){
	var menu = $('nav.mega-menu.sliced');

	/*if(isMobile)
		return;*/
	if(window.matchMedia('(max-width:991px)').matches)
		return;

	if(menu.length)
	{
		menu.each(function(){
			if($(this).hasClass('initied'))
				return false;

			var menuMoreItem = $(this).find('td.js-dropdown');
			if($(this).parents('.collapse').css('display') == 'none'){
				return false;
			}

			var block_w = $(this).closest('div').actual('width');
			var	menu_w = $(this).find('table').actual('outerWidth');
			var afterHide = false;

			while(menu_w > block_w) {
				menuItemOldSave = $(this).find('td').not('.nosave').last();
				if(menuItemOldSave.length){
					menuMoreItem.show();
					var oldClass = menuItemOldSave.attr('class');
					menuItemNewSave = '<li class="menu-item ' + (menuItemOldSave.hasClass('dropdown') ? 'dropdown-submenu ' : '') + (menuItemOldSave.hasClass('active') ? 'active ' : '') + '" data-hidewidth="' + menu_w + '" ' + (oldClass ? 'data-class="' + oldClass + '"' : '') + '>' + menuItemOldSave.find('.wrap').html() + '</li>';
					menuItemOldSave.remove();
					menuMoreItem.find('> .wrap > .dropdown-menu').prepend(menuItemNewSave);
					menu_w = $(this).find('table').actual('outerWidth');
					afterHide = true;
				}
				//menu.find('.nosave').css('display', 'table-cell');
				else{
					break;
				}
			}

			if(!afterHide) {
				do {
					var menuItemOldSaveCnt = menuMoreItem.find('.dropdown-menu').find('li').length;
					menuItemOldSave = menuMoreItem.find('.dropdown-menu').find('li').first();
					if(!menuItemOldSave.length) {
						menuMoreItem.hide();
						break;
					}
					else {
						var hideWidth = menuItemOldSave.attr('data-hidewidth');
						if(hideWidth > block_w) {
							break
						}
						else {
							var oldClass = menuItemOldSave.attr('data-class');
							menuItemNewSave = '<td class="' + (oldClass ? oldClass + ' ' : '') + '" data-hidewidth="' + block_w + '"><div class="wrap">' + menuItemOldSave.html() + '</div></td>';
							menuItemOldSave.remove();
							$(menuItemNewSave).insertBefore($(this).find('td.js-dropdown'));
							if(!menuItemOldSaveCnt) {
								menuMoreItem.hide();
								break;
							}
						}
					}
					menu_w = $(this).find('table').actual('outerWidth');
				}
				while(menu_w <= block_w);
			}
			$(this).find('td').css('visibility', 'visible');
			$(this).find('td').removeClass('unvisible');
			$(this).addClass('ovisible');
			$(this).addClass('initied');
		})
	}
	return false;
}

CheckTopVisibleMenu = function(that) {
	var dropdownMenu = $('.dropdown-menu:visible').last();

	if(dropdownMenu.length){
		dropdownMenu.find('a').css('white-space', '');
		dropdownMenu.css('left', '');
		dropdownMenu.css('right', '');
		dropdownMenu.removeClass('toright');

		var dropdownMenu_left = dropdownMenu.offset().left;
		if(typeof(dropdownMenu_left) != 'undefined'){
			var menu = dropdownMenu.parents('.mega-menu');
			if(!menu.length)
				menu = dropdownMenu.closest('.logo-row');
			var menu_width = menu.outerWidth();
			var menu_left = menu.offset().left;
			var menu_right = menu_left + menu_width;
			var isToRight = dropdownMenu.parents('.toright').length > 0;
			var parentsDropdownMenus = dropdownMenu.parents('.dropdown-menu');
			var isHasParentDropdownMenu = parentsDropdownMenus.length > 0;
			if(isHasParentDropdownMenu){
				var parentDropdownMenu_width = parentsDropdownMenus.first().outerWidth();
				var parentDropdownMenu_left = parentsDropdownMenus.first().offset().left;
				var parentDropdownMenu_right = parentDropdownMenu_width + parentDropdownMenu_left;
			}

			if(parentDropdownMenu_right + dropdownMenu.outerWidth() > menu_right){
				dropdownMenu.find('a').css('white-space', 'normal');
			}

			var dropdownMenu_width = dropdownMenu.outerWidth();
			var dropdownMenu_right = dropdownMenu_left + dropdownMenu_width;

			if(dropdownMenu_right > menu_right || isToRight){
				var addleft = 0;
				addleft = menu_right - dropdownMenu_right;
				if(isHasParentDropdownMenu || isToRight){
					dropdownMenu.css('left', 'auto');
					dropdownMenu.css('right', '100%');
					dropdownMenu.addClass('toright');
				}
				else{
					var dropdownMenu_curLeft = parseInt(dropdownMenu.css('left'));
					dropdownMenu.css('left', (dropdownMenu_curLeft + addleft) + 'px');
				}
			}
		}
	}
}

if(!funcDefined("isRealValue")){
	function isRealValue(obj){
		return obj && obj !== "null" && obj!== "undefined";
	}
}

if(!funcDefined("rightScroll")){
	function rightScroll(prop, id){
		var el = BX('prop_' + prop + '_' + id);
		if (el) {
			var curVal = parseInt(el.style.marginLeft);
			if (curVal >= 0) el.style.marginLeft = curVal - 20 + '%';
		}
	}
}

if(!funcDefined("leftScroll")){
	function leftScroll(prop, id){
		var el = BX('prop_' + prop + '_' + id);
		if (el) {
			var curVal = parseInt(el.style.marginLeft);
			if (curVal < 0) el.style.marginLeft = curVal + 20 + '%';
		}
	}
}

if(!funcDefined("InitOrderCustom")){
	InitOrderCustom = function () {
		$('.ps_logo img').wrap('<div class="image"></div>');

		$('#bx-soa-order .radio-inline').each(function() {
			if ($(this).find('input').attr('checked') == 'checked') {
				$(this).addClass('checked');
			}
		});

		$('#bx-soa-order .checkbox input[type=checkbox]').each(function() {
			if ($(this).attr('checked') == 'checked')
				$(this).parent().addClass('checked');
		});

		$('#bx-soa-order .bx-authform-starrequired').each(function() {
			var html = $(this).html();
			$(this).closest('label').append('<span class="bx-authform-starrequired"> '+ html + '</span>');
			$(this).detach();
		});
		$('.bx_ordercart_coupon').each(function() {
			if ($(this).find('.bad').length)
				$(this).addClass('bad');
			else if ($(this).find('.good').length)
				$(this).addClass('good');
		});
		/*if (typeof(propsMap) !== 'undefined') {
			$(propsMap).on('click', function () {
				var value = $('#orderDescription').val();
				if ($('#orderDescription')) {
					if (value != '') {
						$('#orderDescription').closest('.form-group').addClass('value_y');
					}
				}
			});
		}*/
	}
}

if(!funcDefined("InitLabelAnimation")){
	InitLabelAnimation = function(className) {
		// Fix order labels
		if (!$(className).length) {
			return;
		}
		$(className).find('.form-group').each(function() {
			if ($(this).find('input[type=text], textarea').length && !$(this).find('.dropdown-block').length && $(this).find('input[type=text], textarea').val() != '') {
				$(this).addClass('value_y');
			}
		});

		$(document).on('click', className+' .form-group:not(.bx-soa-pp-field) label', function() {
			$(this).parent().find('input, textarea').focus();
		});

		$(document).on('focusout', className+' .form-group:not(.bx-soa-pp-field) input, '+className+' .form-group:not(.bx-soa-pp-field) textarea', function() {
			var value = $(this).val();
			if (value != '' && !$(this).closest('.form-group').find('.dropdown-block').length && !$(this).closest('.form-group').find('#profile_change').length) {
				$(this).closest('.form-group').addClass('value_y');
			}else{
				$(this).closest('.form-group').removeClass('value_y');
			}
		});

		$(document).on('focus', className+' .form-group:not(.bx-soa-pp-field) input, '+className+' .form-group:not(.bx-soa-pp-field) textarea', function() {
			if (!$(this).closest('.form-group').find('.dropdown-block').length && !$(this).closest('.form-group').find('#profile_change').length && !$(this).closest('.form-group').find('[name=PERSON_TYPE_OLD]').length ) {
				$(this).closest('.form-group').addClass('value_y');
			}
		});
	};
}

checkPopupWidth = function(){
	$('.popup.show').each(function() {
		var width_form = $(this).actual('width');
		$(this).css({
			'margin-left': ($(window).width() > width_form ? '-' + width_form / 2 + 'px' : '-' + $(window).width() / 2 + 'px'),
		});
	});
}

checkCaptchaWidth = function(){
	$('.captcha-row').each(function() {
		var width = $(this).actual('width');
		if($(this).hasClass('b')){
			if(width > 320){
				$(this).removeClass('b');
			}
		}
		else{
			if(width <= 320){
				$(this).addClass('b');
			}
		}
	});
}

checkFormWidth = function(){
	$('.form .form_left').each(function() {
		var form = $(this).parents('.form');
		var width = form.actual('width');
		if(form.hasClass('b')){
			if(width > 417){
				form.removeClass('b');
			}
		}
		else{
			if(width <= 417){
				form.addClass('b');
			}
		}
	});
}

checkFormControlWidth = function(){
	$('.form-control').each(function() {
		var width = $(this).actual('width');
		var labelWidth = $(this).find('label:not(.error) > span').actual('width');
		var errorWidth = $(this).find('label.error').actual('width');
		if(errorWidth > 0){
			if($(this).hasClass('h')){
				if(width > (labelWidth + errorWidth + 5)){
					$(this).removeClass('h');
				}
			}
			else{
				if(width <= (labelWidth + errorWidth + 5)){
					$(this).addClass('h');
				}
			}
		}
		else{
			$(this).removeClass('h');
		}
	});
}

scrollToTop = function(){
	if(arNextOptions['THEME']['SCROLLTOTOP_TYPE'] !== 'NONE'){
		var _isScrolling = false;
		// Append Button
		$('body').append($('<a />').addClass('scroll-to-top ' + arNextOptions['THEME']['SCROLLTOTOP_TYPE'] + ' ' + arNextOptions['THEME']['SCROLLTOTOP_POSITION']).attr({'href': '#', 'id': 'scrollToTop'}));
		$('#scrollToTop').click(function(e){
			e.preventDefault();
			$('body, html').animate({scrollTop : 0}, 500);
			return false;
		});
		// Show/Hide Button on Window Scroll event.
		$(window).scroll(function(){
			if(!_isScrolling) {
				_isScrolling = true;
				if($(window).scrollTop() > 150){
					$('#scrollToTop').stop(true, true).addClass('visible');
					_isScrolling = false;
				}
				else{
					$('#scrollToTop').stop(true, true).removeClass('visible');
					_isScrolling = false;
				}
				checkScrollToTop();
			}
		});
	}
}

checkScrollToTop = function(){
	var bottom = 55,
		scrollVal = $(window).scrollTop(),
		windowHeight = $(window).height(),
		footerOffset = 0;
	if($('footer').length)
		footerOffset = $('footer').offset().top +70;

	if(arNextOptions['THEME']['SCROLLTOTOP_POSITION'] == 'CONTENT'){
		warpperWidth = $('body > .wrapper > .wrapper_inner').width();
		$('#scrollToTop').css('margin-left', Math.ceil(warpperWidth / 2) + 23);
	}

	if(scrollVal + windowHeight > footerOffset){
		$('#scrollToTop').css('bottom', bottom  + scrollVal + windowHeight - footerOffset + 40);
	}
	else if(parseInt($('#scrollToTop').css('bottom')) > bottom){
		$('#scrollToTop').css('bottom', bottom);
	}
}

CheckObjectsSizes = function() {
	$('.container iframe,.container object,.container video').each(function() {
		var height_attr = $(this).attr('height');
		var width_attr = $(this).attr('width');
		if (height_attr && width_attr) {
			$(this).css('height', $(this).outerWidth() * height_attr / width_attr);
		}
	});
}

if(!funcDefined('reloadTopBasket')){
	var reloadTopBasket = function reloadTopBasket(action, basketWindow, speed, delay, slideDown, item){
		var obj={
				"PARAMS": $('#top_basket_params').val(),
				"ACTION": action
			};
		if(typeof item !== "undefined" ){
			obj.delete_top_item='Y';
			obj.delete_top_item_id=item.data('id');
		}
		// $.post( arNextOptions['SITE_DIR']+"ajax/show_basket_popup.php", obj, $.proxy(function( data ){
		$.post( arNextOptions['SITE_DIR']+"ajax/show_basket_actual.php", obj, $.proxy(function( data ){
			$(basketWindow).html(data);

			getActualBasket();

			var eventdata = {action:'loadBasket'};
			BX.onCustomEvent('onCompleteAction', [eventdata]);

			/*if(arNextOptions['THEME']['SHOW_BASKET_ONADDTOCART'] !== 'N'){
				if($(window).outerWidth() > 520){
					if(slideDown=="Y")
						$(basketWindow).find('.basket_popup_wrapp').stop(true,true).slideDown(speed);
					clearTimeout(basketTimeoutSlide);
					basketTimeoutSlide = setTimeout(function() {
						var _this = $('#basket_line').find('.basket_popup_wrapp');
						if (_this.is(':hover')) {
							_this.show();
						}else{
							$('#basket_line').find('.basket_popup_wrapp').slideUp(speed);
						}
					},delay);
				}
			}*/
		}))
	}
}

CheckTabActive = function(){
	if(typeof(clicked_tab) && clicked_tab)
	{
		if(window.matchMedia('(min-width: 768px)').matches)
		{
			clicked_tab--;
			$('.nav.nav-tabs li').each(function(){
				if($(this).index() == clicked_tab)
					$(this).addClass('active');
			})
			// $('.nav.nav-tabs li:eq('+clicked_tab+')').addClass('active');
			$('.catalog_detail .tab-content .tab-pane:eq('+clicked_tab+')').addClass('active');
			$('.catalog_detail .tab-content .tab-pane .title-tab-heading').next().removeAttr('style');
			clicked_tab = 0;
		}
	}
}

/*countdown start*/
if(!funcDefined('initCountdown')){
	var initCountdown = function initCountdown(){
		if( $('.view_sale_block').size() ){
			$('.view_sale_block').each(function(){
				var activeTo=$(this).find('.active_to').text(),
					dateTo= new Date(activeTo.replace(/(\d+)\.(\d+)\.(\d+)/, '$3/$2/$1'));
				$(this).find('.countdown').countdown({until: dateTo, format: 'dHMS', padZeroes: true, layout: '{d<}<span class="days item">{dnn}<div class="text">{dl}</div></span>{d>} <span class="hours item">{hnn}<div class="text">{hl}</div></span> <span class="minutes item">{mnn}<div class="text">{ml}</div></span> <span class="sec item">{snn}<div class="text">{sl}</div></span>'}, $.countdown.regionalOptions['ru']);
			})
		}
	}
}

if(!funcDefined('initCountdownTime')){
	var initCountdownTime = function initCountdownTime(block, time){
		if(time)
		{
			var dateTo= new Date(time.replace(/(\d+)\.(\d+)\.(\d+)/, '$3/$2/$1'));
			block.find('.countdown').countdown('destroy');
			block.find('.countdown').countdown({until: dateTo, format: 'dHMS', padZeroes: true, layout: '{d<}<span class="days item">{dnn}<div class="text">{dl}</div></span>{d>} <span class="hours item">{hnn}<div class="text">{hl}</div></span> <span class="minutes item">{mnn}<div class="text">{ml}</div></span> <span class="sec item">{snn}<div class="text">{sl}</div></span>'}, $.countdown.regionalOptions['ru']);
			block.find('.view_sale_block').show();
		}
		else
		{
			block.find('.view_sale_block').hide();
		}
	}
}
/*countdown end*/

waitCounter = function(idCounter, delay, callback){
	var obCounter = window['yaCounter' + idCounter];
	if(typeof obCounter == 'object')
	{
		if(typeof callback == 'function')
			callback();

	}
	else
	{
		setTimeout(function(){
			waitCounter(idCounter, delay, callback);
		}, delay);
	}
}

var isOnceInited = insertFilter = false;
var animationTime = 200;
var delayTime = 200;
var topMenuEnterTimer = false;
var isMobile = jQuery.browser.mobile;

if(isMobile)
	document.documentElement.className += ' mobile';

if(navigator.userAgent.indexOf("Edge") != -1)
	document.documentElement.className += ' bx-ie-edge';

/*filter start*/
if(!funcDefined('checkVerticalMobileFilter')){
	var checkVerticalMobileFilter = function checkVerticalMobileFilter(){
		if($('.right_block1.catalog.vertical').length && !$('.left_block.filter_ajax').length)
		{
			if(typeof window['trackBarOptions'] !== 'undefined')
			{
				window['trackBarValues'] = {}
				for(key in window['trackBarOptions'])
				{
					window['trackBarValues'][key] = {
						'leftPercent': window['trackBar' + key].leftPercent,
						'leftValue': window['trackBar' + key].minInput.value,
						'rightPercent': window['trackBar' + key].rightPercent,
						'rightValue': window['trackBar' + key].maxInput.value,
					}
				}
			}

			if(window.matchMedia('(max-width: 991px)').matches)
			{
				if(!insertFilter)
				{
					$('.js_filter .bx_filter.bx_filter_vertical').html($('.left_block .bx_filter.bx_filter_vertical').html());
					$('.left_block .bx_filter.bx_filter_vertical .bx_filter_section').remove();
					insertFilter=true;
				}
			}
			else
			{
				if(insertFilter)
				{
					$('.left_block .bx_filter.bx_filter_vertical').html($('.js_filter .bx_filter.bx_filter_vertical').html());
					$('.js_filter .bx_filter.bx_filter_vertical .bx_filter_section').remove();
					insertFilter=false;
				}
			}

			if(typeof window['trackBarOptions'] !== 'undefined')
			{
				for(key in window['trackBarOptions'])
				{
					window['trackBarOptions'][key].leftPercent = window['trackBarValues'][key].leftPercent;
					window['trackBarOptions'][key].rightPercent = window['trackBarValues'][key].rightPercent;
					window['trackBarOptions'][key].curMinPrice = window['trackBarValues'][key].leftValue;
					window['trackBarOptions'][key].curMaxPrice = window['trackBarValues'][key].rightValue;
					window['trackBar' + key] = new BX.Iblock.SmartFilter(window['trackBarOptions'][key]);
					window['trackBar' + key].minInput.value = window['trackBarValues'][key].leftValue;
					window['trackBar' + key].maxInput.value = window['trackBarValues'][key].rightValue;
				}
			}
		}
		else if($('.visible_mobile_filter').length)
		{
			var posTopBlock = BX.pos($('.detail.partners')[0]),
				posBlock = $('.ajax_load').position();
			// $('.visible_mobile_filter').css('top', posBottomBlock.top-posTopBlock.top);
			$('.visible_mobile_filter').css('top', posBlock.top);

		}
	}
}
/*filter end*/

// TOP MENU ANIMATION
$(document).on('click', '.menu_top_block>li .more a', function(){
	$this = $(this);
	$this.parents('.dropdown').first().find('>.hidden').removeClass('hidden');
	$this.parent().addClass('hidden');
	setTimeout(function(){
		$this.parent().remove();
	}, 500);
});

$(document).on('mouseenter', '.menu_top_block.catalogfirst>li>.dropdown>li.full', function(){
	var $submenu = $(this).find('>.dropdown');

	if($submenu.length){
		if(topMenuEnterTimer){
			clearTimeout(topMenuEnterTimer);
			topMenuEnterTimer = false;
		}
	}
});

$(document).on('mouseenter', '.menu_top_block>li:not(.full)', function(){
	var $submenu = $(this).find('>.dropdown');

	if($submenu.length && !$submenu.hasClass('visible')){
		var $menu = $(this).parents('.menu');
		var $wrapmenu = $menu.parents('.wrap_menu');
		var wrapMenuWidth = $wrapmenu.actual('outerWidth');
		var wrapMenuLeft = $wrapmenu.offset().left;
		var wrapMenuRight = wrapMenuLeft + wrapMenuWidth;
		var left = wrapMenuRight - ($(this).offset().left + $submenu.actual('outerWidth'));
		if(window.matchMedia('(min-width: 951px)').matches && $(this).hasClass('catalog') && ( $('.banner_auto').hasClass('catalog_page') || $('.banner_auto').hasClass('front_page'))){
			return;
		}
		if(left < 0){
			$submenu.css({left: left + 'px'});
		}
		$submenu.stop().slideDown(animationTime, function(){
			$submenu.css({height: '', 'overflow':'visible'});
		});


		$(this).on('mouseleave', function(){
			var leaveTimer = setTimeout(function(){
				$submenu.stop().slideUp(animationTime, function(){
					$submenu.css({left: ''});
				});
			}, delayTime);

			$(this).on('mouseenter', function(){
				if(leaveTimer){
					clearTimeout(leaveTimer);
					leaveTimer = false;
				}
			});
		});
	}
});

$(document).on('mouseenter', '.menu_top_block>li .dropdown>li', function(){
	var $this = $(this);
	var $submenu = $this.find('>.dropdown');

	if($submenu.length && ((!$this.parents('.full').length && !$this.hasClass('full')) || $this.parents('.more').length)){
		var $menu = $this.parents('.menu');
		var $wrapmenu = $menu.parents('.wrap_menu');
		var arParentSubmenuForOpacity = [];
		topMenuEnterTimer = setTimeout(function(){

			var wrapMenuWidth = $wrapmenu.actual('outerWidth');
			var wrapMenuLeft = $wrapmenu.offset().left;
			var wrapMenuRight = wrapMenuLeft + wrapMenuWidth;
			var $parentSubmenu = $this.parent();
			var bToLeft = $parentSubmenu.hasClass('toleft') ? true : false;
			if(!bToLeft){
				bToLeft = $this.offset().left + $this.actual('outerWidth') + $submenu.actual('outerWidth') > wrapMenuRight;
			}
			else{
				bToLeft = $this.offset().left + $this.actual('outerWidth') - $submenu.actual('outerWidth') < wrapMenuLeft;
			}

			if(bToLeft){
				$this.find('>.dropdown').addClass('toleft').show();
			}
			else{
				$this.find('>.dropdown').removeClass('toleft').show();
			}
			var submenuLeft = $submenu.offset().left;
			var submenuRight = submenuLeft + $submenu.actual('outerWidth');

			$this.parents('.dropdown').each(function(){
				var $this = $(this);
				var leftOffset = $this.offset().left;
				var rightOffset = leftOffset + $this.actual('outerWidth');
				if(leftOffset >= submenuLeft  && leftOffset < (submenuRight - 1) || (rightOffset > (submenuLeft + 1) && rightOffset <= submenuRight)){
					arParentSubmenuForOpacity.push($this);
					$this.find('>li>a').css({opacity: '0.1'});
				}
			});
		}, delayTime);

		$this.unbind('mouseleave');
		$this.on('mouseleave', function(){
			var leaveTimer = setTimeout(function(){
				$this.find('.dropdown').removeClass('toleft').hide();
				if(arParentSubmenuForOpacity.length){
					for(i in arParentSubmenuForOpacity){
						arParentSubmenuForOpacity[i].find('>li>a').css({opacity: ''});
					}
				}
			}, delayTime);

			$this.unbind('mouseenter');
			$this.on('mouseenter', function(){
				if(leaveTimer){
					clearTimeout(leaveTimer);
					leaveTimer = false;
				}
			});
		});
	}
});

getGridSize = function(counts,slider) {
	var counts_item=1;
		//wide
		if(window.matchMedia('(min-width: 1200px)').matches){
			counts_item=counts[0];
			if(typeof(slider.data('lg_count')) !== 'undefined' && slider.data('lg_count') && $('.front.wide_page').length)
				counts_item=slider.data('lg_count');
		}

		//large
		if(window.matchMedia('(max-width: 1200px)').matches){
			counts_item=counts[1];
		}

		//middle
		if(window.matchMedia('(max-width: 992px)').matches){
			counts_item=counts[2];
		}

		//small
		if(counts[3]){
			if(window.matchMedia('(max-width: 600px)').matches){
				counts_item=counts[3];
			}
		}

		//exsmall
		if(counts[4]){
			if(window.matchMedia('(max-width: 400px)').matches){
				counts_item=counts[4];
			}
		}
	return counts_item;
}

CheckFlexSlider = function(){
	$('.flexslider:not(.thmb)').each(function(){
		var slider = $(this);
		if(typeof(slider.data('flexslider')) != 'undefined')
		{
			if('vars' in slider.data('flexslider'))
			{
				slider.resize();

				var counts = slider.data('flexslider').vars.counts;
				if(typeof(counts) != 'undefined' && slider.is(':visible')){
					var cnt = getGridSize(counts,slider);
					var to0 = (cnt != slider.data('flexslider').vars.minItems || cnt != slider.data('flexslider').vars.maxItems || cnt != slider.data('flexslider').vars.move);
					if(to0){
						slider.data('flexslider').vars.minItems = cnt;
						slider.data('flexslider').vars.maxItems = cnt;
						slider.data('flexslider').vars.move = cnt;
						slider.flexslider(0);
						slider.resize();
						slider.resize(); // twise!
					}
				}
			}
		}
	});
}

InitFlexSlider = function() {
	$('.flexslider:not(.thmb):not(.flexslider-init)').each(function(){
		var slider = $(this);
		var options;
		var defaults = {
			animationLoop: false,
			controlNav: false,
			keyboard: false,
			pauseOnAction: false,
			pauseInvisible: false,
			directionNav: true,
			useCSS: false,
			animation: "slide"
		}
		var config = $.extend({}, defaults, options, slider.data('plugin-options'));
		if(!slider.parent().hasClass('top_slider_wrapp') && slider.is(':visible')){
			if(typeof(config.counts) != 'undefined' && config.direction !== 'vertical'){
				config.maxItems =  getGridSize(config.counts,slider);
				config.minItems = getGridSize(config.counts,slider);
				config.itemWidth = 200;
			}
			if(typeof(config.move) == 'undefined')
				config.move = 1;

			config.start = function(slider){
				var eventdata = {slider: slider};
				BX.onCustomEvent('onSlideInit', [eventdata]);
			}

			config.after = function(slider){
				var eventdata = {slider: slider};
				BX.onCustomEvent('onSlideComplete', [eventdata]);
			}

			config.end = function(slider){
				var eventdata = {slider: slider};
				BX.onCustomEvent('onSlideEnd', [eventdata]);
			}

			slider.flexslider(config).addClass('flexslider-init');
			if(config.controlNav)
				slider.addClass('flexslider-control-nav');
			if(config.directionNav)
				slider.addClass('flexslider-direction-nav');
		}
	});
}

InitZoomPict = function(el) {
	var block = $('.zoom_picture');
	if(typeof el !== 'undefined')
		block = el;
	if(block.length){
		var slide=block.closest('.slides');
		var zoomer = block,
			options,
			defaults = {
				zoomWidth: 200,
				zoomHeight: 200,
				adaptive: false,
				title: true,
				Xoffset: 15,

			};
		var config = $.extend({}, defaults, options, zoomer.data('plugin-options'));
			zoomer.xzoom(config);

		/*block.on('mouseleave', function(){
			if($('.xzoom-lens').length)
				block.data('xzoom').closezoom();
		})*/
		block.on('mouseleave', function(){
			block.data('xzoom').movezoom(event);
		})
	}
}

var arBasketAsproCounters = arStatusBasketAspro = arBasketPrices = {};
SetActualBasketFlyCounters = function(){
	if(arBasketAsproCounters.DEFAULT == true){
		$.ajax({
			url: arNextOptions['SITE_DIR'] + 'ajax/basket_fly.php',
			type: 'post',
			success: function(html){
				$('#basket_line .basket_fly').removeClass('loaded').html(html);
			}
		});
	}
	else{
		$('.basket_fly .opener .basket_count .count').attr('class', 'count' + (arBasketAsproCounters.READY.COUNT > 0 ? '' : ' empty_items')).find('.items span').text(arBasketAsproCounters.READY.COUNT)
		$('.basket_fly .opener .basket_count + a').attr('href', arBasketAsproCounters['READY']['HREF'])
		$('.basket_fly .opener .basket_count').attr('title', arBasketAsproCounters.READY.TITLE).attr('class', 'basket_count small clicked' + (arBasketAsproCounters.READY.COUNT > 0 ? '' : ' empty'))

		$('.basket_fly .opener .wish_count .count').attr('class', 'count' + (arBasketAsproCounters.DELAY.COUNT > 0 ? '' : ' empty_items')).find('.items span').text(arBasketAsproCounters.DELAY.COUNT)
		$('.basket_fly .opener .wish_count + a').attr('href', arBasketAsproCounters.DELAY.HREF)
		$('.basket_fly .opener .wish_count').attr('title', arBasketAsproCounters.DELAY.TITLE).attr('class', 'wish_count small clicked' + (arBasketAsproCounters.DELAY.COUNT > 0 ? '' : ' empty'))

		$('.basket_fly .opener .compare_count .wraps_icon_block').attr('class', 'wraps_icon_block compare' + (arBasketAsproCounters.COMPARE.COUNT > 0 ? '' : ' empty_block'));
		$('.basket_fly .opener .compare_count .count').attr('class', 'count' + (arBasketAsproCounters.COMPARE.COUNT > 0 ? '' : ' empty_items')).find('.items span').text(arBasketAsproCounters.COMPARE.COUNT)
		$('.basket_fly .opener .compare_count + a').attr('href', arBasketAsproCounters.COMPARE.HREF)

	}
}

CheckHeaderFixed = function(){
	var header_fixed = $('#headerfixed');
		header = $('header').first();
	if(header_fixed.length){
		if(header.length)
		{
			var isHeaderFixed = false,
				isTabsFixed = false,
				headerCanFix = true,
				headerFixedHeight = header_fixed.actual('outerHeight'),
				headerNormalHeight = header.actual('outerHeight'),
				headerDiffHeight = headerNormalHeight - headerFixedHeight,
				mobileBtnMenu = $('.btn.btn-responsive-nav'),
				headerTop = $('#panel:visible').actual('outerHeight');
				topBlock = $('.TOP_HEADER').first();

			if(headerDiffHeight <= 0)
				headerDiffHeight = 0;
			if(topBlock.length)
				headerTop += topBlock.actual('outerHeight');

			$(window).scroll(function(){
				var tabs_fixed = $('.product-item-detail-tabs-container-fixed');
				if(window.matchMedia('(min-width:992px)').matches)
				{
					var scrollTop = $(window).scrollTop();
					headerCanFix = !mobileBtnMenu.is(':visible')/* && !$('.dropdown-menu:visible').length*/;

					var tabs_offset = $('.tabs_section .nav.nav-tabs').offset();

					var current_is = $('.search-wrapper .search-input:visible'),
						title_search_result = $('.title-search-result.'+current_is.attr('id')),
						pos, pos_input;

					if(!isHeaderFixed)
					{
						if((scrollTop > headerNormalHeight + headerTop) && headerCanFix)
						{
							isHeaderFixed = true;
							// header_fixed.css('top', '-' + headerNormalHeight + 'px');
							header_fixed.addClass('fixed');
							// header_fixed.stop(0).animate({top: '0'}, 300);

							/*header_fixed.animate({top: '0'}, {duration:300, complete:
								function(){}
							});*/

							if($('nav.mega-menu.sliced').length)
								$('nav.mega-menu.sliced').removeClass('initied');
							CheckTopMenuDotted();
						}
					}
					else if(isHeaderFixed || !headerCanFix)
					{
						if((scrollTop <= headerDiffHeight + headerTop) || !headerCanFix)
						{
							isHeaderFixed = false;
							header_fixed.removeClass('fixed');
						}
					}
					//fixed tabs
					if(tabs_fixed.length)
					{
						if (scrollTop + headerFixedHeight > tabs_offset.top)
						{
							tabs_fixed.css({'top': header_fixed.actual('outerHeight')});
							tabs_fixed.addClass('fixed');
						}
						else if (tabs_fixed.hasClass('fixed'))
						{
							tabs_fixed.removeAttr('style');
							tabs_fixed.removeClass('fixed');
						}
					}
				}
			});
		}
	}

	//mobile fixed
	var mfixed = $('.wrapper1.mfixed_Y #mobileheader');
	if(mfixed.length && isMobile)
	{
		var isMHeaderFixed = false,
			mheaderCanFix = true,
			//mheaderFixedHeight = mfixed.actual('outerHeight'),
			mheaderFixedHeight = 0,
			mheaderTop = $('#panel:visible').actual('outerHeight');
		$(window).scroll(function(){
			var scrollTop = $(window).scrollTop();
			if(window.matchMedia('(max-width:991px)').matches)
			{
				if($('.wrapper1.mfixed_Y.mfixed_view_scroll_top #mobileheader').length)
				{
					if(scrollTop > startScroll)
					{
						$('.wrapper1.mfixed_Y.mfixed_view_scroll_top #mobileheader').removeClass('fixed');
					}
					else if(scrollTop > mheaderFixedHeight + mheaderTop)
						$('.wrapper1.mfixed_Y.mfixed_view_scroll_top #mobileheader').addClass('fixed');
					else if(scrollTop <= mheaderFixedHeight + mheaderTop)
						$('.wrapper1.mfixed_Y.mfixed_view_scroll_top #mobileheader').removeClass('fixed');
					startScroll = scrollTop;
				}
				else
				{
					if(!isMHeaderFixed)
					{
						if((scrollTop > mheaderFixedHeight + mheaderTop))
						{
							isMHeaderFixed = true;
							mfixed.addClass('fixed');
						}
					}
					else if(isMHeaderFixed)
					{
						if((scrollTop <= mheaderFixedHeight + mheaderTop))
						{
							isMHeaderFixed = false;
							mfixed.removeClass('fixed');
						}
					}
				}
			}
			else
				mfixed.removeClass('fixed');
		})
	}
}

CheckHeaderFixedMenu = function(){
	if(arNextOptions['THEME']['HEADER_FIXED'] == 2 && $('#headerfixed .js-nav').length && window.matchMedia('(min-width: 992px)').matches)
	{
		$('#headerfixed .js-nav').css('width','0');
		var all_width = 0,
			cont_width = $('#headerfixed .maxwidth-theme').actual('width'),
			padding_menu = $('#headerfixed .logo-row.v2 .menu-block').actual('outerWidth')-$('#headerfixed .logo-row.v2 .menu-block').actual('width');
		$('#headerfixed .logo-row.v2 > .inner-table-block').each(function(){
			if(!$(this).hasClass('menu-block'))
				all_width += $(this).actual('outerWidth');
		})
		$('#headerfixed .js-nav').width(cont_width-all_width-padding_menu);
	}
}

CheckTopMenuPadding = function(){
	if($('.logo_and_menu-row .right-icons .wrap_icon').length && $('.logo_and_menu-row .menu-row').length){
		var menuPosition = $('.menu-row .menu-only').position().left,
			leftPadding = 0,
			rightPadding = 0;
		$('.logo_and_menu-row .menu-row>div').each(function(indx){
			if(!$(this).hasClass('menu-only')){
				var elementPosition = $(this).position().left,
					elementWidth = $(this).outerWidth()+1;

				if(elementPosition > menuPosition){
					rightPadding += elementWidth;
				}else{
					leftPadding += elementWidth;
				}
			}
		}).promise().done(function(){
			$('.logo_and_menu-row .menu-only').css({'padding-left': leftPadding, 'padding-right': rightPadding});
		});
	}
}

CheckTopMenuOncePadding = function(){
	if($('.menu-row.sliced .right-icons .wrap_icon').length){
		var menuPosition = $('.menu-row .menu-only').position().left,
			leftPadding = 0,
			rightPadding = 0;
		$('.menu-row.sliced .maxwidth-theme>div>div>div').each(function(indx){
			if(!$(this).hasClass('menu-only')){
				var elementPosition = $(this).position().left,
					elementWidth = $(this).outerWidth()+1;

				if(elementPosition > menuPosition){
					rightPadding += elementWidth;
				}else{
					leftPadding += elementWidth;
				}
			}
		}).promise().done(function(){
			$('.menu-row.sliced .menu-only').css({'padding-left': leftPadding, 'padding-right': rightPadding});
		});
	}
}

CheckSearchWidth = function(){
	if($('.logo_and_menu-row .search_wrap').length){
		var searchPosition = $('.logo_and_menu-row .search_wrap').position().left,
			maxWidth = $('.logo_and_menu-row .maxwidth-theme').width() - 2;
			width = 0;

		$('.logo_and_menu-row .maxwidth-theme > .row >div').each(function(){
			if(!$(this).hasClass('search_wrap')){
				var elementWidth = $(this).outerWidth();
				width = (width ? width - elementWidth : maxWidth - elementWidth);
			}
		}).promise().done(function(){
			if($('.logo_and_menu-row .search_wrap.wide_search').length)
				$('.logo_and_menu-row .search_wrap .search-block').outerWidth(width);
			else
				$('.logo_and_menu-row .search_wrap').outerWidth(width);
			$('.logo_and_menu-row .search_wrap').css({'opacity': 1, 'visibility': 'visible'});
		});
	}
}

scrollPreviewBlock = function(){
	if(typeof($.cookie('scroll_block')) != 'undefined' && $.cookie('scroll_block'))
	{
		var scroll_block = $($.cookie('scroll_block'));
		if(scroll_block.length)
		{
			$('body, html').animate({scrollTop: scroll_block.offset().top}, 500);
		}
		$.cookie('scroll_block', null);
	}
}

scrollToBlock = function(block){
	if($(block).length)
	{
		var offset = $(block).offset().top;
		if(typeof($(block).data('toggle')) != 'undefined')
			$(block).click();

		if(typeof($(block).data('offset')) != 'undefined')
			offset += $(block).data('offset');
		$('body, html').animate({scrollTop: offset}, 500);
	}
}

SetFixedAskBlock = function(){
	if($('.ask_a_question_wrapper').length)
	{
		var offset = $('.ask_a_question_wrapper').offset(),
			footer_offset = 0,
			block = $('.ask_a_question_wrapper').find('.ask_a_question'),
			block_offset = BX.pos(block[0]),
			block_height = block_offset.bottom-block_offset.top,
			diff_top_scroll = $('#headerfixed').height() + 20;

		if($('footer').length)
			footer_offset = $('footer').offset().top;

		if($('.banner.CONTENT_BOTTOM').length)
			footer_offset = $('.banner.CONTENT_BOTTOM').offset().top;

		/* removed for ISSUE NEXT-414
		if(block_height+130 > block.closest('.fixed_wrapper').height())
			block.addClass('nonfixed');
		else
			block.removeClass('nonfixed');
		*/

		if(block_height+diff_top_scroll+documentScrollTopLast + 130 > footer_offset)
		{
			block.removeClass('fixed').css({'top': 'auto', 'width': 'auto', 'bottom': 0});
			block.parent().css('position', 'static');
			block.parent().parent().css('position', 'static');
		}
		else
		{
			block.parent().removeAttr('style');
			block.parent().parent().removeAttr('style');

			if(documentScrollTopLast + diff_top_scroll > offset.top)
			{
				var fixed_width = $('.fixed_block_fix').width();
				block.addClass('fixed').css({'top': diff_top_scroll, 'bottom': 'auto'});
				if(fixed_width)
					block.css({'width': $('.fixed_block_fix').width()})
			}
			else
				block.removeClass('fixed').css({'top': 0, 'width': 'auto'});
		}
	}
}

MegaMenuFixed = function(){
	var animationTime = 150;

	$('.logo_and_menu-row .burger').on('click', function(){
		$('.mega_fixed_menu').fadeIn(animationTime);
		$('.header_wrap').toggleClass('zindexed');
	});

	$('.mega_fixed_menu .svg.svg-inline-close').on('click', function(){
		$(this).closest('.mega_fixed_menu').fadeOut(animationTime);
		$('.header_wrap').toggleClass('zindexed');
	});

	$('.mega_fixed_menu .dropdown-menu .arrow').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		$(this).closest('.dropdown-submenu').find('.dropdown-menu').slideToggle(animationTime);
		$(this).closest('.dropdown-submenu').addClass('opened');
	});
}

CheckPopupTop = function(){
	var popup = $('.jqmWindow.show:last');
	if(!popup.length)
		popup = $('.jqmWindow.show');
	if(!popup.length)
		popup = $('.jqm-init.show');
	if(popup.length){
		var documentScollTop = $(document).scrollTop();
		var windowHeight = $(window).height();
		var popupTop = parseInt(popup.css('top'));
		var popupHeight = popup.height();

		if(windowHeight >= popupHeight){
			// center
			popupTop = (windowHeight - popupHeight) / 2;
		}
		else{
			if(documentScollTop > documentScrollTopLast){
				// up
				popupTop -= documentScollTop - documentScrollTopLast;
			}
			else if(documentScollTop < documentScrollTopLast){
				// down
				popupTop += documentScrollTopLast - documentScollTop;
			}

			if(popupTop + popupHeight < windowHeight){
				// bottom
				popupTop = windowHeight - popupHeight;
			}
			else if(popupTop > 0){
				// top
				popupTop = 0;
			}
		}
		popup.css('top', popupTop + 'px');
	}
}

/*set price item*/
if(!funcDefined('setPriceItem')){
	var setPriceItem = function setPriceItem(main_block, quantity, rewrite_price, check_quantity, is_sku, show_percent, percent){
		var old_quantity = main_block.find('.to-cart').attr('data-ratio'),
			value = (typeof rewrite_price !== 'undefined' && rewrite_price ? rewrite_price : main_block.find('.to-cart').attr('data-value')),
			currency = main_block.find('.to-cart').attr('data-currency'),
			total_block = '<div class="total_summ" style="display:none;"><div>'+BX.message('TOTAL_SUMM_ITEM')+'<span></span></div></div>',
			price_block = main_block.find('.cost.prices'),
			use_percent = (typeof show_percent !== 'undefined' && show_percent == 'Y'),
			percent_number = (typeof percent !== 'undefined' && percent),
			sku_checked = (main_block.find('.has_offer_prop').length ? 'Y' : 'N'),
			check = (typeof check_quantity !== 'undefined' && check_quantity);

		if(main_block.find('.buy_block').length)
		{
			if(!main_block.find('.buy_block .total_summ').length && !is_sku)
				$(total_block).appendTo(main_block.find('.buy_block'))
		}
		else if(main_block.find('.counter_wrapp').length)
		{
			if(!main_block.find('.counter_wrapp .total_summ').length && !is_sku)
				$(total_block).appendTo(main_block.find('.counter_wrapp:first'))
		}
		if(main_block.find('.total_summ').length)
		{
			if(value && currency)
			{
				if((1 == quantity && old_quantity == quantity) || (typeof is_sku !== 'undefined' && is_sku && !check))
				{
					main_block.find('.total_summ').slideUp(50);
				}
				else
				{
					main_block.find('.total_summ span').html(BX.Currency.currencyFormat((value*quantity), currency, true));
					if(main_block.find('.total_summ').is(':hidden')/* || sku_checked == 'Y'*/)
						main_block.find('.total_summ').slideDown(100);
				}
			}
			else
			{
				main_block.find('.total_summ').slideUp(100);
			}
		}
	}
}

if(!funcDefined('getCurrentPrice')){
	var getCurrentPrice = function getCurrentPrice(price, currency, print_price){
		var val = '';
		var format_value = BX.Currency.currencyFormat(price, currency);
		if(print_price.indexOf(format_value) >= 0)
		{
			val = print_price.replace(format_value, '<span class="price_value">'+format_value+'</span><span class="price_currency">');
			val += '</span>';
		}
		else
		{
			val = print_price;
		}

		return val;
	}
}

$(document).ready(function(){
	//check width for menu and search
	CheckSearchWidth();
	MegaMenuFixed();

	//ecommerce order
	if(arNextOptions["PAGES"]["ORDER_PAGE"])
	{
		var arUrl = parseUrlQuery();
		if("ORDER_ID" in arUrl)
		{
			var _id = arUrl["ORDER_ID"];
			if(arNextOptions['COUNTERS']['USE_FULLORDER_GOALS'] !== 'N')
			{
				var eventdata = {goal: 'goal_order_success', result: _id};
				BX.onCustomEvent('onCounterGoals', [eventdata])
			}
			if(checkCounters())
			{
				if(typeof BX.localStorage !== 'undefined'){
					var d = BX.localStorage.get('gtm_e_' + _id);
					if(typeof d === 'object'){
						window.dataLayer = window.dataLayer || [];
						dataLayer.push({"event": arNextOptions["COUNTERS"]['GOOGLE_EVENTS']['PURCHASE'], "ecommerce": d});
					}

					if(typeof localStorage !== 'undefined'){
						localStorage.removeItem('gtm_e_' + _id);
					}
				}
			}
		}
	}
	var bSafary = false;
	if(typeof jQuery.browser == 'object')
		bSafary = jQuery.browser.safari;
	else if(typeof browser == 'object')
		bSafary = browser.safari;
	if(!bSafary){
		CheckTopMenuPadding();
		CheckTopMenuOncePadding();
		CheckTopMenuDotted();
		CheckHeaderFixed();
		setTimeout(function() {$(window).resize();}, 150); // need to check resize flexslider & menu
		setTimeout(function() {$(window).scroll();}, 250); // need to check position fixed ask block
	}
	else{
		setTimeout(function(){
			$(window).resize(); // need to check resize flexslider & menu
			setTimeout(function(){
				CheckTopMenuPadding();
				CheckTopMenuOncePadding();
				CheckTopMenuDotted();
				CheckHeaderFixed();

				setTimeout(function(){
					$(window).scroll();
				}, 50);
			}, 50);
		}, 350);
	}

	if(arNextOptions['THEME']['USE_DEBUG_GOALS'] === 'Y')
		$.cookie('_ym_debug', 1, {path: '/',});
	else
		$.cookie('_ym_debug', null, {path: '/',});

	/*  --- Bind mobile menu  --- */
	var $mobileMenu = $("#mobilemenu")
	if($mobileMenu.length){
		$mobileMenu.isLeftSide = $mobileMenu.hasClass('leftside')
		$mobileMenu.isOpen = $mobileMenu.hasClass('show')
		$mobileMenu.isDowndrop = $mobileMenu.find('>.scroller').hasClass('downdrop')

		$('#mobileheader .burger').click(function(){
			SwipeMobileMenu()
		})

		if($mobileMenu.isLeftSide){
			$mobileMenu.parent().append('<div id="mobilemenu-overlay"></div>')
			var $mobileMenuOverlay = $('#mobilemenu-overlay')

			$mobileMenuOverlay.click(function(){
				if($mobileMenu.isOpen){
					CloseMobileMenu()
				}
			});

			$(document).swiperight(function(e) {
				if(!$(e.target).closest('.flexslider').length && !$(e.target).closest('.swipeignore').length){
					OpenMobileMenu()
				}
			});

			$(document).swipeleft(function(e) {
				if(!$(e.target).closest('.flexslider').length && !$(e.target).closest('.swipeignore').length){
					CloseMobileMenu()
				}
			});
		}
		else{
			$('#mobileheader').click(function(e){
				if(!$(e.target).closest('#mobilemenu').length && !$(e.target).closest('.burger').length && $mobileMenu.isOpen){
					CloseMobileMenu()
				}
			});
		}

		$('#mobilemenu .menu a,#mobilemenu .social-icons a').click(function(e){
			var $this = $(this)
			if($this.hasClass('parent')){
				e.preventDefault()

				if(!$mobileMenu.isDowndrop){
					$this.closest('li').addClass('expanded')
					MoveMobileMenuWrapNext()
				}
				else{
					if(!$this.closest('li').hasClass('expanded')){
						$this.closest('li').addClass('expanded')
					}
					else{
						$this.closest('li').removeClass('expanded')
					}
				}
			}
			else{
				if($this.closest('li').hasClass('counters')){
					var href = $this.attr('href')
					if(typeof href !== 'undefined'){
						window.location.href = href
						window.location.reload()
					}
				}

				if(!$this.closest('.menu_back').length){
					CloseMobileMenu()
				}
			}
		})

		$('#mobilemenu .dropdown .menu_back').click(function(e){
			e.preventDefault()
			var $this = $(this)
			MoveMobileMenuWrapPrev()
			setTimeout(function(){
				$this.closest('.expanded').removeClass('expanded')
			}, 400)
		})

		OpenMobileMenu = function(){
			if(!$mobileMenu.isOpen){
				// hide styleswitcher
				if($('.style-switcher').hasClass('active')){
					$('.style-switcher .switch').trigger('click')
				}
				$('.style-switcher .switch').hide()

				if($mobileMenu.isLeftSide){
					// show overlay
					setTimeout(function(){
						$mobileMenuOverlay.fadeIn('fast')
					}, 100)
				}
				else{
					// scroll body to top & set fixed
					$('body').scrollTop(0).css({position: 'fixed'})

					// set menu top = bottom of header
					$mobileMenu.css({top: + ($('#mobileheader').height() + $('#mobileheader').offset().top) + 'px'})

					// change burger icon
					$('#mobileheader .burger').addClass('c')
				}

				// show menu
				$mobileMenu.addClass('show')
				$mobileMenu.isOpen = true

				if(!$mobileMenu.isDowndrop){
					var $wrap = $mobileMenu.find('.wrap').first()
					var params =  $wrap.data('params')
					if(typeof params === 'undefined'){
						params = {
							depth: 0,
							scroll: {},
							height: {}
						}
					}
					$wrap.data('params', params)
				}
			}
		}

		CloseMobileMenu = function(){
			if($mobileMenu.isOpen){
				// hide menu
				$mobileMenu.removeClass('show')
				$mobileMenu.isOpen = false

				// show styleswitcher
				$('.style-switcher .switch').show()

				if($mobileMenu.isLeftSide){
					// hide overlay
					setTimeout(function(){
						$mobileMenuOverlay.fadeOut('fast')
					}, 100)
				}
				else{
					// change burger icon
					$('#mobileheader .burger').removeClass('c')

					// body unset fixed
					$('body').css({position: ''})
				}

				if(!$mobileMenu.isDowndrop){
					setTimeout(function(){
						var $scroller = $mobileMenu.find('.scroller').first()
						var $wrap = $mobileMenu.find('.wrap').first()
						var params =  $wrap.data('params')
						params.depth = 0
						$wrap.data('params', params).attr('style', '')
						$mobileMenu.scrollTop(0)
						$scroller.css('height', '')
					}, 400)
				}
			}
		}

		SwipeMobileMenu = function(){
			if($mobileMenu.isOpen){
				CloseMobileMenu()
			}
			else{
				OpenMobileMenu()
			}
		}

		function MoveMobileMenuWrapNext(){
			if(!$mobileMenu.isDowndrop){
				var $scroller = $mobileMenu.find('.scroller').first()
				var $wrap = $mobileMenu.find('.wrap').first()
				if($wrap.length){
					var params =  $wrap.data('params')
					var $dropdownNext = $mobileMenu.find('.expanded>.dropdown').eq(params.depth)
					if($dropdownNext.length){
						// save scroll position
						params.scroll[params.depth] = parseInt($mobileMenu.scrollTop())

						// height while move animating
						params.height[params.depth + 1] = Math.max($dropdownNext.height(), (!params.depth ? $wrap.height() : $mobileMenu.find('.expanded>.dropdown').eq(params.depth - 1).height()))
						$scroller.css('height', params.height[params.depth + 1] + 'px')

						// inc depth
						++params.depth

						// translateX for move
						$wrap.css('transform', 'translateX(' + -100 * params.depth + '%)')

						// scroll to top
						setTimeout(function() {
							$mobileMenu.animate({scrollTop : 0}, 200);
						}, 100)

						// height on enimating end
						var h = $dropdownNext.height()
						setTimeout(function() {
							if(h){
								$scroller.css('height', h + 'px')
							}
							else{
								$scroller.css('height', '')
							}
						}, 200)
					}

					$wrap.data('params', params)
				}
			}
		}

		function MoveMobileMenuWrapPrev(){
			if(!$mobileMenu.isDowndrop){
				var $scroller = $mobileMenu.find('.scroller').first()
				var $wrap = $mobileMenu.find('.wrap').first()
				if($wrap.length){
					var params =  $wrap.data('params')
					if(params.depth > 0){
						var $dropdown = $mobileMenu.find('.expanded>.dropdown').eq(params.depth - 1)
						if($dropdown.length){
							// height while move animating
							$scroller.css('height', params.height[params.depth] + 'px')

							// dec depth
							--params.depth

							// translateX for move
							$wrap.css('transform', 'translateX(' + -100 * params.depth + '%)')

							// restore scroll position
							setTimeout(function() {
								$mobileMenu.animate({scrollTop : params.scroll[params.depth]}, 200);
							}, 100)

							// height on enimating end
							var h = (!params.depth ? false : $mobileMenu.find('.expanded>.dropdown').eq(params.depth - 1).height())
							setTimeout(function() {
								if(h){
									$scroller.css('height', h + 'px')
								}
								else{
									$scroller.css('height', '')
								}
							}, 200)
						}
					}

					$wrap.data('params', params)
				}
			}
		}
	}
	/*  --- END Bind mobile menu  --- */

	/* change type2 menu for fixed */
	if($('#headerfixed .js-nav').length)
	{
		if(arNextOptions['THEME']['HEADER_FIXED'] == 2)
			CheckHeaderFixedMenu();

		setTimeout(function(){
			$('#headerfixed .js-nav').addClass('opacity1');
		},350);
	}

	// -- scroll after apply option
	if($('.instagram_ajax').length)
	{
		BX.addCustomEvent('onCompleteAction', function(eventdata){
			if(eventdata.action === 'instagrammLoaded')
				scrollPreviewBlock();
		});
	}
	else
		scrollPreviewBlock();


	scrollToTop();
	checkVerticalMobileFilter();

	$.extend( $.validator.messages, {
		required: BX.message('JS_REQUIRED'),
		email: BX.message('JS_FORMAT'),
		equalTo: BX.message('JS_PASSWORD_COPY'),
		minlength: BX.message('JS_PASSWORD_LENGTH'),
		remote: BX.message('JS_ERROR')
	});

	$.validator.addMethod(
		'regexp', function( value, element, regexp ){
			var re = new RegExp( regexp );
			return this.optional( element ) || re.test( value );
		},
		BX.message('JS_FORMAT')
	);

	$.validator.addMethod(
		'filesize', function( value, element, param ){
			return this.optional( element ) || ( element.files[0].size <= param )
		},
		BX.message('JS_FILE_SIZE')
	);

	$.validator.addMethod(
		'date', function( value, element, param ) {
			var status = false;
			if(!value || value.length <= 0){
				status = false;
			}
			else{
				// html5 date allways yyyy-mm-dd
				var re = new RegExp('^([0-9]{4})(.)([0-9]{2})(.)([0-9]{2})$');
				var matches = re.exec(value);
				if(matches){
					var composedDate = new Date(matches[1], (matches[3] - 1), matches[5]);
					status = ((composedDate.getMonth() == (matches[3] - 1)) && (composedDate.getDate() == matches[5]) && (composedDate.getFullYear() == matches[1]));
				}
				else{
					// firefox
					var re = new RegExp('^([0-9]{2})(.)([0-9]{2})(.)([0-9]{4})$');
					var matches = re.exec(value);
					if(matches){
						var composedDate = new Date(matches[5], (matches[3] - 1), matches[1]);
						status = ((composedDate.getMonth() == (matches[3] - 1)) && (composedDate.getDate() == matches[1]) && (composedDate.getFullYear() == matches[5]));
					}
				}
			}
			return status;
		}, BX.message('JS_DATE')
	);

	$.validator.addMethod(
		'extension', function(value, element, param){
			param = typeof param === 'string' ? param.replace(/,/g, '|') : 'png|jpe?g|gif';
			return this.optional(element) || value.match(new RegExp('.(' + param + ')$', 'i'));
		}, BX.message('JS_FILE_EXT')
	);

	$.validator.addMethod(
		'captcha', function( value, element, params ){
			return $.validator.methods.remote.call(this, value, element,{
				url: arNextOptions['SITE_DIR'] + 'ajax/check-captcha.php',
				type: 'post',
				data:{
					captcha_word: value,
					captcha_sid: function(){
						return $(element).closest('form').find('input[name="captcha_sid"]').val();
					}
				}
			});
		},
		BX.message('JS_ERROR')
	);

	$.validator.addMethod(
		'recaptcha', function(value, element, param){
			var id = $(element).closest('form').find('.g-recaptcha').attr('data-widgetid');
			if(typeof id !== 'undefined'){
				return grecaptcha.getResponse(id) != '';
			}
			else{
				return true;
			}
		}, BX.message('JS_RECAPTCHA_ERROR')
	);

	$.validator.addClassRules({
		'phone':{
			regexp: arNextOptions['THEME']['VALIDATE_PHONE_MASK']
		},
		'confirm_password':{
			equalTo: 'input[name="REGISTER\[PASSWORD\]"]',
			minlength: 6
		},
		'password':{
			minlength: 6
		},
		'inputfile':{
			extension: arNextOptions['THEME']['VALIDATE_FILE_EXT'],
			filesize: 5000000
		},
		'captcha':{
			captcha: ''
		},
		'recaptcha':{
			recaptcha: ''
		}
	});

	if(arNextOptions['THEME']['PHONE_MASK']){
		$('input.phone').inputmask('mask', {'mask': arNextOptions['THEME']['PHONE_MASK']});
	}

	/*city*/
	$('select.region').on('change', function(){
		var val = parseInt($(this).val());
		if($('select.city').length)
		{
			if(val)
			{
				$('select.city option').hide();
				$('select.city option').prop('disabled', 'disabled');
				$('select.city option[data-parent_section='+val+']').prop('disabled', '');
				$('select.city option:eq(0)').prop('disabled', '');
				$('select.city').ikSelect('reset');
				$('select.city option[data-parent_section='+val+']').show();
			}
			else
				$('select.city option').prop('disabled', 'disabled');
				$('select.city option:eq(0)').prop('disabled', '');
				$('select.city').ikSelect('reset');
		}
	})

	$('select.city, select.region').on('change', function(){
		var _this = $(this),
			val = parseInt(_this.val());
		if(_this.hasClass('region'))
		{
			$('select.city option:eq(0)').show();
			$('select.city').val(0);
		}

		if((_this.hasClass('region') && !val) || _this.hasClass('city'))
		{
			$.ajax({
				type: 'POST',
				data: {ID: val},
			}).success(function(html){
				var ob = BX.processHTML(html);
				$('.ajax_items')[0].innerHTML = ob.HTML;
				BX.ajax.processScripts(ob.SCRIPT);
			})
		}
	})

	$('.mobile_regions .city_item').on('click', function(e){
    	e.preventDefault();
    	var _this = $(this);
    	$.removeCookie('current_region');
		$.cookie('current_region', _this.data('id'), {path: '/',domain: arNextOptions['SITE_ADDRESS']});
		location.href = _this.attr('href');
    })

	/* toggle */
	var $this = this,
		previewParClosedHeight = 25;

	$('section.toggle > label').prepend($('<i />').addClass('fa fa-plus'));
	$('section.toggle > label').prepend($('<i />').addClass('fa fa-minus'));
	$('section.toggle.active > p').addClass('preview-active');
	$('section.toggle.active > div.toggle-content').slideDown(350, function() {});

	$('section.toggle > label').click(function(e){
		var parentSection = $(this).parent(),
			parentWrapper = $(this).parents('div.toogle'),
			previewPar = false,
			isAccordion = parentWrapper.hasClass('toogle-accordion');

		if(isAccordion && typeof(e.originalEvent) != 'undefined') {
			parentWrapper.find('section.toggle.active > label').trigger('click');
		}

		parentSection.toggleClass('active');

		// Preview Paragraph
		if( parentSection.find('> p').get(0) ){
			previewPar = parentSection.find('> p');
			var previewParCurrentHeight = previewPar.css('height');
			previewPar.css('height', 'auto');
			var previewParAnimateHeight = previewPar.css('height');
			previewPar.css('height', previewParCurrentHeight);
		}

		// Content
		var toggleContent = parentSection.find('> div.toggle-content');

		if( parentSection.hasClass('active') ){
			$(previewPar).animate({
				height: previewParAnimateHeight
			}, 350, function() {
				$(this).addClass('preview-active');
			});
			toggleContent.slideDown(350, function() {});
		}
		else{
			$(previewPar).animate({
				height: previewParClosedHeight
			}, 350, function() {
				$(this).removeClass('preview-active');
			});
			toggleContent.slideUp(350, function() {});
		}
	});

	$('.tables-responsive .responsive').footable(); //responsive table

	$('a[rel=tooltip]').tooltip();
	$('span[data-toggle=tooltip]').tooltip();

	$('.toggle .more_items').on('click', function(){
		$(this).closest('.toggle').find('.collapsed').fadeToggle();
		$(this).remove();
		if(typeof $(this).data('resize') !== 'undefined' && $(this).data('resize'))
			$(window).resize();
	})
	$('.toggle_menu .more_items').on('click', function(){
		$(this).closest('.toggle_menu').find('.collapsed').addClass('clicked_exp');
		$(this).remove();
	})

	/* search sync */
	$(document).on('keyup', '.search-input-div input', function(e){
		var inputValue = $(this).val();
		$('.search-input-div input:not(:focus').val(inputValue);

		if($(this).closest('#headerfixed').length)
		{
			if(e.keyCode == 13)
				$('.search form').submit();
		}
	});
	$(document).on('click', '.search-button-div button', function(e){
		if($(this).closest('#headerfixed').length)
			$('.search form').submit();
	});

	$('.inline-search-show, .inline-search-hide').on('click', function(e){
		if(window.matchMedia('(min-width: 600px)').matches)
		{
			if(typeof($(this).data('type_search')) != 'undefined' && $(this).data('type_search') == 'fixed')
				$('.inline-search-block').addClass('fixed');

			if(arNextOptions['THEME']['TYPE_SEARCH'] == 'fixed'){
				$('.inline-search-block.fixed.big .search-input').focus();
			}
			if(arNextOptions['THEME']['TYPE_SEARCH'] != 'fixed')
			{
				var height_block = 0;
				/*if(!$('header > .top-block').length || $('header.long').length)
				{*/
					if($('header.long').length)
					{
						height_block = $('header.long').closest('#header').actual('outerHeight');
					}
					else
					{
						height_block = $(this).closest('.maxwidth-theme').actual('outerHeight');
						if($(this).closest('.top-block').length)
							height_block = $(this).closest('.top-block').actual('outerHeight');
						else if($(this).closest('header.header-v8').length)
							height_block = $(this).closest('header.header-v8').actual('outerHeight');
					}
					if($('#bx-panel').length)
						height_block += $('#bx-panel').actual('outerHeight');
					$('.inline-search-block').css({
						'height': height_block,
						'line-height': height_block-4+'px',
						'top': -height_block
					})
				//}
			}

			$('.inline-search-block').toggleClass('show');
			if($('.top-block').length)
			{
				if($('.inline-search-block').hasClass('show'))
					$('.inline-search-block').css('background', $('.top-block').css('background-color'));
				else
					$('.inline-search-block').css('background', '#fff');
			}
			if(arNextOptions['THEME']['TYPE_SEARCH'] == 'fixed')
			{
				if($('.inline-search-block').hasClass('show'))
					$('<div class="jqmOverlay search"></div>').appendTo('body');
				else
					$('.jqmOverlay').detach();
			}
		}
		else
			location.href = arNextOptions['PAGES']['CATALOG_PAGE_URL']+'?q';
	})

	/* close search block */
	$("html, body").on('mousedown', function(e){
		if(typeof e.target.className == 'string' && e.target.className.indexOf('adm') < 0)
		{
			e.stopPropagation();
			var search_target = $(e.target).closest('.bx_searche');
			if(!$(e.target).hasClass('inline-search-block') && !$(e.target).hasClass('svg') && !search_target.length)
			{
				$('.inline-search-block').removeClass('show');
				$('.title-search-result').hide();
				if(arNextOptions['THEME']['TYPE_SEARCH'] == 'fixed')
					$('.jqmOverlay.search').detach();
			}

			if($('#basket_line .basket_fly').length && parseInt($("#basket_line .basket_fly").css("right")) >= 0){
				if(!$(e.target).closest('.basket_wrapp').length)
					$("#basket_line .basket_fly").stop().animate({"right": -$("#basket_line .basket_fly").outerWidth()}, 150);
			}

			if(isMobile)
			{
				if(search_target.length)
					location.href = search_target.attr('href');
			}
			var class_name = $(e.target).attr('class');
			if(typeof(class_name) == 'undefined' || class_name.indexOf('tooltip') < 0) //tooltip link
				$('.tooltip-link').tooltip('hide');
		}
	});
	$('.inline-search-block').find('*').on('mousedown', function(e){
		e.stopPropagation();
	});

	/*check mobile device*/
	if(jQuery.browser.mobile){
		$(document).on('click', '*[data-event="jqm"]', function(e){
			e.preventDefault();
			e.stopPropagation();
			var _this = $(this);
			var name = _this.data('name');

			if(window.matchMedia('(min-width:992px)').matches)
			{
				if(!$(this).hasClass('clicked'))
				{
					$(this).addClass('clicked');
					$(this).jqmEx();
					$(this).trigger('click');
				}
				return false;
			}
			else if(name.length){
				var script = arNextOptions['SITE_DIR'] + 'form/';
				var paramsStr = ''; var arTriggerAttrs = {};
				$.each(_this.get(0).attributes, function(index, attr){
					var attrName = attr.nodeName;
					var attrValue = _this.attr(attrName);
					arTriggerAttrs[attrName] = attrValue;
					if(/^data\-param\-(.+)$/.test(attrName)){
						var key = attrName.match(/^data\-param\-(.+)$/)[1];
						paramsStr += key + '=' + attrValue + '&';
					}
				});

				var triggerAttrs = JSON.stringify(arTriggerAttrs);
				var encTriggerAttrs = encodeURIComponent(triggerAttrs);
				script += '?name=' + name + '&' + paramsStr + 'data-trigger=' + encTriggerAttrs;

				location.href = script;
			}
		});

		$('.fancybox').removeClass('fancybox');
	}
	else
	{
		$(document).on('click', '*[data-event="jqm"]', function(e){
			e.preventDefault();
			e.stopPropagation();
			if(!$(this).hasClass('clicked'))
			{
				$(this).addClass('clicked');
				$(this).jqmEx();
				$(this).trigger('click');
			}
			return false;
		});
	}

	$('.animate-load').on('click', function(){
		if(!jQuery.browser.mobile)
			$(this).parent().addClass('loadings');
	})

	BX.addCustomEvent('onCompleteAction', function(eventdata, _this){
		try{
			if(eventdata.action === 'loadForm')
			{
				$(_this).parent().removeClass('loadings');
				$(_this).removeClass('clicked');

				if($(_this).hasClass('one_click_buy_trigger'))
					$('.one_click').removeClass('clicked')
				else if($(_this).hasClass('one_click_buy_basket_trigger'))
					$('.fast_order').removeClass('clicked')
			}
			else if(eventdata.action === 'loadBasket')
			{
				$('.basket-link.basket').attr('title', arBasketPrices.BASKET_SUMM_TITLE);
				$('.basket-link.delay').attr('title', arBasketPrices.DELAY_SUMM_TITLE);

				if(arBasketPrices.BASKET_COUNT>0)
				{
					$('.basket-link.basket').addClass('basket-count');
					$('.basket-link.basket .count').removeClass('empted');
					if($('.basket-link.basket .prices').length)
						$('.basket-link.basket .prices').html(arBasketPrices.BASKET_SUMM);
				}
				else
				{
					$('.basket-link.basket').removeClass('basket-count');
					$('.basket-link.basket .count').addClass('empted');
					if($('.basket-link.basket .prices').length)
						$('.basket-link.basket .prices').html(arBasketPrices.BASKET_SUMM_TITLE_SMALL);
				}
				$('.basket-link.basket .count').text(arBasketPrices.BASKET_COUNT);
				if(arBasketPrices.DELAY_COUNT>0)
				{
					$('.basket-link.delay').addClass('basket-count');
					$('.basket-link.delay .count').removeClass('empted');
				}
				else
				{
					$('.basket-link.delay').removeClass('basket-count');
					$('.basket-link.delay .count').addClass('empted');
				}
				$('.basket-link.delay .count').text(arBasketPrices.DELAY_COUNT);
			}
			else if(eventdata.action === 'loadActualBasketCompare')
			{
				var compare_count = Object.keys(arBasketAspro.COMPARE).length;
				if(compare_count>0)
				{
					$('.basket-link.compare').addClass('basket-count');
					$('.basket-link.compare .count').removeClass('empted');
					if($('#compare_fly').length)
						$('#compare_fly').removeClass('empty_block');
				}
				else
				{
					$('.basket-link.compare').removeClass('basket-count');
					$('.basket-link.compare .count').addClass('empted');
					if($('#compare_fly').length)
						$('#compare_fly').addClass('empty_block');
				}
				$('.basket-link.compare .count').text(compare_count);
			}
			else if(eventdata.action === 'loadRSS')
			{
			}
		}
		catch(e){
			console.error(e)
		}
	})

	/*slices*/
	if($('.banners-small .item.normal-block').length)
		$('.banners-small .item.normal-block').sliceHeight();
	if($('.teasers .item').length)
		$('.teasers .item').sliceHeight();
	if($('.wrap-portfolio-front .row.items > div').length)
		$('.wrap-portfolio-front .row.items > div').sliceHeight({'row': '.row.items', 'item': '.item1'});

	/* bug fix in ff*/
	$('img').removeAttr('draggable');

	clicked_tab = 0;

	$('.title-tab-heading').on('click', function(){
		var container = $(this).parent(),
			slide_block = $(this).next(),
			bReviewTab = container.hasClass('media_review');

		clicked_tab = container.index()+1;

		container.siblings().removeClass('active');

		$('.nav.nav-tabs li').removeClass('active');

		if(container.hasClass('active'))
		{
			if(bReviewTab)
			{
				$('#reviews_content').slideUp(200, function(){
					container.removeClass('active');
				});
			}
			else
			{
				slide_block.slideUp(200, function(){
					container.removeClass('active');
				});
			}
		}
		else
		{
			container.addClass('active');
			if(bReviewTab)
			{
				$('#reviews_content').slideDown();
			}
			else
			{
				if($('.tabs_section + #reviews_content').length)
					$('.tabs_section + #reviews_content').slideUp();
				slide_block.slideDown();
				if(typeof container.attr('id') !== 'undefined' && container.attr('id') == 'descr'){
					var $gallery = $('.galerys-block');
					if($gallery.length){
						var bTypeBig = $gallery.find('.big_slider').length;
						var $slider = bTypeBig ? $gallery.find('.big_slider') : $gallery.find('.small_slider');
						InitFlexSlider();
						var interval = setInterval(function(){
							if($slider.find('.slides .item').attr('style').indexOf('height') === -1){
								$(window).resize();
							}
							else{
								clearInterval(interval);
							}
						}, 100);
					}
				}
			}
		}
	})

	InitFlexSlider();

	setTimeout(function(){
		InitTopestMenuGummi();
		isOnceInited = true;
	},50);

	InitZoomPict();

	// $('body').on( 'click', '.captcha_reload', function(e){
	$(document).on('click', '.captcha_reload', function(e){
		var captcha = $(this).parents('.captcha-row');
		e.preventDefault();
		$.ajax({
			url: arNextOptions['SITE_DIR'] + 'ajax/captcha.php'
		}).done(function(text){
			captcha.find('input[name=captcha_sid]').val(text);
			captcha.find('img').attr('src', '/bitrix/tools/captcha.php?captcha_sid=' + text);
			captcha.find('input[name=captcha_word]').val('').removeClass('error');
			captcha.find('.captcha_input').removeClass('error').find('.error').remove();
		});
	});

	/* show print */
	if(arNextOptions["PAGES"]["BASKET_PAGE"])
	{
		if(arNextOptions["THEME"]["SHOW_BASKET_PRINT"]=="Y")
		{
			if($('.page-top h1').length)
				$('<div class="print-link" title="'+arNextOptions["THEME"]["EXPRESSION_FOR_PRINT_PAGE"]+'"><i class="svg svg-print"></i></div>').insertBefore($('.page-top h1'));
		}
	}
	else
	{
		if(arNextOptions['THEME']['PRINT_BUTTON'] == 'Y')
		{
			setTimeout(function(){
				if($('.page-top .rss-block.top').length)
				{
					$('<div class="print-link" title="'+arNextOptions["THEME"]["EXPRESSION_FOR_PRINT_PAGE"]+'"><i class="svg svg-print"></i></div>').insertBefore($('.page-top .rss-block.top .share_wrapp'));
				}
				else if($('.page-top .rss').length)
				{
					$('<div class="print-link" title="'+arNextOptions["THEME"]["EXPRESSION_FOR_PRINT_PAGE"]+'"><i class="svg svg-print"></i></div>').insertAfter($('.page-top .rss'));
				}
				else if($('.page-top h1').length)
					$('<div class="print-link" title="'+arNextOptions["THEME"]["EXPRESSION_FOR_PRINT_PAGE"]+'"><i class="svg svg-print"></i></div>').insertBefore($('.page-top h1'));
				// else
					// $('footer .print-block').html('<div class="print-link"><i class="svg svg-print"><svg id="Print.svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path class="cls-1" d="M1553,287h-2v3h-8v-3h-2a2,2,0,0,1-2-2v-5a2,2,0,0,1,2-2h2v-4h8v4h2a2,2,0,0,1,2,2v5A2,2,0,0,1,1553,287Zm-8,1h4v-4h-4v4Zm4-12h-4v2h4v-2Zm4,4h-12v5h2v-3h8v3h2v-5Z" transform="translate(-1539 -274)"/></svg></i></div>');
			},150);
		}
	}

	$(document).on('click', '.print-link', function(){
		window.print();
	})

	$('.head-block .item-link').on('click', function(){
		var _this = $(this);
		_this.siblings().removeClass('active');
		_this.addClass('active');
	})

	$('table.table').each(function(){
		var _this = $(this),
			first_td = _this.find('thead tr th');
		if(!first_td.length)
			first_td = _this.find('thead tr td');
		if(first_td.length)
		{
			var j = 0;
			_this.find('tbody tr td').each(function(i){
				if(j > first_td.length-1)
					j = 0;
				$('<div class="th-mobile">'+first_td[j].textContent+'</div>').appendTo($(this));
				j++;
			})
		}
	})

	if(window.matchMedia('(min-width: 768px)').matches)
		$('.wrapper_middle_menu.wrap_menu').removeClass('mobile');


	if(window.matchMedia('(max-width: 767px)').matches)
		$('.wrapper_middle_menu.wrap_menu').addClass('mobile');

	$('.menu_top_block .v_bottom > a').on('click', function(e){
		if($(e.target).hasClass('toggle_block'))
			e.preventDefault();
	})
	$('.menu_top_block .v_bottom > a .toggle_block').on('click', function(e){
		$(this).closest('.v_bottom').toggleClass('opened');
		$(this).closest('.v_bottom').find('>.dropdown').slideToggle()
	})

	$(document).on('click', '.show_props', function(){
		$(this).prev('.props_list_wrapp').stop().slideToggle(333);
		$(this).find('.char_title').toggleClass('opened');
	});

	$('.see_more').on('click', function(e) {
		e.preventDefault();
		var see_more = ($(this).is('.see_more') ? $(this) : $(this).parents('.see_more').first());
		var see_moreText = (see_more.find('> a').length ? see_more.find('> a') : see_more);
		var see_moreHiden = see_more.parent().find('> .d');
		if(see_more.hasClass('open')){
			see_moreText.text(BX.message('CATALOG_VIEW_MORE'));
			see_more.removeClass('open');
			see_moreHiden.hide();
		}
		else{
			see_moreText.text(BX.message('CATALOG_VIEW_LESS'));
			see_more.addClass('open');
			see_moreHiden.show();
		}
		return false;
	});

	$('.button.faq_button').click(function(e){
		e.preventDefault();
		$(this).toggleClass('opened');
		$('.faq_ask .form').slideToggle();
	});

	$('.staff.list .staff_section .staff_section_title a').click(function(e) {
		e.preventDefault();
		$(this).parents('.staff_section').toggleClass('opened');
		$(this).parents('.staff_section').find('.staff_section_items').stop().slideToggle(600);
		$(this).parents('.staff_section_title').find('.opener_icon').toggleClass('opened');
	});

	$('.jobs_wrapp .item .name').click(function(e) {
		$(this).closest('.item').toggleClass('opened');
		$(this).closest('.item').find('.description_wrapp').stop().slideToggle(600);
		$(this).closest('.item').find('.opener_icon').toggleClass('opened');
	});

	$('.faq.list .item .q a').on('click', function(e){
		e.preventDefault();
		$(this).parents('.item').toggleClass('opened');
		$(this).parents('.item').find('.a').stop().slideToggle();
		$(this).parents('.item').find('.q .opener_icon').toggleClass('opened');
	});

	$('.opener_icon').click(function(e) {
		e.preventDefault();
		$(this).parent().find('a').trigger('click');
	});

	$('.dotdot').dotdotdot();

	$('.more_block span').on('click', function() {
		var content_offset=$('.catalog_detail .tabs_section').offset();
		$('html, body').animate({scrollTop: content_offset.top-43}, 400);
	});

	$(document).on("click", ".counter_block:not(.basket) .plus", function(){
		if(!$(this).parents('.basket_wrapp').length){
			if($(this).parent().data("offers")!="Y"){
				var isDetailSKU2 = $(this).parents('.counter_block_wr').length;
					input = $(this).parents(".counter_block").find("input[type=text]")
					tmp_ratio = !isDetailSKU2 ? $(this).parents(".counter_wrapp").find(".to-cart").data('ratio') : $(this).parents('tr').first().find("td.buy .to-cart").data('ratio'),
					isDblQuantity = !isDetailSKU2 ? $(this).parents(".counter_wrapp").find(".to-cart").data('float_ratio') : $(this).parents('tr').first().find("td.buy .to-cart").data('float_ratio'),
					ratio=( isDblQuantity ? parseFloat(tmp_ratio) : parseInt(tmp_ratio, 10)),
					max_value='';
					currentValue = input.val();


				if(isDblQuantity)
					ratio = Math.round(ratio*arNextOptions.JS_ITEM_CLICK.precisionFactor)/arNextOptions.JS_ITEM_CLICK.precisionFactor;

				curValue = (isDblQuantity ? parseFloat(currentValue) : parseInt(currentValue, 10));

				curValue += ratio;
				if (isDblQuantity){
					curValue = Math.round(curValue*arNextOptions.JS_ITEM_CLICK.precisionFactor)/arNextOptions.JS_ITEM_CLICK.precisionFactor;
				}
				if(parseFloat($(this).data('max'))>0){
					if(input.val() < $(this).data('max')){
						if(curValue<=$(this).data('max'))
							input.val(curValue);

						input.change();
					}
				}else{
					input.val(curValue);
					input.change();
				}
			}
		}
	});
	$(document).on("click", ".counter_block:not(.basket) .minus", function(){
		if(!$(this).parents('.basket_wrapp').length){
			if($(this).parent().data("offers")!="Y"){
				var isDetailSKU2 = $(this).parents('.counter_block_wr').length;
					input = $(this).parents(".counter_block").find("input[type=text]")
					tmp_ratio = !isDetailSKU2 ? $(this).parents(".counter_wrapp").find(".to-cart").data('ratio') : $(this).parents('tr').first().find("td.buy .to-cart").data('ratio'),
					isDblQuantity = !isDetailSKU2 ? $(this).parents(".counter_wrapp").find(".to-cart").data('float_ratio') : $(this).parents('tr').first().find("td.buy .to-cart").data('float_ratio'),
					ratio=( isDblQuantity ? parseFloat(tmp_ratio) : parseInt(tmp_ratio, 10)),
					max_value='';
					currentValue = input.val();

				if(isDblQuantity)
					ratio = Math.round(ratio*arNextOptions.JS_ITEM_CLICK.precisionFactor)/arNextOptions.JS_ITEM_CLICK.precisionFactor;

				curValue = (isDblQuantity ? parseFloat(currentValue) : parseInt(currentValue, 10));

				curValue -= ratio;
				if (isDblQuantity){
					curValue = Math.round(curValue*arNextOptions.JS_ITEM_CLICK.precisionFactor)/arNextOptions.JS_ITEM_CLICK.precisionFactor;
				}

				if(parseFloat($(this).parents(".counter_block").find(".plus").data('max'))>0){
					if(currentValue > ratio){
						if(curValue<ratio){
							input.val(ratio);
						}else{
							input.val(curValue);
						}
						input.change();
					}
				}else{
					if(curValue > ratio){
						input.val(curValue);
					}else{
						if(ratio){
							input.val(ratio);
						}else if(currentValue > 1){
							input.val(curValue);
						}
					}
					input.change();
				}
			}
		}
	});

	$('.counter_block input[type=text]').numeric({allow:"."});
	$('.counter_block input[type=text]').on('focus', function(){
		$(this).addClass('focus');
	})
	$('.counter_block input[type=text]').on('blur', function(){
		$(this).removeClass('focus');
	})
	$(document).on("change", ".counter_block input[type=text]", function(e){
		if(!$(this).parents('.basket_wrapp').length){
			var val = $(this).val(),
				tmp_ratio = $(this).parents(".counter_wrapp").find(".to-cart").data('ratio') ? $(this).parents(".counter_wrapp").find(".to-cart").data('ratio') : $(this).parents('tr').first().find("td.buy .to-cart").data('ratio'),
				isDblQuantity = $(this).parents(".counter_wrapp").find(".to-cart").data('float_ratio') ? $(this).parents(".counter_wrapp").find(".to-cart").data('float_ratio') : $(this).parents('tr').first().find("td.buy .to-cart").data('float_ratio'),
				ratio=( isDblQuantity ? parseFloat(tmp_ratio) : parseInt(tmp_ratio, 10)),
				diff = val % ratio;

			if(isDblQuantity)
			{
				ratio = Math.round(ratio*arNextOptions.JS_ITEM_CLICK.precisionFactor)/arNextOptions.JS_ITEM_CLICK.precisionFactor;
				if(Math.round(diff*arNextOptions.JS_ITEM_CLICK.precisionFactor)/arNextOptions.JS_ITEM_CLICK.precisionFactor == ratio)
					diff = 0;
			}

			if($(this).hasClass('focus'))
			{
				intCount = Math.round(
					Math.round(val * arNextOptions.JS_ITEM_CLICK.precisionFactor / ratio) / arNextOptions.JS_ITEM_CLICK.precisionFactor
				) || 1;
				val = (intCount <= 1 ? ratio : intCount * ratio);
				// val -= diff;
				val = Math.round(val*arNextOptions.JS_ITEM_CLICK.precisionFactor)/arNextOptions.JS_ITEM_CLICK.precisionFactor;
			}

			if(parseFloat($(this).parents(".counter_block").find(".plus").data('max'))>0){
				if(val>parseFloat($(this).parents(".counter_block").find(".plus").data('max'))){
					val=parseFloat($(this).parents(".counter_block").find(".plus").data('max'));
					// val -= (val % ratio);
				}
			}
			if(val<ratio){
				val=ratio;
			}else if(!parseFloat(val)){
				val=1;
			}

			$(this).parents('.counter_block').parent().parent().find('.to-cart').attr('data-quantity', val);
			$(this).parents('.counter_block').parent().parent().find('.one_click').attr('data-quantity', val);
			$(this).val(val);

			var eventdata = {type: 'change', params: {id: $(this), value: val}};
			BX.onCustomEvent('onCounterProductAction', [eventdata]);
		}
	});

	BX.addCustomEvent('onCounterProductAction', function(eventdata) {
		if(typeof eventdata != 'object'){
			eventdata = {type: 'undefined'};
		}
		try{
			if(typeof eventdata.type != 'undefined'){
				if(!eventdata.params.id.closest('.gifts').length) // no gift
				{
					var obProduct = eventdata.params.id.data('product');

					if(eventdata.params.id.closest('.has_offer_prop').length) // type1 for offers in element list
					{
						if(typeof window['obSkuQuantys'] === 'undefined')
							window["obSkuQuantys"] = {};

						// if(typeof window['obOffers'] === 'undefined')
							window["obSkuQuantys"][eventdata.params.id.closest('.offer_buy_block').find('.to-cart').data('item')] = eventdata.params.value;
					}
					if(typeof window[obProduct] == 'object')
					{
						if(obProduct == "obOffers")
							setPriceAction('', '', 'Y');
						else
							window[obProduct].setPriceAction('Y');
					}
					else if(eventdata.params.id.length)
					{
						if(eventdata.params.id.closest('.main_item_wrapper').length && arNextOptions['THEME']['SHOW_TOTAL_SUMM'] == 'Y')
						{
							setPriceItem(eventdata.params.id.closest('.main_item_wrapper'), eventdata.params.value);
						}
					}
					BX.onCustomEvent('onCounterProductActionResize');
				}
			}
		}
		catch(e){
			console.error(e)
		}
	});

	/*slide cart*/
	$(document).on('mouseenter', '#basket_line .basket_normal:not(.empty_cart):not(.bcart) .basket_block ', function() {
		$(this).closest('.basket_normal').find('.popup').addClass('block');
		$(this).closest('.basket_normal').find('.basket_popup_wrapp').stop(true,true).slideDown(150);
	});
	$(document).on('mouseleave', '#basket_line .basket_normal .basket_block ', function() {
		var th=$(this);
		$(this).closest('.basket_normal').find('.basket_popup_wrapp').stop(true,true).slideUp(150, function(){
			th.closest('.basket_normal').find('.popup').removeClass('block');
		});
	});

	$(document).on('click', '.popup_button_basket', function(){
		var th=$(".to-cart[data-item="+$(this).data("item")+"]");

		var val = th.attr('data-quantity');

		if(!val) $val = 1;

		var tmp_props=th.data("props"),
			props='',
			part_props='',
			add_props='N',
			fill_prop={},
			iblockid = th.data('iblockid'),
			offer = th.data('offers'),
			rid='',
			basket_props='',
			item = th.attr('data-item');

		if(offer!="Y"){
			offer = "N";
		}else{
			basket_props=th.closest('.prices_tab').find('.bx_sku_props input').val();
		}
		if(tmp_props){
			props=tmp_props.split(";");
		}
		if(th.data("part_props")){
			part_props=th.data("part_props");
		}
		if(th.data("add_props")){
			add_props=th.data("add_props");
		}
		if($('.rid_item').length){
			rid=$('.rid_item').data('rid');
		}else if(th.data('rid')){
			rid=th.data('rid');
		}

		fill_prop=fillBasketPropsExt(th, 'prop', 'bx_ajax_text');

		fill_prop.quantity=val;
		fill_prop.add_item='Y';
		fill_prop.rid=rid;
		fill_prop.offers=offer;
		fill_prop.iblockID=iblockid;
		fill_prop.part_props=part_props;
		fill_prop.add_props=add_props;
		fill_prop.props=JSON.stringify(props);
		fill_prop.item=item;
		fill_prop.basket_props=basket_props;

		$.ajax({
			type:"POST",
			url:arNextOptions['SITE_DIR']+"ajax/item.php",
			data:fill_prop,
			dataType:"json",
			success:function(data){
				$('.basket_error_frame').jqmHide();
				if("STATUS" in data){
					getActualBasket(fill_prop.iblockID);
					if(data.STATUS === 'OK'){
						th.hide();
						th.closest('.counter_wrapp').find('.counter_block').hide();
						th.parents('tr').find('.counter_block_wr .counter_block').hide();
						th.closest('.button_block').addClass('wide');
						th.parent().find('.in-cart').show();

						addBasketCounter(item);
						$('.wish_item[data-item='+item+']').removeClass("added");
						$('.wish_item[data-item='+item+']').find(".value").show();
						$('.wish_item[data-item='+item+']').find(".value.added").hide();

						if($("#ajax_basket").length)
							reloadTopBasket('add', $('#ajax_basket'), 200, 5000, 'Y');

						if($("#basket_line .basket_fly").length){
							if(th.closest('.fast_view_frame').length || window.matchMedia('(max-width: 767px)').matches)
								basketFly('open', 'N');
							else
								basketFly('open');
						}

					}else{
						showBasketError(BX.message(data.MESSAGE));
					}
				}else{
					showBasketError(BX.message("CATALOG_PARTIAL_BASKET_PROPERTIES_ERROR"));
				}
			}
		});
	})

	$(document).on( 'click', '.to-cart:not(.read_more)', function(e){
		e.preventDefault();
		var th=$(this);
		if(!th.hasClass('clicked'))
		{
			th.addClass('clicked');
			var val = $(this).attr('data-quantity');


			var tmp_props=$(this).data("props"),
				props='',
				part_props='',
				add_props='N',
				fill_prop={},
				iblockid = $(this).data('iblockid'),
				offer = $(this).data('offers'),
				rid='',
				basket_props='',
				item = $(this).attr('data-item');
			if(th.closest('.but-cell').length)
			{
				if($('.counter_block[data-item="'+item+'"]').length)
					val = $('.counter_block[data-item="'+item+'"] input').val();
			}

			if(!val)
				val = 1;
			if(offer!="Y"){
				offer = "N";
			}else{
				basket_props=$(this).closest('.prices_tab').find('.bx_sku_props input').val();
			}
			if(tmp_props){
				props=tmp_props.split(";");
			}
			if($(this).data("part_props")){
				part_props=$(this).data("part_props");
			}
			if($(this).data("add_props")){
				add_props=$(this).data("add_props");
			}
			if($('.rid_item').length){
				rid=$('.rid_item').data('rid');
			}else if($(this).data('rid')){
				rid=$(this).data('rid');
			}

			fill_prop=fillBasketPropsExt(th, 'prop', th.data('bakset_div'));


			fill_prop.quantity=val;
			fill_prop.add_item='Y';
			fill_prop.rid=rid;
			fill_prop.offers=offer;
			fill_prop.iblockID=iblockid;
			fill_prop.part_props=part_props;
			fill_prop.add_props=add_props;
			fill_prop.props=JSON.stringify(props);
			fill_prop.item=item;
			fill_prop.basket_props=basket_props;

			if(th.data("empty_props")=="N"){
				showBasketError($("#"+th.data("bakset_div")).html(), BX.message("ERROR_BASKET_PROP_TITLE"), "Y", th);

				var eventdata = {action:'loadForm'};
				BX.onCustomEvent('onCompleteAction', [eventdata, th[0]]);
			}else{
				$.ajax({
					type:"POST",
					url:arNextOptions['SITE_DIR']+"ajax/item.php",
					data:fill_prop,
					dataType:"json",
					success:function(data){
						getActualBasket(fill_prop.iblockID);

						var eventdata = {action:'loadForm'};
						BX.onCustomEvent('onCompleteAction', [eventdata, th[0]]);
						arStatusBasketAspro = {};

						if(data !==null){
							if("STATUS" in data){
								if(data.MESSAGE_EXT===null)
									data.MESSAGE_EXT='';
								if(data.STATUS === 'OK'){
									// th.hide();
									$('.to-cart[data-item='+item+']').hide();
									$('.to-cart[data-item='+item+']').closest('.counter_wrapp').find('.counter_block').hide();
									$('.to-cart[data-item='+item+']').parents('tr').find('.counter_block_wr .counter_block').hide();
									$('.to-cart[data-item='+item+']').closest('.button_block').addClass('wide');
									// th.parent().find('.in-cart').show();
									$('.in-cart[data-item='+item+']').show();

									addBasketCounter(item);
									$('.wish_item[data-item='+item+']').removeClass("added");
									$('.wish_item[data-item='+item+']').find(".value").show();
									$('.wish_item[data-item='+item+']').find(".value.added").hide();

									if($("#ajax_basket").length)
										reloadTopBasket('add', $('#ajax_basket'), 200, 5000, 'Y');

									if($("#basket_line .basket_fly").length){
										if(th.closest('.fast_view_frame').length || window.matchMedia('(max-width: 767px)').matches  || $("#basket_line .basket_fly.loaded").length)
											basketFly('open', 'N');
										else
											basketFly('open');
									}

								}else{
									showBasketError(BX.message(data.MESSAGE)+' <br/>'+data.MESSAGE_EXT);
								}
							}else{
								showBasketError(BX.message("CATALOG_PARTIAL_BASKET_PROPERTIES_ERROR"));
							}
						}else{
							// th.hide();
							$('.to-cart[data-item='+item+']').hide();
							$('.to-cart[data-item='+item+']').closest('.counter_wrapp').find('.counter_block').hide();
							$('.to-cart[data-item='+item+']').parents('tr').find('.counter_block_wr .counter_block').hide();
							$('.to-cart[data-item='+item+']').closest('.button_block').addClass('wide');
							// th.parent().find('.in-cart').show();
							$('.in-cart[data-item='+item+']').show();

							addBasketCounter(item);
							$('.wish_item[data-item='+item+']').removeClass("added");
							$('.wish_item[data-item='+item+']').find(".value").show();
							$('.wish_item[data-item='+item+']').find(".value.added").hide();

							if($("#ajax_basket").length)
								reloadTopBasket('add', $('#ajax_basket'), 200, 5000, 'Y');

							if($("#basket_line .basket_fly").length)
							{
								if(th.closest('.fast_view_frame').length || window.matchMedia('(max-width: 767px)').matches  || $("#basket_line .basket_fly.loaded").length)
									basketFly('open', 'N');
								else
									basketFly('open');
							}
						}
					}
				});
			}
		}

	})

	$(document).on('click', '.to-subscribe', function(e){
		e.preventDefault();
		var th=$(this);
		if(!th.hasClass('clicked'))
		{
			th.addClass('clicked');
			if($(this).is('.auth'))
			{
				if($(this).hasClass('nsubsc'))
				{
					$(this).jqmEx();
					$(this).trigger('click');
				}
				else
				{
					location.href=arNextOptions['SITE_DIR']+'auth/?backurl='+location.pathname;
				}
			}
			else
			{
				var item = $(this).attr('data-item'),
					iblockid = $(this).attr('data-iblockid');
				// $(this).hide();
				$('.to-subscribe[data-item='+item+']').hide();
				$('.to-subscribe[data-item='+item+']').parent().find('.in-subscribe').show();
				$.get(arNextOptions['SITE_DIR'] + 'ajax/item.php?item=' + item + '&subscribe_item=Y',
					$.proxy(function(data){
						arStatusBasketAspro = {};
						getActualBasket(iblockid);
					})
				);
				th.removeClass('clicked');
			}
		}
	})

	$(document).on('click', '.in-subscribe', function(e){
		e.preventDefault();
		var item = $(this).attr('data-item'),
			iblockid = $(this).attr('data-iblockid');;
		// $(this).hide();
		$('.in-subscribe[data-item='+item+']').hide();
		$('.in-subscribe[data-item='+item+']').parent().find('.to-subscribe').removeClass('clicked');
		$('.in-subscribe[data-item='+item+']').parent().find('.to-subscribe').show();
		$.get(arNextOptions['SITE_DIR'] + 'ajax/item.php?item=' + item + '&subscribe_item=Y',
			$.proxy(function(data){
				getActualBasket(iblockid);
				arStatusBasketAspro = {};
			})
		);
	})

	$(document).on('click', '.wish_item', function(e){
		e.preventDefault();
		var val = $(this).attr('data-quantity'),
			_this = $(this),
			offer = $(this).data('offers'),
			iblockid = $(this).data('iblock'),
			tmp_props=$(this).data("props"),
			props='',
			item = $(this).attr('data-item');
			item2 = $(this).attr('data-item');

		if(!_this.hasClass('clicked'))
		{
			_this.addClass('clicked');
			if(!val) $val = 1;
			if(offer!="Y") offer = "N";
			if(tmp_props){
				props=tmp_props.split(";");
			}
			if(!$(this).hasClass('text')){
				if($(this).hasClass('added')){
					$(this).hide();
					$(this).closest('.wish_item_button').find('.to').show();

					$('.like_icons').each(function(){
						if($(this).find('.wish_item.text[data-item="'+item+'"]').length){
							$(this).find('.wish_item.text[data-item="'+item+'"]').removeClass('added');
							$(this).find('.wish_item.text[data-item="'+item+'"]').find('.value').show();
							$(this).find('.wish_item.text[data-item="'+item+'"]').find('.value.added').hide();
						}
						if($(this).find('.wish_item_button').length){
							$(this).find('.wish_item_button').find('.wish_item[data-item="'+item+'"]').removeClass('added');
							$(this).find('.wish_item_button').find('.wish_item[data-item="'+item+'"]').find('.value').show();
							$(this).find('.wish_item_button').find('.wish_item[data-item="'+item+'"]').find('.value.added').hide();
						}
					})
				}
				else{
					$(this).hide();
					$(this).closest('.wish_item_button').find('.in').addClass('added').show();

					$('.like_icons').each(function(){
						if($(this).find('.wish_item.text[data-item="'+item+'"]').length){
							$(this).find('.wish_item.text[data-item="'+item+'"]').addClass('added');
							$(this).find('.wish_item.text[data-item="'+item+'"]').find('.value').hide();
							$(this).find('.wish_item.text[data-item="'+item+'"]').find('.value.added').css({"display":"block"})
						}
						if($(this).find('.wish_item_button').length){
							$(this).find('.wish_item_button').find('.wish_item[data-item="'+item+'"]').addClass('added');
							$(this).find('.wish_item_button').find('.wish_item[data-item="'+item+'"]').find('.value').hide();
							$(this).find('.wish_item_button').find('.wish_item[data-item="'+item+'"]').find('.value.added').show();
						}
					})
				}
			}else{
				if(!$(this).hasClass('added')){
					$('.wish_item[data-item=' + item + ']').addClass('added');
					$('.wish_item[data-item=' + item + ']').find('.value').hide();
					$('.wish_item[data-item=' + item + ']').find('.value.added').css('display','block');

					$('.like_icons').each(function(){
						if($(this).find('.wish_item_button').length){
							$(this).find('.wish_item_button').find('.wish_item[data-item="'+item+'"]').addClass('added');
							$(this).find('.wish_item_button').find('.wish_item[data-item="'+item+'"]').find('.value').hide();
							$(this).find('.wish_item_button').find('.wish_item[data-item="'+item+'"]').find('.value.added').show();
						}
					})
				}else{
					$('.wish_item[data-item=' + item + ']').removeClass('added');
					$('.wish_item[data-item=' + item + ']').find('.value').show();
					$('.wish_item[data-item=' + item + ']').find('.value.added').hide();

					$('.like_icons').each(function(){
						if($(this).find('.wish_item_button').length){
							$(this).find('.wish_item_button').find('.wish_item[data-item="'+item+'"]').removeClass('added');
							$(this).find('.wish_item_button').find('.wish_item[data-item="'+item+'"]').find('.value').show();
							$(this).find('.wish_item_button').find('.wish_item[data-item="'+item+'"]').find('.value.added').hide();
						}
					})
				}
			}

			$('.in-cart[data-item=' + item + ']').hide();
			$('.to-cart[data-item=' + item + ']').removeClass('clicked');
			$('.to-cart[data-item=' + item + ']').parent().removeClass('wide');
			if(!$('.counter_block[data-item=' + item + ']').closest('.counter_wrapp').find('.to-order').length)
			{
				$('.to-cart[data-item=' + item + ']').show();
				$('.counter_block[data-item=' + item + ']').show();
			}
			if(!$(this).closest('.module-cart').size()){
				$.ajax({
					type:"GET",
					url:arNextOptions['SITE_DIR']+"ajax/item.php",
					data:"item="+item2+"&quantity="+val+"&wish_item=Y"+"&offers="+offer+"&iblockID="+iblockid+"&props="+JSON.stringify(props),
					dataType:"json",
					success: function(data){
						getActualBasket(iblockid);
						arStatusBasketAspro = {};
						if(data !==null){
							if(data.MESSAGE_EXT===null)
								data.MESSAGE_EXT='';
							if("STATUS" in data){
								if(data.STATUS === 'OK'){
									if(arNextOptions['COUNTERS']['USE_BASKET_GOALS'] !== 'N'){
										var eventdata = {goal: 'goal_wish_add', params: {id: item2}};
										BX.onCustomEvent('onCounterGoals', [eventdata]);
									}
									if($("#ajax_basket").length)
										reloadTopBasket('wish', $('#ajax_basket'), 200, 5000, 'N');

									if($("#basket_line .basket_fly").length){
										if(_this.closest('.fast_view_frame').length || window.matchMedia('(max-width: 767px)').matches || $("#basket_line .basket_fly.loaded").length)
											basketFly('wish', 'N');
										else
											basketFly('wish');
									}
								}else{
									showBasketError(BX.message(data.MESSAGE)+' <br/>'+data.MESSAGE_EXT, BX.message("ERROR_ADD_DELAY_ITEM"));
								}
							}else{
								showBasketError(BX.message(data.MESSAGE)+' <br/>'+data.MESSAGE_EXT, BX.message("ERROR_ADD_DELAY_ITEM"));
							}
						}else{
							if($("#ajax_basket").length)
								reloadTopBasket('wish', $('#ajax_basket'), 200, 5000, 'N');

							if($("#basket_line .basket_fly").length){
								if(_this.closest('.fast_view_frame').length || window.matchMedia('(max-width: 767px)').matches || $("#basket_line .basket_fly.loaded").length)
									basketFly('wish', 'N');
								else
									basketFly('wish');
							}
						}
					_this.removeClass('clicked');
					}
				});
			}
		}

	})

	$(document).on('click', '.item_main_info .item_slider .flex-direction-nav li span', function(e){
		if($('.inner_slider .slides_block').length)
		{
			if($(this).parent().hasClass('flex-nav-next'))
				$('.inner_slider .slides_block li.current').next().click();
			else
				$('.inner_slider .slides_block li.current').prev().click();
		}
	})

	$(document).on('click', '.compare_item', function(e){
		e.preventDefault();
		var item = $(this).attr('data-item');
		var iblockID = $(this).attr('data-iblock');
		var th=$(this);
		if(!th.hasClass('clicked'))
		{
			th.addClass('clicked');
			if(!$(this).hasClass('text')){
				if($(this).hasClass('added')){
					$(this).hide();
					$(this).closest('.compare_item_button').find('.to').show();

					/*sync other button*/
					$('.like_icons').each(function(){
						if($(this).find('.compare_item.text[data-item="'+item+'"]').length){
							$(this).find('.compare_item.text[data-item="'+item+'"]').removeClass('added');
							$(this).find('.compare_item.text[data-item="'+item+'"]').find('.value').show();
							$(this).find('.compare_item.text[data-item="'+item+'"]').find('.value.added').hide();
						}
						if($(this).find('.compare_item_button').length){
							$(this).find('.compare_item_button').find('.compare_item[data-item="'+item+'"]').removeClass('added');
							$(this).find('.compare_item_button').find('.compare_item[data-item="'+item+'"]').find('.value').show();
							$(this).find('.compare_item_button').find('.compare_item[data-item="'+item+'"]').find('.value.added').hide();
						}
					})
				}
				else{
					$(this).hide();
					$(this).closest('.compare_item_button').find('.in').show();

					/*sync other button*/
					$('.like_icons').each(function(){
						if($(this).find('.compare_item.text[data-item="'+item+'"]').length){
							$(this).find('.compare_item.text[data-item="'+item+'"]').addClass('added');;
							$(this).find('.compare_item.text[data-item="'+item+'"]').find('.value').hide();
							$(this).find('.compare_item.text[data-item="'+item+'"]').find('.value.added').css({"display":"block"});
						}
						if($(this).find('.compare_item_button').length){
							$(this).find('.compare_item_button').find('.compare_item[data-item="'+item+'"]').addClass('added');
							$(this).find('.compare_item_button').find('.compare_item[data-item="'+item+'"]').find('.value.added').show();
							$(this).find('.compare_item_button').find('.compare_item[data-item="'+item+'"]').find('.value').hide();
						}
					})
				}
			}else{
				if(!$(this).hasClass('added')){
					$('.compare_item[data-item=' + item + ']').addClass('added');
					$('.compare_item[data-item=' + item + ']').find('.value').hide();
					$('.compare_item[data-item=' + item + ']').find('.value.added').css('display','block');

					/*sync other button*/
					$('.like_icons').each(function(){
						if($(this).find('.compare_item_button').length){
							$(this).find('.compare_item_button').find('.compare_item[data-item="'+item+'"]').addClass('added');
							$(this).find('.compare_item_button').find('.compare_item[data-item="'+item+'"]').find('.value.added').show();
							$(this).find('.compare_item_button').find('.compare_item[data-item="'+item+'"]').find('.value').hide();
						}
					})
				}else{
					$('.compare_item[data-item=' + item + ']').removeClass('added');
					$('.compare_item[data-item=' + item + ']').find('.value').show();
					$('.compare_item[data-item=' + item + ']').find('.value.added').hide();

					/*sync other button*/
					$('.like_icons').each(function(){
						if($(this).find('.compare_item_button').length){
							$(this).find('.compare_item_button').find('.compare_item[data-item="'+item+'"]').removeClass('added');
							$(this).find('.compare_item_button').find('.compare_item[data-item="'+item+'"]').find('.value').show();
							$(this).find('.compare_item_button').find('.compare_item[data-item="'+item+'"]').find('.value.added').hide();
						}
					})
				}
			}

			$.get(arNextOptions['SITE_DIR'] + 'ajax/item.php?item=' + item + '&compare_item=Y&iblock_id=' + iblockID,
				$.proxy(function(data){
					getActualBasket(iblockID, 'Compare');
					arStatusBasketAspro = {};
					if($('#compare_fly').length){
						jsAjaxUtil.InsertDataToNode(arNextOptions['SITE_DIR'] + 'ajax/show_compare_preview_fly.php', 'compare_fly', false);
					}
				th.removeClass('clicked');
				})
			);
		}

	});

	$('.fancy').fancybox({
		openEffect  : 'fade',
		closeEffect : 'fade',
		nextEffect : 'fade',
		prevEffect : 'fade',
		tpl:{
			closeBtn : '<a title="'+BX.message('FANCY_CLOSE')+'" class="fancybox-item fancybox-close" href="javascript:;"></a>',
			next     : '<a title="'+BX.message('FANCY_NEXT')+'" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
			prev     : '<a title="'+BX.message('FANCY_PREV')+'" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
		},
	});
	$('.fancybox').fancybox();

	$(".video_link").fancybox({
			type: "iframe",
            maxWidth    : 800,
            maxHeight   : 600,
            fitToView   : false,
            width       : '70%',
            height      : '70%',
            autoSize    : false,
            closeClick  : false,
            beforeLoad  : function(){
                var url= $(this.element).attr("href");
                url += '?fs=1&autoplay=1';
                this.href = url;
            }
        });

	$('.tabs>li').on('click', function(){
		var parent = $(this).parent();
		if(!$(this).hasClass('active')){
			var sliderIndex = $(this).index(),
				curLiNav=$(this).closest('.top_blocks').find('.slider_navigation').find('>li:eq(' + sliderIndex + ')'),
				curLi=$(this).closest('.top_blocks').siblings('.tabs_content').find('>li:eq(' + sliderIndex + ')');
			$(this).addClass('active').addClass('cur').siblings().removeClass('active').removeClass('cur');
			curLi.addClass('cur').siblings().removeClass('cur');
			curLiNav.addClass('cur').siblings().removeClass('cur');

			if(parent.hasClass('ajax')) // front tabs
			{
				if(!$(this).hasClass('clicked'))
				{
					$.ajax({
						url: arNextOptions['SITE_DIR'] + 'include/mainpage/comp_catalog_ajax.php',
						type: 'POST',
						data: {AJAX_POST: 'Y', FILTER_HIT_PROP: $(this).data('code'), AJAX_PARAMS: $(this).closest('.tab_slider_wrapp').find('.request-data').data('value'), GLOBAL_FILTER: curLi.data('filter')},
					}).success(function(html){
						curLi.find('.tabs_slider').html(html);
						setTimeout(function(){
							curLi.addClass('opacity1');
						}, 100);

						/*equal height*/
						curLi.find('.catalog_block .catalog_item_wrapp .catalog_item .item_info:visible .item-title').sliceHeight({item:'.catalog_item:visible', mobile: true});
						curLi.find('.catalog_block .catalog_item_wrapp .catalog_item .item_info:visible').sliceHeight({item:'.catalog_item:visible', mobile: true});
						curLi.find('.catalog_block .catalog_item_wrapp .catalog_item:visible').sliceHeight({classNull: '.footer_button', item:'.catalog_item:visible', mobile: true});

						initCountdown();
					})
					$(this).addClass('clicked');
				}
			}
		}
	})

	/*search click*/
	$('.search_block .icon').on('click', function(){
		var th=$(this);
		if($(this).hasClass('open')){
			$(this).closest('.center_block').find('.search_middle_block').removeClass('active');
			$(this).removeClass('open');
			$(this).closest('.center_block').find('.search_middle_block').find('.noborder').hide();
		}else{
			setTimeout(function(){
				th.closest('.center_block').find('.search_middle_block').find('.noborder').show();
			},100);
			$(this).closest('.center_block').find('.search_middle_block').addClass('active');
			$(this).addClass('open');
		}
	})
	$(document).on('mouseenter', '.display_list .item_wrap', function(){
		$(this).prev().addClass('prev');
	});
	$(document).on('mouseleave', '.display_list .item_wrap', function(){
		$(this).prev().removeClass('prev');
	});
	/*$(document).on('mouseenter', '.catalog_block .item_wrap', function(){
		$(this).addClass('shadow_delay');
	});
	$(document).on('mouseleave', '.catalog_block .item_wrap', function(){
		$(this).removeClass('shadow_delay');
	});*/
	$(document).on('click', '.no_goods .button', function(){
		$('.bx_filter .smartfilter .bx_filter_search_reset').trigger('click');
	});

	$(document).on('click', '.ajax_load_btn', function(){
		var url=$(this).closest('.container').find('.module-pagination .flex-direction-nav .flex-next').attr('href'),
			th=$(this).find('.more_text_ajax');

		if(!th.hasClass('loading'))
		{
			th.addClass('loading');
			var objUrl = parseUrlQuery(),
				add_url = ''
				obGetData = {"ajax_get": "Y", "AJAX_REQUEST": "Y"};
			if('clear_cache' in objUrl)
			{
				if(objUrl.clear_cache == 'Y')
					add_url = '&clear_cache=Y';
			}
			if(th.closest('.goods-block.ajax_load'))
				obGetData.bitrix_include_areas = 'N';
			$.ajax({
				url: url+add_url,
				data: obGetData,
				success: function(html){
					if($('.ajax_load').length)
					{
						th.removeClass('loading');
						if($('.display_list').length){
							$('.display_list').append(html);
						}else if($('.block_list').length){
							$('.block_list').append(html);
							touchItemBlock('.catalog_item a');
						}else if($('.module_products_list').length){
							$('.module_products_list > tbody').append(html);
						}
						setStatusButton();
						initCountdown();

						var eventdata = {action:'ajaxContentLoadedTab'};
						BX.onCustomEvent('onAjaxSuccess', [eventdata]);
						$('.bottom_nav').html($(html).find('.bottom_nav').html());
					}
					else
					{
						if($('.banners-small.front').length)
						{
							$('.banners-small .items.row').append(html);
							$('.bottom_nav').html($('.banners-small .items.row .bottom_nav').html());
							$('.banners-small .items.row .bottom_nav').remove();
						}
						else
						{
							if(th.closest('.item-views').find('.items').length)
							{
								th.closest('.item-views').find('.items').append(html);
							}
							else
							{
								$(html).insertBefore($('.blog .bottom_nav'));
							}

							$('.bottom_nav').html($('.bottom_nav:hidden').html());
							$('.bottom_nav:hidden').remove();
						}

						var eventdata = {action:'ajaxContentLoaded', content: html};
						BX.onCustomEvent('onCompleteAction', [eventdata, th[0]]);

						setTimeout(function(){
							$('.banners-small .item.normal-block').sliceHeight({resize: false});
							if($('.item.slice-item').length)
							{
								$('.item.slice-item .title').sliceHeight({resize: false});
								$('.item.slice-item').sliceHeight({resize: false});
							}
							th.removeClass('loading');
						}, 100);
					}
				}
			})
		}
	})

	//set cookie for basket link click
	$(document).on('click', '.bx_ordercart_order_table_container .control > a, .basket-item-actions-remove, a[data-entity=basket-item-remove-delayed]', function(e){
		$.removeCookie('click_basket', {path: '/'});
		$.cookie('click_basket', 'Y', {path: '/'});
	})

	$(document).on('click', '.bx_compare .tabs-head li', function(){
		var url=$(this).find('.sortbutton').data('href');
		BX.showWait(BX("bx_catalog_compare_block"));
		$.ajax({
			url: url,
			data: {'ajax_action': 'Y'},
			success: function(html){
				history.pushState(null, null, url);
				$('#bx_catalog_compare_block').html(html);
				BX.closeWait();
			}
		})
	})
	var hoveredTrs;
	$(document).on({
		mouseover: function(e){
			var _ = $(this);
			var tbodyIndex = _.closest('tbody').index()+1; //+1 for nth-child
			var trIndex = _.index()+1; // +1 for nth-child
			hoveredTrs = $(e.delegateTarget).find('.data_table_props')
				.children(':nth-child('+tbodyIndex+')')
				.children(':nth-child('+trIndex+')').addClass('hovered');
		},
		mouseleave: function(e){
			if(hoveredTrs)
				hoveredTrs.removeClass('hovered');
		}
	}, '.bx_compare .data_table_props tbody>tr');
	$(document).on('click', '.fancy_offer', function(e){
		e.preventDefault();
		var arPict=[], index = 0;
		$(this).closest('.item_slider').find('.sliders .slides_block li').each(function(){
			var obImg = {};
			obImg = {
				'title': $(this).find('img').attr('alt'),
				'href': $(this).data('big')
			}
			if($(this).hasClass('current')){
				index = $(this).index();
			}
			arPict.push(obImg);
		})
		$.fancybox(arPict, {
			index: index,
			openEffect  : 'fade',
			closeEffect : 'fade',
			nextEffect : 'fade',
			prevEffect : 'fade',
			type : 'image',
			tpl:{
				closeBtn : '<a title="'+BX.message('FANCY_CLOSE')+'" class="fancybox-item fancybox-close" href="javascript:;"></a>',
				next     : '<a title="'+BX.message('FANCY_NEXT')+'" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
				prev     : '<a title="'+BX.message('FANCY_PREV')+'" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
			},
		});
	})

	/*tabs*/
	$(".tabs_section .tabs-head li").on("click", function(){
		if(!$(this).is(".current")){
			$(".tabs_section .tabs-head li").removeClass("current");
			$(this).addClass("current");
			$(".tabs_section ul.tabs_content li").removeClass("current");
			if($(this).attr("id") == "product_reviews_tab"){
				$(".shadow.common").hide(); $("#reviews_content").show();
			}
			else{
				$(".shadow.common").show();
				$("#reviews_content").hide();
				$(".tabs_section ul.tabs_content > li:eq("+$(this).index()+")").addClass("current");
			}
		}
	});

	/*open first section slide*/
	setTimeout(function() {
		$('.jobs_wrapp .item:first .name tr').trigger('click');
	}, 300);

	$('.choise').on('click', function(){
		var _this = $(this);
		if(typeof(_this.data('block')) != 'undefined')
		{
			scrollToBlock(_this.data('block'));
		}
	})

	$(document).on('click', '.buy_block .slide_offer', function(){
		scroll_block($('.tabs_section'));
	});
	$('.share  > .share_wrapp .text').on('click', function(){
		var block = $(this).parent().find('.shares');
		if(!block.is(':visible') && !$(this).closest('.share.top').length)
			$('#content').css('z-index',3);
		block.fadeToggle(100,function(){
			if(!block.is(':visible'))
				$('#content').css('z-index',2);
		});
	})
	$('html, body').on('mousedown', function(e) {
		if(typeof e.target.className == 'string' && e.target.className.indexOf('adm') < 0)
		{
			e.stopPropagation();
			$('div.shares').fadeOut(100, function(){
				$('#content').css('z-index',2);
				$('.price_txt .share_wrapp').removeClass('opened');
			});
			$('.search_middle_block').removeClass('active_wide');
		}
	})
	$('.share_wrapp').find('*').on('mousedown', function(e) {
		e.stopPropagation();
	});

	$('.price_txt .share_wrapp .text').click(function(){
		$(this).parent().toggleClass('opened');
		$(this).parent().find('.shares').fadeToggle();
	})

	$(document).on('click', '.reviews-collapse-link', function(){
		$('.reviews-reply-form').slideToggle();
	})

	/* accordion action*/
	$('.panel-collapse').on('hidden.bs.collapse', function(){
		$(this).parent().toggleClass('opened');
	})
	$('.panel-collapse').on('show.bs.collapse', function(){
		$(this).parent().toggleClass('opened');
	})

	/* accordion */
	$('.accordion-head').on('click', function(e){
		e.preventDefault();
		if(!$(this).next().hasClass('collapsing')){
			$(this).toggleClass('accordion-open');
			$(this).toggleClass('accordion-close');
		}
	});

	/* progress bar */
	$('[data-appear-progress-animation]').each(function(){
		var $this = $(this);
		$this.appear(function(){
			var delay = ($this.attr('data-appear-animation-delay') ? $this.attr('data-appear-animation-delay') : 1);
			if( delay > 1 )
				$this.css('animation-delay', delay + 'ms');
			$this.addClass($this.attr('data-appear-animation'));

			setTimeout(function(){
				$this.animate({
					width: $this.attr('data-appear-progress-animation')
				}, 1500, 'easeOutQuad', function() {
					$this.find('.progress-bar-tooltip').animate({
						opacity: 1
					}, 500, 'easeOutQuad');
				});
			}, delay);
		}, {accX: 0, accY: -50});
	});

	initCountdown();

	/* portfolio item */
	if($('.item.animated-block').length)
	{
		$('.item.animated-block').appear(function(){
			var $this = $(this);

			$this.addClass($this.data('animation')).addClass('visible');

		}, {accX: 0, accY: 150})
	}

	/*adaptive menu start*/
	$('.menu.adaptive').on('click', function(){
		$(this).toggleClass('opened');
		if($(this).hasClass('opened')){
			$('.mobile_menu').toggleClass('opened').slideDown();
		}else{
			$('.mobile_menu').toggleClass('opened').slideUp();
		}
	});
	$('.mobile_menu .has-child >a').on('click', function(e){
		var parentLi=$(this).parent();
		e.preventDefault();
		parentLi.toggleClass('opened');
		parentLi.find('.dropdown').slideToggle();
	})

	$('.mobile_menu .search-input-div input').on('keyup', function(e) {
		var inputValue = $(this).val();
		$('.center_block .stitle_form input').val(inputValue);
		if(e.keyCode == 13){
			$('.center_block .stitle_form form').submit();
		}
	});

	$('.center_block .stitle_form input').on('keyup', function(e) {
		var inputValue = $(this).val();
		$('.mobile_menu .search-input-div input').val(inputValue);
		if(e.keyCode == 13){
			$('.center_block .stitle_form form').submit();
		}
	});

	$('.mobile_menu .search-button-div button').on('click', function(e) {
		e.preventDefault();
		var inputValue = $(this).parents().find('input').val();
		$('.center_block .stitle_form input').val(inputValue);
		$('.center_block .stitle_form form').submit();
	});
	/*adaptive menu end*/

	$(document).on('click', '.mega-menu .dropdown-menu', function(e){
		e.stopPropagation()
	});

	$(document).on('click', '.mega-menu .dropdown-toggle.more-items', function(e){
		e.preventDefault();
	});

	$('.table-menu .dropdown,.table-menu .dropdown-submenu,.table-menu .dropdown-toggle').on('mouseenter', function() {
		CheckTopVisibleMenu();
	});
	$(document).on('mouseenter', '#headerfixed .table-menu .dropdown-menu .dropdown-submenu', function() {
		CheckTopVisibleMenu();
	});

	$('.mega-menu .search-item .search-icon, .menu-row #title-search .fa-close').on('click', function(e) {
		e.preventDefault();
		$('.menu-row #title-search').toggleClass('hide');
	});

	$('.mega-menu ul.nav .search input').on('keyup', function(e) {
		var inputValue = $(this).val();
		$('.menu-row > .search input').val(inputValue);
		if(e.keyCode == 13){
			$('.menu-row > .search form').submit();
		}
	});

	$('.menu-row > .search input').on('keyup', function(e) {
		var inputValue = $(this).val();
		$('.mega-menu ul.nav .search input').val(inputValue);
		if(e.keyCode == 13){
			$('.menu-row > .search form').submit();
		}
	});

	$('.mega-menu ul.nav .search button').on('click', function(e) {
		e.preventDefault();
		var inputValue = $(this).parents('.search').find('input').val();
		$('.menu-and-search .search input').val(inputValue);
		$('.menu-row > .search form').submit();
	});

	$('.btn.btn-add').on('click', function(){
		$.ajax({
			type:"GET",
			url:arNextOptions['SITE_DIR']+"ajax/clearBasket.php",
			success: function(data){
			}
		});
	})

	$('.sort_display a').on('click', function(){
		$(this).siblings().removeClass('current');
		$(this).addClass('current');
	})

	/*detail order show payments*/
	$('.sale-order-detail-payment-options-methods-info-change-link').on('click', function(){
		$(this).closest('.sale-order-detail-payment-options-methods-info').addClass('opened').siblings().addClass('opened');
	})

	/*expand/hide filter values*/
	$(document).on('click', '.expand_block', function(){
		togglePropBlock($(this));
	})

	/*touch event*/
	document.addEventListener('touchend', function(event) {
		if(!$(event.target).closest('.menu-item').length && !$(event.target).hasClass('menu-item')){
			$('.menu-row .dropdown-menu').css({'display':'none','opacity':0});
			$('.menu-item').removeClass('hover');
			$('.bx-breadcrumb-item.drop').removeClass('hover');
		}
		if(!$(event.target).closest('.menu.topest').length){
			$('.menu.topest').css({'overflow': 'hidden'});
			$('.menu.topest > li').removeClass('hover');
		}
		if(!$(event.target).closest('.full.has-child').length){
			$('.menu_top_block.catalog_block li').removeClass('hover');
		}
		if(!$(event.target).closest('.basket_block').length){
			$('.basket_block .link').removeClass('hover');
			$('.basket_block .basket_popup_wrapp').slideUp();
		}
		if(!$(event.target).closest('.catalog_item').length){
			var tabsContentUnhoverHover = $('.tab:visible').attr('data-unhover') * 1;
			$('.tab:visible').stop().animate({'height': tabsContentUnhoverHover}, 100);
			$('.tab:visible').find('.catalog_item').removeClass('hover');
			$('.tab:visible').find('.catalog_item .buttons_block').stop().fadeOut(233);
			if($('.catalog_block').length){
				$('.catalog_block').find('.catalog_item_wrapp').removeClass('hover');
				$('.catalog_block').find('.catalog_item').removeClass('hover');
			}
		}
		//togglePropBlock($(event.target));

	}, false);


	touchMenu('.menu-row .menu-item');
	touchTopMenu('.menu.topest li');
	touchLeftMenu('.menu_top_block li.full');
	touchBreadcrumbs('.bx-breadcrumb-item.drop');

	$(document).on('keyup', '.coupon .input_coupon input', function(){
		if($(this).val().length){
			$(this).removeClass('error');
			$(this).closest('.input_coupon').find('.error').remove();
		}else{
			$(this).addClass('error');
			$("<label class='error'>"+BX.message("INPUT_COUPON")+"</label>").insertBefore($(this));
		}
	})
	showPhoneMask('input[autocomplete=tel]');
	BX.addCustomEvent(window, "onAjaxSuccessFilter", function(e){
		setBasketStatusBtn();
	});

	BX.addCustomEvent(window, "onAjaxSuccess", function(e){
		if(e != 'OK')
		{
			initSelects(document);
			InitOrderCustom();
			showPhoneMask('input[autocomplete=tel]');
			if($('.catalog_detail').length && !$('.fast_view_frame').length)
			{
				$('.bx_filter').remove();
				InitFlexSlider();
			}
			if(arNextOptions["PAGES"]["CATALOG_PAGE"])
			{
				//setStatusButton();
				initCountdown();
			}

			if(arNextOptions["PAGES"]["ORDER_PAGE"])
			{
				orderActions(e);
			}
		}
	});

	//event for default basket quantity change
	BX.addCustomEvent(window, "OnBasketChange", function(e){
		if(arNextOptions["PAGES"]["BASKET_PAGE"])
		{
			var summ = 0,
				title = '';

			if(typeof BX.Sale !== "undefined")
			{
				if(typeof BX.Sale.BasketComponent !== "undefined")
				{
					summ = BX.Sale.BasketComponent.result.allSum;
					title = BX.message('JS_BASKET_COUNT_TITLE').replace('SUMM', summ);
				}
			}
			else
			{
				summ = $('#allSum_FORMATED').html().replace(/&nbsp;/g, ' ');
				title = BX.message('JS_BASKET_COUNT_TITLE').replace('SUMM', summ);
			}

			if($('.js-basket-block .wrap .prices').length)
				$('.js-basket-block .wrap .prices').html(summ);
			if($('a.basket-link.basket').length)
				$('a.basket-link.basket').attr('title', title);
			if($('.basket_fly .opener .basket_count').length)
				$('.basket_fly .opener .basket_count').attr('title', title);

		}
	})
	BX.addCustomEvent(window, "onFrameDataRequestFail", function(response){
		console.log(response);
	});

});

if(!funcDefined('setBasketStatusBtn')){
	setBasketStatusBtn = function(){
		if(typeof(arBasketAspro) !== 'undefined')
		{
			if('BASKET' in arBasketAspro) // basket items
			{
				if(arBasketAspro.BASKET)
				{
					for(var i in arBasketAspro.BASKET)
					{
						$('.to-cart[data-item='+i+']').hide();
						$('.counter_block[data-item='+i+']').hide();
						$('.in-cart[data-item='+i+']').show();
						$('.in-cart[data-item='+i+']').closest('.button_block').addClass('wide');
					}
				}
			}

			if('DELAY' in arBasketAspro) // delay items
			{
				if(arBasketAspro.DELAY)
				{
					for(var i in arBasketAspro.DELAY)
					{
						$('.wish_item.to[data-item='+i+']').hide();
						$('.wish_item.in[data-item='+i+']').show();
						if ($('.wish_item[data-item='+i+']').find(".value.added").length)
						{
							$('.wish_item[data-item='+i+']').addClass("added");
							$('.wish_item[data-item='+i+']').find(".value").hide();
							$('.wish_item[data-item='+i+']').find(".value.added").css('display','block');
						}
					}
				}
			}

			if('SUBSCRIBE' in arBasketAspro) // subscribe items
			{
				if(arBasketAspro.SUBSCRIBE)
				{
					for(var i in arBasketAspro.SUBSCRIBE)
					{
						$('.to-subscribe[data-item='+i+']').hide();
						$('.in-subscribe[data-item='+i+']').show();
					}
				}
			}

			if('COMPARE' in arBasketAspro) // compare items
			{
				if(arBasketAspro.COMPARE)
				{
					for(var i in arBasketAspro.COMPARE)
					{
						$('.compare_item.to[data-item='+i+']').hide();
						$('.compare_item.in[data-item='+i+']').show();
						if ($('.compare_item[data-item='+i+']').find(".value.added").length)
						{
							$('.compare_item[data-item='+i+']').addClass("added");
							$('.compare_item[data-item='+i+']').find(".value").hide();
							$('.compare_item[data-item='+i+']').find(".value.added").css('display','block');
						}
					}
				}
			}
		}
	}
}

if(!funcDefined('togglePropBlock')){
	togglePropBlock=function(className){
		var all_props_block = className.closest('.bx_filter_parameters_box_container').find('.hidden_values');
		if(all_props_block.length && (className.hasClass('inner_text') || className.hasClass('expand_block')))
		{
			if(all_props_block.is(':visible'))
			{
				className.text(BX.message('FILTER_EXPAND_VALUES'));
				all_props_block.hide();
			}
			else
			{
				className.text(BX.message('FILTER_HIDE_VALUES'));
				all_props_block.show();
			}
		}
	}
}

if(!funcDefined('showPhoneMask')){
	showPhoneMask=function(className){
		$(className).inputmask('mask', {'mask': arNextOptions['THEME']['PHONE_MASK'], 'showMaskOnHover':false });
	}
}

if(!funcDefined('parseUrlQuery')){
	parseUrlQuery=function() {
	    var data = {};
	    if(location.search) {
	        var pair = (location.search.substr(1)).split('&');
	        for(var i = 0; i < pair.length; i ++) {
	            var param = pair[i].split('=');
	            data[param[0]] = param[1];
	        }
	    }
	    return data;
	}
}

if(!funcDefined('getActualBasket')){
	getActualBasket=function(iblockID, type){
		var data='';
		if(typeof iblockID !=="undefined"){
			data={"iblockID":iblockID}
		}
		$.ajax({
			type:"GET",
			url:arNextOptions['SITE_DIR']+"ajax/actualBasket.php",
			data:data,
			success: function(data){
				if(!$('.js_ajax').length)
					$('body').append('<div class="js_ajax"></div>');
				$('.js_ajax').html(data);

				if(typeof(type) !== undefined)
				{
					var eventdata = {action:'loadActualBasket'+type};
					BX.onCustomEvent('onCompleteAction', [eventdata]);
				}
			}
		});
	}
}

function touchMenu(selector){
	if(isMobile){
		if($(selector).length)
		{
			$(selector).each(function(){
				var th=$(this);
				th.on('touchend', function(e) {
					var _th = $(e.target).closest('.menu-item');

					$('.menu.topest > li').removeClass('hover');
					$('.menu_top_block.catalog_block li').removeClass('hover');
					$('.bx-breadcrumb-item.drop').removeClass('hover');

					if (_th.find('.dropdown-menu').length && !_th.hasClass('hover')) {
						e.preventDefault();
						e.stopPropagation();
						_th.siblings().removeClass('hover');
						_th.addClass('hover');
						$('.menu-row .dropdown-menu').css({'display':'none', 'opacity':0});
						if(_th.hasClass('menu-item'))
						{
							_th.closest('.dropdown-menu').css({'display':'block', 'opacity':1});
						}
						if(_th.find('> .wrap > .dropdown-menu'))
						{
							_th.find('> .wrap > .dropdown-menu').css({'display':'block', 'opacity':1});
						}
						else if(_th.find('> .dropdown-menu'))
						{
							_th.find('> .dropdown-menu').css({'display':'block', 'opacity':1});
						}
						CheckTopVisibleMenu();
					}
					else
					{
						var href = ($(e.target).attr('href') ? $(e.target).attr('href') : $(e.target).closest('a').attr('href'))
						if(href && href !== 'undefined')
							location.href = href;
					}
				})
			})
		}
	}else{
		$(selector).off();
	}
}

function touchTopMenu(selector){
	if(isMobile){
		if($(selector).length)
		{
			$(selector).each(function(){
				var th=$(this);
				th.on('touchend', function(e) {
					var _th = $(e.target).closest('li');

					$('.menu-item').removeClass('hover');
					$('.menu_top_block.catalog_block li').removeClass('hover');
					$('.bx-breadcrumb-item.drop').removeClass('hover');

					if (_th.hasClass('more') && !_th.hasClass('hover')) {
						e.preventDefault();
						e.stopPropagation();
						_th.siblings().removeClass('hover');
						_th.addClass('hover');
						$('.menu.topest').css({'overflow': 'visible'});
					}
					else
					{
						var href = ($(e.target).attr('href') ? $(e.target).attr('href') : $(e.target).closest('a').attr('href'))
						if(href && href !== 'undefined')
							location.href = href;
					}
				})
			})
		}
	}else{
		$(selector).off();
	}
}

function touchLeftMenu(selector){
	if(isMobile){
		if($(selector).length)
		{
			$(selector).each(function(){
				var th=$(this);
				th.on('touchend', function(e) {
					var _th = $(e.target).closest('li');

					$('.menu-item').removeClass('hover');
					$('.bx-breadcrumb-item.drop').removeClass('hover');
					$('.menu.topest > li').removeClass('hover');

					if (_th.hasClass('has-child') && !_th.hasClass('hover')) {
						e.preventDefault();
						e.stopPropagation();
						_th.siblings().removeClass('hover');
						_th.addClass('hover');
					}
					else
					{
						var href = ($(e.target).attr('href') ? $(e.target).attr('href') : $(e.target).closest('a').attr('href'))
						if(href && href !== 'undefined')
							location.href = href;
					}
				})
			})
		}
	}else{
		$(selector).off();
	}
}

function touchBreadcrumbs(selector){
	if(isMobile){
		if($(selector).length)
		{
			$(selector).each(function(){
				var th=$(this);
				th.on('touchend', function(e) {
					var _th = $(e.target).closest('.bx-breadcrumb-item');

					$('.menu-item').removeClass('hover');
					$('.menu.topest > li').removeClass('hover');
					$('.menu_top_block.catalog_block li').removeClass('hover');

					if(!_th.hasClass('hover')) {
						e.preventDefault();
						e.stopPropagation();
						_th.siblings().removeClass('hover');
						_th.addClass('hover');
					}
					else
					{
						_th.removeClass('hover');
						var href = ($(e.target).attr('href') ? $(e.target).attr('href') : $(e.target).closest('a').attr('href'));
						if(href && href !== 'undefined')
							location.href = href;
					}
				})
			})
		}
	}else{
		$(selector).off();
	}
}

function touchItemBlock(selector){
	/*if(isMobile){
		if($(selector).length)
		{
			$(selector).each(function(){
				var th=$(this),
					item=th.closest('.catalog_item');
				th.on('touchend', function(e) {
					if (!item.hasClass('hover')) {
						e.preventDefault();
						// e.stopPropagation();
						item.siblings().removeClass('hover');
						item.siblings().blur();
						item.closest('.catalog_block').find('.catalog_item').removeClass('hover');
						item.addClass('hover');
						item.addClass('touch');

						var tabsContentHover = th.closest('.tab').attr('data-hover') * 1,
							tabsContentUnhoverHover = th.closest('.tab').attr('data-unhover') * 1;

						th.closest('.tab').stop().animate({'height': tabsContentUnhoverHover}, 100);
						th.closest('.catalog_item').siblings().find('.buttons_block').stop().fadeOut(233)

						th.closest('.tab').fadeTo(100, 1);
						th.closest('.tab').stop().css({'height': tabsContentHover});
						th.closest('.catalog_item').find('.buttons_block').fadeIn(450, 'easeOutCirc');
					}
				})
			})
		}
	}else{
		$(selector).off();
	}*/
}
function touchBasket(selector){
	if(arNextOptions['THEME']['SHOW_BASKET_ONADDTOCART'] !== 'N'){
		if($(window).outerWidth()>600){
			$(document).find(selector).on('touchend', function(e) {
				if ($(this).parent().find('.basket_popup_wrapp').length && !$(this).hasClass('hover')) {
					e.preventDefault();
					e.stopPropagation();
					$(this).addClass('hover');
					$(this).parent().find('.basket_popup_wrapp').slideDown();
				}
			})
		}else{
			$(selector).off();
		}
	}
}

function showTotalSummItem(popup){
	//show total summ
	if(arNextOptions["THEME"]["SHOW_TOTAL_SUMM_TYPE"] == "ALWAYS" && arNextOptions["THEME"]["SHOW_TOTAL_SUMM"] == "Y")
	{
		var parent = 'body ';
		if(typeof popup  === 'string' && popup == 'Y')
			parent = '.popup ';
		$(parent+'.counter_wrapp .counter_block input.text').each(function(){
			var _th = $(this);
			if(_th.data('product'))
			{
				var obProduct = _th.data('product');
				if(typeof window[obProduct] == 'object')
					window[obProduct].setPriceAction('Y');
				else
					setPriceItem(_th.closest('.main_item_wrapper'), _th.val());
			}
			else
				setPriceItem(_th.closest('.main_item_wrapper'), _th.val());
		})
	}
}

function initFull(){
	initSelects(document);
	initHoverBlock(document);
	touchItemBlock('.catalog_item a');
	InitOrderCustom();
	showTotalSummItem();
	basketActions();
	orderActions();

	checkMobileRegion();
}

checkMobileRegion = function(){
	if($('.confirm_region').length)
	{
		if(!$('.top_mobile_region').length)
			$('<div class="top_mobile_region"><div class="confirm_wrapper"><div class="confirm_region"></div><div class="close_popup"></div></div></div>').insertBefore($('#mobileheader'));
		$('.top_mobile_region .confirm_region').html($('.confirm_region').html());

		$('.top_mobile_region .close_popup').click(function(){
			$(this).remove();
			$('.confirm_region').remove();
		})
	}
}
if(!funcDefined('orderActions')){
	orderActions = function(e){
		if(arNextOptions["PAGES"]["ORDER_PAGE"]){
			//phone
			if($('#bx-soa-order input[autocomplete=tel]').length){
				// get property phone
				for(var i = 0;i<BX.Sale.OrderAjaxComponent.result.ORDER_PROP.properties.length;++i){
					if(BX.Sale.OrderAjaxComponent.result.ORDER_PROP.properties[i].IS_PHONE == 'Y'){
						var arPropertyPhone = BX.Sale.OrderAjaxComponent.result.ORDER_PROP.properties[i];
					}
				}

				// validate input type=tel
				if(typeof(BX.Sale.OrderAjaxComponent) !== 'undefined' && typeof(BX.Sale.OrderAjaxComponent) === 'object' && typeof(arPropertyPhone) == 'object' && arPropertyPhone){
					BX.Sale.OrderAjaxComponent.validatePhone = function(input, arProperty, fieldName)
					{
						if (!input || !arProperty)
							return [];

						var value = input.value,
							errors = [],
							name = BX.util.htmlspecialchars(arProperty.NAME),
							field = BX.message('SOA_FIELD') + ' "' + name + '"',
							re;

						if (arProperty.REQUIRED == 'Y' && value.length == 0){
							errors.push(field + ' ' + BX.message('SOA_REQUIRED'));
						}

						if(arProperty.IS_PHONE == 'Y' && value.length > 0){
							function regexpPhone(value, element, regexp){
								var re = new RegExp( regexp );
								return re.test(value);
							}

							var validPhone = regexpPhone($(input).val(), $(input), arNextOptions['THEME']['VALIDATE_PHONE_MASK']);

							if(!validPhone){
								errors.push(field + ' ' +BX.message('JS_FORMAT_ORDER'));
							}
						}

						return errors;
					}

					BX.Sale.OrderAjaxComponent.getValidationDataPhone = function(arProperty, propContainer){
						var data = {}, inputs;
						switch (arProperty.TYPE)
						{
							case 'STRING':
								data.action = 'blur';
								data.func = BX.delegate(function(input, fieldName){
									return this.validatePhone(input, arProperty, fieldName);
								}, this);

								inputs = propContainer.querySelectorAll('input[type=tel]');
								if ($(inputs).length)
								{
									data.inputs = inputs;
									break;
								}
						}

						return data;
					};

					BX.Sale.OrderAjaxComponent.bindValidationPhone = function(id, propContainer)
					{
						if (!this.validation.properties || !this.validation.properties[id])
							return;

						var arProperty = this.validation.properties[id],
							data = this.getValidationDataPhone(arProperty, propContainer),
							i, k;

						if (data && data.inputs && data.action)
						{
							for (i = 0; i < $(data.inputs).length; i++)
							{
								if (BX.type.isElementNode(data.inputs[i])){
									BX.bind(data.inputs[i], data.action, BX.delegate(function(){
										this.isValidProperty(data);
									}, this));
								}
								else{
									for (k = 0; k < $(data.inputs[i]).length; k++)
										BX.bind(data.inputs[i][k], data.action, BX.delegate(function(){
											this.isValidProperty(data);
										}, this));
								}
							}
						}
					};

					BX.Sale.OrderAjaxComponent.isValidPropertiesBlock = function(excludeLocation)
					{
						if (!this.options.propertyValidation)
							return [];

						var props = this.orderBlockNode.querySelectorAll('.bx-soa-customer-field[data-property-id-row]'),
							propsErrors = [],
							id, propContainer, arProperty, data, i;

						for (i = 0; i < props.length; i++)
						{
							id = props[i].getAttribute('data-property-id-row');

							if (!!excludeLocation && this.locations[id])
								continue;

							propContainer = props[i].querySelector('.soa-property-container');
							if (propContainer)
							{
								arProperty = this.validation.properties[id];
								data = this.getValidationData(arProperty, propContainer);
								dataPhone = this.getValidationDataPhone(arProperty, propContainer);
								data = $.extend({}, data, dataPhone);

								propsErrors = propsErrors.concat(this.isValidProperty(data, true));
							}
						}

						return propsErrors;
					};


					// create input type=tel
					var input = $('input[autocomplete=tel]'),
						inputHTML = input[0].outerHTML,
						value = input.val(),
						newInput = input[0].outerHTML.replace('type="text"', 'type="tel" value="'+value+'"');

					if($(input).length < 2)
					{
						input.hide();
						$(newInput).insertAfter(input);
					}
					showPhoneMask('input[autocomplete=tel][type=tel]');

					// change value input type=text when change input type=tel
					$('input[autocomplete=tel][type=tel]').on('keyup', function(){
						var $this = $(this);

						setTimeout(function(){
							var value = $this.val();
							$this.parent().find('input[autocomplete=tel][type=text]').val(value);
						}, 50);

					});

					BX.Sale.OrderAjaxComponent.bindValidationPhone(arPropertyPhone.ID, $('input[autocomplete=tel]').parent()[0]);
				}
			}

			if($('.bx-soa-cart-total').length){
				if(!$('.change_basket').length)
					$('.bx-soa-cart-total').prepend('<div class="change_basket">'+BX.message("BASKET_CHANGE_TITLE")+'<a href="'+arNextOptions["SITE_DIR"]+'basket/" class="change_link">'+BX.message("BASKET_CHANGE_LINK")+'</a></div>');

				if(typeof (BX.Sale.OrderAjaxComponent) == "object"){
					if(arNextOptions['COUNTERS']['USE_FULLORDER_GOALS'] !== 'N'){
						if(typeof BX.Sale.OrderAjaxComponent.reachgoalbegin === 'undefined'){
							BX.Sale.OrderAjaxComponent.reachgoalbegin = true;
							var eventdata = {goal: 'goal_order_begin'};
							BX.onCustomEvent('onCounterGoals', [eventdata])
						}
					}

					if(BX.Sale.OrderAjaxComponent.hasOwnProperty("params")){
						$('.bx-soa-cart-total .change_link').attr('href', BX.Sale.OrderAjaxComponent.params.PATH_TO_BASKET);
						if(arNextOptions["PRICES"]["MIN_PRICE"]){
							if(arNextOptions["PRICES"]["MIN_PRICE"]>Number(BX.Sale.OrderAjaxComponent.result.TOTAL.ORDER_PRICE)){
								$('<div class="fademask_ext"></div>').appendTo($('body'));
								location.href=BX.Sale.OrderAjaxComponent.params.PATH_TO_BASKET;
							}
						}
					}

					if($('.bx-soa-cart-total-line-total').length && arNextOptions["THEME"]["SHOW_LICENCE"] == "Y"){
						if(typeof(e) === 'undefined')
							BX.Sale.OrderAjaxComponent.state_licence = (arNextOptions['THEME']['LICENCE_CHECKED'] == 'Y' ? 'checked' : '');

						if(!$('.licence_block.filter').length){
							$('<div class="form"><div class="licence_block filter label_block"><label data-for="licenses_order" class="hidden error">'+BX.message('JS_REQUIRED_LICENSES')+'</label><input type="checkbox" name="licenses_order" required '+BX.Sale.OrderAjaxComponent.state_licence+' value="Y"><label data-for="licenses_order" class="license">'+BX.message('LICENSES_TEXT')+'</label></div></div>').insertBefore($('#bx-soa-orderSave'));

							$(document).on('click', '.bx-soa .licence_block label.license', function(){
								var id = $(this).data('for');
								$('.bx-soa .licence_block label.error').addClass('hidden');
								if(!$('input[name='+id+']').prop('checked')){
									$('input[name='+id+']').prop('checked', 'checked');
									BX.Sale.OrderAjaxComponent.state_licence = 'checked';
								}
								else{
									$('input[name='+id+']').prop('checked', '');
									BX.Sale.OrderAjaxComponent.state_licence = '';
								}
							})

							$(document).on('click', '.lic_condition a', function(){
								if(BX.hasClass(BX('bx-soa-order'), 'orderform--v1')){
									if(BX.Sale.OrderAjaxComponent.isValidForm())
									{
										BX.Sale.OrderAjaxComponent.animateScrollTo($('.licence_block')[0], 800, 50);
									}
								}
								else{
									var iCountErrors = BX.Sale.OrderAjaxComponent.isValidPropertiesBlock().length;
									if(!BX.Sale.OrderAjaxComponent.activeSectionId || !iCountErrors)
									{
										BX.Sale.OrderAjaxComponent.animateScrollTo($('.licence_block')[0], 800, 50);
									}
								}
							})
						}

						$('#bx-soa-orderSave, .bx-soa-cart-total-button-container').addClass('lic_condition');

						if(typeof (BX.Sale.OrderAjaxComponent.oldClickOrderSaveAction) === "undefined" && typeof (BX.Sale.OrderAjaxComponent.clickOrderSaveAction) !== 'undefined'){
							BX.Sale.OrderAjaxComponent.oldClickOrderSaveAction = BX.Sale.OrderAjaxComponent.clickOrderSaveAction;
							BX.Sale.OrderAjaxComponent.clickOrderSaveAction = function(event){
								if($('input[name="licenses_order"]').prop('checked')){
									$('.bx-soa .licence_block label.error').addClass('hidden');

									if (BX.Sale.OrderAjaxComponent.isValidForm())
									{
										if(typeof BX.Sale.OrderAjaxComponent.allowOrderSave == 'function')
											BX.Sale.OrderAjaxComponent.allowOrderSave();
										if(typeof BX.Sale.OrderAjaxComponent.doSaveAction == 'function')
											BX.Sale.OrderAjaxComponent.doSaveAction();
										else
											BX.Sale.OrderAjaxComponent.oldClickOrderSaveAction(event);
									}
								}
								else{
									$('.bx-soa .licence_block label.error').removeClass('hidden');
								}
							}
							if(BX.Sale.OrderAjaxComponent.orderSaveBlockNode.querySelector('.checkbox'))
							{
								if(typeof browser == 'object')
								{
									if('msie' in browser && browser.msie)
										$(BX.Sale.OrderAjaxComponent.orderSaveBlockNode.querySelector('.checkbox')).remove();
									else
										BX.Sale.OrderAjaxComponent.orderSaveBlockNode.querySelector('.checkbox').remove();
								}
							}
							BX.unbindAll(BX.Sale.OrderAjaxComponent.totalInfoBlockNode.querySelector('a.btn-order-save'));
							BX.unbindAll(BX.Sale.OrderAjaxComponent.mobileTotalBlockNode.querySelector('a.btn-order-save'));
							BX.unbindAll(BX.Sale.OrderAjaxComponent.orderSaveBlockNode.querySelector('a'));
							BX.bind(BX.Sale.OrderAjaxComponent.totalInfoBlockNode.querySelector('a.btn-order-save'), 'click', BX.proxy(BX.Sale.OrderAjaxComponent.clickOrderSaveAction, BX.Sale.OrderAjaxComponent));
							BX.bind(BX.Sale.OrderAjaxComponent.mobileTotalBlockNode.querySelector('a.btn-order-save'), 'click', BX.proxy(BX.Sale.OrderAjaxComponent.clickOrderSaveAction, BX.Sale.OrderAjaxComponent));
							BX.bind(BX.Sale.OrderAjaxComponent.orderSaveBlockNode.querySelector('a'), 'click', BX.proxy(BX.Sale.OrderAjaxComponent.clickOrderSaveAction, BX.Sale.OrderAjaxComponent));
						}
					}

					// fix hide total block
					$(window).scroll();

					if(checkCounters() && typeof (BX.Sale.OrderAjaxComponent.oldSaveOrder) === "undefined" && typeof (BX.Sale.OrderAjaxComponent.saveOrder) !== 'undefined'){
						BX.Sale.OrderAjaxComponent.oldSaveOrder = BX.Sale.OrderAjaxComponent.saveOrder;
						BX.Sale.OrderAjaxComponent.saveOrder = function(result){
							var res = BX.parseJSON(result);
							if (res && res.order){
								if (!res.order.SHOW_AUTH){
									if (res.order.REDIRECT_URL && res.order.REDIRECT_URL.length && (!res.order.ERROR || BX.util.object_keys(res.order.ERROR).length < 1)){
										if((arMatch = res.order.REDIRECT_URL.match(/ORDER_ID\=[^&=]*/g)) && arMatch.length && (_id = arMatch[0].replace(/ORDER_ID\=/g, '', arMatch[0]))){
											$.ajax({
												url:arNextOptions['SITE_DIR']+"ajax/check_order.php",
												dataType: "json",
												type: "POST",
												data: { "ID": _id },
												success: function(id){
													if(parseInt(id)){
														purchaseCounter(parseInt(id), BX.message('FULL_ORDER'), function(d){
															if(typeof BX.localStorage !== 'undefined'){
																BX.localStorage.set('gtm_e_' + _id, d, 60);
															}
															BX.Sale.OrderAjaxComponent.oldSaveOrder(result);
														});
													}
												},
												error: function(){
													BX.Sale.OrderAjaxComponent.oldSaveOrder(result);
												}
											})
										}
										else{
											BX.Sale.OrderAjaxComponent.oldSaveOrder(result);
										}
									}
									else{
										BX.Sale.OrderAjaxComponent.oldSaveOrder(result);
									}
								}
								else{
									BX.Sale.OrderAjaxComponent.oldSaveOrder(result);
								}
							}
							else{
								BX.Sale.OrderAjaxComponent.oldSaveOrder(result);
							}
						}
					}
				}
				$('.bx-ui-sls-quick-locations.quick-locations').on('click', function(){
					$(this).siblings().removeClass('active');
					$(this).addClass('active');
				})
			}
		}
	}
}

if(!funcDefined('basketActions')){
	basketActions = function(){
		if(arNextOptions["PAGES"]["BASKET_PAGE"]){
			checkMinPrice();

			//remove4Cart
			if(typeof(BX.Sale) !== 'undefined' && typeof(BX.Sale) === 'object')
			{
				if(typeof(BX.Sale.BasketComponent) !== 'undefined' && typeof(BX.Sale.BasketComponent) === 'object')
				{
					$(document).on('click', '.basket-item-actions-remove', function(){
						var basketID = $(this).closest('.basket-items-list-item-container').data('id');
						delFromBasketCounter(BX.Sale.BasketComponent.items[basketID].PRODUCT_ID);
					})
				}
			}

			if(location.hash)
			{
				var hash = location.hash.substring(1);
				if($('#basket_toolbar_button_'+hash).length)
					$('#basket_toolbar_button_'+hash).trigger('click');

				if($('.basket-items-list-header-filter a[data-filter="'+hash+'"]').length)
					$('.basket-items-list-header-filter a[data-filter="'+hash+'"]')[0].click();
			}

			$('.bx_sort_container').append('<div class="top_control basket_sort"><span style="opacity:0;" class="delete_all btn btn-default white white-bg grey remove_all_basket">'+BX.message("BASKET_CLEAR_ALL_BUTTON")+'</span></div>');
			if($('.basket-items-list-header-filter').length)
			{
				$('.basket-items-list-header-filter').append('<div class="top_control basket_sort"><span style="opacity:1;" class="delete_all btn btn-default white white-bg grey remove_all_basket">'+BX.message("BASKET_CLEAR_ALL_BUTTON")+'</span></div>');

				var cur_index = $('.basket-items-list-header-filter > a.active').index();
				//fix delayed
				if(cur_index == 3)
					cur_index = 2;

				if($('.basket-items-list-header-filter > a.active').data('filter') == 'all')
					cur_index = 'all';

				$('.basket-items-list-header-filter .top_control .delete_all').data("type",cur_index);

				$('.basket-items-list-header-filter > a').on('click', function() {
					var index = $(this).index();

					//fix delayed
					if(index == 3)
						index = 2;

					if($(this).data('filter') == 'all')
						index = 'all';

					$('.basket-items-list-header-filter .top_control .delete_all').data("type", index);
				});
			}
			else
			{
				var cur_index = $('.bx_sort_container a.current').index();
				$('.bx_sort_container .top_control .delete_all').data("type",cur_index);
				if($('.bx_ordercart > div:eq('+cur_index+') table tbody tr td.item').length)
					$('.bx_sort_container .top_control .delete_all').css('opacity',1);

				$('.bx_ordercart .bx_ordercart_coupon #coupon').wrap('<div class="input"></div>');

				$('.bx_sort_container > a').on('click', function() {
					var index = $(this).index();
					$('.bx_sort_container .top_control .delete_all').data("type", index);

					if($('.bx_ordercart > div:eq('+index+') table tbody tr td.item').length)
						$('.bx_sort_container .top_control .delete_all').css('opacity',1);
					else
						$('.bx_sort_container .top_control .delete_all').css('opacity',0);
				});
			}


			$('.basket_print').on('click', function() {
				 // window.open(location.pathname+"?print=Y",'_blank');
				 window.print();
			});

			$('.delete_all').on('click', function() {
				if(arNextOptions['COUNTERS']['USE_BASKET_GOALS'] !== 'N'){
					var eventdata = {goal: 'goal_basket_clear', params: {type: $(this).data('type')}};
					BX.onCustomEvent('onCounterGoals', [eventdata]);
				}
				$.post( arNextOptions['SITE_DIR']+"ajax/action_basket.php", "TYPE="+$(this).data('type')+"&CLEAR_ALL=Y", $.proxy(function( data ) {
					location.reload();
				}));
			});

			$('.bx_item_list_section .bx_catalog_item').sliceHeight({row:'.bx_item_list_slide', item:'.bx_catalog_item'});

			BX.addCustomEvent('onAjaxSuccess', function() {
				checkMinPrice();

				var errorText = $.trim($('#warning_message').text());
				$('#basket_items_list .error_text').detach();
				if (errorText != '') {
					$('#warning_message').hide().text('');
					$('#basket_items_list').prepend('<div class="error_text">' +errorText+ '</div>');
				}
			});
			$(document).on('click', '.bx_ordercart_order_pay_center .checkout, .basket-checkout-section-inner .basket-btn-checkout', function(){
				if(checkCounters('google')){
					checkoutCounter(1, 'start order');
				}
			})
		}
	}
}

if(!funcDefined('checkMinPrice')){
	checkMinPrice = function(){
		if(arNextOptions["PAGES"]["BASKET_PAGE"]){
			var summ_raw=0,
				summ=0;
			if($('#allSum_FORMATED').length)
			{
				summ_raw=$('#allSum_FORMATED').text().replace(/[^0-9\.,]/g,'');
				summ=parseFloat(summ_raw);
				if($('#basket_items').length)
				{
					var summ = 0;
					$('#basket_items tr').each(function(){
						if(typeof ($(this).data('item-price')) !== 'undefined' && $(this).data('item-price'))
							summ += $(this).data('item-price')*$(this).find('#QUANTITY_INPUT_'+$(this).attr('id')).val();
					})
				}
				if(!$('.catalog_back').length)
					$('.bx_ordercart_order_pay_center').prepend('<a href="'+arNextOptions["PAGES"]["CATALOG_PAGE_URL"]+'" class="catalog_back btn btn-default btn-lg white grey">'+BX.message("BASKET_CONTINUE_BUTTON")+'</a>');
			}

			if(arNextOptions["THEME"]["SHOW_ONECLICKBUY_ON_BASKET_PAGE"] == "Y")
				$('.basket-coupon-section').addClass('smallest');

			if(typeof BX.Sale !== "undefined")
			{
				if(typeof BX.Sale.BasketComponent !== "undefined" && typeof BX.Sale.BasketComponent.result !== "undefined")
					summ = BX.Sale.BasketComponent.result.allSum;
			}

			if(arNextOptions["PRICES"]["MIN_PRICE"]){
				if(arNextOptions["PRICES"]["MIN_PRICE"]>summ){

					if($('.oneclickbuy.fast_order').length)
						$('.oneclickbuy.fast_order').remove();

					if($('.basket-checkout-container').length)
					{
						if(!$('.icon_error_wrapper').length){
							$('.basket-checkout-block.basket-checkout-block-btn').html('<div class="icon_error_wrapper"><div class="icon_error_block">'+BX.message("MIN_ORDER_PRICE_TEXT").replace("#PRICE#", jsPriceFormat(arNextOptions["PRICES"]["MIN_PRICE"]))+'</div></div>');
						}
					}
					else
					{
						if(!$('.icon_error_wrapper').length  && typeof jsPriceFormat !== 'undefined'){
							$('.bx_ordercart_order_pay_center').prepend('<div class="icon_error_wrapper"><div class="icon_error_block">'+BX.message("MIN_ORDER_PRICE_TEXT").replace("#PRICE#", jsPriceFormat(arNextOptions["PRICES"]["MIN_PRICE"]))+'</div></div>');
						}
						if($('.bx_ordercart_order_pay .checkout').length)
							$('.bx_ordercart_order_pay .checkout').remove();
					}
				}else{
					if($('.icon_error_wrapper').length)
						$('.icon_error_wrapper').remove();

					if($('.basket-checkout-container').length)
					{
						if(!$('.oneclickbuy.fast_order').length && arNextOptions["THEME"]["SHOW_ONECLICKBUY_ON_BASKET_PAGE"] == "Y" && !$('.basket-btn-checkout.disabled').length)
							$('.basket-checkout-section-inner').append('<div class="fastorder"><span class="oneclickbuy btn btn-default btn-lg fast_order" onclick="oneClickBuyBasket()">'+BX.message("BASKET_QUICK_ORDER_BUTTON")+'</span></div>');
					}
					else
					{
						if($('.bx_ordercart_order_pay .checkout').length)
							$('.bx_ordercart .bx_ordercart_order_pay .checkout').css('opacity','1');
						else
							$('.bx_ordercart_order_pay_center').append('<a href="javascript:void(0)" onclick="checkOut();" class="checkout" style="opacity: 1;">'+BX.message("BASKET_ORDER_BUTTON")+'</a>');
						if(!$('.oneclickbuy.fast_order').length && arNextOptions["THEME"]["SHOW_ONECLICKBUY_ON_BASKET_PAGE"] == "Y")
							$('.bx_ordercart_order_pay_center').append('<span class="oneclickbuy btn btn-default btn-lg fast_order" onclick="oneClickBuyBasket()">'+BX.message("BASKET_QUICK_ORDER_BUTTON")+'</span>');
					}
				}
			}else{
				if($('.basket-checkout-container').length)
				{
					if(!$('.oneclickbuy.fast_order').length && arNextOptions["THEME"]["SHOW_ONECLICKBUY_ON_BASKET_PAGE"] == "Y" && !$('.basket-btn-checkout.disabled').length)
						$('.basket-checkout-section-inner').append('<div class="fastorder"><span class="oneclickbuy btn btn-default btn-lg fast_order" onclick="oneClickBuyBasket()">'+BX.message("BASKET_QUICK_ORDER_BUTTON")+'</span></div>');
				}
				else
				{
					$('.bx_ordercart .bx_ordercart_order_pay .checkout').css('opacity','1');
					if(!$('.oneclickbuy.fast_order').length && arNextOptions["THEME"]["SHOW_ONECLICKBUY_ON_BASKET_PAGE"] == "Y")
						$('.bx_ordercart_order_pay_center').append('<span class="oneclickbuy btn btn-default btn-lg fast_order" onclick="oneClickBuyBasket()">'+BX.message("BASKET_QUICK_ORDER_BUTTON")+'</span>');
				}
			}

			$('#basket-root .basket-checkout-container .basket-checkout-section .basket-checkout-block .basket-btn-checkout').addClass('white');
			$('#basket-root .basket-checkout-container').addClass('visible');
		}
	}
}

var isFrameDataReceived = false;
if (typeof window.frameCacheVars !== "undefined"){
	BX.addCustomEvent("onFrameDataReceived", function (json){
		initFull();

		CheckTopMenuPadding();
		CheckTopMenuOncePadding();
		CheckTopMenuDotted();

		CheckSearchWidth();

		if($('.logo-row.v2').length)
		{
			$(window).resize(); // need to check resize flexslider & menu
			setTimeout(function(){
				CheckTopMenuDotted();
			}, 100);
		}

		isFrameDataReceived = true;
	});
}else{
	$( document ).ready(initFull);
}

if(!funcDefined('setHeightBlockSlider')){
	setHeightBlockSlider = function(){
		$(document).find('.specials.tab_slider_wrapp .tabs_content > li.cur').equalize({children: '.item-title'});
		$(document).find('.specials.tab_slider_wrapp .tabs_content > li.cur').equalize({children: '.item_info'});
		$(document).find('.specials.tab_slider_wrapp .tabs_content > li.cur').equalize({children: '.catalog_item'});

		var sliderWidth = $(document).find('.specials.tab_slider_wrapp').outerWidth();

		var iCountTabs = $(document).find('.specials.tab_slider_wrapp .tabs_content > li.cur').length;

		if(iCountTabs <= 1)
		{
			$(document).find('.specials.tab_slider_wrapp .tabs_content > li.cur').css('height', '');

			var itemsButtonsHeight = 0;
			if($(document).find('.specials.tab_slider_wrapp .tabs_content .tab.cur .tabs_slider li .footer_button').length)
			{
				$(document).find('.specials.tab_slider_wrapp .tabs_content .tab.cur .tabs_slider li .footer_button').css('height', 'auto');
				itemsButtonsHeight = $(document).find('.specials.tab_slider_wrapp .tabs_content .tab.cur .tabs_slider li .footer_button').height();
				$(document).find('.specials.tab_slider_wrapp .tabs_content .tab.cur .tabs_slider li .footer_button').css('height', '');
			}
			var tabsContentUnhover = $(document).find('.specials.tab_slider_wrapp .tabs_content .tab.cur').height() * 1;
			var tabsContentHover = tabsContentUnhover + itemsButtonsHeight+50;
			$(document).find('.specials.tab_slider_wrapp .tabs_content .tab.cur').attr('data-unhover', tabsContentUnhover);
			$(document).find('.specials.tab_slider_wrapp .tabs_content .tab.cur').attr('data-hover', tabsContentHover);
			$(document).find('.specials.tab_slider_wrapp .tabs_content').height(tabsContentUnhover);
			$(document).find('.specials.tab_slider_wrapp .tabs_content .tab.cur .flex-viewport').height(tabsContentUnhover);
		}
		else
		{
			$(document).find('.specials.tab_slider_wrapp .tabs_content > li.cur').each(function(){
				var _th = $(this);
				_th.css('height', '');

				var itemsButtonsHeight = 0;
				if(_th.find('.tabs_slider li .footer_button').length)
				{
					_th.find('.tabs_slider li .footer_button').css('height', 'auto');
					itemsButtonsHeight = _th.find('.tabs_slider li .footer_button').height();
					_th.find('.tabs_slider li .footer_button').css('height', '');
				}

				var tabsContentUnhover = _th.height() * 1;
				var tabsContentHover = tabsContentUnhover + itemsButtonsHeight+50;
				_th.attr('data-unhover', tabsContentUnhover);
				_th.attr('data-hover', tabsContentHover);
				_th.parent().height(tabsContentUnhover);
				_th.find('.flex-viewport').height(tabsContentUnhover);

			})
		}
	}
}

if(!funcDefined('checkTopFilter')){
	checkTopFilter = function() {
		if(window.matchMedia('(max-width: 991px)').matches){
			//if($('.group_description_block.top').length){
				var top_pos=$('.adaptive_filter').position().top;
				$('.bx_filter.bx_filter_vertical').css({'top':top_pos+43});
			//}
		}
	}
}

if(!funcDefined('checkStickyFooter')){
	checkStickyFooter = function() {
		try{
			ignoreResize.push(true);
			$('#content').css('min-height', '');
			var contentTop = $('#content').offset().top;
			var contentBottom = contentTop + $('#content').outerHeight();
			var footerTop = 0;
			if($('footer').length)
				footerOffset = $('footer').offset().top;

			$('#content').css('min-height', $(window).height() - contentTop - (footerTop - contentBottom) - $('footer').outerHeight() + 'px');
			ignoreResize.pop();
		}
		catch(e){console.error(e);}
	}
}

/* EVENTS */
var timerResize = false, ignoreResize = [];
$(window).resize(function(){
	CheckPopupTop();
	/*if(!$('html.print').length)
		checkStickyFooter();*/

	// here immediate functions
	if(!ignoreResize.length){
		if(timerResize){
			clearTimeout(timerResize);
			timerResize = false;
		}
		timerResize = setTimeout(function(){
			// here delayed functions in event
			BX.onCustomEvent('onWindowResize', false);
		}, 50);
	}
});

var timerScroll = false, ignoreScroll = [], documentScrollTopLast = $(document).scrollTop(), startScroll = 0;
$(window).scroll(function(){
	CheckPopupTop();
	// here immediate functions
	documentScrollTopLast = $(document).scrollTop();
	SetFixedAskBlock();
	/*if($('.wrapper1.mfixed_Y.mfixed_view_scroll_top #mobileheader').length && window.matchMedia('(max-width: 991px)').matches)
	{
		if(documentScrollTopLast > startScroll)
			$('.wrapper1.mfixed_Y.mfixed_view_scroll_top #mobileheader').removeClass('fixed');
		else
			$('.wrapper1.mfixed_Y.mfixed_view_scroll_top #mobileheader').addClass('fixed');
		startScroll = documentScrollTopLast;
	}*/

	if(!ignoreScroll.length){
		if(timerScroll){
			clearTimeout(timerScroll);
			timerScroll = false;
		}
		timerScroll = setTimeout(function(){
			// here delayed functions in event
			BX.onCustomEvent('onWindowScroll', false);
		}, 50);
	}
});

BX.addCustomEvent('onWindowResize', function(eventdata){
	try{
		ignoreResize.push(true);

		CheckTopMenuPadding();
		CheckTopMenuOncePadding();
		CheckSearchWidth();

		CheckTabActive();
		CheckTopMenuFullCatalogSubmenu();
		CheckHeaderFixedMenu();

		CheckTopMenuDotted();
		if($('nav.mega-menu.sliced').length)
			$('nav.mega-menu.sliced').removeClass('initied');


		CheckTopVisibleMenu();

		checkScrollToTop();
		CheckObjectsSizes();

		CheckFlexSlider();
		initSly();

		checkVerticalMobileFilter();

		checkTopFilter();

		if(window.matchMedia('(min-width: 767px)').matches)
			$('.wrapper_middle_menu.wrap_menu').removeClass('mobile');

		if(window.matchMedia('(max-width: 767px)').matches)
			$('.wrapper_middle_menu.wrap_menu').addClass('mobile');


		if($("#basket_form").length && $(window).outerWidth()<=600){
			$("#basket_form .tabs_content.basket > li.cur td").each(function() { $(this).css("width","");});
		}

		$(".bx_filter_section .bx_filter_select_container").each(function(){
			var prop_id=$(this).closest('.bx_filter_parameters_box').attr('property_id');
			if($('#smartFilterDropDown'+prop_id).length){
				$('#smartFilterDropDown'+prop_id).css("max-width", $(this).width());
			}
		})
	}
	catch(e){}
	finally{
		ignoreResize.pop();
	}
});

BX.addCustomEvent('onWindowScroll', function(eventdata){
	try{
		ignoreScroll.push(true);
	}
	catch(e){}
	finally{
		ignoreScroll.pop();
	}
});

BX.addCustomEvent('onSlideInit', function(eventdata) {
	try{
		ignoreResize.push(true);
		if(eventdata){
			var slider = eventdata.slider;
			if(slider){
				if(slider.hasClass('small-gallery'))
					$(window).resize();
				// add classes .curent & .shown to slide
				slider.find('.item').removeClass('current');
				var curSlide = slider.find('.item.flex-active-slide'),
					curSlideId = curSlide.attr('id'),
					nav = slider.find('.flex-direction-nav');

				curSlide.addClass('current');

				slider.find('.visible').css('opacity', '1');

				if(curSlide.hasClass('shown')){
					slider.find('.item.clone[id=' + curSlideId + '_clone]').addClass('shown');
				}

				curSlide.addClass('shown');
			}
		}
	}
	catch(e){}
	finally{
		ignoreResize.pop();
	}
});

BX.addCustomEvent('onCounterGoals', function(eventdata){
	if(arNextOptions['THEME']['YA_GOALS'] == 'Y' && arNextOptions['THEME']['YA_COUNTER_ID'])
	{
		var idCounter = arNextOptions['THEME']['YA_COUNTER_ID'];
		idCounter = parseInt(idCounter);

		if(typeof eventdata != 'object')
			eventdata = {goal: 'undefined'};

		if(typeof eventdata.goal != 'string')
			eventdata.goal = 'undefined';

		if(idCounter)
		{
			try
			{
				waitCounter(idCounter, 50, function(){
					var obCounter = window['yaCounter' + idCounter];
					if(typeof obCounter == 'object'){
						obCounter.reachGoal(eventdata.goal);
					}
				});
			}
			catch(e)
			{
				console.error(e)
			}
		}
		else
		{
			console.info('Bad counter id!', idCounter);
		}
	}
})

var onCaptchaVerifyinvisible = function(response){
	$('.g-recaptcha:last').each(function(){
		var id = $(this).attr('data-widgetid');
		if(typeof(id) !== 'undefined' && response){
			if(!$(this).closest('form').find('.g-recaptcha-response').val())
				$(this).closest('form').find('.g-recaptcha-response').val(response)
			if($('iframe[src*=recaptcha]').length)
			{
				$('iframe[src*=recaptcha]').each(function(){
					var block = $(this).parent().parent();
					if(!block.hasClass('grecaptcha-badge'))
						block.css('width', '100%');
				})
			}
			$(this).closest('form').submit();
		}
	})
}

var onCaptchaVerifynormal = function(response){
	$('.g-recaptcha').each(function(){
		var id = $(this).attr('data-widgetid');
		if(typeof(id) !== 'undefined'){
			if(grecaptcha.getResponse(id) != ''){
				$(this).closest('form').find('.recaptcha').valid();
			}
		}
	});
}

BX.addCustomEvent('onSubmitForm', function(eventdata){
	try{
		if(!window.renderRecaptchaById || !window.asproRecaptcha || !window.asproRecaptcha.key)
		{
			eventdata.form.submit();
			$(eventdata.form).closest('.form').addClass('sending');
			return true;
		}
		if(window.asproRecaptcha.params.recaptchaSize == 'invisible' && typeof grecaptcha != 'undefined')
		{
			if($(eventdata.form).find('.g-recaptcha-response').val())
			{
				eventdata.form.submit();
				$(eventdata.form).closest('.form').addClass('sending');
			}
			else
			{
				grecaptcha.execute($(eventdata.form).find('.g-recaptcha').data('widgetid'));
				return false;
			}
		}
		else
		{
			eventdata.form.submit();
			$(eventdata.form).closest('.form').addClass('sending');
		}

		return true;
	}catch (e){
		console.error(e);
		return true;
	}
})

/*custom event for sku prices*/

/*BX.addCustomEvent('onAsproSkuSetPrice', function(eventdata){
	console.log(eventdata);
})*/

/*BX.addCustomEvent('onAsproSkuSetPriceMatrix', function(eventdata){
	console.log(eventdata);
})*/
/* End */
;
; /* Start:"a:4:{s:4:"full";s:90:"/bitrix/templates/aspro_next/components/bitrix/subscribe.form/main/script.js?1543844491179";s:6:"source";s:76:"/bitrix/templates/aspro_next/components/bitrix/subscribe.form/main/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function(){
	if(typeof obDataSubscribe !== "undefined")
	{
		$(".s_"+obDataSubscribe+" form.sform").validate({
			rules:{ "sf_EMAIL": {email: true} }
		});
	}
})
/* End */
;
; /* Start:"a:4:{s:4:"full";s:63:"/bitrix/components/bitrix/search.title/script.js?15599833979847";s:6:"source";s:48:"/bitrix/components/bitrix/search.title/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function JCTitleSearch(arParams)
{
	var _this = this;

	this.arParams = {
		'AJAX_PAGE': arParams.AJAX_PAGE,
		'CONTAINER_ID': arParams.CONTAINER_ID,
		'INPUT_ID': arParams.INPUT_ID,
		'MIN_QUERY_LEN': parseInt(arParams.MIN_QUERY_LEN)
	};
	if(arParams.WAIT_IMAGE)
		this.arParams.WAIT_IMAGE = arParams.WAIT_IMAGE;
	if(arParams.MIN_QUERY_LEN <= 0)
		arParams.MIN_QUERY_LEN = 1;

	this.cache = [];
	this.cache_key = null;

	this.startText = '';
	this.running = false;
	this.runningCall = false;
	this.currentRow = -1;
	this.RESULT = null;
	this.CONTAINER = null;
	this.INPUT = null;
	this.WAIT = null;

	this.ShowResult = function(result)
	{
		if(BX.type.isString(result))
		{
			_this.RESULT.innerHTML = result;
		}

		_this.RESULT.style.display = _this.RESULT.innerHTML !== '' ? 'block' : 'none';
		var pos = _this.adjustResultNode();

		//adjust left column to be an outline
		var res_pos;
		var th;
		var tbl = BX.findChild(_this.RESULT, {'tag':'table','class':'title-search-result'}, true);
		if(tbl)
		{
			th = BX.findChild(tbl, {'tag':'th'}, true);
		}

		if(th)
		{
			var tbl_pos = BX.pos(tbl);
			tbl_pos.width = tbl_pos.right - tbl_pos.left;

			var th_pos = BX.pos(th);
			th_pos.width = th_pos.right - th_pos.left;
			th.style.width = th_pos.width + 'px';

			_this.RESULT.style.width = (pos.width + th_pos.width) + 'px';

			//Move table to left by width of the first column
			_this.RESULT.style.left = (pos.left - th_pos.width - 1)+ 'px';

			//Shrink table when it's too wide
			if((tbl_pos.width - th_pos.width) > pos.width)
				_this.RESULT.style.width = (pos.width + th_pos.width -1) + 'px';

			//Check if table is too wide and shrink result div to it's width
			tbl_pos = BX.pos(tbl);
			res_pos = BX.pos(_this.RESULT);
			if(res_pos.right > tbl_pos.right)
			{
				_this.RESULT.style.width = (tbl_pos.right - tbl_pos.left) + 'px';
			}
		}

		var fade;
		if(tbl) fade = BX.findChild(_this.RESULT, {'class':'title-search-fader'}, true);
		if(fade && th)
		{
			res_pos = BX.pos(_this.RESULT);
			fade.style.left = (res_pos.right - res_pos.left - 18) + 'px';
			fade.style.width = 18 + 'px';
			fade.style.top = 0 + 'px';
			fade.style.height = (res_pos.bottom - res_pos.top) + 'px';
			fade.style.display = 'block';
		}
	};

	this.onKeyPress = function(keyCode)
	{
		var tbl = BX.findChild(_this.RESULT, {'tag':'table','class':'title-search-result'}, true);
		if(!tbl)
			return false;

		var i;
		var cnt = tbl.rows.length;

		switch (keyCode)
		{
		case 27: // escape key - close search div
			_this.RESULT.style.display = 'none';
			_this.currentRow = -1;
			_this.UnSelectAll();
		return true;

		case 40: // down key - navigate down on search results
			if(_this.RESULT.style.display == 'none')
				_this.RESULT.style.display = 'block';

			var first = -1;
			for(i = 0; i < cnt; i++)
			{
				if(!BX.findChild(tbl.rows[i], {'class':'title-search-separator'}, true))
				{
					if(first == -1)
						first = i;

					if(_this.currentRow < i)
					{
						_this.currentRow = i;
						break;
					}
					else if(tbl.rows[i].className == 'title-search-selected')
					{
						tbl.rows[i].className = '';
					}
				}
			}

			if(i == cnt && _this.currentRow != i)
				_this.currentRow = first;

			tbl.rows[_this.currentRow].className = 'title-search-selected';
		return true;

		case 38: // up key - navigate up on search results
			if(_this.RESULT.style.display == 'none')
				_this.RESULT.style.display = 'block';

			var last = -1;
			for(i = cnt-1; i >= 0; i--)
			{
				if(!BX.findChild(tbl.rows[i], {'class':'title-search-separator'}, true))
				{
					if(last == -1)
						last = i;

					if(_this.currentRow > i)
					{
						_this.currentRow = i;
						break;
					}
					else if(tbl.rows[i].className == 'title-search-selected')
					{
						tbl.rows[i].className = '';
					}
				}
			}

			if(i < 0 && _this.currentRow != i)
				_this.currentRow = last;

			tbl.rows[_this.currentRow].className = 'title-search-selected';
		return true;

		case 13: // enter key - choose current search result
			if(_this.RESULT.style.display == 'block')
			{
				for(i = 0; i < cnt; i++)
				{
					if(_this.currentRow == i)
					{
						if(!BX.findChild(tbl.rows[i], {'class':'title-search-separator'}, true))
						{
							var a = BX.findChild(tbl.rows[i], {'tag':'a'}, true);
							if(a)
							{
								window.location = a.href;
								return true;
							}
						}
					}
				}
			}
		return false;
		}

		return false;
	};

	this.onTimeout = function()
	{
		_this.onChange(function(){
			setTimeout(_this.onTimeout, 500);
		});
	};

	this.onChange = function(callback)
	{
		if (_this.running)
		{
			_this.runningCall = true;
			return;
		}
		_this.running = true;

		if(_this.INPUT.value != _this.oldValue && _this.INPUT.value != _this.startText)
		{
			_this.oldValue = _this.INPUT.value;
			if(_this.INPUT.value.length >= _this.arParams.MIN_QUERY_LEN)
			{
				_this.cache_key = _this.arParams.INPUT_ID + '|' + _this.INPUT.value;
				if(_this.cache[_this.cache_key] == null)
				{
					if(_this.WAIT)
					{
						var pos = BX.pos(_this.INPUT);
						var height = (pos.bottom - pos.top)-2;
						_this.WAIT.style.top = (pos.top+1) + 'px';
						_this.WAIT.style.height = height + 'px';
						_this.WAIT.style.width = height + 'px';
						_this.WAIT.style.left = (pos.right - height + 2) + 'px';
						_this.WAIT.style.display = 'block';
					}

					BX.ajax.post(
						_this.arParams.AJAX_PAGE,
						{
							'ajax_call':'y',
							'INPUT_ID':_this.arParams.INPUT_ID,
							'q':_this.INPUT.value,
							'l':_this.arParams.MIN_QUERY_LEN
						},
						function(result)
						{
							_this.cache[_this.cache_key] = result;
							_this.ShowResult(result);
							_this.currentRow = -1;
							_this.EnableMouseEvents();
							if(_this.WAIT)
								_this.WAIT.style.display = 'none';
							if (!!callback)
								callback();
							_this.running = false;
							if (_this.runningCall)
							{
								_this.runningCall = false;
								_this.onChange();
							}
						}
					);
					return;
				}
				else
				{
					_this.ShowResult(_this.cache[_this.cache_key]);
					_this.currentRow = -1;
					_this.EnableMouseEvents();
				}
			}
			else
			{
				_this.RESULT.style.display = 'none';
				_this.currentRow = -1;
				_this.UnSelectAll();
			}
		}
		if (!!callback)
			callback();
		_this.running = false;
	};

	this.onScroll = function ()
	{
		if(BX.type.isElementNode(_this.RESULT)
			&& _this.RESULT.style.display !== "none"
			&& _this.RESULT.innerHTML !== ''
		)
		{
			_this.adjustResultNode();
		}
	};

	this.UnSelectAll = function()
	{
		var tbl = BX.findChild(_this.RESULT, {'tag':'table','class':'title-search-result'}, true);
		if(tbl)
		{
			var cnt = tbl.rows.length;
			for(var i = 0; i < cnt; i++)
				tbl.rows[i].className = '';
		}
	};

	this.EnableMouseEvents = function()
	{
		var tbl = BX.findChild(_this.RESULT, {'tag':'table','class':'title-search-result'}, true);
		if(tbl)
		{
			var cnt = tbl.rows.length;
			for(var i = 0; i < cnt; i++)
				if(!BX.findChild(tbl.rows[i], {'class':'title-search-separator'}, true))
				{
					tbl.rows[i].id = 'row_' + i;
					tbl.rows[i].onmouseover = function (e) {
						if(_this.currentRow != this.id.substr(4))
						{
							_this.UnSelectAll();
							this.className = 'title-search-selected';
							_this.currentRow = this.id.substr(4);
						}
					};
					tbl.rows[i].onmouseout = function (e) {
						this.className = '';
						_this.currentRow = -1;
					};
				}
		}
	};

	this.onFocusLost = function(hide)
	{
		setTimeout(function(){_this.RESULT.style.display = 'none';}, 250);
	};

	this.onFocusGain = function()
	{
		if(_this.RESULT.innerHTML.length)
			_this.ShowResult();
	};

	this.onKeyDown = function(e)
	{
		if(!e)
			e = window.event;

		if (_this.RESULT.style.display == 'block')
		{
			if(_this.onKeyPress(e.keyCode))
				return BX.PreventDefault(e);
		}
	};

	this.adjustResultNode = function()
	{
		if(!(BX.type.isElementNode(_this.RESULT)
			&& BX.type.isElementNode(_this.CONTAINER))
		)
		{
			return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
		}

		var pos = BX.pos(_this.CONTAINER);

		_this.RESULT.style.position = 'absolute';
		_this.RESULT.style.top = (pos.bottom + 2) + 'px';
		_this.RESULT.style.left = pos.left + 'px';
		_this.RESULT.style.width = pos.width + 'px';

		return pos;
	};

	this._onContainerLayoutChange = function()
	{
		if(BX.type.isElementNode(_this.RESULT)
			&& _this.RESULT.style.display !== "none"
			&& _this.RESULT.innerHTML !== ''
		)
		{
			_this.adjustResultNode();
		}
	};
	this.Init = function()
	{
		this.CONTAINER = document.getElementById(this.arParams.CONTAINER_ID);
		BX.addCustomEvent(this.CONTAINER, "OnNodeLayoutChange", this._onContainerLayoutChange);

		this.RESULT = document.body.appendChild(document.createElement("DIV"));
		this.RESULT.className = 'title-search-result';
		this.INPUT = document.getElementById(this.arParams.INPUT_ID);
		this.startText = this.oldValue = this.INPUT.value;
		BX.bind(this.INPUT, 'focus', function() {_this.onFocusGain()});
		BX.bind(this.INPUT, 'blur', function() {_this.onFocusLost()});
		this.INPUT.onkeydown = this.onKeyDown;

		if(this.arParams.WAIT_IMAGE)
		{
			this.WAIT = document.body.appendChild(document.createElement("DIV"));
			this.WAIT.style.backgroundImage = "url('" + this.arParams.WAIT_IMAGE + "')";
			if(!BX.browser.IsIE())
				this.WAIT.style.backgroundRepeat = 'none';
			this.WAIT.style.display = 'none';
			this.WAIT.style.position = 'absolute';
			this.WAIT.style.zIndex = '1100';
		}

		BX.bind(this.INPUT, 'bxchange', function() {_this.onChange()});

		var fixedParent = BX.findParent(this.CONTAINER, BX.is_fixed);
		if(BX.type.isElementNode(fixedParent))
		{
			BX.bind(window, 'scroll', BX.throttle(this.onScroll, 100, this));
		}
	};
	BX.ready(function (){_this.Init(arParams)});
}

/* End */
;
; /* Start:"a:4:{s:4:"full";s:90:"/bitrix/templates/aspro_next/components/bitrix/search.title/fixed/script.js?15438444909910";s:6:"source";s:75:"/bitrix/templates/aspro_next/components/bitrix/search.title/fixed/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function JCTitleSearch2(arParams)
{
	var _this = this;

	this.arParams = {
		'AJAX_PAGE': arParams.AJAX_PAGE,
		'CONTAINER_ID': arParams.CONTAINER_ID,
		'INPUT_ID': arParams.INPUT_ID,
		'INPUT_ID_TMP': arParams.INPUT_ID_TMP,
		'MIN_QUERY_LEN': parseInt(arParams.MIN_QUERY_LEN)
	};
	if(arParams.WAIT_IMAGE)
		this.arParams.WAIT_IMAGE = arParams.WAIT_IMAGE;
	if(arParams.MIN_QUERY_LEN <= 0)
		arParams.MIN_QUERY_LEN = 1;

	this.cache = [];
	this.cache_key = null;

	this.startText = '';
	this.running = false;
	this.currentRow = -1;
	this.RESULT = null;
	this.CONTAINER = null;
	this.INPUT = null;
	this.WAIT = null;

	this.ShowResult = function(result)
	{
		if(BX.type.isString(result))
		{
			_this.RESULT.innerHTML = result;
		}

		_this.RESULT.style.display = _this.RESULT.innerHTML !== '' ? 'block' : 'none';
		var pos = _this.adjustResultNode();

		//adjust left column to be an outline
		var res_pos;
		var th;
		var tbl = BX.findChild(_this.RESULT, {'tag':'table','class':'title-search-result'}, true);
		if(tbl)
		{
			th = BX.findChild(tbl, {'tag':'th'}, true);
		}
		if(th)
		{
			var tbl_pos = BX.pos(tbl);
			tbl_pos.width = tbl_pos.right - tbl_pos.left;

			var th_pos = BX.pos(th);
			th_pos.width = th_pos.right - th_pos.left;
			th.style.width = th_pos.width + 'px';

			_this.RESULT.style.width = (pos.width + th_pos.width) + 'px';

			//Move table to left by width of the first column
			_this.RESULT.style.left = (pos.left - th_pos.width - 1)+ 'px';

			//Shrink table when it's too wide
			if((tbl_pos.width - th_pos.width) > pos.width)
				_this.RESULT.style.width = (pos.width + th_pos.width -1) + 'px';

			//Check if table is too wide and shrink result div to it's width
			tbl_pos = BX.pos(tbl);
			res_pos = BX.pos(_this.RESULT);
			if(res_pos.right > tbl_pos.right)
			{
				_this.RESULT.style.width = (tbl_pos.right - tbl_pos.left) + 'px';
			}
		}

		var fade;
		if(tbl) fade = BX.findChild(_this.RESULT, {'class':'title-search-fader'}, true);
		if(fade && th)
		{
			res_pos = BX.pos(_this.RESULT);
			fade.style.left = (res_pos.right - res_pos.left - 18) + 'px';
			fade.style.width = 18 + 'px';
			fade.style.top = 0 + 'px';
			fade.style.height = (res_pos.bottom - res_pos.top) + 'px';
			fade.style.display = 'block';
		}
	};

	this.onKeyPress = function(keyCode)
	{
		var tbl = BX.findChild(_this.RESULT, {'tag':'table','class':'title-search-result'}, true);
		if(!tbl)
			return false;

		var i;
		var cnt = tbl.rows.length;

		switch (keyCode)
		{
		case 27: // escape key - close search div
			_this.RESULT.style.display = 'none';
			_this.currentRow = -1;
			_this.UnSelectAll();
		return true;

		case 40: // down key - navigate down on search results
			if(_this.RESULT.style.display == 'none')
				_this.RESULT.style.display = 'block';

			var first = -1;
			for(i = 0; i < cnt; i++)
			{
				if(!BX.findChild(tbl.rows[i], {'class':'title-search-separator'}, true))
				{
					if(first == -1)
						first = i;

					if(_this.currentRow < i)
					{
						_this.currentRow = i;
						break;
					}
					else if(tbl.rows[i].className == 'title-search-selected')
					{
						tbl.rows[i].className = '';
					}
				}
			}

			if(i == cnt && _this.currentRow != i)
				_this.currentRow = first;

			tbl.rows[_this.currentRow].className = 'title-search-selected';
		return true;

		case 38: // up key - navigate up on search results
			if(_this.RESULT.style.display == 'none')
				_this.RESULT.style.display = 'block';

			var last = -1;
			for(i = cnt-1; i >= 0; i--)
			{
				if(!BX.findChild(tbl.rows[i], {'class':'title-search-separator'}, true))
				{
					if(last == -1)
						last = i;

					if(_this.currentRow > i)
					{
						_this.currentRow = i;
						break;
					}
					else if(tbl.rows[i].className == 'title-search-selected')
					{
						tbl.rows[i].className = '';
					}
				}
			}

			if(i < 0 && _this.currentRow != i)
				_this.currentRow = last;

			tbl.rows[_this.currentRow].className = 'title-search-selected';
		return true;

		case 13: // enter key - choose current search result
			if(_this.RESULT.style.display == 'block')
			{
				for(i = 0; i < cnt; i++)
				{
					if(_this.currentRow == i)
					{
						if(!BX.findChild(tbl.rows[i], {'class':'title-search-separator'}, true))
						{
							var a = BX.findChild(tbl.rows[i], {'tag':'a'}, true);
							if(a)
							{
								window.location = a.href;
								return true;
							}
						}
					}
				}
			}
		return false;
		}

		return false;
	};

	this.onTimeout = function()
	{
		_this.onChange(function(){
			setTimeout(_this.onTimeout, 500);
		});
	};

	this.onChange = function(callback)
	{
		if (_this.running)
			return;
		_this.running = true;

		if(_this.INPUT.value != _this.oldValue && _this.INPUT.value != _this.startText)
		{
			_this.oldValue = _this.INPUT.value;
			if(_this.INPUT.value.length >= _this.arParams.MIN_QUERY_LEN)
			{
				_this.cache_key = _this.arParams.INPUT_ID + '|' + _this.INPUT.value;
				if(_this.cache[_this.cache_key] == null)
				{
					if(_this.WAIT)
					{
						var pos = BX.pos(_this.INPUT);
						var height = (pos.bottom - pos.top)-2;
						_this.WAIT.style.top = (pos.top+1) + 'px';
						_this.WAIT.style.height = height + 'px';
						_this.WAIT.style.width = height + 'px';
						_this.WAIT.style.left = (pos.right - height + 2) + 'px';
						_this.WAIT.style.display = 'block';
					}

					BX.ajax.post(
						_this.arParams.AJAX_PAGE,
						{
							'ajax_call':'y',
							'INPUT_ID':_this.arParams.INPUT_ID_TMP,
							'q':_this.INPUT.value,
							'l':_this.arParams.MIN_QUERY_LEN
						},
						function(result)
						{
							_this.cache[_this.cache_key] = result;
							_this.ShowResult(result);
							_this.currentRow = -1;
							_this.EnableMouseEvents();
							if(_this.WAIT)
								_this.WAIT.style.display = 'none';
							if (!!callback)
								callback();
							_this.running = false;
						}
					);
					return;
				}
				else
				{
					_this.ShowResult(_this.cache[_this.cache_key]);
					_this.currentRow = -1;
					_this.EnableMouseEvents();
				}
			}
			else
			{
				_this.RESULT.style.display = 'none';
				_this.currentRow = -1;
				_this.UnSelectAll();
			}
		}
		if (!!callback)
			callback();
		_this.running = false;
	};

	this.UnSelectAll = function()
	{
		var tbl = BX.findChild(_this.RESULT, {'tag':'table','class':'title-search-result'}, true);
		if(tbl)
		{
			var cnt = tbl.rows.length;
			for(var i = 0; i < cnt; i++)
				tbl.rows[i].className = '';
		}
	};

	this.EnableMouseEvents = function()
	{
		var tbl = BX.findChild(_this.RESULT, {'tag':'table','class':'title-search-result'}, true);
		if(tbl)
		{
			var cnt = tbl.rows.length;
			for(var i = 0; i < cnt; i++)
				if(!BX.findChild(tbl.rows[i], {'class':'title-search-separator'}, true))
				{
					tbl.rows[i].id = 'row_' + i;
					tbl.rows[i].onmouseover = function (e) {
						if(_this.currentRow != this.id.substr(4))
						{
							_this.UnSelectAll();
							this.className = 'title-search-selected';
							_this.currentRow = this.id.substr(4);
						}
					};
					tbl.rows[i].onmouseout = function (e) {
						this.className = '';
						_this.currentRow = -1;
					};
				}
		}
	};

	this.onFocusLost = function(hide)
	{
		setTimeout(function(){_this.RESULT.style.display = 'none';}, 300);
		// _this.RESULT.style.display = 'none';
	};

	this.onFocusGain = function()
	{
		if(_this.RESULT.innerHTML.length)
			_this.ShowResult();
	};

	this.onKeyDown = function(e)
	{
		if(!e)
			e = window.event;

		if (_this.RESULT.style.display == 'block')
		{
			if(_this.onKeyPress(e.keyCode))
				return BX.PreventDefault(e);
		}
	};

	this.adjustResultNode = function()
	{
		var pos, pos_input;
		var fixedParent = BX.findParent(_this.CONTAINER, BX.is_fixed);
		if(!!fixedParent)
		{
			_this.RESULT.style.position = 'fixed';
			_this.RESULT.style.zIndex = BX.style(fixedParent, 'z-index') + 2;
			pos = BX.pos(_this.CONTAINER, true);
		}
		else
		{
			_this.RESULT.style.position = 'absolute';
			pos = BX.pos(_this.CONTAINER);
		}
		pos_input = BX.pos(_this.INPUT);

		pos.width = pos.right - pos.left;
		_this.RESULT.style.top = (pos.bottom + 2) + 'px';
		_this.RESULT.style.left = pos_input.left + 'px';

		if($(_this.INPUT).closest('.inline-search-block.with-close').length)
			_this.RESULT.style.width = pos_input.width + 'px';
		else
			_this.RESULT.style.width = pos.width + 'px';
		return pos;
	};

	this._onContainerLayoutChange = function()
	{
		if(_this.RESULT.style.display !== "none" && _this.RESULT.innerHTML !== '')
		{
			_this.adjustResultNode();
		}
	};
	this.Init = function()
	{
		this.CONTAINER = document.getElementById(this.arParams.CONTAINER_ID);
		BX.addCustomEvent(this.CONTAINER, "OnNodeLayoutChange", this._onContainerLayoutChange);

		this.RESULT = document.body.appendChild(document.createElement("DIV"));

		this.RESULT.className = 'title-search-result '+this.arParams.INPUT_ID;
		if(this.arParams.INPUT_ID != 'title-search-input_fixed')
			this.RESULT.className += ' '+arNextOptions['THEME']['TYPE_SEARCH']+'_type';

		this.INPUT = document.getElementById(this.arParams.INPUT_ID);
		this.startText = this.oldValue = this.INPUT.value;
		BX.bind(this.INPUT, 'focus', function() {_this.onFocusGain()});
		BX.bind(this.INPUT, 'blur', function() {_this.onFocusLost()});

		if(BX.browser.IsSafari() || BX.browser.IsIE())
			this.INPUT.onkeydown = this.onKeyDown;
		else
			this.INPUT.onkeypress = this.onKeyDown;

		if(this.arParams.WAIT_IMAGE)
		{
			this.WAIT = document.body.appendChild(document.createElement("DIV"));
			this.WAIT.style.backgroundImage = "url('" + this.arParams.WAIT_IMAGE + "')";
			if(!BX.browser.IsIE())
				this.WAIT.style.backgroundRepeat = 'none';
			this.WAIT.style.display = 'none';
			this.WAIT.style.position = 'absolute';
			this.WAIT.style.zIndex = '1100';
		}

		BX.bind(this.INPUT, 'bxchange', function() {_this.onChange()});
	};
	BX.ready(function (){_this.Init(arParams)});
}

/* End */
;
; /* Start:"a:4:{s:4:"full";s:55:"/bitrix/templates/aspro_next/js/custom.js?1566831992868";s:6:"source";s:41:"/bitrix/templates/aspro_next/js/custom.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(function(){
    if($(window).width() <= 550) {
        setTimeout(function(){
            $(".catalog_block .catalog_item_wrapp.item").equivalent();
        }, 300);
    }
	$('.bizonTabs .bizonTabItems').on('click', function(){
		var index = $(this).index();
		$('.bizonTabs .bizonTabItems').removeClass('active');
		$(this).addClass('active');
		$('.bizonTabText .bizonTabTextItems').removeClass('active');
		$('.bizonTabText .bizonTabTextItems').eq(index).addClass('active');
	})
});

$(window).resize(function(){
    if($(window).width() <= 550) {
        $(".catalog_block .catalog_item_wrapp.item").equivalent();
    }
});

$.fn.equivalent = function () {
    var $blocks = $(this),
            maxH = $blocks.eq(0).height();
    $blocks.each(function () {
        maxH = ($(this).height() > maxH) ? $(this).height() : maxH;
    });
    $blocks.height(maxH);
};
/* End */
;; /* /bitrix/templates/aspro_next/js/vendor/lity/lity.min.js?15537618956601*/
; /* /bitrix/templates/aspro_next/js/prism.min.js?158439580016588*/
; /* /bitrix/templates/aspro_next/js/prism-init-additional.js?1584396653235*/
; /* /bitrix/templates/aspro_next/js/jquery.actual.min.js?15438444901238*/
; /* /bitrix/templates/aspro_next/vendor/js/jquery.bxslider.js?154384449066080*/
; /* /bitrix/templates/aspro_next/js/jqModal.js?154384449011022*/
; /* /bitrix/templates/aspro_next/vendor/js/bootstrap.js?154384449027908*/
; /* /bitrix/templates/aspro_next/vendor/js/jquery.appear.js?15438444903188*/
; /* /bitrix/templates/aspro_next/js/browser.js?1543844490996*/
; /* /bitrix/templates/aspro_next/js/jquery.fancybox.js?154384449045889*/
; /* /bitrix/templates/aspro_next/js/jquery.flexslider.js?154384449056266*/
; /* /bitrix/templates/aspro_next/vendor/js/moment.min.js?154384449034436*/
; /* /bitrix/templates/aspro_next/vendor/js/footable.js?1543844490268108*/
; /* /bitrix/templates/aspro_next/js/jquery.validate.min.js?154384449022254*/
; /* /bitrix/templates/aspro_next/js/jquery.inputmask.bundle.min.js?154384449070933*/
; /* /bitrix/templates/aspro_next/js/jquery.easing.1.3.js?15438444908095*/
; /* /bitrix/templates/aspro_next/js/equalize.min.js?1543844490588*/
; /* /bitrix/templates/aspro_next/js/jquery.alphanumeric.js?15438444901901*/
; /* /bitrix/templates/aspro_next/js/jquery.cookie.js?15438444903066*/
; /* /bitrix/templates/aspro_next/js/jquery.plugin.min.js?15438444903178*/
; /* /bitrix/templates/aspro_next/js/jquery.countdown.min.js?154384449013137*/
; /* /bitrix/templates/aspro_next/js/jquery.countdown-ru.js?15438444901382*/
; /* /bitrix/templates/aspro_next/js/jquery.ikSelect.js?154384449032030*/
; /* /bitrix/templates/aspro_next/js/jquery.mobile.custom.touch.min.js?15438444907784*/
; /* /bitrix/templates/aspro_next/js/jquery.dotdotdot.js?15438444905908*/
; /* /bitrix/templates/aspro_next/js/rating_likes.js?154384449010797*/
; /* /bitrix/templates/aspro_next/js/video_banner.js?154477979826074*/
; /* /bitrix/templates/aspro_next/js/main.js?1588410963225806*/
; /* /bitrix/templates/aspro_next/components/bitrix/subscribe.form/main/script.js?1543844491179*/
; /* /bitrix/components/bitrix/search.title/script.js?15599833979847*/
; /* /bitrix/templates/aspro_next/components/bitrix/search.title/fixed/script.js?15438444909910*/
; /* /bitrix/templates/aspro_next/js/custom.js?1566831992868*/
