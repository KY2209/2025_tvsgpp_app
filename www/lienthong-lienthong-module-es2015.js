(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lienthong-lienthong-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lienthong/lienthong.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lienthong/lienthong.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons (click)=\"openBack()\" slot=\"start\">\r\n      <ion-item lines=\"none\"\r\n        style=\"--padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"font-size: 25px;\"></ion-icon>\r\n      </ion-item>\r\n    </ion-buttons>\r\n    <ion-title style=\"font-weight: 600; text-align: center;\">\r\n      Liên thông dữ liệu\r\n\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\" (click)=\"checkSearch =! checkSearch\">\r\n      <ion-item lines=\"none\"\r\n        style=\"--padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon name=\"funnel-outline\" style=\"font-size: 26px;\"></ion-icon>\r\n\r\n      </ion-item>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <div class=\"synthetic\">\r\n    <div *ngIf=\"checkSearch\" class=\"search-item\">\r\n      <div class=\"synthetic-item synthetic-date\">\r\n        <!-- Năm dữ liệu: -->\r\n        <table style=\"width: 100%;\">\r\n          <tr>\r\n\r\n            <td>\r\n              <ion-datetime displayFormat=\"DD/MM\" (ngModelChange)=\"changeDay($event, 'fromDay')\"\r\n                [(ngModel)]=\"searchData.fromDay\"></ion-datetime>\r\n\r\n            </td>\r\n            <td>\r\n              <ion-datetime displayFormat=\"DD/MM\" (ngModelChange)=\"changeDay($event, 'toDay')\"\r\n                [(ngModel)]=\"searchData.toDay\"></ion-datetime>\r\n\r\n            </td>\r\n            <td style=\"width: 60px; padding: 0px 0px 10px 0px;\">\r\n\r\n              <ion-datetime displayFormat=\"YYYY\" style=\" border: none;\" (ngModelChange)=\"changeYear($event)\"\r\n                [(ngModel)]=\"sendChungtu.nam_du_lieu\">\r\n              </ion-datetime>\r\n\r\n            </td>\r\n          </tr>\r\n        </table>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-header>\r\n\r\n\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n\r\n\r\n  <div style=\"font-weight: bold;\">\r\n\r\n    <table style=\"width: 100%;height: 20px; font-size: 15px; background-color: #F1EFF3;color: #052761;\">\r\n      <tr>\r\n        <td style=\"text-align: center;padding-top: 5px;\">\r\n          <div class=\"export-content-left export-content-title\">\r\n            Trong ngày hoặc từ ngày đến ngày\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n    <div style=\"padding-top:10px;padding:10px;\">\r\n      <table class=\"s-border\">\r\n        <tr>\r\n          <td style=\"width: 25%;border: 0.5px solid #dedeff!important;\">\r\n            <table style=\"width: 100%!important; max-width: 100%!important;\">\r\n              <tr>\r\n                <td\r\n                  style=\"text-align: center; vertical-align: middle!important; font-size: 14px;font-weight: bold; padding: 5px;color: #000000;\">\r\n                  Hóa đơn\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </td>\r\n          <td style=\"width: 25%;border: 0.5px solid #dedeff!important;\">\r\n            <table style=\"width: 100%!important; max-width: 100%!important;\">\r\n              <tr>\r\n                <td\r\n                  style=\"text-align: center; vertical-align: middle!important; font-size: 14px;font-weight: bold; padding: 5px;color: #000000;\">\r\n                  Phiếu nhập\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </td>\r\n          <td style=\"width: 25%;border: 0.5px solid #dedeff!important;\">\r\n            <table style=\"width: 100%!important; max-width: 100%!important;\">\r\n              <tr>\r\n                <td\r\n                  style=\"text-align: center; vertical-align: middle!important; font-size: 14px;font-weight: bold; padding: 5px;color: #000000;\">\r\n                  Phiếu xuất\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </td>\r\n          <td style=\"width: 25%;border: 0.5px solid #dedeff!important;\">\r\n            <table style=\"width: 100%!important; max-width: 100%!important;\">\r\n              <tr>\r\n                <td\r\n                  style=\"text-align: center; vertical-align: middle!important; font-size: 15px;font-weight: bold; padding: 5px;color: #000000;\">\r\n                  #\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n\r\n      <table style=\"width: 100%!important; max-width: 100%!important;border: 0.5px solid #dedeff!important;\"\r\n        *ngFor=\"let item of LienthongData\">\r\n\r\n\r\n        <tr *ngIf=\"item.StatusGpp =='XN'\">\r\n\r\n\r\n          <td style=\"width: 25%;border: 0.5px solid #dedeff!important;\">\r\n\r\n            <table style=\"width: 100%!important; max-width: 100%!important;\">\r\n              <tr>\r\n                <td style=\"text-align: center; vertical-align: middle!important; font-size: 14px; padding: 5px;\">\r\n                  {{item.TongHoaDon}}\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </td>\r\n          <td style=\"width: 25%;border: 0.5px solid #dedeff!important;\">\r\n            <table style=\"width: 100%!important; max-width: 100%!important;\">\r\n              <tr>\r\n                <td style=\"text-align: center; vertical-align: middle!important; font-size: 14px; padding: 5px;\">\r\n                  {{item.TongPhieuNhap}}\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </td>\r\n          <td style=\"width: 25%;border: 0.5px solid #dedeff!important;\">\r\n\r\n            <table style=\"width: 100%!important; max-width: 100%!important;\">\r\n              <tr>\r\n                <td style=\"text-align: center; vertical-align: middle!important; font-size: 14px; padding: 5px;\">\r\n                  {{item.TongPhieuXuat}}\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </td>\r\n          <td style=\"width: 25%;border: 0.5px solid #dedeff!important;\">\r\n\r\n            <table style=\"width: 100%!important; max-width: 100%!important;\">\r\n              <tr>\r\n                <td\r\n                  style=\"text-align: center; vertical-align: middle!important; font-size: 25px;font-weight: bold; padding: 5px;\">\r\n                  <ion-icon name=\"checkmark-outline\"></ion-icon>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </td>\r\n        </tr>\r\n\r\n        <tr *ngIf=\"item.StatusGpp =='CXN'\">\r\n          <td style=\"width: 25%;border: 0.5px solid #dedeff!important;\">\r\n\r\n            <table style=\"width: 100%!important; max-width: 100%!important;\">\r\n              <tr>\r\n                <td style=\"text-align: center; vertical-align: middle!important; font-size: 14px; padding: 5px;\">\r\n                  {{item.TongHoaDon}}\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </td>\r\n          <td style=\"width: 25%;border: 0.5px solid #dedeff!important;\">\r\n            <table style=\"width: 100%!important; max-width: 100%!important;\">\r\n              <tr>\r\n                <td style=\"text-align: center; vertical-align: middle!important; font-size: 14px; padding: 5px;\">\r\n                  {{item.TongPhieuNhap}}\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </td>\r\n          <td style=\"width: 25%;border: 0.5px solid #dedeff!important;\">\r\n\r\n            <table style=\"width: 100%!important; max-width: 100%!important;\">\r\n              <tr>\r\n                <td style=\"text-align: center; vertical-align: middle!important; font-size: 14px; padding: 5px;\">\r\n                  {{item.TongPhieuXuat}}\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </td>\r\n          <td style=\"width: 25%;border: 0.5px solid #dedeff!important;\">\r\n\r\n            <table style=\"width: 100%!important; max-width: 100%!important;\">\r\n              <tr>\r\n                <td style=\"text-align: center; vertical-align: middle!important; font-size: 25px; padding: 5px;\">\r\n                  <ion-icon name=\"close-outline\"></ion-icon>\r\n\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </td>\r\n        </tr>\r\n\r\n        <tr *ngIf=\"item.StatusGpp =='TB'\">\r\n          <td style=\"width: 25%;border: 0.5px solid #dedeff!important;\">\r\n\r\n            <table style=\"width: 100%!important; max-width: 100%!important;\">\r\n              <tr>\r\n                <td style=\"text-align: center; vertical-align: middle!important; font-size: 14px; padding: 5px;\">\r\n                  {{item.TongHoaDon}}\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </td>\r\n          <td style=\"width: 25%;border: 0.5px solid #dedeff!important;\">\r\n            <table style=\"width: 100%!important; max-width: 100%!important;\">\r\n              <tr>\r\n                <td style=\"text-align: center; vertical-align: middle!important; font-size: 14px; padding: 5px;\">\r\n                  {{item.TongPhieuNhap}}\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </td>\r\n          <td style=\"width: 25%;border: 0.5px solid #dedeff!important;\">\r\n\r\n            <table style=\"width: 100%!important; max-width: 100%!important;\">\r\n              <tr>\r\n                <td style=\"text-align: center; vertical-align: middle!important; font-size: 14px; padding: 5px;\">\r\n                  {{item.TongPhieuXuat}}\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </td>\r\n          <td style=\"width: 25%;border: 0.5px solid #dedeff!important;\">\r\n\r\n            <table style=\"width: 100%!important; max-width: 100%!important;\">\r\n              <tr>\r\n                <td\r\n                  style=\"text-align: center; vertical-align: middle!important; font-size: 25px;color: #ec1212; padding: 5px;\">\r\n                  <ion-icon name=\"alert-outline\"></ion-icon>\r\n\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </td>\r\n        </tr>\r\n\r\n\r\n\r\n      </table>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div style=\" margin-top: 5px;font-weight: bold;\">\r\n    <table\r\n      style=\"width: 100%;height: 20px; font-size: 15px;padding-top: 20px!important; padding: 10px;background-color: #F1EFF3;color: #052761;\">\r\n      <tr>\r\n        <td style=\"text-align: center;padding-top: 5px;\">\r\n          <div class=\"export-content-left export-content-title\">\r\n            Thông tin chưa đồng bộ thành công\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n\r\n    <table style=\"width: 100%;color: #3880ff;border: solid 1px #F1EFF3;padding-top: 20px!important;\">\r\n      <tr>\r\n        <td style=\"width: 505;padding-left: 5px;\">\r\n          <div class=\"export-content-left export-content-title\">\r\n            XBL123456789\r\n            <ion-icon name=\"unlink-outline\" style=\"color: #000000;font-size: 22px;vertical-align:middle;\">\r\n            </ion-icon>\r\n          </div>\r\n          <div style=\"color: #0764ae;font-size: 12px;\">\r\n            <ion-icon name=\"time-outline\" style=\"color: #A364BF;vertical-align:middle;font-size: 13px;\"></ion-icon>\r\n            14:27 20/04/2024\r\n          </div>\r\n          <div style=\"color: #0764ae;font-size:13px\">\r\n            <ion-icon name=\"person-circle-outline\" style=\"vertical-align:middle;font-size:13px\"></ion-icon>\r\n            Nguyễn Văn Khoa\r\n          </div>\r\n        </td>\r\n        <td style=\"width: 505;text-align: right;padding-right: 10px;vertical-align: top;\">\r\n          <div class=\"export-content-left export-content-title\">\r\n            8,500\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n\r\n    <table style=\"width: 100%;color: #3880ff;border: solid 1px #F1EFF3;padding-top: 20px!important;\">\r\n      <tr>\r\n        <td style=\"width: 505;padding-left: 5px;\">\r\n          <div class=\"export-content-left export-content-title\">\r\n            XBL123456789\r\n            <ion-icon name=\"unlink-outline\" style=\"color: #000000;font-size: 22px;vertical-align:middle;\">\r\n            </ion-icon>\r\n          </div>\r\n          <div style=\"color: #0764ae;font-size: 12px;\">\r\n            <ion-icon name=\"time-outline\" style=\"color: #A364BF;vertical-align:middle;font-size: 13px;\"></ion-icon>\r\n            14:27 20/04/2024\r\n          </div>\r\n          <div style=\"color: #0764ae;font-size:13px\">\r\n            <ion-icon name=\"person-circle-outline\" style=\"vertical-align:middle;font-size:13px\"></ion-icon>\r\n            Nguyễn Văn Khoa\r\n          </div>\r\n        </td>\r\n        <td style=\"width: 505;text-align: right;padding-right: 10px;vertical-align: top;\">\r\n          <div class=\"export-content-left export-content-title\">\r\n            8,500\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n\r\n    <table style=\"width: 100%;color: #3880ff;border: solid 1px #F1EFF3;padding-top: 20px!important;\">\r\n      <tr>\r\n        <td style=\"width: 505;padding-left: 5px;\">\r\n          <div class=\"export-content-left export-content-title\">\r\n            XBL123456789\r\n            <ion-icon name=\"unlink-outline\" style=\"color: #000000;font-size: 22px;vertical-align:middle;\">\r\n            </ion-icon>\r\n          </div>\r\n          <div style=\"color: #0764ae;font-size: 12px;\">\r\n            <ion-icon name=\"time-outline\" style=\"color: #A364BF;vertical-align:middle;font-size: 13px;\"></ion-icon>\r\n            14:27 20/04/2024\r\n          </div>\r\n          <div style=\"color: #0764ae;font-size:13px\">\r\n            <ion-icon name=\"person-circle-outline\" style=\"vertical-align:middle;font-size:13px\"></ion-icon>\r\n            Nguyễn Văn Khoa\r\n          </div>\r\n        </td>\r\n        <td style=\"width: 505;text-align: right;padding-right: 10px;vertical-align: top;\">\r\n          <div class=\"export-content-left export-content-title\">\r\n            8,500\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n\r\n\r\n\r\n  </div>\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/lienthong/lienthong-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/lienthong/lienthong-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: LienthongPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LienthongPageRoutingModule", function() { return LienthongPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _lienthong_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lienthong.page */ "./src/app/lienthong/lienthong.page.ts");




const routes = [
    {
        path: '',
        component: _lienthong_page__WEBPACK_IMPORTED_MODULE_3__["LienthongPage"]
    }
];
let LienthongPageRoutingModule = class LienthongPageRoutingModule {
};
LienthongPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LienthongPageRoutingModule);



