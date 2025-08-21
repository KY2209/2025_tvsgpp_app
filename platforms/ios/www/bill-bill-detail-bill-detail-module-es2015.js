(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bill-bill-detail-bill-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bill/bill-detail/bill-detail.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bill/bill-detail/bill-detail.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons (click)=\"openBack()\" slot=\"start\">\r\n      <ion-item lines=\"none\"\r\n        style=\"--padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"font-size: 25px;\"></ion-icon>\r\n      </ion-item>\r\n    </ion-buttons>\r\n\r\n    <ion-title style=\"font-weight: 600; text-align: center;\">\r\n      {{title}} hóa đơn\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-item *ngIf=\"typePage == 'create'\" lines=\"none\"\r\n        style=\" --padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon name=\"duplicate-outline\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item *ngIf=\"typePage == 'detail'\" lines=\"none\"\r\n        style=\" --padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon name=\"print-outline\"></ion-icon>\r\n      </ion-item>\r\n\r\n      <ion-item (click)=\"handleEdit()\" *ngIf=\"typePage == 'detail'\" lines=\"none\"\r\n        style=\" --padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon name=\"create-outline\"></ion-icon>\r\n      </ion-item>\r\n\r\n      <ion-item (click)=\"handleDetail()\" *ngIf=\"typePage == 'edit'\" lines=\"none\"\r\n        style=\" --padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon name=\"close-outline\"></ion-icon>\r\n      </ion-item>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"bill\">\r\n    <div class=\"bill-product\">\r\n      <div class=\"bill-header bill-header-p13\">\r\n        <div class=\"bill-header-left\">\r\n          THÔNG TIN HÓA ĐƠN -- {{typePage}}\r\n          <ion-icon name=\"alert-circle-outline\"></ion-icon>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"bill-table\">\r\n        <table>\r\n          <tr>\r\n            <td class=\"bill-table-left\">Loại phiếu</td>\r\n            <td class=\"text-right\">\r\n              <div [class.pr-44]=\"typePage == 'edit' || typePage == 'create'\">\r\n                {{DienGiai}}\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\">Số chứng từ</td>\r\n            <td class=\"text-right\">\r\n              <div [class.pr-44]=\"typePage == 'edit' || typePage == 'create'\">\r\n                {{itemDetail.SoCT}}\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\">Đơn vị</td>\r\n            <td class=\"text-right\">\r\n              <div style=\"display: flex; float: right;\">\r\n                <div [class.pr-15]=\"typePage == 'edit' || typePage == 'create'\">\r\n                  {{donvi}}\r\n                </div>\r\n                <span (click)=\"openUnit()\" *ngIf=\"typePage == 'edit' || typePage == 'create'\"><ion-icon\r\n                    name=\"pencil-outline\"></ion-icon></span>\r\n\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\">Kho hàng</td>\r\n            <td class=\"text-right\">\r\n              <div style=\"display: flex; float: right;\">\r\n                <div [class.pr-15]=\"typePage == 'edit' || typePage == 'create'\">\r\n                  {{kho}}\r\n\r\n                </div>\r\n                <span (click)=\"openKho()\" *ngIf=\"typePage == 'edit' || typePage == 'create'\"><ion-icon\r\n                    name=\"pencil-outline\"></ion-icon></span>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\">Thời gian</td>\r\n            <td class=\"text-right\">\r\n              <div [class.pr-44]=\"typePage == 'edit' || typePage == 'create'\">\r\n                {{itemDetail.ThoiDiem | date:'dd/MM/yyyy HH:mm'}}\r\n              </div>\r\n              <!-- <ion-input ></ion-input> -->\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n\r\n      <div class=\"bill-header bill-header-p13\">\r\n        <div class=\"bill-header-left\">\r\n          THÔNG TIN THANH TOÁN\r\n          <ion-icon name=\"alert-circle-outline\"></ion-icon>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"bill-table\">\r\n        <table>\r\n          <tr>\r\n            <td class=\"bill-table-left\">T.Thành tiền</td>\r\n            <td class=\"text-right\">\r\n              <div [class.pr-44]=\"typePage == 'edit' || typePage == 'create'\">\r\n                {{sumThanhTien | number}}\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\">T.VAT</td>\r\n            <td class=\"text-right\">\r\n              <div [class.pr-44]=\"typePage == 'edit' || typePage == 'create'\">\r\n                {{sumVAT | number}}\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\">T.Chiết khấu</td>\r\n            <td class=\"text-right\">\r\n              <div [class.pr-44]=\"typePage == 'edit' || typePage == 'create'\">\r\n                {{sumChietKhau | number}}\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\">Đã thanh toán</td>\r\n            <td class=\"text-right\">\r\n              <div [class.pr-44]=\"typePage == 'edit' || typePage == 'create'\">\r\n                {{sumThanhToan | number}}\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\">T.Tiền</td>\r\n            <td class=\"text-right\">\r\n              <div [class.pr-44]=\"typePage == 'edit' || typePage == 'create'\">\r\n                {{sumTongTien | number}}\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\">HTTT</td>\r\n            <td class=\"text-right\">\r\n              <div style=\"display: flex; float: right;\">\r\n                <div [class.pr-15]=\"typePage == 'edit' || typePage == 'create'\">\r\n                  Tiền mặt\r\n                </div>\r\n                <span *ngIf=\"typePage == 'edit' || typePage == 'create'\"><ion-icon\r\n                    name=\"pencil-outline\"></ion-icon></span>\r\n\r\n              </div>\r\n\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n\r\n      <div class=\"bill-header\" style=\"display: flex; align-items: center;\">\r\n        <div>\r\n          CHI TIẾT HÓA ĐƠN ({{countProduct}})\r\n        </div>\r\n        <ion-icon (click)=\"openVattu()\" *ngIf=\"typePage == 'edit' || typePage == 'create'\" name=\"add-outline\"\r\n          style=\"margin-left: auto; font-size: 24px;  color: #2990f7;\"></ion-icon>\r\n\r\n      </div>\r\n      <div *ngIf=\"typePage == 'detail'\">\r\n\r\n        <div *ngFor=\"let item of itemDetail.ChiTietHang; index as i\" class=\"bill-item\">\r\n\r\n          <div class=\"bill-item-title\">\r\n            <p>{{i+1}}. {{item._TenVT}} - {{item.MaVT}}</p>\r\n          </div>\r\n          <table class=\"bill-table-content\">\r\n            <tr>\r\n              <td class=\"pr-20\">\r\n                <div>\r\n                  <span>ĐVT: </span> {{item.DVT}}\r\n                </div>\r\n\r\n              </td>\r\n              <td>\r\n                <span>Giá: </span>\r\n                {{item.DonGia | number}}\r\n              </td>\r\n              <td class=\"text-right\">\r\n                <span>SL: </span>\r\n                {{item.SoLuong | number}}\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td class=\" pr-20\">\r\n                <span>C.K: </span>\r\n                {{item.ChietKhau_Percent}}\r\n              </td>\r\n              <td>\r\n                <span>VAT(%): </span>\r\n                {{item.VAT_Percent}}\r\n              </td>\r\n              <td class=\"text-right\">\r\n                <span>T.Tiền: </span>\r\n                {{item.TongTien | number}}\r\n              </td>\r\n\r\n            </tr>\r\n\r\n          </table>\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"typePage != 'detail'\">\r\n\r\n        <div *ngFor=\"let item of displayChiTietHang; index as i\" class=\"bill-item\">\r\n\r\n          <div class=\"bill-item-title\">\r\n            <p>{{i+1}}. {{item._TenVT}} - {{item.MaVT}}</p>\r\n            <ion-icon (click)=\"handleRemove(item, i)\" name=\"trash-outline\"></ion-icon>\r\n\r\n          </div>\r\n          <table class=\"bill-table-content\">\r\n            <tr>\r\n              <td class=\"pr-20\">\r\n                <div>\r\n                  <span><i class=\"bi bi-capsule\"></i> </span> &nbsp;\r\n                  <input type=\"text\" [(ngModel)]=\"sendItem.ChiTietHang[i].DVT\">\r\n                </div>\r\n\r\n              </td>\r\n              <td>\r\n                <span><i class=\"bi bi-currency-dollar\"></i> </span> &nbsp;\r\n                <input type=\"text\" [(ngModel)]=\"item.DonGia\" (ngModelChange)=\"formatInput('DonGia', i)\">\r\n              </td>\r\n              <td class=\"text-right\" style=\"display: flex; float: right;\">\r\n                <ion-icon (click)=\"formatInput('SoLuong', i, 'plus')\" name=\"add-circle-outline\"></ion-icon>\r\n                <div style=\"margin-top: 4px;\">\r\n                  <input type=\"text\" [(ngModel)]=\"item.SoLuong\" (ngModelChange)=\"formatInput('SoLuong', i)\">\r\n                </div>\r\n                <ion-icon (click)=\"formatInput('SoLuong', i, 'subtraction')\" name=\"remove-circle-outline\"></ion-icon>\r\n\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td class=\" pr-20\">\r\n                <span><i class=\"bi bi-percent\"></i> </span> &nbsp;\r\n                <input type=\"number\" [(ngModel)]=\"item.ChietKhau_Percent\"\r\n                  (ngModelChange)=\"setInput($event,'ChietKhau_Percent', i)\">\r\n              </td>\r\n              <td>\r\n                <span><i class=\"bi bi-credit-card\"></i> </span> &nbsp;\r\n                <input type=\"number\" [(ngModel)]=\"item.VAT_Percent\" (ngModelChange)=\"setInput($event,'VAT_Percent', i)\">\r\n\r\n              </td>\r\n              <td class=\"text-right\">\r\n                <span><i class=\"bi bi-cash-coin\"></i> </span> &nbsp;\r\n                {{item.TongTien | number}}\r\n              </td>\r\n\r\n            </tr>\r\n\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</ion-content>\r\n<ion-footer *ngIf=\"typePage != 'detail'\">\r\n  <ion-toolbar>\r\n  <div class=\"bill-footer\">\r\n    <table>\r\n      <!-- <tr>\r\n        <td class=\"bill-bold\">HTTT</td>\r\n        <td>Tiền mặt</td>\r\n      </tr> -->\r\n      <tr>\r\n        <td class=\"bill-bold\">In hóa đơn</td>\r\n        <td class=\"text-right\">\r\n          <ion-toggle color=\"primary\"></ion-toggle>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"bill-bold\">T.Tiền cần trả</td>\r\n        <td class=\"text-right\">{{sumTongTien | number}}</td>\r\n      </tr>\r\n    </table>\r\n\r\n\r\n\r\n    <div class=\"bill-btn\">\r\n\r\n      <div class=\"bill-btn-left\">\r\n        <div class=\"bill-btn-relative\">\r\n          <ion-icon name=\"receipt-outline\"></ion-icon>\r\n          <div>2</div>\r\n        </div>\r\n        <button (click)=\"confirmSubmit()\">LƯU HÓA ĐƠN</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-toolbar>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/bill/bill-detail/bill-detail-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/bill/bill-detail/bill-detail-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: BillDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillDetailPageRoutingModule", function() { return BillDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _bill_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bill-detail.page */ "./src/app/bill/bill-detail/bill-detail.page.ts");




const routes = [
    {
        path: '',
        component: _bill_detail_page__WEBPACK_IMPORTED_MODULE_3__["BillDetailPage"]
    }
];
let BillDetailPageRoutingModule = class BillDetailPageRoutingModule {
};
BillDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BillDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/bill/bill-detail/bill-detail.module.ts":
/*!********************************************************!*\
  !*** ./src/app/bill/bill-detail/bill-detail.module.ts ***!
  \********************************************************/
/*! exports provided: BillDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillDetailPageModule", function() { return BillDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _bill_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bill-detail-routing.module */ "./src/app/bill/bill-detail/bill-detail-routing.module.ts");
/* harmony import */ var _bill_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bill-detail.page */ "./src/app/bill/bill-detail/bill-detail.page.ts");







