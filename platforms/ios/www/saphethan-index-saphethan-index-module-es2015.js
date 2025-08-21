(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saphethan-index-saphethan-index-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/saphethan-index/saphethan-index.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/saphethan-index/saphethan-index.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons (click)=\"closeModal()\" slot=\"start\">\r\n      <ion-item lines=\"none\"\r\n        style=\"--padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"font-size: 25px;\"></ion-icon>\r\n      </ion-item>\r\n    </ion-buttons>\r\n    <ion-title style=\"font-weight: 600; text-align: center;\">\r\n      Sắp hết hạn\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-item lines=\"none\"\r\n        style=\"--padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <!-- <ion-icon style=\"font-size: 26px;\" name=\"menu-outline\"></ion-icon> -->\r\n      </ion-item>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <div class=\"product-header\">\r\n    <div class=\"product-search\">\r\n      <input (keyup)=\"onSearch($event)\" [(ngModel)]=\"pageInfo.keyword\" type=\"text\"\r\n        placeholder=\"Tìm kiếm tên hàng hóa ...\" style=\"text-align: left; background: white;\">\r\n      <!-- <ion-icon class=\"search-icon\" *ngIf=\"pageInfo.keyword == ''\" name=\"search-outline\"></ion-icon> -->\r\n      <ion-icon (click)=\"deleteSearch()\" *ngIf=\"pageInfo.keyword != ''\" class=\"search-icon2\"\r\n        name=\"close-circle-outline\"></ion-icon>\r\n    </div>\r\n    <div class=\"product-add\">\r\n      <div class=\"synthetic-item2\">\r\n        <div class=\"synthetic-item-left\">\r\n          {{countVattu | number}} mặt hàng sắp hết hạn dùng\r\n        </div>\r\n        <div (click)=\"openModal()\" class=\"synthetic-item2-right\">\r\n          <ion-icon name=\"add-circle-outline\"></ion-icon>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"product\">\r\n    <div (click)=\"getItem(item)\" *ngFor=\"let item of listData; index as i\" class=\"product-item border-b\"\r\n      [class]=\"item.checkHover == true ? 'bg-hover' : ''\">\r\n      <div *ngIf=\"displayImg\" class=\"product-img\">\r\n        <img *ngIf=\"!item.Img\" src=\"../../../assets/images/no-img.jpg\" alt=\"\">\r\n        <img *ngIf=\"item.Img\" [src]=\"item.Img\" alt=\"\">\r\n\r\n      </div>\r\n\r\n      <div class=\"product-content\">\r\n        <div class=\"product-content-item\">\r\n          <div class=\"product-content-left product-content-title\">\r\n            {{item.TenVT}} ({{item.MaVT}})\r\n          </div>\r\n          <!-- <div class=\"product-content-right\">\r\n            <button ><ion-icon name=\"ellipsis-horizontal-outline\"></ion-icon></button>\r\n          </div> -->\r\n        </div>\r\n        <div class=\"product-content-item mt-10\">\r\n          <div class=\"product-content-left\">\r\n            <!-- <span>DVT:</span> -->\r\n            DVT: {{item.DVT}}\r\n          </div>\r\n          <div class=\"product-content-right\">\r\n            <div class=\"product-content-left\">\r\n              <!-- <span>Lượng tồn:</span> -->\r\n              Tồn:\r\n              <span class=\"font-bold\">\r\n                {{item.LuongTon | number}}\r\n              </span>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"product-content-item mt-10\">\r\n          <div class=\"product-content-left\">\r\n            <!-- <span>DVT:</span> -->\r\n            Lô hàng: {{item.LoHang}}\r\n          </div>\r\n          <div class=\"product-content-right\">\r\n            <div class=\"product-content-left\">\r\n              <!-- <span>Lượng tồn:</span> -->\r\n              Hạn dùng: {{item.HanDung | date:'dd/MM/yyyy'}}\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ion-infinite-scroll *ngIf=\"!pageInfo.keyword\" (ionInfinite)=\"doInfinite($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Đang tải dữ liệu...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/saphethan-index/saphethan-index-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/saphethan-index/saphethan-index-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: SaphethanIndexPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaphethanIndexPageRoutingModule", function() { return SaphethanIndexPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _saphethan_index_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saphethan-index.page */ "./src/app/saphethan-index/saphethan-index.page.ts");




const routes = [
    {
        path: '',
        component: _saphethan_index_page__WEBPACK_IMPORTED_MODULE_3__["SaphethanIndexPage"]
    }
];
let SaphethanIndexPageRoutingModule = class SaphethanIndexPageRoutingModule {
};
SaphethanIndexPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SaphethanIndexPageRoutingModule);



/***/ }),