/***/ }),

/***/ "./src/app/lienthong/lienthong.module.ts":
/*!***********************************************!*\
  !*** ./src/app/lienthong/lienthong.module.ts ***!
  \***********************************************/
/*! exports provided: LienthongPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LienthongPageModule", function() { return LienthongPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _lienthong_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lienthong-routing.module */ "./src/app/lienthong/lienthong-routing.module.ts");
/* harmony import */ var _lienthong_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lienthong.page */ "./src/app/lienthong/lienthong.page.ts");







let LienthongPageModule = class LienthongPageModule {
};
LienthongPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _lienthong_routing_module__WEBPACK_IMPORTED_MODULE_5__["LienthongPageRoutingModule"]
        ],
        declarations: [_lienthong_page__WEBPACK_IMPORTED_MODULE_6__["LienthongPage"]]
    })
], LienthongPageModule);



/***/ }),

/***/ "./src/app/lienthong/lienthong.page.scss":
/*!***********************************************!*\
  !*** ./src/app/lienthong/lienthong.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".export {\n  background: white;\n  margin-top: 15px;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n}\n.export-title {\n  padding: 14px 10px 0;\n  font-weight: 600;\n  font-size: 20px;\n  color: var(--gray-dark);\n}\n.export-item {\n  display: flex;\n  padding: 18px 15px 10px 15px;\n}\n.export-icon {\n  font-size: 20px;\n  padding-right: 15px;\n}\n.export-content {\n  width: 100%;\n}\n.export-content-item {\n  display: flex;\n  margin-bottom: 10px;\n}\n.export-content-left span {\n  color: gray;\n}\n.export-content-title {\n  font-weight: 600;\n  font-size: 16px;\n  color: var(--background-color);\n}\n.export-content-sm {\n  font-size: 14px;\n  color: gray;\n}\n.export-content-right {\n  margin-left: auto;\n  font-weight: 600;\n}\n.export-content-right span {\n  color: var(--background-color);\n}\n.btn-db {\n  color: white;\n  padding: 8px 10px;\n  border-radius: 5px;\n}\n.bg-blue1 {\n  background: #3880ff;\n}\n.bg-gray1 {\n  background: #939393;\n}\nion-content {\n  --background: #f9f9f9 ;\n}\nion-datetime {\n  border: 1px solid;\n  --padding-start: 10px;\n  border-radius: 5px;\n  text-align: center;\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n}\ntd {\n  padding: 0px 10px 10px 0px;\n}\n.border-b {\n  border-bottom: 1px solid #bfbfbf;\n}\n.s-border {\n  width: 100% !important;\n  max-width: 100% !important;\n  padding-top: 10px !important;\n  border-color: #9999ff;\n  border: 0.5px solid #dedeff !important;\n  border-radius: 0 25px 0 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGllbnRob25nL2xpZW50aG9uZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7QUFBSjtBQUVJO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQUFSO0FBR0k7RUFDSSxhQUFBO0VBQ0EsNEJBQUE7QUFEUjtBQUlJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FBRlI7QUFLSTtFQUNJLFdBQUE7QUFIUjtBQUtRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBSFo7QUFPWTtFQUVJLFdBQUE7QUFOaEI7QUFZUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FBVlo7QUFhUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBWFo7QUFjUTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFaWjtBQWNZO0VBQ0ksOEJBQUE7QUFaaEI7QUFtQkE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQWhCSjtBQW1CQTtFQUNJLG1CQUFBO0FBaEJKO0FBbUJBO0VBQ0ksbUJBQUE7QUFoQko7QUFtQkE7RUFDSSxzQkFBQTtBQWhCSjtBQW1CQTtFQUVJLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQWpCSjtBQW9CQTtFQUNJLDBCQUFBO0FBakJKO0FBcUJBO0VBQ0ksZ0NBQUE7QUFsQko7QUFxQkE7RUFDSSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLHNDQUFBO0VBQ0Esb0NBQUE7QUFsQkoiLCJmaWxlIjoic3JjL2FwcC9saWVudGhvbmcvbGllbnRob25nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHBvcnQge1xyXG4gICAgLy8gcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweDtcclxuXHJcbiAgICAmLXRpdGxlIHtcclxuICAgICAgICBwYWRkaW5nOiAxNHB4IDEwcHggMDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tZ3JheS1kYXJrKTtcclxuICAgIH1cclxuXHJcbiAgICAmLWl0ZW0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcGFkZGluZzogMThweCAxNXB4IDEwcHggMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAmLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICYtY29udGVudCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICYtaXRlbSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLWxlZnQge1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYtc20ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi1yaWdodCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4uYnRuLWRiIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uYmctYmx1ZTEge1xyXG4gICAgYmFja2dyb3VuZDogIzM4ODBmZjtcclxufVxyXG5cclxuLmJnLWdyYXkxIHtcclxuICAgIGJhY2tncm91bmQ6ICM5MzkzOTM7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y5ZjlmOVxyXG59XHJcblxyXG5pb24tZGF0ZXRpbWUge1xyXG4gICAgLy8gLS1wYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtLXBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbnRkIHtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4IDEwcHggMHB4O1xyXG5cclxufVxyXG5cclxuLmJvcmRlci1iIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmZiZmJmO1xyXG59XHJcblxyXG4ucy1ib3JkZXIge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogIzk5OTlmZjtcclxuICAgIGJvcmRlcjogMC41cHggc29saWQgI2RlZGVmZiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAyNXB4IDAgMCAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/lienthong/lienthong.page.ts":
/*!*********************************************!*\
  !*** ./src/app/lienthong/lienthong.page.ts ***!
  \*********************************************/
