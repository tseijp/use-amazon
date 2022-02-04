"use strict";(self.webpackChunk_use_book_docs=self.webpackChunk_use_book_docs||[]).push([[867],{876:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=c(t),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||i;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6364:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var r=t(7896),o=t(1461),i=(t(2784),t(876)),a=["components"],u={},l="Trouble Shoot",c={unversionedId:"troubleshooting",id:"troubleshooting",title:"Trouble Shoot",description:"No image When SSR (Server Side Rendering)",source:"@site/documents/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/use-book/documents/troubleshooting",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Book state",permalink:"/use-book/documents/api/state"}},s=[{value:"No image When SSR (Server Side Rendering)",id:"no-image-when-ssr-server-side-rendering",children:[{value:"If don&#39;t know ISBN existing on Amazon.",id:"if-dont-know-isbn-existing-on-amazon",children:[],level:3}],level:2}],p={toc:s};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"trouble-shoot"},"Trouble Shoot"),(0,i.kt)("h2",{id:"no-image-when-ssr-server-side-rendering"},"No image When SSR (Server Side Rendering)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Change url hosting image.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"useBook({isbn: xxx, isssl: true})\n")),(0,i.kt)("h3",{id:"if-dont-know-isbn-existing-on-amazon"},"If don't know ISBN existing on Amazon."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useBook")," will check if the same ISBN exists before and after")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"useBook({isbn: xxx, seach: 10})\n")))}f.isMDXComponent=!0}}]);