/***/ "./src/app/saphethan-index/saphethan-index.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/saphethan-index/saphethan-index.module.ts ***!
  \***********************************************************/
/*! exports provided: SaphethanIndexPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaphethanIndexPageModule", function() { return SaphethanIndexPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _saphethan_index_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./saphethan-index-routing.module */ "./src/app/saphethan-index/saphethan-index-routing.module.ts");
/* harmony import */ var _saphethan_index_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./saphethan-index.page */ "./src/app/saphethan-index/saphethan-index.page.ts");







let SaphethanIndexPageModule = class SaphethanIndexPageModule {
};
SaphethanIndexPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _saphethan_index_routing_module__WEBPACK_IMPORTED_MODULE_5__["SaphethanIndexPageRoutingModule"]
        ],
        declarations: [_saphethan_index_page__WEBPACK_IMPORTED_MODULE_6__["SaphethanIndexPage"]]
    })
], SaphethanIndexPageModule);



/***/ }),

/***/ "./src/app/saphethan-index/saphethan-index.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/saphethan-index/saphethan-index.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".product-header {\n  position: sticky;\n  top: 0;\n  background: white;\n  z-index: 9;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n}\n.product-img {\n  width: 70px;\n  margin-right: 10px;\n  display: flex;\n  align-items: center;\n}\n.product-img img {\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 4px;\n}\n.product-search {\n  padding: 0 10px 10px 10px;\n  position: relative;\n  background: var(--background-color);\n}\n.product-search input {\n  width: 100%;\n  padding: 8px;\n  border-radius: 5px;\n  border: 1px solid gray;\n}\n.product-search ion-icon {\n  position: absolute;\n  right: 20px;\n  top: 8px;\n  font-size: 22px;\n  color: var(--background-color);\n}\n.product-title {\n  padding: 14px 10px 0;\n  font-weight: 600;\n  font-size: 20px;\n  color: var(--gray-dark);\n}\n.product-item {\n  display: flex;\n  padding: 10px;\n}\n.product-icon {\n  font-size: 20px;\n  padding-right: 15px;\n}\n.product-red {\n  border: 1px solid var(--red-dark) !important;\n  color: var(--red-dark) !important;\n}\n.product-content {\n  width: 100%;\n}\n.product-content-item {\n  display: flex;\n  color: var(--text-blue);\n}\n.product-content-left {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.product-content-left ion-icon {\n  border: 1px solid gray;\n  border-radius: 3px;\n}\n.product-content-title {\n  font-weight: 600;\n  font-size: 16px;\n  color: var(--background-color);\n  text-transform: capitalize;\n}\n.product-content-sm {\n  font-size: 14px;\n  color: gray;\n}\n.product-content-right {\n  margin-left: auto;\n}\n.product-content-right ion-icon {\n  font-size: 15px;\n}\n.product-content-right button {\n  border: 1px solid var(--primary-color);\n  color: var(--primary-color);\n  padding: 2px 6px;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.product-content-sl {\n  display: flex;\n  gap: 10px;\n}\n.product-content-sl ion-icon {\n  font-size: 24px;\n  color: var(--primary-color);\n}\n.product-footer {\n  padding: 10px;\n}\n.product-footer button {\n  color: white;\n  background: var(--background-color);\n  width: 100%;\n  margin-left: auto;\n  padding: 12px;\n  font-size: 16px;\n  font-weight: 600;\n  border-radius: 5px;\n}\n.product-footer-left {\n  display: flex;\n  align-items: center;\n}\n.product-footer-left ion-icon {\n  font-size: 18px;\n}\n.product-footer-form {\n  position: absolute;\n  width: 50px;\n  height: 40px;\n  background: #616161;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n  color: white;\n}\n.product-footer-number {\n  border-radius: 100vw;\n  position: absolute;\n  top: -4px;\n  right: -7px;\n  width: 20px;\n  height: 20px;\n  background: #0663a9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid white;\n  font-size: 10px;\n}\n.border-b {\n  border-bottom: 1px solid #e7e7e7;\n}\ntable {\n  width: 100%;\n  margin-bottom: 10px;\n}\ntd {\n  padding: 8px 0px;\n}\ntd span {\n  color: var(--background-color);\n  font-weight: 600;\n}\ninput[type=text],\ninput[type=number], input[type=date] {\n  width: 72px;\n  border: 1px solid #a7e9f7;\n  text-align: center;\n  background: #a7e9f7;\n  border-radius: 5px;\n  padding: 4px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FwaGV0aGFuLWluZGV4L3NhcGhldGhhbi1pbmRleC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUk7RUFDSSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSwyQ0FBQTtBQUxSO0FBU0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFQUjtBQVNRO0VBRUksYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtBQVJaO0FBWUk7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7QUFWUjtBQVlRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBVlo7QUFhUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUFYWjtBQWVJO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQWJSO0FBZ0JJO0VBQ0ksYUFBQTtFQUNBLGFBQUE7QUFkUjtBQWlCSTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQWZSO0FBa0JJO0VBQ0ksNENBQUE7RUFDQSxpQ0FBQTtBQWhCUjtBQW1CSTtFQUNJLFdBQUE7QUFqQlI7QUFtQlE7RUFDSSxhQUFBO0VBRUEsdUJBQUE7QUFsQlo7QUFxQlE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBbkJaO0FBMkJZO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtBQXpCaEI7QUE4QlE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0FBNUJaO0FBK0JRO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUE3Qlo7QUFnQ1E7RUFDSSxpQkFBQTtBQTlCWjtBQW9DWTtFQUNJLGVBQUE7QUFsQ2hCO0FBcUNZO0VBQ0ksc0NBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBbkNoQjtBQXVDUTtFQUNJLGFBQUE7RUFDQSxTQUFBO0FBckNaO0FBdUNZO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0FBckNoQjtBQTRDSTtFQUNJLGFBQUE7QUExQ1I7QUE0Q1E7RUFDSSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUExQ1o7QUE2Q1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUEzQ1o7QUE4Q1k7RUFDSSxlQUFBO0FBNUNoQjtBQWlEUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBL0NaO0FBbURRO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBakRaO0FBdURBO0VBQ0ksZ0NBQUE7QUFwREo7QUF1REE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUFwREo7QUF1REE7RUFDSSxnQkFBQTtBQXBESjtBQXVEQTtFQUNJLDhCQUFBO0VBQ0EsZ0JBQUE7QUFwREo7QUF1REE7O0VBRUksV0FBQTtFQUNBLHlCQUFBO0VBRUEsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQXJESiIsImZpbGUiOiJzcmMvYXBwL3NhcGhldGhhbi1pbmRleC9zYXBoZXRoYW4taW5kZXgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3Qge1xyXG5cclxuICAgIC8vIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIC8vIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMTVweDtcclxuICAgIC8vIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHg7XHJcbiAgICAmLWhlYWRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgei1pbmRleDogOTtcclxuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggNHB4O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAmLWltZyB7XHJcbiAgICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgLy8gaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgJi1zZWFyY2gge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyBcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuXHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHRvcDogOHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi10aXRsZSB7XHJcbiAgICAgICAgcGFkZGluZzogMTRweCAxMHB4IDA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWdyYXktZGFyayk7XHJcbiAgICB9XHJcblxyXG4gICAgJi1pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAmLXJlZCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcmVkLWRhcmspICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXJlZC1kYXJrKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgICYtY29udGVudCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICYtaXRlbSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIC8vIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi1sZWZ0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZ2FwOiA1cHg7XHJcblxyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAvL2NvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYtc20ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi1yaWdodCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweCA2cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGdhcDogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLXNsIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZ2FwOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgJi1mb290ZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLWxlZnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYtZm9ybSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzYxNjE2MTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgJi1udW1iZXIge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDB2dztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IC00cHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAtN3B4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDY2M2E5O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4uYm9yZGVyLWIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlN2U3ZTc7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxudGQge1xyXG4gICAgcGFkZGluZzogOHB4IDBweDtcclxufVxyXG5cclxudGQgc3BhbiB7XHJcbiAgICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuaW5wdXRbdHlwZT1cIm51bWJlclwiXSwgaW5wdXRbdHlwZT1cImRhdGVcIl17XHJcbiAgICB3aWR0aDogNzJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhN2U5Zjc7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYTdlOWY3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNHB4IDA7XHJcbn1cclxuXHJcbi8vIGlucHV0W3R5cGU9J2RhdGUnXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcclxuLy8gICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4vLyAgICAgYm90dG9tOiAwO1xyXG4vLyAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgICAgaGVpZ2h0OiBhdXRvO1xyXG4vLyAgICAgbGVmdDogMDtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHJpZ2h0OiAwO1xyXG4vLyAgICAgdG9wOiAwO1xyXG4vLyAgICAgd2lkdGg6IGF1dG87XHJcbi8vIH1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/saphethan-index/saphethan-index.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/saphethan-index/saphethan-index.page.ts ***!
  \*********************************************************/
/*! exports provided: SaphethanIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaphethanIndexPage", function() { return SaphethanIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_service_AlertService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/AlertService */ "./src/app/service/AlertService.ts");
/* harmony import */ var src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/loading.service */ "./src/app/service/loading.service.ts");
/* harmony import */ var src_app_service_toastService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/toastService */ "./src/app/service/toastService.ts");
/* harmony import */ var src_app_service_vattu_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/vattu.service */ "./src/app/service/vattu.service.ts");
/* harmony import */ var _vattu_vattu_create_vattu_create_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../vattu/vattu-create/vattu-create.page */ "./src/app/vattu/vattu-create/vattu-create.page.ts");








