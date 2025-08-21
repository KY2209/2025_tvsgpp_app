(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["xuatkho-xuathang-xuathang-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/xuatkho/xuathang/xuathang.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/xuatkho/xuathang/xuathang.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons (click)=\"openBack()\" slot=\"start\">\r\n      <ion-item lines=\"none\"\r\n        style=\"--padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon class=\"icon-header\" name=\"chevron-back-outline\"></ion-icon>\r\n      </ion-item>\r\n    </ion-buttons>\r\n\r\n    <ion-title style=\"font-weight: 600; text-align: center;\">\r\n      {{title}}\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-item lines=\"none\" (click)=\"checkCalender = ! checkCalender\"\r\n        style=\" --padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon style=\"font-size: 26px;\" name=\"calendar-outline\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item lines=\"none\" (click)=\"checkSearch = ! checkSearch\"\r\n        style=\" --padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon name=\"search-outline\"></ion-icon>\r\n      </ion-item>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <div id=\"myDiv\" class=\"printBill\"> \r\n    <app-print-bill [ChungTuInfo]=\"ChungTuInfo\"></app-print-bill>\r\n  </div>\r\n\r\n\r\n  <div class=\"synthetic\">\r\n    <div *ngIf=\"checkCalender\" class=\"synthetic-item synthetic-date\">\r\n      Năm dữ liệu:\r\n      <!-- <span (click)=\"handleDate()\"> {{sendChungtu.nam_du_lieu}}</span> -->\r\n      <span> <ion-datetime displayFormat=\"YYYY\" (ngModelChange)=\"changeYear($event)\" [(ngModel)]=\"sendChungtu.nam_du_lieu\"></ion-datetime></span>\r\n\r\n     \r\n    </div>\r\n\r\n    <div *ngIf=\"checkSearch\" class=\"search-item\">\r\n      <div class=\"search-form\" style=\"width: 100%;\">\r\n        <input type=\"text\" (keyup)=\"onSearch($event)\" [value]=\"sendData.dieukien\" placeholder=\"Tìm kiếm số chứng từ\">\r\n        <ion-icon (click)=\"deleteSearch()\" *ngIf=\"sendData.dieukien != ''\" class=\"search-icon2\"\r\n          name=\"close-circle-outline\"></ion-icon>\r\n      </div>\r\n      <!-- \r\n        <button (click)=\"getData()\" class=\"search-btn\">\r\n          <ion-icon class=\"search-icon\" name=\"search-outline\"></ion-icon>\r\n        </button> -->\r\n    </div>\r\n\r\n    <div class=\"synthetic-item\">\r\n      <div class=\"synthetic-item-left\">\r\n        <span>{{countItem | number}}</span> phiếu\r\n      </div>\r\n      <div class=\"synthetic-item-right\">\r\n        Tổng: <span>{{sumTT | number}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n \r\n  <div *ngIf=\"countItem == 0\">\r\n    <app-no-data></app-no-data>\r\n  </div>\r\n  <div class=\"export\" *ngIf=\"countItem != 0\">\r\n\r\n    <div *ngFor=\"let item of listItem; index as i\" (click)=\"presentActionSheet(item.ChungTuID, item.ThoiDiem)\"\r\n      class=\"export-item\" [ngClass]=\"countItem != i+1 ? 'border-b' : ''\">\r\n      <div class=\"export-icon\">\r\n        <ion-icon name=\"wallet-outline\"></ion-icon>\r\n      </div>\r\n      <div class=\"export-content\">\r\n        <div class=\"export-content-item\">\r\n          <div class=\"export-content-left\" style=\"font-weight: 600;\">\r\n            {{item.SoCT}}\r\n          </div>\r\n          <div class=\"export-content-right\">\r\n            <span>{{item.TongTien | number}}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"export-content-item\">\r\n          <div class=\"export-content-left\">\r\n            {{item.ThoiDiem | date:'dd/MM/yyyy | HH:mm' }}\r\n          </div>\r\n        </div>\r\n        <div class=\"export-content-item\">\r\n          <div class=\"export-content-left\">\r\n            <button class=\"btn-db\" [class]=\"item.UpdateGPP == 0 ? 'bg-gray1' : 'bg-blue1'\">Đồng bộ</button>\r\n            \r\n          </div>\r\n        </div>\r\n        <!-- <div style=\"display: flex; margin-bottom: 5px;\">\r\n          <div class=\"export-content-left\">\r\n            ConfigContext (Viên)\r\n          </div>\r\n          <div class=\"export-content-right\">\r\n            <span>x 200</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"export-content-item\">\r\n          <div class=\"export-content-left export-content-sm\">\r\n            và 3 sản phẩm khác\r\n          </div>\r\n        </div> -->\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"openModal(true)\" style=\"width: 50px!important; height: 50px!important;\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/service/AlertService.ts":
/*!*****************************************!*\
  !*** ./src/app/service/AlertService.ts ***!
  \*****************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



// import { StringResources } from '@app/models/sharedmodels';
let AlertService = class AlertService {
    constructor(alertController) {
        this.alertController = alertController;
    }
    presentAlert(question) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: question,
                cssClass: 'cssAlert',
                mode: 'ios',
                buttons: [
                    {
                        text: "Hủy",
                        role: 'false',
                    },
                    {
                        text: "Đồng ý",
                        role: 'true',
                    }
                ]
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            return `${role}`;
        });
    }
    presentAlert2(question, print) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var arr = [
                {
                    text: "Đồng ý",
                    role: 'true',
                },
                {
                    text: "Hủy",
                    role: 'false',
                },
            ];
            if (print) {
                arr.splice(1, 0, {
                    text: "Đồng ý và in",
                    role: 'trueAndPrint',
                });
            }
            const alert = yield this.alertController.create({
                header: question,
                cssClass: 'alertThree',
                buttons: arr
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            return `${role}`;
        });
    }
};
AlertService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
AlertService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AlertService);



/***/ }),

