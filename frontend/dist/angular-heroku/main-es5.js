(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\CNAM_WORK\A2\Web\tp05_lehmann_florian\tp05_lehmann_florian\frontend\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0z2C":
    /*!****************************************************!*\
      !*** ./src/app/components/home/home.component.css ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function z2C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "2MiI":
    /*!*******************************************************!*\
      !*** ./src/app/components/header/header.component.ts ***!
      \*******************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function MiI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./header.component.html */
      "yxfS");
      /* harmony import */


      var _header_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./header.component.css */
      "sx49");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngxs/store */
      "AcyG");
      /* harmony import */


      var src_app_store_actions_User_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/store/actions/User.action */
      "cXBO");
      /* harmony import */


      var src_app_store_states_User_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/store/states/User.state */
      "B7SL");
      /* harmony import */


      var _store_states_ShoppingCart_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../store/states/ShoppingCart.state */
      "a7n9");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(store, router) {
          _classCallCheck(this, HeaderComponent);

          this.store = store;
          this.router = router;
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.nbProduct$ = this.store.select(_store_states_ShoppingCart_state__WEBPACK_IMPORTED_MODULE_8__["ShoppingCartState"].GetProductsNumber);
            this.isUserLogged$ = this.store.select(src_app_store_states_User_state__WEBPACK_IMPORTED_MODULE_7__["UserState"].IsLogged);
          }
        }, {
          key: "Disconnect",
          value: function Disconnect() {
            this.store.dispatch(new src_app_store_actions_User_action__WEBPACK_IMPORTED_MODULE_6__["SignOutUser"]());
            this.router.navigate(['/home']);
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ctorParameters = function () {
        return [{
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-header",
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HeaderComponent);
      /***/
    },

    /***/
    "3yy/":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/lost-component/lost-component.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function yy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p> Erreur 404 : il semblerait que vous vous soyez perdu...</p>";
      /***/
    },

    /***/
    "7Mlp":
    /*!***********************************************************************!*\
      !*** ./src/app/components/lost-component/lost-component.component.ts ***!
      \***********************************************************************/

    /*! exports provided: LostComponentComponent */

    /***/
    function Mlp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LostComponentComponent", function () {
        return LostComponentComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lost_component_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lost-component.component.html */
      "3yy/");
      /* harmony import */


      var _lost_component_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lost-component.component.css */
      "tpIN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LostComponentComponent = /*#__PURE__*/function () {
        function LostComponentComponent() {
          _classCallCheck(this, LostComponentComponent);
        }

        _createClass(LostComponentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LostComponentComponent;
      }();

      LostComponentComponent.ctorParameters = function () {
        return [];
      };

      LostComponentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-lost-component',
        template: _raw_loader_lost_component_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lost_component_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LostComponentComponent);
      /***/
    },

    /***/
    "A3xY":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function A3xY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "p {\r\n  font-family: Lato;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG59Il19 */";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        production: false,
        baseUrl: '/api'
      };
      /***/
    },

    /***/
    "B7SL":
    /*!********************************************!*\
      !*** ./src/app/store/states/User.state.ts ***!
      \********************************************/

    /*! exports provided: UserState */

    /***/
    function B7SL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserState", function () {
        return UserState;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngxs/store */
      "AcyG");
      /* harmony import */


      var _actions_User_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../actions/User.action */
      "cXBO");

      var UserState = /*#__PURE__*/function () {
        function UserState() {
          _classCallCheck(this, UserState);
        }

        _createClass(UserState, [{
          key: "signIn",
          value: function signIn(_ref, _ref2) {
            var getState = _ref.getState,
                patchState = _ref.patchState;
            var payload = _ref2.payload;
            patchState({
              isLogged: true,
              userId: payload.Id
            });
          }
        }, {
          key: "signOut",
          value: function signOut(_ref3, _ref4) {
            var getState = _ref3.getState,
                patchState = _ref3.patchState;

            _objectDestructuringEmpty(_ref4);

            patchState({
              isLogged: false,
              userId: -1,
              token: ""
            });
          }
        }, {
          key: "newJwt",
          value: function newJwt(_ref5, _ref6) {
            var getState = _ref5.getState,
                patchState = _ref5.patchState;
            var payload = _ref6.payload;
            console.log("New JWT: ", payload);
            patchState({
              token: payload
            });
          }
        }], [{
          key: "IsLogged",
          value: function IsLogged(state) {
            return state.isLogged;
          }
        }, {
          key: "GetLoggedToken",
          value: function GetLoggedToken(state) {
            return state.token;
          }
        }]);

        return UserState;
      }();

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_actions_User_action__WEBPACK_IMPORTED_MODULE_3__["SignInUser"])], UserState.prototype, "signIn", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_actions_User_action__WEBPACK_IMPORTED_MODULE_3__["SignOutUser"])], UserState.prototype, "signOut", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_actions_User_action__WEBPACK_IMPORTED_MODULE_3__["NewJwt"])], UserState.prototype, "newJwt", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])()], UserState, "IsLogged", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])()], UserState, "GetLoggedToken", null);
      UserState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["State"])({
        name: 'user',
        defaults: {
          isLogged: false,
          userId: -1,
          token: ""
        }
      }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], UserState);
      /***/
    },

    /***/
    "BuFo":
    /*!***************************************************!*\
      !*** ./src/app/components/home/home.component.ts ***!
      \***************************************************/

    /*! exports provided: HomeComponent */

    /***/
    function BuFo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.component.html */
      "tXZI");
      /* harmony import */


      var _home_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.component.css */
      "0z2C");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      HomeComponent.ctorParameters = function () {
        return [];
      };

      HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomeComponent);
      /***/
    },

    /***/
    "GpEA":
    /*!********************************************************!*\
      !*** ./src/app/components/footer/footer.component.css ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function GpEA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "footer{\r\n  height: auto;\r\n  padding:10px 0px;\r\n  text-align:center;\r\n  color:white;\r\n  background-color: cadetblue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsMkJBQTJCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXJ7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6MTBweCAwcHg7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xyXG59Il19 */";
      /***/
    },

    /***/
    "LmEr":
    /*!*******************************************************!*\
      !*** ./src/app/components/footer/footer.component.ts ***!
      \*******************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function LmEr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./footer.component.html */
      "WwN9");
      /* harmony import */


      var _footer_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./footer.component.css */
      "GpEA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ctorParameters = function () {
        return [];
      };

      FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_footer_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FooterComponent);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.css */
      "A3xY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngxs/store */
      "AcyG");
      /* harmony import */


      var _store_states_User_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./store/states/User.state */
      "B7SL");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(store) {
          _classCallCheck(this, AppComponent);

          this.store = store;
          this.name = 'Angular ' + _angular_core__WEBPACK_IMPORTED_MODULE_3__["VERSION"].major;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.isLogged = this.store.select(_store_states_User_state__WEBPACK_IMPORTED_MODULE_5__["UserState"].IsLogged); // this.store.select(UserState.IsLogged).subscribe((bool) => console.log("isLogged: ", bool));
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'my-app',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "UW1/":
    /*!******************************************************!*\
      !*** ./src/app/store/actions/ShoppingCart.action.ts ***!
      \******************************************************/

    /*! exports provided: AddProduct, DelProduct, ClearShoppingCart, ModifyQuantity */

    /***/
    function UW1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddProduct", function () {
        return AddProduct;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DelProduct", function () {
        return DelProduct;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClearShoppingCart", function () {
        return ClearShoppingCart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModifyQuantity", function () {
        return ModifyQuantity;
      });

      var AddProduct = function AddProduct(payload) {
        _classCallCheck(this, AddProduct);

        this.payload = payload;
      };

      AddProduct.type = '[ShoppingCart] Add';

      var DelProduct = function DelProduct(payload) {
        _classCallCheck(this, DelProduct);

        this.payload = payload;
      };

      DelProduct.type = "[ShoppingCart] Del";

      var ClearShoppingCart = function ClearShoppingCart() {
        _classCallCheck(this, ClearShoppingCart);
      };

      ClearShoppingCart.type = "[ShoppingCart] Clear";

      var ModifyQuantity = function ModifyQuantity(payload, newQuantity) {
        _classCallCheck(this, ModifyQuantity);

        this.payload = payload;
        this.newQuantity = newQuantity;
      };

      ModifyQuantity.type = "[ShoppingCart] ModifyQuantity";
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header></app-header>\r\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\r\n      <div class=\"navbar-nav\">\r\n        <a class=\"nav-item nav-link\" routerLink=\"/home\">Accueil</a>\r\n        <a class=\"nav-item nav-link\" *ngIf=\"(isLogged | async)\" routerLink=\"/catalogue\">Catalogue</a>\r\n        <a class=\"nav-item nav-link\" *ngIf=\"(isLogged | async)\" routerLink=\"/shopping-cart\">Panier</a>\r\n        <a class=\"nav-item nav-link\" *ngIf=\"!(isLogged | async)\" routerLink=\"/client\">S'inscrire</a>\r\n        <a class=\"nav-item nav-link\" *ngIf=\"!(isLogged | async)\" routerLink=\"/client/login\">Se connecter</a>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>";
      /***/
    },

    /***/
    "WwN9":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function WwN9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<footer>\r\n\r\n<h1>Footer de l'application web Angular</h1>\r\n\r\n</footer>";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/header/header.component */
      "2MiI");
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/footer/footer.component */
      "LmEr");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _services_http_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./services/http-service.service */
      "mKmO");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngxs/store */
      "AcyG");
      /* harmony import */


      var _store_states_ShoppingCart_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./store/states/ShoppingCart.state */
      "a7n9");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/home/home.component */
      "BuFo");
      /* harmony import */


      var _components_lost_component_lost_component_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/lost-component/lost-component.component */
      "7Mlp");
      /* harmony import */


      var _store_states_User_state__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./store/states/User.state */
      "B7SL");
      /* harmony import */


      var _services_api_http_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./services/api-http-interceptor */
      "lhAl");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"], _components_lost_component_lost_component_component__WEBPACK_IMPORTED_MODULE_13__["LostComponentComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_9__["NgxsModule"].forRoot([_store_states_ShoppingCart_state__WEBPACK_IMPORTED_MODULE_10__["ShoppingCartState"], _store_states_User_state__WEBPACK_IMPORTED_MODULE_14__["UserState"]]), _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
          useClass: _services_api_http_interceptor__WEBPACK_IMPORTED_MODULE_15__["ApiHttpInterceptor"],
          multi: true
        }, _services_http_service_service__WEBPACK_IMPORTED_MODULE_7__["HttpServiceService"]]
      })], AppModule);
      /***/
    },

    /***/
    "a7n9":
    /*!****************************************************!*\
      !*** ./src/app/store/states/ShoppingCart.state.ts ***!
      \****************************************************/

    /*! exports provided: ShoppingCartState */

    /***/
    function a7n9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShoppingCartState", function () {
        return ShoppingCartState;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngxs/store */
      "AcyG");
      /* harmony import */


      var _actions_ShoppingCart_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../actions/ShoppingCart.action */
      "UW1/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ShoppingCartState = /*#__PURE__*/function () {
        function ShoppingCartState() {
          _classCallCheck(this, ShoppingCartState);
        }

        _createClass(ShoppingCartState, [{
          key: "add",
          value: function add(_ref7, _ref8) {
            var getState = _ref7.getState,
                patchState = _ref7.patchState;
            var payload = _ref8.payload;
            var state = getState();
            var foundProductIndex = state.products.findIndex(function (p) {
              return p.title.toLowerCase() == payload.title.toLowerCase();
            });

            if (foundProductIndex > -1) {
              state.products[foundProductIndex].quantity += 1;
            } else {
              payload.quantity = 1;
              state.products = [].concat(_toConsumableArray(state.products), [payload]);
            }

            patchState({
              products: _toConsumableArray(state.products)
            });
          }
        }, {
          key: "delete",
          value: function _delete(_ref9, _ref10) {
            var getState = _ref9.getState,
                patchState = _ref9.patchState;
            var payload = _ref10.payload;
            var state = getState();
            var foundProductIndex = state.products.findIndex(function (p) {
              return p.title.toLowerCase() == payload.title.toLowerCase();
            });
            patchState({
              products: _toConsumableArray(state.products.filter(function (p, i) {
                return i != foundProductIndex;
              }))
            });
            return;
          }
        }, {
          key: "clear",
          value: function clear(_ref11) {
            var getState = _ref11.getState,
                patchState = _ref11.patchState;
            var state = getState();
            state.products = [];
            patchState({
              products: _toConsumableArray(state.products)
            });
          }
        }, {
          key: "modifyQuantity",
          value: function modifyQuantity(_ref12, _ref13) {
            var getState = _ref12.getState,
                patchState = _ref12.patchState;
            var payload = _ref13.payload,
                newQuantity = _ref13.newQuantity;
            var state = getState();
            var index = state.products.findIndex(function (p) {
              return p.id == payload.id;
            });
            console.log(index);

            if (index > -1) {
              state.products[index].quantity = newQuantity;
              patchState({
                products: _toConsumableArray(state.products)
              });
            }
          }
        }], [{
          key: "GetProducts",
          value: function GetProducts(state) {
            return state.products;
          }
        }, {
          key: "GetProductsNumber",
          value: function GetProductsNumber(state) {
            var number = 0;
            state.products.forEach(function (p) {
              number += p.quantity || 1;
            });
            return number;
          }
        }]);

        return ShoppingCartState;
      }();

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_ShoppingCart_action__WEBPACK_IMPORTED_MODULE_2__["AddProduct"])], ShoppingCartState.prototype, "add", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_ShoppingCart_action__WEBPACK_IMPORTED_MODULE_2__["DelProduct"])], ShoppingCartState.prototype, "delete", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_ShoppingCart_action__WEBPACK_IMPORTED_MODULE_2__["ClearShoppingCart"])], ShoppingCartState.prototype, "clear", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_ShoppingCart_action__WEBPACK_IMPORTED_MODULE_2__["ModifyQuantity"])], ShoppingCartState.prototype, "modifyQuantity", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], ShoppingCartState, "GetProducts", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], ShoppingCartState, "GetProductsNumber", null);
      ShoppingCartState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
        name: 'shoppingCart',
        defaults: {
          products: []
        }
      }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()], ShoppingCartState);
      /***/
    },

    /***/
    "cXBO":
    /*!**********************************************!*\
      !*** ./src/app/store/actions/User.action.ts ***!
      \**********************************************/

    /*! exports provided: SignInUser, SignOutUser, NewJwt */

    /***/
    function cXBO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignInUser", function () {
        return SignInUser;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignOutUser", function () {
        return SignOutUser;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewJwt", function () {
        return NewJwt;
      });

      var SignInUser = function SignInUser(payload) {
        _classCallCheck(this, SignInUser);

        this.payload = payload;
      };

      SignInUser.type = '[User] SignIn';

      var SignOutUser = function SignOutUser() {
        _classCallCheck(this, SignOutUser);
      };

      SignOutUser.type = '[User] SignOut';

      var NewJwt = function NewJwt(payload) {
        _classCallCheck(this, NewJwt);

        this.payload = payload;
      };

      NewJwt.type = '[User] NewJwt';
      /***/
    },

    /***/
    "hN/g":
    /*!**************************!*\
      !*** ./src/polyfills.ts ***!
      \**************************/

    /*! no exports provided */

    /***/
    function hNG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_localize_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/localize/init */
      "N/DB");
      /* harmony import */


      var _angular_localize_init__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_localize_init__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! zone.js/dist/zone */
      "pDpN");
      /* harmony import */


      var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1__);
      /***************************************************************************************************
       * Load `$localize` onto the global scope - used if i18n tags appear in Angular templates.
       */

      /**
       * This file includes polyfills needed by Angular and is loaded before the app.
       * You can add your own extra polyfills to this file.
       *
       * This file is divided into 2 sections:
       *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
       *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
       *      file.
       *
       * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
       * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
       * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
       *
       * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
       */

      /***************************************************************************************************
       * BROWSER POLYFILLS
       */

      /** IE9, IE10 and IE11 requires all of the following polyfills. **/
      // import 'core-js/es6/symbol';
      // import 'core-js/es6/object';
      // import 'core-js/es6/function';
      // import 'core-js/es6/parse-int';
      // import 'core-js/es6/parse-float';
      // import 'core-js/es6/number';
      // import 'core-js/es6/math';
      // import 'core-js/es6/string';
      // import 'core-js/es6/date';
      // import 'core-js/es6/array';
      // import 'core-js/es6/regexp';
      // import 'core-js/es6/map';
      // import 'core-js/es6/set';

      /** IE10 and IE11 requires the following for NgClass support on SVG elements */
      // import 'classlist.js';  // Run `npm install --save classlist.js`.

      /** IE10 and IE11 requires the following to support `@angular/animation`. */
      // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

      /** Evergreen browsers require these. **/
      // import 'core-js/es6/reflect';
      // import 'core-js/es7/reflect';

      /**
       * Web Animations `@angular/platform-browser/animations`
       * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
       * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
       */
      // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

      /***************************************************************************************************
       * Zone JS is required by Angular itself.
       */
      // Included with Angular CLI.

      /***************************************************************************************************
       * APPLICATION IMPORTS
       */

      /**
       * Date, currency, decimal and percent pipes.
       * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
       */
      // import 'intl';  // Run `npm install --save intl`.

      /***/

    },

    /***/
    "lhAl":
    /*!**************************************************!*\
      !*** ./src/app/services/api-http-interceptor.ts ***!
      \**************************************************/

    /*! exports provided: ApiHttpInterceptor */

    /***/
    function lhAl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiHttpInterceptor", function () {
        return ApiHttpInterceptor;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngxs/store */
      "AcyG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _store_actions_User_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../store/actions/User.action */
      "cXBO");

      var ApiHttpInterceptor = /*#__PURE__*/function () {
        function ApiHttpInterceptor(router, store, actions$) {
          var _this = this;

          _classCallCheck(this, ApiHttpInterceptor);

          this.router = router;
          this.store = store;
          this.actions$ = actions$;
          this.token = "";
          this.actions$.pipe(Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["ofActionDispatched"])(_store_actions_User_action__WEBPACK_IMPORTED_MODULE_7__["NewJwt"])).subscribe(function (_ref14) {
            var payload = _ref14.payload;
            _this.token = payload;
            console.log("jwtToken modifié : " + _this.token);
          });
          this.actions$.pipe(Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["ofActionDispatched"])(_store_actions_User_action__WEBPACK_IMPORTED_MODULE_7__["SignOutUser"])).subscribe(function (_ref15) {
            var payload = _ref15.payload;
            _this.token = "";
          });
        }

        _createClass(ApiHttpInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var _this2 = this;

            console.log("intercept");

            if (this.token != "") {
              req = req.clone({
                setHeaders: {
                  Authorization: "Bearer ".concat(this.token)
                }
              });
              console.log("req changed with headers", req);
            }

            return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (evt) {
              if (evt instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                var authorization = evt.headers.get("Authorization");

                if (authorization != null) {
                  var tab = authorization.split(/Bearer\s+(.*)$/i);

                  if (tab.length > 1) {
                    _this2.store.dispatch(new _store_actions_User_action__WEBPACK_IMPORTED_MODULE_7__["NewJwt"](tab[1]));
                  }
                }
              }
            }, function (error) {
              switch (error.status) {
                case 401:
                  _this2.store.dispatch(new _store_actions_User_action__WEBPACK_IMPORTED_MODULE_7__["NewJwt"](""));

                  console.log("Error 401");
                  _this2.router.navigate['/client/login'];
                  break;
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
            }));
          }
        }]);

        return ApiHttpInterceptor;
      }();

      ApiHttpInterceptor.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }, {
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Actions"]
        }];
      };

      ApiHttpInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], ApiHttpInterceptor);
      /***/
    },

    /***/
    "mKmO":
    /*!**************************************************!*\
      !*** ./src/app/services/http-service.service.ts ***!
      \**************************************************/

    /*! exports provided: HttpServiceService */

    /***/
    function mKmO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpServiceService", function () {
        return HttpServiceService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");

      var HttpServiceService = /*#__PURE__*/function () {
        function HttpServiceService(http) {
          _classCallCheck(this, HttpServiceService);

          this.http = http;
        }

        _createClass(HttpServiceService, [{
          key: "getProductData",
          value: function getProductData() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + "/products");
          }
        }, {
          key: "registerUser",
          value: function registerUser(user) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + "/user/register", JSON.stringify(user));
          }
        }, {
          key: "loginUser",
          value: function loginUser(login, password) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + "/user/login", {
              params: {
                login: login,
                password: password
              }
            });
          }
        }, {
          key: "getProductById",
          value: function getProductById(id) {
            return this.getProductData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
              return value.filter(function (p) {
                return p.id === id;
              })[0];
            }));
          }
        }]);

        return HttpServiceService;
      }();

      HttpServiceService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      HttpServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], HttpServiceService);
      /***/
    },

    /***/
    "sx49":
    /*!********************************************************!*\
      !*** ./src/app/components/header/header.component.css ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function sx49(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "header{\r\n  height: auto;\r\n  padding: 10px 0px;\r\n  text-align: center;\r\n  color: white;\r\n  background-color: cadetblue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osMkJBQTJCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXJ7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xyXG59Il19 */";
      /***/
    },

    /***/
    "tXZI":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function tXZI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1>Accueil</h1>\r\n\r\n<p>Bienvenue dans l'application web Angular.</p>\r\n<p>Vous pouvez naviguer dans l'application grâce au bandeau de navigation juste au dessus.</p>";
      /***/
    },

    /***/
    "tpIN":
    /*!************************************************************************!*\
      !*** ./src/app/components/lost-component/lost-component.component.css ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function tpIN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9zdC1jb21wb25lbnQvbG9zdC1jb21wb25lbnQuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/home/home.component */
      "BuFo");
      /* harmony import */


      var _components_lost_component_lost_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/lost-component/lost-component.component */
      "7Mlp");

      var routes = [{
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
      }, {
        path: 'catalogue',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-catalog-catalog-module */
          "modules-catalog-catalog-module").then(__webpack_require__.bind(null,
          /*! ./modules/catalog/catalog.module */
          "1YPp")).then(function (m) {
            return m.CatalogModule;
          });
        }
      }, {
        path: 'client',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-client-client-module */
          "modules-client-client-module").then(__webpack_require__.bind(null,
          /*! ./modules/client/client.module */
          "VCm2")).then(function (m) {
            return m.ClientModule;
          });
        }
      }, {
        path: 'shopping-cart',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-shopping-cart-shopping-cart-module */
          "modules-shopping-cart-shopping-cart-module").then(__webpack_require__.bind(null,
          /*! ./modules/shopping-cart/shopping-cart.module */
          "8kDR")).then(function (m) {
            return m.ShoppingCartModule;
          });
        }
      }, {
        path: '',
        redirectTo: '/home',
        pathMatch: "full"
      }, {
        path: '**',
        component: _components_lost_component_lost_component_component__WEBPACK_IMPORTED_MODULE_4__["LostComponentComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: []
      })], AppRoutingModule);
      /***/
    },

    /***/
    "yxfS":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function yxfS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<header>\r\n\r\n<h1> Application web Angular : Formulaire </h1>\r\n<p>Nombre d'articles dans votre panier : {{ nbProduct$ | async }}</p>\r\n<button class=\"btn-primary\" (click)=\"Disconnect()\" *ngIf=\"isUserLogged$ | async\">Déconnexion</button>\r\n</header>";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./polyfills */
      "hN/g");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).then(function (ref) {
        // Ensure Angular destroys itself on hot reloads.
        if (window['ngRef']) {
          window['ngRef'].destroy();
        }

        window['ngRef'] = ref; // Otherwise, log the boot error
      })["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map