(this.webpackJsonptrees=this.webpackJsonptrees||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(2),o=a.n(s);a(12),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(13);var c=a(3),l=a(4),i=a(6),u=a(5),m=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={count:1,tags:["tag1","tag2","tag3"]},e.styles={fontSize:10,fontWeight:"bold"},e.handleIncrement=function(){e.setState({count:e.state.count+1})},e}return Object(l.a)(a,[{key:"renderTags",value:function(){return 0===this.state.tags.length?r.a.createElement("p",null,"There are no tags!"):r.a.createElement("ul",null,this.state.tags.map((function(e){return r.a.createElement("li",{key:e},e)})))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("span",{style:this.styles,className:this.getBadgeClass()},this.formatCount())),r.a.createElement("div",{className:"row"},r.a.createElement("button",{onClick:this.handleIncrement,className:"btn btn-secondary btn-sm m-2"},"Increment")),r.a.createElement("div",null,0===this.state.tags.length&&"Please create a new tag!"),r.a.createElement("div",{className:"row"},this.renderTags()))}},{key:"getBadgeClass",value:function(){var e="badge m-2 badge-";return e+=0===this.state.count?"warning":"primary"}},{key:"formatCount",value:function(){var e=this.state.count;return 0===e?"Zero":e}}]),a}(n.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.c78ebec1.chunk.js.map