/***/ "./src/app/service/toastService.ts":
/*!*****************************************!*\
  !*** ./src/app/service/toastService.ts ***!
  \*****************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let ToastService = class ToastService {
    constructor(toastController) {
        this.toastController = toastController;
    }
    successToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 1500,
                position: 'top',
                color: 'success',
                cssClass: 'toast-ios'
            });
            yield toast.present();
        });
    }
    errorToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 1500,
                position: 'top',
                color: 'danger',
                cssClass: 'toast-ios'
            });
            yield toast.present();
        });
    }
    warningToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 1500,
                position: 'top',
                color: 'warning',
                cssClass: 'toast-ios'
            });
            yield toast.present();
        });
    }
};
ToastService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
ToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ToastService);



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

/***/ "./src/app/share/helper.ts":
/*!*********************************!*\
  !*** ./src/app/share/helper.ts ***!
  \*********************************/
/*! exports provided: convertHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertHelper", function() { return convertHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let convertHelper = class convertHelper {
    constructor() {
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
    to_vietnamese(number) {
        var str = parseInt(number) + '';
        var i = 0;
        var arr = [];
        var index = str.length;
        var result = [];
        var rsString = '';
        if (index == 0 || str == 'NaN') {
            return '';
        }
        // Chia chuỗi số thành một mảng từng khối có 3 chữ số
        while (index >= 0) {
            arr.push(str.substring(index, Math.max(index - 3, 0)));
            index -= 3;
        }
        // Lặp từng khối trong mảng trên và convert từng khối đấy ra chữ Việt Nam
        for (i = arr.length - 1; i >= 0; i--) {
            if (arr[i] != '' && arr[i] != '000') {
                result.push(this.convert_block_three(arr[i]));
                // Thêm đuôi của mỗi khối
                if (this.dvBlock[i]) {
                    result.push(this.dvBlock[i]);
                }
            }
        }
        // Join mảng kết quả lại thành chuỗi string
        rsString = result.join(' ');
        // Trả về kết quả kèm xóa những ký tự thừa
        return rsString.replace(/[0-9]/g, '').replace(/ /g, ' ').replace(/ $/, '');
    }
    convert_block_three(number) {
        if (number == '000')
            return '';
        var _a = number + ''; //Convert biến 'number' thành kiểu string
        //Kiểm tra độ dài của khối
        switch (_a.length) {
            case 0: return '';
            case 1: return this.chuHangDonVi[_a];
            case 2: return this.convert_block_two(_a);
            case 3:
                var chuc_dv = '';
                if (_a.slice(1, 3) != '00') {
                    chuc_dv = this.convert_block_two(_a.slice(1, 3));
                }
                var tram = this.chuHangTram[_a[0]] + ' trăm';
                return tram + ' ' + chuc_dv;
        }
    }
    convert_block_two(number) {
        var dv = this.chuHangDonVi[number[1]];
        var chuc = this.chuHangChuc[number[0]];
        var append = '';
        // Nếu chữ số hàng đơn vị là 5
        if (number[0] > 0 && number[1] == 5) {
            dv = 'lăm';
        }
        // Nếu số hàng chục lớn hơn 1
        if (number[0] > 1) {
            append = ' mươi';
            if (number[1] == 1) {
                dv = ' mốt';
            }
        }
        return chuc + '' + append + ' ' + dv;
    }
    env() {
        return `https://${localStorage.getItem('unit')}.tvsgpp.net/api/`;
    }
    env2() {
        return `https://tvsgpp.net/api/`;
    }
    typeProduct() {
        // return ['Thuốc','Vật tư y tế','Thực phẩm chức năng'];
        return [
            {
                'item': 'Thuốc',
                'value': 'THUOC'
            },
            {
                'item': 'Vật tư y tế',
                'value': 'VTYT'
            },
            {
                'item': 'Thực phẩm chức năng',
                'value': 'TPCN'
            },
        ];
    }
    typeChungTu(LoaiCTID) {
        var typeArr = JSON.parse(localStorage.getItem('LoaiCT') || '[]');
        for (let i = 0; i < typeArr.length; i++) {
            if (typeArr[i].LoaiCTID == LoaiCTID) {
                return typeArr[i].DienGiai;
            }
        }
    }
    typeChungTuObj(LoaiCTID) {
        var typeArr = JSON.parse(localStorage.getItem('LoaiCT') || '[]');
        for (let i = 0; i < typeArr.length; i++) {
            if (typeArr[i].LoaiCTID == LoaiCTID) {
                return typeArr[i];
            }
        }
    }
    convertFileToBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }
};
convertHelper.ctorParameters = () => [];
convertHelper = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], convertHelper);



/***/ }),

