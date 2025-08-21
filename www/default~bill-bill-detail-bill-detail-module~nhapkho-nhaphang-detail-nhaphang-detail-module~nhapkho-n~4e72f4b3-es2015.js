(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~bill-bill-detail-bill-detail-module~nhapkho-nhaphang-detail-nhaphang-detail-module~nhapkho-n~4e72f4b3"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/donvitinh/dvt/dvt.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donvitinh/dvt/dvt.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class=\"dvt\">\r\n    <table>\r\n      <thead>\r\n        <tr>\r\n          <th class=\"text-left\">Đơn vị tính</th>\r\n          <th class=\"text-right\">Đơn giá</th>\r\n          <th class=\"text-right\">Quy đổi</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of listDVT\" [class.bg-hover]=\"item.DVT == DVT\" (click)=\"handleDVT(item)\">\r\n          <td class=\"text-left\">{{item.DVT}}</td>\r\n          <td *ngIf=\"InOutType=='N'\" class=\"text-right\">{{item.GiaMua | number}}</td>\r\n          <td *ngIf=\"InOutType!='N'\" class=\"text-right\">{{item.GiaBanLe | number}}</td>\r\n          <td class=\"text-right\">{{item.SoLuongQuyDoi}}</td>\r\n        </tr>\r\n      </tbody>\r\n\r\n    </table>\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vattu/vattu-index/vattu-index.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vattu/vattu-index/vattu-index.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons (click)=\"closeModal()\" slot=\"start\">\r\n      <ion-item lines=\"none\"\r\n        style=\"--padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"font-size: 25px;\"></ion-icon>\r\n      </ion-item>\r\n    </ion-buttons>\r\n\r\n    <ion-title style=\"font-weight: 600; text-align: center;\">\r\n      Vật tư\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-item lines=\"none\"\r\n        style=\" --padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <!-- <ion-icon name=\"duplicate-outline\"></ion-icon> -->\r\n      </ion-item>\r\n\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <div class=\"product-header\">\r\n    <div class=\"product-search\">\r\n      <input (keyup)=\"onSearch($event)\" [(ngModel)]=\"pageInfo.keyword\" type=\"text\"\r\n        placeholder=\"Tìm kiếm tên hàng hóa ...\" style=\"text-align: left; background: white;\">\r\n      <!-- <ion-icon class=\"search-icon\" *ngIf=\"pageInfo.keyword == ''\" name=\"search-outline\"></ion-icon> -->\r\n      <ion-icon (click)=\"deleteSearch()\" *ngIf=\"pageInfo.keyword != ''\" class=\"search-icon2\"\r\n        name=\"close-circle-outline\"></ion-icon>\r\n    </div>\r\n    <!-- <div class=\"product-add\">\r\n        <div class=\"synthetic-item2\">\r\n          <div class=\"synthetic-item-left\">\r\n            {{countVattu | number}} mặt hàng\r\n          </div>\r\n          <div (click)=\"openModal()\" class=\"synthetic-item2-right\">\r\n            <ion-icon name=\"add-circle-outline\"></ion-icon>\r\n          </div>\r\n        </div> \r\n    </div> -->\r\n  </div>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n\r\n\r\n  <div class=\"product\">\r\n    <div (click)=\"getItem(item)\" *ngFor=\"let item of listData; index as i\" class=\"product-item border-b\"\r\n      [class]=\"item.checkHover == true ? 'bg-hover' : ''\">\r\n      <div *ngIf=\"displayImg\" class=\"product-img\">\r\n        <img *ngIf=\"!item.Img\" src=\"../../../assets/images/no-img.jpg\" alt=\"\">\r\n        <img *ngIf=\"item.Img\" [src]=\"item.Img\" alt=\"\">\r\n\r\n      </div>\r\n      <div class=\"product-content\">\r\n        <div class=\"product-content-item\">\r\n          <div class=\"product-content-left product-content-title\">\r\n            {{item.TenVT}}\r\n          </div>\r\n          <div class=\"product-content-right\">\r\n            <button *ngIf=\"!item.check\" (click)=\"handleAdd(true, i, item)\">\r\n              <ion-icon name=\"add-outline\"></ion-icon>\r\n              Thêm\r\n            </button>\r\n            <button *ngIf=\"item.check\" (click)=\"handleAdd(false, i, item)\" class=\"product-red\">\r\n              <ion-icon name=\"remove-outline\"></ion-icon> Hủy\r\n            </button>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"product-content-item mt-6\">\r\n          <div class=\"product-content-left\">\r\n            <span>ĐVT:</span>\r\n            <span (click)=\"handleDVT(item.MaVT, item.DVT, i)\">\r\n              {{item.DVT}}\r\n            </span>\r\n\r\n          </div>\r\n\r\n          <div class=\"product-content-right\">\r\n            <div class=\"product-content-left\">\r\n              <span>Lượng tồn:</span>\r\n              {{item.LuongTon}}\r\n\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"product-content-item mt-6\">\r\n          <div class=\"product-content-left\">\r\n            <span>Lô hàng:</span>\r\n            <!-- {{item.LoHang}} -->\r\n            <div *ngIf=\"!item.check || page =='xuatbanle'\">{{item.LoHang}}</div>\r\n\r\n            <input *ngIf=\"item.check && page == 'nhapmua'\" [style.width]=\"displayImg ? '75px' : '106px'\"\r\n              [class]=\"item.checkHover == true ? 'bg-hover' : ''\" type=\"text\" [(ngModel)]=\"item.LoHang\"\r\n              (ngModelChange)=\"setItem('LoHang',item.MaVT, $event) \">\r\n\r\n          </div>\r\n          <div class=\"product-content-right\">\r\n            <div class=\"product-content-left\">\r\n              <span>Hạn dùng:</span>\r\n              <div *ngIf=\"!item.check || page =='xuatbanle'\">{{item.HanDung}}</div>\r\n              <input *ngIf=\"item.check && page == 'nhapmua'\" [class]=\"item.checkHover == true ? 'bg-hover' : ''\"\r\n                type=\"date\" placeholder='' [(ngModel)]=\"item.HanDung\"\r\n                (ngModelChange)=\"setItem('HanDung',item.MaVT, $event)\" [style.width]=\"displayImg ? '75px' : '106px'\">\r\n\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"product-content-item mt-6\">\r\n          <div class=\"product-content-left\">\r\n            <span style=\"margin-right: 3px;\">Giá bán:</span>\r\n            <div *ngIf=\"!item.check\">{{item.DonGia | number}}</div>\r\n\r\n            <input *ngIf=\"item.check\" [class]=\"item.checkHover == true ? 'bg-hover' : ''\" type=\"text\"\r\n              [style.width]=\"displayImg ? '75px' : '106px'\" [(ngModel)]=\"item.DonGia\"\r\n              (ngModelChange)=\"formatInput('DonGia',item.MaVT, item.DonGia, i) \">\r\n\r\n          </div>\r\n          <div *ngIf=\"item.check\" class=\"product-content-right\">\r\n            <div class=\"product-content-left\">\r\n              <span>Số lượng:</span>\r\n\r\n              <!-- <ion-icon (click)=\"formatInput('SoLuong', item.MaVT, item.LoHang, i, 'plus', $event)\" name=\"add-circle-outline\"></ion-icon> -->\r\n              <div style=\"margin-top: 4px;\">\r\n                <input [style.width]=\"displayImg ? '75px' : '106px'\" [class]=\"item.checkHover == true ? 'bg-hover' : ''\"\r\n                  type=\"text\" [(ngModel)]=\"item.SoLuong\"\r\n                  (ngModelChange)=\"formatInput('SoLuong', item.MaVT, item.LoHang, i, '', $event)\">\r\n              </div>\r\n              <!-- <ion-icon (click)=\"formatInput('SoLuong', item.MaVT, i, 'subtraction', $event)\" name=\"remove-circle-outline\"></ion-icon> -->\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n\r\n        <!-- <table class=\"product-table\">\r\n          <tr>\r\n            <td>\r\n              <div class=\"product-table-item\">\r\n                <label>ĐVT:</label>\r\n                <span (click)=\"handleDVT(item.MaVT, item.DVT, i)\">\r\n                  {{item.DVT}}\r\n                </span>\r\n              </div>\r\n            </td>\r\n            <td>\r\n              <div class=\"product-table-item\">\r\n                <label>Lượng tồn:</label>\r\n                {{item.LuongTon}}\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>\r\n              <div class=\"product-table-item\">\r\n                <label>Lô hàng:</label>\r\n                <div *ngIf=\"!item.check || page =='xuatbanle'\">{{item.LoHang}}</div>\r\n\r\n                <input *ngIf=\"item.check && page == 'nhapmua'\" [class]=\"item.checkHover == true ? 'bg-hover' : ''\"\r\n                  type=\"text\" [(ngModel)]=\"item.LoHang\" (ngModelChange)=\"setItem('LoHang',item.MaVT, $event) \">\r\n\r\n              </div>\r\n\r\n            </td>\r\n            <td>\r\n              <div class=\"product-table-item\">\r\n                <label>Hạn dùng:</label>\r\n                <div *ngIf=\"!item.check || page =='xuatbanle'\">{{item.HanDung}}</div>\r\n                <input *ngIf=\"item.check && page == 'nhapmua'\" [class]=\"item.checkHover == true ? 'bg-hover' : ''\"\r\n                  type=\"date\" placeholder='' [(ngModel)]=\"item.HanDung\"\r\n                  (ngModelChange)=\"setItem('HanDung',item.MaVT, $event)\">\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </table> -->\r\n\r\n\r\n\r\n        <!-- <div class=\"product-content-item mt-6\">\r\n          <div *ngIf=\"listVattu[i].SoLuong > item.LuongTon\" class=\"product-content-right alertErr\">\r\n            <ion-icon name=\"alert-circle-outline\"></ion-icon> Số lượng không hợp lệ\r\n          </div>\r\n        </div> -->\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n  <ion-infinite-scroll *ngIf=\"!pageInfo.keyword\" (ionInfinite)=\"doInfinite($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Đang tải dữ liệu...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n\r\n    <div class=\"product-footer\">\r\n      <table>\r\n        <tr>\r\n          <td class=\"product-bold\">Số vật tư: <span>{{listExist.length}}</span></td>\r\n          <td class=\"product-bold text-right\">T.Tiền: <span>{{sumThanhTien | number}}</span></td>\r\n        </tr>\r\n      </table>\r\n      <div class=\"product-footer-left\">\r\n        <!-- <div class=\"product-footer-form\">\r\n        <ion-icon name=\"receipt-outline\"></ion-icon>\r\n        <div class=\"product-footer-number\">2</div>\r\n      </div> -->\r\n        <button (click)=\"handleProduct()\">CHỌN VẬT TƯ</button>\r\n\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/donvitinh/dvt/dvt.component.scss":
/*!**************************************************!*\
  !*** ./src/app/donvitinh/dvt/dvt.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dvt {\n  padding: 20px;\n}\n\ntable {\n  width: 100%;\n}\n\nthead th {\n  padding: 12px 0;\n  font-weight: 600;\n}\n\ntd {\n  padding: 12px 0;\n  border-top: 1px solid #e1f0f3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9udml0aW5oL2R2dC9kdnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBR0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSw2QkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvZG9udml0aW5oL2R2dC9kdnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHZ0e1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxudGFibGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbn1cclxuXHJcbnRoZWFkIHRoe1xyXG4gICAgcGFkZGluZzogMTJweCAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxudGR7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDA7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2UxZjBmMztcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/donvitinh/dvt/dvt.component.ts":
/*!************************************************!*\
  !*** ./src/app/donvitinh/dvt/dvt.component.ts ***!
  \************************************************/
/*! exports provided: DVTComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DVTComponent", function() { return DVTComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_service_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/global.service */ "./src/app/service/global.service.ts");
/* harmony import */ var src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/loading.service */ "./src/app/service/loading.service.ts");
/* harmony import */ var src_app_service_xuatkho_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/xuatkho.service */ "./src/app/service/xuatkho.service.ts");






