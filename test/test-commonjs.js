!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);throw new Error("Cannot find module '"+g+"'")}var j=c[g]={exports:{}};b[g][0].call(j.exports,function(a){var c=b[g][1][a];return e(c?c:a)},j,j.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){void function(a,c){"object"==typeof b&&"object"==typeof b.exports?b.exports=c(a,!0):"function"==typeof define&&define.amd?define(function(){return c(a,!0)}):c(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";function c(a,b){var c=t.create("h-char-group","biaodian cjk");return 0===a.index&&a.isEnd?c.innerHTML=b[0]:(c.innerHTML=a.text,c.classList.add("portion"),0===a.index?c.classList.add("isFirst"):a.isEnd&&c.classList.add("isEnd")),c}function d(a){var b=t.create("div"),c=a.charCodeAt(0).toString(16),d="biaodian cjk "+(a.match(s["char"].biaodian.open)?"bd-open":a.match(s["char"].biaodian.close)?"bd-close bd-end":a.match(s["char"].biaodian.end)?"bd-end":a.match(new RegExp("("+r.biaodian.liga+")"))?"bd-liga":"");return b.innerHTML='<h-char unicode="'+c+'" class="'+d+'">'+a+"</h-char>",b.firstChild}function e(a,b){var c,d=t.create("canvas");return d.width="50",d.height="20",d.style.display="none",m.appendChild(d),c=d.getContext("2d"),c.textBaseline="top",c.font="15px "+b+", sans-serif",c.fillStyle="black",c.strokeStyle="black",c.fillText(a,0,0),{node:d,context:c,remove:function(){t.remove(d,m)}}}function f(a,b){var c,d=a.context,e=b.context;try{for(var f=1;20>=f;f++)for(var g=1;50>=g;g++){if("undefined"==typeof c&&d.getImageData(g,f,1,1).data[3]!==e.getImageData(g,f,1,1).data[3]){c=!1;break}if("boolean"==typeof c)break;50===g&&20===f&&"undefined"==typeof c&&(c=!0)}return a.remove(),b.remove(),a=null,b=null,c}catch(h){}return!1}function g(a,b,c){var a=a,b=b||"sans-serif",c=c||"\u8fadQ";return b=e(c,b),a=e(c,a),!f(a,b)}function h(a,b,c){var d=t.create("h-ru"),b=t.clone(b),c=c||{};return c.annotation="true",Array.isArray(a)?d.innerHTML=a.map(function(a){return"undefined"==typeof a?"":a.outerHTML}).join("")+b.outerHTML:(d.appendChild(t.clone(a)),d.appendChild(b)),t.setAttr(d,c),d}function i(a,b){var c,d,e,a=t.clone(a),f=t.create("h-ru"),g=b.textContent;return c=g.replace(s.zhuyin.diao,""),e=c?c.length:0,d=g.replace(c,"").replace(/[\u02C5]/g,"\u02c7").replace(/[\u030D]/g,"\u0358"),f.appendChild(a),f.innerHTML+="<h-zhuyin><h-yin>"+c+"</h-yin><h-diao>"+d+"</h-diao></h-zhuyin>",t.setAttr(f,{zhuyin:"true",diao:d,length:e}),f}function j(){var a,b=t.create("div");return b.innerHTML="<span>a b</span><span style=\"font-family: 'Han Space'\">a b</span>",m.appendChild(b),a=b.firstChild.offsetWidth!==b.lastChild.offsetWidth,t.remove(b,m),a}var k=a.document,l=k.documentElement,m=k.body,n="3.2.6",o=["initCond","renderElem","renderHanging","renderJiya","renderHWS","correctBasicBD","substCombLigaWithPUA"],p=function(a,b){return new p.fn.init(a,b)},q=function(){return arguments[0]&&(this.context=arguments[0]),arguments[1]&&(this.condition=arguments[1]),this};p.version=n,p.fn=p.prototype={version:n,constructor:p,context:m,condition:l,routine:o,init:q,setRoutine:function(a){return Array.isArray(a)&&(this.routine=a),this},render:function(a){var b=this,a=Array.isArray(a)?a:this.routine;return a.forEach(function(a){try{"string"==typeof a?b[a]():Array.isArray(a)&&b[a.shift()].apply(b,a)}catch(c){}}),this}},p.fn.init.prototype=p.fn,p.init=function(){return p.init=p().render()};var r={punct:{base:"[\u2026,.;:!?\u203d_]",sing:"[\u2010-\u2014\u2026]",middle:"[\\/~\\-&\u2010-\u2014_]",open:"['\"\u2018\u201c\\(\\[\xa1\xbf\u2e18\xab\u2039\u201a\u201c\u201e]",close:"['\"\u201d\u2019\\)\\]\xbb\u203a\u201b\u201d\u201f]",end:"['\"\u201d\u2019\\)\\]\xbb\u203a\u201b\u201d\u201f\u203c\u203d\u2047-\u2049,.;:!?]"},biaodian:{base:"[\ufe30\uff0e\u3001\uff0c\u3002\uff1a\uff1b\uff1f\uff01\u30fc]",liga:"[\u2014\u2026\u22ef]",middle:"[\xb7\uff3c\uff0f\uff0d\u30a0\uff06\u30fb\uff3f]",open:"[\u300c\u300e\u300a\u3008\uff08\u3014\uff3b\uff5b\u3010\u3016]",close:"[\u300d\u300f\u300b\u3009\uff09\u3015\uff3d\uff5d\u3011\u3017]",end:"[\u300d\u300f\u300b\u3009\uff09\u3015\uff3d\uff5d\u3011\u3017\ufe30\uff0e\u3001\uff0c\u3002\uff1a\uff1b\uff1f\uff01\u30fc]"},hanzi:{base:"[\u4e00-\u9fff\u3400-\u4db5\u31c0-\u31e3\u3007\ufa0e\ufa0f\ufa11\ufa13\ufa14\ufa1f\ufa21\ufa23\ufa24\ufa27-\ufa29]|[\ud800-\udbff][\udc00-\udfff]",desc:"[\u2ff0-\u2ffa]",radical:"[\u2f00-\u2fd5\u2e80-\u2ef3]"},latin:{base:"[A-Za-z0-9\xc0-\xff\u0100-\u017f\u0180-\u024f\u2c60-\u2c7f\ua720-\ua7ff\u1e00-\u1eff]",combine:"[\u0300-\u0341\u1dc0-\u1dff]"},ellinika:{base:"[0-9\u0370-\u03ff\u1f00-\u1fff]",combine:"[\u0300-\u0345\u1dc0-\u1dff]"},kirillica:{base:"[0-9\u0400-\u0482\u048a-\u04ff\u0500-\u052f\ua640-\ua66e\ua67e-\ua697]",combine:"[\u0483-\u0489\u2de0-\u2dff\ua66f-\ua67d\ua69f]"},kana:{base:"[\u30a2\u30a4\u30a6\u30a8\u30aa-\u30fa\u3042\u3044\u3046\u3048\u304a-\u3094\u309f\u30ff]|\ud82c[\udc00-\udc01]",small:"[\u3041\u3043\u3045\u3047\u3049\u30a1\u30a3\u30a5\u30a7\u30a9\u3063\u3083\u3085\u3087\u308e\u3095\u3096\u30c3\u30e3\u30e5\u30e7\u30ee\u30f5\u30f6\u31f0-\u31ff]",combine:"[\u3099-\u309c]",half:"[\uff66-\uff9f]",mark:"[\u30a0\u309d\u309e\u30fb-\u30fe]"},eonmun:{base:"[\uac00-\ud7a3]",letter:"[\u1100-\u11ff\u314f-\u3163\u3131-\u318e\ua960-\ua97c\ud7b0-\ud7fb]",half:"[\uffa1-\uffdc]"},zhuyin:{base:"[\u3105-\u312d\u31a0-\u31ba]",initial:"[\u3105-\u3119\u312a-\u312c\u31a0-\u31a3]",medial:"[\u3127-\u3129]","final":"[\u311a-\u3129\u312d\u31a4-\u31b3\u31b8-\u31ba]",tone:"[\u02d9\u02ca\u02c5\u02c7\u02cb\u02ea\u02eb]",checked:"[\u31b4-\u31b7][\u0358\u030d]?"}},s=function(){var a="[\\x20\\t\\r\\n\\f]",b=r.punct.open,c=(r.punct.close,r.punct.end),d=r.punct.middle,e=r.punct.sing,f=b+"|"+c+"|"+d,g=r.biaodian.open,h=r.biaodian.close,i=r.biaodian.end,j=r.biaodian.middle,k=r.biaodian.liga+"{2}",l=g+"|"+i+"|"+j,m=r.kana.base+r.kana.combine+"?",n=r.kana.small+r.kana.combine+"?",o=r.kana.half,p=r.eonmun.base+"|"+r.eonmun.letter,q=r.eonmun.half,s=r.hanzi.base+"|"+r.hanzi.desc+"|"+r.hanzi.radical+"|"+m,t=r.ellinika.combine,u=r.latin.base+t+"*",v=r.ellinika.base+t+"*",w=r.kirillica.combine,x=r.kirillica.base+w+"*",y=u+"|"+v+"|"+x,z="['\u2019]",A=s+"|(?:"+y+"|"+z+")+",B=r.zhuyin.initial,C=r.zhuyin.medial,D=r.zhuyin["final"],E=r.zhuyin.tone+"|"+r.zhuyin.checked;return{"char":{punct:{all:new RegExp("("+f+")","g"),open:new RegExp("("+b+")","g"),end:new RegExp("("+c+")","g"),sing:new RegExp("("+e+")","g")},biaodian:{all:new RegExp("("+l+")","g"),open:new RegExp("("+g+")","g"),close:new RegExp("("+h+")","g"),end:new RegExp("("+i+")","g"),liga:new RegExp("("+k+")","g")},hanzi:new RegExp("("+s+")","g"),latin:new RegExp("("+u+")","ig"),ellinika:new RegExp("("+v+")","ig"),kirillica:new RegExp("("+x+")","ig"),kana:new RegExp("("+m+"|"+n+"|"+o+")","g"),eonmun:new RegExp("("+p+"|"+q+")","g")},group:{biaodian:[new RegExp("(("+l+"){2,})","g"),new RegExp("("+k+g+")","g")],punct:null,hanzi:new RegExp("("+s+")+","g"),western:new RegExp("("+u+"|"+v+"|"+x+"|"+f+")+","ig"),kana:new RegExp("("+m+"|"+n+"|"+o+")+","g"),eonmun:new RegExp("("+p+"|"+q+"|"+f+")+","g")},jinze:{hanging:new RegExp("("+h+"*|[\u2026\u22ef]*)([\u3001\uff0c\u3002\uff0e])(?!"+i+")","ig"),touwei:new RegExp("("+g+"+)("+A+")("+i+"+)","ig"),tou:new RegExp("("+g+"+)("+A+")","ig"),wei:new RegExp("("+A+")("+i+"+)","ig"),middle:new RegExp("("+A+")("+j+")("+A+")","ig")},zhuyin:{form:new RegExp("^\u02d9?("+B+")?("+C+")?("+D+")?("+E+")?$"),diao:new RegExp("("+E+")","g")},hws:{base:[new RegExp("("+s+")("+y+"|"+b+")","ig"),new RegExp("("+y+"|"+c+")("+s+")","ig")],strict:[new RegExp("("+s+")"+a+"?("+y+"|"+b+")","ig"),new RegExp("("+y+"|"+c+")"+a+"?("+s+")","ig")]},"display-as":{"ja-font-for-hant":["\u67e5 \u67fb","\u555f \u5553","\u9109 \u9115","\u503c \u5024","\u6c61 \u6c5a"],"comb-liga-pua":[["a[\u030d\u0358]","\udb80\udc61"],["e[\u030d\u0358]","\udb80\udc65"],["i[\u030d\u0358]","\udb80\udc69"],["o[\u030d\u0358]","\udb80\udc6f"],["u[\u030d\u0358]","\udb80\udc75"],["\u31b4[\u030d\u0358]","\udb8c\uddb4"],["\u31b5[\u030d\u0358]","\udb8c\uddb5"],["\u31b6[\u030d\u0358]","\udb8c\uddb6"],["\u31b7[\u030d\u0358]","\udb8c\uddb7"]]},"inaccurate-char":[["[\u2022\u2027]","\xb7"],["\u22ef\u22ef","\u2026\u2026"],["\u2500\u2500","\u2014\u2014"],["\u2035","\u2018"],["\u2032","\u2019"],["\u2036","\u201c"],["\u2033","\u201d"]]}}();p.UNICODE=r,p.TYPESET=s,p.UNICODE.cjk=p.UNICODE.hanzi,p.UNICODE.greek=p.UNICODE.ellinika,p.UNICODE.cyrillic=p.UNICODE.kirillica,p.UNICODE.hangul=p.UNICODE.eonmun,p.UNICODE.zhuyin.ruyun=p.UNICODE.zhuyin.checked,p.TYPESET["char"].cjk=p.TYPESET["char"].hanzi,p.TYPESET["char"].greek=p.TYPESET["char"].ellinika,p.TYPESET["char"].cyrillic=p.TYPESET["char"].kirillica,p.TYPESET["char"].hangul=p.TYPESET["char"].eonmun;var t={id:function(a,b){return(b||k).getElementById(a)},tag:function(a,b){return this.makeArray((b||k).getElementsByTagName(a))},qsa:function(a,b){return this.makeArray((b||k).querySelectorAll(a))},create:function(a,b){var a="!"===a?k.createDocumentFragment():""===a?k.createTextNode(b||""):k.createElement(a);try{b&&(a.className=b)}catch(c){}return a},clone:function(a,b){return a.cloneNode("boolean"==typeof b?b:!0)},remove:function(a,b){return(b||a.parentNode).removeChild(a)},setAttr:function(a,b){if("object"==typeof b){var c=b.length;if("object"==typeof b[0]&&"name"in b[0])for(var d=0;c>d;d++)void 0!==b[d].value&&a.setAttribute(b[d].name,b[d].value);else for(var e in b)b.hasOwnProperty(e)&&void 0!==b[e]&&a.setAttribute(e,b[e]);return a}},isIgnorable:function(a){return"WBR"===a.nodeName||a.nodeType===Node.COMMENT_NODE},makeArray:function(a){return Array.prototype.slice.call(a)},extend:function(a,b){var c="object"==typeof a||"function"==typeof a||"object"==typeof b;if(c){for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);return a}}},u=function(b){function c(a,b,c){var d=Element.prototype,e=d.matches||d.mozMatchesSelector||d.msMatchesSelector||d.webkitMatchesSelector;return a instanceof Element?e.call(a,b):c&&/^[39]$/.test(a.nodeType)?!0:!1}var d="0.2.1",e=b.NON_INLINE_PROSE,f=b.PRESETS.prose.filterElements,g=a||{},h=g.document||void 0;if("undefined"==typeof h)throw new Error("Fibre requires a DOM-supported environment.");var i=function(a,b){return new i.fn.init(a,b)};return i.version=d,i.matches=c,i.fn=i.prototype={constructor:i,version:d,finder:[],context:void 0,portionMode:"retain",selector:{},preset:"prose",init:function(a,b){if(b&&(this.preset=null),this.selector={context:null,filter:[],avoid:[],boundary:[]},!a)throw new Error("A context is required for Fibre to initialise.");return a instanceof Node?a instanceof Document?this.context=a.body||a:this.context=a:"string"==typeof a&&(this.context=h.querySelector(a),this.selector.context=a),this},filterFn:function(a){var b=this.selector.filter.join(", ")||"*",d=this.selector.avoid.join(", ")||null,e=c(a,b,!0)&&!c(a,d);return"prose"===this.preset?f(a)&&e:e},boundaryFn:function(a){var b=this.selector.boundary.join(", ")||null,d=c(a,b);return"prose"===this.preset?e(a)||d:d},filter:function(a){return"string"==typeof a&&this.selector.filter.push(a),this},endFilter:function(a){return a?this.selector.filter=[]:this.selector.filter.pop(),this},avoid:function(a){return"string"==typeof a&&this.selector.avoid.push(a),this},endAvoid:function(a){return a?this.selector.avoid=[]:this.selector.avoid.pop(),this},addBoundary:function(a){return"string"==typeof a&&this.selector.boundary.push(a),this},removeBoundary:function(){return this.selector.boundary=[],this},setMode:function(a){return this.portionMode="first"===a?"first":"retain",this},replace:function(a,c){var d=this;return d.finder.push(b(d.context,{find:a,replace:c,filterElements:function(a){return d.filterFn(a)},forceContext:function(a){return d.boundaryFn(a)},portionMode:d.portionMode})),d},wrap:function(a,c){var d=this;return d.finder.push(b(d.context,{find:a,wrap:c,filterElements:function(a){return d.filterFn(a)},forceContext:function(a){return d.boundaryFn(a)},portionMode:d.portionMode})),d},revert:function(a){var b=this.finder.length,a=Number(a)||(0===a?Number(0):"all"===a?b:1);if("undefined"==typeof b||0===b)return this;a>b&&(a=b);for(var c=a;c>0;c--)this.finder.pop().revert();return this}},i.fn.filterOut=i.fn.avoid,i.fn.init.prototype=i.fn,i}(function(){function a(a){return String(a).replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function b(){return c.apply(null,arguments)||d.apply(null,arguments)}function c(a,c,e,f,g){if(c&&!c.nodeType&&arguments.length<=2)return!1;var h="function"==typeof e;h&&(e=function(a){return function(b,c){return a(b.text,c.startIndex)}}(e));var i=d(c,{find:a,wrap:h?null:e,replace:h?e:"$"+(f||"&"),prepMatch:function(a,b){if(!a[0])throw"findAndReplaceDOMText cannot handle zero-length matches";if(f>0){var c=a[f];a.index+=a[0].indexOf(c),a[0]=c}return a.endIndex=a.index+a[0].length,a.startIndex=a.index,a.index=b,a},filterElements:g});return b.revert=function(){return i.revert()},!0}function d(a,b){return new e(a,b)}function e(a,c){var d=c.preset&&b.PRESETS[c.preset];if(c.portionMode=c.portionMode||f,d)for(var e in d)i.call(d,e)&&!i.call(c,e)&&(c[e]=d[e]);this.node=a,this.options=c,this.prepMatch=c.prepMatch||this.prepMatch,this.reverts=[],this.matches=this.search(),this.matches.length&&this.processMatches()}var f="retain",g="first",h=k,i=({}.toString,{}.hasOwnProperty);return b.NON_PROSE_ELEMENTS={br:1,hr:1,script:1,style:1,img:1,video:1,audio:1,canvas:1,svg:1,map:1,object:1,input:1,textarea:1,select:1,option:1,optgroup:1,button:1},b.NON_CONTIGUOUS_PROSE_ELEMENTS={address:1,article:1,aside:1,blockquote:1,dd:1,div:1,dl:1,fieldset:1,figcaption:1,figure:1,footer:1,form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,header:1,hgroup:1,hr:1,main:1,nav:1,noscript:1,ol:1,output:1,p:1,pre:1,section:1,ul:1,br:1,li:1,summary:1,dt:1,details:1,rp:1,rt:1,rtc:1,script:1,style:1,img:1,video:1,audio:1,canvas:1,svg:1,map:1,object:1,input:1,textarea:1,select:1,option:1,optgroup:1,button:1,table:1,tbody:1,thead:1,th:1,tr:1,td:1,caption:1,col:1,tfoot:1,colgroup:1},b.NON_INLINE_PROSE=function(a){return i.call(b.NON_CONTIGUOUS_PROSE_ELEMENTS,a.nodeName.toLowerCase())},b.PRESETS={prose:{forceContext:b.NON_INLINE_PROSE,filterElements:function(a){return!i.call(b.NON_PROSE_ELEMENTS,a.nodeName.toLowerCase())}}},b.Finder=e,e.prototype={search:function(){function b(a){for(var g=0,j=a.length;j>g;++g){var k=a[g];if("string"==typeof k){if(f.global)for(;c=f.exec(k);)h.push(i.prepMatch(c,d++,e));else(c=k.match(f))&&h.push(i.prepMatch(c,0,e));e+=k.length}else b(k)}}var c,d=0,e=0,f=this.options.find,g=this.getAggregateText(),h=[],i=this;return f="string"==typeof f?RegExp(a(f),"g"):f,b(g),h},prepMatch:function(a,b,c){if(!a[0])throw new Error("findAndReplaceDOMText cannot handle zero-length matches");return a.endIndex=c+a.index+a[0].length,a.startIndex=c+a.index,a.index=b,a},getAggregateText:function(){function a(d,e){if(3===d.nodeType)return[d.data];if(b&&!b(d))return[];var e=[""],f=0;if(d=d.firstChild)do if(3!==d.nodeType){var g=a(d);c&&1===d.nodeType&&(c===!0||c(d))?(e[++f]=g,e[++f]=""):("string"==typeof g[0]&&(e[f]+=g.shift()),g.length&&(e[++f]=g,e[++f]=""))}else e[f]+=d.data;while(d=d.nextSibling);return e}var b=this.options.filterElements,c=this.options.forceContext;return a(this.node)},processMatches:function(){var a,b,c,d=this.matches,e=this.node,f=this.options.filterElements,g=[],h=e,i=d.shift(),j=0,k=0,l=0,m=[e];a:for(;;){if(3===h.nodeType&&(!b&&h.length+j>=i.endIndex?b={node:h,index:l++,text:h.data.substring(i.startIndex-j,i.endIndex-j),indexInMatch:j-i.startIndex,indexInNode:i.startIndex-j,endIndexInNode:i.endIndex-j,isEnd:!0}:a&&g.push({node:h,index:l++,text:h.data,indexInMatch:j-i.startIndex,indexInNode:0}),!a&&h.length+j>i.startIndex&&(a={node:h,index:l++,indexInMatch:0,indexInNode:i.startIndex-j,endIndexInNode:i.endIndex-j,text:h.data.substring(i.startIndex-j,i.endIndex-j)}),j+=h.data.length),c=1===h.nodeType&&f&&!f(h),a&&b){if(h=this.replaceMatch(i,a,g,b),j-=b.node.data.length-b.endIndexInNode,a=null,b=null,g=[],i=d.shift(),l=0,k++,!i)break}else if(!c&&(h.firstChild||h.nextSibling)){h.firstChild?(m.push(h),h=h.firstChild):h=h.nextSibling;continue}for(;;){if(h.nextSibling){h=h.nextSibling;break}if(h=m.pop(),h===e)break a}}},revert:function(){for(var a=this.reverts.length;a--;)this.reverts[a]();this.reverts=[]},prepareReplacementString:function(a,b,c,d){var e=this.options.portionMode;return e===g&&b.indexInMatch>0?"":(a=a.replace(/\$(\d+|&|`|')/g,function(a,b){var d;switch(b){case"&":d=c[0];break;case"`":d=c.input.substring(0,c.startIndex);break;case"'":d=c.input.substring(c.endIndex);break;default:d=c[+b]}return d}),e===g?a:b.isEnd?a.substring(b.indexInMatch):a.substring(b.indexInMatch,b.indexInMatch+b.text.length))},getPortionReplacementNode:function(a,b,c){var d=this.options.replace||"$&",e=this.options.wrap;if(e&&e.nodeType){var f=h.createElement("div");f.innerHTML=e.outerHTML||(new XMLSerializer).serializeToString(e),e=f.firstChild}if("function"==typeof d)return d=d(a,b,c),d&&d.nodeType?d:h.createTextNode(String(d));var g="string"==typeof e?h.createElement(e):e;return d=h.createTextNode(this.prepareReplacementString(d,a,b,c)),d.data&&g?(g.appendChild(d),g):d},replaceMatch:function(a,b,c,d){var e,f,g=b.node,i=d.node;if(g===i){var j=g;b.indexInNode>0&&(e=h.createTextNode(j.data.substring(0,b.indexInNode)),j.parentNode.insertBefore(e,j));var k=this.getPortionReplacementNode(d,a);return j.parentNode.insertBefore(k,j),d.endIndexInNode<j.length&&(f=h.createTextNode(j.data.substring(d.endIndexInNode)),j.parentNode.insertBefore(f,j)),j.parentNode.removeChild(j),this.reverts.push(function(){e===k.previousSibling&&e.parentNode.removeChild(e),f===k.nextSibling&&f.parentNode.removeChild(f),k.parentNode.replaceChild(j,k)}),k}e=h.createTextNode(g.data.substring(0,b.indexInNode)),f=h.createTextNode(i.data.substring(d.endIndexInNode));for(var l=this.getPortionReplacementNode(b,a),m=[],n=0,o=c.length;o>n;++n){var p=c[n],q=this.getPortionReplacementNode(p,a);p.node.parentNode.replaceChild(q,p.node),this.reverts.push(function(a,b){return function(){b.parentNode.replaceChild(a.node,b)}}(p,q)),m.push(q)}var r=this.getPortionReplacementNode(d,a);return g.parentNode.insertBefore(e,g),g.parentNode.insertBefore(l,g),g.parentNode.removeChild(g),i.parentNode.insertBefore(r,i),i.parentNode.insertBefore(f,i),i.parentNode.removeChild(i),this.reverts.push(function(){e.parentNode.removeChild(e),l.parentNode.replaceChild(g,l),f.parentNode.removeChild(f),r.parentNode.replaceChild(i,r)}),r}},b}());t.extend(u.fn,{jinzify:function(a){return this.filter(a||null).avoid("h-jinze").replace(s.jinze.touwei,function(a,b){var c=t.create("h-jinze","touwei");return c.innerHTML=b[0],0===a.index&&a.isEnd||1===a.index?c:""}).replace(s.jinze.wei,function(a,b){var c=t.create("h-jinze","wei");return c.innerHTML=b[0],0===a.index?c:""}).replace(s.jinze.tou,function(a,b){var c=t.create("h-jinze","tou");return c.innerHTML=b[0],0===a.index&&a.isEnd||1===a.index?c:""}).replace(s.jinze.middle,function(a,b){var c=t.create("h-jinze","middle");return c.innerHTML=b[0],0===a.index&&a.isEnd||1===a.index?c:""}).endAvoid().endFilter()},groupify:function(a){var a=t.extend({biaodian:!1,hanzi:!1,kana:!1,eonmun:!1,western:!1},a||{});return this.avoid("h-hangable, h-char-group, h-word"),a.biaodian&&this.replace(s.group.biaodian[0],c).replace(s.group.biaodian[1],c),(a.hanzi||a.cjk)&&this.wrap(s.group.hanzi,t.clone(t.create("h-char-group","hanzi cjk"))),a.western&&this.wrap(s.group.western,t.clone(t.create("h-word","western"))),a.kana&&this.wrap(s.group.kana,t.clone(t.create("h-char-group","kana"))),(a.eonmun||a.hangul)&&this.wrap(s.group.eonmun,t.clone(t.create("h-word","eonmun hangul"))),this.endAvoid(),this},charify:function(a){var a=t.extend({biaodian:!1,punct:!1,hanzi:!1,latin:!1,ellinika:!1,kirillica:!1,kana:!1,eonmun:!1},a||{});return this.avoid("h-char"),a.biaodian&&this.replace(s["char"].biaodian.all,function(a,b){return d(b[0])}).replace(s["char"].biaodian.liga,function(a,b){return d(b[0])}),(a.hanzi||a.cjk)&&this.wrap(s["char"].hanzi,t.clone(t.create("h-char","hanzi cjk"))),a.punct&&this.wrap(s["char"].punct.all,t.clone(t.create("h-char","punct"))),a.latin&&this.wrap(s["char"].latin,t.clone(t.create("h-char","alphabet latin"))),(a.ellinika||a.greek)&&this.wrap(s["char"].ellinika,t.clone(t.create("h-char","alphabet ellinika greek"))),(a.kirillica||a.cyrillic)&&this.wrap(s["char"].kirillica,t.clone(t.create("h-char","alphabet kirillica cyrillic"))),a.kana&&this.wrap(s["char"].kana,t.clone(t.create("h-char","kana"))),(a.eonmun||a.hangul)&&this.wrap(s["char"].eonmun,t.clone(t.create("h-char","eonmun hangul"))),this.endAvoid(),this}}),p.find=u,void["setMode","wrap","replace","revert","addBoundary","removeBoundary","avoid","endAvoid","filter","endFilter","jinzify","groupify","charify"].forEach(function(a){p.fn[a]=function(){return this.finder||(this.finder=p.find(this.context)),this.finder[a](arguments[0],arguments[1]),this}});var v={};v.writeOnCanvas=e,v.compareCanvases=f,v.detectFont=g,v.support=function(){function b(a){var b,c=a.charAt(0).toUpperCase()+a.slice(1),d=(a+" "+e.join(c+" ")+c).split(" ");return d.forEach(function(a){"string"==typeof f.style[a]&&(b=!0)}),b||!1}function c(a,b){var c,d,e,f=m||t.create("body"),g=t.create("div"),h=m?g:f,b="function"==typeof b?b:function(){};return c=["<style>",a,"</style>"].join(""),h.innerHTML+=c,f.appendChild(g),m||(f.style.background="",f.style.overflow="hidden",e=l.style.overflow,l.style.overflow="hidden",l.appendChild(f)),d=b(h,a),t.remove(h),m||(l.style.overflow=e),!!d}function d(b,c){var d;return a.getComputedStyle?d=k.defaultView.getComputedStyle(b,null).getPropertyValue(c):b.currentStyle&&(d=b.currentStyle[c]),d}var e="Webkit Moz ms".split(" "),f=t.create("h-test");return{ruby:function(){var a,b=t.create("ruby"),c=t.create("rt"),e=t.create("rp");return b.appendChild(e),b.appendChild(c),l.appendChild(b),a="none"===d(e,"display")||"ruby"===d(b,"display")&&"ruby-text"===d(c,"display")?!0:!1,l.removeChild(b),b=null,c=null,e=null,a}(),fontface:function(){var a;return c('@font-face { font-family: font; src: url("//"); }',function(b,c){var d=t.qsa("style",b)[0],e=d.sheet||d.styleSheet,f=e?e.cssRules&&e.cssRules[0]?e.cssRules[0].cssText:e.cssText||"":"";a=/src/i.test(f)&&0===f.indexOf(c.split(" ")[0])}),a}(),unicoderange:function(){var a;return c('@font-face{font-family:test-for-unicode-range;src:local(Arial),local("Droid Sans")}@font-face{font-family:test-for-unicode-range;src:local("Times New Roman"),local(Times),local("Droid Serif");unicode-range:U+270C}',function(){a=!v.detectFont("test-for-unicode-range",'Arial, "Droid Sans"',"Q")}),a}(),columnwidth:b("columnWidth"),textemphasis:b("textEmphasis"),writingmode:b("writingMode")}}(),v.initCond=function(a){var b,a=a||l,c="";for(var d in v.support)b=(v.support[d]?"":"no-")+d,a.classList.add(b),c+=b+" ";return c},t.extend(v,{renderElem:function(a){this.renderRuby(a),this.renderDecoLine(a),this.renderDecoLine(a,"s, del"),this.renderEm(a)},renderDecoLine:function(a,b){var b=b||"u, ins",c=t.qsa(b,a),d=new RegExp("^("+b.replace(/\,\s?/g,"|")+")$","ig");c.forEach(function(a){var b;do if(b=(b||a).nextSibling,!b)return;while(t.isIgnorable(b));b.nodeName.match(d)&&b.classList.add("adjacent")})},renderEm:function(a,b){var c=b?"qsa":"tag",b=b||"em",d=t[c](b,a);d.forEach(function(a){var b=p(a);v.support.textemphasis?b.avoid("rt, h-char, h-char-group").charify({biaodian:!0,punct:!0}):b.avoid("rt, h-char, h-char-group").jinzify().groupify({western:!0,biaodian:!0}).charify({hanzi:!0,biaodian:!0,punct:!0,latin:!0,ellinika:!0,kirillica:!0})})},renderRuby:function(a,b){var c=b?"qsa":"tag",b=b||"ruby",d=t[c](b,a),e=t.qsa(b+", rtc",a);e.forEach(function(a){var b=a.classList;b.contains("pinyin")?b.add("romanization"):b.contains("mps")&&b.add("zhuyin"),b.contains("romanization")&&b.add("annotation")}),d.forEach(function(a){var c,d,e,f,g,j,k=a.classList,l=!v.support.ruby||k.contains("zhuyin")||k.contains("complex")||k.contains("rightangle");l&&(c=t.create("!"),c.appendChild(t.clone(a)),d=t.qsa(b,c)[0],(!v.support.ruby||k.contains("zhuyin"))&&t.tag("rt",d).forEach(function(a){var b,c=t.create("!"),d=[];do{if(b=(b||a).previousSibling,!b||b.nodeName.match(/((?:h\-)?r[ubt])/i))break;c.insertBefore(t.clone(b),c.firstChild),d.push(b)}while(!b.nodeName.match(/((?:h\-)?r[ubt])/i));f=k.contains("zhuyin")?i(c,a):h(c,a);try{a.parentNode.replaceChild(f,a),d.forEach(function(a){t.remove(a)})}catch(e){}}),(k.contains("complex")||k.contains("rightangle"))&&(e=f=t.tag("rb",d),g=e.length,void function(b){b&&(f=t.tag("rt",b).map(function(a,b){if(e[b]){var c=i(e[b],a);try{e[b].parentNode.replaceChild(c,e[b])}catch(d){}return c}}),t.remove(b),a.setAttribute("rightangle","true"))}(d.querySelector("rtc.zhuyin")),t.qsa("rtc:not(.zhuyin)",d).forEach(function(b,c){var d;d=t.tag("rt",b).map(function(b,d){var e,i,j=Number(b.getAttribute("rbspan")||1),l=0,m=[];j>g&&(j=g);do{try{e=f.shift(),m.push(e)}catch(n){}if("undefined"==typeof e)break;l+=Number(e.getAttribute("span")||1)}while(j>l);if(l>j){if(m.length>1)return void console.error("An impossible `rbspan` value detected.",a);m=t.tag("rb",m[0]),f=m.slice(j).concat(f),m=m.slice(0,j),l=j}i=h(m,b,{"class":k,span:l,order:c});try{m[0].parentNode.replaceChild(i,m.shift()),m.forEach(function(a){t.remove(a)})}catch(n){}return i}),f=d,1===c&&a.setAttribute("doubleline","true"),t.remove(b)})),j=t.create("h-ruby"),j.innerHTML=c.firstChild.innerHTML,t.setAttr(j,a.attributes),j.normalize(),a.parentNode.replaceChild(j,a))})}}),p.normalize=v,p.localize=v,p.support=v.support,p.detectFont=v.detectFont,p.fn.initCond=function(){return this.condition.classList.add("han-js-rendered"),p.normalize.initCond(this.condition),this},void["Elem","DecoLine","Em","Ruby"].forEach(function(a){var b="render"+a;p.fn[b]=function(a){return p.normalize[b](this.context,a),this}}),t.extend(p.support,{heiti:!0,songti:p.detectFont('"Han Songti"'),"songti-gb":p.detectFont('"Han Songti GB"'),kaiti:p.detectFont('"Han Kaiti"'),fangsong:p.detectFont('"Han Fangsong"')});var w="* > h-hws:first-child, * > wbr:first-child + h-hws, wbr:first-child + wbr + h-hws",x=function(){var a=t.create("div");return a.appendChild(t.create("","0-")),a.appendChild(t.create("","2")),a.normalize(),2!==a.firstChild.length}(),y=t.create("h-hws");y.setAttribute("hidden",""),y.innerHTML=" ",t.extend(p,{isNodeNormalizeNormal:x,renderHWS:function(a,b){var a=a||k,c=b?"strict":"base",d=p.find(a);return d.avoid(b?"textarea, code, kbd, samp, pre":"textarea"),d.replace(p.TYPESET.hws[c][0],"$1<hws/>$2").replace(p.TYPESET.hws[c][1],"$1<hws/>$2").replace(/(['"]+)<hws\/>(.+?)<hws\/>\1/gi,"$1$2$1").replace(/<hws\/>([\u2018\u201c]+)/gi,"$1").replace(/([\u2019\u201d]+)<hws\/>/gi,"$1").replace("<hws/>",function(){return t.clone(y)}),t.qsa(w,a).forEach(function(a){for(var b=a.parentNode,c=b.firstChild;t.isIgnorable(c);)if(c=c.nextSibling,!c)return;for(;"H-HWS"===c.nodeName&&(t.remove(c,b),c=b.parentNode.insertBefore(t.clone(y),b),b=b.parentNode,x&&b.normalize(),c===b.firstChild););}),x&&a.normalize(),d}}),t.extend(p.fn,{HWS:null,renderHWS:function(a){return p.renderHWS(this.context,a),this.HWS=t.tag("h-hws",this.context),this},revertHWS:function(){return this.HWS.forEach(function(a){t.remove(a)}),this}}),t.extend(p,{detectSpaceFont:j,isSpaceFontLoaded:j()}),p.support["han-space"]=j(),p.renderHanging=function(a){var a=a||k,b=p.find(a);return b.avoid("textarea, code, kbd, samp, pre, h-hangable").replace(s.jinze.hanging,function(a,b){var c=t.create("h-hangable");return c.innerHTML=b[1]+'<h-cs><h-inner hidden> </h-inner><h-char class="biaodian bd-close bd-end cjk">'+b[2]+"</h-char></h-cs>",0===a.index?c:""}),b},t.extend(p.fn,{hanging:null,renderHanging:function(){var a=this.condition.classList,b=j();return b&&a.contains("no-han-space")&&(a.remove("no-han-space"),a.add("han-space")),this.hanging=p.renderHanging(this.context),this},revertHanging:function(){try{this.hanging.revert("all")}catch(a){}return this}}),p.renderJiya=function(a){var a=a||k,b=p.find(a);return b.avoid("textarea, code, kbd, samp, pre, h-char-group").replace(new RegExp("("+r.biaodian.end+"+)("+r.biaodian.open+"+)","g"),function(a,b){if(0===a.index)return a.isEnd?b[0]:b[1];var c=t.create("h-char-group","biaodian cjk portion");return c.innerHTML=b[2],c}).endAvoid(),b.avoid("textarea, code, kbd, samp, pre, h-char").groupify({biaodian:!0}).charify({biaodian:!0}),t.qsa("h-char.biaodian.bd-open, h-char.biaodian.bd-end",a).forEach(function(a){if(!p.find.matches(a,"h-cs *")){var b="<h-inner>"+a.innerHTML+"</h-inner>",c="<h-cs hidden> </h-cs>",d=a.classList.contains("bd-open");a.innerHTML=d?c+b:b+c}}),b},t.extend(p.fn,{jiya:null,renderJiya:function(){return this.jiya=p.renderJiya(this.context),this},revertJiya:function(){try{this.jiya.revert("all")}catch(a){}return this}});var z;z=t.create("h-char","biaodian cjk bd-middle"),z.setAttribute("unicode","b7"),p.correctBasicBD=function(a,b){if(!p.support.unicoderange||b){var c,a=a||k;c=p.find(a),c.wrap(/\u00B7/g,t.clone(z)).charify({biaodian:!0})}},t.extend(p.fn,{basicBD:null,correctBasicBD:function(a){return this.basicBD=p.correctBasicBD(this.context,a),this},revertBasicBD:function(){try{this.basicBD.revert("all")}catch(a){}return this}});var A="h-ru[annotation]",B="textarea, code, kbd, samp, pre",C=function(){var a=p.localize.writeOnCanvas("i\u030d",'"Romanization Sans"'),b=p.localize.writeOnCanvas("\udb80\udc69",'"Romanization Sans"');return p.localize.compareCanvases(a,b)}(),D=p.TYPESET["display-as"]["comb-liga-pua"],E=p.TYPESET["inaccurate-char"],F=t.create("h-char","comb-liga");return t.extend(p,{isCombLigaNormal:C,substCombLigaWithPUA:function(a){if(!C){var a=a||k,b=p.find(a);return b.avoid(B),D.forEach(function(a){b.replace(new RegExp(a[0],"ig"),function(b,c){var d=t.clone(F);return d.innerHTML="<h-inner>"+c[0]+"</h-inner>",d.setAttribute("display-as",a[1]),0===b.index?d:""})}),t.qsa(A,a).forEach(function(a){var b=a.getAttribute("annotation");D.slice(0,5).forEach(function(a){b=b.replace(new RegExp(a[0],"ig"),a[1])}),a.setAttribute("annotation",b)}),b}},substInaccurateChar:function(a){var a=a||k,b=p.find(a);b.avoid(B),E.forEach(function(a){b.replace(new RegExp(a[0],"ig"),a[1])})}}),t.extend(p.fn,{"comb-liga":null,"inaccurate-char":null,substCombLigaWithPUA:function(){return this["comb-liga"]=p.substCombLigaWithPUA(this.context),this},revertCombLigaWithPUA:function(){try{this["comb-liga"].revert("all")}catch(a){}return this},substInaccurateChar:function(){return this["inaccurate-char"]=p.substInaccurateChar(this.context),this},revertInaccurateChar:function(){try{this["inaccurate-char"].revert("all")}catch(a){}return this}}),a.addEventListener("DOMContentLoaded",function(){var a;l.classList.contains("han-init")?p.init():(a=k.querySelector(".han-init-context"))&&(p.init=p(a).render())}),("undefined"==typeof b||b===!1)&&(a.Han=p),p})},{}],2:[function(a,b,c){b.exports=a("./dist/han")},{"./dist/han":1}],3:[function(a,b,c){(function(){var b;b=a("../index"),b().render()}).call(this)},{"../index":2}]},{},[3]);