/***/ "./src/app/xuatkho/xuathang/xuathang-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/xuatkho/xuathang/xuathang-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: XuathangPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuathangPageRoutingModule", function() { return XuathangPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _xuathang_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./xuathang.page */ "./src/app/xuatkho/xuathang/xuathang.page.ts");




const routes = [
    {
        path: '',
        component: _xuathang_page__WEBPACK_IMPORTED_MODULE_3__["XuathangPage"]
    }
];
let XuathangPageRoutingModule = class XuathangPageRoutingModule {
};
XuathangPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], XuathangPageRoutingModule);



/***/ }),

/***/ "./src/app/xuatkho/xuathang/xuathang.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/xuatkho/xuathang/xuathang.module.ts ***!
  \*****************************************************/
/*! exports provided: XuathangPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuathangPageModule", function() { return XuathangPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _xuathang_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./xuathang-routing.module */ "./src/app/xuatkho/xuathang/xuathang-routing.module.ts");
/* harmony import */ var _xuathang_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./xuathang.page */ "./src/app/xuatkho/xuathang/xuathang.page.ts");
/* harmony import */ var src_app_share_print_bill_print_bill_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/share/print-bill/print-bill.component */ "./src/app/share/print-bill/print-bill.component.ts");
/* harmony import */ var src_app_share_no_data_no_data_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/share/no-data/no-data.component */ "./src/app/share/no-data/no-data.component.ts");









let XuathangPageModule = class XuathangPageModule {
};
XuathangPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _xuathang_routing_module__WEBPACK_IMPORTED_MODULE_5__["XuathangPageRoutingModule"]
        ],
        declarations: [_xuathang_page__WEBPACK_IMPORTED_MODULE_6__["XuathangPage"], src_app_share_print_bill_print_bill_component__WEBPACK_IMPORTED_MODULE_7__["PrintBillComponent"], src_app_share_no_data_no_data_component__WEBPACK_IMPORTED_MODULE_8__["NoDataComponent"]]
    })
], XuathangPageModule);



/***/ }),

