(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/header__logo.855a8c98.svg"},function(e,t,a){e.exports=a.p+"static/media/edit-button.58afbe73.svg"},function(e,t,a){e.exports=a.p+"static/media/add-button.bdfb8ebb.svg"},,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),c=a.n(r),i=(a(19),a(2)),u=a(13),l=a(1),s=a(8),p=a.n(s),m=function(e){return o.a.createElement("header",{className:"header"},o.a.createElement("img",{src:p.a,alt:"\u041c\u0435\u0441\u0442\u043e",className:"header__logo"}))},d=a(9),_=a.n(d),f=a(10),b=a.n(f),h=o.a.createContext(),E=function(e){var t=o.a.useContext(h),a=e.card.owner._id===t._id,n=e.card.likes.some((function(e){return e._id===t._id}));return o.a.createElement("li",{className:"cards__item"},o.a.createElement("img",{src:e.card.link,alt:e.card.alt,className:"cards__image",onClick:function(){e.onCardClick(e.card)}}),o.a.createElement("button",{type:"button",className:"cards__delete-button",style:{display:a?"block":"none"},onClick:function(){e.onCardDelete(e.card)}}),o.a.createElement("div",{className:"cards__caption"},o.a.createElement("p",{className:"cards__title"},e.card.name),o.a.createElement("div",{className:"cards__like"},o.a.createElement("button",{type:"button",className:n?"cards__button cards__button_active":"cards__button",onClick:function(){e.onCardLike(e.card)}}),o.a.createElement("p",{className:"cards__counter"},e.card.likes.length))))},v=function(e){var t=o.a.useContext(h);return o.a.createElement("main",{className:"content"},o.a.createElement("section",{className:"profile"},o.a.createElement("section",{className:"profile__avatar",style:{background:"url('".concat(t.avatar,"') 0 0 / 100% 100% no-repeat")}},o.a.createElement("div",{className:"profile__avatar-overlay",onClick:e.onEditAvatar})),o.a.createElement("div",{className:"profile__info"},o.a.createElement("div",{className:"profile__alignment"},o.a.createElement("h1",{className:"profile__name"},t.name),o.a.createElement("button",{onClick:e.onEditProfile,type:"button",className:"profile__button-edit"},o.a.createElement("img",{src:_.a,alt:"\u041a\u043d\u043e\u043f\u043a\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",className:"profile__button-edit-pencil"}))),o.a.createElement("p",{className:"profile__title"},t.about)),o.a.createElement("button",{onClick:e.onAddPlace,type:"button",className:"profile__button-add"},o.a.createElement("img",{src:b.a,alt:"\u041a\u043d\u043e\u043f\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f",className:"profile__button-add-plus"}))),o.a.createElement("ul",{className:"cards"},e.cards.map((function(t,a){return o.a.createElement(E,{key:a,card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete})}))))},C=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 \u0418\u043b\u044c\u044f \u0428\u043e\u0440\u0438\u043d"))},g=function(e){return o.a.createElement("section",{className:"popup popup_".concat(e.name," ").concat(e.isOpen?"popup_opened":"")},o.a.createElement("div",{className:"popup__container"},o.a.createElement("button",{type:"button",className:"popup__button-close popup__button-close_".concat(e.name),onClick:e.onClose}),o.a.createElement("form",{onSubmit:e.onSubmit,name:"popup_form",className:"form form-".concat(e.name)},o.a.createElement("h2",{className:"popup__heading"},e.title),e.children,o.a.createElement("button",{type:"submit",className:"popup__button-save popup__button-save-".concat(e.name)},e.button))))},O=function(e){return o.a.createElement(g,{name:"delete-card",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpen:e.isOpen,onClose:e.onClose,button:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",onSubmit:function(t){t.preventDefault(),e.onDeleteCard(e.card)}})},k=function(e){return o.a.createElement("section",{className:"popup popup_figure ".concat(e.card?"popup_opened":"")},o.a.createElement("div",{className:"popup__container popup__container_figure"},o.a.createElement("button",{type:"button",className:"popup__button-close popup__button-close_figure",onClick:e.onClose}),o.a.createElement("figure",{className:"popup__figure"},o.a.createElement("img",{src:e.card?e.card.link:"",alt:e.card?e.card.name:"",className:"popup__image"}),o.a.createElement("figcaption",{className:"popup__caption"},e.card?e.card.name:""))))},N=a(11),j=a(12),y=new(function(){function e(t){var a=t.baseUrl,n=t.headers;Object(N.a)(this,e),this._baseUrl=a,this._headers=n}return Object(j.a)(e,[{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){return e.json()}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){return e.json()}))}},{key:"updateUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",body:JSON.stringify({name:e.name,about:e.about}),headers:this._headers}).then((function(e){return e.json()}))}},{key:"addNewCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",body:JSON.stringify({name:e.name,link:e.link}),headers:this._headers}).then((function(e){return e.json()}))}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:this._headers}).then((function(e){return e.json()}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.json()}))}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",body:JSON.stringify({avatar:e.avatar}),headers:this._headers}).then((function(e){return e.json()}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-14",headers:{authorization:"7d44fa7e-04ef-41d7-b07e-efc6bd06cf53","Content-Type":"application/json"}}),S=a(3),U=function(e){var t=o.a.useState({name:"",about:""}),a=Object(l.a)(t,2),n=a[0],r=a[1],c=o.a.useContext(h);o.a.useEffect((function(){e.isOpen&&r({name:c.name,about:c.about})}),[c,e.isOpen]);var u=function(e){r(Object(i.a)(Object(i.a)({},n),{},Object(S.a)({},e.target.name,e.target.value)))};return o.a.createElement(g,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:e.isOpen,onClose:e.onClose,button:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:n.name,about:n.about})}},o.a.createElement("input",{value:n.name,type:"text",name:"name",className:"popup__input popup__input-profile-name",id:"popup__input-profile-name",required:!0,minLength:"2",maxLength:"40",pattern:"^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\\s -]+$",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",autoFocus:!0,onChange:u}),o.a.createElement("span",{className:"popup__input_type_error",id:"popup__input-profile-name-error"}),o.a.createElement("input",{value:n.about,type:"text",name:"about",className:"popup__input popup__input-title",id:"popup__input-title",required:!0,minLength:"2",maxLength:"200",placeholder:"\u0412\u0430\u0448 \u0440\u043e\u0434 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",onChange:u}),o.a.createElement("span",{className:"popup__input_type_error",id:"popup__input-title-error"}))},x=function(e){var t=o.a.useRef(null);return o.a.useEffect((function(){e.isOpen&&(t.current.value="")}),[e.isOpen]),o.a.createElement(g,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(a){a.preventDefault(),e.onUpdateAvatar({avatar:t.current.value}),t.current.value=""},button:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"},o.a.createElement("input",{ref:t,type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__input-avatar-link",id:"popup__input-avatar-link",required:!0}),o.a.createElement("span",{className:"popup__input_type_error",id:"popup__input-avatar-link-error"}))},L=function(e){var t=o.a.useState({name:"",link:""}),a=Object(l.a)(t,2),n=a[0],r=a[1];function c(e){r(Object(i.a)(Object(i.a)({},n),{},Object(S.a)({},e.target.name,e.target.value)))}return o.a.createElement(g,{name:"cards",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:n.name,link:n.link})},button:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"},o.a.createElement("input",{onChange:c,type:"text",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"popup__input popup__input-card-name",id:"popup__input-card-name",required:!0,minLength:"1",maxLength:"30",autoFocus:!0}),o.a.createElement("span",{className:"popup__input_type_error",id:"popup__input-card-name-error"}),o.a.createElement("input",{onChange:c,type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__input-link",id:"popup__input-link",required:!0}),o.a.createElement("span",{className:"popup__input_type_error",id:"popup__input-link-error"}))};var A=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),s=Object(l.a)(c,2),p=s[0],d=s[1],_=Object(n.useState)(!1),f=Object(l.a)(_,2),b=f[0],E=f[1],g=Object(n.useState)(!1),N=Object(l.a)(g,2),j=N[0],S=N[1],A=Object(n.useState)(null),w=Object(l.a)(A,2),D=w[0],P=w[1],I=Object(n.useState)({}),T=Object(l.a)(I,2),q=T[0],J=T[1],z=Object(n.useState)([].reverse()),B=Object(l.a)(z,2),F=B[0],H=B[1],M=Object(n.useState)(null),W=Object(l.a)(M,2),$=W[0],R=W[1];function Z(){r(!1),d(!1),E(!1),S(!1),P(null)}return Object(n.useEffect)((function(){Promise.all([y.getUserInfo(),y.getInitialCards()]).then((function(e){var t=Object(l.a)(e,2),a=t[0],n=t[1];J(a),H(n)})).catch((function(e){return console.log(e)}))}),[]),o.a.createElement("div",null,o.a.createElement(h.Provider,{value:q},o.a.createElement(m,null),o.a.createElement(v,{onEditAvatar:function(){r(!a)},onEditProfile:function(){d(!p)},onAddPlace:function(){E(!b)},onCardClick:function(e){P(e)},cards:F,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===q._id}));y.changeLikeCardStatus(e._id,!t).then((function(t){var a=F.map((function(a){return a._id===e._id?t:a}));H(a)})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){S(!j),R(e)}}),o.a.createElement(C,null),o.a.createElement(x,{isOpen:a,onClose:Z,onUpdateAvatar:function(e){y.updateAvatar(e).then((function(e){J(Object(i.a)(Object(i.a)({},q),{},{avatar:e.avatar})),Z()})).catch((function(e){return console.log(e)}))}}),o.a.createElement(U,{isOpen:p,onClose:Z,onUpdateUser:function(e){y.updateUserInfo(e).then((function(e){J(Object(i.a)(Object(i.a)({},q),{},{name:e.name,about:e.about})),Z()})).catch((function(e){return console.log(e)}))}}),o.a.createElement(L,{key:Math.random(),isOpen:b,onClose:Z,onAddPlace:function(e){y.addNewCard(e).then((function(e){H([e].concat(Object(u.a)(F))),Z()})).catch((function(e){return console.log(e)}))}}),o.a.createElement(O,{isOpen:j,onClose:Z,onDeleteCard:function(e){y.deleteCard(e._id).then((function(){H(F.filter((function(t){return t._id!==e._id}))),Z()})).catch((function(e){return console.log(e)}))},card:$}),o.a.createElement(k,{card:D,onClose:Z})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.7acc9a8d.chunk.js.map