/* This file contains various jQuery libraries used in www.seagate.com.  
 * Please be careful when upgrading part as some are customized. Both ui.dialog.min.js and ui.tabs.min.js were changed by matt@atre.net, specifically for this site.
 * To quickly traverse this file please search for: */
 
  /*#####*/  
  
 /* The 9 characters above are used as a delimeter between sections */ 


/*#####*/ 
//jquery-latest.min.js

/*
 * jQuery JavaScript Library v1.3.2
 * http://jquery.com/
 *
 * Copyright (c) 2009 John Resig
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 * Date: 2009-02-19 17:34:21 -0500 (Thu, 19 Feb 2009)
 * Revision: 6246
 */
(function(){var l=this,g,y=l.jQuery,p=l.$,o=l.jQuery=l.$=function(E,F){return new o.fn.init(E,F)},D=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,f=/^.[^:#\[\.,]*$/;o.fn=o.prototype={init:function(E,H){E=E||document;if(E.nodeType){this[0]=E;this.length=1;this.context=E;return this}if(typeof E==="string"){var G=D.exec(E);if(G&&(G[1]||!H)){if(G[1]){E=o.clean([G[1]],H)}else{var I=document.getElementById(G[3]);if(I&&I.id!=G[3]){return o().find(E)}var F=o(I||[]);F.context=document;F.selector=E;return F}}else{return o(H).find(E)}}else{if(o.isFunction(E)){return o(document).ready(E)}}if(E.selector&&E.context){this.selector=E.selector;this.context=E.context}return this.setArray(o.isArray(E)?E:o.makeArray(E))},selector:"",jquery:"1.3.2",size:function(){return this.length},get:function(E){return E===g?Array.prototype.slice.call(this):this[E]},pushStack:function(F,H,E){var G=o(F);G.prevObject=this;G.context=this.context;if(H==="find"){G.selector=this.selector+(this.selector?" ":"")+E}else{if(H){G.selector=this.selector+"."+H+"("+E+")"}}return G},setArray:function(E){this.length=0;Array.prototype.push.apply(this,E);return this},each:function(F,E){return o.each(this,F,E)},index:function(E){return o.inArray(E&&E.jquery?E[0]:E,this)},attr:function(F,H,G){var E=F;if(typeof F==="string"){if(H===g){return this[0]&&o[G||"attr"](this[0],F)}else{E={};E[F]=H}}return this.each(function(I){for(F in E){o.attr(G?this.style:this,F,o.prop(this,E[F],G,I,F))}})},css:function(E,F){if((E=="width"||E=="height")&&parseFloat(F)<0){F=g}return this.attr(E,F,"curCSS")},text:function(F){if(typeof F!=="object"&&F!=null){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(F))}var E="";o.each(F||this,function(){o.each(this.childNodes,function(){if(this.nodeType!=8){E+=this.nodeType!=1?this.nodeValue:o.fn.text([this])}})});return E},wrapAll:function(E){if(this[0]){var F=o(E,this[0].ownerDocument).clone();if(this[0].parentNode){F.insertBefore(this[0])}F.map(function(){var G=this;while(G.firstChild){G=G.firstChild}return G}).append(this)}return this},wrapInner:function(E){return this.each(function(){o(this).contents().wrapAll(E)})},wrap:function(E){return this.each(function(){o(this).wrapAll(E)})},append:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.appendChild(E)}})},prepend:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.insertBefore(E,this.firstChild)}})},before:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this)})},after:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this.nextSibling)})},end:function(){return this.prevObject||o([])},push:[].push,sort:[].sort,splice:[].splice,find:function(E){if(this.length===1){var F=this.pushStack([],"find",E);F.length=0;o.find(E,this[0],F);return F}else{return this.pushStack(o.unique(o.map(this,function(G){return o.find(E,G)})),"find",E)}},clone:function(G){var E=this.map(function(){if(!o.support.noCloneEvent&&!o.isXMLDoc(this)){var I=this.outerHTML;if(!I){var J=this.ownerDocument.createElement("div");J.appendChild(this.cloneNode(true));I=J.innerHTML}return o.clean([I.replace(/ jQuery\d+="(?:\d+|null)"/g,"").replace(/^\s*/,"")])[0]}else{return this.cloneNode(true)}});if(G===true){var H=this.find("*").andSelf(),F=0;E.find("*").andSelf().each(function(){if(this.nodeName!==H[F].nodeName){return}var I=o.data(H[F],"events");for(var K in I){for(var J in I[K]){o.event.add(this,K,I[K][J],I[K][J].data)}}F++})}return E},filter:function(E){return this.pushStack(o.isFunction(E)&&o.grep(this,function(G,F){return E.call(G,F)})||o.multiFilter(E,o.grep(this,function(F){return F.nodeType===1})),"filter",E)},closest:function(E){var G=o.expr.match.POS.test(E)?o(E):null,F=0;return this.map(function(){var H=this;while(H&&H.ownerDocument){if(G?G.index(H)>-1:o(H).is(E)){o.data(H,"closest",F);return H}H=H.parentNode;F++}})},not:function(E){if(typeof E==="string"){if(f.test(E)){return this.pushStack(o.multiFilter(E,this,true),"not",E)}else{E=o.multiFilter(E,this)}}var F=E.length&&E[E.length-1]!==g&&!E.nodeType;return this.filter(function(){return F?o.inArray(this,E)<0:this!=E})},add:function(E){return this.pushStack(o.unique(o.merge(this.get(),typeof E==="string"?o(E):o.makeArray(E))))},is:function(E){return !!E&&o.multiFilter(E,this).length>0},hasClass:function(E){return !!E&&this.is("."+E)},val:function(K){if(K===g){var E=this[0];if(E){if(o.nodeName(E,"option")){return(E.attributes.value||{}).specified?E.value:E.text}if(o.nodeName(E,"select")){var I=E.selectedIndex,L=[],M=E.options,H=E.type=="select-one";if(I<0){return null}for(var F=H?I:0,J=H?I+1:M.length;F<J;F++){var G=M[F];if(G.selected){K=o(G).val();if(H){return K}L.push(K)}}return L}return(E.value||"").replace(/\r/g,"")}return g}if(typeof K==="number"){K+=""}return this.each(function(){if(this.nodeType!=1){return}if(o.isArray(K)&&/radio|checkbox/.test(this.type)){this.checked=(o.inArray(this.value,K)>=0||o.inArray(this.name,K)>=0)}else{if(o.nodeName(this,"select")){var N=o.makeArray(K);o("option",this).each(function(){this.selected=(o.inArray(this.value,N)>=0||o.inArray(this.text,N)>=0)});if(!N.length){this.selectedIndex=-1}}else{this.value=K}}})},html:function(E){return E===g?(this[0]?this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g,""):null):this.empty().append(E)},replaceWith:function(E){return this.after(E).remove()},eq:function(E){return this.slice(E,+E+1)},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments),"slice",Array.prototype.slice.call(arguments).join(","))},map:function(E){return this.pushStack(o.map(this,function(G,F){return E.call(G,F,G)}))},andSelf:function(){return this.add(this.prevObject)},domManip:function(J,M,L){if(this[0]){var I=(this[0].ownerDocument||this[0]).createDocumentFragment(),F=o.clean(J,(this[0].ownerDocument||this[0]),I),H=I.firstChild;if(H){for(var G=0,E=this.length;G<E;G++){L.call(K(this[G],H),this.length>1||G>0?I.cloneNode(true):I)}}if(F){o.each(F,z)}}return this;function K(N,O){return M&&o.nodeName(N,"table")&&o.nodeName(O,"tr")?(N.getElementsByTagName("tbody")[0]||N.appendChild(N.ownerDocument.createElement("tbody"))):N}}};o.fn.init.prototype=o.fn;function z(E,F){if(F.src){o.ajax({url:F.src,async:false,dataType:"script"})}else{o.globalEval(F.text||F.textContent||F.innerHTML||"")}if(F.parentNode){F.parentNode.removeChild(F)}}function e(){return +new Date}o.extend=o.fn.extend=function(){var J=arguments[0]||{},H=1,I=arguments.length,E=false,G;if(typeof J==="boolean"){E=J;J=arguments[1]||{};H=2}if(typeof J!=="object"&&!o.isFunction(J)){J={}}if(I==H){J=this;--H}for(;H<I;H++){if((G=arguments[H])!=null){for(var F in G){var K=J[F],L=G[F];if(J===L){continue}if(E&&L&&typeof L==="object"&&!L.nodeType){J[F]=o.extend(E,K||(L.length!=null?[]:{}),L)}else{if(L!==g){J[F]=L}}}}}return J};var b=/z-?index|font-?weight|opacity|zoom|line-?height/i,q=document.defaultView||{},s=Object.prototype.toString;o.extend({noConflict:function(E){l.$=p;if(E){l.jQuery=y}return o},isFunction:function(E){return s.call(E)==="[object Function]"},isArray:function(E){return s.call(E)==="[object Array]"},isXMLDoc:function(E){return E.nodeType===9&&E.documentElement.nodeName!=="HTML"||!!E.ownerDocument&&o.isXMLDoc(E.ownerDocument)},globalEval:function(G){if(G&&/\S/.test(G)){var F=document.getElementsByTagName("head")[0]||document.documentElement,E=document.createElement("script");E.type="text/javascript";if(o.support.scriptEval){E.appendChild(document.createTextNode(G))}else{E.text=G}F.insertBefore(E,F.firstChild);F.removeChild(E)}},nodeName:function(F,E){return F.nodeName&&F.nodeName.toUpperCase()==E.toUpperCase()},each:function(G,K,F){var E,H=0,I=G.length;if(F){if(I===g){for(E in G){if(K.apply(G[E],F)===false){break}}}else{for(;H<I;){if(K.apply(G[H++],F)===false){break}}}}else{if(I===g){for(E in G){if(K.call(G[E],E,G[E])===false){break}}}else{for(var J=G[0];H<I&&K.call(J,H,J)!==false;J=G[++H]){}}}return G},prop:function(H,I,G,F,E){if(o.isFunction(I)){I=I.call(H,F)}return typeof I==="number"&&G=="curCSS"&&!b.test(E)?I+"px":I},className:{add:function(E,F){o.each((F||"").split(/\s+/),function(G,H){if(E.nodeType==1&&!o.className.has(E.className,H)){E.className+=(E.className?" ":"")+H}})},remove:function(E,F){if(E.nodeType==1){E.className=F!==g?o.grep(E.className.split(/\s+/),function(G){return !o.className.has(F,G)}).join(" "):""}},has:function(F,E){return F&&o.inArray(E,(F.className||F).toString().split(/\s+/))>-1}},swap:function(H,G,I){var E={};for(var F in G){E[F]=H.style[F];H.style[F]=G[F]}I.call(H);for(var F in G){H.style[F]=E[F]}},css:function(H,F,J,E){if(F=="width"||F=="height"){var L,G={position:"absolute",visibility:"hidden",display:"block"},K=F=="width"?["Left","Right"]:["Top","Bottom"];function I(){L=F=="width"?H.offsetWidth:H.offsetHeight;if(E==="border"){return}o.each(K,function(){if(!E){L-=parseFloat(o.curCSS(H,"padding"+this,true))||0}if(E==="margin"){L+=parseFloat(o.curCSS(H,"margin"+this,true))||0}else{L-=parseFloat(o.curCSS(H,"border"+this+"Width",true))||0}})}if(H.offsetWidth!==0){I()}else{o.swap(H,G,I)}return Math.max(0,Math.round(L))}return o.curCSS(H,F,J)},curCSS:function(I,F,G){var L,E=I.style;if(F=="opacity"&&!o.support.opacity){L=o.attr(E,"opacity");return L==""?"1":L}if(F.match(/float/i)){F=w}if(!G&&E&&E[F]){L=E[F]}else{if(q.getComputedStyle){if(F.match(/float/i)){F="float"}F=F.replace(/([A-Z])/g,"-$1").toLowerCase();var M=q.getComputedStyle(I,null);if(M){L=M.getPropertyValue(F)}if(F=="opacity"&&L==""){L="1"}}else{if(I.currentStyle){var J=F.replace(/\-(\w)/g,function(N,O){return O.toUpperCase()});L=I.currentStyle[F]||I.currentStyle[J];if(!/^\d+(px)?$/i.test(L)&&/^\d/.test(L)){var H=E.left,K=I.runtimeStyle.left;I.runtimeStyle.left=I.currentStyle.left;E.left=L||0;L=E.pixelLeft+"px";E.left=H;I.runtimeStyle.left=K}}}}return L},clean:function(F,K,I){K=K||document;if(typeof K.createElement==="undefined"){K=K.ownerDocument||K[0]&&K[0].ownerDocument||document}if(!I&&F.length===1&&typeof F[0]==="string"){var H=/^<(\w+)\s*\/?>$/.exec(F[0]);if(H){return[K.createElement(H[1])]}}var G=[],E=[],L=K.createElement("div");o.each(F,function(P,S){if(typeof S==="number"){S+=""}if(!S){return}if(typeof S==="string"){S=S.replace(/(<(\w+)[^>]*?)\/>/g,function(U,V,T){return T.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?U:V+"></"+T+">"});var O=S.replace(/^\s+/,"").substring(0,10).toLowerCase();var Q=!O.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!O.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||O.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!O.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!O.indexOf("<td")||!O.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!O.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!o.support.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];L.innerHTML=Q[1]+S+Q[2];while(Q[0]--){L=L.lastChild}if(!o.support.tbody){var R=/<tbody/i.test(S),N=!O.indexOf("<table")&&!R?L.firstChild&&L.firstChild.childNodes:Q[1]=="<table>"&&!R?L.childNodes:[];for(var M=N.length-1;M>=0;--M){if(o.nodeName(N[M],"tbody")&&!N[M].childNodes.length){N[M].parentNode.removeChild(N[M])}}}if(!o.support.leadingWhitespace&&/^\s/.test(S)){L.insertBefore(K.createTextNode(S.match(/^\s*/)[0]),L.firstChild)}S=o.makeArray(L.childNodes)}if(S.nodeType){G.push(S)}else{G=o.merge(G,S)}});if(I){for(var J=0;G[J];J++){if(o.nodeName(G[J],"script")&&(!G[J].type||G[J].type.toLowerCase()==="text/javascript")){E.push(G[J].parentNode?G[J].parentNode.removeChild(G[J]):G[J])}else{if(G[J].nodeType===1){G.splice.apply(G,[J+1,0].concat(o.makeArray(G[J].getElementsByTagName("script"))))}I.appendChild(G[J])}}return E}return G},attr:function(J,G,K){if(!J||J.nodeType==3||J.nodeType==8){return g}var H=!o.isXMLDoc(J),L=K!==g;G=H&&o.props[G]||G;if(J.tagName){var F=/href|src|style/.test(G);if(G=="selected"&&J.parentNode){J.parentNode.selectedIndex}if(G in J&&H&&!F){if(L){if(G=="type"&&o.nodeName(J,"input")&&J.parentNode){throw"type property can't be changed"}J[G]=K}if(o.nodeName(J,"form")&&J.getAttributeNode(G)){return J.getAttributeNode(G).nodeValue}if(G=="tabIndex"){var I=J.getAttributeNode("tabIndex");return I&&I.specified?I.value:J.nodeName.match(/(button|input|object|select|textarea)/i)?0:J.nodeName.match(/^(a|area)$/i)&&J.href?0:g}return J[G]}if(!o.support.style&&H&&G=="style"){return o.attr(J.style,"cssText",K)}if(L){J.setAttribute(G,""+K)}var E=!o.support.hrefNormalized&&H&&F?J.getAttribute(G,2):J.getAttribute(G);return E===null?g:E}if(!o.support.opacity&&G=="opacity"){if(L){J.zoom=1;J.filter=(J.filter||"").replace(/alpha\([^)]*\)/,"")+(parseInt(K)+""=="NaN"?"":"alpha(opacity="+K*100+")")}return J.filter&&J.filter.indexOf("opacity=")>=0?(parseFloat(J.filter.match(/opacity=([^)]*)/)[1])/100)+"":""}G=G.replace(/-([a-z])/ig,function(M,N){return N.toUpperCase()});if(L){J[G]=K}return J[G]},trim:function(E){return(E||"").replace(/^\s+|\s+$/g,"")},makeArray:function(G){var E=[];if(G!=null){var F=G.length;if(F==null||typeof G==="string"||o.isFunction(G)||G.setInterval){E[0]=G}else{while(F){E[--F]=G[F]}}}return E},inArray:function(G,H){for(var E=0,F=H.length;E<F;E++){if(H[E]===G){return E}}return -1},merge:function(H,E){var F=0,G,I=H.length;if(!o.support.getAll){while((G=E[F++])!=null){if(G.nodeType!=8){H[I++]=G}}}else{while((G=E[F++])!=null){H[I++]=G}}return H},unique:function(K){var F=[],E={};try{for(var G=0,H=K.length;G<H;G++){var J=o.data(K[G]);if(!E[J]){E[J]=true;F.push(K[G])}}}catch(I){F=K}return F},grep:function(F,J,E){var G=[];for(var H=0,I=F.length;H<I;H++){if(!E!=!J(F[H],H)){G.push(F[H])}}return G},map:function(E,J){var F=[];for(var G=0,H=E.length;G<H;G++){var I=J(E[G],G);if(I!=null){F[F.length]=I}}return F.concat.apply([],F)}});var C=navigator.userAgent.toLowerCase();o.browser={version:(C.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],safari:/webkit/.test(C),opera:/opera/.test(C),msie:/msie/.test(C)&&!/opera/.test(C),mozilla:/mozilla/.test(C)&&!/(compatible|webkit)/.test(C)};o.each({parent:function(E){return E.parentNode},parents:function(E){return o.dir(E,"parentNode")},next:function(E){return o.nth(E,2,"nextSibling")},prev:function(E){return o.nth(E,2,"previousSibling")},nextAll:function(E){return o.dir(E,"nextSibling")},prevAll:function(E){return o.dir(E,"previousSibling")},siblings:function(E){return o.sibling(E.parentNode.firstChild,E)},children:function(E){return o.sibling(E.firstChild)},contents:function(E){return o.nodeName(E,"iframe")?E.contentDocument||E.contentWindow.document:o.makeArray(E.childNodes)}},function(E,F){o.fn[E]=function(G){var H=o.map(this,F);if(G&&typeof G=="string"){H=o.multiFilter(G,H)}return this.pushStack(o.unique(H),E,G)}});o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(E,F){o.fn[E]=function(G){var J=[],L=o(G);for(var K=0,H=L.length;K<H;K++){var I=(K>0?this.clone(true):this).get();o.fn[F].apply(o(L[K]),I);J=J.concat(I)}return this.pushStack(J,E,G)}});o.each({removeAttr:function(E){o.attr(this,E,"");if(this.nodeType==1){this.removeAttribute(E)}},addClass:function(E){o.className.add(this,E)},removeClass:function(E){o.className.remove(this,E)},toggleClass:function(F,E){if(typeof E!=="boolean"){E=!o.className.has(this,F)}o.className[E?"add":"remove"](this,F)},remove:function(E){if(!E||o.filter(E,[this]).length){o("*",this).add([this]).each(function(){o.event.remove(this);o.removeData(this)});if(this.parentNode){this.parentNode.removeChild(this)}}},empty:function(){o(this).children().remove();while(this.firstChild){this.removeChild(this.firstChild)}}},function(E,F){o.fn[E]=function(){return this.each(F,arguments)}});function j(E,F){return E[0]&&parseInt(o.curCSS(E[0],F,true),10)||0}var h="jQuery"+e(),v=0,A={};o.extend({cache:{},data:function(F,E,G){F=F==l?A:F;var H=F[h];if(!H){H=F[h]=++v}if(E&&!o.cache[H]){o.cache[H]={}}if(G!==g){o.cache[H][E]=G}return E?o.cache[H][E]:H},removeData:function(F,E){F=F==l?A:F;var H=F[h];if(E){if(o.cache[H]){delete o.cache[H][E];E="";for(E in o.cache[H]){break}if(!E){o.removeData(F)}}}else{try{delete F[h]}catch(G){if(F.removeAttribute){F.removeAttribute(h)}}delete o.cache[H]}},queue:function(F,E,H){if(F){E=(E||"fx")+"queue";var G=o.data(F,E);if(!G||o.isArray(H)){G=o.data(F,E,o.makeArray(H))}else{if(H){G.push(H)}}}return G},dequeue:function(H,G){var E=o.queue(H,G),F=E.shift();if(!G||G==="fx"){F=E[0]}if(F!==g){F.call(H)}}});o.fn.extend({data:function(E,G){var H=E.split(".");H[1]=H[1]?"."+H[1]:"";if(G===g){var F=this.triggerHandler("getData"+H[1]+"!",[H[0]]);if(F===g&&this.length){F=o.data(this[0],E)}return F===g&&H[1]?this.data(H[0]):F}else{return this.trigger("setData"+H[1]+"!",[H[0],G]).each(function(){o.data(this,E,G)})}},removeData:function(E){return this.each(function(){o.removeData(this,E)})},queue:function(E,F){if(typeof E!=="string"){F=E;E="fx"}if(F===g){return o.queue(this[0],E)}return this.each(function(){var G=o.queue(this,E,F);if(E=="fx"&&G.length==1){G[0].call(this)}})},dequeue:function(E){return this.each(function(){o.dequeue(this,E)})}});
/*
 * Sizzle CSS Selector Engine - v0.9.3
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){var R=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,L=0,H=Object.prototype.toString;var F=function(Y,U,ab,ac){ab=ab||[];U=U||document;if(U.nodeType!==1&&U.nodeType!==9){return[]}if(!Y||typeof Y!=="string"){return ab}var Z=[],W,af,ai,T,ad,V,X=true;R.lastIndex=0;while((W=R.exec(Y))!==null){Z.push(W[1]);if(W[2]){V=RegExp.rightContext;break}}if(Z.length>1&&M.exec(Y)){if(Z.length===2&&I.relative[Z[0]]){af=J(Z[0]+Z[1],U)}else{af=I.relative[Z[0]]?[U]:F(Z.shift(),U);while(Z.length){Y=Z.shift();if(I.relative[Y]){Y+=Z.shift()}af=J(Y,af)}}}else{var ae=ac?{expr:Z.pop(),set:E(ac)}:F.find(Z.pop(),Z.length===1&&U.parentNode?U.parentNode:U,Q(U));af=F.filter(ae.expr,ae.set);if(Z.length>0){ai=E(af)}else{X=false}while(Z.length){var ah=Z.pop(),ag=ah;if(!I.relative[ah]){ah=""}else{ag=Z.pop()}if(ag==null){ag=U}I.relative[ah](ai,ag,Q(U))}}if(!ai){ai=af}if(!ai){throw"Syntax error, unrecognized expression: "+(ah||Y)}if(H.call(ai)==="[object Array]"){if(!X){ab.push.apply(ab,ai)}else{if(U.nodeType===1){for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&(ai[aa]===true||ai[aa].nodeType===1&&K(U,ai[aa]))){ab.push(af[aa])}}}else{for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&ai[aa].nodeType===1){ab.push(af[aa])}}}}}else{E(ai,ab)}if(V){F(V,U,ab,ac);if(G){hasDuplicate=false;ab.sort(G);if(hasDuplicate){for(var aa=1;aa<ab.length;aa++){if(ab[aa]===ab[aa-1]){ab.splice(aa--,1)}}}}}return ab};F.matches=function(T,U){return F(T,null,null,U)};F.find=function(aa,T,ab){var Z,X;if(!aa){return[]}for(var W=0,V=I.order.length;W<V;W++){var Y=I.order[W],X;if((X=I.match[Y].exec(aa))){var U=RegExp.leftContext;if(U.substr(U.length-1)!=="\\"){X[1]=(X[1]||"").replace(/\\/g,"");Z=I.find[Y](X,T,ab);if(Z!=null){aa=aa.replace(I.match[Y],"");break}}}}if(!Z){Z=T.getElementsByTagName("*")}return{set:Z,expr:aa}};F.filter=function(ad,ac,ag,W){var V=ad,ai=[],aa=ac,Y,T,Z=ac&&ac[0]&&Q(ac[0]);while(ad&&ac.length){for(var ab in I.filter){if((Y=I.match[ab].exec(ad))!=null){var U=I.filter[ab],ah,af;T=false;if(aa==ai){ai=[]}if(I.preFilter[ab]){Y=I.preFilter[ab](Y,aa,ag,ai,W,Z);if(!Y){T=ah=true}else{if(Y===true){continue}}}if(Y){for(var X=0;(af=aa[X])!=null;X++){if(af){ah=U(af,Y,X,aa);var ae=W^!!ah;if(ag&&ah!=null){if(ae){T=true}else{aa[X]=false}}else{if(ae){ai.push(af);T=true}}}}}if(ah!==g){if(!ag){aa=ai}ad=ad.replace(I.match[ab],"");if(!T){return[]}break}}}if(ad==V){if(T==null){throw"Syntax error, unrecognized expression: "+ad}else{break}}V=ad}return aa};var I=F.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(T){return T.getAttribute("href")}},relative:{"+":function(aa,T,Z){var X=typeof T==="string",ab=X&&!/\W/.test(T),Y=X&&!ab;if(ab&&!Z){T=T.toUpperCase()}for(var W=0,V=aa.length,U;W<V;W++){if((U=aa[W])){while((U=U.previousSibling)&&U.nodeType!==1){}aa[W]=Y||U&&U.nodeName===T?U||false:U===T}}if(Y){F.filter(T,aa,true)}},">":function(Z,U,aa){var X=typeof U==="string";if(X&&!/\W/.test(U)){U=aa?U:U.toUpperCase();for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){var W=Y.parentNode;Z[V]=W.nodeName===U?W:false}}}else{for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){Z[V]=X?Y.parentNode:Y.parentNode===U}}if(X){F.filter(U,Z,true)}}},"":function(W,U,Y){var V=L++,T=S;if(!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("parentNode",U,V,W,X,Y)},"~":function(W,U,Y){var V=L++,T=S;if(typeof U==="string"&&!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("previousSibling",U,V,W,X,Y)}},find:{ID:function(U,V,W){if(typeof V.getElementById!=="undefined"&&!W){var T=V.getElementById(U[1]);return T?[T]:[]}},NAME:function(V,Y,Z){if(typeof Y.getElementsByName!=="undefined"){var U=[],X=Y.getElementsByName(V[1]);for(var W=0,T=X.length;W<T;W++){if(X[W].getAttribute("name")===V[1]){U.push(X[W])}}return U.length===0?null:U}},TAG:function(T,U){return U.getElementsByTagName(T[1])}},preFilter:{CLASS:function(W,U,V,T,Z,aa){W=" "+W[1].replace(/\\/g,"")+" ";if(aa){return W}for(var X=0,Y;(Y=U[X])!=null;X++){if(Y){if(Z^(Y.className&&(" "+Y.className+" ").indexOf(W)>=0)){if(!V){T.push(Y)}}else{if(V){U[X]=false}}}}return false},ID:function(T){return T[1].replace(/\\/g,"")},TAG:function(U,T){for(var V=0;T[V]===false;V++){}return T[V]&&Q(T[V])?U[1]:U[1].toUpperCase()},CHILD:function(T){if(T[1]=="nth"){var U=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(T[2]=="even"&&"2n"||T[2]=="odd"&&"2n+1"||!/\D/.test(T[2])&&"0n+"+T[2]||T[2]);T[2]=(U[1]+(U[2]||1))-0;T[3]=U[3]-0}T[0]=L++;return T},ATTR:function(X,U,V,T,Y,Z){var W=X[1].replace(/\\/g,"");if(!Z&&I.attrMap[W]){X[1]=I.attrMap[W]}if(X[2]==="~="){X[4]=" "+X[4]+" "}return X},PSEUDO:function(X,U,V,T,Y){if(X[1]==="not"){if(X[3].match(R).length>1||/^\w/.test(X[3])){X[3]=F(X[3],null,null,U)}else{var W=F.filter(X[3],U,V,true^Y);if(!V){T.push.apply(T,W)}return false}}else{if(I.match.POS.test(X[0])||I.match.CHILD.test(X[0])){return true}}return X},POS:function(T){T.unshift(true);return T}},filters:{enabled:function(T){return T.disabled===false&&T.type!=="hidden"},disabled:function(T){return T.disabled===true},checked:function(T){return T.checked===true},selected:function(T){T.parentNode.selectedIndex;return T.selected===true},parent:function(T){return !!T.firstChild},empty:function(T){return !T.firstChild},has:function(V,U,T){return !!F(T[3],V).length},header:function(T){return/h\d/i.test(T.nodeName)},text:function(T){return"text"===T.type},radio:function(T){return"radio"===T.type},checkbox:function(T){return"checkbox"===T.type},file:function(T){return"file"===T.type},password:function(T){return"password"===T.type},submit:function(T){return"submit"===T.type},image:function(T){return"image"===T.type},reset:function(T){return"reset"===T.type},button:function(T){return"button"===T.type||T.nodeName.toUpperCase()==="BUTTON"},input:function(T){return/input|select|textarea|button/i.test(T.nodeName)}},setFilters:{first:function(U,T){return T===0},last:function(V,U,T,W){return U===W.length-1},even:function(U,T){return T%2===0},odd:function(U,T){return T%2===1},lt:function(V,U,T){return U<T[3]-0},gt:function(V,U,T){return U>T[3]-0},nth:function(V,U,T){return T[3]-0==U},eq:function(V,U,T){return T[3]-0==U}},filter:{PSEUDO:function(Z,V,W,aa){var U=V[1],X=I.filters[U];if(X){return X(Z,W,V,aa)}else{if(U==="contains"){return(Z.textContent||Z.innerText||"").indexOf(V[3])>=0}else{if(U==="not"){var Y=V[3];for(var W=0,T=Y.length;W<T;W++){if(Y[W]===Z){return false}}return true}}}},CHILD:function(T,W){var Z=W[1],U=T;switch(Z){case"only":case"first":while(U=U.previousSibling){if(U.nodeType===1){return false}}if(Z=="first"){return true}U=T;case"last":while(U=U.nextSibling){if(U.nodeType===1){return false}}return true;case"nth":var V=W[2],ac=W[3];if(V==1&&ac==0){return true}var Y=W[0],ab=T.parentNode;if(ab&&(ab.sizcache!==Y||!T.nodeIndex)){var X=0;for(U=ab.firstChild;U;U=U.nextSibling){if(U.nodeType===1){U.nodeIndex=++X}}ab.sizcache=Y}var aa=T.nodeIndex-ac;if(V==0){return aa==0}else{return(aa%V==0&&aa/V>=0)}}},ID:function(U,T){return U.nodeType===1&&U.getAttribute("id")===T},TAG:function(U,T){return(T==="*"&&U.nodeType===1)||U.nodeName===T},CLASS:function(U,T){return(" "+(U.className||U.getAttribute("class"))+" ").indexOf(T)>-1},ATTR:function(Y,W){var V=W[1],T=I.attrHandle[V]?I.attrHandle[V](Y):Y[V]!=null?Y[V]:Y.getAttribute(V),Z=T+"",X=W[2],U=W[4];return T==null?X==="!=":X==="="?Z===U:X==="*="?Z.indexOf(U)>=0:X==="~="?(" "+Z+" ").indexOf(U)>=0:!U?Z&&T!==false:X==="!="?Z!=U:X==="^="?Z.indexOf(U)===0:X==="$="?Z.substr(Z.length-U.length)===U:X==="|="?Z===U||Z.substr(0,U.length+1)===U+"-":false},POS:function(X,U,V,Y){var T=U[2],W=I.setFilters[T];if(W){return W(X,V,U,Y)}}}};var M=I.match.POS;for(var O in I.match){I.match[O]=RegExp(I.match[O].source+/(?![^\[]*\])(?![^\(]*\))/.source)}var E=function(U,T){U=Array.prototype.slice.call(U);if(T){T.push.apply(T,U);return T}return U};try{Array.prototype.slice.call(document.documentElement.childNodes)}catch(N){E=function(X,W){var U=W||[];if(H.call(X)==="[object Array]"){Array.prototype.push.apply(U,X)}else{if(typeof X.length==="number"){for(var V=0,T=X.length;V<T;V++){U.push(X[V])}}else{for(var V=0;X[V];V++){U.push(X[V])}}}return U}}var G;if(document.documentElement.compareDocumentPosition){G=function(U,T){var V=U.compareDocumentPosition(T)&4?-1:U===T?0:1;if(V===0){hasDuplicate=true}return V}}else{if("sourceIndex" in document.documentElement){G=function(U,T){var V=U.sourceIndex-T.sourceIndex;if(V===0){hasDuplicate=true}return V}}else{if(document.createRange){G=function(W,U){var V=W.ownerDocument.createRange(),T=U.ownerDocument.createRange();V.selectNode(W);V.collapse(true);T.selectNode(U);T.collapse(true);var X=V.compareBoundaryPoints(Range.START_TO_END,T);if(X===0){hasDuplicate=true}return X}}}}(function(){var U=document.createElement("form"),V="script"+(new Date).getTime();U.innerHTML="<input name='"+V+"'/>";var T=document.documentElement;T.insertBefore(U,T.firstChild);if(!!document.getElementById(V)){I.find.ID=function(X,Y,Z){if(typeof Y.getElementById!=="undefined"&&!Z){var W=Y.getElementById(X[1]);return W?W.id===X[1]||typeof W.getAttributeNode!=="undefined"&&W.getAttributeNode("id").nodeValue===X[1]?[W]:g:[]}};I.filter.ID=function(Y,W){var X=typeof Y.getAttributeNode!=="undefined"&&Y.getAttributeNode("id");return Y.nodeType===1&&X&&X.nodeValue===W}}T.removeChild(U)})();(function(){var T=document.createElement("div");T.appendChild(document.createComment(""));if(T.getElementsByTagName("*").length>0){I.find.TAG=function(U,Y){var X=Y.getElementsByTagName(U[1]);if(U[1]==="*"){var W=[];for(var V=0;X[V];V++){if(X[V].nodeType===1){W.push(X[V])}}X=W}return X}}T.innerHTML="<a href='#'></a>";if(T.firstChild&&typeof T.firstChild.getAttribute!=="undefined"&&T.firstChild.getAttribute("href")!=="#"){I.attrHandle.href=function(U){return U.getAttribute("href",2)}}})();if(document.querySelectorAll){(function(){var T=F,U=document.createElement("div");U.innerHTML="<p class='TEST'></p>";if(U.querySelectorAll&&U.querySelectorAll(".TEST").length===0){return}F=function(Y,X,V,W){X=X||document;if(!W&&X.nodeType===9&&!Q(X)){try{return E(X.querySelectorAll(Y),V)}catch(Z){}}return T(Y,X,V,W)};F.find=T.find;F.filter=T.filter;F.selectors=T.selectors;F.matches=T.matches})()}if(document.getElementsByClassName&&document.documentElement.getElementsByClassName){(function(){var T=document.createElement("div");T.innerHTML="<div class='test e'></div><div class='test'></div>";if(T.getElementsByClassName("e").length===0){return}T.lastChild.className="e";if(T.getElementsByClassName("e").length===1){return}I.order.splice(1,0,"CLASS");I.find.CLASS=function(U,V,W){if(typeof V.getElementsByClassName!=="undefined"&&!W){return V.getElementsByClassName(U[1])}}})()}function P(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1&&!ac){T.sizcache=Y;T.sizset=W}if(T.nodeName===Z){X=T;break}T=T[U]}ad[W]=X}}}function S(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1){if(!ac){T.sizcache=Y;T.sizset=W}if(typeof Z!=="string"){if(T===Z){X=true;break}}else{if(F.filter(Z,[T]).length>0){X=T;break}}}T=T[U]}ad[W]=X}}}var K=document.compareDocumentPosition?function(U,T){return U.compareDocumentPosition(T)&16}:function(U,T){return U!==T&&(U.contains?U.contains(T):true)};var Q=function(T){return T.nodeType===9&&T.documentElement.nodeName!=="HTML"||!!T.ownerDocument&&Q(T.ownerDocument)};var J=function(T,aa){var W=[],X="",Y,V=aa.nodeType?[aa]:aa;while((Y=I.match.PSEUDO.exec(T))){X+=Y[0];T=T.replace(I.match.PSEUDO,"")}T=I.relative[T]?T+"*":T;for(var Z=0,U=V.length;Z<U;Z++){F(T,V[Z],W)}return F.filter(X,W)};o.find=F;o.filter=F.filter;o.expr=F.selectors;o.expr[":"]=o.expr.filters;F.selectors.filters.hidden=function(T){return T.offsetWidth===0||T.offsetHeight===0};F.selectors.filters.visible=function(T){return T.offsetWidth>0||T.offsetHeight>0};F.selectors.filters.animated=function(T){return o.grep(o.timers,function(U){return T===U.elem}).length};o.multiFilter=function(V,T,U){if(U){V=":not("+V+")"}return F.matches(V,T)};o.dir=function(V,U){var T=[],W=V[U];while(W&&W!=document){if(W.nodeType==1){T.push(W)}W=W[U]}return T};o.nth=function(X,T,V,W){T=T||1;var U=0;for(;X;X=X[V]){if(X.nodeType==1&&++U==T){break}}return X};o.sibling=function(V,U){var T=[];for(;V;V=V.nextSibling){if(V.nodeType==1&&V!=U){T.push(V)}}return T};return;l.Sizzle=F})();o.event={add:function(I,F,H,K){if(I.nodeType==3||I.nodeType==8){return}if(I.setInterval&&I!=l){I=l}if(!H.guid){H.guid=this.guid++}if(K!==g){var G=H;H=this.proxy(G);H.data=K}var E=o.data(I,"events")||o.data(I,"events",{}),J=o.data(I,"handle")||o.data(I,"handle",function(){return typeof o!=="undefined"&&!o.event.triggered?o.event.handle.apply(arguments.callee.elem,arguments):g});J.elem=I;o.each(F.split(/\s+/),function(M,N){var O=N.split(".");N=O.shift();H.type=O.slice().sort().join(".");var L=E[N];if(o.event.specialAll[N]){o.event.specialAll[N].setup.call(I,K,O)}if(!L){L=E[N]={};if(!o.event.special[N]||o.event.special[N].setup.call(I,K,O)===false){if(I.addEventListener){I.addEventListener(N,J,false)}else{if(I.attachEvent){I.attachEvent("on"+N,J)}}}}L[H.guid]=H;o.event.global[N]=true});I=null},guid:1,global:{},remove:function(K,H,J){if(K.nodeType==3||K.nodeType==8){return}var G=o.data(K,"events"),F,E;if(G){if(H===g||(typeof H==="string"&&H.charAt(0)==".")){for(var I in G){this.remove(K,I+(H||""))}}else{if(H.type){J=H.handler;H=H.type}o.each(H.split(/\s+/),function(M,O){var Q=O.split(".");O=Q.shift();var N=RegExp("(^|\\.)"+Q.slice().sort().join(".*\\.")+"(\\.|$)");if(G[O]){if(J){delete G[O][J.guid]}else{for(var P in G[O]){if(N.test(G[O][P].type)){delete G[O][P]}}}if(o.event.specialAll[O]){o.event.specialAll[O].teardown.call(K,Q)}for(F in G[O]){break}if(!F){if(!o.event.special[O]||o.event.special[O].teardown.call(K,Q)===false){if(K.removeEventListener){K.removeEventListener(O,o.data(K,"handle"),false)}else{if(K.detachEvent){K.detachEvent("on"+O,o.data(K,"handle"))}}}F=null;delete G[O]}}})}for(F in G){break}if(!F){var L=o.data(K,"handle");if(L){L.elem=null}o.removeData(K,"events");o.removeData(K,"handle")}}},trigger:function(I,K,H,E){var G=I.type||I;if(!E){I=typeof I==="object"?I[h]?I:o.extend(o.Event(G),I):o.Event(G);if(G.indexOf("!")>=0){I.type=G=G.slice(0,-1);I.exclusive=true}if(!H){I.stopPropagation();if(this.global[G]){o.each(o.cache,function(){if(this.events&&this.events[G]){o.event.trigger(I,K,this.handle.elem)}})}}if(!H||H.nodeType==3||H.nodeType==8){return g}I.result=g;I.target=H;K=o.makeArray(K);K.unshift(I)}I.currentTarget=H;var J=o.data(H,"handle");if(J){J.apply(H,K)}if((!H[G]||(o.nodeName(H,"a")&&G=="click"))&&H["on"+G]&&H["on"+G].apply(H,K)===false){I.result=false}if(!E&&H[G]&&!I.isDefaultPrevented()&&!(o.nodeName(H,"a")&&G=="click")){this.triggered=true;try{H[G]()}catch(L){}}this.triggered=false;if(!I.isPropagationStopped()){var F=H.parentNode||H.ownerDocument;if(F){o.event.trigger(I,K,F,true)}}},handle:function(K){var J,E;K=arguments[0]=o.event.fix(K||l.event);K.currentTarget=this;var L=K.type.split(".");K.type=L.shift();J=!L.length&&!K.exclusive;var I=RegExp("(^|\\.)"+L.slice().sort().join(".*\\.")+"(\\.|$)");E=(o.data(this,"events")||{})[K.type];for(var G in E){var H=E[G];if(J||I.test(H.type)){K.handler=H;K.data=H.data;var F=H.apply(this,arguments);if(F!==g){K.result=F;if(F===false){K.preventDefault();K.stopPropagation()}}if(K.isImmediatePropagationStopped()){break}}}},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(H){if(H[h]){return H}var F=H;H=o.Event(F);for(var G=this.props.length,J;G;){J=this.props[--G];H[J]=F[J]}if(!H.target){H.target=H.srcElement||document}if(H.target.nodeType==3){H.target=H.target.parentNode}if(!H.relatedTarget&&H.fromElement){H.relatedTarget=H.fromElement==H.target?H.toElement:H.fromElement}if(H.pageX==null&&H.clientX!=null){var I=document.documentElement,E=document.body;H.pageX=H.clientX+(I&&I.scrollLeft||E&&E.scrollLeft||0)-(I.clientLeft||0);H.pageY=H.clientY+(I&&I.scrollTop||E&&E.scrollTop||0)-(I.clientTop||0)}if(!H.which&&((H.charCode||H.charCode===0)?H.charCode:H.keyCode)){H.which=H.charCode||H.keyCode}if(!H.metaKey&&H.ctrlKey){H.metaKey=H.ctrlKey}if(!H.which&&H.button){H.which=(H.button&1?1:(H.button&2?3:(H.button&4?2:0)))}return H},proxy:function(F,E){E=E||function(){return F.apply(this,arguments)};E.guid=F.guid=F.guid||E.guid||this.guid++;return E},special:{ready:{setup:B,teardown:function(){}}},specialAll:{live:{setup:function(E,F){o.event.add(this,F[0],c)},teardown:function(G){if(G.length){var E=0,F=RegExp("(^|\\.)"+G[0]+"(\\.|$)");o.each((o.data(this,"events").live||{}),function(){if(F.test(this.type)){E++}});if(E<1){o.event.remove(this,G[0],c)}}}}}};o.Event=function(E){if(!this.preventDefault){return new o.Event(E)}if(E&&E.type){this.originalEvent=E;this.type=E.type}else{this.type=E}this.timeStamp=e();this[h]=true};function k(){return false}function u(){return true}o.Event.prototype={preventDefault:function(){this.isDefaultPrevented=u;var E=this.originalEvent;if(!E){return}if(E.preventDefault){E.preventDefault()}E.returnValue=false},stopPropagation:function(){this.isPropagationStopped=u;var E=this.originalEvent;if(!E){return}if(E.stopPropagation){E.stopPropagation()}E.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u;this.stopPropagation()},isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k};var a=function(F){var E=F.relatedTarget;while(E&&E!=this){try{E=E.parentNode}catch(G){E=this}}if(E!=this){F.type=F.data;o.event.handle.apply(this,arguments)}};o.each({mouseover:"mouseenter",mouseout:"mouseleave"},function(F,E){o.event.special[E]={setup:function(){o.event.add(this,F,a,E)},teardown:function(){o.event.remove(this,F,a)}}});o.fn.extend({bind:function(F,G,E){return F=="unload"?this.one(F,G,E):this.each(function(){o.event.add(this,F,E||G,E&&G)})},one:function(G,H,F){var E=o.event.proxy(F||H,function(I){o(this).unbind(I,E);return(F||H).apply(this,arguments)});return this.each(function(){o.event.add(this,G,E,F&&H)})},unbind:function(F,E){return this.each(function(){o.event.remove(this,F,E)})},trigger:function(E,F){return this.each(function(){o.event.trigger(E,F,this)})},triggerHandler:function(E,G){if(this[0]){var F=o.Event(E);F.preventDefault();F.stopPropagation();o.event.trigger(F,G,this[0]);return F.result}},toggle:function(G){var E=arguments,F=1;while(F<E.length){o.event.proxy(G,E[F++])}return this.click(o.event.proxy(G,function(H){this.lastToggle=(this.lastToggle||0)%F;H.preventDefault();return E[this.lastToggle++].apply(this,arguments)||false}))},hover:function(E,F){return this.mouseenter(E).mouseleave(F)},ready:function(E){B();if(o.isReady){E.call(document,o)}else{o.readyList.push(E)}return this},live:function(G,F){var E=o.event.proxy(F);E.guid+=this.selector+G;o(document).bind(i(G,this.selector),this.selector,E);return this},die:function(F,E){o(document).unbind(i(F,this.selector),E?{guid:E.guid+this.selector+F}:null);return this}});function c(H){var E=RegExp("(^|\\.)"+H.type+"(\\.|$)"),G=true,F=[];o.each(o.data(this,"events").live||[],function(I,J){if(E.test(J.type)){var K=o(H.target).closest(J.data)[0];if(K){F.push({elem:K,fn:J})}}});F.sort(function(J,I){return o.data(J.elem,"closest")-o.data(I.elem,"closest")});o.each(F,function(){if(this.fn.call(this.elem,H,this.fn.data)===false){return(G=false)}});return G}function i(F,E){return["live",F,E.replace(/\./g,"`").replace(/ /g,"|")].join(".")}o.extend({isReady:false,readyList:[],ready:function(){if(!o.isReady){o.isReady=true;if(o.readyList){o.each(o.readyList,function(){this.call(document,o)});o.readyList=null}o(document).triggerHandler("ready")}}});var x=false;function B(){if(x){return}x=true;if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);o.ready()},false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);o.ready()}});if(document.documentElement.doScroll&&l==l.top){(function(){if(o.isReady){return}try{document.documentElement.doScroll("left")}catch(E){setTimeout(arguments.callee,0);return}o.ready()})()}}}o.event.add(l,"load",o.ready)}o.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","),function(F,E){o.fn[E]=function(G){return G?this.bind(E,G):this.trigger(E)}});o(l).bind("unload",function(){for(var E in o.cache){if(E!=1&&o.cache[E].handle){o.event.remove(o.cache[E].handle.elem)}}});(function(){o.support={};var F=document.documentElement,G=document.createElement("script"),K=document.createElement("div"),J="script"+(new Date).getTime();K.style.display="none";K.innerHTML='   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';var H=K.getElementsByTagName("*"),E=K.getElementsByTagName("a")[0];if(!H||!H.length||!E){return}o.support={leadingWhitespace:K.firstChild.nodeType==3,tbody:!K.getElementsByTagName("tbody").length,objectAll:!!K.getElementsByTagName("object")[0].getElementsByTagName("*").length,htmlSerialize:!!K.getElementsByTagName("link").length,style:/red/.test(E.getAttribute("style")),hrefNormalized:E.getAttribute("href")==="/a",opacity:E.style.opacity==="0.5",cssFloat:!!E.style.cssFloat,scriptEval:false,noCloneEvent:true,boxModel:null};G.type="text/javascript";try{G.appendChild(document.createTextNode("window."+J+"=1;"))}catch(I){}F.insertBefore(G,F.firstChild);if(l[J]){o.support.scriptEval=true;delete l[J]}F.removeChild(G);if(K.attachEvent&&K.fireEvent){K.attachEvent("onclick",function(){o.support.noCloneEvent=false;K.detachEvent("onclick",arguments.callee)});K.cloneNode(true).fireEvent("onclick")}o(function(){var L=document.createElement("div");L.style.width=L.style.paddingLeft="1px";document.body.appendChild(L);o.boxModel=o.support.boxModel=L.offsetWidth===2;document.body.removeChild(L).style.display="none"})})();var w=o.support.cssFloat?"cssFloat":"styleFloat";o.props={"for":"htmlFor","class":"className","float":w,cssFloat:w,styleFloat:w,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",tabindex:"tabIndex"};o.fn.extend({_load:o.fn.load,load:function(G,J,K){if(typeof G!=="string"){return this._load(G)}var I=G.indexOf(" ");if(I>=0){var E=G.slice(I,G.length);G=G.slice(0,I)}var H="GET";if(J){if(o.isFunction(J)){K=J;J=null}else{if(typeof J==="object"){J=o.param(J);H="POST"}}}var F=this;o.ajax({url:G,type:H,dataType:"html",data:J,complete:function(M,L){if(L=="success"||L=="notmodified"){F.html(E?o("<div/>").append(M.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(E):M.responseText)}if(K){F.each(K,[M.responseText,L,M])}}});return this},serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?o.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password|search/i.test(this.type))}).map(function(E,F){var G=o(this).val();return G==null?null:o.isArray(G)?o.map(G,function(I,H){return{name:F.name,value:I}}):{name:F.name,value:G}}).get()}});o.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(E,F){o.fn[F]=function(G){return this.bind(F,G)}});var r=e();o.extend({get:function(E,G,H,F){if(o.isFunction(G)){H=G;G=null}return o.ajax({type:"GET",url:E,data:G,success:H,dataType:F})},getScript:function(E,F){return o.get(E,null,F,"script")},getJSON:function(E,F,G){return o.get(E,F,G,"json")},post:function(E,G,H,F){if(o.isFunction(G)){H=G;G={}}return o.ajax({type:"POST",url:E,data:G,success:H,dataType:F})},ajaxSetup:function(E){o.extend(o.ajaxSettings,E)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return l.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest()},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(M){M=o.extend(true,M,o.extend(true,{},o.ajaxSettings,M));var W,F=/=\?(&|$)/g,R,V,G=M.type.toUpperCase();if(M.data&&M.processData&&typeof M.data!=="string"){M.data=o.param(M.data)}if(M.dataType=="jsonp"){if(G=="GET"){if(!M.url.match(F)){M.url+=(M.url.match(/\?/)?"&":"?")+(M.jsonp||"callback")+"=?"}}else{if(!M.data||!M.data.match(F)){M.data=(M.data?M.data+"&":"")+(M.jsonp||"callback")+"=?"}}M.dataType="json"}if(M.dataType=="json"&&(M.data&&M.data.match(F)||M.url.match(F))){W="jsonp"+r++;if(M.data){M.data=(M.data+"").replace(F,"="+W+"$1")}M.url=M.url.replace(F,"="+W+"$1");M.dataType="script";l[W]=function(X){V=X;I();L();l[W]=g;try{delete l[W]}catch(Y){}if(H){H.removeChild(T)}}}if(M.dataType=="script"&&M.cache==null){M.cache=false}if(M.cache===false&&G=="GET"){var E=e();var U=M.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+E+"$2");M.url=U+((U==M.url)?(M.url.match(/\?/)?"&":"?")+"_="+E:"")}if(M.data&&G=="GET"){M.url+=(M.url.match(/\?/)?"&":"?")+M.data;M.data=null}if(M.global&&!o.active++){o.event.trigger("ajaxStart")}var Q=/^(\w+:)?\/\/([^\/?#]+)/.exec(M.url);if(M.dataType=="script"&&G=="GET"&&Q&&(Q[1]&&Q[1]!=location.protocol||Q[2]!=location.host)){var H=document.getElementsByTagName("head")[0];var T=document.createElement("script");T.src=M.url;if(M.scriptCharset){T.charset=M.scriptCharset}if(!W){var O=false;T.onload=T.onreadystatechange=function(){if(!O&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){O=true;I();L();T.onload=T.onreadystatechange=null;H.removeChild(T)}}}H.appendChild(T);return g}var K=false;var J=M.xhr();if(M.username){J.open(G,M.url,M.async,M.username,M.password)}else{J.open(G,M.url,M.async)}try{if(M.data){J.setRequestHeader("Content-Type",M.contentType)}if(M.ifModified){J.setRequestHeader("If-Modified-Since",o.lastModified[M.url]||"Thu, 01 Jan 1970 00:00:00 GMT")}J.setRequestHeader("X-Requested-With","XMLHttpRequest");J.setRequestHeader("Accept",M.dataType&&M.accepts[M.dataType]?M.accepts[M.dataType]+", */*":M.accepts._default)}catch(S){}if(M.beforeSend&&M.beforeSend(J,M)===false){if(M.global&&!--o.active){o.event.trigger("ajaxStop")}J.abort();return false}if(M.global){o.event.trigger("ajaxSend",[J,M])}var N=function(X){if(J.readyState==0){if(P){clearInterval(P);P=null;if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}}else{if(!K&&J&&(J.readyState==4||X=="timeout")){K=true;if(P){clearInterval(P);P=null}R=X=="timeout"?"timeout":!o.httpSuccess(J)?"error":M.ifModified&&o.httpNotModified(J,M.url)?"notmodified":"success";if(R=="success"){try{V=o.httpData(J,M.dataType,M)}catch(Z){R="parsererror"}}if(R=="success"){var Y;try{Y=J.getResponseHeader("Last-Modified")}catch(Z){}if(M.ifModified&&Y){o.lastModified[M.url]=Y}if(!W){I()}}else{o.handleError(M,J,R)}L();if(X){J.abort()}if(M.async){J=null}}}};if(M.async){var P=setInterval(N,13);if(M.timeout>0){setTimeout(function(){if(J&&!K){N("timeout")}},M.timeout)}}try{J.send(M.data)}catch(S){o.handleError(M,J,null,S)}if(!M.async){N()}function I(){if(M.success){M.success(V,R)}if(M.global){o.event.trigger("ajaxSuccess",[J,M])}}function L(){if(M.complete){M.complete(J,R)}if(M.global){o.event.trigger("ajaxComplete",[J,M])}if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}return J},handleError:function(F,H,E,G){if(F.error){F.error(H,E,G)}if(F.global){o.event.trigger("ajaxError",[H,F,G])}},active:0,httpSuccess:function(F){try{return !F.status&&location.protocol=="file:"||(F.status>=200&&F.status<300)||F.status==304||F.status==1223}catch(E){}return false},httpNotModified:function(G,E){try{var H=G.getResponseHeader("Last-Modified");return G.status==304||H==o.lastModified[E]}catch(F){}return false},httpData:function(J,H,G){var F=J.getResponseHeader("content-type"),E=H=="xml"||!H&&F&&F.indexOf("xml")>=0,I=E?J.responseXML:J.responseText;if(E&&I.documentElement.tagName=="parsererror"){throw"parsererror"}if(G&&G.dataFilter){I=G.dataFilter(I,H)}if(typeof I==="string"){if(H=="script"){o.globalEval(I)}if(H=="json"){I=l["eval"]("("+I+")")}}return I},param:function(E){var G=[];function H(I,J){G[G.length]=encodeURIComponent(I)+"="+encodeURIComponent(J)}if(o.isArray(E)||E.jquery){o.each(E,function(){H(this.name,this.value)})}else{for(var F in E){if(o.isArray(E[F])){o.each(E[F],function(){H(F,this)})}else{H(F,o.isFunction(E[F])?E[F]():E[F])}}}return G.join("&").replace(/%20/g,"+")}});var m={},n,d=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];function t(F,E){var G={};o.each(d.concat.apply([],d.slice(0,E)),function(){G[this]=F});return G}o.fn.extend({show:function(J,L){if(J){return this.animate(t("show",3),J,L)}else{for(var H=0,F=this.length;H<F;H++){var E=o.data(this[H],"olddisplay");this[H].style.display=E||"";if(o.css(this[H],"display")==="none"){var G=this[H].tagName,K;if(m[G]){K=m[G]}else{var I=o("<"+G+" />").appendTo("body");K=I.css("display");if(K==="none"){K="block"}I.remove();m[G]=K}o.data(this[H],"olddisplay",K)}}for(var H=0,F=this.length;H<F;H++){this[H].style.display=o.data(this[H],"olddisplay")||""}return this}},hide:function(H,I){if(H){return this.animate(t("hide",3),H,I)}else{for(var G=0,F=this.length;G<F;G++){var E=o.data(this[G],"olddisplay");if(!E&&E!=="none"){o.data(this[G],"olddisplay",o.css(this[G],"display"))}}for(var G=0,F=this.length;G<F;G++){this[G].style.display="none"}return this}},_toggle:o.fn.toggle,toggle:function(G,F){var E=typeof G==="boolean";return o.isFunction(G)&&o.isFunction(F)?this._toggle.apply(this,arguments):G==null||E?this.each(function(){var H=E?G:o(this).is(":hidden");o(this)[H?"show":"hide"]()}):this.animate(t("toggle",3),G,F)},fadeTo:function(E,G,F){return this.animate({opacity:G},E,F)},animate:function(I,F,H,G){var E=o.speed(F,H,G);return this[E.queue===false?"each":"queue"](function(){var K=o.extend({},E),M,L=this.nodeType==1&&o(this).is(":hidden"),J=this;for(M in I){if(I[M]=="hide"&&L||I[M]=="show"&&!L){return K.complete.call(this)}if((M=="height"||M=="width")&&this.style){K.display=o.css(this,"display");K.overflow=this.style.overflow}}if(K.overflow!=null){this.style.overflow="hidden"}K.curAnim=o.extend({},I);o.each(I,function(O,S){var R=new o.fx(J,K,O);if(/toggle|show|hide/.test(S)){R[S=="toggle"?L?"show":"hide":S](I)}else{var Q=S.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),T=R.cur(true)||0;if(Q){var N=parseFloat(Q[2]),P=Q[3]||"px";if(P!="px"){J.style[O]=(N||1)+P;T=((N||1)/R.cur(true))*T;J.style[O]=T+P}if(Q[1]){N=((Q[1]=="-="?-1:1)*N)+T}R.custom(T,N,P)}else{R.custom(T,S,"")}}});return true})},stop:function(F,E){var G=o.timers;if(F){this.queue([])}this.each(function(){for(var H=G.length-1;H>=0;H--){if(G[H].elem==this){if(E){G[H](true)}G.splice(H,1)}}});if(!E){this.dequeue()}return this}});o.each({slideDown:t("show",1),slideUp:t("hide",1),slideToggle:t("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(E,F){o.fn[E]=function(G,H){return this.animate(F,G,H)}});o.extend({speed:function(G,H,F){var E=typeof G==="object"?G:{complete:F||!F&&H||o.isFunction(G)&&G,duration:G,easing:F&&H||H&&!o.isFunction(H)&&H};E.duration=o.fx.off?0:typeof E.duration==="number"?E.duration:o.fx.speeds[E.duration]||o.fx.speeds._default;E.old=E.complete;E.complete=function(){if(E.queue!==false){o(this).dequeue()}if(o.isFunction(E.old)){E.old.call(this)}};return E},easing:{linear:function(G,H,E,F){return E+F*G},swing:function(G,H,E,F){return((-Math.cos(G*Math.PI)/2)+0.5)*F+E}},timers:[],fx:function(F,E,G){this.options=E;this.elem=F;this.prop=G;if(!E.orig){E.orig={}}}});o.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)}(o.fx.step[this.prop]||o.fx.step._default)(this);if((this.prop=="height"||this.prop=="width")&&this.elem.style){this.elem.style.display="block"}},cur:function(F){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var E=parseFloat(o.css(this.elem,this.prop,F));return E&&E>-10000?E:parseFloat(o.curCSS(this.elem,this.prop))||0},custom:function(I,H,G){this.startTime=e();this.start=I;this.end=H;this.unit=G||this.unit||"px";this.now=this.start;this.pos=this.state=0;var E=this;function F(J){return E.step(J)}F.elem=this.elem;if(F()&&o.timers.push(F)&&!n){n=setInterval(function(){var K=o.timers;for(var J=0;J<K.length;J++){if(!K[J]()){K.splice(J--,1)}}if(!K.length){clearInterval(n);n=g}},13)}},show:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.show=true;this.custom(this.prop=="width"||this.prop=="height"?1:0,this.cur());o(this.elem).show()},hide:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(H){var G=e();if(H||G>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var E=true;for(var F in this.options.curAnim){if(this.options.curAnim[F]!==true){E=false}}if(E){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if(o.css(this.elem,"display")=="none"){this.elem.style.display="block"}}if(this.options.hide){o(this.elem).hide()}if(this.options.hide||this.options.show){for(var I in this.options.curAnim){o.attr(this.elem.style,I,this.options.orig[I])}}this.options.complete.call(this.elem)}return false}else{var J=G-this.startTime;this.state=J/this.options.duration;this.pos=o.easing[this.options.easing||(o.easing.swing?"swing":"linear")](this.state,J,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};o.extend(o.fx,{speeds:{slow:600,fast:200,_default:400},step:{opacity:function(E){o.attr(E.elem.style,"opacity",E.now)},_default:function(E){if(E.elem.style&&E.elem.style[E.prop]!=null){E.elem.style[E.prop]=E.now+E.unit}else{E.elem[E.prop]=E.now}}}});if(document.documentElement.getBoundingClientRect){o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}var G=this[0].getBoundingClientRect(),J=this[0].ownerDocument,F=J.body,E=J.documentElement,L=E.clientTop||F.clientTop||0,K=E.clientLeft||F.clientLeft||0,I=G.top+(self.pageYOffset||o.boxModel&&E.scrollTop||F.scrollTop)-L,H=G.left+(self.pageXOffset||o.boxModel&&E.scrollLeft||F.scrollLeft)-K;return{top:I,left:H}}}else{o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}o.offset.initialized||o.offset.initialize();var J=this[0],G=J.offsetParent,F=J,O=J.ownerDocument,M,H=O.documentElement,K=O.body,L=O.defaultView,E=L.getComputedStyle(J,null),N=J.offsetTop,I=J.offsetLeft;while((J=J.parentNode)&&J!==K&&J!==H){M=L.getComputedStyle(J,null);N-=J.scrollTop,I-=J.scrollLeft;if(J===G){N+=J.offsetTop,I+=J.offsetLeft;if(o.offset.doesNotAddBorder&&!(o.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(J.tagName))){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}F=G,G=J.offsetParent}if(o.offset.subtractsBorderForOverflowNotVisible&&M.overflow!=="visible"){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}E=M}if(E.position==="relative"||E.position==="static"){N+=K.offsetTop,I+=K.offsetLeft}if(E.position==="fixed"){N+=Math.max(H.scrollTop,K.scrollTop),I+=Math.max(H.scrollLeft,K.scrollLeft)}return{top:N,left:I}}}o.offset={initialize:function(){if(this.initialized){return}var L=document.body,F=document.createElement("div"),H,G,N,I,M,E,J=L.style.marginTop,K='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';M={position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"};for(E in M){F.style[E]=M[E]}F.innerHTML=K;L.insertBefore(F,L.firstChild);H=F.firstChild,G=H.firstChild,I=H.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(G.offsetTop!==5);this.doesAddBorderForTableAndCells=(I.offsetTop===5);H.style.overflow="hidden",H.style.position="relative";this.subtractsBorderForOverflowNotVisible=(G.offsetTop===-5);L.style.marginTop="1px";this.doesNotIncludeMarginInBodyOffset=(L.offsetTop===0);L.style.marginTop=J;L.removeChild(F);this.initialized=true},bodyOffset:function(E){o.offset.initialized||o.offset.initialize();var G=E.offsetTop,F=E.offsetLeft;if(o.offset.doesNotIncludeMarginInBodyOffset){G+=parseInt(o.curCSS(E,"marginTop",true),10)||0,F+=parseInt(o.curCSS(E,"marginLeft",true),10)||0}return{top:G,left:F}}};o.fn.extend({position:function(){var I=0,H=0,F;if(this[0]){var G=this.offsetParent(),J=this.offset(),E=/^body|html$/i.test(G[0].tagName)?{top:0,left:0}:G.offset();J.top-=j(this,"marginTop");J.left-=j(this,"marginLeft");E.top+=j(G,"borderTopWidth");E.left+=j(G,"borderLeftWidth");F={top:J.top-E.top,left:J.left-E.left}}return F},offsetParent:function(){var E=this[0].offsetParent||document.body;while(E&&(!/^body|html$/i.test(E.tagName)&&o.css(E,"position")=="static")){E=E.offsetParent}return o(E)}});o.each(["Left","Top"],function(F,E){var G="scroll"+E;o.fn[G]=function(H){if(!this[0]){return null}return H!==g?this.each(function(){this==l||this==document?l.scrollTo(!F?H:o(l).scrollLeft(),F?H:o(l).scrollTop()):this[G]=H}):this[0]==l||this[0]==document?self[F?"pageYOffset":"pageXOffset"]||o.boxModel&&document.documentElement[G]||document.body[G]:this[0][G]}});o.each(["Height","Width"],function(I,G){var E=I?"Left":"Top",H=I?"Right":"Bottom",F=G.toLowerCase();o.fn["inner"+G]=function(){return this[0]?o.css(this[0],F,false,"padding"):null};o.fn["outer"+G]=function(K){return this[0]?o.css(this[0],F,false,K?"margin":"border"):null};var J=G.toLowerCase();o.fn[J]=function(K){return this[0]==l?document.compatMode=="CSS1Compat"&&document.documentElement["client"+G]||document.body["client"+G]:this[0]==document?Math.max(document.documentElement["client"+G],document.body["scroll"+G],document.documentElement["scroll"+G],document.body["offset"+G],document.documentElement["offset"+G]):K===g?(this.length?o.css(this[0],J):null):this.css(J,typeof K==="string"?K:K+"px")}})})();

/*#####*/
//jquery.bgiframe.min.js

/* Copyright (c) 2006 Brandon Aaron (http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * $LastChangedDate: 2007-07-21 18:45:56 -0500 (Sat, 21 Jul 2007) $
 * $Rev: 2447 $
 *
 * Version 2.1.1
 */
(function($){$.fn.bgIframe=$.fn.bgiframe=function(s){if($.browser.msie&&/6.0/.test(navigator.userAgent)){s=$.extend({top:'auto',left:'auto',width:'auto',height:'auto',opacity:true,src:'javascript:false;'},s||{});var prop=function(n){return n&&n.constructor==Number?n+'px':n;},html='<iframe class="bgiframe"frameborder="0"tabindex="-1"src="'+s.src+'"'+'style="display:block;position:absolute;z-index:-1;'+(s.opacity!==false?'filter:Alpha(Opacity=\'0\');':'')+'top:'+(s.top=='auto'?'expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+\'px\')':prop(s.top))+';'+'left:'+(s.left=='auto'?'expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+\'px\')':prop(s.left))+';'+'width:'+(s.width=='auto'?'expression(this.parentNode.offsetWidth+\'px\')':prop(s.width))+';'+'height:'+(s.height=='auto'?'expression(this.parentNode.offsetHeight+\'px\')':prop(s.height))+';'+'"/>';return this.each(function(){if($('> iframe.bgiframe',this).length==0)this.insertBefore(document.createElement(html),this.firstChild);});}return this;};})(jQuery);

/*#####*/
//jquery.printpage.min.js

// $('#content a').not($('.tabbedInterface ul.nav a'))
//                .not($('.expandingSpace a.trigger'))
//                .not($('.doNotPrint'))
//                .printPage();

(function($){var links={},linkNum=0,options={};function urlExists(u){if(links[u])return true;return false;}
function addUrl(u){if(urlExists(u))return;links[u]=++linkNum;}
function numForLink(u){if(!urlExists(u))addUrl(u);return links[u];}
function fullyQualified(u,s){s=s||window.location.href;if(u.match(/^\w{3,5}:\/\//))return u;if(u.substr(0,1)=='/')return window.location.href.substr(0,window.location.href.indexOf('/',9))+u;if(u.substr(0,3)=='../')
{var curr_dir=s;curr_dir=curr_dir.substr(0,curr_dir.lastIndexOf('/'));var parent_dir=curr_dir.substr(0,curr_dir.lastIndexOf('/'));if(parent_dir.substr(-1)!='/')parent_dir+='/';return fullyQualified(u.substr(3),parent_dir);}
if(u.substr(0,2)=='./')u=u.substr(2);return s+u;}
$.fn.printPage=function(o){options=o=$.extend({},arguments.callee.defaults,o);if(o.skipUrlCheck||($.getURLParam&&$.getURLParam(o.urlParam)==o.urlParamValue))
{var footnoteLinks=$('<ol id="FootnoteLinks"></ol>');$('html,body').addClass(o.bodyClass);if(o.footnoteLinks){this.not('#'+o.printLinkId).each(function(){var u=fullyQualified($(this).attr('href'));if(!urlExists(u))
$('<li>'+u+'</li>').appendTo(footnoteLinks);$('<sup>['+numForLink(u)+']</sup>').insertAfter($(this));});}
if(linkNum>0&&o.footnoteLinks){$('<h2 id="FootnoteLinksTitle">Links</h2>').appendTo("#"+o.appendLinksToId);footnoteLinks.appendTo("#"+o.appendLinksToId);}
if(o.postPrintHandler&&typeof o.postPrintHandler=='function')
o.postPrintHandler();}
return this;};function addArg(k,v){var printPage=$('#'+options.printLinkId);if(!printPage)return;printPage.attr('href',printPage.attr('href')+'&'+encodeURIComponent(k)+'='+encodeURIComponent(v));}
function updateArg(k,v)
{k=encodeURIComponent(k);v=encodeURIComponent(v);var printPage=$('#'+options.printLinkId);if(!printPage)return;var href=printPage.attr('href');var page=href.substr(0,href.indexOf('?'));var attrs=href.substr(href.indexOf('?')+1).split('&');var found=false;for(var i=0;i<attrs.length;i++){var bits=attrs[i].split('=');if(bits[0]==k){found=true;attrs[i]=[bits[0],v].join('=');return;}}
if(!found)
attrs[attrs.length]=[k,v].join('=');printPage.attr('href',[page,attrs.join('&')].join('?'));}
$.fn.printPage.defaults={bodyClass:'print',urlParam:'print',urlParamValue:1,printLinkId:'PrintLink',printDialog:true,skipUrlCheck:false,appendLinksToId:'ContentChannel',postPrintHandler:function(){},footnoteLinks:true};})(jQuery);


/*#####*/
//ui.core.min.js

/*
 * jQuery UI 1.7.1
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI
 */
;jQuery.ui||(function($){var _remove=$.fn.remove,isFF2=$.browser.mozilla&&(parseFloat($.browser.version)<1.9);$.ui={version:"1.7.1",plugin:{add:function(module,option,set){var proto=$.ui[module].prototype;for(var i in set){proto.plugins[i]=proto.plugins[i]||[];proto.plugins[i].push([option,set[i]]);}},call:function(instance,name,args){var set=instance.plugins[name];if(!set||!instance.element[0].parentNode){return;}
for(var i=0;i<set.length;i++){if(instance.options[set[i][0]]){set[i][1].apply(instance.element,args);}}}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b);},hasScroll:function(el,a){if($(el).css('overflow')=='hidden'){return false;}
var scroll=(a&&a=='left')?'scrollLeft':'scrollTop',has=false;if(el[scroll]>0){return true;}
el[scroll]=1;has=(el[scroll]>0);el[scroll]=0;return has;},isOverAxis:function(x,reference,size){return(x>reference)&&(x<(reference+size));},isOver:function(y,x,top,left,height,width){return $.ui.isOverAxis(y,top,height)&&$.ui.isOverAxis(x,left,width);},keyCode:{BACKSPACE:8,CAPS_LOCK:20,COMMA:188,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38}};if(isFF2){var attr=$.attr,removeAttr=$.fn.removeAttr,ariaNS="http://www.w3.org/2005/07/aaa",ariaState=/^aria-/,ariaRole=/^wairole:/;$.attr=function(elem,name,value){var set=value!==undefined;return(name=='role'?(set?attr.call(this,elem,name,"wairole:"+value):(attr.apply(this,arguments)||"").replace(ariaRole,"")):(ariaState.test(name)?(set?elem.setAttributeNS(ariaNS,name.replace(ariaState,"aaa:"),value):attr.call(this,elem,name.replace(ariaState,"aaa:"))):attr.apply(this,arguments)));};$.fn.removeAttr=function(name){return(ariaState.test(name)?this.each(function(){this.removeAttributeNS(ariaNS,name.replace(ariaState,""));}):removeAttr.call(this,name));};}
$.fn.extend({remove:function(){$("*",this).add(this).each(function(){$(this).triggerHandler("remove");});return _remove.apply(this,arguments);},enableSelection:function(){return this.attr('unselectable','off').css('MozUserSelect','').unbind('selectstart.ui');},disableSelection:function(){return this.attr('unselectable','on').css('MozUserSelect','none').bind('selectstart.ui',function(){return false;});},scrollParent:function(){var scrollParent;if(($.browser.msie&&(/(static|relative)/).test(this.css('position')))||(/absolute/).test(this.css('position'))){scrollParent=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test($.curCSS(this,'position',1))&&(/(auto|scroll)/).test($.curCSS(this,'overflow',1)+$.curCSS(this,'overflow-y',1)+$.curCSS(this,'overflow-x',1));}).eq(0);}else{scrollParent=this.parents().filter(function(){return(/(auto|scroll)/).test($.curCSS(this,'overflow',1)+$.curCSS(this,'overflow-y',1)+$.curCSS(this,'overflow-x',1));}).eq(0);}
return(/fixed/).test(this.css('position'))||!scrollParent.length?$(document):scrollParent;}});$.extend($.expr[':'],{data:function(elem,i,match){return!!$.data(elem,match[3]);},focusable:function(element){var nodeName=element.nodeName.toLowerCase(),tabIndex=$.attr(element,'tabindex');return(/input|select|textarea|button|object/.test(nodeName)?!element.disabled:'a'==nodeName||'area'==nodeName?element.href||!isNaN(tabIndex):!isNaN(tabIndex))&&!$(element)['area'==nodeName?'parents':'closest'](':hidden').length;},tabbable:function(element){var tabIndex=$.attr(element,'tabindex');return(isNaN(tabIndex)||tabIndex>=0)&&$(element).is(':focusable');}});function getter(namespace,plugin,method,args){function getMethods(type){var methods=$[namespace][plugin][type]||[];return(typeof methods=='string'?methods.split(/,?\s+/):methods);}
var methods=getMethods('getter');if(args.length==1&&typeof args[0]=='string'){methods=methods.concat(getMethods('getterSetter'));}
return($.inArray(method,methods)!=-1);}
$.widget=function(name,prototype){var namespace=name.split(".")[0];name=name.split(".")[1];$.fn[name]=function(options){var isMethodCall=(typeof options=='string'),args=Array.prototype.slice.call(arguments,1);if(isMethodCall&&options.substring(0,1)=='_'){return this;}
if(isMethodCall&&getter(namespace,name,options,args)){var instance=$.data(this[0],name);return(instance?instance[options].apply(instance,args):undefined);}
return this.each(function(){var instance=$.data(this,name);(!instance&&!isMethodCall&&$.data(this,name,new $[namespace][name](this,options))._init());(instance&&isMethodCall&&$.isFunction(instance[options])&&instance[options].apply(instance,args));});};$[namespace]=$[namespace]||{};$[namespace][name]=function(element,options){var self=this;this.namespace=namespace;this.widgetName=name;this.widgetEventPrefix=$[namespace][name].eventPrefix||name;this.widgetBaseClass=namespace+'-'+name;this.options=$.extend({},$.widget.defaults,$[namespace][name].defaults,$.metadata&&$.metadata.get(element)[name],options);this.element=$(element).bind('setData.'+name,function(event,key,value){if(event.target==element){return self._setData(key,value);}}).bind('getData.'+name,function(event,key){if(event.target==element){return self._getData(key);}}).bind('remove',function(){return self.destroy();});};$[namespace][name].prototype=$.extend({},$.widget.prototype,prototype);$[namespace][name].getterSetter='option';};$.widget.prototype={_init:function(){},destroy:function(){this.element.removeData(this.widgetName).removeClass(this.widgetBaseClass+'-disabled'+' '+this.namespace+'-state-disabled').removeAttr('aria-disabled');},option:function(key,value){var options=key,self=this;if(typeof key=="string"){if(value===undefined){return this._getData(key);}
options={};options[key]=value;}
$.each(options,function(key,value){self._setData(key,value);});},_getData:function(key){return this.options[key];},_setData:function(key,value){this.options[key]=value;if(key=='disabled'){this.element
[value?'addClass':'removeClass'](this.widgetBaseClass+'-disabled'+' '+
this.namespace+'-state-disabled').attr("aria-disabled",value);}},enable:function(){this._setData('disabled',false);},disable:function(){this._setData('disabled',true);},_trigger:function(type,event,data){var callback=this.options[type],eventName=(type==this.widgetEventPrefix?type:this.widgetEventPrefix+type);event=$.Event(event);event.type=eventName;if(event.originalEvent){for(var i=$.event.props.length,prop;i;){prop=$.event.props[--i];event[prop]=event.originalEvent[prop];}}
this.element.trigger(event,data);return!($.isFunction(callback)&&callback.call(this.element[0],event,data)===false||event.isDefaultPrevented());}};$.widget.defaults={disabled:false};$.ui.mouse={_mouseInit:function(){var self=this;this.element.bind('mousedown.'+this.widgetName,function(event){return self._mouseDown(event);}).bind('click.'+this.widgetName,function(event){if(self._preventClickEvent){self._preventClickEvent=false;event.stopImmediatePropagation();return false;}});if($.browser.msie){this._mouseUnselectable=this.element.attr('unselectable');this.element.attr('unselectable','on');}
this.started=false;},_mouseDestroy:function(){this.element.unbind('.'+this.widgetName);($.browser.msie&&this.element.attr('unselectable',this._mouseUnselectable));},_mouseDown:function(event){event.originalEvent=event.originalEvent||{};if(event.originalEvent.mouseHandled){return;}
(this._mouseStarted&&this._mouseUp(event));this._mouseDownEvent=event;var self=this,btnIsLeft=(event.which==1),elIsCancel=(typeof this.options.cancel=="string"?$(event.target).parents().add(event.target).filter(this.options.cancel).length:false);if(!btnIsLeft||elIsCancel||!this._mouseCapture(event)){return true;}
this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){self.mouseDelayMet=true;},this.options.delay);}
if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){this._mouseStarted=(this._mouseStart(event)!==false);if(!this._mouseStarted){event.preventDefault();return true;}}
this._mouseMoveDelegate=function(event){return self._mouseMove(event);};this._mouseUpDelegate=function(event){return self._mouseUp(event);};$(document).bind('mousemove.'+this.widgetName,this._mouseMoveDelegate).bind('mouseup.'+this.widgetName,this._mouseUpDelegate);($.browser.safari||event.preventDefault());event.originalEvent.mouseHandled=true;return true;},_mouseMove:function(event){if($.browser.msie&&!event.button){return this._mouseUp(event);}
if(this._mouseStarted){this._mouseDrag(event);return event.preventDefault();}
if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,event)!==false);(this._mouseStarted?this._mouseDrag(event):this._mouseUp(event));}
return!this._mouseStarted;},_mouseUp:function(event){$(document).unbind('mousemove.'+this.widgetName,this._mouseMoveDelegate).unbind('mouseup.'+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;this._preventClickEvent=(event.target==this._mouseDownEvent.target);this._mouseStop(event);}
return false;},_mouseDistanceMet:function(event){return(Math.max(Math.abs(this._mouseDownEvent.pageX-event.pageX),Math.abs(this._mouseDownEvent.pageY-event.pageY))>=this.options.distance);},_mouseDelayMet:function(event){return this.mouseDelayMet;},_mouseStart:function(event){},_mouseDrag:function(event){},_mouseStop:function(event){},_mouseCapture:function(event){return true;}};$.ui.mouse.defaults={cancel:null,distance:1,delay:0};})(jQuery);

