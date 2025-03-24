import{j as n}from"./jsx-runtime-0DLF9kdB.js";import{q as sn,B as ae,t as oe,v as Y}from"./components-CT65d0m2.js";import{o as dr,r as cr}from"./index-OilDH1Qe.js";import an from"./Accueil-CM3fTsn4.js";import ce from"./Adherer-B7FeYG7P.js";import le from"./Apprendre-BS1CFSI-.js";import de from"./Divers-Ca4nVDuX.js";import pe from"./Enseigner-hztt6yYa.js";import"./TabImg-C7W0MtJu.js";import"./Actualite-kOG5GrC4.js";import"./Hero-B7q9eoT0.js";import"./UniversityTable-D8-lh2Bp.js";var z=function(){return z=Object.assign||function(e){for(var t,i=1,s=arguments.length;i<s;i++){t=arguments[i];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},z.apply(this,arguments)};function Ar(r,e,t){if(t||arguments.length===2)for(var i=0,s=e.length,a;i<s;i++)(a||!(i in e))&&(a||(a=Array.prototype.slice.call(e,0,i)),a[i]=e[i]);return r.concat(a||Array.prototype.slice.call(e))}var N="-ms-",lr="-moz-",m="-webkit-",qn="comm",zr="rule",Hr="decl",he="@import",Rn="@keyframes",ue="@layer",zn=Math.abs,Xr=String.fromCharCode,kr=Object.assign;function me(r,e){return R(r,0)^45?(((e<<2^R(r,0))<<2^R(r,1))<<2^R(r,2))<<2^R(r,3):0}function Un(r){return r.trim()}function W(r,e){return(r=e.exec(r))?r[0]:r}function p(r,e,t){return r.replace(e,t)}function Nr(r,e,t){return r.indexOf(e,t)}function R(r,e){return r.charCodeAt(e)|0}function $(r,e,t){return r.slice(e,t)}function P(r){return r.length}function Sn(r){return r.length}function or(r,e){return e.push(r),r}function xe(r,e){return r.map(e).join("")}function on(r,e){return r.filter(function(t){return!W(t,e)})}var Ur=1,_=1,yn=0,y=0,I=0,tr="";function Sr(r,e,t,i,s,a,c,d){return{value:r,root:e,parent:t,type:i,props:s,children:a,line:Ur,column:_,length:c,return:"",siblings:d}}function T(r,e){return kr(Sr("",null,null,"",null,null,0,r.siblings),r,{length:-r.length},e)}function K(r){for(;r.root;)r=T(r.root,{children:[r]});or(r,r.siblings)}function fe(){return I}function je(){return I=y>0?R(tr,--y):0,_--,I===10&&(_=1,Ur--),I}function C(){return I=y<yn?R(tr,y++):0,_++,I===10&&(_=1,Ur++),I}function Z(){return R(tr,y)}function Br(){return y}function yr(r,e){return $(tr,r,e)}function Or(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ge(r){return Ur=_=1,yn=P(tr=r),y=0,[]}function ve(r){return tr="",r}function Wr(r){return Un(yr(y-1,Zr(r===91?r+2:r===40?r+1:r)))}function Ne(r){for(;(I=Z())&&I<33;)C();return Or(r)>2||Or(I)>3?"":" "}function Be(r,e){for(;--e&&C()&&!(I<48||I>102||I>57&&I<65||I>70&&I<97););return yr(r,Br()+(e<6&&Z()==32&&C()==32))}function Zr(r){for(;C();)switch(I){case r:return y;case 34:case 39:r!==34&&r!==39&&Zr(I);break;case 40:r===41&&Zr(r);break;case 92:C();break}return y}function Ee(r,e){for(;C()&&r+I!==57;)if(r+I===84&&Z()===47)break;return"/*"+yr(e,y-1)+"*"+Xr(r===47?r:C())}function Ge(r){for(;!Or(Z());)C();return yr(r,y)}function be(r){return ve(Er("",null,null,null,[""],r=ge(r),0,[0],r))}function Er(r,e,t,i,s,a,c,d,l){for(var f=0,x=0,j=c,g=0,u=0,E=0,A=1,U=1,w=1,G=0,B="",b=s,q=a,v=i,h=B;U;)switch(E=G,G=C()){case 40:if(E!=108&&R(h,j-1)==58){Nr(h+=p(Wr(G),"&","&\f"),"&\f",zn(f?d[f-1]:0))!=-1&&(w=-1);break}case 34:case 39:case 91:h+=Wr(G);break;case 9:case 10:case 13:case 32:h+=Ne(E);break;case 92:h+=Be(Br()-1,7);continue;case 47:switch(Z()){case 42:case 47:or(Ae(Ee(C(),Br()),e,t,l),l);break;default:h+="/"}break;case 123*A:d[f++]=P(h)*w;case 125*A:case 59:case 0:switch(G){case 0:case 125:U=0;case 59+x:w==-1&&(h=p(h,/\f/g,"")),u>0&&P(h)-j&&or(u>32?ln(h+";",i,t,j-1,l):ln(p(h," ","")+";",i,t,j-2,l),l);break;case 59:h+=";";default:if(or(v=cn(h,e,t,f,x,s,d,B,b=[],q=[],j,a),a),G===123)if(x===0)Er(h,e,v,v,b,a,j,d,q);else switch(g===99&&R(h,3)===110?100:g){case 100:case 108:case 109:case 115:Er(r,v,v,i&&or(cn(r,v,v,0,0,s,d,B,s,b=[],j,q),q),s,q,j,d,i?b:q);break;default:Er(h,v,v,v,[""],q,0,d,q)}}f=x=u=0,A=w=1,B=h="",j=c;break;case 58:j=1+P(h),u=E;default:if(A<1){if(G==123)--A;else if(G==125&&A++==0&&je()==125)continue}switch(h+=Xr(G),G*A){case 38:w=x>0?1:(h+="\f",-1);break;case 44:d[f++]=(P(h)-1)*w,w=1;break;case 64:Z()===45&&(h+=Wr(C())),g=Z(),x=j=P(B=h+=Ge(Br())),G++;break;case 45:E===45&&P(h)==2&&(A=0)}}return a}function cn(r,e,t,i,s,a,c,d,l,f,x,j){for(var g=s-1,u=s===0?a:[""],E=Sn(u),A=0,U=0,w=0;A<i;++A)for(var G=0,B=$(r,g+1,g=zn(U=c[A])),b=r;G<E;++G)(b=Un(U>0?u[G]+" "+B:p(B,/&\f/g,u[G])))&&(l[w++]=b);return Sr(r,e,t,s===0?zr:d,l,f,x,j)}function Ae(r,e,t,i){return Sr(r,e,t,qn,Xr(fe()),$(r,2,-2),0,i)}function ln(r,e,t,i,s){return Sr(r,e,t,Hr,$(r,0,i),$(r,i+1,-1),i,s)}function Cn(r,e,t){switch(me(r,e)){case 5103:return m+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return m+r+r;case 4789:return lr+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return m+r+lr+r+N+r+r;case 5936:switch(R(r,e+11)){case 114:return m+r+N+p(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return m+r+N+p(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return m+r+N+p(r,/[svh]\w+-[tblr]{2}/,"lr")+r}case 6828:case 4268:case 2903:return m+r+N+r+r;case 6165:return m+r+N+"flex-"+r+r;case 5187:return m+r+p(r,/(\w+).+(:[^]+)/,m+"box-$1$2"+N+"flex-$1$2")+r;case 5443:return m+r+N+"flex-item-"+p(r,/flex-|-self/g,"")+(W(r,/flex-|baseline/)?"":N+"grid-row-"+p(r,/flex-|-self/g,""))+r;case 4675:return m+r+N+"flex-line-pack"+p(r,/align-content|flex-|-self/g,"")+r;case 5548:return m+r+N+p(r,"shrink","negative")+r;case 5292:return m+r+N+p(r,"basis","preferred-size")+r;case 6060:return m+"box-"+p(r,"-grow","")+m+r+N+p(r,"grow","positive")+r;case 4554:return m+p(r,/([^-])(transform)/g,"$1"+m+"$2")+r;case 6187:return p(p(p(r,/(zoom-|grab)/,m+"$1"),/(image-set)/,m+"$1"),r,"")+r;case 5495:case 3959:return p(r,/(image-set\([^]*)/,m+"$1$`$1");case 4968:return p(p(r,/(.+:)(flex-)?(.*)/,m+"box-pack:$3"+N+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+m+r+r;case 4200:if(!W(r,/flex-|baseline/))return N+"grid-column-align"+$(r,e)+r;break;case 2592:case 3360:return N+p(r,"template-","")+r;case 4384:case 3616:return t&&t.some(function(i,s){return e=s,W(i.props,/grid-\w+-end/)})?~Nr(r+(t=t[e].value),"span",0)?r:N+p(r,"-start","")+r+N+"grid-row-span:"+(~Nr(t,"span",0)?W(t,/\d+/):+W(t,/\d+/)-+W(r,/\d+/))+";":N+p(r,"-start","")+r;case 4896:case 4128:return t&&t.some(function(i){return W(i.props,/grid-\w+-start/)})?r:N+p(p(r,"-end","-span"),"span ","")+r;case 4095:case 3583:case 4068:case 2532:return p(r,/(.+)-inline(.+)/,m+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(P(r)-1-e>6)switch(R(r,e+1)){case 109:if(R(r,e+4)!==45)break;case 102:return p(r,/(.+:)(.+)-([^]+)/,"$1"+m+"$2-$3$1"+lr+(R(r,e+3)==108?"$3":"$2-$3"))+r;case 115:return~Nr(r,"stretch",0)?Cn(p(r,"stretch","fill-available"),e,t)+r:r}break;case 5152:case 5920:return p(r,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,s,a,c,d,l,f){return N+s+":"+a+f+(c?N+s+"-span:"+(d?l:+l-+a)+f:"")+r});case 4949:if(R(r,e+6)===121)return p(r,":",":"+m)+r;break;case 6444:switch(R(r,R(r,14)===45?18:11)){case 120:return p(r,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+m+(R(r,14)===45?"inline-":"")+"box$3$1"+m+"$2$3$1"+N+"$2box$3")+r;case 100:return p(r,":",":"+N)+r}break;case 5719:case 2647:case 2135:case 3927:case 2391:return p(r,"scroll-","scroll-snap-")+r}return r}function wr(r,e){for(var t="",i=0;i<r.length;i++)t+=e(r[i],i,r,e)||"";return t}function we(r,e,t,i){switch(r.type){case ue:if(r.children.length)break;case he:case Hr:return r.return=r.return||r.value;case qn:return"";case Rn:return r.return=r.value+"{"+wr(r.children,i)+"}";case zr:if(!P(r.value=r.props.join(",")))return""}return P(t=wr(r.children,i))?r.return=r.value+"{"+t+"}":""}function Ie(r){var e=Sn(r);return function(t,i,s,a){for(var c="",d=0;d<e;d++)c+=r[d](t,i,s,a)||"";return c}}function qe(r){return function(e){e.root||(e=e.return)&&r(e)}}function Re(r,e,t,i){if(r.length>-1&&!r.return)switch(r.type){case Hr:r.return=Cn(r.value,r.length,t);return;case Rn:return wr([T(r,{value:p(r.value,"@","@"+m)})],i);case zr:if(r.length)return xe(t=r.props,function(s){switch(W(s,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":K(T(r,{props:[p(s,/:(read-\w+)/,":"+lr+"$1")]})),K(T(r,{props:[s]})),kr(r,{props:on(t,i)});break;case"::placeholder":K(T(r,{props:[p(s,/:(plac\w+)/,":"+m+"input-$1")]})),K(T(r,{props:[p(s,/:(plac\w+)/,":"+lr+"$1")]})),K(T(r,{props:[p(s,/:(plac\w+)/,N+"input-$1")]})),K(T(r,{props:[s]})),kr(r,{props:on(t,i)});break}return""})}}var ze={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},S={},rr=typeof process<"u"&&S!==void 0&&(S.REACT_APP_SC_ATTR||S.SC_ATTR)||"data-styled",Yn="active",Pn="data-styled-version",Cr="6.1.16",$r=`/*!sc*/
`,Ir=typeof window<"u"&&"HTMLElement"in window,Ue=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&S!==void 0&&S.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&S.REACT_APP_SC_DISABLE_SPEEDY!==""?S.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&S.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&S!==void 0&&S.SC_DISABLE_SPEEDY!==void 0&&S.SC_DISABLE_SPEEDY!==""&&S.SC_DISABLE_SPEEDY!=="false"&&S.SC_DISABLE_SPEEDY),Yr=Object.freeze([]),nr=Object.freeze({});function Se(r,e,t){return t===void 0&&(t=nr),r.theme!==t.theme&&r.theme||e||t.theme}var Mn=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ye=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ce=/(^-|-$)/g;function dn(r){return r.replace(ye,"-").replace(Ce,"")}var Ye=/(a)(d)/gi,gr=52,pn=function(r){return String.fromCharCode(r+(r>25?39:97))};function Lr(r){var e,t="";for(e=Math.abs(r);e>gr;e=e/gr|0)t=pn(e%gr)+t;return(pn(e%gr)+t).replace(Ye,"$1-$2")}var Vr,Qn=5381,X=function(r,e){for(var t=e.length;t;)r=33*r^e.charCodeAt(--t);return r},Wn=function(r){return X(Qn,r)};function Pe(r){return Lr(Wn(r)>>>0)}function Me(r){return r.displayName||r.name||"Component"}function Fr(r){return typeof r=="string"&&!0}var Vn=typeof Symbol=="function"&&Symbol.for,Fn=Vn?Symbol.for("react.memo"):60115,Qe=Vn?Symbol.for("react.forward_ref"):60112,We={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ve={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Tn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Fe=((Vr={})[Qe]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Vr[Fn]=Tn,Vr);function hn(r){return("type"in(e=r)&&e.type.$$typeof)===Fn?Tn:"$$typeof"in r?Fe[r.$$typeof]:We;var e}var Te=Object.defineProperty,ke=Object.getOwnPropertyNames,un=Object.getOwnPropertySymbols,Oe=Object.getOwnPropertyDescriptor,Ze=Object.getPrototypeOf,mn=Object.prototype;function kn(r,e,t){if(typeof e!="string"){if(mn){var i=Ze(e);i&&i!==mn&&kn(r,i,t)}var s=ke(e);un&&(s=s.concat(un(e)));for(var a=hn(r),c=hn(e),d=0;d<s.length;++d){var l=s[d];if(!(l in Ve||t&&t[l]||c&&l in c||a&&l in a)){var f=Oe(e,l);try{Te(r,l,f)}catch{}}}}return r}function er(r){return typeof r=="function"}function _r(r){return typeof r=="object"&&"styledComponentId"in r}function O(r,e){return r&&e?"".concat(r," ").concat(e):r||e||""}function xn(r,e){if(r.length===0)return"";for(var t=r[0],i=1;i<r.length;i++)t+=r[i];return t}function pr(r){return r!==null&&typeof r=="object"&&r.constructor.name===Object.name&&!("props"in r&&r.$$typeof)}function Jr(r,e,t){if(t===void 0&&(t=!1),!t&&!pr(r)&&!Array.isArray(r))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)r[i]=Jr(r[i],e[i]);else if(pr(e))for(var i in e)r[i]=Jr(r[i],e[i]);return r}function rn(r,e){Object.defineProperty(r,"toString",{value:e})}function hr(r){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var Le=function(){function r(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return r.prototype.indexOfGroup=function(e){for(var t=0,i=0;i<e;i++)t+=this.groupSizes[i];return t},r.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,a=s;e>=a;)if((a<<=1)<0)throw hr(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var c=s;c<a;c++)this.groupSizes[c]=0}for(var d=this.indexOfGroup(e+1),l=(c=0,t.length);c<l;c++)this.tag.insertRule(d,t[c])&&(this.groupSizes[e]++,d++)},r.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],i=this.indexOfGroup(e),s=i+t;this.groupSizes[e]=0;for(var a=i;a<s;a++)this.tag.deleteRule(i)}},r.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var i=this.groupSizes[e],s=this.indexOfGroup(e),a=s+i,c=s;c<a;c++)t+="".concat(this.tag.getRule(c)).concat($r);return t},r}(),Gr=new Map,qr=new Map,br=1,vr=function(r){if(Gr.has(r))return Gr.get(r);for(;qr.has(br);)br++;var e=br++;return Gr.set(r,e),qr.set(e,r),e},Je=function(r,e){br=e+1,Gr.set(r,e),qr.set(e,r)},De="style[".concat(rr,"][").concat(Pn,'="').concat(Cr,'"]'),Ke=new RegExp("^".concat(rr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),He=function(r,e,t){for(var i,s=t.split(","),a=0,c=s.length;a<c;a++)(i=s[a])&&r.registerName(e,i)},Xe=function(r,e){for(var t,i=((t=e.textContent)!==null&&t!==void 0?t:"").split($r),s=[],a=0,c=i.length;a<c;a++){var d=i[a].trim();if(d){var l=d.match(Ke);if(l){var f=0|parseInt(l[1],10),x=l[2];f!==0&&(Je(x,f),He(r,x,l[3]),r.getTag().insertRules(f,s)),s.length=0}else s.push(d)}}},fn=function(r){for(var e=document.querySelectorAll(De),t=0,i=e.length;t<i;t++){var s=e[t];s&&s.getAttribute(rr)!==Yn&&(Xe(r,s),s.parentNode&&s.parentNode.removeChild(s))}};function $e(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var On=function(r){var e=document.head,t=r||e,i=document.createElement("style"),s=function(d){var l=Array.from(d.querySelectorAll("style[".concat(rr,"]")));return l[l.length-1]}(t),a=s!==void 0?s.nextSibling:null;i.setAttribute(rr,Yn),i.setAttribute(Pn,Cr);var c=$e();return c&&i.setAttribute("nonce",c),t.insertBefore(i,a),i},_e=function(){function r(e){this.element=On(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var i=document.styleSheets,s=0,a=i.length;s<a;s++){var c=i[s];if(c.ownerNode===t)return c}throw hr(17)}(this.element),this.length=0}return r.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},r.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},r.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},r}(),rt=function(){function r(e){this.element=On(e),this.nodes=this.element.childNodes,this.length=0}return r.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var i=document.createTextNode(t);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},r.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},r.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},r}(),nt=function(){function r(e){this.rules=[],this.length=0}return r.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},r.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},r.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},r}(),jn=Ir,et={isServer:!Ir,useCSSOMInjection:!Ue},Zn=function(){function r(e,t,i){e===void 0&&(e=nr),t===void 0&&(t={});var s=this;this.options=z(z({},et),e),this.gs=t,this.names=new Map(i),this.server=!!e.isServer,!this.server&&Ir&&jn&&(jn=!1,fn(this)),rn(this,function(){return function(a){for(var c=a.getTag(),d=c.length,l="",f=function(j){var g=function(w){return qr.get(w)}(j);if(g===void 0)return"continue";var u=a.names.get(g),E=c.getGroup(j);if(u===void 0||!u.size||E.length===0)return"continue";var A="".concat(rr,".g").concat(j,'[id="').concat(g,'"]'),U="";u!==void 0&&u.forEach(function(w){w.length>0&&(U+="".concat(w,","))}),l+="".concat(E).concat(A,'{content:"').concat(U,'"}').concat($r)},x=0;x<d;x++)f(x);return l}(s)})}return r.registerId=function(e){return vr(e)},r.prototype.rehydrate=function(){!this.server&&Ir&&fn(this)},r.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new r(z(z({},this.options),e),this.gs,t&&this.names||void 0)},r.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},r.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var i=t.useCSSOMInjection,s=t.target;return t.isServer?new nt(s):i?new _e(s):new rt(s)}(this.options),new Le(e)));var e},r.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},r.prototype.registerName=function(e,t){if(vr(e),this.names.has(e))this.names.get(e).add(t);else{var i=new Set;i.add(t),this.names.set(e,i)}},r.prototype.insertRules=function(e,t,i){this.registerName(e,t),this.getTag().insertRules(vr(e),i)},r.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},r.prototype.clearRules=function(e){this.getTag().clearGroup(vr(e)),this.clearNames(e)},r.prototype.clearTag=function(){this.tag=void 0},r}(),tt=/&/g,it=/^\s*\/\/.*$/gm;function Ln(r,e){return r.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=Ln(t.children,e)),t})}function st(r){var e,t,i,s=nr,a=s.options,c=a===void 0?nr:a,d=s.plugins,l=d===void 0?Yr:d,f=function(g,u,E){return E.startsWith(t)&&E.endsWith(t)&&E.replaceAll(t,"").length>0?".".concat(e):g},x=l.slice();x.push(function(g){g.type===zr&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(tt,t).replace(i,f))}),c.prefix&&x.push(Re),x.push(we);var j=function(g,u,E,A){u===void 0&&(u=""),E===void 0&&(E=""),A===void 0&&(A="&"),e=A,t=u,i=new RegExp("\\".concat(t,"\\b"),"g");var U=g.replace(it,""),w=be(E||u?"".concat(E," ").concat(u," { ").concat(U," }"):U);c.namespace&&(w=Ln(w,c.namespace));var G=[];return wr(w,Ie(x.concat(qe(function(B){return G.push(B)})))),G};return j.hash=l.length?l.reduce(function(g,u){return u.name||hr(15),X(g,u.name)},Qn).toString():"",j}var at=new Zn,Dr=st(),Jn=dr.createContext({shouldForwardProp:void 0,styleSheet:at,stylis:Dr});Jn.Consumer;dr.createContext(void 0);function gn(){return cr.useContext(Jn)}var ot=function(){function r(e,t){var i=this;this.inject=function(s,a){a===void 0&&(a=Dr);var c=i.name+a.hash;s.hasNameForId(i.id,c)||s.insertRules(i.id,c,a(i.rules,c,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,rn(this,function(){throw hr(12,String(i.name))})}return r.prototype.getName=function(e){return e===void 0&&(e=Dr),this.name+e.hash},r}(),ct=function(r){return r>="A"&&r<="Z"};function vn(r){for(var e="",t=0;t<r.length;t++){var i=r[t];if(t===1&&i==="-"&&r[0]==="-")return r;ct(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var Dn=function(r){return r==null||r===!1||r===""},Kn=function(r){var e,t,i=[];for(var s in r){var a=r[s];r.hasOwnProperty(s)&&!Dn(a)&&(Array.isArray(a)&&a.isCss||er(a)?i.push("".concat(vn(s),":"),a,";"):pr(a)?i.push.apply(i,Ar(Ar(["".concat(s," {")],Kn(a),!1),["}"],!1)):i.push("".concat(vn(s),": ").concat((e=s,(t=a)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in ze||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return i};function L(r,e,t,i){if(Dn(r))return[];if(_r(r))return[".".concat(r.styledComponentId)];if(er(r)){if(!er(a=r)||a.prototype&&a.prototype.isReactComponent||!e)return[r];var s=r(e);return L(s,e,t,i)}var a;return r instanceof ot?t?(r.inject(t,i),[r.getName(i)]):[r]:pr(r)?Kn(r):Array.isArray(r)?Array.prototype.concat.apply(Yr,r.map(function(c){return L(c,e,t,i)})):[r.toString()]}function lt(r){for(var e=0;e<r.length;e+=1){var t=r[e];if(er(t)&&!_r(t))return!1}return!0}var dt=Wn(Cr),pt=function(){function r(e,t,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&lt(e),this.componentId=t,this.baseHash=X(dt,t),this.baseStyle=i,Zn.registerId(t)}return r.prototype.generateAndInjectStyles=function(e,t,i){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))s=O(s,this.staticRulesId);else{var a=xn(L(this.rules,e,t,i)),c=Lr(X(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,c)){var d=i(a,".".concat(c),void 0,this.componentId);t.insertRules(this.componentId,c,d)}s=O(s,c),this.staticRulesId=c}else{for(var l=X(this.baseHash,i.hash),f="",x=0;x<this.rules.length;x++){var j=this.rules[x];if(typeof j=="string")f+=j;else if(j){var g=xn(L(j,e,t,i));l=X(l,g+x),f+=g}}if(f){var u=Lr(l>>>0);t.hasNameForId(this.componentId,u)||t.insertRules(this.componentId,u,i(f,".".concat(u),void 0,this.componentId)),s=O(s,u)}}return s},r}(),Hn=dr.createContext(void 0);Hn.Consumer;var Tr={};function ht(r,e,t){var i=_r(r),s=r,a=!Fr(r),c=e.attrs,d=c===void 0?Yr:c,l=e.componentId,f=l===void 0?function(b,q){var v=typeof b!="string"?"sc":dn(b);Tr[v]=(Tr[v]||0)+1;var h="".concat(v,"-").concat(Pe(Cr+v+Tr[v]));return q?"".concat(q,"-").concat(h):h}(e.displayName,e.parentComponentId):l,x=e.displayName,j=x===void 0?function(b){return Fr(b)?"styled.".concat(b):"Styled(".concat(Me(b),")")}(r):x,g=e.displayName&&e.componentId?"".concat(dn(e.displayName),"-").concat(e.componentId):e.componentId||f,u=i&&s.attrs?s.attrs.concat(d).filter(Boolean):d,E=e.shouldForwardProp;if(i&&s.shouldForwardProp){var A=s.shouldForwardProp;if(e.shouldForwardProp){var U=e.shouldForwardProp;E=function(b,q){return A(b,q)&&U(b,q)}}else E=A}var w=new pt(t,g,i?s.componentStyle:void 0);function G(b,q){return function(v,h,D){var ur=v.attrs,_n=v.componentStyle,re=v.defaultProps,ne=v.foldedComponentIds,ee=v.styledComponentId,te=v.target,ie=dr.useContext(Hn),se=gn(),Pr=v.shouldForwardProp||se.shouldForwardProp,en=Se(h,ie,re)||nr,M=function(xr,sr,fr){for(var ar,k=z(z({},sr),{className:void 0,theme:fr}),Qr=0;Qr<xr.length;Qr+=1){var jr=er(ar=xr[Qr])?ar(k):ar;for(var F in jr)k[F]=F==="className"?O(k[F],jr[F]):F==="style"?z(z({},k[F]),jr[F]):jr[F]}return sr.className&&(k.className=O(k.className,sr.className)),k}(ur,h,en),mr=M.as||te,ir={};for(var V in M)M[V]===void 0||V[0]==="$"||V==="as"||V==="theme"&&M.theme===en||(V==="forwardedAs"?ir.as=M.forwardedAs:Pr&&!Pr(V,mr)||(ir[V]=M[V]));var tn=function(xr,sr){var fr=gn(),ar=xr.generateAndInjectStyles(sr,fr.styleSheet,fr.stylis);return ar}(_n,M),Mr=O(ne,ee);return tn&&(Mr+=" "+tn),M.className&&(Mr+=" "+M.className),ir[Fr(mr)&&!Mn.has(mr)?"class":"className"]=Mr,D&&(ir.ref=D),cr.createElement(mr,ir)}(B,b,q)}G.displayName=j;var B=dr.forwardRef(G);return B.attrs=u,B.componentStyle=w,B.displayName=j,B.shouldForwardProp=E,B.foldedComponentIds=i?O(s.foldedComponentIds,s.styledComponentId):"",B.styledComponentId=g,B.target=i?s.target:r,Object.defineProperty(B,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=i?function(q){for(var v=[],h=1;h<arguments.length;h++)v[h-1]=arguments[h];for(var D=0,ur=v;D<ur.length;D++)Jr(q,ur[D],!0);return q}({},s.defaultProps,b):b}}),rn(B,function(){return".".concat(B.styledComponentId)}),a&&kn(B,r,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),B}function Nn(r,e){for(var t=[r[0]],i=0,s=e.length;i<s;i+=1)t.push(e[i],r[i+1]);return t}var Bn=function(r){return Object.assign(r,{isCss:!0})};function ut(r){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(er(r)||pr(r))return Bn(L(Nn(Yr,Ar([r],e,!0))));var i=r;return e.length===0&&i.length===1&&typeof i[0]=="string"?L(i):Bn(L(Nn(i,e)))}function Kr(r,e,t){if(t===void 0&&(t=nr),!e)throw hr(1,e);var i=function(s){for(var a=[],c=1;c<arguments.length;c++)a[c-1]=arguments[c];return r(e,t,ut.apply(void 0,Ar([s],a,!1)))};return i.attrs=function(s){return Kr(r,e,z(z({},t),{attrs:Array.prototype.concat(t.attrs,s).filter(Boolean)}))},i.withConfig=function(s){return Kr(r,e,z(z({},t),s))},i}var Xn=function(r){return Kr(ht,r)},o=Xn;Mn.forEach(function(r){o[r]=Xn(r)});const mt=r=>n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:23.335,height:23.335,...r,children:n.jsxs("g",{"data-name":"Group 99",fill:"#000",children:[n.jsx("path",{"data-name":"Rectangle 58",d:"M21.213 0l2.121 2.121L2.121 23.335 0 21.213z"}),n.jsx("path",{"data-name":"Rectangle 59",d:"M23.334 21.213l-2.121 2.121L-.001 2.121 2.121 0z"})]})});function $n(r){return n.jsx("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"32px",height:"42px",viewBox:"0 0 232 242",enableBackground:"new 0 0 232 242",xmlSpace:"preserve",...r,children:n.jsx("image",{id:"image0",width:"232",height:"242",x:"0",y:"0",xlinkHref:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOgAAADyCAYAAABH5ImFAAAABGdBTUEAALGPC/xhBQAAACBjSFJN\r
        AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAA\r
        CXBIWXMAAA7EAAAOxAGVKw4bAAB1L0lEQVR42u2dd4AkR3X/P6+qumdmwyVd0ClHBBJJFjnYYINN\r
        Mtg/I8DgHxhsY2yTbYxNkmR+JBvjRMaAwWADIhsjohGYJEAECQmE0imeLocNM91dVe/3R/Vsut3Z\r
        29vd2727/Yrm7mZ6uqur+/V79cL3wQpWsIIVrGAFK1jBClawghWsYAWHB7LUAzic+OF736/rR0dZ\r
        HQI2BJwVVBUBROudVEAVEEQFay2CoqKA1v/FsekLEVQlikgAIuBFpFKlRGiL0EEZFWFYVYYQ3acq\r
        +0TYo2J2DZdh13GbNu9k/aodbDpuJ8cdt4vTThuqj7eCYxzHlIC++oL76wm79rJqeISWgC86ZJkb\r
        E1BVResZEU0CahRAUYkgtYCOSbOgagFzSONRDFEspQhlbhjSwIiBTeecxcOf9IRPn/m7F/65bDr1\r
        pqWYK1U1IhLnf6QVzAfHlID+4y/dT0+45Q42d0pcqGjmGUVZoELSkiQFKiqYKBgVLAIo0XS/T8KZ\r
        /hCi9p5GkV5TLBgcUaATS2JmkGaTDjCiga2+w72f9NivP+zlf/E0Oe8Bdx2ueVJVd8PPb3jo2fc4\r
        ++uH65wrmB7HlIC++4L760nXb+GkToELHjOmMWuNaCAKoEk4jQqEmL43UmvP8SkTnTx90wmjqs44\r
        HqnNaACbCUVVEhE8YBo5Iw3H7S5yV6vBQ3/vWa85/w1vev1im76qah7xuKd85vLPf+ylInL94bgv\r
        K5gZh2abHaEIIWCN1G8lQRByLDZAHg1ZSJtWATGCJxAtYASjilPBRbBRQC2KSVpWwSqYqAds3e+m\r
        24wCqjgRTFnRVGgqDBpHswj0D3U4caTiXu3Ilvd88G/++aRTrtNbblm7WPOjqvKaf/zYm3563R1P\r
        2AZ3LvX9WsExJqCgGE2bpV5fhoATg2IIURCTgckoVakMVE6oHARriEaIxhCsJVhDsAY/j62yQmEi\r
        3oEXQTFYYyFEnAprsibrKmHV7iFO6xSc1e6c+cb733+b/vjHd+te0ac//emTr7nm+vMOdgZuuOGG\r
        jTN995GvXvWcf3rXB/7iAQ/71WoTjC713VoBuKUewOGEUcVIxGrERUEUAh41Fm8dlQrO5nixVFSY\r
        3NHRClFwUTEqKIICUZQogohBD3VAouS5Y3hklGajQUMcsajIrMGKZaTokJmcfiOUZYeNJue+NLK3\r
        P/ZJ1+k1158n55197ZOe9KTbT77bBV/7x/d87IbH/+GFf3a2SDHT6VTVPeZ3nvpdVT1TRCYN+5u3\r
        th/+iF/7rX89fvMpXPCAh1w29fsVLA2OKQEVo6RIiNb/E6KxjDrLdgN7QgRniNbS9iHNjskQTWat\r
        kDStIqgkp1HQeMgCqhKJsSAfaJAFxyrbYNVAHzI8wmqEDEvwJZk1ZKpou8Nx7QrtF/721x51td5w\r
        12YR2b5f9cmr1p65470f/uhTdhf60HUNuXq6843Chu9e+bPTd7c5Cbit+/ltqmedfM7jv3HSGecx\r
        tGcn97zveZ9f6nu1goRjSkCViJeINxEjBjCUOIb7BviNPXelpWk5tIDnQxh3EgkgXHml4bjjLAMD\r
        Gd43MdUq0ONp6z22f/krv/7tz37mt+76/veyU4qS9Q6awVK1O7RchlQV61pNTDHCvfyI+eiTH/u9\r
        Whvu/Pg3fvrc5/zpS999zv1/86rXv+dzr//rP3z8a6Y6lD7/he+c2/Yttu3n1cBzAW4b1RPPvs8T\r
        rz3+7PvixbJv6HrOvecpP1jqe7WChGNKQJHkr03BPQNi8RLYF/3inW7cs9uV1ABUQAcYAnYANwLf\r
        Av5VVYWf/OSEL77sJS+96Yc/eunxEVZLCwmQV4pvdxh0hkYM3HTbllO3vf/9zwb+9Xceft57//m+\r
        933BDTfeda9/fs9HXvGpz37+wrtUH3a8yPbuAG7fvvtX1hx/Gu/7yOf+aJfqpQrxnIc+/bJVJ949\r
        2zUa6G/A2rUDrF/NLUt9q1aQcEw5iTSmSzY4jGYYLDYTSjpLPbQxiIjKfe97x2O+/LU/f9q/vP34\r
        m8Xesg+hU3gaNsPikCC0NGN1qbz/4oveqqpOROLH3vGmR+3ctZt81Ua27NWzT7zHb2573xd/+GTV\r
        FMv5+hXfe5r0r+Zt//5R9ihfeuSTX/yVorkp2101GFi3gaCe49YMshn2HTB3qnZU9cTrtmz77e7x\r
        VrD4OKYEFCyiJiUiiGAEjJFDd/IsMuTpT9/27He+455bXHN30T9AZS1qLCIGqkCz9GwufGPPe973\r
        aIDjB2X7B971T3+yc8dd2P41rDv1XJ7/6jdfes4T/+yTN6huvPq23WcX+SBFPshf/d0n+cWuNlVz\r
        DdIaZN/wCKPtgvPu9UsMwapdqqv2q97tOz/f8ox3f/SyLzzz+Zf40864/+1vf+s7blxxIB0+HFNv\r
        wnff9wI9Y8utbB4epRGEiNLOYEt/kyft2XXAXLzqtFP0hLKg1R6hz1pMUDQIViwaI845fPQ9BFwr\r
        a0z0IZaotkVkBJG9gm4HuV3R64Mx1zRPPPEnP37yk++4+OKLp02tu+n/vfnUn/zjP23ZvG8f/THQ\r
        QJEYGM1ztvYNcHWzufMv7rxps4h4VbW/+Uev3fmdm3evads+nAhVVVF4T9ZsESXDZpZKR1FjMK4f\r
        X0Qa1hFH9vHUx/0aJ29ax2c+92mu+/m1DPYN0NASv/cOPv6f7zn/keff7cdLfR+PJRxjAnp/PWPL\r
        LWweGqGhSgA61nBzX5Pf2rfzgLl4++bj9exOwdrREfLocVHJbQNfBlyW4b2fkw0iImOZRapKyncw\r
        jDRytjWaO2+W7LdftOPOb0479tPu/pYzh/e95ISg+D17MXmTYtUatrgmN607jj//6pc/y/GtpwLF\r
        7ZF/Pfk+T3/OqjPuSYiWMkAVQazFSsqQ8FTdUWEkxV77nWVk13acBhrNBs3M0N67kwFpt3/27X8/\r
        d63IlqW+h8caVgQ0s0lA9+w4YC7efeJJesa+YTZXnoavcDECgq9/m7mM4P2skyjIJOHsQhECkdI6\r
        hhsZ+1tNdjQb78wf8sDnP+XSSyd5YPXLX179ngsv3HtuCQPesE8abGkMcNPJZ/ATk7HmAQ/izAc+\r
        kNXr17H2xNP5xbYRXvvmf6E5uBavQjQZKGQoMXgiAkLKmAoe08iJviA3gSaRlio7bv45f/y0x971\r
        hlc969w1InuW+v4dizi2vLhTocllNNOKSqOQSY71ERcMDogotk5O8CHiTIb0ENEYk9WqSp2OPy6w\r
        otBwjSQ0HQ9hlLwqn3fHt654+PUf+tBDzv6939vfPY48+tH73nPe3T/evmnrk1dnGUYysr5+9ndK\r
        WL2aa3++ha/89GaGiXRsTse0GFi3iY5XQh3h0RhTLDgqxlqiCgSlv381I50RsJZSPaEcZf/WO/jA\r
        u//xR898yPEPEZHl40U7xnBMC6hAnS87vYCpgtGUQW8lQ9QjVgjRY/KcsgopPbBnNYs7QHOOa9NI\r
        5Uucy2nlORor8rJk/9D+8z7+yr/ZDjQn/u7cX/nVv23f/tEnMzJC05Rs6Ajn5xmryhbBZAw3V8Pg\r
        Gspo6MsbjFQVYhtoFFJYKZXMiVWCS+VuDsfI0Ag4MNbSzFq0R3fxgx9+6FvHWR4FFKoqK46hpcEx\r
        LaBQ14DOUHEi9ffOZfiqgxKIUYh5zp6ixLZadR7CzAJqjBk7frfapXtOFyP9CsF7goKJHpHImixj\r
        UwyNqcc6+7zzfvY9DFkjp+h06OsMc0LWpGMcO1sD3Dq8i45x+OYgViwuMwQREAENUJeaqzGksKwS\r
        NGCzDJMbqnKU0XaHvr5B7vegpz50Q59rn3Tceo4/bh1/fMm7uOA+99i7cXXrK2ccv+5v7n2PM69m\r
        BYuOY1pAFQgC3swgoJJMWi+KJ2KNo1BPR5XRwVWMiCKZScXcM8B7n1gbZHwdqqoYY1iFI+wbZmOr\r
        xfDoKH3NJh7F+sBAZ+SAY2340z8dLS9+E3vb+8icpWlBOm2a1Q5O3LiGH3/589zrWS+mCBVVWSBZ\r
        gygBjIAXDJYqgDUWiRHE4ytP3uqjbI8iRnCNQTrlMAPHn42PFTftK7h17w5+cN2tfOyT/7XGtXc+\r
        +VEPPf+tS33vjhUc0wIqKMakeOhM3ztnKEdHaRgQZ6iiYSjPeMQL/pQdVUGwSuxh/U10Dk0U0DzP\r
        2SCWK//5bQzv2YfBoJUnBKWvv0WjmD7nfWc+QNZnsRoha1LmA/jVa9iyf5Q7dg7xZ89/IS9647+Q\r
        D65htFLIBIxBJOKM4L0iYojE5CTKLT5WuMwhKlSdgHN9VLGNEbBZwMXI9q138bz/e+G/vP4Vv/+a\r
        tSJ7l/reHSs4pgT0gLUgYLwnD9m0+wsRDQVOAhbwoSJkjm2ibXn9JX0LMaavbdys/WLJRNAQaZHj\r
        C2j1HXhrbvnGD8/ZedyJtPOKMmbsFce2RpM9/YPsaPbxwN97Cfsbq2ms3kTHW6zLMUFx1lLoKGqU\r
        TMBaw2hRYQb60MqDgi8LsryFy/uIZZuGKNreix/ZGn/14b/0Zx//0j9/QETa73jls5f6Nh5TOMYy\r
        iabBREaFqV/FgGhESFtKfzeUebZgL7bCunEeJLpl5Afib179N/d689//3bVbdm5jvwgjWYv2wDp2\r
        tga5yzXZQ47pW0ujNYjBYJyjqipUlbIoxtbKPkZGR4bJBgeIZYE4i8ZAo69FVbSJMdDMc2Knw+N/\r
        7RFc881P3O0T//Cqd4pIe6lv1bGIY1pAo0BloLTTf2805borkUhIa0cF1No5najnGFKNaRAhIARR\r
        glGqKevi17z2NVe/4FlP++g6hllX7WZw/1YG99zBpmIvJ2mb1SO7GCz2klf7GB3ajkqB7TNEVxGN\r
        J88zQlSCM5j+JIziLEQF64jBk+UZVirK9j76Msdfv/jJNA7xulawMDimBRQSSVjszes1VgWTCP40\r
        xScW7PwRNRGVtJaNJhIlEqdxXB3f1/jcCZmyvtrHPfqUu5k2Zxa7OWVkB5vLPbzppc/lSb98Ab9y\r
        v3uwqgUa2qgWIJEYI9F7xBmiBlBFfER9wAAaA6IeZwLOJmrRCx74ZH509R1fVdV8qe/TsYpjag06\r
        FQLj5GDTIEhi7VPMWIE2KKILx0YZxROlQkmmrorUzIIH3ppsVG/eECJrh/aQ791Ly7VY2xrg1vZu\r
        3Jo1POER933wE556/yt2QP/GBz57qLHxJKLJEGspOz65pUMJGrCSgxqIAUNEfYmxQjnapr+vSVF0\r
        WHfaGTz1T/7y1Iv+/I//R1V/ZYWr9/DjmBZQtMvMN72ARhGiJq6gLtmJJKfogqFLYJaYGnRsNWyn\r
        WRbbIuzKq5LjrJL7EsrAcDGKX7Wau4Yq2JRdAZi73+e33n/cpjOoEKqqg/pA0/QRxFDFDhjBWUcx\r
        3IbcoTHgnKNhobPjTkZGlBg65AMtbCPn//3d3z90661XfVJVf3uFK/fw4pgWUB0Tu+klLoigxoIm\r
        ATUSUY0okYXKrjExR2IDNZaIIqRyuCwceOi8YYdjDJTtDgOSIyEizrC76DC4ZjVsHb77hof85gfc\r
        meff39s1aMcT9u9k8wkn0I7CaIQqRrApCypr9YFEVANlFSl2bee/P/FORnfu4ZofXcHOHXdx547t\r
        bLnxF7z/Ax964hX/+/X3q+rvr2QVHT4cUwKqE7y1orNXCohYIBGDiUY01lUoLKASUYNoegkkrgep\r
        We0P3HUoDx2D0DAZLhjawVO0moz2DTA6uJHHPf5p12447Sz2NzKGd29HQsUbX/MXPOZxd+Pc859L\r
        /wmnk7sG3vsURvElEYO1DmMcdmCA177mjXzyfX/Vf+H5jz2A1e8b114xCxH3ChYax5STSI0QiRgB\r
        UU2cYChmhjWlxFq3aiRqCrEk+3bhHlKty7/QgEWRGDEi074CfLtdZWrJo0OCheYa7mgMcMPARq40\r
        x3HXqhPZM7Kf9rbr2hf96W//4bXfe9e6337C3dZ+4bKf0rd2kBgjeTD0hYgZvgv230EjVLgqYquK\r
        ps35ydXXcf3N/qVLfa9WkHBMCSikbJ5InKBNe2QBaTcmmZopsQjao9uUqWtoS51MMZ1neW1ntUeV\r
        IELbCvuynL2rN3Kn7aPd7OP2rbfz0uc98/W7fvDpVS9/5qPee6rIni0w/PGPfxRrwBJwfoTh237B\r
        O/72VTe+8RXPv2J46/XYYi8tGwhVQWtgHS9/1d+8drvqwJLeqBUAx5yAypg8BqNUEiaZvUs6Mp1s\r
        dk/rWA558AZGc2VPS9nWsNxcOqpskLjtRrZ/77/f+7LnPP5VIjLGgnYerL/qmp/jjKHPedp7buTl\r
        L/2/P3nwAzaet/dx5z7ku5d94E/6wlbKka0Yp6hr8YNrbuT2Xf7lSz0nKzjGBFS6dZFAnNDJ7JBw\r
        ySULok67DZvS+MY/m9bo7t8RFcUb6DgINrDaCRu05B6DBvbd+rKpDpyvfOvG34CMhoPOvjv59Yfd\r
        8+sX/sFv3P9skeJikfjAk+w7r/zGv536qIfe87bhXbfgjGf1mnW86KWvfNWKFl16HFMCmtoIMtYA\r
        SeYjoRddtDAjMowl23eTIVLyxDRj27NHu60SjcJg1eZuI3dyt303s35o25Cceuok1gNVlQ988GOv\r
        7e9bQ9XZw6Y18r+f/Ye/+rX7iVQT9ztB5NZPveH5Z7zvLa/8h923Xk2/i/zkxz/nzrv4s8W7Fys4\r
        GBx7AqqaWP2o2fGWmvWlPv1BvSu23k1FIYvQ9MqqsmL96B5W7buLgVgc0Ed0L5zyla99/eRG7ojt\r
        3fF/Pvee35gp2UBE/DN/+Z4v3fKz/77PumbYm6M8/8+e/3pVPaY8/csNx5SAqgakFlDBpvDGUgvo\r
        1CXwFHN3Es7doUYhD8pgAatLpVF6+psNPPHuqjp2P1VVPnf599+5Zv1qbr3151z5rU9effJBJLyf\r
        LHLVjz73zo3PfcZvXfK9b3zF/PyW7fdf2gk6tnFQAqqqoqp2pu1j6U8zcbtYLzb178a2pb7YsS7Z\r
        ki49adBDxaULcj0GsDAp7tk1YQ/AtRcqgA1KMyhNr2QKVVXirW9w58/+RPVi8zX9mrsOf8mHv/KZ\r
        x+wy27ji51+icNV9fqG7/uZObZ9ym97Wqu/ZtNcgItXrX/4HF1/x5S+sffYzn7F3UW7GCg4Ksz5k\r
        T3/7n6zdsn/nHWUmLW9ANdZUIJHMZgSvs3Dy9DqFFqKUKhQKJdCOQkdEOqgMG2Ukt3ZfZ7i97173\r
        uOfuVY3WXaccf8Jd9zn33FtPbp166zZ+uuOR8siD7tvw9vPvo2fccgcnDnfIqzSuwilb+ps8ce+B\r
        tJvv3nSS3n2kzfp2h0wFL0o7F67pa/J7O3e4hchNvezEk/XUu3bgYqK/DKqM5hk7Go5f3z95THrx\r
        xeYzb31HOGNohP7KYMQwKsqWAeFHJ7WIv/5AfrDKsGNwNTGu4oorvs/m807llFM30NlzJ5kDnGNk\r
        tKCVDUCEqBWiSmYseI8Jns3Zej71F++e0wtIVQ3//c3VQz//8ab9t962ee+dt2/a8otfHK8SjkPj\r
        +mgYRHU10G/QARNpItIE8qCaKeKMiCPGzBgxUaMZboq5bdCYHWes58ZTVts7+yyFYBDBEJMlZBxl\r
        WZFlqabXe4+1NoXTYgSRKEJQ7Qa7xQsaEQIqHtSDVECpaEl6DkuQUUE7qto2xgxH1RExMiQw7L3f\r
        l7l879rB1Xs39Q3sOf9u5+7evPmEvaefcMa+B3LWyELmLM+6vtgv/sk3l9taIzERTRkjidUuBkRT\r
        T81eC6heAirQ0BgbwOCYc2Tsu5RNY0uwItxx7TcxPuK84j/cwSo8+N4X8N97vvnec9ac9Yqz5Pjt\r
        zAIdd8PUebXz0KCXX74gGjTRedUvOZ0l5HPRRapve3udsxvT7gYafU2C8Wwb2c6tfZY7ihGG990F\r
        JzZpD45wza7tZFRoGWh3Ii5vEcohDIIVjyGSBYeESKaCO8giM1WV8hOfOOfyT33qZW8+5dTn9HU8\r
        G41joAo0vWcwVFhiqqap626Ndi0ERUiUMioGNZYQFSPp5W+tITaVfFOTztqSu9YPc3PmaIugzmJi\r
        SJlddcc5G+wYg6JVS/ChSzWTumSNY84VdBJl7NjGGEII4KFVbaexTfjKz75P6JRIEbng7Hvzt//7\r
        /iv+z8Me+4oz2XT5fHOXZxVQbdgHlQ6q3BKdQepAeSCmwL2b3zJ2opU1KeRQxwSbeYPhkTYZlmZ/\r
        TukDZtUAlQ984/Zr+NqbXvYH62j9wRd3XXFxvm70dTNpVFWVd15wXwwRE9Na1Bh36CvQRzxiXtc9\r
        6ZpJLw+RiV7cmfdP1akCKD4EfEgiHgl4IppHtFGxbsNq2rQJBoqYaFY0BioLNnOE4AlaQYxUmjhy\r
        s2gpzOx+If2vT97n/Wee9YkNnfLMfGSEX1IhE0GqUYyP5JJoSgkB030pajfI1f2z672OqEmCKkbo\r
        lCUmM2QG+mw/mRHUWoKzRGuJzlJpEhQRgzGWSpUYFWstRQwEAlmWzUgId9D3RxMtToyJrsZaARwh\r
        BMroyRqWQKQ10CK3jq9vu5rvXnbtA9/xpf/86lMe9aSbf6K3//J95KTbD/X8s96JEMM50YDNM6JJ\r
        JoQxoGIRYwizlF7NNkEyhRBo4t4C7C9HyZqOgGFf1UGJOGdp9TcZGRkl62+wr4Jnv+4lFz/0zF96\r
        1p26/wEnyKqd058ttayXCWnyS+0k6gqjHWN26DYInvEXaW7qoVsjxOjBZGQNhxpPtIFsjaUjbbwG\r
        smZOp6woJKYu4b4ibzrKUJJlgkRB1YAYYjDEHuXoqpp95ekXvv/fnvNHzzi1UlYNt+mPiSU/Kog1\r
        6aI0IFHJjam1ppk0/lS+pxBTGVwMYFx6QzkMgqHfCjYEBEVFE8EbitdULxtrbmFbL9i7qZzYxFwY\r
        7OxGyWyIUTFGEWtSTS0xEcBZiyp0IpgspzRC4Qvcpj7KyrO9M8o7vvCh0//7q5fd9oV9P3rGY1af\r
        /x+Hcv5Z1Z/GeDzBo94TvScEnyZZIkpILcN6bBOFYdotxrGNGFOtZb1FjUAEJ5TqcX0N3EAT72Ak\r
        FGjLog3DPlsweko/l931k9PPf8kTtn1dbzx72msJ6UEx2EQ8HQ+9+S5XXrkgkh1rAZ06jmnHJXWq\r
        hY47kjQq1jrUCIUvEYHSd+iYgo7pIBmMFiNkLYOXioiStVpU9b4B8JpMzUgA8SjVtGPVa645/m3H\r
        H7+l/YWvPuOMjmdwtMNqY+lzjoYImUCmitOAi56mEST4mjom0ceoQlDwUQiaaveyLEuvpRCJVUmO\r
        YEJIlCzd3GkjaZOUEi1WMM4kp18MY8+TxoA1Qp45fFWiMcxrM8KkZ1ljSMz8tRyYzKUXhwaq6Kl8\r
        B7UBbSluU5O7sv38/muf/+FLvvHO1x+Ko3RWDeqcXS2mXr+J4HKLWMGXycjKxPV0Es2GA36pXTM3\r
        rRhto0lRlmgIVETEGCIBl+dUZUVRVOR9LfarJ1vfIKzKzG8//3d/caX+4twL5G4/m3yq8Q7ZM7P/\r
        HCRarQXLJDrgs97L+rSur92+kUAZKrxmVDFiXQPjBDWKa1hCUWFEUR+SZjIWKo9VQazDk2g5YwCr\r
        imrATFNKo1//9r3e8ujH/Pi8jjebCk+OYkJEgifUd8sag4gQqOlKox9nsO+KUF0IoCIgkcoXlFXA\r
        iMMZgwuAKjEGxBiqUFGGihADIQhBDF7GK2f7bE4oK6L32FpbU3owBhuUbJ7Fu4LUpnTNcVwzM6bP\r
        lSoUWGsJMWBzS1SPjx6bOYaqDo3+jP5Gi7d9+oN/vWfv/gFVfdFcyvVmN3E19gdqk8LWWS/q0VjR\r
        l7cIQ+WMjATQ28Ttrre6v+6uO013+kWpQqDRyIkCRbsg728BUHQ6GOcwjRaBZLYFIiMusPrU1Tz2\r
        j5967Xf1+pMfJGcn+/9SRMVQIQSxZLVj5pArG8+d130fg1HqJPnJufjTjUtAP0Vag6oIQSKmYSmp\r
        iNLEZU3KKiDSwIRI6FRYl2ZaR0F8RKSDD4FGs5/SR6TliBrrtozjbSom3afrrz/3bQ/51avuE5TW\r
        aIWNEQ1tWi4HBGMsToR2KPExYF0DyTM63hMN42wUMr7urNuPI5kBhVajyehIh5ZxaPTEzCSfRyPD\r
        ZA7rHNY6rLGoM0QTkKAU+4bpdw1CUCBgrU1NrQi0rCWU5bzuj6qiIb0sxKaudkLtLIqePDeEkDLC\r
        pNGk9DGZ14BxjiIAJjC4eRWf+O4XX1BV1SjwVwd7/lkFNKKu68AA0Nqb1cyanLx6E/e5291o+EPn\r
        0ArdziHdRPGJCeOAcZagkf0jQ9y1cwc//cXPWLW6H1pNPIbCCWVIzW29LykkMOQix525gac8/5lX\r
        36w3bz5dTu9wIWLewHgcVEytiQ7RyXZDvoA1Z5P+AGZeGXfZ+boaJGjA2uTsci6jrEaI2iDLcmIo\r
        kRixReRhd38wa/NBiAEy4fo7b+X67bcz0u0dYyQ5aZgcNtNbbln7uoc87OoHhcj6fSO0XAYx4mxO\r
        FQKa5Yyq0G7ktF0fI6rYvj6OO34Tg2vXUMYwxRrQMQdR977bEGli2HnVNWinxHlBXE6n6iSisxjx\r
        3hMCBJQQDDEGXKnc+/izuMfmM3Di0gu8keiTvK+wE7jddGxeuy8JmfCFTPpnd1wK9dozYGtNnHww\r
        qYa2ip7bt93BtTdcR1tLZKDC9WcEB6WvEGOJAiF37B3t0N/v+MR3v/jyf7/ti1f/35N/48MH82jM\r
        KqDGSCYAPmBwiMmIhccGePRDH85Lz3/WW9eQv6dDcScMjm5O7d1rjsr68he4Av9V33jfho99/lM3\r
        b5PRflmbEYySN2wK0eSOkU4JBlZtaKz5i3e84YPAU2CLk1ggsQL1iLV0fDUrQd/EMNHiFCsnh0MM\r
        iciL7ppnhtWx1dqMoza1giETh0WIVUU+mKOqVOpBwAVDts/zgkc/484nNM4/BTDXs3ffJ667rPW3\r
        //k2XJ5R4lFniVHTOr0+l+rF5r8e9eyv3r9TmtX7RhhUwflIGSokt4wSaTcabMtzbmo47v3Ex3/6\r
        CS9/+UUMDNzEhg1tIPa69/WazHDTTQOMdp75zSc8/p9P2bOfVe2AVorJckQtThxGU7jNGJLZIUJe\r
        CY+7+8N43UOet2ievgnrxi43jrkdXD/kEQaGGNmQk53zgzt++IT3fPL9T//unT811SpD1rJUQKU2\r
        qSALHeOxxxle9JbXfOhq3fbde8mmG2c7/0F4cZPXylqLGoMPStPl5EFpeMvpDLz4cJNJveKXn7Pj\r
        et16+oe//vmb3/Kp9/Yfd8oaRjojiE3z2OhrUXQ87T64/Offu/B/7rjsHPa7Hc4JxApnhaqoaDZb\r
        DIdDNIGcW0T37wRTcArS213GvpcuA8MBv66/j5B5YaCwfydNCUDYpqNvbRXystzDcOUxAzm+9GQq\r
        iFdsd04uf8gf+Wvedf6JQ8MMAkRPgQdxdIxhr2uybaCftQ95cHzxG177IDnnnO/zrncd9FXWwhuA\r
        far61j1O/vl4m9bJVoXcSpLFMa0b67dHkhUXhGx4ccsFJ7xgun8GkhJqA/uAO4AfAx9V1Wd9Ysc3\r
        7vPSv3/VR3ePjJ6dHzeYwkICfYP9lJ0R1BrMuiavfsdrv/0D1ZOmFi5MxawraBEBayiCp4oh0URq\r
        oN0epfQFtzDyrd3a+c1t2jlzr+paVW2qqpuYF7oYOFs27/jjX3nK6e9/zVtG/K27aUSHFYeWkWL/\r
        KMYYvIXBUzbxir993X8TR5/tJZI3M4IvUY0Unbl11Zu0nl5UAV04dFtNhKg/mfDxd9Ln0HSNZBGJ\r
        QUIkD7AmgO64dvPb/+Iv39lXVFhf071Yh7eOopkx5HJ29K/iYX/98vaj3vW2k+Scc74/37E2RbAh\r
        YnzA+oB2OlgNGDyYQJSAkryptuYonpejb4EhIvHJG3/lR29+4zfucYrb8CGz39MQg/cFw51hgiRO\r
        KJ/Bd2/64cZRrnvJbMc8mDUo2OS5jaK1l05p9jfZG0e5urz+ga3CfnZil7BuD5Iv7f0xQAGyHdW9\r
        wH5VhkR0CGQEiR0kjhqVjqhtWxhVZcSgQ1i71xN3OnRPjOx4xJr7Dk3V1JtlcMf1uvX0f3/j225+\r
        2iuf1283tGiu6md/SPQkhZbsLobJY+fMSjtv9pnQqQqsNWTR4LIGVaxmm4KjAy5uG7+n3AFgRKg6\r
        FbY/Bd5za8iNsCoK7Nn9NbnjdhpVRSvPkSLgQ4S+jL2i3GUM5/6f3x7Z/NRnnSEbBmfN4poOyXy8\r
        1HDdCX18+39/b13laVQeq0rmLHk3/NLdpljLIgbvlx8T6FNEwsf0Y7//8le85z67hot79a3KKWOF\r
        WEMoPZVVOgORf/rQ29+0XfXtG0WGZ7xts06iGMqqQrNGne0BJZFKPZ/+9pf43Fcuw/nJbfwmNgwy\r
        xjSAk+ttCiJBK8TQLYysEwnG6UUiEauGPtfi/q+98LOveu6fv/qJGx94ddf0OFs277het57+gic/\r
        ++Z3f/4j/aUtaLRyOqGi0cyJWpKt6eOtH/5X1mxei79eiLUbvyqK5EWcbQ50moSGlFKy7NFdN2dl\r
        NjQ2dMye+ubSzFt4IpiUGVb5kjV9Gdf/12fO2RQqXCypvKGVUvrp+MjoYIvW/e43cu5fvPB0OX5w\r
        x9Rz/vw5zxn86sc/c/eNrdaDqsrfV4XzRXQ9oushtkRT+tzH1m3Ee09/npFVBeuKkjXGktdtE6ux\r
        FEFB1GLU1QkPkihRBfL8QE7tM571AJXN/YyYiiS+MpZKOU5hU4eyJhCTd2PSguIigEY1QoxaoZTG\r
        mEKVIfW6OzP2jj7JbmA0XvnMJz79Gxc/8o8mZQs9RZ4SvqM3P/HRL37KzXlzFd4qUQPGCnkjR3L4\r
        yg8uZ8/vbf9t4N9nun+za9CYvHrWGKpuep9Rmqv7aY92yFZLbScf6Ezp1XszTZOAyVLcD0lJBLEO\r
        wkvyVIpxBB8Y8h1GdN8Tn/umlz/x0/d++AdV9dndPMezZfOOH+rW0z/1X/91885Y9Y+0OzQG+qnK\r
        AucswUVu3H4LZ4RhVhvAOpoNS1XO/vadcfzGHBECOnZP8mrMnjfEMcY+HyJeAjgIvsKgnH3ySXz+\r
        //0b5xUd+mJK4fMaiXnOcO7Zahl51lv/5XQ5++xJwnnjW//+bl960z/+642f++LDz+1UHBcN3le1\r
        FgykfHWZ5LUXYwmdoo6pC6YoKWIkuJwqChGDYmvGpnqrb4mgKS92CjqtiD3OsTcU2Dwf80vLmIAC\r
        dXZSnMBGrLXQA9hEGGdIrTkaiGmImEGU9dGH0x1c4FVprcp575f+gwe84kkfvOJ1n372xNzbB8vp\r
        W1705b//4ge+8cnfcGsN3hmqEGijGDytVU1+fNM1v0EPAZ1VfVgEp5ZYeMRHHAI+0O60iZJ6iJQG\r
        SgOVFSork/7tnZlxC5mjNDmVbVLaBqXLqFxGZS2lEbw1eCdUuaHTMuxtesKJ/Xzumm8+83kfueS5\r
        E8f5S7J5x/Me++zT2d+mzzlCWZHZDKLSrtrsj6PcsusOvDEUVaAsy7GmtoeEI0xAgx93RuS0Cq0p\r
        X6KAySxGkoBkAj/8zrcZVGWNwio1SFURLOy2ga39GQ996u8eIJx3/cObX/ClV7/uurNG/cPXD3c4\r
        Pm/B8AgDZWCw9AwWnsEyMlBCXym0fKTpA64saIRIU4UGDoPFSI6zjdSdHEfEEsWiKYcPi8GpYlTR\r
        adagttWkTcT0tyitobRSb5ai3trO0HGGKrP4zBFcRnBubPOZwztHAZRiKI2lMJZCDMFllNYwapWd\r
        jDK8Bm7rG37miS94yD9NHcuzH/X0Px8sHLZMIzV5hmaWIkZMq8Xl3/7f03o+ZrPdWIvF4cglo2Ey\r
        qCKZycjE4qwjKmOZIXViHkGVoDr275m2ULO2BzWpokFsbbqkN5nXiI8h9SyxEHLYZ9rE9Rmf/f4X\r
        3/Y1/dokC+CFv/yUHcWe/TQQfJE8kSLJpChjB82FrNnAOJeylNw8eiAdQQSxqgpVPlZEENjru5+7\r
        zBKDR2OkaQ2NsiIbatPnldwHKD2ZSQnhbSfszCxn/8u/TBJOvfLKe/zXG9/yz+cEYe3wKM12G9Pp\r
        0O8ynEZcjOlP1bFchS73b4bFRsEERevUyyhKIPWqGW+5IWMhy26mWbdD+FSE6FMTY1GCKNGkRs3B\r
        aP1n2qIRKlV8vYWYnsmg6VkOgHVZel7EEOpnPRgIzlBlim8Jo7lnuD8SNzSf/4y3v/RBE8eyms6N\r
        9zvz3phKCVWFM0IIEdfqR23GT352zfG97t2sAurUIl4QD+LBeoEikqtDSiUjw6rDRDu2WXUHfDbd\r
        ZqOQYVL+ZtR0E1FMHUa1RsCnEqgGoFWBySPDZgjd6Mxf/b+/P33qeO915j2QItDMGpRlVR8pYkSR\r
        GAjB40NArMGH2U3cqeb6mNm+d++CCWi3A/fEv8+lCqNbCtUd73S/HfbtsZ0q1niR1Lg4+BS2FqNo\r
        u83JWR9m2x7saInDgTEUMYzl7crqtQcc+yOvfPUrTgqR1aOjNGJFwwkaK2IMqLVURigMlJmltIaO\r
        EUpnKcWiZBjJAUOIMTWPckolJdGm+hzrEhuGryqotb43EK1M24bDieJsKmYzRrGWlF8sqUEUocKZ\r
        VP+TWcGJ4BLHBg7BkYrojSoSAjaC+oBFalpURXKhooLMUEmk0BLfUL55/RX/OnEsp3Fa8bD7PhgX\r
        DU2XU42M4oKChxBg3/Dwxl73dtY1aFYZBmITWwaqEBNxsyoZjsqnYoT5VIRIaqNQe4jTkbqMeypg\r
        XYOqCpR4XO7wGslajsIHfnbbzRcA10883hknn8YvrtuKaZlUWxiS4rCack27lRE6lh96iDjCTNyB\r
        YmhMQD1b6/Sh9BCael6cKn1VpK+KZMEgasbK4JKAKseddCpcc92kY+/5xQ2/vnG4TT8GX5XgLIoS\r
        MsdQVCpnwFiMs1SaERGsAULEhjrxQoRoAsEk4fNiGc6FEauMakSMTS0UrSWEEiQiYqftjt7N+VWp\r
        OwHU6+D+LCO0CzKxWAyV93XHOjD14jOY9IKUrrYPEWOV3GQQhBgiXjwej8sslfdj3ckLH7ENPe+f\r
        r/9844VnP66AFEe9bNsP7gyj5QmszmnlOUUIgCF3OVF0sNd9m1VAh+/cg91f0nARKxGtWRWM8ZgY\r
        McZwqOs4o/UAohJNNwUvmbcVEKzQkZJsVR+uf4D9nSFMM6PwJdF7+vPGvYCPTDzm8cefQLhWU8K2\r
        KFHquFkwuGDGHsbxjN9DlLMjTEA3nrZxTEALikh95TammCJ1dYxTxSpEFaKm+UJjXXGjnHLW2fDF\r
        L006dnvv8Hprc6JXMAaxQlUnNexuNWlbg2oFRqhIDamssSnvQFLShZCWOdGYVB0ilj0Nob16FbtD\r
        pKNCjBB9Yt43JllgNh6oQoNYAi45gDQgKjhV2N+hf3/EdUos9VObZSgGE9OzkOQ01h5fRYPinFLF\r
        irKqyDKLtoRh7wn9Dq+akhE0OTX7Wjm3/eKna4G7uuM5dePJ18TR8gQbcso6n91qwGhMUd0efX5m\r
        FdB/eNUb2etHMLnB10TPQeP4EiweeiaHUSUDiLU73XRrIYVgoGOUISLPu/jP2V+0sasbKVHCVzT6\r
        muBGpklZNyAWHwNqdSyp0tBtMzielTn5z7kOfuEEdL5FxQeDNu2xk5zGaRG+ky6jrqkc3yJSO19U\r
        x1keVECtYd3GTQccuy/LTB4M0qlwJiXfmyxjtwYe/aq/hlaDoGXtyzXEKGTiUulZ7dIVrZkXTEj9\r
        zMWxv8neO1eHXbf96GtnjrCfaFwyaaNHfSBWqe/cAfNZszUK4IxDNGCD0t6+j/1vvmpB7tuDPvBM\r
        vequGzENm0RAhSipBrXok/VMEFALWwQw1lKGEnEWUSGoJ0pvEZxVQO/VOHlJNcV39dabWqN6um5s\r
        sT8UqERsbiFW+KJz4tT9R4vOmIllTEpd66aWT2Jr6DoqDnVgR5gG5cpJ/xoT1tBdSiB1jm93CdAl\r
        iFECkQIhZg47TdzRhoDxAVenHbZLD60me63CEx//WtYOftwaUzBgCjfiK3xW0WxWVJXPqiqweSRw\r
        5b7IBReM5XBP1Ch/8K4X6PC2n1EaQ+hGNjU1HZ6udlVUMTFiA8SqIsMgZcSOzlTpOnccn63j+nAb\r
        FUpUyGyONR4fO+SuuX7ivhF/p+SW4ECjYJzFx4h3QhyPUR6aBl1qtDBr+8TRCZG8aVCbiq7LosOq\r
        VvPEoSn7x5jMEyNS556Ph6ajjLccHJuTQ1VeC+TFnao9F8s5PHTB0MQTJVHsekRrT4vp6qM6Xjke\r
        I9RU02kMVTyQUUZsqkry0ZMZsMbRDpGy2YRW/2dk08lXzWfs28qSyhhUUvWOsYbMGKwN09bNam0F\r
        SIzkzpEhmAgey9ySO2eGHy4wMVlmxJgYJOqaaXW6buK+BnZQx2wzl/wnULNQAJf2MOOWPS+uIGtS\r
        AD1CSL0xVcHmDTqVXz11fyuCiRGnJrkd6yLtbpZIFBljlp8XjjAN+ggecYCApr/UBWZ1p/EuqdfE\r
        rDBjElVMWpodWJ4XckORBQrjU+aXsVAnGJBl87bfo3oMAWcU51K38zJGorHEaU1cahMpEqioYkE0\r
        Hh+KBZvPvJmBTZ5gIRJ9CTEgBqoQJgloRPaYkAjvTIov1plzSYFsOFIFVFWlm6LVyHIEwbkM71Ne\r
        qGs0DrC3xh4oBA0RtFvJP7F/9QJgdHSp5m6GAtapFTATq2rh0mn3r7Uo3WQ4qQu3k3WhmtK6BEna\r
        NepYXeREFFVJGSqyZo4PgaiRvNHER12QBba1FmuFsuxQVWVau8ZuksKB45lU+F5rXuolz0Kh02mn\r
        LCmBzLnEn2dNou0JOklxFKHa76wlt45QpcIEZ13NzKAMHqkCegmXSFroW8rSJ8+iWNS6VAwbY3bg\r
        FUmKp5HyHtO9qWOLJM4jQ8rHTUXKvcfQjUt2t/HzLKyTaGL8cmJcdBoccM/MBKFRjVPoRLvF9pNE\r
        VMfyTzWmjKKYKlao0+rEppTOUFe9GFK/1Ol8jbk4cjVQ+jpFEzpVkX60AAIqaqiCT8wKNksWlDGJ\r
        J2iaG5hYDxIleIgCYpPHegGXD5nNcMZCFHyINWGZYlSwOllAG9YMVzFShsTZiyoh+sS1RKB1pAro\r
        uVwk3X4qk6jG4njV+4GQcRNnvD5+/N9d6sf53qtll0k0kwatcel0+0/Oyhn/nYx/NmH6ZupKPtE8\r
        Hjva2HEXwmyZSNLZHV/3b9MGQutPu/m7457qhcM405tOGF+aIzupK1zEjU7gkJhyD5T8SBXQC5Pj\r
        PfEgmdp8rb2NJmgdu1oiLDsB7Y0LL7xwaSZr/sS0R9Q8A4hq38R/G3r3xHFHqoDCGLtH/VYe16MG\r
        kvdsyUZ2ZDmJJuISLlmwY81qi8zTSbSEr+BDRkT7J3/ie3qndrF1Rjlc9gI6/d1PGSILbLPMDUeY\r
        Bp2Ii7jo8E1cdYwUxE+AiPRN/sT25NXJMEemBt3BDjdWYjshoyVVNMjCemXnCjNPwtWjBbNZsIcj\r
        TWqZQdDmxH8X+J5vqUbKTJ4Wy/ohc9T1YDq5oiTWFfW6lDJyBGvQw4pjUEBVJzdoslQ9O/DZHhp0\r
        WWcSjeKmjG9C6x3pZgQtEYpiWb/clg3y/NgTUJikQR15TwEdZv+RqUHXpO4bqcOUGBqNZko+EIMz\r
        7qAb43RjjF2lNxfrtPvbAxTBArV+6CZWTBzfYtSDLjamzvGYgbHIg5nu8N3eoFPjyodrXgSZlEDT\r
        oepZeGyP1DVogckhCVRZVVRVhViLs5ZQBRoun+8pDh1ledjnbjl0KZ8z5tl64ciETnowW6kBxIxY\r
        y5ojU0AtJgukRrtZlqfsnxiQGIlVhS8WLrdyzphX99/JOKqXacegicuUpeMqVvUU0FFGjkwT1yMN\r
        g6NdFin1jC6VZ2ovt6ShyKVwEl1yycKY1YdzzPN8+1zCwlzz4YQwucizYHPPgH0Hc2QKaEDyCo/L\r
        LYjifYmxQtBAGUt0KeOgplqQuZvT83vRRUt3vYflAqe96KW+grlf8hQN6rmh5xwYZHl5ceu1lFwO\r
        5iRusP2cZdvsyVq4LOAaimmWjLZ2se93hiioski7GiUfzKk0rUVbzqGylEHwxuF/s1966cKcU0T5\r
        yYcOz5h1fibuRcCTDs9IF/KiJ8nVWZzVU4MOLLaAqqpcdsNl+Q6fD/z05mvX3L711o2jLhxfxnCS\r
        13AiyCkCJyGcZCInPf69L8y61fuYiEokSJeO02FIzVeDBHwjUvQp2jKU1ShYSyPPEF+RL6WTqFoY\r
        DTonnHHG8rN4ZjW7l9BPsFQQmVpl1fMlJQstoKpqbmXn+Vffct1vvO8z//HEe73isQ8c7ozSCQXN\r
        tYMMhw4xtwRbJxSMlSbKWLPaMXoNPImPWBIBk0ri4g2CoEQb0T5LhSdrNvFVRQwR9YGinEaD6vi5\r
        JjEmTOsAHc/tneFKUzmTdonRJpCMNRoLY+JOGst4lc60Yxoasjph3Mr4FcDEOg+dXJuicOls2nf8\r
        JvVIoZxajTHHSzxWcGDjsJ5zUNCZ8Vmas4BerVvu8U8//9hX3vLv7zqh3YgUGZjjHBoEpEHVVDpB\r
        qNRjspwYoJtYMBYjU8ZoNbpD0Alp1wGoas6goCBOUCyximRi0VBhrEXNgfFfI2acuiOOt+dLSLye\r
        UceLl1Ix0vTzZyTVIgoGJWCdxVdtnO0Dv0Be3G6tqQYyaylCxIpipmEu2Ll/f4Y1iBHEx5oj1qSX\r
        YM2+pwrO5nSo2e+UaTugj78EdMJQEpcsRFS7cUSZHD+ea9O6RfbiTuer05p6ZMkgk307l05TLj8R\r
        ZQ8n0UELqKrKD9jyoj98w8v+4drdW2ievJZ9FGjuqKqibrAKVTWMGIPJXero5OwYBy3d/+92uY56\r
        QHHx5D8Ts5zUgkIMqewMk44xHd2FjnehHj/2RN3CZCUgkx/SKddMVVU4myUWuRBoZA1CFcC3F0RA\r
        bTcRQoQq1ESgZvrQ9fr+/rysyjG/ixWb5pCJwlb3G6m5ZiFVAXHhlGsTmaS9JzMwLKAGnWco7FLm\r
        vu5eepU92Yt7IRfqc3njjHv3chId1EOmquZtV3/0fU/+y2f9wxa/h8bm42hXJeoDVVVrygiZa9KX\r
        D9IwLTIaZKYBWMSYsZ6OqQ2AjpFIT2qk021yM/b3WsgmaEDVFIKUmlpxmrHOLQtHtdao00wz0Oxr\r
        4YNP690ohKqu4pd8QQTU1dQiwWaU1lEZi4+gcZq2FG3tt2IQYxIPqwpWBaeJB0GkyxLRNcsTx2yc\r
        xmSdyHI4L8zmWZ63F/fCOf9iGaZJz7IG5dDXoKpq/vaKD370LR9965NlUz9DVHj1WCtY41J8Miqu\r
        0aIYbtNwDfBgnUE1ktckTxK7LObpuKGuSJn07Ey39hEhxrr+U5PZmRrhKcbHaXZfuJujQBVKoob0\r
        YojgMkemgG8vyIkyjYkX2ABiUY34OD3f60gxuiazGaa2IEJMPDumXjJId4JM/VKrScDjDGvKXrpy\r
        wdBozOsUFwKH4m/uEmIvEeb08m7ROjQBVVX5xx995D1vufSdT5YTBhi2HrIMMUIneAxKXkUkRFQd\r
        A3mLarTCqcEFoArdbNqkLcdY3VNfkLT28qnfxSRTs2uOCogh1mRVGgJWEpMa6jHF9DnIcxHSLl3H\r
        dAgSKHwHXFrfZS71rWxWHnbte5LedFOFSIExJVVVYUxJnnuKwtPpBPr6PKOjkXPPjVx6qXLttcpF\r
        F03ifM1DhTMQg0esSQx7Ihh74MPlDCdIVAiKtQ4ffOIToruery2ImMxk1ZjI0iRyKJpoQXBUp0nN\r
        eM1z6spVUR7aGvR/Rn7+52/4wD89x57Uz+44QsgtUUusZCCQq2XQW2S0ojPcoS93bFp3PKefcjoS\r
        IfowxoKQRlDfK2GMLtFqoi1kyoqo7stYM5wzJqBGNLUNVI9Z7fkYkylX56pBu71Jp4MINFsZNnQo\r
        y1EaJoeobGoN8Imn/e6r9vX3vaqIvmdVzcTnU0Tg0k/ytvPujQp714929rjt21Kfm9opFklldCPT\r
        OIka1p0TgyfGiFhL9JEohkoj0eRg3VhHxbTEjzM2txAOaUV5IGbzDi8UEe1BzO8B17h0NcOTBE5E\r
        dM1LfmnmcR6KiXuV7rjgiX/5tL9jY5MhKZFGnlLrBKpOQdPmNNqK7Cg5bWATL/iT522/92nnvbVF\r
        4xsZ2a0W2WcZ6exhjz+Xc7uNOLU74MWambm8sFUg1G0mpoPVSNUegehpOAvB0xChNTzMxtKzNssS\r
        s8McH4L6JbKm6eOa/naFk0atBR1GlAJhd3bgS3jvHXf+spXUDduHkiiRShTvLDRb2EYfogV4BRtR\r
        QmIFPtBHlDzdh+PZbcxPg17O5ctuQTkr5pinPWcNerPe3Hz9f737f/e1CnzDUEjEulSD6suSVXk/\r
        srdDa9hwyfNeeeWDz7rfU+/JxpsWU/AOFnO2qMzMUVCjifIzzwxlu0Nf1mKkatPnWuRVJJYdhFBb\r
        AHOHUcGpjL1CoygeaFvLyKoB2DnehlNV5UfPf+HjXd0FLgZPljk6JqLOEpstYqMFElLoSBSDjrW4\r
        uPzyyQ/6uGNu8W/J/H7+COBjiz/KJURjcn33JEwroCP0Xfyxr36mJacMEExIbcpJnaVapoEbCjR2\r
        eD7+jx/8rYdw1meXg2B2MdHE7cbxeu3jyxLbN/0ECQ4jWQq1mD4KL2D78TWzoNWuV/lQR6t48URJ\r
        bfcqDVR5H6PNBtkZp1fcdNP4rjuvG7jyG19rnB4CoazIcQQfMZlQRuWEc+7OXXkLtEhaXesXR3cO\r
        HjH1zDEJqUzvCZ84T1pfZFwCkrZHAP9wKDOris5k3y82dFonUQHTS2JFdfAaVFXlRR9/w8uzdf20\r
        naBiqKoCAfpcAzccaO0nfu4f/+PM8+X0LVN+ay6744oTrrvthnttuf22c/sHB86KIZ4EbFBhDTAI\r
        9Ilqw6IOVRtFzAQO1fFj1WvQicya1khq2RYqjBHing5vesarZ44hGdO7+5pCq9ma0SLxRihIW6wb\r
        LVWkh9uqYsdU0MwWTe81cfLYIoFoDaPOss0oNxG/9pL/+M8nPnfjhN6uP77+gnjnnTSD0soaSBXI\r
        s5zhWBGM47wHPoQv3fB9hrQgX9NHhzaqofYGTxfMX6AwCxcCf95jjo9BJ9G0kJIZBHROqX5b2NL4\r
        9Nc/hzllNZVWhBho9bUIwcNIB72zzdte+9bfnCqcn9n+vV9+6Jt/71M/u/OmdfRZMpfYvDUmJ0zq\r
        u5hc36Jga8dQ0DqQPlVASWECusLTDbGIEkOVtMOdPelGZ58yBF96pDm9Bh2JgU4jo6OKVCAxEmxa\r
        A0YiHlDfJUc+tPPnzRZtX1Hljq3GjGzdcNzvveSG6z4z1Sr59Cv/5m/OxNFfFJgKMslpeyW2GhQm\r
        56GPfTyv/PtvEQdzSk3ecw0TvOFTVGiUBQqzXAi8cL4HmRlXcuURuAad7oHQgqSgptk9P3gB/f7+\r
        rX3DrqTUiihCaszqCe1RBn2Dxz/k0UNPWvXAL4ydVtV84Kb/fvMf/M0LXiKbBuCUAYJTqqqsTShb\r
        C+jEbCKtU+gmZo5NeFykmxcjY1lBaOohaY2AJmeKGeldzXIwL29r7YxW0OjaNdw2PMw+Y2h5MCES\r
        TEBN6mWZUinylOU0PaoY1YMWqnQQhoC9KLtEuBPkjhjKmxhoXT8icv1N27btvHj/vvinU16oox/6\r
        0EmXvfjPHz4w1KYVBQioGkLm2GeEXWIwx61jT1ngjaEIFWq7ecQyg8W1QBr08lmcOPPWoBcA712A\r
        gS4xlBmpJeZk4l7+3e/02/WDFKYCm2PE0tk3xKaBfoqtu3jpK/7sDSISITmTvlD96H9e/NbXPLh5\r
        yjqGpMR3u1ebmNLQDOnfU4j6uw9H1NBtQsAELv26A1lq25P6oqTPTd1rxBlJzWrmOWtCJPjp5+4V\r
        P7/u8Ly9h2b+SlXNuzae+NmzhktWYclNRNTgY6BtM7Y3G/zm8/90qLCNQRoZZBGxQlCt47tJw//i\r
        yiXSRPMU0AuWZNDzvugDXfBm5takczJxf3T1D/o7LuKaGZ3gCSGyZtUaTNHh7iedzTrWfK67b4tN\r
        9/3jVz/rwbK5n11hCNvXRK2hioEszzDGUFUVqW/d5LXQmMBKfS3T5sQKIXY9kulrEdCoeJKXctoL\r
        Hmt2BLMZcZWviAuTtbfg0I99zL5n8ynvO7Wszt/oHGZ0lCKWOAyNZou2E3b0N4p7PO3Zm7ZT7muX\r
        nczHlGVkjMUiKTlE4YIpT/qRYjdey7VHylB7o4cGFaqDz8W9futt/cHVGT/RYzNhZHSIzlDFrz3s\r
        1ykpb+3ue2v7TrPHD1NmSmtVPypCGSJqLKVCp+gQ6g7NQTxBqnpLnstIIGi9xe7mU2vwGIgxkJZi\r
        KaY3VmlBGGuNN+1cHORLO6XUZrhm86D2P1xQVbnx+S+518f+9IVX32O0/cz1Q0M0QwelwrkMtZb9\r
        nWGGJfKEl/zpH8nJJ7cL7PdcZnD1yyxUsa4kMtN2ABvvqL34FzO/A5x7GAa5+BDoQb2ZzfjNARp0\r
        7/6dAwOnncj+Tpus1SDGQGYc2i44/+735QzWDnf3/c63vm761gyy21RoWSDWYq3BYDEV5NqPdKr6\r
        QYgTOl6N0cMj0l0D1q79CbczCkQnlBIoJaJWiZIS6A1x2nzVbl/LGCeusSZk80z6p1D5gC4c/9dB\r
        Q8dLfAyQcfPNq7hj+0lXfOpjj3z76We87KQ9+zeeXgX6y5JcQKuCEAOSNRlRGGrk7N24/razXviX\r
        /8GLXs4w/ucgDzXGEHxB3uirGxjP/CIb16MHq6SmsXIGB3v/uNWa92vgaHADaw8BnZOJmzvTR1Xi\r
        nCPGFOR2AbJS2bxqbSUiYwxlQ2VlvMaUnF3nkQZfMmBbrBqx3GPDGTiUHIuSNGTXV6Qwgph9qHEK\r
        qw00xhrISirAaVNSDsDVW29gX1OpnBDqVD+j4OyBpr6mhWpyNElKdYtERFzSupr6R4IDFZzJqMrp\r
        Sdded955eq9Vg7TaI2SQqnHEQRRM6k9aZxLNDDMli6G7Kv/ufc6vK3mEUJbs2bkTU1U0vfJQl5ON\r
        eJqqhJgcUkrEZQ06krGj2eBnLcOLP/e5B3Xvh5JvU3GU3mPyLKUDasrDjRK56drJCdlxzHnU5bGd\r
        7SXV2+c7xj0bY5r7ruIcGTn4p3ganDvxrFon7sXxbndHDqSHgM4h1c8EBmRC9F3GgvJg4KcT91Wj\r
        RhEqX2FcjnMWEwPSCdz3pHtwyTP/cu9aBl9qkW+0qLavZ30bCDMlNlysF5uLuMjeyr6BBu6kEcrf\r
        vYNdf/17r/oTyr6cKJFAwLoMp4H2yDTelTGloNP/e8rOBjutCQiwfv8w7vY7GCzaZDHQMKloPD0d\r
        aQWcsh9n4YSaCQoaApl1rA2RhnVYrziq+jodo0Rss0Gn3aFtLLsyyw1OePF/fPBhcve73zl+MLtn\r
        vB/meI3oGLHauQecesKEzeVBn6M+6+ublwK8gRtkQivOOev8JcF0JpnowmhQMbH/gM/GhJVfTPoi\r
        lapgrMMZR/SKjQbKSGfvCE3yh58ua3/KQeJiuThezMUR2FNvV1+pW7TcP/yKbO0qqCpsnjorWxFc\r
        njOf93Myd3XGtVioPC2b0/AF/SpQVoDBOEPHe/I8J3g/g6k9rlVmhiJ1p+iAUPhIhoABL8oobYKD\r
        0c4wprWKva1+buzL+f03vf4R8qu/+q0p19JzKs6bxzzNC/PUoHDWUo18QSE6cz5o1cNJdGAmUZT+\r
        6Xas6+tum7yzGhUh+kBFQFTIrSN3lsxk9DG4a74XliM/aWUN9vuAdYbSe0QiQRS7EKuTGHtQnhhs\r
        NFgPA3mTEBJ3UiDVpPqqwpmZNXAK3/YYo9RhJjHYPEdViD4yHAuCDVRWKIzgB9eyk5zbctd+4Yc+\r
        8ED5lV+5+oD7Rpxf1sah4qabeiuzeWpQx5ZlrSwPFtrTxJ2LBhVpzXwgs2PSB8YaYy04V7MmCCFE\r
        Ch8JQEGYNy9mBbur4HFZC5cHiqLAOKGoOjTmVHU3/bRRa6zpYMUgXsnEJeYIhCJWKe3POWJUvJLq\r
        WWdArz4wKkowhqBQ+BTSyoxgGjkxE0ZFGcoabM0anPKYx33rhX/7+sfIxo3D0x1LcD0Lu27pka0y\r
        P8yim+etQY8W6IwadE5rUNXYz4zQ3ZN+HNVoDDhr8CGOEcKJGJxzFLWjfz6w2GFrHEVUiqLEOIdz\r
        YMgwxs/38ImAoMejG2MkczmhahNJhdKS5+zpFNhma14J5CrgjdZtFC3RGIYMdEQZioG9Yjjh3ucP\r
        PedFL30yv/XYL/cqSlD8/CfjUDCb7TxPDQqnLcllLTzkkO7PHDXo5JwXNUlAow8408A5h8QI0RPK\r
        khZh3gLqoKMxEn0gb+aUWlKMthnILL6Yn4JO9J+KmUEDVtETiUSpGR1iJKqwv1NQ9g8yaiyVVnWe\r
        8ZTqDyZ/Nh1UUsKFOEelQsc6dhll1WmnccGvP+bL93rs415PZ/ib8shHHsTN7c3i3dpy+9KYisPD\r
        8/q5Y4nGvdCQmTVoNpc4qKJ90+0oIgTi6MTPgqpx1hJDhTVKqCrUewZsTiPPWE2Yd31SB18450h5\r
        EwEEGnkDoseYedu4NUXIDMPUiHOWsj2Cqk+0mKq0m00e9H+fwW1lSXAm8Qkd3Nm2o7INuAvYHoVt\r
        UXTr6jVr7lq1+rit/aefvJVTT93GAx6wV0QCf3PwbQ9iHfU87Ljllt4C1N9/NIQxFwBySLJwoAZF\r
        JqXVqKa0sRACDjvZERExPsbEpaOKIDhr0RjxlSf2rPU6OOS0ypTQkEjIsCkP1Y7l9x46tCbUmsnH\r
        40TQ6BFRrBhKlE5mucOB+bM/eu2p69dfijEdvC+wtqDZrCjLivXrPRC4/PLIIx4RAV3smtmMWez9\r
        006b8auJmv9Q8366/TfNgvcHPWlR5ms5wc+R8mRGEzemkpkxWGMMYkBszUjXZWVNsbWFEFBL8N3q\r
        lihCrBNy66d+nkfXqSnCkyCaEvOTA1uJmsZQ5A0YbH5Gjj/+6rmcbTER0aXRoAvUyHgmWLYeFSau\r
        9HQS+bkIqMyYmGqmNtowaqKYmtvHYIwkPq+aJiywed4CWhJ8oo7sbl3hHycem9/E9f6uG/DvcuDn\r
        0eCiBZ2v82NhoT0eAIDGUj3ocb4v6c1LMuzlgukKS2cUUE+YZEZFFSsTUkqn0k77BUijzGh069HG\r
        hWnB+HTG606ng9ak1lF1LNGtVqbg3OHn/+iB2QQUTl7qIR4SdrDtqNCgs9ALziHMwswMRhmNyZ5C\r
        VSOaeHGNiTXHbCLbSrHBLfO+Ls/+aLuphhGs0Tr7Z2bv69zmTca8sDMhiuBFCQiVRNIbY3lReegs\r
        L8NdW5foQdfBec3TpiUZ9MIjLpyTiB4adHJcUzTapM4m8trWpWqieE5bACdRM3RpUqT+c+wcC1bn\r
        MMOza9L6WsSiGlLPk25rNjebxjq8sNilGU9jtj6p++d1+F0sZRv1pcd0TqIZm27aqXFNY4xK6u+p\r
        EpLYSKxbDkbghnkPsGIgMpb0rXXTJE3OqAVwjHa1/nQIkqo+RA1OlaRDE8kXZXlEadDNm09YmoEN\r
        zk+DbliaUS84BD2kxfgBa1DtIaBVaugwvq9Gm9yc1DxCySuqsnC6LbBHu2GQdNyJxvwczPoZYim9\r
        SBdS46ZkUtfkK6mES+NyZKvrbeJu27E0mmjfvnn9fPf4AzblUqd2wpsGclB7LWscIKCiycSd7sHN\r
        mBzRV2OMUUG6FHHUXcfUgDrO4qx5z8sAq2J3KONUJt243XS/GC84HS8Kr+O0YlLioxlvyKtdBufp\r
        jhTBSN01jNqw7oZ2smxZmbizRTBzs3vaq0yEFTqWsmiMmTTH3bmfMRy1a1ddFKRjsdDuvxfu4iaQ\r
        xxFTZK/LgTPd7qrjhOQLqCyWAgeauIKbqebOTtGgpvbipm0iZ1+qS7x2AQYYurHUA2oCZXq50nFP\r
        8sSLGm/INPXCZnavjVvQtf9WJs5McYTd940HfjTHK5h2982zhEHmGWaxdcXt9COZ3ShYLjdJOTTa\r
        jmkKS2c2cUdpT7reSJh/rt0sCMvMWzoGXdzO0XOFne1ZXKzFXK1BFw/rFvfwyxwHrkHjzJm7jnyy\r
        WSdm0cl8/AJkIy0KsiXog9AbPedp/849iyRIx/f+evXqed0/w2KN+/DCoAujQaWHBp2auifIomvQ\r
        DctVQOfX2f2w4zjWL86B8929BWjPnqW+9GWPXgXb00n1jC0JcxqTnUTT9mlfWNw5/0MsDvLlFQed\r
        zUm03+xdGk20Zs08NegRxQw2M+TQEt+mE9AZTdzIyBQNyqIL6CbC8tSgnWW6Np4B6zhuaU68e/e8\r
        fj50lAjogjmJtIcGnWri6mGYPM9Jy1MQGo3lOa4ZMCT7FudeZVnv485Tg65evCk5ImAO8jNgQsij\r
        xmxr0IXhBN+y4Bd9sIwHPdFuLysBnS2TyImd8UK7MUwRIYSAMWbOccxuDFSm1oMuAEQEO4EDeWK8\r
        tddYlhcWyknUw8Rt0JzTGvQGbpj3XdqyYBO0wGg0ltUadNli1/yIHY+aNeghX/8cEOif4xr06OA0\r
        PRow0kODzgv7Xe/jrls3L1U2fLQI6CH2F5njjyYzuR+OMMtJ+EW1VRLNxyGcQkeXmw3VE4u2lsuG\r
        egvQPDOJBufz42UFdYfyqzlq0MmTHbW3Bj1aSIenhTaPKAFdNA3K2t5fz1NAR5Z5l4eDx2HQoIGB\r
        ySauWfwwy7LF8vNC9MSqxTqwG1pUATpa1qByODTowIFhllkE9LQlnpaDwyF5HJvNI8pJNCpHZuGz\r
        MHJEjnsqVOa6nEyYw4+Eveyd/MmsJu4SkA5P6tStTK4dnG44h5jicYS1NLCzPugT52gOMzIyi5Mo\r
        zDfRpJ+JrFHd0qbZKFeXXRc0lYXWoN0KSJOSyBQGWTXFxJ0t1W8pOE2nCKWkAuvUu7KuAR3L0hN6\r
        kTJ0a1CndSQdYSbuTO4W1YnzVdfMpsaFTAqtqqlbkk85wCJnEhhGBY3EGOqKP1vbcalGdFrrJ9YF\r
        9iJjBHNLj4Uwcce5C6bZVQ6oLImRnie1CzA35ZyLvqdyFc3EXTTPoR1hAlqOdnpbS5PeVDLpj576\r
        aGSxnE/dM4ocyD81Ucv3ZspYLppUYP4COtsTt4Y1c4yDHsWYd1Ogw4z++R9iWszmfTppvqmaffP7\r
        +TJBrxTaXoUOc1q47mRyVohIbwE1C/DiyhcgG2lRcIRpULtYTqLR0d7H3bJlXocX2svz/s/9QvJD\r
        +dmcBHQtk7NCdJaF7y6WiKjqcOBIE9DRRXrQ7eKauEeLBqUHEUIvzElAtzO5fy/SO8xij5IY1rSY\r
        d0uDw4ti0cIsi5vrYxg9Op6hw6FBp0JVZ3ESHZmxt4O9+KUewlxg+hbpXthZBMjPL1VT6D9KniFp\r
        HMqv5iWgYnqvMY+WLJCjAba9WAK62F7co2QNivbSoAvjJFrHcZMPNEuYZSEE9Hbckt+giTyxY3G3\r
        ZWfiup7jMT3SpSb2BxURYoyYg+WDay+uAHVmcTROZ8h0r2GZGTlLoEFn8eIeLXQV02LZCWhvmEVb\r
        bgz0/vqs+ZGXt+bz46MA86PNnGUNunoB0kxOO6zTcfTCLtoadHH9DELf0fuSr6E9rJ95CWhEZjFx\r
        9897crcuAxN3+os/sjRo1SkXh8PYdnrfn2vn11+gQ2d53v85QFV7XoNbqDXoXH8vC2DiLtu2s/Mk\r
        wzrcMIsVZjGLrUGXPEtv0VFRzfjdoq5BFyKTaBuLHQg/RBxhGtRTLY4GLYre9+fcc+c1T835/Pgo\r
        wJxu2m4O6MPR08QdZXTRW0MsGeZJhnW4YaR1RGrQ8hCZCJYZenui527iyvSHOeCj3lSCCxFmyebs\r
        fZxYiXFgHWivfqBzwjzJsBYabparmnQvumuiSaUeU/tvMuGI41WYB5xlNgG98sp5XVdJsTwtqDng\r
        Ui6dZQ3qZiz+7yFgqaRHienWCmyc0iJLZ3ESLcQa1B1SeECYKJyppjP1lUTBmrkV4XTrQSfVhR5h\r
        Jm6n8mMXPWngpi5+rvuodutlU+3suBwLkWnfAeXiLkEahxI+rBtKLxdcyIU9v1+gahZlD1Ma5chs\r
        TqL5p2lZdi/MTI8xLSzQjVtmAjpbb5ZmY7YndiJnwRwuzcxy3AsumNc8Vczd+7ysbkxCzzmK6KFo\r
        0AOxfmp/D2UWE3f+0mCXq5No3lQeC4vZmOU71SI1ulrkNWh+aAk4yw2zzNECeXH3MrVDli56mGXf\r
        0Zxwv4Do5aoHsCxcL1dlQlwv+EV14izEM7TUuIEbes5RPLQ16IE4YD0ovT1sBe1537xlWxEzb6aA\r
        hcVsTiKVBeyGPvFMrVnuz+WXz+tUR4OTyHHW4TFxDxCWWUzcvgVI08pxy9PNPk+mgIWGzpIsbxer\r
        G7pfXA1qjoIwS4OtPa8hWzQBncVJVNCZ9+SulKwdHJTeDYVVlmgN+ohHzNPSOPLXoPvZ33PuI3Fh\r
        BLQ9x8SDhVg/lHSWJzHZPAuRFxqzm7hzjC0d/Dws8hq0POJf0G0aPec+HKwGnW0m5roerOaf64tj\r
        1byP0a1z7MYw44QX1mx1jxN7Zy5kz8uFRjlLmAU/Xnl0CZcccCGHfG3WLrYJunwn/SDRJOspoAMM\r
        hpm+mzy5Ij1vsqec01t4ITRoRbE8NehZ5bLSoJYs9NxBxgX0Ii5auBOHsKgC6o+CNainnCUltr1Q\r
        XtzBKUTX9Fz3NBbg7ZdhF1VAD7nqfn5VVAuOQNG7V4zYQyJOnhWzadBL53f4Q2LaWmYIZD3n3hEO\r
        UoPOAk81WVikt4BWC/D2C1SL82DNF/Os0lhoOFxPDSpyaK0HZkWYzcSdp4QeBSZuA9eTctPTOHgB\r
        VWjPtHM+VZspvveJ518knLFIb/75Yp5J4AuNMIsXN8ZxZTRb8vasuGTCGlZn8Q5feOE8U/2W8cL/\r
        oBF6GgL5XDSo9BDQSJgqLD0FtEFj3pMbCYdE+HuwOOQO28sMjthTgxoZf0hmS96eFRdNWMMeNLvY\r
        ocEsgKNx6eF6xopK/Bw0qDAy84HiJGERoex14moBioQ9ujwDYfNMAl9olOQ9X5Yq4w/J5Vy+kFpp\r
        kS0cf8Rr0Ij25D5rUx68gBrV0VSA1G0/qFAvNQ3ZJFWtUIw/palkKaXnpjltkM97cg1Zs3uybvFT\r
        tzdkzx6RUxu1aV1StVC1DvNMYVtoZMSgTLxzOqGFoCIax8gJHsEjUOl+PzZh9TRN6Q86tevi1ClX\r
        XVQnnp9lDTqzG2RyR9EoaVtIpEeqlg+pZ3Oacxh8X3qAI0icUF1rUIQWnTmYuDHst3UOnxARAtaC\r
        sQ6ZQr6rMAqGGEFUUBWUDNThrEEWQIMatFUVJQJYawkhYIxFjSFMW0Q+XoUsmpi1RYXuf+M3rX6M\r
        ZeYY4JH06u7gvSJ1fSdEUVQiaMAawfsw8S0uUUKi0tWIqBI1gIGYmm6OifqYuIvUwjt1apLzaWqs\r
        eaGWDVmvliaqGDlQQJV6rEawmQUDAShD70jUXCDWEFEwikpAnBAJ+Pr5nAhPHBCJ2CzVV6soYhyC\r
        Q7H0ce6M1s90a9C9k3awhrKq6hOFSZ1sjJFhHyqarSZ5w6EaAMVYofIl7QUQ0Aq/KmvkNJpNvPd0\r
        n43uAzHD9E0Qxq4mncoYMN6F+5AepXmnsC0sHKXvXq/K+Ns91s1vc+cm3juJMYBGUK3L23vXgU4U\r
        1wNOvYjoSRomEGfwjalGBCVUFWVRYK1jYGAWDt85oPQesZYYA8bWZN/WJOGbUiHpyFZVviLEiO+6\r
        ClTq1BJhlGtndPAdMLkqZq9iCCpEsYgosdakjmySLW1j3NdsZuwvhyEqmc0RKnyIeCqE+aeBNehf\r
        r0YYHh3BNwKtwT5GR/bjtMId+THsBUNOnzfKBAO3XgIYgxhF0bFOnlvYYhwGibM1kp8REzhkpLcT\r
        75JL5nVd0iNUp0CYpn+XEpPpGxUINPMc8ZHRoREWCp5AFSpEDNEr1tikFKzQqTpTxiNr1Tpit1dK\r
        BGuAEBEVzuXcucRBZbdiEEmGbhXBZhlVVWHxk9q1GqO7iqJD0poGMUJVFSBgGm7W9cPBYA/7f6mI\r
        Fa6RYaylqipEhGajQVhAk2XumHd8b0HRz3ovKKJgtGtBpPREYw2+LMfuneM0scbSO4p9kIiL62X3\r
        VD2eIWF6J6/Wa9OIESH6gKiQZwuX9mAzS543MMYl+zmCxggamZr1HIgbnMvRAM64ZLFoHAsgXcIl\r
        M5ouB2jQoLIj02QkIgYViCKo9zhk3cR9o9cduWuQZ0rlPVEFazJEDCbP6WCetE2HyxauM4KWjmbR\r
        gGoXe30/ld/ABp8uDb0SuADYwha7mtWNEezGgvi0Hex/nmZpHNYYiqoicw5rZLbs00XG/OJ7C439\r
        XBtEIzaCCZqiH8qYieucG6PDyMCEqHU570T+poPGuNAY09vLftFFysUXz+PKevSUUcHGAwW0ZlZC\r
        jCDGQBSqMlDFno7uOcFlGUW7IOYNjMtRH3BqEB9oTpFQhz1BPIhXjE0sMZ4IWQYoF8vFczBxYWck\r
        OQtEBGMsVVXS18iIsHHivmVV3lF1CnyRFs3WOmIIjIaK7eV+vrblile5ofCqLCSnTiLm8AgBo6E+\r
        n+3ONj9AELEEhUiksJ6RvEL7DCPlCME6mo2MsmgTsGRueabpLgWu4dxgus49NRhNa0YBQgi0mq3j\r
        u/sOsduGqMyjwGViosKiZuPNTlwt034iYohA2enQ1+onasCu6edtWz6j2YhSek+W54TgMQq2FpFg\r
        JAn3hBV3DOk5jQAZFI3IJ771OTQzBFVUhcwYJERy42gPjU4ZkTsNwCB4H7HOjK1FRbmz19UdIKBi\r
        zbZohCjJEWNizbeVObYN7Txj4r6rBgZvs6q0sowgQlEWWOOwq3Ku3X87r/j3t+A82DjBK6hd80NT\r
        Kq90AzkhrZfUQP2ABQIhC9CX4Vou/TtEjCGtq3QhbLSjAxdCvBitmVAlCWhyyCJG2D88fFJ33ybO\r
        YS1RDIe0Ct2yZYLaksXubzQLp+w0z0D9cooCWf8ApSpeAn0bB/nLd72RftegUE/QACoYZYx0JJja\r
        npDkZNIIiMW5BkVZAorrd3SyEvqy5HsMEeNsLS9CX6N/0nBuH9l2nsks4ixRA6E2/SRGLFzf6/qm\r
        8cDZ7V2aSjQku9k5Ctvmxq23PXjiniduPOdWE0BLT4WCsdjMUpYe0zRobgjGQFQkRoxKXbBmk+ms\r
        ESsQNRANJH+AxUSDUZMKMEyk0irtU1NjNbIGRXuEviMqELK4EBE992WPGkImtrxO4QZxlq077jqt\r
        +2mOzYyxVN5zSOnojca4gIpdVAHtVRGlokQzjXku9QpUSY4Ya8AK3hrMcQ1GraUi1ladwUQZK5mO\r
        hvSc1eGbLMvptEuMNRjpwxlDuxyFRhJOiZBZh69KGtGgo4FzTrnb+BhV5a0//+wJ2rAElGgMPgQk\r
        cykSquYXva7/AAN+07rjt/vS4wxkRnBGKGKFrmrwtR9fcc7ErtoXnvvgPWG02tm0TYw4xBiqqsIY\r
        SZVrEggmEK0SLQSjeCNURiidJWSOCkGNJVpHsBYvQmUM3gjeGIJ1qM2JarGmCTh8Bdb1EQ+y0qkb\r
        n+uGZQ42O61njeQ8vZOLAR+4SpOXiICmWLEI0Qq7hnZlWhONZ9gGIWAZV0/GmEmxzJ7X7ibQ0Ejs\r
        m26OF7B2dmYBBeI0JcpdBl9jk3LQKsUmfawIuVLYkuA80UaCVbwTKguVBW8hOMWbtBUaiLmlMkpp\r
        Ih0tITMpNyGABaym9aXzhkaRcf8zL3hSdyyXs6XxwxuuprTQQQl5TnAWrIBGVvUPXNfr4g94Uh/+\r
        0IfsbERLKEq8LwkacK2cqmG47Fv/w/UMnz02cyL60mc973eqO/YzoA3yaMgQiB6JAWfSINJ/ShQI\r
        Wv89hrpwus6omBAXUlWiJudUiApiMMYmp0ZNsGzFkLlDcyAuSBD9oouWlZMIoNnq/4kxUPoCm2d4\r
        oFLwVrju9hvYwpYcoMAP5LZLaHoIl+EmLP5V5t9jsgdmW4NOdy9jrJ2cQXEYHAYbBYsZi/ZKHfLo\r
        elS7mUaBmDRdHUsuq4oQAlFjCl6ZOsZMeg61ikgZ6dOcRtvwzN/83SedJ8d/tjuWtTTP/Mq3/4f+\r
        VYOECEVRIcZBjNionLJxU08T9wABvfe9z91nhz1NmyFGUAMjVYe2VmRr+/nvn375RRP3f9Uv/eE3\r
        Hnv2g97Z2FnQ6oDzSsNYYlmSieAUHIKphcwZQyZCU6GpYNVgcFi1OLXkasgxuLozk0afTO0Yxv4u\r
        0YMvIRxINTmb8B0NifEzYdO6TVeFUNFsZVTBJ893s4E2Mz73v19gH8mT28Ctq8oOtg7LzBludHxp\r
        pHHtYl5T6BEHFQT1B65BGyaj5RpIGTE+YrxivWAqQYLBBIsrLa40mEoxMUJIm0TFREVCRHykZTJa\r
        4miKJReBunN3JHXQaNiMRjDEHW3OGDzhN//fr//pZyeO5UtXf+UfCikoioKG5DRdH8YLfSYjDLd5\r
        1MMeeXPPqZ76wUtOurDzd/vfHPPVmSnRFFw1inMWDcLff+idf/xN3fGyh8mGoe5vPvqH//L8P/zP\r
        Vz38siu/fl7WD9KX0adNyj0ledZAa2dEN2pl0OQaw6A4Yp39kmxyQdI/0vLfZhBSjqgCRCETwZQB\r
        215cJ9GRJswPP/8hP73y8p8iAy55FltNqs5w8nwPOK7a/tMHAp8cpXN6lEgVKpBDsEI6+fiPRNYv\r
        8mX11KC5PXD8blSRocjaRl7nX3fbmICXiChkdV621suB+qkEk9afqulZVJ+48RRFRQkIUQSsJcMi\r
        IyVZm5FH/9KvPfyDv/vaH00cx8/1rtN/7S/+z6Or1Yas1SSIpqy8EJGgSCfwsAsefEev6zvQiyui\r
        j/3bZ33+B8XNT8AqEcU6SzPPaI+OwqDh1e+56F2q+gypKVJEJOzSXQ95zhOevv3D//XRxi/uuInb\r
        tm+l0b+KctRP6PvRnaZYGxIGyJMnVzyimux5rbuBiFKG1N+qWxYmUgtoIZiRjJ5Xd4zhdx75uBvf\r
        /Jl/wq0ZxFmo2h3yvMHw0Ah2dYO//sc3vuPbettlQ7Sf7jOwrcahpTmGMKEroJ64mNfU28TVOll9\r
        MlaNOnSPEBsG70Pik9Lk1a3qYoBMDUYVI/VaViF5MGsHkRINBEMeBSlB2yphSEX3BsNWsdmNmTFX\r
        P+ieD/veoy68+7VPkadMyppRVfu4d/zhfxdrMopWKp0ufcBmjtzmuNGCMzeeyjWctK/X9U+bR/my\r
        5734X59yyfOe0Gq2KDJHpYF9+/fT12oyajzf3fKT333qB//yZlV9tUhydx0nx+1nGbRzPFjnhOp4\r
        gGE5k4HNBdu5Zufp6zZz68humqszxAplp02zr0WMlv1udOOHvvDh0ac/5skUOYyWBVH65n6iPB+P\r
        I6icPfcDzAUyyxr0QCvqqn//2mG7oVfxad59wJjUvuDzr/vwj+78xT2K1Q76MtpFgctdWq4Vnri7\r
        zUtf9vwvP0Wkdx3vdB+eObjuG2esOp5mG0wEkznyVoNoFdsSsg0tPn/NN1/xmLf/2bXX6b77T/Ts\r
        LjUmCtvRIngHi0fKI/1Ln/XHHx/sGLRdUBaj5M2MTtmh1IhbM8AHv/opvnrb9xg8cQOauYkVKgeP\r
        ENbCWGv33ibuPO/BbBpUFiRfcWGgquZHevt9n/TuP73u3776yad2VllGiRQhIk4IsUTw5DFy1uoT\r
        uc+Gc/5htmNOK1inyql7vlld8/mnvOwPH9do5hSUSKZUGlJTLwvN41dx5Y4bznncy572vWc8+re4\r
        RYe+3IRPCe5qpbizxer9HXZ09rGhOqvOVrwEuKgbB5ZDck/MitIFgol4Qr32rWtXppSHQnfNqzRm\r
        yOkd8IEsxDFHyqQBL1Phf8ipF7xlfRx4chELghGKTkHeaKHBsK/qsPrE1bz+ff/MaSefAv2N5K2k\r
        m0jC2AYTJWP8G0HBSTfpIUvxwjhWqys6/mKsXQnzvc89HxS36KyfYy+i7kQYwO5kZx5p9UWy9QbO\r
        7uAf97rL3/f77/7ch7JitSCbBmg7TWmAIlgcJkLDK2H7MH/3hn+hj87XZjv3jJrvBLf+Oc9/yh/d\r
        9ebPvJf+TQ2GfIFpplajVRUI4slWWcJq5S3f/nfe8c3/ePS9z7z7oy84716ctOF4WlmDUAWctVxO\r
        eghOAN4taY35nts+ny6+XkdEHau/YOaSMqkbCI6XvCZ/mpC5Fm1T8fkffIWOrQiZQSUSbVp7pJrA\r
        FLRWSXE/CeBCYJWfPkfzhNLT50OqlzSSAthInQ21HLvcwVmceMXf/fnr9/72Rc9Z0zp9HVhDVQWM\r
        y7D9DUZMwGwc4Oah7WgG0aSAOVExIhhVnEhd6ZLSBEQsUQ3WZDgBon8o8BHa7Q1YBXyKLUfIbIbX\r
        QIgBsfPPAgyEcQHVujQwpnCHiMFP02Tu3678pLK2xajxqE3f22gRJdVuorWfIyUlJOdQ/eRN6Pms\r
        6ZS849b/mtC8uFueJ0SjbNl2Oz+94ef88GdXMyoeObGJz4ROBa6RE73i1CHBkBUGu3uUP37is7hb\r
        vvm5J8uGDrNgRgE9QzZt+4Xu/J1v/+T7n/ju7VezZkMf+zsdojOYzOF9IBilsqDHGTql5zvbr+H7\r
        d/yU2ClT4jATejOPvanTh0a7b9lZ6hBn9aSmdMEQuyEFIWYp9zfGuhkt3bTA+t8aiTHlYBqUfq98\r
        tX+tFq0mZVRMVbE2RvKRITIxyb9XawZTh4yWK0Qk3qY7f+P3Hv3kKz75w68QV+cpUaSq8BJTKVZm\r
        04Or6X44rQuta29Jt8BdVQmayraMEfo0sGZkBHbt/gO95ZbXcPttL2f/EANFiS0juXV472n1tdgf\r
        i4WqNpKJb8Op2t1OEwu/+G1vQDetYthV+Lrrm+kKqAnppdMVUB3v1TbdkqjX8xdE8bkScwPHOTxC\r
        CMMgDbJWRqg8zjjCaIfVrp9mEbnbhrN51q885Wsnsf69B3PxPdeOd5P1n7xetz/lua978ceuumML\r
        feubjJhIzCzOAiHg2x2stZisLk/LFFquTqOqK/QnGE7dN5TUf58fBUliBMAagjV0YkxlcmIJQXEC\r
        EkuMhvqhSy8ElYhIMsscGahhdeUp/TBGBKtKjtJoOLQsURSnQkhUBSz3FOCTZf33fqHbXnvVtT9/\r
        9U/23UlrYz8j+/fRP9CkNIayKJEsh0iK+anWYS1FsBNyWQXJLfhIw0Ya+3Zx3Yc+jLnsC639Vdjd\r
        sBmtosNpHvorjxGDilAUJSYTrMy/mKHXGlSBwh8YC/etjDCQUVhQZwHFqk1hFhOTBaW9beeD8V9E\r
        AXWGaJQqpAy6vmY/VVkROqM0sgaxKlnlGtjdI5zS3MS7/uJvP3s263+n61ydDbM6d86WjZfeoNvP\r
        /ut3vO47377tp+vdcU32VaN088SajVYduFUqVXAmXZxJVebdF5CMCerkKe7WMM54E2bRoJmxeE3c\r
        fxGLhLQOIqSyHoOMCacoWAwWixXBiRBUMMHTL0ojKhaDEYixIkrEWRl744pISjBfnsvPyfeNjRe9\r
        46/fYp/0iue8Ys+OUQabjk67QzbYokTQytPIG/iQEsCjhnrBUAfh65dqKCtMjDiE1Qrhrh2Ud+1k\r
        kHSfMyM0K48JJXmjj7YvCaqIuFQfOX9Iry+cOfARdv0Nhk0g9jkqTbx2NqbsoMomlWDrzl86pVH6\r
        VMGMPa5B6+dErMOYFLap2iVO6lzyUU9/cMieYR5wyr14059d9IyzWf+fc/G/HJT39SzZeIOqnvCW\r
        b/373//dR975ghNPWs2eagRtWooqpHzImrMmmekKPtYCUTsOGHfWdNOqDuZB79WC1CiUVcQYSyxT\r
        saw6i3OCFUHKQCYOS8BEg40GFxxZABuzWnMUGPU0MSAW1YwYI4FII88IvgBM0srGEOxBcDUvA9QP\r
        wSuv0q0/ft5rX/ixG9t3IWtzhjsljSzDAp3REcQZook4AthIsIHg0sNssLTEkEvKmjHR4wtPhmDy\r
        nKosQCuaxmGAohgFDC7PiBoQmb9zX3rWg4KdZg3a7nSoaFGK1laBIqb+m6mTFjQ9pgcSiU0+nulV\r
        0ihK5jJ8UWAj9DWajIyMYLOMnAZZGejfrzz9kRd+8bmP+a2nnS4n7J3r9R/0DIpIBbzwW0PXvvu1\r
        733LV6+687qNRcvTWtWi0EAQ8Brx0iWdEpyxqRRngoBGqR2gJk1QWs+NT8pUjdmzpEwFJxYnDmcS\r
        H0wR2oTgaZgcvMdJjo0GQQgIHiiN0FbB1mRYUWtzuJvxZHNEYaRsjwWyVZSOKIURKrOMfPuz4N6y\r
        +dIbdNcpL333X3/32zdfdcLg6n7aVUSN0swalOrH1pww4cUphuSdNXj1xBBxJiM3QuFLbCS9BMWS\r
        WVMXQ6fKmXZZQCMnLIAGDbPl4k5zDiOQZY5O99e1cwfAhHQ4O2bizqLMetANCxCrQMtmhHYHipJV\r
        2sTvLXClcMa6E4feePErH/vI1nnfPtSoxZxfcQ8dPPenqnrC53d+56kfuezT7/zqj/93MGZKs9Ug\r
        5paQW6IzlMETfUg3URnTot0H3tW0j0YmrwWmWrSzNPHGWUMxWqBqcQ2HGkGM0tCIEXA+YHwkqqVy\r
        wkgD9rWUTqxwHlx0ZK7JiC8pQ4WYiMEgGhHn6jcvIKmaobCW0kjvfvPLDGfJcbf9QH9w2lXX3vIv\r
        r33vW//Y9hvi6gajocKKSV7pWGJiTZuqtk5vM5SqNLMmGjxFjBhVSiI2BKS+mTFGVCylBqwVjMvS\r
        atYtcmcVodaIUz7W5BRzDZMCQPVC1qjBeVsXtI/HBA4tITkhcxnlcJt+msQ9Bf0lPOju9x952m/8\r
        nz/77VMe+mERmReNwyHZIJKyH/7jYtWP/NX/3XrSD+686vzv//DK83947U/Pu2vPrrOjMyeraayj\r
        W4KkB5YFq+gER9GhIZX7BbJsgOgNYTRg+hwhFminZCBrYjrKQDvDSIMRO8hdg028VGQKxkeyYBEV\r
        gvRj8wwlEsqKTDKMCEGruorBUCqU1rIjcx62zWfeDzvuJ/ergOddpzvf9/effNcX/+u7/7OmkSv9\r
        fU3UpFVnXoILFsXSEcOos5TRUzih1JQPnecZvkp9e8WkiiPvPXmWoWREKxRRaQOFmHmr0MDMNYUz\r
        8dBGUu54O6YqFAEkKg0vtEpDHmzKhSWFkJDJ3QV6OoiUiEgB2gaGfFXuPKl/3S33u+f5P3/Aeb90\r
        5UPPePD378m6Ow7WCTQb5rVIuFgkXgy3krbPHHAtEwK8l4LUDQfkylSGLzk3iMMJnIYDsWwVg5Fd\r
        GNmIyF6MmFQYJN1O26bu1GlARhARRsZmM9AX+9C4h73az2BcRagDLVEjUTcTlC1e8V5T+8BzlSuv\r
        7LLEpzt06aUT+4lMyU1YnOSKw4lzZP33vqa64UX/5zmP/tL3vv7a/778SxfcfNcteClpqhKryNBI\r
        wWirwbZshL4swyiEPKtDZSCNPFGEGMVbA2RYL6hPaee2r0Whhv0a521pzFZuJtNoUDVCJNahAoON\r
        qXJqeMs2vvS2y1hD8y+auMsiYbfHjjrWlaeNUX+N848e7P2+DbiKT/G+Rbhfi8tpOn6BR/yDfTTh\r
        kcnsugy4TFWzG7hrzXVbf7F+7x13rVs9Mrpu36lXr15z4/bB07S1yvk4AAwiMhBhQGFQYNBFXaUa\r
        B0obVyNmdUvyzEQIwROBtk91v/z7v813uLNQnui0n078oWhac/ZFy3r63nWmbPj7pb4HB4tlk0O7\r
        gqVB7fzbUW/zwpSUOLnPlVea+Quo6xkHDdP46wTFqmJ0PDetS+5lMR9clIlcJKwI6AoWDNNYTItM\r
        XNyLCb/r3DB1ckpySrq0HDtisCKgK1jWmJ1280AoiUws1EX/3QwyRGixbv9SX9NcsPwj7is41iFz\r
        /mpCMsx4tlr6cz9berbMXG5YEdAVLGv00qAptjn915q4dep9wGkqLdzFrqXsFzJnrAjoCpY/dDyn\r
        eipS28spX3R5rRhvhyg159UFXHDEZIHBioCuYJlDiEao2fjUMMZvTipkmt5PJEg0UOfwqCix3jjC\r
        Qn4rArqCIwA1m8OYfNU1nD2MX1HB1G0wpvQSXxHQFaxgoRBAurHMscbEszQbPpqwIqArODIg462J\r
        uzHNQxHSI6CUdxJWBHQFyx0yzn87OaH9kFgbj7B86hUBXcERgJpQbpkyKS4mVgR0BUcEjj3RTFgR\r
        0BUsa4wlKuhEdl7G+q3MEUdUDBRWcnFXsMyRuOlqLtpuf54uI/IcKVV00ZP3Fx4rGnQFRxTGazyn\r
        zyzqDZ0X/chSYEVAV3DEQA7gq5qrgC4AzeBhxoqAruDIwUR5NEzbenCWn8+fSfswY0VAV7CsERhn\r
        RRhvhDVZMC/hkqPWybsioCtY5qjdRHWK35iQTvjbRVy01INcNBxxNvkKjj10G2+N8bQyS2OVowgr\r
        GnQFyx46bbzz4ARUJv+jvdTXMlesCOgKljV0LEVBJ3RiToXYiUN6+uWnaGqeNcYdlg7Wv9TXM1es\r
        COgKljWSkwjG2ldOYFboCuelM6UUTRDOI9WLtCKgK1jWCGMWbrf7/GThBLhwqQe5iFgR0BUscwRN\r
        KbR1Wp+OC+qxULa9IqArWNawBIQABIRYdwB3NZnmGI5UC3ZWrIRZVrCsYTBRCKRmYQbVmkuzZ2vf\r
        owcrGnQFyxqGEJOujGO9KuvGgRN7yR61orqiQVewrOFTs3qg+/+JazPJapLLa7l2RUBXsIIlgio1\r
        TTyA+LT6VE3hFoVzOXeGH86jO/QywYqJu4JlDcWmTrwqdbrCuEe3Gw/dwpaj9jk+ai9sBUcHDDaI\r
        ygTeEz2gmsX16CF6pGNFQFewrGHQOJ7qp4yxEomMCepJnDQuoHqkG7VTr38FK1jGUGxkArWJqKlb\r
        l43Xh+5ghxnff5bUBZ0zT8qSYkVAV7CsYVL3B+os3PFkeWGMzNqy4ah9jle8uCtY1lA0qHS9uMqk\r
        dki1WFr2HXFUJgeLo/bNs4KjAxENSRzHeXDHfUSCimBYPSagif5kfCFac9JPaLx0ZGFFQFewrGFQ\r
        b0QxRoh1Q1ARSUtJNaBCwWjW3f8iLkopgKpjBWoqEOUIZK1mRUBXsMxhiD5FP+MEDaiT6jwtZkxA\r
        L6VO0Z2BFUVWmietYAULh4D61CE7acFUbSaJTYGIKFik0d3/QhDTbRMhglHF6Fga74oXdwUrWEh4\r
        oodxJnlRgTi52CxixqhMLuMGi04qRUNUx7TpEaU+WfHirmCZw2CrJJgGo10FOIGpyAiesLq7/4mM\r
        OpXxdSdQpwnKWHL9kYQVDbqCZY6shJo/ocu4SfL4aFRUwKMbunuP4BpBIExwDI1xGh1Z1i2wokFX\r
        sMxhCZWKECWgJqLiSAl/XX0YAX9Gd/8KuzoYJVohGABDVB2LoB5pWNGgK1jW6OArhZQkP7aCrEu4\r
        RSldoI3/1e7+FfEsbyNRIioxpTTUcjn3bmhLjxUBXcGyhtIpnTWglqpSogpRwGSW0BB26hB3sf83\r
        vq23tVTVbA07XxmySBSPqgeJiID3HmuPvMd9xcRdwbLGRhpl8B6NQn9rADWGKpaUnVHA8LnvfJmP\r
        furjNBrN0SABnwX6Nq5iyFWIBtRHNBpaeU7hq6W+nDljRUBXsKyxi10VqmhISX+dzii2YXAuwzgY\r
        Ek926hq8MYRQUfkOQUuqGDACWZYjRcDEiMyxI/dywIqArmBZ41zO9dZYVCNoxFmDxjrdD6ic0K4K\r
        jHEYZ8ha/XTKNnmjhfcerRQXDU5ciqMeYY6iI88oX8ExBRGJ4HZmDUvQAmNTeIUgmGghCHnWIKoh\r
        Yik9iMmpSqVoBzQYohdiNGByJtPpLn+saNAVLHvEfZ0PtzryIjB1G8IMEEIIxBBo9eWUIVKUJbl1\r
        NBpN2qOjrG2uphotadkcV0ZGRsNSX8qcsSKgK1j2uNfAqa9tF6PP8Nas1xiJqkQD0SmuYSjKEuMc\r
        ri8jlh5KxWSrKYY75HY1mXEUWrCq33M1Vy/15cwJR5ZBvoJjFqpqfsr201u4+0X0/IpwD+BURTeA\r
        rvaEPCPPbL3KrCjIyDAYAgGPkqvhbmbTyjO/ghWsYAUrWMFRj/8Po+1AJVXsd44AAAAldEVYdGRh\r
        dGU6Y3JlYXRlADIwMjQtMDQtMTNUMTI6NTE6MjcrMDI6MDBZduWYAAAAJXRFWHRkYXRlOm1vZGlm\r
        eQAyMDI0LTA0LTEzVDEyOjUxOjI3KzAyOjAwKCtdJAAAAABJRU5ErkJggg==`})})}function xt({sidebarOpen:r,toggleSidebar:e}){return n.jsxs(ft,{role:"navigation",className:"animate darkBg",sidebarOpen:r,children:[n.jsxs(jt,{className:"flexSpaceCenter",children:[n.jsx("div",{className:"flexNullCenter",children:n.jsx($n,{})}),n.jsx(gt,{onClick:()=>e(!r),className:"animate pointer",children:n.jsx(mt,{})})]}),n.jsxs(vt,{className:"flexNullCenter flexColumn",children:[n.jsx("li",{className:"semiBold font15 pointer",children:n.jsx("a",{href:"/accueil",onClick:()=>e(!r),style:{padding:"10px 15px"},children:"Accueil"})}),n.jsx("li",{className:"semiBold font15 pointer",children:n.jsx("a",{href:"Forum",onClick:()=>e(!r),style:{padding:"10px 15px"},children:"Forum"})}),n.jsx("li",{className:"semiBold font15 pointer",children:n.jsx("a",{href:"Activités",onClick:()=>e(!r),style:{padding:"10px 15px"},children:"Activités"})}),n.jsx("li",{className:"semiBold font15 pointer",children:n.jsx("a",{href:"Contact",onClick:()=>e(!r),style:{padding:"10px 15px"},children:"Nous connaître"})}),n.jsx("li",{className:"semiBold font15 pointer",children:n.jsx("a",{href:"/adherer",onClick:()=>e(!r),style:{padding:"10px 15px"},children:"Adhérer"})}),n.jsx("li",{className:"semiBold font15 pointer",children:n.jsx("a",{href:"Promouvoir",onClick:()=>e(!r),style:{padding:"10px 15px"},children:"Promouvoir"})}),n.jsx("li",{className:"semiBold font15 pointer",children:n.jsx("a",{href:"/apprendre",onClick:()=>e(!r),style:{padding:"10px 15px"},children:"Apprendre"})}),n.jsx("li",{className:"semiBold font15 pointer",children:n.jsx("a",{href:"/enseigner",onClick:()=>e(!r),style:{padding:"10px 15px"},children:"Enseigner"})}),n.jsx("li",{className:"semiBold font15 pointer",children:n.jsx("a",{href:"/divers",onClick:()=>e(!r),style:{padding:"10px 15px"},children:"Divers"})})]})]})}const ft=o.div`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${r=>r.sidebarOpen?"0px":"-400px"};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`,jt=o.div`
  padding: 20px 0;
`,gt=o.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`,vt=o.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;function Nt({toggleSidebar:r}){return n.jsx(Bt,{className:"darkBg",onClick:()=>r(!1)})}const Bt=o.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  opacity: 0.8;
`;function Et(r){return n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:22,viewBox:"0 0 28 22",...r,children:[n.jsx("path",{"data-name":"Line 5",fill:"none",stroke:"#0b093b",strokeLinecap:"round",strokeWidth:2,d:"M1 1h26"}),n.jsx("path",{"data-name":"Line 6",fill:"none",stroke:"#0b093b",strokeLinecap:"round",strokeWidth:2,d:"M1 11h26"}),n.jsx("path",{"data-name":"Line 7",fill:"none",stroke:"#0b093b",strokeLinecap:"round",strokeWidth:2,d:"M1 21h26"})]})}function Gt(){const[r,e]=cr.useState(window.scrollY),[t,i]=cr.useState(!1);return cr.useEffect(()=>(window.addEventListener("scroll",()=>e(window.scrollY)),()=>{window.removeEventListener("scroll",()=>e(window.scrollY))}),[r]),n.jsxs(n.Fragment,{children:[n.jsx(xt,{sidebarOpen:t,toggleSidebar:i}),t&&n.jsx(Nt,{toggleSidebar:i}),n.jsx(bt,{className:"flexCenter animate whiteBg",style:r>100?{height:"60px"}:{height:"80px"},children:n.jsxs(At,{className:"container flexSpaceCenter",children:[n.jsx("a",{href:"/accueil",className:"pointer flexNullCenter",children:n.jsx($n,{})}),n.jsx(wt,{className:"pointer",onClick:()=>i(!t),children:n.jsx(Et,{})}),n.jsxs(It,{className:"flexNullCenter",children:[n.jsx("li",{className:"semiBold font15 pointer",children:n.jsx("a",{href:"/accueil",style:{padding:"10px 15px"},children:"Accueil"})}),n.jsx("li",{className:"semiBold font15 pointer",children:n.jsx("a",{href:"Forum",style:{padding:"10px 15px"},children:"Forum"})}),n.jsx("li",{className:"semiBold font15 pointer",children:n.jsx("a",{href:"Activités",style:{padding:"10px 15px"},children:"Activités"})}),n.jsx("li",{className:"semiBold font15 pointer",children:n.jsx("a",{href:"Contact",style:{padding:"10px 15px"},children:"Nous connaître"})}),n.jsx("li",{className:"semiBold font15 pointer",children:n.jsx("a",{href:"/adherer",style:{padding:"10px 15px"},children:"Adhérer"})}),n.jsx("li",{className:"semiBold font15 pointer",children:n.jsx("a",{href:"Promouvoir",style:{padding:"10px 15px"},children:"Promouvoir"})}),n.jsx("li",{className:"semiBold font15 pointer",children:n.jsx("a",{href:"/apprendre",style:{padding:"10px 15px"},children:"Apprendre"})}),n.jsx("li",{className:"semiBold font15 pointer",children:n.jsx("a",{href:"/enseigner",style:{padding:"10px 15px"},children:"Enseigner"})}),n.jsx("li",{className:"semiBold font15 pointer",children:n.jsx("a",{href:"/divers",style:{padding:"10px 15px"},children:"Divers"})})]})]})})]})}const bt=o.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`,At=o.div`
  position: relative;
  height: 100%;
`,wt=o.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`,It=o.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;function qt(r){return n.jsx("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"32px",height:"42px",viewBox:"0 0 232 242",enableBackground:"new 0 0 232 242",xmlSpace:"preserve",...r,children:n.jsx("image",{id:"image0",width:"232",height:"242",x:"0",y:"0",xlinkHref:`data:image/png;base64,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`})})}function Rt(){const r=()=>new Date().getFullYear();return n.jsx(zt,{children:n.jsx("div",{className:"darkBg",children:n.jsx("div",{className:"container",children:n.jsxs(Ut,{className:"flexSpaceCenter",style:{padding:"30px 0"},children:[n.jsxs(sn,{className:"flexCenter animate pointer",to:"home",smooth:!0,offset:-80,children:[n.jsx(qt,{}),n.jsx("h1",{className:"font15 extraBold ",style:{marginLeft:"15px"},children:"APIRP"})]}),n.jsxs(St,{className:" font13",children:["© ",r()," - ",n.jsx("span",{className:"darkRedColor font13",children:"Rosalie & Ornella"})," - No Right Reserved"]}),n.jsx(sn,{className:" animate pointer font13",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:"Back to top"})]})})})})}const zt=o.div`
  width: 100%;
`,Ut=o.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`,St=o.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;function Q({tag:r,title:e,text:t,action:i,author:s}){return n.jsx(Ct,{className:"animate pointer",onClick:i?()=>i():null,children:n.jsxs(yt,{className:"whiteBg radius8 shadow",children:[n.jsx("h3",{className:"font20 extraBold darkColor",children:e}),n.jsx("p",{className:"font13",style:{padding:"30px 0"},children:t}),n.jsx("p",{className:"font13 extraBold",children:s}),n.jsx("div",{className:"flex",children:n.jsx("p",{className:"tag coralBg radius6 font13 extraBold",children:r})})]})})}const yt=o.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`,Ct=o.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  :hover {
    opacity: 0.5;
  }
`;function J({title:r,action:e,border:t}){return n.jsx(Yt,{className:"animate pointer radius8",onClick:e?()=>e():null,border:t,children:r})}const Yt=o.button`
  border: 1px solid ${r=>r.border?"#7b151a":"#CD212A"};
  background-color: ${r=>r.border?"transparent":"#CD212A"};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${r=>r.border?"#7b151a":"#fff"};
  :hover {
    background-color: ${r=>r.border?"transparent":"#7b151a"};
    border: 1px solid #7b151a;
    color: ${r=>r.border?"#CD212A":"#fff"};
  }
`,Pt="/assets/Header-Activites-DwGlyY33.jpg";function Mt(){return n.jsxs(Vt,{className:"container flexSpaceCenter",children:[n.jsx(Ft,{className:"flexCenter",children:n.jsxs("div",{children:[n.jsxs("h1",{className:"extraBold font60",children:[n.jsx("span",{className:"darkColor",children:"Activités"})," culutrelles"]}),n.jsx(kt,{className:"font15",children:"Bienvenue sur notre page activités culturelles. Explorez la richesse culturelle italienne : concerts envoûtants, expositions captivantes, et littérature inspirante !     "}),n.jsx(Ot,{children:n.jsx(J,{title:"Voir Plus"})})]})}),n.jsx(Tt,{children:n.jsx(Zt,{children:n.jsx(Lt,{className:"radius8",src:Pt,alt:"office",style:{zIndex:9}})})})]})}function Qt(){return n.jsx(Wt,{children:n.jsx("div",{className:"whiteBg",children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"row textCenter",children:[n.jsx("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:n.jsx(Q,{title:"Concours Dante Dì",text:"Le Consulat Général d’Italie à Paris, en collaboration avec l’Institut Culturel Italien de Paris, lance le concours DANTE DÌ à l’occasion du Septième Centenaire de la mort de Dante, organisé par la Société Dante Alighieri - Comites.[...]",tag:"Lire plus",action:()=>alert("clicked")})}),n.jsx("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:n.jsx(Q,{title:"Paolo Fresu et Daniele di Bonaventura en concert.",text:"Mercredi  21 Oct 2020 de 19h à 20h30, l'IIC (50, rue de Varenne) nous invite au concert de Paolo Fresu et Daniele di Bonaventura. Paolo Fresu est l’un des plus grands trompettistes de jazz d’aujourd’hui.[...]",tag:"Lire plus",action:()=>alert("clicked")})}),n.jsx("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:n.jsx(Q,{title:"Sicilia, Tunisia, ...",text:"Sur scène à Nanterre, «Sicilia.» Ce spectacle a été joué plus de 140 fois, traduit en italien et anglais, et joué en France et à l'étranger [...].",tag:"Lire plus",action:()=>alert("clicked")})})]}),n.jsxs("div",{className:"row textCenter",children:[n.jsx("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:n.jsx(Q,{title:"Italissimo 2020",text:"La cinquième édition d’ITALISSIMO, le festival de littérature et culture italiennes, qui devait se tenir en avril, aura lieu du 8 au 13 octobre 2020.[...]",tag:"Lire plus",action:()=>alert("clicked")})}),n.jsx("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:n.jsx(Q,{title:"Exposition Gramsci à l'IIC",text:"Pour célébrer la richesse et la vivacité de la pensée d’Antonio Gramsci, la Fondation Gramsci et l’Institut culturel italien de Paris vous invitent à découvrir l’exposition « Les Cahiers de prison et la France »[...]",tag:"Lire plus",action:()=>alert("clicked")})}),n.jsx("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:n.jsx(Q,{title:"L'essor des séries italiennes à l'IIC",text:"Le 22 septembre 2020 à 19h, l'Institut culturel italien vous convie à une rencontre consacrée à la Fiction à l'italienne. De Gomorra à la série de Paolo Sorrentino, The young Pope.[...]",tag:"Lire plus",action:()=>alert("clicked")})}),n.jsx("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:n.jsx(Q,{title:"Erri De Luca, au MK2 Bibliothèque",text:`\r
                L’écrivain italien Erri De Luca sera au mk2 Bibliothèque (Paris 13° ) du vendredi 18 au dimanche 20 septembre 2020 pour une série de trois entretiens et la projection d’un film qu’il présentera.[...]`,tag:"Lire plus",action:()=>alert("clicked")})}),n.jsx("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:n.jsx(Q,{title:"Soirée de chants traditionnels italiens et stage de chant",text:"Le Studio DTM - Danse Théâtre Musique accueille le 20 Mars 2020 à 20h30 un artiste italien, pour une soirée de chants et bals traditionnels des régions Marche et Abruzzo.[...]",tag:"Lire plus",action:()=>alert("clicked")})}),n.jsx("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:n.jsx(Q,{title:"Cézanne et Rêve d’Italie au Musée Marmottan.",text:"Au musée Marmottan Monet, Paris 16ème, vient de s’ouvrir une exposition inédite intitulée «Cézanne et les maîtres. Rêve d’Italie». Elle aura lieu jusqu’au 5 juillet 2020.[...]",tag:"Lire plus",action:()=>alert("clicked")})})]}),n.jsx("div",{className:"row flexCenter",children:n.jsx("div",{style:{margin:"50px 0",width:"200px"}})})]})})})}const Wt=o.section`
  width: 100%;
  padding-top: 20px;
`,Vt=o.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`,Ft=o.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`,Tt=o.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`,kt=o.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`,Ot=o.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;o.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;const Zt=o.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`,Lt=o.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;function H({img:r,title:e,text:t,action:i}){return n.jsxs(Jt,{children:[n.jsx(Dt,{className:"aniamte pointer",onClick:i?()=>i():null,children:n.jsx("img",{className:"radius8",src:r,alt:"project"})}),n.jsx("h3",{className:"font20 extraBold",children:e}),n.jsx("p",{className:"font13",children:t})]})}const Jt=o.div`
  width: 100%;
  margin-top: 30px;
  img {
    width: 100%;
    height: auto;
    margin: 20px 0;
  }
  h3 {
    padding-bottom: 10px;
  }
`,Dt=o.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  padding: 0px;
  margin: 0px;
  :hover > img {
    opacity: 0.5;
  }
`,Kt="/assets/bulletin1-DutwIJe6.png",Ht="/assets/bulletin2-BDVmf7LQ.png",Xt="/assets/bulletin3-Clx44Zdy.png",$t="/assets/bulletin4-CM_chRWs.png",_t="/assets/bulletin5-DDNWtWJ-.png",ri="/assets/bulletin6-f5FuQ2IO.png",ni="/assets/Header-Contact-CpdXn06A.jpg";function ei(){return n.jsxs(ti,{className:"container flexSpaceCenter",children:[n.jsx(ii,{className:"flexCenter",children:n.jsxs("div",{children:[n.jsxs("h1",{className:"extraBold font60",children:["Nous",n.jsx("span",{className:"darkColor",children:" contacter"})]}),n.jsxs(ai,{className:"font15",children:["Pour nous signaler tout changement de coordonnées personnelles (adresse de domicile, téléphone, courriel) ou professionnelles (changement d’établissement de rattachement, de statut, etc.), merci d’envoyer un courriel à : ",n.jsx("span",{className:"semiBold",children:"apirp.association@gmail.com."}),n.jsx("br",{}),"Pour les renouvellement d’adhésion et pour les commandes de plaquettes pour la promotion de l’italien, nos adhérents peuvent aussi se servir des formulaires publiés dans les deux dernières page de notre bulletin annuel."]}),n.jsx("h3",{children:"Mail : apirp.association@gmail.com"}),n.jsx("br",{}),n.jsxs("h3",{children:["Suivez nous sur ",n.jsx("a",{href:"https://m.facebook.com/APIRP/",target:"_blank",className:"darkColor",children:"Facebook"})," !"]})]})}),n.jsx(si,{children:n.jsx(oi,{children:n.jsx(ci,{className:"radius8",src:ni,alt:"office",style:{zIndex:9}})})})]})}const ti=o.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`,ii=o.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`,si=o.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`,ai=o.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;o.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;const oi=o.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`,ci=o.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;function li(){return n.jsx(nn,{id:"projects",children:n.jsx("div",{className:"whiteBg",children:n.jsx("div",{className:"container",children:n.jsxs(Rr,{children:[n.jsx("h1",{className:"font40 extraBold darkColor",children:"L'association et ses statuts"}),n.jsx("br",{}),n.jsx("h1",{className:"font30 semiBold",children:"Présentation de l'APIRP: Association des Professeurs d'Italien de la Région Parisienn"}),n.jsx("br",{}),n.jsxs("p",{className:"font15",children:[" ",n.jsx("br",{}),"Le 9 mai 1977 était déclarée à la Préfecture de Police de Paris la création de « L'Amicale des professeurs d'italien de la région parisienne ». Rebaptisée « Association des professeurs d'italien de la région parisienne » (APIRP) en 1984, elle eut pour président(e)s successifs(ives) des professeurs de Collège et de Lycée de l’Éducation Nationale, Jean Constantin, Pierre Méthivier, Anne Mazire, Gabrielle Kerleroux, Ketty Zanforlini et depuis janvier 2017, Romina De Lucia."]}),n.jsxs("p",{className:"font15",children:[" ",n.jsx("br",{}),"Quarante ans après  sa création, sa vocation originelle (« établir et développer des liens de solidarité et d'amitié entre les italianistes de la région parisienne ») reste toujours d'actualité. Mais l'APIRP a évolué avec le temps. De nouvelles actions sont en effet apparues nécessaires : tout d'abord, la collecte d'informations fiables au sujet des implantations de postes dans les trois académies; ensuite, la mise en commun d'informations culturelles, de ressources pédagogiques, d'idées pour les cours; et enfin, l'entre-aide en cas de mutation, de fragilisation de poste, etc. Pour ce faire, l'APIRP entretient un dialogue régulier et constructif avec l'Inspection d'italien, en toute indépendance."]}),n.jsxs("p",{className:"font15",children:[" ",n.jsx("br",{}),"L'APIRP a élaboré une plaquette de promotion de la langue italienne à destination des parents et des élèves en situation de choix, publie un bulletin par an, réunit ses adhérents en assemblée générale au début et à la fin de chaque année scolaire et a également créé un site Internet et une page Facebook."]}),n.jsxs("p",{className:"font15",children:[" ",n.jsx("br",{}),"Elle est présente lors de manifestations culturelles italo-françaises (Forum des association italiennes du XIIIè arrondissement, Festa del libro des Blancs Manteaux, réceptions au Centre culturel et à l'Ambassade d'Italie, entre autres). Elle représente aussi tous les professeurs d'italien de l'Ile de France au Congrès annuel de la FNAI (Fédération Nationale des Associations d'Italianistes)."]}),n.jsxs("p",{className:"font15 semiBold",children:[" ",n.jsx("br",{}),"Pour nous contacter : apirp.association@gmail.com"]})]})})})})}const nn=o.section`
  width: 100%;
  margin: 50px 0;
`,Rr=o.div`
  @media (max-width: 860px) {
   
  }
`;function di(){return n.jsx(nn,{id:"projects",children:n.jsx("div",{className:"whiteBg",children:n.jsx("div",{className:"container",children:n.jsxs(Rr,{children:[n.jsx("h1",{className:"font40 extraBold darkColor",children:"Les élus au C.A."}),n.jsx("br",{}),n.jsx("h1",{className:"font30 semiBold",children:"Membres du C.A. et du Bureau élus le 16 mars 2019"}),n.jsx("br",{}),n.jsxs("p",{className:"font15",children:[" ",n.jsx("br",{}),"Président : Olivier Morin            "]}),n.jsxs("p",{className:"font15",children:[" ",n.jsx("br",{}),"Vice-Présidente : Ilaria Madonna            "]}),n.jsxs("p",{className:"font15",children:[" ",n.jsx("br",{}),"Secrétaire : Estelle Paint            "]}),n.jsxs("p",{className:"font15",children:[" ",n.jsx("br",{}),"Trésorière : Valérie Guillouet            "]}),n.jsxs("p",{className:"font15 ",children:[" ",n.jsx("br",{}),"Correspondante APIRP pour l'académie de Paris : Alexandra Martinez "]}),n.jsxs("p",{className:"font15 ",children:[" ",n.jsx("br",{}),"Correspondant APIRP pour l'académie de Créteil : Graziano Tassi            "]}),n.jsxs("p",{className:"font15",children:[" ",n.jsx("br",{}),"Correspondante APIRP pour l'académie de Versailles : Charlotte Ostrovsky-Richard          "]}),n.jsxs("p",{className:"font15",children:[" ",n.jsx("br",{}),"Secrétaire adjointe + correspondante “CPGE”: Gabrielle Kerleroux        "]}),n.jsxs("p",{className:"font15",children:[" ",n.jsx("br",{}),"Trésorière adjointe : Patrizia Bisson   "]}),n.jsxs("p",{className:"font15",children:[" ",n.jsx("br",{}),"Webmestre : Maria Letizia Gabanini      "]}),n.jsxs("p",{className:"font15",children:[" ",n.jsx("br",{}),"Contacts avec les associations italiennes de l'Île-de-France : Patrizia Bisson et Alexandra Martinez      "]}),n.jsxs("p",{className:"font15",children:[" ",n.jsx("br",{}),"Contact avec les Universités: Graziano Tassi      "]}),n.jsxs("p",{className:"font15",children:[" ",n.jsx("br",{}),"Contact avec l'IIC et le Consulat : Olivier Morin - Ilaria Madonna    "]}),n.jsxs("p",{className:"font15",children:[" ",n.jsx("br",{}),"Redactrice en chef du Bulletin : Charlotte Ostrovsky-Richard    "]}),n.jsxs("p",{className:"font15",children:[" ",n.jsx("br",{}),"Directeur artistique du Bulletin: Francesco Forlani  "]}),n.jsxs("p",{className:"font15",children:[" ",n.jsx("br",{}),"Présidents Honoraires : Madame Anne Mazire "]}),n.jsxs("p",{className:"font15",children:[" ",n.jsx("br",{}),"Membre honoraire: Ketty Zanforlini        "]})]})})})})}function pi(){return n.jsx(nn,{id:"projects",children:n.jsx("div",{className:"whiteBg",children:n.jsxs("div",{className:"container",children:[n.jsxs(Rr,{children:[n.jsx("h1",{className:"font40 extraBold darkColor",children:"Les bulletins de l'association"}),n.jsx("br",{}),n.jsx("h1",{className:"font30 semiBold",children:" Le dernier bulletin 2018 - 2019 a été consacré à la cuisine italienne"}),n.jsx("br",{}),n.jsx("p",{className:"font15",children:"Si vous souhaitez commander l'un de ces bulletin vous pouvez envoyer un chèque de 4 € à l'ordre de l'APIRP à l'adresse suivante : Mme Valérie GUILLOUET - 10, rue Blondel - 92400 COURBEVOIE"})]}),n.jsxs("div",{className:"row textCenter",children:[n.jsx("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:n.jsx(H,{img:Kt,title:"La carte",action:()=>window.open("https://drive.google.com/file/d/1Iqk0kTEXSH5eEQyVRmXXjufPeTUmlwHX/view","_blank")})}),n.jsx("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:n.jsx(H,{img:Ht,title:"Le menu",action:()=>window.open("https://drive.google.com/file/d/1AhBJZCmjYmjvKCe58RbusWGJzaMnC7i6/view","_blank")})}),n.jsx("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:n.jsx(H,{img:Xt,title:"Lettre aux adhérents",action:()=>window.open("https://drive.google.com/file/d/1jCvJfoMlt2iwGd-ebsV9iu0X-jpdbr1n/view","_blank")})})]}),n.jsxs(Rr,{children:[n.jsx("h1",{className:"font30 semiBold",children:" Ci-dessous les sommaires des derniers bulletins"}),n.jsx("br",{})]}),n.jsxs("div",{className:"row textCenter",children:[n.jsx("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:n.jsx(H,{img:$t,title:"Copertia bulletin",action:()=>window.open("https://drive.google.com/file/d/18nlDFxe32kEFDDg4a_mYTsgHAW3uwTfR/view","_blank")})}),n.jsx("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:n.jsx(H,{img:_t,title:"Sommaire",action:()=>window.open("https://drive.google.com/file/d/1J_ffMlPtrx7OyrkYuz1gO14r5PcK-ms6/view","_blank")})}),n.jsx("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:n.jsx(H,{img:ri,title:"Sommaire",action:()=>window.open("https://drive.google.com/file/d/0B34j4qalEtJseHdNS1FRX0xKVGM/view?resourcekey=0-L2vbnBD7zasV7NsrSUX0GQ","_blank")})})]})]})})})}const hi="/assets/Promouvoir-1-DzDcPPMT.jpg",ui="/assets/Header-Promouvoir-B3wyvMh_.jpg",mi="/assets/Promouvoir-2-Cn_ZsLIt.jpg";function xi(){return n.jsxs(fi,{className:"container flexSpaceCenter",children:[n.jsx(ji,{className:"flexCenter",children:n.jsxs("div",{children:[n.jsxs("h1",{className:"extraBold font60",children:[n.jsx("span",{className:"darkColor",children:"Promouvoir"})," l'italien"]}),n.jsx(vi,{className:"font15",children:"Bienvenue sur notre page promouvoir l'italien. Dans le paysage culturel et linguistique mondial, la langue italienne brille de sa propre lumière. Au cœur de cette vitalité linguistique se trouve l'engagement passionné de notre association dévouées à sa promotion."}),n.jsx(Ni,{children:n.jsx(J,{title:"Voir Plus"})})]})}),n.jsx(gi,{children:n.jsx(Bi,{children:n.jsx(Ei,{className:"radius8",src:ui,alt:"office",style:{zIndex:9}})})})]})}const fi=o.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`,ji=o.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`,gi=o.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`,vi=o.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`,Ni=o.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;o.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;const Bi=o.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`,Ei=o.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;function Gi(){return n.jsxs(bi,{id:"projects",children:[n.jsx("div",{className:"whiteBg",children:n.jsx("div",{className:"container",children:n.jsxs(En,{children:[n.jsx("h1",{className:"font40 extraBold",children:"La plaquette éditée par l'APIRP"}),n.jsxs("p",{className:"font15",children:[" ",n.jsx("br",{}),"L'APIRP a édité un dépliant pour la promotion de l'apprentissage de la langue italienne dans les établissements scolaires de l'Île-de-France."]})]})})}),n.jsx("div",{className:"lightBg",children:n.jsx("div",{className:"container",children:n.jsxs(Gn,{className:"flexSpaceCenter",children:[n.jsx(An,{children:n.jsx(In,{className:"flexCenter",children:n.jsx("img",{className:"radius8",src:hi,alt:"add"})})}),n.jsx(wn,{children:n.jsx(In,{className:"flexCenter",children:n.jsx("img",{className:"radius8",src:mi,alt:"add"})})})]})})}),n.jsx("div",{className:"lightBg",children:n.jsx("div",{className:"container",children:n.jsxs(Gn,{className:"flexSpaceCenter",children:[n.jsx(An,{children:n.jsxs("h4",{className:"font15",children:[" ",n.jsx("br",{}),"Télécharger le bon de commande pour pouvoir commander les dépliants :"]})}),n.jsx(wn,{children:n.jsxs(bn,{className:"flexNullCenter",style:{margin:"30px 0"},children:[n.jsx("div",{style:{width:"190px"},children:n.jsx(J,{title:"Adhérent",action:()=>window.open("https://drive.google.com/file/d/0B34j4qalEtJsMGlEcmFFWlJmY1E/view?resourcekey=0-19mliwKeZAoPK9XBmNVPwg","_blank")})}),n.jsx("div",{style:{width:"190px",marginLeft:"15px"},children:n.jsx(J,{title:"Non adhérent",action:()=>window.open("https://drive.google.com/file/d/0B34j4qalEtJsd2xZM3dxclI2UTg/view?resourcekey=0-AK-KZe_UzMKDFomtWhSyGA","_blank")})})]})})]})})}),n.jsx("div",{className:"whiteBg",children:n.jsx("div",{className:"container",children:n.jsxs(En,{children:[n.jsx("h4",{className:"font15",children:"Réponses au Quizz de la plaquette"}),n.jsx(bn,{className:"flexNullCenter",style:{margin:"30px 0"},children:n.jsx("div",{style:{width:"190px",marginLeft:"15px"},children:n.jsx("button",{className:"button1",onClick:()=>window.open("https://drive.google.com/file/d/0B34j4qalEtJsd2psVS1tN3plaFU/view?resourcekey=0-nlUxtG1Hf7kOX6BhtZuY2w","_blank"),children:" Les réponses "})})})]})})})]})}const bi=o.section`
  width: 100%;
`,En=o.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`,Gn=o.div`
  padding: 100px 0 ;
  margin: 50px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
    
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 30px 0 30px 0;
    margin: 50px 0 50px 0;
  }
`,bn=o.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`,An=o.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`,wn=o.div`
  width: 50%;
  
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`,In=o.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`,Ai="/assets/Forum-1-CW2hFb6N.jpg",wi="/assets/Programme21-CvWhcx5L.jpg",Ii="/assets/Programme20-CIM70dMf.jpg",qi="/assets/Header-Forum-CaCNw0xL.jpg";function Ri(){return n.jsxs(Qi,{className:"container flexSpaceCenter",children:[n.jsx(Wi,{className:"flexCenter",children:n.jsxs("div",{children:[n.jsxs("h1",{className:"extraBold font60",children:[n.jsx("span",{className:"darkColor",children:"Forum"})," des associations franco-italiennes"]}),n.jsx(Fi,{className:"font15",children:"Bienvenue sur notre page forum des associastions. Découvrez le prochain forum des associations franco-italiennes et son programme."}),n.jsx(Ti,{children:n.jsx(J,{title:"Voir Plus"})})]})}),n.jsx(Vi,{children:n.jsx(ki,{children:n.jsx(Oi,{className:"radius8",src:qi,alt:"office",style:{zIndex:9}})})})]})}function zi(){return n.jsx(Ui,{children:n.jsx("div",{className:"container",children:n.jsxs(Si,{className:"flexSpaceCenter",children:[n.jsx(Ci,{children:n.jsx(Pi,{children:n.jsx(Mi,{className:"flexCenter",children:n.jsx("img",{className:"radius8",src:Ai,alt:""})})})}),n.jsxs(Yi,{children:[n.jsx("h4",{className:"font15 semiBold",children:"Forum des associations italiennes virtuel"}),n.jsx("br",{}),n.jsx("h2",{className:"font40 extraBold darkColor",children:"APIRP 2020"}),n.jsxs("p",{className:"font12",children:[n.jsx("br",{}),"Le forum des associations franco-italiennes initialement prévu place Baudoyer à Paris, se déroulera cette année de façon virtuelle le 20 et 21 juin 2020. L' APIRP participera avec une intervention de Olivier Morin et Ilaria Madonna, président et vice-présidente de l'association, le samedi 20 juin de 16h30 à 16h50. Pour l'occasion Ilaria Madonna a créé un padlet pour illustrer les projets menés par l'APIRP, intitulé APIRP 2020."]}),n.jsx("br",{}),n.jsx("p",{className:"font12",children:" Vous y trouverez des renseignements sur la diffusion de l'enseignement de l'italien dans les trois académies franciliennes, des documents pour la promotion de notre belle langue, une vidéo pour présenter le bilan des activités de l'APIRP de cette année, le dossier ESABAC, le programme du concours de recrutement ainsi que des projets menés par nos adhérents."}),n.jsxs("p",{className:"font12",children:["Plus d'infos sur les",n.jsx("a",{href:"https://padlet.com/apirpassociation/apirp2020",children:" renseignements."})]}),n.jsx("br",{}),n.jsx("p",{className:"font12",children:"L'intégralité du forum sera retransmise sur la page Facebook du Forum des Associations italiennes. "}),n.jsxs(yi,{className:"flexNullCenter",style:{margin:"30px 0"},children:[n.jsx("div",{style:{width:"190px"},children:n.jsx(J,{title:"Programme 20 juin",action:()=>window.open(Ii,"_blank")})}),n.jsx("div",{style:{width:"190px",marginLeft:"15px"},children:n.jsx(J,{title:"Programme 21 juin",action:()=>window.open(wi,"_blank")})})]})]})]})})})}const Ui=o.section`
  width: 100%;
`,Si=o.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`,yi=o.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`,Ci=o.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`,Yi=o.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`,Pi=o.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`,Mi=o.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`,Qi=o.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`,Wi=o.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`,Vi=o.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`,Fi=o.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`,Ti=o.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;o.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;const ki=o.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`,Oi=o.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;function ts(){return n.jsxs(n.Fragment,{children:[n.jsx(Gt,{}),n.jsx(ae,{children:n.jsxs(oe,{children:[n.jsx(Y,{path:"/accueil",element:n.jsx(an,{})}),n.jsx(Y,{path:"/",element:n.jsx(an,{})}),n.jsx(Y,{path:"Forum",element:n.jsxs(n.Fragment,{children:[n.jsx(Ri,{}),n.jsx(zi,{})]})}),n.jsx(Y,{path:"Activités",element:n.jsxs(n.Fragment,{children:[n.jsx(Mt,{}),n.jsx(Qt,{})]})}),n.jsx(Y,{path:"Contact",element:n.jsxs(n.Fragment,{children:[n.jsx(ei,{}),n.jsx(li,{}),n.jsx(di,{}),n.jsx(pi,{})]})}),n.jsx(Y,{path:"/adherer",element:n.jsx(ce,{})}),n.jsx(Y,{path:"Promouvoir",element:n.jsxs(n.Fragment,{children:[n.jsx(xi,{}),n.jsx(Gi,{})]})}),n.jsx(Y,{path:"/apprendre",element:n.jsx(le,{})}),n.jsx(Y,{path:"/enseigner",element:n.jsx(pe,{})}),n.jsx(Y,{path:"/divers",element:n.jsx(de,{})})]})}),n.jsx(Rt,{})]})}export{ts as default};