let DVTComponent = class DVTComponent {
    constructor(navParams, LoadingService, XuatkhoService, popoverController, GlobalService) {
        this.navParams = navParams;
        this.LoadingService = LoadingService;
        this.XuatkhoService = XuatkhoService;
        this.popoverController = popoverController;
        this.GlobalService = GlobalService;
        this.DVT = '';
        this.MaVT = '';
        this.listDVT = [];
        this.InOutType = "N";
        this.DVT = this.navParams.data.DVT;
        this.MaVT = this.navParams.data.MaVT;
        this.getDVT();
    }
    ngOnInit() { }
    getDVT() {
        this.LoadingService.setValue(true);
        this.InOutType = localStorage.getItem("InOutType");
        this.XuatkhoService.DonViTinh(this.MaVT).subscribe((response) => {
            console.log("36", response);
            this.listDVT = response;
            // for (let i = 0; i < this.listDVT.length; i++) {
            //   if(this.listDVT[i].MaVT == this.MaVT){
            //     this.listDVT[i].check = true;
            //   }else{
            //     this.listDVT[i].check = false;
            //   }
            // }
            this.LoadingService.setValue(false);
        }, (error) => {
            console.log('error', error);
            this.LoadingService.setValue(false);
        });
    }
    handleDVT(item) {
        this.popoverController.dismiss(item);
        // this.GlobalService.closeModalSenData(item);
    }
};
DVTComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: src_app_service_xuatkho_service__WEBPACK_IMPORTED_MODULE_5__["XuatkhoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: src_app_service_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] }
];
DVTComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dvt',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dvt.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/donvitinh/dvt/dvt.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dvt.component.scss */ "./src/app/donvitinh/dvt/dvt.component.scss")).default]
    })
], DVTComponent);