/*#####*/
//ui.dialog.min.js

/*
 * jQuery UI Dialog 1.7.1a
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Dialog
 *
 * Depends:
 *	ui.core.js
 *	ui.draggable.js
 *	ui.resizable.js
 *
 * 20090408 - Updated by matt@atre.net to populate ui argument to open event. Provides ui.dialog and ui.overlay.
 * 
 */
(function($){var setDataSwitch={dragStart:"start.draggable",drag:"drag.draggable",dragStop:"stop.draggable",maxHeight:"maxHeight.resizable",minHeight:"minHeight.resizable",maxWidth:"maxWidth.resizable",minWidth:"minWidth.resizable",resizeStart:"start.resizable",resize:"drag.resizable",resizeStop:"stop.resizable"},uiDialogClasses='ui-dialog '+'ui-widget '+'ui-widget-content '+'ui-corner-all ';$.widget("ui.dialog",{_init:function(){this.originalTitle=this.element.attr('title');var self=this,options=this.options,title=options.title||this.originalTitle||'&nbsp;',titleId=$.ui.dialog.getTitleId(this.element),uiDialog=(this.uiDialog=$('<div/>')).appendTo(document.body).hide().addClass(uiDialogClasses+options.dialogClass).css({position:'absolute',overflow:'hidden',zIndex:options.zIndex}).attr('tabIndex',-1).css('outline',0).keydown(function(event){(options.closeOnEscape&&event.keyCode&&event.keyCode==$.ui.keyCode.ESCAPE&&self.close(event));}).attr({role:'dialog','aria-labelledby':titleId}).mousedown(function(event){self.moveToTop(false,event);}),uiDialogContent=this.element.show().removeAttr('title').addClass('ui-dialog-content '+'ui-widget-content').appendTo(uiDialog),uiDialogTitlebar=(this.uiDialogTitlebar=$('<div></div>')).addClass('ui-dialog-titlebar '+'ui-widget-header '+'ui-corner-all '+'ui-helper-clearfix').prependTo(uiDialog),uiDialogTitlebarClose=$('<a href="#"/>').addClass('ui-dialog-titlebar-close '+'ui-corner-all').attr('role','button').hover(function(){uiDialogTitlebarClose.addClass('ui-state-hover');},function(){uiDialogTitlebarClose.removeClass('ui-state-hover');}).focus(function(){uiDialogTitlebarClose.addClass('ui-state-focus');}).blur(function(){uiDialogTitlebarClose.removeClass('ui-state-focus');}).mousedown(function(ev){ev.stopPropagation();}).click(function(event){self.close(event);return false;}).appendTo(uiDialogTitlebar),uiDialogTitlebarCloseText=(this.uiDialogTitlebarCloseText=$('<span/>')).addClass('ui-icon '+'ui-icon-closethick').text(options.closeText).appendTo(uiDialogTitlebarClose),uiDialogTitle=$('<span/>').addClass('ui-dialog-title').attr('id',titleId).html(title).prependTo(uiDialogTitlebar);uiDialogTitlebar.find("*").add(uiDialogTitlebar).disableSelection();(options.draggable&&$.fn.draggable&&this._makeDraggable());(options.resizable&&$.fn.resizable&&this._makeResizable());this._createButtons(options.buttons);this._isOpen=false;(options.bgiframe&&$.fn.bgiframe&&uiDialog.bgiframe());(options.autoOpen&&this.open());},destroy:function(){(this.overlay&&this.overlay.destroy());this.uiDialog.hide();this.element.unbind('.dialog').removeData('dialog').removeClass('ui-dialog-content ui-widget-content').hide().appendTo('body');this.uiDialog.remove();(this.originalTitle&&this.element.attr('title',this.originalTitle));},close:function(event){var self=this;if(false===self._trigger('beforeclose',event)){return;}
(self.overlay&&self.overlay.destroy());self.uiDialog.unbind('keypress.ui-dialog');(self.options.hide?self.uiDialog.hide(self.options.hide,function(){self._trigger('close',event);}):self.uiDialog.hide()&&self._trigger('close',event));$.ui.dialog.overlay.resize();self._isOpen=false;},isOpen:function(){return this._isOpen;},moveToTop:function(force,event){if((this.options.modal&&!force)||(!this.options.stack&&!this.options.modal)){return this._trigger('focus',event);}
if(this.options.zIndex>$.ui.dialog.maxZ){$.ui.dialog.maxZ=this.options.zIndex;}
(this.overlay&&this.overlay.$el.css('z-index',$.ui.dialog.overlay.maxZ=++$.ui.dialog.maxZ));var saveScroll={scrollTop:this.element.attr('scrollTop'),scrollLeft:this.element.attr('scrollLeft')};this.uiDialog.css('z-index',++$.ui.dialog.maxZ);this.element.attr(saveScroll);this._trigger('focus',event);},open:function(){if(this._isOpen){return;}
var options=this.options,uiDialog=this.uiDialog;this.overlay=options.modal?new $.ui.dialog.overlay(this):null;(uiDialog.next().length&&uiDialog.appendTo('body'));this._size();this._position(options.position);uiDialog.show(options.show);this.moveToTop(true);(options.modal&&uiDialog.bind('keypress.ui-dialog',function(event){if(event.keyCode!=$.ui.keyCode.TAB){return;}
var tabbables=$(':tabbable',this),first=tabbables.filter(':first')[0],last=tabbables.filter(':last')[0];if(event.target==last&&!event.shiftKey){setTimeout(function(){first.focus();},1);}else if(event.target==first&&event.shiftKey){setTimeout(function(){last.focus();},1);}}));$([]).add(uiDialog.find('.ui-dialog-content :tabbable:first')).add(uiDialog.find('.ui-dialog-buttonpane :tabbable:first')).add(uiDialog).filter(':first').focus();this._trigger('open',null,this._ui(uiDialog,this.overlay.$el));this._isOpen=true;},_createButtons:function(buttons){var self=this,hasButtons=false,uiDialogButtonPane=$('<div></div>').addClass('ui-dialog-buttonpane '+'ui-widget-content '+'ui-helper-clearfix');this.uiDialog.find('.ui-dialog-buttonpane').remove();(typeof buttons=='object'&&buttons!==null&&$.each(buttons,function(){return!(hasButtons=true);}));if(hasButtons){$.each(buttons,function(name,fn){$('<button type="button"></button>').addClass('ui-state-default '+'ui-corner-all').text(name).click(function(){fn.apply(self.element[0],arguments);}).hover(function(){$(this).addClass('ui-state-hover');},function(){$(this).removeClass('ui-state-hover');}).focus(function(){$(this).addClass('ui-state-focus');}).blur(function(){$(this).removeClass('ui-state-focus');}).appendTo(uiDialogButtonPane);});uiDialogButtonPane.appendTo(this.uiDialog);}},_makeDraggable:function(){var self=this,options=this.options,heightBeforeDrag;this.uiDialog.draggable({cancel:'.ui-dialog-content',handle:'.ui-dialog-titlebar',containment:'document',start:function(){heightBeforeDrag=options.height;$(this).height($(this).height()).addClass("ui-dialog-dragging");(options.dragStart&&options.dragStart.apply(self.element[0],arguments));},drag:function(){(options.drag&&options.drag.apply(self.element[0],arguments));},stop:function(){$(this).removeClass("ui-dialog-dragging").height(heightBeforeDrag);(options.dragStop&&options.dragStop.apply(self.element[0],arguments));$.ui.dialog.overlay.resize();}});},_makeResizable:function(handles){handles=(handles===undefined?this.options.resizable:handles);var self=this,options=this.options,resizeHandles=typeof handles=='string'?handles:'n,e,s,w,se,sw,ne,nw';this.uiDialog.resizable({cancel:'.ui-dialog-content',alsoResize:this.element,maxWidth:options.maxWidth,maxHeight:options.maxHeight,minWidth:options.minWidth,minHeight:options.minHeight,start:function(){$(this).addClass("ui-dialog-resizing");(options.resizeStart&&options.resizeStart.apply(self.element[0],arguments));},resize:function(){(options.resize&&options.resize.apply(self.element[0],arguments));},handles:resizeHandles,stop:function(){$(this).removeClass("ui-dialog-resizing");options.height=$(this).height();options.width=$(this).width();(options.resizeStop&&options.resizeStop.apply(self.element[0],arguments));$.ui.dialog.overlay.resize();}}).find('.ui-resizable-se').addClass('ui-icon ui-icon-grip-diagonal-se');},_position:function(pos){var wnd=$(window),doc=$(document),pTop=doc.scrollTop(),pLeft=doc.scrollLeft(),minTop=pTop;if($.inArray(pos,['center','top','right','bottom','left'])>=0){pos=[pos=='right'||pos=='left'?pos:'center',pos=='top'||pos=='bottom'?pos:'middle'];}
if(pos.constructor!=Array){pos=['center','middle'];}
if(pos[0].constructor==Number){pLeft+=pos[0];}else{switch(pos[0]){case'left':pLeft+=0;break;case'right':pLeft+=wnd.width()-this.uiDialog.outerWidth();break;default:case'center':pLeft+=(wnd.width()-this.uiDialog.outerWidth())/2;}}
if(pos[1].constructor==Number){pTop+=pos[1];}else{switch(pos[1]){case'top':pTop+=0;break;case'bottom':pTop+=wnd.height()-this.uiDialog.outerHeight();break;default:case'middle':pTop+=(wnd.height()-this.uiDialog.outerHeight())/2;}}
pTop=Math.max(pTop,minTop);this.uiDialog.css({top:pTop,left:pLeft});},_setData:function(key,value){(setDataSwitch[key]&&this.uiDialog.data(setDataSwitch[key],value));switch(key){case"buttons":this._createButtons(value);break;case"closeText":this.uiDialogTitlebarCloseText.text(value);break;case"dialogClass":this.uiDialog.removeClass(this.options.dialogClass).addClass(uiDialogClasses+value);break;case"draggable":(value?this._makeDraggable():this.uiDialog.draggable('destroy'));break;case"height":this.uiDialog.height(value);break;case"position":this._position(value);break;case"resizable":var uiDialog=this.uiDialog,isResizable=this.uiDialog.is(':data(resizable)');(isResizable&&!value&&uiDialog.resizable('destroy'));(isResizable&&typeof value=='string'&&uiDialog.resizable('option','handles',value));(isResizable||this._makeResizable(value));break;case"title":$(".ui-dialog-title",this.uiDialogTitlebar).html(value||'&nbsp;');break;case"width":this.uiDialog.width(value);break;}
$.widget.prototype._setData.apply(this,arguments);},_size:function(){var options=this.options;this.element.css({height:0,minHeight:0,width:'auto'});var nonContentHeight=this.uiDialog.css({height:'auto',width:options.width}).height();this.element.css({minHeight:Math.max(options.minHeight-nonContentHeight,0),height:options.height=='auto'?'auto':Math.max(options.height-nonContentHeight,0)});},_ui:function(dialog,overlay){return{dialog:dialog,overlay:overlay};}});$.extend($.ui.dialog,{version:"1.7.1",defaults:{autoOpen:true,bgiframe:false,buttons:{},closeOnEscape:true,closeText:'close',dialogClass:'',draggable:true,hide:null,height:'auto',maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,position:'center',resizable:true,show:null,stack:true,title:'',width:300,zIndex:1000},getter:'isOpen',uuid:0,maxZ:0,getTitleId:function($el){return'ui-dialog-title-'+($el.attr('id')||++this.uuid);},overlay:function(dialog){this.$el=$.ui.dialog.overlay.create(dialog);}});$.extend($.ui.dialog.overlay,{instances:[],maxZ:0,events:$.map('focus,mousedown,mouseup,keydown,keypress,click'.split(','),function(event){return event+'.dialog-overlay';}).join(' '),create:function(dialog){if(this.instances.length===0){setTimeout(function(){$(document).bind($.ui.dialog.overlay.events,function(event){var dialogZ=$(event.target).parents('.ui-dialog').css('zIndex')||0;return(dialogZ>$.ui.dialog.overlay.maxZ);});},1);$(document).bind('keydown.dialog-overlay',function(event){(dialog.options.closeOnEscape&&event.keyCode&&event.keyCode==$.ui.keyCode.ESCAPE&&dialog.close(event));});$(window).bind('resize.dialog-overlay',$.ui.dialog.overlay.resize);}
var $el=$('<div></div>').appendTo(document.body).addClass('ui-widget-overlay').css({width:this.width(),height:this.height()});(dialog.options.bgiframe&&$.fn.bgiframe&&$el.bgiframe());this.instances.push($el);return $el;},destroy:function($el){this.instances.splice($.inArray(this.instances,$el),1);if(this.instances.length===0){$([document,window]).unbind('.dialog-overlay');}
$el.remove();},height:function(){if($.browser.msie&&$.browser.version<7){var scrollHeight=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);var offsetHeight=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);if(scrollHeight<offsetHeight){return $(window).height()+'px';}else{return scrollHeight+'px';}}else{return $(document).height()+'px';}},width:function(){if($.browser.msie&&$.browser.version<7){var scrollWidth=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);var offsetWidth=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);if(scrollWidth<offsetWidth){return $(window).width()+'px';}else{return scrollWidth+'px';}}else{return $(document).width()+'px';}},resize:function(){var $overlays=$([]);$.each($.ui.dialog.overlay.instances,function(){$overlays=$overlays.add(this);});$overlays.css({width:0,height:0}).css({width:$.ui.dialog.overlay.width(),height:$.ui.dialog.overlay.height()});}});$.extend($.ui.dialog.overlay.prototype,{destroy:function(){$.ui.dialog.overlay.destroy(this.$el);}});})(jQuery);

