(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53f2cc50"],{1148:function(t,e,r){"use strict";var a=r("da84"),i=r("5926"),n=r("577e"),s=r("1d80"),o=a.RangeError;t.exports=function(t){var e=n(s(this)),r="",a=i(t);if(a<0||a==1/0)throw o("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(r+=e);return r}},"6b17":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"page-title"},[r("h3",[t._v("Общая статистика отрядов")]),r("button",{staticClass:"btn waves-effect waves-light btn-small",on:{click:t.refresh}},[r("i",{staticClass:"material-icons"},[t._v("refresh")])])]),r("div",{staticClass:"row"},[r("p",[t._v("Выберите период:")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.choosed,expression:"choosed"}],staticStyle:{display:"block"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.choosed=e.target.multiple?r:r[0]}}},t._l(t.period,(function(e){return r("option",{key:e.id},[t._v(t._s(e.title))])})),0),t.loading?r("Loader"):r("v-table",{attrs:{data:t.n},scopedSlots:t._u([{key:"body",fn:function(e){var a=e.displayData;return r("tbody",{},t._l(a,(function(e,a){return r("tr",{key:e.id},[r("td",[t._v(t._s(a+1))]),r("td",[t._v(t._s(e.prefix))]),r("td",[t._v(t._s(e.kills))]),r("td",[t._v(t._s(e.teamkills))]),r("td",[t._v(t._s(e.score))])])})),0)}}])},[r("thead",{attrs:{slot:"head"},slot:"head"},[r("th",[t._v("Место")]),r("th",[t._v("Отряд")]),r("v-th",{attrs:{sortKey:"kills",defaultSort:"desc"}},[t._v("Убийств")]),r("v-th",{attrs:{sortKey:"teamkills",defaultSort:"desc"}},[t._v("Тимкиллов")]),r("v-th",{attrs:{sortKey:"score",defaultSort:"desc"}},[t._v("Счет")])],1)])],1)])},i=[],n=r("1da1"),s=(r("d3b7"),r("b680"),r("a9e3"),r("96cf"),{name:"Squads",data:function(){return{n:[],loading:!1,choosed:"За все время",period:[{id:1,title:"За все время"},{id:2,title:"За ротацию от 27.02.2022"}]}},mounted:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.refresh();case 3:t.loading=!1;case 4:case"end":return e.stop()}}),e)})))()},watch:{choosed:function(){this.refresh()}},methods:{refresh:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.choosed==t.period[0].title?t.r():(t.choosed=t.period[1].title)&&t.rotationTable();case 1:case"end":return e.stop()}}),e)})))()},r:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,t.n=[],e.next=4,fetch("stats.json");case 4:return r=e.sent,e.next=7,r.json();case 7:for(i in r=e.sent,a=1,r.squadStatistics)r.squadStatistics[i].id=a,a++,t.n.push(r.squadStatistics[i]);t.loading=!1;case 11:case"end":return e.stop()}}),e)})))()},rotationTable:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,a,i,n,s,o,l,c,u,d,f,h,p,v,m,b,g,w,k;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,t.n=[],e.next=4,fetch("stats.json");case 4:return r=e.sent,e.next=7,r.json();case 7:for(i in r=e.sent,a=1,r.squadStatistics){for(d in n={prefix:"",players:[]},s=0,o=0,l=0,c=0,u=0,r.squadStatistics[i].players)for(f in r.globalStatistics)if(r.globalStatistics[f].playerName==r.squadStatistics[i].players[d].playerName){for(w in h={},p=[],v=0,m=0,b=0,g=0,r.globalStatistics[f].byWeeks)r.globalStatistics[f].byWeeks[w].week>="2022-10"&&(p.push(r.globalStatistics[f].byWeeks[w]),k=r.globalStatistics[f].byWeeks[w],v+=k.totalPlayedGames,m+=k.kills,b+=k.teamkills,g+=k.deaths);v>0&&(h.id=a,a++,h.totalPlayedGames=v,h.kills=m,h.teamkills=b,h.deaths=g,h.rotationWeeks=p,h.playerName=r.globalStatistics[f].playerName,h.lastSquadPrefix=r.globalStatistics[f].lastSquadPrefix,h.kdRatio=(m/g).toFixed(2),h.totalScore=((m-b)/v).toFixed(2),n.players.push(h),u++,c+=Number(h.totalScore),s+=m,o+=b,l+=g)}n.prefix=r.squadStatistics[i].prefix,n.kills=s,n.teamkills=o,n.score=(c/u).toFixed(2),n.deaths=l,t.n.push(n)}t.loading=!1;case 11:case"end":return e.stop()}}),e)})))()}}}),o=s,l=r("2877"),c=Object(l["a"])(o,a,i,!1,null,null,null);e["default"]=c.exports},b680:function(t,e,r){"use strict";var a=r("23e7"),i=r("da84"),n=r("e330"),s=r("5926"),o=r("408a"),l=r("1148"),c=r("d039"),u=i.RangeError,d=i.String,f=Math.floor,h=n(l),p=n("".slice),v=n(1..toFixed),m=function(t,e,r){return 0===e?r:e%2===1?m(t,e-1,r*t):m(t*t,e/2,r)},b=function(t){var e=0,r=t;while(r>=4096)e+=12,r/=4096;while(r>=2)e+=1,r/=2;return e},g=function(t,e,r){var a=-1,i=r;while(++a<6)i+=e*t[a],t[a]=i%1e7,i=f(i/1e7)},w=function(t,e){var r=6,a=0;while(--r>=0)a+=t[r],t[r]=f(a/e),a=a%e*1e7},k=function(t){var e=6,r="";while(--e>=0)if(""!==r||0===e||0!==t[e]){var a=d(t[e]);r=""===r?a:r+h("0",7-a.length)+a}return r},y=c((function(){return"0.000"!==v(8e-5,3)||"1"!==v(.9,0)||"1.25"!==v(1.255,2)||"1000000000000000128"!==v(0xde0b6b3a7640080,0)}))||!c((function(){v({})}));a({target:"Number",proto:!0,forced:y},{toFixed:function(t){var e,r,a,i,n=o(this),l=s(t),c=[0,0,0,0,0,0],f="",v="0";if(l<0||l>20)throw u("Incorrect fraction digits");if(n!=n)return"NaN";if(n<=-1e21||n>=1e21)return d(n);if(n<0&&(f="-",n=-n),n>1e-21)if(e=b(n*m(2,69,1))-69,r=e<0?n*m(2,-e,1):n/m(2,e,1),r*=4503599627370496,e=52-e,e>0){g(c,0,r),a=l;while(a>=7)g(c,1e7,0),a-=7;g(c,m(10,a,1),0),a=e-1;while(a>=23)w(c,1<<23),a-=23;w(c,1<<a),g(c,1,1),w(c,2),v=k(c)}else g(c,0,r),g(c,1<<-e,0),v=k(c)+h("0",l);return l>0?(i=v.length,v=f+(i<=l?"0."+h("0",l-i)+v:p(v,0,i-l)+"."+p(v,i-l))):v=f+v,v}})}}]);
//# sourceMappingURL=chunk-53f2cc50.518bb72c.js.map