let SaphethanIndexPage = class SaphethanIndexPage {
    constructor(navController, actionSheetController, LoadingService, AlertService, modalController, ToastService, VattuService) {
        this.navController = navController;
        this.actionSheetController = actionSheetController;
        this.LoadingService = LoadingService;
        this.AlertService = AlertService;
        this.modalController = modalController;
        this.ToastService = ToastService;
        this.VattuService = VattuService;
        this.listData = [];
        this.listDataSearch = [];
        this.listVattu = [];
        this.page = '';
        this.listExist = [];
        this.timeout = '';
        this.sumThanhTien = 0;
        this.displayImg = false;
        this.keyword = '';
        this.pageInfo = {
            'page': 1,
            'pageSize': 20,
            'keyword': "",
        };
        this.makho = '';
        this.countIndex = -1;
        this.countVattu = 0;
        this.sendItem = {
            "officeid": 0
        };
        this.displayImg = JSON.parse(localStorage.getItem('displayImg') || 'false');
        this.sendItem.officeid = Number(localStorage.getItem('officeId'));
        this.getVattu();
    }
    ionViewDidEnter() { }
    ngOnInit() { }
    getVattu() {
        this.LoadingService.setValue(true);
        this.VattuService.getVatTuSapHetHan(this.sendItem).subscribe((response) => {
            this.listVattu = response;
            this.countVattu = response.length;
            this.listDataSearch = response;
            this.getSandVT();
            this.LoadingService.setValue(false);
        }, (error) => {
            this.LoadingService.setValue(false);
            console.log('error', error);
        });
    }
    getSandVT() {
        var listItem = this.listVattu.slice(0, this.pageInfo.page * this.pageInfo.pageSize);
        this.listData = listItem;
        for (let i = 0; i <= this.listData.length - 1; i++) {
            let item = this.listData[i];
            if (item.Img != undefined) {
                if (item.Img.includes("http")) {
                    // console.log("Tìm thấy rồi")
                }
                else {
                    item.Img = "https://" + localStorage.getItem("unit").toString() + ".tvsgpp.net" + item.Img;
                    // console.log("101", item.Img);
                }
            }
        }
    }
    ;
    onSearch(e) {
        var arrPlan = [];
        this.pageInfo.keyword = e.target.value;
        this.pageInfo.page = 1;
        if (!this.pageInfo.keyword) {
            this.deleteSearch();
        }
        else {
            clearTimeout(this.timeout);
            var $this = this;
            this.timeout = setTimeout(function () {
                $this.listDataSearch.find((o, i) => {
                    if (o.TenVT && o.TenVT.toLowerCase().includes($this.pageInfo.keyword.toLowerCase()) == true) {
                        arrPlan.push($this.listDataSearch[i]);
                    }
                });
                $this.countVattu = arrPlan.length;
                $this.listData = arrPlan;
            }, 1000);
        }
    }
    getItem(item) {
        this.listData.find((o, i) => {
            if (o.VatTuID == item.VatTuID) {
                this.listData[i]['checkHover'] = true;
            }
            else {
                this.listData[i]['checkHover'] = false;
            }
        });
    }
    openModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _vattu_vattu_create_vattu_create_page__WEBPACK_IMPORTED_MODULE_7__["VattuCreatePage"],
                // cssClass: 'halfModal',
                componentProps: {
                    "isCreate": 'true',
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned.data) {
                    this.getVattu();
                    // this.getUnit('closeModal');
                }
            });
            return yield modal.present();
        });
    }
    deleteSearch() {
        this.pageInfo.keyword = '';
        this.pageInfo.page = 1;
        this.getSandVT();
    }
    doInfinite(event) {
        this.pageInfo.page++;
        setTimeout(() => {
            event.target.complete();
            this.getSandVT();
        }, 500);
    }
    closeModal() {
        this.navController.navigateBack(['tabs/tab3']);
    }
};
SaphethanIndexPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: src_app_service_AlertService__WEBPACK_IMPORTED_MODULE_3__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: src_app_service_vattu_service__WEBPACK_IMPORTED_MODULE_6__["VattuService"] }
];
SaphethanIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-saphethan-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./saphethan-index.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/saphethan-index/saphethan-index.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./saphethan-index.page.scss */ "./src/app/saphethan-index/saphethan-index.page.scss")).default]
    })
], SaphethanIndexPage);



/***/ })

}]);
//# sourceMappingURL=saphethan-index-saphethan-index-module-es2015.js.map