/*#####*/
//ui.tabs.js

/*
 * jQuery UI Tabs 1.7.1a
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Tabs
 *
 * Depends:
 *	ui.core.js
 *
 * 20090407 - Modified by matt@atre.net to add a cleanResponse event that
 *   can be used to clean the response from an AJAX load to strip out script
 *   tags to prevent load/execution problems.
 *
 */
(function($){$.widget("ui.tabs",{_init:function(){if(this.options.deselectable!==undefined){this.options.collapsible=this.options.deselectable;}
this._tabify(true);},_setData:function(key,value){if(key=='selected'){if(this.options.collapsible&&value==this.options.selected){return;}
this.select(value);}
else{this.options[key]=value;if(key=='deselectable'){this.options.collapsible=value;}
this._tabify();}},_tabId:function(a){return a.title&&a.title.replace(/\s/g,'_').replace(/[^A-Za-z0-9\-_:\.]/g,'')||this.options.idPrefix+$.data(a);},_sanitizeSelector:function(hash){return hash.replace(/:/g,'\\:');},_cookie:function(){var cookie=this.cookie||(this.cookie=this.options.cookie.name||'ui-tabs-'+$.data(this.list[0]));return $.cookie.apply(null,[cookie].concat($.makeArray(arguments)));},_ui:function(tab,panel){return{tab:tab,panel:panel,index:this.anchors.index(tab)};},_cleanup:function(){this.lis.filter('.ui-state-processing').removeClass('ui-state-processing').find('span:data(label.tabs)').each(function(){var el=$(this);el.html(el.data('label.tabs')).removeData('label.tabs');});},_tabify:function(init){this.list=this.element.children('ul:first');this.lis=$('li:has(a[href])',this.list);this.anchors=this.lis.map(function(){return $('a',this)[0];});this.panels=$([]);var self=this,o=this.options;var fragmentId=/^#.+/;this.anchors.each(function(i,a){var href=$(a).attr('href');var hrefBase=href.split('#')[0],baseEl;if(hrefBase&&(hrefBase===location.toString().split('#')[0]||(baseEl=$('base')[0])&&hrefBase===baseEl.href)){href=a.hash;a.href=href;}
if(fragmentId.test(href)){self.panels=self.panels.add(self._sanitizeSelector(href));}
else if(href!='#'){$.data(a,'href.tabs',href);$.data(a,'load.tabs',href.replace(/#.*$/,''));var id=self._tabId(a);a.href='#'+id;var $panel=$('#'+id);if(!$panel.length){$panel=$(o.panelTemplate).attr('id',id).addClass('ui-tabs-panel ui-widget-content ui-corner-bottom').insertAfter(self.panels[i-1]||self.list);$panel.data('destroy.tabs',true);}
self.panels=self.panels.add($panel);}
else{o.disabled.push(i);}});if(init){this.element.addClass('ui-tabs ui-widget ui-widget-content ui-corner-all');this.list.addClass('ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all');this.lis.addClass('ui-state-default ui-corner-top');this.panels.addClass('ui-tabs-panel ui-widget-content ui-corner-bottom');if(o.selected===undefined){if(location.hash){this.anchors.each(function(i,a){if(a.hash==location.hash){o.selected=i;return false;}});}
if(typeof o.selected!='number'&&o.cookie){o.selected=parseInt(self._cookie(),10);}
if(typeof o.selected!='number'&&this.lis.filter('.ui-tabs-selected').length){o.selected=this.lis.index(this.lis.filter('.ui-tabs-selected'));}
o.selected=o.selected||0;}
else if(o.selected===null){o.selected=-1;}
o.selected=((o.selected>=0&&this.anchors[o.selected])||o.selected<0)?o.selected:0;o.disabled=$.unique(o.disabled.concat($.map(this.lis.filter('.ui-state-disabled'),function(n,i){return self.lis.index(n);}))).sort();if($.inArray(o.selected,o.disabled)!=-1){o.disabled.splice($.inArray(o.selected,o.disabled),1);}
this.panels.addClass('ui-tabs-hide');this.lis.removeClass('ui-tabs-selected ui-state-active');if(o.selected>=0&&this.anchors.length){this.panels.eq(o.selected).removeClass('ui-tabs-hide');this.lis.eq(o.selected).addClass('ui-tabs-selected ui-state-active');self.element.queue("tabs",function(){self._trigger('show',null,self._ui(self.anchors[o.selected],self.panels[o.selected]));});this.load(o.selected);}
$(window).bind('unload',function(){self.lis.add(self.anchors).unbind('.tabs');self.lis=self.anchors=self.panels=null;});}
else{o.selected=this.lis.index(this.lis.filter('.ui-tabs-selected'));}
this.element[o.collapsible?'addClass':'removeClass']('ui-tabs-collapsible');if(o.cookie){this._cookie(o.selected,o.cookie);}
for(var i=0,li;(li=this.lis[i]);i++){$(li)[$.inArray(i,o.disabled)!=-1&&!$(li).hasClass('ui-tabs-selected')?'addClass':'removeClass']('ui-state-disabled');}
if(o.cache===false){this.anchors.removeData('cache.tabs');}
this.lis.add(this.anchors).unbind('.tabs');if(o.event!='mouseover'){var addState=function(state,el){if(el.is(':not(.ui-state-disabled)')){el.addClass('ui-state-'+state);}};var removeState=function(state,el){el.removeClass('ui-state-'+state);};this.lis.bind('mouseover.tabs',function(){addState('hover',$(this));});this.lis.bind('mouseout.tabs',function(){removeState('hover',$(this));});this.anchors.bind('focus.tabs',function(){addState('focus',$(this).closest('li'));});this.anchors.bind('blur.tabs',function(){removeState('focus',$(this).closest('li'));});}
var hideFx,showFx;if(o.fx){if($.isArray(o.fx)){hideFx=o.fx[0];showFx=o.fx[1];}
else{hideFx=showFx=o.fx;}}
function resetStyle($el,fx){$el.css({display:''});if($.browser.msie&&fx.opacity){$el[0].style.removeAttribute('filter');}}
var showTab=showFx?function(clicked,$show){$(clicked).closest('li').removeClass('ui-state-default').addClass('ui-tabs-selected ui-state-active');$show.hide().removeClass('ui-tabs-hide').animate(showFx,showFx.duration||'normal',function(){resetStyle($show,showFx);self._trigger('show',null,self._ui(clicked,$show[0]));});}:function(clicked,$show){$(clicked).closest('li').removeClass('ui-state-default').addClass('ui-tabs-selected ui-state-active');$show.removeClass('ui-tabs-hide');self._trigger('show',null,self._ui(clicked,$show[0]));};var hideTab=hideFx?function(clicked,$hide){$hide.animate(hideFx,hideFx.duration||'normal',function(){self.lis.removeClass('ui-tabs-selected ui-state-active').addClass('ui-state-default');$hide.addClass('ui-tabs-hide');resetStyle($hide,hideFx);self.element.dequeue("tabs");});}:function(clicked,$hide,$show){self.lis.removeClass('ui-tabs-selected ui-state-active').addClass('ui-state-default');$hide.addClass('ui-tabs-hide');self.element.dequeue("tabs");};this.anchors.bind(o.event+'.tabs',function(){var el=this,$li=$(this).closest('li'),$hide=self.panels.filter(':not(.ui-tabs-hide)'),$show=$(self._sanitizeSelector(this.hash));if(($li.hasClass('ui-tabs-selected')&&!o.collapsible)||$li.hasClass('ui-state-disabled')||$li.hasClass('ui-state-processing')||self._trigger('select',null,self._ui(this,$show[0]))===false){this.blur();return false;}
o.selected=self.anchors.index(this);self.abort();if(o.collapsible){if($li.hasClass('ui-tabs-selected')){o.selected=-1;if(o.cookie){self._cookie(o.selected,o.cookie);}
self.element.queue("tabs",function(){hideTab(el,$hide);}).dequeue("tabs");this.blur();return false;}
else if(!$hide.length){if(o.cookie){self._cookie(o.selected,o.cookie);}
self.element.queue("tabs",function(){showTab(el,$show);});self.load(self.anchors.index(this));this.blur();return false;}}
if(o.cookie){self._cookie(o.selected,o.cookie);}
if($show.length){if($hide.length){self.element.queue("tabs",function(){hideTab(el,$hide);});}
self.element.queue("tabs",function(){showTab(el,$show);});self.load(self.anchors.index(this));}
else{throw'jQuery UI Tabs: Mismatching fragment identifier.';}
if($.browser.msie){this.blur();}});this.anchors.bind('click.tabs',function(){return false;});},destroy:function(){var o=this.options;this.abort();this.element.unbind('.tabs').removeClass('ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible').removeData('tabs');this.list.removeClass('ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all');this.anchors.each(function(){var href=$.data(this,'href.tabs');if(href){this.href=href;}
var $this=$(this).unbind('.tabs');$.each(['href','load','cache'],function(i,prefix){$this.removeData(prefix+'.tabs');});});this.lis.unbind('.tabs').add(this.panels).each(function(){if($.data(this,'destroy.tabs')){$(this).remove();}
else{$(this).removeClass(['ui-state-default','ui-corner-top','ui-tabs-selected','ui-state-active','ui-state-hover','ui-state-focus','ui-state-disabled','ui-tabs-panel','ui-widget-content','ui-corner-bottom','ui-tabs-hide'].join(' '));}});if(o.cookie){this._cookie(null,o.cookie);}},add:function(url,label,index){if(index===undefined){index=this.anchors.length;}
var self=this,o=this.options,$li=$(o.tabTemplate.replace(/#\{href\}/g,url).replace(/#\{label\}/g,label)),id=!url.indexOf('#')?url.replace('#',''):this._tabId($('a',$li)[0]);$li.addClass('ui-state-default ui-corner-top').data('destroy.tabs',true);var $panel=$('#'+id);if(!$panel.length){$panel=$(o.panelTemplate).attr('id',id).data('destroy.tabs',true);}
$panel.addClass('ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide');if(index>=this.lis.length){$li.appendTo(this.list);$panel.appendTo(this.list[0].parentNode);}
else{$li.insertBefore(this.lis[index]);$panel.insertBefore(this.panels[index]);}
o.disabled=$.map(o.disabled,function(n,i){return n>=index?++n:n;});this._tabify();if(this.anchors.length==1){$li.addClass('ui-tabs-selected ui-state-active');$panel.removeClass('ui-tabs-hide');this.element.queue("tabs",function(){self._trigger('show',null,self._ui(self.anchors[0],self.panels[0]));});this.load(0);}
this._trigger('add',null,this._ui(this.anchors[index],this.panels[index]));},remove:function(index){var o=this.options,$li=this.lis.eq(index).remove(),$panel=this.panels.eq(index).remove();if($li.hasClass('ui-tabs-selected')&&this.anchors.length>1){this.select(index+(index+1<this.anchors.length?1:-1));}
o.disabled=$.map($.grep(o.disabled,function(n,i){return n!=index;}),function(n,i){return n>=index?--n:n;});this._tabify();this._trigger('remove',null,this._ui($li.find('a')[0],$panel[0]));},enable:function(index){var o=this.options;if($.inArray(index,o.disabled)==-1){return;}
this.lis.eq(index).removeClass('ui-state-disabled');o.disabled=$.grep(o.disabled,function(n,i){return n!=index;});this._trigger('enable',null,this._ui(this.anchors[index],this.panels[index]));},disable:function(index){var self=this,o=this.options;if(index!=o.selected){this.lis.eq(index).addClass('ui-state-disabled');o.disabled.push(index);o.disabled.sort();this._trigger('disable',null,this._ui(this.anchors[index],this.panels[index]));}},select:function(index){if(typeof index=='string'){index=this.anchors.index(this.anchors.filter('[href$='+index+']'));}
else if(index===null){index=-1;}
if(index==-1&&this.options.collapsible){index=this.options.selected;}
this.anchors.eq(index).trigger(this.options.event+'.tabs');},load:function(index){var self=this,o=this.options,a=this.anchors.eq(index)[0],url=$.data(a,'load.tabs');this.abort();if(!url||this.element.queue("tabs").length!==0&&$.data(a,'cache.tabs')){this.element.dequeue("tabs");return;}
this.lis.eq(index).addClass('ui-state-processing');if(o.spinner){var span=$('span',a);span.data('label.tabs',span.html()).html(o.spinner);}
this.xhr=$.ajax($.extend({},o.ajaxOptions,{url:url,success:function(r,s){var triggerData=self._ui(self.anchors[index],self.panels[index]);triggerData.response=r;self._trigger('cleanResponse',null,triggerData);$(self._sanitizeSelector(a.hash)).html(triggerData.response);self._cleanup();if(o.cache){$.data(a,'cache.tabs',true);}
self._trigger('load',null,self._ui(self.anchors[index],self.panels[index]));try{o.ajaxOptions.success(r,s);}
catch(e){}
self.element.dequeue("tabs");}}));},abort:function(){this.element.queue([]);this.panels.stop(false,true);if(this.xhr){this.xhr.abort();delete this.xhr;}
this._cleanup();},url:function(index,url){this.anchors.eq(index).removeData('cache.tabs').data('load.tabs',url);},length:function(){return this.anchors.length;}});$.extend($.ui.tabs,{version:'1.7.1',getter:'length',defaults:{ajaxOptions:null,cache:false,cookie:null,collapsible:false,disabled:[],event:'click',fx:null,idPrefix:'ui-tabs-',panelTemplate:'<div></div>',spinner:'<em>Loading&#8230;</em>',tabTemplate:'<li><a href="#{href}"><span>#{label}</span></a></li>'}});$.extend($.ui.tabs.prototype,{rotation:null,rotate:function(ms,continuing){var self=this,o=this.options;var rotate=self._rotate||(self._rotate=function(e){clearTimeout(self.rotation);self.rotation=setTimeout(function(){var t=o.selected;self.select(++t<self.anchors.length?t:0);},ms);if(e){e.stopPropagation();}});var stop=self._unrotate||(self._unrotate=!continuing?function(e){if(e.clientX){self.rotate(null);}}:function(e){t=o.selected;rotate();});if(ms){this.element.bind('tabsshow',rotate);this.anchors.bind(o.event+'.tabs',stop);rotate();}
else{clearTimeout(self.rotation);this.element.unbind('tabsshow',rotate);this.anchors.unbind(o.event+'.tabs',stop);delete this._rotate;delete this._unrotate;}}});})(jQuery);

/*#####*/
//jquery.jcarousel.pack.js

/**
 * jCarousel - Riding carousels with jQuery
 *   http://sorgalla.com/jcarousel/
 *
 * Copyright (c) 2006 Jan Sorgalla (http://sorgalla.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * Built on top of the jQuery library
 *   http://jquery.com
 *
 * Inspired by the "Carousel Component" by Bill Scott
 *   http://billwscott.com/carousel/
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(9($){$.1v.C=9(o){z 4.1b(9(){3p r(4,o)})};8 q={Z:F,25:1,21:1,u:7,1c:3,15:7,1K:\'2X\',2c:\'2Q\',1q:0,B:7,1j:7,1G:7,2F:7,2B:7,2z:7,2x:7,2v:7,2s:7,2p:7,1S:\'<P></P>\',1Q:\'<P></P>\',2m:\'2l\',2k:\'2l\',1O:7,1L:7};$.C=9(e,o){4.5=$.16({},q,o||{});4.Q=F;4.D=7;4.H=7;4.t=7;4.U=7;4.R=7;4.N=!4.5.Z?\'1H\':\'26\';4.E=!4.5.Z?\'24\':\'23\';8 a=\'\',1e=e.K.1e(\' \');1r(8 i=0;i<1e.I;i++){6(1e[i].2y(\'C-2w\')!=-1){$(e).1E(1e[i]);8 a=1e[i];1p}}6(e.2t==\'3o\'||e.2t==\'3n\'){4.t=$(e);4.D=4.t.19();6(4.D.1o(\'C-H\')){6(!4.D.19().1o(\'C-D\'))4.D=4.D.B(\'<P></P>\');4.D=4.D.19()}10 6(!4.D.1o(\'C-D\'))4.D=4.t.B(\'<P></P>\').19()}10{4.D=$(e);4.t=$(e).3h(\'>2o,>2n,P>2o,P>2n\')}6(a!=\'\'&&4.D.19()[0].K.2y(\'C-2w\')==-1)4.D.B(\'<P 3g=" \'+a+\'"></P>\');4.H=4.t.19();6(!4.H.I||!4.H.1o(\'C-H\'))4.H=4.t.B(\'<P></P>\').19();4.R=$(\'.C-11\',4.D);6(4.R.u()==0&&4.5.1Q!=7)4.R=4.H.1z(4.5.1Q).11();4.R.V(4.K(\'C-11\'));4.U=$(\'.C-17\',4.D);6(4.U.u()==0&&4.5.1S!=7)4.U=4.H.1z(4.5.1S).11();4.U.V(4.K(\'C-17\'));4.H.V(4.K(\'C-H\'));4.t.V(4.K(\'C-t\'));4.D.V(4.K(\'C-D\'));8 b=4.5.15!=7?1k.1P(4.1m()/4.5.15):7;8 c=4.t.32(\'1F\');8 d=4;6(c.u()>0){8 f=0,i=4.5.21;c.1b(9(){d.1I(4,i++);f+=d.S(4,b)});4.t.y(4.N,f+\'T\');6(!o||o.u===J)4.5.u=c.u()}4.D.y(\'1y\',\'1A\');4.U.y(\'1y\',\'1A\');4.R.y(\'1y\',\'1A\');4.2G=9(){d.17()};4.2b=9(){d.11()};4.1U=9(){d.2q()};6(4.5.1j!=7)4.5.1j(4,\'2a\');6($.2A.28){4.1f(F,F);$(27).1u(\'2I\',9(){d.1t()})}10 4.1t()};8 r=$.C;r.1v=r.2H={C:\'0.2.3\'};r.1v.16=r.16=$.16;r.1v.16({1t:9(){4.A=7;4.G=7;4.X=7;4.13=7;4.14=F;4.1d=7;4.O=7;4.W=F;6(4.Q)z;4.t.y(4.E,4.1s(4.5.21)+\'T\');8 p=4.1s(4.5.25);4.X=4.13=7;4.1i(p,F);$(27).22(\'2E\',4.1U).1u(\'2E\',4.1U)},2D:9(){4.t.2C();4.t.y(4.E,\'3u\');4.t.y(4.N,\'3t\');6(4.5.1j!=7)4.5.1j(4,\'2D\');4.1t()},2q:9(){6(4.O!=7&&4.W)4.t.y(4.E,r.M(4.t.y(4.E))+4.O);4.O=7;4.W=F;6(4.5.1G!=7)4.5.1G(4);6(4.5.15!=7){8 a=4;8 b=1k.1P(4.1m()/4.5.15),N=0,E=0;$(\'1F\',4.t).1b(9(i){N+=a.S(4,b);6(i+1<a.A)E=N});4.t.y(4.N,N+\'T\');4.t.y(4.E,-E+\'T\')}4.1c(4.A,F)},3s:9(){4.Q=1h;4.1f()},3r:9(){4.Q=F;4.1f()},u:9(s){6(s!=J){4.5.u=s;6(!4.Q)4.1f()}z 4.5.u},3q:9(i,a){6(a==J||!a)a=i;6(4.5.u!==7&&a>4.5.u)a=4.5.u;1r(8 j=i;j<=a;j++){8 e=4.L(j);6(!e.I||e.1o(\'C-1a-1D\'))z F}z 1h},L:9(i){z $(\'.C-1a-\'+i,4.t)},2u:9(i,s){8 e=4.L(i),20=0,2u=0;6(e.I==0){8 c,e=4.1B(i),j=r.M(i);1n(c=4.L(--j)){6(j<=0||c.I){j<=0?4.t.2r(e):c.1X(e);1p}}}10 20=4.S(e);e.1E(4.K(\'C-1a-1D\'));1R s==\'3l\'?e.3k(s):e.2C().3j(s);8 a=4.5.15!=7?1k.1P(4.1m()/4.5.15):7;8 b=4.S(e,a)-20;6(i>0&&i<4.A)4.t.y(4.E,r.M(4.t.y(4.E))-b+\'T\');4.t.y(4.N,r.M(4.t.y(4.N))+b+\'T\');z e},1V:9(i){8 e=4.L(i);6(!e.I||(i>=4.A&&i<=4.G))z;8 d=4.S(e);6(i<4.A)4.t.y(4.E,r.M(4.t.y(4.E))+d+\'T\');e.1V();4.t.y(4.N,r.M(4.t.y(4.N))-d+\'T\')},17:9(){4.1C();6(4.O!=7&&!4.W)4.1T(F);10 4.1c(((4.5.B==\'1Z\'||4.5.B==\'G\')&&4.5.u!=7&&4.G==4.5.u)?1:4.A+4.5.1c)},11:9(){4.1C();6(4.O!=7&&4.W)4.1T(1h);10 4.1c(((4.5.B==\'1Z\'||4.5.B==\'A\')&&4.5.u!=7&&4.A==1)?4.5.u:4.A-4.5.1c)},1T:9(b){6(4.Q||4.14||!4.O)z;8 a=r.M(4.t.y(4.E));!b?a-=4.O:a+=4.O;4.W=!b;4.X=4.A;4.13=4.G;4.1i(a)},1c:9(i,a){6(4.Q||4.14)z;4.1i(4.1s(i),a)},1s:9(i){6(4.Q||4.14)z;6(4.5.B!=\'18\')i=i<1?1:(4.5.u&&i>4.5.u?4.5.u:i);8 a=4.A>i;8 b=r.M(4.t.y(4.E));8 f=4.5.B!=\'18\'&&4.A<=1?1:4.A;8 c=a?4.L(f):4.L(4.G);8 j=a?f:f-1;8 e=7,l=0,p=F,d=0;1n(a?--j>=i:++j<i){e=4.L(j);p=!e.I;6(e.I==0){e=4.1B(j).V(4.K(\'C-1a-1D\'));c[a?\'1z\':\'1X\'](e)}c=e;d=4.S(e);6(p)l+=d;6(4.A!=7&&(4.5.B==\'18\'||(j>=1&&(4.5.u==7||j<=4.5.u))))b=a?b+d:b-d}8 g=4.1m();8 h=[];8 k=0,j=i,v=0;8 c=4.L(i-1);1n(++k){e=4.L(j);p=!e.I;6(e.I==0){e=4.1B(j).V(4.K(\'C-1a-1D\'));c.I==0?4.t.2r(e):c[a?\'1z\':\'1X\'](e)}c=e;8 d=4.S(e);6(d==0){3f(\'3e: 3d 1H/26 3c 1r 3b. 3a 39 38 37 36 35. 34...\');z 0}6(4.5.B!=\'18\'&&4.5.u!==7&&j>4.5.u)h.33(e);10 6(p)l+=d;v+=d;6(v>=g)1p;j++}1r(8 x=0;x<h.I;x++)h[x].1V();6(l>0){4.t.y(4.N,4.S(4.t)+l+\'T\');6(a){b-=l;4.t.y(4.E,r.M(4.t.y(4.E))-l+\'T\')}}8 n=i+k-1;6(4.5.B!=\'18\'&&4.5.u&&n>4.5.u)n=4.5.u;6(j>n){k=0,j=n,v=0;1n(++k){8 e=4.L(j--);6(!e.I)1p;v+=4.S(e);6(v>=g)1p}}8 o=n-k+1;6(4.5.B!=\'18\'&&o<1)o=1;6(4.W&&a){b+=4.O;4.W=F}4.O=7;6(4.5.B!=\'18\'&&n==4.5.u&&(n-k+1)>=1){8 m=r.Y(4.L(n),!4.5.Z?\'1l\':\'1N\');6((v-m)>g)4.O=v-g-m}1n(i-->o)b+=4.S(4.L(i));4.X=4.A;4.13=4.G;4.A=o;4.G=n;z b},1i:9(p,a){6(4.Q||4.14)z;4.14=1h;8 b=4;8 c=9(){b.14=F;6(p==0)b.t.y(b.E,0);6(b.5.B==\'1Z\'||b.5.B==\'G\'||b.5.u==7||b.G<b.5.u)b.2j();b.1f();b.1M(\'2i\')};4.1M(\'31\');6(!4.5.1K||a==F){4.t.y(4.E,p+\'T\');c()}10{8 o=!4.5.Z?{\'24\':p}:{\'23\':p};4.t.1i(o,4.5.1K,4.5.2c,c)}},2j:9(s){6(s!=J)4.5.1q=s;6(4.5.1q==0)z 4.1C();6(4.1d!=7)z;8 a=4;4.1d=30(9(){a.17()},4.5.1q*2Z)},1C:9(){6(4.1d==7)z;2Y(4.1d);4.1d=7},1f:9(n,p){6(n==J||n==7){8 n=!4.Q&&4.5.u!==0&&((4.5.B&&4.5.B!=\'A\')||4.5.u==7||4.G<4.5.u);6(!4.Q&&(!4.5.B||4.5.B==\'A\')&&4.5.u!=7&&4.G>=4.5.u)n=4.O!=7&&!4.W}6(p==J||p==7){8 p=!4.Q&&4.5.u!==0&&((4.5.B&&4.5.B!=\'G\')||4.A>1);6(!4.Q&&(!4.5.B||4.5.B==\'G\')&&4.5.u!=7&&4.A==1)p=4.O!=7&&4.W}8 a=4;4.U[n?\'1u\':\'22\'](4.5.2m,4.2G)[n?\'1E\':\'V\'](4.K(\'C-17-1w\')).1J(\'1w\',n?F:1h);4.R[p?\'1u\':\'22\'](4.5.2k,4.2b)[p?\'1E\':\'V\'](4.K(\'C-11-1w\')).1J(\'1w\',p?F:1h);6(4.U.I>0&&(4.U[0].1g==J||4.U[0].1g!=n)&&4.5.1O!=7){4.U.1b(9(){a.5.1O(a,4,n)});4.U[0].1g=n}6(4.R.I>0&&(4.R[0].1g==J||4.R[0].1g!=p)&&4.5.1L!=7){4.R.1b(9(){a.5.1L(a,4,p)});4.R[0].1g=p}},1M:9(a){8 b=4.X==7?\'2a\':(4.X<4.A?\'17\':\'11\');4.12(\'2F\',a,b);6(4.X!==4.A){4.12(\'2B\',a,b,4.A);4.12(\'2z\',a,b,4.X)}6(4.13!==4.G){4.12(\'2x\',a,b,4.G);4.12(\'2v\',a,b,4.13)}4.12(\'2s\',a,b,4.A,4.G,4.X,4.13);4.12(\'2p\',a,b,4.X,4.13,4.A,4.G)},12:9(a,b,c,d,e,f,g){6(4.5[a]==J||(1R 4.5[a]!=\'2h\'&&b!=\'2i\'))z;8 h=1R 4.5[a]==\'2h\'?4.5[a][b]:4.5[a];6(!$.2W(h))z;8 j=4;6(d===J)h(j,c,b);10 6(e===J)4.L(d).1b(9(){h(j,4,d,c,b)});10{1r(8 i=d;i<=e;i++)6(i!==7&&!(i>=f&&i<=g))4.L(i).1b(9(){h(j,4,i,c,b)})}},1B:9(i){z 4.1I(\'<1F></1F>\',i)},1I:9(e,i){8 a=$(e).V(4.K(\'C-1a\')).V(4.K(\'C-1a-\'+i));a.1J(\'2V\',i);z a},K:9(c){z c+\' \'+c+(!4.5.Z?\'-2U\':\'-Z\')},S:9(e,d){8 a=e.2g!=J?e[0]:e;8 b=!4.5.Z?a.1x+r.Y(a,\'2f\')+r.Y(a,\'1l\'):a.2e+r.Y(a,\'2d\')+r.Y(a,\'1N\');6(d==J||b==d)z b;8 w=!4.5.Z?d-r.Y(a,\'2f\')-r.Y(a,\'1l\'):d-r.Y(a,\'2d\')-r.Y(a,\'1N\');$(a).y(4.N,w+\'T\');z 4.S(a)},1m:9(){z!4.5.Z?4.H[0].1x-r.M(4.H.y(\'2T\'))-r.M(4.H.y(\'2S\')):4.H[0].2e-r.M(4.H.y(\'2R\'))-r.M(4.H.y(\'3i\'))},2P:9(i,s){6(s==J)s=4.5.u;z 1k.2O((((i-1)/s)-1k.2N((i-1)/s))*s)+1}});r.16({3m:9(d){z $.16(q,d||{})},Y:9(e,p){6(!e)z 0;8 a=e.2g!=J?e[0]:e;6(p==\'1l\'&&$.2A.28){8 b={\'1y\':\'1A\',\'2M\':\'2L\',\'1H\':\'1q\'},1Y,1W;$.29(a,b,9(){1Y=a.1x});b[\'1l\']=0;$.29(a,b,9(){1W=a.1x});z 1W-1Y}z r.M($.y(a,p))},M:9(v){v=2K(v);z 2J(v)?0:v}})})(3v);',62,218,'||||this|options|if|null|var|function||||||||||||||||||||list|size||||css|return|first|wrap|jcarousel|container|lt|false|last|clip|length|undefined|className|get|intval|wh|tail|div|locked|buttonPrev|dimension|px|buttonNext|addClass|inTail|prevFirst|margin|vertical|else|prev|callback|prevLast|animating|visible|extend|next|circular|parent|item|each|scroll|timer|split|buttons|jcarouselstate|true|animate|initCallback|Math|marginRight|clipping|while|hasClass|break|auto|for|pos|setup|bind|fn|disabled|offsetWidth|display|before|block|create|stopAuto|placeholder|removeClass|li|reloadCallback|width|format|attr|animation|buttonPrevCallback|notify|marginBottom|buttonNextCallback|ceil|buttonPrevHTML|typeof|buttonNextHTML|scrollTail|funcResize|remove|oWidth2|after|oWidth|both|old|offset|unbind|top|left|start|height|window|safari|swap|init|funcPrev|easing|marginTop|offsetHeight|marginLeft|jquery|object|onAfterAnimation|startAuto|buttonPrevEvent|click|buttonNextEvent|ol|ul|itemVisibleOutCallback|reload|prepend|itemVisibleInCallback|nodeName|add|itemLastOutCallback|skin|itemLastInCallback|indexOf|itemFirstOutCallback|browser|itemFirstInCallback|empty|reset|resize|itemLoadCallback|funcNext|prototype|load|isNaN|parseInt|none|float|floor|round|index|swing|borderTopWidth|borderRightWidth|borderLeftWidth|horizontal|jcarouselindex|isFunction|normal|clearTimeout|1000|setTimeout|onBeforeAnimation|children|push|Aborting|loop|infinite|an|cause|will|This|items|set|No|jCarousel|alert|class|find|borderBottomWidth|append|html|string|defaults|OL|UL|new|has|unlock|lock|10px|0px|jQuery'.split('|'),0,{}))

/*#####*/
//jquery.selectboxes.min.js

/*
 *
 * Copyright (c) 2006-2008 Sam Collett (http://www.texotela.co.uk)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version 2.2.4
 * Demo: http://www.texotela.co.uk/code/jquery/select/
 *
 * $LastChangedDate: 2008-06-17 17:27:25 +0100 (Tue, 17 Jun 2008) $
 * $Rev: 5727 $
 *
 */
;(function(h){h.fn.addOption=function(){var j=function(a,f,c,g){var d=document.createElement("option");d.value=f,d.text=c;var b=a.options;var e=b.length;if(!a.cache){a.cache={};for(var i=0;i<e;i++){a.cache[b[i].value]=i}}if(typeof a.cache[f]=="undefined")a.cache[f]=e;a.options[a.cache[f]]=d;if(g){d.selected=true}};var k=arguments;if(k.length==0)return this;var l=true;var m=false;var n,o,p;if(typeof(k[0])=="object"){m=true;n=k[0]}if(k.length>=2){if(typeof(k[1])=="boolean")l=k[1];else if(typeof(k[2])=="boolean")l=k[2];if(!m){o=k[0];p=k[1]}}this.each(function(){if(this.nodeName.toLowerCase()!="select")return;if(m){for(var a in n){j(this,a,n[a],l)}}else{j(this,o,p,l)}});return this};h.fn.ajaxAddOption=function(c,g,d,b,e){if(typeof(c)!="string")return this;if(typeof(g)!="object")g={};if(typeof(d)!="boolean")d=true;this.each(function(){var f=this;h.getJSON(c,g,function(a){h(f).addOption(a,d);if(typeof b=="function"){if(typeof e=="object"){b.apply(f,e)}else{b.call(f)}}})});return this};h.fn.removeOption=function(){var d=arguments;if(d.length==0)return this;var b=typeof(d[0]);var e,i;if(b=="string"||b=="object"||b=="function"){e=d[0];if(e.constructor==Array){var j=e.length;for(var k=0;k<j;k++){this.removeOption(e[k],d[1])}return this}}else if(b=="number")i=d[0];else return this;this.each(function(){if(this.nodeName.toLowerCase()!="select")return;if(this.cache)this.cache=null;var a=false;var f=this.options;if(!!e){var c=f.length;for(var g=c-1;g>=0;g--){if(e.constructor==RegExp){if(f[g].value.match(e)){a=true}}else if(f[g].value==e){a=true}if(a&&d[1]===true)a=f[g].selected;if(a){f[g]=null}a=false}}else{if(d[1]===true){a=f[i].selected}else{a=true}if(a){this.remove(i)}}});return this};h.fn.sortOptions=function(e){var i=h(this).selectedValues();var j=typeof(e)=="undefined"?true:!!e;this.each(function(){if(this.nodeName.toLowerCase()!="select")return;var c=this.options;var g=c.length;var d=[];for(var b=0;b<g;b++){d[b]={v:c[b].value,t:c[b].text}}d.sort(function(a,f){o1t=a.t.toLowerCase(),o2t=f.t.toLowerCase();if(o1t==o2t)return 0;if(j){return o1t<o2t?-1:1}else{return o1t>o2t?-1:1}});for(var b=0;b<g;b++){c[b].text=d[b].t;c[b].value=d[b].v}}).selectOptions(i,true);return this};h.fn.selectOptions=function(g,d){var b=g;var e=typeof(g);if(e=="object"&&b.constructor==Array){var i=this;h.each(b,function(){i.selectOptions(this,d)})};var j=d||false;if(e!="string"&&e!="function"&&e!="object")return this;this.each(function(){if(this.nodeName.toLowerCase()!="select")return this;var a=this.options;var f=a.length;for(var c=0;c<f;c++){if(b.constructor==RegExp){if(a[c].value.match(b)){a[c].selected=true}else if(j){a[c].selected=false}}else{if(a[c].value==b){a[c].selected=true}else if(j){a[c].selected=false}}}});return this};h.fn.copyOptions=function(g,d){var b=d||"selected";if(h(g).size()==0)return this;this.each(function(){if(this.nodeName.toLowerCase()!="select")return this;var a=this.options;var f=a.length;for(var c=0;c<f;c++){if(b=="all"||(b=="selected"&&a[c].selected)){h(g).addOption(a[c].value,a[c].text)}}});return this};h.fn.containsOption=function(g,d){var b=false;var e=g;var i=typeof(e);var j=typeof(d);if(i!="string"&&i!="function"&&i!="object")return j=="function"?this:b;this.each(function(){if(this.nodeName.toLowerCase()!="select")return this;if(b&&j!="function")return false;var a=this.options;var f=a.length;for(var c=0;c<f;c++){if(e.constructor==RegExp){if(a[c].value.match(e)){b=true;if(j=="function")d.call(a[c],c)}}else{if(a[c].value==e){b=true;if(j=="function")d.call(a[c],c)}}}});return j=="function"?this:b};h.fn.selectedValues=function(){var a=[];this.selectedOptions().each(function(){a[a.length]=this.value});return a};h.fn.selectedTexts=function(){var a=[];this.selectedOptions().each(function(){a[a.length]=this.text});return a};h.fn.selectedOptions=function(){return this.find("option:selected")}})(jQuery);


/*#####*/
//jquery.newsticker.pack.js

/*
 *
 * Copyright (c) 2006/2007 Sam Collett (http://www.texotela.co.uk)
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Version 2.0
 * Demo: http://www.texotela.co.uk/code/jquery/newsticker/
 *
 * $LastChangedDate$
 * $Rev$
 *
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(1($){$.9.D=$.9.g=1(b){b=b||p;i=1(a){j(a);a.4=$("r",a);a.4.q(":o(0)").l().C();a.5=0;h(a)};h=1(a){a.m=t(1(){f(a)},b)};j=1(a){s(a.m)};8=1(a){a.3=7};d=1(a){a.3=c};f=1(a){e(a.3)6;a.3=7;$(a.4[a.5]).n("k",1(){$(2).l();a.5=++a.5%(a.4.B());$(a.4[a.5]).z("k",1(){a.3=c})})};2.y(1(){e(2.x.w()!="A")6;i(2)}).v("g").u(1(){8(2)},1(){d(2)});6 2}})(E);',41,41,'|function|this|pause|items|currentitem|return|true|pauseTicker|fn|||false|resumeTicker|if|doTick|newsticker|startTicker|initTicker|stopTicker|slow|hide|tickfn|fadeOut|eq|4000|not|li|clearInterval|setInterval|hover|addClass|toLowerCase|nodeName|each|fadeIn|ul|size|end|newsTicker|jQuery'.split('|'),0,{}))

/*#####*/
//jquery.getUrlParam.js

/* Copyright (c) 2006-2007 Mathias Bank (http://www.mathias-bank.de)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * 
 * Version 2.1
 * 
 * Thanks to 
 * Hinnerk Ruemenapf - http://hinnerk.ruemenapf.de/ for bug reporting and fixing.
 * Tom Leonard for some improvements
 * 
 */
jQuery.fn.extend({
/**
* Returns get parameters.
*
* If the desired param does not exist, null will be returned
*
* To get the document params:
* @example value = $(document).getUrlParam("paramName");
* 
* To get the params of a html-attribut (uses src attribute)
* @example value = $('#imgLink').getUrlParam("paramName");
*/ 
 getUrlParam: function(strParamName){
	  strParamName = escape(unescape(strParamName));
	  
	  var returnVal = new Array();
	  var qString = null;
	  
	  if ($(this).attr("nodeName")=="#document") {
	  	//document-handler
		
		if (window.location.search.search(strParamName) > -1 ){
			
			qString = window.location.search.substr(1,window.location.search.length).split("&");
		}
			
	  } else if ($(this).attr("href")!="undefined") {
	  	
	  	var strHref = $(this).attr("href")
	  	if ( strHref.indexOf("?") > -1 ){
	    	var strQueryString = strHref.substr(strHref.indexOf("?")+1);
	  		qString = strQueryString.split("&");
	  	}
	  } else {
	  	return null;
	  }
	  	
	  
	  if (qString==null) return null;
	  
	  
	  for (var i=0;i<qString.length; i++){
			if (escape(unescape(qString[i].split("=")[0])) == strParamName){
				returnVal.push(qString[i].split("=")[1]);
			}
			
	  }
	  
	  
	  if (returnVal.length==0) return null;
	  else if (returnVal.length==1) return returnVal[0];
	  else return returnVal;
	}
});


/*#####*/
//jquery.qtip.min.js

/*
 * jquery.qtip. The jQuery tooltip plugin
 *
 * Copyright (c) 2009 Craig Thompson
 * http://craigsworks.com
 *
 * Licensed under MIT
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Launch  : February 2009
 * Version : 1.0.0-rc3
 * Released: Tuesday 12th May, 2009 - 00:00
 * Debug: jquery.qtip.debug.js
 */
(function(f){f.fn.qtip=function(B,u){var y,t,A,s,x,w,v,z;if(typeof B=="string"){if(typeof f(this).data("qtip")!=="object"){f.fn.qtip.log.error.call(self,1,f.fn.qtip.constants.NO_TOOLTIP_PRESENT,false)}if(B=="api"){return f(this).data("qtip").interfaces[f(this).data("qtip").current]}else{if(B=="interfaces"){return f(this).data("qtip").interfaces}}}else{if(!B){B={}}if(typeof B.content!=="object"||(B.content.jquery&&B.content.length>0)){B.content={text:B.content}}if(typeof B.content.title!=="object"){B.content.title={text:B.content.title}}if(typeof B.position!=="object"){B.position={corner:B.position}}if(typeof B.position.corner!=="object"){B.position.corner={target:B.position.corner,tooltip:B.position.corner}}if(typeof B.show!=="object"){B.show={when:B.show}}if(typeof B.show.when!=="object"){B.show.when={event:B.show.when}}if(typeof B.show.effect!=="object"){B.show.effect={type:B.show.effect}}if(typeof B.hide!=="object"){B.hide={when:B.hide}}if(typeof B.hide.when!=="object"){B.hide.when={event:B.hide.when}}if(typeof B.hide.effect!=="object"){B.hide.effect={type:B.hide.effect}}if(typeof B.style!=="object"){B.style={name:B.style}}B.style=c(B.style);s=f.extend(true,{},f.fn.qtip.defaults,B);s.style=a.call({options:s},s.style);s.user=f.extend(true,{},B)}return f(this).each(function(){if(typeof B=="string"){w=B.toLowerCase();A=f(this).qtip("interfaces");if(typeof A=="object"){if(u===true&&w=="destroy"){while(A.length>0){A[A.length-1].destroy()}}else{if(u!==true){A=[f(this).qtip("api")]}for(y=0;y<A.length;y++){if(w=="destroy"){A[y].destroy()}else{if(A[y].status.rendered===true){if(w=="show"){A[y].show()}else{if(w=="hide"){A[y].hide()}else{if(w=="focus"){A[y].focus()}else{if(w=="disable"){A[y].disable(true)}else{if(w=="enable"){A[y].disable(false)}}}}}}}}}}}else{v=f.extend(true,{},s);v.hide.effect.length=s.hide.effect.length;v.show.effect.length=s.show.effect.length;if(v.position.container===false){v.position.container=f(document.body)}if(v.position.target===false){v.position.target=f(this)}if(v.show.when.target===false){v.show.when.target=f(this)}if(v.hide.when.target===false){v.hide.when.target=f(this)}t=f.fn.qtip.interfaces.length;for(y=0;y<t;y++){if(typeof f.fn.qtip.interfaces[y]=="undefined"){t=y;break}}x=new d(f(this),v,t);f.fn.qtip.interfaces[t]=x;if(typeof f(this).data("qtip")=="object"){if(typeof f(this).attr("qtip")==="undefined"){f(this).data("qtip").current=f(this).data("qtip").interfaces.length}f(this).data("qtip").interfaces.push(x)}else{f(this).data("qtip",{current:0,interfaces:[x]})}if(v.content.prerender===false&&v.show.when.event!==false&&v.show.ready!==true){v.show.when.target.bind(v.show.when.event+".qtip-"+t+"-create",{qtip:t},function(C){z=f.fn.qtip.interfaces[C.data.qtip];z.options.show.when.target.unbind(z.options.show.when.event+".qtip-"+C.data.qtip+"-create");z.cache.mouse={x:C.pageX,y:C.pageY};p.call(z);z.options.show.when.target.trigger(z.options.show.when.event)})}else{x.cache.mouse={x:v.show.when.target.offset().left,y:v.show.when.target.offset().top};p.call(x)}}})};function d(u,t,v){var s=this;s.id=v;s.options=t;s.status={animated:false,rendered:false,disabled:false,focused:false};s.elements={target:u.addClass(s.options.style.classes.target),tooltip:null,wrapper:null,content:null,contentWrapper:null,title:null,button:null,tip:null,bgiframe:null};s.cache={mouse:{},position:{},toggle:0};s.timers={};f.extend(s,s.options.api,{show:function(y){var x,z;if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"show")}if(s.elements.tooltip.css("display")!=="none"){return s}s.elements.tooltip.stop(true,false);x=s.beforeShow.call(s,y);if(x===false){return s}function w(){if(s.options.position.type!=="static"){s.focus()}s.onShow.call(s,y);if(f.browser.msie){s.elements.tooltip.get(0).style.removeAttribute("filter")}}s.cache.toggle=1;if(s.options.position.type!=="static"){s.updatePosition(y,(s.options.show.effect.length>0))}if(typeof s.options.show.solo=="object"){z=f(s.options.show.solo)}else{if(s.options.show.solo===true){z=f("div.qtip").not(s.elements.tooltip)}}if(z){z.each(function(){if(f(this).qtip("api").status.rendered===true){f(this).qtip("api").hide()}})}if(typeof s.options.show.effect.type=="function"){s.options.show.effect.type.call(s.elements.tooltip,s.options.show.effect.length);s.elements.tooltip.queue(function(){w();f(this).dequeue()})}else{switch(s.options.show.effect.type.toLowerCase()){case"fade":s.elements.tooltip.fadeIn(s.options.show.effect.length,w);break;case"slide":s.elements.tooltip.slideDown(s.options.show.effect.length,function(){w();if(s.options.position.type!=="static"){s.updatePosition(y,true)}});break;case"grow":s.elements.tooltip.show(s.options.show.effect.length,w);break;default:s.elements.tooltip.show(null,w);break}s.elements.tooltip.addClass(s.options.style.classes.active)}return f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_SHOWN,"show")},hide:function(y){var x;if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"hide")}else{if(s.elements.tooltip.css("display")==="none"){return s}}clearTimeout(s.timers.show);s.elements.tooltip.stop(true,false);x=s.beforeHide.call(s,y);if(x===false){return s}function w(){s.onHide.call(s,y)}s.cache.toggle=0;if(typeof s.options.hide.effect.type=="function"){s.options.hide.effect.type.call(s.elements.tooltip,s.options.hide.effect.length);s.elements.tooltip.queue(function(){w();f(this).dequeue()})}else{switch(s.options.hide.effect.type.toLowerCase()){case"fade":s.elements.tooltip.fadeOut(s.options.hide.effect.length,w);break;case"slide":s.elements.tooltip.slideUp(s.options.hide.effect.length,w);break;case"grow":s.elements.tooltip.hide(s.options.hide.effect.length,w);break;default:s.elements.tooltip.hide(null,w);break}s.elements.tooltip.removeClass(s.options.style.classes.active)}return f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_HIDDEN,"hide")},updatePosition:function(w,x){var C,G,L,J,H,E,y,I,B,D,K,A,F,z;if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"updatePosition")}else{if(s.options.position.type=="static"){return f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.CANNOT_POSITION_STATIC,"updatePosition")}}G={position:{left:0,top:0},dimensions:{height:0,width:0},corner:s.options.position.corner.target};L={position:s.getPosition(),dimensions:s.getDimensions(),corner:s.options.position.corner.tooltip};if(s.options.position.target!=="mouse"){if(s.options.position.target.get(0).nodeName.toLowerCase()=="area"){J=s.options.position.target.attr("coords").split(",");for(C=0;C<J.length;C++){J[C]=parseInt(J[C])}H=s.options.position.target.parent("map").attr("name");E=f('img[usemap="#'+H+'"]:first').offset();G.position={left:Math.floor(E.left+J[0]),top:Math.floor(E.top+J[1])};switch(s.options.position.target.attr("shape").toLowerCase()){case"rect":G.dimensions={width:Math.ceil(Math.abs(J[2]-J[0])),height:Math.ceil(Math.abs(J[3]-J[1]))};break;case"circle":G.dimensions={width:J[2]+1,height:J[2]+1};break;case"poly":G.dimensions={width:J[0],height:J[1]};for(C=0;C<J.length;C++){if(C%2==0){if(J[C]>G.dimensions.width){G.dimensions.width=J[C]}if(J[C]<J[0]){G.position.left=Math.floor(E.left+J[C])}}else{if(J[C]>G.dimensions.height){G.dimensions.height=J[C]}if(J[C]<J[1]){G.position.top=Math.floor(E.top+J[C])}}}G.dimensions.width=G.dimensions.width-(G.position.left-E.left);G.dimensions.height=G.dimensions.height-(G.position.top-E.top);break;default:return f.fn.qtip.log.error.call(s,4,f.fn.qtip.constants.INVALID_AREA_SHAPE,"updatePosition");break}G.dimensions.width-=2;G.dimensions.height-=2}else{if(s.options.position.target.add(document.body).length===1){G.position={left:f(document).scrollLeft(),top:f(document).scrollTop()};G.dimensions={height:f(window).height(),width:f(window).width()}}else{if(typeof s.options.position.target.attr("qtip")!=="undefined"){G.position=s.options.position.target.qtip("api").cache.position}else{G.position=s.options.position.target.offset()}G.dimensions={height:s.options.position.target.outerHeight(),width:s.options.position.target.outerWidth()}}}y=f.extend({},G.position);if(G.corner.search(/right/i)!==-1){y.left+=G.dimensions.width}if(G.corner.search(/bottom/i)!==-1){y.top+=G.dimensions.height}if(G.corner.search(/((top|bottom)Middle)|center/)!==-1){y.left+=(G.dimensions.width/2)}if(G.corner.search(/((left|right)Middle)|center/)!==-1){y.top+=(G.dimensions.height/2)}}else{G.position=y={left:s.cache.mouse.x,top:s.cache.mouse.y};G.dimensions={height:1,width:1}}if(L.corner.search(/right/i)!==-1){y.left-=L.dimensions.width}if(L.corner.search(/bottom/i)!==-1){y.top-=L.dimensions.height}if(L.corner.search(/((top|bottom)Middle)|center/)!==-1){y.left-=(L.dimensions.width/2)}if(L.corner.search(/((left|right)Middle)|center/)!==-1){y.top-=(L.dimensions.height/2)}I=(f.browser.msie)?1:0;B=(f.browser.msie&&parseInt(f.browser.version.charAt(0))===6)?1:0;if(s.options.style.border.radius>0){if(L.corner.search(/Left/)!==-1){y.left-=s.options.style.border.radius}else{if(L.corner.search(/Right/)!==-1){y.left+=s.options.style.border.radius}}if(L.corner.search(/Top/)!==-1){y.top-=s.options.style.border.radius}else{if(L.corner.search(/Bottom/)!==-1){y.top+=s.options.style.border.radius}}}if(I){if(L.corner.search(/top/)!==-1){y.top-=I}else{if(L.corner.search(/bottom/)!==-1){y.top+=I}}if(L.corner.search(/left/)!==-1){y.left-=I}else{if(L.corner.search(/right/)!==-1){y.left+=I}}if(L.corner.search(/leftMiddle|rightMiddle/)!==-1){y.top-=1}}if(s.options.position.adjust.screen===true){y=o.call(s,y,G,L)}if(s.options.position.target==="mouse"&&s.options.position.adjust.mouse===true){if(s.options.position.adjust.screen===true&&s.elements.tip){K=s.elements.tip.attr("rel")}else{K=s.options.position.corner.tooltip}y.left+=(K.search(/right/i)!==-1)?-6:6;y.top+=(K.search(/bottom/i)!==-1)?-6:6}if(!s.elements.bgiframe&&f.browser.msie&&parseInt(f.browser.version.charAt(0))==6){f("select, object").each(function(){A=f(this).offset();A.bottom=A.top+f(this).height();A.right=A.left+f(this).width();if(y.top+L.dimensions.height>=A.top&&y.left+L.dimensions.width>=A.left){k.call(s)}})}y.left+=s.options.position.adjust.x;y.top+=s.options.position.adjust.y;F=s.getPosition();if(y.left!=F.left||y.top!=F.top){z=s.beforePositionUpdate.call(s,w);if(z===false){return s}s.cache.position=y;if(x===true){s.status.animated=true;s.elements.tooltip.animate(y,200,"swing",function(){s.status.animated=false})}else{s.elements.tooltip.css(y)}s.onPositionUpdate.call(s,w);if(typeof w!=="undefined"&&w.type&&w.type!=="mousemove"){f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_POSITION_UPDATED,"updatePosition")}}return s},updateWidth:function(w){var x;if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"updateWidth")}else{if(w&&typeof w!=="number"){return f.fn.qtip.log.error.call(s,2,"newWidth must be of type number","updateWidth")}}x=s.elements.contentWrapper.siblings().add(s.elements.tip).add(s.elements.button);if(!w){if(typeof s.options.style.width.value=="number"){w=s.options.style.width.value}else{s.elements.tooltip.css({width:"auto"});x.hide();if(f.browser.msie){s.elements.wrapper.add(s.elements.contentWrapper.children()).css({zoom:"normal"})}w=s.getDimensions().width+1;if(!s.options.style.width.value){if(w>s.options.style.width.max){w=s.options.style.width.max}if(w<s.options.style.width.min){w=s.options.style.width.min}}}}if(w%2!==0){w-=1}s.elements.tooltip.width(w);x.show();if(s.options.style.border.radius){s.elements.tooltip.find(".qtip-betweenCorners").each(function(y){f(this).width(w-(s.options.style.border.radius*2))})}if(f.browser.msie){s.elements.wrapper.add(s.elements.contentWrapper.children()).css({zoom:"1"});s.elements.wrapper.width(w);if(s.elements.bgiframe){s.elements.bgiframe.width(w).height(s.getDimensions.height)}}return f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_WIDTH_UPDATED,"updateWidth")},updateStyle:function(w){var z,A,x,y,B;if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"updateStyle")}else{if(typeof w!=="string"||!f.fn.qtip.styles[w]){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.STYLE_NOT_DEFINED,"updateStyle")}}s.options.style=a.call(s,f.fn.qtip.styles[w],s.options.user.style);s.elements.content.css(q(s.options.style));if(s.options.content.title.text!==false){s.elements.title.css(q(s.options.style.title,true))}s.elements.contentWrapper.css({borderColor:s.options.style.border.color});if(s.options.style.tip.corner!==false){if(f("<canvas>").get(0).getContext){z=s.elements.tooltip.find(".qtip-tip canvas:first");x=z.get(0).getContext("2d");x.clearRect(0,0,300,300);y=z.parent("div[rel]:first").attr("rel");B=b(y,s.options.style.tip.size.width,s.options.style.tip.size.height);h.call(s,z,B,s.options.style.tip.color||s.options.style.border.color)}else{if(f.browser.msie){z=s.elements.tooltip.find('.qtip-tip [nodeName="shape"]');z.attr("fillcolor",s.options.style.tip.color||s.options.style.border.color)}}}if(s.options.style.border.radius>0){s.elements.tooltip.find(".qtip-betweenCorners").css({backgroundColor:s.options.style.border.color});if(f("<canvas>").get(0).getContext){A=g(s.options.style.border.radius);s.elements.tooltip.find(".qtip-wrapper canvas").each(function(){x=f(this).get(0).getContext("2d");x.clearRect(0,0,300,300);y=f(this).parent("div[rel]:first").attr("rel");r.call(s,f(this),A[y],s.options.style.border.radius,s.options.style.border.color)})}else{if(f.browser.msie){s.elements.tooltip.find('.qtip-wrapper [nodeName="arc"]').each(function(){f(this).attr("fillcolor",s.options.style.border.color)})}}}return f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_STYLE_UPDATED,"updateStyle")},updateContent:function(A,y){var z,x,w;if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"updateContent")}else{if(!A){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.NO_CONTENT_PROVIDED,"updateContent")}}z=s.beforeContentUpdate.call(s,A);if(typeof z=="string"){A=z}else{if(z===false){return}}if(f.browser.msie){s.elements.contentWrapper.children().css({zoom:"normal"})}if(A.jquery&&A.length>0){A.clone(true).appendTo(s.elements.content).show()}else{s.elements.content.html(A)}x=s.elements.content.find("img[complete=false]");if(x.length>0){w=0;x.each(function(C){f('<img src="'+f(this).attr("src")+'" />').load(function(){if(++w==x.length){B()}})})}else{B()}function B(){s.updateWidth();if(y!==false){if(s.options.position.type!=="static"){s.updatePosition(s.elements.tooltip.is(":visible"),true)}if(s.options.style.tip.corner!==false){n.call(s)}}}s.onContentUpdate.call(s);return f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_CONTENT_UPDATED,"loadContent")},loadContent:function(w,z,A){var y;if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"loadContent")}y=s.beforeContentLoad.call(s);if(y===false){return s}if(A=="post"){f.post(w,z,x)}else{f.get(w,z,x)}function x(B){s.onContentLoad.call(s);f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_CONTENT_LOADED,"loadContent");s.updateContent(B)}return s},updateTitle:function(w){if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"updateTitle")}else{if(!w){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.NO_CONTENT_PROVIDED,"updateTitle")}}returned=s.beforeTitleUpdate.call(s);if(returned===false){return s}if(s.elements.button){s.elements.button=s.elements.button.clone(true)}s.elements.title.html(w);if(s.elements.button){s.elements.title.prepend(s.elements.button)}s.onTitleUpdate.call(s);return f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_TITLE_UPDATED,"updateTitle")},focus:function(A){var y,x,w,z;if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"focus")}else{if(s.options.position.type=="static"){return f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.CANNOT_FOCUS_STATIC,"focus")}}y=parseInt(s.elements.tooltip.css("z-index"));x=6000+f("div.qtip[qtip]").length-1;if(!s.status.focused&&y!==x){z=s.beforeFocus.call(s,A);if(z===false){return s}f("div.qtip[qtip]").not(s.elements.tooltip).each(function(){if(f(this).qtip("api").status.rendered===true){w=parseInt(f(this).css("z-index"));if(typeof w=="number"&&w>-1){f(this).css({zIndex:parseInt(f(this).css("z-index"))-1})}f(this).qtip("api").status.focused=false}});s.elements.tooltip.css({zIndex:x});s.status.focused=true;s.onFocus.call(s,A);f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_FOCUSED,"focus")}return s},disable:function(w){if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"disable")}if(w){if(!s.status.disabled){s.status.disabled=true;f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_DISABLED,"disable")}else{f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.TOOLTIP_ALREADY_DISABLED,"disable")}}else{if(s.status.disabled){s.status.disabled=false;f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_ENABLED,"disable")}else{f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.TOOLTIP_ALREADY_ENABLED,"disable")}}return s},destroy:function(){var w,x,y;x=s.beforeDestroy.call(s);if(x===false){return s}if(s.status.rendered){s.options.show.when.target.unbind("mousemove.qtip",s.updatePosition);s.options.show.when.target.unbind("mouseout.qtip",s.hide);s.options.show.when.target.unbind(s.options.show.when.event+".qtip");s.options.hide.when.target.unbind(s.options.hide.when.event+".qtip");s.elements.tooltip.unbind(s.options.hide.when.event+".qtip");s.elements.tooltip.unbind("mouseover.qtip",s.focus);s.elements.tooltip.remove()}else{s.options.show.when.target.unbind(s.options.show.when.event+".qtip-create")}if(typeof s.elements.target.data("qtip")=="object"){y=s.elements.target.data("qtip").interfaces;if(typeof y=="object"&&y.length>0){for(w=0;w<y.length-1;w++){if(y[w].id==s.id){y.splice(w,1)}}}}delete f.fn.qtip.interfaces[s.id];if(typeof y=="object"&&y.length>0){s.elements.target.data("qtip").current=y.length-1}else{s.elements.target.removeData("qtip")}s.onDestroy.call(s);f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_DESTROYED,"destroy");return s.elements.target},getPosition:function(){var w,x;if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"getPosition")}w=(s.elements.tooltip.css("display")!=="none")?false:true;if(w){s.elements.tooltip.css({visiblity:"hidden"}).show()}x=s.elements.tooltip.offset();if(w){s.elements.tooltip.css({visiblity:"visible"}).hide()}return x},getDimensions:function(){var w,x;if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"getDimensions")}w=(!s.elements.tooltip.is(":visible"))?true:false;if(w){s.elements.tooltip.css({visiblity:"hidden"}).show()}x={height:s.elements.tooltip.outerHeight(),width:s.elements.tooltip.outerWidth()};if(w){s.elements.tooltip.css({visiblity:"visible"}).hide()}return x}})}function p(){var s,w,u,t,v,y,x;s=this;s.beforeRender.call(s);s.status.rendered=true;s.elements.tooltip='<div qtip="'+s.id+'" class="qtip '+(s.options.style.classes.tooltip||s.options.style)+'"style="display:none; -moz-border-radius:0; -webkit-border-radius:0; border-radius:0;position:'+s.options.position.type+';">  <div class="qtip-wrapper" style="position:relative; overflow:hidden; text-align:left;">    <div class="qtip-contentWrapper" style="overflow:hidden;">       <div class="qtip-content '+s.options.style.classes.content+'"></div></div></div></div>';s.elements.tooltip=f(s.elements.tooltip);s.elements.tooltip.appendTo(s.options.position.container);s.elements.tooltip.data("qtip",{current:0,interfaces:[s]});s.elements.wrapper=s.elements.tooltip.children("div:first");s.elements.contentWrapper=s.elements.wrapper.children("div:first").css({background:s.options.style.background});s.elements.content=s.elements.contentWrapper.children("div:first").css(q(s.options.style));if(f.browser.msie){s.elements.wrapper.add(s.elements.content).css({zoom:1})}if(s.options.hide.when.event=="unfocus"){s.elements.tooltip.attr("unfocus",true)}if(typeof s.options.style.width.value=="number"){s.updateWidth()}if(f("<canvas>").get(0).getContext||f.browser.msie){if(s.options.style.border.radius>0){m.call(s)}else{s.elements.contentWrapper.css({border:s.options.style.border.width+"px solid "+s.options.style.border.color})}if(s.options.style.tip.corner!==false){e.call(s)}}else{s.elements.contentWrapper.css({border:s.options.style.border.width+"px solid "+s.options.style.border.color});s.options.style.border.radius=0;s.options.style.tip.corner=false;f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.CANVAS_VML_NOT_SUPPORTED,"render")}if((typeof s.options.content.text=="string"&&s.options.content.text.length>0)||(s.options.content.text.jquery&&s.options.content.text.length>0)){u=s.options.content.text}else{if(typeof s.elements.target.attr("title")=="string"&&s.elements.target.attr("title").length>0){u=s.elements.target.attr("title").replace("\\n","<br />");s.elements.target.attr("title","")}else{if(typeof s.elements.target.attr("alt")=="string"&&s.elements.target.attr("alt").length>0){u=s.elements.target.attr("alt").replace("\\n","<br />");s.elements.target.attr("alt","")}else{u=" ";f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.NO_VALID_CONTENT,"render")}}}if(s.options.content.title.text!==false){j.call(s)}s.updateContent(u);l.call(s);if(s.options.show.ready===true){s.show()}if(s.options.content.url!==false){t=s.options.content.url;v=s.options.content.data;y=s.options.content.method||"get";s.loadContent(t,v,y)}s.onRender.call(s);f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_RENDERED,"render")}function m(){var F,z,t,B,x,E,u,G,D,y,w,C,A,s,v;F=this;F.elements.wrapper.find(".qtip-borderBottom, .qtip-borderTop").remove();t=F.options.style.border.width;B=F.options.style.border.radius;x=F.options.style.border.color||F.options.style.tip.color;E=g(B);u={};for(z in E){u[z]='<div rel="'+z+'" style="'+((z.search(/Left/)!==-1)?"left":"right")+":0; position:absolute; height:"+B+"px; width:"+B+'px; overflow:hidden; line-height:0.1px; font-size:1px">';if(f("<canvas>").get(0).getContext){u[z]+='<canvas height="'+B+'" width="'+B+'" style="vertical-align: top"></canvas>'}else{if(f.browser.msie){G=B*2+3;u[z]+='<v:arc stroked="false" fillcolor="'+x+'" startangle="'+E[z][0]+'" endangle="'+E[z][1]+'" style="width:'+G+"px; height:"+G+"px; margin-top:"+((z.search(/bottom/)!==-1)?-2:-1)+"px; margin-left:"+((z.search(/Right/)!==-1)?E[z][2]-3.5:-1)+'px; vertical-align:top; display:inline-block; behavior:url(#default#VML)"></v:arc>'}}u[z]+="</div>"}D=F.getDimensions().width-(Math.max(t,B)*2);y='<div class="qtip-betweenCorners" style="height:'+B+"px; width:"+D+"px; overflow:hidden; background-color:"+x+'; line-height:0.1px; font-size:1px;">';w='<div class="qtip-borderTop" dir="ltr" style="height:'+B+"px; margin-left:"+B+'px; line-height:0.1px; font-size:1px; padding:0;">'+u.topLeft+u.topRight+y;F.elements.wrapper.prepend(w);C='<div class="qtip-borderBottom" dir="ltr" style="height:'+B+"px; margin-left:"+B+'px; line-height:0.1px; font-size:1px; padding:0;">'+u.bottomLeft+u.bottomRight+y;F.elements.wrapper.append(C);if(f("<canvas>").get(0).getContext){F.elements.wrapper.find("canvas").each(function(){A=E[f(this).parent("[rel]:first").attr("rel")];r.call(F,f(this),A,B,x)})}else{if(f.browser.msie){F.elements.tooltip.append('<v:image style="behavior:url(#default#VML);"></v:image>')}}s=Math.max(B,(B+(t-B)));v=Math.max(t-B,0);F.elements.contentWrapper.css({border:"0px solid "+x,borderWidth:v+"px "+s+"px"})}function r(u,w,s,t){var v=u.get(0).getContext("2d");v.fillStyle=t;v.beginPath();v.arc(w[0],w[1],s,0,Math.PI*2,false);v.fill()}function e(v){var t,s,x,u,w;t=this;if(t.elements.tip!==null){t.elements.tip.remove()}s=t.options.style.tip.color||t.options.style.border.color;if(t.options.style.tip.corner===false){return}else{if(!v){v=t.options.style.tip.corner}}x=b(v,t.options.style.tip.size.width,t.options.style.tip.size.height);t.elements.tip='<div class="'+t.options.style.classes.tip+'" dir="ltr" rel="'+v+'" style="position:absolute; height:'+t.options.style.tip.size.height+"px; width:"+t.options.style.tip.size.width+'px; margin:0 auto; line-height:0.1px; font-size:1px;">';if(f("<canvas>").get(0).getContext){t.elements.tip+='<canvas height="'+t.options.style.tip.size.height+'" width="'+t.options.style.tip.size.width+'"></canvas>'}else{if(f.browser.msie){u=t.options.style.tip.size.width+","+t.options.style.tip.size.height;w="m"+x[0][0]+","+x[0][1];w+=" l"+x[1][0]+","+x[1][1];w+=" "+x[2][0]+","+x[2][1];w+=" xe";t.elements.tip+='<v:shape fillcolor="'+s+'" stroked="false" filled="true" path="'+w+'" coordsize="'+u+'" style="width:'+t.options.style.tip.size.width+"px; height:"+t.options.style.tip.size.height+"px; line-height:0.1px; display:inline-block; behavior:url(#default#VML); vertical-align:"+((v.search(/top/)!==-1)?"bottom":"top")+'"></v:shape>';t.elements.tip+='<v:image style="behavior:url(#default#VML);"></v:image>';t.elements.contentWrapper.css("position","relative")}}t.elements.tooltip.prepend(t.elements.tip+"</div>");t.elements.tip=t.elements.tooltip.find("."+t.options.style.classes.tip).eq(0);if(f("<canvas>").get(0).getContext){h.call(t,t.elements.tip.find("canvas:first"),x,s)}if(v.search(/top/)!==-1&&f.browser.msie&&parseInt(f.browser.version.charAt(0))===6){t.elements.tip.css({marginTop:-4})}n.call(t,v)}function h(t,v,s){var u=t.get(0).getContext("2d");u.fillStyle=s;u.beginPath();u.moveTo(v[0][0],v[0][1]);u.lineTo(v[1][0],v[1][1]);u.lineTo(v[2][0],v[2][1]);u.fill()}function n(u){var t,w,s,x,v;t=this;if(t.options.style.tip.corner===false||!t.elements.tip){return}if(!u){u=t.elements.tip.attr("rel")}w=positionAdjust=(f.browser.msie)?1:0;t.elements.tip.css(u.match(/left|right|top|bottom/)[0],0);if(u.search(/top|bottom/)!==-1){if(f.browser.msie){if(parseInt(f.browser.version.charAt(0))===6){positionAdjust=(u.search(/top/)!==-1)?-3:1}else{positionAdjust=(u.search(/top/)!==-1)?1:2}}if(u.search(/Middle/)!==-1){t.elements.tip.css({left:"50%",marginLeft:-(t.options.style.tip.size.width/2)})}else{if(u.search(/Left/)!==-1){t.elements.tip.css({left:t.options.style.border.radius-w})}else{if(u.search(/Right/)!==-1){t.elements.tip.css({right:t.options.style.border.radius+w})}}}if(u.search(/top/)!==-1){t.elements.tip.css({top:-positionAdjust})}else{t.elements.tip.css({bottom:positionAdjust})}}else{if(u.search(/left|right/)!==-1){if(f.browser.msie){positionAdjust=(parseInt(f.browser.version.charAt(0))===6)?1:((u.search(/left/)!==-1)?1:2)}if(u.search(/Middle/)!==-1){t.elements.tip.css({top:"50%",marginTop:-(t.options.style.tip.size.height/2)})}else{if(u.search(/Top/)!==-1){t.elements.tip.css({top:t.options.style.border.radius-w})}else{if(u.search(/Bottom/)!==-1){t.elements.tip.css({bottom:t.options.style.border.radius+w})}}}if(u.search(/left/)!==-1){t.elements.tip.css({left:-positionAdjust})}else{t.elements.tip.css({right:positionAdjust})}}}s="padding-"+u.match(/left|right|top|bottom/)[0];x=t.options.style.tip.size[(s.search(/left|right/)!==-1)?"width":"height"];t.elements.tooltip.css("padding",0);t.elements.tooltip.css(s,x);if(f.browser.msie&&parseInt(f.browser.version.charAt(0))==6){v=parseInt(t.elements.tip.css("margin-top"))||0;v+=parseInt(t.elements.content.css("margin-top"))||0;t.elements.tip.css({marginTop:v})}}function j(){var s=this;if(s.elements.title!==null){s.elements.title.remove()}s.elements.title=f('<div class="'+s.options.style.classes.title+'">').css(q(s.options.style.title,true)).css({zoom:(f.browser.msie)?1:0}).prependTo(s.elements.contentWrapper);if(s.options.content.title.text){s.updateTitle.call(s,s.options.content.title.text)}if(s.options.content.title.button!==false&&typeof s.options.content.title.button=="string"){s.elements.button=f('<a class="'+s.options.style.classes.button+'" style="float:right; position: relative"></a>').css(q(s.options.style.button,true)).html(s.options.content.title.button).prependTo(s.elements.title).click(function(t){if(!s.status.disabled){s.hide(t)}})}}function l(){var t,v,u,s;t=this;v=t.options.show.when.target;u=t.options.hide.when.target;if(t.options.hide.fixed){u=u.add(t.elements.tooltip)}if(t.options.hide.when.event=="inactive"){s=["click","dblclick","mousedown","mouseup","mousemove","mouseout","mouseenter","mouseleave","mouseover"];function y(z){if(t.status.disabled===true){return}clearTimeout(t.timers.inactive);t.timers.inactive=setTimeout(function(){f(s).each(function(){u.unbind(this+".qtip-inactive");t.elements.content.unbind(this+".qtip-inactive")});t.hide(z)},t.options.hide.delay)}}else{if(t.options.hide.fixed===true){t.elements.tooltip.bind("mouseover.qtip",function(){if(t.status.disabled===true){return}clearTimeout(t.timers.hide)})}}function x(z){if(t.status.disabled===true){return}if(t.options.hide.when.event=="inactive"){f(s).each(function(){u.bind(this+".qtip-inactive",y);t.elements.content.bind(this+".qtip-inactive",y)});y()}clearTimeout(t.timers.show);clearTimeout(t.timers.hide);t.timers.show=setTimeout(function(){t.show(z)},t.options.show.delay)}function w(z){if(t.status.disabled===true){return}if(t.options.hide.fixed===true&&t.options.hide.when.event.search(/mouse(out|leave)/i)!==-1&&f(z.relatedTarget).parents("div.qtip[qtip]").length>0){z.stopPropagation();z.preventDefault();clearTimeout(t.timers.hide);return false}clearTimeout(t.timers.show);clearTimeout(t.timers.hide);t.elements.tooltip.stop(true,true);t.timers.hide=setTimeout(function(){t.hide(z)},t.options.hide.delay)}if((t.options.show.when.target.add(t.options.hide.when.target).length===1&&t.options.show.when.event==t.options.hide.when.event&&t.options.hide.when.event!=="inactive")||t.options.hide.when.event=="unfocus"){t.cache.toggle=0;v.bind(t.options.show.when.event+".qtip",function(z){if(t.cache.toggle==0){x(z)}else{w(z)}})}else{v.bind(t.options.show.when.event+".qtip",x);if(t.options.hide.when.event!=="inactive"){u.bind(t.options.hide.when.event+".qtip",w)}}if(t.options.position.type.search(/(fixed|absolute)/)!==-1){t.elements.tooltip.bind("mouseover.qtip",t.focus)}if(t.options.position.target==="mouse"&&t.options.position.type!=="static"){v.bind("mousemove.qtip",function(z){t.cache.mouse={x:z.pageX,y:z.pageY};if(t.status.disabled===false&&t.options.position.adjust.mouse===true&&t.options.position.type!=="static"&&t.elements.tooltip.css("display")!=="none"){t.updatePosition(z)}})}}function o(u,v,A){var z,s,x,y,t,w;z=this;if(A.corner=="center"){return v.position}s=f.extend({},u);y={x:false,y:false};t={left:(s.left<f.fn.qtip.cache.screen.scroll.left),right:(s.left+A.dimensions.width+2>=f.fn.qtip.cache.screen.width+f.fn.qtip.cache.screen.scroll.left),top:(s.top<f.fn.qtip.cache.screen.scroll.top),bottom:(s.top+A.dimensions.height+2>=f.fn.qtip.cache.screen.height+f.fn.qtip.cache.screen.scroll.top)};x={left:(t.left&&(A.corner.search(/right/i)!=-1||(A.corner.search(/right/i)==-1&&!t.right))),right:(t.right&&(A.corner.search(/left/i)!=-1||(A.corner.search(/left/i)==-1&&!t.left))),top:(t.top&&A.corner.search(/top/i)==-1),bottom:(t.bottom&&A.corner.search(/bottom/i)==-1)};if(x.left){if(z.options.position.target!=="mouse"){s.left=v.position.left+v.dimensions.width}else{s.left=z.cache.mouse.x}y.x="Left"}else{if(x.right){if(z.options.position.target!=="mouse"){s.left=v.position.left-A.dimensions.width}else{s.left=z.cache.mouse.x-A.dimensions.width}y.x="Right"}}if(x.top){if(z.options.position.target!=="mouse"){s.top=v.position.top+v.dimensions.height}else{s.top=z.cache.mouse.y}y.y="top"}else{if(x.bottom){if(z.options.position.target!=="mouse"){s.top=v.position.top-A.dimensions.height}else{s.top=z.cache.mouse.y-A.dimensions.height}y.y="bottom"}}if(s.left<0){s.left=u.left;y.x=false}if(s.top<0){s.top=u.top;y.y=false}if(z.options.style.tip.corner!==false){s.corner=new String(A.corner);if(y.x!==false){s.corner=s.corner.replace(/Left|Right|Middle/,y.x)}if(y.y!==false){s.corner=s.corner.replace(/top|bottom/,y.y)}if(s.corner!==z.elements.tip.attr("rel")){e.call(z,s.corner)}}return s}function q(u,t){var v,s;v=f.extend(true,{},u);for(s in v){if(t===true&&s.search(/(tip|classes)/i)!==-1){delete v[s]}else{if(!t&&s.search(/(width|border|tip|title|classes|user)/i)!==-1){delete v[s]}}}return v}function c(s){if(typeof s.tip!=="object"){s.tip={corner:s.tip}}if(typeof s.tip.size!=="object"){s.tip.size={width:s.tip.size,height:s.tip.size}}if(typeof s.border!=="object"){s.border={width:s.border}}if(typeof s.width!=="object"){s.width={value:s.width}}if(typeof s.width.max=="string"){s.width.max=parseInt(s.width.max.replace(/([0-9]+)/i,"$1"))}if(typeof s.width.min=="string"){s.width.min=parseInt(s.width.min.replace(/([0-9]+)/i,"$1"))}if(typeof s.tip.size.x=="number"){s.tip.size.width=s.tip.size.x;delete s.tip.size.x}if(typeof s.tip.size.y=="number"){s.tip.size.height=s.tip.size.y;delete s.tip.size.y}return s}function a(){var s,t,u,x,v,w;s=this;u=[true,{}];for(t=0;t<arguments.length;t++){u.push(arguments[t])}x=[f.extend.apply(f,u)];while(typeof x[0].name=="string"){x.unshift(c(f.fn.qtip.styles[x[0].name]))}x.unshift(true,{classes:{tooltip:"qtip-"+(arguments[0].name||"defaults")}},f.fn.qtip.styles.defaults);v=f.extend.apply(f,x);w=(f.browser.msie)?1:0;v.tip.size.width+=w;v.tip.size.height+=w;if(v.tip.size.width%2>0){v.tip.size.width+=1}if(v.tip.size.height%2>0){v.tip.size.height+=1}if(v.tip.corner===true){v.tip.corner=(s.options.position.corner.tooltip==="center")?false:s.options.position.corner.tooltip}return v}function b(v,u,t){var s={bottomRight:[[0,0],[u,t],[u,0]],bottomLeft:[[0,0],[u,0],[0,t]],topRight:[[0,t],[u,0],[u,t]],topLeft:[[0,0],[0,t],[u,t]],topMiddle:[[0,t],[u/2,0],[u,t]],bottomMiddle:[[0,0],[u,0],[u/2,t]],rightMiddle:[[0,0],[u,t/2],[0,t]],leftMiddle:[[u,0],[u,t],[0,t/2]]};s.leftTop=s.bottomRight;s.rightTop=s.bottomLeft;s.leftBottom=s.topRight;s.rightBottom=s.topLeft;return s[v]}function g(s){var t;if(f("<canvas>").get(0).getContext){t={topLeft:[s,s],topRight:[0,s],bottomLeft:[s,0],bottomRight:[0,0]}}else{if(f.browser.msie){t={topLeft:[-90,90,0],topRight:[-90,90,-s],bottomLeft:[90,270,0],bottomRight:[90,270,-s]}}}return t}function k(){var s,t,u;s=this;u=s.getDimensions();t='<iframe class="qtip-bgiframe" frameborder="0" tabindex="-1" src="javascript:false" style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=\'0\'); border: 1px solid red; height:'+u.height+"px; width:"+u.width+'px" />';s.elements.bgiframe=s.elements.wrapper.prepend(t).children(".qtip-bgiframe:first")}f(document).ready(function(){f.fn.qtip.cache={screen:{scroll:{left:f(window).scrollLeft(),top:f(window).scrollTop()},width:f(window).width(),height:f(window).height()}};var s;f(window).bind("resize scroll",function(t){clearTimeout(s);s=setTimeout(function(){if(t.type==="scroll"){f.fn.qtip.cache.screen.scroll={left:f(window).scrollLeft(),top:f(window).scrollTop()}}else{f.fn.qtip.cache.screen.width=f(window).width();f.fn.qtip.cache.screen.height=f(window).height()}for(i=0;i<f.fn.qtip.interfaces.length;i++){var u=f.fn.qtip.interfaces[i];if(u.status.rendered===true&&(u.options.position.type!=="static"||u.options.position.adjust.scroll&&t.type==="scroll"||u.options.position.adjust.resize&&t.type==="resize")){u.updatePosition(t,true)}}},100)});f(document).bind("mousedown.qtip",function(t){if(f(t.target).parents("div.qtip").length===0){f(".qtip[unfocus]").each(function(){var u=f(this).qtip("api");if(f(this).is(":visible")&&!u.status.disabled&&f(t.target).add(u.elements.target).length>1){u.hide(t)}})}})});f.fn.qtip.interfaces=[];f.fn.qtip.log={error:function(){return this}};f.fn.qtip.constants={};f.fn.qtip.defaults={content:{prerender:false,text:false,url:false,data:null,title:{text:false,button:false}},position:{target:false,corner:{target:"bottomRight",tooltip:"topLeft"},adjust:{x:0,y:0,mouse:true,screen:false,scroll:true,resize:true},type:"absolute",container:false},show:{when:{target:false,event:"mouseover"},effect:{type:"fade",length:100},delay:140,solo:false,ready:false},hide:{when:{target:false,event:"mouseout"},effect:{type:"fade",length:100},delay:0,fixed:false},api:{beforeRender:function(){},onRender:function(){},beforePositionUpdate:function(){},onPositionUpdate:function(){},beforeShow:function(){},onShow:function(){},beforeHide:function(){},onHide:function(){},beforeContentUpdate:function(){},onContentUpdate:function(){},beforeContentLoad:function(){},onContentLoad:function(){},beforeTitleUpdate:function(){},onTitleUpdate:function(){},beforeDestroy:function(){},onDestroy:function(){},beforeFocus:function(){},onFocus:function(){}}};f.fn.qtip.styles={defaults:{background:"white",color:"#111",overflow:"hidden",textAlign:"left",width:{min:0,max:250},padding:"5px 9px",border:{width:1,radius:0,color:"#d3d3d3"},tip:{corner:false,color:false,size:{width:13,height:13},opacity:1},title:{background:"#e1e1e1",fontWeight:"bold",padding:"7px 12px"},button:{cursor:"pointer"},classes:{target:"",tip:"qtip-tip",title:"qtip-title",button:"qtip-button",content:"qtip-content",active:"qtip-active"}},cream:{border:{width:3,radius:0,color:"#F9E98E"},title:{background:"#F0DE7D",color:"#A27D35"},background:"#FBF7AA",color:"#A27D35",classes:{tooltip:"qtip-cream"}},light:{border:{width:3,radius:0,color:"#E2E2E2"},title:{background:"#f1f1f1",color:"#454545"},background:"white",color:"#454545",classes:{tooltip:"qtip-light"}},dark:{border:{width:3,radius:0,color:"#303030"},title:{background:"#404040",color:"#f3f3f3"},background:"#505050",color:"#f3f3f3",classes:{tooltip:"qtip-dark"}},red:{border:{width:3,radius:0,color:"#CE6F6F"},title:{background:"#f28279",color:"#9C2F2F"},background:"#F79992",color:"#9C2F2F",classes:{tooltip:"qtip-red"}},green:{border:{width:3,radius:0,color:"#A9DB66"},title:{background:"#b9db8c",color:"#58792E"},background:"#CDE6AC",color:"#58792E",classes:{tooltip:"qtip-green"}},blue:{border:{width:3,radius:0,color:"#ADD9ED"},title:{background:"#D0E9F5",color:"#5E99BD"},background:"#E5F6FE",color:"#4D9FBF",classes:{tooltip:"qtip-blue"}}}})(jQuery);
	
