(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~bill-bill-detail-bill-detail-module~kho-kho-index-kho-index-module~nhapkho-nhaphang-detail-n~f03d13ee"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/kho/kho-index/kho-index.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kho/kho-index/kho-index.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons (click)=\"closeModal()\" slot=\"start\">\r\n      <ion-item lines=\"none\"\r\n        style=\"--padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"font-size: 25px;\"></ion-icon>\r\n      </ion-item>\r\n    </ion-buttons>\r\n\r\n    <ion-title style=\"text-align: center!important;\">\r\n      Kho\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\" >\r\n      <ion-item lines=\"none\"\r\n        style=\"--padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <!-- <ion-icon name=\"close-circle-outline\" style=\"color: #0764ae; font-size: 25px;\"> -->\r\n          <!-- <ion-icon name=\"add-outline\" style=\"font-size: 26px;\"></ion-icon> -->\r\n      </ion-item>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <div class=\"product-header\">\r\n    <div class=\"product-search\">\r\n      <input (keyup)=\"onSearch($event)\" [(ngModel)]=\"keyword\" type=\"text\"\r\n        placeholder=\"Tìm kiếm tên kho ...\" style=\"text-align: left; background: white;\">\r\n      <!-- <ion-icon class=\"search-icon\" *ngIf=\"keyword == ''\" name=\"search-outline\"></ion-icon> -->\r\n      <ion-icon (click)=\"deleteSearch()\" *ngIf=\"keyword != ''\" class=\"search-icon2\"\r\n        name=\"close-circle-outline\"></ion-icon>\r\n    </div>\r\n    <div class=\"product-add\">\r\n        <div class=\"synthetic-item2\">\r\n          <div class=\"synthetic-item-left\">\r\n            {{countKho | number}} kho hàng\r\n          </div>\r\n          <div (click)=\"addItem('true')\" class=\"synthetic-item2-right\">\r\n            <ion-icon name=\"add-circle-outline\"></ion-icon>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container\">\r\n    \r\n\r\n    <div class=\"container-list\">\r\n      <div  *ngFor=\"let item of listData\" class=\"container-item\" [class]=\"item.check == true ? 'bg-hover' : ''\">\r\n        <!-- <div class=\"container-icon\">\r\n          <ion-icon name=\"pricetags-outline\"></ion-icon>\r\n        </div> -->\r\n        <div (click)=\"chooseItem(item)\">\r\n          <p class=\"container-title\">{{item.TenKho}}</p>\r\n          <p class=\"container-desc\">{{item.DiaChi}}</p>\r\n        </div>\r\n        <div (click)=\"handleItem(item)\" class=\"container-icon\">\r\n          <ion-icon name=\"ellipsis-horizontal-outline\"></ion-icon>\r\n          <!-- <ion-icon name=\"file-tray-full-outline\"></ion-icon> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/kho/kho-index/kho-index.page.scss":
/*!***************************************************!*\
  !*** ./src/app/kho/kho-index/kho-index.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  padding-right: 0 !important;\n  padding-left: 0 !important;\n}\n.container p {\n  margin: 10px 0;\n}\n.container-search {\n  padding: 10px;\n  width: 100%;\n  position: sticky;\n  top: 0;\n  background: white;\n  z-index: 9;\n  border-top: 1px solid #ededed;\n}\n.container-search input {\n  width: 100%;\n  padding: 10px 14px 10px 46px;\n  border-radius: 10px;\n  background: var(--primary-color-light);\n  border: 1px solid white;\n  font-size: 16px;\n}\n.container-search .search-icon {\n  position: absolute;\n  top: 31%;\n  left: 20px;\n  font-size: 23px;\n  color: var(--primary-color);\n}\n.container-search .search-icon2 {\n  position: absolute;\n  top: 31%;\n  right: 20px;\n  font-size: 23px;\n  color: var(--primary-color);\n}\n.container-item {\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n  align-items: center;\n  padding: 8px 12px;\n  border-top: 1px solid #c0c0c0;\n}\n.container-item:hover {\n  background: #e7e7e7;\n}\n.container-more {\n  margin-left: auto;\n  font-size: 28px;\n  color: var(--blue-darker);\n}\n.container-icon {\n  height: 20px;\n  width: 40px;\n  border-radius: 5px;\n  background-color: var(--primary-color-light);\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  margin-left: auto;\n}\n.container-icon ion-icon {\n  font-size: 23px;\n  color: var(--blue-light);\n}\n.container-title {\n  font-weight: 600;\n  font-size: 16px;\n  color: var(--text-blue);\n}\n.container-desc {\n  color: var(--text-blue);\n  text-transform: capitalize;\n}\n.product-header {\n  position: sticky;\n  top: 0;\n  background: white;\n  z-index: 9;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n}\n.product-search {\n  padding: 0 10px 10px 10px;\n  background: var(--background-color);\n  position: relative;\n}\n.product-search input {\n  width: 100%;\n  padding: 8px;\n  border-radius: 5px;\n  border: 1px solid gray;\n}\n.product-search ion-icon {\n  position: absolute;\n  right: 20px;\n  top: 8px;\n  font-size: 22px;\n  color: var(--background-color);\n}\ninput[type=text]:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2hvL2toby1pbmRleC9raG8taW5kZXgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7RUFDQSwwQkFBQTtBQUNKO0FBQ0k7RUFDSSxjQUFBO0FBQ1I7QUFFSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7QUFBUjtBQUdRO0VBQ0ksV0FBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQURaO0FBSVE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FBRlo7QUFLUTtFQUNJLGtCQUFBO0VBQ0ksUUFBQTtFQUNKLFdBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUFIWjtBQVdJO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBR0EsNkJBQUE7QUFYUjtBQWNJO0VBQ0ksbUJBQUE7QUFaUjtBQWVJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFiUjtBQWlCSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFmUjtBQWlCUTtFQUNJLGVBQUE7RUFDQSx3QkFBQTtBQWZaO0FBbUJJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFqQlI7QUFvQkk7RUFFSSx1QkFBQTtFQUVBLDBCQUFBO0FBcEJSO0FBeUJJO0VBQ0ksZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsMkNBQUE7QUF0QlI7QUEwQkk7RUFDSSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7QUF4QlI7QUEwQlE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUF4Qlo7QUEyQlE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FBekJaO0FBOEJBO0VBQ0ksYUFBQTtBQTNCSiIsImZpbGUiOiJzcmMvYXBwL2toby9raG8taW5kZXgva2hvLWluZGV4LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgcHtcclxuICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIH1cclxuXHJcbiAgICAmLXNlYXJjaCB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWRlZGVkO1xyXG4gICAgICAgIC8vIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XHJcblxyXG4gICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNHB4IDEwcHggNDZweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5zZWFyY2gtaWNvbntcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDMxJTtcclxuICAgICAgICAgICAgbGVmdDogMjBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VhcmNoLWljb24ye1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDMxJTtcclxuICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAmLWxpc3R7XHJcbiAgICAvLyAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIC8vIH1cclxuXHJcbiAgICAmLWl0ZW0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICAgICAgLy8gYm94LXNoYWRvdzogMHB4IDJweCAxMHB4IHJnYmEoMjAsIDgxLCAxMzcsIDAuMTYpO1xyXG4gICAgICAgIC8vIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjMGMwYzA7XHJcbiAgICB9XHJcblxyXG4gICAgJi1pdGVtOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTdlN2U3O1xyXG4gICAgfVxyXG5cclxuICAgICYtbW9yZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibHVlLWRhcmtlcik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICYtaWNvbiB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcblxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYmx1ZS1saWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgICYtZGVzYyB7XHJcbiAgICAgICAgLy8gY29sb3I6IGdyYXk7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmx1ZSk7XHJcblxyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOmNhcGl0YWxpemU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcm9kdWN0IHtcclxuICAgICYtaGVhZGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICYtc2VhcmNoIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHggMTBweCAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHRvcDogOHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3Vze1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/kho/kho-index/kho-index.page.ts":
/*!*************************************************!*\
  !*** ./src/app/kho/kho-index/kho-index.page.ts ***!
  \*************************************************/
/*! exports provided: KhoIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhoIndexPage", function() { return KhoIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_service_AlertService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/AlertService */ "./src/app/service/AlertService.ts");
/* harmony import */ var src_app_service_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/global.service */ "./src/app/service/global.service.ts");
/* harmony import */ var src_app_service_kho_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/kho.service */ "./src/app/service/kho.service.ts");
/* harmony import */ var src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/loading.service */ "./src/app/service/loading.service.ts");
/* harmony import */ var src_app_service_toastService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/toastService */ "./src/app/service/toastService.ts");
/* harmony import */ var _kho_create_kho_create_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../kho-create/kho-create.page */ "./src/app/kho/kho-create/kho-create.page.ts");









