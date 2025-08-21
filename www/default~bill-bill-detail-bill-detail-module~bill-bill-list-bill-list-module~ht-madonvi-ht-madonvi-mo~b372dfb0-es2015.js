(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~bill-bill-detail-bill-detail-module~bill-bill-list-bill-list-module~ht-madonvi-ht-madonvi-mo~b372dfb0"],{

/***/ "./src/app/function.service.ts":
/*!*************************************!*\
  !*** ./src/app/function.service.ts ***!
  \*************************************/
/*! exports provided: FunctionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionService", function() { return FunctionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/dist/esm/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var FunctionService_1;










let FunctionService = FunctionService_1 = class FunctionService {
    //public static apiUrl: string = "http://localhost:65302";
    constructor(http, router, toastController, http1, storage, modalController) {
        this.http = http;
        this.router = router;
        this.toastController = toastController;
        this.http1 = http1;
        this.storage = storage;
        this.modalController = modalController;
    }
    login(orgId, userName, passWord) {
        const userLogin = btoa(userName + ':' + passWord);
        let DeviceId = localStorage.getItem("DeviceId");
        if (DeviceId == null) {
            DeviceId = "8103a125-f127-4e92-ad46-21173c2bdaa3";
        }
        FunctionService_1.apiUrl = "https://" + orgId + ".tvsgpp.net/api/";
        // FunctionService.apiUrl = "http://localhost:65302/api/"
        src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].urlGpp = "https://" + orgId + ".tvsgpp.net/api/";
        const url = FunctionService_1.apiUrl + 'Login/' + DeviceId;
        const _headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        _headers.append('Authorization', 'Basic ' + userLogin);
        let options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({
            headers: _headers
        });
        return this.http.post(url, {}, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    getAllBillPagging(Keyword, Page, PageSize, TypeInput) {
        let objUserName = localStorage.getItem("objUserName");
        let link = localStorage.getItem("DbName");
        let tempObj = JSON.parse(objUserName);
        let expired = tempObj["expired"] || Date.now();
        let token = tempObj["Token"];
        var _url = FunctionService_1.apiUrl + "TablBill/GetAllBillPagging?Keyword=" + Keyword + "&Page=" + Page + "&PageSize=" + PageSize + "&TypeInput=" + TypeInput;
        var _header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'Application/json', "Authorization": "Bearer " + token.toString(), "connLink": link });
        var _option = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ method: _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestMethod"].Get, headers: _header });
        return this.http.get(_url, _option).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    getTonghopdoanhthu(officeId) {
        console.log("64", officeId);
        let _url = FunctionService_1.apiUrl + "Report/TongHopDoanhThu/" + officeId;
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
        return this.http.get(_url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    getBieudodoanhthu(officeId) {
        let _url = FunctionService_1.apiUrl + "Report/BieuDoDoanhThu/" + officeId;
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
        return this.http.get(_url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    getDoiSoatLienThongGPP(officeId) {
        let _url = FunctionService_1.apiUrl + "Report/DoiSoatLienThongGPP/" + officeId;
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
        return this.http.get(_url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    getDanhsachKho() {
        let _url = FunctionService_1.apiUrl + "Kho";
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
        return this.http.get(_url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    getTongHopNhapKho(officeId, tuNgay, denNgay, searchKey) {
        let _url = FunctionService_1.apiUrl + "Report/TongHopNhapKho";
        let _body = {
            "officeid": officeId,
            "tu_ngay": tuNgay,
            "den_ngay": denNgay,
            "dieukien": searchKey
        };
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
        return this.http.post(_url, _body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    getTongHopXuatKho(officeId, tuNgay, denNgay, searchKey) {
        let _url = FunctionService_1.apiUrl + "Report/TongHopXuatKho";
        let _body = {
            "officeid": officeId,
            "tu_ngay": tuNgay,
            "den_ngay": denNgay,
            "dieukien": searchKey
        };
        console.log(_body);
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
        return this.http.post(_url, _body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    getTongHopTonKho(officeId, tuNgay, searchKey) {
        let _url = FunctionService_1.apiUrl + "Report/TonKho";
        let _body = {
            "officeid": officeId,
            "thoidiem": tuNgay,
            "dieukien": searchKey
        };
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
        return this.http.post(_url, _body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    addnewPhieunhaphang(LoaiCTID, ChungTuID, SoCT, ThoiDiem, DVNhap, KhoNhap, ChiTietHang) {
        var root = JSON.stringify(ChiTietHang);
        var result = JSON.parse(root);
        let _url = FunctionService_1.apiUrl + "ChungTu";
        let _body = {
            "nam_du_lieu": ThoiDiem.substring(0, 4),
            "LoaiCTID": LoaiCTID,
            "ChungTuID": ChungTuID,
            "SoCT": SoCT,
            "ThoiDiem": ThoiDiem,
            "DienGiai": "",
            "DVNhap": DVNhap,
            "KhoNhap": KhoNhap,
            "ChiTietHang": result
            // {
            //   "MaVT": "HH0031",
            //   "DVT": "Chai",
            //   "SoLuong": 3,
            //   "DonGia": 63500,
            //   "GiaBanLe": 0,
            //   "GiaBanSy": 0,
            //   "ThanhTien": 190500,
            //   "VAT_Percent": 0,
            //   "VAT": 0,
            //   "ChietKhau_Percent": 0,
            //   "ChietKhau": 0,
            //   "TongTien": 190500,
            //   "HTTT": "TM",
            //   "LoHang": "0490623",
            //   "HanDung": "2025-06-30"
            // }
        };
        console.log(_body);
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
        return this.http.post(_url, _body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    getVatTu() {
        let _url = FunctionService_1.apiUrl + "VatTu";
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
        return this.http.get(_url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    getLoaiCT() {
        let _url = FunctionService_1.apiUrl + "LoaiCT";
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
        return this.http.get(_url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    dongboCT(ctId) {
        let _url = FunctionService_1.apiUrl + "GPP/DongBoDuLieuGPP";
        let _body = {
            "chungtuid": ctId
        };
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
        return this.http.post(_url, _body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    getThongBaoGPP(officeId, tuNgay, denNgay, searchKey) {
        let _url = FunctionService_1.apiUrl + "GPP/ThongBaoGPP";
        let _body = {
            "officeid": officeId,
            "tu_ngay": tuNgay,
            "den_ngay": denNgay,
            "dieukien": searchKey
        };
        console.log(_body);
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
        return this.http.post(_url, _body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    getThongBao() {
        let _url = FunctionService_1.apiUrl + "ThongBao";
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
        return this.http.get(_url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    getChiTietThongBao(Id) {
        let _url = FunctionService_1.apiUrl + "ThongBao/" + Id;
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
        return this.http.get(_url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    getChungtu(item) {
        console.log(item);
        let _url = FunctionService_1.apiUrl + `ChungTu?nam_du_lieu=${item.nam_du_lieu}&loaictid=${item.loaictid}`;
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
        return this.http.get(_url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    getValue() {
        let userId = "";
        this.storage.get("userId").then(id => {
            userId = id;
        });
        let _url = FunctionService_1.apiUrl + "Users";
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
        return this.http.get(_url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    getDSTK() {
        let _url = FunctionService_1.apiUrl + "TaiKhoan";
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
        return this.http.get(_url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    convertMoney1(param) {
        let s = param.toString();
        if (Number(s) < 0) {
            s = s.replace("-", "");
            if (param.toString().length == 5) {
                let a = s.substring(0, 2);
                let b = s.substring(2, 5);
                let c = "-" + a + "," + b;
                s = c;
            }
            else if (s.length == 6) {
                let a = s.substring(0, 3);
                let b = s.substring(3, 6);
                let c = "-" + a + "," + b;
                s = c;
            }
            else if (s.length == 7) {
                let a = s.substring(0, 1);
                let b = s.substring(1, 4);
                let c = s.substring(4, 7);
                let d = "-" + a + "," + b + "," + c;
                s = d;
            }
            else if (s.length == 8) {
                let a = s.substring(0, 2);
                let b = s.substring(2, 5);
                let c = s.substring(5, 8);
                let d = s.substring(8, 10);
                let e = "-" + a + "," + b + "," + c + "," + d;
                s = e;
            }
        }
        else {
            if (param.toString().length == 5) {
                let a = s.substring(0, 2);
                let b = s.substring(2, 5);
                let c = a + "," + b;
                s = c;
            }
            else if (s.length == 6) {
                let a = s.substring(0, 3);
                let b = s.substring(3, 6);
                let c = a + "," + b;
                s = c;
            }
            else if (s.length == 7) {
                let a = s.substring(0, 1);
                let b = s.substring(1, 4);
                let c = s.substring(4, 7);
                let d = a + "," + b + "," + c;
                s = d;
            }
            else if (s.length == 8) {
                let a = s.substring(0, 2);
                let b = s.substring(2, 5);
                let c = s.substring(5, 8);
                let d = s.substring(8, 10);
                let e = a + "," + b + "," + c + "," + d;
                s = e;
            }
            else if (s.length == 9) {
                let a = s.substring(0, 3);
                let b = s.substring(3, 6);
                let c = s.substring(6, 9);
                let e = a + "," + b + "," + c;
                s = e;
            }
            else if (s.length == 10) {
                let a = s.substring(0, 1);
                let b = s.substring(1, 4);
                let c = s.substring(4, 7);
                let d = s.substring(7, 10);
                let e = a + "," + b + "," + c + "," + d;
                s = e;
            }
        }
        return s;
    }
    randomBetween(min, max) {
        let rs = "";
        if (min < 0) {
            rs = min + Math.random() * (Math.abs(min) + max);
            rs = rs.toString().replace(".", "");
            rs = rs.substring(0, 4);
            return rs;
        }
        else {
            rs = (min + Math.random() * max);
            rs = rs.toString().replace(".", "");
            rs = rs.substring(0, 4);
            return rs;
        }
    }
};
FunctionService.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].urlGpp;
FunctionService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
FunctionService = FunctionService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FunctionService);



/***/ })

}]);
//# sourceMappingURL=default~bill-bill-detail-bill-detail-module~bill-bill-list-bill-list-module~ht-madonvi-ht-madonvi-mo~b372dfb0-es2015.js.map