/* Start search suggest js libraries */
//The following search related libraries: common.js, uri.js, ss.js and xmlhttp.js had extensive removal of comments. if you need to read their documentation, please see the actual files in vcm or download fresh copies from GSA

/*#####*/
//common.js
// copied from google3/java/com/google/caribou/antlers/fin/jsdata

//------------------------------------------------------------------------


// browser detection
function BR_AgentContains_(str) {
  if (str in BR_AgentContains_cache_) {
    return BR_AgentContains_cache_[str];
  }

  return BR_AgentContains_cache_[str] =
    (navigator.userAgent.toLowerCase().indexOf(str) != -1);
}
// We cache the results of the indexOf operation. This gets us a 10x benefit in
// Gecko, 8x in Safari and 4x in MSIE for all of the browser checks
var BR_AgentContains_cache_ = {};

function BR_IsIE() {
  return BR_AgentContains_('msie') && !window.opera;
}

function BR_IsKonqueror() {
  return BR_AgentContains_('konqueror');
}

function BR_IsSafari() {
  return BR_AgentContains_('safari') || BR_IsKonqueror();
}

function BR_IsNav() {
  return !BR_IsIE() &&
         !BR_IsSafari() &&
         BR_AgentContains_('mozilla');
}

function BR_IsWin() {
  return BR_AgentContains_('win');
}

