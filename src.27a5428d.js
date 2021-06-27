parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/icon-close.svg":[["icon-close.bb7ed7e5.svg","cAq2"],"cAq2"]}],"CSe0":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/beach-4206785__340.b8b21f37.jpg";
},{}],"vRZ1":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/beach-4206785_1280.6d0b33f8.jpg";
},{}],"Q8LH":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/container-4203677__340.f4a75706.jpg";
},{}],"Q8xo":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/container-4203677_1280.bdbea1be.jpg";
},{}],"bVfa":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/flowers-1835619__340.a60c124c.jpg";
},{}],"Gvsa":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/flowers-1835619_1280.4ac2275a.jpg";
},{}],"tUNq":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/himilayan-blue-poppy-4202825__340.44f55ba0.jpg";
},{}],"bfrK":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/himilayan-blue-poppy-4202825_1280.4dc6dd74.jpg";
},{}],"APbX":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/the-alps-4209272__340.54b191e2.jpg";
},{}],"eCdk":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/the-alps-4209272_1280.452c82c5.jpg";
},{}],"Wv4R":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/landscape-4208255__340.76a6423c.jpg";
},{}],"DPjk":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/landscape-4208255_1280.a608328b.jpg";
},{}],"O6n2":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/landscape-4208571__340.5efb1638.jpg";
},{}],"YHg0":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/landscape-4208571_1280.efee508e.jpg";
},{}],"ZLlJ":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/lighthouse-4208843__340.d786049c.jpg";
},{}],"xsxB":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/lighthouse-4208843_1280.9c78cd4c.jpg";
},{}],"ESGj":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/mountains-3674334__340.8ee3ce54.jpg";
},{}],"T80d":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/mountains-3674334_1280.d561b38a.jpg";
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");var e=q(require("./images/beach-4206785__340.jpg")),i=q(require("./images/beach-4206785_1280.jpg")),a=q(require("./images/container-4203677__340.jpg")),r=q(require("./images/container-4203677_1280.jpg")),t=q(require("./images/flowers-1835619__340.jpg")),l=q(require("./images/flowers-1835619_1280.jpg")),n=q(require("./images/himilayan-blue-poppy-4202825__340.jpg")),s=q(require("./images/himilayan-blue-poppy-4202825_1280.jpg")),o=q(require("./images/the-alps-4209272__340.jpg")),g=q(require("./images/the-alps-4209272_1280.jpg")),u=q(require("./images/landscape-4208255__340.jpg")),c=q(require("./images/landscape-4208255_1280.jpg")),p=q(require("./images/landscape-4208571__340.jpg")),d=q(require("./images/landscape-4208571_1280.jpg")),_=q(require("./images/lighthouse-4208843__340.jpg")),m=q(require("./images/lighthouse-4208843_1280.jpg")),f=q(require("./images/mountains-3674334__340.jpg")),h=q(require("./images/mountains-3674334_1280.jpg"));function q(e){return e&&e.__esModule?e:{default:e}}const b=[{preview:n.default,original:s.default,description:"Hokkaido Flower"},{preview:a.default,original:r.default,description:"Container Haulage Freight"},{preview:e.default,original:i.default,description:"Aerial Beach View"},{preview:t.default,original:l.default,description:"Flower Blooms"},{preview:f.default,original:h.default,description:"Alpine Mountains"},{preview:p.default,original:d.default,description:"Mountain Lake Sailing"},{preview:o.default,original:g.default,description:"Alpine Spring Meadows"},{preview:u.default,original:c.default,description:"Nature Landscape"},{preview:_.default,original:m.default,description:"Lighthouse Coast Sea"}],y={lightboxImageEl:document.querySelector(".lightbox__image"),closeLightboxEl:document.querySelector(".lightbox__button"),backdropEl:document.querySelector(".js-lightbox"),gallery:document.querySelector(".js-gallery"),lightboxOverlayEl:document.querySelector(".lightbox__overlay")};function j(e){return b.map(({original:e,preview:i,description:a})=>`<li class="gallery__item">\n\t\t\t<a class="gallery__link" href="${e}">\n\t\t\t\t<img class="gallery__image" src="${i}" data-source="${e}" \n\t\t\t\talt="${a}"/>\n\t\t\t</a>\n\t\t</li>`).join("")}function v(e){e.preventDefault(),e.target.classList.contains("gallery__image")&&(y.backdropEl.classList.add("is-open"),w(e.target.alt,e.target.closest(".gallery__link").href),window.addEventListener("keydown",L))}function w(e,i){y.lightboxImageEl.src="",y.backdropEl.classList.contains("is-open")&&(y.lightboxImageEl.src=i,y.lightboxImageEl.alt=e)}function E(e){window.removeEventListener("keydown",L),y.backdropEl.classList.contains("is-open")&&y.backdropEl.classList.remove("is-open")}function L(e){"Escape"===e.code&&E()}y.gallery.insertAdjacentHTML("beforeend",j(b)),y.gallery.addEventListener("click",v),y.closeLightboxEl.addEventListener("click",E),y.lightboxOverlayEl.addEventListener("click",E);
},{"./sass/main.scss":"clu1","./images/beach-4206785__340.jpg":"CSe0","./images/beach-4206785_1280.jpg":"vRZ1","./images/container-4203677__340.jpg":"Q8LH","./images/container-4203677_1280.jpg":"Q8xo","./images/flowers-1835619__340.jpg":"bVfa","./images/flowers-1835619_1280.jpg":"Gvsa","./images/himilayan-blue-poppy-4202825__340.jpg":"tUNq","./images/himilayan-blue-poppy-4202825_1280.jpg":"bfrK","./images/the-alps-4209272__340.jpg":"APbX","./images/the-alps-4209272_1280.jpg":"eCdk","./images/landscape-4208255__340.jpg":"Wv4R","./images/landscape-4208255_1280.jpg":"DPjk","./images/landscape-4208571__340.jpg":"O6n2","./images/landscape-4208571_1280.jpg":"YHg0","./images/lighthouse-4208843__340.jpg":"ZLlJ","./images/lighthouse-4208843_1280.jpg":"xsxB","./images/mountains-3674334__340.jpg":"ESGj","./images/mountains-3674334_1280.jpg":"T80d"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-09-gallery/src.27a5428d.js.map