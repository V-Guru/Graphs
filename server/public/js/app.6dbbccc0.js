(function(e){function t(t){for(var i,c,o=t[0],s=t[1],l=t[2],h=0,b=[];h<o.length;h++)c=o[h],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&b.push(r[c][0]),r[c]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);d&&d(t);while(b.length)b.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(i=!1)}i&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var i={},r={app:0},a=[];function c(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=i,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(n,i,function(t){return e[t]}.bind(null,i));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0cfd":function(e,t,n){},"1eb4":function(e,t,n){"use strict";n("0cfd")},"37aa":function(e,t,n){"use strict";n("f9c5")},"3b75":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23");function r(e,t,n,r,a,c){var o=Object(i["m"])("canvas-work");return Object(i["g"])(),Object(i["c"])(o)}var a=Object(i["p"])("data-v-d20f0bbe");Object(i["i"])("data-v-d20f0bbe");var c=Object(i["e"])("canvas",{id:"my_canvas",width:"800",height:"500"},null,-1),o=Object(i["d"])('<div class="container" data-v-d20f0bbe><ul id="exampele-1" data-v-d20f0bbe><li data-v-d20f0bbe><div class="name" data-v-d20f0bbe>ID</div><div class="name" data-v-d20f0bbe>MAC</div><div class="name" data-v-d20f0bbe>PARENT</div><div class="name" data-v-d20f0bbe>LAYER</div><div class="name" data-v-d20f0bbe>SPEED</div><div class="name" data-v-d20f0bbe>STATUS</div><div class="name" data-v-d20f0bbe>LAST ACTIVE</div></li></ul></div>',1),s={class:"container"},l={id:"exampele-1"},d={class:"name"},h={class:"name"},b={class:"name"},v={class:"name"},u={class:"name"},f={class:"name"},O={class:"name"};Object(i["h"])();var j=a((function(e,t,n,r,j,g){var p=Object(i["m"])("base-card");return Object(i["g"])(),Object(i["c"])("section",null,[Object(i["e"])(p,null,{default:a((function(){return[c]})),_:1}),Object(i["e"])(p,null,{default:a((function(){return[Object(i["e"])("div",null,[o,Object(i["e"])("div",s,[Object(i["e"])("ul",l,[(Object(i["g"])(!0),Object(i["c"])(i["a"],null,Object(i["k"])(g.getReceivedData,(function(e){return Object(i["g"])(),Object(i["c"])("li",{key:e.id},[Object(i["e"])("div",d,Object(i["n"])(e.id),1),Object(i["e"])("div",h,Object(i["n"])(e.mac),1),Object(i["e"])("div",b,Object(i["n"])(e.parent),1),Object(i["e"])("div",v,Object(i["n"])(e.layer),1),Object(i["e"])("div",u,Object(i["n"])(e.speed),1),Object(i["e"])("div",f,Object(i["n"])(e.status),1),Object(i["e"])("div",O,Object(i["n"])(e.time),1)])})),128))])])])]})),_:1})])})),g=(n("cb29"),n("d3b7"),Object(i["p"])("data-v-0e193134")),p=g((function(e,t){return Object(i["g"])(),Object(i["c"])("div",null,[Object(i["l"])(e.$slots,"default")])}));n("6ee8");const w={};w.render=p,w.__scopeId="data-v-0e193134";var D=w,C="http://localhost:4000api/posts",m={components:{BaseCard:D},data:function(){return{CanvasWidth:800,CanvasHeight:500,CanvasJsonData:[],DrawingObject:{root:{}},loading:!0,polling:null}},mounted:function(){var e=document.getElementById("my_canvas"),t=e.getContext("2d");this.vueCanvas=t,this.loadServerData()},computed:{getReceivedData:function(){return this.$store.state.GlobalReceivedData}},beforeUnmount:function(){clearInterval(this.polling)},created:function(){this.pollData()},methods:{pollData:function(){var e=this;this.polling=setInterval((function(){e.loadServerData()}),1e3)},setReceivedData:function(e){this.$store.state.GlobalReceivedData=e},loadServerData:function(){var e=this;fetch(C).then((function(e){if(e.ok)return e.json()})).then((function(t){e.isLoading=!1,console.log(JSON.stringify(t)),e.CanvasJsonData=t,e.setReceivedData(t),e.plotCanvas()})).catch((function(t){console.log(t),e.isLoading=!1,e.error="Failed to fetch data - please try again later."}))},plotCanvas:function(){var e,t,n,i,r,a,c,o=0,s=0,l=0,d=0,h=0,b=this.CanvasJsonData.length;for(o=0;o<b;o++)c=this.CanvasJsonData[o],1==c.layer&&(this.DrawingObject.root=c,this.DrawingObject.root["childern"]=[],this.DrawingObject.root["x"]=this.CanvasWidth/2,this.DrawingObject.root["y"]=50,this.DrawingObject.root["free_x_start"]=0,this.DrawingObject.root["isParent"]=!0,this.DrawingObject.root["free_x_end"]=this.CanvasWidth);for(this.DrawingObject.root=this.formatChildern(this.DrawingObject.root),e=this.DrawingObject.root.childern.length,s=0;s<e;s++)if(this.DrawingObject.root.childern[s].isParent)for(this.DrawingObject.root.childern[s]=this.formatChildern(this.DrawingObject.root.childern[s]),t=this.DrawingObject.root.childern[s].childern.length,l=0;l<t;l++)if(this.DrawingObject.root.childern[s].childern[l].isParent)for(this.DrawingObject.root.childern[s].childern[l]=this.formatChildern(this.DrawingObject.root.childern[s].childern[l]),n=this.DrawingObject.root.childern[s].childern[l].childern.length,d=0;d<n;d++)if(this.DrawingObject.root.childern[s].childern[l].childern[d].isParent)for(this.DrawingObject.root.childern[s].childern[l].childern[d]=this.formatChildern(this.DrawingObject.root.childern[s].childern[l].childern[d]),i=this.DrawingObject.root.childern[s].childern[l].childern[d].childern.length,h=0;h<i;h++)this.DrawingObject.root.childern[s].childern[l].childern[d].childern[h].isParent&&(this.DrawingObject.root.childern[s].childern[l].childern[d].childern[h]=this.formatChildern(this.DrawingObject.root.childern[s].childern[l].childern[d].childern[h]));for(r=this.DrawingObject.root,a=this.DrawingObject.root,this.drawCircle(r.x,r.y,r.id,a.x,a.y,r.status),e=this.DrawingObject.root.childern.length,s=0;s<e;s++)if(r=this.DrawingObject.root.childern[s],a=this.DrawingObject.root,this.drawCircle(r.x,r.y,r.id,a.x,a.y,r.status),this.DrawingObject.root.childern[s].isParent)for(t=this.DrawingObject.root.childern[s].childern.length,l=0;l<t;l++)if(r=this.DrawingObject.root.childern[s].childern[l],a=this.DrawingObject.root.childern[s],this.drawCircle(r.x,r.y,r.id,a.x,a.y,r.status),this.DrawingObject.root.childern[s].childern[l].isParent)for(n=this.DrawingObject.root.childern[s].childern[l].childern.length,d=0;d<n;d++)if(r=this.DrawingObject.root.childern[s].childern[l].childern[d],a=this.DrawingObject.root.childern[s].childern[l],this.drawCircle(r.x,r.y,r.id,a.x,a.y,r.status),this.DrawingObject.root.childern[s].childern[l].childern[d].isParent)for(i=this.DrawingObject.root.childern[s].childern[l].childern[d].childern.length,h=0;h<i;h++)r=this.DrawingObject.root.childern[s].childern[l].childern[d].childern[h],a=this.DrawingObject.root.childern[s].childern[l].childern[d],this.drawCircle(r.x,r.y,r.id,a.x,a.y,r.status)},formatChildern:function(e){var t,n=0,i=0,r=this.CanvasJsonData.length;for(n=0;n<r;n++)t=this.CanvasJsonData[n],e.mac==t.parent&&(t["childern"]=[],e.childern.push(t));var a=e.childern.length,c=e["free_x_end"]/(a+1),o=e["free_x_end"]/a;for(n=0;n<a;n++){e.childern[n]["x"]=c*(n+1),e.childern[n]["y"]=100*(e.childern[n].layer-1)+50,e.childern[n]["free_x_start"]=o*n,e.childern[n]["free_x_end"]=o*(n+1);var s=!1;for(i=0;i<r;i++){var l=this.CanvasJsonData[i];if(e.childern[n].mac==l.parent){s=!0;break}}e.childern[n]["isParent"]=s}return e},clearCanvas:function(){this.vueCanvas.clearRect(0,0,800,500)},drawRect:function(){this.clearCanvas(),this.vueCanvas.fillStyle="red",this.vueCanvas.fillRect(0,0,100,100)},drawCircle:function(e,t,n,i,r,a){"ONLINE"==a?(this.drawLine(i,r,e,t),this.vueCanvas.fillStyle="green"):this.vueCanvas.fillStyle="red",this.vueCanvas.beginPath(),this.vueCanvas.arc(e,t,25,0,2*Math.PI),this.vueCanvas.fill(),this.vueCanvas.fillStyle="black",this.vueCanvas.font="20px Georgia",this.vueCanvas.fillText(n,e,t,100)},drawLine:function(e,t,n,i){this.vueCanvas.beginPath(),this.vueCanvas.lineWidth=5,this.vueCanvas.moveTo(e,t),this.vueCanvas.lineTo(n,i),this.vueCanvas.stroke()}}};n("1eb4");m.render=j,m.__scopeId="data-v-d20f0bbe";var y=m,x={name:"App",components:{CanvasWork:y}};n("37aa");x.render=r;var _=x,P=n("5502"),S=Object(P["a"])({state:function(){return{GlobalReceivedData:[]}}}),R=Object(i["b"])(_);R.use(S),R.mount("#app")},"6ee8":function(e,t,n){"use strict";n("3b75")},f9c5:function(e,t,n){}});
//# sourceMappingURL=app.6dbbccc0.js.map