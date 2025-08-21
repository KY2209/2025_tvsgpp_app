(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vattu-vattu-create-vattu-create-module"],{

/***/ "./src/app/vattu/vattu-create/vattu-create-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/vattu/vattu-create/vattu-create-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: VattuCreatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VattuCreatePageRoutingModule", function() { return VattuCreatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _vattu_create_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vattu-create.page */ "./src/app/vattu/vattu-create/vattu-create.page.ts");




const routes = [
    {
        path: '',
        component: _vattu_create_page__WEBPACK_IMPORTED_MODULE_3__["VattuCreatePage"]
    }
];
let VattuCreatePageRoutingModule = class VattuCreatePageRoutingModule {
};
VattuCreatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VattuCreatePageRoutingModule);



/***/ }),

/***/ "./src/app/vattu/vattu-create/vattu-create.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/vattu/vattu-create/vattu-create.module.ts ***!
  \***********************************************************/
/*! exports provided: VattuCreatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VattuCreatePageModule", function() { return VattuCreatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _vattu_create_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vattu-create-routing.module */ "./src/app/vattu/vattu-create/vattu-create-routing.module.ts");
/* harmony import */ var _vattu_create_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vattu-create.page */ "./src/app/vattu/vattu-create/vattu-create.page.ts");







let VattuCreatePageModule = class VattuCreatePageModule {
};
VattuCreatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _vattu_create_routing_module__WEBPACK_IMPORTED_MODULE_5__["VattuCreatePageRoutingModule"]
        ],
        declarations: [_vattu_create_page__WEBPACK_IMPORTED_MODULE_6__["VattuCreatePage"]]
    })
], VattuCreatePageModule);



/***/ })

}]);
//# sourceMappingURL=vattu-vattu-create-vattu-create-module-es2015.js.map