(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[874],{7148:function(e,n,t){var o={"./en/aboutme-section.json":[8189,189],"./en/contact.json":[1978,978],"./en/experience-section.json":[6061,61],"./en/header.json":[9376,376],"./en/not-found.json":[6602,602],"./en/projects.json":[1073,73],"./en/splash-section.json":[9226,226],"./pl/aboutme-section.json":[3524,1],"./pl/contact.json":[6566,566],"./pl/experience-section.json":[6880,880],"./pl/header.json":[7828,828],"./pl/not-found.json":[8151,151],"./pl/projects.json":[6271,271],"./pl/splash-section.json":[6026,26]};function s(e){if(!t.o(o,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=o[e],s=n[0];return t.e(n[1]).then(function(){return t.t(s,19)})}s.keys=function(){return Object.keys(o)},s.id=7148,e.exports=s},2959:function(e,n,t){Promise.resolve().then(t.bind(t,5774))},8310:function(e,n,t){"use strict";t.d(n,{$:function(){return l}});var o=t(2265),s=t(6027),r=t(4735),c=t(8358),i=t(4312),a=t(4583),u=t(6860);function l(e,n,t){let[s,i]=(0,c.fP)([u.YN]),a=(0,r.$G)(n,t),{i18n:l}=a;{let[n,t]=(0,o.useState)(l.resolvedLanguage);(0,o.useEffect)(()=>{n!==l.resolvedLanguage&&t(l.resolvedLanguage)},[n,l.resolvedLanguage]),(0,o.useEffect)(()=>{e&&l.resolvedLanguage!==e&&l.changeLanguage(e)},[e,l]),(0,o.useEffect)(()=>{s.i18next!==e&&i(u.YN,e,{path:"/"})},[e,s.i18next])}return a}s.ZP.use(r.Db).use(a.Z).use((0,i.Z)((e,n)=>t(7148)("./".concat(e,"/").concat(n,".json")))).init({...(0,u.FW)(),lng:void 0,detection:{order:["path","htmlTag","cookie","navigator"]},preload:[]})},6860:function(e,n,t){"use strict";t.d(n,{FW:function(){return c},Mj:function(){return o},YN:function(){return r}});let o=["en","pl"],s="translation",r="i18next";function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s;return{supportedLngs:o,fallbackLng:"en",lng:e,fallbackNS:s,defaultNS:s,ns:n}}},5774:function(e,n,t){"use strict";var o=t(7437),s=t(8310),r=t(7138);n.default=e=>{let{lng:n}=e,{t}=(0,s.$)(n,"not-found");return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("main",{className:"page404",children:(0,o.jsxs)("div",{className:"h-[60vh] flex flex-col items-start justify-center",children:[(0,o.jsx)("h1",{className:"font-audiowide text-5xl font-extrabold text-center mx-auto text-green-100 mb-5",children:t("header")}),(0,o.jsxs)("div",{className:"mx-auto text-dark text-center text-xl",children:[(0,o.jsx)("p",{children:t("description1")}),(0,o.jsxs)("p",{children:[t("description2")," ",(0,o.jsx)(r.default,{href:"/".concat(n),children:t("link")})]})]})]})})})}}},function(e){e.O(0,[647,971,23,744],function(){return e(e.s=2959)}),_N_E=e.O()}]);