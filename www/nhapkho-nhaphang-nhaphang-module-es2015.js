(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nhapkho-nhaphang-nhaphang-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nhapkho/nhaphang/nhaphang.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nhapkho/nhaphang/nhaphang.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar style=\"--border-width:0px!important;--background:#fff;\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-item lines=\"none\"\r\n        style=\"--background:#fff; --padding-start: 0px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon *ngIf=\"TabIndex == 1\" (click)=\"openBack()\" name=\"chevron-back-outline\" style=\"color: #7077d6;\">\r\n        </ion-icon>\r\n        <ion-icon *ngIf=\"TabIndex != 1\" name=\"chevron-back-outline\" style=\"color: #f1f1f7;\"></ion-icon>\r\n      </ion-item>\r\n    </ion-buttons>\r\n\r\n    <ion-title style=\"text-align: center!important; color: #7077d6;\">\r\n      <table style=\"width: 100%!important; max-width: 100%!important;\">\r\n        <tr>\r\n          <td style=\"text-align: center!important;\">\r\n            <div style=\"text-align: center;\">\r\n              Phiếu nhập hàng\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n\r\n\r\n    </ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div *ngIf=\"TabIndex == 1\">\r\n\r\n    <div style=\"padding: 10px;\">\r\n\r\n      <table style=\"width: 100%!important; max-width: 100%!important;\">\r\n        <tr>\r\n          <td style=\"width: 50%!important; padding: 10px!important;\">\r\n            <ion-datetime displayFormat=\"DD/MM/YYYY\" min=\"2015-01-01\" max=\"2025-12-31\" [(ngModel)]=\"tuNgay\"\r\n              Style=\"width: 100%; text-align: center; border-radius: 3px; color: #000;--padding-top: 5px;--padding-end: 5;--padding-bottom: 5px;--padding-start: 0px; border: solid 1px #ddd;\">\r\n            </ion-datetime>\r\n          </td>\r\n          <td style=\"width: 50%!important; padding: 10px!important;\">\r\n            <ion-datetime displayFormat=\"DD/MM/YYYY\" min=\"2015-01-01\" max=\"2025-12-31\" [(ngModel)]=\"denNgay\"\r\n              Style=\"width: 100%; text-align: center; border-radius: 3px; color: #000;--padding-top: 5px;--padding-end: 5;--padding-bottom: 5px;--padding-start: 0px; border: solid 1px #ddd;\">\r\n            </ion-datetime>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n\r\n      <table style=\"width: 100%!important; max-width: 100%!important;\">\r\n        <tr>\r\n          <td style=\"font-size: 20px!important;padding-left: 5px; padding-top: 5px; text-align: justify;width:100%;\">\r\n            <select value=\"{{loaiChungTu}}\" (change)=\"onLoaiCTChange($event)\"\r\n              style=\"font-size: 20px!important; width: 100%!important; max-width: 100%!important; --padding-top: 0px; --padding-end: 5px; --padding-bottom: 0px; --padding-start: 0px; border: solid 0px #ddd;background-color: #fff;\">\r\n              <option *ngFor=\"let item of lstChungTu\" value=\"{{item.LoaiCTID}}\">\r\n                {{item.DienGiai}}\r\n              </option>\r\n            </select>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n\r\n      <table style=\"width: 100%!important; max-width: 100%!important;\">\r\n        <tr>\r\n          <td style=\"padding: 0px!important;\">\r\n            <ion-searchbar showCancelButton=\"always\" color=\"light\" style=\"--border-radius:1px;\"\r\n              placeholder=\"Tìm kiếm thông tin\" [(ngModel)]=\"Keyword\" (ionInput)=\"filterInfo($event)\"\r\n              style=\"--font-size:20px!important;\" clearInput>\r\n            </ion-searchbar>\r\n          </td>\r\n          <td style=\"padding: 0px!important; padding: 10px!important; width: 40px; text-align: right;\">\r\n            <ion-icon (click)=\"getData()\" name=\"search-outline\" style=\"font-size: 25px;\r\n            margin-bottom: -5px !important;            \r\n            padding: 9px;\r\n            border: solid 1px #7077d6;\r\n            border-radius: 4px;\r\n            color: #7077d6;\"></ion-icon>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n\r\n      <div *ngFor=\"let item of Bill\" style=\"margin-top: 20px;\">\r\n\r\n        <div style=\"margin-bottom: 15px; border-bottom: solid 1px #ddd; padding-bottom: 5px;\">\r\n          <table style=\"width: 100%!important; max-width: 100%!important; margin-bottom: 0px;\">\r\n            <tr>\r\n              <td style=\"width: 30px; padding-top: 0px!important; vertical-align: top; text-align: center;\">\r\n                <ion-icon name=\"document-text-outline\" style=\"font-size: 24px;\"></ion-icon>\r\n              </td>\r\n              <td style=\"padding-bottom: 5px;\">\r\n                <div style=\"font-size: 15px;\">\r\n                  {{item.SoCT}}\r\n                </div>\r\n                <div style=\"font-size: 14px; padding-top: 5px;\">\r\n                  {{item.NgayCT}}\r\n                </div>\r\n              </td>\r\n              <td\r\n                style=\"width: 150px!important; padding: 5px; padding-top: 0px!important; vertical-align: top; text-align: right;\">\r\n                <div style=\"font-weight: bold;color: #7077d6;\">\r\n                  {{item.TongTien|number}} đ\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td colspan=\"3\">\r\n                <ion-button shape=\"round\" (click)=\"syncBill(item.ChungTuID)\">\r\n                  Đồng bộ\r\n                </ion-button>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n  <ion-fab *ngIf=\"this.TabIndex == 1\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button style=\"width: 50px!important; height: 50px!important;\">\r\n      <ion-icon name=\"add\" (click)=\"addNew()\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/nhapkho/nhaphang/nhaphang-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/nhapkho/nhaphang/nhaphang-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: NhaphangPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhaphangPageRoutingModule", function() { return NhaphangPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nhaphang_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nhaphang.page */ "./src/app/nhapkho/nhaphang/nhaphang.page.ts");




const routes = [
    {
        path: '',
        component: _nhaphang_page__WEBPACK_IMPORTED_MODULE_3__["NhaphangPage"]
    }
];
let NhaphangPageRoutingModule = class NhaphangPageRoutingModule {
};
NhaphangPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NhaphangPageRoutingModule);