function BR_IsMac() {
  return BR_AgentContains_('macintosh') ||
         BR_AgentContains_('mac_powerpc');
}

function BR_IsLinux() {
  return BR_AgentContains_('linux');
}

var BACKSPACE_KEYCODE = 8;
var COMMA_KEYCODE = 188;                // ',' key
var DEBUG_KEYCODE = 68;                 // 'D' key
var DELETE_KEYCODE = 46;
var DOWN_KEYCODE = 40;                  // DOWN arrow key
var ENTER_KEYCODE = 13;                 // ENTER key
var ESC_KEYCODE = 27;                   // ESC key
var LEFT_KEYCODE = 37;                  // LEFT arrow key
var RIGHT_KEYCODE = 39;                 // RIGHT arrow key
var SPACE_KEYCODE = 32;                 // space bar
var TAB_KEYCODE = 9;                    // TAB key
var UP_KEYCODE = 38;                    // UP arrow key
var SHIFT_KEYCODE = 16;
var PAGE_DOWN_KEYCODE = 34;
var PAGE_UP_KEYCODE = 33;

// This is a "constant" but has different values depending on the browser
function GetSemicolonKeyCode() {
  return BR_IsIE() ? 186 : 59;
}

var MAX_EMAIL_ADDRESS_LENGTH = 320;     // 64 + '@' + 255
var MAX_SIGNATURE_LENGTH = 1000;        // 1000 chars of maximum signature

