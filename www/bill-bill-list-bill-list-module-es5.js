(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bill-bill-list-bill-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/bill/bill-list/bill-list.page.html":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bill/bill-list/bill-list.page.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppBillBillListBillListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar style=\"--border-width:0px!important;\">\r\n\r\n    <ion-buttons (click)=\"openBack()\" slot=\"start\">\r\n      <ion-item lines=\"none\"\r\n        style=\"--padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon class=\"icon-header\" name=\"chevron-back-outline\"></ion-icon>\r\n      </ion-item>\r\n    </ion-buttons>\r\n\r\n    <ion-title>\r\n      Hóa đơn\r\n      <!-- <span style=\"text-transform: lowercase;\">{{title}}</span> -->\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n\r\n      <ion-item lines=\"none\" (click)=\"checkSearch =! checkSearch\"\r\n        style=\"--padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon name=\"search-outline\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item lines=\"none\" (click)=\"openTypeCT()\"\r\n        style=\"--padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon style=\"font-size: 26px;\" name=\"menu-outline\"></ion-icon>\r\n      </ion-item>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <div class=\"synthetic\">\r\n    <div *ngIf=\"checkSearch\" class=\"search-item\" style=\"border-top: 1px solid white;\">\r\n      <div class=\"synthetic-item synthetic-date\">\r\n        <!-- Năm dữ liệu: -->\r\n        <table style=\"width: 100%;\">\r\n          <tr>\r\n\r\n            <td>\r\n              <ion-datetime displayFormat=\"DD/MM\" (ngModelChange)=\"changeDay($event, 'fromDay')\"\r\n                [(ngModel)]=\"searchData.fromDay\"></ion-datetime>\r\n\r\n            </td>\r\n            <td>\r\n              <ion-datetime displayFormat=\"DD/MM\" (ngModelChange)=\"changeDay($event, 'toDay')\"\r\n                [(ngModel)]=\"searchData.toDay\"></ion-datetime>\r\n\r\n            </td>\r\n            <td style=\"width: 60px; padding: 0px 10px;\">\r\n\r\n              <ion-datetime displayFormat=\"YYYY\" style=\" border: none;\" (ngModelChange)=\"changeYear($event)\"\r\n                [(ngModel)]=\"sendChungtu.nam_du_lieu\">\r\n              </ion-datetime>\r\n\r\n            </td>\r\n          </tr>\r\n        </table>\r\n\r\n      </div>\r\n\r\n      <div class=\"search-form\" style=\"width: 100%;\">\r\n        <input type=\"text\" (keyup)=\"onSearch($event)\" [value]=\"searchData.keyword\"\r\n          placeholder=\"Tìm kiếm số chứng từ, nhà cung cấp\">\r\n        <ion-icon (click)=\"deleteSearch()\" *ngIf=\"searchData.keyword != ''\" class=\"search-icon2\"\r\n          name=\"close-circle-outline\"></ion-icon>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"synthetic-item\" style=\"font-weight: 600; font-size: 16px; padding: 10px; border-top: 1px solid white;\">\r\n      <div class=\"synthetic-item-left\"> Tổng:</div>\r\n      <div class=\"synthetic-item-right\">\r\n        <span>{{sumTT | number}} đ</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"synthetic-item2\">\r\n      <div class=\"synthetic-item-left\">\r\n        {{countItem}} hóa đơn\r\n      </div>\r\n      <div (click)=\"openModal('create')\" class=\"synthetic-item2-right\">\r\n        <ion-icon name=\"add-circle-outline\"></ion-icon>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <div id=\"myDiv\" class=\"printBill\">\r\n    <app-print-bill [ChungTuInfo]=\"ChungTuInfo\"></app-print-bill>\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <!-- <div class=\"export-title\">{{title}}</div> -->\r\n\r\n  <div *ngIf=\"countItem == 0\">\r\n    <app-no-data></app-no-data>\r\n  </div>\r\n  <div class=\"export\" *ngIf=\"countItem != 0\">\r\n\r\n    <div *ngFor=\"let item of listItem; index as i\" (click)=\"presentActionSheet(item.ChungTuID, item.ThoiDiem)\"\r\n      class=\"export-item\" [class]=\"countItem != i+1 ? 'border-b' : ''\" [class.bg-hover]=\"item.check == true\">\r\n      <div class=\"export-content\">\r\n        <div class=\"export-content-item\">\r\n          <div class=\"export-content-left export-content-title\">\r\n            {{item.SoCT}}\r\n          </div>\r\n          <div class=\"export-content-right\">\r\n            <span>{{item.TongTien | number}}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"export-content-item\">\r\n          <div class=\"export-content-left\" style=\"display: flex; gap: 10px;\">\r\n            <div><ion-icon style=\"font-size: 20px;\" name=\"time-outline\"></ion-icon> </div>{{item.ThoiDiem | date:'HH:mm\r\n            dd/MM/yyyy' }}\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"item.TenDV\" class=\"export-content-item\">\r\n          <div class=\"export-content-left\" style=\"display: flex; gap: 10px; font-size: 16px;\">\r\n            <div><ion-icon style=\"font-size: 20px;\" name=\"person-circle-outline\"></ion-icon> </div>{{item.TenDV}}\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"export-content-item\">\r\n          <div class=\"export-content-left\" [class]=\"item.UpdateGPP == 0 ? 'red-dark' : 'green-dark'\">\r\n            <span>Trạng thái: </span> {{item.UpdateGPP == 0 ? 'Chưa đồng bộ' : 'Đồng bộ'}}\r\n          </div>\r\n        </div> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/bill/bill-list/bill-list-routing.module.ts":
    /*!************************************************************!*\
      !*** ./src/app/bill/bill-list/bill-list-routing.module.ts ***!
      \************************************************************/

    /*! exports provided: BillListPageRoutingModule */

    /***/
    function srcAppBillBillListBillListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BillListPageRoutingModule", function () {
        return BillListPageRoutingModule;
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


      var _bill_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./bill-list.page */
      "./src/app/bill/bill-list/bill-list.page.ts");

      var routes = [{
        path: '',
        component: _bill_list_page__WEBPACK_IMPORTED_MODULE_3__["BillListPage"]
      }];

      var BillListPageRoutingModule = function BillListPageRoutingModule() {
        _classCallCheck(this, BillListPageRoutingModule);
      };

      BillListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BillListPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/bill/bill-list/bill-list.module.ts":
    /*!****************************************************!*\
      !*** ./src/app/bill/bill-list/bill-list.module.ts ***!
      \****************************************************/

    /*! exports provided: BillListPageModule */

    /***/
    function srcAppBillBillListBillListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BillListPageModule", function () {
        return BillListPageModule;
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


      var _bill_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./bill-list-routing.module */
      "./src/app/bill/bill-list/bill-list-routing.module.ts");
      /* harmony import */


      var _bill_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./bill-list.page */
      "./src/app/bill/bill-list/bill-list.page.ts");
      /* harmony import */


      var src_app_share_print_bill_print_bill_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/share/print-bill/print-bill.component */
      "./src/app/share/print-bill/print-bill.component.ts");
      /* harmony import */


      var src_app_share_no_data_no_data_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/share/no-data/no-data.component */
      "./src/app/share/no-data/no-data.component.ts");

      var BillListPageModule = function BillListPageModule() {
        _classCallCheck(this, BillListPageModule);
      };

      BillListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _bill_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["BillListPageRoutingModule"]],
        declarations: [_bill_list_page__WEBPACK_IMPORTED_MODULE_6__["BillListPage"], src_app_share_print_bill_print_bill_component__WEBPACK_IMPORTED_MODULE_7__["PrintBillComponent"], src_app_share_no_data_no_data_component__WEBPACK_IMPORTED_MODULE_8__["NoDataComponent"]]
      })], BillListPageModule);
      /***/
    },

    /***/
    "./src/app/bill/bill-list/bill-list.page.scss":
    /*!****************************************************!*\
      !*** ./src/app/bill/bill-list/bill-list.page.scss ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppBillBillListBillListPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".export {\n  background: white;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n}\n.export-title {\n  padding: 14px 10px 0;\n  font-weight: 600;\n  font-size: 20px;\n  color: var(--gray-dark);\n}\n.export-item {\n  display: flex;\n  padding: 10px;\n}\n.export-icon {\n  font-size: 20px;\n  padding-right: 15px;\n}\n.export-content {\n  width: 100%;\n}\n.export-content-item {\n  display: flex;\n  margin-bottom: 5px;\n  color: var(--text-blue);\n}\n.export-content-left span {\n  color: gray;\n}\n.export-content-title {\n  font-weight: 600;\n  font-size: 16px;\n  color: var(--background-color);\n}\n.export-content-sm {\n  font-size: 14px;\n  color: gray;\n}\n.export-content-right {\n  margin-left: auto;\n  font-weight: 600;\n}\n.export-content-right span {\n  color: var(--background-color);\n}\n.btn-db {\n  color: white;\n  padding: 8px 10px;\n  border-radius: 5px;\n}\n.bg-blue1 {\n  background: #3880ff;\n}\n.bg-gray1 {\n  background: #939393;\n}\nion-datetime {\n  border: 1px solid;\n  --padding-start: 10px;\n  border-radius: 5px;\n  text-align: center;\n  --padding-top: 6px;\n  --padding-bottom: 6px;\n}\ntd {\n  padding: 0px 10px 0px 0px;\n}\n.border-b {\n  border-bottom: 1px solid #bfbfbf;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlsbC9iaWxsLWxpc3QvYmlsbC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGlCQUFBO0VBRUEsMkNBQUE7QUFESjtBQUVJO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQUFSO0FBRUk7RUFDSSxhQUFBO0VBQ0EsYUFBQTtBQUFSO0FBR0k7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUFEUjtBQUdJO0VBQ0ksV0FBQTtBQURSO0FBRVE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUFaO0FBR1k7RUFFSSxXQUFBO0FBRmhCO0FBTVE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQUpaO0FBTVE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQUpaO0FBTVE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBSlo7QUFLWTtFQUNJLDhCQUFBO0FBSGhCO0FBVUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVBKO0FBU0E7RUFDSSxtQkFBQTtBQU5KO0FBUUE7RUFDSSxtQkFBQTtBQUxKO0FBVUE7RUFFSSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFSSjtBQVdBO0VBQ0kseUJBQUE7QUFSSjtBQXNCQTtFQUNJLGdDQUFBO0FBbkJKIiwiZmlsZSI6InNyYy9hcHAvYmlsbC9iaWxsLWxpc3QvYmlsbC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHBvcnQge1xyXG4gICAgLy8gcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweDtcclxuICAgICYtdGl0bGV7XHJcbiAgICAgICAgcGFkZGluZzogMTRweCAxMHB4IDA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWdyYXktZGFyayk7XHJcbiAgICB9XHJcbiAgICAmLWl0ZW0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgICYtaWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAmLWNvbnRlbnQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICYtaXRlbSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDsgXHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsdWUpOyAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWxlZnQge1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAmLXRpdGxle1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwOyBcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7ICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtc20ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLXJpZ2h0IHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpOyAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmJ0bi1kYntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5iZy1ibHVlMXtcclxuICAgIGJhY2tncm91bmQ6ICMzODgwZmY7XHJcbn1cclxuLmJnLWdyYXkxe1xyXG4gICAgYmFja2dyb3VuZDogIzkzOTM5MztcclxufVxyXG4vLyBpb24tY29udGVudCB7XHJcbi8vICAgICAtLWJhY2tncm91bmQ6ICNmOWY5ZjlcclxuLy8gfVxyXG5pb24tZGF0ZXRpbWV7XHJcbiAgICAvLyAtLXBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC0tcGFkZGluZy10b3A6IDZweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDZweDtcclxufVxyXG5cclxudGR7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweCAwcHggMHB4O1xyXG5cclxufVxyXG5cclxuXHJcbiAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgIFxyXG5cclxuICAgICAgICAgIFxyXG4gICAgXHJcbiAgICBcclxuICBcclxuLmJvcmRlci1iIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmZiZmJmO1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/bill/bill-list/bill-list.page.ts":
    /*!**************************************************!*\
      !*** ./src/app/bill/bill-list/bill-list.page.ts ***!
      \**************************************************/

    /*! exports provided: BillListPage */

    /***/
    function srcAppBillBillListBillListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BillListPage", function () {
        return BillListPage;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_function_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/function.service */
      "./src/app/function.service.ts");
      /* harmony import */


      var src_app_service_xuatkho_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/service/xuatkho.service */
      "./src/app/service/xuatkho.service.ts");
      /* harmony import */


      var src_app_service_AlertService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/service/AlertService */
      "./src/app/service/AlertService.ts");
      /* harmony import */


      var src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/service/loading.service */
      "./src/app/service/loading.service.ts");
      /* harmony import */


      var _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/printer/ngx */
      "./node_modules/@ionic-native/printer/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var src_app_service_toastService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/service/toastService */
      "./src/app/service/toastService.ts");

      var BillListPage = /*#__PURE__*/function () {
        function BillListPage(Function, router, route, toastController, modalController, XuatkhoService, actionSheetController, AlertService, LoadingService, navController, printer, ToastService) {
          var _this = this;

          _classCallCheck(this, BillListPage);

          this.Function = Function;
          this.router = router;
          this.route = route;
          this.toastController = toastController;
          this.modalController = modalController;
          this.XuatkhoService = XuatkhoService;
          this.actionSheetController = actionSheetController;
          this.AlertService = AlertService;
          this.LoadingService = LoadingService;
          this.navController = navController;
          this.printer = printer;
          this.ToastService = ToastService;
          this.listItem = [];
          this.listItemSearch = [];
          this.sendChungtu = {
            "nam_du_lieu": "2023",
            "loaictid": 2
          };
          this.searchData = {
            keyword: '',
            fromDay: '2024-01-01',
            toDay: '2024-12-31'
          };
          this.timeout = '';
          this.title = '';
          this.ChungTuInfo = {};
          this.countItem = 0;
          this.sumTT = 0;
          this.checkCalender = false;
          this.checkSearch = false;
          this.listLoaiCT = [];
          this.CTCurrent = {};
          this.route.queryParams.subscribe(function (params) {
            _this.sendChungtu.loaictid = params.LoaiCTID;
            _this.title = params.DienGiai;
            _this.listLoaiCT = JSON.parse(localStorage.getItem('LoaiCT') || '[]');

            for (var i = 0; i < _this.listLoaiCT.length; i++) {
              if (_this.listLoaiCT[i].LoaiCTID == params.LoaiCTID) {
                _this.CTCurrent = _this.listLoaiCT[i];
                break;
              }
            }
          });
          this.sendChungtu.nam_du_lieu = new Date().getFullYear().toString();
        }

        _createClass(BillListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getData('start');
            var time = new Date().toISOString();
            this.searchData.fromDay = time;
            this.searchData.toDay = time;
          }
        }, {
          key: "print",
          value: function print() {
            var _this2 = this;

            var myDiv = document.getElementById("myDiv");
            var divContent = myDiv.outerHTML;
            this.printer.isAvailable().then(function (onsuccess) {
              var options = {};

              _this2.printer.print(divContent, options).then(function (value) {
                console.log('value:', value);
              }, function (error) {
                console.log('error:', error);
              });
            }, function (err) {
              console.log('Error', err);
            });
          }
        }, {
          key: "convDate",
          value: function convDate(number) {
            return number < 10 ? "0".concat(number) : number;
          }
        }, {
          key: "getData",
          value: function getData(start) {
            var _this3 = this;

            this.LoadingService.setValue(true);
            this.XuatkhoService.getChungtu(this.sendChungtu).subscribe(function (response) {
              _this3.listItem = response;
              _this3.listItemSearch = response;
              _this3.countItem = response.length;

              if (start) {
                var searchBill = JSON.parse(sessionStorage.getItem('searchBill') || null);

                if (searchBill) {
                  console.log('rrrrrrrrrr');
                  _this3.searchData = searchBill;
                }
              }

              _this3.search();

              _this3.sumMoney(); // console.log('response123', response);


              _this3.LoadingService.setValue(false);
            }, function (error) {
              setTimeout(function () {
                console.log('error', error);

                _this3.LoadingService.setValue(false);
              }, 1000);
            });
          }
        }, {
          key: "sumMoney",
          value: function sumMoney() {
            this.sumTT = 0;

            for (var i = 0; i < this.listItem.length; i++) {
              this.sumTT = this.sumTT + this.listItem[i].TongTien;
            }
          }
        }, {
          key: "openModal",
          value: function openModal(isCreate, ChungTuID, ThoiDiem) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var item;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      item = {
                        "Type": isCreate,
                        "ChungTuID": ChungTuID,
                        "nam_du_lieu": ThoiDiem === null || ThoiDiem === void 0 ? void 0 : ThoiDiem.slice(0, 4),
                        "DienGiai": this.title,
                        "LoaiCTID": this.sendChungtu.loaictid,
                        "pageParent": 'list'
                      };

                      if (this.CTCurrent.LoaiNX == "4_1") {
                        this.navController.navigateBack(['xuathang-detail'], {
                          queryParams: item
                        });
                      } else if (this.CTCurrent.LoaiNX == "2_1") {
                        this.navController.navigateBack(['nhaphang-detail'], {
                          queryParams: item
                        });
                      }

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentActionSheet",
          value: function presentActionSheet(ChungTuID, ThoiDiem) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var listBtn, print, actionSheet, _yield$actionSheet$on, role;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.hoverItem(ChungTuID);
                      listBtn = [{
                        text: 'Chi tiết',
                        icon: 'document-attach-outline',
                        handler: function handler() {
                          _this4.openDetail(ChungTuID, String(ThoiDiem));
                        }
                      }, {
                        text: 'Sửa phiếu',
                        icon: 'create-outline',
                        handler: function handler() {
                          _this4.openModal('edit', ChungTuID, String(ThoiDiem));
                        }
                      }, {
                        text: 'Xóa phiếu',
                        role: 'destructive',
                        icon: 'trash',
                        handler: function handler() {
                          _this4.confirmDelete();
                        }
                      }, {
                        text: 'Đóng',
                        icon: 'close',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Cancel clicked');
                        }
                      }];

                      if (this.CTCurrent.LoaiNX == "4_1") {
                        print = {
                          text: 'In phiếu',
                          icon: 'print-outline',
                          handler: function handler() {
                            _this4.print();
                          }
                        };
                        listBtn.splice(0, 0, print);
                      }

                      this.ChungTuInfo = {
                        "ChungTuID": ChungTuID,
                        "nam_du_lieu": ThoiDiem === null || ThoiDiem === void 0 ? void 0 : ThoiDiem.slice(0, 4)
                      };
                      _context2.next = 6;
                      return this.actionSheetController.create({
                        cssClass: 'left-align-buttons',
                        buttons: listBtn
                      });

                    case 6:
                      actionSheet = _context2.sent;
                      _context2.next = 9;
                      return actionSheet.present();

                    case 9:
                      _context2.next = 11;
                      return actionSheet.onDidDismiss();

                    case 11:
                      _yield$actionSheet$on = _context2.sent;
                      role = _yield$actionSheet$on.role;

                    case 13:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "hoverItem",
          value: function hoverItem(ChungTuID) {
            for (var i = 0; i < this.listItem.length; i++) {
              if (this.listItem[i].ChungTuID == ChungTuID) {
                this.listItem[i].check = true;
              } else {
                this.listItem[i].check = false;
              }
            }
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete() {
            var _this5 = this;

            this.ChungTuInfo.ChungTuID = String(this.ChungTuInfo.ChungTuID);
            this.AlertService.presentAlert("X\xE1c nh\u1EADn x\xF3a phi\u1EBFu?").then(function (res) {
              if (res == 'true') {
                _this5.LoadingService.setValue(true);

                _this5.XuatkhoService.deleteXuatHang(_this5.ChungTuInfo).subscribe(function (response) {
                  var res = JSON.parse(response._body);

                  if (res.code == 200) {
                    _this5.ToastService.successToast(res.message);

                    _this5.getData();
                  } else {
                    _this5.ToastService.errorToast(res.message);
                  }

                  _this5.LoadingService.setValue(false);
                }, function (error) {
                  setTimeout(function () {
                    console.log('error', error);
                  }, 1000);
                });
              }
            });
          }
        }, {
          key: "onSearch",
          value: function onSearch(e) {
            this.searchData.keyword = e.target.value;
            sessionStorage.setItem('searchBill', JSON.stringify(this.searchData));
            this.search();
          }
        }, {
          key: "search",
          value: function search() {
            var _this6 = this;

            var arrPlan = [];
            var arr = [];

            if (this.searchData.keyword) {
              this.listItemSearch.find(function (o, i) {
                if (o.SoCT.toLowerCase().includes(_this6.searchData.keyword.toLowerCase()) == true || o.TenDV.toLowerCase().includes(_this6.searchData.keyword.toLowerCase()) == true) {
                  arrPlan.push(_this6.listItemSearch[i]);
                }
              });
            } else {
              arrPlan = this.listItemSearch;
            }

            var start = new Date(this.searchData.fromDay.slice(0, 10)).getTime();
            var end = new Date(this.searchData.toDay.slice(0, 10)).getTime();

            for (var i = 0; i < arrPlan.length; i++) {
              var dateItem = new Date(arrPlan[i].ThoiDiem.slice(0, 10)).getTime();

              if (dateItem >= start && dateItem <= end) {
                arr.push(arrPlan[i]);
              }
            }

            this.listItem = arr;
            this.countItem = arr.length;
          }
        }, {
          key: "deleteSearch",
          value: function deleteSearch() {
            this.searchData.keyword = '';
            this.search();
          }
        }, {
          key: "changeYear",
          value: function changeYear(year) {
            this.sendChungtu.nam_du_lieu = year.slice(0, 4);
            this.getData();
            this.searchData.fromDay = this.sendChungtu.nam_du_lieu.slice(0, 4) + this.searchData.fromDay.slice(4, 10);
            this.searchData.toDay = this.sendChungtu.nam_du_lieu.slice(0, 4) + this.searchData.toDay.slice(4, 10);
            this.search();
          }
        }, {
          key: "changeDay",
          value: function changeDay(time, type) {
            this.searchData[type] = this.sendChungtu.nam_du_lieu.slice(0, 4) + time.slice(4, 10);
            sessionStorage.setItem('searchBill', JSON.stringify(this.searchData));
            this.search();
            this.sumMoney();
          }
        }, {
          key: "openDetail",
          value: function openDetail(ChungTuID, ThoiDiem) {
            var item = {
              "ChungTuID": ChungTuID,
              "nam_du_lieu": ThoiDiem === null || ThoiDiem === void 0 ? void 0 : ThoiDiem.slice(0, 4),
              "DienGiai": this.title,
              "LoaiCTID": this.sendChungtu.loaictid,
              "Type": "detail"
            };

            if (this.CTCurrent.LoaiNX == "4_1") {
              this.navController.navigateBack(['xuathang-detail'], {
                queryParams: item
              });
            } else if (this.CTCurrent.LoaiNX == "2_1") {
              this.navController.navigateBack(['nhaphang-detail'], {
                queryParams: item
              });
            }
          }
        }, {
          key: "openTypeCT",
          value: function openTypeCT() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this7 = this;

              var listBtn, _loop, i, actionSheet, _yield$actionSheet$on2, role;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      listBtn = [];

                      _loop = function _loop(i) {
                        listBtn.push({
                          text: _this7.listLoaiCT[i].DienGiai,
                          icon: 'medical-outline',
                          cssClass: _this7.CTCurrent.LoaiCTID == _this7.listLoaiCT[i].LoaiCTID ? 'buttonSheetOn' : 'buttonSheetOff',
                          handler: function handler() {
                            _this7.CTCurrent = _this7.listLoaiCT[i];
                            _this7.sendChungtu.loaictid = _this7.listLoaiCT[i].LoaiCTID;
                            _this7.title = _this7.listLoaiCT[i].DienGiai;

                            _this7.getData();
                          }
                        });
                      };

                      for (i = 0; i < this.listLoaiCT.length; i++) {
                        _loop(i);
                      }

                      _context3.next = 5;
                      return this.actionSheetController.create({
                        cssClass: 'left-align-buttons',
                        buttons: listBtn
                      });

                    case 5:
                      actionSheet = _context3.sent;
                      _context3.next = 8;
                      return actionSheet.present();

                    case 8:
                      _context3.next = 10;
                      return actionSheet.onDidDismiss();

                    case 10:
                      _yield$actionSheet$on2 = _context3.sent;
                      role = _yield$actionSheet$on2.role;
                      console.log('onDidDismiss resolved with role', role);

                    case 13:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "openBack",
          value: function openBack() {
            sessionStorage.removeItem('searchBill');
            this.navController.navigateBack(['tabs/tab3']); // this.router.navigateByUrl("tabs/tab3");
          }
        }]);

        return BillListPage;
      }();

      BillListPage.ctorParameters = function () {
        return [{
          type: src_app_function_service__WEBPACK_IMPORTED_MODULE_4__["FunctionService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: src_app_service_xuatkho_service__WEBPACK_IMPORTED_MODULE_5__["XuatkhoService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
        }, {
          type: src_app_service_AlertService__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
        }, {
          type: src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_8__["Printer"]
        }, {
          type: src_app_service_toastService__WEBPACK_IMPORTED_MODULE_9__["ToastService"]
        }];
      };

      BillListPage.propDecorators = {
        infiniteScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"]]
        }]
      };
      BillListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bill-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./bill-list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/bill/bill-list/bill-list.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./bill-list.page.scss */
        "./src/app/bill/bill-list/bill-list.page.scss"))["default"]]
      })], BillListPage);
      /***/
    },

    /***/
    "./src/app/service/AlertService.ts":
    /*!*****************************************!*\
      !*** ./src/app/service/AlertService.ts ***!
      \*****************************************/

    /*! exports provided: AlertService */

    /***/
    function srcAppServiceAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertService", function () {
        return AlertService;
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
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js"); // import { StringResources } from '@app/models/sharedmodels';


      var AlertService = /*#__PURE__*/function () {
        function AlertService(alertController) {
          _classCallCheck(this, AlertService);

          this.alertController = alertController;
        }

        _createClass(AlertService, [{
          key: "presentAlert",
          value: function presentAlert(question) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var alert, _yield$alert$onDidDis, role;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertController.create({
                        header: question,
                        cssClass: 'cssAlert',
                        mode: 'ios',
                        buttons: [{
                          text: "Hủy",
                          role: 'false'
                        }, {
                          text: "Đồng ý",
                          role: 'true'
                        }]
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                      _context4.next = 7;
                      return alert.onDidDismiss();

                    case 7:
                      _yield$alert$onDidDis = _context4.sent;
                      role = _yield$alert$onDidDis.role;
                      return _context4.abrupt("return", "".concat(role));

                    case 10:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "presentAlert2",
          value: function presentAlert2(question, print) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var arr, alert, _yield$alert$onDidDis2, role;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      arr = [{
                        text: "Đồng ý",
                        role: 'true'
                      }, {
                        text: "Hủy",
                        role: 'false'
                      }];

                      if (print) {
                        arr.splice(1, 0, {
                          text: "Đồng ý và in",
                          role: 'trueAndPrint'
                        });
                      }

                      _context5.next = 4;
                      return this.alertController.create({
                        header: question,
                        cssClass: 'alertThree',
                        buttons: arr
                      });

                    case 4:
                      alert = _context5.sent;
                      _context5.next = 7;
                      return alert.present();

                    case 7:
                      _context5.next = 9;
                      return alert.onDidDismiss();

                    case 9:
                      _yield$alert$onDidDis2 = _context5.sent;
                      role = _yield$alert$onDidDis2.role;
                      return _context5.abrupt("return", "".concat(role));

                    case 12:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return AlertService;
      }();

      AlertService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }];
      };

      AlertService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AlertService);
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
                        color: 'success',
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
        }, {
          key: "errorToast",
          value: function errorToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var toast;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 1500,
                        position: 'top',
                        color: 'danger',
                        cssClass: 'toast-ios'
                      });

                    case 2:
                      toast = _context7.sent;
                      _context7.next = 5;
                      return toast.present();

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "warningToast",
          value: function warningToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var toast;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 1500,
                        position: 'top',
                        color: 'warning',
                        cssClass: 'toast-ios'
                      });

                    case 2:
                      toast = _context8.sent;
                      _context8.next = 5;
                      return toast.present();

                    case 5:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
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
    },

    /***/
    "./src/app/service/xuatkho.service.ts":
    /*!********************************************!*\
      !*** ./src/app/service/xuatkho.service.ts ***!
      \********************************************/

    /*! exports provided: XuatkhoService */

    /***/
    function srcAppServiceXuatkhoServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "XuatkhoService", function () {
        return XuatkhoService;
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


      var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/http */
      "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/dist/esm/index.js");
      /* harmony import */


      var _share_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../share/helper */
      "./src/app/share/helper.ts");

      var XuatkhoService = /*#__PURE__*/function () {
        function XuatkhoService(http, router, toastController, http1, storage, modalController, convertHelper) {
          _classCallCheck(this, XuatkhoService);

          this.http = http;
          this.router = router;
          this.toastController = toastController;
          this.http1 = http1;
          this.storage = storage;
          this.modalController = modalController;
          this.convertHelper = convertHelper;
          this.apiUrl = '';
        }

        _createClass(XuatkhoService, [{
          key: "getTongHopXuatKho",
          value: function getTongHopXuatKho(item) {
            var _url = this.convertHelper.env() + "Report/TongHopXuatKho";

            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
            return this.http.post(_url, item, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res.json();
            }));
          }
        }, {
          key: "getChungtu",
          value: function getChungtu(item) {
            var _url = this.convertHelper.env() + "ChungTu?nam_du_lieu=".concat(item.nam_du_lieu, "&loaictid=").concat(item.loaictid);

            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
            return this.http.get(_url, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res.json();
            }));
          }
        }, {
          key: "xuatHangDetail",
          value: function xuatHangDetail(item) {
            var _url = this.convertHelper.env() + "ChungTu/".concat(item.ChungTuID, "?nam_du_lieu=").concat(item.nam_du_lieu);

            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
            return this.http.get(_url, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res.json();
            }));
          }
        }, {
          key: "createXuatHang",
          value: function createXuatHang(item) {
            console.log("Xuat hang", item);

            var _url = this.convertHelper.env() + "ChungTu";

            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
            return this.http.post(_url, item, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res.json();
            }));
          }
        }, {
          key: "updateXuatHang",
          value: function updateXuatHang(item) {
            var _url = this.convertHelper.env() + "ChungTu";

            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
            return this.http.post(_url, item, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res.json();
            }));
          }
        }, {
          key: "deleteXuatHang",
          value: function deleteXuatHang(item) {
            var _url = this.convertHelper.env() + "ChungTu";

            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
            return this.http["delete"](_url, new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({
              headers: headers,
              body: item
            }));
          } // deleteXuatHang(item): Observable<any> {
          //     const _url = this.convertHelper.env() + "ChungTu";
          //     const headers = new Headers({
          //       'Authorization': 'Bearer ' + localStorage.getItem("Token"),
          //       'Content-Type': 'application/json',  // Set content type to JSON
          //     });
          //     // Note: You may need to adjust the payload structure based on your server's expectations
          //     const options = {
          //       headers: headers,
          //       body: item
          //     };
          //     return this.http.delete(_url, new RequestOptions(options));
          //   }

        }, {
          key: "heThong",
          value: function heThong() {
            var _url = this.convertHelper.env() + "HeThong";

            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
            return this.http.get(_url, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res.json();
            }));
          }
        }, {
          key: "DonViTinh",
          value: function DonViTinh(MaVT) {
            console.log("102 - ", MaVT);

            var _url = this.convertHelper.env() + "DonViTinh/" + MaVT;

            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
            return this.http.get(_url, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res.json();
            }));
          }
        }]);

        return XuatkhoService;
      }();

      XuatkhoService.ctorParameters = function () {
        return [{
          type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _share_helper__WEBPACK_IMPORTED_MODULE_8__["convertHelper"]
        }];
      };

      XuatkhoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], XuatkhoService);
      /***/
    },

    /***/
    "./src/app/share/helper.ts":
    /*!*********************************!*\
      !*** ./src/app/share/helper.ts ***!
      \*********************************/

    /*! exports provided: convertHelper */

    /***/
    function srcAppShareHelperTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "convertHelper", function () {
        return convertHelper;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var convertHelper = /*#__PURE__*/function () {
        function convertHelper() {
          _classCallCheck(this, convertHelper);

          this.defaultNumbers = '';
          this.chuHangDonVi = '';
          this.chuHangChuc = '';
          this.chuHangTram = '';
          this.dvBlock = '';
          this.defaultNumbers = ' hai ba bốn năm sáu bảy tám chín';
          this.chuHangDonVi = ('1 một' + this.defaultNumbers).split(' ');
          this.chuHangChuc = ('lẻ mười' + this.defaultNumbers).split(' ');
          this.chuHangTram = ('không một' + this.defaultNumbers).split(' ');
          this.dvBlock = '1 nghìn triệu tỷ'.split(' ');
        }

        _createClass(convertHelper, [{
          key: "to_vietnamese",
          value: function to_vietnamese(number) {
            var str = parseInt(number) + '';
            var i = 0;
            var arr = [];
            var index = str.length;
            var result = [];
            var rsString = '';

            if (index == 0 || str == 'NaN') {
              return '';
            } // Chia chuỗi số thành một mảng từng khối có 3 chữ số


            while (index >= 0) {
              arr.push(str.substring(index, Math.max(index - 3, 0)));
              index -= 3;
            } // Lặp từng khối trong mảng trên và convert từng khối đấy ra chữ Việt Nam


            for (i = arr.length - 1; i >= 0; i--) {
              if (arr[i] != '' && arr[i] != '000') {
                result.push(this.convert_block_three(arr[i])); // Thêm đuôi của mỗi khối

                if (this.dvBlock[i]) {
                  result.push(this.dvBlock[i]);
                }
              }
            } // Join mảng kết quả lại thành chuỗi string


            rsString = result.join(' '); // Trả về kết quả kèm xóa những ký tự thừa

            return rsString.replace(/[0-9]/g, '').replace(/ /g, ' ').replace(/ $/, '');
          }
        }, {
          key: "convert_block_three",
          value: function convert_block_three(number) {
            if (number == '000') return '';

            var _a = number + ''; //Convert biến 'number' thành kiểu string
            //Kiểm tra độ dài của khối


            switch (_a.length) {
              case 0:
                return '';

              case 1:
                return this.chuHangDonVi[_a];

              case 2:
                return this.convert_block_two(_a);

              case 3:
                var chuc_dv = '';

                if (_a.slice(1, 3) != '00') {
                  chuc_dv = this.convert_block_two(_a.slice(1, 3));
                }

                var tram = this.chuHangTram[_a[0]] + ' trăm';
                return tram + ' ' + chuc_dv;
            }
          }
        }, {
          key: "convert_block_two",
          value: function convert_block_two(number) {
            var dv = this.chuHangDonVi[number[1]];
            var chuc = this.chuHangChuc[number[0]];
            var append = ''; // Nếu chữ số hàng đơn vị là 5

            if (number[0] > 0 && number[1] == 5) {
              dv = 'lăm';
            } // Nếu số hàng chục lớn hơn 1


            if (number[0] > 1) {
              append = ' mươi';

              if (number[1] == 1) {
                dv = ' mốt';
              }
            }

            return chuc + '' + append + ' ' + dv;
          }
        }, {
          key: "env",
          value: function env() {
            return "https://".concat(localStorage.getItem('unit'), ".tvsgpp.net/api/");
          }
        }, {
          key: "env2",
          value: function env2() {
            return "https://tvsgpp.net/api/";
          }
        }, {
          key: "typeProduct",
          value: function typeProduct() {
            // return ['Thuốc','Vật tư y tế','Thực phẩm chức năng'];
            return [{
              'item': 'Thuốc',
              'value': 'THUOC'
            }, {
              'item': 'Vật tư y tế',
              'value': 'VTYT'
            }, {
              'item': 'Thực phẩm chức năng',
              'value': 'TPCN'
            }];
          }
        }, {
          key: "typeChungTu",
          value: function typeChungTu(LoaiCTID) {
            var typeArr = JSON.parse(localStorage.getItem('LoaiCT') || '[]');

            for (var i = 0; i < typeArr.length; i++) {
              if (typeArr[i].LoaiCTID == LoaiCTID) {
                return typeArr[i].DienGiai;
              }
            }
          }
        }, {
          key: "typeChungTuObj",
          value: function typeChungTuObj(LoaiCTID) {
            var typeArr = JSON.parse(localStorage.getItem('LoaiCT') || '[]');

            for (var i = 0; i < typeArr.length; i++) {
              if (typeArr[i].LoaiCTID == LoaiCTID) {
                return typeArr[i];
              }
            }
          }
        }, {
          key: "convertFileToBase64",
          value: function convertFileToBase64(file) {
            return new Promise(function (resolve, reject) {
              var reader = new FileReader();
              reader.readAsDataURL(file);

              reader.onload = function () {
                return resolve(reader.result);
              };

              reader.onerror = function (error) {
                return reject(error);
              };
            });
          }
        }]);

        return convertHelper;
      }();

      convertHelper.ctorParameters = function () {
        return [];
      };

      convertHelper = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], convertHelper);
      /***/
    }
  }]);
})();
//# sourceMappingURL=bill-bill-list-bill-list-module-es5.js.map