(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["share-hang-san-xuat-hang-san-xuat-module"], {
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
    "./src/app/share/hang-san-xuat/hang-san-xuat-routing.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/share/hang-san-xuat/hang-san-xuat-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: HangSanXuatPageRoutingModule */

    /***/
    function srcAppShareHangSanXuatHangSanXuatRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HangSanXuatPageRoutingModule", function () {
        return HangSanXuatPageRoutingModule;
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


      var _hang_san_xuat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./hang-san-xuat.page */
      "./src/app/share/hang-san-xuat/hang-san-xuat.page.ts");

      var routes = [{
        path: '',
        component: _hang_san_xuat_page__WEBPACK_IMPORTED_MODULE_3__["HangSanXuatPage"]
      }];

      var HangSanXuatPageRoutingModule = function HangSanXuatPageRoutingModule() {
        _classCallCheck(this, HangSanXuatPageRoutingModule);
      };

      HangSanXuatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HangSanXuatPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/share/hang-san-xuat/hang-san-xuat.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/share/hang-san-xuat/hang-san-xuat.module.ts ***!
      \*************************************************************/

    /*! exports provided: HangSanXuatPageModule */

    /***/
    function srcAppShareHangSanXuatHangSanXuatModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HangSanXuatPageModule", function () {
        return HangSanXuatPageModule;
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


      var _hang_san_xuat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./hang-san-xuat-routing.module */
      "./src/app/share/hang-san-xuat/hang-san-xuat-routing.module.ts");
      /* harmony import */


      var _hang_san_xuat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./hang-san-xuat.page */
      "./src/app/share/hang-san-xuat/hang-san-xuat.page.ts");

      var HangSanXuatPageModule = function HangSanXuatPageModule() {
        _classCallCheck(this, HangSanXuatPageModule);
      };

      HangSanXuatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _hang_san_xuat_routing_module__WEBPACK_IMPORTED_MODULE_5__["HangSanXuatPageRoutingModule"]],
        declarations: [_hang_san_xuat_page__WEBPACK_IMPORTED_MODULE_6__["HangSanXuatPage"]]
      })], HangSanXuatPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=share-hang-san-xuat-hang-san-xuat-module-es5.js.map