//------------------------------------------------------------------------
// Assertions
// DEPRECATED: Use assert.js
//------------------------------------------------------------------------
/**
 * DEPRECATED: Use assert.js
 */
function raise(msg) {
  if (typeof Error != 'undefined') {
    throw new Error(msg || 'Assertion Failed');
  } else {
    throw (msg);
  }
}

function Fail(opt_msg) {
  opt_msg = opt_msg || 'Assertion failed';
  if (IsDefined(DumpError)) DumpError(opt_msg + '\n');
  raise(opt_msg);
}


function AssertTrue(expression, opt_msg) {
  if (!expression) {
    opt_msg = opt_msg || 'Assertion failed';
    Fail(opt_msg);
  }
}


function AssertEquals(val1, val2, opt_msg) {
  if (val1 != val2) {
    opt_msg = opt_msg ||
        "AssertEquals failed: <" + val1 + "> != <" + val2 + ">";
    Fail(opt_msg);
  }
}


function AssertType(value, type, opt_msg) {
  // for backwards compatability only
  if (typeof value == type) return;

  if (value || value == "") {
    try {
      if (type == AssertTypeMap[typeof value] || value instanceof type) return;
    } catch (e) { /* failure, type was an illegal argument to instanceof */ }
  }
  var makeMsg = opt_msg === undefined;
  if (makeMsg) {
    if (typeof type == 'function') {
      var match = type.toString().match(/^\s*function\s+([^\s\{]+)/);
      if (match) type = match[1];
    }
    opt_msg = "AssertType failed: <" + value + "> not typeof "+ type;
  }
  Fail(opt_msg);
}

var AssertTypeMap = {
  'string'  : String,
  'number'  : Number,
  'boolean' : Boolean
};


function AssertNumArgs(num, opt_msg) {
  var caller = AssertNumArgs.caller;  // This is not supported in safari 1.0
  if (caller && caller.arguments.length != num) {
    opt_msg = opt_msg || caller.name + ' expected ' + num + ' arguments '
        + ' but received ' + caller.arguments.length;
    Fail(opt_msg);
  }
}

//------------------------------------------------------------------------
// Cookies
//------------------------------------------------------------------------
var ILLEGAL_COOKIE_CHARS_RE = /[\s;]/

function SetCookie(name, value, opt_max_age, opt_path, opt_domain) {

  value = '' + value;
  AssertTrue((typeof name == 'string' &&
              typeof value == 'string' &&
              !name.match(ILLEGAL_COOKIE_CHARS_RE) &&
              !value.match(ILLEGAL_COOKIE_CHARS_RE)),
             'trying to set an invalid cookie');

  if (!IsDefined(opt_max_age)) opt_max_age = -1;
  if (!IsDefined(opt_path)) opt_path = '/';
  if (!IsDefined(opt_domain)) opt_domain = null;

  var domain_str = (opt_domain == null) ? '' : ';domain=' + opt_domain;
  var path_str = (opt_path == null) ? '' : ';path=' + opt_path;

  var expires_str;

  // Case 1: Set a session cookie.
  if (opt_max_age < 0) {
    expires_str = '';

  } else if (opt_max_age == 0) {
  
    var pastDate = new Date(1970, 1 /*Feb*/, 1);  // Feb 1, 1970
    expires_str = ';expires=' + pastDate.toUTCString();

  // Case 3: Set a persistent cookie.
  } else {
    var futureDate = new Date(Now() + opt_max_age * 1000);
    expires_str = ';expires=' + futureDate.toUTCString();
  }

  document.cookie = name + '=' + value + domain_str + path_str + expires_str;
}

var EXPIRED_COOKIE_VALUE = 'EXPIRED';

/**
 * Expires a cookie.
 *
 * @param {string} name The cookie name.
 * @param {string} opt_path The path of the cookie, or null to expire a cookie
 *   set at the full request path. If not provided, the default is '/'
 *   (i.e. path=/).
 * @param {string} opt_domain The domain of the cookie, or null to expire a
 *   cookie set at the full request host name. If not provided, the default is
 *   null (i.e. cookie at full request host name).
 */
function ExpireCookie(name, opt_path, opt_domain) {
  SetCookie(name, EXPIRED_COOKIE_VALUE, 0, opt_path, opt_domain);
}

/** Returns the value for the first cookie with the given name
 * @param {string} name The cookie name.
 * @return {string} a string or the empty string if no cookie found.
 */
function GetCookie(name) {
  var nameeq = name + "=";
  var cookie = String(document.cookie);
  for (var pos = -1; (pos = cookie.indexOf(nameeq, pos + 1)) >= 0;) {
    var i = pos;
    // walk back along string skipping whitespace and looking for a ; before
    // the name to make sure that we don't match cookies whose name contains
    // the given name as a suffix.
    while (--i >= 0) {
      var ch = cookie.charAt(i);
      if (ch == ';') {
        i = -1;  // indicate success
        break;
      } else if (' \t'.indexOf(ch) < 0) {
        break;
      }
    }
    if (-1 === i) {  // first cookie in the string or we found a ;
      var end = cookie.indexOf(';', pos);
      if (end < 0) { end = cookie.length; }
      return cookie.substring(pos + nameeq.length, end);
    }
  }
  return "";
}


//------------------------------------------------------------------------
// Time
//------------------------------------------------------------------------
function Now() {
  return (new Date()).getTime();
}

//------------------------------------------------------------------------
// Dynamic HTML/DOM utilities
//------------------------------------------------------------------------
// Gets a element by its id, may return null
function MaybeGetElement(win, id) {
  return win.document.getElementById(id);
}

// Same as MaybeGetElement except that it throws an exception if it's null
function GetElement(win, id) {
  var el = win.document.getElementById(id);
  if (!el) {
    DumpError("Element " + id + " not found.");
  }
  return el;
}

// Gets elements by its id/name
// IE treats getElementsByName as searching over ids, while Moz use names.
// so tags must have both id and name as the same string
function GetElements(win, id) {
  return win.document.getElementsByName(id);
}

// Gets the parent of a html element.
function GetParentNode(n) {
  try {
    return n.parentNode;
  } catch (e) {
    // n.parentNode may throw a permission-denied exception on mozilla
    // (e.g. on text element), ignore this exception.
    return n;
  }
}

function IsDescendant(parent, child) {
  do {
    if (parent === child) return true;
    child = GetParentNode(child);
  } while (child && child !== document.body);
  return false;
}

// Get attribute value of a DOM node
function GetAttribute(node, attribute) {
  if (!node.getAttribute) {
    return null;
  }
  var attr = node.getAttribute(attribute);
  if (BR_IsIE() && attribute == "style") {
    return attr.value;
  } else {
    return attr;
  }
}

// Sets inner html of a html element
function SetInnerHTML(win, id, html) {
  try {
    GetElement(win, id).innerHTML = html;
  } catch (ex) {
    DumpException(ex);
  }
}

// Gets inner-html of a html element
function GetInnerHTML(win, id) {
  try {
    return GetElement(win, id).innerHTML;
  } catch (ex) {
    DumpException(ex);
    return "";
  }
}

// Clears inner html of a html element
function ClearInnerHTML(win, id) {
  try {
    GetElement(win, id).innerHTML = "";
  } catch (ex) {
    DumpException(ex);
  }
}

// Sets a CSS style of an element
function SetCssStyle(win, id, name, value) {
  try {
    var elem = GetElement(win, id);
    elem.style[name] = value;
  } catch (ex) {
    DumpException(ex);
  }
}

// Get CSS property from a style attribute string
function GetStyleProperty(style, name) {
  var i = style.indexOf(name);
  if (i != -1) {
    var j = style.indexOf(";", i);
    if (j == -1) {
      j = style.length;
    }
    // the +1 below is for the colon following the attribute name
    return CollapseWhitespace(style.substring(i + name.length + 1, j));
  }
  return null;
}

// Get the index of a table cell in a table row
function GetCellIndex(cell) {
  // Safari always returns 0, so in this case the value cannot be trusted
  if (cell.cellIndex) {
    return cell.cellIndex;
  } else if (cell.parentNode) {
    return FindInArray(cell.parentNode.cells, cell);
  } else {
    return null;
  }
}

// Show/hide an element.
function ShowElement(el, show) {
  el.style.display = show ? "" : "none";
}

// Show/hide a block element.
// ShowElement() doesn't work if object has an initial class with display:none
function ShowBlockElement(el, show) {
  el.style.display = show ? "block" : "none";
}

// Show/hide an inline element.
// ShowElement() doesn't work when an element starts off display:none.
function ShowInlineElement(el, show) {
  el.style.display = show ? "inline" : "none";
}

// Set the text of a button. This is to get around a bug in mozilla,
// where we can't set the text of a button by setting innerHTML.
function SetButtonText(button, text) {
  button.childNodes[0].nodeValue = text;
}

// Append a new HTML element to a HTML node.
function AppendNewElement(win, parent, tag) {
  var e = win.document.createElement(tag);
  parent.appendChild(e);
  return e;
}

// Finds the child with the given ID, or null if there is node.
// This does not search the children's children.
function FindChildWithID(parent, id) {
  var el;
  for (el = parent.firstChild; el && el.id != id; el = el.nextSibling) {
    // skip
  }
  return el;
}

// Adds a disabled option to the given menu
function AddMenuDisabledOption(win, menu, html) {
  var op = AppendNewElement(win, menu, 'OPTION');
  op.disabled = true;
  op.innerHTML = html;

  return op;
}

// Adds a option to the given menu
function AddMenuOption(win, menu, value, html) {
  var op = AppendNewElement(win, menu, 'OPTION');
  op.value = value;
  op.innerHTML = html;

  return op;
}

// Create a new DIV (append it to the end of the document)
function CreateDIV(win, id) {
  var div = MaybeGetElement(win, id);
  if (!div) {
    div = AppendNewElement(win, win.document.body, "div");
    div.id = id;
  }
  return div;
}

// Create a new IFRAME (append it to the end of the document)
function CreateIFRAME(win, id, url) {
  var iframe = MaybeGetElement(win, id);
  if (!iframe) {
    // We cannot create an IFRAME directly (IE doesn't allow it), so we
    // create a DIV and then insert an IFRAME.
    // We also give the IFRAME a name (same as id)
    var div = AppendNewElement(win, win.document.body, "div");
    div.innerHTML = "<iframe id=" + id + " name=" + id +
             " src=" + url + "></iframe>";
    iframe = GetElement(win, id);
  }
  return iframe;
}

// Create a new TR containing the given td's
function Tr(win, tds) {
  var tr = win.document.createElement("TR");
  for (var i = 0; i < tds.length; i++) {
    tr.appendChild(tds[i]);
  }
  return tr;
}

/**
 * Create a new TD, with an optional colspan
 *
 * @param {Object} win
 * @param {Number} opt_colspan
 */
function Td(win, opt_colspan) {
  var td = win.document.createElement("TD");
  if (opt_colspan) {
    td.colSpan = opt_colspan;
  }
  return td;
}


// Check if an element has a given class
function HasClass(el, cl) {
  if (el == null || el.className == null) return false;
  if (el.className == cl) {return true;}
  var classes = el.className.split(" ");
  for (var i = 0; i < classes.length; i++) {
    if (classes[i] == cl) {
      return true;
    }
  }
  return false;
}

// Add a class to element
function AddClass(el, cl) {
  if (HasClass(el, cl)) return;
  el.className += " " + cl;
}

// Remove a class from an element
function RemoveClass(el, cl) {
  if (el.className == null) return;
  if (el.className == cl) {
    el.className = "";
    return;
  }
  var classes = el.className.split(" ");
  var result = [];
  var changed = false;
  for (var i = 0; i < classes.length; i++) {
    if (classes[i] != cl) {
      if (classes[i]) { result.push(classes[i]); }
    } else {
      changed = true;
    }
  }
  if (changed) { el.className = result.join(" "); }
}


function GetElementsBySelector(root, selector) {
  var nodes = [];
  for (var child = root.firstChild; child; child = child.nextSibling) {
    AddElementBySelector_(child, selector, nodes);
  }
  return nodes;
}

// Recursive helper for GetElemnetsBySelector()
function AddElementBySelector_(root, selector, nodes) {
  // First test the parent
  if (selector.select(root)) {
    nodes.push(root);
  }

  // Then recurse through the children
  for (var child = root.firstChild; child; child = child.nextSibling) {
    AddElementBySelector_(child, selector, nodes);
  }
}

//------------------------------------------------------------------------
// Window/screen utilities
// TODO: these should be renamed (e.g. GetWindowWidth to GetWindowInnerWidth
// and moved to geom.js)
//------------------------------------------------------------------------
// Get page offset of an element
function GetPageOffsetLeft(el) {
  var x = el.offsetLeft;
  if (el.offsetParent != null)
    x += GetPageOffsetLeft(el.offsetParent);
  return x;
}

// Get page offset of an element
function GetPageOffsetTop(el) {
  var y = el.offsetTop;
  if (el.offsetParent != null)
    y += GetPageOffsetTop(el.offsetParent);
  return y;
}

// Get page offset of an element
function GetPageOffset(el) {
  var x = el.offsetLeft;
  var y = el.offsetTop;
  if (el.offsetParent != null) {
    var pos = GetPageOffset(el.offsetParent);
    x += pos.x;
    y += pos.y;
  }
  return {x: x, y: y};
}

function GetPageOffsetRight(el) {
  return GetPageOffsetLeft(el) + el.offsetWidth;
}

function GetPageOffsetBottom(el) {
  return GetPageOffsetTop(el) + el.offsetHeight;
}

// Get the y position scroll offset.
function GetScrollTop(win) {
  return GetWindowPropertyByBrowser_(win, getScrollTopGetters_);
}

var getScrollTopGetters_ = {
  ieQuirks_: function(win) {
    return win.document.body.scrollTop;
  },
  ieStandards_: function(win) {
    return win.document.documentElement.scrollTop;
  },
  dom_: function(win) {
    return win.pageYOffset;
  }
};

// Get the x position scroll offset.
function GetScrollLeft(win) {
  return GetWindowPropertyByBrowser_(win, getScrollLeftGetters_);
}

var getScrollLeftGetters_ = {
  ieQuirks_: function(win) {
    return win.document.body.scrollLeft;
  },
  ieStandards_: function(win) {
    return win.document.documentElement.scrollLeft;
  },
  dom_: function(win) {
    return win.pageXOffset;
  }
};

/**
 * Checks if window scrollbar has reached its maximum offset
 *
 * @param win a window object
 * @param {Boolean} opt_isHoriz true if horizontal bar, false if vertical
 */
function IsScrollAtEnd(win, opt_isHoriz) {
  var total =
    (opt_isHoriz) ? document.body.offsetWidth : document.body.offsetHeight;
  var inner =
    (opt_isHoriz) ? GetWindowWidth(win) : GetWindowHeight(win);
  var offset =
    (opt_isHoriz) ? GetScrollLeft(win) : GetScrollTop(win);

  return (inner + offset >= total || total < inner);
}

// Scroll window to pos
// position: 0 = top, 0.5 = middle, 1 = bottom
function ScrollTo(win, el, position) {
  var y = GetPageOffsetTop(el);
  y -= GetWindowHeight(win) * position;
  win.scrollTo(0, y);
}

// Scroll so that as far as possible the entire element is in view.
var ALIGN_BOTTOM = 'b';
var ALIGN_MIDDLE = 'm';
var ALIGN_TOP = 't';
function ScrollIntoView(win, el, alignment) {
  var el_top = GetPageOffsetTop(el);
  var el_bottom = el_top + el.offsetHeight;
  var win_top = GetScrollTop(win);
  var win_height = GetWindowHeight(win);
  var win_bottom = win_top + win_height;

  // Out of view?
  if (el_top < win_top ||
      el_bottom > win_bottom) {

    var scrollto_y;
    if (alignment == ALIGN_BOTTOM) {
      scrollto_y = el_bottom - win_height + 5;
    } else if (alignment == ALIGN_MIDDLE) {
      scrollto_y = (el_top + el_bottom) / 2 - win_height/2;
    } else {
      scrollto_y = el_top - 5;        // ALIGN_TOP
    }

    win.scrollTo(0, scrollto_y);
  }
}

function IsElementVisible(win, id) {
  var el = MaybeGetElement(win, id);
  if (el == null) {
    return false;
  }
  var el_top = GetPageOffsetTop(el);
  var el_bottom = el_top + el.offsetHeight;
  var win_top = GetScrollTop(win);
  var win_bottom = win_top + GetWindowHeight(win);
  if (el_top >= win_top && el_bottom <= win_bottom) {
    return true;
  }
  return false;
}

function GetWindowWidth(win) {
  return GetWindowPropertyByBrowser_(win, getWindowWidthGetters_);
}

var getWindowWidthGetters_ = {
  ieQuirks_: function(win) {
    return win.document.body.clientWidth;
  },
  ieStandards_: function(win) {
    return win.document.documentElement.clientWidth;
  },
  dom_: function(win) {
    return win.innerWidth;
  }
};

function GetWindowHeight(win) {
  return GetWindowPropertyByBrowser_(win, getWindowHeightGetters_);
}

var getWindowHeightGetters_ = {
  ieQuirks_: function(win) {
    return win.document.body.clientHeight;
  },
  ieStandards_: function(win) {
    return win.document.documentElement.clientHeight;
  },
  dom_: function(win) {
    return win.innerHeight;
  }
};


function GetWindowPropertyByBrowser_(win, getters) {
  try {
    if (BR_IsSafari()) {
      return getters.dom_(win);
    } else if (!window.opera &&
               "compatMode" in win.document &&
               win.document.compatMode == "CSS1Compat") {
      return getters.ieStandards_(win);
    } else if (BR_IsIE()) {
      return getters.ieQuirks_(win);
    }
  } catch (e) {
    // Ignore for now and fall back to DOM method
  }

  return getters.dom_(win);
}

function GetAvailScreenWidth(win) {
  return win.screen.availWidth;
}

function GetAvailScreenHeight(win) {
  return win.screen.availHeight;
}

// Returns a "nice" window height.
// Use the screen height. (Or should we use the height of the current window?)
function GetNiceWindowHeight(win) {
  return Math.floor(0.8 * GetAvailScreenHeight(win));
}


function GetCenteringLeft(win, width) {
  return (win.screen.availWidth - width) >> 1;
}


function GetCenteringTop(win, height) {
  return (win.screen.availHeight - height) >> 1;
}


function Popup(url, opt_name, opt_width, opt_height, opt_center,
               opt_hide_scrollbars, opt_noresize, opt_blocked_msg) {
  if (!opt_height) {
    opt_height = Math.floor(GetWindowHeight(window.top) * 0.8);
  }
  if (!opt_width) {
    opt_width = Math.min(GetAvailScreenWidth(window), opt_height);
  }

  var features = "resizable=" + (opt_noresize ? "no" : "yes") + "," +
                 "scrollbars=" + (opt_hide_scrollbars ? "no" : "yes") + "," +
                 "width=" + opt_width + ",height=" + opt_height;
  if (opt_center) {
    features += ",left=" + GetCenteringLeft(window, opt_width) + "," +
                "top=" + GetCenteringTop(window, opt_height);
  }
  return OpenWindow(window, url, opt_name, features, opt_blocked_msg);
}


function OpenWindow(win, url, opt_name, opt_features, opt_blocked_msg) {
  var newwin = OpenWindowHelper(top, url, opt_name, opt_features);
  if (!newwin || newwin.closed || !newwin.focus) {
    newwin = OpenWindowHelper(win, url, opt_name, opt_features);
  }
  if (!newwin || newwin.closed || !newwin.focus) {
    if (opt_blocked_msg) alert(opt_blocked_msg);
  } else {
    // Make sure that the window has the focus
    newwin.focus();
  }
  return newwin;
}

/*
 * Helper for OpenWindow().
 * (Copied from caribou's common.js library with small modifications.)
 */
function OpenWindowHelper(win, url, name, features) {
  var newwin;
  if (features) {
    newwin = win.open(url, name, features);
  } else if (name) {
    newwin = win.open(url, name);
  } else {
    newwin = win.open(url);
  }
  return newwin;
}

//------------------------------------------------------------------------
// DOM walking utilities
//------------------------------------------------------------------------

function MaybeEscape(str, escape) {
  return escape ? HtmlEscape(str) : str;
}


//------------------------------------------------------------------------
// Window data
//------------------------------------------------------------------------
// Gets an array, which can store data for the window. This data
// is deleted when the window is unloaded.
var windata = [];
function GetWindowData(win) {
  var data = windata[win.name];
  if (!data) {
    windata[win.name] = data = [];
  }
  return data;
}

// Clear js data for a window.
function ClearWindowData(win_name) {
  if (windata[win_name]) {
    windata[win_name] = null;
  }
}

//------------------------------------------------------------------------
// String utilities
//------------------------------------------------------------------------
// Do html escaping
var amp_re_ = /&/g;
var lt_re_ = /</g;
var gt_re_ = />/g;


function HtmlEscape(str) {
  if (!str) return "";
  return str.replace(amp_re_, "&amp;").replace(lt_re_, "&lt;").
    replace(gt_re_, "&gt;").replace(quote_re_, "&quot;");
}


function HtmlUnescape(str) {
  if (!str) return "";
  return str.
    replace(/&#(\d+);/g,
      function (_, n) { return String.fromCharCode(parseInt(n, 10)); }).
    replace(/&#x([a-f0-9]+);/gi,
      function (_, n) { return String.fromCharCode(parseInt(n, 16)); }).
    replace(/&(\w+);/g, function (_, entity) {
      entity = entity.toLowerCase();
      return entity in HtmlUnescape_unesc_ ? HtmlUnescape_unesc_[entity] : '?';
    });
}
var HtmlUnescape_unesc_ = { lt: '<', gt: '>', quot: '"', nbsp: ' ',
			    amp: '&', apos: '\'' };

// Replace multiple spaces with &nbsp; to retain whitespace formatting
// in addition to escaping '&', '<', and '>'.
var dbsp_re_ = /  /g;
var ret_re_ = /\r/g;
var nl_re_ = /\n/g;
function HtmlWhitespaceEscape(str) {
  str = HtmlEscape(str);
  str = str.replace(dbsp_re_, "&nbsp;&nbsp;");
  str = str.replace(ret_re_, "");
  str = str.replace(nl_re_, "<br>");
  return str;
}


var quote_re_ = /\"/g;
function QuoteEscape(str) {
  return HtmlEscape(str).replace(quote_re_, "&quot;");
}

var JS_SPECIAL_RE_ = /[\'\\\r\n\b\"<>&\u0085\u2028\u2029]/g;

function JSEscOne_(s) {
  return JSEscOne_.js_escs_[s];
}


function ToJSString(s) {
  if (!JSEscOne_.js_escs_) {
    var escapes = {};
    escapes['\\'] = '\\\\';
    escapes['\''] = '\\047';
    escapes['\b'] = '\\b';
    escapes['\"'] = '\\042';
    escapes['<'] =  '\\074';
    escapes['>'] =  '\\076';
    escapes['&'] =  '\\046';
    // newline characters according to
    // http://www.mozilla.org/js/language/js20/formal/lexer-grammar.html
    escapes['\n'] = '\\n';
    escapes['\r'] = '\\r';
    escapes['\u0085'] = '\\205';
    escapes['\u2028'] = '\\u2028';
    escapes['\u2029'] = '\\u2029';

    JSEscOne_.js_escs_ = escapes;
  }

  return "'" + s.toString().replace(JS_SPECIAL_RE_, JSEscOne_) + "'";
}

// converts multiple ws chars to a single space, and strips
// leading and trailing ws
var spc_re_ = /\s+/g;
var beg_spc_re_ = /^ /;
var end_spc_re_ = / $/;
function CollapseWhitespace(str) {
  if (!str) return "";
  return str.replace(spc_re_, " ").replace(beg_spc_re_, "").
    replace(end_spc_re_, "");
}

var newline_re_ = /\r?\n/g;
var spctab_re_ = /[ \t]+/g;
var nbsp_re_ = /\xa0/g;
function StripNewlines(str) {
  if (!str) return "";
  return str.replace(newline_re_, " ");
}

function CanonicalizeNewlines(str) {
  if (!str) return "";
  return str.replace(newline_re_, '\n');
}

function HtmlifyNewlines(str) {
  if (!str) return "";
  return str.replace(newline_re_, "<br>");
}

function NormalizeSpaces(str) {
  if (!str) return "";
  return str.replace(spctab_re_, " ").replace(nbsp_re_, " ");
}

// URL encodes the string.
function UrlEncode(str) {
  return encodeURIComponent(str);
}

// URL-decodes the string. We need to specially handle '+'s because
// the javascript library doesn't properly convert them to spaces
var plus_re_ = /\+/g;
function UrlDecode(str) {
  return decodeURIComponent(str.replace(plus_re_, ' '));
}

function Trim(str) {
  if (!str) return "";
  return str.replace(/^\s+/, "").replace(/\s+$/, "");
}

function EndsWith(str, suffix) {
  if (!str) return !suffix;
  return (str.lastIndexOf(suffix) == (str.length - suffix.length));
}

// Check if a string is empty
function IsEmpty(str) {
  return CollapseWhitespace(str) == "";
}

// Check if a character is a letter
function IsLetterOrDigit(ch) {
  return ((ch >= "a" && ch <= "z") ||
          (ch >= "A" && ch <= "Z") ||
         (ch >= '0' && ch <= '9'));
}

// Check if a character is a space character
function IsSpace(ch) {
  return (" \t\r\n".indexOf(ch) >= 0);
}

// Converts any instances of "\r" or "\r\n" style EOLs into "\n" (Line Feed),
// and also trim the extra newlines and whitespaces at the end.
var eol_re_ = /\r\n?/g;
var trailingspc_re_ = /[\n\t ]+$/;
function NormalizeText(str) {
  return str.replace(eol_re_, "\n").replace(trailingspc_re_, "");
}


function HtmlEscapeInsertWbrs(str, n, chars_to_break_after,
                              chars_to_break_before) {
  AssertNumArgs(4);

  var out = '';
  var strpos = 0;
  var spc = 0;

  for (var i = 1; i < str.length; ++i) {
    var prev_char = str.charAt(i - 1);
    var next_char = str.charAt(i);
    if (IsSpace(next_char)) {
      spc = i;
    } else if (i - spc == n ||
               chars_to_break_after.indexOf(prev_char) != -1 ||
               chars_to_break_before.indexOf(next_char) != -1) {
      out += HtmlEscape(str.substring(strpos, i)) + '<wbr>';
      strpos = i;
      spc = i;
    }
  }
  out += HtmlEscape(str.substr(strpos));
  return out;
}

// Converts a string to its canonicalized label form.
var illegal_chars_re_ = /[ \/(){}&|\\\"\000]/g;
function CanonicalizeLabel(str, lowercase) {
  var uppercase = str.replace(illegal_chars_re_, '-');
  return lowercase ? uppercase.toLowerCase() : uppercase;
}

// Case-insensitive string comparator
function CompareStringsIgnoreCase(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  if (s1 < s2) {
    return -1;
  } else if (s1 == s2) {
    return 0;
  } else {
    return 1;
  }
}

//------------------------------------------------------------------------
// TextArea utilities
//------------------------------------------------------------------------

// Gets the cursor pos in a text area. Returns -1 if the cursor pos cannot
// be determined or if the cursor out of the textfield.
function GetCursorPos(win, textfield) {
  try {
    if (IsDefined(textfield.selectionEnd)) {
      // Mozilla directly supports this
      return textfield.selectionEnd;

    } else if (win.document.selection && win.document.selection.createRange) {
      // IE doesn't export an accessor for the endpoints of a selection.
      // Instead, it uses the TextRange object, which has an extremely obtuse
      // API. Here's what seems to work:

      // (1) Obtain a textfield from the current selection (cursor)
      var tr = win.document.selection.createRange();

      // Check if the current selection is in the textfield
      if (tr.parentElement() != textfield) {
        return -1;
      }

      // (2) Make a text range encompassing the textfield
      var tr2 = tr.duplicate();
      tr2.moveToElementText(textfield);

      // (3) Move the end of the copy to the beginning of the selection
      tr2.setEndPoint("EndToStart", tr);

      // (4) The span of the textrange copy is equivalent to the cursor pos
      var cursor = tr2.text.length;

      // Finally, perform a sanity check to make sure the cursor is in the
      // textfield. IE sometimes screws this up when the window is activated
      if (cursor > textfield.value.length) {
        return -1;
      }
      return cursor;
    } else {
      Debug("Unable to get cursor position for: " + navigator.userAgent);

      // Just return the size of the textfield
      // TODO: Investigate how to get cursor pos in Safari!
      return textfield.value.length;
    }
  } catch (e) {
    DumpException(e, "Cannot get cursor pos");
  }

  return -1;
}

function SetCursorPos(win, textfield, pos) {
  if (IsDefined(textfield.selectionEnd) &&
      IsDefined(textfield.selectionStart)) {
    // Mozilla directly supports this
    textfield.selectionStart = pos;
    textfield.selectionEnd = pos;

  } else if (win.document.selection && textfield.createTextRange) {
    // IE has textranges. A textfield's textrange encompasses the
    // entire textfield's text by default
    var sel = textfield.createTextRange();

    sel.collapse(true);
    sel.move("character", pos);
    sel.select();
  }
}

//------------------------------------------------------------------------
// Array utilities
//------------------------------------------------------------------------
// Find an item in an array, returns the key, or -1 if not found
function FindInArray(array, x) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == x) {
      return i;
    }
  }
  return -1;
}

