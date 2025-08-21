(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tonkho-tonkho-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tonkho/tonkho.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tonkho/tonkho.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTonkhoTonkhoPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar style=\"--border-width:0px!important;--background:#fff;\">\n    <ion-buttons slot=\"start\">\n      <ion-item lines=\"none\"\n        style=\"--background:#fff; --padding-start: 0px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\n        <ion-icon (click)=\"openBack()\" name=\"chevron-back-outline\" style=\"color: #7077d6;\">\n        </ion-icon>\n      </ion-item>\n    </ion-buttons>\n\n    <ion-title style=\"text-align: center!important; color: #7077d6;\">\n      <table style=\"width: 100%!important; max-width: 100%!important;\">\n        <tr>\n          <td style=\"text-align: center!important;\">\n            <div style=\"text-align: center;\">\n              Hàng tồn kho\n            </div>\n          </td>\n        </tr>\n      </table>\n\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div>\n\n    <div style=\"padding: 10px;\">\n\n      <table style=\"width: 100%!important; max-width: 100%!important;\">\n        <tr>\n          <td style=\"padding: 0px!important;\">\n            <ion-searchbar showCancelButton=\"always\" color=\"light\" style=\"--border-radius:1px;\"\n              placeholder=\"Tìm kiếm thông tin\" [(ngModel)]=\"Keyword\" (ionInput)=\"filterInfo($event)\"\n              style=\"--font-size:20px!important;\" clearInput>\n            </ion-searchbar>\n          </td>\n          <td style=\"padding: 0px!important; padding: 10px!important; width: 40px; text-align: right;\">\n            <ion-icon (click)=\"getData()\" name=\"search-outline\" style=\"font-size: 25px;\n            margin-bottom: -5px !important;            \n            padding: 9px;\n            border: solid 1px #7077d6;\n            border-radius: 4px;\n            color: #7077d6;\"></ion-icon>\n          </td>\n        </tr>\n      </table>\n\n      <div *ngFor=\"let item of Bill\" style=\"margin-top: 20px;\">\n\n        <div (click)=\"openDetail(item.id)\"\n          style=\"margin-bottom: 15px; border-bottom: solid 1px #ddd; padding-bottom: 5px;\">\n          <table style=\"width: 100%!important; max-width: 100%!important; margin-bottom: 0px;\">\n            <tr>\n              <td style=\"width: 30px; padding-top: 0px!important; vertical-align: top; text-align: center;\">\n                <ion-icon name=\"unlink-outline\" style=\"font-size: 24px;\"></ion-icon>\n              </td>\n              <td style=\"padding-bottom: 5px;\">\n                <div style=\"font-size: 15px;\">\n                  {{item.TenVT}} ({{item.DVT}})\n                </div>\n              </td>\n              <td\n                style=\"width: 150px!important; padding: 5px; padding-top: 0px!important; vertical-align: top; text-align: right;\">\n                <div style=\"font-weight: bold;color: #7077d6;\">\n                  {{item.LuongTon|number}} \n                </div>\n              </td>\n            </tr>\n            <tr>\n              <td style=\"padding-bottom: 5px;\" colspan=\"3\">\n                <div style=\"font-size: 14px; padding-top: 5px; padding-left: 5px;\">\n                  {{item.MaVT}}\n                </div>\n              </td>\n              </tr>\n          </table>\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/tonkho/tonkho-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/tonkho/tonkho-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: TonkhoPageRoutingModule */

    /***/
    function srcAppTonkhoTonkhoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TonkhoPageRoutingModule", function () {
        return TonkhoPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _tonkho_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tonkho.page */
      "./src/app/tonkho/tonkho.page.ts");

      var routes = [{
        path: '',
        component: _tonkho_page__WEBPACK_IMPORTED_MODULE_3__["TonkhoPage"]
      }];

      var TonkhoPageRoutingModule = function TonkhoPageRoutingModule() {
        _classCallCheck(this, TonkhoPageRoutingModule);
      };

      TonkhoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TonkhoPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tonkho/tonkho.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/tonkho/tonkho.module.ts ***!
      \*****************************************/

    /*! exports provided: TonkhoPageModule */

    /***/
    function srcAppTonkhoTonkhoModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TonkhoPageModule", function () {
        return TonkhoPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _tonkho_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tonkho-routing.module */
      "./src/app/tonkho/tonkho-routing.module.ts");
      /* harmony import */


      var _tonkho_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tonkho.page */
      "./src/app/tonkho/tonkho.page.ts");

      var TonkhoPageModule = function TonkhoPageModule() {
        _classCallCheck(this, TonkhoPageModule);
      };

      TonkhoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tonkho_routing_module__WEBPACK_IMPORTED_MODULE_5__["TonkhoPageRoutingModule"]],
        declarations: [_tonkho_page__WEBPACK_IMPORTED_MODULE_6__["TonkhoPage"]]
      })], TonkhoPageModule);
      /***/
    },

    /***/
    "./src/app/tonkho/tonkho.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/tonkho/tonkho.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppTonkhoTonkhoPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rvbmtoby90b25raG8ucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/tonkho/tonkho.page.ts":
    /*!***************************************!*\
      !*** ./src/app/tonkho/tonkho.page.ts ***!
      \***************************************/

    /*! exports provided: TonkhoPage */

    /***/
    function srcAppTonkhoTonkhoPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TonkhoPage", function () {
        return TonkhoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _function_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../function.service */
      "./src/app/function.service.ts");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! lodash */
      "./node_modules/lodash/lodash.js");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);

      var TonkhoPage = /*#__PURE__*/function () {
        function TonkhoPage(Function, router) {
          _classCallCheck(this, TonkhoPage);

          this.Function = Function;
          this.router = router;
          this.TabIndex = 1;
          this.UserName = "";
          this.Keyword = "";
          this.currentPage = 0;
          this.pageSize = 20;
          this.totalRecord = 0;
          this.totalPage = 0;
          this.tuNgay = new Date().toISOString();
          this._id = "";
          this._createDate = "";
          this._totalMoney = 0;
          this._note = "";
          this.Message = "";
        }

        _createClass(TonkhoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.getData();
          }
        }, {
          key: "getData",
          value: function getData() {
            var _this = this;

            var officeId = localStorage.getItem("officeId");
            this.BillData = this.Function.getTongHopTonKho(officeId, this.tuNgay, this.Keyword);

            if (this.BillData != null) {
              this.BillData.subscribe(function (data) {
                _this.Bill = data;
                _this.BillAll = _this.Bill;
              });
            }
          }
        }, {
          key: "loadData",
          value: function loadData(event) {}
        }, {
          key: "openDetail",
          value: function openDetail(id) {}
        }, {
          key: "filterInfo",
          value: function filterInfo(pid) {
            var val = pid.target.value;

            if (val && val.trim() != '') {
              this.Bill = lodash__WEBPACK_IMPORTED_MODULE_4___default.a.values(this.BillAll);
              this.Bill = this.Bill.filter(function (info) {
                return info.TenVT.toString().toLowerCase().indexOf(val.toString().toLowerCase()) > -1 || info.MaVT.toString().toLowerCase().indexOf(val.toString().toLowerCase()) > -1;
              });
            } else {
              this.Bill = this.BillAll;
            }
          }
        }, {
          key: "closeTab",
          value: function closeTab() {
            this.TabIndex = 1;
          }
        }, {
          key: "openTab",
          value: function openTab(_Tabindex) {
            this.TabIndex = _Tabindex;
          }
        }, {
          key: "openBack",
          value: function openBack() {
            this.router.navigateByUrl("tabs/tab3");
          }
        }]);

        return TonkhoPage;
      }();

      TonkhoPage.ctorParameters = function () {
        return [{
          type: _function_service__WEBPACK_IMPORTED_MODULE_3__["FunctionService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      TonkhoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tonkho',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tonkho.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tonkho/tonkho.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tonkho.page.scss */
        "./src/app/tonkho/tonkho.page.scss"))["default"]]
      })], TonkhoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tonkho-tonkho-module-es5.js.map