(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b8289fbc"],{"0263":function(e,t,s){"use strict";var i=s("078f"),r=s.n(i);r.a},"078f":function(e,t,s){},b12d:function(e,t,s){},e913:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-container",[s("b-row",{staticClass:"recipes-container"},e._l(e.recipes,(function(e,t){return s("b-col",{key:e.id},[s("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:e,id:e.id,title:e.title,readyInMinutes:e.readyInMinutes,image:e.image,aggregateLikes:e.aggregateLikes,isFavorite:e.isFavorite,isLastseen:e.isLastseen,index:t+1}})],1)})),1)],1)},r=[],n=(s("4160"),s("caad"),s("0d03"),s("d3b7"),s("25f0"),s("2532"),s("159b"),s("96cf"),s("1da1")),a=s("832a"),c={name:"RecipePreviewListV2",components:{RecipePreview:a["a"]},props:{title:{type:String,required:!0},listType:{type:String,required:!0}},data:function(){return{recipes:[]}},mounted:function(){this.updateRecipes()},methods:{updateRecipes:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var s,i,r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.$root.store.server_domain="https://dm-recipes.cs.bgu.ac.il","RandomRecipes"!=e.listType){t.next=8;break}return t.next=5,e.axios.get(e.$root.store.server_domain+"/recipes/random");case 5:s=t.sent,t.next=24;break;case 8:if("MyRecipes"!=e.listType){t.next=14;break}return t.next=11,e.axios.get(e.$root.store.server_domain+"/users/my");case 11:s=t.sent,t.next=24;break;case 14:if("MyFamilyRecipes"!=e.listType){t.next=20;break}return t.next=17,e.axios.get(e.$root.store.server_domain+"/users/family");case 17:s=t.sent,t.next=24;break;case 20:if("MyFavoriteRecipes"!=e.listType){t.next=24;break}return t.next=23,e.axios.get(e.$root.store.server_domain+"/users/favorites");case 23:s=t.sent;case 24:i=s.data,e.recipes=i,void 0!=e.$root.store.username&&(r=JSON.parse(sessionStorage.getItem("watchedRecipes")),n=JSON.parse(sessionStorage.getItem("favorites")),a=[],e.recipes.forEach((function(e){var t=JSON.parse(JSON.stringify(e));t.isFavorite=n.includes(t.id.toString()),t.isLastseen=r.includes(t.id.toString()),a.push(t)})),e.recipes=a),t.next=32;break;case 29:t.prev=29,t.t0=t["catch"](0),console.log(t.t0);case 32:case"end":return t.stop()}}),t,null,[[0,29]])})))()}}},o=c,p=(s("0263"),s("2877")),u=Object(p["a"])(o,i,r,!1,null,"0d48866e",null);t["a"]=u.exports},fb0b:function(e,t,s){"use strict";var i=s("b12d"),r=s.n(i);r.a},fda7:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("h1",{staticClass:"title"},[e._v("My Recipes Page")]),s("RecipePreviewListV2",{staticClass:"RandomRecipes center",attrs:{title:"My Recipes",listType:"MyRecipes"}})],1)},r=[],n=s("e913"),a={name:"MyRecipes",components:{RecipePreviewListV2:n["a"]}},c=a,o=(s("fb0b"),s("2877")),p=Object(o["a"])(c,i,r,!1,null,"2293d8a8",null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-b8289fbc.b9ff03e8.js.map