(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(35)},35:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(18),o=a.n(r),l=a(7),m=a(8),i=a(10),u=a(9),s=a(11),p=a(19),d=a(5),h=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={items:[]},a}return Object(s.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.openweathermap.org/data/2.5/forecast?q=Yogyakarta,id&mode=json&appid=da78c92a761f8c4a50e5e6bcd5b1c51c&units=metric").then(function(e){return e.json()}).then(function(e){return e.list.map(function(e){return{dt_txt:"".concat(e.dt_txt),temp:"".concat(e.main.temp),temp_min:"".concat(e.main.temp_min),temp_max:"".concat(e.main.temp_max),weather:"".concat(e.weather[0].main)}})}).then(function(t){return e.setState({items:t,isLoaded:!1})}).catch(function(e){return console.log("parsing failed",e)})}},{key:"render",value:function(){var e=this.state.items;return c.a.createElement("div",null,c.a.createElement("h1",{className:"text-center"},"Prakiraan Cuaca Yogyakarta"),c.a.createElement("table",{className:"table table-bordered",border:"1"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"Datetime"),c.a.createElement("th",{scope:"col"},"Temp"),c.a.createElement("th",{scope:"col"},"Temp Min"),c.a.createElement("th",{scope:"col"},"Temp Max"),c.a.createElement("th",{scope:"col"},"Weather"))),c.a.createElement("tbody",null,e.length>0?e.map(function(e){var t=e.dt_txt,a=e.temp,n=e.temp_min,r=e.temp_max,o=e.weather;return c.a.createElement("tr",{key:t},c.a.createElement("th",{scope:"row"},t),c.a.createElement("td",null,a),c.a.createElement("td",null,n),c.a.createElement("td",null,r),c.a.createElement("td",null,o))}):null)))}}]),t}(n.Component),E=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement(p.a,null,c.a.createElement("center",null,c.a.createElement("div",null,c.a.createElement("div",{className:"content"},c.a.createElement(d.a,{exact:!0,path:"/",component:h})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.99fa4062.chunk.js.map