// Inserts an item into an array, if it's not already in the array
function InsertArray(array, x) {
  if (FindInArray(array, x) == -1) {
    array[array.length] = x;
  }
}

// Delete an element from an array
function DeleteArrayElement(array, x) {
  var i = 0;
  while (i < array.length && array[i] != x)
    i++;
  array.splice(i, 1);
}

// Copies a flat array
function CopyArray(array) {
  var copy = [];
  for (var i = 0; i < array.length; i++) {
    copy[i] = array[i];
  }
  return copy;
}

// Clone an object (recursively)
function CloneObject(x) {
  if ((typeof x) == "object") {
    var y = [];
    for (var i in x) {
      y[i] = CloneObject(x[i]);
    }
    return y;
  }
  return x;
}


function CloneEvent(ev) {
  var clone = {};
  clone.clientX = ev.clientX;
  clone.clientY = ev.clientY;
  clone.pageX = ev.pageX;
  clone.pageY = ev.pageY;
  clone.type = ev.type;
  clone.srcElement = ev.srcElement;
  clone.target = ev.target;
  clone.cancelBubble = ev.cancelBubble;
  clone.explicitOriginalTarget = ev.explicitOriginalTarget;
  clone.button = ev.button;
  clone.shiftKey = ev.shiftKey;
  clone.ctrlKey = ev.ctrlKey;
  // add more properties here

  return clone;
}

function GetEventTarget(/*Event*/ ev) {
// Event is not a type in IE; IE uses Object for events
//  AssertType(ev, Event, 'arg passed to GetEventTarget not an Event');
  return ev.srcElement || ev.target;
}

/** cancels the event */
// from http://www.quirksmode.org/js/events_order.html
function CancelEvent(/*Event*/ ev) {
  if (BR_IsIE()) {
    ev.cancelBubble = true;
  } else if (ev.stopPropagation) {
    ev.stopPropagation();
  }
}

/** Cancels any default action associated with the event. */
function CancelDefaultAction(/*Event*/ ev) {
  if (BR_IsIE()) {
    ev.returnValue = false;
  } else {
    ev.preventDefault();
  }
}


//------------------------------------------------------------------------
// Formatting utilities
//------------------------------------------------------------------------
// A simple printf type function that takes in a template array, and a data
// array. e.g. PrintArray(["a",,"b",,"c"], ["x", "y"]) => axbyc
function PrintArray(array, data) {
  // Check that the argument count is correct.
  AssertEquals(array.length, data.length * 2 + 1);

  for (var i = 0, idx = 1; i < data.length; i++, idx += 2) {
    array[idx] = data[i];
  }
  return array.join("");
}

function ImageHtml(url, attributes) {
  return "<img " + attributes + " src=" + url + ">";
}

// Formats an object id that has two id numbers, eg, foo_3_7
function MakeId3(idprefix, m, n) {
  return idprefix + m + "_" + n;
}

//------------------------------------------------------------------------
// Email address parsing
//------------------------------------------------------------------------
// Parse an email address of the form "name" <address> into [name, address]
function ParseAddress(addr) {
  var name = "";
  var address = "";
  for (var i = 0; i < addr.length;) {
    var token = GetEmailToken(addr, i);
    if (token.charAt(0) == '<') {
      var end = token.indexOf(">");
      address = token.substring(1, (end != -1) ? end : token.length);
    } else if (address == "") {
      name += token;
    }
    i += token.length;
  }

  // Check if it's a simple email address of the form "jlim@google.com"
  if (address == "" && name.indexOf("@") != -1) {
    address = name;
    name = "";
  }

  name = CollapseWhitespace(name);
  name = StripQuotes(name, "'");
  name = StripQuotes(name, "\"");
  address = CollapseWhitespace(address);
  return [name, address];
}

// Given an email address, get the address part
function GetAddress(address) {
  return ParseAddress(address)[1];
}

// Get the username part of an email address
function GetAddressUsername(address) {
  address = GetAddress(address);
  var at = address.indexOf("@");
  return (at == -1) ? address : address.substr(0, at);
}

// Given an email address, get the personal part
function GetPersonal(address) {
  return ParseAddress(address)[0];
}

// Given an address, get a short name
function GetPersonalElseUsername(address) {
  var personal = GetPersonal(address);
  if (personal != "") {
    return personal;
  } else {
    return GetAddressUsername(address);
  }
}

// Strip ' or " chars around a string
function StripQuotes(str, quotechar) {
  var len = str.length;
  if (str.charAt(0) == quotechar &&
      str.charAt(len - 1) == quotechar) {
    return str.substring(1, len - 1);
  }
  return str;
}

// Convert a string containing list of email addresses into an array
// of strings
function EmailsToArray(str) {
  var result = [];
  var email = "";
  var token;

  for (var i = 0; i < str.length; ) {
    token = GetEmailToken(str, i);
    if (token == ",") {
      AddEmailAddress(result, email);
      email = "";
      i++;
      continue;
    }
    email += token;
    i += token.length;
  }

  // Add last
  if (email !="" || token == ",") {
    AddEmailAddress(result, email);
  }
  return result;
}

// Get the next token from a position in an address string
var openers_ = "\"<([";
var closers_ = "\">)]";
function GetEmailToken(str, pos) {
  var ch = str.charAt(pos);
  var p = openers_.indexOf(ch);
  if (p == -1)
    return ch;
  var end_pos = str.indexOf(closers_.charAt(p), pos + 1);
  var token = (end_pos >= 0) ? str.substring(pos, end_pos + 1) :
              str.substr(pos);
  return token;
}

// Add an email address to the result array.
function AddEmailAddress(result, email) {
  email = CleanEmailAddress(email);
  result[result.length] = email;
}