let BillDetailPageModule = class BillDetailPageModule {
};
BillDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bill_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["BillDetailPageRoutingModule"]
        ],
        declarations: [_bill_detail_page__WEBPACK_IMPORTED_MODULE_6__["BillDetailPage"]]
    })
], BillDetailPageModule);



/***/ }),

/***/ "./src/app/bill/bill-detail/bill-detail.page.scss":
/*!********************************************************!*\
  !*** ./src/app/bill/bill-detail/bill-detail.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bill-header {\n  background: #e9e9e9;\n  padding: 10px;\n  display: flex;\n  gap: 8px;\n  font-weight: 600;\n  border-bottom: 1px solid var(--background-color);\n  color: var(--background-color);\n}\n.bill-header-p13 {\n  padding: 13px 10px;\n}\n.bill-header-left {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.bill-header-left ion-icon {\n  font-size: 16px;\n}\n.bill-item {\n  padding: 0 10px 15px;\n  border-bottom: 1px solid #d7d7d7;\n}\n.bill-item-title {\n  display: flex;\n  align-items: center;\n}\n.bill-item-title p {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--primary-color);\n}\n.bill-item-title ion-icon {\n  margin-left: auto;\n  font-size: 20px;\n  color: #dd0000;\n}\n.bill-table {\n  padding: 10px;\n}\n.bill-table tr {\n  border-bottom: 1px solid #d7d7d7;\n}\n.bill-table td {\n  padding: 10px 0;\n}\n.bill-table ion-icon {\n  float: right;\n  color: var(--primary-color);\n  font-size: 18px;\n  width: 30px;\n}\n.bill-table-content ion-icon {\n  font-size: 24px;\n  color: var(--primary-color);\n}\n.bill-table-left {\n  font-weight: 500;\n  width: 150px;\n}\n.bill-footer {\n  padding: 10px;\n}\n.bill-footer button {\n  color: white;\n  background: var(--background-color);\n  width: calc(100% - 60px);\n  padding: 12px;\n  font-size: 16px;\n  font-weight: 600;\n  border-radius: 5px;\n  margin-left: auto;\n}\n.bill-btn-left {\n  display: flex;\n  align-items: center;\n}\n.bill-btn-relative {\n  position: absolute;\n  width: 50px;\n  height: 40px;\n  background: #616161;\n  /* height: 100%; */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n  color: white;\n}\n.bill-btn-relative ion-icon {\n  font-size: 18px;\n}\n.bill-btn-relative div {\n  border-radius: 100vw;\n  position: absolute;\n  top: -4px;\n  right: -7px;\n  width: 20px;\n  height: 20px;\n  background: var(--background-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid white;\n  font-size: 10px;\n}\n.bill-bold {\n  font-weight: 500;\n}\n.bill-right {\n  text-align: right;\n}\ntable {\n  width: 100%;\n}\ntd {\n  padding-bottom: 15px;\n}\ntd span {\n  color: gray;\n}\ntd i {\n  font-size: 18px;\n}\n.pr-20 {\n  padding-right: 20px;\n}\n.pr-44 {\n  padding-right: 44px !important;\n}\n.pr-15 {\n  padding-right: 15px !important;\n}\n.pb-0 {\n  padding-bottom: 0 !important;\n}\ninput[type=text], input[type=number] {\n  width: 65px;\n  border: 1px solid white;\n  border-bottom: 1px solid var(--primary-color);\n  text-align: center;\n}\nion-toggle {\n  height: 26px;\n  --handle-width: calc(28px - (2px * 2));\n  --ion-color-base: var(--primary-color) !important;\n}\nion-footer {\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlsbC9iaWxsLWRldGFpbC9iaWxsLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0RBQUE7RUFDQSw4QkFBQTtBQURSO0FBR1E7RUFDSSxrQkFBQTtBQURaO0FBSVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBRlo7QUFJWTtFQUNJLGVBQUE7QUFGaEI7QUFPSTtFQUNJLG9CQUFBO0VBQ0EsZ0NBQUE7QUFMUjtBQU9RO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBTFo7QUFPWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FBTGhCO0FBUVk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBTmhCO0FBV0k7RUFDSSxhQUFBO0FBVFI7QUFXUTtFQUNJLGdDQUFBO0FBVFo7QUFZUTtFQUNJLGVBQUE7QUFWWjtBQWNRO0VBQ0ksWUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFaWjtBQWdCWTtFQUNJLGVBQUE7RUFDQSwyQkFBQTtBQWRoQjtBQWtCUTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQWhCWjtBQW9CSTtFQUNJLGFBQUE7QUFsQlI7QUFvQlE7RUFDSSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBbEJaO0FBd0JRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBdEJaO0FBeUJRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQXZCWjtBQXlCWTtFQUNJLGVBQUE7QUF2QmhCO0FBMEJZO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBeEJoQjtBQThCSTtFQUNJLGdCQUFBO0FBNUJSO0FBK0JJO0VBQ0ksaUJBQUE7QUE3QlI7QUFtQ0E7RUFDSSxXQUFBO0FBaENKO0FBbUNBO0VBQ0ksb0JBQUE7QUFoQ0o7QUFrQ0k7RUFDSSxXQUFBO0FBaENSO0FBbUNJO0VBQ0ksZUFBQTtBQWpDUjtBQXFDQTtFQUNJLG1CQUFBO0FBbENKO0FBcUNBO0VBQ0ksOEJBQUE7QUFsQ0o7QUFxQ0E7RUFDSSw4QkFBQTtBQWxDSjtBQXFDQTtFQUNJLDRCQUFBO0FBbENKO0FBcUNBO0VBQ0ksV0FBQTtFQUNBLHVCQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQkFBQTtBQWxDSjtBQXFDQTtFQUNJLFlBQUE7RUFDQSxzQ0FBQTtFQUNBLGlEQUFBO0FBbENKO0FBcUNBO0VBQ0kscUZBQUE7QUFsQ0oiLCJmaWxlIjoic3JjL2FwcC9iaWxsL2JpbGwtZGV0YWlsL2JpbGwtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iaWxsIHtcclxuXHJcbiAgICAmLWhlYWRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2U5ZTllOTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZ2FwOiA4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xyXG5cclxuICAgICAgICAmLXAxMyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEzcHggMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYtbGVmdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGdhcDogNXB4O1xyXG5cclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtaXRlbSB7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkN2Q3ZDc7XHJcblxyXG4gICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZGQwMDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtdGFibGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgICAgIHRyIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkN2Q3ZDc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi1jb250ZW50IHtcclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLWxlZnR7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi1mb290ZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi1idG4ge1xyXG4gICAgICAgICYtbGVmdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLXJlbGF0aXZlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjE2MTYxO1xyXG4gICAgICAgICAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHZ3O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtNHB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC03cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAmLWJvbGQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcblxyXG4gICAgJi1yaWdodCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgIH1cclxuXHJcbiAgICBpe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxufVxyXG5cclxuLnByLTIwIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5wci00NCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wci0xNSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wYi0wIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwibnVtYmVyXCJdIHtcclxuICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi10b2dnbGUge1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgLS1oYW5kbGUtd2lkdGg6IGNhbGMoMjhweCAtICgycHggKiAyKSk7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tZm9vdGVyIHtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDZweCAyNHB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjA4KSAwcHggMHB4IDBweCAxcHg7XHJcbiAgICAvLyBib3JkZXItdG9wOiAxcHggc29saWQgI2Q5ZDVkNTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/bill/bill-detail/bill-detail.page.ts":
/*!******************************************************!*\
  !*** ./src/app/bill/bill-detail/bill-detail.page.ts ***!
  \******************************************************/
/*! exports provided: BillDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillDetailPage", function() { return BillDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/printer/ngx */ "./node_modules/@ionic-native/printer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_donvi_donvi_index_donvi_index_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/donvi/donvi-index/donvi-index.page */ "./src/app/donvi/donvi-index/donvi-index.page.ts");
/* harmony import */ var src_app_function_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/function.service */ "./src/app/function.service.ts");
/* harmony import */ var src_app_kho_kho_index_kho_index_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/kho/kho-index/kho-index.page */ "./src/app/kho/kho-index/kho-index.page.ts");
/* harmony import */ var src_app_service_AlertService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/service/AlertService */ "./src/app/service/AlertService.ts");
/* harmony import */ var src_app_service_kho_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/service/kho.service */ "./src/app/service/kho.service.ts");
/* harmony import */ var src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/service/loading.service */ "./src/app/service/loading.service.ts");
/* harmony import */ var src_app_service_toastService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/service/toastService */ "./src/app/service/toastService.ts");
/* harmony import */ var src_app_service_unit_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/service/unit.service */ "./src/app/service/unit.service.ts");
/* harmony import */ var src_app_service_vattu_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/service/vattu.service */ "./src/app/service/vattu.service.ts");
/* harmony import */ var src_app_service_xuatkho_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/service/xuatkho.service */ "./src/app/service/xuatkho.service.ts");
/* harmony import */ var src_app_vattu_vattu_index_vattu_index_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/vattu/vattu-index/vattu-index.page */ "./src/app/vattu/vattu-index/vattu-index.page.ts");

