/***/ "./src/app/xuatkho/xuathang/xuathang.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/xuatkho/xuathang/xuathang.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".export {\n  padding: 10px 15px;\n  background: white;\n  margin-top: 15px;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n}\n.export-item {\n  display: flex;\n  padding: 15px 0 5px 0;\n}\n.export-icon {\n  font-size: 20px;\n  padding-right: 15px;\n}\n.export-content {\n  width: 100%;\n}\n.export-content-item {\n  display: flex;\n  margin-bottom: 5px;\n}\n.export-content-left span {\n  color: var(--primary-color);\n}\n.export-content-sm {\n  font-size: 14px;\n  color: gray;\n}\n.export-content-right {\n  margin-left: auto;\n}\n.export-content-right span {\n  color: var(--primary-color);\n}\n.btn-db {\n  color: white;\n  padding: 8px 10px;\n  border-radius: 5px;\n}\n.bg-blue1 {\n  background: #3880ff;\n}\n.bg-gray1 {\n  background: #939393;\n}\nion-content {\n  --background: #f9f9f9 ;\n}\nion-datetime {\n  --padding-top: 0px;\n}\n.border-b {\n  border-bottom: 1px solid #bfbfbf;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAveHVhdGtoby94dWF0aGFuZy94dWF0aGFuZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0VBQ0EscUJBQUE7QUFDUjtBQUdJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FBRFI7QUFJSTtFQUNJLFdBQUE7QUFGUjtBQUlRO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FBRlo7QUFNWTtFQUNJLDJCQUFBO0FBSmhCO0FBUVE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQU5aO0FBU1E7RUFDSSxpQkFBQTtBQVBaO0FBU1k7RUFDSSwyQkFBQTtBQVBoQjtBQXlFQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBdEVKO0FBeUVBO0VBQ0ksbUJBQUE7QUF0RUo7QUF5RUE7RUFDSSxtQkFBQTtBQXRFSjtBQXlFQTtFQUNJLHNCQUFBO0FBdEVKO0FBeUVBO0VBQ0ksa0JBQUE7QUF0RUo7QUF5RUE7RUFDSSxnQ0FBQTtBQXRFSiIsImZpbGUiOiJzcmMvYXBwL3h1YXRraG8veHVhdGhhbmcveHVhdGhhbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cG9ydCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggNHB4O1xyXG5cclxuICAgICYtaXRlbSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDAgNXB4IDA7XHJcbiAgICAgICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiZmJmYmY7XHJcbiAgICB9XHJcblxyXG4gICAgJi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAmLWNvbnRlbnQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAmLWl0ZW0ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLWxlZnQge1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi1zbSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLXJpZ2h0IHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcblxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gJi1pdGVtIHtcclxuICAgIC8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8gICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcblxyXG4gICAgLy8gICAgICYtdGl0bGUge1xyXG4gICAgLy8gICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgLy8gICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAvLyAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAvLyAgICAgICAgIGNvbG9yOiAjMzczNzM3O1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgJi1jb250ZW50IHtcclxuICAgIC8vICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIC8vICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAvLyAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICAvLyAgICAgICAgIHNwYW4ge1xyXG4gICAgLy8gICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vICYtbGVmdCB7XHJcbiAgICAvLyAgICAgd2lkdGg6IDZweDtcclxuICAgIC8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAvLyAgICAgYm9yZGVyLXJhZGl1czogMTBweCAwIDAgMTBweDtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyAmLXJpZ2h0IHtcclxuICAgIC8vICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgLy8gICAgIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XHJcbiAgICAvLyAgICAgYm94LXNoYWRvdzogcmdiYSg5OSwgOTksIDk5LCAwLjIpIDBweCAycHggOHB4IDBweDtcclxuICAgIC8vICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIC8vICAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyAmLWRhdGUge1xyXG4gICAgLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgLy8gICAgIGNvbG9yOiBncmF5O1xyXG5cclxuICAgIC8vICAgICAmLXJpZ2h0IHtcclxuICAgIC8vICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vICYtYmx1ZSB7XHJcbiAgICAvLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA5YjliMDtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyAmLXllbGxvdyB7XHJcbiAgICAvLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5YzI0ZDtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyAmLWdyZWVuIHtcclxuICAgIC8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODVjMzQwO1xyXG4gICAgLy8gfVxyXG59XHJcblxyXG5cclxuLmJ0bi1kYntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uYmctYmx1ZTF7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzg4MGZmO1xyXG59XHJcblxyXG4uYmctZ3JheTF7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOTM5MzkzO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmOWY5ZjlcclxufVxyXG5cclxuaW9uLWRhdGV0aW1le1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xyXG59XHJcblxyXG4uYm9yZGVyLWIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiZmJmYmY7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/xuatkho/xuathang/xuathang.page.ts":
/*!***************************************************!*\
  !*** ./src/app/xuatkho/xuathang/xuathang.page.ts ***!
  \***************************************************/
/*! exports provided: XuathangPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuathangPage", function() { return XuathangPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_function_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/function.service */ "./src/app/function.service.ts");
/* harmony import */ var src_app_service_xuatkho_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/xuatkho.service */ "./src/app/service/xuatkho.service.ts");
/* harmony import */ var src_app_service_AlertService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/AlertService */ "./src/app/service/AlertService.ts");
/* harmony import */ var src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/loading.service */ "./src/app/service/loading.service.ts");
/* harmony import */ var _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/printer/ngx */ "./node_modules/@ionic-native/printer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_service_toastService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/service/toastService */ "./src/app/service/toastService.ts");











