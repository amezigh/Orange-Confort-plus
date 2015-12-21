// Source: app/js/jquery.min.js
/*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m="1.11.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(l.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:k&&!k.call("\ufeff\xa0")?function(a){return null==a?"":k.call(a)}:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||n.guid++,e):void 0},now:function(){return+new Date},support:l}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=a.document,A=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,B=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:A.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:z,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=z.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return y.find(a);this.length=1,this[0]=d}return this.context=z,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};B.prototype=n.fn,y=n(z);var C=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!n(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function E(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return E(a,"nextSibling")},prev:function(a){return E(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(D[a]||(e=n.unique(e)),C.test(a)&&(e=e.reverse())),this.pushStack(e)}});var F=/\S+/g,G={};function H(a){var b=G[a]={};return n.each(a.match(F)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?G[a]||H(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&n.each(arguments,function(a,c){var d;while((d=n.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){if(a===!0?!--n.readyWait:!n.isReady){if(!z.body)return setTimeout(n.ready);n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(z,[n]),n.fn.trigger&&n(z).trigger("ready").off("ready"))}}});function J(){z.addEventListener?(z.removeEventListener("DOMContentLoaded",K,!1),a.removeEventListener("load",K,!1)):(z.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(z.addEventListener||"load"===event.type||"complete"===z.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===z.readyState)setTimeout(n.ready);else if(z.addEventListener)z.addEventListener("DOMContentLoaded",K,!1),a.addEventListener("load",K,!1);else{z.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&z.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!n.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}J(),n.ready()}}()}return I.promise(b)};var L="undefined",M;for(M in n(l))break;l.ownLast="0"!==M,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c=z.getElementsByTagName("body")[0];c&&(a=z.createElement("div"),a.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",b=z.createElement("div"),c.appendChild(a).appendChild(b),typeof b.style.zoom!==L&&(b.style.cssText="border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",(l.inlineBlockNeedsLayout=3===b.offsetWidth)&&(c.style.zoom=1)),c.removeChild(a),a=b=null)}),function(){var a=z.createElement("div");if(null==l.deleteExpando){l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}}a=null}(),n.acceptData=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(n.acceptData(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f
}}function S(a,b,c){if(n.acceptData(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d]));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},W=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},X=/^(?:checkbox|radio)$/i;!function(){var a=z.createDocumentFragment(),b=z.createElement("div"),c=z.createElement("input");if(b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a>",l.leadingWhitespace=3===b.firstChild.nodeType,l.tbody=!b.getElementsByTagName("tbody").length,l.htmlSerialize=!!b.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==z.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,a.appendChild(c),l.appendChecked=c.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,a.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){l.noCloneEvent=!1}),b.cloneNode(!0).click()),null==l.deleteExpando){l.deleteExpando=!0;try{delete b.test}catch(d){l.deleteExpando=!1}}a=b=c=null}(),function(){var b,c,d=z.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),l[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var Y=/^(?:input|select|textarea)$/i,Z=/^key/,$=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,ab=/^([^.]*)(?:\.(.+)|)$/;function bb(){return!0}function cb(){return!1}function db(){try{return z.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof n===L||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(F)||[""],h=b.length;while(h--)f=ab.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(F)||[""],j=b.length;while(j--)if(h=ab.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,m,o=[d||z],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||z,3!==d.nodeType&&8!==d.nodeType&&!_.test(p+n.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[n.expando]?b:new n.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),k=n.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!n.isWindow(d)){for(i=k.delegateType||p,_.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||z)&&o.push(l.defaultView||l.parentWindow||a)}m=0;while((h=o[m++])&&!b.isPropagationStopped())b.type=m>1?i:k.bindType||p,f=(n._data(h,"events")||{})[b.type]&&n._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&n.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&n.acceptData(d)&&g&&d[p]&&!n.isWindow(d)){l=d[g],l&&(d[g]=null),n.event.triggered=p;try{d[p]()}catch(r){}n.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((n.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?n(c,this).index(i)>=0:n.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=$.test(e)?this.mouseHooks:Z.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||z),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||z,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==db()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===db()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=z.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===L&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&(a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault())?bb:cb):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:cb,isPropagationStopped:cb,isImmediatePropagationStopped:cb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=bb,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=bb,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submitBubbles||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?b.form:void 0;c&&!n._data(c,"submitBubbles")&&(n.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),n._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.changeBubbles||(n.event.special.change={setup:function(){return Y.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),n.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),n.event.simulate("change",this,a,!0)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;Y.test(b.nodeName)&&!n._data(b,"changeBubbles")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a,!0)}),n._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!Y.test(this.nodeName)}}),l.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=cb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return n().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=cb),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});function eb(a){var b=fb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var fb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gb=/ jQuery\d+="(?:null|\d+)"/g,hb=new RegExp("<(?:"+fb+")[\\s/>]","i"),ib=/^\s+/,jb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,kb=/<([\w:]+)/,lb=/<tbody/i,mb=/<|&#?\w+;/,nb=/<(?:script|style|link)/i,ob=/checked\s*(?:[^=]|=\s*.checked.)/i,pb=/^$|\/(?:java|ecma)script/i,qb=/^true\/(.*)/,rb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,sb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},tb=eb(z),ub=tb.appendChild(z.createElement("div"));sb.optgroup=sb.option,sb.tbody=sb.tfoot=sb.colgroup=sb.caption=sb.thead,sb.th=sb.td;function vb(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==L?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==L?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,vb(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function wb(a){X.test(a.type)&&(a.defaultChecked=a.checked)}function xb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function yb(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function zb(a){var b=qb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ab(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}function Bb(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Cb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(yb(b).text=a.text,zb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&X.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}n.extend({clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!hb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ub.innerHTML=a.outerHTML,ub.removeChild(f=ub.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=vb(f),h=vb(a),g=0;null!=(e=h[g]);++g)d[g]&&Cb(e,d[g]);if(b)if(c)for(h=h||vb(a),d=d||vb(f),g=0;null!=(e=h[g]);g++)Bb(e,d[g]);else Bb(a,f);return d=vb(f,"script"),d.length>0&&Ab(d,!i&&vb(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k,m=a.length,o=eb(b),p=[],q=0;m>q;q++)if(f=a[q],f||0===f)if("object"===n.type(f))n.merge(p,f.nodeType?[f]:f);else if(mb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(kb.exec(f)||["",""])[1].toLowerCase(),k=sb[i]||sb._default,h.innerHTML=k[1]+f.replace(jb,"<$1></$2>")+k[2],e=k[0];while(e--)h=h.lastChild;if(!l.leadingWhitespace&&ib.test(f)&&p.push(b.createTextNode(ib.exec(f)[0])),!l.tbody){f="table"!==i||lb.test(f)?"<table>"!==k[1]||lb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)n.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}n.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),l.appendChecked||n.grep(vb(p,"input"),wb),q=0;while(f=p[q++])if((!d||-1===n.inArray(f,d))&&(g=n.contains(f.ownerDocument,f),h=vb(o.appendChild(f),"script"),g&&Ab(h),c)){e=0;while(f=h[e++])pb.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.deleteExpando,m=n.event.special;null!=(d=a[h]);h++)if((b||n.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k?delete d[i]:typeof d.removeAttribute!==L?d.removeAttribute(i):d[i]=null,c.push(f))}}}),n.fn.extend({text:function(a){return W(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||z).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(vb(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&Ab(vb(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(vb(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return W(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(gb,""):void 0;if(!("string"!=typeof a||nb.test(a)||!l.htmlSerialize&&hb.test(a)||!l.leadingWhitespace&&ib.test(a)||sb[(kb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(jb,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(vb(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(vb(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,o=k-1,p=a[0],q=n.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&ob.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(i=n.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=n.map(vb(i,"script"),yb),f=g.length;k>j;j++)d=i,j!==o&&(d=n.clone(d,!0,!0),f&&n.merge(g,vb(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,n.map(g,zb),j=0;f>j;j++)d=g[j],pb.test(d.type||"")&&!n._data(d,"globalEval")&&n.contains(h,d)&&(d.src?n._evalUrl&&n._evalUrl(d.src):n.globalEval((d.text||d.textContent||d.innerHTML||"").replace(rb,"")));i=c=null}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],g=n(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Db,Eb={};function Fb(b,c){var d=n(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:n.css(d[0],"display");return d.detach(),e}function Gb(a){var b=z,c=Eb[a];return c||(c=Fb(a,b),"none"!==c&&c||(Db=(Db||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Db[0].contentWindow||Db[0].contentDocument).document,b.write(),b.close(),c=Fb(a,b),Db.detach()),Eb[a]=c),c}!function(){var a,b,c=z.createElement("div"),d="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],a.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(a.style.opacity),l.cssFloat=!!a.style.cssFloat,c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===c.style.backgroundClip,a=c=null,l.shrinkWrapBlocks=function(){var a,c,e,f;if(null==b){if(a=z.getElementsByTagName("body")[0],!a)return;f="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",c=z.createElement("div"),e=z.createElement("div"),a.appendChild(c).appendChild(e),b=!1,typeof e.style.zoom!==L&&(e.style.cssText=d+";width:1px;padding:1px;zoom:1",e.innerHTML="<div></div>",e.firstChild.style.width="5px",b=3!==e.offsetWidth),a.removeChild(c),a=c=e=null}return b}}();var Hb=/^margin/,Ib=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Jb,Kb,Lb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Jb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),Ib.test(g)&&Hb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):z.documentElement.currentStyle&&(Jb=function(a){return a.currentStyle},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ib.test(g)&&!Lb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Mb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h=z.createElement("div"),i="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",j="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";h.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",b=h.getElementsByTagName("a")[0],b.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(b.style.opacity),l.cssFloat=!!b.style.cssFloat,h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,b=h=null,n.extend(l,{reliableHiddenOffsets:function(){if(null!=c)return c;var a,b,d,e=z.createElement("div"),f=z.getElementsByTagName("body")[0];if(f)return e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=z.createElement("div"),a.style.cssText=i,f.appendChild(a).appendChild(e),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",b=e.getElementsByTagName("td"),b[0].style.cssText="padding:0;margin:0;border:0;display:none",d=0===b[0].offsetHeight,b[0].style.display="",b[1].style.display="none",c=d&&0===b[0].offsetHeight,f.removeChild(a),e=f=null,c},boxSizing:function(){return null==d&&k(),d},boxSizingReliable:function(){return null==e&&k(),e},pixelPosition:function(){return null==f&&k(),f},reliableMarginRight:function(){var b,c,d,e;if(null==g&&a.getComputedStyle){if(b=z.getElementsByTagName("body")[0],!b)return;c=z.createElement("div"),d=z.createElement("div"),c.style.cssText=i,b.appendChild(c).appendChild(d),e=d.appendChild(z.createElement("div")),e.style.cssText=d.style.cssText=j,e.style.marginRight=e.style.width="0",d.style.width="1px",g=!parseFloat((a.getComputedStyle(e,null)||{}).marginRight),b.removeChild(c)}return g}});function k(){var b,c,h=z.getElementsByTagName("body")[0];h&&(b=z.createElement("div"),c=z.createElement("div"),b.style.cssText=i,h.appendChild(b).appendChild(c),c.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",n.swap(h,null!=h.style.zoom?{zoom:1}:{},function(){d=4===c.offsetWidth}),e=!0,f=!1,g=!0,a.getComputedStyle&&(f="1%"!==(a.getComputedStyle(c,null)||{}).top,e="4px"===(a.getComputedStyle(c,null)||{width:"4px"}).width),h.removeChild(b),c=h=null)}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Nb=/alpha\([^)]*\)/i,Ob=/opacity\s*=\s*([^)]*)/,Pb=/^(none|table(?!-c[ea]).+)/,Qb=new RegExp("^("+T+")(.*)$","i"),Rb=new RegExp("^([+-])=("+T+")","i"),Sb={position:"absolute",visibility:"hidden",display:"block"},Tb={letterSpacing:0,fontWeight:400},Ub=["Webkit","O","Moz","ms"];function Vb(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ub.length;while(e--)if(b=Ub[e]+c,b in a)return b;return d}function Wb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=n._data(d,"olddisplay",Gb(d.nodeName)))):f[g]||(e=V(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Xb(a,b,c){var d=Qb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Yb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Zb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Jb(a),g=l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Kb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ib.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Yb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Kb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=Vb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Rb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]="",i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Vb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Kb(a,b,d)),"normal"===f&&b in Tb&&(f=Tb[b]),""===c||c?(e=parseFloat(f),c===!0||n.isNumeric(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&Pb.test(n.css(a,"display"))?n.swap(a,Sb,function(){return Zb(a,b,d)}):Zb(a,b,d):void 0},set:function(a,c,d){var e=d&&Jb(a);return Xb(a,c,d?Yb(a,b,d,l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Ob.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Nb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Nb.test(f)?f.replace(Nb,e):f+" "+e)}}),n.cssHooks.marginRight=Mb(l.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},Kb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Hb.test(a)||(n.cssHooks[a+b].set=Xb)}),n.fn.extend({css:function(a,b){return W(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Jb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)
},a,b,arguments.length>1)},show:function(){return Wb(this,!0)},hide:function(){return Wb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function $b(a,b,c,d,e){return new $b.prototype.init(a,b,c,d,e)}n.Tween=$b,$b.prototype={constructor:$b,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=$b.propHooks[this.prop];return a&&a.get?a.get(this):$b.propHooks._default.get(this)},run:function(a){var b,c=$b.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):$b.propHooks._default.set(this),this}},$b.prototype.init.prototype=$b.prototype,$b.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},$b.propHooks.scrollTop=$b.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=$b.prototype.init,n.fx.step={};var _b,ac,bc=/^(?:toggle|show|hide)$/,cc=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),dc=/queueHooks$/,ec=[jc],fc={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=cc.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&cc.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function gc(){return setTimeout(function(){_b=void 0}),_b=n.now()}function hc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=U[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function ic(a,b,c){for(var d,e=(fc[b]||[]).concat(fc["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function jc(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&V(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k=Gb(a.nodeName),"none"===j&&(j=k),"inline"===j&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==k?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],bc.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}if(!n.isEmptyObject(o)){r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=ic(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function kc(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function lc(a,b,c){var d,e,f=0,g=ec.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=_b||gc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:_b||gc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(kc(k,j.opts.specialEasing);g>f;f++)if(d=ec[f].call(j,a,k,j.opts))return d;return n.map(k,ic,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(lc,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],fc[c]=fc[c]||[],fc[c].unshift(b)},prefilter:function(a,b){b?ec.unshift(a):ec.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=lc(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&dc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(hc(b,!0),a,d,e)}}),n.each({slideDown:hc("show"),slideUp:hc("hide"),slideToggle:hc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(_b=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),_b=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ac||(ac=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(ac),ac=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e=z.createElement("div");e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=e.getElementsByTagName("a")[0],c=z.createElement("select"),d=c.appendChild(z.createElement("option")),b=e.getElementsByTagName("input")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==e.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=d.selected,l.enctype=!!z.createElement("form").enctype,c.disabled=!0,l.optDisabled=!d.disabled,b=z.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value,a=b=c=d=e=null}();var mc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(mc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.text(a)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var nc,oc,pc=n.expr.attrHandle,qc=/^(?:checked|selected)$/i,rc=l.getSetAttribute,sc=l.input;n.fn.extend({attr:function(a,b){return W(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===L?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?oc:nc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(F);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?sc&&rc||!qc.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(rc?c:d)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),oc={set:function(a,b,c){return b===!1?n.removeAttr(a,c):sc&&rc||!qc.test(c)?a.setAttribute(!rc&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=pc[b]||n.find.attr;pc[b]=sc&&rc||!qc.test(b)?function(a,b,d){var e,f;return d||(f=pc[b],pc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,pc[b]=f),e}:function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),sc&&rc||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):nc&&nc.set(a,b,c)}}),rc||(nc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},pc.id=pc.name=pc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:nc.set},n.attrHooks.contenteditable={set:function(a,b,c){nc.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var tc=/^(?:input|select|textarea|button|object)$/i,uc=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return W(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):tc.test(a.nodeName)||uc.test(a.nodeName)&&a.href?0:-1}}}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var vc=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(F)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===L||"boolean"===c)&&(this.className&&n._data(this,"__className__",this.className),this.className=this.className||a===!1?"":n._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(vc," ").indexOf(b)>=0)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var wc=n.now(),xc=/\?/,yc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(yc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var zc,Ac,Bc=/#.*$/,Cc=/([?&])_=[^&]*/,Dc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Ec=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Fc=/^(?:GET|HEAD)$/,Gc=/^\/\//,Hc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ic={},Jc={},Kc="*/".concat("*");try{Ac=location.href}catch(Lc){Ac=z.createElement("a"),Ac.href="",Ac=Ac.href}zc=Hc.exec(Ac.toLowerCase())||[];function Mc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(F)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nc(a,b,c,d){var e={},f=a===Jc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Oc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Pc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Qc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ac,type:"GET",isLocal:Ec.test(zc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Oc(Oc(a,n.ajaxSettings),b):Oc(n.ajaxSettings,a)},ajaxPrefilter:Mc(Ic),ajaxTransport:Mc(Jc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Dc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||Ac)+"").replace(Bc,"").replace(Gc,zc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(F)||[""],null==k.crossDomain&&(c=Hc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===zc[1]&&c[2]===zc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(zc[3]||("http:"===zc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),Nc(Ic,k,b,v),2===t)return v;h=k.global,h&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Fc.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(xc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Cc.test(e)?e.replace(Cc,"$1_="+wc++):e+(xc.test(e)?"&":"?")+"_="+wc++)),k.ifModified&&(n.lastModified[e]&&v.setRequestHeader("If-Modified-Since",n.lastModified[e]),n.etag[e]&&v.setRequestHeader("If-None-Match",n.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Kc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Nc(Jc,k,b,v)){v.readyState=1,h&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Pc(k,v,c)),u=Qc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(n.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!l.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||n.css(a,"display"))},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Rc=/%20/g,Sc=/\[\]$/,Tc=/\r?\n/g,Uc=/^(?:submit|button|image|reset|file)$/i,Vc=/^(?:input|select|textarea|keygen)/i;function Wc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Sc.test(a)?d(a,e):Wc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Wc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Wc(c,a[c],b,e);return d.join("&").replace(Rc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Vc.test(this.nodeName)&&!Uc.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Tc,"\r\n")}}):{name:b.name,value:c.replace(Tc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&$c()||_c()}:$c;var Xc=0,Yc={},Zc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Yc)Yc[a](void 0,!0)}),l.cors=!!Zc&&"withCredentials"in Zc,Zc=l.ajax=!!Zc,Zc&&n.ajaxTransport(function(a){if(!a.crossDomain||l.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Xc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Yc[g],b=void 0,f.onreadystatechange=n.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Yc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function $c(){try{return new a.XMLHttpRequest}catch(b){}}function _c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=z.head||n("head")[0]||z.documentElement;return{send:function(d,e){b=z.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ad=[],bd=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ad.pop()||n.expando+"_"+wc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(bd.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&bd.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(bd,"$1"+e):b.jsonp!==!1&&(b.url+=(xc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ad.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||z;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var cd=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&cd)return cd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h,a.length),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&n.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var dd=a.document.documentElement;function ed(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?(typeof e.getBoundingClientRect!==L&&(d=e.getBoundingClientRect()),c=ed(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||dd;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||dd})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return W(this,function(a,d,e){var f=ed(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Mb(l.pixelPosition,function(a,c){return c?(c=Kb(a,b),Ib.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return W(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var fd=a.jQuery,gd=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=gd),b&&a.jQuery===n&&(a.jQuery=fd),n},typeof b===L&&(a.jQuery=a.$=n),n});

// Source: app/conf/extensionChrome/hebergement.js
var uci_classic_toolbar_css = chrome.extension.getURL('css/classic-toolbar.css');//self.options.css;
var imagesPath = {
    btnclosecross: chrome.extension.getURL('images/btn_close_cross.png'),//self.options.btnclosecross,
    btnminus: chrome.extension.getURL('images/btn_minus.png'),// self.options.btnminus,
    btnplus: chrome.extension.getURL('images/btn_plus.png'),// self.options.btnplus,
    arrows: chrome.extension.getURL('images/arrows_60.png'),// self.options.arrows,
    icoinit: chrome.extension.getURL('images/ico_init.png'),// self.options.icoinit,
    icohelp: chrome.extension.getURL('images/ico_help.png'),// self.options.icohelp,
};
var fontsPath = {
	opendyslexicregular: "url(data:application/x-font-woff;charset=utf-8;base64,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)",
	opendyslexicitalic: "url(data:application/x-font-woff;charset=utf-8;base64,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)",
	opendyslexicbold: "url(data:application/x-font-woff;charset=utf-8;base64,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)",
	opendyslexicbolditalic: "url(data:application/x-font-woff;charset=utf-8;base64,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)"
};
var jquery_min_js = chrome.extension.getURL('js/jquery.min.js');//self.options.jquery;
var ruler_js =  chrome.extension.getURL('js/ruler.js');//self.options.ruler;
var helpPath = {
    fr:  "javascript:chrome.runtime.sendMessage({message: \"orangecomfort+help\", value:\"fr\"};",//self.options.helpfr,
    en:  "javascript:chrome.runtime.sendMessage({message: \"orangecomfort+help\", value:\"en\"};",//self.options.helpen,
    es:  "javascript:chrome.runtime.sendMessage({message: \"orangecomfort+help\", value:\"es\"};"//self.options.helpes
};
var hebergementFullPath='';
// Source: app/js/ToolbarStrings.js
/**
    This file is part of Orange Confort+ | A centralized Javascript application to enable users to customize display and behaviour of websites to suit their advanced accessibility needs
    
    Copyright (C) 2014  Orange

    Orange Confort+ is free software; you can redistribute it and/or
    modify it under the terms of the GNU General Public License
    as published by the Free Software Foundation; either version 2
    of the License, or (at your option) any later version.

    Orange Confort+ is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details (LICENSE.txt file).
**/ 
/* 
 * String localization Manager
 */
var traduction = [];
function ToolbarStrings() {
    /**
     * A {String} reprensenting Locale code
     * @private
     */
    var locale = "en";
    /**
     * A {String} reprensenting default Locale code
     * @private
     */
    var defaultLocale = "en";
    /* local to default to - see setLocale() */

    /**
     * Set in which language the toolbar is supposed to speak
     * based on html@lang or body@lang
     * if none is set or none can be found in localeStrings[]
     * then locale = defaultLocale
     * @return nothing
     */
    this.setLocale = function () {
        var htmlTag = document.getElementsByTagName("html")[0];
        /* HTML tag <html> of the page */
        var bodyTag = document.getElementsByTagName("body")[0];
        /* HTML tag <body> of the page */        
        this.locale = ((htmlTag.lang) ? htmlTag.lang : (htmlTag.getAttribute("xml:lang")) ? htmlTag.getAttribute("xml:lang") : (bodyTag.lang) ? bodyTag.lang : defaultLocale).substr(0,2);
        if (!this.locale || !traduction[this.locale]) {
            this.locale = defaultLocale;
        }
        //Debug.log("locale (final): " + locale);
        
    };

    /**
     * Get the locale code used by the tool-bar
     * @return {String} the locale used
     */
    this.getLocale = function () {
        return this.locale;
    };

    /**
     * Fonction permettant de mettre a jour la variable locale concernant la langue
     * @param {String} str the string reference to language
     */
    this.setMyLocale = function (langue) {
        this.locale = langue;
    };

    /**
     * Get the text corresponding to the specified reference in the defined language
     * @param {String} str the string reference to get
     * @return {String} txt the desired text
     */
    this.get = function (str) {
        return traduction[this.locale][str];
    };
}
// Source: app/js/UciUserPref.js
/**
    This file is part of Orange Confort+ | A centralized Javascript application to enable users to customize display and behaviour of websites to suit their advanced accessibility needs
    
    Copyright (C) 2014  Orange

    Orange Confort+ is free software; you can redistribute it and/or
    modify it under the terms of the GNU General Public License
    as published by the Free Software Foundation; either version 2
    of the License, or (at your option) any later version.

    Orange Confort+ is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details (LICENSE.txt file).
**/
/**
 * User pref stackv3 generic class.<br />
 @class Collection of user preference
 */
function UciUserPref() {
this.storedValue = false;
    this.finish = false;
 
    
    /**
     * Collection of mask used to get value of necessary bits
     * for each encoded variable
     * @private
     */
    this.couleurs={"00": "#FFFFFF",  "01": "#330000",  "02": "#331900",  "03": "#333300",  "04": "#193300",  "05": "#003300",  "06": "#003319",  "07": "#003333",  "08": "#001933",  "09": "#000033",  "10": "#190033",  "11": "#330033",  "12": "#330019",  "13": "#000000",  "14": "#990000",  "15": "#994C00",  "16": "#999900",  "17": "#4C9900",  "18": "#009900",  "19": "#00994C",  "20": "#009999",  "21": "#004C99",  "22": "#000099",  "23": "#4C0099",  "24": "#990099",  "25": "#99004C",  "26": "#404040",  "27": "#FF0000",  "28": "#FF8000",  "29": "#FFFF00",  "30": "#80FF00",  "31": "#00FF00",  "32": "#00FF80",  "33": "#00FFFF",  "34": "#0080FF",  "35": "#0000FF",  "36": "#7F00FF",  "37": "#FF00FF",  "38": "#FF007F",  "39": "#808080",  "40": "#FF6666",  "41": "#FFB266",  "42": "#FFFF66",  "43": "#B2FF66",  "44": "#66FF66",  "45": "#66FFB2",  "46": "#66FFFF",  "47": "#66B2FF",  "48": "#6666FF",  "49": "#B266FF",  "50": "#FF66FF",  "51": "#FF66B2",  "52": "#C0C0C0",  "53": "#FFCCCC",  "54": "#FFE5CC",  "55": "#FFFFCC",  "56": "#E5FFCC",  "57": "#CCFFCC",  "58": "#CCFFE5",  "59": "#CCFFFF",  "60": "#CCE5FF",  "61": "#CCE5FF",  "62": "#E5CCFF",  "63": "#FFCCFF",  "64": "#FFCCE5",  "65": "#000000"};
    
    /**
     * Convertion matrix used to get associated string value corresponding
     * to encoded bit. Each key and value are prefixed by param name in
     * order to ensure bijection as it or when matrix is reverted.
     * @private
     */
    this.convertMatrixv3 = {
        "a11yApercuAuto-0":     "a11yApercuAuto-false",
        "a11yApercuAuto-1":     "a11yApercuAuto-off",
        "a11ySiteWebEnabled-0": "a11ySiteWebEnabled-on",
        "a11ySiteWebEnabled-1": "a11ySiteWebEnabled-off",
        "a11yToolbarEnable-0": "a11yToolbarEnable-off",
        "a11yToolbarEnable-1": "a11yToolbarEnable-on",
        "a11yLanguage-0": "a11yLanguage-keepit",
        "a11yLanguage-1": "a11yLanguage-fr",
        "a11yLanguage-2": "a11yLanguage-en",
        "a11yLanguage-3": "a11yLanguage-es",
        "a11yJumpToContent-0": "a11yJumpToContent-false",
        "a11yJumpToContent-1": "a11yJumpToContent-true",
        "a11yLinearize-0": "a11yLinearize-false",
        "a11yLinearize-1": "a11yLinearize-true",
        //Gestion de la taille de police
        "a11yBigger-0": "a11yBigger-keepit",
        "a11yBigger-1": "a11yBigger-150",
        "a11yBigger-2": "a11yBigger-200",
        "a11yVisualSettings-0": "a11yVisualSettings-predefined",
        "a11yVisualSettings-1": "a11yVisualSettings-personnal",
        "a11yVisualPredefinedSettings-0": "a11yVisualPredefinedSettings-keepit",
        "a11yVisualPredefinedSettings-1": "a11yVisualPredefinedSettings-whiteonblack",
        "a11yVisualPredefinedSettings-2": "a11yVisualPredefinedSettings-blackonwhite",
        "a11yMotorModeEnabled-0": "a11yMotorModeEnabled-false",
        "a11yMotorModeEnabled-1": "a11yMotorModeEnabled-true",
        "a11yMotorMode-0": "a11yMotorMode-remote",
        "a11yMotorMode-1": "a11yMotorMode-looping",
        "a11yDelayBeforeClick-0": "a11yDelayBeforeClick-1",
        "a11yDelayBeforeClick-1": "a11yDelayBeforeClick-2",
        "a11yDelayBeforeClick-2": "a11yDelayBeforeClick-3",
        "a11yDelayBeforeClick-3": "a11yDelayBeforeClick-6",
        "a11yMenuPositionning-0": "a11yMenuPositionning-center",
        "a11yMenuPositionning-1": "a11yMenuPositionning-nextto",
        "a11yDelayBeforeLoop-0": "a11yDelayBeforeLoop-1",
        "a11yDelayBeforeLoop-1": "a11yDelayBeforeLoop-2",
        "a11yDelayBeforeLoop-2": "a11yDelayBeforeLoop-3",
        "a11yDelayBeforeLoop-3": "a11yDelayBeforeLoop-6",
        "a11yQuickMode-0": "a11yQuickMode-2",
        "a11yQuickMode-1": "a11yQuickMode-5",
        "a11yQuickMode-2": "a11yQuickMode-10",
        "a11yCharSpacement-0": "a11yCharSpacement-keepit",
        "a11yCharSpacement-1": "a11yCharSpacement-0.2",
        "a11yCharSpacement-2": "a11yCharSpacement-0.5",
        "a11yDyslexyFontEnabled-0": "a11yDyslexyFontEnabled-false",
        "a11yDyslexyFontEnabled-1": "a11yDyslexyFontEnabled-on",
        "a11yDyslexyFont-0": "a11yDyslexyFont-arial",
        "a11yDyslexyFont-1": "a11yDyslexyFont-opendyslexic",
        "a11yLineSpacement-0": "a11yLineSpacement-keepit",
        "a11yLineSpacement-1": "a11yLineSpacement-2",
        "a11yLineSpacement-2": "a11yLineSpacement-3",
        //gestion de l'espacement des mot
        "a11ySpacement-0": "a11ySpacement-keepit",
        "a11ySpacement-1": "a11ySpacement-0.5",
        "a11ySpacement-2": "a11ySpacement-1",
        //gestion de la casse des mots
        "a11yModifCasseEnabled-0" : "a11yModifCasseEnabled-false",
        "a11yModifCasseEnabled-1" : "a11yModifCasseEnabled-on",
        "a11yModifCasse-0": "a11yModifCasse-capitalize",
        "a11yModifCasse-1": "a11yModifCasse-uppercase",
        "a11yModifCasse-2": "a11yModifCasse-lowercase",
        //gestion de l'apparence ; Alignement a gauche
        "a11yLeftText-0":           "a11yLeftText-false",
        "a11yLeftText-1":           "a11yLeftText-left",
        //gestion de l'apparence ; Numeroatation en mode list
        "a11yNumerotationList-0":   "a11yNumerotationList-false",
        "a11yNumerotationList-1":   "a11yNumerotationList-decimal",
        //gestion des liens
        "a11yNavLienEnabled-0":     "a11yNavLienEnabled-false",
        "a11yNavLienEnabled-1":     "a11yNavLienEnabled-true",
        //gestion liens selectionnées
        "a11yNavLienSelStyle-0":    "a11yNavLienSelStyle-keepit",
        "a11yNavLienSelStyle-1":    "a11yNavLienSelStyle-border",
        "a11yNavLienSelStyle-2":    "a11yNavLienSelStyle-underline",
        "a11yNavLienSelStyle-3":    "a11yNavLienSelStyle-bold",
        //gestion liens Non visités
        "a11yNavLienNonVisStyle-0":    "a11yNavLienNonVisStyle-keepit",
        "a11yNavLienNonVisStyle-1":    "a11yNavLienNonVisStyle-border",
        "a11yNavLienNonVisStyle-2":    "a11yNavLienNonVisStyle-underline",
        "a11yNavLienNonVisStyle-3":    "a11yNavLienNonVisStyle-bold",
        //gestion liens Visités
        "a11yNavLienVisStyle-0":    "a11yNavLienVisStyle-keepit",
        "a11yNavLienVisStyle-1":    "a11yNavLienVisStyle-border",
        "a11yNavLienVisStyle-2":    "a11yNavLienVisStyle-underline",
        "a11yNavLienVisStyle-3":    "a11yNavLienVisStyle-bold",
        //gestion règle
        "a11yRegleEnabled-0":      "a11yRegleEnabled-false",
        "a11yRegleEnabled-1":       "a11yRegleEnabled-true",
        "a11yRegleVertical-0" :     "a11yRegleVertical-false",
        "a11yRegleVertical-1" :     "a11yRegleVertical-true",
        "a11yRegleHorizontal-0" :   "a11yRegleHorizontal-false",
        "a11yRegleHorizontal-1" :   "a11yRegleHorizontal-true",

        "a11yRegleEpaisseur-0" :    "a11yRegleEpaisseur-thin",
        "a11yRegleEpaisseur-1" :    "a11yRegleEpaisseur-medium",
        "a11yRegleEpaisseur-2" :    "a11yRegleEpaisseur-thick",

        "a11ySupEffetTransp-0":     "a11ySupEffetTransp-false",
        "a11ySupEffetTransp-1":     "a11ySupEffetTransp-1",
        "a11ySupImageFont-0" :      "a11ySupImageFont-false",
        "a11ySupImageFont-1" :      "a11ySupImageFont-true",
        "a11ySupImageFirstPlan-0" : "a11ySupImageFirstPlan-false",
        "a11ySupImageFirstPlan-1" :  "a11ySupImageFirstPlan-true",
        /**
         * Reverse the matrix. Keys becomes values and values becomes keys.*/
        reverse: function () {
            var temp = {}, prop;
            for (prop in this) {
                if (prop !== "reverse") {
                    temp[this[prop]] = prop;
                }
            }
            return temp;
        }
    };
    
    /**
     * Create the var for each color
     */
    this.create_color = function(paramname){
        for(var key in this.couleurs){
            this.convertMatrixv3[paramname + key]=paramname+this.couleurs[key];
        }
    };

    this.create_color('a11yFontColor-');
    this.create_color('a11yBackgroundColor-');
    this.create_color('a11yNavLienSelColor-');
    this.create_color('a11yNavLienNonVisColor-');
    this.create_color('a11yNavLienVisColor-');
    this.create_color('a11yRegleColor-');
    
    this.maskMatrixv3 = {
        // Mask Name                | Dec Value
        "a11ySiteWebEnabled":     [46,1],
        "a11yApercuAuto":         [45,1],
        "a11yToolbarEnable":      [44,1],
        "a11yLanguage":           [43,1],
        "a11yJumpToContent":      [42,1],
        "a11yLinearize":          [41,1],
        "a11yBigger":             [40,1],
        "a11yVisualSettings":     [39,1],
        "a11yVisualPredefinedSettings": [38,1],
        "a11yFontColor":          [36,2],
        "a11yBackgroundColor":    [34,2],
        "a11yMotorModeEnabled":   [33,1],
        "a11yMotorMode":          [32,1],
        "a11yDelayBeforeClick":   [31,1],
        "a11yMenuPositionning":   [30,1],
        "a11yDelayBeforeLoop":    [29,1],
        "a11yQuickMode":          [28,1],
        "a11yCharSpacement":      [27,1],
        "a11yDyslexyFontEnabled": [26,1],
        "a11yDyslexyFont":        [25,1],
        "a11yLineSpacement":      [24,1],
        "a11ySpacement":          [23,1],
        "a11yModifCasseEnabled":  [22,1],
        "a11yModifCasse":         [21,1],
        "a11yLeftText":           [20,1],
        "a11yNumerotationList":   [19,1],
        "a11yNavLienEnabled":     [18,1],
        "a11yNavLienSelColor":    [16,2],
        "a11yNavLienSelStyle":    [15,1],
        "a11yNavLienNonVisColor": [13,2],
        "a11yNavLienNonVisStyle": [12,1],
        "a11yNavLienVisColor":    [10,2],
        "a11yNavLienVisStyle":    [9,1],
        "a11yRegleEnabled":       [8,1],
        "a11yRegleVertical" :     [7,1],
        "a11yRegleHorizontal" :   [6,1],
        "a11yRegleColor":         [4,2],
        "a11yRegleEpaisseur" :    [3,1],
        "a11ySupEffetTransp":     [2,1],
        "a11ySupImageFont" :      [1,1],
        "a11ySupImageFirstPlan" : [0,1]
    };
    
    /**
     * User preference stackv3. Used to save user preference.
     * Initialized with default value.
     * @private
     */
    this.stackv3 = {
        "a11yToolbarEnable": "off",
        "a11yLanguage": "keepit",
        "a11yJumpToContent": "false",
        "a11yLinearize": "false",
        "a11yBigger": "keepit",
        "a11yVisualSettings": "predefined",
        "a11yVisualPredefinedSettings": "keepit",
        "a11yFontColor": "#000000",
        "a11yBackgroundColor": "#FFFFFF",
        "a11yMotorModeEnabled": "false",
        "a11yMotorMode": "remote",
        "a11yDelayBeforeClick": "1",
        "a11yMenuPositionning": "center",
        "a11yDelayBeforeLoop": "1",
        "a11yQuickMode": "2",
        "a11yCharSpacement": "keepit",
        "a11yDyslexyFontEnabled": "false",
        "a11yDyslexyFont": "arial",
        "a11yLineSpacement" : "keepit",
        "a11ySpacement": "keepit",
        "a11yModifCasseEnabled": "false",
        "a11yModifCasse" : "capitalize",
        "a11yLeftText":           "false",
        "a11yNumerotationList":   "false",
        "a11yNavLienEnabled":     "false",
        "a11yNavLienSelColor":    "#000000",
        "a11yNavLienSelStyle":    "keepit",
        "a11yNavLienNonVisColor": "#000000",
        "a11yNavLienNonVisStyle": "keepit",
        "a11yNavLienVisColor":    "#000000",
        "a11yNavLienVisStyle":    "keepit",
        "a11yRegleEnabled":       "false",
        "a11yRegleVertical" :     "false",
        "a11yRegleHorizontal" :   "true",
        "a11yRegleColor" :        "#000000",
        "a11yRegleEpaisseur" :    "thin",
        "a11ySupEffetTransp":     "false",
        "a11ySupImageFont" :     "false",
        "a11ySupImageFirstPlan" : "false",
        "a11ySiteWebEnabled" : "on",
        "a11yApercuAuto" : "false"
    };
    
    /***************************************************Ancienne version du cookie************************************/
    var maskMatrix = {
        // Mask Name            | Dec Value    |  Bin Value
        "a11yJumpToContent": 1            // 00000000000000000000000000000001
        , "a11yLinearize": 2            // 00000000000000000000000000000010
        , "a11yBigger": 12                // 00000000000000000000000000001100
        , "a11yVisualSettings": 48        // 00000000000000000000000000110000
        , "a11yFontColor": 1984            // 00000000000000000000011111000000
        , "a11yBackgroundColor": 63488    // 00000000000000001111100000000000
        , "a11yMotorModeEnabled": 65536    // 00000000000000010000000000000000
        , "a11yMotorMode": 131072        // 00000000000000100000000000000000
        , "a11yDelayBeforeClick": 786432// 00000000000011000000000000000000
        , "a11yMenuPositionning": 1048576// 00000000000100000000000000000000
        , "a11yDelayBeforeLoop": 6291456// 00000000011000000000000000000000
        , "a11yQuickMode": 25165824        // 1100000000000000000000000
    };
    
    /**
     * Convertion matrix used to get associated string value corresponding
     * to encoded bit. Each key and value are prefixed by param name in
     * order to ensure bijection as it or when matrix is reverted.
     * @private
     */
    var convertMatrix = {
        // Mask+Value                        | Literal Value                        | Bin Mask Value
        // ------------------------------------------------------------------------------------------------------------
        "a11yJumpToContent-0"            :    "a11yJumpToContent-false"
        ,"a11yJumpToContent-1"            :    "a11yJumpToContent-true"
        // ------------------------------------------------------------------------------------------------------------
        ,"a11yLinearize-0"                :    "a11yLinearize-false"
        ,"a11yLinearize-2"                :    "a11yLinearize-true"
        // ------------------------------------------------------------------------------------------------------------
        ,"a11yBigger-0"                    :    "a11yBigger-keepit"
        ,"a11yBigger-4"                    :    "a11yBigger-150"
        ,"a11yBigger-8"                    :    "a11yBigger-200"
        // ------------------------------------------------------------------------------------------------------------
        ,"a11yVisualSettings-0"            :    "a11yVisualSettings-predefined"
        ,"a11yVisualSettings-16"        :    "a11yVisualSettings-personnal"
        ,"a11yVisualSettings-32"        :    "a11yVisualSettings-personnal"
        // ------------------------------------------------------------------------------------------------------------
        ,"a11yFontColor-0"                :    "a11yFontColor-#FFFFFF"
        ,"a11yFontColor-64"                :    "a11yFontColor-#000000"
        ,"a11yFontColor-128"            :    "a11yFontColor-#FF0000"
        ,"a11yFontColor-192"            :    "a11yFontColor-#FF0000"
        ,"a11yFontColor-256"            :    "a11yFontColor-#FF8000"
        ,"a11yFontColor-320"            :    "a11yFontColor-#FFB266"
        ,"a11yFontColor-384"            :    "a11yFontColor-#FFFF00"
        ,"a11yFontColor-448"            :    "a11yFontColor-#FFFF00"
        ,"a11yFontColor-512"            :    "a11yFontColor-#B2FF66"
        ,"a11yFontColor-576"            :    "a11yFontColor-#80FF00"
        ,"a11yFontColor-640"            :    "a11yFontColor-#00FF80"
        ,"a11yFontColor-704"            :    "a11yFontColor-#00FF80"
        ,"a11yFontColor-768"            :    "a11yFontColor-#00FFFF"
        ,"a11yFontColor-832"            :    "a11yFontColor-#00FFFF"
        ,"a11yFontColor-896"            :    "a11yFontColor-#0080FF"
        ,"a11yFontColor-960"            :    "a11yFontColor-#0080FF"
        ,"a11yFontColor-1024"            :    "a11yFontColor-#0000FF"
        ,"a11yFontColor-1088"            :    "a11yFontColor-#0000FF"
        ,"a11yFontColor-1152"            :    "a11yFontColor-#000099"
        ,"a11yFontColor-1216"            :    "a11yFontColor-#4C0099"
        ,"a11yFontColor-1280"            :    "a11yFontColor-#7F00FF"
        ,"a11yFontColor-1344"            :    "a11yFontColor-#B266FF"
        ,"a11yFontColor-1408"            :    "a11yFontColor-#FF00FF"
        ,"a11yFontColor-1472"            :    "a11yFontColor-#FF00FF"
        ,"a11yFontColor-1536"            :    "a11yFontColor-#FF66B2"
        ,"a11yFontColor-1600"            :    "a11yFontColor-#FF007F"
        ,"a11yFontColor-1664"            :    "a11yFontColor-#FF0000"
        ,"a11yFontColor-1728"            :    "a11yFontColor-#990000"
        ,"a11yFontColor-1792"            :    "a11yFontColor-#330000"
        ,"a11yFontColor-1856"            :    "a11yFontColor-#330000"
        // ------------------------------------------------------------------------------------------------------------
        ,"a11yBackgroundColor-0"        :    "a11yBackgroundColor-#FFFFFF"
        ,"a11yBackgroundColor-2048"        :    "a11yBackgroundColor-#000000"
        ,"a11yBackgroundColor-4096"        :    "a11yBackgroundColor-#FF0000"
        ,"a11yBackgroundColor-6144"        :    "a11yBackgroundColor-#FF0000"
        ,"a11yBackgroundColor-8192"        :    "a11yBackgroundColor-#FF8000"
        ,"a11yBackgroundColor-10240"    :    "a11yBackgroundColor-#FFB266"
        ,"a11yBackgroundColor-12288"    :    "a11yBackgroundColor-#FFFF00"
        ,"a11yBackgroundColor-14336"    :    "a11yBackgroundColor-#FFFF00"
        ,"a11yBackgroundColor-16384"    :    "a11yBackgroundColor-#B2FF66"
        ,"a11yBackgroundColor-18432"    :    "a11yBackgroundColor-#80FF00"
        ,"a11yBackgroundColor-20480"    :    "a11yBackgroundColor-#00FF80"
        ,"a11yBackgroundColor-22528"    :    "a11yBackgroundColor-#00FF80"
        ,"a11yBackgroundColor-24576"    :    "a11yBackgroundColor-#00FFFF"
        ,"a11yBackgroundColor-26624"    :    "a11yBackgroundColor-#00FFFF"
        ,"a11yBackgroundColor-28672"    :    "a11yBackgroundColor-#0080FF"
        ,"a11yBackgroundColor-30720"    :    "a11yBackgroundColor-#0080FF"
        ,"a11yBackgroundColor-32768"    :    "a11yBackgroundColor-#0000FF"
        ,"a11yBackgroundColor-34816"    :    "a11yBackgroundColor-#0000FF"
        ,"a11yBackgroundColor-36864"    :    "a11yBackgroundColor-#000099"
        ,"a11yBackgroundColor-38912"    :    "a11yBackgroundColor-#4C0099"
        ,"a11yBackgroundColor-40960"    :    "a11yBackgroundColor-#7F00FF"
        ,"a11yBackgroundColor-43008"    :    "a11yBackgroundColor-#B266FF"
        ,"a11yBackgroundColor-45056"    :    "a11yBackgroundColor-#FF00FF"
        ,"a11yBackgroundColor-47104"    :    "a11yBackgroundColor-#FF00FF"
        ,"a11yBackgroundColor-49152"    :    "a11yBackgroundColor-#FF66B2"
        ,"a11yBackgroundColor-51200"    :    "a11yBackgroundColor-#FF007F"
        ,"a11yBackgroundColor-53248"    :    "a11yBackgroundColor-#FF0000"
        ,"a11yBackgroundColor-55296"    :    "a11yBackgroundColor-#990000"
        ,"a11yBackgroundColor-57344"    :    "a11yBackgroundColor-#330000"
        ,"a11yBackgroundColor-59392"    :    "a11yBackgroundColor-#330000"
        // ------------------------------------------------------------------------------------------------------------
        ,"a11yMotorModeEnabled-0"        :    "a11yMotorModeEnabled-false"
        ,"a11yMotorModeEnabled-65536"    :    "a11yMotorModeEnabled-true"
        // ------------------------------------------------------------------------------------------------------------
        ,"a11yMotorMode-0"                :    "a11yMotorMode-remote"
        ,"a11yMotorMode-131072"            :    "a11yMotorMode-looping"
        // ------------------------------------------------------------------------------------------------------------
        ,"a11yDelayBeforeClick-0"        :    "a11yDelayBeforeClick-1"
        ,"a11yDelayBeforeClick-262144"    :    "a11yDelayBeforeClick-2"
        ,"a11yDelayBeforeClick-524288"    :    "a11yDelayBeforeClick-3"
        ,"a11yDelayBeforeClick-786432"    :    "a11yDelayBeforeClick-6"
        // ------------------------------------------------------------------------------------------------------------
        ,"a11yMenuPositionning-0"        :    "a11yMenuPositionning-center"
        ,"a11yMenuPositionning-1048576"    :    "a11yMenuPositionning-nextto"
        // ------------------------------------------------------------------------------------------------------------
        ,"a11yDelayBeforeLoop-0"        :    "a11yDelayBeforeLoop-1"
        ,"a11yDelayBeforeLoop-2097152"    :    "a11yDelayBeforeLoop-2"
        ,"a11yDelayBeforeLoop-4194304"    :    "a11yDelayBeforeLoop-3"
        ,"a11yDelayBeforeLoop-6291456"    :    "a11yDelayBeforeLoop-6"
        // ------------------------------------------------------------------------------------------------------------
        ,"a11yQuickMode-0"                :    "a11yQuickMode-2"
        ,"a11yQuickMode-8388608"        :    "a11yQuickMode-5"
        ,"a11yQuickMode-16777216"        :    "a11yQuickMode-10"
        // ------------------------------------------------------------------------------------------------------------

        /**
         * Reverse the matrix. Keys becomes values and values becomes keys.
         */
        , reverse: function () {
            var temp = {};
            for (var prop in this) {
                if (prop != "reverse") {
                    temp[this[prop]] = prop;
                }
            }
            return temp;
        }
    };

    /**
     * Decode an encoded pref using mask matrix and convert matrix.
     * The encoded pref is a representation of a number in hexadecimal.
     * each mask of the matrix is applied in order to get the corresponding bit
     * of a pref. This value is used as an index with the convert matrix to get
     * the corresponding textual value.
     * @param {String} pref representing a number in
     * hexadecimal representation
     */
    /*jshint validthis:true */
    this.decode = function (/* String*/ pref) {
        var prefName;
        // uniquement si le nombre de caractères du cookie est correct!
        if(pref.length===47)
        {
           
          for (prefName in this.maskMatrixv3) {
             this.stackv3[prefName]= this.convertMatrixv3[prefName + "-" +pref.substr(this.maskMatrixv3[prefName][0],this.maskMatrixv3[prefName][1])].replace(/.*-/, "");
          }
        }else{
            //ancienne version du cookie
            for (var prefName in maskMatrix) {
                this.stackv3[prefName] = convertMatrix[prefName + "-" + (parseInt(pref, 16) & maskMatrix[prefName])].replace(/.*-/, "");
            }
            // then update the cookie value
            this.updateUserPref();
        }
    };

    /**
     * Encode the user preference stackv3 in a hexadecimal number.
     * Each user preference is used as an index in the convert matrix reversed.
     * the corresponding value is then merged.
     * @return {String} representation of a number in hexadecimal representation
     */
    this.encode = function () {
        var pref = "";
        var tempMatrix = this.convertMatrixv3.reverse();
        var prefName;
        for (prefName in this.maskMatrixv3) {
            if (prefName !== "") {
                // si la pref existe dans le stack sinon 0
                if(prefName in this.stackv3) {
                    pref = tempMatrix[prefName + "-" + this.stackv3[prefName]].replace(/.*-/, "") + pref;
                }
                // on garantie la longeur de la chaine
                else {
                    pref = "0"+pref;
                }
            }
        }
        pref = pref.substring(0,pref.length-1);
        return pref;
    };

    /**
     * Return the value of a given user preference name
     * @param {String} param representing the user preference name
     * @return {String} value : the corresponding user preference value. Could be a string or a number.
     */
    this.get = function (/*String*/param) {
        return (this.stackv3[param] !== null ? this.stackv3[param] : "");
    };

    /**
     * Save the value of a given user preference name into the stackv3
     * @param {String} prefName the user preference name
     * @param {String} prefValue the corresponding user preference value.
     */
    /*jshint validthis:true */
    this.set = function (/* String */prefName, /* String */prefValue) {
        this.stackv3[prefName] = prefValue;
    };

    /**
     * Concatenate user preference into a string with the format : param1=val1&param2=val2....paramX=valX.
     * @return {String} stackv3String : string representing user preference concatenation
     */
    this.stackv3ToString = function () {
        var stackv3String = "";
        var prop;
        for (prop in stackv3) {
            if (prop !== "") {
                stackv3String += prop + "=" + this.stackv3[prop] + "&";
            }
        }
        return stackv3String.replace(/&$/, "");
    };
    /*
     * @constructor init
     */
    this.setStoredValue = function (storedValue) {
        this.storedValue = storedValue;
        this.readUserPref();
    };

    /**
     * Read browser cookies and save each user preference into the user
     * preference stackv3.
     */
    this.readUserPref = function () {
        if(this.storedValue !== false)
        {
            this.decode(this.storedValue);
        }
        this.finish = true;
    };

    /**
     * Wait for callback completed and user preference stackv3 updated
     * @return {Boolean} true if user preference is loaded, false otherwise.
     */
    this.isUserPrefLoaded = function () {
        return this.finish;
    };
}
// Source: app/js/UciSimpleStorage.js
/**
    This file is part of Orange Confort+ | A centralized Javascript application to enable users to customize display and behaviour of websites to suit their advanced accessibility needs
    
    Copyright (C) 2014  Orange

    Orange Confort+ is free software; you can redistribute it and/or
    modify it under the terms of the GNU General Public License
    as published by the Free Software Foundation; either version 2
    of the License, or (at your option) any later version.

    Orange Confort+ is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details (LICENSE.txt file).
**/
/**
 * User pref stackv3 used by the toolbar stored in extension (simple-storage API).<br />


 *  Can retrieve data from PNS or cookie
 @class Collection of user preference
 */

function UciStorage() {
/*****************************************************************************************************************/

    /**
     * Update browser cookies in order to save each of user preference value.
     */
    this.updateUserPref = function() {
        // Update the cdu cookies with the stackv3 value
        var pref = this.encode();
        var tempMatrix = this.convertMatrixv3.reverse();
        this.storedValue = ''+pref+tempMatrix['a11ySiteWebEnabled' + "-" + this.stackv3['a11ySiteWebEnabled']].replace(/.*-/, "");
        this.postMessage("orangecomfort+userprefsave", pref, document.location.href);
        if(accessibilitytoolbar.needToReload)
        {
            accessibilitytoolbar.reloadToolbar();
        }
    };
    
    this.postMessage = function(message, value, targetOrigin) {
    	if(typeof chrome === 'undefined') {
        	// extension firefox
			if(value) {
				message = message + "_" + value;
			}
        	window.postMessage(message, targetOrigin);
        }
        else {
        	// extension chrome
			if(value) {
				chrome.runtime.sendMessage({message: message, value:value});
			} 
			else {
				chrome.runtime.sendMessage({message: message});
			}
        }
    };

    /**
     * Update browser cookies in order to save each of user preference value.
     */
    this.updateBlackList = function() {
        // Update the cdu cookies with the stackv3 value
        var tempMatrix = this.convertMatrixv3.reverse();
        this.storedValue = this.storedValue.substr(0,this.storedValue.length-1)+tempMatrix['a11ySiteWebEnabled' + "-" + this.stackv3['a11ySiteWebEnabled']].replace(/.*-/, "");
        this.postMessage("orangecomfort+blacklistsave", document.location.hostname, document.location.href);
    };

    this.postMessage("orangecomfort+userprefget", null, document.location.href);
}

UciStorage.prototype = new UciUserPref();

// Source: app/language/en.js
/**
    This file is part of Orange Confort+ | A centralized Javascript application to enable users to customize display and behaviour of websites to suit their advanced accessibility needs
    
    Copyright (C) 2014  Orange

    Orange Confort+ is free software; you can redistribute it and/or
    modify it under the terms of the GNU General Public License
    as published by the Free Software Foundation; either version 2
    of the License, or (at your option) any later version.

    Orange Confort+ is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details (LICENSE.txt file).
**/ 
traduction['en']={
  uci_link_hide_toolbar:"hide toolbar",
  uci_alt_logo:"Comfort+",
  uci_serv_name:"Comfort",
  uci_title_fontsize_radio_normal:"default font size",
  uci_title_fontsize_radio_medium:"average font size",
  uci_title_fontsize_radio_large:"large font size",
  uci_title_color_default:"default colors ",
  uci_title_color_blackandwhite:"black text on white background",
  uci_checkbox_disable_apercuauto:"deactivate automatic preview of my settings",
  uci_help_disable_apercuauto:"by default settings preview applies to the site, you can deactivite this feature checking the matching box",
  uci_button_valid:"save my settings",
  uci_button_cancel:"do not save my settings",
  uci_txt_more_settings:"more settings",
  uci_txt_low_settings_display:"less settings",
  uci_txt_low_settings:"close more settings panel",
  uci_txt_disable_cdu:"deactivate Comfort<span class='uci-plus-orange'>+</span> on this site",
  uci_txt_enable_cdu:"activate Comfort<span class='uci-plus-orange'>+</span> on this site",
  uci_title_disable_cdu:"deactivate Comfort+ on this site",
  uci_title_enable_cdu:"activate Comfort+ on this site",
  uci_txt_link_menu_open:"show menu",
  uci_txt_link_menu_close:"hide menu",
  uci_menu_help:"visit general help",
  uci_menu_remove_all:"cancel all settings",
  uci_txt_menu_change_lang_fr:"show this service in french",
  uci_txt_menu_change_lang_en:"show this service in english",
  uci_txt_menu_change_lang_es:"show this service in spanish",
  uci_txt_onglet_typo:"typography",
  uci_txt_onglet_apparence:"layout",
  uci_txt_onglet_color:"colors",
  uci_txt_onglet_motor_help:"behaviour",
  uci_typo_titre_fontsize:"font size",
  uci_typo_titre_wordspacing:"word spacing",
  uci_typo_titre_charspacing:"character spacing",
  uci_typo_titre_linespacing:"line spacing",
  uci_typo_titre_fontfamily:"font face",
  uci_typo_titre_changecase:"text case",
  uci_typo_help_fontfamily:"This feature allows to modify the site defined font to improve reading comfort",
  uci_typo_help_changecase:"This feature allows to modify texts display to meet your needs",
  uci_title_wordspacing_radio_normal:"default word spacing ",
  uci_title_wordspacing_radio_medium:"medium word spacing",
  uci_title_wordspacing_radio_large:"large word spacing",
  uci_title_charspacing_radio_normal:"default character spacing",
  uci_title_charspacing_radio_medium:"medium character spacing",
  uci_title_charspacing_radio_large:"large character spacing",
  uci_title_linespacing_radio_normal:"default line spacing",
  uci_title_linespacing_radio_medium:"medium line spacing",
  uci_title_linespacing_radio_large:"large line spacing",
  uci_title_minfont_radio_normal:"minimal text size 12px",
  uci_title_minfont_radio_medium:"minimal text size 16px",
  uci_title_minfont_radio_large:"minimal text size 18px",
  uci_title_fontfamily_radio_arial:"Arial font face",
  uci_title_fontfamily_radio_opendys:"Open Dyslexic font face",
  uci_changecase_firstlettre:"First Character Of Each Word To Upper Case",
  uci_changecase_toupper:"UPPER CASE TEXT",
  uci_changecase_tolower:"lower case text",
  uci_label_listmode:"cancel layout",
  uci_label_alignleft:"text align left",
  uci_label_putnumonlist:"numbering list elements",
  uci_label_disabletransp:"cancel transparency effects",
  uci_label_disablebgpictures:"disable background images",
  uci_label_disablepppictures:"cancel foreground images",
  uci_link_display_picture:"view this picture:",
  uci_link_display_picture_no_alt:"description not available",
  uci_titre_links:"navigation links appearence",
  uci_txt_notvisited:"links",
  uci_txt_visited:"visited links",
  uci_txt_active:"selected link",
  uci_title_link_notvisited_color:"default links color",
  uci_title_link_visited_color:"visited links color",
  uci_title_link_active_color:"selected link color",
  uci_title_link_notvisited_render:"links formatting",
  uci_title_link_visited_render:"visited links additionnal formatting",
  uci_title_link_active_render:"selected link additionnal formatting",
  uci_link_render_options_default:"by default",
  uci_link_render_options_underline:"underline",
  uci_link_render_options_border:"box",
  uci_link_render_options_bold:"bold",
  uci_title_regle:"show a reading ruler",
  uci_txt_regle_color:"ruler color",
  uci_txt_regle_size:"ruler width ",
  uci_title_regle_thin:"thin",
  uci_title_regle_medium:"medium",
  uci_title_regle_big:"thick",
  uci_label_regle_vertical:"show a vertical ruler",
  uci_label_regle_horizontale:"show a horizontal ruler",
  uci_help_listmode:"This feature replaces site font faces with your default font faces (those defined in your browser or computeur). Moreover, the content is linearised and displayed without columns.",
  uci_help_disabletransp:"This feature allows deactivation of possible transparency effects in the page. This minimises disturbance when reading content.",
  uci_help_disablepppictures:"This feature hides images of the page to avoid reading disturbance. Those are replaced by their text alternatives. A link allows to show the image  on demand.",
  uci_help_links:"This feature allows to define the appearence of links. You can choose color, and formatting parameters.",
  uci_help_regle:"This feature allows to show a horizontal and/or vertical ruler following the mouse pointer that helps reading text. You can set their color and width.",
  uci_color_titre:"combination of preset colors",
  uci_title_color_whiteandblack:"white text on black background",
  uci_color_titre_use_personal:"select personalized colors",
  uci_color_txt_texte:"font color",
  uci_color_txt_background:"background color",
  uci_color_warning_title:"insufficient contrast",
  uci_color_warning_content:"Text and background colors has an insufficient contrast. This may make it difficult to read and cause eyestrain.",
  uci_label_jumptocontent:"always skip to content",
  uci_help_jumptocontent:"allow an automatic positioning on main page content, in particular,  by jumping navigation links",
  uci_enableMotorMode:"motor help",
  uci_label_telecomande:"navigation on hover",
  uci_help_telecomande:"Add vertical scrolling arrows on rollover. Allow also, clickable links activation on rollover after a defined delay",
  uci_legend_delai_clic:"delay before automatic click",
  uci_label_1sec:"1 second",
  uci_label_2sec:"2 seconds",
  uci_label_3sec:"3 seconds",
  uci_label_6sec:"6 seconds",
  uci_label_automove:"automatic selection of elements",
  uci_help_automove:"Select clickable elements one after the other. Press the ",
  uci_legend_menupos:"menu position",
  uci_label_centeredmenu:"center on the page",
  uci_label_nearelemtmenu:"next to the selected item",
  uci_legend_time_before_sel:"elements selection delay",
  uci_help_quickmode:"(number of \253 ignored \273 elements between to selected elements)",
  uci_legend_pasquickmode:"quick mode steps",
  uci_label_2par2:"1",
  uci_label_5par5:"4",
  uci_label_10par10:"9",
  uci_securityCookieChangeAlert:"Warning",
  uci_securityCookieChange:"Comfort<span class='uci-plus-orange'>+</span> service has to store your comfort settings.",
  uci_securityCookieChangeLinkPage:"Configure my browser now to authorize Comfort<span class='uci-plus-orange'>+</span> service to store my comfort settings.",
  uci_doClick:"Click",
  uci_loopActivable:"Navigate through items",
  uci_loopActivableQuick:"Navigate quickly through items",
  uci_loopBackward:"Navigate backwards",
  uci_stopLoop:"Pause navigation",
  uci_closeButton:"close",
  uci_modif_not_saved:"Your unsaved settings will be lost, do you want to continue ?",
  uci_remove_all_settings:"All your settings will be deleted, do you want to continue ?",
  uci_radio_default:"default",
  uci_radio_medium:"medium",
  uci_radio_large:"large",
  uci_new_window:"New window",
  uci_iframe_cookie:"Technical Content Orange Comfort+"
};
// Source: app/language/es.js
/**
    This file is part of Orange Confort+ | A centralized Javascript application to enable users to customize display and behaviour of websites to suit their advanced accessibility needs
    
    Copyright (C) 2014  Orange

    Orange Confort+ is free software; you can redistribute it and/or
    modify it under the terms of the GNU General Public License
    as published by the Free Software Foundation; either version 2
    of the License, or (at your option) any later version.

    Orange Confort+ is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details (LICENSE.txt file).
**/ 
traduction['es']={
  uci_link_hide_toolbar:"esconder el panel",
  uci_alt_logo:"Confort+",
  uci_serv_name:"Confort",
  uci_title_fontsize_radio_normal:"tama\361o de letra normal",
  uci_title_fontsize_radio_medium:"tama\361o de letra medio",
  uci_title_fontsize_radio_large:"tama\361o de letra grande",
  uci_title_color_default:"colores por defecto",
  uci_title_color_blackandwhite:"texto negro en fondo blanco",
  uci_checkbox_disable_apercuauto:"desactivar la vista previa autom\341tica de mis ajustes",
  uci_help_disable_apercuauto:"Por defecto la vista previa de los ajustes se aplica autom\341ticamente al sitio, puedes desactivar esta funcionalidad punteando la casilla asociada.",
  uci_button_valid:"memorizar mis ajustes",
  uci_button_cancel:"no memorizar mis ajustes",
  uci_txt_more_settings:"m\341s ajustes",
  uci_txt_low_settings_display:"menos ajustes",
  uci_txt_low_settings:"cerrar el panel m\341s ajustes",
  uci_txt_disable_cdu:"desactivar Confort<span class='uci-plus-orange'>+</span> para este sitio",
  uci_txt_enable_cdu:"activar Confort<span class='uci-plus-orange'>+</span> para este sitio",
  uci_title_disable_cdu:"desactivar Confort+ para este sitio",
  uci_title_enable_cdu:"activar Confort+ para este sitio",
  uci_txt_link_menu_open:"mostrar men\372",
  uci_txt_link_menu_close:"ocultar men\372",
  uci_menu_help:"consultar  ayuda general",
  uci_menu_remove_all:"anular todos los ajustes",
  uci_txt_menu_change_lang_fr:"mostrar el servicio en franc\351s",
  uci_txt_menu_change_lang_en:"mostrar el servicio en ingles",
  uci_txt_menu_change_lang_es:"mostrar el servicio en espa\361ol",
  uci_txt_onglet_typo:"tipograf\355a",
  uci_txt_onglet_apparence:"apariencia",
  uci_txt_onglet_color:"colores",
  uci_txt_onglet_motor_help:"comportamiento",
  uci_typo_titre_fontsize:"tama\361o del texto",
  uci_typo_titre_wordspacing:"espacio entre palabras",
  uci_typo_titre_charspacing:"espacio entre caracteres",
  uci_typo_titre_linespacing:"espacio interlineal",
  uci_typo_titre_fontfamily:"tipo de fuente",
  uci_typo_titre_changecase:"alternar MAY/min",
  uci_typo_help_fontfamily:"Este comando permite modificar la fuente definida por el sitio web, con el fin de mejorar la Confort<span class='uci-plus-orange'>+</span>",
  uci_typo_help_changecase:"Este comando permite modificar la presentaci\363n del texto seg\372n tus necesidades",
  uci_title_wordspacing_radio_normal:"espacio normal entre palabras",
  uci_title_wordspacing_radio_medium:"espacio medio entre palabras",
  uci_title_wordspacing_radio_large:"espacio grande entre palabras",
  uci_title_charspacing_radio_normal:"espacio normal entre caracteres",
  uci_title_charspacing_radio_medium:"espacio medio entre caracteres",
  uci_title_charspacing_radio_large:"espacio grande entre caracteres",
  uci_title_linespacing_radio_normal:"espacio normal entre lineas",
  uci_title_linespacing_radio_medium:"espacio medio entre lineas",
  uci_title_linespacing_radio_large:"espacio grande entre lineas",
  uci_title_minfont_radio_normal:"tama\361o m\355nimo de letra 12 ptos",
  uci_title_minfont_radio_medium:"tama\361o m\355nimo de letra 16 ptos",
  uci_title_minfont_radio_large:"tama\361o m\355nimo de letra 18 ptos",
  uci_title_fontfamily_radio_arial:"tipo de letra Arial",
  uci_title_fontfamily_radio_opendys:"tipo de letra Open Dyslexic",
  uci_changecase_firstlettre:"primera letra de cada palabra en May\372scula",
  uci_changecase_toupper:"TEXTO EN MAYUSCULAS",
  uci_changecase_tolower:"texto en min\372sculas",
  uci_label_listmode:"desactiva el dise\361o de la p\341gina ",
  uci_label_alignleft:"alinea  textos a la izquierda",
  uci_label_putnumonlist:"numeriza los esquemas",
  uci_label_disabletransp:"anula  efectos de transparencia",
  uci_label_disablebgpictures:"anula im\341genes de fondo",
  uci_label_disablepppictures:"anula im\341genes del primer plano",
  uci_link_display_picture:"visualizar la imagen :",
  uci_link_display_picture_no_alt:"descripci\363n no disponible",
  uci_titre_links:"apariencia enlaces de navegaci\363n ",
  uci_txt_notvisited:"enlaces",
  uci_txt_visited:"enlaces consultados",
  uci_txt_active:"enlace seleccionado",
  uci_title_link_notvisited_color:"color de enlaces por defecto",
  uci_title_link_visited_color:"color de enlaces consultados",
  uci_title_link_active_color:"color de enlace seleccionado",
  uci_title_link_notvisited_render:"formato de enlaces",
  uci_title_link_visited_render:"formato complementario de enlaces consultados",
  uci_title_link_active_render:"formato complementario del enlace seleccioan",
  uci_link_render_options_default:"por defecto ",
  uci_link_render_options_underline:"subrayado",
  uci_link_render_options_border:"encuadrado",
  uci_link_render_options_bold:"en negrita",
  uci_title_regle:"visualizar regla de lectura",
  uci_txt_regle_color:"color de la regla",
  uci_txt_regle_size:"espesor  de la regla",
  uci_title_regle_thin:"fina",
  uci_title_regle_medium:"normal",
  uci_title_regle_big:"espesa",
  uci_label_regle_vertical:"visualizar regla vertical",
  uci_label_regle_horizontale:"visualizar regla horizontal",
  uci_help_listmode:"Este comando reemplaza el tipo de letra del sitio por las tuyas por defecto (aquellas que has definido en tu ordenador o tu navegador). Adem\341s el contenido se vuelve completamente lineal y sin columnas.",
  uci_help_disabletransp:"Este comando desactiva los efectos de transparencia eventuales de la p\341gina, limitando as\355 las perturbaciones de lectura del contenido",
  uci_help_disablepppictures:"Este comando suprime la visualizaci\363n de im\341genes en la p\341gina y son reemplazadas por sus alternativas textuales. Un enlace permite visualizar las im\341genes a petici\363n ",
  uci_help_links:"Este comando define la apariencia de los enlaces en la p\341gina. Puedes elegir el color y el formato de los enlaces",
  uci_help_regle:"Este comando muestra una regla horizontal y/o vertical que sigue el foco del rat\363n para facilitar la lectura del texto. \nPuedes elegir el color y el espesor de las reglas.",
  uci_color_titre:"combinaci\363n de colores predefinidos",
  uci_title_color_whiteandblack:"texto blanco y fondo negro",
  uci_color_titre_use_personal:"selecionar colores personalizados",
  uci_color_txt_texte:"color de texto",
  uci_color_txt_background:"color de fondo",
  uci_color_warning_title:"contrate insuficiente",
  uci_color_warning_content:"Los colores de texto y fondo tienen un contraste insuficiente, en consecuencia la lectura puede ser inconfortable y provocar un cansancio visual.\nTe recomendamos modificar la combinaci\363n de colores",
  uci_label_jumptocontent:"saltar siempre al contenido principal",
  uci_help_jumptocontent:"Permite posicionarse autom\341ticamente en el contenido principal de la p\341gina, saltandose en particular todos los enlaces de navegaci\363n ",
  uci_enableMotorMode:"asistencia motriz",
  uci_label_telecomande:"navegaci\363n con clic autom\341tico",
  uci_help_telecomande:"A\361ade flechas verticales para recorrer la p\341gina, activadas al pasar el rat\363n por encima.\nActiva los elementos clicables al pasar el rat\363n por encima, y con un retraso predefinido en los ajustes",
  uci_legend_delai_clic:"temporizaci\363n del clic autom\341tico",
  uci_label_1sec:"1 segundo",
  uci_label_2sec:"2 segundos",
  uci_label_3sec:"3 segundos",
  uci_label_6sec:"6 segundos",
  uci_label_automove:"navegaci\363n con selecci\363n autom\341tica de elementos",
  uci_help_automove:"Selecciona uno tras otro los elementos clicables\nPresiona la tecla Entrar o Espacio para abrir el men\372 que te permite activar el elemento seleccionado, o bien modificar el tipo de recorrido de la p\341gina (r\341pido, atr\341s, parar)",
  uci_legend_menupos:"posici\363n del men\372",
  uci_label_centeredmenu:"centrar en la p\341gina",
  uci_label_nearelemtmenu:"al lado del elemento seleccionado",
  uci_legend_time_before_sel:"temporizaci\363n de selecci\363n de elementos",
  uci_help_quickmode:"(cantidad de elementos \253 ignorados \273 entre 2 elementos seleccionados)",
  uci_legend_pasquickmode:"pasos de modo r\341pido",
  uci_label_2par2:"1",
  uci_label_5par5:"4",
  uci_label_10par10:"9",
  uci_securityCookieChangeAlert:"Atenci\363n ",
  uci_securityCookieChange:"El servicio Confort<span class='uci-plus-orange'>+</span> necesita memorizar tus ajustes",
  uci_securityCookieChangeLinkPage:"Configurar mi navegador ahora, para autorizar Confort<span class='uci-plus-orange'>+</span> a salvaguardar mis preferencias",
  uci_doClick:"Pulsar",
  uci_loopActivable:"Recorrer la p\341gina",
  uci_loopActivableQuick:"Navegar r\341pidamente",
  uci_loopBackward:"Navegar hacia atr\341s",
  uci_stopLoop:"Parar la navegaci\363n",
  uci_closeButton:"cerrar",
  uci_modif_not_saved:"Los ajustes no memorizados se perder\341n \277 Deseas proseguir esta acci\363n ?",
  uci_remove_all_settings:"Se borrar\341n todos los ajustes \277 Estas seguro de querer proseguir ?",
  uci_radio_default:"normal",
  uci_radio_medium:"medio",
  uci_radio_large:"grande",
  uci_new_window:"Nueva ventana",
  uci_iframe_cookie:"Contenido t\351cnico Orange Comfort+"
};
// Source: app/language/fr.js
/**
    This file is part of Orange Confort+ | A centralized Javascript application to enable users to customize display and behaviour of websites to suit their advanced accessibility needs
    
    Copyright (C) 2014  Orange

    Orange Confort+ is free software; you can redistribute it and/or
    modify it under the terms of the GNU General Public License
    as published by the Free Software Foundation; either version 2
    of the License, or (at your option) any later version.

    Orange Confort+ is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details (LICENSE.txt file).
**/ 
traduction['fr']={
  uci_link_hide_toolbar:"masquer la barre",
  uci_alt_logo:"Confort+",
  uci_serv_name:"Confort",
  uci_title_fontsize_radio_normal:"taille de police normale",
  uci_title_fontsize_radio_medium:"taille de police moyenne",
  uci_title_fontsize_radio_large:"taille de police grande",
  uci_title_color_default:"couleurs par d\351faut",
  uci_title_color_blackandwhite:"texte en noir sur fond blanc",
  uci_checkbox_disable_apercuauto:"d\351sactiver l'aper\347u automatique de mes r\351glages",
  uci_help_disable_apercuauto:"Par d\351faut l\47aper\347u des r\351glages s\47applique automatiquement au site, vous pouvez d\351sactiver cette fonctionnalit\351 en cochant la case associ\351e.",
  uci_button_valid:"enregistrer mes r\351glages",
  uci_button_cancel:"ne pas enregistrer mes r\351glages",
  uci_txt_more_settings:"plus de r\351glages",
  uci_txt_low_settings_display:"moins de r\351glages",
  uci_txt_low_settings:"fermer la zone plus de r\351glages",
  uci_txt_disable_cdu:"d\351sactiver Confort<span class='uci-plus-orange'>+</span> pour ce site",
  uci_txt_enable_cdu:"activer Confort<span class='uci-plus-orange'>+</span> pour ce site",
  uci_title_disable_cdu:"d\351sactiver Confort+ pour ce site",
  uci_title_enable_cdu:"activer Confort+ pour ce site",
  uci_txt_link_menu_open:"afficher le menu",
  uci_txt_link_menu_close:"masquer le menu",
  uci_menu_help:"consulter l\47aide g\351n\351rale",
  uci_menu_remove_all:"annuler tous les r\351glages",
  uci_txt_menu_change_lang_fr:"afficher le service en fran\347ais",
  uci_txt_menu_change_lang_en:"afficher le service en anglais",
  uci_txt_menu_change_lang_es:"afficher le service en espagnol",
  uci_txt_onglet_typo:"typographie",
  uci_txt_onglet_apparence:"agencement",
  uci_txt_onglet_color:"couleurs",
  uci_txt_onglet_motor_help:"comportement",
  uci_typo_titre_fontsize:"taille du texte ",
  uci_typo_titre_wordspacing:"espacement entre les mots ",
  uci_typo_titre_charspacing:"espacement entre les caract\350res",
  uci_typo_titre_linespacing:"espacement entre les lignes",
  uci_typo_titre_fontfamily:"police de caract\350re",
  uci_typo_titre_changecase:"casse du texte",
  uci_typo_help_fontfamily:"Permet de modifier la police d\351finie par le site internet afin d\47am\351liorer le confort lors de la lecture.",
  uci_typo_help_changecase:"Permet de modifier l\47affichage des textes en fonction de vos besoins.",
  uci_title_wordspacing_radio_normal:"espace normal entre les mots",
  uci_title_wordspacing_radio_medium:"espace moyen entre les mots",
  uci_title_wordspacing_radio_large:"espace grand entre les mots",
  uci_title_charspacing_radio_normal:"espace normal entre les caract\350res",
  uci_title_charspacing_radio_medium:"espace moyen entre les caract\350res",
  uci_title_charspacing_radio_large:"espace grand entre les caract\350res",
  uci_title_linespacing_radio_normal:"espace normal entre les lignes",
  uci_title_linespacing_radio_medium:"espace moyen entre les lignes",
  uci_title_linespacing_radio_large:"espace grand entre les lignes",
  uci_title_minfont_radio_normal:"taille minimale du texte 12px",
  uci_title_minfont_radio_medium:"taille minimale du texte 16px",
  uci_title_minfont_radio_large:"taille minimale du texte 18px",
  uci_title_fontfamily_radio_arial:"police de caract\350res Arial",
  uci_title_fontfamily_radio_opendys:"police de caract\350res Open Dyslexic",
  uci_changecase_firstlettre:"Premi\350re Lettre De Chaque Mot En Majuscule",
  uci_changecase_toupper:"TEXTE EN MAJUSCULE",
  uci_changecase_tolower:"texte en minuscule",
  uci_label_listmode:"suppression de la mise en page",
  uci_label_alignleft:"alignement des textes \340 gauche ",
  uci_label_putnumonlist:"num\351rotation des \351l\351ments de liste",
  uci_label_disabletransp:"suppression des effets de transparence",
  uci_label_disablebgpictures:"suppression des images de fond",
  uci_label_disablepppictures:"suppression des images de premier plan",
  uci_link_display_picture:"voir cette image :",
  uci_link_display_picture_no_alt:"description non disponible",
  uci_titre_links:"apparence des liens de navigation",
  uci_txt_notvisited:"liens",
  uci_txt_visited:"liens visit\351s",
  uci_txt_active:"lien s\351lectionn\351",
  uci_title_link_notvisited_color:"couleur des liens par d\351faut",
  uci_title_link_visited_color:"couleur des liens visit\351s",
  uci_title_link_active_color:"couleur du lien s\351lectionn\351",
  uci_title_link_notvisited_render:"mise en forme des liens",
  uci_title_link_visited_render:"mise en forme compl\351mentaire des liens visit\351s",
  uci_title_link_active_render:"mise en forme compl\351mentaire du lien s\351lectionn\351",
  uci_link_render_options_default:"par d\351fault",
  uci_link_render_options_underline:"soulign\351",
  uci_link_render_options_border:"encadr\351",
  uci_link_render_options_bold:"mis en gras",
  uci_title_regle:"affichage d\47une r\350gle de lecture",
  uci_txt_regle_color:"couleur de la r\350gle",
  uci_txt_regle_size:"\351paisseur de la r\350gle",
  uci_title_regle_thin:"fine",
  uci_title_regle_medium:"normale",
  uci_title_regle_big:"\351paisse",
  uci_label_regle_vertical:"affichage d\47une r\350gle verticale",
  uci_label_regle_horizontale:"affichage d\47une r\350gle horizontale",
  uci_help_listmode:"Cette commande remplace les polices du site par vos polices par d\351faut (celles que vous avez d\351finies dans votre ordinateur ou votre navigateur). De plus le contenu devient compl\350tement lin\351aire et sans colonnes.",
  uci_help_disabletransp:"Cette commande permet de d\351sactiver les effets de transparence \351ventuels de la page. Cela limite les perturbations lors de la lecture du contenu.",
  uci_help_disablepppictures:"Cette commande permet de supprimer l\47affichage des images dans la page qui peuvent g\352ner la lecture. Celles-ci sont alors remplac\351es par leurs alternatives textuelles. Un lien permet d\47afficher l\47image \340 la demande.",
  uci_help_links:"Cette commande permet de d\351finir l\47apparence des liens dans la page. Vous pouvez choisir la couleur et la mise en forme de ceux-ci.",
  uci_help_regle:"Cette commande permet d\47afficher une r\350gle horizontale et/ou verticale qui suit le curseur souris ce qui facilite la lecture du texte. Vous pouvez choisir la couleur et l\47\351paisseur de celles-ci.",
  uci_color_titre:"combinaison de couleurs pr\351d\351finies",
  uci_title_color_whiteandblack:"texte blanc sur fond noir",
  uci_color_titre_use_personal:"combinaison de couleurs personnalis\351es",
  uci_color_txt_texte:"couleur du texte",
  uci_color_txt_background:"couleur du fond",
  uci_color_warning_title:"contraste insuffisant ",
  uci_color_warning_content:"La couleur du texte pr\351sente un contraste insuffisant avec la couleur du fond. Ceci risque de rendre la lecture inconfortable et de provoquer une fatigue visuelle. \nNous vous recommandons de modifier la combinaison de couleurs.",
  uci_label_jumptocontent:"aller automatiquement au contenu ",
  uci_help_jumptocontent:"Permet de se positionner automatiquement sur le contenu principal de la page, en sautant notamment tous les liens de navigation.",
  uci_enableMotorMode:"aide motrice",
  uci_label_telecomande:"navigation par pointage",
  uci_help_telecomande:"Ajoute des fl\350ches de d\351filement vertical activ\351es au survol de la souris.\nPermet aussi d\47activer les \351l\351ments cliquables au survol de la souris apr\350s le d\351lai param\351tr\351.",
  uci_legend_delai_clic:"d\351lai avant le clic automatique",
  uci_label_1sec:"1 seconde",
  uci_label_2sec:"2 secondes",
  uci_label_3sec:"3 secondes",
  uci_label_6sec:"6 secondes",
  uci_label_automove:"s\351lection automatique des \351l\351ments",
  uci_help_automove:"S\351lectionne l\47un apr\350s l\47autre les \351l\351ments cliquables.\nAppuyez sur la touche entr\351e ou espace pour ouvrir le menu qui permet soit d\47activer l\47\351l\351ment s\351lectionn\351, soit de modifier le mode de parcours (rapide, arri\350re, arr\352ter)",
  uci_legend_menupos:"position du menu",
  uci_label_centeredmenu:"centr\351 sur la page",
  uci_label_nearelemtmenu:"\340 c\364t\351 de l'\351l\351ment s\351lectionn\351",
  uci_legend_time_before_sel:"d\351lai de s\351lection des \351l\351ments",
  uci_help_quickmode:"(nombre d\47\351l\351ments \253 ignor\351s \273 entre deux \351l\351ments s\351lectionn\351s)",
  uci_legend_pasquickmode:"pas du mode rapide",
  uci_label_2par2:"1",
  uci_label_5par5:"4",
  uci_label_10par10:"9",
  uci_securityCookieChangeAlert:"Avertissement",
  uci_securityCookieChange:"Le service Confort<span class='uci-plus-orange'>+</span> a besoin de m\351moriser vos r\351glages.",
  uci_securityCookieChangeLinkPage:"Configurer mon navigateur maintenant, pour autoriser Confort<span class='uci-plus-orange'>+</span> a m\351moriser mes r\351glages",
  uci_doClick:"Cliquer",
  uci_loopActivable:"Parcourir la page",
  uci_loopActivableQuick:"Naviguer rapidement",
  uci_loopBackward:"Naviguer en arri\351re",
  uci_stopLoop:"Arr\352ter la  navigation",
  uci_closeButton:"fermer",
  uci_modif_not_saved:"Vos r\351glages en cours ne seront pas sauvegard\351s, souhaitez-vous poursuivre cette action?",
  uci_remove_all_settings:"Tous vos r\351glages seront supprim\351s, souhaitez-vous poursuivre cette action?",
  uci_radio_default:"normal",
  uci_radio_medium:"moyen",
  uci_radio_large:"grand",
  uci_new_window:"Nouvelle fen\352tre",
  uci_iframe_cookie:"Contenu technique Orange Confort+"
};
// Source: app/js/UciAideMotrice.js
/**
    This file is part of Orange Confort+ | A centralized Javascript application to enable users to customize display and behaviour of websites to suit their advanced accessibility needs
    
    Copyright (C) 2014  Orange

    Orange Confort+ is free software; you can redistribute it and/or
    modify it under the terms of the GNU General Public License
    as published by the Free Software Foundation; either version 2
    of the License, or (at your option) any later version.

    Orange Confort+ is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details (LICENSE.txt file).
**/ 
/**
 * @class uci_typographie
 * @classdesc Cette classe permettra d'implémenter l'onglet aide motrice
 * @property {string}  attr_aide_motrice : the string containt hinner html for aide motrice.
 */
/*global window */
/*global document: false */
/* global alert */
UciAideMotrice = {
    /**
     * @property
     * @private
     */
    attr_aide_motrice: "",
    attr_onglet: "",
    attr_aide_motrice: "",
    /*
     * @constructor
     */
    InitUciAideMotrice: function () {
        attr_aide_motrice = "<div class='uci_contenu_onglet cdu_c' role='tabpanel' id='uci_contenu_onglet_aidemotrice'>"; //uci_contenu_onglet_aidemotrice
        attr_aide_motrice += "<div id='setting-bloc-content'>";
        attr_aide_motrice += "<input type='checkbox' value='true' name='a11yJumpToContent' id='a11yJumpToContent'"+(accessibilitytoolbar.userPref.get("a11yJumpToContent") === "true" ? " checked='checked'" : "") + ">";
        attr_aide_motrice += "<label for='a11yJumpToContent'>";
        attr_aide_motrice += accessibilitytoolbar.get('uci_label_jumptocontent');
        attr_aide_motrice += "</label>";
        attr_aide_motrice += "<a href='#' class='uci_link_help_bulle' role='presentation' id='uci_link_help_jumptocontent'>";
        attr_aide_motrice += "<span aria-hidden=\"true\" class=\"cdu-icon cdu-icon-help\"></span>";
        attr_aide_motrice += "<span class='uci_span_help_bulle cdu_n' id='uci_help_jumptocontent'><p>";
        attr_aide_motrice += accessibilitytoolbar.get('uci_help_jumptocontent');
        attr_aide_motrice += "</p><span class='uci_fleche_help_bulle'></span></span></a>";
        attr_aide_motrice += "</div>"; //setting-bloc-content
/**********************************************Gestion réglage motor*********************************************************/
        attr_aide_motrice += "<div id='uci_div_motor'>";
        attr_aide_motrice += "<input type='checkbox' value='true' name='a11yMotorModeEnabled'  id='a11yMotorModeEnabled' "+(accessibilitytoolbar.userPref.get("a11yMotorModeEnabled") === "true" ? " checked='checked'" : "") + ">";
        attr_aide_motrice += "<label for='a11yMotorModeEnabled'>";
        attr_aide_motrice += accessibilitytoolbar.get('uci_enableMotorMode');
        attr_aide_motrice += "</label>";
        attr_aide_motrice += "</div>"; //uci_div_motor
        if (accessibilitytoolbar.userPref.get("a11yMotorModeEnabled") === "true") {
            attr_aide_motrice += "<div id='uci_motor_general' style='display:block'>";
        } else {
            attr_aide_motrice += "<div id='uci_motor_general' style='display:none'>";
        }
/******************************************************Navigation par pointage ******************************************************************/
        attr_aide_motrice += "<div id='uci_motor_div_left'>";
        attr_aide_motrice += "<input type='radio' name='a11yMotorMode' id='a11yMotorMode-remote' value='remote' ";
        attr_aide_motrice += accessibilitytoolbar.userPref.get("a11yMotorMode") === "remote" ? "checked='checked'" : "";
        attr_aide_motrice += "/>";
        attr_aide_motrice += "<label for='a11yMotorMode-remote'>";
        attr_aide_motrice +=  accessibilitytoolbar.get('uci_label_telecomande');
        attr_aide_motrice += "</label>";
        attr_aide_motrice += "<p>";
        attr_aide_motrice += accessibilitytoolbar.get('uci_help_telecomande');
        attr_aide_motrice += '</p>';
        
        attr_aide_motrice += "<div id='uci_motor_mode' class='setting-sub-container'>";
        attr_aide_motrice += "<p >";
        attr_aide_motrice += accessibilitytoolbar.get('uci_legend_delai_clic');
        attr_aide_motrice += "</p>";
        attr_aide_motrice += "<ul class='uci_liste_bton' id='uci_reponses_DelayBeforeLoop' role='radiogroup' aria-labelledby='a11yDelayBeforeLoop0'>";
        attr_aide_motrice += "<li id='uci_a11yDelayBeforeLoop_1' role='radio' class='uci_choix uci_inline "+(accessibilitytoolbar.userPref.get("a11yDelayBeforeLoop") === "1" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+" >";
        attr_aide_motrice += accessibilitytoolbar.get('uci_label_1sec');
        attr_aide_motrice += "</li>";
        attr_aide_motrice += "<li id='uci_a11yDelayBeforeLoop_2' role='radio' class='uci_choix uci_inline "+(accessibilitytoolbar.userPref.get("a11yDelayBeforeLoop") === "2" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+" >";
        attr_aide_motrice += accessibilitytoolbar.get('uci_label_2sec');
        attr_aide_motrice += "</li>";
        attr_aide_motrice += "<li id='uci_a11yDelayBeforeLoop_3' role='radio' class='uci_choix uci_inline "+(accessibilitytoolbar.userPref.get("a11yDelayBeforeLoop") === "3" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+" >";
        attr_aide_motrice += accessibilitytoolbar.get('uci_label_3sec');
        attr_aide_motrice += "</li>";
        attr_aide_motrice += "<li id='uci_a11yDelayBeforeLoop_6' role='radio' class='uci_choix uci_inline "+(accessibilitytoolbar.userPref.get("a11yDelayBeforeLoop") === "6" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+" >";
        attr_aide_motrice += accessibilitytoolbar.get('uci_label_6sec');
        attr_aide_motrice += "</li>";
        attr_aide_motrice += "</ul>";
        attr_aide_motrice += "</div>"; //uci_motor_mode
        
        attr_aide_motrice += "</div>"; //uci_motor_div_left
/******************************************************Fin Navigation par pointage ******************************************************************/

/******************************************************Parcours automatique des elements cliquable ******************************************************************/
        attr_aide_motrice += "<div id='uci_motor_div_right'>";
        
        attr_aide_motrice += "<div class='btn-check btn-check-large'>";
        attr_aide_motrice += "<input type='radio' value='looping' id='a11yMotorMode-looping' name='a11yMotorMode'";
        attr_aide_motrice += accessibilitytoolbar.userPref.get("a11yMotorMode") === "looping" ? "checked='checked'" : "";
        attr_aide_motrice += ">";
        attr_aide_motrice += "<label for='a11yMotorMode-looping'>";
        attr_aide_motrice +=  accessibilitytoolbar.get('uci_label_automove');
        attr_aide_motrice += "</label>";
        attr_aide_motrice += "<p>";
        attr_aide_motrice += accessibilitytoolbar.get('uci_help_automove');
        attr_aide_motrice += '</p>';
        attr_aide_motrice += "</div>"; //btn-check btn-check-large

        //gestion de la position du menu
        attr_aide_motrice += "<div>";
        attr_aide_motrice += "<p class='uci_clear'></br>";
        attr_aide_motrice += accessibilitytoolbar.get('uci_legend_menupos');
        attr_aide_motrice += "</p>";
        attr_aide_motrice += "<ul class='uci_liste_bton' id='uci_reponses_a11yMenuPositionning' role='radiogroup' aria-labelledby='a11yMenuPositionning'>";
        attr_aide_motrice += "<li id='uci_a11yMenuPositionning_center' role='radio' class='uci_choix uci_inline "+(accessibilitytoolbar.userPref.get("a11yMenuPositionning") === "center" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+" >";
        attr_aide_motrice += accessibilitytoolbar.get('uci_label_centeredmenu');
        attr_aide_motrice += "</li>";
        attr_aide_motrice += "<li id='uci_a11yMenuPositionning_nextto' role='radio' class='uci_choix uci_inline "+(accessibilitytoolbar.userPref.get("a11yMenuPositionning") === "nextto" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+" >";
        attr_aide_motrice += accessibilitytoolbar.get('uci_label_nearelemtmenu');
        attr_aide_motrice += "</li>";
        attr_aide_motrice += "</ul>";

        //gestion du clic automatique
        attr_aide_motrice += "<p class='uci_clear'></br>";
        attr_aide_motrice += accessibilitytoolbar.get('uci_legend_time_before_sel');
        attr_aide_motrice += "</p>";
        attr_aide_motrice += "<ul class='uci_liste_bton' id='uci_reponses_DelayBeforeLoop_auto' role='radiogroup' aria-labelledby='a11yDelayBeforeClick'>";
        attr_aide_motrice += "<li id='uci_a11yDelayBeforeClick_1' role='radio' class='uci_choix uci_inline "+(accessibilitytoolbar.userPref.get("a11yDelayBeforeClick") === "1" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+" >";
        attr_aide_motrice += accessibilitytoolbar.get('uci_label_1sec');
        attr_aide_motrice += "</li>";
        attr_aide_motrice += "<li id='uci_a11yDelayBeforeClick-2' role='radio' class='uci_choix uci_inline "+(accessibilitytoolbar.userPref.get("a11yDelayBeforeClick") === "2" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+" >";
        attr_aide_motrice += accessibilitytoolbar.get('uci_label_2sec');
        attr_aide_motrice += "</li>";
        attr_aide_motrice += "<li id='uci_a11yDelayBeforeClick_3' role='radio' class='uci_choix uci_inline "+(accessibilitytoolbar.userPref.get("a11yDelayBeforeClick") === "3" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+" >";
        attr_aide_motrice += accessibilitytoolbar.get('uci_label_3sec');
        attr_aide_motrice += "</li>";
        attr_aide_motrice += "<li id='uci_a11yDelayBeforeClick_6' role='radio' class='uci_choix uci_inline "+(accessibilitytoolbar.userPref.get("a11yDelayBeforeClick") === "6" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+" >";
        attr_aide_motrice += accessibilitytoolbar.get('uci_label_6sec');
        attr_aide_motrice += "</li>";
        attr_aide_motrice += "</ul>";

        //gestion pas du mode rapide
        attr_aide_motrice += "<p class='uci_clear'></br>";
        attr_aide_motrice += accessibilitytoolbar.get('uci_legend_pasquickmode');
        attr_aide_motrice += "</p>";
        attr_aide_motrice += "<p>";
        attr_aide_motrice +=  accessibilitytoolbar.get('uci_help_quickmode');
        attr_aide_motrice += "</p>";
        attr_aide_motrice += "<ul class='uci_liste_bton' id='uci_reponses_a11yQuickMode' role='radiogroup' aria-labelledby='a11yQuickMode'>";
        attr_aide_motrice += "<li id='uci_a11yQuickMode_2' role='radio' class='uci_choix uci_inline "+(accessibilitytoolbar.userPref.get("a11yQuickMode") === "2" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+" >";
        attr_aide_motrice += accessibilitytoolbar.get('uci_label_2par2');
        attr_aide_motrice += "</li>";
        attr_aide_motrice += "<li id='uci_a11yQuickMode_5' role='radio' class='uci_choix uci_inline "+(accessibilitytoolbar.userPref.get("a11yQuickMode") === "5" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+" >";
        attr_aide_motrice += accessibilitytoolbar.get('uci_label_5par5');
        attr_aide_motrice += "</li>";
        attr_aide_motrice += "<li id='uci_a11yQuickMode_10' role='radio' class='uci_choix uci_inline "+(accessibilitytoolbar.userPref.get("a11yQuickMode") === "10" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+" >";
        attr_aide_motrice += accessibilitytoolbar.get('uci_label_10par10');
        attr_aide_motrice += "</li>";
        attr_aide_motrice += "</ul>";
        
        attr_aide_motrice += "</div>";
        attr_aide_motrice += "</div>"; //uci_motor_div_right
/******************************************************Fin parcours automatique des éléments cliquables******************************************************************/
        attr_aide_motrice += "</div>"; //uci_motor_general
        attr_aide_motrice += "</div>"; //uci_contenu_onglet_aidemotrice
        return attr_aide_motrice;
    },

    activate_aide_motrice: function () {
        if (document.getElementById('a11yMotorModeEnabled').checked) {
            document.getElementById('uci_motor_general').style.display = "block";
        } else {
            document.getElementById('uci_motor_general').style.display = "none";
        }
    }

}
// Source: app/js/UciCouleur.js
/**
    This file is part of Orange Confort+ | A centralized Javascript application to enable users to customize display and behaviour of websites to suit their advanced accessibility needs
    
    Copyright (C) 2014  Orange

    Orange Confort+ is free software; you can redistribute it and/or
    modify it under the terms of the GNU General Public License
    as published by the Free Software Foundation; either version 2
    of the License, or (at your option) any later version.

    Orange Confort+ is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details (LICENSE.txt file).
**/ 
/**
 * @class uci_couleur
 * @classdesc Cette classe permettra d'implémenter l'onglet couleur
 * @property {string}  attr_couleur : the string containt hinner html for couleur.
 */
/*global window */
/*global document: false */
/* global alert */
function UciCouleur() {

/*
     * @property
     * @private
     */
    var attr_onglet, attr_couleur;
    attr_couleur = "";

    var mesCouleurs=[
        ["#330000","#331900","#333300","#193300","#003300","#003319","#003333","#001933","#000033","#190033","#330033","#330019","#000000"],
        ["#990000","#994C00","#999900","#4C9900","#009900","#00994C","#009999","#004C99","#000099","#4C0099","#990099","#99004C","#404040"],
        ["#FF0000","#FF8000","#FFFF00","#80FF00","#00FF00","#00FF80","#00FFFF","#0080FF","#0000FF","#7F00FF","#FF00FF","#FF007F","#808080"],
        ["#FF6666","#FFB266","#FFFF66","#B2FF66","#66FF66","#66FFB2","#66FFFF","#66B2FF","#6666FF","#B266FF","#FF66FF","#FF66B2","#C0C0C0"],
        ["#FFCCCC","#FFE5CC","#FFFFCC","#E5FFCC","#CCFFCC","#CCFFE5","#CCFFFF","#CCE5FF","#CCCCFF","#E5CCFF","#FFCCFF","#FFCCE5","#FFFFFF"]
    ];
    /*
     * @constructor
     */
    UciCouleur.prototype.InitUciCouleur = function () {
        attr_couleur = "<div class='uci_contenu_onglet cdu_c' role='tabpanel' id='uci_contenu_onglet_couleur'>";
/*****************************************Creation de la partie gauche des couleurs*****************************************
 * Gestion de la partie des couleurs prédéfinies
*****************************************************************************************************************************/
        //couleur predefinie
        attr_couleur += "<div id='uci_div_couleur_predefinie'>";
        attr_couleur += "<input type='radio' name='a11yVisualSettings' value='predefined' id='uci_couleur_predefenie_input' "+(accessibilitytoolbar.userPref.get("a11yVisualSettings") === "predefined" ? " checked='checked'" : '')+"><label for='uci_couleur_predefenie_input'>";
        attr_couleur += accessibilitytoolbar.get('uci_color_titre');
        attr_couleur += "</label>";
       
        attr_couleur += "<ul class='uci_liste_bton' id='uci_reponses_couleurpredefinie' role='radiogroup' aria-labelledby='uci_couleur_predefenie_input'>";
        attr_couleur += "<!--[if IE 8 ]>";
        attr_couleur += "<li id='uci_a11yVisualPredefinedSettings_keepit' role='radio' class=' uci_choix ie8_uci_inline  "+(accessibilitytoolbar.userPref.get("a11yVisualPredefinedSettings") === "keepit" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+">";
        attr_couleur += accessibilitytoolbar.get('uci_title_color_default');
        attr_couleur += "</li>";
        attr_couleur += "<li id='uci_a11yVisualPredefinedSettings_blackonwhite' role='radio' class=' uci_choix ie8_uci_inline "+(accessibilitytoolbar.userPref.get("a11yVisualPredefinedSettings") === "blackonwhite" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+">";
        attr_couleur += accessibilitytoolbar.get('uci_title_color_blackandwhite');
        attr_couleur += "</li>";
        attr_couleur += "<li id='uci_a11yVisualPredefinedSettings_whiteonblack' role='radio' class=' uci_choix ie8_uci_inline "+(accessibilitytoolbar.userPref.get("a11yVisualPredefinedSettings") === "whiteonblack" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+">";
        attr_couleur += accessibilitytoolbar.get('uci_title_color_whiteandblack');
        attr_couleur += "</li>";
        attr_couleur += "<![endif]-->";
        attr_couleur += "<!--[if (!IE 8) | (!IE)]><!-->";        
        attr_couleur += "<li id='uci_a11yVisualPredefinedSettings_keepit' role='radio' class='uci_choix uci_inline  "+(accessibilitytoolbar.userPref.get("a11yVisualPredefinedSettings") === "keepit" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+">";
        attr_couleur += accessibilitytoolbar.get('uci_title_color_default');
        attr_couleur += "</li>";
        attr_couleur += "<li id='uci_a11yVisualPredefinedSettings_blackonwhite' role='radio' class='uci_choix uci_inline "+(accessibilitytoolbar.userPref.get("a11yVisualPredefinedSettings") === "blackonwhite" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+">";
        attr_couleur += accessibilitytoolbar.get('uci_title_color_blackandwhite');
        attr_couleur += "</li>";
        attr_couleur += "<li id='uci_a11yVisualPredefinedSettings_whiteonblack' role='radio' class='uci_choix uci_inline "+(accessibilitytoolbar.userPref.get("a11yVisualPredefinedSettings") === "whiteonblack" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+">";
        attr_couleur += accessibilitytoolbar.get('uci_title_color_whiteandblack');
        attr_couleur += "</li>";
        attr_couleur += "<!--<![endif]-->";
        attr_couleur += "</ul>";
        //gestion des message d'erreur de contraste et de luminosite
        attr_couleur += "<div id='uci_message_constraste' style='display:none;' class='message_couleur'>";
        attr_couleur += "<p style='color: black !important; background-color: #FFFFFF !important;'>";
        attr_couleur += accessibilitytoolbar.get("uci_color_warning_title");
        attr_couleur += "</p>";
        attr_couleur += "<span style='color: black !important; background-color: #FFFFFF !important;' id='uci_message_contraste_lbl'>";
        attr_couleur += accessibilitytoolbar.get('uci_color_warning_content');
        attr_couleur += "</span>";
        attr_couleur += "</div>";

        /*gestion message luminosite
        attr_couleur += "<div id='uci_message_luminosite' class='message_couleur' style='display:none'>";
        attr_couleur += "<h4>";
        attr_couleur += accessibilitytoolbar.get("uci_color_warning_title");
        attr_couleur += "</h4>";
        attr_couleur += "<label id='uci_message_luminosite_lbl'>";
        attr_couleur += accessibilitytoolbar.get('uci_color_warning_title');
        attr_couleur += "</label>";
        attr_couleur += "</div>";*/
        attr_couleur += "</div>";



        /*****************************************Creation de la partie gauche des couleurs*****************************************
 * Gestion de la partie des couleurs personnalisées
 *****************************************************************************************************************************/
        attr_couleur += "<div id='uci_div_right_couleur'>";
        attr_couleur += "<div><input type='radio' name='a11yVisualSettings' value='personnal' id='uci_couleur_personnalisees_input' "+(accessibilitytoolbar.userPref.get("a11yVisualSettings") === "personnal" ? " checked='checked'" : "")+"><label for='uci_couleur_personnalisees_input'>";
        attr_couleur += accessibilitytoolbar.get('uci_color_titre_use_personal');
        attr_couleur += "</label></div>";
        attr_couleur += "<div id='uci_couleur_police' class='cdu_c'>";
        attr_couleur += "<span id='aria_label_texte' >"+accessibilitytoolbar.get('uci_color_txt_texte')+"</span>";
        //couleur de police                
        var tableauCouleurPolice = "<ul class='uci_table_couleur cdu_c' id='uci_reponses_couleurpolice' role='radiogroup' aria-labelledby='aria_label_texte'>";
        var index = 0;
        var indexCouleur = 0;
        var currentLine = "";
        var moreclass = "";
        for (index = 0; index < mesCouleurs.length; ++index) {
            if(mesCouleurs[index] instanceof Array)
            {
                indexCouleur = 0;
                currentLine = mesCouleurs[index];
                for (indexCouleur = 0; indexCouleur < currentLine.length; ++indexCouleur) {
                    tableauCouleurPolice += "<li id='uci_a11yFontColor_"+currentLine[indexCouleur]+"' role='radio' class='uci_inline cdu_c uci_couleur_li "+moreclass+" "+(accessibilitytoolbar.userPref.get("a11yFontColor") === currentLine[indexCouleur] ? "uci_couleur_li_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+" style='background:"+currentLine[indexCouleur]+"!important; color:#FFF!important;'>&nbsp;";
                    tableauCouleurPolice += "</li>";
                    moreclass = "";
                }
                moreclass = "uci_couleur_clear";
            }
        }
        tableauCouleurPolice += '</ul>';        
        attr_couleur += tableauCouleurPolice;
        attr_couleur += "</div>";
        
        //Couleur de fond
        attr_couleur += "<div id='uci_couleur_fond' class='cdu_c'>";
        attr_couleur += "<span id='uci_aria_label_fond' class='uci_couleur_clear'>"+accessibilitytoolbar.get('uci_color_txt_background')+"</span>";
        var tableauCouleurFond = "<ul class='uci_table_couleur cdu_c' id='uci_reponses_couleurbackground' role='radiogroup' aria-labelledby='uci_aria_label_fond'>";
        var index = 0;
        var indexCouleur = 0;
        var currentLine = "";
        for (index = 0; index < mesCouleurs.length; ++index) {
            if(mesCouleurs[index] instanceof Array)
            {
                indexCouleur = 0;
                currentLine = mesCouleurs[index];
                for (indexCouleur = 0; indexCouleur < currentLine.length; ++indexCouleur) {
                    tableauCouleurFond += "<li id='uci_a11yBackgroundColor_"+currentLine[indexCouleur]+"' role='radio' class='uci_inline cdu_c uci_couleur_li "+moreclass+" "+(accessibilitytoolbar.userPref.get("a11yBackgroundColor") === currentLine[indexCouleur] ? "uci_couleur_li_selected' aria-checked='true' tabindex='0'" : "'aria-checked='false' tabindex='-1'")+" style='background:"+currentLine[indexCouleur]+"!important; color:#FFF!important;'>&nbsp;";                    
                    tableauCouleurFond += "</li>";
                    moreclass = "";
                }
                moreclass = "uci_couleur_clear";
            }
        }
        tableauCouleurFond += '</ul>';
        
        attr_couleur += tableauCouleurFond;
        attr_couleur += "</div>";
        attr_couleur += "</div>";
        attr_couleur += "</div>";
        return attr_couleur;
    };
}
// Source: app/js/UciApparence.js
/**
    This file is part of Orange Confort+ | A centralized Javascript application to enable users to customize display and behaviour of websites to suit their advanced accessibility needs
    
    Copyright (C) 2014  Orange

    Orange Confort+ is free software; you can redistribute it and/or
    modify it under the terms of the GNU General Public License
    as published by the Free Software Foundation; either version 2
    of the License, or (at your option) any later version.

    Orange Confort+ is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details (LICENSE.txt file).
**/ 
/**
 * @class uci_typographie
 * @classdesc Cette classe permettra d'implémenter l'onglet apparence
 * @property {string}  attr_apparence : the string containt hinner html for apparence.
 */
/*global window */
/*global document: false */
/* global alert */
UciApparence = {
    /**
     * @property
     * @private
     */
    attr_apparence: "",
    attr_onglet: "",
    attr_apparence: "",
    /*
     * @constructor init
     */

    mesCouleurs: [
        ["#330000","#331900","#333300","#193300","#003300","#003319","#003333","#001933","#000033","#190033","#330033","#330019","#000000"],
        ["#990000","#994C00","#999900","#4C9900","#009900","#00994C","#009999","#004C99","#000099","#4C0099","#990099","#99004C","#404040"],
        ["#FF0000","#FF8000","#FFFF00","#80FF00","#00FF00","#00FF80","#00FFFF","#0080FF","#0000FF","#7F00FF","#FF00FF","#FF007F","#808080"],
        ["#FF6666","#FFB266","#FFFF66","#B2FF66","#66FF66","#66FFB2","#66FFFF","#66B2FF","#6666FF","#B266FF","#FF66FF","#FF66B2","#C0C0C0"],
        ["#FFCCCC","#FFE5CC","#FFFFCC","#E5FFCC","#CCFFCC","#CCFFE5","#CCFFFF","#CCE5FF","#CCCCFF","#E5CCFF","#FFCCFF","#FFCCE5","#FFFFFF"]
    ],

    InitUciApparence: function () {
        attr_apparence = "<div class='uci_contenu_onglet cdu_c' role='tabpanel' id='uci_contenu_onglet_apparence'>";
/************************************gestion de la partie gauche********************************************************/
        attr_apparence += "<div id='uci_apparence_div_left'>";

        //Gestion de la mise en page : supprimer la mise en page
        attr_apparence += "<div id='uci_div_supprimer_miseenpage'>";

        attr_apparence += "<input type='checkbox' value='true' name='a11yLinearize'  id='a11yLinearize'";
        attr_apparence += accessibilitytoolbar.userPref.get("a11yLinearize") === "true" ? "checked='checked'" : "";
        attr_apparence += ">";
        attr_apparence += "<label for='a11yLinearize'>";
        attr_apparence += accessibilitytoolbar.get('uci_label_listmode');
        attr_apparence += "</label>";
        attr_apparence += "<a href='#' class='uci_link_help_bulle' role='presentation' id='uci_link_help_listmode'>";
        attr_apparence += "<span aria-hidden=\"true\" class=\"cdu-icon cdu-icon-help\"></span>";
        attr_apparence += "<span class='uci_span_help_bulle cdu_n' id='uci_help_listmode'><p>";
        attr_apparence += accessibilitytoolbar.get('uci_help_listmode');
        attr_apparence += "</p><span class='uci_fleche_help_bulle'></span></span></a>";
        attr_apparence += "</div>";

        //Gestion de la mise en page : alignement a gauche
        attr_apparence += "<div id='uci_div_alignement_gauche'>";
        attr_apparence += "<input type='checkbox' value='left' name='a11yLeftText' id='alignement_gauche'";
        attr_apparence += accessibilitytoolbar.userPref.get("a11yLeftText") === "left" ? "checked='checked'" : "";
        attr_apparence += ">";
        attr_apparence += "<label for='alignement_gauche'>";
        attr_apparence += accessibilitytoolbar.get('uci_label_alignleft');
        attr_apparence += "</label>";
        attr_apparence += "</div>";


        //Gestion de la mise en page : numerotation des ligne
        attr_apparence += "<div id='uci_div_numero_ligne'>";
        attr_apparence += "<input type='checkbox' value='decimal'  name='a11yNumerotationList' id='putNumOnList'";
        attr_apparence += accessibilitytoolbar.userPref.get("a11yNumerotationList") === "decimal" ? "checked='checked'" : "";
        attr_apparence += ">";
        attr_apparence += "<label for='putNumOnList'>";
        attr_apparence += accessibilitytoolbar.get('uci_label_putnumonlist');
        attr_apparence += "</label>";
        attr_apparence += "</div>";

        //gestion de l'apparence des liens
        attr_apparence += "<div id='uci_div_apparence_liens'>";
        attr_apparence += "<input type='checkbox' value='true' name='a11yNavLienEnabled' id='apparence_lien'";
        attr_apparence += accessibilitytoolbar.userPref.get("a11yNavLienEnabled") === "true" ? "checked='checked'" : "";
        attr_apparence += ">";
        attr_apparence += "<label for='apparence_lien'>";
        attr_apparence += accessibilitytoolbar.get('uci_titre_links');
        attr_apparence += "</label>";
        attr_apparence += "<a href='#' class='uci_link_help_bulle' role='presentation' id='uci_link_help_links'>";
        attr_apparence += "<span aria-hidden=\"true\" class=\"cdu-icon cdu-icon-help\"></span>";
        attr_apparence += "<span class='uci_span_help_bulle cdu_n' id='uci_help_links'><p>";
        attr_apparence += accessibilitytoolbar.get('uci_help_links');
        attr_apparence += "</p><span class='uci_fleche_help_bulle'></span></span></a>";
        attr_apparence += "</div>";

        //gestion du lien actif : couleur
        if(accessibilitytoolbar.userPref.get("a11yNavLienEnabled")=== "true"){
            attr_apparence += "<div id='uci_gestion_lien' style='display:block' >";
        }else {
            attr_apparence += "<div id='uci_gestion_lien' style='display:none' >";
        }

        attr_apparence += "<div id='uci_div_lien_selectionne'>";
        attr_apparence += "<span class='uci_span_lien cdu_c'>"+accessibilitytoolbar.get('uci_txt_active')+"</span>";        
        attr_apparence += "<div class='cdu_left'><a href='#' id='uci_NavLienSel' class='uci_inline uci_couleur_li' title=\""+accessibilitytoolbar.get('uci_title_link_active_color')+"\" style='background-color: "+accessibilitytoolbar.userPref.get("a11yNavLienSelColor")+"!important'>";
        attr_apparence += "<span class='cdu_n'>"+accessibilitytoolbar.get('uci_title_link_active_color')+"</span>";
        attr_apparence +="</a>";
        attr_apparence += "<div class='uci_span_help_bulle' id='uci_palette_couleur_lien_selectionne' style='display:none'>";
        //couleur de police
        var tableauCouleurPolice = "<ul class='uci_table_couleur cdu_c' id='uci_reponses_couleur_lien_sel' role='radiogroup' aria-labelledby='uci_a11yNavLienSelColor'>";
        var index = 0;
        var indexCouleur = 0;
        var currentLine = "";
        var moreclass = "";
        var focus_li;
        for (index = 0; index < UciApparence.mesCouleurs.length; ++index) {
            if(UciApparence.mesCouleurs[index] instanceof Array)
            {
                indexCouleur = 0;
                currentLine = UciApparence.mesCouleurs[index];
                for (indexCouleur = 0; indexCouleur < currentLine.length; ++indexCouleur) {
                    tableauCouleurPolice += "<li id='uci_a11yNavLienSelColor_"+currentLine[indexCouleur]+"' role='radio' class='uci_inline cdu_c uci_couleur_li cdu_c "+moreclass+" "+(accessibilitytoolbar.userPref.get("a11yNavLienSelColor") === currentLine[indexCouleur] ? "uci_couleur_li_selected' aria-checked='true' tabindex='0'" : "'aria-checked='false' tabindex='-1'")+" style='background:"+currentLine[indexCouleur]+"!important; color:#FFF!important;'>&nbsp;";
                    tableauCouleurPolice += "</li>";
                    moreclass = "";
                }
                moreclass = "uci_couleur_clear";
            }
        }
        tableauCouleurPolice += '</ul>';
        attr_apparence += tableauCouleurPolice;
        attr_apparence += "<span class='uci_fleche_help_bulle'></span></div></div>";
          


        //gestion du lien actif : mise en forme
        attr_apparence += "<div class='cdu_left'>";
        attr_apparence += "<select class='uci_select_lien' name='a11yNavLienSelStyle' title=\""+accessibilitytoolbar.get("uci_title_link_active_render")+"\">";
        attr_apparence += "<option value='keepit' "+(accessibilitytoolbar.userPref.get("a11yNavLienSelStyle") === "keepit" ? " selected" : "")+">";
        attr_apparence += accessibilitytoolbar.get('uci_link_render_options_default');
        attr_apparence += "</option>";
        attr_apparence += "<option value='underline' "+(accessibilitytoolbar.userPref.get("a11yNavLienSelStyle") === "underline" ? " selected" : "")+">";
        attr_apparence += accessibilitytoolbar.get('uci_link_render_options_underline');
        attr_apparence += "</option>";
        attr_apparence += "<option value='border' "+(accessibilitytoolbar.userPref.get("a11yNavLienSelStyle") === "border" ? " selected" : "")+">";
        attr_apparence += accessibilitytoolbar.get('uci_link_render_options_border');
        attr_apparence += "</option>";
        attr_apparence += "<option value='bold' "+(accessibilitytoolbar.userPref.get("a11yNavLienSelStyle") === "bold" ? " selected" : "")+">";
        attr_apparence += accessibilitytoolbar.get('uci_link_render_options_bold');
        attr_apparence += "</option>";
        attr_apparence += "</select>";
        attr_apparence += "</div>";
        attr_apparence += "</div>";

        //gestion des liens non visite
        //gestion des liens non visite : couleur 
        attr_apparence += "<div id='uci_div_lien_notselectionne'>";
        attr_apparence += "<span class='uci_span_lien cdu_c'>"+accessibilitytoolbar.get('uci_txt_notvisited')+"</span>";
        attr_apparence += "<div class='cdu_left'><a href='#' id='uci_NavLienNonVis' class='uci_inline uci_couleur_li' title=\""+accessibilitytoolbar.get('uci_title_link_notvisited_color')+"\" style='background-color: "+accessibilitytoolbar.userPref.get("a11yNavLienNonVisColor")+"!important'>";
        attr_apparence += "<span class='cdu_n'>"+accessibilitytoolbar.get('uci_title_link_notvisited_color')+"</span>";
        attr_apparence +="</a>";
        attr_apparence+= "<div class='uci_span_help_bulle' id='uci_palette_couleur_lien_notselectionne' style='display:none'>";        
        //couleur de police
        tableauCouleurPolice = "<ul class='uci_table_couleur cdu_c' id='uci_reponses_couleur_lien_notsel' role='radiogroup' aria-labelledby='uci_a11yNavLienNonVisColorSpan'>";
        index = 0;
        indexCouleur = 0;
        currentLine = "";
        moreclass = "";
        for (index = 0; index < UciApparence.mesCouleurs.length; ++index) {
            if(UciApparence.mesCouleurs[index] instanceof Array)
            {
                indexCouleur = 0;
                currentLine = UciApparence.mesCouleurs[index];
                for (indexCouleur = 0; indexCouleur < currentLine.length; ++indexCouleur) {
                    tableauCouleurPolice += "<li id='uci_a11yNavLienNonVisColor_"+currentLine[indexCouleur]+"' role='radio' class='uci_inline cdu_c uci_couleur_li "+moreclass+" "+(accessibilitytoolbar.userPref.get("a11yNavLienNonVisColor") === currentLine[indexCouleur] ? "uci_couleur_li_selected' aria-checked='true' tabindex='0'"  : "'aria-checked='false' tabindex='-1'")+" style='background:"+currentLine[indexCouleur]+"!important; color:#FFF!important;'>&nbsp;";

                    tableauCouleurPolice += "</li>";
                    moreclass = "";
                }
                moreclass = "uci_couleur_clear";
            }
        }
        tableauCouleurPolice += '</ul>';
        attr_apparence += tableauCouleurPolice;
        attr_apparence += "<span class='uci_fleche_help_bulle'></span></div></div>";
        //gestion des liens non visite : mise en forme
        attr_apparence += "<div class='cdu_left'>";
        attr_apparence += "<select class='uci_select_lien' name='a11yNavLienNonVisStyle' title=\""+accessibilitytoolbar.get("uci_title_link_notvisited_render")+"\">";
        attr_apparence += "<option value='keepit' "+(accessibilitytoolbar.userPref.get("a11yNavLienNonVisStyle") === "keepit" ? " selected" : "")+">";
        attr_apparence += accessibilitytoolbar.get('uci_link_render_options_default');
        attr_apparence += "</option>";
        attr_apparence += "<option value='underline' "+(accessibilitytoolbar.userPref.get("a11yNavLienNonVisStyle") === "underline" ? " selected" : "")+">";
        attr_apparence += accessibilitytoolbar.get('uci_link_render_options_underline');
        attr_apparence += "</option>";
        attr_apparence += "<option value='border' "+(accessibilitytoolbar.userPref.get("a11yNavLienNonVisStyle") === "border" ? " selected" : "")+">";
        attr_apparence += accessibilitytoolbar.get('uci_link_render_options_border');
        attr_apparence += "</option>";
        attr_apparence += "<option value='bold' "+(accessibilitytoolbar.userPref.get("a11yNavLienNonVisStyle") === "bold" ? " selected" : "")+">";
        attr_apparence += accessibilitytoolbar.get('uci_link_render_options_bold');
        attr_apparence += "</option>";
        attr_apparence += "</select>";
        attr_apparence += "</div>";
        attr_apparence += "</div>";

        //gestion des liens visités
        //gestion des liens visite : couleur
        
        
        attr_apparence += "<div id='uci_div_lien_visite'>";
        attr_apparence += "<span class='uci_span_lien cdu_c'>"+accessibilitytoolbar.get('uci_txt_visited')+"</span>";
        attr_apparence += "<div class='cdu_left'><a href='#' id='uci_NavLienVis' class='uci_inline uci_couleur_li' title=\""+accessibilitytoolbar.get('uci_title_link_visited_color')+"\" style='background-color: "+accessibilitytoolbar.userPref.get("a11yNavLienVisColor")+"!important'>";
        attr_apparence += "<span class='cdu_n'>"+accessibilitytoolbar.get('uci_title_link_visited_color')+"</span>";
        attr_apparence +="</a>";


        attr_apparence+= "<div class='uci_span_help_bulle' id='uci_palette_couleur_lien_visite' style='display:none'>";
        //couleur de police
        tableauCouleurPolice = "<ul class='uci_table_couleur cdu_c' id='uci_reponses_couleur_lien_visite' role='radiogroup' aria-labelledby='uci_a11yNavLienVisColorSpan'>";
        index = 0;
        indexCouleur = 0;
        currentLine = "";
        moreclass = "";
        for (index = 0; index < UciApparence.mesCouleurs.length; ++index) {
            if(UciApparence.mesCouleurs[index] instanceof Array)
            {
                indexCouleur = 0;
                currentLine = UciApparence.mesCouleurs[index];
                for (indexCouleur = 0; indexCouleur < currentLine.length; ++indexCouleur) {
                    tableauCouleurPolice += "<li id='uci_a11yNavLienVisColor_"+currentLine[indexCouleur]+"' role='radio' class='uci_inline cdu_c uci_couleur_li "+moreclass+" "+(accessibilitytoolbar.userPref.get("a11yNavLienVisColor") === currentLine[indexCouleur] ? "uci_couleur_li_selected' aria-checked='true' tabindex='0'" : "'aria-checked='false' tabindex='-1'")+" style='background:"+currentLine[indexCouleur]+"!important; color:#FFF!important;'>&nbsp;";
                    tableauCouleurPolice += "</li>";
                    moreclass = "";
                }
                moreclass = "uci_couleur_clear";
            }
        }
        tableauCouleurPolice += '</ul>';
        attr_apparence += tableauCouleurPolice;
        attr_apparence += "<span class='uci_fleche_help_bulle'></span></div></div>";           

        //gestion des liens visité : mise en forme
        attr_apparence += "<div class='cdu_left'>";
        attr_apparence += "<select class='uci_select_lien' name='a11yNavLienVisStyle' title=\""+accessibilitytoolbar.get("uci_title_link_visited_render")+"\">";
        attr_apparence += "<option value='keepit' "+(accessibilitytoolbar.userPref.get("a11yNavLienVisStyle") === "keepit" ? " selected" : "")+">";
        attr_apparence += accessibilitytoolbar.get('uci_link_render_options_default');
        attr_apparence += "</option>";
        attr_apparence += "<option value='underline' "+(accessibilitytoolbar.userPref.get("a11yNavLienVisStyle") === "underline" ? " selected" : "")+">";
        attr_apparence += accessibilitytoolbar.get('uci_link_render_options_underline');
        attr_apparence += "</option>";
        attr_apparence += "<option value='border' "+(accessibilitytoolbar.userPref.get("a11yNavLienVisStyle") === "border" ? " selected" : "")+">";
        attr_apparence += accessibilitytoolbar.get('uci_link_render_options_border');
        attr_apparence += "</option>";
        attr_apparence += "<option value='bold' "+(accessibilitytoolbar.userPref.get("a11yNavLienVisStyle") === "bold" ? " selected" : "")+">";
        attr_apparence += accessibilitytoolbar.get('uci_link_render_options_bold');
        attr_apparence += "</option>";
        attr_apparence += "</select>";
        attr_apparence += "</div>";
        attr_apparence += '</div>';
        attr_apparence += '</div>';

        //gestion de l'affichage de la règle
        attr_apparence += "<div id='uci_div_affichage_regle'>";

        attr_apparence += "<div id='uci_regle_enabled'>";
        if(accessibilitytoolbar.getCompatible('a11yRegleEnabled')) {
            attr_apparence += "<input value='true' name='a11yRegleEnabled' type='checkbox' id='uci_check_regle'";
            attr_apparence += (accessibilitytoolbar.userPref.get("a11yRegleEnabled") === "true" ? " checked='checked'>" : ">");
        } else {
            attr_apparence += "<input value='true' name='a11yRegleEnabled' type='checkbox' id='uci_check_regle' disabled>";        
        }
        attr_apparence += "<label for='uci_check_regle'>";
        attr_apparence += accessibilitytoolbar.get('uci_title_regle');
        attr_apparence += "</label>";
        attr_apparence += "<a href='#' class='uci_link_help_bulle' role='presentation' id='uci_link_help_regle'>";
        attr_apparence += "<span aria-hidden=\"true\" class=\"cdu-icon cdu-icon-help\"></span>";
        attr_apparence += "<span class='uci_span_help_bulle cdu_n' id='uci_help_regle'><p>";
        attr_apparence += accessibilitytoolbar.get('uci_help_regle');
        attr_apparence += "</p><span class='uci_fleche_help_bulle'></span></span></a>";
        attr_apparence += "</div>"; //uci_regle_enabled
        
        if(accessibilitytoolbar.getCompatible('a11yRegleEnabled')) {                  
            if(accessibilitytoolbar.userPref.get("a11yRegleEnabled") === 'true'){
                attr_apparence += "<div id='uci_div_regle' style='display:block'>";
            }else {
                attr_apparence += "<div id='uci_div_regle' style='display:none'>";
            }
            attr_apparence += "<div id='uci_div_regle_horizontal'>";
            attr_apparence += " <input type='checkbox' value='true' name='a11yRegleHorizontal' id='uci_check_regle_horizontal'";
            attr_apparence += (accessibilitytoolbar.userPref.get("a11yRegleHorizontal") === "true" ? " checked='checked'>" : ">");
            attr_apparence += "<label for='uci_check_regle_horizontal'>";
            attr_apparence += accessibilitytoolbar.get('uci_label_regle_horizontale');
            attr_apparence += "</label>";
            attr_apparence += "</div>";
    
            attr_apparence += "<div id='uci_div_regle_verticale' >";
            attr_apparence += " <input type='checkbox' value='true' name='a11yRegleVertical' id='uci_check_regle_verticale'";
            attr_apparence += (accessibilitytoolbar.userPref.get("a11yRegleVertical") === "true" ? " checked='checked'>" : ">");
            attr_apparence += "<label for='uci_check_regle_verticale'>";
            attr_apparence += accessibilitytoolbar.get('uci_label_regle_vertical');
            attr_apparence += "</label>";
            attr_apparence += "</div>";
    
            //gestion réglage de la règle
            attr_apparence += "<div id='uci_div_more_reglage_regle'>";
            //gestion couleur de la règle
            attr_apparence += "<div id='uci_regle_couleur'>";
            attr_apparence += "<span class='cdu_c uci_regle_couleur_span cdu_left'>"+accessibilitytoolbar.get('uci_txt_regle_color')+"</span>";
            attr_apparence += "<div class='cdu_left'><a href='#' id='uci_regle_couleur_lien' class='uci_inline uci_couleur_li' title=\""+accessibilitytoolbar.get('uci_txt_regle_color')+"\" style='background-color:"+accessibilitytoolbar.userPref.get("a11yRegleColor")+ "!important'>";
            attr_apparence += "<span class='cdu_n'>"+accessibilitytoolbar.get('uci_txt_regle_color')+"</span> ";
            attr_apparence +="</a>";
            attr_apparence+= "<div class='uci_span_help_bulle' id='uci_palette_couleur_regle' style='display:none'>";
            
            tableauCouleurPolice = "<ul class='uci_table_couleur cdu_c' id='uci_reponses_couleur_regle' role='radiogroup' aria-labelledby='uci_a11yRegleColorSpan'>";
            index = 0;
            indexCouleur = 0;
            currentLine = "";
            moreclass = "";
            for (index = 0; index < UciApparence.mesCouleurs.length; ++index) {
                if(UciApparence.mesCouleurs[index] instanceof Array)
                {
                    indexCouleur = 0;
                    currentLine = UciApparence.mesCouleurs[index];
                    for (indexCouleur = 0; indexCouleur < currentLine.length; ++indexCouleur) {
                        tableauCouleurPolice += "<li id='uci_a11yRegleColor_"+currentLine[indexCouleur]+"' role='radio' class='uci_inline cdu_c uci_couleur_li "+moreclass+" "+(accessibilitytoolbar.userPref.get("a11yRegleColor") === currentLine[indexCouleur] ? "uci_couleur_li_selected' aria-checked='true' tabindex='0'" : "'aria-checked='false' tabindex='-1'")+" style='background:"+currentLine[indexCouleur]+"!important; color:#FFF!important;'>&nbsp;";
                        tableauCouleurPolice += "</li>";
                        moreclass = "";
                    }
                    moreclass = "uci_couleur_clear";
                }
            }
            tableauCouleurPolice += '</ul>';
            attr_apparence += tableauCouleurPolice;
            attr_apparence += "<span class='uci_fleche_help_bulle'></span></div></div>";
            attr_apparence += "</div>";
            attr_apparence += "</div>";
            //epaisseur de la régle
            attr_apparence += "<div id='uci_regle_epaisseur'>";
    
            attr_apparence += "<span id='uci_title_epaisseur_regle' class='cdu_left'>";
            attr_apparence += accessibilitytoolbar.get('uci_txt_regle_size');
            attr_apparence += "</span>";
            attr_apparence += "<ul class='uci_liste_bton' id='uci_reponses_epaisseurregle' role='radiogroup' aria-labelledby='uci_title_epaisseur_regle'>";
            attr_apparence += "<li id='uci_a11yRegleEpaisseur_thin' role='radio' class='uci_choix uci_inline "+(accessibilitytoolbar.userPref.get("a11yRegleEpaisseur") === "thin" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+" >";
            attr_apparence += "<span>";
            attr_apparence += "<samp>-</samp>";
            attr_apparence += "<span class='cdu_n'>";
            attr_apparence +=  accessibilitytoolbar.get('uci_title_regle_thin');
            attr_apparence += "</span>";
            attr_apparence += "</span>";
            attr_apparence += "</li>";
            attr_apparence += "<li id='uci_a11yRegleEpaisseur_medium' role='radio' class='uci_choix uci_inline "+(accessibilitytoolbar.userPref.get("a11yRegleEpaisseur") === "medium" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+" >";
            attr_apparence += "<span>";
            attr_apparence += "<samp>-</samp>";
            attr_apparence += "<span class='cdu_n'>";
            attr_apparence += accessibilitytoolbar.get('uci_title_regle_medium');
            attr_apparence += "</span>";
            attr_apparence += "</span>";
            attr_apparence += "</li>";
            attr_apparence += "<li id='uci_a11yRegleEpaisseur_thick' role='radio' class='uci_choix uci_inline "+(accessibilitytoolbar.userPref.get("a11yRegleEpaisseur") === "thick" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+" >";
            attr_apparence += "<span>";
            attr_apparence += "<samp>-</samp>";
            attr_apparence += "<span class='cdu_n'>";
            attr_apparence +=  accessibilitytoolbar.get('uci_title_regle_big');
            attr_apparence += "</span>";
            attr_apparence += "</span>";
            attr_apparence += "</li>";
            attr_apparence += "</lu>";
            attr_apparence += "</div>";
            attr_apparence += "</div>"; //uci_div_regle
        }
        attr_apparence += "</div>"; //uci_div_affichage_regle
/*********************************************Fin de la partie gauche******************************************************/
        attr_apparence += "</div>"; //uci_apparence_div_left

/**********************************************Gestion de la partie de droite**********************************************/

        attr_apparence += "<div id='uci_apparence_div_right'>";
        //desactiver la transparence
        attr_apparence += "<div id='uci_div_desactiver_transparence'>";
        attr_apparence += "<input type='checkbox' value='1' name='a11ySupEffetTransp' id='uci_desactiver_transparence'";
        attr_apparence += accessibilitytoolbar.userPref.get("a11ySupEffetTransp") === "1" ? "checked='checked'" : "";
        attr_apparence += ">";
        attr_apparence += "<label for='uci_desactiver_transparence'>";
        attr_apparence += accessibilitytoolbar.get('uci_label_disabletransp');
        attr_apparence += "</label>";
        attr_apparence += "<a href='#' class='uci_link_help_bulle' role='presentation' id='uci_link_help_disabletransp'>";
        attr_apparence += "<span aria-hidden=\"true\" class=\"cdu-icon cdu-icon-help\"></span>";
        attr_apparence += "<span class='uci_span_help_bulle cdu_n' id='uci_help_disabletransp'><p>";
        attr_apparence += accessibilitytoolbar.get('uci_help_disabletransp');
        attr_apparence += "</p><span class='uci_fleche_help_bulle'></span></span></a>";
        attr_apparence += "</div>";

        //debut gestion de la désactivation des images de fond
        attr_apparence += "<div id='uci_div_disabled_fond_picture'>";
        attr_apparence += "<input type='checkbox' value='true' name='a11ySupImageFont' id='uci_label_disablebgpictures'";
        attr_apparence += accessibilitytoolbar.userPref.get("a11ySupImageFont") === "true" ? "checked='checked'" : "";
        attr_apparence += ">";
        attr_apparence += "<label for='uci_label_disablebgpictures'>";
        attr_apparence += accessibilitytoolbar.get('uci_label_disablebgpictures');
        attr_apparence += "</label>";
        attr_apparence += "</div>";

        //debut gestion de la désactivation des images de premier plan
        attr_apparence += "<div id='uci_div_disabled_first_plan_picture'>";
        attr_apparence += "<input type='checkbox' value='true' name='a11ySupImageFirstPlan' id='uci_label_disablepppictures' ";
        attr_apparence += accessibilitytoolbar.userPref.get("a11ySupImageFirstPlan") === "true" ? "checked='checked'" : "";
        attr_apparence += ">";
        attr_apparence += "<label for='uci_label_disablepppictures'>";
        attr_apparence += accessibilitytoolbar.get('uci_label_disablepppictures');
        attr_apparence += "</label >";
        attr_apparence += "<a href='#' class='uci_link_help_bulle' role='presentation' id='uci_link_help_disablepppictures'>";
        attr_apparence += "<span aria-hidden=\"true\" class=\"cdu-icon cdu-icon-help\"></span>";
        attr_apparence += "<span class='uci_span_help_bulle cdu_n' id='uci_help_disablepppictures'><p>";
        attr_apparence += accessibilitytoolbar.get('uci_help_disablepppictures');
        attr_apparence += "</p><span class='uci_fleche_help_bulle'></span></span></a>";
        attr_apparence += "</div>";
/**********************************************Fin de la partie de droite*************************************************/
        attr_apparence += "</div>";
/*************************************************Fin de la partie apparence**********************************************/
        attr_apparence += "</div>";
        return attr_apparence;
    },

    displayLien: function (elementparent,id) {

            if (document.getElementById(elementparent).checked) {
                document.getElementById(id).style.display = "block";
            }else {
                document.getElementById(id).style.display = "none";
            }
    },

    displayLienCouleur: function (id) {
        if (document.getElementById(id).style.display === "none") {
            document.getElementById(id).style.display = "block";
            document.getElementById(id).focus();
        }else {
        	
            UciApparence.hideLienCouleur(id);
        }
    },

    hideLienCouleur: function (id) {
            document.getElementById(id).style.display = "none";
    },

    uciFermetureOverlay: function(_event_, id) {
    	var winObj="";
        if ( window.event )
            winObj = window.event;
        // --- Netscape and other explorers
        else
            winObj = _event_;

        var intKeyCode = winObj.keyCode;
        if (intKeyCode ===13 || intKeyCode ===27){
            document.getElementById(id).style.display = "none";
        }
    }
}
// Source: app/js/UciTypographie.js
/**
    This file is part of Orange Confort+ | A centralized Javascript application to enable users to customize display and behaviour of websites to suit their advanced accessibility needs
    
    Copyright (C) 2014  Orange

    Orange Confort+ is free software; you can redistribute it and/or
    modify it under the terms of the GNU General Public License
    as published by the Free Software Foundation; either version 2
    of the License, or (at your option) any later version.

    Orange Confort+ is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details (LICENSE.txt file).
**/ 
/**
 * @class uci_typographie
 * @classdesc Cette classe permettra d'implémenter l'onglet typographie
 */
/*global window */
/*global document: false */
/* global alert */
UciTypographie = {
    /*
    * @property
    * @private
     */
    attr_typography: "",
    /*
     * @constructor
     */
    InitUciTypographie: function () {
        attr_typography = "<div class='uci_contenu_onglet cdu_c' role='tabpanel' id='uci_contenu_onglet_typographie' style='display: block'>";

/************************************gestion de la partie gauche********************************************************/
        attr_typography += "<div id='uci_typo_div_left' class='cdu_c'>";
        /*gestion de la taille de police*/
        attr_typography += "<div class='uci_aria_button_group cdu_c'>";
        attr_typography += "<span class='cdu_left'>";
        attr_typography += accessibilitytoolbar.get('uci_typo_titre_fontsize');
        attr_typography += "</span>";
        attr_typography += "<ul class='uci_liste_bton' id='uci_reponses_bigger' role='radiogroup'>";
        attr_typography += "<li id='uci_a11yBigger_keepit' role='radio' class='uci_choix uci_inline "+(accessibilitytoolbar.userPref.get("a11yBigger") === "keepit" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+" title=\""+accessibilitytoolbar.get('uci_title_fontsize_radio_normal')+"\">";
        attr_typography += "<span>";
        attr_typography += "A";
        attr_typography += "<span class='cdu_n'>";
        attr_typography +=  accessibilitytoolbar.get('uci_title_fontsize_radio_normal');
        attr_typography += "</span>";
        attr_typography += "</span>";
        attr_typography += "</li>";
        attr_typography += "<li id='uci_a11yBigger_150' role='radio' class='uci_choix uci_inline "+(accessibilitytoolbar.userPref.get("a11yBigger") === "150" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+" title=\""+accessibilitytoolbar.get('uci_title_fontsize_radio_medium')+"\">";
        attr_typography += "<span>";
        attr_typography += "A";
        attr_typography += "<span class='cdu_n'>";
        attr_typography +=  accessibilitytoolbar.get('uci_title_fontsize_radio_medium');
        attr_typography += "</span>";
        attr_typography += "</span>";
        attr_typography += "</li>";
        attr_typography += "<li id='uci_a11yBigger_200' role='radio' class='uci_choix uci_inline "+(accessibilitytoolbar.userPref.get("a11yBigger") === "200" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+" title=\""+accessibilitytoolbar.get('uci_title_fontsize_radio_large')+"\">";
        attr_typography += "<span>";
        attr_typography += "A";
        attr_typography += "<span class='cdu_n'>";
        attr_typography +=  accessibilitytoolbar.get('uci_title_fontsize_radio_large');
        attr_typography += "</span>";
        attr_typography += "</span>";
        attr_typography += "</li>";
        attr_typography += "</ul>";
        attr_typography += "</div>";
        //gestion de l'espacement entre les mots            
        attr_typography += "<div id='uci_typo_espacement_mot' class='uci_aria_button_group cdu_c uci_clear'>";
        attr_typography += "<span id='uci_espacement_word_aria_label' class='cdu_left'>";
        attr_typography += accessibilitytoolbar.get('uci_typo_titre_wordspacing');
        attr_typography += "</span>";
        attr_typography += "<ul class='uci_liste_bton' id='uci_reponses_wordspacing' role='radiogroup' aria-labelledby='uci_espacement_word_aria_label'>";
        attr_typography += "<li id='uci_a11ySpacement_keepit' role='radio' class='uci_choix uci_inline "+(accessibilitytoolbar.userPref.get("a11ySpacement") === "keepit" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+" title=\""+accessibilitytoolbar.get('uci_title_wordspacing_radio_normal')+"\">";
        attr_typography += accessibilitytoolbar.get('uci_radio_default');  
        attr_typography += "</li>";
        attr_typography += "<li id='uci_a11ySpacement_0.5' role='radio' class='uci_choix uci_inline "+(accessibilitytoolbar.userPref.get("a11ySpacement") === "0.5" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+" title=\""+accessibilitytoolbar.get('uci_title_wordspacing_radio_medium')+"\">";
        attr_typography += accessibilitytoolbar.get('uci_radio_medium');     
        attr_typography += "</li>";
        attr_typography += "<li id='uci_a11ySpacement_1' role='radio' class='uci_choix uci_inline "+(accessibilitytoolbar.userPref.get("a11ySpacement") === "1" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+" title=\""+accessibilitytoolbar.get('uci_title_wordspacing_radio_large')+"\">";
        attr_typography += accessibilitytoolbar.get('uci_radio_large');
        attr_typography += "</li>";
        attr_typography += "</ul>";
        attr_typography += "</div>";
/******************************************************Fin partie de gauche**************************************************/
        attr_typography += "</div>";
/************************************gestion de la partie centrale********************************************************/
        attr_typography += "<div id='uci_typo_div_centre' class='cdu_c'>";

        // gestion de l'espacement entre les caractère
        attr_typography += "<div class='uci_aria_button_group cdu_c'>";
        attr_typography += "<span id='uci_typo_font_caractere' class='cdu_left'>";
        attr_typography += accessibilitytoolbar.get('uci_typo_titre_charspacing');
        attr_typography += "</span>";
        attr_typography += "<ul class='uci_liste_bton' id='uci_reponses_charspacing' role='radiogroup' aria-labelledby='uci_typo_font_caractere'>";
        attr_typography += "<li id='uci_a11yCharSpacement_keepit' role='radio' class='uci_choix uci_inline "+(accessibilitytoolbar.userPref.get("a11yCharSpacement") === "keepit" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+" title=\""+accessibilitytoolbar.get('uci_title_charspacing_radio_normal')+"\">";
        attr_typography += accessibilitytoolbar.get('uci_radio_default');  
        attr_typography += "</li>";
        attr_typography += "<li id='uci_a11yCharSpacement_0.2' role='radio' class='uci_choix uci_inline "+(accessibilitytoolbar.userPref.get("a11yCharSpacement") === "0.2" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+" title=\""+accessibilitytoolbar.get('uci_title_charspacing_radio_medium')+"\">";  
        attr_typography += accessibilitytoolbar.get('uci_radio_medium');     
        attr_typography += "</li>";
        attr_typography += "<li id='uci_a11yCharSpacement_0.5' role='radio' class='uci_choix uci_inline "+(accessibilitytoolbar.userPref.get("a11yCharSpacement") === "0.5" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+" title=\""+accessibilitytoolbar.get('uci_title_charspacing_radio_large')+"\">";
        attr_typography += accessibilitytoolbar.get('uci_radio_large');
        attr_typography += "</li>";
        attr_typography += "</ul>";
        attr_typography += "</div>";
        // gestion espacement entre les lignes
        attr_typography += "<div id='uci_typo_spacement_line' class='uci_aria_button_group cdu_c uci_clear'>";        
        attr_typography += "<span id='uci_typo_spacement_line_aria_label' class='cdu_left'>";
        attr_typography += accessibilitytoolbar.get('uci_typo_titre_linespacing');
        attr_typography += "</span>";
        attr_typography += "<ul class='uci_liste_bton' id='uci_reponses_linespacement' role='radiogroup' aria-labelledby='uci_typo_spacement_line_aria_label'>";
        attr_typography += "<li id='uci_a11yLineSpacement_keepit' role='radio' class='uci_choix uci_inline "+(accessibilitytoolbar.userPref.get("a11yLineSpacement") === "keepit" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+" title=\""+accessibilitytoolbar.get('uci_title_linespacing_radio_normal')+"\">";       
        attr_typography += accessibilitytoolbar.get('uci_radio_default');  
        attr_typography += "</li>";
        attr_typography += "<li id='uci_a11yLineSpacement_2' role='radio' class='uci_choix uci_inline "+(accessibilitytoolbar.userPref.get("a11yLineSpacement") === "2" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+" title=\""+accessibilitytoolbar.get('uci_title_linespacing_radio_medium')+"\">";         
        attr_typography += accessibilitytoolbar.get('uci_radio_medium');
        attr_typography += "</li>";
        attr_typography += "<li id='uci_a11yLineSpacement_3' role='radio' class='uci_choix uci_inline "+(accessibilitytoolbar.userPref.get("a11yLineSpacement") === "3" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+" title=\""+accessibilitytoolbar.get('uci_title_linespacing_radio_large')+"\">";    
        attr_typography += accessibilitytoolbar.get('uci_radio_large');
        attr_typography += "</li>";
        attr_typography += "</ul>";
        attr_typography += "</div>";
/************************************Fin de la partie centrale*************************************************************/
        attr_typography += "</div>";
/***************************************Debut de la partie droite*************************************************************/
        attr_typography += "<div id='uci_typo_div_right' class='cdu_c'>";


        // Gestion de la police à utiliser pour les dysléxique
        attr_typography += "<div id='uci_typo_dyslexy_font' class='uci_aria_button_group cdu_c'>";
        attr_typography += "<div id='box-a11yDyslexyFontEnabled_off'>" ;
        
        if(accessibilitytoolbar.getCompatible('a11yDyslexyFontEnabled')) {
            attr_typography += "<input type='checkbox' value='on' name='a11yDyslexyFontEnabled' id='uci_chekbox_dyslexy_font' "+(accessibilitytoolbar.userPref.get("a11yDyslexyFontEnabled") === "on" ? " checked='checked'" : "")+">";
            attr_typography += "<label for='uci_chekbox_dyslexy_font' id='uci_title_typographie'>";
        } else {
            attr_typography += "<input type='checkbox' value='on' name='a11yDyslexyFontEnabled' id='uci_chekbox_dyslexy_font' disabled>";
            attr_typography += "<label for='uci_chekbox_dyslexy_font' id='uci_title_typographie' class='uci_disable_label'>";
        }                
        attr_typography +=  accessibilitytoolbar.get('uci_typo_titre_fontfamily');
        attr_typography += "</label>";
        attr_typography += "<a href='#' class='uci_link_help_bulle' role='presentation' id='uci_link_help_fontfamily'>";
        attr_typography += "<span aria-hidden=\"true\" class=\"cdu-icon cdu-icon-help\"></span>";
        attr_typography += "<span class='uci_span_help_bulle cdu_n' id='uci_typo_help_fontfamily'><p>";
        attr_typography += accessibilitytoolbar.get('uci_typo_help_fontfamily');
        attr_typography += "</p><span class='uci_fleche_help_bulle'></span></span></a>";
        attr_typography += "</div>";
        
        // only if compatible
        if(accessibilitytoolbar.getCompatible('a11yDyslexyFontEnabled')) {
            if (accessibilitytoolbar.userPref.get("a11yDyslexyFontEnabled") === "on"){
                attr_typography += "<div id='uci_fieldset_fontfamily' style='display:block'>";
            }else {
                attr_typography += "<div id='uci_fieldset_fontfamily' style='display:none'>";
            }
    
            attr_typography += "<span class='cdu_n'>";
            attr_typography += accessibilitytoolbar.get('uci_typo_titre_fontfamily');
            attr_typography += "</span>";
            
            attr_typography += "<ul class='uci_liste_bton' id='uci_reponses_fontfamily' role='radiogroup' aria-labelledby='uci_title_typographie'>";
            attr_typography += "<li id='uci_a11yDyslexyFont_arial' role='radio' class='uci_choix uci_inline "+(accessibilitytoolbar.userPref.get("a11yDyslexyFont") === "arial" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+" title=\""+accessibilitytoolbar.get('uci_title_fontfamily_radio_arial')+"\">";
            attr_typography += "Arial";
            attr_typography += "</li>";
            attr_typography += "<li id='uci_a11yDyslexyFont_opendyslexic' role='radio' class='uci_choix uci_inline "+(accessibilitytoolbar.userPref.get("a11yDyslexyFont") === "opendyslexic" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+" title=\""+accessibilitytoolbar.get('uci_title_fontfamily_radio_opendys')+"\">";
            attr_typography += "Open Dyslexic";
            attr_typography += "</li>";
            attr_typography += "</ul>";
            attr_typography += "</div>"; //uci_fieldset_fontfamily
        }
        attr_typography += "</div>";
        // Gestion de la casse du texte
        attr_typography += "<div id='uci_typo_modif_casse' class='uci_aria_button_group cdu_c uci_clear'>";
        attr_typography += "<div id='box-a11yModifCasseEnabled_off'>";
        attr_typography += "<input type='checkbox' name='a11yModifCasseEnabled' id='uci_chekbox_casse'"+(accessibilitytoolbar.userPref.get("a11yModifCasseEnabled") === "on" ? " checked='checked'" : "")+">";
        attr_typography += "<label for='uci_chekbox_casse'>";
        attr_typography += "<span>";
        attr_typography +=  accessibilitytoolbar.get('uci_typo_titre_changecase');
        attr_typography += "</span>";
        attr_typography += "</label>";
        attr_typography += "<a href='#' class='uci_link_help_bulle' role='presentation' id='uci_link_help_changecase'>";
        attr_typography += "<span aria-hidden=\"true\" class=\"cdu-icon cdu-icon-help\"></span>";
        attr_typography += "<span class='uci_span_help_bulle cdu_n' id='uci_typo_help_changecase'><p>";
        attr_typography += accessibilitytoolbar.get('uci_typo_help_changecase');
        attr_typography += "</p><span class='uci_fleche_help_bulle'></span></span></a>";
        attr_typography += "</div>";
        if (accessibilitytoolbar.userPref.get("a11yModifCasseEnabled") === "on"){
            attr_typography += "<div id='uci_fieldset_changecasse' style='display:block'>";
        }else {
            attr_typography += "<div id='uci_fieldset_changecasse' style='display:none'>";
        }
        attr_typography += "<span class='cdu_n'>";
        attr_typography += accessibilitytoolbar.get('uci_typo_titre_changecase');
        attr_typography += "</span>";
        attr_typography += "<ul class='uci_liste_bton' id='uci_reponses_changecasse' role='radiogroup' aria-labelledby='uci_fieldset_changecasse'>";
        attr_typography += "<li id='uci_a11yModifCasse_capitalize' role='radio' class='uci_choix uci_inline "+(accessibilitytoolbar.userPref.get("a11yModifCasse") === "capitalize" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+" >";
        attr_typography +=  accessibilitytoolbar.get('uci_changecase_firstlettre');
        attr_typography += "</li>";
        attr_typography += "<li id='uci_a11yModifCasse_uppercase' role='radio' class='uci_choix uci_inline "+(accessibilitytoolbar.userPref.get("a11yModifCasse") === "uppercase" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+" >";
        attr_typography += accessibilitytoolbar.get('uci_changecase_toupper');
        attr_typography += "</li>";
        attr_typography += "<li id='uci_a11yModifCasse_lowercase' role='radio' class='uci_choix uci_inline "+(accessibilitytoolbar.userPref.get("a11yModifCasse") === "lowercase" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+" >";
        attr_typography += accessibilitytoolbar.get('uci_changecase_tolower');
        attr_typography += "</li>";
        attr_typography += "</ul>";
        attr_typography += "</div>";
        attr_typography += "</div>";
/***************************************Fin de la partie droite*************************************************************/
        attr_typography += "</div>";
/***************************************Fin de la partie Typographie********************************************************/
        attr_typography += "</div>";
        return attr_typography;
    },

    displayFieldset: function (id) {
        if (document.getElementById(id).style.display === "none") {
            document.getElementById(id).style.display = "block";
        } else {
            document.getElementById(id).style.display = "none";
        }
    }
    
    


}

// Source: app/js/UciValidation.js
/**
    This file is part of Orange Confort+ | A centralized Javascript application to enable users to customize display and behaviour of websites to suit their advanced accessibility needs
    
    Copyright (C) 2014  Orange

    Orange Confort+ is free software; you can redistribute it and/or
    modify it under the terms of the GNU General Public License
    as published by the Free Software Foundation; either version 2
    of the License, or (at your option) any later version.

    Orange Confort+ is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details (LICENSE.txt file).
**/ 
/**
 * @class uci_validation
 * @classdesc Cette classe permettra d'implémenter la validation
 * @property {string}  attr_aide_motrice : the string containt hinner html for aide motrice.
 */
/*global window */
/*global document: false */
/* global alert */
UciValidation = {
    /**
     * @property
     * @private
     */
    attr_validation: "",
    /*
     * @constructor init
     */
    InitUciValidation: function () {
        this.attr_validation = "<div id='uci_validation_button'>";
        this.attr_validation += "<input type='submit' class='uci_button_valider' id='uci_valider' value=\""+accessibilitytoolbar.get('uci_button_valid')+"\" />";
        this.attr_validation += "<input type='reset' class='uci_button_reset' id='uci_annuler' value=\""+accessibilitytoolbar.get('uci_button_cancel')+"\" />";
        this.attr_validation += "</div>";
        return this.attr_validation;
    },

    Validation: function (/*event*/e) {
        var event = e || window.event;
        if (event && event.stopPropagation) {
            event.stopPropagation();
            event.preventDefault();
        } else if (window.event) {
            window.event.cancelBubble = true;
            window.eventReturnValue = false;
        }
        document.getElementById("uci-onoffswitch").focus();
        
        accessibilitytoolbar.setCSS();
        accessibilitytoolbar.hasDoneSettings = true;
        accessibilitytoolbar.saveUserPref();
        document.getElementById('uci_validation').className = "cdu_n";
        UciIhm.hide_more_confort();
        return false;
    },

    Annulation: function () {
        document.getElementById("uci-onoffswitch").focus();
        accessibilitytoolbar.userPref.decode(accessibilitytoolbar.userPref.storedValue);
        // Keep the toolbar open
        accessibilitytoolbar.userPref.set('a11yToolbarEnable','on');
        accessibilitytoolbar.reloadToolbar();
        return false;
    }
}
// Source: app/js/UciIhm.js
/**
    This file is part of Orange Confort+ | A centralized Javascript application to enable users to customize display and behaviour of websites to suit their advanced accessibility needs
    
    Copyright (C) 2014  Orange

    Orange Confort+ is free software; you can redistribute it and/or
    modify it under the terms of the GNU General Public License
    as published by the Free Software Foundation; either version 2
    of the License, or (at your option) any later version.

    Orange Confort+ is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details (LICENSE.txt file).
**/ 
/**
 * @class IHM
 * @classdesc Cette classe permettra de gérer les appels des onglets de la toolbar
 */
/*global window */
/*global document: false */
/* global alert */
/**
 * @class Entry point for the accessibility tool-bar
 */
UciIhm = {
    /*
     * @public
     * @constructor
     * 	constructor uci_ihm() : Constructeur de la class uciIhm
     *
     */
    InitUciIHM: function () {
        var attr_ihm = "<div class='cdu_c'>";
        attr_ihm += "<div id='uci_toolbar-quick' class='cdu_c'>";
        /****************************Integration dans la toolbar du menu de gauche********************************************
         * Mise en place du lien "masquer la barre", qui permettra de masquer la barre du confort d'utilisateur
         * Mise en place du logo " + de confort" pour donner identité graphique à la barre de confort
         * *********************************************************************************************************************/

        attr_ihm += "<div class='uci_logo_plus_de_confort cdu_c'>";
        attr_ihm += "<h1 class='uci_alt_logo'>";
        attr_ihm += accessibilitytoolbar.get('uci_serv_name')+'<span class="uci-plus-orange">+</span>';
        attr_ihm += "</h1>"+        
            "<div class='cdu_c uci-onoffswitch'>"+
                "<a class='"+(accessibilitytoolbar.userPref.get("a11ySiteWebEnabled") === "on"?"uci-onoffswitch-label-on' title=\""+accessibilitytoolbar.get('uci_title_disable_cdu')+"\"":"uci-onoffswitch-label' title=\""+accessibilitytoolbar.get('uci_title_enable_cdu')+"\"")+" id='uci-onoffswitch' href='#'>"+
                    "<span class='uci-onoffswitch-inner-before'>ON</span>"+
                    "<span class='uci-onoffswitch-switch'></span>"+
                    "<span class='uci-onoffswitch-inner-after'>OFF</span>"+
                "</a>"+
            "</div>";
    
        attr_ihm += "</div>";
        attr_ihm += "<div class='uci_right'>";
        
        attr_ihm += "<!--[if IE 7 ]>";
            attr_ihm += "<div id='uci_left_toolbar' class='cdu_c uci_notmask ie7'";
            if (accessibilitytoolbar.userPref.get('a11ySiteWebEnabled') !== "on") {            
                attr_ihm += " style='display:none'";
            }
            attr_ihm += ">";
        attr_ihm += "<![endif]-->";
        attr_ihm += "<!--[if (gte IE 8) | (!IE)]><!-->";
            attr_ihm += "<div id='uci_left_toolbar' class='cdu_c uci_notmask'";
            if (accessibilitytoolbar.userPref.get('a11ySiteWebEnabled') !== "on") {            
                attr_ihm += " style='display:none'";
            }
            attr_ihm += ">";    
        attr_ihm += "<!--<![endif]-->";
        
        /***************************************Fin menu de gauche*************************************************************/

        /**********************************************Menu central de la toolbar**********************************************
         * Mise en place des choix rapides concernant les tailles de police : 3 choix possibles
         * Mise en place des choix rapides concernant les contraste de couleur de police et d'arriere plan : 2 choix possibles
         * Mise en place du lien " + plus de confort" pour permettre l'ouverture complète aux options du CDU
         ***********************************************************************************************************************/
        /*
         * gestion de la police
         */
        attr_ihm += "<ul class='uci_liste_bton cdu_c' id='uci_reponses_bigger_quick_set' role='radiogroup'>";
        attr_ihm += "<li id='uci_quick_a11yBigger_keepit' role='radio' class='uci_choix uci_inline "+(accessibilitytoolbar.userPref.get("a11yBigger") === "keepit" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+" title=\""+accessibilitytoolbar.get('uci_title_fontsize_radio_normal')+"\">";
        attr_ihm += "<span>";
        attr_ihm += "A";
        attr_ihm += "<span class=\"cdu_n\">";
        attr_ihm +=  accessibilitytoolbar.get('uci_title_fontsize_radio_normal');
        attr_ihm += "</span>";
        attr_ihm += "</span>";
        attr_ihm += "</li>";
        attr_ihm += "<li id='uci_quick_a11yBigger_150' role='radio' class='uci_choix uci_inline "+(accessibilitytoolbar.userPref.get("a11yBigger") === "150" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+" title=\""+accessibilitytoolbar.get('uci_title_fontsize_radio_medium')+"\">";
        attr_ihm += "<span>";
        attr_ihm += "A";
        attr_ihm += "<span class=\"cdu_n\">";
        attr_ihm +=  accessibilitytoolbar.get('uci_title_fontsize_radio_medium');
        attr_ihm += "</span>";
        attr_ihm += "</span>";
        attr_ihm += "</li>";
        attr_ihm += "<li id='uci_quick_a11yBigger_200' role='radio' class='uci_choix uci_inline "+(accessibilitytoolbar.userPref.get("a11yBigger") === "200" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+" title=\""+accessibilitytoolbar.get('uci_title_fontsize_radio_large')+"\">";
        attr_ihm += "<span>";
        attr_ihm += "A";
        attr_ihm += "<span class=\"cdu_n\">";
        attr_ihm +=  accessibilitytoolbar.get('uci_title_fontsize_radio_large');
        attr_ihm += "</span>";
        attr_ihm += "</span>";
        attr_ihm += "</li>";
        attr_ihm += "</ul>";
        /**
         * Gestion des couleurs
         */
        attr_ihm += "<ul class='uci_liste_bton cdu_c' id='uci_reponses_couleurpredefinie_quick_set' role='radiogroup'>";
        attr_ihm += "<li id='uci_quick_a11yVisualPredefinedSettings_keepit' role='radio' class='uci_choix uci_inline "+(accessibilitytoolbar.userPref.get("a11yVisualPredefinedSettings") === "keepit" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+" title=\""+accessibilitytoolbar.get('uci_title_color_default')+"\">";
        attr_ihm += "<span class='cdu_n'>"+accessibilitytoolbar.get('uci_title_color_default')+"</span>";
        if(accessibilitytoolbar.isModern) {
	        attr_ihm += UciIhm.displayIconPalette('0 -5 36 36');
        } else {
        	attr_ihm += "<span aria-hidden=\"true\" class=\"cdu-icon cdu-icon-test\"><span class=\"cdu-icon path1\"></span><span class=\"cdu-icon path2\"></span><span class=\"cdu-icon path3\"></span><span class=\"cdu-icon path4\"></span><span class=\"cdu-icon path5\"></span><span class=\"cdu-icon path6\"></span><span class=\"cdu-icon path7\"></span><span class=\"cdu-icon path8\"></span><span class=\"cdu-icon path9\"></span><span class=\"cdu-icon path10\"></span></span>";
        }
        attr_ihm += "</li>";
        attr_ihm += "<li id='uci_quick_a11yVisualPredefinedSettings_blackonwhite' role='radio' class='uci_choix uci_inline "+(accessibilitytoolbar.userPref.get("a11yVisualPredefinedSettings") === "blackonwhite" ? "uci_choix_selected' aria-checked='true' tabindex='0'" : "' aria-checked='false' tabindex='-1'")+" title=\""+accessibilitytoolbar.get('uci_title_color_blackandwhite')+"\">";
        attr_ihm += "<span class='cdu_n'>"+accessibilitytoolbar.get('uci_title_color_blackandwhite')+"</span>";
        if(accessibilitytoolbar.isModern) {
	        attr_ihm += UciIhm.displayIconPalette('0 -5 36 36');
        } else {
        	attr_ihm += "<span aria-hidden=\"true\" class=\"cdu-icon cdu-icon-test\"><span class=\"cdu-icon path1\"></span><span class=\"cdu-icon path2\"></span><span class=\"cdu-icon path3\"></span><span class=\"cdu-icon path4\"></span><span class=\"cdu-icon path5\"></span><span class=\"cdu-icon path6\"></span><span class=\"cdu-icon path7\"></span><span class=\"cdu-icon path8\"></span><span class=\"cdu-icon path9\"></span><span class=\"cdu-icon path10\"></span></span>";
        }
        attr_ihm += "</li>";
        attr_ihm += "</ul>";
        attr_ihm += "</div>";
        /***************************************** Fin bloc uci_left_toolbar de la toolbar *****************************************/
        
        
        attr_ihm += "<!--[if IE 7 ]>";
            attr_ihm += "<div id='uci_middle_toolbar' class='cdu_c uci_notmask ie7'";
            if (accessibilitytoolbar.userPref.get('a11ySiteWebEnabled') !== "on") {        
                attr_ihm += " style='display:none'";
            }
            attr_ihm += ">";
        attr_ihm += "<![endif]-->";
        attr_ihm += "<!--[if (gte IE 8) | (!IE)]><!-->";
            attr_ihm += "<div id='uci_middle_toolbar' class='cdu_c uci_notmask'";
            if (accessibilitytoolbar.userPref.get('a11ySiteWebEnabled') !== "on") {        
                attr_ihm += " style='display:none'";
            }
            attr_ihm += ">";    
        attr_ihm += "<!--<![endif]-->";

        //  gestion du lien "+ de confort"          
        attr_ihm += "<a class='uci_lien_plus_reglage cdu_c' href=\"#\" id='uci_moreconfort'>";
        attr_ihm += "<span aria-hidden=\"true\" class=\"cdu-icon cdu-icon-plus2\" id=\"uci_icon_moreconfort\">"+""+"</span>";
        attr_ihm += "<span id='uci_moreconfort_content'>"+accessibilitytoolbar.get('uci_txt_more_settings')+"</span>";
        attr_ihm += "</a>";
        attr_ihm += "</div>";

        attr_ihm += "<!--[if IE 7 ]>";
            attr_ihm += "<div id='uci_right_toolbar' class='cdu_c uci_notmask ie7'>";
        attr_ihm += "<![endif]-->";
        attr_ihm += "<!--[if (gte IE 8) | (!IE)]><!-->";
            attr_ihm += "<div id='uci_right_toolbar' class='cdu_c uci_notmask'>";  
        attr_ihm += "<!--<![endif]-->";
        
        /************************************************Menu de droite de la toolbar*******************************************         
         * Mise en place du menu facebook tout a droite, permettant d'un menu comprenant :
         * le choix de langues
         * la consultation de l'aide générale
         * la reinitialisation de tout mes réglages
         * le masquage de la barre "+ de confort"
         **********************************************************************************************************************/
        
        attr_ihm += "<ul>"+
                        "<li class='uci_inline'>"+
                            "<button id='uci_menu_remove_all' class='uci_bton_menu cdu_c' title='"+accessibilitytoolbar.get('uci_menu_remove_all')+"'>"+
                                "<span aria-hidden=\"true\" class=\"cdu-icon cdu-icon-reload2\"></span>"+
                                "<span class=\"cdu_n\">"+accessibilitytoolbar.get('uci_menu_remove_all')+"</span>"+
                            "</button>"+
                        "</li>"+ 
                        "<li class='uci_inline'>"+
                                "<button class='uci_bton_menu cdu_c' id='uci_activer_menu' title=\""+accessibilitytoolbar.get('uci_txt_link_menu_open')+"\">"+
                                    "<span aria-hidden=\"true\" class=\"cdu-icon cdu-icon cdu-icon-help\"></span>"+
                                    "<span class=\"cdu_n\">"+accessibilitytoolbar.get('uci_txt_link_menu_open')+"</span>"+
                                "</button>";
        //gestion du menu deroulant du menu
        attr_ihm += "<div class='uci_cdu_menu_relative'>";
        attr_ihm += "<div id='uci_cdu_menu' style='display:none;'>";
        attr_ihm += "<button class='uci_bton_menu cdu_c' id=\"uci_fermeture_cdu_menu\" title='"+accessibilitytoolbar.get('uci_txt_link_menu_close')+"'>";
        attr_ihm += "<span aria-hidden=\"true\" class=\"cdu-icon cdu-icon-croix\"></span>"
        attr_ihm += "<span class=\"cdu_n\">"+accessibilitytoolbar.get('uci_txt_link_menu_close')+"</span>"
        attr_ihm += "</button>";
        attr_ihm += "<ul>";
        attr_ihm += "<li>";
        attr_ihm += "<div id='uci_language'>";
        attr_ihm += "<input class='"+(accessibilitytoolbar.userPref.get("a11yLanguage") === "fr"?'uci_choix uci_choix_selected':'uci_choix')+"' type='button' name='uci_language_fr' value='fr' id='uci_fr' title=\""+accessibilitytoolbar.get('uci_txt_menu_change_lang_fr')+"\"/>";
        attr_ihm += "<input class='"+(accessibilitytoolbar.userPref.get("a11yLanguage") === "en"?'uci_choix uci_choix_selected':'uci_choix')+"' type='button' name='uci_language_en' value='en' id='uci_en' title=\""+accessibilitytoolbar.get('uci_txt_menu_change_lang_en')+"\"/>";
        attr_ihm += "<input class='"+(accessibilitytoolbar.userPref.get("a11yLanguage") === "es"?'uci_choix uci_choix_selected':'uci_choix')+"' type='button' name='uci_language_sp' value='sp' id='uci_sp' title=\""+accessibilitytoolbar.get('uci_txt_menu_change_lang_es')+"\"/>";
        attr_ihm += "</div>";
        
        attr_ihm += "</li>";
        attr_ihm += "<li><a id='uci_menu_ouverture_aide' href=\""+helpPath[accessibilitytoolbar.strings.getLocale()]+"\" title=\""+(accessibilitytoolbar.get('uci_menu_help')+" ("+accessibilitytoolbar.get('uci_new_window'))+")\">";
        attr_ihm += '<span aria-hidden=\"true\" class="cdu-icon cdu-icon-help"></span><span>' + accessibilitytoolbar.get('uci_menu_help') + '</span>';
        attr_ihm += "</a></li>";
        
        attr_ihm += "</ul>";
        attr_ihm += "</div></div></li>"; // fin menu     
        
        attr_ihm += "<li class='uci_inline'><button id='uci_menu_activer_menu' class='uci_bton_menu cdu_c' title='"+accessibilitytoolbar.get('uci_link_hide_toolbar')+"'>";
        attr_ihm += "<span aria-hidden=\"true\" class=\"cdu-icon cdu-icon-croix\"></span>"
        attr_ihm += "<span class=\"cdu_n\">"+accessibilitytoolbar.get('uci_link_hide_toolbar')+"</span>"
        attr_ihm += "</button></li></ul>";
        
        attr_ihm += "</div>"; // fin div uci_right_toolbar
        attr_ihm += "</div>"; // fin div uci_right
        attr_ihm += "</div>"; // fin div toolbar quick
        /*********************************************Gestion du menu d'onglet*****************************************************
         Mise en place d'un système d'onglet, pour la gestion des différents onglets composant le CDU :
         - Onglet typographie : reprenant les différents éléments en rapport
         * à la police d'écriture
         * aux tailles des texte
         * aux tailles des espacements des mots,des lignes, des caractères
         * à la casse du texte.
         - Onglet agencement : reprenant les différents éléments en rapport :
         * à la gestion de la mise en page
         * à l'alignement des texte
         * à l'apparence des liens de navigations
         * à la supression des effet de transparence, aux images de fond, à la suppréssion des images de premier plan
         - Onglet couleurs : reprenant les différents éléments suivant :
         * Utilisation prédéfinis de couleurs de fond et d'écriture
         * Ou utilisation de couleurs prédéfinies
         * Gestion du contraste entre les couleurs
         - Onglet aide motrices : reprenant les différents comportement d'aide à la motricité :
         * Sauter le contenu
         * Gestion de la navigation par pointage
         * Gestion de la sélection automatique des éléments
         ***************************************************************************************************************************/

        attr_ihm += "<div class='uci_systeme_onglets cdu_c' id=\"uci_zone_form\" style='display:none;'>";
        
        attr_ihm += "<button id='uci_fermeture_more_comfort' class='uci_bton_menu cdu_c' title='"+accessibilitytoolbar.get('uci_txt_low_settings')+"' style='display:none;'>";
        attr_ihm += "<span aria-hidden=\"true\" class=\"cdu-icon cdu-icon-croix\"></span>"
        attr_ihm += "<span class=\"cdu_n\">"+accessibilitytoolbar.get('uci_txt_low_settings')+"</span>"
        attr_ihm += "</button>";
        
        
        attr_ihm += "<div id=\"uci_activateOnglet\" style='display:none;'>"; // uci_activateOnglet        
        attr_ihm += "<!--[if IE 7]><div class='uci_onglets uci_ongletsie7'><![endif]-->";
        attr_ihm += "<!--[if (IE) & (!IE 7)]><div class='uci_onglets'><![endif]-->";        
        attr_ihm += "<!--[if (!IE)]>--><div class='uci_onglets'><!--<![endif]-->"; // uci_onglets
        attr_ihm += "<div>"; // 2
        attr_ihm += "<div class='uci_container_onglets'>";  // 1

        attr_ihm += "<ul id='uci_onglet_confort' role='tablist' class='cdu_c'>";
        attr_ihm += "<li role='tab' aria-selected='true' aria-controls='uci_contenu_onglet_typographie' tabindex='0' class='uci_inline'> <span class=\"onglet_1 onglet\" id=\"onglet_typographie\">";
        attr_ihm += "<span aria-hidden=\"true\" class=\"cdu-icon cdu-icon-typographie icon\"></span>";
        attr_ihm += accessibilitytoolbar.get('uci_txt_onglet_typo');
        attr_ihm += "</span></li>";
        attr_ihm += "<li role='tab' aria-selected='false' aria-controls='uci_contenu_onglet_apparence' tabindex='-1' class='uci_inline'> <span class=\"onglet_0 onglet\" id=\"onglet_apparence\">";
        attr_ihm += "<span aria-hidden=\"true\" class=\"cdu-icon cdu-icon-agencement icon\"></span>";
        attr_ihm +=  accessibilitytoolbar.get('uci_txt_onglet_apparence');
        attr_ihm += "</span></li>";
        attr_ihm += "<li role='tab' aria-selected='false' aria-controls='uci_contenu_onglet_couleur' tabindex='-1' class='uci_inline'> <span  class=\"onglet_0 onglet\" id=\"onglet_couleur\">";
        if(accessibilitytoolbar.isModern) {
	        attr_ihm += UciIhm.displayIconPalette('0 0 33 33');
        } else {
        	attr_ihm += "<span aria-hidden=\"true\" class=\"cdu-icon cdu-icon-couleurs icon\"></span>";
        }
        attr_ihm +=  accessibilitytoolbar.get('uci_txt_onglet_color');
        attr_ihm += "</span></li>";
        attr_ihm += "<li role='tab' aria-selected='false' aria-controls='uci_contenu_onglet_aidemotrice' tabindex='-1' class='uci_inline'> <span class=\"onglet_0 onglet\" id=\"onglet_aidemotrice\">";
        attr_ihm += "<span aria-hidden=\"true\" class=\"cdu-icon cdu-icon-comportement icon\"></span>";
        attr_ihm += accessibilitytoolbar.get('uci_txt_onglet_motor_help');
        attr_ihm += "</span></li>";
        attr_ihm += "</ul>";

        attr_ihm += "</div>"; // fin 1
        attr_ihm += "</div>"; // fin 2
        attr_ihm += "</div>"; // fin uci_onglets

        attr_ihm += "<div class='uci_div_conteneur_contenu_onglets'>";
        attr_ihm += "<!--[if IE 7]><div class='uci_contenu_onglets uci_contenu_ongletsie7'><![endif]-->";
        attr_ihm += "<!--[if (IE) & (!IE 7)]><div class='uci_contenu_onglets'><![endif]-->";        
        attr_ihm += "<!--[if (!IE)]>--><div class='uci_contenu_onglets'><!--<![endif]-->"; // uci_contenu_onglets
        attr_ihm += UciTypographie.InitUciTypographie();
        attr_ihm += UciApparence.InitUciApparence();
        var couleur = new UciCouleur();
        attr_ihm += couleur.InitUciCouleur();
        attr_ihm += UciAideMotrice.InitUciAideMotrice();
        attr_ihm += "</div>"; // fin contenu onglets
        attr_ihm += "</div>"; // fin clear
        attr_ihm += "</div>"; // fin uci_activateOnglet


        //var validation =  new UciValidation();
        var strValidation = UciValidation.InitUciValidation();
        attr_ihm += "<div id='uci_validation' class='cdu_n'>"+strValidation+"</div></form>";

        attr_ihm += "</div>"; // fin uci_zone_form
        attr_ihm += "</div>"; // fin container
        return attr_ihm;
    },
    

    /* Permet de désactiver l’affichage du menu facebook.
       @param nofocus boolean true if focus don't need to be pushed
    */


    close_menu: function (nofocus) {
        document.getElementById('uci_cdu_menu').style.display = "none";
        var button = document.getElementById("uci_activer_menu");
        if(button.nodeName === 'BUTTON') {
            button.title = accessibilitytoolbar.get('uci_txt_link_menu_open');
            var img = (button.firstElementChild || button.children[0]);
            if(img.nodeName === 'IMG') {
                img.alt = accessibilitytoolbar.get('uci_txt_link_menu_open');
            }
        }
        if(nofocus) return false;
        document.getElementById("uci_activer_menu").focus();
    },
    /*Permet d’activer le menu facebook du confort d’utilisation*/
    uci_activate_menu: function (e) {
        // when more settings is open, disable quick settings buttons
        if(document.getElementById('uci_right_toolbar').className.match("/uci_mask/")) return false;
        if (document.getElementById('uci_cdu_menu').style.display === "none") {
            document.getElementById('uci_cdu_menu').style.display = "block";
            var button = document.getElementById("uci_activer_menu");
            if(button.nodeName === 'BUTTON') {
                button.title = accessibilitytoolbar.get('uci_txt_link_menu_close');
                var img = (button.firstElementChild || button.children[0]);
                if(img.nodeName === 'IMG') {
                    img.alt = accessibilitytoolbar.get('uci_txt_link_menu_close');
                }
            }
            document.getElementById("uci_activer_menu").focus();
        } else {
            UciIhm.close_menu();
        }
        accessibilitytoolbar.stopEvt(e);
		return false;
    },
    /*Permet d’ouvrir les onglets de plus de confort de la toolbar de CDU.*/
    more_confort: function () {
    	if (document.getElementById('uci_activateOnglet').style.display === "none") {
            UciIhm.close_menu();
            document.getElementById("uci_icon_moreconfort").className= "cdu-icon cdu-icon-moins2";
            document.getElementById('uci_activateOnglet').style.display = "block";
            if(document.getElementById('uci_quick_a11yBigger_keepit').getAttribute('tabindex')=== '0')
                document.getElementById('uci_quick_a11yBigger_keepit').setAttribute('tabindex','-2');
            if(document.getElementById('uci_quick_a11yBigger_150').getAttribute('tabindex')=== '0')
                document.getElementById('uci_quick_a11yBigger_150').setAttribute('tabindex','-2');
            if(document.getElementById('uci_quick_a11yBigger_200').getAttribute('tabindex')=== '0')
                document.getElementById('uci_quick_a11yBigger_200').setAttribute('tabindex','-2');
            if(document.getElementById('uci_quick_a11yVisualPredefinedSettings_keepit').getAttribute('tabindex')=== '0')
                document.getElementById('uci_quick_a11yVisualPredefinedSettings_keepit').setAttribute('tabindex','-2');
            if(document.getElementById('uci_quick_a11yVisualPredefinedSettings_blackonwhite').getAttribute('tabindex')=== '0')
                document.getElementById('uci_quick_a11yVisualPredefinedSettings_blackonwhite').setAttribute('tabindex','-2');   
            document.getElementById('uci_menu_remove_all').setAttribute('tabindex','-2');   
            document.getElementById('uci_menu_activer_menu').setAttribute('tabindex','-2');                        
            document.getElementById('uci_activer_menu').setAttribute('tabindex','-2');
            if(document.getElementById('uci_zone_form'))
            {
                document.getElementById('uci_zone_form').style.display = "block";
            }
            document.getElementById('uci_fermeture_more_comfort').style.display = "block";            
            document.getElementById('uci_left_toolbar').className = document.getElementById('uci_left_toolbar').className.replace(/uci_notmask{0,1}/,"uci_mask");         
            document.getElementById('uci_middle_toolbar').className = document.getElementById('uci_middle_toolbar').className.replace(/uci_notmask{0,1}/,"uci_mask");         
            document.getElementById('uci_right_toolbar').className = document.getElementById('uci_right_toolbar').className.replace(/uci_notmask{0,1}/,"uci_mask");
            document.getElementById('uci_left_toolbar').setAttribute('aria-hidden','true');
            document.getElementById('uci_right_toolbar').setAttribute('aria-hidden','true');         
            document.getElementById('uci_moreconfort').title=accessibilitytoolbar.get('uci_txt_low_settings');
            document.getElementById('uci_moreconfort_content').innerHTML=accessibilitytoolbar.get('uci_txt_low_settings_display');
            // disable hide the toolbar
            // disable hide fontsize buttons
            // disable color button
            var elmt = document.getElementById('uci_onglet_confort');
            for(var i=0;i<elmt.children.length;i++){
                var elmt_enfant = elmt.children[i];
                if (elmt_enfant.getAttribute('tabindex') === '0' && elmt_enfant.getElementsByTagName('li')){
                   elmt_enfant.focus();
                }
            }

        } else {
            UciIhm.hide_more_confort();
        }
        return false;
    },
    hide_more_confort: function () {
    	document.getElementById("uci-onoffswitch").focus();
        document.getElementById("uci_icon_moreconfort").className= "cdu-icon cdu-icon-plus2";
        document.getElementById('uci_activateOnglet').style.display = "none";
        if(document.getElementById('uci_zone_form'))
        {
            document.getElementById('uci_zone_form').style.display = "none";
        }
        document.getElementById('uci_fermeture_more_comfort').style.display = "none";
        document.getElementById('uci_left_toolbar').className = document.getElementById('uci_left_toolbar').className.replace(/uci_mask{0,1}/,"uci_notmask");
        document.getElementById('uci_left_toolbar').setAttribute('aria-hidden','false');              
            document.getElementById('uci_middle_toolbar').className = document.getElementById('uci_middle_toolbar').className.replace(/uci_mask{0,1}/,"uci_notmask");      
            document.getElementById('uci_right_toolbar').className = document.getElementById('uci_right_toolbar').className.replace(/uci_mask{0,1}/,"uci_notmask");
        document.getElementById('uci_right_toolbar').setAttribute('aria-hidden','false');
        
        if(document.getElementById('uci_quick_a11yBigger_keepit').getAttribute('tabindex')=== '-2')
            document.getElementById('uci_quick_a11yBigger_keepit').setAttribute('tabindex','0');
        if(document.getElementById('uci_quick_a11yBigger_150').getAttribute('tabindex')=== '-2')
            document.getElementById('uci_quick_a11yBigger_150').setAttribute('tabindex','0');
        if(document.getElementById('uci_quick_a11yBigger_200').getAttribute('tabindex')=== '-2')
            document.getElementById('uci_quick_a11yBigger_200').setAttribute('tabindex','0');
        if(document.getElementById('uci_quick_a11yVisualPredefinedSettings_keepit').getAttribute('tabindex')=== '-2')
            document.getElementById('uci_quick_a11yVisualPredefinedSettings_keepit').setAttribute('tabindex','0');
        if(document.getElementById('uci_quick_a11yVisualPredefinedSettings_blackonwhite').getAttribute('tabindex')=== '-2')
            document.getElementById('uci_quick_a11yVisualPredefinedSettings_blackonwhite').setAttribute('tabindex','0');        
        document.getElementById('uci_menu_remove_all').removeAttribute('tabindex');
        document.getElementById('uci_activer_menu').removeAttribute('tabindex');
        document.getElementById('uci_menu_activer_menu').removeAttribute('tabindex');
        document.getElementById('uci_moreconfort').removeAttribute('title');  
        document.getElementById('uci_moreconfort_content').innerHTML=accessibilitytoolbar.get('uci_txt_more_settings');
        return false;
    },

    activate_liens: function (id_liens) {
        if (document.getElementById(id_liens).style.display === "none") {
            document.getElementById(id_liens).style.display = "block";
            document.getElementById(checked_apparence).checked = "true";
        } else {
            document.getElementById(id_liens).style.display = "none";
            document.getElementById(checked_apparence).checked = "false";
        }
        return false;
    },

    changement_langue: function (/* String*/langue) {
        // if stack value not equal to storedValue then display a confirm message to inform the user
        var tempMatrix = accessibilitytoolbar.userPref.convertMatrixv3.reverse();
        if ((accessibilitytoolbar.userPref.encode()+tempMatrix['a11ySiteWebEnabled' + "-" + accessibilitytoolbar.userPref.stackv3['a11ySiteWebEnabled']].replace(/.*-/, "") === accessibilitytoolbar.userPref.storedValue) 
                || confirm(accessibilitytoolbar.get('uci_modif_not_saved'))){
            accessibilitytoolbar.userPref.decode(accessibilitytoolbar.userPref.storedValue);
            accessibilitytoolbar.userPref.set("a11yLanguage", langue);
            accessibilitytoolbar.needToReload = true;
            accessibilitytoolbar.userPref.updateUserPref();
            // when the user change the lang of the interface, wee need to reload after save is done
            accessibilitytoolbar.reloadToolbar();
        }
        return false;
    },
    remove_all: function () {
        // when more settings is open, disable quick settings buttons
        if(document.getElementById('uci_right_toolbar').className.match("/uci_mask/")) return false;
        if(confirm(accessibilitytoolbar.get('uci_remove_all_settings'))) {
            var defaultstoredValue = "0000651000650650650000000000000000006500000010"+(accessibilitytoolbar.userPref.get('a11ySiteWebEnabled')==='on'?'0':'1');
            accessibilitytoolbar.userPref.setStoredValue(defaultstoredValue);
            accessibilitytoolbar.userPref.updateUserPref();
            accessibilitytoolbar.userPref.set('a11yToolbarEnable','on');
            accessibilitytoolbar.reloadToolbar();
        }
        return false;
    },


    desactiveCDUForWebSite: function () {
        if (accessibilitytoolbar.userPref.get("a11ySiteWebEnabled") !== "on") {
            document.getElementById('uci_left_toolbar').style.display='';
            document.getElementById('uci_middle_toolbar').style.display='';
            document.getElementById('uci-onoffswitch').title = accessibilitytoolbar.get('uci_title_disable_cdu');
            accessibilitytoolbar.userPref.set("a11ySiteWebEnabled", "on");
            document.getElementById("uci-onoffswitch").className="uci-onoffswitch-label-on";
            document.getElementById("uci-onoffswitch").focus();
        } else {
            UciIhm.hide_more_confort();
            document.getElementById('uci_left_toolbar').style.display='none';
            document.getElementById('uci_middle_toolbar').style.display='none';
            document.getElementById('uci-onoffswitch').title = accessibilitytoolbar.get('uci_title_enable_cdu');
            accessibilitytoolbar.userPref.set("a11ySiteWebEnabled", "off");
            document.getElementById("uci-onoffswitch").className="uci-onoffswitch-label";
            document.getElementById("uci-onoffswitch").focus();
        }    
        accessibilitytoolbar.userPref.updateBlackList();
        
        accessibilitytoolbar.cleanImgDisabled();
        accessibilitytoolbar.setCSS();
        UciIhm.close_menu(true);
        return false;
    },

    ToolbarHide: function () {
        // when more settings is open, disable quick settings buttons
        if(document.getElementById('uci_right_toolbar').className.match("/uci_mask/")) return false;
        accessibilitytoolbar.userPref.decode(accessibilitytoolbar.userPref.storedValue);
        accessibilitytoolbar.userPref.set("a11yToolbarEnable", "off");
        accessibilitytoolbar.userPref.updateUserPref();

        accessibilitytoolbar.hide();
        if(accessibilitytoolbar.idLinkModeContainer){
            document.getElementById(accessibilitytoolbar.idLinkModeContainer).focus();
        }else{
            document.getElementById('cdu_close').getElementsByTagName("button")[0].focus();
        }
        return false;
    }, 
    
    displayIconPalette: function(viewport) {
    	return  '<svg version="1.1" viewBox="' + viewport + '" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="cdu-icon-palette" role="image" alt="" aria-hidden="true" >\n\
<path class="path1" d="M0.476 17.181c0 3.272 1.443 6.063 4.234 8.468s6.832 3.561 12.029 3.561c1.732 0 3.176-0.577 4.33-1.732s1.732-2.598 1.732-4.33c0-1.251 0.385-2.213 1.251-2.694 0.77-0.481 2.117-0.77 3.849-0.77 1.636 0 2.983-0.577 3.849-1.636s1.347-2.598 1.347-4.33c0-0.866-0.289-1.925-0.962-3.079s-1.54-2.31-2.598-3.368c-1.155-1.059-2.598-2.021-4.33-2.791-1.828-0.77-3.657-1.155-5.678-1.155-2.694 0-5.1 0.289-7.314 0.77s-4.138 1.251-5.966 2.31c-1.732 1.059-3.176 2.502-4.138 4.234-1.155 1.828-1.636 3.945-1.636 6.544zM14.141 23.147c0-0.674 0.289-1.347 0.77-1.828s1.155-0.77 1.828-0.77c0.674 0 1.347 0.289 1.828 0.77s0.77 1.155 0.77 1.828c0 0.674-0.289 1.347-0.77 1.828s-1.155 0.77-1.828 0.77c-0.674 0-1.347-0.289-1.828-0.77s-0.77-1.155-0.77-1.828z"></path>\n\
<path class="path2" d="M0.476 16.218c0 3.272 1.443 6.063 4.234 8.468s6.832 3.561 12.029 3.561c1.732 0 3.176-0.577 4.33-1.732s1.732-2.598 1.732-4.33c0-1.251 0.385-2.213 1.251-2.694 0.77-0.481 2.117-0.77 3.849-0.77 1.636 0 2.983-0.577 3.849-1.636s1.347-2.598 1.347-4.33c0-0.866-0.289-1.925-0.962-3.079s-1.54-2.31-2.598-3.368c-1.155-1.059-2.598-2.021-4.33-2.791-1.828-0.77-3.657-1.155-5.678-1.155-2.694 0-5.1 0.289-7.314 0.77s-4.138 1.251-5.966 2.31c-1.732 1.059-3.176 2.502-4.138 4.234-1.155 1.828-1.636 3.945-1.636 6.544zM14.141 22.185c0-0.674 0.289-1.347 0.77-1.828s1.155-0.77 1.828-0.77c0.674 0 1.347 0.289 1.828 0.77s0.77 1.155 0.77 1.828c0 0.674-0.289 1.347-0.77 1.828s-1.155 0.77-1.828 0.77c-0.674 0-1.347-0.289-1.828-0.77s-0.77-1.155-0.77-1.828z"></path>\n\
<path class="path3" d="M25.304 14.486c0-0.577 0.192-1.059 0.674-1.54 0.385-0.385 0.962-0.674 1.54-0.674s1.059 0.192 1.54 0.674c0.385 0.385 0.674 0.962 0.674 1.54s-0.192 1.059-0.674 1.54c-0.385 0.385-0.962 0.674-1.54 0.674s-1.059-0.192-1.54-0.674c-0.481-0.481-0.674-0.962-0.674-1.54z"></path>\n\
<path class="path4" d="M19.915 10.444c-0.385-0.385-0.674-0.962-0.674-1.54s0.192-1.059 0.674-1.54c0.385-0.385 0.962-0.674 1.54-0.674s1.059 0.192 1.443 0.674c0.385 0.385 0.577 0.962 0.577 1.54s-0.192 1.059-0.577 1.54c-0.385 0.385-0.866 0.674-1.443 0.674s-1.059-0.192-1.54-0.674z"></path>\n\
<path class="path5" d="M12.409 9.001c0-0.577 0.192-1.059 0.674-1.54 0.385-0.385 0.962-0.674 1.54-0.674s1.059 0.192 1.54 0.674c0.385 0.385 0.674 0.962 0.674 1.54s-0.192 1.059-0.674 1.54c-0.385 0.385-0.962 0.674-1.54 0.674s-1.059-0.192-1.54-0.674c-0.385-0.481-0.674-0.962-0.674-1.54z"></path>\n\
<path class="path6" d="M5.672 12.369c0-0.577 0.192-1.059 0.674-1.54 0.385-0.385 0.962-0.674 1.54-0.674s1.059 0.192 1.54 0.674c0.385 0.385 0.674 0.962 0.674 1.54s-0.192 1.059-0.674 1.54c-0.385 0.385-0.962 0.674-1.54 0.674s-1.059-0.192-1.54-0.674c-0.481-0.385-0.674-0.866-0.674-1.54z"></path>\n\
<path class="path7" d="M25.304 13.524c0-0.577 0.192-1.059 0.674-1.54 0.385-0.385 0.962-0.674 1.54-0.674s1.059 0.192 1.54 0.674c0.385 0.385 0.674 0.962 0.674 1.54s-0.192 1.059-0.674 1.54c-0.385 0.385-0.962 0.674-1.54 0.674s-1.059-0.192-1.54-0.674c-0.481-0.481-0.674-0.962-0.674-1.54z"></path>\n\
<path class="path8" d="M19.915 9.482c-0.385-0.385-0.674-0.962-0.674-1.54s0.192-1.059 0.674-1.54c0.385-0.385 0.962-0.674 1.54-0.674s1.059 0.192 1.443 0.674c0.385 0.385 0.577 0.962 0.577 1.54s-0.192 1.059-0.577 1.54c-0.385 0.385-0.866 0.674-1.443 0.674s-1.059-0.192-1.54-0.674z"></path>\n\
<path class="path9" d="M12.409 8.039c0-0.577 0.192-1.059 0.674-1.54 0.385-0.385 0.962-0.674 1.54-0.674s1.059 0.192 1.54 0.674c0.385 0.385 0.674 0.962 0.674 1.54s-0.192 1.059-0.674 1.54c-0.385 0.385-0.962 0.674-1.54 0.674s-1.059-0.192-1.54-0.674c-0.385-0.481-0.674-0.962-0.674-1.54z"></path>\n\
<path class="path10" d="M5.672 11.407c0-0.577 0.192-1.059 0.674-1.54 0.385-0.385 0.962-0.674 1.54-0.674s1.059 0.192 1.54 0.674c0.385 0.385 0.674 0.962 0.674 1.54s-0.192 1.059-0.674 1.54c-0.385 0.385-0.962 0.674-1.54 0.674s-1.059-0.192-1.54-0.674c-0.481-0.385-0.674-0.866-0.674-1.54z"></path>\n\
</svg>';
    }
};
// Source: app/js/toolbar.js
/**
    This file is part of Orange Confort+ | A centralized Javascript application to enable users to customize display and behaviour of websites to suit their advanced accessibility needs
    
    Copyright (C) 2014  Orange

    Orange Confort+ is free software; you can redistribute it and/or
    modify it under the terms of the GNU General Public License
    as published by the Free Software Foundation; either version 2
    of the License, or (at your option) any later version.

    Orange Confort+ is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details (LICENSE.txt file).
**/ 
/*global window */
/*global document: false */
/* global alert */
function LoopingMenu() {
// attribut
    // private
    /**
     * {LoopingMenu} Internal reference to this object instance
     * @private
     */
    var that = this;
    /**
     * {int} Current display position of the menu
     * @privatent.createElement("ul");

     menuContainer.appe
     */
    var position;
    /**
     * {Array} Items collection to display
     * @private
     */
    var items;
    /**
     * {DivHTMLTag} Html tag &lt;div&gt; containing the menu
     * @private
     */
    var menuContainer;
    /**
     * {H2HTMLTag} Html tag &lt;h2&gt; containing the title
     * @private
     */
    var menuTitle;
    /**
     * {UlHTMLTag} Html tag &lt;ul&gt; containing the items collection
     * @private
     */
    var menuList;

    // public
    /**
     * {int} Define menu position to center screen
     */
    this.CENTER = 1;
    /**
     * {int} Define menu position to be next to the selected item
     */
    this.NEXT_TO = 2;
    /*  */

// method
    // private
    /**
     * Initialisation of the items collection and creation of the menu html structure.
     * @private
     */
    /**
     * Create the menu html structure and set its default rendering
     * @private
     */
    var createMenu = function () {
        if (!document.getElementById("loopingBar")) {
            // Create the structure
            menuContainer = document.createElement("div");
            menuContainer.setAttribute("id", "loopingBar");
            menuTitle = document.createElement("h2");
            menuTitle.setAttribute("style", "display:none;");
            menuList = document.createElement("ul");
            menuContainer.appendChild(menuTitle);
            menuContainer.appendChild(menuList);

            document.getElementsByTagName("body")[0].appendChild(menuContainer);

            // Define default rendering
            that.setPosition(LoopingMenuPosition.CENTER);
            that.hide();
        }
    };

    var init = function () {
        createMenu();
        items = [];
    };

    /**
     * Set the menu rendering to display in the center of the screen
     * @private
     */
    var setCenter = function () {
        var decalage = 0;       /* Offset of the viewport from the top of the page */
        var windowWidth = 0;    /* Width of the viewport */
        var windowHeight = 0;   /* Height of the viewport */
        var top = 0;            /* Top position of the menu */
        var left = 0;           /* Left position of the menu */

        // Get the screen center
        if (window.innerWidth) {
            // Client viewport under common browser
            decalage = window.pageYOffset;
            windowWidth = window.innerWidth;
            windowHeight = window.innerHeight;
        } else if ( document.documentElement !== 'undefined' && document.documentElement.clientWidth !== 'undefined'
            && document.documentElement.clientWidth !== 0) {
            decalage = document.documentElement.scrollTop;
            windowWidth = document.documentElement.clientWidth, windowHeight = document.documentElement.clientHeight
        }
        // and for older IE ...
        else {
            decalage = document.body.scrollTop;
            windowWidth = document.body.clientWidth;
            windowHeight = document.body.clientHeight;
        }

        top = (windowHeight-menuContainer.offsetHeight)/2;
        left = (windowWidth-menuContainer.offsetWidth)/2;

        menuContainer.style.top = (top+decalage)+"px";
        menuContainer.style.left = (left)+"px";
    }

    /**
     * Set the menu rendering to display next to the selected item.
     * @private
     */
    var setNextTo = function() {
        var left=0;				/* Left position of the menu */
        var top =0;				/* Top position of the menu */
        var currentItem;		/* Local reference to the selected item */
        var currentItemWidth;	/* Width of the selected item */
        var currentItemHeight;	/* Height of the selected item */
        var currentItemTop;		/* Top position of the selected item */
        var currentItemLeft;	/* Left position of the selected item */

        // Getting the screen viewport
        var decalage = 0;		/* Offset of the viewport from the top of the page */
        var delta;				/* Used to determine if the menu could be render under the selected item */
        var windowWidth = 0;    /* Width of the viewport */
        var windowHeight = 0;   /* Height of the viewport */
        if (window.innerWidth) {
            // Client viewport under : common browser
            decalage = window.pageYOffset;
            windowWidth = window.innerWidth;
            windowHeight = window.innerHeight;
        } // For IE..
        else if (typeof document.documentElement !== 'undefined'
            && typeof document.documentElement.clientWidth !== 'undefined'
            && document.documentElement.clientWidth !== 0)
        {
            decalage = document.documentElement.scrollTop;
            windowWidth = document.documentElement.clientWidth,
                windowHeight = document.documentElement.clientHeight;
        }
        // and for older IE ...
        else {
            decalage = document.body.scrollTop;
            windowWidth = document.body.clientWidth;
            windowHeight = document.body.clientHeight;
        }

        // Getting selected item top,left,height and width
        if(LoopingUtility.getFocusedElement()<0) {
            return setCenter();
        }
        currentItem = LoopingUtility.getFocusedElement();
        currentItemWidth = currentItem.offsetWidth;
        currentItemTop = 0;
        currentItemLeft = 0;
        do {
            currentItemTop += currentItem.offsetTop;
            currentItemLeft += currentItem.offsetLeft;
        }
        while(currentItem = currentItem.offsetParent);

        // Horizontal positionning tool-bar next to the selected item
        if((currentItemLeft+currentItemWidth+menuContainer.offsetWidth) < windowWidth) {
            left = (currentItemLeft+currentItemWidth+10);
        }
        else {
            left = ((currentItemLeft+currentItemWidth+menuContainer.offsetWidth)-windowWidth);
        }

        // Vertical positionning tool-bar next to the selected item
        delta = ((decalage+windowHeight)-(currentItemTop+menuContainer.offsetHeight));
        /* Fixed menu height for correct implementation */
        if(currentItemTop > (decalage+10) && delta > 0) {
            top = currentItemTop;
        }
        else if(currentItemTop <= (decalage+10)) {
            top = (decalage+10);
        }
        else {
            top = (decalage+windowHeight-menuContainer.offsetHeight-10);
        }

        // Affecting position
        menuContainer.style.top = top+"px";
        menuContainer.style.left = left+"px";
    };

    var getMenuTitle = function() {
        return menuTitle;
    };

    // public
    /**
     * Set the position where to display the menu
     * @param {int} pos, the menu position of the screen. Could be to the center or next to the item
     */
    this.setPosition = function (pos) {
        // Check if specified position exist
        if(pos === LoopingMenuPosition.CENTER || pos === LoopingMenuPosition.NEXT_TO) {
            position = pos;
            //Delegate the rendering to the right internal method
            if(position === LoopingMenuPosition.CENTER) {
                setCenter();
            }
            if(position === LoopingMenuPosition.NEXT_TO) {
                setNextTo();
            }
        }
    };

    /**
     * Check if the current rendering position is in the center of the screen
     * @return {Boolean} true if the current rendering position is set to center, or false either
     */
    this.isCenter = function() {
        if(position === LoopingMenuPosition.CENTER) {
            return true;
        }
        else {
            return false;
        }
    };

    /**
     * Check if the current rendering position is next to the selected item
     * @return {Boolean} true if the current rendering position is set to center, or false either
     */
    this.isNextTo = function() {
        if(position === LoopingMenuPosition.NEXT_TO) {
            return true;
        }
        else {
            return false;
        }
    };

    /**
     * Check if the menu is shown on the screen
     * @return {Boolean} true if the menu is currently shown, false either.
     */
    this.isShown = function() {
        if(menuContainer.className.match(/cdu_displayN/i)){
            return false;
        }
        else {
            return true;
        }
    };

    /**
     * Display the menu
     */
    this.show = function() {
        menuContainer.className="show";
        if(that.isCenter()) {
            setCenter();
        } else if (that.isNextTo()) {
            setNextTo();
        }
    };

    /**
     * Hide the menu
     */
    this.hide = function() {
        menuContainer.className="cdu_displayN";
    };

    /**
     * Add an item to the menu
     * @param {String} name, the string to display in the menu
     * @param {Function} callback, the function to call on item activation
     * @param {String} id, the desired id for the menu item
     */
    this.addItem = function(/* String */name, /* function */callback, /* String */id, /* boolean */ defaut) {
        var link = document.createElement("a");
        var item = document.createElement("li");
        // Create Text
        var text = null;
        if(defaut) {
            text = document.createElement("strong");
            text.appendChild(document.createTextNode(name));
        }
        else {
            text = document.createTextNode(name);
        }
        // Create link
        link.appendChild(text);
        link.setAttribute("href","#");
        link.onclick = callback;
        if ( id !== null){
            link.id = id;
        }
        item.appendChild(link);
        menuList.appendChild(item);
        // Save item reference
        items.push([name,link]);
    };

    /**
     * Remove the specified item from the menu
     * @param {String} name, the item's name
     */
    this.removeItem = function(/* String */name) {
        //Parsing items collection
        for(var i=0; i<items.length; i++) {
            if(items[i][0] === name) {
                //Remove from HTML structure and collection
                menuList.removeChild(items[i][1].parentNode);
                return items.splice(i,i);
            }
        }
    };

    /**
     * Remove all items
     */
    this.clean = function() {
        while(items.length > 0) {
            menuList.removeChild(items[0][1].parentNode);
            items.shift();
        }
    };

    /**
     * Set the menu title
     * @param {String} title, the menu title
     */
    this.setTitle = function(title) {
        // If the has been already be specified, remove it
        if(getMenuTitle().hasChildNodes()){
            getMenuTitle().removeChild(getMenuTitle().firstChild);
        }
        // Set the new one
        getMenuTitle().removeAttribute("style");
        getMenuTitle().appendChild(document.createTextNode(title));
    };

    /**
     * Get the current menu title
     * @return {String} title, the menu title. If it has not been defined, return an empty string
     */
    this.getTitle = function() {
        return menuTitle.textContent;
    };

    /**
     * Get the menu items collection
     * @return {Array} menuItems, the collection of html tag <a> assiociated to items
     */
    this.getItems = function() {
        var menuItems = [];
        for(var i=0; i<items.length; i++) {
            menuItems.push(items[i][1]);
        }
        return menuItems;
    };

    /**
     * Get the current selected item in the menu
     * @return {AHtmlTag} link, the current focused html tag <a> in the menu
     */
    this.getSelectedItem = function() {
        for(var i=0; items.length; i++) {
            if(items[i][1].className.match(/a11y-focused/)) {
                return items[i][1];
            }
        }
    };

    /**
     * Get the current position in the menu of the specified item
     * @param {AHtmlTag} elt a HTML tag <a> in the menu
     * @return {int} pos its position in the menu
     */
    this.getItemIndex = function(elt) {
        for(var i=0; items.length; i++) {
            if(items[i][1] === elt) {
                return i;
            }
        }
    };

    /**
     * Get the menu HTML tag used as container
     * @return {DivHtmlNode} container, the menu container
     */
    this.getContainer = function() {
        return menuContainer;
    };

// Constructor
    init();
}

/**
 * Looping Menu position definition
 * @class General definition of menu position
 */
var LoopingMenuPosition = {
    /**
     * Define menu position to center screen
     * @field
     * @type {int}
     */
    CENTER: 1,
    /**
     * Define menu position to be next to the selected item
     * @field
     * @type {int}
     */
    NEXT_TO: 2
};
/**
 * Allow navigation with a single touch
 * @class Manager of the remote control
 */
function LoopingMode() {
// attribut
    // private
    /**
     * Local reference to this object
     * @private
     */
    var that = this;
    /**
     * Reference Looping menu Manage manager
     * @see {LoopingMenu}
     * @private
     */
    var menu = null;
    /**
     * Value of the step for quick mode
     * @private
     */
    var quickStep = 5;
    /**
     * Value of the step by default
     * @private
     */
    var defaultStep = 1;
    /**
     * Flag to know if looping mode is enable or not
     * @private
     */
    var isMenuEnabled = 1;

    // public
// method
    // private
    /**
     * Initialisation of the object instance.
     * Creation of the menu, registration of trigger
     * and setting default value.
     * @private
     */
    var init = function() {
        // Creating Looping Menu
        menu = new LoopingMenu();
        // Setting default value
        LoopingUtility.step = 1;
        // Registering trigger
        that.registerTrigger();
        LoopingUtility.registerFocusedHandler();
    };

    // Looping menu items definition
    // --> Looping Filter methods for Menu item
    /**
     * Check if the specified element is a looping menu item
     * @param {HTMLNode} elt : Element to be checked
     * @private
     */
    var filterMenu = function(elt) {
        if(elt.nodeName.match(/^A$/gi) &&
            LoopingUtility.isMenuItem(elt) ) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * Function to call on focusing a Looping menu item
     * @param {HTMLNode} elt : Element to be processed
     * @private
     */
    var callbackFocusMenu = function(elt) {
        elt.className="a11y-focused "+elt.className;
        elt.focus();
    };
    /**
     * Function to call on bluring a Looping menu item
     * @param {HTMLNode} elt : Element to be processed
     * @private
     */
    var callbackBlurMenu = function(elt) {
        elt.className = elt.className.replace(/a11y-focused {0,1}/,"");
    };

    // --> Looping Filter methods for html tag <a> and <area>
    /**
     * Check if the specified element is an elligible link
     * @param {HTMLNode} elt : Element to be checked
     * @private
     */
    var filterLink = function(elt) {
        if(elt.nodeName.match(/^A|AREA$/gi) && !LoopingUtility.isMenuItem(elt)) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * Function to call on focusing an elligible link
     * @param {HTMLNode} elt : Element to be processed
     * @private
     */
    var callbackFocusLink = function(elt) {
        elt.className="loopingmode-focused "+elt.className;
        elt.focus();
    };
    /**
     * Function to call on bluring an elligible link
     * @param {HTMLNode} elt : Element to be processed
     * @private
     */
    var callbackBlurLink = function(elt) {
        elt.className = elt.className.replace(/loopingmode-focused {0,1}/,"");
    };

    // --> Looping Filter methods for form element
    /**
     * Check if the specified element is an elligible form element
     * @param {HTMLNode} elt : Element to be checked
     * @private
     */
    var filterForm = function(elt) {
        if(elt.nodeName.match(/^TEXTAREA|SELECT|BUTTON/gi)) {
            return true;
        }
        else if(elt.nodeName.match(/^INPUT/gi) &&
            elt.disabled !== true &&
            ((elt.getAttribute("type")!== null && !elt.getAttribute("type").match(/hidden/)) || (elt.getAttribute("type")=== null))) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * Function to call on focusing an elligible form element
     * @param {HTMLNode} elt : Element to be processed
     * @private
     */
    var callbackFocusForm = function(elt) {
        var lab = null;
        // Check if a label is associated to the form element
        if(elt.getAttribute("id") !== null) {
            var labels = document.getElementsByTagName("label");
            for(var i=0; i<labels.length; i++) {
                if(labels[i].htmlFor === elt.id) {
                    lab = labels[i];
                }
            }
        }
        // Style the label (if exists) and form element
        if(lab !== null) {
            lab.className = "loopingmode-focused "+lab.className;
        }
        elt.className="loopingmode-focused "+elt.className;
        elt.focus();
    };
    /**
     * Function to call on bluring a elligible form element
     * @param {HTMLNode} elt : Element to be processed
     * @private
     */
    var callbackBlurForm = function(elt) {
        var lab = null;
        // Check if a label is associated to the form element
        if(elt.getAttribute("id") !== null) {
            var labels = document.getElementsByTagName("label");
            for(var i=0; i<labels.length; i++) {
                if(labels[i].htmlFor === elt.id) {
                    lab = labels[i];
                }
            }
        }
        // Remove the style of the label (if exists) and form element
        if(lab !== null) {
            lab.className = lab.className.replace(/loopingmode-focused {0,1}/,"");
        }
        elt.className = elt.className.replace(/loopingmode-focused {0,1}/,"");
    };

    // --> Looping Filter methods for mouse clickable element
    /**
     * Check if the specified element is activable by mouse
     * @param {HTMLNode} elt : Element to be checked
     * @private
     */
    var filterOnclick = function(elt) {
        if(elt.onclick && elt.onclick !== null && !LoopingUtility.isMenuItem(elt))
            return true;
        else return false;
    };
    /**
     * Function to call on focusing a elligible mouse clickable element
     * @param {HTMLNode} elt : Element to be processed
     * @private
     */
    var callbackFocusOnclick = function(elt) {
        elt.className="loopingmode-focused "+elt.className;
        elt.focus();
    };
    /**
     * Function to call on bluring a elligible mouse clickable element
     * @param {HTMLNode} elt : Element to be processed
     * @private
     */
    var callbackBlurOnclick = function(elt) {
        elt.className = elt.className.replace(/loopingmode-focused {0,1}/,"");
    };

    // --> Looping Filter for flash element
    /**
     * Check if the specified element is an elligible flash element
     * @param {HTMLNode} elt : Element to be checked
     * @private
     */
    var filterFlash = function(elt) {
        if(elt.nodeName.match(/^OBJECT|EMBED/gi)) {
            if (elt.type.match(/x-shockwave-flash/) && elt.hasConfortdelecture && (elt.hasConfortdelecture() === true)){
                return true;
            } else{
                return false;
            }
        } else {
            return false;
        }
    };
    /**
     * Function to call on focusing an elligible flash
     * @param {HTMLNode} elt : Element to be processed
     * @private
     */
    var callbackFocusFlash = function(elt) {
        LoopingUtility.hasToStop = true;
        elt.focus();
        elt.restartLoopingMode();
    };
    /**
     * Function to call on bluring an elligible flash
     * @param {HTMLNode} elt : Element to be processed
     * @private
     */
    var callbackBlurFlash = function(elt) {

    };

    // --> Looping Filter for global looping
    /**
     * Check if the specified element could be handled by a sub filter
     * @param {HTMLNode} elt : Element to be checked
     * @private
     */
    var filterGeneric = function(elt) {        
        if (elt.tabIndex && elt.tabIndex<0) {
            return false;
        }
        if(LoopingUtility.isVisible(elt)) {
            // Case of clickable elements
            if(filterOnclick(elt)){
                return true;
            }
            // Case of form element
            else if(filterForm(elt)){
                return true;
            }
            // Case of link
            else if(filterLink(elt)){
                return true;
            }
            // Case of flash element
            else if(filterFlash(elt)) {
                return true;
            } else {
                return false;
            }
        } else{
            return false;
        }
    };
    /**
     * Function to call on focusing a generic element
     * Delegate treatment to a sub callbackFocus method
     * @param {HTMLNode} elt : Element to be processed
     * @private
     */
    var callbackFocusGeneric = function(elt) {
        // Case of Link
        if(filterLink(elt)) {
            callbackFocusLink(elt);
        } else if(filterOnclick(elt)){
            callbackFocusOnclick(elt);
        } else if(filterForm(elt)) {
            callbackFocusForm(elt);
        } else if(filterFlash(elt)){
            callbackFocusFlash(elt);
        }
    };
    /**
     * Function to call on bluring a generic element
     * Delegate treatement to a sub callbackBlur method
     * @param {HTMLNode} elt : Element to be processed
     * @private
     */
    var callbackBlurGeneric = function(elt) {
        // Case of link
        if(filterLink(elt)){
            callbackBlurLink(elt);
        }
        // Case of activable element
        else if(filterOnclick(elt)) {
            callbackBlurOnclick(elt);
        }
        // Case of form element
        else if(filterForm(elt)) {
            callbackBlurForm(elt);
        }
        // Case of flash element
        else if(filterFlash(elt)){
            callbackBlurFlash(elt);
        }
    };

    // Publics methods
    /**
     * Register trigger function for key pressed and key released.
     * Call back on key pressed (onkeypress event) just prevent default action
     * Call back on key released (onkeyup event) show the looping menu or activate the menu item
     * @return nothing
     */
    this.registerTrigger = function() {
        // Callback function for onkeyup event
        var keyUpFunc = function(/*Event*/ e) {
            if(!that.isMenuEnabled) return true;
            if(LoopingKey.keyPressed(e) === LoopingKey.ENTER || LoopingKey.keyPressed(e) === LoopingKey.SPACE) {
                // Prevent default action
                that.stopLoop();
                accessibilitytoolbar.stopEvt(e);
                if(!menu.isShown()) {
                    // Check DOM to append items to the menu before showing it
                    var hasLink, hasForm, hasOnclick, hasFlash = false;
                    var nbActivable = 0;
                    var domElts = document.getElementsByTagName("*");
                    for(var i=0; i<domElts.length; i++) {
                        // Check if DOM has links
                        if(filterLink(domElts[i])) {
                            hasLink = true;
                            nbActivable++;
                        }
                        // Check if DOM has form elements
                        if(filterForm(domElts[i])) {
                            hasForm = true;
                            nbActivable++;
                        }
                        // Check if DOM has activable elements
                        if(filterOnclick(domElts[i])) {
                            hasOnclick = true;
                            nbActivable++;
                        }
                        // Check if DOM has flashs
                        if(filterFlash(domElts[i])) {
                            hasFlash = true;
                            nbActivable++;
                        }
                    }
                    // Add items to the menu
                    if(LoopingUtility.getFocusedElement() !== -1 &&
                        (filterLink(LoopingUtility.getFocusedElement()) || filterForm(LoopingUtility.getFocusedElement()))) {
                        menu.addItem(that.getToolbar().get("uci_doClick"),that.doClick, "do_click", true);
                    }
                    if(hasLink || hasForm || hasOnclick || hasFlash) {
                        menu.addItem(that.getToolbar().get("uci_loopActivable"),that.startLoopGeneric, "activable_to_activable");
                        if(nbActivable > quickStep){
                            menu.addItem(that.getToolbar().get("uci_loopActivableQuick"),that.startFastLoopGeneric, "activable_to_activable_fast");
                        }
                        menu.addItem(that.getToolbar().get("uci_loopBackward"),that.startBackLoopGeneric, "activable_to_activable_backward");
                    }
                    menu.addItem(that.getToolbar().get("uci_stopLoop"),that.stopLoop, "stop_loop");
                    // Show the menu
                    menu.show();
                    // And start looping on it
                    that.startLoopMenu();
                }
                else {
                    // Launch the action associated to the selected menu item
                    menu.getSelectedItem().onclick();
                    menu.hide();
                    menu.clean();
                }
                return false;
            }
            else {
                return true;
            }
        };
        // Call back function for onkeypress event
        var keyPressFunc = function(/*Event*/ e) {
            if(LoopingKey.keyPressed(e) === LoopingKey.ENTER || LoopingKey.keyPressed(e) === LoopingKey.SPACE) {
                accessibilitytoolbar.stopEvt(e);
                return false;
            }
        };
        // Call back function for onclick event
        var mouseClickFunc = function(/*Event*/ e) {
            // Launch the action associated to the clicked menu item
            that.stopLoop();
            menu.hide();
            menu.clean();
        };

        // Registering call back for W3C Browser
        if(document.addEventListener) {
            // onkeyup event
            document.addEventListener('keyup',keyUpFunc,true);
            // onkeypress event
            document.addEventListener('keydown',keyPressFunc,true);
            // Mouse click event
            menu.getContainer().addEventListener('click',mouseClickFunc,false);
        }
        // Registering call back for IE Browser
        else if(document.attachEvent) {
            // onkeyup event
            document.attachEvent('onkeyup',keyUpFunc);
            // onkeypress event
            document.attachEvent('onkeypress',keyPressFunc);
            // Mouse click event
            menu.getContainer().attachEvent('onclick',mouseClickFunc);
        }
        // Registering call back for older browser
        else {
            document.onkeyup = keyUpFunc;
            menu.getContainer().onclick = mouseClickFunc;
        }
        document.onkeypress = keyPressFunc;
    };
    /**
     * Start the loop over the looping menu item collection
     */
    this.startLoopMenu = function() {
        LoopingUtility.setCurrentSet(menu.getItems());
        LoopingUtility.setCurrentFilter(new LoopingFilter(filterMenu,callbackFocusMenu,callbackBlurMenu));
        LoopingUtility.hasToDouble(true);
        LoopingUtility.nextIndex = null;
        LoopingUtility.step = defaultStep;
        LoopingUtility.loopOver();
    };
    /**
     * Start the forward looping over the page elements collection
     */
    this.startLoopGeneric = function() {
        LoopingUtility.setCurrentSet(document.getElementsByTagName("*"));
        LoopingUtility.setCurrentFilter(new LoopingFilter(filterGeneric,callbackFocusGeneric,callbackBlurGeneric));
        LoopingUtility.hasToDouble(true);
        LoopingUtility.nextIndex = LoopingUtility.lastDOMIndex;
        LoopingUtility.step = defaultStep;
        LoopingUtility.loopOver();
    };
    /**
     * Start the backward looping over the page elements collection
     */
    this.startBackLoopGeneric = function() {
        LoopingUtility.setCurrentSet(document.getElementsByTagName("*"));
        LoopingUtility.setCurrentFilter(new LoopingFilter(filterGeneric,callbackFocusGeneric,callbackBlurGeneric));
        LoopingUtility.hasToDouble(true);
        LoopingUtility.nextIndex = LoopingUtility.lastDOMIndex;
        LoopingUtility.step = -defaultStep;
        LoopingUtility.loopOver();
    };
    /**
     * Start the forward fast looping over the page elements collection
     */
    this.startFastLoopGeneric = function() {
        LoopingUtility.setCurrentSet(document.getElementsByTagName("*"));
        LoopingUtility.setCurrentFilter(new LoopingFilter(filterGeneric,callbackFocusGeneric,callbackBlurGeneric));
        LoopingUtility.hasToDouble(true);
        LoopingUtility.nextIndex = LoopingUtility.lastDOMIndex;
        LoopingUtility.step = quickStep;
        LoopingUtility.loopOver();
    };
    /**
     * Simulate an user click on the focused element
     */
    this.doClick = function() {
        var elt = LoopingUtility.getFocusedElement();
        if(elt !== -1) {
            // Case of a link ... we do a simple redirection
            if(elt.nodeName.match(/^A|AREA$/i) && elt.href  && elt.href !== "" && !elt.href.match(/#(motor-bloc|visual-bloc|help-bloc)/) && elt.href.match(/.*(#.+).+?/)) {
                window.location = elt.href;
            }
            // Case of a form item ... we do a simple click
            else if(elt.nodeName.match(/^INPUT|SELECT|TEXTAREA$/i)) {
                if(elt.nodeName.match(/^SELECT|TEXTAREA$/i) ||
                    (elt.nodeName.match(/^INPUT$/i) && elt.type === "text")) {
                    elt.focus();
                } else {
                    elt.click();
                }
            }
            // Case of a form label ... we click the associated form item
            else if(elt.nodeName.match(/^LABEL$/i)) {
                document.getElementById(elt.htmlFor).click();
            }
            // Case of an activable onclick item ... we just launch the function
            else if(elt.onclick && elt.onclick !== null) {
                elt.onclick();
            }
            // By default, simulate a click
            else {
                var fakeClick = null;
                /* Case of W3C Compliant Browser */
                if (document.createEvent) {
                    fakeClick = document.createEvent ("MouseEvent");
                    fakeClick.initMouseEvent (
                        "click",
                        true,
                        true,
                        window,
                        0,
                        /*event.screenX*/0,
                        /*event.screenY*/0,
                        /*event.clientX*/0,
                        /*event.clientY*/0,
                        /*event.ctrlKey*/false,
                        /*event.altKey*/false,
                        /*event.shiftKey*/false,
                        /*event.metaKey*/false,
                        0,
                        null);
                    elt.dispatchEvent(fakeClick);
                } else {
                    /* Case of IE */
                    if (document.createEventObject) {
                        fakeClick = document.createEventObject(window.event);
                        fakeClick.button = 1;
                        elt.fireEvent ("onclick", fakeClick);
                    }
                }
            }
        }
    };
    /**
     * Start the default looping mode
     */
    this.start = function() {
        that.isMenuEnabled = 1;
        that.startLoopGeneric();
    };
    /**
     * Restart the default looping mode
     */
    this.restartLoopingmode = function() {
        that.startLoopGeneric();
        //TODO : maybe calling loopOver should be better
    };
    /**
     * Stop the loop over items collection
     */
    this.stopLoop = function() {
        clearTimeout(LoopingUtility.timerId);
    };

    /**
     * Stop the looping mode properly
     */
    this.killLoopingMode = function() {
        this.stopLoop();
        clearTimeout(LoopingUtility.timerId);
        that.isMenuEnabled = 0;
        var elt = LoopingUtility.getFocusedElement();
        if(elt){
            // Case of link
            if(filterLink(elt)){
                callbackBlurLink(elt);
            }
            // Case of activable element
            else if(filterOnclick(elt)) {
                callbackBlurOnclick(elt);
            }
            // Case of form element
            else if(filterForm(elt)) {
                callbackBlurForm(elt);
            }
            // Case of flash element
            else if(filterFlash(elt)){
                callbackBlurFlash(elt);
            }
        }
        if(menu.isShown()) {
            menu.hide();
            menu.clean();
        }
    };

    // public Api used by accessibilitytoolbar
    /**
     * Set the position of the looping menu
     * @param {int} pos the looping menu position (CENTER or NEXT_TO)
     */
    this.setPosition = function(pos) {
        menu.setPosition(pos);
    };
    /**
     * Set the delay before loop
     * @param {int} timeout the delay before loop
     */
    this.setTimeout = function(timeout) {
        LoopingUtility.timeOut = timeout;
    };
    /**
     * Set the step value for quick mode
     * @param {int} _step the step for quick mode
     */
    this.setQuickModeStep = function(_step) {
        quickStep = _step;
    };

    /**
     * Return the accessibilitytoolbar instance
     * @return {AccessibilityToolbar} toolbar the accessibilitytoolbar
     */
    this.getToolbar = function() {
        if(accessibilitytoolbar) {
            return accessibilitytoolbar;
        } else {
            return null;
        }
    };

// Constructor
    init();
}
/**
 * @class Toolbox of the looping mode
 */
LoopingUtility = {
// attribut
    /**
     * Reference to the current focused element
     * @private
     */
    focusedElement: null,
    /**
     * Reference to the timer used for looping
     * @private
     */
    timerId: null,
    /**
     * Delay before loop EXPRESS IN SECOND
     * @private
     */
    timeOut: null,
    /**
     * The increment (if someone have a better definition)
     * @private
     */
    step: null,
    /**
     * Index of the previous focused item
     * @private
     */
    prevIndex: null,
    /**
     * Index of the item to focus
     * @private
     */
    nextIndex: null,
    /**
     * Index of the last item in the page focused (not taking count of looping menu or other toolbar parts
     * @private
     */
    lastDOMIndex: null,
    /**
     * Collection of items to iterate
     * @private
     */
    currentSet: null,
    /**
     * Collection of items of the previously iteration
     * @private
     */
    previousSet: null,
    /**
     * Filter to applicate to the current item collection
     * @private
     */
    currentFilter: null,
    /**
     * Filter to applicate to the previous item collection
     * @private
     */
    previousFilter: null,
    /**
     * Flag to stop loop with user action
     * @private
     */
    hasToStop: false,
    /**
     * Internal flag to remember if we double the first or last item.
     * DO NOT CALL THIS ATTRIBUT OUTTER THIS OBJECT
     * use the "hasToDouble" method instead
     * @private
     */
    hasToStay: false,
    /**
     * Internal check of "hasToDouble" flag.
     * DO NOT CALL THIS ATTRIBUT OUTTER THIS OBJECT
     * use the "hasToDouble" method instead
     * @private
     */
    hasStayed: true,

// method
    /**
     * Register the focus call back
     */
    registerFocusedHandler:function() {
        // Focus callback
var getFocus = function(evt) {
            evt = evt || window.event;
            var target = evt.target || evt.srcElement;
            // Save the element reference if it has been focused by the toolbar
            if(target.className &&
                target.className.match(/loopingmode-focused/) &&
                !LoopingUtility.isMenuItem(target)) {
                LoopingUtility.focusedElement = target;
            }
        };
        // Register focus callback for W3C browser
        if(window.addEventListener && !window.opera) {
            window.addEventListener('focus',getFocus,true);
            // Register focus callback for IE
        } else if(window.addEventListener && window.opera){
            window.addEventListener('DOMFocusIn',getFocus,true);
        } else {
            document.onfocusin = getFocus;
        }
    },
    /**
     * Get the current focused element
     * @return {HtmlNode} elt return the current focused element, -1 either
     */
    getFocusedElement: function () {
if (LoopingUtility.focusedElement !== null) {
            return LoopingUtility.focusedElement;
        }
        else {
            return -1;
        }
    },

    /**
     * Tell the looping manager if it have to stay on the first (if looping forward)
     * or the last (if looping backward) DOM element
     * @param {boolean} flag set to true to double the first or last element
     */
    hasToDouble: function (flag) {
LoopingUtility.hasToStay = flag;
        LoopingUtility.hasStayed = flag;
    },

    /**
     * Save the old filter and use the specified one on the item collection
     * @param {LoopingFilter} filter the filter to use on current set
     */
    setCurrentFilter: function (filter) {
LoopingUtility.previousFilter = LoopingUtility.currentFilter;
        LoopingUtility.currentFilter = filter;
    },

    /**
     * Save the old item collection and use the specified one as item collection to iterate
     * @param {Array} set the items collection to iterate
     */
    setCurrentSet: function (set) {
LoopingUtility.previousSet = LoopingUtility.currentSet;
        LoopingUtility.currentSet = set;
    },

    /**
     * Seek the index of the next elligible element with the current filter in the items collection
     */
    computeNextIndex: function () {
// initialisation
        var raf = Math.abs(LoopingUtility.step);
        var currentElt = null;

        // If we are on the elligible element and if we have to double
        if ((LoopingUtility.hasToStay && !LoopingUtility.hasStayed) &&
            (LoopingUtility.nextIndex !== null && LoopingUtility.currentFilter.filter(LoopingUtility.currentSet[LoopingUtility.nextIndex]))
            ) {
            // Save the fact that we have double and quit without increment pointer
            LoopingUtility.hasStayed = true;
            return;
        }
        // Default value of the pointer
        if (LoopingUtility.nextIndex === null) {
            // If we have to double, initialise internal flag
            if (LoopingUtility.hasToStay) {
                LoopingUtility.hasStayed = false;
            }
            //Initialize pointer value
            if (LoopingUtility.step > 0) {
                LoopingUtility.nextIndex = 0;
            } else {
                LoopingUtility.nextIndex = LoopingUtility.currentSet.length - 1;
            }
        }
        else {
            // Pointer incrementation and prevent array out of bound
            if (LoopingUtility.step > 0) {
                // Case of forward looping
                LoopingUtility.nextIndex++;
                if (LoopingUtility.nextIndex >= LoopingUtility.currentSet.length) {
                    LoopingUtility.nextIndex = 0;
                    //If we have to double, reset internal flag
                    if (LoopingUtility.hasToStay) {
                        LoopingUtility.hasStayed = false;
                    }
                }
            } else {
                // Case of backward looping
                LoopingUtility.nextIndex--;
                if (LoopingUtility.nextIndex < 0) {
                    LoopingUtility.nextIndex = LoopingUtility.currentSet.length - 1;
                    //If we have to double, reset internal flag
                    if (LoopingUtility.hasToStay) {
                        LoopingUtility.hasStayed = false;
                    }
                }
            }
        }
        // While we have iteration to do
        while (raf > 0) {
            currentElt = LoopingUtility.currentSet[LoopingUtility.nextIndex];
            // If element is elligible to the current filter, decrement iteration to do
            if (LoopingUtility.currentFilter.filter(currentElt)) {
                raf--;
            }
            // If element is invalid to the filter or if we still have incrementation to do
            if (!LoopingUtility.currentFilter.filter(currentElt) || raf > 0) {
                // Pointer incrementation and prevent array out of bound
                if (LoopingUtility.step > 0) {
                    // Case of forward looping
                    LoopingUtility.nextIndex++;
                    if (LoopingUtility.nextIndex >= LoopingUtility.currentSet.length) {
                        LoopingUtility.nextIndex = 0;
                        // If we have to double, reset internal flag
                        if (LoopingUtility.hasToStay) {
                            LoopingUtility.hasStayed = false;
                        }
                    }
                } else {
                    // Case of backward looping
                    LoopingUtility.nextIndex--;
                    if (LoopingUtility.nextIndex < 0) {
                        LoopingUtility.nextIndex = LoopingUtility.currentSet.length - 1;
                        //If we have to double, reset internal flag
                        if (LoopingUtility.hasToStay) {
                            LoopingUtility.hasStayed = false;
                        }
                    }
                }
            }
        }
    },

    /**
     * Iterate for the items collection and check if element are elligible to the current filter.
     * If so, focus it and apply style on it.
     */
    loopOver: function () {
var currentElt;
        // Check if required data are specified
        if (LoopingUtility.currentFilter !== null && LoopingUtility.currentSet !== null) {
            LoopingUtility.computeNextIndex();
            // Update current element
            currentElt = LoopingUtility.currentSet[LoopingUtility.nextIndex];
            // Suppress effect on previous element, if exists, by calling the filter blur callback
            if(LoopingUtility.prevIndex !== null) {
                //	Use previous filter if element is invalid for the current filter
                if(LoopingUtility.previousFilter !== null && (LoopingUtility.prevIndex > LoopingUtility.currentSet.length ||
                    !LoopingUtility.currentFilter.filter(LoopingUtility.currentSet[LoopingUtility.prevIndex]))) {
                    LoopingUtility.previousFilter.blur(LoopingUtility.previousSet[LoopingUtility.prevIndex]);
                }
                else {
                    LoopingUtility.currentFilter.blur(LoopingUtility.currentSet[LoopingUtility.prevIndex]);
                }
            }

            // Call the filter callback for focus action
            LoopingUtility.currentFilter.focus(currentElt);

            // Update DOM pointer
            if(!LoopingUtility.isMenuItem(currentElt)) {
                LoopingUtility.lastDOMIndex = LoopingUtility.nextIndex;
            }
            LoopingUtility.prevIndex = LoopingUtility.nextIndex;

            // Prepare respawn
            if(!LoopingUtility.hasToStop) {
                if(LoopingUtility.timerId !== null) clearTimeout(LoopingUtility.timerId);
                LoopingUtility.timerId = setTimeout(LoopingUtility.loopOver,LoopingUtility.timeOut*1000);
            }
            else {
                LoopingUtility.hasToStop = false;

            }
        }
    },

    /**
     * Check if specified element is part of the looping menu
     * @param {HtmlNode} elt the element to check
     * @return true if the specified element is a looping menu item, false either
     */
    isMenuItem:function(elt) {
if(elt &&
            elt.parentNode &&
            elt.parentNode.parentNode &&
            elt.parentNode.parentNode.parentNode &&
            elt.parentNode.parentNode.parentNode.id &&
            elt.parentNode.parentNode.parentNode.id.match(/loopingBar/)) {
            return true;
        }
        else  {
            return false;
        }
    },

    /**
     * Check if specified element is visible and can be focused
     * @param {HtmlNode} obj the element to check
     * @return true if the specified element is visible, false either
     */
    isVisible:function(obj)
    {
if (obj === document){
            return true;
        }
        if (!obj){
            return false;
        }
        if (!obj.parentNode){
            return false;
        }
        if (obj.style) {
            if (obj.style.display === 'none'){
                return false;
            }
            if (obj.style.visibility === 'hidden'){
                return false;
            }
        }

        //Try the computed style in a standard way
        if (window.getComputedStyle) {
            var style = window.getComputedStyle(obj, "");
            if (style.display === 'none'){
                return false;
            }
            if (style.visibility === 'hidden'){
                return false;
            }
        }

        //Or get the computed style using IE's silly proprietary way
        var styleobj = obj.currentStyle;
        if (styleobj) {
            if (styleobj['display'] === 'none') {
                return false;
            }
            if (styleobj['visibility'] === 'hidden') {
                return false;
            }
        }
        return LoopingUtility.isVisible(obj.parentNode);
    }
}

/**
 * Abstract class to define filter item
 * @class Generic definition of item filtering
 * @param {Function} _filter : function returning a {Boolean} to determine if the {HTMLNode} element is eligible.
 * @param {Function} _callbackFocus : function to be called when the given {HTMLNode} element get focus.
 * @param {Function} _callbackBlur : function to be called when the given {HTMLNode} element lost focus.
 */
function LoopingFilter(_filter, _callbackFocus, _callbackBlur) {
// attribut
    //privé
    //public
    /**
     * Filter function to check elligibility of an {HTMLNode} element
     */
    this.filter = _filter;
    /**
     * Focus callback to be called when {HTMLNode} element get focus
     */
    this.focus = _callbackFocus;
    /**
     * Blur callback to be called when {HTMLNode} element lost focus
     */
    this.blur = _callbackBlur;
    // methode
    //privé
    //public
// Constructor
}

/**
 * @class General definition of key pressed
 */
LoopingKey = {
    /**
     * Return the key pressed
     * @param {Event} e the event to check
     * @return {int} keycode the key pressed
     */
    keyPressed:function(/*Event*/ e) {

        var charCode = [];
        // For IE browser
        if(window.event) {
            charCode[0] = window.event.keyCode;
            charCode[1] = 0;
        }
        // For W3C Browser
        else if(e) {
            charCode[0] = e.keyCode;
            charCode[1] = e.which;
        }
        else return -1;

        // Return the corresponding key code
        if((charCode[0] == 32 || charCode[1] == 32))
            return LoopingKey.ENTER;
        if((charCode[0] == 13 || charCode[1] == 13))
            return LoopingKey.SPACE;
        return LoopingKey.OTHER;
    },

    /*
     * Key definition
     */
    /**
     * Enter key representation
     */
    ENTER: 1,
    /**
     * Space key representation
     */
    SPACE: 2,
    /**
     * Unknown key representation
     */
    OTHER: -1
};


/**
 * For motor disabilites.
 * This creates a visible remote control in the bottom-right corner of the screen
 * on mouse over it scrolls
 * on mouse over links it clicks on them
 * @class Manager of the remote control mode
 */
var RemoteControlMode = function () {
    // Attributs
    // Private attributs
    /**
     * Reference Remote control pad manager
     * @see {RemoteControlPad}
     * @private
     */
    var pad = null;
    /**
     * Reposition the remote every repositionTimer in milliseconds (this is part of the 'special IE6' treat)
     * @private
     */
    var repositionTimer = 50;
    /**
     * Number of pixels to scroll at a time
     * @private
     */
    var scrollSteps = 10;
    /**
     * Scroll every scrollTimer in milliseconds
     * @private
     */
    var scrollTimer = 50;
    /**
     * Internal reference to this object
     * @private
     */
    var that = this;

    // Public attributs 
    /**
     * global timerID for setTimeout and clearTimeout
     */
    this.timerId = null;
    /**
     * number of pixels to scroll at a time
     */
    this.scrollSteps = 10;
    /**
     * Element hovered by the mouse at a T time
     */
    this.selectedElt = null;
    /**
     * Timer for click on hovsder, EXPRESSED IN SECONDS
     */
    this.hoverTimer = 3;

    // Methods
    // Private methods
    /**
     * Lists all {HTMLA} and {HTMLArea} links and adds event handlers
     * @private
     */
    var makeLinksHoverable = function () {
        var elts = document.getElementsByTagName("*");
        for (var cpt = 0; cpt < elts.length; cpt++) {
            if (that.isActivable(elts[cpt]))
            {
                that.makeLinkClickableOnHover(elts[cpt]);
            }
        }
    };

    /**
     * Function to stop help motor
     */
    this.stopHelpMotor = function () {
       //Remove remotecontrol
        if(document.getElementById('remotecontrol')){
            var fleche = document.getElementById('remotecontrol');
            fleche.parentNode.removeChild(fleche);
        }
        //on recupere l'ensemble des elements du site
        var element = document.getElementsByTagName("*");
        //On boucle sur l'ensemble des élément du site'
        for (var cpt = 0; cpt < element.length; cpt++) {
            //On test si l'element est activable, si il est activable alors on detache les événements appliqués
            if (that.isActivable(element[cpt])){
                // For W3C Browser
                if (element[cpt].addEventListener) {
                    element[cpt].removeEventListener('mouseover',that.mouseOverActivableTrigger , false);
                    element[cpt].removeEventListener('mouseout', that.mouseOutActivableTrigger, false);
                    element[cpt].removeEventListener('mouseover',that.mouseOverClickableTrigger , false);
                }
                //For IE browser
                else if (element[cpt].attachEvent) {
                    element[cpt].detachEvent('onmouseover', that.mouseOverActivableTrigger);
                    element[cpt].detachEvent('onmouseout', that.mouseOutActivableTrigger);
                    element[cpt].detachEvent('onmouseout', that.mouseOverClickableTrigger);
                }
            }
        }
        // clean selectd element if exist
        if(accessibilitytoolbar.remotecontrol.selectedElt !== null) {
            accessibilitytoolbar.remotecontrol.unselectEltStyle();
        }
    };

    /**
     * Trigger a click after time out expiration
     * @param {Event} evt : event to be processed
     * @private
     */
    this.mouseOverActivableTrigger = function (evt) {
        var target = evt.target || evt.srcElement;
        var hoverTime = null;
        if (accessibilitytoolbar.remotecontrol) {
            hoverTime = accessibilitytoolbar.remotecontrol.hoverTimer * 1000;
            /* test */
            var hasParentSelected = false;
            var currentElt = target;
            while (accessibilitytoolbar.remotecontrol.selectedElt !== null && currentElt.parentNode !== null) {
                if (currentElt.parentNode == accessibilitytoolbar.remotecontrol.selectedElt)
                    hasParentSelected = true;
                else currentElt = currentElt.parentNode;
            }
            if (!hasParentSelected) {
                if (accessibilitytoolbar.remotecontrol.selectedElt !== null)
                    accessibilitytoolbar.remotecontrol.unselectEltStyle();
                /* fin test */
                accessibilitytoolbar.remotecontrol.selectedElt = target;
                accessibilitytoolbar.remotecontrol.selectEltStyle();
                /* modif du 25/03 */
                if (accessibilitytoolbar.remotecontrol.timerId !== null)
                    clearTimeout(accessibilitytoolbar.remotecontrol.timerId);
                /* fin modif */
                accessibilitytoolbar.remotecontrol.timerId = setTimeout("accessibilitytoolbar.remotecontrol.doClick()", hoverTime);
            } // test
        }
        //DEBUG : part for self working
        else {
            hoverTime = that.hoverTimer * 1000;
            that.selectedElt = target;
            that.selectEltStyle();
            that.timerId = setTimeout("that.doClick()", hoverTime);
        }
    };
    // Trigger function called when the mouse is leaving an item
    /**
     * Clear time out if element is no longer hovered
     * @param {Event} evt : event to be processed
     * @private
     */
    this.mouseOutActivableTrigger = function (evt) {
        if (accessibilitytoolbar.remotecontrol) {
            accessibilitytoolbar.remotecontrol.unselectEltStyle();
            accessibilitytoolbar.remotecontrol.selectedElt = null;
            clearTimeout(accessibilitytoolbar.remotecontrol.timerId);
        }
        //DEBUG : part for self working
        else {
            that.unselectEltStyle();
            clearTimeout(that.timerId);
        }
    }
    /**
     * Register call-back on a given element to trigger a click
     * after a time out.
     * @param {HtmlNode} elt element hovered upon
     * @public
     */
    this.makeLinkClickableOnHover = function (elt) {
        // Trigger function called when the mouse is hovering an item

        //Registering callback to elt
        if (!elt.onmouseover) { /* prevents a blunder if some DHTML is present */

            // For W3C Browser
            if (elt.addEventListener) {
                elt.addEventListener('mouseover', that.mouseOverActivableTrigger, false);
                elt.addEventListener('mouseout', that.mouseOutActivableTrigger, false);
            }
            //For IE browser
            else if (elt.attachEvent) {
                elt.attachEvent('onmouseover', that.mouseOverActivableTrigger);
                elt.attachEvent('onmouseout', that.mouseOutActivableTrigger);
            }
            //For Rusty browser
            else {
                elt.onmouseover = that.mouseOverActivableTrigger;
                elt.onmouseout = that.mouseOutActivableTrigger;
            }
        }
    }

    this.mouseOverClickableTrigger = function (/* Event */ evt) {
        var target = evt.target || evt.srcElement;
        var hoverTime = null;
        if (accessibilitytoolbar.remotecontrol.isActivable(target)) {
            if (accessibilitytoolbar.remotecontrol.selectedElt == null) {
                hoverTime = accessibilitytoolbar.remotecontrol.hoverTimer * 1000;
                accessibilitytoolbar.remotecontrol.selectedElt = target;
                accessibilitytoolbar.remotecontrol.selectEltStyle();
                accessibilitytoolbar.remotecontrol.timerId = setTimeout("accessibilitytoolbar.remotecontrol.doClick()", hoverTime);
            }
            else {
                if (!accessibilitytoolbar.remotecontrol.hasParent(target, accessibilitytoolbar.remotecontrol.selectedElt)) {
                    accessibilitytoolbar.remotecontrol.unselectEltStyle();
                    accessibilitytoolbar.remotecontrol.selectedElt = null;
                    clearTimeout(accessibilitytoolbar.remotecontrol.timerId);
                }
            }
        }
        else {
            accessibilitytoolbar.remotecontrol.unselectEltStyle();
            accessibilitytoolbar.remotecontrol.selectedElt = null;
            clearTimeout(accessibilitytoolbar.remotecontrol.timerId);
        }
    }
    /**
     * Register an event delegation to manage the hovering click function
     * @private
     */
    var registerHoverable = function () {
        /**
         * Trigger a click after time out expiration
         * @param {Event} evt : event to be processed
         * @private
         */

        // For W3C Browser
        if (document.addEventListener) {
            document.addEventListener('mouseover', that.mouseOverClickableTrigger, false);
        }
        //For IE browser
        else if (document.attachEvent) {
            document.attachEvent('onmouseover', that.mouseOverClickableTrigger);
        }
        //For Rusty browser
        else {
            document.onmouseover = mouseOverClickableTrigger;
            document.onmouseout = mouseOutClickableTrigger;
        }
    }

    /**
     * Turns the {HTMLArea} tag of the pad into a scroll control that goes either up or down
     * @private
     */
    var makeScrollControl = function () {
        var elt = null;
        //Trigger function called when mouse is hovering the pad's area
        /**
         * Trigger a scroll after time out expiration
         * @param {Event} evt : event to be processed
         * @private
         */
        var mouseOverScrollTrigger = function (evt) {
            var target = evt.target || evt.srcElement;
            var scrollDir = (target.className.match(/scrollup/)) ? -1 : (target.className.match(/scrolldown/)) ? 1 : 0;
            if (scrollDir !== 0 && accessibilitytoolbar.remotecontrol) {
                var scrollBy = accessibilitytoolbar.remotecontrol.getScrollStep() * scrollDir;
                var timeOut = accessibilitytoolbar.remotecontrol.getTimeOut();
                accessibilitytoolbar.remotecontrol.timerId = setInterval("window.scrollBy(0," + scrollBy + ")", timeOut);
            }
            //DEBUG : part for self working
            else if (scrollDir !== 0) {
                var scrollBy = that.scrollSteps * scrollDir;
                var timeOut = that.scrollTimer;
                that.timerId = setInterval("window.scrollBy(0," + scrollBy + ")", timeOut);
            }
        };
        //Trigger function called when mouse is leaving the pad's area
        /**
         * Clear scroll time out if the pad is no longer hovered
         * @param {Event} evt : event to be processed
         * @private
         */
        var mouseOutScrollTrigger = function (evt) {
            if (accessibilitytoolbar.remotecontrol) {
                clearInterval(accessibilitytoolbar.remotecontrol.timerId);
            }
            //DEBUG : part for self working
            else {
                clearInterval(that.timerId);
            }
        }
        //Registering callback to the pad's area
        for (var i = 0; i < pad.getAreaTag().length; i++) {
            elt = pad.getAreaTag()[i];
            // For W3C Browser
            if (elt.addEventListener) {
                elt.addEventListener('mouseover', mouseOverScrollTrigger, false);
                elt.addEventListener('mouseout', mouseOutScrollTrigger, false);
            }
            //For IE browser
            else if (elt.attachEvent) {
                elt.attachEvent('onmouseover', mouseOverScrollTrigger);
                elt.attachEvent('onmouseout', mouseOutScrollTrigger);
            }
            //For Rusty browser
            else {
                elt.onmouseover = mouseOverScrollTrigger;
                elt.onmouseout = mouseOutScrollTrigger;
            }
            elt.onclick = function () {
                return false;
            }
        }
    }

    // Methodes publiques
    /**
     * Special IE6 positioning routine
     */
    this.setPosition = function () {
        pad.setPosition();
    }

    /**
     * Return the scrolling step of the page
     * @return {int} step the scroll step
     */
    this.getScrollStep = function () {
        return scrollSteps;
    }

    /**
     * Return the timeout for activate link
     * @return {int} timeout the timeout before link activation
     */
    this.getTimeOut = function () {
        return scrollTimer;
    }

    /**
     * Check if the given element is activable
     * @param {HtmlTag} elt the {HTMLNode} to check
     * @return {Boolean} true if the {HTMLNode} is activable, false either
     */
    this.isActivable = function(elt) {
        // Skip specific element (like pad area)
    	nav = accessibilitytoolbar.getNavigateur();
        if((nav.indexOf('MSIE') > 0) && (nav < 'MSIE 8')) {        	
        	className = elt.className;
        } else {
        	className = elt.getAttribute("class");
        }
    	if((className && className.match(/dontclick/)) ) {
            return false;
        } else {
            // Check elligible form element
            if (elt.nodeName.match(new RegExp("^INPUT|BUTTON|TEXTAREA|SELECT|OPTION"))) {
                if(elt.disabled == true || elt.type == "hidden" || (elt.tabIndex && elt.tabIndex<0)) {
                    return false;
                }
                else  {
                    return true;
                }
            }
            // Check label with associated form element
            else if(elt.nodeName.match(/^LABEL$/i) && elt.htmlFor !== null && document.getElementById(elt.htmlFor) !== null) {
                return true;
            }
            // Check regular activable element
            else if(elt.nodeName.match(new RegExp("^A|AREA"))) {
                return true;
            }
            // Check element with event specified
            /*else if(elt.nodeName.match(/^SPAN|IMG$/i) && elt.parentNode && that.isActivable(elt.parentNode)) {
                return true;
            } */
            else {
                return false;
            }
        }
    }

    /**
     * Check if the element has the specified parent element into his hierarchy
     * @param {HtmlTag} elt the element to check
     * @param {HtmlTag} parent the parent to look for
     * @return {Boolean} true if the element is a descendant of parent.
     */
    this.hasParent = function (elt, parent) {
        if (elt !== null) {
            if (elt.parentNode !== null) {
                if (elt.parentNode == parent)
                    return true;
                else return that.hasParent(elt.parentNode, parent);
            }
            else return false;
        }
        else return false;
    }

    /**
     * Swap the style apply to the current hovered element
     */
    this.toggleSelectedEltStyle = function () {
        var associatedLabel = null;
        if (that.selectedElt) {
            // If the selected element is a form element, check if it has an associated label
            if (that.selectedElt.nodeName.match(/^INPUT|BUTTON|TEXTAREA|SELECT|OPTION/gi)) {
                var labels = document.getElementsByTagName("label");
                for (var cptLab = 0; cptLab < labels.length; cptLab++) {
                    if (labels[cptLab].htmlFor == that.selectedElt.id)
                        associatedLabel = labels[cptLab];
                }
            }
            // If current element has the hovered style applyed, remove it
            if (that.selectedElt.className.match(/remotecontrol-selected/)) {
                that.selectedElt.className = that.selectedElt.className.replace(/ {0,1}remotecontrol-selected/, "");
                if (associatedLabel !== null)
                    associatedLabel.className = associatedLabel.className.replace(/ {0,1}remotecontrol-selected/, "");
                // Else, apply it
            } else {
                that.selectedElt.className = that.selectedElt.className + " remotecontrol-selected";
                if (associatedLabel !== null)
                    associatedLabel.className = associatedLabel.className + " remotecontrol-selected";
            }
        }
    }

    /**
     * Apply selected style on element
     */
    this.selectEltStyle = function () {
        var associatedLabel = null;
        if (that.selectedElt.nodeName.match(/^INPUT|BUTTON|TEXTAREA|SELECT|OPTION/gi)) {
            var labels = document.getElementsByTagName("label");
            for (var cptLab = 0; cptLab < labels.length; cptLab++) {
                if (labels[cptLab].htmlFor == that.selectedElt.id)
                    associatedLabel = labels[cptLab];
            }
        }
        if (!that.selectedElt.className.match(/^remotecontrol-selected$/i)) {
            that.selectedElt.className = that.selectedElt.className + " remotecontrol-selected";
        }
        if (associatedLabel !== null)
            if (!associatedLabel.className.match(/^remotecontrol-selected$/i))
                associatedLabel.className = associatedLabel.className + " remotecontrol-selected";
    }
    /**
     * Remove selected style on element
     */
    this.unselectEltStyle = function () {
        var associatedLabel = null;
        if (that.selectedElt) {
            if (that.selectedElt.nodeName.match(/^INPUT|BUTTON|TEXTAREA|SELECT|OPTION/gi)) {
                var labels = document.getElementsByTagName("label");
                for (var cptLab = 0; cptLab < labels.length; cptLab++) {
                    if (labels[cptLab].htmlFor == that.selectedElt.id)
                        associatedLabel = labels[cptLab];
                }
            }
            // If current element has the hovered style applyed, remove it
            that.selectedElt.className = that.selectedElt.className.replace(/ {0,1}remotecontrol-selected/gi, "");
            if (associatedLabel !== null)
                associatedLabel.className = associatedLabel.className.replace(/ {0,1}remotecontrol-selected/gi, "");
        }
    }
    /**
     * Simulate a user click on the selected element
     */
    this.doClick = function () {
        if (that.selectedElt !== null) {
            // go to parent while elt is not activable
            while(!accessibilitytoolbar.remotecontrol.isActivable(that.selectedElt))
            {
                that.selectedElt = that.selectedElt.parentNode;
            }
            // Case of a link ... we do a simple redirection
            if (that.selectedElt.nodeName.match(/^A|AREA$/i) && that.selectedElt.href && that.selectedElt.href !== "" && !that.selectedElt.href.match(new RegExp("#$"))) {
                window.location = that.selectedElt.href;
            }
             else if ((that.selectedElt.nodeName.match(/^SELECT|TEXTAREA$/i)) ||
                ((that.selectedElt.nodeName.match(/^INPUT$/i)) &&
                    ((that.selectedElt.type) &&
                        (that.selectedElt.type == "text" || that.selectedElt.type == "password")) )) {
                that.selectedElt.focus();
            }
            // Case of a form item ... we do a simple click 
            else if (that.selectedElt.nodeName.match(/^INPUT|BUTTON|OPTION$/i)) {
                that.selectedElt.click();
            }
            // Case of a form label ... we click the associated form item
            else if (that.selectedElt.nodeName.match(/^LABEL$/i)) {
                document.getElementById(that.selectedElt.htmlFor).click();
            }
            else if (that.selectedElt.nodeName.match(/^SPAN|IMG$/i) && that.selectedElt.parentNode && that.isActivable(that.selectedElt.parentNode)) {
                var elt = that.selectedElt;
                that.selectedElt = that.selectedElt.parentNode;
                that.doClick();
                that.selectedElt = elt;
            }
            // Case of an activable onclick item ... we just launch the function
            else if (that.selectedElt.onclick && that.selectedElt.onclick !== null) {
                that.selectedElt.onclick();
            }
            // By default, simulate a click
            else {
                var fakeClick = null;
                /* Case of W3C Compliant Browser */
                if (document.createEvent) {
                    fakeClick = document.createEvent("MouseEvent");
                    fakeClick.initMouseEvent(
                        "click"
                        , true
                        , true
                        , window
                        , 0
                        , /*event.screenX*/0
                        , /*event.screenY*/0
                        , /*event.clientX*/0
                        , /*event.clientY*/0
                        , /*event.ctrlKey*/false
                        , /*event.altKey*/false
                        , /*event.shiftKey*/false
                        , /*event.metaKey*/false
                        , 0
                        , null);
                    that.selectedElt.dispatchEvent(fakeClick);
                } else {
                    /* Case of IE */
                    if (document.createEventObject) {
                        fakeClick = document.createEventObject();
                        fakeClick.button = 1;
                        that.selectedElt.fireEvent("onclick", fakeClick);
                    }
                }
            }
        }
    }

    /**
     * Initialize the remotecontrol object on demand
     */
    this.init = function () {
        pad = new RemoteControlPad();

        /* dealing with IE6's inability to do position:fixed */
        var v = navigator.appVersion;
        if (navigator.appName.match(/Internet Explorer/)) {
            if (parseInt(v.substring(v.indexOf("MSIE") + 5)) > 0 && parseInt(v.substring(v.indexOf("MSIE") + 5)) <= 6) {
                setInterval("accessibilitytoolbar.remotecontrol.setPosition()", repositionTimer);
            }
        }
        makeScrollControl();
        makeLinksHoverable();
    };

    // Constructeur
    this.init();
}
/**
 * Remote control used in remote control mode to allow user
 * to scroll the page
 * @class Graphical scroll remote control
 */
function RemoteControlPad() {
    // Privates attributes 
    /**
     * Remote control pad image
     * @private
     */
    var imgSrc = imagesPath['arrows'] + "?v=1";
    /**
     * Remote control pad image width
     * @private
     */
    var imgWidth = 73;
    /**
     * Remote control pad image height
     * @private
     */
    var imgHeight = 132;
    /**
     * Remote control pad image distance form screen border
     * @private
     */
    var imgFromBorder = 20;
    /**
     * Reference to {HTMLDiv} tag used to render the remote control pad
     * @private
     */
    var pad = null;
    /**
     * Local reference to this object
     * @private
     */
    var that = this;


    // Privates Methods
    /**
     * Initialisation of the remote control pad (creation of the html structure)
     * @private
     */
    var init = function () {
        createRemoteHTML();
    };

    /**
     * Create the remote and append it to the document
     * @private
     */
    var createRemoteHTML = function () {
        pad = document.createElement("div");
        pad.id = "remotecontrol";
        /* rect: left-x, top-y, right-x, bottom-y. */
        pad.innerHTML = "<map name='remotemap'>"
            + "<area href='#' class='dontclick scrollup' shape='rect' coords='0,0," + imgWidth + "," + (imgHeight / 2) + "' alt='" + accessibilitytoolbar.get("remotepad_scrollup") + "' />"
            + "<area href='#' class='dontclick scrolldown' shape='rect' coords='0," + (imgHeight / 2) + "," + (imgHeight / 2) + "," + imgHeight + "' alt='" + accessibilitytoolbar.get("remotepad_scrolldown") + "' />"
            + "</map>";
        var i = document.createElement("img");
        i.src = imgSrc;
        i.width = imgWidth;
        i.height = imgHeight;
        i.useMap = "#remotemap";
        pad.appendChild(i);
        document.getElementsByTagName("body")[0].appendChild(pad);
    };

    // Publics methods
    /**
     * Special IE6 positioning routine
     */
    this.setPosition = function () {
        var h = document.documentElement.clientHeight;
        var w = document.documentElement.clientWidth;
        var st = document.documentElement.scrollTop;
        var sl = document.documentElement.scrollLeft;
        pad.style.pixelTop = st + h - imgFromBorder - imgHeight;
        pad.style.pixelLeft = sl + w - imgFromBorder - imgWidth;
    }

    /**
     * Define the pad image source location
     * @param {String} location, the URL of the image
     */
    this.setImgSrc = function (location) {
        pad.childNodes[1].setAttribute("src", location);
    }

    /**
     * Get the collection of {HTMLArea} tag used by the pad
     * @return {Array} nodes, the {HTMLArea} tag collection
     */
    this.getAreaTag = function () {
        return pad.childNodes[0].childNodes;
    }

    // Constructeur
    init();
}

document.confortdelecture = true;
/**
 * Method to check if toolbar is launched.
 * @return {Boolean} true when the accessbilitytoolbar is launched.
 */
function hasConfortdelecture() {
    return true;
}
/**
 * @class Entry point for the accessibility tool-bar
 */
accessibilitytoolbar = {
    
	/**
     * {bool}
     */
    isModern: true,

	/**
     * {object}
     */
    uncompatibility: {
        /**************************************Tableau des nom des navigateurs*****************************
         ie X => MSIE X (exemple MSIE 7.0)
         Firefox X => Firefox v (ex Firefox 31.0)
        ***************************************************************************************************/
        a11yDyslexyFontEnabled: ['MSIE 7.0','MSIE 8.0']
    },
        
    /**
     * {ToolbarStrings} String localization Manager
     */
    strings: new ToolbarStrings(),
    
    /**
     * {Array} of all possible values for the content to skip to
     */
    contentToLookFor: ["contenu", "content"],

    /**
     * {string} css class containt Link
     */
    cssLinkModeClassName: null,

    /**
     * {string} id of skipLink
     */
    idSkipLinkIdLinkMode: null,

    /**
     * {string} skiplink of application
     */
    skipLinkCreate: null,

    /**
     * {string} class of skiLink
     */
    cssSkipLinkClassName : "cdu_hide",

    /**
     * {boolean} using skip link or not
     */
    skipLink : false,
    /**
     * {String} Id contain the link of using confort
     */
    idLinkModeContainer : null,

    /**
     * Value to jump to
     */
    contentToJumpTo: null,
    /**
     * Cookie error message
     */
    secCookie: null,
    /**
     * User preference manager
     */
    userPref: null,
    /**
     * Flag to check if user has change is preference
     */
    hasDoneSettings: false,

    /**
     * {LoopingMode} Looping mode Manager
     */

    loopingmode: null,
    /**
     * {storedValue} cookie value received or not
     */
    storedValue: false,

    /**
     * {RemoteControlMode} Remote control Manager
     */
    remotecontrol: null,

    /**
     * Reference the ruler
     */
    toolbarRuler : false,

    /**
     * array of css stylesheets removed
     */
    savesStylesheets : [],

    /**
     * array of elements where style attribute have been removed
     */
    savStyleElmtAtt : [],

    /**
     * array of style value indexed ontot the same key as elements removed
     */
    savStyleAttElmt : [],


    // when the user change the lang of the interface, wee need to reload after save is done
    needToReload : false,
    
    // addevent input params : 
    // 1- for addeventlistenername
    // 2- for attacheventlistener
    // 3- the object
    // 4- the callback function to call when event occurs
    uciAttachEvent: function(wichAdd,wichAttach,obj,callBack) {
        if(obj)
        {
        if(obj.addEventListener){
            obj.addEventListener(wichAdd, callBack, false);
        }else if (obj.attachEvent){
            obj.attachEvent(wichAttach, callBack);
        }else{
            obj.onclick = callBack;
        }
        }
    },

    //
    uci_MenuButtonEvent: function(e){
        if (!e)
            e = window.event;
        var target = e.target || e.srcElement;
        //On récupere le parent de l'élément
        var target_enfant = target;
        var className = target.className;
        if((typeof className === "string" && className.indexOf('cdu-icon') > -1) ) {     
         
        	target=target.parentNode;
        }
        // case of path svg
        if(typeof className === 'object' && 'baseVal' in className) {              
        	target=target.parentNode.parentNode;                
        }        
        target=target.parentNode;
        var tagId = target.id;
        var etat = target.getAttribute('aria-selected');
        if(e.type == 'click' && etat == 'false')
        {
            accessibilitytoolbar.uci_OuvrirMenuOnglet(target);
        }
        else if(e.type == 'keydown')
        {
            // Touche Entré
            if(e.keyCode == '13' && etat == 'false')
            {
                accessibilitytoolbar.uci_OuvrirMenuOnglet(target);
            }
            // Touches haut ou bas
            else if(e.keyCode == '38 ' || e.keyCode == '37')
            {
                // accede à l'onglet pr�c�dent, soit il existe, soit on revient au dernier �l�ment
                accessibilitytoolbar.uci_OuvrirMenuOnglet(accessibilitytoolbar.previousElementSibling(target_enfant) || target.children[(target.children.length-1)]);
                accessibilitytoolbar.stopEvt(e);
            }
            // Touches bas ou droite
            else if(e.keyCode == '40' || e.keyCode == '39')
            {
                // accede à l'onglet suivant, soit il existe, soit on revient au premier �l�ment
                accessibilitytoolbar.uci_OuvrirMenuOnglet(accessibilitytoolbar.nextElementSibling(target_enfant) || target.children[0]);

                // on stoppe la propagation de l'�v�nement
                accessibilitytoolbar.stopEvt(e);
            }
        }
    },
    previousElementSibling : function( el ) {
        if( el.previousElementSibling ) {
            return el.previousElementSibling;
        } else {
            while( el = el.previousSibling ) {
                if( el.nodeType === 1 ) return el;
            }
        }
    },
    nextElementSibling : function( el ) {
        if( el.nextElementSibling ) {
            return el.nextElementSibling;
        } else {
            while( el = el.nextSibling ) {
                if( el.nodeType === 1 ) return el;
            }
        }
    },
    // callback of event on radiobuttons
    uciRadioButtonEvent: function(e) {
        if (!e)
            e = window.event;
        var target = e.target || e.srcElement;
        // on boucle jusqu'� remonter sur un li si l'event est envoy� depuis un sous �l�ment
        var tagId = target.id;
        var targetEnfant = target;
        while(tagId==='')
        {
            target=target.parentNode;
            tagId = target.id;
        }
        var etat = target.getAttribute('aria-checked');
        if(document.getElementById('uci_activateOnglet').style.display !== 'block' || tagId.match(/uci_quick/g) == null){
        // check if clicked
            if(e.type == 'click')
            {
                accessibilitytoolbar.uciCocherRadioButton(target);
            }
            else if(e.type == 'keydown')
            {
                // Touche Espace
                if(e.keyCode == '32')
                {
                    accessibilitytoolbar.uciCocherRadioButton(target);
                }
                // Touches haut ou gauche
                else if(e.keyCode == '38' || e.keyCode == '37')
                {
                    // coche le bouton pr�c�dent, soit il existe, soit on revient au dernier �l�ment
                    accessibilitytoolbar.uciCocherRadioButton(accessibilitytoolbar.previousElementSibling(target) || target.parentNode.children[(target.parentNode.children.length-1)]);

                    accessibilitytoolbar.stopEvt(e);
                }
                // Touches bas ou droite
                else if(e.keyCode == '40' || e.keyCode == '39')
                {
                    // coche le bouton suivant, soit il existe, soit on revient au premier �l�ment
                    accessibilitytoolbar.uciCocherRadioButton(accessibilitytoolbar.nextElementSibling(target) || target.parentNode.children[0]);

                    // on stoppe la propagation de l'�v�nement
                    //IE9 & Other Browsers
                    accessibilitytoolbar.stopEvt(e);
                }
            }
        }
    },
    uciCocherRadioButton: function(elmt) {
        // on active le bouton en question
        elmt.setAttribute('aria-checked','true');
        elmt.tabIndex='0';
        //var bIsColorPalette = false;
        var clearColor = "";
        // remove selected class if present
        elmt.className = elmt.className.replace(/ uci_couleur_li_selected{0,1}/,"");
        elmt.className = elmt.className.replace(/ uci_choix_selected{0,1}/,"");
        // add the selected class
        elmt.className = elmt.className.replace(/uci_couleur_li{0,1}/,"uci_couleur_li uci_couleur_li_selected");
        elmt.className = elmt.className.replace(/uci_choix{0,1}/,"uci_choix uci_choix_selected");
        if(elmt.id.match(/a11yBigger/g) || elmt.id.match(/a11yVisualPredefined/g)){
            if(document.getElementById('uci_activateOnglet').style.display == 'block' && elmt.id.match(/uci_a11y/gi) !=null){
                var element = /^uci_(\S+)$/.exec(elmt.id);
                // on vérifie que son copain existe dans les réglages rapides
                if(document.getElementById('uci_quick_'+ element[1]))
                {
                    accessibilitytoolbar.uciCocherRadioButton (document.getElementById('uci_quick_'+ element[1]));
                    elmt.focus();
                }
            }else if(document.getElementById('uci_activateOnglet').style.display == 'none' && elmt.id.match(/uci_quick/gi) !=null){
                var element = /^uci_quick_(\S+)$/.exec(elmt.id);
                accessibilitytoolbar.uciCocherRadioButton (document.getElementById('uci_'+ element[1]));
                elmt.focus();
            }
        } else {
            elmt.focus();
        }

        // on d�sactive ses fr�res
        var reponses = elmt.parentNode;
        var iterator;
        for(iterator = 0; iterator<reponses.children.length;iterator++) {
            // on r�cup�re un fils
            if(reponses.children[iterator]!=elmt)
            {
                reponses.children[iterator].setAttribute('aria-checked','false');
                reponses.children[iterator].tabIndex='-1';
                
                // remove selected class if present
                reponses.children[iterator].className = reponses.children[iterator].className.replace(/ uci_couleur_li_selected{0,1}/,"");
                reponses.children[iterator].className = reponses.children[iterator].className.replace(/ uci_choix_selected{0,1}/,"");
            }
            // use the value of iterator to change the cookie value
            else
            {
                // Here iterator is equal to the index of the radio option 0 first option selected , 1 the second one etc..
                // so from here set the stackv3[myoption]='myvalue-'+iterator;
                // The other option is to define an id wich contains the key and value like id="uciOptions_a11yBigger_keepit"
                var resArray=elmt.id.split('_');
                // key, value
                // make switch case on prefname
                prefName=resArray[resArray.length-2];
                value= resArray[resArray.length-1];
                if (prefName === 'a11yRegleColor'){
                    document.getElementById('uci_regle_couleur_lien').style.backgroundColor = value;
                    if(document.getElementById('uci_regle_couleur_lien').style.setProperty)
                        document.getElementById('uci_regle_couleur_lien').style.setProperty ("background-color", value, "important");
                } else if (prefName === 'a11yNavLienSelColor'){
                    document.getElementById('uci_NavLienSel').style.backgroundColor = value;
                    if(document.getElementById('uci_NavLienSel').style.setProperty)
                        document.getElementById('uci_NavLienSel').style.setProperty ("background-color", value, "important");
                } else if (prefName === 'a11yNavLienNonVisColor'){
                    document.getElementById('uci_NavLienNonVis').style.backgroundColor = value;
                    if(document.getElementById('uci_NavLienSel').style.setProperty)
                        document.getElementById('uci_NavLienNonVis').style.setProperty ("background-color", value, "important");
                } else if (prefName === 'a11yNavLienVisColor'){
                    document.getElementById('uci_NavLienVis').style.backgroundColor = value;
                    if(document.getElementById('uci_NavLienSel').style.setProperty)
                        document.getElementById('uci_NavLienVis').style.setProperty ("background-color", value, "important");
                }
                accessibilitytoolbar.userPref.set(prefName,value);
                // if the user change the font or background color without activating the option, then activate it
                if((accessibilitytoolbar.userPref.get('a11yVisualSettings') !=='personnal') && (resArray[resArray.length-2] === 'a11yFontColor' || resArray[resArray.length-2] === 'a11yBackgroundColor')){
                    accessibilitytoolbar.userPref.set('a11yVisualSettings','personnal');
                    document.getElementById('uci_couleur_personnalisees_input').checked='checked';
                    document.getElementById('uci_couleur_predefenie_input').removeAttribute('checked');
                } else{ if(accessibilitytoolbar.userPref.get('a11yVisualSettings') ==='personnal' && resArray[resArray.length-2] === 'a11yVisualPredefinedSettings'){
                            accessibilitytoolbar.userPref.set('a11yVisualSettings','predefined');
                            document.getElementById('uci_couleur_predefenie_input').checked='checked';
                            document.getElementById('uci_couleur_personnalisees_input').removeAttribute('checked');
                        }
                    }
            }
        }
        if(document.getElementById('uci_validation').className==='cdu_n'){
            document.getElementById('uci_validation').className="";
        }
        document.getElementById('uci_zone_form').style.display="block";
        if(accessibilitytoolbar.userPref.get("a11yApercuAuto")!=="off"){
            accessibilitytoolbar.setCSS();

            // jump to content if needed
            accessibilitytoolbar.jumpToContent();
        }
    },

    uci_OuvrirMenuOnglet: function(elmt){
        elmt.setAttribute('aria-selected','true');
        elmt.tabIndex='0';
        elmt.parentNode.tabIndex='0';
        var spanId = /^uci_contenu_(\S+)$/.exec(elmt.getAttribute('aria-controls'));
        document.getElementById(spanId[1]).className='onglet_1 onglet';
        document.getElementById(elmt.getAttribute('aria-controls')).style.display="block";
        elmt.focus();
        // on d�sactive ses fr�res
        var reponses = elmt.parentNode;
        var iterator = 0;
        for(iterator = 0; iterator<reponses.children.length;iterator++) {
            // on r�cup�re un fils
            if(reponses.children[iterator]!=elmt)
            {
                reponses.children[iterator].setAttribute('aria-selected','false');
                reponses.children[iterator].tabIndex='-1';
                reponses.children[iterator].parentNode.tabIndex='-1';
                var spanIdOther = /^uci_contenu_(\S+)$/.exec(reponses.children[iterator].getAttribute('aria-controls'));
                document.getElementById(spanIdOther[1]).className='onglet_0 onglet';
                document.getElementById(reponses.children[iterator].getAttribute('aria-controls')).style.display="none";
            }
        }
    },

    uci_aria_radio_simulation: function(uciIdListe){
        // Gestion des boutons radio simul�s en ARIA
        var reponses = document.getElementById(uciIdListe);
        if(reponses){
            var iterator = 0;
            var children;
            // parcours de tous les enfants de la liste
            for(iterator = 0; iterator<reponses.children.length;iterator++) {
                // on r�cup�re un fils
                children = reponses.children[iterator];
                accessibilitytoolbar.uciAttachEvent('click','onclick',children,accessibilitytoolbar.uciRadioButtonEvent);
                accessibilitytoolbar.uciAttachEvent('keydown','onkeydown',children,accessibilitytoolbar.uciRadioButtonEvent);
            }
        }
    },

    uci_aria_menu_simulation: function(uciIdListe){
        // Gestion du systeme d'onglet simulé en ARIA
        var reponses = document.getElementById(uciIdListe);
        if(reponses){
            var iterator = 0;
            var children;
            // parcours de tous les enfants de la liste
            for(iterator = 0; iterator<reponses.children.length;iterator++) {
                // on r�cup�re un fils
                children = reponses.children[iterator];
                accessibilitytoolbar.uciAttachEvent('click','onclick',children,accessibilitytoolbar.uci_MenuButtonEvent);
                accessibilitytoolbar.uciAttachEvent('keydown','onkeydown',children,accessibilitytoolbar.uci_MenuButtonEvent);
            }
        }
    },

    /**
     * Get the localized string associated to the specified reference
     * in the correct language
     * @param {String} string the text reference
     * @return {String} the text in the right language
     */
    get: function (str) {
        return this.strings.get(str);
    },

    /**
     * Retourne si le navigateur est compatible ou pas
     * @param {string}
     * @return {bool}
     * @function
     */
    getCompatible: function(toolsToolbar){
        var testNavigateur = this.getNavigateur();
        if(this.uncompatibility[toolsToolbar]){
            for (var i = 0; i< this.uncompatibility[toolsToolbar].length; i++){
                if (this.uncompatibility[toolsToolbar][i] == testNavigateur) {
                    return false;
                }
            }
        }
        return true;
    },

    getNavigateur : function(){
        var ua= navigator.userAgent, tem,
            M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([\d\.]+)/i) || [];
        if(/trident/i.test(M[1])){
            tem=  /\brv[ :]+(\d+(\.\d+)?)/g.exec(ua) || [];
            return 'IE '+(tem[1] || '');
        }
        M= M[2]? [M[1], M[2]]:[navigator.appName, navigator.appVersion, '-?'];
        if((tem= ua.match(/version\/([\.\d]+)/i))!== null) M[2]= tem[1];
        return M.join(' ');
    },

    /**
     * Add the right CSS link to the head for our tool-bar
     */
    createToolbarCSSLink: function () {
        var l = document.createElement('LINK');
        l.rel = "stylesheet";
        l.type = "text/css";
        l.href = uci_classic_toolbar_css;
        l.id = "a11yCSS";
        this.head.appendChild(l);
    },

    /**
     *
     */
    toolbarCDUContent: function (){   
        var str = "";
        if(accessibilitytoolbar.idLinkModeContainer){
            str = accessibilitytoolbar.toolbarCreateLink();
        }else{
            str = accessibilitytoolbar.toolbarCreateButton();
        }
        return str;
    },

    /**
     * Generates the accessibility too-bar with a button
     *
     */
    toolbarCreateButton: function () {
        var str="";
            str += "<div id='cdu_zone'>";
            if(accessibilitytoolbar.userPref.get('a11yToolbarEnable')=='on'){
                str += "<p id='cdu_close' style='display:none'><button title=\"";
            }else{
                str += "<p id='cdu_close' style='display:block'><button title=\"";
            }

            str +=this.get('uci_alt_logo');
            str += "\">";
            str += this.get('uci_serv_name');
            str += "<span>+</span></button></p>";
            str += "<div id='cdu_content' class='cdu_displayN' >";
            str += accessibilitytoolbar.createToolbar();
        return str;
    },

    /**
     * Generates the accessibility too-bar with a link
     *
     */
    toolbarCreateLink: function () {
        var str="";
        var style = ".cdu_hide {display:none} #cdu_close {display:none}";
        var newStyle = document.createElement("style");
        newStyle.setAttribute("type", "text/css");
        if (document.all && !window.opera) { // if IE then we can't rely on newStyle.appendChild(textnode)
            newStyle.styleSheet.cssText = style;
        }else { // standards-oriented browsers
            newStyle.appendChild(document.createTextNode(style));
        }
        var _head = document.getElementsByTagName('head')[0];
        // newStyle
        _head.insertBefore(newStyle, _head.firstChild);


        //initialisation str for using into createToolbar function
        //search link container
        this.node = document.getElementById(accessibilitytoolbar.idLinkModeContainer);
        //create link with attribute
        this.lien = document.createElement("a");
        this.lien.innerHTML =  this.get('uci_serv_name')+'<span class="uci-plus-orange">+</span>';
        if(accessibilitytoolbar.cssLinkModeClassName){
            this.lien.className=accessibilitytoolbar.cssLinkModeClassName;
        }
        this.lien.setAttribute("id" ,'uci_link');
        this.lien.setAttribute("title", this.get('uci_alt_logo'));
        this.lien.setAttribute("href", "#");
        this.node.appendChild(this.lien);

        //create skipLink for accessibility
        //search link container
        var skipLinkCreate = document.createElement("a");
        skipLinkCreate.innerHTML = this.get('uci_serv_name')+'<span class="uci-plus-orange">+</span>';
        skipLinkCreate.className=accessibilitytoolbar.cssSkipLinkClassName;
        skipLinkCreate.setAttribute("id" ,'idCduSkip');
        skipLinkCreate.setAttribute("title",  this.get('uci_alt_logo'));
        skipLinkCreate.setAttribute("href", "#");
        if(accessibilitytoolbar.idLinkModeContainer){
            if(accessibilitytoolbar.idSkipLinkIdLinkMode){
                this.node = document.getElementById(accessibilitytoolbar.idSkipLinkIdLinkMode);
                this.node.appendChild(skipLinkCreate);
            }else{
                this.body.insertBefore(skipLinkCreate, this.body.firstChild);
            }
        }
        //create cdu_content zone
        str += "<div id='cdu_zone'>";

        //create content of CDU
        str += "<div id='cdu_content' class='cdu_displayN' >";
        str += accessibilitytoolbar.createToolbar();
        str += "</div>";
        return str;

    },

    /**
     * Generates the accessibility tool-bar per se
     */
    createToolbar: function () {
        var str = '';
        
        str += "<form onsubmit='return false;' onreset='return false;' name='uci_form' action='#' id='uci_form'>";
        if (accessibilitytoolbar.secCookie !== null) {
            str += "<p id='cdu_secu'>";
            str += "<span class='cdu_hide'>";
            str += this.get('uci_securityCookieChangeAlert');
            str += "</span>";
            str += this.get("uci_securityCookieChange");
            str += "&nbsp;<a href=\""+helpPath[accessibilitytoolbar.strings.getLocale()]+"#_Gestion_des_cookies\">" + this.get("uci_securityCookieChangeLinkPage") + "</a>";
            str += "</p>";
        }else {
            str += UciIhm.InitUciIHM();
        }
        str += "</form>";

        return str;
    },

    /**
     * Add object to objectList for toolbar events
     */
    createObjectBehaviour: function (){
        //declarate my object list in array
        var myObject=[];
        myObject.push(document.getElementById("cdu_jump_link"));
        if(accessibilitytoolbar.idLinkModeContainer){
            myObject.push(document.getElementById("uci_link"));
            myObject.push(document.getElementById("closeLink"));
            myObject.push(document.getElementById("idCduSkip"));
        }
        if(document.getElementById("cdu_close"))
        {
            myObject.push(document.getElementById("cdu_close").getElementsByTagName("button")[0]);
        }
        accessibilitytoolbar.eventToolbar(myObject);

        accessibilitytoolbar.uci_aria_radio_simulation('uci_reponses_bigger');
        accessibilitytoolbar.uci_aria_radio_simulation('uci_reponses_bigger_quick_set');
        accessibilitytoolbar.uci_aria_radio_simulation('uci_reponses_couleurpredefinie_quick_set');

        accessibilitytoolbar.uci_aria_radio_simulation('uci_reponses_wordspacing');
        accessibilitytoolbar.uci_aria_radio_simulation('uci_reponses_charspacing');
        accessibilitytoolbar.uci_aria_radio_simulation('uci_reponses_linespacement');
        if(this.getCompatible('a11yDyslexyFontEnabled'))
        {
            accessibilitytoolbar.uci_aria_radio_simulation('uci_reponses_fontfamily');
        }
        accessibilitytoolbar.uci_aria_radio_simulation('uci_reponses_changecasse');
        if(this.getCompatible('a11yRegleEnabled'))
        {
            accessibilitytoolbar.uci_aria_radio_simulation('uci_reponses_epaisseurregle');
            accessibilitytoolbar.uci_aria_radio_simulation('uci_reponses_couleur_regle');
        }
        accessibilitytoolbar.uci_aria_radio_simulation('uci_reponses_couleurpredefinie');
        accessibilitytoolbar.uci_aria_radio_simulation('uci_reponses_couleurpolice');
        accessibilitytoolbar.uci_aria_radio_simulation('uci_reponses_couleurbackground');
        accessibilitytoolbar.uci_aria_radio_simulation('uci_reponses_couleur_lien_visite');
        accessibilitytoolbar.uci_aria_radio_simulation('uci_reponses_couleur_lien_notsel');
        accessibilitytoolbar.uci_aria_radio_simulation('uci_reponses_couleur_lien_sel');
        accessibilitytoolbar.uci_aria_radio_simulation('uci_reponses_DelayBeforeLoop');
        accessibilitytoolbar.uci_aria_radio_simulation('uci_reponses_a11yMenuPositionning');
        accessibilitytoolbar.uci_aria_radio_simulation('uci_reponses_DelayBeforeLoop_auto');
        accessibilitytoolbar.uci_aria_radio_simulation('uci_reponses_a11yQuickMode');

        //gestion des evenement sur les onglets :
        accessibilitytoolbar.uci_aria_menu_simulation('uci_onglet_confort');
        accessibilitytoolbar.uciAttachEvent('click','onclick',document.getElementById('uci_moreconfort'),UciIhm.more_confort);
        accessibilitytoolbar.uciAttachEvent('click','onclick',document.getElementById('uci_menu_activer_menu'),UciIhm.ToolbarHide);
        accessibilitytoolbar.uciAttachEvent('click','onclick',document.getElementById('uci_fermeture_more_comfort'),UciIhm.hide_more_confort);
        accessibilitytoolbar.uciAttachEvent('click','onclick',document.getElementById('uci_menu_remove_all'),UciIhm.remove_all);
        accessibilitytoolbar.uciAttachEvent('click','onclick',document.getElementById('uci_activer_menu'),UciIhm.uci_activate_menu);
        accessibilitytoolbar.uciAttachEvent('click','onclick',document.getElementById('uci_fermeture_cdu_menu'), UciIhm.uci_activate_menu);
        accessibilitytoolbar.uciAttachEvent('click','onclick',document.getElementById('uci_fr'), function() {return UciIhm.changement_langue('fr');});
        accessibilitytoolbar.uciAttachEvent('click','onclick',document.getElementById('uci_en'), function() {return UciIhm.changement_langue('en');});
        accessibilitytoolbar.uciAttachEvent('click','onclick',document.getElementById('uci_sp'), function() {return UciIhm.changement_langue('es');});
        accessibilitytoolbar.uciAttachEvent('submit','onsubmit',document.getElementById('uci_form'), UciValidation.Validation);
        accessibilitytoolbar.uciAttachEvent('reset','onreset',document.getElementById('uci_form'), UciValidation.Annulation);
        accessibilitytoolbar.uciAttachEvent('click','onclick',document.getElementById('uci-onoffswitch'), UciIhm.desactiveCDUForWebSite);
        accessibilitytoolbar.uciAttachEvent('click','onclick',document.getElementById('uci_chekbox_dyslexy_font'), function() {return UciTypographie.displayFieldset('uci_fieldset_fontfamily');});
        accessibilitytoolbar.uciAttachEvent('click','onclick',document.getElementById('uci_chekbox_casse'), function() {return UciTypographie.displayFieldset('uci_fieldset_changecasse');});
        
        accessibilitytoolbar.uciAttachEvent('click','onclick',document.getElementById('uci_link_help_fontfamily'), function() {return accessibilitytoolbar.toolbarDisplayHelp('uci_typo_help_fontfamily');});
        accessibilitytoolbar.uciAttachEvent('blur','onblur',document.getElementById('uci_link_help_fontfamily'), function() {return accessibilitytoolbar.toolbarHideHelp('uci_typo_help_fontfamily');});
        
        accessibilitytoolbar.uciAttachEvent('click','onclick',document.getElementById('uci_link_help_changecase'), function() {return accessibilitytoolbar.toolbarDisplayHelp('uci_typo_help_changecase');});
        accessibilitytoolbar.uciAttachEvent('blur','onblur',document.getElementById('uci_link_help_changecase'), function() {return accessibilitytoolbar.toolbarHideHelp('uci_typo_help_changecase');});
        
        accessibilitytoolbar.uciAttachEvent('click','onclick',document.getElementById('uci_link_help_jumptocontent'), function() {return accessibilitytoolbar.toolbarDisplayHelp('uci_help_jumptocontent');});
        accessibilitytoolbar.uciAttachEvent('blur','onblur',document.getElementById('uci_link_help_jumptocontent'), function() {return accessibilitytoolbar.toolbarHideHelp('uci_help_jumptocontent');});
        
        accessibilitytoolbar.uciAttachEvent('click','onclick',document.getElementById('uci_link_help_listmode'), function() {return accessibilitytoolbar.toolbarDisplayHelp('uci_help_listmode');});
        accessibilitytoolbar.uciAttachEvent('blur','onblur',document.getElementById('uci_link_help_listmode'), function() {return accessibilitytoolbar.toolbarHideHelp('uci_help_listmode');});
        
        accessibilitytoolbar.uciAttachEvent('click','onclick',document.getElementById('uci_link_help_links'), function() {return accessibilitytoolbar.toolbarDisplayHelp('uci_help_links');});
        accessibilitytoolbar.uciAttachEvent('blur','onblur',document.getElementById('uci_link_help_links'), function() {return accessibilitytoolbar.toolbarHideHelp('uci_help_links');});
        
        accessibilitytoolbar.uciAttachEvent('click','onclick',document.getElementById('uci_link_help_regle'), function() {return accessibilitytoolbar.toolbarDisplayHelp('uci_help_regle');});
        accessibilitytoolbar.uciAttachEvent('blur','onblur',document.getElementById('uci_link_help_regle'), function() {return accessibilitytoolbar.toolbarHideHelp('uci_help_regle');});
        
        accessibilitytoolbar.uciAttachEvent('click','onclick',document.getElementById('uci_link_help_disabletransp'), function() {return accessibilitytoolbar.toolbarDisplayHelp('uci_help_disabletransp');});
        accessibilitytoolbar.uciAttachEvent('blur','onblur',document.getElementById('uci_link_help_disabletransp'), function() {return accessibilitytoolbar.toolbarHideHelp('uci_help_disabletransp');});
        
        accessibilitytoolbar.uciAttachEvent('click','onclick',document.getElementById('uci_link_help_disablepppictures'), function() {return accessibilitytoolbar.toolbarDisplayHelp('uci_help_disablepppictures');});
        accessibilitytoolbar.uciAttachEvent('blur','onblur',document.getElementById('uci_link_help_disablepppictures'), function() {return accessibilitytoolbar.toolbarHideHelp('uci_help_disablepppictures');}); 
        
        accessibilitytoolbar.uciAttachEvent('click','onclick',document.getElementById('a11yMotorModeEnabled'), UciAideMotrice.activate_aide_motrice);
        
        accessibilitytoolbar.uciAttachEvent('click','onclick',document.getElementById('apparence_lien'), function() {UciApparence.displayLien('apparence_lien','uci_gestion_lien');});
        
        accessibilitytoolbar.uciAttachEvent('click','onclick',document.getElementById('uci_check_regle'), function() {UciApparence.displayLien('uci_check_regle','uci_div_regle');});    

        accessibilitytoolbar.uciAttachEvent('keydown','onkeydown',document.getElementById('uci_reponses_couleur_lien_sel'), function(event) {UciApparence.uciFermetureOverlay(event,"uci_palette_couleur_lien_selectionne");});    
        accessibilitytoolbar.uciAttachEvent('keydown','onkeydown',document.getElementById('uci_reponses_couleur_lien_notsel'), function(event) {UciApparence.uciFermetureOverlay(event,"uci_palette_couleur_lien_notselectionne");});  
        accessibilitytoolbar.uciAttachEvent('keydown','onkeydown',document.getElementById('uci_reponses_couleur_lien_visite'), function(event) {UciApparence.uciFermetureOverlay(event,"uci_palette_couleur_lien_visite");});  
        accessibilitytoolbar.uciAttachEvent('keydown','onkeydown',document.getElementById('uci_reponses_couleur_regle'), function(event) {UciApparence.uciFermetureOverlay(event,"uci_palette_couleur_regle");}); 

    },
    /**
     * Function event implementation
     * Create an object list with
     */

    eventToolbar: function(myObject){
        var i=0,theFrames,theFrame;
        while( i < myObject.length){
            if(myObject[i]){
                accessibilitytoolbar.uciAttachEvent('click','onclick',myObject[i],accessibilitytoolbar.toggle);
            }
            i++;
        }
        i = 0;        
        theFrames=document.getElementsByTagName('iframe');
        if(theFrames.length>0)
        {
            while(theFrame = theFrames[i]){
                try{                        
                    theFrameDocument = theFrame.document || theFrame.contentDocument;               
                    // attach event to frame onload to reload the css...
                     accessibilitytoolbar.uciAttachEvent('load','onload',theFrame,accessibilitytoolbar.setCSS);
                } catch(e){}
                i++;
            }
        }
        i = 0;        
        theFrames=document.getElementsByTagName('frame');
        if(theFrames.length>0)
        {
            while(theFrame = theFrames[i]){
                try{                        
                    theFrameDocument = theFrame.document || theFrame.contentDocument;               
                    // attach event to frame onload to reload the css...
                     accessibilitytoolbar.uciAttachEvent('load','onload',theFrame,accessibilitytoolbar.setCSS);
                } catch(e){}
                i++;
            }
        }
        

        if (accessibilitytoolbar.secCookie === null) {
            var actionButtons = document.getElementById("cdu_content").getElementsByTagName("input");
            var selectButtons = document.getElementById("cdu_content").getElementsByTagName("select");
        
            // User settings behaviour
            var toolbar = document.getElementById("cdu_content");
            for (var i = 0; i < actionButtons.length; i++) {
                if(actionButtons[i].type && actionButtons[i].type!=='submit' && actionButtons[i].type!=='reset'
                && !(actionButtons[i].id && (actionButtons[i].id==='uci_fr' || actionButtons[i].id==='uci_en' || actionButtons[i].id==='uci_sp' )) && !actionButtons[i].disabled)
                    accessibilitytoolbar.uciAttachEvent('click','onclick',actionButtons[i],accessibilitytoolbar.setPref);
            }
            for (i = 0; i < selectButtons.length; i++) {
                accessibilitytoolbar.uciAttachEvent('change','onchange',selectButtons[i],accessibilitytoolbar.setPref);
            }

            accessibilitytoolbar.uciAttachEvent('click','onclick',document.getElementById('uci_NavLienSel'),accessibilitytoolbar.displayOrNot);
            accessibilitytoolbar.uciAttachEvent('click','onclick',document.getElementById('uci_NavLienNonVis'),accessibilitytoolbar.displayOrNot);
            accessibilitytoolbar.uciAttachEvent('click','onclick',document.getElementById('uci_NavLienVis'),accessibilitytoolbar.displayOrNot);
            accessibilitytoolbar.uciAttachEvent('click','onclick',document.getElementById('uci_regle_couleur_lien'),accessibilitytoolbar.displayOrNot);

            var liButtonsPalette = document.getElementById("uci_reponses_couleur_lien_sel").getElementsByTagName("li");
            for (i=0; i < liButtonsPalette.length; i++){
               accessibilitytoolbar.uciAttachEvent('blur','onblur',liButtonsPalette[i],accessibilitytoolbar.HidePaletColor);
               accessibilitytoolbar.uciAttachEvent('keydown','onkeydown',liButtonsPalette[i],accessibilitytoolbar.HidePaletColor);
            }

            liButtonsPalette = document.getElementById("uci_reponses_couleur_lien_notsel").getElementsByTagName("li");
            for (i=0; i < liButtonsPalette.length; i++){
               accessibilitytoolbar.uciAttachEvent('blur','onblur',liButtonsPalette[i],accessibilitytoolbar.HidePaletColor);
               accessibilitytoolbar.uciAttachEvent('keydown','onkeydown',liButtonsPalette[i],accessibilitytoolbar.HidePaletColor);
            }
            liButtonsPalette = document.getElementById("uci_reponses_couleur_lien_visite").getElementsByTagName("li");
            for (i=0; i < liButtonsPalette.length; i++){
               accessibilitytoolbar.uciAttachEvent('blur','onblur',liButtonsPalette[i],accessibilitytoolbar.HidePaletColor);
               accessibilitytoolbar.uciAttachEvent('keydown','onkeydown',liButtonsPalette[i],accessibilitytoolbar.HidePaletColor);
            }
            liButtonsPalette = document.getElementById("uci_reponses_couleur_regle").getElementsByTagName("li");
            for (i=0; i < liButtonsPalette.length; i++){
               accessibilitytoolbar.uciAttachEvent('blur','onblur',liButtonsPalette[i],accessibilitytoolbar.HidePaletColor);
               accessibilitytoolbar.uciAttachEvent('keydown','onkeydown',liButtonsPalette[i],accessibilitytoolbar.HidePaletColor);
            }
        }
    },

    /**
     * Gestion des ouvertures d element en display= none
     */
    displayOrNot : function (e) {
        if (!e)
            e = window.event;
        var target = e.target || e.srcElement;
        //On récupere le parent de l'élément
        tagId = target.id;
        var idCible;
        var idEnfant;
        switch(tagId) {
            case 'uci_NavLienSel':
                idCible = "uci_palette_couleur_lien_selectionne";
                idEnfant = document.getElementById('uci_a11yNavLienSelColor_'+accessibilitytoolbar.userPref.get("a11yNavLienSelColor"));
                break;
            case 'uci_NavLienNonVis':
                idCible = "uci_palette_couleur_lien_notselectionne";
                idEnfant = document.getElementById('uci_a11yNavLienNonVisColor_'+accessibilitytoolbar.userPref.get("a11yNavLienNonVisColor"));
                break;
            case 'uci_NavLienVis':
                idCible = "uci_palette_couleur_lien_visite";
                idEnfant = document.getElementById('uci_a11yNavLienVisColor_'+accessibilitytoolbar.userPref.get("a11yNavLienVisColor"));
                break;
            case 'uci_regle_couleur_lien':
                idCible = "uci_palette_couleur_regle";
                idEnfant = document.getElementById('uci_a11yRegleColor_'+accessibilitytoolbar.userPref.get("a11yRegleColor"));
                break;
        }
        if(document.getElementById(idCible)!== null) {
            if (document.getElementById(idCible).style.display === "none") {
                document.getElementById(idCible).style.display = "block";
                idEnfant.focus();
            }else {
                document.getElementById(idCible).style.display = "none";
            }
        }
        accessibilitytoolbar.stopEvt(e);
    },

    /**
     * Couleur div hide
     */
    HidePaletColor: function (e){
        if (!e)
            e = window.event;
        var target = e.target || e.srcElement;
        setTimeout(function(){accessibilitytoolbar.HideColorPalettePret(target)},5);
    },

    HideColorPalettePret: function(target){
       // var element = /^uci_a11yNavLienSelColor(\S+)$/.exec(document.activeElement.id);
        if(document.activeElement.parentNode.id !== target.parentNode.id){
            if(document.getElementById('uci_palette_couleur_lien_selectionne').style.display === "block"){
                document.getElementById('uci_palette_couleur_lien_selectionne').style.display = "none";
            }else if (document.getElementById('uci_palette_couleur_lien_notselectionne').style.display === "block"){
                document.getElementById('uci_palette_couleur_lien_notselectionne').style.display = "none";
            }else if(document.getElementById('uci_palette_couleur_lien_visite').style.display === "block"){
                document.getElementById('uci_palette_couleur_lien_visite').style.display = "none";
            }else {
                document.getElementById('uci_palette_couleur_regle').style.display = "none";
            }
        }
    },

    /**
     * If user has change his preference, save the change
     * @see {ToolbarData}
     */
    saveUserPref: function () {
        if (this.hasDoneSettings) {
            this.hasDoneSettings = false;
            this.userPref.updateUserPref();
        }
    },

    /*
     * next 2 functions control behaviour for the graphic toolbar :
     * - show
     * - hide
     */

    /**
     * Toggle the display of the toolbar. If its shown then it will be
     * hided and if its hide, then it will be shown
     * @param {Event} e Event to be processed.
     */
    toggle: function (/*Event*/e) {
        var toolbarContent = document.getElementById("cdu_content");

        if (toolbarContent.className.match(/cdu_displayN/)) {
            if(document.getElementById('cdu_close'))
            {
                document.getElementById('cdu_close').style.display = "none";
            }
            accessibilitytoolbar.show();
        } else {
            accessibilitytoolbar.hide();
        }
        accessibilitytoolbar.stopEvt(e);
    },
    /**
     * Show the graphic tool-bar
     */
    show: function (e) {
        // check if need to update the cookie
        accessibilitytoolbar.userPref.set('a11yToolbarEnable','on');
        document.getElementById("cdu_content").className = "";
        if(!accessibilitytoolbar.idLinkModeContainer){
            var closeLink = document.getElementById("cdu_zone").getElementsByTagName("button")[0];
            closeLink.setAttribute("title", accessibilitytoolbar.get("uci_closeButton"));
            closeLink.innerHTML = accessibilitytoolbar.get("uci_closeButton") + "<span>&times;</span>";
        }
        try{
            document.getElementById("uci-onoffswitch").focus();
        }
        catch(e){}
    },

    toolbarDisplayHelp: function (id_parent) {
        if (document.getElementById(id_parent)) {
            // if help was hidden, then display it  
            if(document.getElementById(id_parent).className==='uci_span_help_bulle cdu_n') {
                document.getElementById(id_parent).className='uci_span_help_bulle';
            } else { // otherwise, hide it
                this.toolbarHideHelp(id_parent);
            }
        }
    },

    toolbarHideHelp: function (id_parent) {
        if (document.getElementById(id_parent)) {
            document.getElementById(id_parent).className='uci_span_help_bulle cdu_n';
        }
    },

    /**
     *
     */
    displayHelpNone:function () {
        if (document.getElementById('help')) {
            var element = document.getElementById('help');
            element.parentNode.removeChild(element);
        }
    },

    /**
     * Hide the graphic tool-bar
     */
    hide: function () {
        UciIhm.close_menu(true);
        if(document.getElementById('cdu_close'))
        {
            document.getElementById('cdu_close').style.display = "block";
        }
        document.getElementById("cdu_content").className = 'cdu_displayN';
        if (accessibilitytoolbar.hasDoneSettings) {
            accessibilitytoolbar.saveUserPref();
        } else {
            if(!accessibilitytoolbar.idLinkModeContainer){
                var openLink = document.getElementById("cdu_zone").getElementsByTagName("button")[0];
                openLink.setAttribute("title", this.get("uci_alt_logo"));
                openLink.innerHTML = this.get('uci_serv_name')+'<span>+</span>';
            }
            if (document.location.href.match(new RegExp("#" + accessibilitytoolbar.contentToJumpTo))) {
                document.location.reload();
            }
        }

    },
    
    close: function () {
    	var toolbar = document.getElementById('accessibilitytoolbarGraphic');
        if(toolbar) {
        	document.body.removeChild(toolbar);
        }
        var script = document.getElementById('a11yCSS');
        if(script) {
        	document.head.removeChild(script);
        }
        var content = document.getElementById('accessibilitytoolbarWrapper');
        if(content) {
        	content.outerHTML = content.innerHTML;
        }
        
    },

    /**
     * Adds load to the page
     * tries to add it as soon as the dom has loaded if possible
     * else adds it to the window.onload stack
     * inspired by the discussion at http://dean.edwards.name/weblog/2006/06/again/
     * @param {Function}func : the function to be added
     */
    addOnLoad: function (/*function*/func) {
        var ignited = false;
        /* for Mozilla/Opera9 */
        if (document.addEventListener && !ignited) {
            document.addEventListener("DOMContentLoaded", func, false);
            //Debug.log("addEventListener triggered");
            ignited = true;
        }

        /* For IE not so rusty */
        if (window.attachEvent && !ignited) {
            window.attachEvent('onload', func);
            ignited = true;
        }
        /* end */

        /* for Safari */
        if (/WebKit/i.test(navigator.userAgent) && !ignited) { // sniff
            var _timer = setInterval(function () {
                if (/loaded|complete/.test(document.readyState) && !ignited) {
                    func(); // call the onload handler
                    ignited = true;
                }
            }, 10);
        }

        if (!ignited) {
            var oldonload = window.onload;
            if (typeof window.onload !== 'function') {
                window.onload = func;
            } else {
                window.onload = function () {
                    if (oldonload) {
                        oldonload();
                    }
                    func();
                }
            }
            ignited = true;
        }
    },

    /**
     * Apply selected preference to the current page.
     * @param {Event} e : the event to be processed
     */
    setPref: function (e) {
        var event = e || window.event;
        var target = e.target || window.event.srcElement;
        var prefName = target.getAttribute("name");
        var prefType = target.getAttribute("type");
        var elementLists = null;
        var parent = null;

        if(document.getElementById('uci_validation').className==='cdu_n'){
            document.getElementById('uci_validation').className="";
            document.getElementById('uci_zone_form').style.display="block";
        }
        if (accessibilitytoolbar.userPref.get('a11ySiteWebEnabled') == 'off'){

        }
        var value = target.value;
        // for checkbox default value when unckecked = false
        if(target.type == "checkbox" && (!target.checked || !target.checked=="checked") )
        {
            value = "false";
        }
        // when the user disable the auto-preview, we need to get back the css with the cookie saved value
        if(prefName==="a11yApercuAuto" && value==="off"){
            accessibilitytoolbar.removePreviewCss();
        }
        accessibilitytoolbar.userPref.set(prefName, value);

        if(accessibilitytoolbar.userPref.get("a11yApercuAuto")!=="off"){
            accessibilitytoolbar.setCSS();
            // jump to content if needed
            accessibilitytoolbar.jumpToContent();
        }
    },

    /**
     * Jump to content if chosen so by the visitor
     */
    jumpToContent: function () {
        if (this.userPref.get("a11yJumpToContent") === "true" && this.contentToJumpTo) {
            if (!document.location.href.match(/#.+$/)) {
                document.location.href = "#" + this.contentToJumpTo;
            }
        } else {
            if (document.location.hash ==='#'+this.contentToJumpTo) {
                document.location.hash = "";
            }
        }
    },

    removeOrStartRemote: function () {
        if (this.userPref.get("a11ySiteWebEnabled") !== "off" && this.userPref.get("a11yMotorModeEnabled") == "true" && this.userPref.get("a11yMotorMode") == "remote"){
            if(this.remotecontrol == null){
                this.startRemote();
            }
        }else {
            if(this.remotecontrol !== null){
                this.remotecontrol.stopHelpMotor();
                clearTimeout(this.remotecontrol.timerId);
                this.remotecontrol = null;
            }

        }
    },
    /**
     * If visitor asked for the remotecontrol, then start it (obvious, isn't it)
     */
    startRemote: function () {
            this.remotecontrol = new RemoteControlMode();
            if (this.userPref.get("a11yDelayBeforeClick") && this.userPref.get("a11yDelayBeforeClick") > 0) {
                this.remotecontrol.hoverTimer = this.userPref.get("a11yDelayBeforeClick");
            }
    },

    removeOrStartLoopingMode: function (){
        if (this.userPref.get("a11ySiteWebEnabled") !== "off" && this.userPref.get("a11yMotorModeEnabled") == "true" && this.userPref.get("a11yMotorMode") == "looping") {
            this.startLoopingmode();
        }else{
            if(this.loopingmode !== null){
                this.loopingmode.killLoopingMode();
            }
        }
    },


            /**
     * If visitor wants looping mode ("navigation une touche"), start it
     */
    startLoopingmode: function () {
        // Create a new looping mode manager
        if (this.loopingmode == null) this.loopingmode = new LoopingMode();
        // Set the user prefered position
        if (this.userPref.get("a11yMenuPositionning") == "center") {
            this.loopingmode.setPosition(LoopingMenuPosition.CENTER);
        }
        else this.loopingmode.setPosition(LoopingMenuPosition.NEXT_TO);
        // Set the user prefered speed
        if (this.userPref.get("a11yDelayBeforeLoop") > 0) {
            this.loopingmode.setTimeout(this.userPref.get("a11yDelayBeforeLoop"));
        }
        else this.loopingmode.setTimeout(loopingmode.defaultLoopTimeout);
        // Set the user prefered quick mode step
        if (this.userPref.get("a11yQuickMode") > 0) {
            this.loopingmode.setQuickModeStep(this.userPref.get("a11yQuickMode"));
        }
        else this.loopingmode.setQuickModeStep(this.loopingmode.defaultQuickmode);
        // Start the looping mode
        var axsTb = this;
        setTimeout(function () {
            axsTb.loopingmode.start();
        }, 1000);
    },



    /**
     * Public method that can be used if loopingmode has been stopped
     * (for instance by a flash that has the Flex Confort de Lecture component)
     */
    restartLoopingmode: function () {
        this.loopingmode.restartLoopingmode();
        /* easy does it :) */
    },

    complete : function(){
        // if toolbarRuler isn't already launched
        if(!UciRuler.settings.launched)
        {
        	UciRuler.rulerEventCreate();
        }                                              
        // throw move event to update the ruler
        UciRuler.settings.color=this.userPref.get("a11yRegleColor");
        UciRuler.settings.thickness=this.userPref.get("a11yRegleEpaisseur");
        UciRuler.settings.showVertical= this.userPref.get("a11yRegleVertical") == "true";
        UciRuler.settings.showHorizontal= this.userPref.get("a11yRegleHorizontal")== "true";   
        $(document).mousemove();
    },

    removePreviewCss: function(){
        // get the current stack values
        var currentStackv3value = this.userPref.encode()+'0';
        // put the cookie value into the stackv3
        this.userPref.decode(accessibilitytoolbar.userPref.storedValue);
        this.cleanImgDisabled();
        // then apply the cookie css value
        this.setCSS();  
        // then come back to the current settings
        this.userPref.decode(currentStackv3value);

    },

    /**
     * Set new CSS rules
     * 1. linearize if need be by destroying all CSS informations
     * 2. add a new STYLE node with the user's preferences
     */
    setCSS: function () {   
        var links, i, allElts, scriptJquery, done, ruler, doneRuler, imageAlt, spanImage, element, image_uci, s = "", indexFrame, theFrame, theFrameDocument, theFrames;
        if (accessibilitytoolbar.userPref.get("a11yToolbarEnable") !== "off" && document.getElementById("cdu_content").className.match(/cdu_displayN/)) {
            if(document.getElementById('cdu_close'))
            {
                document.getElementById('cdu_close').style.display == 'none';
            }
            accessibilitytoolbar.show();
        }           
        accessibilitytoolbar.removeOrStartRemote();
        accessibilitytoolbar.removeOrStartLoopingMode();   
        if (accessibilitytoolbar.userPref.get("a11ySiteWebEnabled")!="off"){
            // 1. linearize ? -- which is the same as: get rid of all CSS info first
            if (accessibilitytoolbar.userPref.get("a11yLinearize") !== "false") {
                // delete all the CSS references
                links = document.getElementsByTagName("link");
                for (i = links.length - 1; i >= 0; i--) {
                    if (links[i].rel.match(/stylesheet/i) && (!links[i].id || !links[i].id.match(/a11yCSS/))) {
                        accessibilitytoolbar.savesStylesheets.push(links[i]);
                        links[i].parentNode.removeChild(links[i]);
                    }
                }

                // remove the style attribute
                allElts = accessibilitytoolbar.body.getElementsByTagName("*");
                for (i = 0; i < allElts.length; i++) {
                    if ((allElts[i].className  instanceof String && !allElts[i].className.match(/uci_/) && !allElts[i].className.match(/cdu_/)) ||  (allElts[i].id && !allElts[i].id.match(/uci_/) && !allElts[i].id.match(/cdu_/))) {
                        if(allElts[i].getAttribute("style"))
                        {
                            accessibilitytoolbar.savStyleElmtAtt[i]=allElts[i];
                            accessibilitytoolbar.savStyleAttElmt[i]=allElts[i].getAttribute("style");
                            allElts[i].removeAttribute("style");
                        }
                    }
                }
            }
            // if the user remove the option, we need to put back the stylesheets and styles attributes
            else{
                if(accessibilitytoolbar.savesStylesheets.length>0)
                {
                    for (i = accessibilitytoolbar.savesStylesheets.length - 1; i >= 0; i--) {
                        document.getElementsByTagName('head')[0].insertBefore(accessibilitytoolbar.savesStylesheets[i],document.getElementById('a11yCSS'));
                    }
                    // then clean the array
                    accessibilitytoolbar.savesStylesheets = [];
                }
                if(accessibilitytoolbar.savStyleElmtAtt.length>0)
                {
                    i = "";
                    for (i in accessibilitytoolbar.savStyleElmtAtt) {
                        accessibilitytoolbar.savStyleElmtAtt[i].setAttribute("style",accessibilitytoolbar.savStyleAttElmt[i]);
                    }
                    // then clean the array
                    accessibilitytoolbar.savStyleElmtAtt = [];
                    accessibilitytoolbar.savStyleAttElmt = [];
                }   
            }

            
            // generate the CSS instructions
            // 1. do we want bigger fonts?
            if (accessibilitytoolbar.userPref.get("a11yBigger") !== "keepit") {
                s += "html { font-size:" + accessibilitytoolbar.userPref.get("a11yBigger") + "% !important; }\n";
            }

            //gestion de l'affichage du mode espacement des mots
            if (accessibilitytoolbar.userPref.get("a11ySpacement") !== "keepit") {
                s += "*{ word-spacing:" + accessibilitytoolbar.userPref.get("a11ySpacement") + "em !important; }\n";
            }

            //gestion de l'affichage du mode espacement des lignes
            if (accessibilitytoolbar.userPref.get("a11yLineSpacement") !== "keepit") {
                s += "*{ line-height:" + accessibilitytoolbar.userPref.get("a11yLineSpacement") + " !important; }\n";
            }

            //gestion de l'espacement des caractères
            if (accessibilitytoolbar.userPref.get("a11yCharSpacement") !== "keepit") {
              if(accessibilitytoolbar.isModern) {
                s += "* :not(.cdu-icon) {letter-spacing:" + accessibilitytoolbar.userPref.get("a11yCharSpacement") + "em !important; }\n";
              } else{
                s += "*{letter-spacing:" + accessibilitytoolbar.userPref.get("a11yCharSpacement") + "em !important; }\n";
              }
            }

            //gestion de la casse : a11yModifCase
            if (accessibilitytoolbar.userPref.get("a11yModifCasseEnabled") !== "false") {
                s += "*{ text-transform:" + accessibilitytoolbar.userPref.get("a11yModifCasse") + " !important; }\n";
            }

            //gestion de la police d'écriture
            if (accessibilitytoolbar.getCompatible('a11yDyslexyFontEnabled') && accessibilitytoolbar.userPref.get("a11yDyslexyFontEnabled") !== "false") {
                //load the font face
                if(accessibilitytoolbar.userPref.get("a11yDyslexyFont")==='opendyslexic')
                {
                    s += "@font-face{font-family: \"opendyslexic\";src: "+ fontsPath['opendyslexicregular'] +";font-style: normal;font-weight: normal;}@font-face{font-family: \"opendyslexic\";src: "+ fontsPath['opendyslexicitalic'] +";font-style: italic;font-weight: normal;}@font-face{font-family: \"opendyslexic\";src: "+ fontsPath['opendyslexicbold'] +";font-weight: bold;font-style: normal;}@font-face{font-family: \"opendyslexic\";src: " + fontsPath['opendyslexicbolditalic'] + ";font-weight: bold;font-style: italic;} ";
                }
                if(accessibilitytoolbar.isModern) {
                  s += "* :not(.cdu-icon) {font-family:" + accessibilitytoolbar.userPref.get("a11yDyslexyFont") + " !important; }\n";
                } else{
                  s += "*{font-family:" + accessibilitytoolbar.userPref.get("a11yDyslexyFont") + " !important; }\n"; 
                }
            }

            //gestion alignement des texte à gauche
            if (accessibilitytoolbar.userPref.get("a11yLeftText") !== "false") {
                s += "* {text-align:" + accessibilitytoolbar.userPref.get("a11yLeftText") + "!important; }\n";
            }

            //numerotation en mode liste
            if (accessibilitytoolbar.userPref.get("a11yNumerotationList") !== "false") {

                s += "ul, ol  {list-style-position:initial !important; list-style-image: none !important; list-style-type: " + accessibilitytoolbar.userPref.get("a11yNumerotationList") + "!important; }\n";
            }

            //gestion des liens de navigations
            if (accessibilitytoolbar.userPref.get("a11yNavLienEnabled") !== "false"){
                //gestion des liens non visités
                if (accessibilitytoolbar.userPref.get("a11yNavLienNonVisStyle") === "border") {
                    s += "a:link  {border: 1px solid !important; color : " + accessibilitytoolbar.userPref.get("a11yNavLienNonVisColor") + " !important; }\n";
                }  else if (accessibilitytoolbar.userPref.get("a11yNavLienNonVisStyle") === "bold") {
                    s += "a:link  {font-weight: bold !important; color: " + accessibilitytoolbar.userPref.get("a11yNavLienNonVisColor") + " !important; }\n";
                } else if (accessibilitytoolbar.userPref.get("a11yNavLienNonVisStyle") === "underline") {
                    s += "a:link  {text-decoration:underline !important; color: " + accessibilitytoolbar.userPref.get("a11yNavLienNonVisColor") + " !important; }\n";
                } else {
                    s += "a:link  {color: " + accessibilitytoolbar.userPref.get("a11yNavLienNonVisColor") + " !important; }\n";
                }

                //gestion des liens visités
                if (accessibilitytoolbar.userPref.get("a11yNavLienVisStyle") === "border") {
                    s += "a:visited {border: 1px solid !important; color: " + accessibilitytoolbar.userPref.get("a11yNavLienVisColor") + " !important; }\n";
                } else if (accessibilitytoolbar.userPref.get("a11yNavLienVisStyle") === "bold") {
                    s += "a:visited {font-weight: bold !important; color : " + accessibilitytoolbar.userPref.get("a11yNavLienVisColor") + " !important; }\n";
                }else if (accessibilitytoolbar.userPref.get("a11yNavLienVisStyle") === "underline") {
                    s += "a:visited {text-decoration:underline !important; color: " + accessibilitytoolbar.userPref.get("a11yNavLienVisColor") + " !important; }\n";
                }else {
                    s += "a:visited {color: " + accessibilitytoolbar.userPref.get("a11yNavLienVisColor") + " !important; }\n";
                }

                //gestion du lien actif
                if (accessibilitytoolbar.userPref.get("a11yNavLienSelStyle") === "border") {
                    s += "a:active {border: 1px solid #FF7900!important; color: " + accessibilitytoolbar.userPref.get("a11yNavLienSelColor") + " !important; }\n";
                    s += "a:focus {border: 1px solid #FF7900 !important; color: " + accessibilitytoolbar.userPref.get("a11yNavLienSelColor") + " !important; }\n";
                    s += "a:hover {border: 1px solid #FF7900 !important; color: " + accessibilitytoolbar.userPref.get("a11yNavLienSelColor") + " !important; }\n";
                } else if (accessibilitytoolbar.userPref.get("a11yNavLienSelStyle") === "underline") {
                    s += "a:active {text-decoration:underline !important; color: " + accessibilitytoolbar.userPref.get("a11yNavLienSelColor") + " !important; }\n";
                    s += "a:focus {text-decoration:underline !important; color: " + accessibilitytoolbar.userPref.get("a11yNavLienSelColor") + " !important; }\n";
                    s += "a:hover {text-decoration:underline !important; color: " + accessibilitytoolbar.userPref.get("a11yNavLienSelColor") + " !important; }\n";
                }
                else if (accessibilitytoolbar.userPref.get("a11yNavLienSelStyle") === "bold") {
                    s += "a:active {font-weight: bold !important; color: " + accessibilitytoolbar.userPref.get("a11yNavLienSelColor") + " !important; }\n";
                    s += "a:focus {font-weight: bold !important; color: " + accessibilitytoolbar.userPref.get("a11yNavLienSelColor") + " !important; }\n";
                    s += "a:hover {font-weight: bold !important; color: " + accessibilitytoolbar.userPref.get("a11yNavLienSelColor") + " !important; }\n";
                }else {
                    s += "a:active {color: " + accessibilitytoolbar.userPref.get("a11yNavLienSelColor") + " !important; }\n";
                    s += "a:focus {color: " + accessibilitytoolbar.userPref.get("a11yNavLienSelColor") + " !important; }\n";
                    s += "a:hover {color: " + accessibilitytoolbar.userPref.get("a11yNavLienSelColor") + " !important; }\n";

                }
            }

            //gestion de la regle
            if (accessibilitytoolbar.userPref.get("a11yRegleEnabled") !== "false") {
                //load jquery if not loaded
                if (typeof jQuery == 'undefined') {
                    scriptJquery = document.createElement('script');
                    scriptJquery.src = jquery_min_js;
                    done = false;
                    // wait for jquery complete load
                    scriptJquery.onload = scriptJquery.onreadystatechange = function () {
                        if (!done && ( !this.readyState
                            || this.readyState == "loaded"
                            || this.readyState == "complete")) {
                            done = true;
                            // load the ruler
                            if (!accessibilitytoolbar.toolbarRuler) {
                                ruler = document.createElement('script');
                                ruler.src = ruler_js;
                                doneRuler = false;
                                // wait until ruler complete loaded
                                ruler.onload = ruler.onreadystatechange = function () {
                                    if (!doneRuler && ( !this.readyState
                                        || this.readyState == "loaded"
                                        || this.readyState == "complete")) {
                                        doneRuler = true;
                                        //run the ruler
                                        accessibilitytoolbar.complete();
                                    }
                                };
                                document.getElementsByTagName('body')[0].appendChild(ruler);
                                accessibilitytoolbar.toolbarRuler = true;
                            }
                        }
                    };
                    document.getElementsByTagName('body')[0].appendChild(scriptJquery);
                }

                // if jquery loaded, check if ruler loaded
                if (typeof jQuery !== 'undefined' && !accessibilitytoolbar.toolbarRuler) {
                    ruler = document.createElement('script');
                    ruler.src = ruler_js;
                    doneRuler = false;
                    // wait until ruler complete loaded
                    ruler.onload = ruler.onreadystatechange = function () {
                        if (!doneRuler && ( !this.readyState
                            || this.readyState == "loaded"
                            || this.readyState == "complete")) {
                        doneRuler = true;
                            //run the ruler
                            accessibilitytoolbar.complete();
                        }
                    };
                    document.getElementsByTagName('body')[0].appendChild(ruler);
                }
                if (typeof jQuery !== 'undefined' && accessibilitytoolbar.toolbarRuler) {
                    accessibilitytoolbar.complete();
                }
            }
            // if ruler was launch before deactivation kill!
            else if(accessibilitytoolbar.toolbarRuler && UciRuler.settings.launched)
            {
                UciRuler.rulerEventRemove();
            }

            //suppression des effets de transparences
            if (accessibilitytoolbar.userPref.get("a11ySupEffetTransp") !== "false") {                            
                s += "*  { opacity: 1 !important; -ms-filter: 'none'; filter: none !important }";                
            }

            //supression des images de fond
            if (accessibilitytoolbar.userPref.get("a11ySupImageFont") !== "false") {
                s += "*  { background-image: none !important; }\n";
            }

            
            var listeimg,i,backGroundColor,fontColor,uminositeFond,LuminositePolice,newStyle;
            //suppression des images de premier plan
            
            if (accessibilitytoolbar.userPref.get("a11ySupImageFirstPlan") !== "false" && !document.getElementById("spanImage1")){
                listeimg = document.images;
                for (i = 0; i < listeimg.length; i++) {
                    if(!document.getElementById("spanImage"+i)){
                        if(!(/^uci_(\S+)$/.exec(listeimg[i].parentNode.id))){
                            imageAlt = listeimg[i].alt;
                            spanImage = document.createElement("span");
                            spanImage.setAttribute("id", "spanImage" + i);
                            var newlink = document.createElement('a');
                            if (imageAlt === ""){
                                newlink.innerHTML = accessibilitytoolbar.get('uci_link_display_picture') + " " + accessibilitytoolbar.get('uci_link_display_picture_no_alt');
                            }else {
                                newlink.innerHTML = accessibilitytoolbar.get('uci_link_display_picture') + " " + imageAlt;
                            }
                            newlink.href = "#uci_img_" + i;
                            accessibilitytoolbar.uciAttachEvent('click','onclick',newlink,accessibilitytoolbar.activationPicture);
                            spanImage.appendChild(newlink);
                            listeimg[i].parentNode.insertBefore(spanImage, listeimg[i]);
                            listeimg[i].className=listeimg[i].className+" uci_disable_image";        
                        }
                    }
                }
            }else if (accessibilitytoolbar.userPref.get("a11ySupImageFirstPlan") == "false"){                
                accessibilitytoolbar.cleanImgDisabled();
            } 

            //gestion des couleurs
            // 2. add a new STYLE node with the user's preferences only if font color wasn't equal to the background one
            document.getElementById('uci_reponses_bigger_quick_set').className = document.getElementById('uci_reponses_bigger_quick_set').className.replace(/ uci_black{0,1}/,"");
            document.getElementById('uci_reponses_couleurpredefinie').className = document.getElementById('uci_reponses_couleurpredefinie').className.replace(/ uci_black{0,1}/,"");            
            if((accessibilitytoolbar.userPref.get("a11yVisualSettings") === "predefined" && accessibilitytoolbar.userPref.get("a11yVisualPredefinedSettings") !=="keepit") || (accessibilitytoolbar.userPref.get("a11yVisualSettings") === "personnal" && accessibilitytoolbar.userPref.get("a11yFontColor") !== accessibilitytoolbar.userPref.get("a11yBackgroundColor")))
            {
                if (accessibilitytoolbar.userPref.get("a11yVisualSettings") === "predefined") {
                    document.getElementById('uci_message_constraste').style.display= 'none';
                    element = document.getElementById('uci_reponses_bigger_quick_set');
                    backGroundColor = "#FFF";
                    fontColor = "#000";           
                    /*defect 67 */ 
                    if(accessibilitytoolbar.userPref.get("a11yVisualPredefinedSettings") == "whiteonblack")
                    {                                       
                        document.getElementById('uci_reponses_bigger_quick_set').className = document.getElementById('uci_reponses_bigger_quick_set').className + " uci_black";
                        document.getElementById('uci_reponses_couleurpredefinie').className = document.getElementById('uci_reponses_couleurpredefinie').className + " uci_black";
                        fontColor = "#FFF";
                        backGroundColor = "#000";
                    }
                }
                else {
                    /**
                     * Convert hexa colo to rgb
                    */
                    /* Implemented algorithm                                         
                    R = hexToR("#FFFFFF");
                    G = hexToG("#FFFFFF");
                    B = hexToB("#FFFFFF");
                    
                    function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
                    function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
                    function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
                    function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}
                    
                    Puis application calcul luminosité relative
                    http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef                    
                    
                    */                    
                    LuminositeFond = accessibilitytoolbar.conversionColor(parseInt(accessibilitytoolbar.userPref.get("a11yBackgroundColor").substring(1,3),16)) * 0.2126 
                        + accessibilitytoolbar.conversionColor(parseInt(accessibilitytoolbar.userPref.get("a11yBackgroundColor").substring(3,5),16)) * 0.7152 
                        + accessibilitytoolbar.conversionColor(parseInt(accessibilitytoolbar.userPref.get("a11yBackgroundColor").substring(5,7),16)) * 0.0722;
                    
                    LuminositePolice = accessibilitytoolbar.conversionColor(parseInt(accessibilitytoolbar.userPref.get("a11yFontColor").substring(1,3),16)) * 0.2126 
                        + accessibilitytoolbar.conversionColor(parseInt(accessibilitytoolbar.userPref.get("a11yFontColor").substring(3,5),16)) * 0.7152 
                        + accessibilitytoolbar.conversionColor(parseInt(accessibilitytoolbar.userPref.get("a11yFontColor").substring(5,7),16)) * 0.0722;

                    //calcul du contraste entre 2 couleurs
                    /*
                      contrast ratio
                        (L1 + 0.05) / (L2 + 0.05), where
                            L1 is the relative luminance of the lighter of the colors, and
                            L2 is the relative luminance of the darker of the colors.
                    */
                    if (((Math.max(LuminositePolice, LuminositeFond) + 0.05)/(Math.min(LuminositePolice, LuminositeFond) + 0.05)) < 4.5 ) {
                        if (document.getElementById('uci_message_constraste').style.display  === 'none'){
                            document.getElementById('uci_message_constraste').style.display = 'block';
                        }
                    } else if (document.getElementById('uci_message_constraste').style.display === 'block'){
                        document.getElementById('uci_message_constraste').style.display= 'none';
                    }
                    fontColor = accessibilitytoolbar.userPref.get("a11yFontColor");
                    backGroundColor = accessibilitytoolbar.userPref.get("a11yBackgroundColor");                        
                }
                
                s += "* { color:" + fontColor + " !important; }\n";
                s += "fieldset, button, input { border-color:" + fontColor + " !important; }\n";
                //s += "button, input[type='submit'], input[type='text'] { border-style:outset !important; border-color:" + fontColor + " !important; }\n";
                s += "td,th {border:1px solid " + fontColor + " !important; padding:.2em !important;}";
                s += "table {border-collapse: collapse !important;}";
                s += "* { background-color:" + backGroundColor + " !important; background:" + backGroundColor + " !important; }\n";
                s += "*:link, *:visited , *:hover { color:" + fontColor + ";}\n";     
                
                document.getElementById('cdu_zone').className = 'uci_a11yVisualPredefinedSettings_enabled';
            }
            else {
                document.getElementById('cdu_zone').className = 'uci_a11yVisualPredefinedSettings_disabled';
            }
        }
        
        // Remove previous user style
        if (document.getElementById("a11yUserPrefStyle")) {
            document.getElementsByTagName("head")[0].removeChild(document.getElementById("a11yUserPrefStyle"));
            /*
             * remove css to frames if possible
             * Works only if frame src is onto the same domain
             *
             */
            indexFrame = 0;
            theFrames=window.frames;
            //theFrames=document.getElementsByTagName("iframe");
            if(theFrames.length>0)
            {
                while(theFrame = theFrames[indexFrame]){
                    try{
                        //theFrameDocument = theFrame.contentDocument || theFrame.contentWindow.document;
                        theFrameDocument = theFrame.document || theFrame.contentDocument;
                        if(theFrameDocument.getElementsByTagName('head')[0]){
                            theFrameDocument.getElementsByTagName('head')[0].removeChild(theFrameDocument.getElementById("a11yUserPrefStyle"));
                        }
                    } catch(e){}
                    indexFrame++;
                }
            }
        }    
        // create a new style sheet
        if (s !== "") {
            newStyle = document.createElement("style");
            newStyle.setAttribute("type", "text/css");
            newStyle.id = "a11yUserPrefStyle";
            if (document.all && !window.opera) { // if IE then we can't rely on newStyle.appendChild(textnode)
                newStyle.styleSheet.cssText = s;
            }
            else { // standards-oriented browsers
                newStyle.appendChild(document.createTextNode(s));
            }
            document.getElementsByTagName('head')[0].appendChild(newStyle);
            /*
             * Apply css to frames if possible
             * Works only if frame src is onto the same domain
             *
             */
            indexFrame = 0;
            theFrames=window.frames;
            //frames=document.getElementsByTagName("iframe");
            if(theFrames.length>0)
            {
                while(theFrame = theFrames[indexFrame]){
                    try{                        
                        theFrameDocument = theFrame.document || theFrame.contentDocument;
                        if(theFrameDocument.getElementsByTagName('head')[0]){
                            theFrameDocument.getElementsByTagName('head')[0].appendChild(newStyle.cloneNode(true));
                        }                        
                    } catch(e){}
                    indexFrame++;
                }
            }
        }

    },
             
    /*
     * remove the link from pictures disabled
     */
    cleanImgDisabled : function(){
        var i,image_uci, listeimg = document.images;
        for(i = 0; i < listeimg.length; i++) {
            image_uci = /^uci_(\S+)$/.exec(listeimg[i].parentNode.id) ;
            if(!image_uci){
                if(document.getElementById("spanImage"+i)){
                    element = document.getElementById("spanImage"+i);
                    element.parentNode.removeChild(element);
                    listeimg[i].className = listeimg[i].className.replace(/ uci_disable_image{0,1}/,"");
                }
                else // if there is no span, stop the loop
                {
                    i=listeimg.length;
                }
            }
        }
    },
                
    /*
     * reload the toolbar
     */
    reloadToolbar : function(){
        document.getElementById('accessibilitytoolbarGraphic').lang = this.strings.getLocale();
        if(accessibilitytoolbar.userPref.get('a11yLanguage') !== "keepit"){
            accessibilitytoolbar.strings.setMyLocale(accessibilitytoolbar.userPref.get('a11yLanguage'));
        }else{
            accessibilitytoolbar.strings.setLocale();
        }

        if(accessibilitytoolbar.loopingmode !== null){
            accessibilitytoolbar.loopingmode.killLoopingMode();
        }
        if(accessibilitytoolbar.remotecontrol !== null){
            accessibilitytoolbar.remotecontrol.stopHelpMotor();
            clearTimeout(accessibilitytoolbar.remotecontrol.timerId);
            accessibilitytoolbar.remotecontrol = null;
        }
        if(accessibilitytoolbar.idLinkModeContainer){
            var str ="";
            // remove the opent link
            var myChildNode = document.getElementById('uci_link');
            myChildNode.parentNode.removeChild(myChildNode);
            // remove the skip link
            var myChildNodeSkip = document.getElementById('idCduSkip');
            myChildNodeSkip.parentNode.removeChild(myChildNodeSkip);
            str = accessibilitytoolbar.toolbarCreateLink();
            document.getElementById('accessibilitytoolbarGraphic').innerHTML = str;
        }else{
            document.getElementById('accessibilitytoolbarGraphic').innerHTML = accessibilitytoolbar.toolbarCreateButton();
        }
        accessibilitytoolbar.loadTheToolbar();
    },

    /**
     * Activation de l'image via le lien
     */
    activationPicture : function(e){    
        var target = e.target || e.srcElement;
        var indexImg = target.hash.split("_");        
        document.images[indexImg[2]].className = document.images[indexImg[2]].className.replace(/ uci_disable_image{0,1}/,"");        
        element = document.getElementById("spanImage"+indexImg[2]);
        element.parentNode.removeChild(element);
        accessibilitytoolbar.stopEvt(e);
    },
    
    /**
     * convert rgb color for relative luminance
     *
     *     if RsRGB <= 0.03928 then R = RsRGB/12.92 else R = ((RsRGB+0.055)/1.055) ^ 2.4
     *     
     *     if GsRGB <= 0.03928 then G = GsRGB/12.92 else G = ((GsRGB+0.055)/1.055) ^ 2.4
     *     
     *     if BsRGB <= 0.03928 then B = BsRGB/12.92 else B = ((BsRGB+0.055)/1.055) ^ 2.4
     *     
     *     and RsRGB, GsRGB, and BsRGB are defined as:
     *     
     *         RsRGB = R8bit/255
     *     
     *         GsRGB = G8bit/255
     *     
     *         BsRGB = B8bit/255     
     *          
     */
    conversionColor : function(color){
        color = color/255;
        if(color <= 0.03928){
            color = color/12.92;
        }else{
            color = Math.pow(((color+0.055)/1.055),2.4);
        }
        return(color);
    },

    /**
     * Initialise the toolbar
     */
    init: function () {
        // Bypass the default idLinkModeContainer
        if (window.accessibilitytoolbar_custom && window.accessibilitytoolbar_custom.idLinkModeContainer){
            if(document.getElementById(window.accessibilitytoolbar_custom.idLinkModeContainer)){
                accessibilitytoolbar.idLinkModeContainer = window.accessibilitytoolbar_custom.idLinkModeContainer;
            }
            if( window.accessibilitytoolbar_custom.cssLinkModeClassName){
                accessibilitytoolbar.cssLinkModeClassName = window.accessibilitytoolbar_custom.cssLinkModeClassName;
            }
            if( window.accessibilitytoolbar_custom.idSkipLinkIdLinkMode){
                if(document.getElementById(window.accessibilitytoolbar_custom.idSkipLinkIdLinkMode)){
                    accessibilitytoolbar.idSkipLinkIdLinkMode = window.accessibilitytoolbar_custom.idSkipLinkIdLinkMode;
                }
            }
            if( window.accessibilitytoolbar_custom.cssSkipLinkClassName){
                accessibilitytoolbar.cssSkipLinkClassName = window.accessibilitytoolbar_custom.cssSkipLinkClassName;
            }
        }

        // Bypass the default toolbar theme
        // Check if user preference has finished loading
        if (!accessibilitytoolbar.userPref.isUserPrefLoaded()) {
            setTimeout(accessibilitytoolbar.init, "100");
            return;
        }
        // if a global contentToLookFor is found then we'll use it
        // it has to be declared before our script is inserted
        if (window.accessibilitytoolbar_custom && window.accessibilitytoolbar_custom.contentToLookFor) {
            accessibilitytoolbar.contentToLookFor = accessibilitytoolbar.contentToLookFor.concat(window.accessibilitytoolbar_custom.contentToLookFor);
        }
        // this looks for an anchor named after one of the items in the contentToLookFor array
        for (var i = 0; i < accessibilitytoolbar.contentToLookFor.length; i++) {
            if (document.getElementById(accessibilitytoolbar.contentToLookFor[i])) {
                accessibilitytoolbar.contentToJumpTo = accessibilitytoolbar.contentToLookFor[i];
                break;
            }
        }
        // this creates a few hooks to hold to
        accessibilitytoolbar.head = document.getElementsByTagName('head')[0];
        accessibilitytoolbar.body = document.getElementsByTagName('body')[0];
        accessibilitytoolbar.html = document.getElementsByTagName('html')[0];

        if(accessibilitytoolbar.userPref.get('a11yLanguage') !== "keepit"){

            accessibilitytoolbar.strings.setMyLocale(accessibilitytoolbar.userPref.get('a11yLanguage'));
        }
        accessibilitytoolbar.firstInitToolbar();
        if (window.accessibilitytoolbar_custom && window.accessibilitytoolbar_custom.callback && typeof window.accessibilitytoolbar_custom.callback ==='function' ){
            window.accessibilitytoolbar_custom.callback();        
        }
    },

    firstInitToolbar: function(){
        // let's create the toolbar
        var style = "#accessibilitytoolbarGraphic {display:none}";
        var newStyle = document.createElement("style");
        newStyle.setAttribute("type", "text/css");
        if (document.all && !window.opera) { // if IE then we can't rely on newStyle.appendChild(textnode)
            newStyle.styleSheet.cssText = style;
        }else { // standards-oriented browsers
            newStyle.appendChild(document.createTextNode(style));
        }
        var _head = document.getElementsByTagName('head')[0];
        // newStyle
        _head.insertBefore(newStyle, _head.firstChild);
        // And now we create the toolbar...
        this.createToolbarCSSLink();
        var d = document.createElement('div');
        d.id = "accessibilitytoolbarGraphic";
        d.lang = this.strings.getLocale();
        d.className = 'cdu_modern_browser';
        accessibilitytoolbar.isModern = true;
        var nav = this.getNavigateur();
        var list = ['MSIE 8.', 'MSIE 7.', 'MSIE 6.'];
        try {
            for(var i = 0, len = list.length; i < len; ++i) {
                var pos = nav.indexOf(list[i]);
                if(pos !== -1) {
                    throw "OldBrowser";
                }
            }
        } catch(e) {
        	accessibilitytoolbar.isModern = false;
            d.className = 'cdu_old_browser';
        }
        d.innerHTML = accessibilitytoolbar.toolbarCDUContent();
        this.body.insertBefore(d, this.body.firstChild);
        accessibilitytoolbar.loadTheToolbar();

    },

    loadTheToolbar: function () {
        accessibilitytoolbar.createObjectBehaviour();
        if (accessibilitytoolbar.secCookie === null) {
            accessibilitytoolbar.cleanImgDisabled();
            // set CSS to the user's settings
            accessibilitytoolbar.setCSS();
            // jump to content if needed
            accessibilitytoolbar.jumpToContent();
        }

    },
    
    /**
     * @function isTouchDevice
     * @returns {boolean}
     */
    isTouchDevice: function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|android|ipad|playbook|silk|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
        {
            return true;
        }
            return false;
    },
    
    /**
     * @function isInFrame
     * check if Orange Confort+ is displayed into a frame or iframe, then don't display the toolbar
     * @returns {boolean} return true if in frame
     */
     inIframe: function () {
    	try {
            return (window.frameElement);// || window.opener);
            //return (window.parent != window);// || window.opener);
        } catch (e) {
            return true;
        }
    },

    /**
     * Stop the event bubbling and prevent default action
     * @param {Event} e the event
     */
    stopEvt: function (/*Event*/ e) {
        // For W3C Browser
if (e && e.stopPropagation) {
            e.stopPropagation();
            e.preventDefault();
        } else if (window.event) {
            window.event.cancelBubble = true;
            window.eventReturnValue = false;
        }
        return false;
    },

    /**
     * Start the thing
     */
    start: function () {
        // detect the browser 
        if(!this.isTouchDevice(navigator.userAgent || navigator.vendor || window.opera) && !this.inIframe()){            
            if (!document.getElementById || !document.getElementsByTagName || !document.createElement) {
                return;
            }
            /*  clean escape just in case you're using a very rusty browser */
            if (document.getElementById("a11yToolbar")) {
                document.getElementById("a11yToolbar").setAttribute("uci_language", "unknown");
            } else {
                // doesn't work on ie<7 so we test before
                if (window.postMessage) {
                    // when the data response was received, launch the init of the toolbar
                    // find the locale for correct language  
                    this.strings.setLocale();
                    this.userPref = new UciStorage();
                    if (document.readyState !== 'loading') {
                        this.init();
                    }
                    else {
                        this.addOnLoad(this.init);
                    }
                }
            }
        }

    }
    
};
// Source: app/js/ruler.js
/**
    This file is part of Orange Confort+ | A centralized Javascript application to enable users to customize display and behaviour of websites to suit their advanced accessibility needs
    
    Copyright (C) 2014  Orange

    Orange Confort+ is free software; you can redistribute it and/or
    modify it under the terms of the GNU General Public License
    as published by the Free Software Foundation; either version 2
    of the License, or (at your option) any later version.

    Orange Confort+ is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details (LICENSE.txt file).
**/
UciRuler = {
        settings: {
            showVertical : false,
            showHorizontal : false,
            color : '#000',   //#000,  #32C832, #CD3C14, #527EDB, #FFCC00
            thickness : 'medium',			   //thin,medium,thick
            launched : false
        },

        vMouse: null,
        hMouse: null,

        init: function() {
	        if ((!window.Modernizer) || !Modernizr.touch) { 
	            vMouse = document.createElement("div");
	            vMouse.className="vMouse";
	            hMouse = document.createElement("div");
	            hMouse.className="hMouse";
	            document.getElementsByTagName("body")[0].appendChild(vMouse);
	            document.getElementsByTagName("body")[0].appendChild(hMouse);  

	            // Mouse crosshair
	            if (!UciRuler.settings.showVertical ) {
	            	jQuery('.vMouse').hide();              
	            }
	            if (!UciRuler.settings.showHorizontal ) {
	            	jQuery('.hMouse').hide(); 
	                
	            }   
	        	
	        }
        },
        
        rulerEventCreate: function() {              
        	jQuery(document).on("mousemove.ruler",this.rulerEvent);
            UciRuler.settings.launched = true;
        },        
     
        rulerEventRemove: function() {    
        	jQuery(document).unbind("mousemove.ruler",this.rulerEvent);  
            // if the vertical ruler was launched before, removed it from the dom
        	jQuery('.vMouse').hide();      
            // if the horizontal ruler was launched before, removed it from the dom
        	jQuery('.hMouse').hide(); 
            UciRuler.settings.launched = false;
        },
        
        rulerEvent: function(e) {
            // vertical
            if (UciRuler.settings.showVertical) {     
            	jQuery('.vMouse').show();                  
            	jQuery('.vMouse').css("left",e.pageX+1);
            	jQuery('.vMouse').css('borderLeft',UciRuler.settings.thickness+' solid '+UciRuler.settings.color);
            } 
            else
            {
                // if the vertical ruler was launched before, removed it from the dom
            	jQuery('.vMouse').hide();
            }
                
            // horizontal    
            if (UciRuler.settings.showHorizontal) { 
            	jQuery('.hMouse').show();             
            	jQuery('.hMouse').css("top",e.pageY-(jQuery(document).scrollTop())+1);
            	jQuery('.hMouse').css('borderBottom',UciRuler.settings.thickness+' solid '+UciRuler.settings.color);                    
            }  
            else
            {    
                // if the horizontal ruler was launched before, removed it from the dom
            	jQuery('.hMouse').hide(); 
            }                    
        }
}
UciRuler.init();
accessibilitytoolbar.toolbarRuler = true;
// Source: app/js/start.extensionChrome.js
/**
    This file is part of Orange Confort+ | A centralized Javascript application to enable users to customize display and behaviour of websites to suit their advanced accessibility needs
    
    Copyright (C) 2014  Orange

    Orange Confort+ is free software; you can redistribute it and/or
    modify it under the terms of the GNU General Public License
    as published by the Free Software Foundation; either version 2
    of the License, or (at your option) any later version.

    Orange Confort+ is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details (LICENSE.txt file).
**/
var block = false;


function startCDU() {
	var toolbarServer = document.querySelector("script[src*='crossdom/js']");
	var head = document.querySelector("head");
	var body = document.querySelector("body");
	var toolbarDiv = document.querySelector("accessibilitytoolbarGraphic");
	if((toolbarServer == null) && (head != null) && (body != null) && (window.location.href != 'about:blank')) {
		if(toolbarDiv == null) {
			accessibilitytoolbar.start();
		}
	} else {
		block = true;
	}
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	switch(request.message) {
		case 'orangecomfort+closecdu' :
			if(block == false) {
				accessibilitytoolbar.userPref.setStoredValue('00006510006506506500000000000000000065000000100');
				accessibilitytoolbar.reloadToolbar();
				accessibilitytoolbar.close();
			}
			break;
		case 'orangecomfort+loadcdu' :
			if(block == false) {
				startCDU();
			}
			break;
		case 'orangecomfort+userprefgetresponse' :
			if(block == false) {
				accessibilitytoolbar.userPref.setStoredValue(request.value);
			}
			break;
		case 'orangecomfort+doyouexist' :
			sendResponse({message: "yes"});
			break;
		
	  }
});
chrome.runtime.sendMessage({message: "orangecomfort+getIsCduEnabled"}, function(response) {
	if((response.value == 'true') && (block == false)) {
		startCDU();
	}
});