/*! exports provided: LienthongPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LienthongPage", function() { return LienthongPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _function_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../function.service */ "./src/app/function.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/dist/esm/index.js");









let LienthongPage = class LienthongPage {
    constructor(navCtrl, router, alertController, toastController, Function, storage, datePipe) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.alertController = alertController;
        this.toastController = toastController;
        this.Function = Function;
        this.storage = storage;
        this.datePipe = datePipe;
        this.UserName = "";
        this.Keyword = "";
        this.currentPage = 0;
        this.pageSize = 20;
        this.totalRecord = 0;
        this.totalPage = 0;
        this.checkSearch = false;
        this.slideOpts = {
            initialSlide: 1,
            speed: 500,
            loop: true
        };
        this.searchData = {
            keyword: '',
            fromDay: '2024-01-01',
            toDay: '2024-12-31'
        };
        this.sendChungtu = {
            "nam_du_lieu": "2023",
            "loaictid": 2
        };
        storage.create();
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.thoiGian = new Date().toISOString();
        this.getDoiSoatLienThongGPP();
    }
    toggleInfiniteScroll() {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }
    getDoiSoatLienThongGPP() {
        let officeId = localStorage.getItem("officeId");
        let data = this.Function.getDoiSoatLienThongGPP(officeId);
        data.subscribe(rsLT => {
            this.LienthongData = rsLT.root;
            console.log(this.LienthongData);
        });
    }
    changeDay(time, type) {
        this.searchData[type] = this.sendChungtu.nam_du_lieu.slice(0, 4) + time.slice(4, 10);
        sessionStorage.setItem('searchBill', JSON.stringify(this.searchData));
        this.search();
    }
    changeYear(year) {
        this.sendChungtu.nam_du_lieu = year.slice(0, 4);
        this.getDoiSoatLienThongGPP();
        this.searchData.fromDay = this.sendChungtu.nam_du_lieu.slice(0, 4) + this.searchData.fromDay.slice(4, 10);
        this.searchData.toDay = this.sendChungtu.nam_du_lieu.slice(0, 4) + this.searchData.toDay.slice(4, 10);
        this.search();
    }
    search() {
    }
    onSearch(e) {
        this.searchData.keyword = e.target.value;
        sessionStorage.setItem('searchBill', JSON.stringify(this.searchData));
        this.search();
    }
    deleteSearch() {
        this.searchData.keyword = '';
        this.search();
    }
    openBack() {
        this.router.navigateByUrl("tabs/tab3");
    }
};
LienthongPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _function_service__WEBPACK_IMPORTED_MODULE_4__["FunctionService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] }
];
LienthongPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"],] }]
};
LienthongPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lienthong',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./lienthong.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lienthong/lienthong.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./lienthong.page.scss */ "./src/app/lienthong/lienthong.page.scss")).default]
    })
], LienthongPage);



/***/ })

}]);
//# sourceMappingURL=lienthong-lienthong-module-es2015.js.map