// Clean up email address:
// - remove extra spaces
// - Surround name with quotes if it contains special characters
// to check if we need " quotes
// Note: do not use /g in the regular expression, otherwise the
// regular expression cannot be reusable.
var specialchars_re_ = /[()<>@,;:\\\".\[\]]/;

function CleanEmailAddress(str) {
  var name_address = ParseAddress(str);
  var name = name_address[0];
  var address = name_address[1];

  if (name.indexOf("\"") == -1) {  // If there's no "
    var quote_needed = specialchars_re_.test(name);
    if (quote_needed) {
      name = "\"" + name + "\"";
    }
  }

  if (name == "")
    return address;
  else if (address == "")
    return name;
  else
    return name + " <" + address + ">";
}


function SafeTimeout(win, fn, ms) {
  if (!win) win = window;
  if (!win._tm) {
    win._tm = [];
  }
  var timeoutfn = SafeTimeoutFunction_(win, fn);
  var id = win.setTimeout(timeoutfn, ms);

  // Save the id so that it can be removed from the _tm array
  timeoutfn.id = id;

  // Safe the timeout in the _tm array
  win._tm[id] = 1;

  return id;
}

/** Creates a callback function for a timeout*/
function SafeTimeoutFunction_(win, fn) {
  var timeoutfn = function() {
    try {
      fn(win);

      var t = win._tm;
      if (t) {
        delete t[timeoutfn.id];
      }
    } catch (e) {
      DumpException(e);
    }
  };
  return timeoutfn;
}

/** Cancel a timeout */
function CancelTimeout(win, id) {
  if (!win) win = window;
  win.clearTimeout(id);
  if (win._tm) {
    delete win._tm[id];
  }
}

/** Cancels all timeouts for a given window */
function CancelAllTimeouts(win) {
  if (win && win._tm) {
    try {
      for (var i in win._tm) {
        win.clearTimeout(i);
      }
      win._tm = [];
    } catch (e) {
      DumpException(e);
    }
  }
}

//------------------------------------------------------------------------
// Misc
//------------------------------------------------------------------------
// Compare long hex strings
function CompareID(a, b) {
  if (a.length != b.length) {
    return (a.length - b.length);
  } else {
    return (a < b) ? -1 : (a > b) ? 1 : 0;
  }
}

// Check if a value is defined
function IsDefined(value) {
  return (typeof value) != 'undefined';
}

function GetKeyCode(event) {
  var code;
  if (event.keyCode) {
    code = event.keyCode;
  } else if (event.which) {
    code = event.which;
  }
  return code;
}

// define a forid function to fetch a DOM node by id.
function forid_1(id) {
  return document.getElementById(id);
}
function forid_2(id) {
  return document.all[id];
}

/**
 * Fetch an HtmlElement by id.
 * DEPRECATED: use $ in dom.js
 */
var forid = document.getElementById ? forid_1 : forid_2;


function GetFnName(func) {
  // AssertType(func, Function) fails for window.alert on IE, which is why
  // a weaker assertion, AssertTrue, is used in place of AssertType
  AssertTrue(func, "func passed to GetFnName() is undefined");
  var name;
  if (!('name' in func)) {
    var match = /\W*function\s+([\w\$]+)\(/.exec(func);
    if (!match) {
      throw new Error("Cannot extract name from function: " + func);
    }
    name = match[1];
    func.name = name;
  } else {
    name = func.name;
  }
  if (!name || name == 'anonymous') {
    throw new Error("Anonymous function has no name: " + func);
  }
  return func.name;
}

function log(msg) {
  /* a top level window is its own parent.  Use != or else fails on IE with
   * infinite loop.
   */
  try {
    if (window.parent != window && window.parent.log) {
      window.parent.log(window.name + '::' + msg);
      return;
    }
  } catch (e) {
    // Error: uncaught exception: Permission denied to get property Window.log
  }
  var logPane = forid('log');
  if (logPane) {
    var logText = '<p class=logentry><span class=logdate>' + new Date() +
                  '</span><span class=logmsg>' + msg + '</span></p>';
    logPane.innerHTML = logText + logPane.innerHTML;
  } else {
    window.status = msg;
  }
}


/*#####*/
//xmlhttp.js

// Copyright 2004-2006 Google Inc.
// All Rights Reserved.


var XH_ieProgId_;


// Domain for XMLHttpRequest readyState
var XML_READY_STATE_UNINITIALIZED = 0;
var XML_READY_STATE_LOADING = 1;
var XML_READY_STATE_LOADED = 2;
var XML_READY_STATE_INTERACTIVE = 3;
var XML_READY_STATE_COMPLETED = 4;


/**
 * Initialize the private state used by other functions.
 * @private
 */
function XH_XmlHttpInit_() {

  var XH_ACTIVE_X_IDENTS = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0",
                            "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];

  if (typeof XMLHttpRequest == "undefined" &&
      typeof ActiveXObject != "undefined") {
    for (var i = 0; i < XH_ACTIVE_X_IDENTS.length; i++) {
      var candidate = XH_ACTIVE_X_IDENTS[i];

      try {
        new ActiveXObject(candidate);
        XH_ieProgId_ = candidate;
        break;
      } catch (e) {
        // do nothing; try next choice
      }
    }
	// couldn't find any matches
    if (!XH_ieProgId_) {
      throw Error("Could not create ActiveXObject. ActiveX might be disabled," +
                  " or MSXML might not be installed.");
    }
  }
}


XH_XmlHttpInit_();


/**
 * Create and return an xml http request object that can be passed to
 * {@link #XH_XmlHttpGET} or {@link #XH_XmlHttpPOST}.
 */
function XH_XmlHttpCreate() {
  if (XH_ieProgId_) {
    return new ActiveXObject(XH_ieProgId_);
  } else {
    return new XMLHttpRequest();
  }
}


function XH_XmlHttpGET(xmlHttp, url, handler) {
  xmlHttp.open("GET", url, true);
  xmlHttp.onreadystatechange = handler;
  XH_XmlHttpSend(xmlHttp, null);
}


function XH_XmlHttpPOST(xmlHttp, url, data, handler) {
  xmlHttp.open("GET", url, true);
  xmlHttp.onreadystatechange = handler;
  xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xmlHttp.setRequestHeader("Content-Length",
      /** @type {string} */ (data.length));
  XH_XmlHttpSend(xmlHttp, data);
}


function XH_XmlHttpOpen(xmlHttp, verb, url, handler) {
  xmlHttp.open(verb, url, true);
  xmlHttp.onreadystatechange = handler;
}



function XH_XmlHttpSetRequestHeader(xmlHttp, name, value) {
  xmlHttp.setRequestHeader(name, value);
}



function XH_XmlHttpSend(xmlHttp, data) {
  try {
    xmlHttp.send(data);
  } catch (e) {

    log('XMLHttpSend failed ' + e.toString() + '<br>' + e.stack);
    throw e;
  }
}



function XH_XmlHttpAbort(xmlHttp) {
  // IE crashes if you NULL out the onreadystatechange synchronously
  SafeTimeout(window, function() {
    xmlHttp.onreadystatechange = function() {};
  }, 0);
  if (xmlHttp.readyState < XML_READY_STATE_COMPLETED) {
    xmlHttp.abort();
  }
}

/*#####*/
//uri.js

// Copyright 2006 Google Inc.
// All Rights Reserved.

/**
 * @fileoverview
 * Implements RFC 3986 for parsing/formatting URIs.
 *
 * @author msamuel@google.com
 */

/**
 * creates a uri from the string form.  The parser is relaxed, so special
 * characters that aren't escaped but don't cause ambiguities will not cause
 * parse failures.
 *
 * @return {URI|Null}
 */
function uri_parse(uriStr) {
  var m = uriStr.match(URI_RE_);
  if (!m) { return null; }
  return new URI(
      uri_nullIfAbsent_(m[1]),
      uri_nullIfAbsent_(m[2]),
      uri_nullIfAbsent_(m[3]),
      uri_nullIfAbsent_(m[4]),
      uri_nullIfAbsent_(m[5]),
      uri_nullIfAbsent_(m[6]),
      uri_nullIfAbsent_(m[7]));
}


/**
 * creates a uri from the given parts.
 *
 * @param scheme {String} an unencoded scheme such as "http" or null
 * @param credentials {String} unencoded user credentials or null
 * @param domain {String} an unencoded domain name or null
 * @param port {Number} a port number in [1, 32768].
 *    -1 indicates no port, as does null.
 * @param path {String} an unencoded path
 * @param cgiParamList {Array.<String>} a list of unencoded cgi parameters where
 *   even values are keys and odds the corresponding values.
 * @param fragment {String} an unencoded fragment without the "#" or null.
 * @return {URI}
 */
function uri_create(
    scheme, credentials, domain, port, path, cgiParamList, fragment) {
  var uri = new URI(
      uri_encodeIfExists2_(scheme, URI_DISALLOWED_IN_SCHEME_OR_CREDENTIALS_),
      uri_encodeIfExists2_(
          credentials, URI_DISALLOWED_IN_SCHEME_OR_CREDENTIALS_),
      uri_encodeIfExists_(domain),
      port > 0 ? port.toString() : null,
      uri_encodeIfExists2_(path, URI_DISALLOWED_IN_PATH_),
      null,
      uri_encodeIfExists_(fragment));
  if (cgiParamList) {
    uri.SetAllCgiParameters(cgiParamList);
  }
  return uri;
}
function uri_encodeIfExists_(unescapedPart) {
  if ('string' == typeof unescapedPart) {
    return encodeURIComponent(unescapedPart);
  }
  return null;
};

function uri_encodeIfExists2_(unescapedPart, extra) {
  if ('string' == typeof unescapedPart) {
    return encodeURI(unescapedPart).replace(extra, uri_encodeOne_);
  }
  return null;
};
/** converts a character in [\01-\177] to its url encoded equivalent. */
function uri_encodeOne_(ch) {
  var n = ch.charCodeAt(0);
  return '%' + '0123456789ABCDEF'.charAt((n >> 4) & 0xf) +
    '0123456789ABCDEF'.charAt(n & 0xf);
}

/**
 * resolves a relative url string to a base uri.
 * @return {URI}
 */
function uri_resolve(baseUri, relativeUri) {
  // there are several kinds of relative urls:
  // 1. foo - replaces the last part of the path, the whole query and fragment
  // 2. /foo - replaces the the path, the query and fragment
  // 3. //foo - replaces everything from the domain on.  foo is a domain name
  // 4. ?foo - replace the query and fragment
  // 5. #foo - replace the fragment only

  var absoluteUri = baseUri.Clone();
  // we satisfy these conditions by looking for the first part of relativeUri
  // that is not blank and applying defaults to the rest

  var overridden = relativeUri.HasScheme();

  if (overridden) {
    absoluteUri.SetRawScheme(relativeUri.GetRawScheme());
  } else {
    overridden = relativeUri.HasCredentials();
  }

  if (overridden) {
    absoluteUri.SetRawCredentials(relativeUri.GetRawCredentials());
  } else {
    overridden = relativeUri.HasDomain();
  }

  if (overridden) {
    absoluteUri.SetRawDomain(relativeUri.GetRawDomain());
  } else {
    overridden = relativeUri.HasPort();
  }

  var rawPath = relativeUri.GetRawPath();
  if (overridden) {
    absoluteUri.SetPort(relativeUri.GetPort());
  } else {
    overridden = relativeUri.HasPath();
    if (overridden) {
      // resolve path properly
      if (!new RegExp("^/").test(rawPath)) {
        // path is relative
        rawPath = absoluteUri.GetRawPath().replace(
            new RegExp("/?[^/]*$"),
            '/' + rawPath);
      }
    }
  }

  if (overridden) {
    absoluteUri.SetRawPath(rawPath);
  } else {
    overridden = relativeUri.HasQuery();
  }

  if (overridden) {
    absoluteUri.SetRawQuery(relativeUri.GetRawQuery());
  } else {
    overridden = relativeUri.HasFragment();
  }

  if (overridden) {
    absoluteUri.SetRawFragment(relativeUri.GetRawFragment());
  }

  return absoluteUri;
}


function URI(
    rawScheme,
    rawCredentials, rawDomain, port,
    rawPath, rawQuery, rawFragment
    ) {
  this.scheme_ = rawScheme;
  this.credentials_ = rawCredentials;
  this.domain_ = rawDomain;
  this.port_ = port;
  this.path_ = rawPath;
  this.query_ = rawQuery;
  this.fragment_ = rawFragment;
  /**
   * @type {Array|null}
   */
  this.paramCache_ = null;
}

/** returns the string form of the url. */
URI.prototype.toString = function () {
  var out = [];
  if (null !== this.scheme_) { out.push(this.scheme_, ':'); }
  if (null !== this.domain_) {
    out.push('//');
    if (null !== this.credentials_) { out.push(this.credentials_, '@'); }
    out.push(this.domain_);
    if (null !== this.port_) { out.push(':', this.port_.toString()); }
  }
  if (null !== this.path_) { out.push(this.path_); }
  if (null !== this.query_) { out.push('?', this.query_); }
  if (null !== this.fragment_) { out.push('#', this.fragment_); }
  return out.join('');
};

URI.prototype.Clone = function () {
  return new URI(this.scheme_, this.credentials_, this.domain_, this.port_,
                 this.path_, this.query_, this.fragment_);
};

URI.prototype.GetScheme = function () {
  return this.scheme_ && uri_decodeThatWorks_(this.scheme_);
};
URI.prototype.GetRawScheme = function () {
  return this.scheme_;
};
URI.prototype.SetScheme = function (newScheme) {
  this.scheme_ = uri_encodeIfExists2_(
      newScheme, URI_DISALLOWED_IN_SCHEME_OR_CREDENTIALS_);
  return this;
};
URI.prototype.SetRawScheme = function (newScheme) {
  this.scheme_ = newScheme ? newScheme : null;
  return this;
};
URI.prototype.HasScheme = function () {
  return null !== this.scheme_;
};


URI.prototype.GetCredentials = function () {
  return this.credentials_ && uri_decodeThatWorks_(this.credentials_);
};
URI.prototype.GetRawCredentials = function () {
  return this.credentials_;
};
URI.prototype.SetCredentials = function (newCredentials) {
  this.credentials_ = uri_encodeIfExists2_(
      newCredentials, URI_DISALLOWED_IN_SCHEME_OR_CREDENTIALS_);

  return this;
};
URI.prototype.SetRawCredentials = function (newCredentials) {
  this.credentials_ = newCredentials ? newCredentials : null;
  return this;
};
URI.prototype.HasCredentials = function () {
  return null !== this.credentials_;
};


URI.prototype.GetDomain = function () {
  return this.domain_ && uri_decodeThatWorks_(this.domain_);
};
URI.prototype.GetRawDomain = function () {
  return this.domain_;
};
URI.prototype.SetDomain = function (newDomain) {
  this.domain_ = newDomain ? encodeURIComponent(newDomain) : null;
  return this;
};
URI.prototype.SetRawDomain = function (newDomain) {
  this.domain_ = newDomain ? newDomain : null;
  return this;
};
URI.prototype.HasDomain = function () {
  return null !== this.domain_;
};


URI.prototype.GetPort = function () {
  return this.port_ && uri_decodeThatWorks_(this.port_);
};
URI.prototype.SetPort = function (newPort) {
  if (newPort) {
    if ('number' !== typeof newPort) {
      newPort = parseInt(newPort, 10);
      if (newPort < 0 || isNaN(newPort)) {
        throw new Error('Bad port number ' + newPort);
      }
    }
    this.port_ = newPort.toString();
  } else {
    this.port_ = null;
  }
  return this;
};
URI.prototype.HasPort = function () {
  return null !== this.port_;
};


URI.prototype.GetPath = function () {
  return this.path_ && uri_decodeThatWorks_(this.path_);
};
URI.prototype.GetRawPath = function () {
  return this.path_;
};
URI.prototype.SetPath = function (newPath) {
  this.path_ = uri_encodeIfExists2_(newPath, URI_DISALLOWED_IN_PATH_);
  return this;
};
URI.prototype.SetRawPath = function (newPath) {
  this.path_ = newPath ? newPath : null;
  return this;
};
URI.prototype.HasPath = function () {
  return null !== this.path_;
};


URI.prototype.GetQuery = function () {
  return this.query_ && uri_decodeThatWorks_(this.query_);
};
URI.prototype.GetRawQuery = function () {
  return this.query_;
};
URI.prototype.SetQuery = function (newQuery) {
  this.paramCache_ = null;
  this.query_ = uri_encodeIfExists_(newQuery);
  return this;
};
URI.prototype.SetRawQuery = function (newQuery) {
  this.paramCache_ = null;
  this.query_ = newQuery ? newQuery : null;
  return this;
};
URI.prototype.HasQuery = function () {
  return null !== this.query_;
};

/**
 * sets the query given a list of strings of the form
 * [ key0, value0, key1, value1, ... ].
 *
 * <p><code>uri.SetAllCgiParameters(['a', 'b', 'c', 'd']).GetQuery()</code>
 * will yield <code>'a=b&c=d'</code>.
 */
URI.prototype.SetAllCgiParameters = function (unescapedCgiParameters) {
  this.paramCache_ = null;
  var queryBuf = [];
  var separator = '';
  for (var i = 0; i < unescapedCgiParameters.length;) {
    var k = unescapedCgiParameters[i++];
    var v = unescapedCgiParameters[i++];
    queryBuf.push(separator, encodeURIComponent(k.toString()));
    separator = '&';
    if (v) {
      queryBuf.push('=', encodeURIComponent(v.toString()))
    }
  }
  this.query_ = queryBuf.join('');
  return this;
};
URI.prototype.CheckParameterCache_ = function () {
  if (!this.paramCache_) {
    if (!this.query_) {
      this.paramCache_ = [];
    } else {
      var cgiParams = this.query_.split(/[&\?]/);
      var out = [];
      for (var i = 0; i < cgiParams.length; ++i) {
        var m = cgiParams[i].match(/^([^=]*)(?:=(.*))?$/);
        out.push(uri_decodeThatWorks_(m[1]), uri_decodeThatWorks_(m[2] || ''));
      }
      this.paramCache_ = out;
    }
  }
};
/**
 * sets the values of the named cgi parameters.
 *
 * <p>So, <code>uri_parse('foo?a=b&c=d&e=f').SetCgiParameterValues('c', ['new'])
 * </code> yields <tt>foo?a=b&c=new&e=f</tt>.</p>
 *
 * @param key {String}
 * @param values {Array.<String>} the new values.  If values is a single string
 *   then it will be treated as the sole value.
 */
URI.prototype.SetCgiParameterValues = function (key, values) {
  // be nice and avoid subtle bugs where [] operator on string performs charAt
  // on some browsers and crashes on IE
  if (typeof values === 'string') { values = [ values ]; }

  this.CheckParameterCache_();
  var newValueIndex = 0;
  var pc = this.paramCache_;
  var params = [];
  for (var i = 0, k = 0; i < pc.length; i += 2) {
    if (key === pc[i]) {
      if (newValueIndex < values.length) {
        params.push(key, values[newValueIndex++]);
      }
    } else {
      params.push(pc[i], pc[i + 1]);
    }
  }
  while (newValueIndex < values.length) {
    params.push(key, values[newValueIndex++]);
  }
  this.SetAllCgiParameters(params);
  return this;
};
/**
 * returns the parameters specified in the query part of the uri as a list of
 * keys and values like [ key0, value0, key1, value1, ... ].
 *
 * @return {Array.<String>}
 */
URI.prototype.GetAllCgiParameters = function () {
  this.CheckParameterCache_();
  return this.paramCache_.slice(0, this.paramCache_.length);
};
/**
 * returns the value<b>s</b> for a given cgi parameter as a list of decoded
 * query parameter values.
 * @return {Array.<String>}
 */
URI.prototype.GetCgiParameterValues = function (paramNameUnescaped) {
  this.CheckParameterCache_();
  var values = [];
  for (var i = 0; i < this.paramCache_.length; i += 2) {
    if (paramNameUnescaped === this.paramCache_[i]) {
      values.push(this.paramCache_[i + 1]);
    }
  }
  return values;
};
/**
 * returns a map of cgi parameter names to (non-empty) lists of values.
 * @return {Object.<String,Array.<String>>}
 */
URI.prototype.GetCgiParameterMap = function (paramNameUnescaped) {
  this.CheckParameterCache_();
  var paramMap = {};
  for (var i = 0; i < this.paramCache_.length; i += 2) {
    var key = this.paramCache_[i++],
      value = this.paramCache_[i++];
    if (!(key in paramMap)) {
      paramMap[key] = [value];
    } else {
      paramMap[key].push(value);
    }
  }
  return paramMap;
};
/**
 * returns the first value for a given cgi parameter or null if the given
 * parameter name does not appear in the query string.
 * If the given parameter name does appear, but has no '<tt>=</tt>' following
 * it, then the empty string will be returned.
 * @return {String|Null}
 */
URI.prototype.GetCgiParameterValue = function (paramNameUnescaped) {
  this.CheckParameterCache_();
  for (var i = 0; i < this.paramCache_.length; i += 2) {
    if (paramNameUnescaped === this.paramCache_[i]) {
      return this.paramCache_[i + 1];
    }
  }
  return null;
};

URI.prototype.GetFragment = function () {
  return this.fragment_ && uri_decodeThatWorks_(this.fragment_);
};
URI.prototype.GetRawFragment = function () {
  return this.fragment_;
};
URI.prototype.SetFragment = function (newFragment) {
  this.fragment_ = newFragment ? encodeURIComponent(newFragment) : null;
  return this;
};
URI.prototype.SetRawFragment = function (newFragment) {
  this.fragment_ = newFragment ? newFragment : null;
  return this;
};
URI.prototype.HasFragment = function () {
  return null !== this.fragment_;
};

/** work around a bug in uri_decodeURIComponent_ where it doesn't handle +'s. */
function uri_decodeThatWorks_(s) {
  return decodeURIComponent(s).replace(/\+/g, ' ');
}

function uri_nullIfAbsent_(matchPart) {
  return ('string' == typeof matchPart) && (matchPart.length > 0)
         ? matchPart
         : null;
}






var URI_RE_ = new RegExp(
      "^" +
      "(?:" +
        "([^:/?#]+)" +         // scheme
      ":)?" +
      "(?://" +
        "(?:([^/?#]*)@)?" +    // credentials
        "([^/?#:@]*)" +        // domain
        "(?::([0-9]+))?" +     // port
      ")?" +
      "([^?#]+)?" +            // path
      "(?:\\?([^#]*))?" +      // query
      "(?:#(.*))?" +           // fragment
      "$"
      );

var URI_DISALLOWED_IN_SCHEME_OR_CREDENTIALS_ = /[#\/\?@]/g;
var URI_DISALLOWED_IN_PATH_ = /[\#\?]/g;


/*#####*/
//swfobject.js

/* SWFObject v2.1 <http://code.google.com/p/swfobject/>
	Copyright (c) 2007-2008 Geoff Stearns, Michael Williams, and Bobby van der Sluis
	This software is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/
var swfobject=function(){var b="undefined",Q="object",n="Shockwave Flash",p="ShockwaveFlash.ShockwaveFlash",P="application/x-shockwave-flash",m="SWFObjectExprInst",j=window,K=document,T=navigator,o=[],N=[],i=[],d=[],J,Z=null,M=null,l=null,e=false,A=false;var h=function(){var v=typeof K.getElementById!=b&&typeof K.getElementsByTagName!=b&&typeof K.createElement!=b,AC=[0,0,0],x=null;if(typeof T.plugins!=b&&typeof T.plugins[n]==Q){x=T.plugins[n].description;if(x&&!(typeof T.mimeTypes!=b&&T.mimeTypes[P]&&!T.mimeTypes[P].enabledPlugin)){x=x.replace(/^.*\s+(\S+\s+\S+$)/,"$1");AC[0]=parseInt(x.replace(/^(.*)\..*$/,"$1"),10);AC[1]=parseInt(x.replace(/^.*\.(.*)\s.*$/,"$1"),10);AC[2]=/r/.test(x)?parseInt(x.replace(/^.*r(.*)$/,"$1"),10):0}}else{if(typeof j.ActiveXObject!=b){var y=null,AB=false;try{y=new ActiveXObject(p+".7")}catch(t){try{y=new ActiveXObject(p+".6");AC=[6,0,21];y.AllowScriptAccess="always"}catch(t){if(AC[0]==6){AB=true}}if(!AB){try{y=new ActiveXObject(p)}catch(t){}}}if(!AB&&y){try{x=y.GetVariable("$version");if(x){x=x.split(" ")[1].split(",");AC=[parseInt(x[0],10),parseInt(x[1],10),parseInt(x[2],10)]}}catch(t){}}}}var AD=T.userAgent.toLowerCase(),r=T.platform.toLowerCase(),AA=/webkit/.test(AD)?parseFloat(AD.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,q=false,z=r?/win/.test(r):/win/.test(AD),w=r?/mac/.test(r):/mac/.test(AD);/*@cc_on q=true;@if(@_win32)z=true;@elif(@_mac)w=true;@end@*/return{w3cdom:v,pv:AC,webkit:AA,ie:q,win:z,mac:w}}();var L=function(){if(!h.w3cdom){return }f(H);if(h.ie&&h.win){try{K.write("<script id=__ie_ondomload defer=true src=//:><\/script>");J=C("__ie_ondomload");if(J){I(J,"onreadystatechange",S)}}catch(q){}}if(h.webkit&&typeof K.readyState!=b){Z=setInterval(function(){if(/loaded|complete/.test(K.readyState)){E()}},10)}if(typeof K.addEventListener!=b){K.addEventListener("DOMContentLoaded",E,null)}R(E)}();function S(){if(J.readyState=="complete" && J.parentNode!=null){J.parentNode.removeChild(J);E()}}function E(){if(e){return }if(h.ie&&h.win){var v=a("span");try{var u=K.getElementsByTagName("body")[0].appendChild(v);u.parentNode.removeChild(u)}catch(w){return }}e=true;if(Z){clearInterval(Z);Z=null}var q=o.length;for(var r=0;r<q;r++){o[r]()}}function f(q){if(e){q()}else{o[o.length]=q}}function R(r){if(typeof j.addEventListener!=b){j.addEventListener("load",r,false)}else{if(typeof K.addEventListener!=b){K.addEventListener("load",r,false)}else{if(typeof j.attachEvent!=b){I(j,"onload",r)}else{if(typeof j.onload=="function"){var q=j.onload;j.onload=function(){q();r()}}else{j.onload=r}}}}}function H(){var t=N.length;for(var q=0;q<t;q++){var u=N[q].id;if(h.pv[0]>0){var r=C(u);if(r){N[q].width=r.getAttribute("width")?r.getAttribute("width"):"0";N[q].height=r.getAttribute("height")?r.getAttribute("height"):"0";if(c(N[q].swfVersion)){if(h.webkit&&h.webkit<312){Y(r)}W(u,true)}else{if(N[q].expressInstall&&!A&&c("6.0.65")&&(h.win||h.mac)){k(N[q])}else{O(r)}}}}else{W(u,true)}}}function Y(t){var q=t.getElementsByTagName(Q)[0];if(q){var w=a("embed"),y=q.attributes;if(y){var v=y.length;for(var u=0;u<v;u++){if(y[u].nodeName=="DATA"){w.setAttribute("src",y[u].nodeValue)}else{w.setAttribute(y[u].nodeName,y[u].nodeValue)}}}var x=q.childNodes;if(x){var z=x.length;for(var r=0;r<z;r++){if(x[r].nodeType==1&&x[r].nodeName=="PARAM"){w.setAttribute(x[r].getAttribute("name"),x[r].getAttribute("value"))}}}t.parentNode.replaceChild(w,t)}}function k(w){A=true;var u=C(w.id);if(u){if(w.altContentId){var y=C(w.altContentId);if(y){M=y;l=w.altContentId}}else{M=G(u)}if(!(/%$/.test(w.width))&&parseInt(w.width,10)<310){w.width="310"}if(!(/%$/.test(w.height))&&parseInt(w.height,10)<137){w.height="137"}K.title=K.title.slice(0,47)+" - Flash Player Installation";var z=h.ie&&h.win?"ActiveX":"PlugIn",q=K.title,r="MMredirectURL="+j.location+"&MMplayerType="+z+"&MMdoctitle="+q,x=w.id;if(h.ie&&h.win&&u.readyState!=4){var t=a("div");x+="SWFObjectNew";t.setAttribute("id",x);u.parentNode.insertBefore(t,u);u.style.display="none";var v=function(){u.parentNode.removeChild(u)};I(j,"onload",v)}U({data:w.expressInstall,id:m,width:w.width,height:w.height},{flashvars:r},x)}}function O(t){if(h.ie&&h.win&&t.readyState!=4){var r=a("div");t.parentNode.insertBefore(r,t);r.parentNode.replaceChild(G(t),r);t.style.display="none";var q=function(){t.parentNode.removeChild(t)};I(j,"onload",q)}else{t.parentNode.replaceChild(G(t),t)}}function G(v){var u=a("div");if(h.win&&h.ie){u.innerHTML=v.innerHTML}else{var r=v.getElementsByTagName(Q)[0];if(r){var w=r.childNodes;if(w){var q=w.length;for(var t=0;t<q;t++){if(!(w[t].nodeType==1&&w[t].nodeName=="PARAM")&&!(w[t].nodeType==8)){u.appendChild(w[t].cloneNode(true))}}}}}return u}function U(AG,AE,t){var q,v=C(t);if(v){if(typeof AG.id==b){AG.id=t}if(h.ie&&h.win){var AF="";for(var AB in AG){if(AG[AB]!=Object.prototype[AB]){if(AB.toLowerCase()=="data"){AE.movie=AG[AB]}else{if(AB.toLowerCase()=="styleclass"){AF+=' class="'+AG[AB]+'"'}else{if(AB.toLowerCase()!="classid"){AF+=" "+AB+'="'+AG[AB]+'"'}}}}}var AD="";for(var AA in AE){if(AE[AA]!=Object.prototype[AA]){AD+='<param name="'+AA+'" value="'+AE[AA]+'" />'}}v.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+AF+">"+AD+"</object>";i[i.length]=AG.id;q=C(AG.id)}else{if(h.webkit&&h.webkit<312){var AC=a("embed");AC.setAttribute("type",P);for(var z in AG){if(AG[z]!=Object.prototype[z]){if(z.toLowerCase()=="data"){AC.setAttribute("src",AG[z])}else{if(z.toLowerCase()=="styleclass"){AC.setAttribute("class",AG[z])}else{if(z.toLowerCase()!="classid"){AC.setAttribute(z,AG[z])}}}}}for(var y in AE){if(AE[y]!=Object.prototype[y]){if(y.toLowerCase()!="movie"){AC.setAttribute(y,AE[y])}}}v.parentNode.replaceChild(AC,v);q=AC}else{var u=a(Q);u.setAttribute("type",P);for(var x in AG){if(AG[x]!=Object.prototype[x]){if(x.toLowerCase()=="styleclass"){u.setAttribute("class",AG[x])}else{if(x.toLowerCase()!="classid"){u.setAttribute(x,AG[x])}}}}for(var w in AE){if(AE[w]!=Object.prototype[w]&&w.toLowerCase()!="movie"){F(u,w,AE[w])}}v.parentNode.replaceChild(u,v);q=u}}}return q}function F(t,q,r){var u=a("param");u.setAttribute("name",q);u.setAttribute("value",r);t.appendChild(u)}function X(r){var q=C(r);if(q&&(q.nodeName=="OBJECT"||q.nodeName=="EMBED")){if(h.ie&&h.win){if(q.readyState==4){B(r)}else{j.attachEvent("onload",function(){B(r)})}}else{q.parentNode.removeChild(q)}}}function B(t){var r=C(t);if(r){for(var q in r){if(typeof r[q]=="function"){r[q]=null}}r.parentNode.removeChild(r)}}function C(t){var q=null;try{q=K.getElementById(t)}catch(r){}return q}function a(q){return K.createElement(q)}function I(t,q,r){t.attachEvent(q,r);d[d.length]=[t,q,r]}function c(t){var r=h.pv,q=t.split(".");q[0]=parseInt(q[0],10);q[1]=parseInt(q[1],10)||0;q[2]=parseInt(q[2],10)||0;return(r[0]>q[0]||(r[0]==q[0]&&r[1]>q[1])||(r[0]==q[0]&&r[1]==q[1]&&r[2]>=q[2]))?true:false}function V(v,r){if(h.ie&&h.mac){return }var u=K.getElementsByTagName("head")[0],t=a("style");t.setAttribute("type","text/css");t.setAttribute("media","screen");if(!(h.ie&&h.win)&&typeof K.createTextNode!=b){t.appendChild(K.createTextNode(v+" {"+r+"}"))}u.appendChild(t);if(h.ie&&h.win&&typeof K.styleSheets!=b&&K.styleSheets.length>0){var q=K.styleSheets[K.styleSheets.length-1];if(typeof q.addRule==Q){q.addRule(v,r)}}}function W(t,q){var r=q?"visible":"hidden";if(e&&C(t)){C(t).style.visibility=r}else{V("#"+t,"visibility:"+r)}}function g(s){var r=/[\\\"<>\.;]/;var q=r.exec(s)!=null;return q?encodeURIComponent(s):s}var D=function(){if(h.ie&&h.win){window.attachEvent("onunload",function(){var w=d.length;for(var v=0;v<w;v++){d[v][0].detachEvent(d[v][1],d[v][2])}var t=i.length;for(var u=0;u<t;u++){X(i[u])}for(var r in h){h[r]=null}h=null;for(var q in swfobject){swfobject[q]=null}swfobject=null})}}();return{registerObject:function(u,q,t){if(!h.w3cdom||!u||!q){return }var r={};r.id=u;r.swfVersion=q;r.expressInstall=t?t:false;N[N.length]=r;W(u,false)},getObjectById:function(v){var q=null;if(h.w3cdom){var t=C(v);if(t){var u=t.getElementsByTagName(Q)[0];if(!u||(u&&typeof t.SetVariable!=b)){q=t}else{if(typeof u.SetVariable!=b){q=u}}}}return q},embedSWF:function(x,AE,AB,AD,q,w,r,z,AC){if(!h.w3cdom||!x||!AE||!AB||!AD||!q){return }AB+="";AD+="";if(c(q)){W(AE,false);var AA={};if(AC&&typeof AC===Q){for(var v in AC){if(AC[v]!=Object.prototype[v]){AA[v]=AC[v]}}}AA.data=x;AA.width=AB;AA.height=AD;var y={};if(z&&typeof z===Q){for(var u in z){if(z[u]!=Object.prototype[u]){y[u]=z[u]}}}if(r&&typeof r===Q){for(var t in r){if(r[t]!=Object.prototype[t]){if(typeof y.flashvars!=b){y.flashvars+="&"+t+"="+r[t]}else{y.flashvars=t+"="+r[t]}}}}f(function(){U(AA,y,AE);if(AA.id==AE){W(AE,true)}})}else{if(w&&!A&&c("6.0.65")&&(h.win||h.mac)){A=true;W(AE,false);f(function(){var AF={};AF.id=AF.altContentId=AE;AF.width=AB;AF.height=AD;AF.expressInstall=w;k(AF)})}}},getFlashPlayerVersion:function(){return{major:h.pv[0],minor:h.pv[1],release:h.pv[2]}},hasFlashPlayerVersion:c,createSWF:function(t,r,q){if(h.w3cdom){return U(t,r,q)}else{return undefined}},removeSWF:function(q){if(h.w3cdom){X(q)}},createCSS:function(r,q){if(h.w3cdom){V(r,q)}},addDomLoadEvent:f,addLoadEvent:R,getQueryParamValue:function(v){var u=K.location.search||K.location.hash;if(v==null){return g(u)}if(u){var t=u.substring(1).split("&");for(var r=0;r<t.length;r++){if(t[r].substring(0,t[r].indexOf("="))==v){return g(t[r].substring((t[r].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(A&&M){var q=C(m);if(q){q.parentNode.replaceChild(M,q);if(l){W(l,true);if(h.ie&&h.win){M.style.display="block"}}M=null;l=null;A=false}}}}}();

