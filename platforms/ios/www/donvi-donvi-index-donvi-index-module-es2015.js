(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donvi-donvi-index-donvi-index-module"],{

/***/ "./src/app/donvi/donvi-index/donvi-index-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/donvi/donvi-index/donvi-index-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: DonviIndexPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonviIndexPageRoutingModule", function() { return DonviIndexPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _donvi_index_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./donvi-index.page */ "./src/app/donvi/donvi-index/donvi-index.page.ts");




const routes = [
    {
        path: '',
        component: _donvi_index_page__WEBPACK_IMPORTED_MODULE_3__["DonviIndexPage"]
    }
];
let DonviIndexPageRoutingModule = class DonviIndexPageRoutingModule {
};
DonviIndexPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DonviIndexPageRoutingModule);



/***/ }),

/***/ "./src/app/donvi/donvi-index/donvi-index.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/donvi/donvi-index/donvi-index.module.ts ***!
  \*********************************************************/
/*! exports provided: DonviIndexPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonviIndexPageModule", function() { return DonviIndexPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _donvi_index_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./donvi-index-routing.module */ "./src/app/donvi/donvi-index/donvi-index-routing.module.ts");
/* harmony import */ var _donvi_index_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./donvi-index.page */ "./src/app/donvi/donvi-index/donvi-index.page.ts");







let DonviIndexPageModule = class DonviIndexPageModule {
};
DonviIndexPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _donvi_index_routing_module__WEBPACK_IMPORTED_MODULE_5__["DonviIndexPageRoutingModule"]
        ],
        declarations: [_donvi_index_page__WEBPACK_IMPORTED_MODULE_6__["DonviIndexPage"]]
    })
], DonviIndexPageModule);



/***/ }),

/***/ "./src/app/service/global.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/global.service.ts ***!
  \*******************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




// import { StringResources } from '@app/models/sharedmodels';
let GlobalService = class GlobalService {
    constructor(alertController, modalController) {
        this.alertController = alertController;
        this.modalController = modalController;
        this.controlMove = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('Quản lý trạm');
        this.sendMove = this.controlMove.asObservable();
    }
    changeMoveCont(item) {
        setTimeout(() => {
            this.controlMove.next(item);
        });
    }
    presentAlert(question, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: question,
                message: message,
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
    closeModalSenData(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onClosedData = item;
            yield this.modalController.dismiss(onClosedData);
        });
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // const onClosedData: string = "ok";
            yield this.modalController.dismiss();
        });
    }
};
GlobalService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
GlobalService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GlobalService);



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



/***/ })

}]);
//# sourceMappingURL=donvi-donvi-index-donvi-index-module-es2015.js.map