(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./src/components/Menu/MenuHamburger.js":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n("./node_modules/react/index.js"),s=u(o),i=u(n("./src/components/Menu/styles.scss"));function u(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=function(t){function n(){var t,a,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);for(var o=arguments.length,s=Array(o),u=0;u<o;u++)s[u]=arguments[u];return a=r=l(this,(t=n.__proto__||Object.getPrototypeOf(n)).call.apply(t,[this].concat(s))),r.state={menu:!1},r.handleActionMenu=function(){var t=e("#line1"),n=e("#line2"),a=e("#line3"),o=e("."+i.default.MenuContent),s=e("."+i.default.ItemHome),u=e("."+i.default.ItemAboutMe),l=e("."+i.default.ItemProject),c="rotateX(0deg) rotateY(0deg) translateX(0px) translateZ(0px)",f=c+" translateY(5px) rotateZ(-45deg)",d="rotateX(0deg) rotateY(0deg) rotateZ(-45deg)",m=c+" translateY(-5px) rotateZ(-45deg)",p=c+" translateY(5px) rotateZ(135deg)",g="rotateX(0deg) rotateY(0deg) rotateZ(135deg)",y=c+" translateY(-5px) rotateZ(45deg)",b={opacity:1},h=200;r.state.menu?(f=c+" translateY(5px) rotateZ(-45deg)",d="rotateX(0deg) rotateY(0deg) rotateZ(-45deg)",m=c+" translateY(-5px) rotateZ(-45deg)",p=c+" translateY(0px) rotateZ(0deg)",g="rotateX(0deg) rotateY(0deg) rotateZ(0deg)",y=c+" translateY(0px) rotateZ(0deg)",b={opacity:0},h=100,r.setState({menu:!1}),setTimeout(function(){r._transformAnimation(o,380,200,b)},1e3)):(r.setState({menu:!0}),r._transformAnimation(o,380,200,b)),t.css("transform",f),n.css("transform",d),a.css("transform",m),setTimeout(function(){t.css("transform",p),n.css("transform",g),a.css("transform",y)},250),r._transformAnimation(s,120,200,b),r._transformAnimation(u,96,300,b),r._transformAnimation(l,80,h,b)},l(r,a)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,o.Component),r(n,[{key:"_transformAnimation",value:function(t,n,r,o,s){t.animate(o,{step:function(t,r){e(this).css(a({transform:"translateX("+(t-1)*n+"px) translateY(0px) translateZ(0px)"},s))},duration:r},"linear")}},{key:"render",value:function(){var e=this;return s.default.createElement("div",{className:i.default.MenuHamber,onClick:function(){return e.handleActionMenu()}},s.default.createElement("a",{href:"#",className:i.default.MenuAction},s.default.createElement("div",{className:i.default.Line,id:"line1"}),s.default.createElement("div",{className:i.default.Line,id:"line2"}),s.default.createElement("div",{className:i.default.Line,id:"line3"})))}}]),n}();t.default=c}).call(this,n("./node_modules/jquery/dist/jquery.js"))}}]);
//# sourceMappingURL=8.516fda2a5.js.map
//# sourceMappingURL=8.516fda2a5.js.map