let KhoIndexPage = class KhoIndexPage {
    constructor(GlobalService, navParams, LoadingService, KhoService, actionSheetController, modalController, AlertService, ToastService) {
        this.GlobalService = GlobalService;
        this.navParams = navParams;
        this.LoadingService = LoadingService;
        this.KhoService = KhoService;
        this.actionSheetController = actionSheetController;
        this.modalController = modalController;
        this.AlertService = AlertService;
        this.ToastService = ToastService;
        this.listData = [];
        this.listDataSearch = [];
        this.timeout = '';
        this.keyword = '';
        this.countKho = 0;
        if (this.navParams.data.listKho) {
            this.listData = this.navParams.data.listKho;
            this.listDataSearch = this.navParams.data.listKho;
        }
        else {
            this.getKho();
        }
    }
    ngOnInit() {
    }
    getKho() {
        this.LoadingService.setValue(true);
        this.KhoService.getKho().subscribe((response) => {
            this.listData = response;
            this.countKho = response.length;
            this.listDataSearch = response;
            this.LoadingService.setValue(false);
        }, (error) => {
            setTimeout(() => {
                console.log('error', error);
            }, 1000);
        });
    }
    onSearch(e) {
        var arrPlan = [];
        this.keyword = e.target.value;
        if (!this.keyword) {
            arrPlan = this.listDataSearch;
        }
        else {
            clearTimeout(this.timeout);
            var $this = this;
            this.timeout = setTimeout(function () {
                $this.listDataSearch.find((o, i) => {
                    if (o.TenKho && o.TenKho.toLowerCase().includes($this.keyword.toLowerCase()) == true) {
                        arrPlan.push($this.listDataSearch[i]);
                    }
                });
                $this.countKho = arrPlan.length;
                $this.listData = arrPlan;
            }, 1000);
        }
    }
    getItem(item) {
        this.listData.find((o, i) => {
            if (o.KhoID == item.KhoID) {
                this.listData[i]['check'] = true;
            }
            else {
                this.listData[i]['check'] = false;
            }
        });
    }
    handleItem(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                cssClass: 'left-align-buttons',
                buttons: [
                    {
                        text: 'Sửa kho',
                        icon: 'create-outline',
                        handler: () => {
                            this.addItem('false', item);
                        }
                    },
                    {
                        text: 'Xóa kho',
                        cssClass: 'buttonSheetDelete',
                        icon: 'trash',
                        handler: () => {
                            this.deleteUnit(item.KhoID);
                        },
                    }
                ]
            });
            yield actionSheet.present();
            const { role } = yield actionSheet.onDidDismiss();
        });
    }
    addItem(isCreate, KhoItem) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('isCreate', isCreate);
            const modal = yield this.modalController.create({
                component: _kho_create_kho_create_page__WEBPACK_IMPORTED_MODULE_8__["KhoCreatePage"],
                cssClass: 'halfModal2',
                componentProps: {
                    "isCreate": isCreate,
                    "KhoItem": KhoItem,
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                console.log(dataReturned);
                // if (dataReturned.data) {
                this.getKho();
                // }
            });
            return yield modal.present();
        });
    }
    deleteUnit(id) {
        this.AlertService.presentAlert(`Xác nhận xóa kho?`).then(res => {
            if (res == 'true') {
                this.LoadingService.setValue(true);
                this.KhoService.deleteKho(id).subscribe((response) => {
                    var res = JSON.parse(response._body);
                    // if (res.code == 200) {
                    this.ToastService.successToast('Xóa kho thành công!');
                    this.getKho();
                    // } else {
                    //   this.ToastService.errorToast(res.message);
                    // }
                    this.LoadingService.setValue(false);
                }, (error) => {
                    setTimeout(() => {
                        console.log('error', error);
                    }, 1000);
                });
            }
        });
    }
    deleteSearch() {
        this.keyword = '';
        this.getKho();
    }
    chooseItem(item) {
        this.GlobalService.closeModalSenData(item);
    }
    closeModal() {
        this.GlobalService.closeModal();
    }
};
KhoIndexPage.ctorParameters = () => [
    { type: src_app_service_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: src_app_service_kho_service__WEBPACK_IMPORTED_MODULE_5__["KhoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_service_AlertService__WEBPACK_IMPORTED_MODULE_3__["AlertService"] },
    { type: src_app_service_toastService__WEBPACK_IMPORTED_MODULE_7__["ToastService"] }
];
KhoIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-kho-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./kho-index.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/kho/kho-index/kho-index.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./kho-index.page.scss */ "./src/app/kho/kho-index/kho-index.page.scss")).default]
    })
], KhoIndexPage);



/***/ })

}]);
//# sourceMappingURL=default~bill-bill-detail-bill-detail-module~kho-kho-index-kho-index-module~nhapkho-nhaphang-detail-n~f03d13ee-es2015.js.map