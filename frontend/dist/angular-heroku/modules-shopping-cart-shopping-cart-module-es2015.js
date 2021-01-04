(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-shopping-cart-shopping-cart-module"],{

/***/ "0kN0":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/shopping-cart/shopping-cart/shopping-cart.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-footer-custom{\r\n    display:flex;\r\n    flex-direction:row;\r\n    margin: 5px;\r\n    margin-left: 15px;\r\n    justify-content: space-between;\r\n}\r\n\r\n.shopping-cart-title{\r\n    display: inline-flex;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaG9wcGluZy1jYXJ0L3Nob3BwaW5nLWNhcnQvc2hvcHBpbmctY2FydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0L3Nob3BwaW5nLWNhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWZvb3Rlci1jdXN0b217XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uc2hvcHBpbmctY2FydC10aXRsZXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59Il19 */");

/***/ }),

/***/ "5jTn":
/*!***********************************************************************!*\
  !*** ./src/app/modules/shopping-cart/shopping-cart-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ShoppingCarteComponentRoutineModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCarteComponentRoutineModule", function() { return ShoppingCarteComponentRoutineModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "RKup");




const routes = [
    {
        path: '',
        component: _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartComponent"]
    }
];
let ShoppingCarteComponentRoutineModule = class ShoppingCarteComponentRoutineModule {
};
ShoppingCarteComponentRoutineModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ShoppingCarteComponentRoutineModule);



/***/ }),

/***/ "8kDR":
/*!***************************************************************!*\
  !*** ./src/app/modules/shopping-cart/shopping-cart.module.ts ***!
  \***************************************************************/
/*! exports provided: ShoppingCartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartModule", function() { return ShoppingCartModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "RKup");
/* harmony import */ var _shopping_cart_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shopping-cart-routing.module */ "5jTn");





let ShoppingCartModule = class ShoppingCartModule {
};
ShoppingCartModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shopping_cart_routing_module__WEBPACK_IMPORTED_MODULE_4__["ShoppingCarteComponentRoutineModule"]
        ]
    })
], ShoppingCartModule);



/***/ }),

/***/ "BYz9":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shopping-cart/shopping-cart/shopping-cart.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"shopping-cart-title\">\r\n  <h1>Panier (Prix total: {{ getShoppingCartTotalPrice() | async }}€)</h1>\r\n  <button\r\n    *ngIf=\"(products$ | async)?.length > 0\"\r\n    (click)=\"clearShoppingCart()\"\r\n    class=\"btn-primary\"\r\n  >\r\n    Vider le panier\r\n  </button>\r\n</div>\r\n<div *ngIf=\"(products$ | async)?.length == 0\">\r\n  <p>Vous n'avez aucun élément dans votre panier</p>\r\n</div>\r\n\r\n<div\r\n  class=\"card mb-2\"\r\n  style=\"max-width: 540px;\"\r\n  *ngFor=\"let product of products$ | async\"\r\n>\r\n  <div class=\"row no-gutters\">\r\n    <div class=\"col-md-4\">\r\n      <img [src]=\"product.imgUrl\" class=\"card-img\" [alt]=\"product.title\" />\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">{{product.title}}</h5>\r\n        <p class=\"card-text\">{{product.description}}</p>\r\n        <p class=\"card-text\">\r\n          Quantitée :\r\n          <input\r\n            type=\"number\"\r\n            class=\"form-control\"\r\n            min=\"1\"\r\n            [value]=\"product.quantity\"\r\n            (change)=\"onQuantityChanged(product, $event)\"\r\n          />\r\n        </p>\r\n        <p class=\"card-text\">\r\n          Prix : {{getTotalPriceFromProduct(product)}}€ ({{product.price}}€ par\r\n          article)\r\n        </p>\r\n      </div>\r\n      <div class=\"card-footer-custom\">\r\n        <button class=\"btn-primary\" (click)=\"deleteProduct(product)\">\r\n          Supprimer du panier\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "RKup":
/*!********************************************************************************!*\
  !*** ./src/app/modules/shopping-cart/shopping-cart/shopping-cart.component.ts ***!
  \********************************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_shopping_cart_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./shopping-cart.component.html */ "BYz9");
/* harmony import */ var _shopping_cart_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping-cart.component.css */ "0kN0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _store_actions_ShoppingCart_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/actions/ShoppingCart.action */ "UW1/");
/* harmony import */ var _store_states_ShoppingCart_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/states/ShoppingCart.state */ "a7n9");








let ShoppingCartComponent = class ShoppingCartComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.products$ = this.store.select(_store_states_ShoppingCart_state__WEBPACK_IMPORTED_MODULE_7__["ShoppingCartState"].GetProducts);
    }
    getTotalPriceFromProduct(product) {
        return product.price * product.quantity;
    }
    getShoppingCartTotalPrice() {
        return this.products$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((value) => value
            .map((p) => p.quantity * p.price)
            .reduce((acc, value) => acc + value, 0)));
    }
    clearShoppingCart() {
        this.store.dispatch(new _store_actions_ShoppingCart_action__WEBPACK_IMPORTED_MODULE_6__["ClearShoppingCart"]());
    }
    deleteProduct(product) {
        this.store.dispatch(new _store_actions_ShoppingCart_action__WEBPACK_IMPORTED_MODULE_6__["DelProduct"](product));
    }
    onQuantityChanged(product, newQuantity) {
        this.store.dispatch(new _store_actions_ShoppingCart_action__WEBPACK_IMPORTED_MODULE_6__["ModifyQuantity"](product, Number(newQuantity.target.value)));
    }
};
ShoppingCartComponent.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
];
ShoppingCartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-shopping-cart",
        template: _raw_loader_shopping_cart_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_shopping_cart_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ShoppingCartComponent);



/***/ })

}]);
//# sourceMappingURL=modules-shopping-cart-shopping-cart-module-es2015.js.map