/***/ }),

/***/ "./src/app/nhapkho/nhaphang/nhaphang.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/nhapkho/nhaphang/nhaphang.module.ts ***!
  \*****************************************************/
/*! exports provided: NhaphangPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhaphangPageModule", function() { return NhaphangPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _nhaphang_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nhaphang-routing.module */ "./src/app/nhapkho/nhaphang/nhaphang-routing.module.ts");
/* harmony import */ var _nhaphang_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nhaphang.page */ "./src/app/nhapkho/nhaphang/nhaphang.page.ts");







let NhaphangPageModule = class NhaphangPageModule {
};
NhaphangPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _nhaphang_routing_module__WEBPACK_IMPORTED_MODULE_5__["NhaphangPageRoutingModule"]
        ],
        declarations: [_nhaphang_page__WEBPACK_IMPORTED_MODULE_6__["NhaphangPage"]]
    })
], NhaphangPageModule);



/***/ }),

/***/ "./src/app/nhapkho/nhaphang/nhaphang.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/nhapkho/nhaphang/nhaphang.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25oYXBraG8vbmhhcGhhbmcvbmhhcGhhbmcucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/nhapkho/nhaphang/nhaphang.page.ts":
/*!***************************************************!*\
  !*** ./src/app/nhapkho/nhaphang/nhaphang.page.ts ***!
  \***************************************************/
/*! exports provided: NhaphangPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhaphangPage", function() { return NhaphangPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _function_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../function.service */ "./src/app/function.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nhaphang_addnew_nhaphang_addnew_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../nhaphang-addnew/nhaphang-addnew.page */ "./src/app/nhapkho/nhaphang-addnew/nhaphang-addnew.page.ts");









