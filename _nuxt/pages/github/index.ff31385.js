(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{433:function(e,t,o){var content=o(493);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(17).default)("2d4c526e",content,!0,{sourceMap:!1})},434:function(e,t,o){var content=o(495);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(17).default)("3ff16198",content,!0,{sourceMap:!1})},492:function(e,t,o){"use strict";o(433)},493:function(e,t,o){(t=o(16)(!1)).push([e.i,".noselect[data-v-1f25a87e]{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.btn-base-style[data-v-1f25a87e]{font-size:inherit;border-radius:4px;outline:0;border:0;cursor:pointer;transition:.2s ease-in-out;font-family:Shabnam}textarea[data-v-1f25a87e]{resize:none}.noevents[data-v-1f25a87e]{pointer-events:none}.repos[data-v-1f25a87e]{width:100%;margin-top:70px;-moz-column-count:3;column-count:3;grid-column-gap:10px;-moz-column-gap:10px;column-gap:10px}@media (max-width:950px){.repos[data-v-1f25a87e]{-moz-column-count:1;column-count:1}}.repos a[data-v-1f25a87e]{color:#000}.repos__repo[data-v-1f25a87e]{display:inline-block;margin:0 0 1em;width:100%;word-break:break-all;border-radius:5px;border:1px solid #eee;padding:30px}.repos__repo__description[data-v-1f25a87e]{margin-top:20px}.repos__repo__title[data-v-1f25a87e]{display:flex;flex-direction:row;align-items:center;width:100%}.repos__repo__title__stars[data-v-1f25a87e]{min-width:50px;min-height:50px;color:#fff;background:#45c87e;border-radius:10px;font-weight:800;font-size:1.3em;display:flex;justify-content:center;align-items:center}.repos__repo__title__body[data-v-1f25a87e]{word-break:break-all;margin-left:15px}.repos__repo__title__body h3[data-v-1f25a87e]{line-height:20px}.repos__repo__title__body p[data-v-1f25a87e]{font-size:.82em;color:#949494}",""]),e.exports=t},494:function(e,t,o){"use strict";o(434)},495:function(e,t,o){(t=o(16)(!1)).push([e.i,'.noselect[data-v-251b4b8b]{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.btn-base-style[data-v-251b4b8b]{font-size:inherit;border-radius:4px;outline:0;border:0;cursor:pointer;transition:.2s ease-in-out;font-family:Shabnam}textarea[data-v-251b4b8b]{resize:none}.noevents[data-v-251b4b8b]{pointer-events:none}.github_repos[data-v-251b4b8b]{height:100vh;font-family:"Poppins",sans-serif;background:#fff}.github_repos__title[data-v-251b4b8b]{max-width:500px;height:auto}.github_repos__project[data-v-251b4b8b]{margin-top:10px;position:relative}.repos_container[data-v-251b4b8b]{padding:160px 100px 0}@media (max-width:459px){.repos_container[data-v-251b4b8b]{padding:160px 30px 0}}.github_repos__project_container[data-v-251b4b8b]{display:flex;align-items:center;flex-wrap:wrap}.github_repos__project_container>p[data-v-251b4b8b]{margin-right:30px}.github_repos_project--item1[data-v-251b4b8b]:after{content:"/";position:absolute;right:-20px}',""]),e.exports=t},566:function(e,t,o){"use strict";o.r(t);var r=o(3),n=(o(20),{props:{repos:{type:Array,required:!0}},data:function(){return{colors:["#FC5656","#45c87e","#1c8eff","#FFBA1B"],reposData:[]}},methods:{getRandomColor:function(){return this.colors[Math.floor(Math.random()*this.colors.length)]}}}),c=(o(492),o(6)),l={head:function(){return{link:[{href:"https://fonts.googleapis.com/css?family=Poppins:400,800&display=swap",rel:"stylesheet"}]}},components:{repos:Object(c.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"repos"},e._l(e.repos,(function(t,r){return o("a",{key:r,attrs:{href:t.html_url,target:"_blank"}},[o("div",{staticClass:"repos__repo"},[o("div",{staticClass:"repos__repo__title"},[o("div",{staticClass:"repos__repo__title__stars",style:{backgroundColor:e.getRandomColor()}},[e._v("\n          "+e._s(t.stargazers_count)+"\n        ")]),e._v(" "),o("div",{staticClass:"repos__repo__title__body"},[o("h3",[e._v(e._s(t.name))]),e._v(" "),o("p",[e._v(e._s(t.language))])])]),e._v(" "),o("p",{staticClass:"repos__repo__description"},[e._v("\n        "+e._s(t.description)+"\n      ")])])])})),0)}),[],!1,null,"1f25a87e",null).exports},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var o,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(o=e.$axios.create()).setBaseURL("https://api.github.com"),t.next=4,o.get("/orgs/XeniacDev/repos");case 4:return data=(data=t.sent).data.reverse(),t.abrupt("return",{repos:data});case 7:case"end":return t.stop()}}),t)})))()}},_=(o(494),Object(c.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"github_repos"},[o("div",{staticClass:"container"},[o("div",{staticClass:"repos_container"},[o("h1",{staticClass:"github_repos__title"},[e._v("\n        We Really ❤️ Free Softwares!\n      ")]),e._v(" "),o("div",{staticClass:"github_repos__project_container"},[o("p",{staticClass:"github_repos__project github_repos_project--item1"},[e._v("\n          our latest open source project:\n          "),o("nuxt-link",{attrs:{to:"/github/xmodal",tag:"a"}},[e._v("xmodal")])],1),e._v(" "),e._m(0)]),e._v(" "),o("repos",{attrs:{repos:e.repos}})],1)])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"github_repos__project"},[this._v("\n          our github organization:\n          "),t("a",{attrs:{href:"https://github.com/XeniacDev"}},[this._v("XeniacDev")])])}],!1,null,"251b4b8b",null));t.default=_.exports}}]);