(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donvitinh-dvt-create-dvt-create-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/donvitinh/dvt-create/dvt-create.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donvitinh/dvt-create/dvt-create.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDonvitinhDvtCreateDvtCreatePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>donvi-create</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n  <div class=\"unit\">\r\n    <div class=\"unit-header\">\r\n      <div class=\"unit-title\">Đơn vị tính</div>\r\n      <ion-icon (click)=\"closeModal()\" name=\"close-outline\"></ion-icon>\r\n    </div>\r\n    <table class=\"w-full\">\r\n      <tr>\r\n        <td colspan=\"2\">\r\n          <div class=\"unit-item\">\r\n            <label for=\"\">Đơn vị tính <span class=\"text-err\">*</span></label>\r\n            <input type=\"text\" [(ngModel)]=\"sendItem.DVT\">\r\n          </div>\r\n        </td>\r\n      </tr>\r\n      <tr *ngIf=\"submit && !sendItem.DVT\" class=\"no-border-top\">\r\n        <td colspan=\"2\" class=\"text-err\"  style=\"padding-top: 8px !important;\">\r\n          Trường bắt buộc nhập\r\n        </td>\r\n      </tr>\r\n  \r\n \r\n      <tr>\r\n        <td>\r\n            <div class=\"unit-item pr-5\">\r\n              <label for=\"\">Quy đổi thành</label>\r\n              <input type=\"number\" [(ngModel)]=\"sendItem.SoLuongQuyDoi\" >\r\n            </div>\r\n        </td>\r\n        <td>\r\n          <div class=\"unit-item pl-5\">\r\n            <label for=\"\">Đơn giá mua</label>\r\n            <input type=\"text\" [(ngModel)]=\"this.sendItemConv.GiaMua\" (ngModelChange)=\"formatInput('GiaMua', $event)\">\r\n          </div>\r\n      </td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n            <div class=\"unit-item pr-5\">\r\n              <label for=\"\">Đơn giá bán lẻ</label>\r\n              <input type=\"text\" [(ngModel)]=\"this.sendItemConv.GiaBanLe\" (ngModelChange)=\"formatInput('GiaBanLe', $event)\">\r\n            </div>\r\n        </td>\r\n        <td>\r\n          <div class=\"unit-item pl-5\">\r\n            <label for=\"\">Đơn giá bán sỷ</label>\r\n            <input type=\"text\" [(ngModel)]=\"this.sendItemConv.GiaBanSy\" (ngModelChange)=\"formatInput('GiaBanSy', $event)\">\r\n          </div>\r\n      </td>\r\n      </tr>\r\n    </table>\r\n\r\n  </div> \r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n\r\n  <div class=\"unit-footer\">\r\n    <button (click)=\"confirmSubmit()\">LƯU ĐƠN VỊ TÍNH </button>\r\n  </div>\r\n</ion-toolbar>\r\n\r\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/donvitinh/dvt-create/dvt-create-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/donvitinh/dvt-create/dvt-create-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: DvtCreatePageRoutingModule */

    /***/
    function srcAppDonvitinhDvtCreateDvtCreateRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DvtCreatePageRoutingModule", function () {
        return DvtCreatePageRoutingModule;
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


      var _dvt_create_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dvt-create.page */
      "./src/app/donvitinh/dvt-create/dvt-create.page.ts");

      var routes = [{
        path: '',
        component: _dvt_create_page__WEBPACK_IMPORTED_MODULE_3__["DvtCreatePage"]
      }];

      var DvtCreatePageRoutingModule = function DvtCreatePageRoutingModule() {
        _classCallCheck(this, DvtCreatePageRoutingModule);
      };

      DvtCreatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DvtCreatePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/donvitinh/dvt-create/dvt-create.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/donvitinh/dvt-create/dvt-create.module.ts ***!
      \***********************************************************/

    /*! exports provided: DvtCreatePageModule */

    /***/
    function srcAppDonvitinhDvtCreateDvtCreateModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DvtCreatePageModule", function () {
        return DvtCreatePageModule;
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


      var _dvt_create_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./dvt-create-routing.module */
      "./src/app/donvitinh/dvt-create/dvt-create-routing.module.ts");
      /* harmony import */


      var _dvt_create_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./dvt-create.page */
      "./src/app/donvitinh/dvt-create/dvt-create.page.ts");

      var DvtCreatePageModule = function DvtCreatePageModule() {
        _classCallCheck(this, DvtCreatePageModule);
      };

      DvtCreatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _dvt_create_routing_module__WEBPACK_IMPORTED_MODULE_5__["DvtCreatePageRoutingModule"]],
        declarations: [_dvt_create_page__WEBPACK_IMPORTED_MODULE_6__["DvtCreatePage"]]
      })], DvtCreatePageModule);
      /***/
    },

    /***/
    "./src/app/donvitinh/dvt-create/dvt-create.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/donvitinh/dvt-create/dvt-create.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppDonvitinhDvtCreateDvtCreatePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".unit {\n  padding: 4px 10px;\n}\n.unit-header {\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #cbcbcb;\n}\n.unit-header ion-icon {\n  font-size: 30px;\n}\n.unit-title {\n  width: 100%;\n  font-size: 18px;\n  font-weight: 600;\n  padding-bottom: 4px;\n  color: #242424;\n  padding: 8px 0 8px 0;\n  color: var(--background-color);\n}\n.unit-footer {\n  padding: 5px;\n}\n.unit-footer button {\n  color: white;\n  background: var(--background-color);\n  width: 100%;\n  padding: 12px;\n  font-size: 16px;\n  font-weight: 600;\n  border-radius: 5px;\n  margin-left: auto;\n}\ninput[type=text],\ninput[type=number],\ninput[type=date], .unit-input {\n  width: 100%;\n  border: 1px solid white;\n  background: #caeeff;\n  border-radius: 5px;\n  margin-top: 6px;\n  padding: 8px 10px;\n}\nlabel {\n  font-weight: 500;\n}\n.input-no-border {\n  background: white !important;\n  text-align: right !important;\n}\ntd {\n  padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9udml0aW5oL2R2dC1jcmVhdGUvZHZ0LWNyZWF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQUNSO0FBQ1E7RUFDSSxlQUFBO0FBQ1o7QUFJSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0FBRlI7QUFLSTtFQUNJLFlBQUE7QUFIUjtBQUtRO0VBQ0ksWUFBQTtFQUNBLG1DQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBSFo7QUFTQTs7O0VBT0ksV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVZKO0FBYUE7RUFDSSxnQkFBQTtBQVZKO0FBYUE7RUFDSSw0QkFBQTtFQUNBLDRCQUFBO0FBVko7QUFjQTtFQUNJLGlCQUFBO0FBWEoiLCJmaWxlIjoic3JjL2FwcC9kb252aXRpbmgvZHZ0LWNyZWF0ZS9kdnQtY3JlYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51bml0e1xyXG4gICAgcGFkZGluZzogNHB4IDEwcHggICA7XHJcbiAgICBcclxuICAgICYtaGVhZGVye1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NiY2JjYjtcclxuXHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgJi10aXRsZXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMjQyNDI0O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAwIDhweCAwO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKSAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgJi1mb290ZXJ7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdLFxyXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXSwgLnVuaXQtaW5wdXQge1xyXG4gICAgLy8gd2lkdGg6IDEwMHB4O1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogI2NhZWVmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG59XHJcblxyXG5sYWJlbHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5pbnB1dC1uby1ib3JkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbnRke1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcblxyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/donvitinh/dvt-create/dvt-create.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/donvitinh/dvt-create/dvt-create.page.ts ***!
      \*********************************************************/

    /*! exports provided: DvtCreatePage */

    /***/
    function srcAppDonvitinhDvtCreateDvtCreatePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DvtCreatePage", function () {
        return DvtCreatePage;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var src_app_service_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/service/global.service */
      "./src/app/service/global.service.ts");
      /* harmony import */


      var src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/service/loading.service */
      "./src/app/service/loading.service.ts");
      /* harmony import */


      var src_app_service_toastService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/service/toastService */
      "./src/app/service/toastService.ts");

      var DvtCreatePage = /*#__PURE__*/function () {
        // GiaMuaConv: string = '';
        // GiaBanLeConv: string = '';
        // GiaBanSyConv: string = '';
        function DvtCreatePage(GlobalService, currencyPipe, route, LoadingService, ToastService) {
          _classCallCheck(this, DvtCreatePage);

          this.GlobalService = GlobalService;
          this.currencyPipe = currencyPipe;
          this.route = route;
          this.LoadingService = LoadingService;
          this.ToastService = ToastService;
          this.sendItem = {
            "DonViTinhID": 0,
            "DVT": "",
            "GiaMua": 0,
            "GiaBanLe": 0,
            "GiaBanSy": 0,
            "SoLuongQuyDoi": 1
          };
          this.sendItemConv = {
            "DVT": "",
            "GiaMua": "",
            "GiaBanLe": "",
            "GiaBanSy": "",
            "SoLuongQuyDoi": 1
          };
          this.submit = false;
        }

        _createClass(DvtCreatePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "formatInput",
          value: function formatInput(item, e) {
            var convNumber = this.currencyPipe.transform(e.replace(/\D/g, '').replace(/^0+/, ''), ' ', 'symbol', '1.0-0');
            this.sendItemConv[item] = convNumber; // this.GiaBanLeConv = convNumber;

            this.sendItem[item] = Number(e.replace(/,/g, ''));
            console.log('convNumber', convNumber);
            console.log('this.sendItemConv', this.sendItemConv);
          }
        }, {
          key: "confirmSubmit",
          value: function confirmSubmit() {
            this.sendItemConv.SoLuongQuyDoi = this.sendItem.SoLuongQuyDoi;
            this.submit = true;

            if (!this.sendItem.DVT) {
              return;
            }

            console.log('this.sendItem.DVT', this.sendItem.DVT);
            this.sendItemConv.DVT = this.sendItem.DVT; // console.log('sendItem', this.sendItem);

            this.GlobalService.closeModalSenData({
              'item': this.sendItem,
              'itemConv': this.sendItemConv
            });
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.GlobalService.closeModal();
          }
        }]);

        return DvtCreatePage;
      }();

      DvtCreatePage.ctorParameters = function () {
        return [{
          type: src_app_service_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
        }, {
          type: src_app_service_toastService__WEBPACK_IMPORTED_MODULE_6__["ToastService"]
        }];
      };

      DvtCreatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dvt-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./dvt-create.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/donvitinh/dvt-create/dvt-create.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./dvt-create.page.scss */
        "./src/app/donvitinh/dvt-create/dvt-create.page.scss"))["default"]]
      })], DvtCreatePage);
      /***/
    },

    /***/
    "./src/app/service/global.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/service/global.service.ts ***!
      \*******************************************/

    /*! exports provided: GlobalService */

    /***/
    function srcAppServiceGlobalServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GlobalService", function () {
        return GlobalService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js"); // import { StringResources } from '@app/models/sharedmodels';


      var GlobalService = /*#__PURE__*/function () {
        function GlobalService(alertController, modalController) {
          _classCallCheck(this, GlobalService);

          this.alertController = alertController;
          this.modalController = modalController;
          this.controlMove = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('Quản lý trạm');
          this.sendMove = this.controlMove.asObservable();
        }

        _createClass(GlobalService, [{
          key: "changeMoveCont",
          value: function changeMoveCont(item) {
            var _this = this;

            setTimeout(function () {
              _this.controlMove.next(item);
            });
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(question, message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert, _yield$alert$onDidDis, role;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        header: question,
                        message: message,
                        buttons: [{
                          text: "Hủy",
                          role: 'false'
                        }, {
                          text: "Đồng ý",
                          role: 'true'
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                      _context.next = 7;
                      return alert.onDidDismiss();

                    case 7:
                      _yield$alert$onDidDis = _context.sent;
                      role = _yield$alert$onDidDis.role;
                      return _context.abrupt("return", "".concat(role));

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "closeModalSenData",
          value: function closeModalSenData(item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var onClosedData;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      onClosedData = item;
                      _context2.next = 3;
                      return this.modalController.dismiss(onClosedData);

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modalController.dismiss();

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return GlobalService;
      }();

      GlobalService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }];
      };

      GlobalService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], GlobalService);
      /***/
    },

    /***/
    "./src/app/service/toastService.ts":
    /*!*****************************************!*\
      !*** ./src/app/service/toastService.ts ***!
      \*****************************************/

    /*! exports provided: ToastService */

    /***/
    function srcAppServiceToastServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastService", function () {
        return ToastService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var ToastService = /*#__PURE__*/function () {
        function ToastService(toastController) {
          _classCallCheck(this, ToastService);

          this.toastController = toastController;
        }

        _createClass(ToastService, [{
          key: "successToast",
          value: function successToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var toast;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 1500,
                        position: 'top',
                        color: 'success',
                        cssClass: 'toast-ios'
                      });

                    case 2:
                      toast = _context4.sent;
                      _context4.next = 5;
                      return toast.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "errorToast",
          value: function errorToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var toast;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 1500,
                        position: 'top',
                        color: 'danger',
                        cssClass: 'toast-ios'
                      });

                    case 2:
                      toast = _context5.sent;
                      _context5.next = 5;
                      return toast.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "warningToast",
          value: function warningToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var toast;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 1500,
                        position: 'top',
                        color: 'warning',
                        cssClass: 'toast-ios'
                      });

                    case 2:
                      toast = _context6.sent;
                      _context6.next = 5;
                      return toast.present();

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return ToastService;
      }();

      ToastService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }];
      };

      ToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ToastService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=donvitinh-dvt-create-dvt-create-module-es5.js.map