let NhaphangPage = class NhaphangPage {
    constructor(Function, router, toastController, modalController) {
        this.Function = Function;
        this.router = router;
        this.toastController = toastController;
        this.modalController = modalController;
        this.TabIndex = 1;
        this.UserName = "";
        this.Keyword = "";
        this.currentPage = 0;
        this.pageSize = 20;
        this.totalRecord = 0;
        this.totalPage = 0;
        this.tuNgay = new Date().toISOString();
        this.denNgay = new Date(new Date().getTime() + (1 * (1 * 24 * 60 * 60 * 1000))).toISOString();
        this._id = "";
        this._createDate = "";
        this._totalMoney = 0;
        this._note = "";
        this.Message = "";
        this.sendChungtu = {
            "nam_du_lieu": "2023",
            "loaictid": 1
        };
        this.loaiChungTu = 0;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.getLoaiCT();
        this.getData();
    }
    getData() {
        // let officeId = localStorage.getItem("officeId")
        // this.BillData = this.Function.getTongHopNhapKho(officeId, this.tuNgay, this.denNgay, this.Keyword)
        // if (this.BillData != null) {
        //   this.BillData.subscribe(data => {
        //     console.log(data);
        //     this.Bill = data;
        //     this.BillAll = this.Bill;
        //   })
        // }
        this.sendChungtu.nam_du_lieu = new Date().getFullYear().toString();
        this.sendChungtu.loaictid = this.loaiChungTu;
        this.Function.getChungtu(this.sendChungtu).subscribe((response) => {
            console.log(response);
            this.Bill = response;
            this.BillAll = this.Bill;
        }, (error) => {
            setTimeout(() => {
                console.log('error', error);
            }, 1000);
        });
    }
    onLoaiCTChange(loaiCT) {
        let val = loaiCT.target.value;
        console.log("146", val);
        this.loaiChungTu = Number(val);
        this.getData();
    }
    getLoaiCT() {
        this.Function.getLoaiCT().subscribe(data => {
            let index = data.indexOf(1);
            data.splice(index);
            index = data.indexOf(2);
            data.splice(index);
            data.splice(1, 1);
            console.log("141", data);
            this.lstChungTu = data;
        });
    }
    syncBill(id) {
        let data = this.Function.dongboCT(id.toString());
        if (data) {
            data.subscribe(rs => {
                console.log(rs);
                if (rs.code == 200) {
                    if (rs.message != "") {
                        this.presentToastMsg(rs.message);
                    }
                }
                else {
                    this.presentToastMsg1(rs.message);
                }
            });
        }
    }
    addNew() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _nhaphang_addnew_nhaphang_addnew_page__WEBPACK_IMPORTED_MODULE_6__["NhaphangAddnewPage"],
                swipeToClose: true,
                componentProps: {}
            });
            modal.onDidDismiss().then((dataReturned) => {
                console.log('dataReturned', dataReturned);
            });
            return yield modal.present();
        });
    }
    presentToastMsg(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: '<center>' + msg + '</center>',
                color: 'success',
                duration: 2000
            });
            toast.present();
        });
    }
    presentToastMsg1(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: '<center>' + msg + '</center>',
                color: 'danger',
                duration: 2000
            });
            toast.present();
        });
    }
    filterInfo(pid) {
        const val = pid.target.value;
        console.log(val);
        if (val && val.trim() != '') {
            this.Bill = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.values(this.BillAll);
            this.Bill = this.Bill.filter((info) => {
                return (info.SoCT.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.Bill = this.BillAll;
        }
    }
    closeTab() {
        this.TabIndex = 1;
    }
    openTab(_Tabindex) {
        this.TabIndex = _Tabindex;
    }
    openBack() {
        this.router.navigateByUrl("tabs/tab3");
    }
};
NhaphangPage.ctorParameters = () => [
    { type: _function_service__WEBPACK_IMPORTED_MODULE_4__["FunctionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
NhaphangPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"],] }]
};
NhaphangPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nhaphang',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./nhaphang.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nhapkho/nhaphang/nhaphang.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./nhaphang.page.scss */ "./src/app/nhapkho/nhaphang/nhaphang.page.scss")).default]
    })
], NhaphangPage);



/***/ })

}]);
//# sourceMappingURL=nhapkho-nhaphang-nhaphang-module-es2015.js.map