(window["webpackJsonprudys-tool"]=window["webpackJsonprudys-tool"]||[]).push([[0],{25:function(e,n,t){},36:function(e,n,t){e.exports=t(74)},41:function(e,n,t){},42:function(e,n,t){},43:function(e,n,t){},48:function(e,n,t){},74:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(30),i=t.n(r),s=(t(41),t(42),t(34)),c=t(35),l=t(14),u=t(15),d=t(18),h=t(16),m=t(19),y=(t(25),t(43),function(e){function n(){return Object(l.a)(this,n),Object(d.a)(this,Object(h.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e={paddingTop:this.props.aspectRatio};return o.a.createElement("div",{className:"outer",style:e},o.a.createElement("div",{className:"inner"},this.props.children))}}]),n}(o.a.Component)),p=function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(d.a)(this,Object(h.a)(n).call(this,e))).onClick=function(e){console.log("toggling "+t.props.index),t.props.onToggle(t.props.index)},t}return Object(m.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:'boardTile " + '.concat(this.props.active?"checked":"unchecked"),onClick:this.onClick},o.a.createElement(y,{aspectRatio:"100%"},o.a.createElement("div",{className:"boardTileTextContainer"},o.a.createElement("p",{className:"boardTileText"},this.props.content))))}}]),n}(o.a.Component),g=t(5);function f(e){var n=Object(a.useState)([]),t=Object(c.a)(n,2),r=t[0],i=t[1],l=Object(g.e)().slug;console.log(l);for(var u=function(e){var n=!(e in r&&1==r[e]);console.log("index ".concat(e," new state ").concat(n));var t=Object(s.a)(r);t[e]=n,i(t)},d=[],h=void 0!=l?l:"Core Rudy",m=Object.assign([],e.sets[h]),y=0;25!=y;y++){var f="";if(12==y)f="Free Space";else{var v=m.shift();void 0!=v&&(f=v)}var b=r.hasOwnProperty(y)&&1==r[y];d.push(o.a.createElement(p,{key:y,x:y%5,y:Math.floor(y/5),index:y,active:b,onToggle:u,content:f}))}return o.a.createElement("div",{className:"board"},d)}var v=t(17),b=(t(48),function(e){return o.a.createElement("ul",{className:"setList"},e.sets.map((function(e){return o.a.createElement(v.b,{to:"/set/".concat(e,"/")},o.a.createElement("li",{className:"setItem"},e))})))}),R=t(33),E="\nUltimate Masters: \n  - The Flippin Lighthouse\n  - Old Man Rudy\n  - Life from the Loom\n  - Slap me in the testicle and take my sister on a date\n  - Flagstones of a Dollar\n  - Snappy\n  - Lavaclaw Reach Around\n  - Rudy's Brother\n  - Demonic Rudy\n  - 10 minute video\n  - Rudy's Ex\n  - Through the Rudy\n  - Nobody Cares About Your Shoal\n  - Karn\n  - 5 to 10 Dollar Rares\n  - Just cut off my arm and cover it in taco bell sauce and mail it to my ex girlfriend\n  - Lili\n  - Two ____ One Rudy\n  - Just getting pounded in the face\n  - Noble Hierarch\n  - Getting Trolled\n  - Seizing My Day\n  - Turn on the green screen and delete the video!\n  - Inaccurate Price Estimates\n\nUltimate Masters v2:\n  - Demonic Rudy\n  - Rudy's Ex\n  - Rudy Drops a Pack\n  - 10 minute video\n  - Life from the Loam\n  - Karn\n  - Noblest of Hierarchs\n  - Lili visits Rudy's parents basement\n  - Getting Trolled\n  - SNAPPY\n  - Flagstones of a Dollar\n  - Worst start in UMA history\n  - Just getting POUNDED in the face\n  - Through the Rudy\n  - Foil Foil\n  - Seizing My Day\n  - Three+ \"Come on!\"\n  - Best start in UMA history\n  - Turn on the green screen and delete the video\n  - The FLIPPING Lighthouse\n  - Old Man Rudy\n  - Nobody cares about your shoal\n  - Rudy's Brother\n  - Lavaclaw reach around\n\nCore Rudy:\n  - moogic the goothering\n  - \"Creepy Rudy\"\n  - ___ for/of the nice two dollar bill\n  - Holy Smokes!\n  - Delete the video!\n  - Gettin' Hosed\n  - Into the Thunder dome\n  - Agh, I thought we had a ______\n  - Just getting pounded in the face\n  - Rudy drops the pack\n  - Boom!\n  - Inaccurate Price Estimates\n  - Rudy says the name wrong\n  - Rudy's Ex\n  - _____? Really? agh...\n  - The camera throws a tantrum\n  - Wow, what a box!\n  - \"Shameless Rudy Plug\"\n  - Rudy makes fun of the patron\n  - (Wild) Rudy Being Creepy  \n  - (Wild) Rudy Being Creepy\n  - (Wild) Rudy Being Creepy\n  - (Wild) Rudy Being Creepy\n  - (Wild) Rudy Being Creepy\n",w=function(){console.log(E);var e=R.load(E);console.log(JSON.stringify(e));var n=Object.keys(e);return o.a.createElement("div",{className:"App"},o.a.createElement(v.a,null,o.a.createElement(b,{sets:n}),o.a.createElement("h1",null,"Bingo"),o.a.createElement(g.a,{path:"/",exact:!0,render:function(){return o.a.createElement(f,{sets:e})}}),o.a.createElement(g.a,{path:"/set/:slug/",render:function(){return o.a.createElement(f,{sets:e})}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.a4038d71.chunk.js.map