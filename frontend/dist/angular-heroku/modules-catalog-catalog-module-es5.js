(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-catalog-catalog-module"], {
    /***/
    "1YPp":
    /*!***************************************************!*\
      !*** ./src/app/modules/catalog/catalog.module.ts ***!
      \***************************************************/

    /*! exports provided: CatalogModule */

    /***/
    function YPp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatalogModule", function () {
        return CatalogModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./product-list/product-list.component */
      "HI2L");
      /* harmony import */


      var _catalog_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./catalog-routing.module */
      "AV5n");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _services_http_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/http-service.service */
      "mKmO");
      /* harmony import */


      var _search_box_search_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./search-box/search-box.component */
      "zArB");
      /* harmony import */


      var _detail_product_detail_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./detail-product/detail-product.component */
      "aZSA");
      /* harmony import */


      var src_app_services_api_http_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/api-http-interceptor */
      "lhAl");

      var CatalogModule = function CatalogModule() {
        _classCallCheck(this, CatalogModule);
      };

      CatalogModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"], _search_box_search_box_component__WEBPACK_IMPORTED_MODULE_7__["SearchBoxComponent"], _detail_product_detail_product_component__WEBPACK_IMPORTED_MODULE_8__["DetailProductComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _catalog_routing_module__WEBPACK_IMPORTED_MODULE_4__["CatalogueComponentRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
          useClass: src_app_services_api_http_interceptor__WEBPACK_IMPORTED_MODULE_9__["ApiHttpInterceptor"],
          multi: true
        }, _services_http_service_service__WEBPACK_IMPORTED_MODULE_6__["HttpServiceService"]]
      })], CatalogModule);
      /***/
    },

    /***/
    "1bWF":
    /*!****************************************!*\
      !*** ./src/app/models/ShoppingCart.ts ***!
      \****************************************/

    /*! exports provided: ShoppingCart, Article */

    /***/
    function bWF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShoppingCart", function () {
        return ShoppingCart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Article", function () {
        return Article;
      });
      /* harmony import */


      var _Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Product */
      "PFY3");

      var ShoppingCart = function ShoppingCart() {
        _classCallCheck(this, ShoppingCart);
      };

      var Article = /*#__PURE__*/function (_Product__WEBPACK_IMP) {
        _inherits(Article, _Product__WEBPACK_IMP);

        var _super = _createSuper(Article);

        function Article(id, title, description, price, imgUrl, color, width, height, garantie, quantity) {
          var _this;

          _classCallCheck(this, Article);

          _this = _super.call(this, id, title, description, price, imgUrl, color, width, height, garantie);
          _this.quantity = quantity;
          return _this;
        }

        _createClass(Article, null, [{
          key: "fromProduct",
          value: function fromProduct(product) {
            return new Article(product.id, product.title, product.description, product.price, product.imgUrl, product.color, product.width, product.height, product.garantie, 1);
          }
        }]);

        return Article;
      }(_Product__WEBPACK_IMPORTED_MODULE_0__["Product"]);
      /***/

    },

    /***/
    "AV5n":
    /*!***********************************************************!*\
      !*** ./src/app/modules/catalog/catalog-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: CatalogueComponentRoutingModule */

    /***/
    function AV5n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatalogueComponentRoutingModule", function () {
        return CatalogueComponentRoutingModule;
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


      var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./product-list/product-list.component */
      "HI2L");
      /* harmony import */


      var _detail_product_detail_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./detail-product/detail-product.component */
      "aZSA");

      var routes = [{
        path: ':id',
        component: _detail_product_detail_product_component__WEBPACK_IMPORTED_MODULE_4__["DetailProductComponent"]
      }, {
        path: '',
        component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"]
      }];

      var CatalogueComponentRoutingModule = function CatalogueComponentRoutingModule() {
        _classCallCheck(this, CatalogueComponentRoutingModule);
      };

      CatalogueComponentRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CatalogueComponentRoutingModule);
      /***/
    },

    /***/
    "BfLO":
    /*!*********************************************************************!*\
      !*** ./src/app/modules/catalog/search-box/search-box.component.css ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function BfLO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".searchBox{\r\n  display: inline-block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jYXRhbG9nL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jYXRhbG9nL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaEJveHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "HI2L":
    /*!************************************************************************!*\
      !*** ./src/app/modules/catalog/product-list/product-list.component.ts ***!
      \************************************************************************/

    /*! exports provided: ProductListComponent */

    /***/
    function HI2L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductListComponent", function () {
        return ProductListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_product_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./product-list.component.html */
      "HWr2");
      /* harmony import */


      var _product_list_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./product-list.component.css */
      "qUPu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../services/http-service.service */
      "mKmO");
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngxs/store */
      "AcyG");
      /* harmony import */


      var _store_actions_ShoppingCart_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../store/actions/ShoppingCart.action */
      "UW1/");
      /* harmony import */


      var _models_ShoppingCart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../models/ShoppingCart */
      "1bWF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ProductListComponent = /*#__PURE__*/function () {
        function ProductListComponent(httpService, store, router) {
          _classCallCheck(this, ProductListComponent);

          this.httpService = httpService;
          this.store = store;
          this.router = router;
        }

        _createClass(ProductListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.productsObservable = this.httpService.getProductData();
            this.displayProducts = this.productsObservable;
          }
        }, {
          key: "onFilteredData",
          value: function onFilteredData(event) {
            this.displayProducts = event;
          }
        }, {
          key: "addProductToShopppingCart",
          value: function addProductToShopppingCart(product) {
            var article = _models_ShoppingCart__WEBPACK_IMPORTED_MODULE_7__["Article"].fromProduct(product);

            this.store.dispatch(new _store_actions_ShoppingCart_action__WEBPACK_IMPORTED_MODULE_6__["AddProduct"](article));
          }
        }, {
          key: "onCardClicked",
          value: function onCardClicked(product) {
            this.router.navigate(["catalogue/" + product.id]);
          }
        }]);

        return ProductListComponent;
      }();

      ProductListComponent.ctorParameters = function () {
        return [{
          type: _services_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"]
        }, {
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }];
      };

      ProductListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-product-list",
        template: _raw_loader_product_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_list_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProductListComponent);
      /***/
    },

    /***/
    "HWr2":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/catalog/product-list/product-list.component.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function HWr2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1> Catalogue </h1>\r\n<app-search-box [dataToFilter]=\"productsObservable\" (onFilteredData)=\"onFilteredData($event)\"></app-search-box>\r\n<div *ngIf=\"(displayProducts | async)?.length == 0\">\r\n\t<p> Pas de produit correspondants à votre recherche. </p>\r\n</div>\r\n<div class=\"row\">\r\n\t<div class=\"col-sm-2\" *ngFor=\"let product of displayProducts | async\">\r\n\t\t<div class=\"card\"style=\"width: auto\">\r\n\t\t\t<img class=\"card-img-top\" (click)=\"onCardClicked(product)\"  style=\"width: 150px; height: 150px\" [src]=\"product.imgUrl\" [alt]=\"product.title\"/>\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h5 class=\"card-title\">{{product.title}}</h5>\r\n\t\t\t\t<p class=\"card-text\">{{product.description}}</p>\r\n\t\t\t\t<p class=\"card-text\"> Prix: {{product.price}}€</p>\r\n            </div>\r\n            <button class=\"btn-primary\" (click)=\"addProductToShopppingCart(product)\">Ajouter au panier</button>\r\n\t\t</div> \r\n\t</div>\r\n</div>";
      /***/
    },

    /***/
    "LRU0":
    /*!*****************************************************************************!*\
      !*** ./src/app/modules/catalog/detail-product/detail-product.component.css ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function LRU0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headTitle{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.headTitle > button{\r\n    height: 40px;\r\n    margin-left: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jYXRhbG9nL2RldGFpbC1wcm9kdWN0L2RldGFpbC1wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NhdGFsb2cvZGV0YWlsLXByb2R1Y3QvZGV0YWlsLXByb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkVGl0bGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaGVhZFRpdGxlID4gYnV0dG9ue1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "PFY3":
    /*!***********************************!*\
      !*** ./src/app/models/Product.ts ***!
      \***********************************/

    /*! exports provided: Product */

    /***/
    function PFY3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Product", function () {
        return Product;
      });

      var Product = function Product(id, title, description, price, imgUrl, color, width, height, garantie) {
        _classCallCheck(this, Product);

        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.imgUrl = imgUrl;
        this.color = color;
        this.width = width;
        this.height = height;
        this.garantie = garantie;
      };
      /***/

    },

    /***/
    "RDWn":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/catalog/search-box/search-box.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RDWn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"searchBox\">\r\n  <div class=\"input-group mb-3\">\r\n    <div class=\"input-group-prepend\">\r\n      <span class=\"input-group-text\">Filtre : </span>\r\n    </div>\r\n    <input\r\n      class=\"form-control\"\r\n      type=\"text\"\r\n      placeholder=\"Entrez le nom d'un produit\"\r\n      style=\"width: 250px;\"\r\n      (keyup.enter)=\"onKey($event)\"\r\n    />\r\n    <span style=\"margin: auto; padding-left: 5px;\"\r\n      >Appuyez sur la touche \"Entrée\" pour valider votre recherche.</span\r\n    >\r\n    <div></div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "RSg1":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/catalog/detail-product/detail-product.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RSg1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"product | async as product; else loading\" style=\"text-align: center;\">\r\n    <div class=\"headTitle\">\r\n        <h1>Détails de \"{{product.title}}\"</h1>\r\n        <button class=\"btn-primary\" (click)=\"onAddToShoppingCart(product)\"> Ajouter dans le panier </button>\r\n    </div>\r\n    \r\n    <img [src]=\"product.imgUrl\" [alt]=\"product.title\" style=\"max-width: 400px; max-height: 400px\"/>\r\n    <ul class=\"list-group\">\r\n        <li class=\"list-group\" style=\"display: inline-block\"><b>Fabriquant : </b>{{product.manufacturer}}</li>\r\n        <li class=\"list-group\" style=\"display: inline-block\"><b>Couleur : </b>{{product.color}}</li>\r\n        <li class=\"list-group\" style=\"display: inline-block\"><b>Dimensions : </b>{{product.width}} x {{product.height}}</li>\r\n        <li class=\"list-group\" style=\"display: inline-block\"><b>Garantie :  </b>{{product.garantie}} an(s)</li>\r\n        <li class=\"list-group\" style=\"display: inline-block\"><b>Prix unitaire :  </b>{{product.price}} €</li>\r\n        <li class=\"list-group\" style=\"display: inline-block\"><b>Description : <br/>   </b>{{product.description}}</li>\r\n    </ul>\r\n</div>\r\n\r\n<ng-template #loading>\r\n    <p style=\"text-align: center;\">Loading...</p>\r\n</ng-template>";
      /***/
    },

    /***/
    "aZSA":
    /*!****************************************************************************!*\
      !*** ./src/app/modules/catalog/detail-product/detail-product.component.ts ***!
      \****************************************************************************/

    /*! exports provided: DetailProductComponent */

    /***/
    function aZSA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailProductComponent", function () {
        return DetailProductComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_detail_product_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./detail-product.component.html */
      "RSg1");
      /* harmony import */


      var _detail_product_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./detail-product.component.css */
      "LRU0");
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


      var _models_ShoppingCart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../models/ShoppingCart */
      "1bWF");
      /* harmony import */


      var _services_http_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../services/http-service.service */
      "mKmO");
      /* harmony import */


      var _store_actions_ShoppingCart_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../store/actions/ShoppingCart.action */
      "UW1/");

      var DetailProductComponent = /*#__PURE__*/function () {
        function DetailProductComponent(httpService, route, router, store) {
          _classCallCheck(this, DetailProductComponent);

          this.httpService = httpService;
          this.route = route;
          this.router = router;
          this.store = store;
        }

        _createClass(DetailProductComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            var id = Number(this.route.snapshot.paramMap.get("id"));
            this.product = this.httpService.getProductById(id);
            setTimeout(function () {
              _this2.product.subscribe(function (value) {
                if (!value) _this2.noProduct();
              });
            }, 5000);
          }
        }, {
          key: "noProduct",
          value: function noProduct() {
            this.router.navigate(["/catalogue"]);
          }
        }, {
          key: "onAddToShoppingCart",
          value: function onAddToShoppingCart(product) {
            var article = _models_ShoppingCart__WEBPACK_IMPORTED_MODULE_6__["Article"].fromProduct(product);

            this.store.dispatch(new _store_actions_ShoppingCart_action__WEBPACK_IMPORTED_MODULE_8__["AddProduct"](article));
          }
        }]);

        return DetailProductComponent;
      }();

      DetailProductComponent.ctorParameters = function () {
        return [{
          type: _services_http_service_service__WEBPACK_IMPORTED_MODULE_7__["HttpServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
        }];
      };

      DetailProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-detail-product",
        template: _raw_loader_detail_product_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detail_product_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DetailProductComponent);
      /***/
    },

    /***/
    "qUPu":
    /*!*************************************************************************!*\
      !*** ./src/app/modules/catalog/product-list/product-list.component.css ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function qUPu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "img{\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jYXRhbG9nL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NhdGFsb2cvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */";
      /***/
    },

    /***/
    "zArB":
    /*!********************************************************************!*\
      !*** ./src/app/modules/catalog/search-box/search-box.component.ts ***!
      \********************************************************************/

    /*! exports provided: SearchBoxComponent */

    /***/
    function zArB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchBoxComponent", function () {
        return SearchBoxComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_search_box_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./search-box.component.html */
      "RDWn");
      /* harmony import */


      var _search_box_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./search-box.component.css */
      "BfLO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var SearchBoxComponent = /*#__PURE__*/function () {
        function SearchBoxComponent() {
          _classCallCheck(this, SearchBoxComponent);

          this.isTyping = false;
          this.onFilteredData = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        }

        _createClass(SearchBoxComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onKey",
          value: function onKey(event) {
            var output$ = this.dataToFilter.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (products) {
              return products.filter(function (p) {
                return p.title.toLowerCase().includes(event.target.value.toLowerCase());
              });
            }));
            this.onFilteredData.emit(output$);
          }
        }]);

        return SearchBoxComponent;
      }();

      SearchBoxComponent.ctorParameters = function () {
        return [];
      };

      SearchBoxComponent.propDecorators = {
        dataToFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        onFilteredData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      SearchBoxComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-search-box",
        template: _raw_loader_search_box_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_search_box_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SearchBoxComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modules-catalog-catalog-module-es5.js.map