let XuathangPage = class XuathangPage {
    constructor(Function, router, route, toastController, modalController, XuatkhoService, actionSheetController, AlertService, LoadingService, navController, printer, ToastService) {
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
        this.UserName = "";
        this.Keyword = "";
        this.currentPage = 0;
        this.sendData = {
            "officeid": "1",
            "tu_ngay": "2023-12-01T15:33:02.835+07:00",
            "den_ngay": "2023-12-23T08:33:02.835Z",
            "dieukien": ""
        };
        this.listItem = [];
        this.listItemSearch = [];
        this.sendChungtu = {
            "nam_du_lieu": "2023",
            "loaictid": 2
        };
        this.timeout = '';
        this.title = '';
        this.keyword = '';
        this.ChungTuInfo = {};
        this.countItem = 0;
        this.sumTT = 0;
        this.checkCalender = false;
        this.checkSearch = false;
        this.route.queryParams.subscribe(params => {
            this.sendChungtu.loaictid = params.LoaiCTID;
            this.title = params.DienGiai;
        });
        this.sendChungtu.nam_du_lieu = new Date().getFullYear().toString();
        // var currentDate = new Date();
        // var month = currentDate.getMonth();
        // var year = currentDate.getFullYear();
        // var nextMonthDate = new Date(year, month + 1, 1);
        // // Giảm đi 1 ngày từ ngày đầu tiên của tháng tiếp theo để lấy ngày cuối cùng của tháng hiện tại
        // var lastEndOfMonth = new Date(nextMonthDate.getTime() - 1);
        // const dayEnd = lastEndOfMonth.getDate();
        // var newMonth = this.convDate(month + 1);
        // this.sendData.tu_ngay = `${year}-${newMonth}-01`;
        // this.sendData.den_ngay = `${year}-${newMonth}-${dayEnd}`;
    }
    ngOnInit() {
        this.getData();
    }
    print() {
        var myDiv = document.getElementById("myDiv");
        var divContent = myDiv.outerHTML;
        this.printer.isAvailable().then((onsuccess) => {
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
    convDate(number) {
        return number < 10 ? `0${number}` : number;
    }
    getData() {
        console.log('this.sendChungtu', this.sendChungtu);
        this.LoadingService.setValue(true);
        this.XuatkhoService.getChungtu(this.sendChungtu).subscribe((response) => {
            this.listItem = response;
            this.listItemSearch = response;
            this.countItem = response.length;
            this.sumMoney();
            // console.log('response123', response);
            this.LoadingService.setValue(false);
        }, (error) => {
            setTimeout(() => {
                console.log('error', error);
                this.LoadingService.setValue(false);
            }, 1000);
        });
    }
    sumMoney() {
        this.sumTT = 0;
        for (let i = 0; i < this.listItem.length; i++) {
            this.sumTT = this.sumTT + this.listItem[i].TongTien;
        }
    }
    openModal(isCreate, ChungTuID, ThoiDiem) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var item = {
                "isCreate": isCreate,
                "ChungTuID": ChungTuID,
                "nam_du_lieu": ThoiDiem === null || ThoiDiem === void 0 ? void 0 : ThoiDiem.slice(0, 4),
                "DienGiai": this.title,
                "LoaiCTID": this.sendChungtu.loaictid
            };
            if (this.title == "Xuất bán lẻ") {
                this.navController.navigateBack(['xuathang-addnew'], {
                    queryParams: item
                });
            }
            else if (this.title == "Nhập mua") {
                this.navController.navigateBack(['nhaphang-update'], {
                    queryParams: item
                });
            }
        });
    }
    presentActionSheet(ChungTuID, ThoiDiem) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var listBtn = [
                {
                    text: 'Chi tiết',
                    icon: 'document-attach-outline',
                    handler: () => {
                        this.openDetail(ChungTuID, String(ThoiDiem));
                    },
                },
                {
                    text: 'Sửa phiếu',
                    icon: 'create-outline',
                    handler: () => {
                        this.openModal(false, ChungTuID, String(ThoiDiem));
                    },
                },
                {
                    text: 'Xóa phiếu',
                    role: 'destructive',
                    icon: 'trash',
                    handler: () => {
                        this.confirmDelete();
                    },
                },
            ];
            if (this.title == "Xuất bán lẻ") {
                var print = {
                    text: 'In phiếu',
                    icon: 'print-outline',
                    handler: () => {
                        this.print();
                    },
                };
                listBtn.splice(0, 0, print);
            }
            this.ChungTuInfo = {
                "ChungTuID": ChungTuID,
                "nam_du_lieu": ThoiDiem === null || ThoiDiem === void 0 ? void 0 : ThoiDiem.slice(0, 4),
            };
            const actionSheet = yield this.actionSheetController.create({
                cssClass: 'left-align-buttons',
                buttons: listBtn
            });
            yield actionSheet.present();
            const { role } = yield actionSheet.onDidDismiss();
        });
    }
    confirmDelete() {
        this.ChungTuInfo.ChungTuID = String(this.ChungTuInfo.ChungTuID);
        this.AlertService.presentAlert(`Xác nhận xóa phiếu?`).then(res => {
            if (res == 'true') {
                this.LoadingService.setValue(true);
                this.XuatkhoService.deleteXuatHang(this.ChungTuInfo).subscribe((response) => {
                    var res = JSON.parse(response._body);
                    if (res.code == 200) {
                        this.ToastService.successToast(res.message);
                        this.getData();
                    }
                    else {
                        this.ToastService.errorToast(res.message);
                    }
                    this.LoadingService.setValue(false);
                }, (error) => {
                    setTimeout(() => {
                        console.log('error', error);
                    }, 1000);
                });
            }
        });
    }
    onSearch(e) {
        var arrPlan = [];
        this.keyword = e.target.value;
        if (!this.keyword) {
            arrPlan = this.listItemSearch;
        }
        else {
            clearTimeout(this.timeout);
            var $this = this;
            this.timeout = setTimeout(function () {
                $this.listItemSearch.find((o, i) => {
                    if (o.SoCT.toLowerCase().includes($this.keyword.toLowerCase()) == true) {
                        arrPlan.push($this.listItemSearch[i]);
                    }
                });
                $this.listItem = arrPlan;
                $this.countItem = arrPlan.length;
            }, 1000);
        }
    }
    deleteSearch() {
        this.sendData.dieukien = '';
    }
    changeYear(year) {
        this.sendChungtu.nam_du_lieu = year.slice(0, 4);
        this.getData();
    }
    openDetail(ChungTuID, ThoiDiem) {
        var item = {
            "ChungTuID": ChungTuID,
            "nam_du_lieu": ThoiDiem === null || ThoiDiem === void 0 ? void 0 : ThoiDiem.slice(0, 4),
            "DienGiai": this.title,
            "LoaiCTID": this.sendChungtu.loaictid
        };
        this.navController.navigateBack(['xuathang-detail'], {
            queryParams: item
        });
    }
    openBack() {
        this.navController.navigateBack(['tabs/tab3']);
        // this.router.navigateByUrl("tabs/tab3");
    }
};
XuathangPage.ctorParameters = () => [
    { type: src_app_function_service__WEBPACK_IMPORTED_MODULE_4__["FunctionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_service_xuatkho_service__WEBPACK_IMPORTED_MODULE_5__["XuatkhoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: src_app_service_AlertService__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_8__["Printer"] },
    { type: src_app_service_toastService__WEBPACK_IMPORTED_MODULE_9__["ToastService"] }
];
XuathangPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"],] }]
};
XuathangPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-xuathang',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./xuathang.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/xuatkho/xuathang/xuathang.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./xuathang.page.scss */ "./src/app/xuatkho/xuathang/xuathang.page.scss")).default]
    })
], XuathangPage);



/***/ })

}]);
//# sourceMappingURL=xuatkho-xuathang-xuathang-module-es2015.js.map