let BillDetailPage = class BillDetailPage {
    constructor(ToastService, FunctionService, router, toastController, modalController, XuatkhoService, AlertService, navController, LoadingService, route, printer, currencyPipe, KhoService, cdr, UnitService, VattuService) {
        this.ToastService = ToastService;
        this.FunctionService = FunctionService;
        this.router = router;
        this.toastController = toastController;
        this.modalController = modalController;
        this.XuatkhoService = XuatkhoService;
        this.AlertService = AlertService;
        this.navController = navController;
        this.LoadingService = LoadingService;
        this.route = route;
        this.printer = printer;
        this.currencyPipe = currencyPipe;
        this.KhoService = KhoService;
        this.cdr = cdr;
        this.UnitService = UnitService;
        this.VattuService = VattuService;
        this.chungchi = {
            ChungTuID: '',
            nam_du_lieu: ''
        };
        this.donvi = '';
        this.kho = '';
        this.sendItem = {
            "nam_du_lieu": "",
            "LoaiCTID": 2,
            "ChungTuID": 0,
            // "BanTheoDon": false,
            "SoCT": "",
            "ThoiDiem": "",
            "DienGiai": "",
            "ChiTietHang": []
        };
        this.ChiTietHang = {
            "NhapXuatID": 0,
            "MaVT": "",
            "DVT": "",
            "SoLuong": 0,
            "DonGia": 0,
            "GiaBanLe": 0,
            "GiaBanSy": 0,
            "ThanhTien": 0,
            "VAT_Percent": 0,
            "VAT": 0,
            "ChietKhau_Percent": 0,
            "ChietKhau": 0,
            "TongTien": 0,
            "HTTT": "TM",
            "LoHang": "",
            "HanDung": ""
        };
        this.sendVattu = {
            "loainx": "''",
            "khohang": "",
            "banggia": ""
        };
        this.displayChiTietHang = [];
        this.listKho = [];
        this.listUnit = [];
        this.listVattu = [];
        this.banggia = [];
        this.sendChungChi = {
            isCreate: false,
            ChungTuID: '',
            nam_du_lieu: ''
        };
        this.title = '';
        this.typePage = '';
        this.itemDetail = [];
        this.check = false;
        this.indexItem = [];
        this.countProduct = 0;
        this.sumThanhTien = 0;
        this.sumTongTien = 0;
        this.sumVAT = 0;
        this.sumChietKhau = 0;
        this.sumThanhToan = 0;
        this.LoaiCTID = 0;
        this.DienGiai = '';
        this.loainx = '';
        this.route.queryParams.subscribe(params => {
            this.chungchi.ChungTuID = params.ChungTuID;
            this.chungchi.nam_du_lieu = params.nam_du_lieu;
            this.sendChungChi.ChungTuID = params.ChungTuID;
            this.sendChungChi.nam_du_lieu = params.nam_du_lieu;
            this.LoaiCTID = params.LoaiCTID;
            this.DienGiai = params.DienGiai;
            this.typePage = params.Type;
            this.title = params.Type == 'detail' ? 'Chi tiết' : params.Type == 'create' ? 'Thêm' : 'Sửa';
            if (this.typePage == 'detail' || this.typePage == 'edit') {
                this.getChungTuDetail();
            }
            this.getLoaiCT();
            this.getUnit();
        });
    }
    ngOnInit() {
        console.log('this.chungchi', this.chungchi);
    }
    getLoaiCT() {
        this.FunctionService.getLoaiCT().subscribe((response) => {
            for (let i = 0; i < response.length; i++) {
                if (response[i].LoaiCTID == this.sendItem.LoaiCTID) {
                    this.banggia = response[i].BangGia;
                    this.loainx = response[i].LoaiNX;
                    break;
                }
            }
            this.getKho();
        }, (error) => {
            console.log('error', error);
        });
    }
    getKho() {
        this.KhoService.getKho().subscribe((response) => {
            this.listKho = response;
            if (this.typePage == 'create') {
                // this.makho = response[0].MaKho;
                this.kho = response[0].TenKho;
                // this.sendItem.KhoXuat = response[0].MaKho;
                this.sendItem.KhoNhap = response[0].MaKho;
            }
            this.getVattu();
        }, (error) => {
            setTimeout(() => {
                console.log('error', error);
            }, 1000);
        });
    }
    getUnit() {
        this.UnitService.getUnit().subscribe((response) => {
            this.listUnit = response;
        }, (error) => {
            setTimeout(() => {
                console.log('error', error);
            }, 1000);
        });
    }
    getVattu() {
        this.sendVattu.loainx = this.loainx;
        this.sendVattu.banggia = this.banggia;
        this.sendVattu.khohang = this.sendItem.KhoNhap;
        this.VattuService.GetListVT(this.sendVattu).subscribe((response) => {
            this.listVattu = response;
        }, (error) => {
            console.log('error', error);
        });
    }
    handleEdit() {
        this.typePage = 'edit';
    }
    handleDetail() {
        this.typePage = 'detail';
    }
    getChungTuDetail() {
        this.LoadingService.setValue(true);
        this.XuatkhoService.xuatHangDetail(this.chungchi).subscribe((response) => {
            this.itemDetail = response[0];
            this.countProduct = response[0].ChiTietHang.length;
            // this.sendItem.BanTheoDon = response[0].BanTheoDon;
            this.sendItem.ChungTuID = response[0].ChungTuID;
            this.sendItem.LoaiCTID = response[0].LoaiCTID;
            this.sendItem.SoCT = response[0].SoCT;
            this.sendItem.ThoiDiem = response[0].ThoiDiem;
            this.sendItem.nam_du_lieu = this.chungchi.nam_du_lieu;
            this.sendItem.DVNhap = response[0].DVNhap;
            this.sendItem.KhoNhap = response[0].KhoNhap;
            this.donvi = response[0]._TenDVNhap;
            this.kho = response[0]._TenKhoNhap;
            this.setChietHang();
            this.LoadingService.setValue(false);
            this.countMoney(response[0]);
        }, (error) => {
            console.log('error', error);
            this.LoadingService.setValue(false);
        });
    }
    setChietHang() {
        this.sendItem.ChiTietHang = [];
        this.displayChiTietHang = [];
        for (let i = 0; i < this.itemDetail.ChiTietHang.length; i++) {
            this.sendItem.ChiTietHang.push({
                "NhapXuatID": this.itemDetail.ChiTietHang[i].NhapXuatID,
                "MaVT": this.itemDetail.ChiTietHang[i].MaVT,
                "DVT": this.itemDetail.ChiTietHang[i].DVT,
                "SoLuong": this.itemDetail.ChiTietHang[i].SoLuong,
                "DonGia": this.itemDetail.ChiTietHang[i].DonGia,
                "GiaBanLe": this.itemDetail.ChiTietHang[i].GiaBanLe ? this.itemDetail.ChiTietHang[i].GiaBanLe : 0,
                "GiaBanSy": this.itemDetail.ChiTietHang[i].GiaBanSy ? this.itemDetail.ChiTietHang[i].GiaBanSy : 0,
                "ThanhTien": this.itemDetail.ChiTietHang[i].ThanhTien,
                "VAT_Percent": this.itemDetail.ChiTietHang[i].VAT_Percent,
                "VAT": this.itemDetail.ChiTietHang[i].VAT,
                "ChietKhau_Percent": this.itemDetail.ChiTietHang[i].ChietKhau_Percent,
                "ChietKhau": this.itemDetail.ChiTietHang[i].ChietKhau,
                "TongTien": this.itemDetail.ChiTietHang[i].TongTien,
                "HTTT": this.itemDetail.ChiTietHang[i].HTTT ? this.itemDetail.ChiTietHang[i].HTTT : '',
                "LoHang": this.itemDetail.ChiTietHang[i].LoHang ? this.itemDetail.ChiTietHang[i].LoHang : '',
                "HanDung": this.itemDetail.ChiTietHang[i].HanDung ? this.itemDetail.ChiTietHang[i].HanDung : ''
            });
            this.displayChiTietHang.push({
                "_TenVT": this.itemDetail.ChiTietHang[i]._TenVT,
                "MaVT": this.itemDetail.ChiTietHang[i].MaVT,
                "DVT": this.itemDetail.ChiTietHang[i].DVT,
                'DonGia': this.itemDetail.ChiTietHang[i].DonGia ? new Intl.NumberFormat().format(this.itemDetail.ChiTietHang[i].DonGia).replace(/\./g, ',') : '0',
                'SoLuong': new Intl.NumberFormat().format(this.itemDetail.ChiTietHang[i].SoLuong).replace(/\./g, ','),
                "ChietKhau_Percent": this.itemDetail.ChiTietHang[i].ChietKhau_Percent,
                "VAT_Percent": this.itemDetail.ChiTietHang[i].VAT_Percent,
                "TongTien": this.itemDetail.ChiTietHang[i].TongTien,
            });
            console.log('displayChiTietHang', this.displayChiTietHang);
        }
    }
    countMoney(billDetail) {
        this.sumThanhTien = 0;
        this.sumTongTien = 0;
        this.sumVAT = 0;
        this.sumChietKhau = 0;
        this.sumThanhToan = 0;
        for (let i = 0; i < billDetail.ChiTietHang.length; i++) {
            this.sumThanhTien = this.sumThanhTien + billDetail.ChiTietHang[i].ThanhTien;
            console.log('this.sumThanhTien', this.sumThanhTien);
            console.log('this.billDetail.ChiTietHang[i].ThanhTien', billDetail.ChiTietHang[i].ThanhTien);
            this.sumTongTien = this.sumTongTien + billDetail.ChiTietHang[i].TongTien;
            this.sumVAT = this.sumVAT + billDetail.ChiTietHang[i].VAT;
            this.sumChietKhau = this.sumChietKhau + billDetail.ChiTietHang[i].ChietKhau;
            this.sumThanhToan = this.sumThanhToan + billDetail.ChiTietHang[i].ThanhToan;
        }
    }
    formatInput(item, index, type) {
        if (type && type == 'plus') {
            this.displayChiTietHang[index][item] = String(Number(this.displayChiTietHang[index][item].replace(/,/g, '')) + 1);
        }
        if (type && type == 'subtraction') {
            this.displayChiTietHang[index][item] = String(Number(this.displayChiTietHang[index][item].replace(/,/g, '')) - 1);
        }
        console.log('this.displayChiTietHang[index][item]', this.displayChiTietHang[index][item]);
        var convNumber = this.currencyPipe.transform(this.displayChiTietHang[index][item].replace(/\D/g, '').replace(/^0+/, ''), ' ', 'symbol', '1.0-0');
        this.displayChiTietHang[index][item] = convNumber;
        this.sendItem.ChiTietHang[index][item] = Number(convNumber.replace(/,/g, ''));
        if (item == "DonGia") {
            this.sendItem.ChiTietHang[index].ThanhTien = this.sendItem.ChiTietHang[index].SoLuong * this.sendItem.ChiTietHang[index].DonGia;
            this.displayChiTietHang[index].DonGia = new Intl.NumberFormat().format(this.sendItem.ChiTietHang[index].DonGia).replace(/\./g, ',');
            this.getTongTien(index);
        }
        if (item == "SoLuong") {
            this.sendItem.ChiTietHang[index].ThanhTien = this.sendItem.ChiTietHang[index].SoLuong * this.sendItem.ChiTietHang[index].DonGia;
            this.displayChiTietHang[index].ThanhTien = new Intl.NumberFormat().format(this.sendItem.ChiTietHang[index].ThanhTien).replace(/\./g, ',');
            this.getTongTien(index);
        }
    }
    openUnit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_donvi_donvi_index_donvi_index_page__WEBPACK_IMPORTED_MODULE_6__["DonviIndexPage"],
                cssClass: 'modalOpen',
                componentProps: {
                    "listUnit": this.listUnit,
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                console.log(dataReturned);
                if (dataReturned.data) {
                    this.sendItem.DVNhap = dataReturned.data.MaDV;
                    this.donvi = dataReturned.data.TenDV;
                }
            });
            return yield modal.present();
        });
    }
    openKho() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_kho_kho_index_kho_index_page__WEBPACK_IMPORTED_MODULE_8__["KhoIndexPage"],
                cssClass: 'modalOpen',
                componentProps: {
                    "listKho": this.listKho,
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned.data) {
                    // this.makho = dataReturned.data.MaKho;
                    this.sendItem.KhoNhap = dataReturned.data.MaKho;
                    this.kho = dataReturned.data.TenKho;
                    this.getVattu();
                }
            });
            return yield modal.present();
        });
    }
    openVattu() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // if (!this.makho) {
            //   return;
            // }
            // this.LoadingService.setValue(true);
            const modal = yield this.modalController.create({
                component: src_app_vattu_vattu_index_vattu_index_page__WEBPACK_IMPORTED_MODULE_16__["VattuIndexPage"],
                cssClass: 'modalOpen',
                componentProps: {
                    // "makho": this.sendItem.KhoNhap,
                    // "banggia": this.banggia,
                    "listVattu": this.listVattu,
                    "listItem": this.sendItem.ChiTietHang,
                },
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned && dataReturned.data) {
                    this.displayChiTietHang = [];
                    console.log('dataReturned.data', dataReturned.data);
                    for (let i = 0; i < dataReturned.data.length; i++) {
                        let foundVattu = this.listVattu.find((o) => o.MaVT === dataReturned.data[i].MaVT);
                        this.displayChiTietHang.push({
                            "_TenVT": foundVattu.TenVT,
                            "MaVT": dataReturned.data[i].MaVT,
                            "DVT": dataReturned.data[i].DVT,
                            'DonGia': dataReturned.data[i].DonGia ? new Intl.NumberFormat().format(dataReturned.data[i].DonGia).replace(/\./g, ',') : '0',
                            'SoLuong': new Intl.NumberFormat().format(dataReturned.data[i].SoLuong).replace(/\./g, ','),
                            "ChietKhau_Percent": dataReturned.data[i].ChietKhau_Percent,
                            "VAT_Percent": dataReturned.data[i].VAT_Percent,
                            "TongTien": dataReturned.data[i].TongTien,
                        });
                    }
                    this.countMoney(this.sendItem);
                }
            });
            return yield modal.present();
        });
    }
    setInput(e, item, index) {
        this.sendItem.ChiTietHang[index][item] = e;
        if (item == "ChietKhau_Percent") {
            this.sendItem.ChiTietHang[index].ChietKhau = this.sendItem.ChiTietHang[index].ThanhTien * this.sendItem.ChiTietHang[index].ChietKhau_Percent / 100;
            this.getTongTien(index);
        }
        if (item == "VAT_Percent") {
            this.sendItem.ChiTietHang[index].VAT = this.sendItem.ChiTietHang[index].ThanhTien * this.sendItem.ChiTietHang[index].VAT_Percent / 100;
            this.getTongTien(index);
        }
    }
    getTongTien(index) {
        this.sendItem.ChiTietHang[index].TongTien = this.sendItem.ChiTietHang[index].ThanhTien + this.sendItem.ChiTietHang[index].VAT - this.sendItem.ChiTietHang[index].ChietKhau;
        this.displayChiTietHang[index].TongTien = this.sendItem.ChiTietHang[index].TongTien;
        this.countMoney(this.sendItem);
    }
    handleRemove(item, index) {
        this.AlertService.presentAlert(`Bạn có chắc muốn xóa mặt hàng "${item._TenVT}"?`).then(res => {
            if (res == 'true') {
                // console.log('eeee');
                this.displayChiTietHang.splice(index, 1);
                this.sendItem.ChiTietHang.splice(index, 1);
                this.countMoney(this.sendItem);
                // this.countMoney(this.displayChiTietHang);
            }
        });
    }
    confirmSubmit() {
        console.log('this.sendItem', this.sendItem);
        if (this.typePage == 'true') {
            // var checkExit = false;
            // if (this.sendItem.ChiTietHang.length != 0) {
            //   for (let i = 0; i < this.sendItem.ChiTietHang.length; i++) {
            //     if (!this.sendItem.ChiTietHang[i].SoLuong) {
            //       checkExit = true;
            //     }
            //   }
            // } else {
            //   checkExit = true;
            // }
            // if (!checkExit) {
            this.AlertService.presentAlert(`Bạn có chắc muốn thêm hóa đơn?`).then(res => {
                if (res == 'true') {
                    this.createImport();
                }
            });
            // }
        }
        else {
            console.log('edit', this.sendItem);
            this.AlertService.presentAlert(`Bạn có chắc muốn sửa hóa đơn?`).then(res => {
                if (res == 'true') {
                    this.updateImport();
                }
            });
        }
    }
    createImport() {
        this.LoadingService.setValue(true);
        this.XuatkhoService.createXuatHang(this.sendItem).subscribe((response) => {
            if (response.code == 0) {
                this.ToastService.successToast(response.message);
                // this.resetItem();
                this.LoadingService.setValue(false);
            }
            else {
                this.ToastService.errorToast(response.message);
                this.LoadingService.setValue(false);
            }
        }, (error) => {
            this.LoadingService.setValue(false);
            console.log('error', error);
        });
    }
    updateImport() {
        this.LoadingService.setValue(true);
        this.XuatkhoService.updateXuatHang(this.sendItem).subscribe((response) => {
            console.log('response', response);
            if (response.code == 0) {
                this.ToastService.successToast(response.message);
                this.LoadingService.setValue(false);
            }
            else {
                this.ToastService.errorToast(response.message);
                this.LoadingService.setValue(false);
            }
            // this.LoadingService.setValue(false);
        }, (error) => {
            this.LoadingService.setValue(false);
            console.log('error', error);
        });
    }
    openPrint() {
        var myDiv = document.getElementById("myDiv");
        var divContent = myDiv.outerHTML;
        this.printer.isAvailable().then((onsuccess) => {
            console.log('onsuccess', onsuccess);
            let options = {};
            this.printer.print(divContent, options).then((value) => {
                console.log('value:', value);
            }, (error) => {
                console.log('error:', error);
            });
        }, (err) => {
            console.log('Error', err);
        });
    }
    openBack() {
        console.log('aaaaa');
        // var item = {
        //   "DienGiai": this.DienGiai,
        //   "LoaiCTID": this.LoaiCTID
        // }
        this.navController.navigateBack(['bill-list'], {
        // queryParams: item
        });
        // this.router.navigateByUrl("xuathang");
    }
};
BillDetailPage.ctorParameters = () => [
    { type: src_app_service_toastService__WEBPACK_IMPORTED_MODULE_12__["ToastService"] },
    { type: src_app_function_service__WEBPACK_IMPORTED_MODULE_7__["FunctionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: src_app_service_xuatkho_service__WEBPACK_IMPORTED_MODULE_15__["XuatkhoService"] },
    { type: src_app_service_AlertService__WEBPACK_IMPORTED_MODULE_9__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_11__["LoadingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_4__["Printer"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"] },
    { type: src_app_service_kho_service__WEBPACK_IMPORTED_MODULE_10__["KhoService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: src_app_service_unit_service__WEBPACK_IMPORTED_MODULE_13__["UnitService"] },
    { type: src_app_service_vattu_service__WEBPACK_IMPORTED_MODULE_14__["VattuService"] }
];
BillDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-bill-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./bill-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bill/bill-detail/bill-detail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./bill-detail.page.scss */ "./src/app/bill/bill-detail/bill-detail.page.scss")).default]
    })
], BillDetailPage);



/***/ })

}]);
//# sourceMappingURL=bill-bill-detail-bill-detail-module-es2015.js.map