(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1009:function(t,e,l){"use strict";l.r(e);var n=l(7),r=(l(27),l(25)),o=l(30),c={layout:"content",name:"IllustrationPage",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var l,n,c,d,y,m,S,v,h,_,E,f,w,x,R,I,L,O,T,style,k,C;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=t.params,n=t.app,c=t.error,d=t.route,y=t.store,m="secret"in d.query?d.query.secret:"",S=n.i18n.localeProperties.iso,e.prev=3,y.state.categories.length){e.next=9;break}return e.next=7,n.$categoriesRepository.index({locale:S});case 7:R=e.sent,y.commit(o.c,(null==R?void 0:R.categories)||[]);case 9:return e.next=11,n.$illustrationsRepository.show(l.id,{locale:S});case 11:if(null==(I=e.sent)||null===(v=I.styles)||void 0===v||!v.length){e.next=24;break}if(null==I||null===(T=I.styles)||void 0===T||!T.length){e.next=19;break}return e.next=16,n.$illustrationsRepository.index({style_pretty_ids:I.styles[0].pretty_id,page:1,per_page:50,locale:S});case 16:e.t0=e.sent,e.next=20;break;case 19:e.t0={};case 20:return L=e.t0,e.next=23,n.$categoriesPreviewsRepository.index({related_illustration_id:I.id,page:1,per_page:12,random_previews_count:1,locale:S});case 23:O=e.sent;case 24:return style=null==I||null===(h=I.styles)||void 0===h||null===(_=h[0])||void 0===_?void 0:_.title,k=I.heading||"Illustration",C={heading:k.toLowerCase()},style&&(C.styles=style.toLowerCase()),"en-US"!==S&&y.commit("HREFLANG_DELETE"),y.dispatch("updateSEO",{title:n.i18n.t("OUCH_V2.SEO.ILLUSTRATION_PAGE.TITLE",{heading:Object(r.a)(k)}),description:n.i18n.t("OUCH_V2.SEO.ILLUSTRATION_PAGE.DESCRIPTION",C),image:"".concat("https://maxst.icons8.com","/vue-static/ouch/seo/opengraph.png")}),e.abrupt("return",{illustration:I,relatedStyles:(null===(E=O)||void 0===E?void 0:E.categories)||[],totalRelatedStyles:(null===(f=O)||void 0===f?void 0:f.total)||0,sameStyleIllustrations:(null===(w=L)||void 0===w?void 0:w.illustrations)||[],totalSameStyle:(null===(x=L)||void 0===x?void 0:x.total)||0,secret:m});case 33:e.prev=33,e.t1=e.catch(3),console.error(e.t1),y.commit("HREFLANG_DELETE"),c({statusCode:404,message:"Whoops, couldn't find illustration with this id"});case 38:case"end":return e.stop()}}),e,null,[[3,33]])})))()},data:function(){return{illustration:null,sameStyleIllustrations:[],totalSameStyle:0,secret:""}}},d=l(0),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"illustration-page"},[l("ouch-full-illustration",{attrs:{illustration:t.illustration,sameStyleIllustrations:t.sameStyleIllustrations,totalSameStyle:t.totalSameStyle,illustrationPage:!0,secret:t.secret,relatedStyles:t.relatedStyles,totalRelatedStyles:t.totalRelatedStyles}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);
//# sourceMappingURL=_id.384404f0a4a949f2f929.js.map