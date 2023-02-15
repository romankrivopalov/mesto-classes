(()=>{"use strict";var t={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-btn",inactiveButtonClass:"popup__save-btn_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},e={cardTemplate:"#card",cardSelector:".card",cardImgSelector:".card__img",cardTitleSelector:".card__title",cardDeleteBtnSelector:".card__delete",cardLikeBtnSelector:".card__like",activeLikeBtnClass:"card__like_active"},r=(document.querySelectorAll(".popup"),document.querySelector(".profile__edit-btn")),n=document.forms["profile-form"],o=n.querySelector(".popup__input_type_name"),i=n.querySelector(".popup__input_type_about"),u=document.querySelector(".profile__add-btn"),c=document.forms["card-form"];function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,f(n.key),n)}}function s(t,e,r){return e&&l(t.prototype,e),r&&l(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function p(t,e,r){return(e=f(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function f(t){var e=function(t,e){if("object"!==a(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===a(e)?e:String(e)}c.querySelector(".popup__input_type_name"),c.querySelector(".popup__input_type_about");var y=s((function t(e){var r=this,n=e.profileTitleSelector,o=e.profileSubtitleSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,"getUserInfo",(function(){return{userTitle:r._userTitle.textContent,userSubtitle:r._userSubtitle.textContent}})),p(this,"setUserInfo",(function(t){r._userTitle.textContent=t.name,r._userSubtitle.textContent=t.about})),this._userTitle=document.querySelector(n),this._userSubtitle=document.querySelector(o)}));function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function m(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,_(n.key),n)}}function b(t,e,r){return e&&m(t.prototype,e),r&&m(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function v(t,e,r){return(e=_(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function _(t){var e=function(t,e){if("object"!==d(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===d(e)?e:String(e)}var h=b((function t(e,r){var n=this,o=e.data,i=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),v(this,"addItem",(function(t){n._containerSelector.prepend(t)})),v(this,"renderCards",(function(){n._data.forEach(n._renderer)})),this._data=o,this._renderer=i,this._containerSelector=document.querySelector(r)}));function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function g(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,E(n.key),n)}}function w(t,e,r){return e&&g(t.prototype,e),r&&g(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function k(t,e,r){return(e=E(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function E(t){var e=function(t,e){if("object"!==S(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==S(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===S(e)?e:String(e)}var j=w((function t(e,r,n){var o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),k(this,"_deleteCard",(function(){o._card.remove(),o._cardImg=null,o._card=null})),k(this,"_toggleCardLike",(function(){o._cardLikeBtn.classList.toggle(o._cardSetting.activeLikeBtnClass)})),k(this,"_setEventListeners",(function(){var t=o._card.querySelector(o._cardSetting.cardDeleteBtnSelector);o._cardLikeBtn=o._card.querySelector(o._cardSetting.cardLikeBtnSelector),t.addEventListener("click",(function(){o._deleteCard()})),o._cardLikeBtn.addEventListener("click",(function(){o._toggleCardLike()})),o._cardImg.addEventListener("click",(function(){o._handleCardClick(o._link,o._name)}))})),k(this,"_getTemplate",(function(){return document.querySelector(o._cardSetting.cardTemplate).content.querySelector(o._cardSetting.cardSelector).cloneNode(!0)})),k(this,"generateCard",(function(){return o._card=o._getTemplate(),o._cardImg=o._card.querySelector(o._cardSetting.cardImgSelector),o._cardImg.src=o._link,o._cardImg.alt=" ".concat(o._link,"."),o._card.querySelector(o._cardSetting.cardTitleSelector).textContent=o._name,o._setEventListeners(),o._card})),this._cardSetting=r,this._name=e.name,this._link=e.link,this._handleCardClick=n}));function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function P(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===O(o)?o:String(o)),n)}var o}var L=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,r;return e=t,(r=[{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__close"))&&t.close()}))}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}}])&&P(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function T(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,A(n.key),n)}}function I(t,e){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},I(t,e)}function q(t,e){if(e&&("object"===C(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return B(t)}function B(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=R(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},x.apply(this,arguments)}function R(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=V(t)););return t}function V(t){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},V(t)}function D(t,e,r){return(e=A(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function A(t){var e=function(t,e){if("object"!==C(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==C(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===C(e)?e:String(e)}var U=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&I(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=V(n);if(o){var r=V(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return q(this,t)});function u(t,e){var r,n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),D(B(n=i.call(this,t)),"_getInputValues",(function(){var t={};return n._inputList.forEach((function(e){t[e.name]=e.value})),t})),D(B(n),"setEventListeners",(function(){x((r=B(n),V(u.prototype)),"setEventListeners",r).call(r),n._form.addEventListener("submit",(function(){n._handleFormSubmit(n._getInputValues()),n.close()}))})),n._handleFormSubmit=e,n._form=n._popup.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll(".popup__input"),n}return e=u,(r=[{key:"close",value:function(){x(V(u.prototype),"close",this).call(this),this._form.reset()}}])&&T(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(L);function F(t){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function z(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==F(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==F(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===F(o)?o:String(o)),n)}var o}function M(){return M="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=N(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},M.apply(this,arguments)}function N(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=J(t)););return t}function G(t,e){return G=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},G(t,e)}function H(t,e){if(e&&("object"===F(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function J(t){return J=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},J(t)}var K=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&G(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=J(n);if(o){var r=J(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return H(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupBigImage=e._popup.querySelector(".popup__img"),e._popupTitle=e._popup.querySelector(".popup__title"),e}return e=u,(r=[{key:"open",value:function(t,e){M(J(u.prototype),"open",this).call(this),this._popupBigImage.src=t,this._popupBigImage.alt="".concat(e,"."),this._popupTitle.textContent=e}}])&&z(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(L);function Q(t){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Q(t)}function W(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Q(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==Q(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===Q(o)?o:String(o)),n)}var o}var X=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formSetting=e,this._form=r,this._inputList=Array.from(this._form.querySelectorAll(this._formSetting.inputSelector)),this._buttonElement=this._form.querySelector(this._formSetting.submitButtonSelector)}var e,r;return e=t,(r=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._formSetting.inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._formSetting.inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_hideInputError",value:function(t){var e=this._form.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._formSetting.inputErrorClass),e.classList.remove(this._formSetting.errorClass),e.textContent=""}},{key:"_showInputError",value:function(t,e){var r=this._form.querySelector(".".concat(t.id,"-error"));t.classList.add(this._formSetting.inputErrorClass),r.textContent=e,r.classList.add(this._formSetting.errorClass)}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_setEventListeners",value:function(){var t=this;this.toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t.toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(t){t.preventDefault()})),this._setEventListeners()}},{key:"checkInputValidity",value:function(){var t=this;this._inputList.forEach((function(e){t._checkInputValidity(e)}))}}])&&W(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),Y=new y({profileTitleSelector:".profile__title",profileSubtitleSelector:".profile__subtitle"}),Z=new X(t,c),$=new K('.popup[data-type="img-popup"]'),tt=new X(t,n),et=new h({data:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(t){var r=new j(t,e,(function(){$.open(t.link,t.name)})).generateCard();et.addItem(r)}},".cards__list"),rt=new U('.popup[data-type="edit-popup"]',(function(t){Y.setUserInfo(t)})),nt=new U('.popup[data-type="add-popup"]',(function(t){var r=new j(t,e,(function(){$.open(t.link,t.name)})).generateCard();et.addItem(r)}));r.addEventListener("click",(function(t){t.preventDefault();var e=Y.getUserInfo(),r=e.userTitle,n=e.userSubtitle;o.value=r,i.value=n,tt.checkInputValidity(),rt.open()})),u.addEventListener("click",(function(){nt.open()})),et.renderCards(),rt.setEventListeners(),nt.setEventListeners(),$.setEventListeners(),tt.enableValidation(),Z.enableValidation()})();