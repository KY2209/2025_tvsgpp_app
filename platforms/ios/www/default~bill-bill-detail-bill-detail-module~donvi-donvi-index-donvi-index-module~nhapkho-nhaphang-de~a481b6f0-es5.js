(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~bill-bill-detail-bill-detail-module~donvi-donvi-index-donvi-index-module~nhapkho-nhaphang-de~a481b6f0"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/donvi/donvi-index/donvi-index.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donvi/donvi-index/donvi-index.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDonviDonviIndexDonviIndexPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons (click)=\"closeModal()\" slot=\"start\">\r\n      <ion-item lines=\"none\"\r\n        style=\"--padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"font-size: 25px;\"></ion-icon>\r\n      </ion-item>\r\n    </ion-buttons>\r\n\r\n    <ion-title style=\"text-align: center!important;\">\r\n      {{page == 'nhapmua' ? 'Đơn vị' : 'Khách hàng'}} \r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-item lines=\"none\"\r\n        style=\"--padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <!-- <ion-icon name=\"close-circle-outline\" style=\"color: #0764ae; font-size: 25px;\"> -->\r\n          <!-- <ion-icon name=\"add-outline\" style=\"font-size: 26px;\"></ion-icon> -->\r\n      </ion-item>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <div class=\"product-header\">\r\n    <div class=\"product-search\">\r\n      <input (keyup)=\"onSearch($event)\" [(ngModel)]=\"keyword\" type=\"text\"\r\n        placeholder=\"Tìm kiếm tên đơn vị ...\" style=\"text-align: left; background: white;\">\r\n      <!-- <ion-icon class=\"search-icon\" *ngIf=\"keyword == ''\" name=\"search-outline\"></ion-icon> -->\r\n      <ion-icon (click)=\"deleteSearch()\" *ngIf=\"keyword != ''\" class=\"search-icon2\"\r\n        name=\"close-circle-outline\"></ion-icon>\r\n    </div>\r\n    <div class=\"product-add\">\r\n        <div class=\"synthetic-item2\">\r\n          <div class=\"synthetic-item-left\">\r\n            {{countDV | number}} {{page == 'nhapmua' ? 'đơn vị' : 'khách hàng'}} \r\n          </div>\r\n          <div (click)=\"addItem('true')\" class=\"synthetic-item2-right\">\r\n            <ion-icon name=\"add-circle-outline\"></ion-icon>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container\">\r\n    \r\n\r\n    <div class=\"container-list\">\r\n      <div  *ngFor=\"let item of listData\" class=\"container-item\" [class]=\"item.check == true ? 'bg-hover' : ''\">\r\n        \r\n        <div (click)=\"chooseItem(item)\">\r\n          <p class=\"container-title\">{{item.TenDV}}</p>\r\n          <p class=\"container-desc\">{{item.DienThoai}}</p>\r\n        </div>\r\n        <div (click)=\"handleItem(item)\" class=\"container-icon\">\r\n          <ion-icon name=\"ellipsis-horizontal-outline\"></ion-icon>\r\n          <!-- <ion-icon name=\"file-tray-full-outline\"></ion-icon> -->\r\n        </div>\r\n        <!-- <ion-icon (click)=\"chooseItem(item)\" class=\"container-more\" name=\"alert-circle-outline\"></ion-icon> -->\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/donvi/donvi-index/donvi-index.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/donvi/donvi-index/donvi-index.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppDonviDonviIndexDonviIndexPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\n  padding-right: 0 !important;\n  padding-left: 0 !important;\n}\n.container p {\n  margin: 10px 0;\n}\n.container-search {\n  width: 100%;\n  position: sticky;\n  top: 0;\n  background: white;\n  z-index: 9;\n  border-top: 1px solid #ededed;\n}\n.container-search input {\n  width: 100%;\n  padding: 0 10px 10px 10px;\n  border-radius: 10px;\n  background: var(--primary-color-light);\n  border: 1px solid white;\n  font-size: 16px;\n}\n.container-search .search-icon {\n  position: absolute;\n  top: 31%;\n  left: 20px;\n  font-size: 23px;\n  color: var(--primary-color);\n}\n.container-search .search-icon2 {\n  position: absolute;\n  top: 31%;\n  right: 20px;\n  font-size: 23px;\n  color: var(--primary-color);\n}\n.container-item {\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n  align-items: center;\n  padding: 0px 10px;\n  border-top: 1px solid #c0c0c0;\n}\n.container-item:hover {\n  background: #e7e7e7;\n}\n.container-more {\n  margin-left: auto;\n  font-size: 28px;\n  color: var(--blue-darker);\n}\n.container-icon {\n  height: 20px;\n  width: 40px;\n  border-radius: 5px;\n  background-color: var(--primary-color-light);\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  margin-left: auto;\n}\n.container-icon ion-icon {\n  font-size: 23px;\n  color: var(--blue-light);\n}\n.container-title {\n  font-weight: 600;\n  font-size: 16px;\n  text-transform: capitalize;\n  color: var(--text-blue);\n}\n.container-desc {\n  color: var(--text-blue);\n  text-transform: capitalize;\n}\n.product-header {\n  position: sticky;\n  top: 0;\n  background: white;\n  z-index: 9;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n}\n.product-search {\n  padding: 0 10px 10px 10px;\n  background: var(--background-color);\n  position: relative;\n}\n.product-search input {\n  width: 100%;\n  padding: 8px;\n  border-radius: 5px;\n  border: 1px solid gray;\n}\n.product-search ion-icon {\n  position: absolute;\n  right: 20px;\n  top: 8px;\n  font-size: 22px;\n  color: var(--background-color);\n}\ninput[type=text]:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9udmkvZG9udmktaW5kZXgvZG9udmktaW5kZXgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7RUFDQSwwQkFBQTtBQUNKO0FBQUk7RUFDSSxjQUFBO0FBRVI7QUFDSTtFQUVJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtBQUFSO0FBR1E7RUFDSSxXQUFBO0VBRUEseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNDQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBRlo7QUFLUTtFQUNJLGtCQUFBO0VBQ0ksUUFBQTtFQUNKLFVBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUFIWjtBQU1RO0VBQ0ksa0JBQUE7RUFDSSxRQUFBO0VBQ0osV0FBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQUpaO0FBWUk7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFHQSw2QkFBQTtBQVpSO0FBZUk7RUFDSSxtQkFBQTtBQWJSO0FBZ0JJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFkUjtBQWtCSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFoQlI7QUFrQlE7RUFDSSxlQUFBO0VBQ0Esd0JBQUE7QUFoQlo7QUFvQkk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0FBbEJSO0FBc0JJO0VBRUksdUJBQUE7RUFDQSwwQkFBQTtBQXJCUjtBQTJCSTtFQUNJLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLDJDQUFBO0FBeEJSO0FBNEJJO0VBRUkseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0FBM0JSO0FBNkJRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBM0JaO0FBOEJRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQTVCWjtBQWlDQTtFQUNJLGFBQUE7QUE5QkoiLCJmaWxlIjoic3JjL2FwcC9kb252aS9kb252aS1pbmRleC9kb252aS1pbmRleC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgcHtcclxuICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIH1cclxuXHJcbiAgICAmLXNlYXJjaCB7XHJcbiAgICAgICAgLy8gcGFkZGluZzogMTBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWRlZGVkO1xyXG4gICAgICAgIC8vIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XHJcblxyXG4gICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgLy8gcGFkZGluZzogMTBweCAxNHB4IDEwcHggNDZweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4IDEwcHggMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5zZWFyY2gtaWNvbntcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAzMSU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNlYXJjaC1pY29uMntcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAzMSU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gJi1saXN0e1xyXG4gICAgLy8gICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgJi1pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgICAgIC8vIGJveC1zaGFkb3c6IDBweCAycHggMTBweCByZ2JhKDIwLCA4MSwgMTM3LCAwLjE2KTtcclxuICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjMGMwYzA7XHJcbiAgICB9XHJcblxyXG4gICAgJi1pdGVtOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTdlN2U3O1xyXG4gICAgfVxyXG5cclxuICAgICYtbW9yZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibHVlLWRhcmtlcik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICYtaWNvbiB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KTtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcblxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYmx1ZS1saWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsdWUpOyAgICAgXHJcblxyXG4gICAgfVxyXG5cclxuICAgICYtZGVzYyB7XHJcbiAgICAgICAgLy8gY29sb3I6IGdyYXk7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmx1ZSk7ICBcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTpjYXBpdGFsaXplO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLnByb2R1Y3Qge1xyXG4gICAgJi1oZWFkZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgJi1zZWFyY2gge1xyXG4gICAgICAgIC8vIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4IDEwcHggMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICB0b3A6IDhweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/donvi/donvi-index/donvi-index.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/donvi/donvi-index/donvi-index.page.ts ***!
      \*******************************************************/

    /*! exports provided: DonviIndexPage */

    /***/
    function srcAppDonviDonviIndexDonviIndexPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonviIndexPage", function () {
        return DonviIndexPage;
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


      var src_app_service_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/service/global.service */
      "./src/app/service/global.service.ts");
      /* harmony import */


      var src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/service/loading.service */
      "./src/app/service/loading.service.ts");
      /* harmony import */


      var src_app_service_unit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/service/unit.service */
      "./src/app/service/unit.service.ts");
      /* harmony import */


      var _donvi_create_donvi_create_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../donvi-create/donvi-create.page */
      "./src/app/donvi/donvi-create/donvi-create.page.ts");
      /* harmony import */


      var src_app_service_AlertService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/service/AlertService */
      "./src/app/service/AlertService.ts");
      /* harmony import */


      var src_app_service_toastService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/service/toastService */
      "./src/app/service/toastService.ts");

      var DonviIndexPage = /*#__PURE__*/function () {
        function DonviIndexPage(GlobalService, navParams, modalController, actionSheetController, LoadingService, AlertService, ToastService, UnitService) {
          _classCallCheck(this, DonviIndexPage);

          this.GlobalService = GlobalService;
          this.navParams = navParams;
          this.modalController = modalController;
          this.actionSheetController = actionSheetController;
          this.LoadingService = LoadingService;
          this.AlertService = AlertService;
          this.ToastService = ToastService;
          this.UnitService = UnitService;
          this.page = '';
          this.listData = [];
          this.listDataSearch = [];
          this.countDV = 0;
          this.timeout = '';
          this.keyword = '';
          this.listPhone = [];

          if (this.navParams.data.listUnit) {
            this.listData = this.navParams.data.listUnit;
            this.listDataSearch = this.navParams.data.listUnit;
          } else {
            this.getUnit();
          }
        }

        _createClass(DonviIndexPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getUnit",
          value: function getUnit(closeModal) {
            var _this = this;

            this.LoadingService.setValue(true);
            this.UnitService.getUnit().subscribe(function (response) {
              var arr = [];

              for (var i = 0; i < response.length; i++) {
                if (response[i].DienThoai) {
                  _this.listPhone.push(response[i].DienThoai);
                }

                if (_this.page == 'nhapmua' && response[i].LoaiDV == 'NCC') {
                  arr.push(response[i]);
                } else if (_this.page == 'xuatbanle' && response[i].LoaiDV == 'KH') {
                  arr.push(response[i]);
                }
              }

              _this.countDV = arr.length;
              _this.listData = arr;
              _this.listDataSearch = arr;
              _this.listDataAll = _this.listData; // console.log('arr', arr);

              _this.LoadingService.setValue(false);

              if (closeModal) {
                _this.GlobalService.closeModalSenData(_this.listData[0]);
              }
            }, function (error) {
              setTimeout(function () {
                console.log('error', error);

                _this.LoadingService.setValue(false);
              }, 1000);
            });
          }
        }, {
          key: "onSearch",
          value: function onSearch(e) {
            var _this2 = this;

            var arrPlan = [];
            this.keyword = e.target.value;
            var $this = this;

            if (this.keyword == '') {
              this.listData = this.listDataAll;
              this.listDataSearch = this.listData;
              arrPlan = this.listDataSearch;
              $this.countDV = arrPlan.length;
            } else {
              $this.listDataSearch.find(function (o, i) {
                if (o.TenDV != null) {
                  if (o.TenDV.toLowerCase().includes($this.keyword.toLowerCase()) == true) {
                    arrPlan.push($this.listDataSearch[i]);
                  } else {
                    $this.listData = _this2.listDataAll;
                  }
                }

                if (o.DienThoai != null) {
                  if (o.DienThoai.includes($this.keyword) == true) {
                    arrPlan.push($this.listDataSearch[i]);
                  } else {
                    $this.listData = _this2.listDataAll;
                  }
                }
              });
              $this.countDV = arrPlan.length;
              $this.listData = arrPlan;
            }
          }
        }, {
          key: "getItem",
          value: function getItem(item) {
            var _this3 = this;

            this.listData.find(function (o, i) {
              if (o.DonViID == item.DonViID) {
                _this3.listData[i]['check'] = true;
              } else {
                _this3.listData[i]['check'] = false;
              }
            });
          }
        }, {
          key: "deleteSearch",
          value: function deleteSearch() {
            this.keyword = '';
            this.getUnit();
          }
        }, {
          key: "addItem",
          value: function addItem(isCreate, DonViItem) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this4 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log('this.listPhone', this.listPhone);
                      _context.next = 3;
                      return this.modalController.create({
                        component: _donvi_create_donvi_create_page__WEBPACK_IMPORTED_MODULE_6__["DonviCreatePage"],
                        cssClass: 'halfModal',
                        componentProps: {
                          "isCreate": isCreate,
                          "DonViItem": DonViItem,
                          "page": this.page,
                          "listPhone": this.listPhone
                        }
                      });

                    case 3:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        if (dataReturned.data) {
                          _this4.getUnit('closeModal');
                        }
                      });
                      _context.next = 7;
                      return modal.present();

                    case 7:
                      return _context.abrupt("return", _context.sent);

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "deleteUnit",
          value: function deleteUnit(id) {
            var _this5 = this;

            this.AlertService.presentAlert("X\xE1c nh\u1EADn x\xF3a \u0111\u01A1n v\u1ECB?").then(function (res) {
              if (res == 'true') {
                _this5.LoadingService.setValue(true);

                _this5.UnitService.deleteUnit(id).subscribe(function (response) {
                  var res = JSON.parse(response._body); // if (res.code == 200) {

                  _this5.ToastService.successToast('Xóa đơn vị thành công!');

                  _this5.getUnit(); // } else {
                  //   this.ToastService.errorToast(res.message);
                  // }


                  _this5.LoadingService.setValue(false);
                }, function (error) {
                  setTimeout(function () {
                    _this5.LoadingService.setValue(false);

                    console.log('error', error);
                  }, 1000);
                });
              }
            });
          }
        }, {
          key: "handleItem",
          value: function handleItem(item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this6 = this;

              var actionSheet, _yield$actionSheet$on, role;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.actionSheetController.create({
                        cssClass: 'left-align-buttons',
                        buttons: [{
                          text: 'Sửa đơn vị',
                          icon: 'create-outline',
                          handler: function handler() {
                            _this6.addItem('false', item);
                          }
                        }, {
                          text: 'Xóa đơn vị',
                          cssClass: 'buttonSheetDelete',
                          icon: 'trash',
                          handler: function handler() {
                            _this6.deleteUnit(item.DonViID);
                          }
                        }]
                      });

                    case 2:
                      actionSheet = _context2.sent;
                      _context2.next = 5;
                      return actionSheet.present();

                    case 5:
                      _context2.next = 7;
                      return actionSheet.onDidDismiss();

                    case 7:
                      _yield$actionSheet$on = _context2.sent;
                      role = _yield$actionSheet$on.role;

                    case 9:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "chooseItem",
          value: function chooseItem(item) {
            this.GlobalService.closeModalSenData(item);
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.GlobalService.closeModal();
          }
        }]);

        return DonviIndexPage;
      }();

      DonviIndexPage.ctorParameters = function () {
        return [{
          type: src_app_service_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
        }, {
          type: src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
        }, {
          type: src_app_service_AlertService__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
        }, {
          type: src_app_service_toastService__WEBPACK_IMPORTED_MODULE_8__["ToastService"]
        }, {
          type: src_app_service_unit_service__WEBPACK_IMPORTED_MODULE_5__["UnitService"]
        }];
      };

      DonviIndexPage.propDecorators = {
        page: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      DonviIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-donvi-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./donvi-index.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/donvi/donvi-index/donvi-index.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./donvi-index.page.scss */
        "./src/app/donvi/donvi-index/donvi-index.page.scss"))["default"]]
      })], DonviIndexPage);
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var alert, _yield$alert$onDidDis, role;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
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
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                      _context3.next = 7;
                      return alert.onDidDismiss();

                    case 7:
                      _yield$alert$onDidDis = _context3.sent;
                      role = _yield$alert$onDidDis.role;
                      return _context3.abrupt("return", "".concat(role));

                    case 10:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "presentAlert2",
          value: function presentAlert2(question, print) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var arr, alert, _yield$alert$onDidDis2, role;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
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

                      _context4.next = 4;
                      return this.alertController.create({
                        header: question,
                        cssClass: 'alertThree',
                        buttons: arr
                      });

                    case 4:
                      alert = _context4.sent;
                      _context4.next = 7;
                      return alert.present();

                    case 7:
                      _context4.next = 9;
                      return alert.onDidDismiss();

                    case 9:
                      _yield$alert$onDidDis2 = _context4.sent;
                      role = _yield$alert$onDidDis2.role;
                      return _context4.abrupt("return", "".concat(role));

                    case 12:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
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
    }
  }]);
})();
//# sourceMappingURL=default~bill-bill-detail-bill-detail-module~donvi-donvi-index-donvi-index-module~nhapkho-nhaphang-de~a481b6f0-es5.js.map