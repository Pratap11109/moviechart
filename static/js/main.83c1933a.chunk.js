(this.webpackJsonpmoviechart=this.webpackJsonpmoviechart||[]).push([[0],{14:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),c=n(5),r=n.n(c),l=(n(14),n(15),n(2)),s=n(6),o=n(7),b=n(9),d=n(8),u=[{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"}];var f=[{like:!1,_id:"5b21ca3eeb7f6fbccd471815",title:"Terminator",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:6,dailyRentalRate:2.5,publishDate:"2018-01-03T19:04:28.809Z"},{like:!1,_id:"5b21ca3eeb7f6fbccd471816",title:"Die Hard",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:5,dailyRentalRate:2.5},{like:!1,_id:"5b21ca3eeb7f6fbccd471817",title:"Get Out",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:8,dailyRentalRate:3.5},{like:!1,_id:"5b21ca3eeb7f6fbccd471819",title:"Trip to Italy",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{like:!1,_id:"5b21ca3eeb7f6fbccd47181a",title:"Airplane",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{like:!1,_id:"5b21ca3eeb7f6fbccd47181b",title:"Wedding Crashers",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{like:!1,_id:"5b21ca3eeb7f6fbccd47181e",title:"Gone Girl",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:7,dailyRentalRate:4.5},{like:!1,_id:"5b21ca3eeb7f6fbccd47181f",title:"The Sixth Sense",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:4,dailyRentalRate:3.5},{like:!1,_id:"5b21ca3eeb7f6fbccd471821",title:"The Avengers",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:7,dailyRentalRate:3.5}];var j=n(3),h=n.n(j);var m=n(0),g=function(e){var t=e.totalMovies,n=e.pageSize,a=e.onClick,i=e.currentPage,c=Math.ceil(t/n);if(1===c)return null;var r=h.a.range(1,c+1);return Object(m.jsx)("nav",{"aria-label":"...",children:Object(m.jsx)("ul",{className:"pagination",children:r.map((function(e){return Object(m.jsx)("li",{className:e===i?"page-item active":"page-item",children:Object(m.jsx)("a",{className:"page-link",href:"#",onClick:function(){return a(e)},children:e})},e)}))})})},v=function(e){var t=e.genres,n=e.currentGener,a=e.onClick;return Object(m.jsx)("div",{className:"col-2",children:Object(m.jsxs)("ul",{className:"list-group",children:[Object(m.jsx)("li",{className:null===n?"list-group-item active":"list-group-item",onClick:function(){return a(null)},children:"All Genres"}),t.map((function(e){return Object(m.jsx)("li",{onClick:function(){return a(e.name)},className:n===e.name?"list-group-item active":"list-group-item",children:e.name},e._id)}))]})})},O=function(e){var t=e.obj,n=e.onClick,a=e.onDelete,i=e.name,c=t.like?"fa fa-heart":"fa fa-heart-o";return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:t.title}),Object(m.jsx)("td",{children:t.dailyRentalRate}),Object(m.jsx)("td",{children:i}),Object(m.jsx)("td",{children:Object(m.jsx)("i",{className:c,"aria-hidden":"true",onClick:n,style:{cursor:"pointer"}})}),Object(m.jsx)("td",{children:Object(m.jsx)("button",{className:"btn btn-danger btn-sm",onClick:a,children:"Delete"})})]})},k=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={Movies:[],pageSize:4,currentPage:1,genres:[],currentGener:null},e.handalLike=function(t){var n=Object(l.a)(e.state.Movies),a=n.indexOf(t);n[a].like=!n[a].like,e.setState({Movies:n})},e.handalDelete=function(t){var n=e.state.Movies.filter((function(e){return t!==e}));e.setState({Movies:n})},e.sortByTitle=function(){var t=Object(l.a)(e.state.Movies);t.sort((function(e,t){return e.title===t.title?0:e.title<t.title?-1:1})),e.setState({Movies:t})},e.sortByGenre=function(){var t=Object(l.a)(e.state.Movies);t.sort((function(e,t){return e.genre.name===t.genre.name?0:e.genre.name<t.genre.name?-1:1})),e.setState({Movies:t})},e.sortByRating=function(){var t=Object(l.a)(e.state.Movies);t.sort((function(e,t){return e.dailyRentalRate===t.dailyRentalRate?0:e.dailyRentalRate<t.dailyRentalRate?-1:1})),e.setState({Movies:t})},e.handalPage=function(t){e.setState({currentPage:t},(function(){return console.log(e.state.currentPage)}))},e.handalGenres=function(t){e.setState({currentGener:t})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.setState({Movies:f,genres:u.filter((function(e){return e}))})}},{key:"render",value:function(){var e=this,t=this.state,n=t.Movies,a=t.currentPage,i=t.pageSize,c=t.genres,r=t.currentGener,s=n.filter((function(e){return r===e.genre.name||null===r})),o=Object(l.a)(s),b=s.length,d=function(e,t,n){var a=(t-1)*n;return h()(e).splice(a).take(n).value()}(o,a,i);return Object(m.jsxs)("div",{className:"row my-4",children:[Object(m.jsx)(v,{genres:c,currentGener:r,onClick:this.handalGenres}),Object(m.jsxs)("div",{className:"col",children:[Object(m.jsxs)("p",{style:{marginLeft:30,fontSize:30},children:["Showing ",b," movies in the Database "]}),Object(m.jsxs)("table",{className:"table table-striped ",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{onClick:this.sortByTitle,style:{cursor:"pointer"},children:"Title"}),Object(m.jsx)("th",{onClick:this.sortByRating,style:{cursor:"pointer"},children:"Rating"}),Object(m.jsx)("th",{onClick:this.sortByGenre,style:{cursor:"pointer"},children:"Gener"}),Object(m.jsx)("th",{}),Object(m.jsx)("th",{})]})}),Object(m.jsx)("tbody",{children:d.map((function(t){return Object(m.jsx)(O,{obj:t,name:t.genre.name,onClick:function(){return e.handalLike(t)},onDelete:function(){return e.handalDelete(t)}},t._id)}))})]}),Object(m.jsx)(g,{totalMovies:b,pageSize:i,onClick:this.handalPage,currentPage:a})]})]})}}]),n}(a.Component);n(19);var x=function(){return Object(m.jsx)(i.a.Fragment,{children:Object(m.jsx)(k,{})})};r.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(x,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.83c1933a.chunk.js.map