/***/ }),

/***/ "./src/app/service/xuatkho.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/xuatkho.service.ts ***!
  \********************************************/
/*! exports provided: XuatkhoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatkhoService", function() { return XuatkhoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/dist/esm/index.js");
/* harmony import */ var _share_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../share/helper */ "./src/app/share/helper.ts");










let XuatkhoService = class XuatkhoService {
    constructor(http, router, toastController, http1, storage, modalController, convertHelper) {
        this.http = http;
        this.router = router;
        this.toastController = toastController;
        this.http1 = http1;
        this.storage = storage;
        this.modalController = modalController;
        this.convertHelper = convertHelper;
        this.apiUrl = '';
    }
    getTongHopXuatKho(item) {
        let _url = this.convertHelper.env() + "Report/TongHopXuatKho";
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
        return this.http.post(_url, item, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    getChungtu(item) {
        let _url = this.convertHelper.env() + `ChungTu?nam_du_lieu=${item.nam_du_lieu}&loaictid=${item.loaictid}`;
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
        return this.http.get(_url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    xuatHangDetail(item) {
        let _url = this.convertHelper.env() + `ChungTu/${item.ChungTuID}?nam_du_lieu=${item.nam_du_lieu}`;
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
        return this.http.get(_url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    createXuatHang(item) {
        console.log("Xuat hang", item);
        let _url = this.convertHelper.env() + "ChungTu";
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
        return this.http.post(_url, item, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    updateXuatHang(item) {
        let _url = this.convertHelper.env() + "ChungTu";
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
        return this.http.post(_url, item, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    deleteXuatHang(item) {
        let _url = this.convertHelper.env() + "ChungTu";
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
        return this.http.delete(_url, new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({
            headers: headers,
            body: item
        }));
    }
    // deleteXuatHang(item): Observable<any> {
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
    heThong() {
        let _url = this.convertHelper.env() + "HeThong";
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
        return this.http.get(_url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    DonViTinh(MaVT) {
        console.log("102 - ", MaVT);
        let _url = this.convertHelper.env() + "DonViTinh/" + MaVT;
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
        return this.http.get(_url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
};
XuatkhoService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _share_helper__WEBPACK_IMPORTED_MODULE_8__["convertHelper"] }
];
XuatkhoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], XuatkhoService);



/***/ }),

/***/ "./src/app/vattu/vattu-index/vattu-index.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/vattu/vattu-index/vattu-index.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".product-header {\n  position: sticky;\n  top: 0;\n  background: white;\n  z-index: 9;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n}\n.product-search {\n  padding: 0 10px 10px 10px;\n  position: relative;\n  background: var(--background-color);\n}\n.product-search input {\n  width: 100%;\n  padding: 8px;\n  border-radius: 5px;\n  border: 1px solid gray;\n}\n.product-search ion-icon {\n  position: absolute;\n  right: 20px;\n  top: 8px;\n  font-size: 22px;\n  color: var(--background-color);\n}\n.product-img {\n  width: 70px;\n  margin-right: 10px;\n  display: flex;\n  align-items: center;\n}\n.product-img img {\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 4px;\n}\n.product-title {\n  padding: 14px 10px 0;\n  font-weight: 600;\n  font-size: 20px;\n  color: var(--gray-dark);\n}\n.product-item {\n  display: flex;\n  padding: 10px;\n}\n.product-icon {\n  font-size: 20px;\n  padding-right: 15px;\n}\n.product-red {\n  border: 1px solid var(--red-dark) !important;\n  color: var(--red-dark) !important;\n}\n.product-table-item {\n  display: flex;\n  align-items: center;\n}\n.product-table-item label {\n  white-space: nowrap;\n}\n.product-table-item input {\n  width: 100%;\n}\n.product-table td {\n  width: 50%;\n}\n.product-content {\n  width: 100%;\n}\n.product-content-item {\n  display: flex;\n  color: var(--text-blue);\n}\n.product-content-left {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.product-content-left ion-icon {\n  border: 1px solid gray;\n  border-radius: 3px;\n}\n.product-content-title {\n  font-weight: 600;\n  font-size: 16px;\n  color: var(--background-color);\n}\n.product-content-sm {\n  font-size: 14px;\n  color: gray;\n}\n.product-content-right {\n  margin-left: auto;\n  color: var(--text-blue);\n}\n.product-content-right ion-icon {\n  font-size: 15px;\n}\n.product-content-right button {\n  border: 1px solid var(--text-blue);\n  color: var(--text-blue);\n  padding: 6px;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.product-content-sl {\n  display: flex;\n  gap: 10px;\n}\n.product-content-sl ion-icon {\n  font-size: 24px;\n  color: var(--primary-color);\n}\n.product-footer {\n  padding: 6px;\n}\n.product-footer button {\n  color: white;\n  background: var(--background-color);\n  width: 100%;\n  margin-left: auto;\n  padding: 12px;\n  font-size: 16px;\n  font-weight: 600;\n  border-radius: 5px;\n}\n.product-footer-left {\n  display: flex;\n  align-items: center;\n}\n.product-footer-left ion-icon {\n  font-size: 18px;\n}\n.product-footer-form {\n  position: absolute;\n  width: 50px;\n  height: 40px;\n  background: #616161;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n  color: white;\n}\n.product-footer-number {\n  border-radius: 100vw;\n  position: absolute;\n  top: -4px;\n  right: -7px;\n  width: 20px;\n  height: 20px;\n  background: #0663a9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid white;\n  font-size: 10px;\n}\n.border-b {\n  border-bottom: 1px solid #bfbfbf;\n}\ntable {\n  width: 100%;\n  margin-bottom: 10px;\n}\ntd {\n  padding: 0px;\n}\ntd span {\n  color: var(--background-color);\n  font-weight: 600;\n}\ninput[type=text],\ninput[type=number], input[type=date] {\n  border: 1px solid #a7e9f7;\n  text-align: center;\n  background: #a7e9f7;\n  border-radius: 5px;\n  padding: 4px 0;\n}\ninput[type=text]:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmF0dHUvdmF0dHUtaW5kZXgvdmF0dHUtaW5kZXgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1JO0VBQ0ksZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsMkNBQUE7QUFMUjtBQVNJO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0FBUFI7QUFTUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQVBaO0FBVVE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FBUlo7QUFZSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQVZSO0FBWVE7RUFFSSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0FBWFo7QUFlSTtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFiUjtBQWdCSTtFQUNJLGFBQUE7RUFDQSxhQUFBO0FBZFI7QUFpQkk7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUFmUjtBQWtCSTtFQUNJLDRDQUFBO0VBQ0EsaUNBQUE7QUFoQlI7QUFzQlE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFwQlo7QUFzQlk7RUFDSSxtQkFBQTtBQXBCaEI7QUF1Qlk7RUFDSSxXQUFBO0FBckJoQjtBQTRCUTtFQUNJLFVBQUE7QUExQlo7QUE4Qkk7RUFDSSxXQUFBO0FBNUJSO0FBOEJRO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBNUJaO0FBZ0NRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQTlCWjtBQXNDWTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7QUFwQ2hCO0FBeUNRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUF2Q1o7QUEwQ1E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQXhDWjtBQTJDUTtFQUNJLGlCQUFBO0VBQ0EsdUJBQUE7QUF6Q1o7QUErQ1k7RUFDSSxlQUFBO0FBN0NoQjtBQWdEWTtFQUNJLGtDQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBOUNoQjtBQWtEUTtFQUNJLGFBQUE7RUFDQSxTQUFBO0FBaERaO0FBa0RZO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0FBaERoQjtBQXVESTtFQUNJLFlBQUE7QUFyRFI7QUF1RFE7RUFDSSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFyRFo7QUF3RFE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUF0RFo7QUF5RFk7RUFDSSxlQUFBO0FBdkRoQjtBQTREUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBMURaO0FBOERRO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBNURaO0FBa0VBO0VBQ0ksZ0NBQUE7QUEvREo7QUFrRUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUEvREo7QUFrRUE7RUFDSSxZQUFBO0FBL0RKO0FBa0VBO0VBQ0ksOEJBQUE7RUFDQSxnQkFBQTtBQS9ESjtBQWtFQTs7RUFFSSx5QkFBQTtFQUVBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFoRUo7QUFtRUE7RUFDSSxhQUFBO0FBaEVKIiwiZmlsZSI6InNyYy9hcHAvdmF0dHUvdmF0dHUtaW5kZXgvdmF0dHUtaW5kZXgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3Qge1xyXG5cclxuICAgIC8vIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIC8vIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMTVweDtcclxuICAgIC8vIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHg7XHJcbiAgICAmLWhlYWRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgei1pbmRleDogOTtcclxuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggNHB4O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAmLXNlYXJjaCB7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4IDEwcHggMTBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XHJcblxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICB0b3A6IDhweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtaW1nIHtcclxuICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAvLyBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtdGl0bGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDE0cHggMTBweCAwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ncmF5LWRhcmspO1xyXG4gICAgfVxyXG5cclxuICAgICYtaXRlbSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICYtaWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi1yZWQge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJlZC1kYXJrKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1yZWQtZGFyaykgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAmLXRhYmxle1xyXG4gICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICYtaXRlbXtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIGxhYmVse1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0ZHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi1jb250ZW50IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgJi1pdGVtIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmx1ZSk7XHJcbiAgICAgICAgICAgIC8vIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLWxlZnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBnYXA6IDVweDtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyBzcGFuIHtcclxuICAgICAgICAgICAgLy8gICAgIC8vIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgLy8gICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi1zbSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLXJpZ2h0IHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsdWUpO1xyXG5cclxuICAgICAgICAgICAgLy8gc3BhbiB7XHJcbiAgICAgICAgICAgIC8vICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dC1ibHVlKTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsdWUpO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNnB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBnYXA6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi1zbCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGdhcDogMTBweDtcclxuXHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgICYtZm9vdGVyIHtcclxuICAgICAgICBwYWRkaW5nOiA2cHg7XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLWxlZnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYtZm9ybSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzYxNjE2MTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgJi1udW1iZXIge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDB2dztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IC00cHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAtN3B4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDY2M2E5O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4uYm9yZGVyLWIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiZmJmYmY7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxudGQge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG50ZCBzcGFuIHtcclxuICAgIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdLCBpbnB1dFt0eXBlPVwiZGF0ZVwiXXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhN2U5Zjc7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYTdlOWY3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNHB4IDA7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3Vze1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4vLyBpbnB1dFt0eXBlPSdkYXRlJ106Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuLy8gICAgIGJvdHRvbTogMDtcclxuLy8gICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gICAgIGhlaWdodDogYXV0bztcclxuLy8gICAgIGxlZnQ6IDA7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICByaWdodDogMDtcclxuLy8gICAgIHRvcDogMDtcclxuLy8gICAgIHdpZHRoOiBhdXRvO1xyXG4vLyB9XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/vattu/vattu-index/vattu-index.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/vattu/vattu-index/vattu-index.page.ts ***!
  \*******************************************************/
/*! exports provided: VattuIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VattuIndexPage", function() { return VattuIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_service_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/global.service */ "./src/app/service/global.service.ts");
/* harmony import */ var src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/loading.service */ "./src/app/service/loading.service.ts");
/* harmony import */ var src_app_service_vattu_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/vattu.service */ "./src/app/service/vattu.service.ts");
/* harmony import */ var src_app_donvitinh_dvt_dvt_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/donvitinh/dvt/dvt.component */ "./src/app/donvitinh/dvt/dvt.component.ts");








let VattuIndexPage = class VattuIndexPage {
    constructor(GlobalService, LoadingService, VattuService, cdr, navParams, currencyPipe, popoverController) {
        this.GlobalService = GlobalService;
        this.LoadingService = LoadingService;
        this.VattuService = VattuService;
        this.cdr = cdr;
        this.navParams = navParams;
        this.currencyPipe = currencyPipe;
        this.popoverController = popoverController;
        this.listData = [];
        this.listDataSearch = [];
        this.listVattu = [];
        this.page = '';
        this.listExist = [];
        this.timeout = '';
        this.sumThanhTien = 0;
        this.countVattu = 0;
        this.keyword = '';
        this.sendVattu = {
            "loainx": "''",
            "khohang": "",
            "banggia": ""
        };
        this.pageInfo = {
            'page': 1,
            'pageSize': 20,
            'keyword': "",
        };
        this.makho = '';
        this.displayImg = false;
        this.countIndex = -1;
        this.listVattu = this.navParams.data.listVattu;
        // console.log('this.listVattu', this.listVattu);
        this.displayImg = JSON.parse(localStorage.getItem('displayImg') || 'false');
        // console.log('this.navParams.data.listVattu ==========', this.navParams.data.listVattu);
        // console.log('this.listVattu ============', this.listVattu);
        if (this.listVattu) {
            this.listDataSearch = this.listVattu;
            this.listExist = this.navParams.data.listItem;
            // console.log('this.navParams.data.listItem', this.navParams.data.listItem);
            console.log('this.listExist', this.listExist);
            this.countMoney(this.listExist);
            // console.log('this.listExist', this.listExist);
            this.getSandVT();
        }
        else {
            this.sendVattu.khohang = this.navParams.data.makho;
            this.sendVattu.banggia = this.navParams.data.banggia;
            this.getVattu();
        }
    }
    ionViewDidEnter() { }
    ngOnInit() { }
    getSandVT() {
        var listItem = this.listVattu.slice(0, this.pageInfo.page * this.pageInfo.pageSize);
        console.log('listItem', listItem);
        for (let i = 0; i < listItem.length; i++) {
            var getVattuTonTai = {
                'index': -1,
                'item': {},
            };
            listItem[i].LoHang = listItem[i].LoHang ? listItem[i].LoHang : '';
            for (let j = 0; j < this.listExist.length; j++) {
                this.listExist[j].LoHang = this.listExist[j].LoHang ? this.listExist[j].LoHang : '';
                if (listItem[i].MaVT == this.listExist[j].MaVT && listItem[i].LoHang == this.listExist[j].LoHang) {
                    getVattuTonTai.index = i;
                    getVattuTonTai.item = this.listExist[j];
                    // console.log('aaaaaaaaaaa', getVattuTonTai.index);
                }
            }
            // console.log('getVattuTonTai.index', getVattuTonTai.index);
            if (getVattuTonTai.index > -1) {
                // console.log('bbbbbbbbbbbbbb', getVattuTonTai.index);
                listItem[i].check = true;
                listItem[i].LoHang = getVattuTonTai.item['LoHang'] ? getVattuTonTai.item['LoHang'] : "";
                listItem[i].HanDung = getVattuTonTai.item['HanDung'];
                // console.log('listItem[i].SoLuong', listItem[i].SoLuong);
                listItem[i].SoLuong = new Intl.NumberFormat().format(getVattuTonTai.item['SoLuong']).replace(/\./g, ',');
            }
            else {
                listItem[i].check = false;
            }
        }
        this.listData = listItem;
        console.log("118", listItem);
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
    getVattu() {
        this.LoadingService.setValue(true);
        this.VattuService.GetListVT(this.sendVattu).subscribe((response) => {
            this.listData = response;
            console.log(this.listVattu);
            this.countVattu = response.length;
            this.listDataSearch = response;
            this.LoadingService.setValue(false);
        }, (error) => {
            this.LoadingService.setValue(false);
            console.log('error', error);
        });
    }
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
                $this.listExist.forEach(function (a) {
                    var index = arrPlan.findIndex(function (b) {
                        return b.MaVT == a.MaVT;
                    });
                    if (index !== -1) {
                        arrPlan[index].check = true;
                        arrPlan[index].LoHang = a.LoHang ? a.LoHang : "";
                        arrPlan[index].HanDung = a.HanDung == '1900-01-01' ? "" : a.HanDung;
                        arrPlan[index].SoLuong = new Intl.NumberFormat().format(a.SoLuong).replace(/\./g, ',');
                    }
                });
                $this.countVattu = arrPlan.length;
                $this.listData = arrPlan;
                // console.log(' $this.listDataSearch ',$this.listDataSearch );
                // console.log(' $this.listData ',  $this.listData );
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
    handleAdd(check, index, item) {
        this.listData[index].check = check;
        if (check == true) {
            this.listData[index].SoLuong = '1';
            this.listExist.push({
                "_TenVT": item.TenVT,
                "ChietKhau": 0,
                "ChietKhau_Percent": 0,
                "DVT": item.DVT,
                "DonGia": item.DonGia,
                "GiaBanLe": item.GiaBanLe ? item.GiaBanLe : 0,
                "GiaBanSy": item.GiaBanSy ? item.GiaBanSy : 0,
                "HTTT": item.HTTT ? item.HTTT : '',
                "HanDung": item.HanDung ? item.HanDung : '',
                "LoHang": item.LoHang ? item.LoHang : '',
                "MaVT": item.MaVT,
                "NhapXuatID": 0,
                "SoLuong": 1,
                "ThanhTien": item.DonGia,
                "TongTien": item.DonGia,
                "VAT": 0,
                "VAT_Percent": 0
            });
            // console.log('aaaaaaaaaa', this.listExist);
        }
        else {
            this.listExist = this.listExist.filter(x => x.MaVT !== item.MaVT);
            // console.log('bbbbbbbbbb', this.listExist);
        }
        // console.log('sssssssss', this.listExist);
        this.countMoney(this.listExist);
    }
    formatInput(item, MaVT, LoHang, index, type, e) {
        // console.log('countIndex', countIndex);
        LoHang = LoHang ? LoHang : '';
        // console.log('LoHang', LoHang);
        if (this.page == 'nhapmua') {
            var checkIndex = this.listVattu.findIndex(x => x.MaVT == MaVT);
            var checkIndexExit = this.listExist.findIndex(x => x.MaVT == MaVT);
        }
        else {
            var checkIndex = this.listVattu.findIndex(x => x.MaVT == MaVT && x.LoHang == LoHang);
            var checkIndexExit = this.listExist.findIndex(x => x.MaVT == MaVT && x.LoHang == LoHang);
        }
        // console.log('checkIndex', checkIndex, checkIndexExit, this.listVattu[0]);
        // if (type && type == 'plus') {
        //   this.listVattu[checkIndex].SoLuong = String(e + 1);
        // }
        // if (type && type == 'subtraction') {
        //   this.listVattu[checkIndex].SoLuong = String(e - 1);
        // }
        // console.log('this.listVattu[index][item]', this.listVattu[index][item]);
        if (item == 'SoLuong') {
            this.listVattu[checkIndex].SoLuong = String(e);
        }
        // console.log('checkIndex', checkIndex);
        // console.log('this.listVattu', this.listVattu);
        // console.log('this.listVattu[checkIndex]', this.listVattu[checkIndex]);
        // console.log('this.listVattu[checkIndex][item]', this.listVattu[checkIndex][item]);
        var convNumber = this.currencyPipe.transform(this.listVattu[checkIndex][item].replace(/\D/g, '').replace(/^0+/, ''), ' ', 'symbol', '1.0-0');
        this.listVattu[checkIndex][item] = convNumber;
        // console.log('this.listVattu[checkIndex][item]', this.listVattu[checkIndex][item]);
        // console.log('this.listExist[checkIndexExit]', checkIndexExit, this.listExist);
        this.listExist[checkIndexExit][item] = Number(convNumber.replace(/,/g, ''));
        if (item == "DonGia") {
            this.listExist[checkIndexExit].ThanhTien = this.listExist[checkIndexExit].SoLuong * this.listExist[checkIndexExit].DonGia;
            this.listVattu[checkIndex].DonGia = new Intl.NumberFormat().format(this.listExist[checkIndexExit].DonGia).replace(/\./g, ',');
            this.getTongTien(checkIndexExit);
        }
        if (item == "SoLuong") {
            this.listExist[checkIndexExit].ThanhTien = this.listExist[checkIndexExit].SoLuong * this.listExist[checkIndexExit].DonGia;
            this.listVattu[checkIndex].ThanhTien = new Intl.NumberFormat().format(this.listExist[checkIndexExit].ThanhTien).replace(/\./g, ',');
            this.getTongTien(checkIndexExit);
        }
    }
    setItem(item, MaVT, e) {
        var checkIndexExit = this.listExist.findIndex(x => x.MaVT === MaVT);
        this.listExist[checkIndexExit][item] = e;
    }
    getTongTien(index) {
        this.listExist[index].TongTien = this.listExist[index].ThanhTien + this.listExist[index].VAT - this.listExist[index].ChietKhau;
        this.listVattu[index].TongTien = this.listExist[index].TongTien;
        this.countMoney(this.listExist);
    }
    countMoney(billDetail) {
        this.sumThanhTien = 0;
        for (let i = 0; i < billDetail.length; i++) {
            this.sumThanhTien = this.sumThanhTien + billDetail[i].ThanhTien;
        }
    }
    handleProduct() {
        // this.GlobalService.closeModal();
        // console.log('end', this.listExist);
        this.GlobalService.closeModalSenData(this.listExist);
    }
    deleteSearch() {
        this.pageInfo.keyword = '';
        this.pageInfo.page = 1;
        // this.listData = this.listDataSearch;
        this.getSandVT();
    }
    handleDVT(MaVT, DVT, index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_donvitinh_dvt_dvt_component__WEBPACK_IMPORTED_MODULE_7__["DVTComponent"],
                cssClass: 'popup-cont-info',
                componentProps: {
                    "MaVT": MaVT,
                    "DVT": DVT
                },
                translucent: true,
            });
            yield popover.present();
            popover.onDidDismiss().then((dataReturned) => {
                // console.log('dataReturned', dataReturned.data);
                if (dataReturned.data) {
                    // console.log('this.listData', this.listData);
                    // this.listData[index].DVT =  dataReturned.data.DVT;
                    // this.listData[index].DonGia =  dataReturned.data.GiaMua;
                    for (let i = 0; i < this.listData.length; i++) {
                        if (this.listData[i].MaVT == MaVT) {
                            this.listData[i].DVT = dataReturned.data.DVT;
                            this.listData[i].DonGia = dataReturned.data.GiaMua;
                            // this.listData[i].DonGia = new Intl.NumberFormat().format(dataReturned.data.GiaMua).replace(/\./g, ',');
                        }
                    }
                    for (let i = 0; i < this.listExist.length; i++) {
                        if (this.listExist[i].MaVT == MaVT) {
                            this.listExist[i].DVT = dataReturned.data.DVT;
                            this.listExist[i].DonGia = dataReturned.data.GiaMua;
                        }
                    }
                    var checkIndexExit = this.listExist.findIndex(x => x.MaVT === MaVT);
                    this.listExist[checkIndexExit].ThanhTien = this.listExist[checkIndexExit].SoLuong * this.listExist[checkIndexExit].DonGia;
                    this.listVattu[index].ThanhTien = new Intl.NumberFormat().format(this.listExist[checkIndexExit].ThanhTien).replace(/\./g, ',');
                    this.getTongTien(checkIndexExit);
                    // this.listExist.forEach(function (a) {
                    //   // var index = this.listData.findIndex(function (b) {
                    //   //   return b.MaVT == a.MaVT;
                    //   // });
                    //   if (a.MaVT == MaVT) {
                    //     this.listData[index].DVT = dataReturned.data.DVT;
                    //   }
                    // });
                    // this.listData = listItem;
                    // this.sendItem.ChiTietHang[index].DVT = dataReturned.data.DVT;
                    // this.sendItem.ChiTietHang[index].DonGia = dataReturned.data.GiaMua;
                    // this.sendItem.ChiTietHang[index].GiaBanSy = dataReturned.data.GiaBanSy;
                    // this.sendItem.ChiTietHang[index].GiaBanLe = dataReturned.data.GiaBanLe;
                    // this.sendItem.ChiTietHang[index].ThanhTien = this.sendItem.ChiTietHang[index].SoLuong * this.sendItem.ChiTietHang[index].DonGia;
                    // this.displayChiTietHang[index].DonGia = new Intl.NumberFormat().format(dataReturned.data.GiaMua).replace(/\./g, ',');
                    // this.getTongTien(index);
                }
            });
        });
    }
    closeModal() {
        this.GlobalService.closeModal();
        // const content = document.querySelector('ion-content');
        //   content.classList.remove('camera');
    }
    doInfinite(event) {
        this.pageInfo.page++;
        setTimeout(() => {
            event.target.complete();
            this.getSandVT();
        }, 500);
    }
};
VattuIndexPage.ctorParameters = () => [
    { type: src_app_service_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] },
    { type: src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] },
    { type: src_app_service_vattu_service__WEBPACK_IMPORTED_MODULE_6__["VattuService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] }
];
VattuIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-vattu-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./vattu-index.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vattu/vattu-index/vattu-index.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./vattu-index.page.scss */ "./src/app/vattu/vattu-index/vattu-index.page.scss")).default]
    })
], VattuIndexPage);



/***/ })

}]);
//# sourceMappingURL=default~bill-bill-detail-bill-detail-module~nhapkho-nhaphang-detail-nhaphang-detail-module~nhapkho-n~4e72f4b3-es2015.js.map