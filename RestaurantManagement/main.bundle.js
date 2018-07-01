webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-logout></app-logout>\n<div class=\"row\">\n  <div class=\"col-md-2 buttons\">\n\n    <a routerLink = \"/admin/food-item/grid-view\" routerLinkActive = \"active-link\">\n    <div class=\"col-md-12 regulars\">\n      Food Items\n    </div>\n    </a>\n\n    <a routerLink = \"/admin/inventory/list-view\" routerLinkActive = \"active-link\">\n      <div class=\"col-md-12 regulars\">\n        Inventories\n      </div>\n    </a>\n\n    <a routerLink = \"/admin/orders/list-view\" routerLinkActive = \"active-link \">\n      <div class=\"col-md-12 regulars \">\n        Orders\n      </div>\n    </a>\n\n    <a routerLink = \"/admin/tables\" routerLinkActive = \"active-link\">\n      <div class=\"col-md-12 regulars\">\n        Tables\n      </div>\n    </a>\n\n    <a routerLink = \"/admin/register\" routerLinkActive = \"active-link\">\n      <div class=\"col-md-12 regulars\">\n        Registration\n      </div>\n    </a>\n\n\n\n\n  </div>\n  <div class=\"col-md-10 go-left\">\n    <router-outlet></router-outlet>\n  </div>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/***/ (function(module, exports) {

module.exports = ".all-categories-button {\n  width: 100%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #d32039;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  margin-left: 5px;\n  margin-top: 22px;\n  font-weight: bold; }\n\n.all-categories-button:hover {\n  background-color: #d32039;\n  color: #ffffdf;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  border: 1.2px solid #ffffdf;\n  border-radius: 5px; }\n\n/*\n.all-categories-button:target{\n  background-color: #d32039;\n  color: #ffffdf;\n  font-family:\"Arial Narrow\";\n  font-weight:bold;\n  border: 1.2px solid #ffffdf;\n  border-radius: 5px;\n}\n*/\n\n.all-categories-button:focus {\n  outline: 0; }\n\n.buttons {\n  margin-top: 5px;\n  /*-webkit-box-shadow: 0px 10px 25px 0px rgba(161, 18, 18, 0.2);\n  -moz-box-shadow: 0px 10px 25px 0px rgba(161, 18, 18, 0.2);\n  box-shadow: 0px 10px 25px 0px rgba(161, 18, 18, 0.2);*/\n  padding-bottom: 20px;\n  border: 1px;\n  border-radius: 10px; }\n\n.go-left {\n  padding-left: 25px; }\n\n.active-link {\n  text-decoration: none;\n  color: rgba(119, 0, 0, 0.98); }\n\n.regulars {\n  width: 100%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  border: 1.2px solid  #d32039;\n  border-radius: 5px;\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  margin-left: 5px;\n  margin-top: 22px;\n  font-weight: bold;\n  text-align: center; }\n\na {\n  color: #d32039;\n  background-color: #ffffdf; }\n\na:hover {\n  color: rgba(119, 0, 0, 0.98);\n  background-color: #ffffdf; }\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-admin',
        template: __webpack_require__("./src/app/admin/admin.component.html"),
        styles: [__webpack_require__("./src/app/admin/admin.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AdminComponent);

//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "./src/app/admin/food-item/add-food-item-image/add-food-item-image.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <form (ngSubmit) = \"saveFoodItemImage(Image)\" #imageForm=ngForm>\n  <div class=\"col-md-offset-1 col-md-9 order-detail\">\n    <div class=\"row buttons\">\n      <div class=\"col-md-2 back\">\n        <button\n          type=\"button\"\n          class=\"back-button-cancel\"\n          (click)=\"skipFoodItemImage()\"><i class=\"fa fa-times-circle-o\" aria-hidden=\"true\"></i>\n          Skip</button>\n      </div>\n      <div class=\"col-md-offset-8 col-md-2 delete\">\n        <button\n          type=\"submit\"\n          class=\"back-button\"\n          [disabled]=\"Image.value == '' || !imageForm.valid\">\n          <i class=\"fa fa-bookmark\" aria-hidden=\"true\"></i> Save</button>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12 general\">\n        Optional Information\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12 units\">\n        Add an image for this item\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-offset-4 col-md-4\">\n        <img [src]=\"imageUrl\"\n             class=\"img-responsive image\"\n             style= \"height: 34vh\"\n        >\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <input type=\"file\"\n               #Image\n               accept=\"image/*\"\n               (change)=\"handleFileInput($event.target.files)\">\n      </div>\n    </div>\n\n\n  </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/food-item/add-food-item-image/add-food-item-image.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Acme|Aladin|Berkshire+Swash|Cabin+Sketch|Chewy|Fredoka+One|Kanit|Lobster|Londrina+Solid|Righteous|Rock+Salt\");\n.image {\n  border: 1px solid #6b0000;\n  border-radius: 10px; }\n.name, .price {\n  margin-top: 24px;\n  color: #ae0000;\n  font-family: \"Berlin Sans FB\";\n  font-size: 20px; }\ninput {\n  font-family: \"Times New Roman\";\n  color: #6a0d0e;\n  font-weight: bold;\n  font-size: 13px;\n  border-radius: 2px; }\n.header {\n  color: #770000;\n  font-size: 21px;\n  font-family: \"Berlin Sans FB\";\n  text-align: left;\n  margin-top: 1px;\n  border: 1px;\n  border-radius: 5px;\n  padding-top: 1px;\n  padding-bottom: 5px; }\n.main-row {\n  border-bottom: 2px double #dfdfdf; }\n.body {\n  height: 350px;\n  overflow-y: scroll;\n  border: 1px solid #cbc6cb;\n  border-radius: 5px; }\n::-webkit-scrollbar {\n  width: 4px; }\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px; }\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.61);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n.hodoo {\n  font-family: 'Berkshire Swash', cursive;\n  font-size: 40px;\n  text-align: right;\n  color: #7e0000; }\n.hodoo:focus {\n  outline: 0; }\n.dashboard {\n  width: 20%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #aa0909;\n  background-color: ghostwhite;\n  /*border: 1.2px solid #ae0000;\n  border-radius: 5px;*/\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold;\n  text-align: center;\n  margin-top: 15px; }\n.dashboard:hover {\n  color: #6a0d0e;\n  background-color: ghostwhite;\n  font-family: \"Arial Narrow\";\n  font-weight: bold; }\n.order-detail {\n  background-color: #fcfcfc;\n  color: #910000;\n  font-family: \"Times New Roman\";\n  border: 2px double #e2e2e2;\n  border-radius: 5px;\n  margin-top: 6px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  background-color: white; }\n.order-ref, .order-date {\n  border-right: 2px double #c5bdbf;\n  font-weight: bold;\n  font-size: 16px; }\n.upper-div {\n  border-bottom: 2px double #dfdfdf; }\n.id, .date {\n  font-size: 15px;\n  font-weight: bold; }\n.prod {\n  font-size: 15px;\n  font-weight: bold;\n  padding-top: 13px;\n  padding-bottom: 13px;\n  border-bottom: 1px double #dfdfdf;\n  text-align: center;\n  color: #221d1f;\n  background-color: #f6f6f6; }\n.units {\n  font-size: 15px;\n  font-weight: bold;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  border-bottom: 1px double #dfdfdf;\n  text-align: center; }\n.units-details {\n  font-size: 13px;\n  font-weight: bold;\n  padding-top: 4px;\n  padding-bottom: 4px; }\n.total {\n  font-weight: bold;\n  padding-top: 20px;\n  padding-bottom: 5px;\n  text-align: right;\n  font-size: 20px; }\n.bdt {\n  font-weight: bold;\n  padding-top: 20px;\n  padding-bottom: 5px;\n  text-align: left;\n  font-size: 20px; }\n.scrollable-div {\n  max-height: 20vh;\n  overflow-y: scroll;\n  overflow-x: hidden; }\n::-webkit-scrollbar {\n  width: 3px; }\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px; }\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.61);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n.back-button {\n  width: 60%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #9b0f12;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.back-button-cancel {\n  width: 65%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #9b0f12;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.delete {\n  text-align: right; }\n.back-button:hover {\n  width: 60%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #ffffdf;\n  background-color: #9b0f12;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.back-button-cancel:hover {\n  width: 65%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #ffffdf;\n  background-color: #9b0f12;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.back-button-cancel:focus {\n  outline: 0; }\n.back-button:focus {\n  outline: 0; }\n.buttons {\n  padding-top: 2px;\n  padding-bottom: 2px; }\n.sub-links {\n  color: #b3acaf;\n  font-family: \"Arial Narrow\";\n  font-size: 15px;\n  font-weight: bold; }\n.sub-links:hover {\n  color: #6a0d0e;\n  font-family: \"Arial Narrow\";\n  font-size: 15px;\n  font-weight: bold; }\na {\n  color: #b3acaf; }\n.link {\n  color: #6a0d0e; }\n.pop-up {\n  color: #7e0000;\n  font-size: 14px;\n  font-family: \"Times New Roman\";\n  text-align: center;\n  font-weight: bold; }\n.item-name {\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  color: #840d0f;\n  font-weight: bold;\n  text-align: left; }\n.selling-price {\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  color: #a80d0f;\n  text-align: left;\n  font-weight: bold; }\n.winning-price {\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  color: #a80d0f;\n  text-align: left;\n  font-weight: bold;\n  padding-top: 5px;\n  padding-bottom: 5px; }\n.loss {\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  color: white;\n  background-color: #840d0f;\n  border: 1px soild white;\n  border-radius: 5px;\n  text-align: left;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  margin-left: 14px;\n  margin-top: 5px; }\nlabel {\n  color: #6a0d0e;\n  font-family: \"Times New Roman\"; }\n.making-price {\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  color: #6a0d0e;\n  font-weight: bold;\n  text-align: center;\n  padding-top: 30px; }\n.image {\n  height: 100%;\n  width: 100%;\n  border: 1px solid #ffffff;\n  border-radius: 10px; }\n.header {\n  padding-top: 15px;\n  padding-bottom: 10px; }\n.general {\n  font-size: 15px;\n  font-weight: bold;\n  padding-top: 13px;\n  padding-bottom: 13px;\n  border-bottom: 1px double #dfdfdf;\n  text-align: center;\n  color: #221d1f;\n  background-color: #f6f6f6; }\n.other {\n  text-align: center; }\n.units {\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  border-bottom: 1px double #dfdfdf; }\n.select {\n  font-family: \"Times New Roman\";\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  text-align: center; }\n.del-ing {\n  color: #9c0000;\n  font-size: 15px;\n  background-color: white;\n  border-right: 5px; }\n.del-ing:hover {\n  color: #8f0000; }\n.save-ingredient {\n  width: 100%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #ffffdf;\n  background-color: #a90f12;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.save-ingredient:hover {\n  font-family: \"Arial Narrow\";\n  color: #ffffdf;\n  background-color: #880f12;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.save-ingredient:focus {\n  outline: 0; }\n.warning {\n  color: #9c0000;\n  font-size: 14px;\n  font-family: \"Times New Roman\";\n  text-align: center;\n  font-weight: bold;\n  padding-top: 12px;\n  padding-bottom: 7px; }\n.scrollable-div {\n  max-height: 20vh;\n  overflow-y: scroll;\n  overflow-x: hidden; }\ninput {\n  color: #9c0000;\n  font-family: \"Times New Roman\"; }\n.prod-name {\n  padding-left: 35px; }\n.extra {\n  padding-left: 0;\n  padding-right: 0; }\n.serial-number {\n  font-size: 10px; }\n"

/***/ }),

/***/ "./src/app/admin/food-item/add-food-item-image/add-food-item-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFoodItemImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__ = __webpack_require__("./src/app/shared/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddFoodItemImageComponent = (function () {
    function AddFoodItemImageComponent(route, router, _dataStorageService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this._dataStorageService = _dataStorageService;
        this.fileToUpload = null;
        this.imageUrl = '/assets/noImage.png';
        this.route.params
            .subscribe(function (params) {
            _this.foodItemId = params['id'];
        });
    }
    AddFoodItemImageComponent.prototype.ngOnInit = function () {
    };
    AddFoodItemImageComponent.prototype.saveFoodItemImage = function (Image) {
        var _this = this;
        this._dataStorageService.saveFoodItemImage(this.foodItemId, this.fileToUpload).subscribe(function (data) {
            console.log('done');
            Image.value = null;
            _this.imageUrl = '/assets/noImage.png';
        });
        this.router.navigate(['admin/food-item/grid-view']);
    };
    AddFoodItemImageComponent.prototype.skipFoodItemImage = function () {
        this.router.navigate(['admin/food-item/grid-view']);
    };
    AddFoodItemImageComponent.prototype.handleFileInput = function (file) {
        var _this = this;
        this.fileToUpload = file.item(0);
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.imageUrl = event.target.result;
        };
        reader.readAsDataURL(this.fileToUpload);
    };
    return AddFoodItemImageComponent;
}());
AddFoodItemImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-add-food-item-image',
        template: __webpack_require__("./src/app/admin/food-item/add-food-item-image/add-food-item-image.component.html"),
        styles: [__webpack_require__("./src/app/admin/food-item/add-food-item-image/add-food-item-image.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__["a" /* DataStorageService */]) === "function" && _c || Object])
], AddFoodItemImageComponent);

var _a, _b, _c;
//# sourceMappingURL=add-food-item-image.component.js.map

/***/ }),

/***/ "./src/app/admin/food-item/add-new-food-item/add-new-food-item.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"row\">\n  <form (ngSubmit) = \"onSaveFoodItem(newFoodItem)\" #newFoodItem = \"ngForm\">\n  <div class=\"col-md-offset-1 col-md-9 order-detail\">\n    <div class=\"row buttons\">\n      <div class=\"col-md-2 back\">\n        <button class=\"back-button-cancel\"\n                type=\"reset\"\n                (click)=\"cancel()\"><i class=\"fa fa-times-circle-o\" aria-hidden=\"true\"></i>\n          Cancel</button>\n      </div>\n      <div class=\"col-md-offset-8 col-md-2 delete\">\n        <button class=\"back-button\"\n                [disabled]=\"!newFoodItem.valid || ingredients.length === 0\"\n                type=\"submit\"\n                title=\"Save this item\"\n                ><i class=\"fa fa-bookmark\" aria-hidden=\"true\"></i>\n          Save</button>\n      </div>\n    </div>\n\n\n    <div class=\"row header\">\n      <div class=\"col-md-2\">\n        <div class=\"row\">\n          <div class=\"col-md-12 image\">\n\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-10\">\n        <div class=\"row\">\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-8 item-name\">\n            <div class=\"form-group\">\n              <label>Item's Name</label>\n              <input\n                type=\"text\"\n                id=\"itemName\"\n                class=\"form-control\"\n                ngModel\n                name=\"itemName\"\n                required\n              >\n            </div>\n          </div>\n          <div class=\"col-md-4 item-name\">\n            <div class=\"form-group\">\n              <label>Item's Serial Number</label>\n              <input\n                type=\"text\"\n                id=\"serial\"\n                class=\"form-control\"\n                ngModel\n                name=\"serial\"\n                required\n              >\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-4 selling-price\">\n            <div class=\"form-group\">\n              <label>Selling Price</label>\n              <div class=\"col-md-10 extra\">\n                <input\n                  type=\"number\"\n                  min=\"1\"\n                  class=\"form-control\"\n                  [(ngModel)] = \"salePrice\"\n                  name=\"salePrice\"\n                  required\n                >\n              </div>\n             <div class=\"col-md-2\" style=\" color: #6a0d0e\">\n               BDT\n             </div>\n            </div>\n          </div>\n          <div class=\"col-md-6 making-price\">\n           Making Cost: {{ inventoryCost }} BDT\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12 winning-price\" *ngIf=\"salePrice-inventoryCost >= 0;\n          else loss\">\n          Profit: {{ salePrice-inventoryCost }} BDT\n          </div>\n          <ng-template  #loss>\n          <div class=\"col-md-3 loss\">\n            Loss: {{ inventoryCost-salePrice }} BDT\n          </div>\n          </ng-template>\n        </div>\n      </div>\n    </div>\n    <div class=\"row general\">\n      <div class=\"col-md-12\">\n         Add Ingredients\n      </div>\n    </div>\n\n    <div class=\"row\" *ngIf=\"checkIfEmpty === 0; else notEmpty\">\n      <div class=\"col-md-12 warning2\">\n        Your inventory is empty. Add items in your inventory first\n      </div>\n    </div>\n    <ng-template #notEmpty>\n    <div class=\"row\">\n      <form (ngSubmit) = \"onAddIngredients(newIngredients)\" #newIngredients = \"ngForm\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <select\n            id=\"ingName\"\n            class=\"form-control\"\n            ngModel\n            required\n            name=\"ingName\">\n            <option value=\"\" selected disabled hidden>Choose ingredients from here</option>\n            <option  *ngFor=\"let inventory of inventories\" [value] =\"inventory.Id\"  > {{ inventory.Name }} </option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <input\n            type=\"number\"\n            min=\"1\"\n            id=\"quantity\"\n            class=\"form-control\"\n            ngModel\n            name=\"quantity\"\n            required\n            placeholder=\"Enter quantity here (Do not enter units!)\"\n          >\n        </div>\n      </div>\n        <div class=\"row\">\n          <div class=\"col-md-offset-4 col-md-4\">\n            <button\n              [disabled]=\"!newIngredients.valid\"\n              class=\"save-ingredient\"\n              type=\"submit\">Add to this item's list</button>\n          </div>\n        </div>\n      </form>\n    </div>\n    </ng-template>\n    <div class=\"row units\" *ngIf=\"checkIfEmpty !== 0\">\n      <div class=\"col-md-3\">\n        Product's Name\n      </div>\n      <div class=\"col-md-2 other\">\n        Quantity\n      </div>\n      <div class=\"col-md-2 other\">\n        Unit\n      </div>\n      <div class=\"col-md-2 other\">\n        Unit Price\n      </div>\n      <div class=\"col-md-2 other\">\n        Sub Total\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12 warning\" *ngIf=\"ingredients.length === 0; else ingredientsSelected\">\n        You have to select at least one ingredient to create a new item!\n      </div>\n    </div>\n    <ng-template #ingredientsSelected>\n    <div  class=\"scrollable-div\" >\n      <div class=\"row table-bordered units-details\" *ngFor=\"let products of ingredients, let i = index\">\n        <div class=\"col-md-3 prod-name\" >\n          {{ i+1 }}. {{ products.Name }}\n        </div>\n        <div class=\"col-md-2 other\">\n          {{ products.Quantity }}\n        </div>\n        <div class=\"col-md-2 other\">\n          {{ products.Unit}}\n        </div>\n        <div class=\"col-md-2 other\">\n          {{ products.InventoryPrice }}\n        </div>\n        <div class=\"col-md-2 other\">\n          {{ products.SubTotal }} BDT\n        </div>\n\n        <div class=\"col-md-1 del-ing\">\n          <button title=\"Delete this ingredient\"\n            class=\"all-categories-button\"\n            (click)=\"deleteIngredient(products,i)\"><i class=\"fa fa-times-circle-o\" aria-hidden=\"true\"></i></button>\n        </div>\n      </div>\n    </div>\n    </ng-template>\n  </div>\n  </form>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/admin/food-item/add-new-food-item/add-new-food-item.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Acme|Aladin|Berkshire+Swash|Cabin+Sketch|Chewy|Fredoka+One|Kanit|Lobster|Londrina+Solid|Righteous|Rock+Salt\");\n.name, .price {\n  margin-top: 24px;\n  color: #ae0000;\n  font-family: \"Berlin Sans FB\";\n  font-size: 20px; }\n.f-name {\n  padding-top: 20px;\n  color: #ae0000;\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  font-weight: bold; }\n.all-categories-button {\n  width: 80%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #941628;\n  background-color: #ffffdf;\n  border: 1.2px solid #941628;\n  border-radius: 5px;\n  font-size: 13px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  text-align: center; }\n.all-categories-button:hover {\n  background-color: #941628;\n  color: #ffffdf;\n  font-family: \"Arial Narrow\";\n  border: 1.2px solid #ffffdf;\n  border-radius: 5px; }\n.all-categories-button:focus {\n  outline: 0; }\n.header {\n  color: #770000;\n  font-size: 21px;\n  font-family: \"Berlin Sans FB\";\n  text-align: left;\n  margin-top: 1px;\n  border: 1px;\n  border-radius: 5px;\n  padding-top: 1px;\n  padding-bottom: 5px; }\n.main-row {\n  border-bottom: 2px double #dfdfdf; }\n.body {\n  height: 350px;\n  overflow-y: scroll;\n  border: 1px solid #cbc6cb;\n  border-radius: 5px; }\n::-webkit-scrollbar {\n  width: 4px; }\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px; }\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.61);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n.hodoo {\n  font-family: 'Berkshire Swash', cursive;\n  font-size: 40px;\n  text-align: right;\n  color: #7e0000; }\n.hodoo:focus {\n  outline: 0; }\n.dashboard {\n  width: 20%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #aa0909;\n  background-color: ghostwhite;\n  /*border: 1.2px solid #ae0000;\n  border-radius: 5px;*/\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold;\n  text-align: center;\n  margin-top: 15px; }\n.dashboard:hover {\n  color: #6a0d0e;\n  background-color: ghostwhite;\n  font-family: \"Arial Narrow\";\n  font-weight: bold; }\n.order-detail {\n  background-color: #fcfcfc;\n  color: #910000;\n  font-family: \"Times New Roman\";\n  border: 2px double #e2e2e2;\n  border-radius: 5px;\n  margin-top: 6px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  background-color: white; }\n.order-ref, .order-date {\n  border-right: 2px double #c5bdbf;\n  font-weight: bold;\n  font-size: 16px; }\n.upper-div {\n  border-bottom: 2px double #dfdfdf; }\n.id, .date {\n  font-size: 15px;\n  font-weight: bold; }\n.prod {\n  font-size: 15px;\n  font-weight: bold;\n  padding-top: 13px;\n  padding-bottom: 13px;\n  border-bottom: 1px double #dfdfdf;\n  text-align: center;\n  color: #221d1f;\n  background-color: #f6f6f6; }\n.units {\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  border-bottom: 1px double #dfdfdf; }\n.units-details {\n  font-size: 13px;\n  font-weight: bold;\n  padding-top: 4px;\n  padding-bottom: 4px; }\n.total {\n  font-weight: bold;\n  padding-top: 20px;\n  padding-bottom: 5px;\n  text-align: right;\n  font-size: 20px; }\n.bdt {\n  font-weight: bold;\n  padding-top: 20px;\n  padding-bottom: 5px;\n  text-align: left;\n  font-size: 20px; }\n.scrollable-div {\n  max-height: 20vh;\n  overflow-y: scroll;\n  overflow-x: hidden; }\n::-webkit-scrollbar {\n  width: 3px; }\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px; }\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.61);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n.back-button {\n  width: 60%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #9b0f12;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.back-button-cancel {\n  width: 65%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #9b0f12;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.delete {\n  text-align: right; }\n.back-button:hover {\n  width: 60%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #ffffdf;\n  background-color: #9b0f12;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.back-button-cancel:hover {\n  width: 65%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #ffffdf;\n  background-color: #9b0f12;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.back-button-cancel:focus {\n  outline: 0; }\n.back-button:focus {\n  outline: 0; }\n.buttons {\n  padding-top: 2px;\n  padding-bottom: 2px; }\n.sub-links {\n  color: #b3acaf;\n  font-family: \"Arial Narrow\";\n  font-size: 15px;\n  font-weight: bold; }\n.sub-links:hover {\n  color: #6a0d0e;\n  font-family: \"Arial Narrow\";\n  font-size: 15px;\n  font-weight: bold; }\na {\n  color: #b3acaf; }\n.link {\n  color: #6a0d0e; }\n.pop-up {\n  color: #7e0000;\n  font-size: 14px;\n  font-family: \"Times New Roman\";\n  text-align: center;\n  font-weight: bold; }\n.item-name {\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  color: #840d0f;\n  font-weight: bold;\n  text-align: left; }\n.selling-price {\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  color: #a80d0f;\n  text-align: left;\n  font-weight: bold; }\n.winning-price {\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  color: #a80d0f;\n  text-align: left;\n  font-weight: bold;\n  padding-top: 5px;\n  padding-bottom: 5px; }\n.loss {\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  color: white;\n  background-color: #840d0f;\n  border: 1px soild white;\n  border-radius: 5px;\n  text-align: left;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  margin-left: 14px;\n  margin-top: 5px; }\nlabel {\n  color: #6a0d0e;\n  font-family: \"Times New Roman\"; }\n.making-price {\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  color: #6a0d0e;\n  font-weight: bold;\n  text-align: center;\n  padding-top: 30px; }\n.image {\n  height: 100%;\n  width: 100%;\n  border: 1px solid #ffffff;\n  border-radius: 10px; }\n.header {\n  padding-top: 15px;\n  padding-bottom: 10px; }\n.general {\n  font-size: 15px;\n  font-weight: bold;\n  padding-top: 13px;\n  padding-bottom: 13px;\n  border-bottom: 1px double #dfdfdf;\n  text-align: center;\n  color: #221d1f;\n  background-color: #f6f6f6; }\n.other {\n  text-align: center; }\n.units {\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  border-bottom: 1px double #dfdfdf; }\n.select {\n  font-family: \"Times New Roman\";\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  text-align: center; }\n.del-ing {\n  color: #9c0000;\n  font-size: 15px;\n  background-color: white;\n  border-right: 5px; }\n.del-ing:hover {\n  color: #8f0000; }\n.save-ingredient {\n  width: 100%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #ffffdf;\n  background-color: #a90f12;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.save-ingredient:hover {\n  font-family: \"Arial Narrow\";\n  color: #ffffdf;\n  background-color: #880f12;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.save-ingredient:focus {\n  outline: 0; }\n.warning {\n  color: #7e0000;\n  font-size: 14px;\n  font-family: \"Times New Roman\";\n  text-align: center;\n  font-weight: bold;\n  padding-top: 12px;\n  padding-bottom: 7px; }\n.scrollable-div {\n  max-height: 20vh;\n  overflow-y: scroll;\n  overflow-x: hidden; }\ninput {\n  color: #9c0000;\n  font-family: \"Times New Roman\"; }\n.prod-name {\n  padding-left: 35px; }\n.extra {\n  padding-left: 0;\n  padding-right: 0; }\n.serial-number {\n  font-size: 10px; }\n.warning2 {\n  color: #7e0000;\n  font-size: 14px;\n  font-family: \"Times New Roman\";\n  text-align: center;\n  font-weight: bold;\n  padding-top: 12px;\n  padding-bottom: 7px;\n  border-bottom: 2px double #dfdfdf; }\n"

/***/ }),

/***/ "./src/app/admin/food-item/add-new-food-item/add-new-food-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewFoodItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__our_offers_our_offers_service__ = __webpack_require__("./src/app/our-offers/our-offers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__ = __webpack_require__("./src/app/shared/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_uuid__ = __webpack_require__("./node_modules/ng2-uuid/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_food_item_model__ = __webpack_require__("./src/app/shared/food-item.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_ingredients_model__ = __webpack_require__("./src/app/shared/ingredients.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddNewFoodItemComponent = (function () {
    function AddNewFoodItemComponent(_route, router, uuid, _ourOfferService, _dataStorageService) {
        this._route = _route;
        this.router = router;
        this.uuid = uuid;
        this._ourOfferService = _ourOfferService;
        this._dataStorageService = _dataStorageService;
        this.uuidCodeOne = '';
        this.salePrice = 0;
        this.profit = 0;
        this.inventories = [];
        this.ingredients = [];
        this.ingredientsChanged = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["b" /* Subject */]();
        this.inventoryCost = 0;
        this.checkIfEmpty = 0;
        this.uuidCodeOne = this.uuid.v1();
    }
    AddNewFoodItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.data.
            subscribe(function (data) {
            _this._ourOfferService.inventory = data['inventories'];
        });
        this.inventories = this._ourOfferService.inventory;
        this.subscription = this._ourOfferService.inventoryChanged
            .subscribe(function (inventories) {
            _this.inventories = inventories;
        });
        this.inventoryCost = 0;
        this.checkIfEmpty = this._ourOfferService.inventory.length;
    };
    AddNewFoodItemComponent.prototype.getInventoryItemName = function (inventoryId) {
        for (var i = 0; i < this.inventories.length; i++) {
            if (this.inventories[i].Id === inventoryId) {
                return this.inventories[i].Name;
            }
        }
    };
    AddNewFoodItemComponent.prototype.getInventoryItemUnit = function (inventoryId) {
        for (var i = 0; i < this.inventories.length; i++) {
            if (this.inventories[i].Id === inventoryId) {
                return this.inventories[i].Unit;
            }
        }
    };
    AddNewFoodItemComponent.prototype.getInventoryItemPrice = function (inventoryId) {
        for (var i = 0; i < this.inventories.length; i++) {
            if (this.inventories[i].Id === inventoryId) {
                return this.inventories[i].AveragePrice;
            }
        }
    };
    AddNewFoodItemComponent.prototype.checkIfIngredientsExist = function (inventoryId) {
        for (var i = 0; i < this.ingredients.length; i++) {
            if (this.ingredients[i].InventoryId === inventoryId) {
                return i;
            }
        }
        return '';
    };
    AddNewFoodItemComponent.prototype.onAddIngredients = function (form) {
        var ingredientId = this.uuid.v1();
        var inventoryId = form.value.ingName;
        var quantity = form.value.quantity;
        var inventoryPrice = this.getInventoryItemPrice(inventoryId);
        var subTotal = quantity * inventoryPrice;
        if (this.checkIfIngredientsExist(inventoryId) !== '') {
            this.ingredients[this.checkIfIngredientsExist(inventoryId)].Quantity
                += Number.parseInt(quantity.toString());
            this.ingredients[this.checkIfIngredientsExist(inventoryId)].SubTotal
                += Number.parseInt(subTotal.toString());
        }
        else {
            var name = this.getInventoryItemName(inventoryId);
            var inventoryUnit = this.getInventoryItemUnit(inventoryId);
            var foodItemId = '';
            var addIngredient = new __WEBPACK_IMPORTED_MODULE_8__shared_ingredients_model__["a" /* Ingredients */](ingredientId, name, quantity, inventoryUnit, inventoryId, inventoryPrice, subTotal, foodItemId);
            this.ingredients.push(addIngredient);
            this.ingredientsChanged.next(this.ingredients.slice());
        }
        this.inventoryCost = Number.parseInt(this.inventoryCost.toString())
            + Number.parseInt(subTotal.toString());
        form.controls['quantity'].reset();
    };
    AddNewFoodItemComponent.prototype.deleteIngredient = function (ingredient, index) {
        for (var i = 0; i < this.ingredients.length; i++) {
            if (this.ingredients[i].Id === ingredient.Id) {
                this.inventoryCost -= this.ingredients[i].SubTotal;
            }
        }
        this.ingredients.splice(index, 1);
    };
    AddNewFoodItemComponent.prototype.onSaveFoodItem = function (form) {
        var name = form.value.itemName;
        var serialNumber = form.value.serial;
        var price = form.value.salePrice;
        var foodItemIngredients = this.ingredients;
        var foodItemId = this.uuid.v1();
        var profit = price - this.inventoryCost;
        for (var i = 0; i < this.ingredients.length; i++) {
            this.ingredients[i].FoodItemId = foodItemId;
        }
        var newFoodItem = new __WEBPACK_IMPORTED_MODULE_6__shared_food_item_model__["a" /* FoodItems */](foodItemId, serialNumber, name, price, this.inventoryCost, profit, 0, null, foodItemIngredients);
        this._ourOfferService.addToFoodItemList(newFoodItem);
        this._dataStorageService.addFoodItem(newFoodItem);
        this.router.navigate(['admin/food-item/add-food-item-image', foodItemId]);
        this.form.reset();
    };
    AddNewFoodItemComponent.prototype.cancel = function () {
        this.router.navigate(['admin/food-item/grid-view']);
    };
    return AddNewFoodItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_16" /* ViewChild */])('newFoodItem'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], AddNewFoodItemComponent.prototype, "form", void 0);
AddNewFoodItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["o" /* Component */])({
        selector: 'app-add-new-food-item',
        template: __webpack_require__("./src/app/admin/food-item/add-new-food-item/add-new-food-item.component.html"),
        styles: [__webpack_require__("./src/app/admin/food-item/add-new-food-item/add-new-food-item.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_uuid__["a" /* Uuid */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_uuid__["a" /* Uuid */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__our_offers_our_offers_service__["a" /* OurOffersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__our_offers_our_offers_service__["a" /* OurOffersService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__["a" /* DataStorageService */]) === "function" && _f || Object])
], AddNewFoodItemComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=add-new-food-item.component.js.map

/***/ }),

/***/ "./src/app/admin/food-item/edit-food-item-image/edit-food-item-image.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <form (ngSubmit) = \"saveFoodItemImage(Image)\" #imageForm=ngForm>\n    <div class=\"col-md-offset-1 col-md-9 order-detail\">\n      <div class=\"row buttons\">\n        <div class=\"col-md-2 back\">\n          <button\n            type=\"button\"\n            class=\"back-button-cancel\"\n            (click)=\"skipFoodItemImage()\"><i class=\"fa fa-times-circle-o\" aria-hidden=\"true\"></i>\n            Cancel</button>\n        </div>\n        <div class=\"col-md-offset-8 col-md-2 delete\">\n          <button\n            type=\"submit\"\n            class=\"back-button\"\n            [disabled]=\"Image.value == '' || !imageForm.valid\">\n            <i class=\"fa fa-bookmark\" aria-hidden=\"true\"></i> Save</button>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12 general\">\n          Optional Information\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12 units\">\n          Change Image\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-offset-4 col-md-4\">\n          <img [src]=\"imageUrl\"\n               class=\"img-responsive image\"\n               style= \"height: 34vh\"\n          >\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <input type=\"file\"\n                 #Image\n                 accept=\"image/*\"\n                 (change)=\"handleFileInput($event.target.files)\">\n        </div>\n      </div>\n\n\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/food-item/edit-food-item-image/edit-food-item-image.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Acme|Aladin|Berkshire+Swash|Cabin+Sketch|Chewy|Fredoka+One|Kanit|Lobster|Londrina+Solid|Righteous|Rock+Salt\");\n.image {\n  border: 1px solid #6b0000;\n  border-radius: 10px; }\n.name, .price {\n  margin-top: 24px;\n  color: #ae0000;\n  font-family: \"Berlin Sans FB\";\n  font-size: 20px; }\ninput {\n  font-family: \"Times New Roman\";\n  color: #6a0d0e;\n  font-weight: bold;\n  font-size: 13px;\n  border-radius: 2px; }\n.header {\n  color: #770000;\n  font-size: 21px;\n  font-family: \"Berlin Sans FB\";\n  text-align: left;\n  margin-top: 1px;\n  border: 1px;\n  border-radius: 5px;\n  padding-top: 1px;\n  padding-bottom: 5px; }\n.main-row {\n  border-bottom: 2px double #dfdfdf; }\n.body {\n  height: 350px;\n  overflow-y: scroll;\n  border: 1px solid #cbc6cb;\n  border-radius: 5px; }\n::-webkit-scrollbar {\n  width: 4px; }\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px; }\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.61);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n.hodoo {\n  font-family: 'Berkshire Swash', cursive;\n  font-size: 40px;\n  text-align: right;\n  color: #7e0000; }\n.hodoo:focus {\n  outline: 0; }\n.dashboard {\n  width: 20%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #aa0909;\n  background-color: ghostwhite;\n  /*border: 1.2px solid #ae0000;\n  border-radius: 5px;*/\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold;\n  text-align: center;\n  margin-top: 15px; }\n.dashboard:hover {\n  color: #6a0d0e;\n  background-color: ghostwhite;\n  font-family: \"Arial Narrow\";\n  font-weight: bold; }\n.order-detail {\n  background-color: #fcfcfc;\n  color: #910000;\n  font-family: \"Times New Roman\";\n  border: 2px double #e2e2e2;\n  border-radius: 5px;\n  margin-top: 6px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  background-color: white; }\n.order-ref, .order-date {\n  border-right: 2px double #c5bdbf;\n  font-weight: bold;\n  font-size: 16px; }\n.upper-div {\n  border-bottom: 2px double #dfdfdf; }\n.id, .date {\n  font-size: 15px;\n  font-weight: bold; }\n.prod {\n  font-size: 15px;\n  font-weight: bold;\n  padding-top: 13px;\n  padding-bottom: 13px;\n  border-bottom: 1px double #dfdfdf;\n  text-align: center;\n  color: #221d1f;\n  background-color: #f6f6f6; }\n.units {\n  font-size: 15px;\n  font-weight: bold;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  border-bottom: 1px double #dfdfdf;\n  text-align: center; }\n.units-details {\n  font-size: 13px;\n  font-weight: bold;\n  padding-top: 4px;\n  padding-bottom: 4px; }\n.total {\n  font-weight: bold;\n  padding-top: 20px;\n  padding-bottom: 5px;\n  text-align: right;\n  font-size: 20px; }\n.bdt {\n  font-weight: bold;\n  padding-top: 20px;\n  padding-bottom: 5px;\n  text-align: left;\n  font-size: 20px; }\n.scrollable-div {\n  max-height: 20vh;\n  overflow-y: scroll;\n  overflow-x: hidden; }\n::-webkit-scrollbar {\n  width: 3px; }\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px; }\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.61);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n.back-button {\n  width: 60%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #9b0f12;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.back-button-cancel {\n  width: 65%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #9b0f12;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.delete {\n  text-align: right; }\n.back-button:hover {\n  width: 60%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #ffffdf;\n  background-color: #9b0f12;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.back-button-cancel:hover {\n  width: 65%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #ffffdf;\n  background-color: #9b0f12;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.back-button-cancel:focus {\n  outline: 0; }\n.back-button:focus {\n  outline: 0; }\n.buttons {\n  padding-top: 2px;\n  padding-bottom: 2px; }\n.sub-links {\n  color: #b3acaf;\n  font-family: \"Arial Narrow\";\n  font-size: 15px;\n  font-weight: bold; }\n.sub-links:hover {\n  color: #6a0d0e;\n  font-family: \"Arial Narrow\";\n  font-size: 15px;\n  font-weight: bold; }\na {\n  color: #b3acaf; }\n.link {\n  color: #6a0d0e; }\n.pop-up {\n  color: #7e0000;\n  font-size: 14px;\n  font-family: \"Times New Roman\";\n  text-align: center;\n  font-weight: bold; }\n.item-name {\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  color: #840d0f;\n  font-weight: bold;\n  text-align: left; }\n.selling-price {\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  color: #a80d0f;\n  text-align: left;\n  font-weight: bold; }\n.winning-price {\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  color: #a80d0f;\n  text-align: left;\n  font-weight: bold;\n  padding-top: 5px;\n  padding-bottom: 5px; }\n.loss {\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  color: white;\n  background-color: #840d0f;\n  border: 1px soild white;\n  border-radius: 5px;\n  text-align: left;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  margin-left: 14px;\n  margin-top: 5px; }\nlabel {\n  color: #6a0d0e;\n  font-family: \"Times New Roman\"; }\n.making-price {\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  color: #6a0d0e;\n  font-weight: bold;\n  text-align: center;\n  padding-top: 30px; }\n.image {\n  height: 100%;\n  width: 100%;\n  border: 1px solid #ffffff;\n  border-radius: 10px; }\n.header {\n  padding-top: 15px;\n  padding-bottom: 10px; }\n.general {\n  font-size: 15px;\n  font-weight: bold;\n  padding-top: 13px;\n  padding-bottom: 13px;\n  border-bottom: 1px double #dfdfdf;\n  text-align: center;\n  color: #221d1f;\n  background-color: #f6f6f6; }\n.other {\n  text-align: center; }\n.units {\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  border-bottom: 1px double #dfdfdf; }\n.select {\n  font-family: \"Times New Roman\";\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  text-align: center; }\n.del-ing {\n  color: #9c0000;\n  font-size: 15px;\n  background-color: white;\n  border-right: 5px; }\n.del-ing:hover {\n  color: #8f0000; }\n.save-ingredient {\n  width: 100%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #ffffdf;\n  background-color: #a90f12;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.save-ingredient:hover {\n  font-family: \"Arial Narrow\";\n  color: #ffffdf;\n  background-color: #880f12;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.save-ingredient:focus {\n  outline: 0; }\n.warning {\n  color: #9c0000;\n  font-size: 14px;\n  font-family: \"Times New Roman\";\n  text-align: center;\n  font-weight: bold;\n  padding-top: 12px;\n  padding-bottom: 7px; }\n.scrollable-div {\n  max-height: 20vh;\n  overflow-y: scroll;\n  overflow-x: hidden; }\ninput {\n  color: #9c0000;\n  font-family: \"Times New Roman\"; }\n.prod-name {\n  padding-left: 35px; }\n.extra {\n  padding-left: 0;\n  padding-right: 0; }\n.serial-number {\n  font-size: 10px; }\n"

/***/ }),

/***/ "./src/app/admin/food-item/edit-food-item-image/edit-food-item-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditFoodItemImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__our_offers_our_offers_service__ = __webpack_require__("./src/app/our-offers/our-offers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_data_storage_service__ = __webpack_require__("./src/app/shared/data-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditFoodItemImageComponent = (function () {
    function EditFoodItemImageComponent(_route, router, _ourOfferService, _dataStorageService) {
        var _this = this;
        this._route = _route;
        this.router = router;
        this._ourOfferService = _ourOfferService;
        this._dataStorageService = _dataStorageService;
        this.fileToUpload = null;
        this.imageUrl = '';
        this.foodItems = [];
        this.rootUrl = 'http://localhost:1548/Content/';
        this._route.params
            .subscribe(function (params) {
            _this.foodItemId = params['id'];
        });
    }
    EditFoodItemImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.data.
            subscribe(function (data) {
            _this._ourOfferService.FoodItem = data['foodItems'];
        });
        this.foodItems = this._ourOfferService.FoodItem;
        for (var i = 0; i < this.foodItems.length; i++) {
            if (this.foodItems[i].Id === this.foodItemId) {
                if (this.foodItems[i].FoodItemImage === null || this.foodItems[i].FoodItemImage === '') {
                    this.imageUrl = '/assets/noImage.png';
                }
                else {
                    this.imageUrl = this.rootUrl + this.foodItems[i].FoodItemImage;
                }
            }
        }
    };
    EditFoodItemImageComponent.prototype.saveFoodItemImage = function (Image) {
        var _this = this;
        this._dataStorageService.saveFoodItemImage(this.foodItemId, this.fileToUpload).subscribe(function (data) {
            console.log('done');
            Image.value = null;
            _this.imageUrl = '/assets/noImage.png';
            _this.router.navigate(['admin/food-item/grid-view']);
        });
    };
    EditFoodItemImageComponent.prototype.skipFoodItemImage = function () {
        this.router.navigate(['admin/food-item/grid-details', this.foodItemId]);
    };
    EditFoodItemImageComponent.prototype.handleFileInput = function (file) {
        var _this = this;
        this.fileToUpload = file.item(0);
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.imageUrl = event.target.result;
        };
        reader.readAsDataURL(this.fileToUpload);
    };
    return EditFoodItemImageComponent;
}());
EditFoodItemImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-edit-food-item-image',
        template: __webpack_require__("./src/app/admin/food-item/edit-food-item-image/edit-food-item-image.component.html"),
        styles: [__webpack_require__("./src/app/admin/food-item/edit-food-item-image/edit-food-item-image.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__our_offers_our_offers_service__["a" /* OurOffersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__our_offers_our_offers_service__["a" /* OurOffersService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_data_storage_service__["a" /* DataStorageService */]) === "function" && _d || Object])
], EditFoodItemImageComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=edit-food-item-image.component.js.map

/***/ }),

/***/ "./src/app/admin/food-item/edit-food-item/edit-food-item.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <form (ngSubmit) = \"onSaveEditedFoodItem(newFoodItem)\" #newFoodItem = \"ngForm\">\n    <div class=\"col-md-offset-1 col-md-9 order-detail\">\n      <div class=\"row buttons\">\n        <div class=\"col-md-2 back\">\n          <button\n            class=\"back-button-cancel\"\n            type=\"button\"\n            (click)=\"cancel()\"><i class=\"fa fa-times-circle-o\" aria-hidden=\"true\"></i>\n            Cancel</button>\n        </div>\n        <div class=\"col-md-offset-8 col-md-2 delete\">\n          <button class=\"back-button\"\n                  [disabled]=\"!newFoodItem.valid || ingredients.length === 0\"\n                  type=\"submit\"\n                  title=\"Save this item\"\n                  ><i class=\"fa fa-bookmark\" aria-hidden=\"true\"></i>\n            Save</button>\n        </div>\n      </div>\n\n\n      <div class=\"row header\">\n        <div class=\"col-md-2\">\n          <div class=\"row\">\n            <div class=\"col-md-12 image\">\n\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-10\">\n          <div class=\"row\">\n            <div class=\"col-md-8 item-name\">\n              <div class=\"form-group\">\n                <label>Item's Name</label>\n                <input\n                  type=\"text\"\n                  id=\"itemName\"\n                  class=\"form-control\"\n                  [ngModel] = \"itemName\"\n                  name=\"itemName\"\n                  required\n                >\n              </div>\n            </div>\n            <div class=\"col-md-4 item-name\">\n              <div class=\"form-group\">\n                <label>Item's Serial Number</label>\n                <input\n                  type=\"text\"\n                  id=\"serial\"\n                  class=\"form-control\"\n                  [ngModel] = \"serialNumber\"\n                  name=\"serial\"\n                  required\n                >\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-4 selling-price\">\n              <div class=\"form-group\">\n                <label>Selling Price</label>\n                <div class=\"col-md-10 extra\">\n                  <input\n                    type=\"number\"\n                    min=\"1\"\n                    class=\"form-control\"\n                    [(ngModel)] = \"salePrice\"\n                    name=\"salePrice\"\n                    required\n                  >\n                </div>\n                <div class=\"col-md-2\" style=\" color: #6a0d0e\">\n                  BDT\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6 making-price\">\n              Making Cost: {{ inventoryCost }} BDT\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12 winning-price\" *ngIf=\"salePrice-inventoryCost >= 0;\n          else loss\">\n              Profit: {{ salePrice-inventoryCost }} BDT\n            </div>\n            <ng-template  #loss>\n              <div class=\"col-md-3 loss\">\n                Loss: {{ inventoryCost-salePrice }} BDT\n              </div>\n            </ng-template>\n          </div>\n        </div>\n      </div>\n      <div class=\"row general\">\n        <div class=\"col-md-12\">\n          Update Ingredients List\n        </div>\n      </div>\n      <div class=\"row\">\n        <form (ngSubmit) = \"onAddIngredients(newIngredients)\" #newIngredients = \"ngForm\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <select\n                id=\"ingName\"\n                class=\"form-control\"\n                ngModel\n                required\n                name=\"ingName\">\n                <option value=\"\" selected disabled hidden>Choose ingredients from here</option>\n                <option  *ngFor=\"let inventory of inventories\" [value] =\"inventory.Id\"  > {{ inventory.Name }} </option>\n              </select>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <input\n                type=\"number\"\n                min=\"1\"\n                id=\"quantity\"\n                class=\"form-control\"\n                ngModel\n                name=\"quantity\"\n                required\n                placeholder=\"Enter quantity here (Do not enter units!)\"\n              >\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-offset-4 col-md-4\">\n              <button\n                [disabled]=\"!newIngredients.valid\"\n                class=\"save-ingredient\"\n                type=\"submit\">Add to this item's list</button>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"row units \">\n        <div class=\"col-md-3\">\n          Product's Name\n        </div>\n        <div class=\"col-md-2 other\">\n          Quantity\n        </div>\n        <div class=\"col-md-2 other\">\n          Unit\n        </div>\n        <div class=\"col-md-2 other\">\n          Unit Price\n        </div>\n        <div class=\"col-md-2 other\">\n          Sub Total\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12 warning\" *ngIf=\"ingredients.length === 0; else ingredientsSelected\">\n          You have to select at least one ingredient to create a new item!\n        </div>\n      </div>\n      <ng-template #ingredientsSelected>\n        <div  class=\"scrollable-div\" >\n          <div class=\"row table-bordered units-details\" *ngFor=\"let products of ingredients, let i = index\">\n            <div class=\"col-md-3 prod-name\" >\n              {{ i+1 }}. {{ products.Name }}\n            </div>\n            <div class=\"col-md-2 other\">\n              {{ products.Quantity }}\n            </div>\n            <div class=\"col-md-2 other\">\n              {{ products.Unit}}\n            </div>\n            <div class=\"col-md-2 other\">\n              {{ products.InventoryPrice }}\n            </div>\n            <div class=\"col-md-2 other\">\n              {{ products.SubTotal }} BDT\n            </div>\n\n            <div class=\"col-md-1 del-ing\">\n              <button title=\"Delete this ingredient\"\n                      class=\"all-categories-button\"\n                      (click)=\"deleteIngredient(products,i)\"><i class=\"fa fa-times-circle-o\" aria-hidden=\"true\"></i></button>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </form>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/admin/food-item/edit-food-item/edit-food-item.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Acme|Aladin|Berkshire+Swash|Cabin+Sketch|Chewy|Fredoka+One|Kanit|Lobster|Londrina+Solid|Righteous|Rock+Salt\");\n.name, .price {\n  margin-top: 24px;\n  color: #ae0000;\n  font-family: \"Berlin Sans FB\";\n  font-size: 20px; }\n.whole {\n  /*margin-top: 20px;*/ }\n.sum-of-inv-body {\n  /*padding-right: 0;\n  padding-left: 155px;*/ }\n.f-name {\n  padding-top: 20px;\n  color: #ae0000;\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  font-weight: bold;\n  /*-webkit-box-shadow: 0px 10px 25px 0px rgba(161, 18, 18, 0.2);\n  -moz-box-shadow: 0px 10px 25px 0px rgba(161, 18, 18, 0.2);\n  box-shadow: 0px 10px 25px 0px rgba(161, 18, 18, 0.2);*/ }\n.all-categories-button {\n  width: 80%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #941628;\n  background-color: #ffffdf;\n  border: 1.2px solid #941628;\n  border-radius: 5px;\n  font-size: 13px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  text-align: center; }\n.all-categories-button:hover {\n  background-color: #941628;\n  color: #ffffdf;\n  font-family: \"Arial Narrow\";\n  border: 1.2px solid #ffffdf;\n  border-radius: 5px; }\n.all-categories-button:focus {\n  outline: 0; }\n.header {\n  color: #770000;\n  font-size: 21px;\n  font-family: \"Berlin Sans FB\";\n  text-align: left;\n  margin-top: 1px;\n  border: 1px;\n  border-radius: 5px;\n  padding-top: 1px;\n  padding-bottom: 5px; }\n.main-row {\n  border-bottom: 2px double #dfdfdf; }\n.body {\n  height: 350px;\n  overflow-y: scroll;\n  border: 1px solid #cbc6cb;\n  border-radius: 5px; }\n::-webkit-scrollbar {\n  width: 4px; }\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px; }\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.61);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n.hodoo {\n  font-family: 'Berkshire Swash', cursive;\n  font-size: 40px;\n  text-align: right;\n  color: #7e0000; }\n.hodoo:focus {\n  outline: 0; }\n.dashboard {\n  width: 20%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #aa0909;\n  background-color: ghostwhite;\n  /*border: 1.2px solid #ae0000;\n  border-radius: 5px;*/\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold;\n  text-align: center;\n  margin-top: 15px; }\n.dashboard:hover {\n  color: #6a0d0e;\n  background-color: ghostwhite;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  /* border: 1.2px solid #ffffdf;\n  border-radius: 5px;*/ }\n.order-detail {\n  background-color: #fcfcfc;\n  color: #910000;\n  font-family: \"Times New Roman\";\n  border: 2px double #e2e2e2;\n  border-radius: 5px;\n  margin-top: 6px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  background-color: white; }\n.order-ref, .order-date {\n  border-right: 2px double #c5bdbf;\n  font-weight: bold;\n  font-size: 16px; }\n.upper-div {\n  border-bottom: 2px double #dfdfdf; }\n.id, .date {\n  font-size: 15px;\n  font-weight: bold; }\n.prod {\n  font-size: 15px;\n  font-weight: bold;\n  padding-top: 13px;\n  padding-bottom: 13px;\n  border-bottom: 1px double #dfdfdf;\n  text-align: center;\n  color: #221d1f;\n  background-color: #f6f6f6; }\n.units {\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  border-bottom: 1px double #dfdfdf; }\n.units-details {\n  font-size: 13px;\n  font-weight: bold;\n  padding-top: 4px;\n  padding-bottom: 4px; }\n.total {\n  font-weight: bold;\n  padding-top: 20px;\n  padding-bottom: 5px;\n  text-align: right;\n  font-size: 20px; }\n.bdt {\n  font-weight: bold;\n  padding-top: 20px;\n  padding-bottom: 5px;\n  text-align: left;\n  font-size: 20px; }\n.scrollable-div {\n  max-height: 20vh;\n  overflow-y: scroll;\n  overflow-x: hidden; }\n::-webkit-scrollbar {\n  width: 3px; }\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px; }\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.61);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n.back-button {\n  width: 60%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #9b0f12;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.back-button-cancel {\n  width: 65%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #9b0f12;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.delete {\n  text-align: right; }\n.back-button:hover {\n  width: 60%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #ffffdf;\n  background-color: #9b0f12;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.back-button-cancel:hover {\n  width: 65%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #ffffdf;\n  background-color: #9b0f12;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.back-button-cancel:focus {\n  outline: 0; }\n.back-button:focus {\n  outline: 0; }\n.buttons {\n  padding-top: 2px;\n  padding-bottom: 2px; }\n.sub-links {\n  color: #b3acaf;\n  font-family: \"Arial Narrow\";\n  font-size: 15px;\n  font-weight: bold; }\n.sub-links:hover {\n  color: #6a0d0e;\n  font-family: \"Arial Narrow\";\n  font-size: 15px;\n  font-weight: bold; }\na {\n  color: #b3acaf; }\n.link {\n  color: #6a0d0e; }\n.pop-up {\n  color: #7e0000;\n  font-size: 14px;\n  font-family: \"Times New Roman\";\n  text-align: center;\n  font-weight: bold; }\n.item-name {\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  color: #840d0f;\n  font-weight: bold;\n  text-align: left; }\n.selling-price {\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  color: #a80d0f;\n  text-align: left;\n  font-weight: bold; }\n.winning-price {\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  color: #a80d0f;\n  text-align: left;\n  font-weight: bold;\n  padding-top: 5px;\n  padding-bottom: 5px; }\n.loss {\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  color: white;\n  background-color: #840d0f;\n  border: 1px soild white;\n  border-radius: 5px;\n  text-align: left;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  margin-left: 14px;\n  margin-top: 5px; }\nlabel {\n  color: #6a0d0e;\n  font-family: \"Times New Roman\"; }\n.making-price {\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  color: #6a0d0e;\n  font-weight: bold;\n  text-align: center;\n  padding-top: 30px; }\n.image {\n  height: 100%;\n  width: 100%;\n  border: 1px solid #ffffff;\n  border-radius: 10px; }\n.header {\n  padding-top: 15px;\n  padding-bottom: 10px; }\n.general {\n  font-size: 15px;\n  font-weight: bold;\n  padding-top: 13px;\n  padding-bottom: 13px;\n  border-bottom: 1px double #dfdfdf;\n  text-align: center;\n  color: #221d1f;\n  background-color: #f6f6f6; }\n.other {\n  text-align: center; }\n.units {\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  border-bottom: 1px double #dfdfdf; }\n.select {\n  font-family: \"Times New Roman\";\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  text-align: center; }\n.del-ing {\n  color: #9c0000;\n  font-size: 15px;\n  background-color: white;\n  border-right: 5px; }\n.del-ing:hover {\n  color: #8f0000; }\n.save-ingredient {\n  width: 100%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #ffffdf;\n  background-color: #a90f12;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.save-ingredient:hover {\n  font-family: \"Arial Narrow\";\n  color: #ffffdf;\n  background-color: #880f12;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.save-ingredient:focus {\n  outline: 0; }\n.warning {\n  color: #9c0000;\n  font-size: 14px;\n  font-family: \"Times New Roman\";\n  text-align: center;\n  font-weight: bold;\n  padding-top: 12px;\n  padding-bottom: 7px; }\n.scrollable-div {\n  max-height: 20vh;\n  overflow-y: scroll;\n  overflow-x: hidden; }\ninput {\n  color: #9c0000;\n  font-family: \"Times New Roman\"; }\n.prod-name {\n  padding-left: 35px; }\n.extra {\n  padding-left: 0;\n  padding-right: 0; }\n"

/***/ }),

/***/ "./src/app/admin/food-item/edit-food-item/edit-food-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditFoodItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__ = __webpack_require__("./src/app/shared/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__our_offers_our_offers_service__ = __webpack_require__("./src/app/our-offers/our-offers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_food_item_model__ = __webpack_require__("./src/app/shared/food-item.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_ingredients_model__ = __webpack_require__("./src/app/shared/ingredients.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_uuid__ = __webpack_require__("./node_modules/ng2-uuid/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditFoodItemComponent = (function () {
    function EditFoodItemComponent(_route, router, uuid, _dataStorageService, _ourOfferService) {
        var _this = this;
        this._route = _route;
        this.router = router;
        this.uuid = uuid;
        this._dataStorageService = _dataStorageService;
        this._ourOfferService = _ourOfferService;
        this.salePrice = 0;
        this.profit = 0;
        this.inventoryCost = 0;
        this.itemName = '';
        this.serialNumber = '';
        this.FoodItemList = [];
        this.inventories = [];
        this.ingredients = [];
        this.ingredientsChanged = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["b" /* Subject */]();
        this._route.params
            .subscribe(function (params) {
            _this.foodItemId = params['id'];
        });
    }
    EditFoodItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.data.
            subscribe(function (data) {
            _this._ourOfferService.FoodItem = data['foodItems'];
        });
        this.FoodItemList = this._ourOfferService.FoodItem;
        this._ourOfferService.foodItemChanged
            .subscribe(function (FoodItem) {
            _this.FoodItemList = FoodItem;
        });
        for (var i = 0; i < this.FoodItemList.length; i++) {
            if (this.FoodItemList[i].Id === this.foodItemId) {
                this.FoodItem = this.FoodItemList[i];
                this.itemName = this.FoodItemList[i].Name;
                this.serialNumber = this.FoodItemList[i].SerialNo;
                this.ingredients = this.FoodItemList[i].Ingredients;
                this.salePrice = this.FoodItemList[i].Price;
                this.inventoryCost = this.FoodItemList[i].MakingCost;
                this.profit = this.FoodItemList[i].Profit;
                this.totalSale = this.FoodItemList[i].TotalSale;
            }
        }
        this._route.data.
            subscribe(function (data) {
            _this._ourOfferService.inventory = data['inventories'];
        });
        this.inventories = this._ourOfferService.inventory;
        this.subscription = this._ourOfferService.inventoryChanged
            .subscribe(function (inventories) {
            _this.inventories = inventories;
        });
    };
    EditFoodItemComponent.prototype.getInventoryItemName = function (inventoryId) {
        for (var i = 0; i < this.inventories.length; i++) {
            if (this.inventories[i].Id === inventoryId) {
                return this.inventories[i].Name;
            }
        }
    };
    EditFoodItemComponent.prototype.getInventoryItemUnit = function (inventoryId) {
        for (var i = 0; i < this.inventories.length; i++) {
            if (this.inventories[i].Id === inventoryId) {
                return this.inventories[i].Unit;
            }
        }
    };
    EditFoodItemComponent.prototype.getInventoryItemPrice = function (inventoryId) {
        for (var i = 0; i < this.inventories.length; i++) {
            if (this.inventories[i].Id === inventoryId) {
                return this.inventories[i].AveragePrice;
            }
        }
    };
    EditFoodItemComponent.prototype.checkIfIngredientsExist = function (inventoryId) {
        for (var i = 0; i < this.ingredients.length; i++) {
            if (this.ingredients[i].InventoryId === inventoryId) {
                return i;
            }
        }
        return '';
    };
    EditFoodItemComponent.prototype.onAddIngredients = function (form) {
        var ingredientId = this.uuid.v1();
        var inventoryId = form.value.ingName;
        var quantity = form.value.quantity;
        var inventoryPrice = this.getInventoryItemPrice(inventoryId);
        var subTotal = quantity * inventoryPrice;
        if (this.checkIfIngredientsExist(inventoryId) !== '') {
            this.ingredients[this.checkIfIngredientsExist(inventoryId)].Quantity
                += Number.parseInt(quantity.toString());
            this.ingredients[this.checkIfIngredientsExist(inventoryId)].SubTotal
                += Number.parseInt(subTotal.toString());
        }
        else {
            var name = this.getInventoryItemName(inventoryId);
            var inventoryUnit = this.getInventoryItemUnit(inventoryId);
            var foodItemId = '';
            var addIngredient = new __WEBPACK_IMPORTED_MODULE_5__shared_ingredients_model__["a" /* Ingredients */](ingredientId, name, quantity, inventoryUnit, inventoryId, inventoryPrice, subTotal, foodItemId);
            this.ingredients.push(addIngredient);
            this.ingredientsChanged.next(this.ingredients.slice());
        }
        this.inventoryCost = Number.parseInt(this.inventoryCost.toString())
            + Number.parseInt(subTotal.toString());
        form.controls['quantity'].reset();
    };
    EditFoodItemComponent.prototype.deleteIngredient = function (ingredient, index) {
        // for (let i = 0; i < this.ingredients.length; i ++) {
        //  if (this.ingredients[i].FoodItemId === ingredient.FoodItemId ) {
        this.inventoryCost = Number.parseInt(this.inventoryCost.toString())
            - Number.parseInt(this.ingredients[index].SubTotal.toString());
        //    }
        //  }
        this.ingredients.splice(index, 1);
    };
    EditFoodItemComponent.prototype.onSaveEditedFoodItem = function (form) {
        var _this = this;
        var name = form.value.itemName;
        var price = form.value.salePrice;
        var serialNumber = form.value.serial;
        var foodItemIngredients = this.ingredients;
        var foodItemId = this.foodItemId;
        var profit = price - this.inventoryCost;
        for (var i = 0; i < this.ingredients.length; i++) {
            this.ingredients[i].FoodItemId = this.foodItemId;
        }
        /* const image = this.fileToUpload;*/
        var editedFoodItem = new __WEBPACK_IMPORTED_MODULE_4__shared_food_item_model__["a" /* FoodItems */](foodItemId, serialNumber, name, price, this.inventoryCost, profit, 0, null, foodItemIngredients);
        this._ourOfferService.updateFoodItemList(editedFoodItem);
        this._dataStorageService.editFoodItem(editedFoodItem).
            subscribe(function (data) {
            _this.router.navigate(['admin/food-item/grid-details', _this.foodItemId]);
            form.reset();
        });
    };
    EditFoodItemComponent.prototype.cancel = function () {
        this.router.navigate(['admin/food-item/grid-details', this.foodItemId]);
    };
    return EditFoodItemComponent;
}());
EditFoodItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-edit-food-item',
        template: __webpack_require__("./src/app/admin/food-item/edit-food-item/edit-food-item.component.html"),
        styles: [__webpack_require__("./src/app/admin/food-item/edit-food-item/edit-food-item.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_ng2_uuid__["a" /* Uuid */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng2_uuid__["a" /* Uuid */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__["a" /* DataStorageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__our_offers_our_offers_service__["a" /* OurOffersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__our_offers_our_offers_service__["a" /* OurOffersService */]) === "function" && _e || Object])
], EditFoodItemComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=edit-food-item.component.js.map

/***/ }),

/***/ "./src/app/admin/food-item/food-item-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodItemResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__ = __webpack_require__("./src/app/shared/data-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FoodItemResolverService = (function () {
    function FoodItemResolverService(_dataStorageService) {
        this._dataStorageService = _dataStorageService;
    }
    FoodItemResolverService.prototype.resolve = function (route, state) {
        return this._dataStorageService.getFoodItems();
    };
    return FoodItemResolverService;
}());
FoodItemResolverService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__["a" /* DataStorageService */]) === "function" && _a || Object])
], FoodItemResolverService);

var _a;
//# sourceMappingURL=food-item-resolver.service.js.map

/***/ }),

/***/ "./src/app/admin/food-item/food-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row main-row\">\n  <div class=\"col-md-8 header\">\n    Manage Your Food Items\n  </div>\n  <a routerLink=\"/control-panel\">\n    <div class=\"col-md-offset-1 col-md-2 dashboard\">\n      Back to Dashboard\n    </div>\n  </a>\n</div>\n\n<div class=\"row\">\n  <a routerLink=\"/admin/food-item/add-new-food-item\">\n  <div class=\"col-md-offset-9 col-md-2 add-new\">\n    <i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i> Add New Item\n  </div>\n  </a>\n  <div class=\"col-md-1\">\n    <div class=\"row icons\">\n      <a title=\"List View\" routerLink=\"/admin/food-item/list-view\" routerLinkActive=\"icon-active\">\n        <div class=\"col-md-6 list\">\n          <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n        </div>\n      </a>\n      <a title=\"Grid View\" routerLink=\"/admin/food-item/grid-view\" routerLinkActive=\"icon-active\">\n        <div class=\"col-md-6 grid\">\n          <i class=\"fa fa-th-large\" aria-hidden=\"true\"></i>\n        </div>\n      </a>\n    </div>\n  </div>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/admin/food-item/food-item.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Acme|Aladin|Berkshire+Swash|Cabin+Sketch|Chewy|Fredoka+One|Kanit|Lobster|Londrina+Solid|Righteous|Rock+Salt\");\n.name, .price {\n  margin-top: 24px;\n  color: #ae0000;\n  font-family: \"Berlin Sans FB\";\n  font-size: 20px; }\n.whole {\n  /*margin-top: 20px;*/ }\n.sum-of-inv-body {\n  /*padding-right: 0;\n  padding-left: 155px;*/ }\n.f-name {\n  padding-top: 20px;\n  color: #ae0000;\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  font-weight: bold;\n  /*-webkit-box-shadow: 0px 10px 25px 0px rgba(161, 18, 18, 0.2);\n  -moz-box-shadow: 0px 10px 25px 0px rgba(161, 18, 18, 0.2);\n  box-shadow: 0px 10px 25px 0px rgba(161, 18, 18, 0.2);*/ }\n.all-categories-button {\n  width: 100%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #d32039;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.all-categories-button:hover {\n  background-color: #d32039;\n  color: #ffffdf;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  border: 1.2px solid #ffffdf;\n  border-radius: 5px; }\n.all-categories-button:focus {\n  outline: 0; }\n.header {\n  color: #770000;\n  font-size: 21px;\n  font-family: \"Berlin Sans FB\";\n  text-align: left;\n  margin-top: 10px;\n  border: 1px;\n  border-radius: 5px;\n  padding-top: 5px;\n  padding-bottom: 5px; }\n.main-row {\n  border-bottom: 2px double #dfdfdf; }\n.body {\n  height: 350px;\n  overflow-y: scroll;\n  border: 1px solid #cbc6cb;\n  border-radius: 5px; }\n::-webkit-scrollbar {\n  width: 4px; }\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px; }\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.61);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n.hodoo {\n  font-family: 'Berkshire Swash', cursive;\n  font-size: 40px;\n  text-align: right;\n  color: #7e0000; }\n.hodoo:focus {\n  outline: 0; }\n.dashboard {\n  width: 20%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #aa0909;\n  background-color: ghostwhite;\n  /*border: 1.2px solid #ae0000;\n  border-radius: 5px;*/\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold;\n  text-align: center;\n  margin-top: 15px; }\n.dashboard:hover {\n  color: #6a0d0e;\n  background-color: ghostwhite;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  /* border: 1.2px solid #ffffdf;\n   border-radius: 5px;*/ }\n.icons {\n  /*text-align: center;*/\n  font-size: 23px;\n  color: #bcb4b6;\n  margin-top: 10px; }\n.icons:hover {\n  /*text-align: center;*/\n  font-size: 23px;\n  color: #690e0f;\n  margin-top: 10px; }\n.list, grid {\n  text-align: right;\n  padding-left: 0;\n  padding-right: 0; }\n.grid {\n  text-align: left; }\n.icon-active {\n  color: #690e0f; }\na {\n  color: #ada5a7; }\n.add-new {\n  font-family: \"Times New Roman\";\n  width: 13%;\n  font-size: 13px;\n  color: #b50909;\n  margin-top: 10px;\n  background-color: #ffffdf;\n  border: 1px solid #6a0d0e;\n  border-radius: 5px;\n  text-align: center;\n  font-weight: bold;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  margin-top: 10px; }\n.add-new:hover {\n  width: 13%;\n  font-size: 13px;\n  font-family: \"Times New Roman\";\n  color: #ffffdf;\n  margin-top: 10px;\n  background-color: #b50909;\n  border: 1px solid #ffffdf;\n  border-radius: 5px;\n  text-align: center;\n  font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/admin/food-item/food-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FoodItemComponent = (function () {
    function FoodItemComponent() {
    }
    FoodItemComponent.prototype.ngOnInit = function () {
    };
    return FoodItemComponent;
}());
FoodItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-food-item',
        template: __webpack_require__("./src/app/admin/food-item/food-item.component.html"),
        styles: [__webpack_require__("./src/app/admin/food-item/food-item.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FoodItemComponent);

//# sourceMappingURL=food-item.component.js.map

/***/ }),

/***/ "./src/app/admin/food-item/fooditem-grid-view/fooditem-grid-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row empty\" *ngIf=\"total === 0; else notEmpty\">\n  <div class=\"col-md-12\">\n    No item available. Click \"Add New Item\" to populate.\n  </div>\n</div>\n\n<ng-template #notEmpty>\n  <div class=\"row\">\n    <div class=\"col-md-4 search-bar\">\n      <span class=\"fa fa-search\"></span>\n      <input class=\"box\" type=\"text\" [(ngModel)]=\"term\" placeholder=\"Search by Name...\">\n    </div>\n  </div>\n\n\n\n  <div class=\"row body\">\n    <div class=\"col-md-4 items\" *ngFor=\"let fooditems of FoodItem | filter:term\">\n      <a title=\"View This Item's Details\"\n         style=\"cursor: pointer\" (click)=\"viewDetails(fooditems)\">\n        <div class=\"row table-and-money\">\n          <div class=\"col-md-4\">\n            <div class=\"row\">\n              <div class=\"col-md-12 image\">\n                <img [src]=\"fooditems.FoodItemImage\"\n                     class=\"img-responsive image\"\n                     style= \"height:66px\"\n                >\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-7\">\n              <div class=\"row\">\n                <div class=\"col-md-12 name\">\n                  {{ fooditems.Name }}\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-12 price\">\n                  {{ fooditems.Price }} BDT\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </a>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-12 detail\">\n      Total Products: {{ total }} (s)\n    </div>\n  </div>\n</ng-template>\n\n"

/***/ }),

/***/ "./src/app/admin/food-item/fooditem-grid-view/fooditem-grid-view.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Acme|Aladin|Berkshire+Swash|Cabin+Sketch|Chewy|Fredoka+One|Kanit|Lobster|Londrina+Solid|Righteous|Rock+Salt\");\n.name, .price {\n  color: #ae0000;\n  font-family: \"Times New Roman\";\n  font-size: 13px;\n  padding-top: 5px;\n  padding-bottom: 2px; }\n.image {\n  height: 100%;\n  width: 100%;\n  border: 1px solid #ffffff;\n  border-radius: 6px; }\n.whole {\n  /*margin-top: 20px;*/ }\n.sum-of-inv-body {\n  /*padding-right: 0;\n  padding-left: 155px;*/ }\n.f-name {\n  padding-top: 20px;\n  color: #ae0000;\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  font-weight: bold;\n  /*-webkit-box-shadow: 0px 10px 25px 0px rgba(161, 18, 18, 0.2);\n  -moz-box-shadow: 0px 10px 25px 0px rgba(161, 18, 18, 0.2);\n  box-shadow: 0px 10px 25px 0px rgba(161, 18, 18, 0.2);*/ }\n.all-categories-button {\n  width: 100%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #d32039;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.all-categories-button:hover {\n  background-color: #d32039;\n  color: #ffffdf;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  border: 1.2px solid #ffffdf;\n  border-radius: 5px; }\n.all-categories-button:focus {\n  outline: 0; }\n.header {\n  color: #770000;\n  font-size: 21px;\n  font-family: \"Berlin Sans FB\";\n  text-align: left;\n  margin-top: 10px;\n  border: 1px;\n  border-radius: 5px;\n  padding-top: 5px;\n  padding-bottom: 5px; }\n.main-row {\n  border-bottom: 2px double #dfdfdf; }\n::-webkit-scrollbar {\n  width: 4px; }\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px; }\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.61);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n.hodoo {\n  font-family: 'Berkshire Swash', cursive;\n  font-size: 40px;\n  text-align: right;\n  color: #7e0000; }\n.hodoo:focus {\n  outline: 0; }\n.dashboard {\n  width: 20%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #aa0909;\n  background-color: ghostwhite;\n  /*border: 1.2px solid #ae0000;\n  border-radius: 5px;*/\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold;\n  text-align: center;\n  margin-top: 15px; }\n.dashboard:hover {\n  color: #6a0d0e;\n  background-color: ghostwhite;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  /* border: 1.2px solid #ffffdf;\n   border-radius: 5px;*/ }\n.box {\n  width: 230px;\n  height: 25px;\n  background: #fcfcfc;\n  border: 2px solid #9c0000;\n  border-radius: 10px;\n  text-indent: 32px;\n  color: #9c0000;\n  font-size: 11px;\n  font-family: \"Lato\",\"Lucida Grande\", \"Helvetica\", \"Verdana\", \"Arial\"; }\n.box:focus {\n  outline: 0; }\n.fa-search {\n  position: absolute;\n  top: 7px;\n  left: 23px;\n  font-size: 11px; }\n.search-bar {\n  margin-top: 10px; }\n.body {\n  max-height: 45vh;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  border: 1px solid #cbc6cb;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding-left: 0;\n  padding-right: 0;\n  color: #6a0d0e; }\n.items {\n  background-color: white;\n  color: #6a0d0e;\n  font-family: \"Times New Roman\";\n  font-size: 13px;\n  font-weight: bold;\n  border: 1px double #dfdfdf;\n  border-radius: 10px;\n  margin-bottom: 8px; }\n.money {\n  border: 1px solid white;\n  background-color: #a50f10;\n  color: white;\n  border-radius: 8px;\n  padding-left: 2px;\n  padding-right: 2px;\n  text-align: center; }\n.order-date {\n  font-weight: normal;\n  padding-top: 1px;\n  padding-bottom: 3px; }\n.order-id {\n  padding-top: 3px; }\n.table-and-money {\n  padding-top: 6px;\n  padding-right: 6px;\n  padding-bottom: 10px; }\na {\n  color: #6a0d0e; }\n.Summary {\n  font-family: \"Times New Roman\";\n  color: #520606;\n  font-size: 16px;\n  font-weight: bold;\n  padding-top: 3px;\n  padding-bottom: 3px; }\n.detail {\n  font-family: \"Times New Roman\";\n  color: #630606;\n  font-size: 15px;\n  font-weight: bold;\n  padding-top: 8px;\n  padding-bottom: 2px; }\n.empty {\n  font-family: \"Times New Roman\";\n  color: #630606;\n  font-size: 20px;\n  font-weight: bold;\n  padding-top: 20px;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/admin/food-item/fooditem-grid-view/fooditem-grid-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooditemGridViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__our_offers_our_offers_service__ = __webpack_require__("./src/app/our-offers/our-offers.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooditemGridViewComponent = (function () {
    function FooditemGridViewComponent(router, _route, _ourOfferService) {
        this.router = router;
        this._route = _route;
        this._ourOfferService = _ourOfferService;
        this.imageUrl = 'assets/noImage.png';
        this.rootUrl = 'http://localhost:1548/Content/';
        this.FoodItem = [];
    }
    FooditemGridViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.data.
            subscribe(function (data) {
            _this._ourOfferService.FoodItem = data['foodItems'];
        });
        this.FoodItem = this._ourOfferService.FoodItem;
        this.subscription = this._ourOfferService.foodItemChanged
            .subscribe(function (FoodItem) {
            _this.FoodItem = FoodItem;
        });
        for (var i = 0; i < this.FoodItem.length; i++) {
            if (this.FoodItem[i].FoodItemImage === null || this.FoodItem[i].FoodItemImage === '') {
                this.FoodItem[i].FoodItemImage = this.imageUrl;
            }
            else {
                this.FoodItem[i].FoodItemImage = this.rootUrl + this.FoodItem[i].FoodItemImage;
            }
        }
        this.total = this._ourOfferService.FoodItem.length;
    };
    FooditemGridViewComponent.prototype.viewDetails = function (foodItem) {
        var foodItemId = foodItem.Id;
        this.router.navigate(['admin/food-item/grid-details', foodItemId]);
    };
    return FooditemGridViewComponent;
}());
FooditemGridViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-fooditem-grid-view',
        template: __webpack_require__("./src/app/admin/food-item/fooditem-grid-view/fooditem-grid-view.component.html"),
        styles: [__webpack_require__("./src/app/admin/food-item/fooditem-grid-view/fooditem-grid-view.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__our_offers_our_offers_service__["a" /* OurOffersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__our_offers_our_offers_service__["a" /* OurOffersService */]) === "function" && _c || Object])
], FooditemGridViewComponent);

var _a, _b, _c;
//# sourceMappingURL=fooditem-grid-view.component.js.map

/***/ }),

/***/ "./src/app/admin/food-item/fooditem-grid-view/grid-details/grid-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-offset-1 col-md-9 order-detail\">\n    <div class=\"row buttons\">\n      <div class=\"col-md-2 back\">\n        <button class=\"back-button\" (click)=\"goBack()\"><i class=\"fa fa-arrow-circle-o-left\" aria-hidden=\"true\"></i>\n          Back</button>\n      </div>\n      <div class=\"col-md-offset-4 col-md-2 change-image\">\n        <button class=\"change-image-button\" (click)=\"changeImage()\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n          Change Image</button>\n      </div>\n      <div class=\"col-md-2 edit\">\n        <button class=\"back-button\" (click)=\"edit()\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n          Edit</button>\n      </div>\n      <div class=\"col-md-2 delete\">\n        <button class=\"back-button\" (click)=\"deleteFoodItem()\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n          Delete</button>\n      </div>\n    </div>\n    <div class=\"fixed-div\">\n    <div class=\"row\">\n      <div class=\"col-md-12 general\">\n        General Informations\n      </div>\n    </div>\n\n\n    <div class=\"row header\">\n      <div class=\"col-md-2\">\n        <div class=\"row\">\n          <div class=\"col-md-12 image\">\n            <img [src]=\"FoodItem.FoodItemImage\"\n                 class=\"img-responsive image\"\n                 style= \"height:90px\"\n            >\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-10\">\n        <div class=\"row\">\n          <div class=\"col-md-12 item-name\">\n            {{ FoodItem.Name }}\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6 selling-price\">\n            Selling Price: {{ FoodItem.Price }} BDT\n          </div>\n          <div class=\"col-md-6 making-price\">\n            Making Cost: {{ FoodItem.MakingCost }} BDT\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12 selling-price\">\n            Profit: {{ FoodItem.Profit }} BDT\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row general\">\n      <div class=\"col-md-12\">\n        Ingredients\n      </div>\n    </div>\n    <div class=\"row units \">\n      <div class=\"col-md-3\">\n        Product\n      </div>\n      <div class=\"col-md-2 other\">\n        Quantity\n      </div>\n      <div class=\"col-md-2 other\">\n        Unit\n      </div>\n      <div class=\"col-md-2 other\">\n        Unit Price\n      </div>\n      <div class=\"col-md-3 other\">\n        Sub Total\n      </div>\n    </div>\n    <div  class=\"scrollable-div\" >\n      <div class=\"row table-bordered units-details\" *ngFor=\"let products of FoodItem.Ingredients, let i = index\">\n        <div class=\"col-md-3 \" >\n          {{ i+1 }}. {{ products.Name }}\n        </div>\n        <div class=\"col-md-2 other\">\n          {{ products.Quantity }}\n        </div>\n        <div class=\"col-md-2 other\">\n          {{ products.Unit}}\n        </div>\n        <div class=\"col-md-2 other\">\n          {{ products.InventoryPrice }}\n        </div>\n        <div class=\"col-md-3 other\">\n          {{ products.Quantity * products.InventoryPrice }} BDT\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12 general\">\n        Additional Information\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12 additional\">\n        Total Sale of {{ FoodItem.Name }} : ({{ FoodItem.TotalSale }})s\n      </div>\n    </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/admin/food-item/fooditem-grid-view/grid-details/grid-details.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Acme|Aladin|Berkshire+Swash|Cabin+Sketch|Chewy|Fredoka+One|Kanit|Lobster|Londrina+Solid|Righteous|Rock+Salt\");\n.item-name {\n  font-family: \"Times New Roman\";\n  font-size: 18px;\n  color: #6a0d0e;\n  font-weight: bold;\n  text-align: left; }\n.selling-price {\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  color: #6a0d0e;\n  text-align: left;\n  font-weight: bold; }\n.making-price {\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  color: #6a0d0e;\n  font-weight: bold;\n  text-align: center; }\n.image {\n  height: 100%;\n  width: 100%;\n  border: 1px solid #ffffff;\n  border-radius: 10px; }\n.other {\n  text-align: center; }\n.additional {\n  font-family: \"Times New Roman\";\n  font-size: 12px;\n  color: #6a0d0e;\n  font-weight: bold;\n  text-align: center;\n  padding-top: 10px; }\n.all-categories-button {\n  width: 100%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #d32039;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.general {\n  font-size: 15px;\n  font-weight: bold;\n  padding-top: 13px;\n  padding-bottom: 13px;\n  border-bottom: 1px double #dfdfdf;\n  text-align: center;\n  color: #221d1f;\n  background-color: #f6f6f6; }\n.all-categories-button:hover {\n  background-color: #d32039;\n  color: #ffffdf;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  border: 1.2px solid #ffffdf;\n  border-radius: 5px; }\n.all-categories-button:focus {\n  outline: 0; }\n.header {\n  padding-top: 15px;\n  padding-bottom: 10px; }\n.main-row {\n  border-bottom: 2px double #dfdfdf; }\n.body {\n  height: 350px;\n  overflow-y: scroll;\n  border: 1px solid #cbc6cb;\n  border-radius: 5px; }\n::-webkit-scrollbar {\n  width: 4px; }\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px; }\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.61);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n.hodoo {\n  font-family: 'Berkshire Swash', cursive;\n  font-size: 40px;\n  text-align: right;\n  color: #7e0000; }\n.hodoo:focus {\n  outline: 0; }\n.dashboard {\n  width: 20%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #aa0909;\n  background-color: ghostwhite;\n  /*border: 1.2px solid #ae0000;\n  border-radius: 5px;*/\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold;\n  text-align: center;\n  margin-top: 15px; }\n.dashboard:hover {\n  color: #6a0d0e;\n  background-color: ghostwhite;\n  font-family: \"Arial Narrow\";\n  font-weight: bold; }\n.fixed-div {\n  max-height: 60vh;\n  overflow-y: scroll;\n  overflow-x: hidden; }\n.order-detail {\n  background-color: #fcfcfc;\n  color: #910000;\n  font-family: \"Times New Roman\";\n  border: 2px double #e2e2e2;\n  border-radius: 5px;\n  margin-top: 10px;\n  padding-top: 10px;\n  padding-bottom: 20px;\n  background-color: white; }\n.order-ref, .order-date {\n  border-right: 2px double #c5bdbf;\n  font-weight: bold;\n  font-size: 16px; }\n.upper-div {\n  border-bottom: 2px double #dfdfdf; }\n.id, .date {\n  font-size: 15px;\n  font-weight: bold; }\n.prod {\n  font-size: 15px;\n  font-weight: bold;\n  padding-top: 13px;\n  padding-bottom: 13px;\n  border-bottom: 1px double #dfdfdf;\n  text-align: center;\n  color: #221d1f;\n  background-color: #f6f6f6; }\n.units {\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  border-bottom: 1px double #dfdfdf; }\n.units-details {\n  font-size: 13px;\n  font-weight: bold;\n  padding-top: 4px;\n  padding-bottom: 4px; }\n.total {\n  font-weight: bold;\n  padding-top: 20px;\n  padding-bottom: 5px;\n  text-align: right;\n  font-size: 20px; }\n.bdt {\n  font-weight: bold;\n  padding-top: 20px;\n  padding-bottom: 5px;\n  text-align: left;\n  font-size: 20px; }\n.scrollable-div {\n  max-height: 20vh;\n  overflow-y: scroll;\n  overflow-x: hidden; }\n::-webkit-scrollbar {\n  width: 3px; }\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px; }\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.61);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n.back-button {\n  width: 80%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #9b0f12;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.change-image-button {\n  width: 100%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #9b0f12;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.change-image-button:hover {\n  width: 100%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #ffffdf;\n  background-color: #9b0f12;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.change-image {\n  padding-right: 0; }\n.back {\n  text-align: center; }\n.edit {\n  text-align: center;\n  padding-right: 0; }\n.delete {\n  text-align: left;\n  padding-right: 0; }\n.back-button:hover {\n  width: 80%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #ffffdf;\n  background-color: #9b0f12;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.back-button:focus {\n  outline: 0; }\n.buttons {\n  padding-top: 5px;\n  padding-bottom: 10px;\n  border-bottom: 2px double #dfdfdf; }\n.sub-links {\n  color: #b3acaf;\n  font-family: \"Arial Narrow\";\n  font-size: 15px;\n  font-weight: bold; }\n.sub-links:hover {\n  color: #6a0d0e;\n  font-family: \"Arial Narrow\";\n  font-size: 15px;\n  font-weight: bold; }\na {\n  color: #b3acaf; }\n.link {\n  color: #6a0d0e; }\n.pop-up {\n  color: #7e0000;\n  font-size: 14px;\n  font-family: \"Times New Roman\";\n  text-align: center;\n  font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/admin/food-item/fooditem-grid-view/grid-details/grid-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data_storage_service__ = __webpack_require__("./src/app/shared/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__our_offers_our_offers_service__ = __webpack_require__("./src/app/our-offers/our-offers.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GridDetailsComponent = (function () {
    function GridDetailsComponent(_route, router, _dataStorageService, _ourOfferService) {
        var _this = this;
        this._route = _route;
        this.router = router;
        this._dataStorageService = _dataStorageService;
        this._ourOfferService = _ourOfferService;
        this.rootUrl = 'http://localhost:1548/Content/';
        this.imageUrl = 'assets/noImage.png';
        this.FoodItemList = [];
        this.Ingredients = [];
        this._route.params
            .subscribe(function (params) {
            _this.foodItemId = params['id'];
        });
    }
    GridDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.data.
            subscribe(function (data) {
            _this._ourOfferService.FoodItem = data['foodItems'];
        });
        this.FoodItemList = this._ourOfferService.FoodItem;
        this._ourOfferService.foodItemChanged
            .subscribe(function (FoodItem) {
            _this.FoodItemList = FoodItem;
        });
        for (var i = 0; i < this.FoodItemList.length; i++) {
            if (this.FoodItemList[i].Id === this.foodItemId) {
                this.FoodItem = this.FoodItemList[i];
                if (this.FoodItem.FoodItemImage === null || this.FoodItem.FoodItemImage === '') {
                    this.FoodItem.FoodItemImage = this.imageUrl;
                }
                else {
                    this.FoodItem.FoodItemImage = this.rootUrl + this.FoodItem.FoodItemImage;
                }
            }
        }
    };
    GridDetailsComponent.prototype.goBack = function () {
        this.router.navigate(['admin/food-item/grid-view']);
    };
    GridDetailsComponent.prototype.edit = function () {
        this.router.navigate(['admin/food-item/edit-food-item', this.foodItemId]);
    };
    GridDetailsComponent.prototype.confirmEvent = function () {
        var _this = this;
        this._dataStorageService.deleteFoodItem(this.FoodItem).subscribe(function (data) {
            for (var i = 0; i < _this.FoodItemList.length; i++) {
                if (_this.FoodItemList[i].Id === _this.foodItemId) {
                    _this._ourOfferService.FoodItem.splice(i, 1);
                }
            }
            _this.router.navigate(['admin/food-item/grid-view']);
        });
    };
    GridDetailsComponent.prototype.deleteFoodItem = function () {
        var dialog = confirm('Delete this item?\n' +
            'You will lose any kind of data associated with the current item!');
        if (dialog === true) {
            this.confirmEvent();
        }
    };
    GridDetailsComponent.prototype.changeImage = function () {
        this.router.navigate(['admin/food-item/edit-food-item-image', this.foodItemId]);
    };
    return GridDetailsComponent;
}());
GridDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-grid-details',
        template: __webpack_require__("./src/app/admin/food-item/fooditem-grid-view/grid-details/grid-details.component.html"),
        styles: [__webpack_require__("./src/app/admin/food-item/fooditem-grid-view/grid-details/grid-details.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_data_storage_service__["a" /* DataStorageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__our_offers_our_offers_service__["a" /* OurOffersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__our_offers_our_offers_service__["a" /* OurOffersService */]) === "function" && _d || Object])
], GridDetailsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=grid-details.component.js.map

/***/ }),

/***/ "./src/app/admin/food-item/fooditem-list-view/fooditem-list-view.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row empty\" *ngIf=\"total === 0; else notEmpty\">\n  <div class=\"col-md-12\">\n    No item available. Click \"Add New Item\" to populate.\n  </div>\n</div>\n\n\n<ng-template #notEmpty>\n<div class=\"sum-of-inv-body\">\n  <div class=\"row\">\n    <div class=\"col-md-4 search-bar\">\n      <span class=\"fa fa-search\"></span>\n     <input class=\"box\" type=\"text\" [(ngModel)]=\"term\" placeholder=\"Search by Name...\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"col-md-3 receipt\">\n        Product Name\n      </div>\n      <div class=\"col-md-3 name\">\n        Selling Price\n      </div>\n      <div class=\"col-md-3 name\">\n        Inventory Cost\n      </div>\n      <div class=\"col-md-3 price\">\n        Estimated Profit\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-12 body\">\n      <div class=\"row\" *ngFor=\"let foodItem of FoodItem | filter:term; let i = index\">\n        <a title=\"View This Item's Details\"\n           style=\"cursor: pointer\" (click)=\"viewDetails(foodItem)\">\n          <div class=\"col-md-12 f-name table-bordered\">\n            <div class=\"col-md-3 column-receipt\">\n          SN-{{ foodItem.SerialNo }}. {{ foodItem.Name }}\n            </div>\n            <div class=\"col-md-3 column\">\n              {{ foodItem.Price }} BDT\n            </div>\n            <div class=\"col-md-3 column\">\n              {{ foodItem.MakingCost }} BDT\n            </div>\n\n            <div class=\"col-md-3 column\">\n              {{ foodItem.Profit }} BDT\n            </div>\n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"row\">\n  <div class=\"col-md-12 detail\">\n    Total Products: {{ total }} (s)\n  </div>\n</div>\n\n</ng-template>\n\n"

/***/ }),

/***/ "./src/app/admin/food-item/fooditem-list-view/fooditem-list-view.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Acme|Aladin|Berkshire+Swash|Cabin+Sketch|Chewy|Fredoka+One|Kanit|Lobster|Londrina+Solid|Righteous|Rock+Salt\");\n.name, .price {\n  margin-top: 20px;\n  color: #6a0d0e;\n  font-family: \"Berlin Sans FB\";\n  font-size: 17px;\n  text-align: center;\n  padding-left: 0;\n  padding-right: 0; }\n.whole {\n  /*margin-top: 20px;*/ }\n.receipt {\n  text-align: left;\n  margin-top: 20px;\n  color: #6a0d0e;\n  font-family: \"Berlin Sans FB\";\n  font-size: 17px;\n  padding-left: 0;\n  padding-right: 0; }\n.column {\n  border-left: 2px double #c5bdbf;\n  padding-left: 0;\n  padding-right: 0;\n  text-align: center; }\n.column-receipt {\n  border-left: none; }\n.sum-of-inv-body {\n  /*padding-right: 0;\n  padding-left: 155px;*/ }\n.f-name {\n  padding-top: 20px;\n  color: #6a0d0e;\n  font-family: \"Times New Roman\";\n  font-size: 13px;\n  font-weight: bold;\n  padding-left: 0;\n  padding-right: 0;\n  /*-webkit-box-shadow: 0px 10px 25px 0px rgba(161, 18, 18, 0.2);\n  -moz-box-shadow: 0px 10px 25px 0px rgba(161, 18, 18, 0.2);\n  box-shadow: 0px 10px 25px 0px rgba(161, 18, 18, 0.2);*/ }\n.all-categories-button {\n  width: 100%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #d32039;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.all-categories-button:hover {\n  background-color: #d32039;\n  color: #ffffdf;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  border: 1.2px solid #ffffdf;\n  border-radius: 5px; }\n.all-categories-button:focus {\n  outline: 0; }\n.header {\n  color: #770000;\n  font-size: 21px;\n  font-family: \"Berlin Sans FB\";\n  text-align: left;\n  margin-top: 10px;\n  border: 1px;\n  border-radius: 5px;\n  padding-top: 5px;\n  padding-bottom: 5px; }\n.main-row {\n  border-bottom: 2px double #dfdfdf; }\n.body {\n  max-height: 42vh;\n  overflow-y: scroll;\n  border: 1px solid #cbc6cb;\n  border-radius: 5px;\n  background-color: white; }\n::-webkit-scrollbar {\n  width: 4px; }\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px; }\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.61);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n.hodoo {\n  font-family: 'Berkshire Swash', cursive;\n  font-size: 40px;\n  text-align: right;\n  color: #7e0000; }\n.hodoo:focus {\n  outline: 0; }\n.dashboard {\n  width: 20%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #aa0909;\n  background-color: ghostwhite;\n  /*border: 1.2px solid #ae0000;\n  border-radius: 5px;*/\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold;\n  text-align: center;\n  margin-top: 15px; }\n.dashboard:hover {\n  color: #6a0d0e;\n  background-color: ghostwhite;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  /* border: 1.2px solid #ffffdf;\n   border-radius: 5px;*/ }\n.box {\n  width: 230px;\n  height: 25px;\n  background: #fcfcfc;\n  border: 2px solid #9c0000;\n  border-radius: 10px;\n  text-indent: 32px;\n  color: #9c0000;\n  font-size: 11px;\n  font-family: \"Lato\",\"Lucida Grande\", \"Helvetica\", \"Verdana\", \"Arial\"; }\n.box:focus {\n  outline: 0; }\n.fa-search {\n  position: absolute;\n  top: 7px;\n  left: 23px;\n  font-size: 11px; }\n.search-bar {\n  margin-top: 10px; }\n.Summary {\n  font-family: \"Times New Roman\";\n  color: #520606;\n  font-size: 16px;\n  font-weight: bold;\n  padding-top: 3px;\n  padding-bottom: 3px; }\n.detail {\n  font-family: \"Times New Roman\";\n  color: #630606;\n  font-size: 15px;\n  font-weight: bold;\n  padding-top: 8px;\n  padding-bottom: 2px; }\n.empty {\n  font-family: \"Times New Roman\";\n  color: #630606;\n  font-size: 20px;\n  font-weight: bold;\n  padding-top: 20px;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/admin/food-item/fooditem-list-view/fooditem-list-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooditemListViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__our_offers_our_offers_service__ = __webpack_require__("./src/app/our-offers/our-offers.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooditemListViewComponent = (function () {
    function FooditemListViewComponent(_route, router, _ourOfferService) {
        this._route = _route;
        this.router = router;
        this._ourOfferService = _ourOfferService;
        this.FoodItem = [];
    }
    FooditemListViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.data.
            subscribe(function (data) {
            _this._ourOfferService.FoodItem = data['foodItems'];
        });
        this.FoodItem = this._ourOfferService.FoodItem;
        this._ourOfferService.foodItemChanged
            .subscribe(function (FoodItem) {
            _this.FoodItem = FoodItem;
        });
        this.total = this._ourOfferService.FoodItem.length;
    };
    FooditemListViewComponent.prototype.viewDetails = function (foodItem) {
        var foodItemId = foodItem.Id;
        this.router.navigate(['admin/food-item/list-details', foodItemId]);
    };
    return FooditemListViewComponent;
}());
FooditemListViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-fooditem-list-view',
        template: __webpack_require__("./src/app/admin/food-item/fooditem-list-view/fooditem-list-view.component.html"),
        styles: [__webpack_require__("./src/app/admin/food-item/fooditem-list-view/fooditem-list-view.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__our_offers_our_offers_service__["a" /* OurOffersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__our_offers_our_offers_service__["a" /* OurOffersService */]) === "function" && _c || Object])
], FooditemListViewComponent);

var _a, _b, _c;
//# sourceMappingURL=fooditem-list-view.component.js.map

/***/ }),

/***/ "./src/app/admin/food-item/fooditem-list-view/list-details/list-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-offset-1 col-md-9 order-detail\">\n    <div class=\"row buttons\">\n      <div class=\"col-md-2 back\">\n        <button class=\"back-button\" (click)=\"goBack()\"><i class=\"fa fa-arrow-circle-o-left\" aria-hidden=\"true\"></i>\n          Back</button>\n      </div>\n      <div class=\"col-md-offset-4 col-md-2 change-image\">\n        <button class=\"change-image-button\" (click)=\"changeImage()\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n          Change Image</button>\n      </div>\n      <div class=\"col-md-2 edit\">\n        <button class=\"back-button\" (click)=\"edit()\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n          Edit</button>\n      </div>\n      <div class=\"col-md-2 delete\">\n        <button class=\"back-button\" (click)=\"deleteFoodItem()\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n          Delete</button>\n      </div>\n    </div>\n    <div class=\"fixed-div\">\n    <div class=\"row\">\n      <div class=\"col-md-12 general\">\n        General Informations\n      </div>\n    </div>\n\n\n    <div class=\"row header\">\n      <div class=\"col-md-2\">\n        <div class=\"row\">\n          <div class=\"col-md-12 image\">\n            <img [src]=\"FoodItem.FoodItemImage\"\n                 class=\"img-responsive image\"\n                 style= \"height:90px\"\n            >\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-10\">\n        <div class=\"row\">\n          <div class=\"col-md-12 item-name\">\n            {{ FoodItem.Name }}\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6 selling-price\">\n           Selling Price: {{ FoodItem.Price }} BDT\n          </div>\n          <div class=\"col-md-6 making-price\">\n          Making Cost: {{ FoodItem.MakingCost }} BDT\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12 selling-price\">\n           Profit: {{ FoodItem.Profit }} BDT\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row general\">\n      <div class=\"col-md-12\">\n        Ingredients\n      </div>\n    </div>\n    <div class=\"row units \">\n      <div class=\"col-md-3\">\n        Product\n      </div>\n      <div class=\"col-md-2 other\">\n        Quantity\n      </div>\n      <div class=\"col-md-2 other\">\n        Unit\n      </div>\n      <div class=\"col-md-2 other\">\n       Unit Price\n      </div>\n      <div class=\"col-md-3 other\">\n        Sub Total\n      </div>\n    </div>\n    <div  class=\"scrollable-div\" >\n      <div class=\"row table-bordered units-details\" *ngFor=\"let products of FoodItem.Ingredients, let i = index\">\n        <div class=\"col-md-3 \" >\n         {{ i+1 }}. {{ products.Name }}\n        </div>\n        <div class=\"col-md-2 other\">\n          {{ products.Quantity }}\n        </div>\n        <div class=\"col-md-2 other\">\n          {{ products.Unit}}\n        </div>\n        <div class=\"col-md-2 other\">\n          {{ products.InventoryPrice }}\n        </div>\n        <div class=\"col-md-3 other\">\n          {{ products.Quantity * products.InventoryPrice }} BDT\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12 general\">\n        Additional Information\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12 additional\">\n        Total Sale of {{ FoodItem.Name }} : ({{ FoodItem.TotalSale }})s\n      </div>\n    </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/admin/food-item/fooditem-list-view/list-details/list-details.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Acme|Aladin|Berkshire+Swash|Cabin+Sketch|Chewy|Fredoka+One|Kanit|Lobster|Londrina+Solid|Righteous|Rock+Salt\");\n.item-name {\n  font-family: \"Times New Roman\";\n  font-size: 18px;\n  color: #6a0d0e;\n  font-weight: bold;\n  text-align: left; }\n.selling-price {\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  color: #6a0d0e;\n  text-align: left;\n  font-weight: bold; }\n.making-price {\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  color: #6a0d0e;\n  font-weight: bold;\n  text-align: center; }\n.image {\n  height: 100%;\n  width: 100%;\n  border: 1px solid #ffffff;\n  border-radius: 10px; }\n.other {\n  text-align: center; }\n.additional {\n  font-family: \"Times New Roman\";\n  font-size: 12px;\n  color: #6a0d0e;\n  font-weight: bold;\n  text-align: center;\n  padding-top: 10px; }\n.all-categories-button {\n  width: 100%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #d32039;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.general {\n  font-size: 15px;\n  font-weight: bold;\n  padding-top: 13px;\n  padding-bottom: 13px;\n  border-bottom: 1px double #dfdfdf;\n  text-align: center;\n  color: #221d1f;\n  background-color: #f6f6f6; }\n.all-categories-button:hover {\n  background-color: #d32039;\n  color: #ffffdf;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  border: 1.2px solid #ffffdf;\n  border-radius: 5px; }\n.all-categories-button:focus {\n  outline: 0; }\n.header {\n  padding-top: 15px;\n  padding-bottom: 10px; }\n.main-row {\n  border-bottom: 2px double #dfdfdf; }\n.body {\n  height: 350px;\n  overflow-y: scroll;\n  border: 1px solid #cbc6cb;\n  border-radius: 5px; }\n::-webkit-scrollbar {\n  width: 4px; }\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px; }\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.61);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n.hodoo {\n  font-family: 'Berkshire Swash', cursive;\n  font-size: 40px;\n  text-align: right;\n  color: #7e0000; }\n.hodoo:focus {\n  outline: 0; }\n.dashboard {\n  width: 20%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #aa0909;\n  background-color: ghostwhite;\n  /*border: 1.2px solid #ae0000;\n  border-radius: 5px;*/\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold;\n  text-align: center;\n  margin-top: 15px; }\n.dashboard:hover {\n  color: #6a0d0e;\n  background-color: ghostwhite;\n  font-family: \"Arial Narrow\";\n  font-weight: bold; }\n.fixed-div {\n  max-height: 60vh;\n  overflow-y: scroll;\n  overflow-x: hidden; }\n.order-detail {\n  background-color: #fcfcfc;\n  color: #910000;\n  font-family: \"Times New Roman\";\n  border: 2px double #e2e2e2;\n  border-radius: 5px;\n  margin-top: 10px;\n  padding-top: 10px;\n  padding-bottom: 20px;\n  background-color: white; }\n.order-ref, .order-date {\n  border-right: 2px double #c5bdbf;\n  font-weight: bold;\n  font-size: 16px; }\n.upper-div {\n  border-bottom: 2px double #dfdfdf; }\n.id, .date {\n  font-size: 15px;\n  font-weight: bold; }\n.prod {\n  font-size: 15px;\n  font-weight: bold;\n  padding-top: 13px;\n  padding-bottom: 13px;\n  border-bottom: 1px double #dfdfdf;\n  text-align: center;\n  color: #221d1f;\n  background-color: #f6f6f6; }\n.units {\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  border-bottom: 1px double #dfdfdf; }\n.units-details {\n  font-size: 13px;\n  font-weight: bold;\n  padding-top: 4px;\n  padding-bottom: 4px; }\n.total {\n  font-weight: bold;\n  padding-top: 20px;\n  padding-bottom: 5px;\n  text-align: right;\n  font-size: 20px; }\n.bdt {\n  font-weight: bold;\n  padding-top: 20px;\n  padding-bottom: 5px;\n  text-align: left;\n  font-size: 20px; }\n.scrollable-div {\n  max-height: 20vh;\n  overflow-y: scroll;\n  overflow-x: hidden; }\n::-webkit-scrollbar {\n  width: 3px; }\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px; }\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.61);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n.back-button {\n  width: 80%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #9b0f12;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.change-image-button {\n  width: 100%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #9b0f12;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.change-image-button:hover {\n  width: 100%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #ffffdf;\n  background-color: #9b0f12;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.change-image {\n  padding-right: 0; }\n.back {\n  text-align: center; }\n.edit {\n  text-align: center;\n  padding-right: 0; }\n.delete {\n  text-align: left;\n  padding-right: 0; }\n.back-button:hover {\n  width: 80%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #ffffdf;\n  background-color: #9b0f12;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.back-button:focus {\n  outline: 0; }\n.buttons {\n  padding-top: 5px;\n  padding-bottom: 10px;\n  border-bottom: 2px double #dfdfdf; }\n.sub-links {\n  color: #b3acaf;\n  font-family: \"Arial Narrow\";\n  font-size: 15px;\n  font-weight: bold; }\n.sub-links:hover {\n  color: #6a0d0e;\n  font-family: \"Arial Narrow\";\n  font-size: 15px;\n  font-weight: bold; }\na {\n  color: #b3acaf; }\n.link {\n  color: #6a0d0e; }\n.pop-up {\n  color: #7e0000;\n  font-size: 14px;\n  font-family: \"Times New Roman\";\n  text-align: center;\n  font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/admin/food-item/fooditem-list-view/list-details/list-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__our_offers_our_offers_service__ = __webpack_require__("./src/app/our-offers/our-offers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_data_storage_service__ = __webpack_require__("./src/app/shared/data-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListDetailsComponent = (function () {
    function ListDetailsComponent(_route, router, _dataStorageService, _ourOfferService) {
        var _this = this;
        this._route = _route;
        this.router = router;
        this._dataStorageService = _dataStorageService;
        this._ourOfferService = _ourOfferService;
        this.rootUrl = 'http://localhost:1548/Content/';
        this.imageUrl = 'assets/noImage.png';
        this.FoodItemList = [];
        this.Ingredients = [];
        this._route.params
            .subscribe(function (params) {
            _this.foodItemId = params['id'];
        });
    }
    ListDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.data.
            subscribe(function (data) {
            _this._ourOfferService.FoodItem = data['foodItems'];
        });
        this.FoodItemList = this._ourOfferService.FoodItem;
        this._ourOfferService.foodItemChanged
            .subscribe(function (FoodItem) {
            _this.FoodItemList = FoodItem;
        });
        for (var i = 0; i < this.FoodItemList.length; i++) {
            if (this.FoodItemList[i].Id === this.foodItemId) {
                this.FoodItem = this.FoodItemList[i];
                if (this.FoodItem.FoodItemImage === null || this.FoodItem.FoodItemImage === '') {
                    this.FoodItem.FoodItemImage = this.imageUrl;
                }
                else {
                    this.FoodItem.FoodItemImage = this.rootUrl + this.FoodItem.FoodItemImage;
                }
            }
        }
    };
    ListDetailsComponent.prototype.goBack = function () {
        this.router.navigate(['admin/food-item/list-view']);
    };
    ListDetailsComponent.prototype.edit = function () {
        this.router.navigate(['admin/food-item/edit-food-item', this.foodItemId]);
    };
    ListDetailsComponent.prototype.confirmEvent = function () {
        var _this = this;
        this._dataStorageService.deleteFoodItem(this.FoodItem).subscribe(function (data) {
            for (var i = 0; i < _this.FoodItemList.length; i++) {
                if (_this.FoodItemList[i].Id === _this.foodItemId) {
                    _this._ourOfferService.FoodItem.splice(i, 1);
                }
            }
            _this.router.navigate(['admin/food-item/list-view']);
        });
    };
    ListDetailsComponent.prototype.deleteFoodItem = function () {
        var dialog = confirm('Delete this item?\n' +
            'You will lose any kind of data associated with the current item!');
        if (dialog === true) {
            this.confirmEvent();
        }
    };
    ListDetailsComponent.prototype.changeImage = function () {
        this.router.navigate(['admin/food-item/edit-food-item-image', this.foodItemId]);
    };
    return ListDetailsComponent;
}());
ListDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-list-details',
        template: __webpack_require__("./src/app/admin/food-item/fooditem-list-view/list-details/list-details.component.html"),
        styles: [__webpack_require__("./src/app/admin/food-item/fooditem-list-view/list-details/list-details.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_data_storage_service__["a" /* DataStorageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__our_offers_our_offers_service__["a" /* OurOffersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__our_offers_our_offers_service__["a" /* OurOffersService */]) === "function" && _d || Object])
], ListDetailsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=list-details.component.js.map

/***/ }),

/***/ "./src/app/admin/inventory/add-new-inventory/add-new-inventory.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <form (ngSubmit) = \"onAddNewItem(newItem)\" #newItem = \"ngForm\">\n    <div class=\"col-md-offset-1 col-md-9 order-detail\">\n      <div class=\"row buttons\">\n        <div class=\"col-md-2 back\">\n          <button class=\"back-button-cancel\" (click)=\"onCancel()\"><i class=\"fa fa-times-circle-o\" aria-hidden=\"true\"></i>\n            Cancel</button>\n        </div>\n        <div class=\"col-md-offset-8 col-md-2 delete\">\n          <button class=\"back-button\"\n                  [disabled]=\"!newItem.valid\"\n                  type=\"submit\"\n                  title=\"Save this item\"\n          ><i class=\"fa fa-bookmark\" aria-hidden=\"true\"></i>\n            Save</button>\n        </div>\n      </div>\n      <div class=\"row prod-name\">\n        <div class=\"col-md-8\">\n          <div class=\"form-group\">\n            <label for=\"name\">Item's Name:</label>\n            <input\n              type=\"text\"\n              id=\"name\"\n              class=\"form-control\"\n              ngModel\n              name=\"name\"\n              required\n            >\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label for=\"currentPrice\">Current Price:</label>\n            <input\n              type=\"number\"\n              min=\"1\"\n              id=\"currentPrice\"\n              class=\"form-control\"\n              ngModel\n              name=\"currentPrice\"\n              required\n            >\n          </div>\n        </div>\n        <div class=\"col-md-1 bdt\">\n          BDT\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n\n            <label for=\"quantity\">Quantity:</label>\n            <input\n              type=\"number\"\n              min=\"1\"\n              id=\"quantity\"\n              class=\"form-control\"\n              ngModel\n              name=\"quantity\"\n              required\n            >\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label for=\"unit\">Unit:</label>\n            <input\n              type=\"text\"\n              min=\"1\"\n              id=\"unit\"\n              class=\"form-control\"\n              ngModel\n              name=\"unit\"\n              required\n            >\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/admin/inventory/add-new-inventory/add-new-inventory.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Acme|Aladin|Berkshire+Swash|Cabin+Sketch|Chewy|Fredoka+One|Kanit|Lobster|Londrina+Solid|Righteous|Rock+Salt\");\n.name, .price {\n  margin-top: 24px;\n  color: #ae0000;\n  font-family: \"Berlin Sans FB\";\n  font-size: 20px; }\n.whole {\n  /*margin-top: 20px;*/ }\n.sum-of-inv-body {\n  /*padding-right: 0;\n  padding-left: 155px;*/ }\n.f-name {\n  padding-top: 20px;\n  color: #ae0000;\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  font-weight: bold;\n  /*-webkit-box-shadow: 0px 10px 25px 0px rgba(161, 18, 18, 0.2);\n  -moz-box-shadow: 0px 10px 25px 0px rgba(161, 18, 18, 0.2);\n  box-shadow: 0px 10px 25px 0px rgba(161, 18, 18, 0.2);*/ }\n.all-categories-button {\n  width: 80%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #941628;\n  background-color: #ffffdf;\n  border: 1.2px solid #941628;\n  border-radius: 5px;\n  font-size: 13px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  text-align: center; }\n.all-categories-button:hover {\n  background-color: #941628;\n  color: #ffffdf;\n  font-family: \"Arial Narrow\";\n  border: 1.2px solid #ffffdf;\n  border-radius: 5px; }\n.all-categories-button:focus {\n  outline: 0; }\n.header {\n  color: #770000;\n  font-size: 21px;\n  font-family: \"Berlin Sans FB\";\n  text-align: left;\n  margin-top: 1px;\n  border: 1px;\n  border-radius: 5px;\n  padding-top: 1px;\n  padding-bottom: 5px; }\n.main-row {\n  border-bottom: 2px double #dfdfdf; }\n.body {\n  height: 350px;\n  overflow-y: scroll;\n  border: 1px solid #cbc6cb;\n  border-radius: 5px; }\n::-webkit-scrollbar {\n  width: 4px; }\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px; }\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.61);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n.hodoo {\n  font-family: 'Berkshire Swash', cursive;\n  font-size: 40px;\n  text-align: right;\n  color: #7e0000; }\n.hodoo:focus {\n  outline: 0; }\n.dashboard {\n  width: 20%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #aa0909;\n  background-color: ghostwhite;\n  /*border: 1.2px solid #ae0000;\n  border-radius: 5px;*/\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold;\n  text-align: center;\n  margin-top: 15px; }\n.dashboard:hover {\n  color: #6a0d0e;\n  background-color: ghostwhite;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  /* border: 1.2px solid #ffffdf;\n   border-radius: 5px;*/ }\n.order-detail {\n  background-color: #fcfcfc;\n  color: #910000;\n  font-family: \"Times New Roman\";\n  border: 2px double #e2e2e2;\n  border-radius: 5px;\n  margin-top: 6px;\n  padding-top: 6px;\n  padding-bottom: 15px;\n  background-color: white; }\n.order-ref, .order-date {\n  border-right: 2px double #c5bdbf;\n  font-weight: bold;\n  font-size: 16px; }\n.upper-div {\n  border-bottom: 2px double #dfdfdf; }\n.id, .date {\n  font-size: 15px;\n  font-weight: bold; }\n.prod {\n  font-size: 15px;\n  font-weight: bold;\n  padding-top: 13px;\n  padding-bottom: 13px;\n  border-bottom: 1px double #dfdfdf;\n  text-align: center;\n  color: #221d1f;\n  background-color: #f6f6f6; }\n.units {\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  border-bottom: 1px double #dfdfdf; }\n.units-details {\n  font-size: 13px;\n  font-weight: bold;\n  padding-top: 4px;\n  padding-bottom: 4px; }\n.total {\n  font-weight: bold;\n  padding-top: 20px;\n  padding-bottom: 5px;\n  text-align: right;\n  font-size: 20px; }\n.bdt {\n  font-weight: bold;\n  font-family: \"Times New Roman\";\n  padding-top: 30px;\n  text-align: left;\n  font-size: 15px; }\n.scrollable-div {\n  max-height: 20vh;\n  overflow-y: scroll;\n  overflow-x: hidden; }\n::-webkit-scrollbar {\n  width: 3px; }\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px; }\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.61);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n.back-button {\n  width: 60%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #9b0f12;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.back-button-cancel {\n  width: 65%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #9b0f12;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.delete {\n  text-align: right; }\n.back-button:hover {\n  width: 60%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #ffffdf;\n  background-color: #9b0f12;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.back-button-cancel:hover {\n  width: 65%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #ffffdf;\n  background-color: #9b0f12;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.back-button-cancel:focus {\n  outline: 0; }\n.back-button:focus {\n  outline: 0; }\n.buttons {\n  padding-top: 2px;\n  padding-bottom: 2px; }\n.sub-links {\n  color: #b3acaf;\n  font-family: \"Arial Narrow\";\n  font-size: 15px;\n  font-weight: bold; }\n.sub-links:hover {\n  color: #6a0d0e;\n  font-family: \"Arial Narrow\";\n  font-size: 15px;\n  font-weight: bold; }\na {\n  color: #b3acaf; }\n.link {\n  color: #6a0d0e; }\n.pop-up {\n  color: #7e0000;\n  font-size: 14px;\n  font-family: \"Times New Roman\";\n  text-align: center;\n  font-weight: bold; }\n.item-name {\n  font-family: \"Times New Roman\";\n  font-size: 18px;\n  color: #840d0f;\n  font-weight: bold;\n  text-align: left; }\n.selling-price {\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  color: #a80d0f;\n  text-align: left;\n  font-weight: bold; }\n.winning-price {\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  color: #a80d0f;\n  text-align: left;\n  font-weight: bold;\n  padding-top: 5px;\n  padding-bottom: 5px; }\n.loss {\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  color: white;\n  background-color: #840d0f;\n  border: 1px soild white;\n  border-radius: 5px;\n  text-align: left;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  margin-left: 14px;\n  margin-top: 5px; }\nlabel {\n  color: #6a0d0e;\n  font-family: \"Times New Roman\"; }\n.making-price {\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  color: #6a0d0e;\n  font-weight: bold;\n  text-align: center;\n  padding-top: 30px; }\n.image {\n  height: 100%;\n  width: 100%;\n  border: 1px solid #ffffff;\n  border-radius: 10px; }\n.header {\n  padding-top: 15px;\n  padding-bottom: 10px; }\n.general {\n  font-size: 15px;\n  font-weight: bold;\n  padding-top: 13px;\n  padding-bottom: 13px;\n  border-bottom: 1px double #dfdfdf;\n  text-align: center;\n  color: #221d1f;\n  background-color: #f6f6f6; }\n.other {\n  text-align: center; }\n.units {\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  border-bottom: 1px double #dfdfdf; }\n.select {\n  font-family: \"Times New Roman\";\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  text-align: center; }\n.del-ing {\n  color: #9c0000;\n  font-size: 15px;\n  background-color: white;\n  border-right: 5px; }\n.del-ing:hover {\n  color: #8f0000; }\n.save-ingredient {\n  width: 100%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #ffffdf;\n  background-color: #a90f12;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.save-ingredient:hover {\n  font-family: \"Arial Narrow\";\n  color: #ffffdf;\n  background-color: #880f12;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.save-ingredient:focus {\n  outline: 0; }\n.warning {\n  color: #9c0000;\n  font-size: 14px;\n  font-family: \"Times New Roman\";\n  text-align: center;\n  font-weight: bold;\n  padding-top: 12px;\n  padding-bottom: 7px; }\n.scrollable-div {\n  max-height: 20vh;\n  overflow-y: scroll;\n  overflow-x: hidden; }\ninput {\n  color: #9c0000;\n  font-family: \"Times New Roman\"; }\n.prod-name {\n  margin-top: 30px; }\n.extra {\n  padding-left: 0;\n  padding-right: 0; }\n"

/***/ }),

/***/ "./src/app/admin/inventory/add-new-inventory/add-new-inventory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewInventoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_uuid__ = __webpack_require__("./node_modules/ng2-uuid/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_inventory_model__ = __webpack_require__("./src/app/shared/inventory.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__our_offers_our_offers_service__ = __webpack_require__("./src/app/our-offers/our-offers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_data_storage_service__ = __webpack_require__("./src/app/shared/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_inventory_history_model__ = __webpack_require__("./src/app/shared/inventory-history.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddNewInventoryComponent = (function () {
    function AddNewInventoryComponent(router, uuid, _ourOfferService, _dataStorageService) {
        this.router = router;
        this.uuid = uuid;
        this._ourOfferService = _ourOfferService;
        this._dataStorageService = _dataStorageService;
        this.inventoryHistoryModel = [];
    }
    AddNewInventoryComponent.prototype.ngOnInit = function () {
    };
    AddNewInventoryComponent.prototype.onAddNewItem = function (form) {
        var inventoryId = this.uuid.v1();
        var updateHistoryId = this.uuid.v1();
        var name = form.value.name;
        var quantity = form.value.quantity;
        var price = form.value.currentPrice;
        var unit = form.value.unit;
        var updateTime = new Date().toLocaleString();
        var updateHistory = new __WEBPACK_IMPORTED_MODULE_6__shared_inventory_history_model__["a" /* InventoryHistoryModel */](updateHistoryId, inventoryId, quantity, updateTime, unit, price);
        this.inventoryHistoryModel.push(updateHistory);
        var newItem = new __WEBPACK_IMPORTED_MODULE_3__shared_inventory_model__["a" /* Inventory */](inventoryId, name, 0, quantity, unit, price, this.inventoryHistoryModel);
        this._ourOfferService.addToInventoryList(newItem);
        this._dataStorageService.addNewInventoryItem(newItem);
        form.reset();
        this.router.navigate(['admin/inventory/list-view']);
    };
    AddNewInventoryComponent.prototype.onCancel = function () {
        this.router.navigate(['admin/inventory/list-view']);
    };
    return AddNewInventoryComponent;
}());
AddNewInventoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-add-new-inventory',
        template: __webpack_require__("./src/app/admin/inventory/add-new-inventory/add-new-inventory.component.html"),
        styles: [__webpack_require__("./src/app/admin/inventory/add-new-inventory/add-new-inventory.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_uuid__["a" /* Uuid */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_uuid__["a" /* Uuid */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__our_offers_our_offers_service__["a" /* OurOffersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__our_offers_our_offers_service__["a" /* OurOffersService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__shared_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_data_storage_service__["a" /* DataStorageService */]) === "function" && _d || Object])
], AddNewInventoryComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=add-new-inventory.component.js.map

/***/ }),

/***/ "./src/app/admin/inventory/edit-inventory-item/edit-inventory-item.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"row\">\n  <form (ngSubmit) = \"onEditItem(newItem)\" #newItem = \"ngForm\">\n    <div class=\"col-md-offset-1 col-md-9 order-detail\">\n      <div class=\"row buttons\">\n        <div class=\"col-md-2 back\">\n          <button class=\"back-button-cancel\" (click)=\"onCancel()\"><i class=\"fa fa-times-circle-o\" aria-hidden=\"true\"></i>\n            Cancel</button>\n        </div>\n        <div class=\"col-md-8 edit-mode\">\n          Edit Mode\n        </div>\n        <div class=\"col-md-2 delete\">\n          <button class=\"back-button\"\n                  [disabled]=\"!newItem.valid\"\n                  type=\"submit\"\n                  title=\"Save this item\"\n          ><i class=\"fa fa-bookmark\" aria-hidden=\"true\"></i>\n            Save</button>\n        </div>\n      </div>\n      <div class=\"row prod-name\">\n        <div class=\"col-md-8\">\n          <div class=\"form-group\">\n            <label for=\"name\">Item's Name:</label>\n            <input\n              type=\"text\"\n              id=\"name\"\n              class=\"form-control\"\n              [ngModel]=\"name\"\n              name=\"name\"\n              required\n            >\n          </div>\n        </div>\n      </div>\n      <!--<div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label for=\"currentPrice\">Current Price:</label>\n            <input\n              type=\"number\"\n              min=\"1\"\n              id=\"currentPrice\"\n              class=\"form-control\"\n              [ngModel] = \"currentPrice\"\n              name=\"currentPrice\"\n              required\n            >\n          </div>\n        </div>\n        <div class=\"col-md-1 bdt\">\n          BDT\n        </div>\n      </div>-->\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label for=\"unit\">Unit:</label>\n            <input\n              type=\"text\"\n              min=\"1\"\n              id=\"unit\"\n              class=\"form-control\"\n              [ngModel] = \"unit\"\n              name=\"unit\"\n              required\n            >\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/admin/inventory/edit-inventory-item/edit-inventory-item.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Acme|Aladin|Berkshire+Swash|Cabin+Sketch|Chewy|Fredoka+One|Kanit|Lobster|Londrina+Solid|Righteous|Rock+Salt\");\n.name, .price {\n  margin-top: 24px;\n  color: #ae0000;\n  font-family: \"Berlin Sans FB\";\n  font-size: 20px; }\n.whole {\n  /*margin-top: 20px;*/ }\n.sum-of-inv-body {\n  /*padding-right: 0;\n  padding-left: 155px;*/ }\n.f-name {\n  padding-top: 20px;\n  color: #ae0000;\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  font-weight: bold;\n  /*-webkit-box-shadow: 0px 10px 25px 0px rgba(161, 18, 18, 0.2);\n  -moz-box-shadow: 0px 10px 25px 0px rgba(161, 18, 18, 0.2);\n  box-shadow: 0px 10px 25px 0px rgba(161, 18, 18, 0.2);*/ }\n.all-categories-button {\n  width: 80%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #941628;\n  background-color: #ffffdf;\n  border: 1.2px solid #941628;\n  border-radius: 5px;\n  font-size: 13px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  text-align: center; }\n.all-categories-button:hover {\n  background-color: #941628;\n  color: #ffffdf;\n  font-family: \"Arial Narrow\";\n  border: 1.2px solid #ffffdf;\n  border-radius: 5px; }\n.all-categories-button:focus {\n  outline: 0; }\n.header {\n  color: #770000;\n  font-size: 21px;\n  font-family: \"Berlin Sans FB\";\n  text-align: left;\n  margin-top: 1px;\n  border: 1px;\n  border-radius: 5px;\n  padding-top: 1px;\n  padding-bottom: 5px; }\n.main-row {\n  border-bottom: 2px double #dfdfdf; }\n.body {\n  height: 350px;\n  overflow-y: scroll;\n  border: 1px solid #cbc6cb;\n  border-radius: 5px; }\n::-webkit-scrollbar {\n  width: 4px; }\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px; }\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.61);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n.hodoo {\n  font-family: 'Berkshire Swash', cursive;\n  font-size: 40px;\n  text-align: right;\n  color: #7e0000; }\n.hodoo:focus {\n  outline: 0; }\n.dashboard {\n  width: 20%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #aa0909;\n  background-color: ghostwhite;\n  /*border: 1.2px solid #ae0000;\n  border-radius: 5px;*/\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold;\n  text-align: center;\n  margin-top: 15px; }\n.dashboard:hover {\n  color: #6a0d0e;\n  background-color: ghostwhite;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  /* border: 1.2px solid #ffffdf;\n   border-radius: 5px;*/ }\n.order-detail {\n  background-color: #fcfcfc;\n  color: #910000;\n  font-family: \"Times New Roman\";\n  border: 2px double #e2e2e2;\n  border-radius: 5px;\n  margin-top: 6px;\n  padding-top: 6px;\n  padding-bottom: 15px;\n  background-color: white; }\n.order-ref, .order-date {\n  border-right: 2px double #c5bdbf;\n  font-weight: bold;\n  font-size: 16px; }\n.upper-div {\n  border-bottom: 2px double #dfdfdf; }\n.id, .date {\n  font-size: 15px;\n  font-weight: bold; }\n.prod {\n  font-size: 15px;\n  font-weight: bold;\n  padding-top: 13px;\n  padding-bottom: 13px;\n  border-bottom: 1px double #dfdfdf;\n  text-align: center;\n  color: #221d1f;\n  background-color: #f6f6f6; }\n.units {\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  border-bottom: 1px double #dfdfdf; }\n.units-details {\n  font-size: 13px;\n  font-weight: bold;\n  padding-top: 4px;\n  padding-bottom: 4px; }\n.total {\n  font-weight: bold;\n  padding-top: 20px;\n  padding-bottom: 5px;\n  text-align: right;\n  font-size: 20px; }\n.bdt {\n  font-weight: bold;\n  font-family: \"Times New Roman\";\n  padding-top: 30px;\n  text-align: left;\n  font-size: 15px; }\n.scrollable-div {\n  max-height: 20vh;\n  overflow-y: scroll;\n  overflow-x: hidden; }\n::-webkit-scrollbar {\n  width: 3px; }\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px; }\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.61);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n.back-button {\n  width: 60%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #9b0f12;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.back-button-cancel {\n  width: 65%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #9b0f12;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.delete {\n  text-align: right; }\n.back-button:hover {\n  width: 60%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #ffffdf;\n  background-color: #9b0f12;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.back-button-cancel:hover {\n  width: 65%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #ffffdf;\n  background-color: #9b0f12;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.back-button-cancel:focus {\n  outline: 0; }\n.back-button:focus {\n  outline: 0; }\n.buttons {\n  padding-top: 2px;\n  padding-bottom: 2px; }\n.sub-links {\n  color: #b3acaf;\n  font-family: \"Arial Narrow\";\n  font-size: 15px;\n  font-weight: bold; }\n.sub-links:hover {\n  color: #6a0d0e;\n  font-family: \"Arial Narrow\";\n  font-size: 15px;\n  font-weight: bold; }\na {\n  color: #b3acaf; }\n.link {\n  color: #6a0d0e; }\n.pop-up {\n  color: #7e0000;\n  font-size: 14px;\n  font-family: \"Times New Roman\";\n  text-align: center;\n  font-weight: bold; }\n.item-name {\n  font-family: \"Times New Roman\";\n  font-size: 18px;\n  color: #840d0f;\n  font-weight: bold;\n  text-align: left; }\n.selling-price {\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  color: #a80d0f;\n  text-align: left;\n  font-weight: bold; }\n.winning-price {\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  color: #a80d0f;\n  text-align: left;\n  font-weight: bold;\n  padding-top: 5px;\n  padding-bottom: 5px; }\n.loss {\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  color: white;\n  background-color: #840d0f;\n  border: 1px soild white;\n  border-radius: 5px;\n  text-align: left;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  margin-left: 14px;\n  margin-top: 5px; }\nlabel {\n  color: #6a0d0e;\n  font-family: \"Times New Roman\"; }\n.making-price {\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  color: #6a0d0e;\n  font-weight: bold;\n  text-align: center;\n  padding-top: 30px; }\n.image {\n  height: 100%;\n  width: 100%;\n  border: 1px solid #ffffff;\n  border-radius: 10px; }\n.header {\n  padding-top: 15px;\n  padding-bottom: 10px; }\n.general {\n  font-size: 15px;\n  font-weight: bold;\n  padding-top: 13px;\n  padding-bottom: 13px;\n  border-bottom: 1px double #dfdfdf;\n  text-align: center;\n  color: #221d1f;\n  background-color: #f6f6f6; }\n.other {\n  text-align: center; }\n.units {\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  border-bottom: 1px double #dfdfdf; }\n.select {\n  font-family: \"Times New Roman\";\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  text-align: center; }\n.del-ing {\n  color: #9c0000;\n  font-size: 15px;\n  background-color: white;\n  border-right: 5px; }\n.del-ing:hover {\n  color: #8f0000; }\n.save-ingredient {\n  width: 100%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #ffffdf;\n  background-color: #a90f12;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.save-ingredient:hover {\n  font-family: \"Arial Narrow\";\n  color: #ffffdf;\n  background-color: #880f12;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.save-ingredient:focus {\n  outline: 0; }\n.warning {\n  color: #9c0000;\n  font-size: 14px;\n  font-family: \"Times New Roman\";\n  text-align: center;\n  font-weight: bold;\n  padding-top: 12px;\n  padding-bottom: 7px; }\n.scrollable-div {\n  max-height: 20vh;\n  overflow-y: scroll;\n  overflow-x: hidden; }\ninput {\n  color: #9c0000;\n  font-family: \"Times New Roman\";\n  font-weight: bold; }\n.prod-name {\n  margin-top: 30px; }\n.extra {\n  padding-left: 0;\n  padding-right: 0; }\n.edit-mode {\n  text-align: center;\n  font-family: \"Times New Roman\";\n  font-size: 18px;\n  color: #6a0d0e;\n  font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/admin/inventory/edit-inventory-item/edit-inventory-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditInventoryItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__our_offers_our_offers_service__ = __webpack_require__("./src/app/our-offers/our-offers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_inventory_model__ = __webpack_require__("./src/app/shared/inventory.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_data_storage_service__ = __webpack_require__("./src/app/shared/data-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditInventoryItemComponent = (function () {
    function EditInventoryItemComponent(_route, router, _ourOfferService, _dataStorageService) {
        var _this = this;
        this._route = _route;
        this.router = router;
        this._ourOfferService = _ourOfferService;
        this._dataStorageService = _dataStorageService;
        this.name = '';
        this.inventoryHistory = [];
        this.inventoryList = [];
        this._route.params
            .subscribe(function (params) {
            _this.id = params['id'];
        });
    }
    EditInventoryItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.data.
            subscribe(function (data) {
            _this._ourOfferService.inventory = data['inventories'];
        });
        this.inventoryList = this._ourOfferService.inventory;
        this.subscription = this._ourOfferService.inventoryChanged
            .subscribe(function (inventories) {
            _this.inventoryList = inventories;
        });
        for (var i = 0; i < this.inventoryList.length; i++) {
            if (this.inventoryList[i].Id === this.id) {
                this.name = this.inventoryList[i].Name;
                this.currentPrice = this.inventoryList[i].AveragePrice;
                this.unit = this.inventoryList[i].Unit;
                this.inventoryHistory = this.inventoryList[i].InventoryHistoryModel;
            }
        }
    };
    EditInventoryItemComponent.prototype.onEditItem = function (form) {
        var id = this.id;
        var name = form.value.name;
        var price = form.value.currentPrice;
        var unit = form.value.unit;
        var editedInventoryItem = new __WEBPACK_IMPORTED_MODULE_3__shared_inventory_model__["a" /* Inventory */](this.id, name, 0, this.quantity, unit, price, this.inventoryHistory);
        this._ourOfferService.updateInventoryList(this.id, editedInventoryItem);
        this._dataStorageService.editInventoryItem(editedInventoryItem);
        form.reset();
        this.router.navigate(['admin/inventory/list-details', this.id]);
    };
    EditInventoryItemComponent.prototype.onCancel = function () {
        this.router.navigate(['admin/inventory/list-details', this.id]);
    };
    return EditInventoryItemComponent;
}());
EditInventoryItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-edit-inventory-item',
        template: __webpack_require__("./src/app/admin/inventory/edit-inventory-item/edit-inventory-item.component.html"),
        styles: [__webpack_require__("./src/app/admin/inventory/edit-inventory-item/edit-inventory-item.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__our_offers_our_offers_service__["a" /* OurOffersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__our_offers_our_offers_service__["a" /* OurOffersService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_data_storage_service__["a" /* DataStorageService */]) === "function" && _d || Object])
], EditInventoryItemComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=edit-inventory-item.component.js.map

/***/ }),

/***/ "./src/app/admin/inventory/inventory-grid-view/inventory-grid-details/inventory-grid-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-offset-1 col-md-9 order-detail\">\n    <div class=\"row buttons\">\n      <div class=\"col-md-2 back\">\n        <button class=\"back-button\" (click)=\"goBack()\"><i class=\"fa fa-arrow-circle-o-left\" aria-hidden=\"true\"></i>\n          Back</button>\n      </div>\n      <div class=\"col-md-offset-6 col-md-2 edit\">\n        <button class=\"back-button\" (click)=\"edit(inventory)\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n          Edit</button>\n      </div>\n      <div class=\"col-md-2 delete\">\n        <button class=\"back-button\" (click)=\"deleteInventoryItem()\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n          Delete</button>\n      </div>\n    </div>\n    <div class=\"fixed-div\">\n    <div class=\"row\">\n      <div class=\"col-md-12 general\">\n        General Information\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6 name\">\n        Name: {{ inventory.Name }}\n      </div>\n      <div class=\"col-md-6 price\">\n        Average Price: {{ inventory.AveragePrice }} BDT\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12 general\">\n        Additional Information\n      </div>\n    </div>\n    <div class=\"row header\">\n      <div class=\"col-md-6\">\n        Available Quantity\n      </div>\n      <div class=\"col-md-6\">\n        Used Quantity\n      </div>\n    </div>\n    <div class=\"row header table-bordered\">\n      <div class=\"col-md-6\">\n        {{ inventory.RemainingQuantity }} {{ inventory.Unit }} (s)\n      </div>\n      <div class=\"col-md-6\">\n        {{ inventory.UsedQuantity }} {{ inventory.Unit }} (s)\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-offset-5 col-md-2 update\">\n        <button\n          title=\"Update this item's quantity\"\n          class=\"update-button\" (click)=\"update(inventory)\">\n          <i class=\"fa fa-wrench\" aria-hidden=\"true\"></i> Update</button>\n      </div>\n    </div>\n\n    <div class=\"row general\">\n      <div class=\"col-md-12\">\n        Update History\n      </div>\n    </div>\n    <div class=\"row units \">\n      <div class=\"col-md-3\">\n        Product's Quantity\n      </div>\n      <div class=\"col-md-3\">\n        Product's Unit\n      </div>\n      <div class=\"col-md-3\">\n        Current Price\n      </div>\n      <div class=\"col-md-3\">\n        Update Date and Time\n      </div>\n\n    </div>\n\n\n    <div class=\"scrollable-div\" >\n      <div class=\"row table-bordered units-details\" *ngFor=\"let history of inventoryHistory\">\n        <div class=\"col-md-3\">\n          {{ history.UpdatedQuantity }}\n        </div>\n        <div class=\"col-md-3\">\n          {{ inventory.Unit }}\n        </div>\n        <div class=\"col-md-3\">\n          {{ history.CurrentPrice }}\n        </div>\n        <div class=\"col-md-3\">\n          {{ history.UpdateTime }}\n        </div>\n      </div>\n    </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/admin/inventory/inventory-grid-view/inventory-grid-details/inventory-grid-details.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Acme|Aladin|Berkshire+Swash|Cabin+Sketch|Chewy|Fredoka+One|Kanit|Lobster|Londrina+Solid|Righteous|Rock+Salt\");\n.item-name {\n  font-family: \"Times New Roman\";\n  font-size: 18px;\n  color: #6a0d0e;\n  font-weight: bold;\n  text-align: left; }\n.selling-price {\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  color: #6a0d0e;\n  text-align: left;\n  font-weight: bold; }\n.making-price {\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  color: #6a0d0e;\n  font-weight: bold;\n  text-align: center; }\n.fixed-div {\n  max-height: 60vh;\n  overflow-y: scroll;\n  overflow-x: hidden; }\n.image {\n  height: 100%;\n  width: 100%;\n  border: 1px solid #ffffff;\n  border-radius: 10px; }\n.other {\n  text-align: center; }\n.additional {\n  font-family: \"Times New Roman\";\n  font-size: 12px;\n  color: #6a0d0e;\n  font-weight: bold;\n  text-align: center;\n  padding-top: 10px; }\n.all-categories-button {\n  width: 100%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #d32039;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.general {\n  font-size: 15px;\n  font-weight: bold;\n  padding-top: 13px;\n  padding-bottom: 13px;\n  border-bottom: 1px double #dfdfdf;\n  text-align: center;\n  color: #221d1f;\n  background-color: #f6f6f6; }\n.all-categories-button:hover {\n  background-color: #d32039;\n  color: #ffffdf;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  border: 1.2px solid #ffffdf;\n  border-radius: 5px; }\n.all-categories-button:focus {\n  outline: 0; }\n.header {\n  padding-top: 15px;\n  padding-bottom: 10px;\n  padding-right: 0;\n  text-align: center;\n  font-family: \"Times New Roman\";\n  color: #6a0d0e;\n  font-weight: bold; }\n.main-row {\n  border-bottom: 2px double #dfdfdf; }\n.body {\n  height: 350px;\n  overflow-y: scroll;\n  border: 1px solid #cbc6cb;\n  border-radius: 5px; }\n::-webkit-scrollbar {\n  width: 2px; }\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px; }\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(201, 191, 197, 0.61);\n  -webkit-box-shadow: inset 0 0 6px rgba(211, 201, 207, 0.5); }\n.hodoo {\n  font-family: 'Berkshire Swash', cursive;\n  font-size: 40px;\n  text-align: right;\n  color: #7e0000; }\n.hodoo:focus {\n  outline: 0; }\n.dashboard {\n  width: 20%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #aa0909;\n  background-color: ghostwhite;\n  /*border: 1.2px solid #ae0000;\n  border-radius: 5px;*/\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold;\n  text-align: center;\n  margin-top: 15px; }\n.dashboard:hover {\n  color: #6a0d0e;\n  background-color: ghostwhite;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  /* border: 1.2px solid #ffffdf;\n   border-radius: 5px;*/ }\n.order-detail {\n  background-color: #fcfcfc;\n  color: #910000;\n  font-family: \"Times New Roman\";\n  border: 2px double #e2e2e2;\n  border-radius: 5px;\n  margin-top: 10px;\n  padding-top: 10px;\n  padding-bottom: 20px;\n  background-color: white; }\n.order-ref, .order-date {\n  border-right: 2px double #c5bdbf;\n  font-weight: bold;\n  font-size: 16px; }\n.upper-div {\n  border-bottom: 2px double #dfdfdf; }\n.id, .date {\n  font-size: 15px;\n  font-weight: bold; }\n.prod {\n  font-size: 15px;\n  font-weight: bold;\n  padding-top: 13px;\n  padding-bottom: 13px;\n  border-bottom: 1px double #dfdfdf;\n  text-align: center;\n  color: #221d1f;\n  background-color: #f6f6f6; }\n.units {\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  border-bottom: 1px double #dfdfdf;\n  text-align: center; }\n.units-details {\n  font-size: 13px;\n  font-weight: bold;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  text-align: center;\n  border-bottom: 1px double #dfdfdf; }\n.total {\n  font-weight: bold;\n  padding-top: 20px;\n  padding-bottom: 5px;\n  text-align: right;\n  font-size: 20px; }\n.bdt {\n  font-weight: bold;\n  padding-top: 20px;\n  padding-bottom: 5px;\n  text-align: left;\n  font-size: 20px; }\n.scrollable-div {\n  max-height: 17vh;\n  overflow-y: scroll;\n  overflow-x: hidden; }\n::-webkit-scrollbar {\n  width: 3px; }\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px; }\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.61);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n.back-button {\n  width: 60%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #9b0f12;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.back {\n  text-align: center; }\n.edit {\n  text-align: right;\n  padding-right: 0; }\n.delete {\n  text-align: left;\n  padding-right: 0; }\n.back-button:hover {\n  width: 60%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #ffffdf;\n  background-color: #9b0f12;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.back-button:focus {\n  outline: 0; }\n.update-button {\n  width: 70%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #9b0f12;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold;\n  text-align: center; }\n.update-button:hover {\n  width: 70%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #ffffdf;\n  background-color: #9b0f12;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.update-button:focus {\n  outline: 0; }\n.update {\n  text-align: center;\n  padding-top: 6px;\n  padding-bottom: 6px; }\n.buttons {\n  padding-top: 5px;\n  padding-bottom: 10px;\n  border-bottom: 2px double #dfdfdf; }\n.sub-links {\n  color: #b3acaf;\n  font-family: \"Arial Narrow\";\n  font-size: 15px;\n  font-weight: bold; }\n.sub-links:hover {\n  color: #6a0d0e;\n  font-family: \"Arial Narrow\";\n  font-size: 15px;\n  font-weight: bold; }\na {\n  color: #b3acaf; }\n.link {\n  color: #6a0d0e; }\n.pop-up {\n  color: #7e0000;\n  font-size: 14px;\n  font-family: \"Times New Roman\";\n  text-align: center;\n  font-weight: bold; }\n.name, .price {\n  font-size: 18px;\n  font-family: \"Times New Roman\";\n  font-weight: bold;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/admin/inventory/inventory-grid-view/inventory-grid-details/inventory-grid-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryGridDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__our_offers_our_offers_service__ = __webpack_require__("./src/app/our-offers/our-offers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_data_storage_service__ = __webpack_require__("./src/app/shared/data-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InventoryGridDetailsComponent = (function () {
    function InventoryGridDetailsComponent(_route, router, _dataStorageService, _ourOfferService) {
        var _this = this;
        this._route = _route;
        this.router = router;
        this._dataStorageService = _dataStorageService;
        this._ourOfferService = _ourOfferService;
        this.inventoryList = [];
        this.inventoryHistory = [];
        this._route.params
            .subscribe(function (params) {
            _this.inventoryId = params['id'];
        });
    }
    InventoryGridDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.data.
            subscribe(function (data) {
            _this._ourOfferService.inventory = data['inventories'];
        });
        this.inventoryList = this._ourOfferService.inventory;
        this.subscription = this._ourOfferService.inventoryChanged
            .subscribe(function (inventories) {
            _this.inventoryList = inventories;
        });
        for (var i = 0; i < this.inventoryList.length; i++) {
            if (this.inventoryList[i].Id === this.inventoryId) {
                this.inventory = this.inventoryList[i];
                this.inventoryHistory = this.inventoryList[i].InventoryHistoryModel;
                this.index = i;
            }
        }
    };
    InventoryGridDetailsComponent.prototype.goBack = function () {
        this.router.navigate(['admin/inventory/grid-view']);
    };
    InventoryGridDetailsComponent.prototype.confirmEvent = function () {
        var _this = this;
        this._dataStorageService.deleteInventoryItem(this.inventory).
            subscribe(function (data) {
            _this.router.navigate(['admin/inventory/grid-view']);
        });
    };
    InventoryGridDetailsComponent.prototype.edit = function (inventory) {
        this.router.navigate(['admin/inventory/edit-inventory-item', inventory.Id]);
    };
    InventoryGridDetailsComponent.prototype.update = function (inventory) {
        this.router.navigate(['admin/inventory/update-inventory-item', inventory.Id]);
    };
    InventoryGridDetailsComponent.prototype.deleteInventoryItem = function () {
        var dialog = confirm('Delete this item?\n' +
            'You will lose any kind of data associated with the current item!');
        if (dialog) {
            this.confirmEvent();
        }
    };
    return InventoryGridDetailsComponent;
}());
InventoryGridDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-inventory-grid-details',
        template: __webpack_require__("./src/app/admin/inventory/inventory-grid-view/inventory-grid-details/inventory-grid-details.component.html"),
        styles: [__webpack_require__("./src/app/admin/inventory/inventory-grid-view/inventory-grid-details/inventory-grid-details.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_data_storage_service__["a" /* DataStorageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__our_offers_our_offers_service__["a" /* OurOffersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__our_offers_our_offers_service__["a" /* OurOffersService */]) === "function" && _d || Object])
], InventoryGridDetailsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=inventory-grid-details.component.js.map

/***/ }),

/***/ "./src/app/admin/inventory/inventory-grid-view/inventory-grid-view.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row empty\" *ngIf=\"totalProducts === 0; else notEmpty\">\n  <div class=\"col-md-12\">\n    No item available. Click \"Add New Item\" to populate.\n  </div>\n</div>\n\n\n<ng-template #notEmpty>\n<div class=\"row\">\n  <div class=\"col-md-4 search-bar\">\n    <span class=\"fa fa-search\"></span>\n    <input class=\"box\" type=\"text\" [(ngModel)]=\"term\" placeholder=\"Search by Name...\">\n  </div>\n</div>\n\n\n\n<div class=\"row body\">\n  <div class=\"col-md-4 items\" *ngFor=\"let inventory of inventories | filter:term\">\n    <a title=\"View This Item's Details\"\n       style=\"cursor: pointer\" (click)=\"viewDetails(inventory)\">\n      <div class=\"table-and-money\">\n        <div class=\"row\">\n        <div class=\"col-md-12\">\n            Name: {{ inventory.Name }}\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            Average Price: {{ inventory.AveragePrice }} BDT\n          </div>\n        </div>\n      </div>\n\n\n         <div class=\"row\">\n               <div class=\"col-md-12 name\">\n            <strong>{{ inventory.RemainingQuantity }} </strong>{{ inventory.Unit }} (s) on Hand\n               </div>\n             </div>\n\n    </a>\n  </div>\n</div>\n\n\n\n\n\n<div class=\"row\">\n  <div class=\"col-md-12 detail\">\n    Total Products: {{ totalProducts }} (s)\n  </div>\n</div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/admin/inventory/inventory-grid-view/inventory-grid-view.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Acme|Aladin|Berkshire+Swash|Cabin+Sketch|Chewy|Fredoka+One|Kanit|Lobster|Londrina+Solid|Righteous|Rock+Salt\");\n.name, .price {\n  color: #910000;\n  font-family: \"Times New Roman\";\n  font-size: 13px;\n  padding-top: 5px;\n  padding-bottom: 2px; }\n.image {\n  height: 100%;\n  width: 100%;\n  border: 1px solid #ffffff;\n  border-radius: 6px; }\n.whole {\n  /*margin-top: 20px;*/ }\n.sum-of-inv-body {\n  /*padding-right: 0;\n  padding-left: 155px;*/ }\n.f-name {\n  padding-top: 20px;\n  color: #ae0000;\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  font-weight: bold;\n  /*-webkit-box-shadow: 0px 10px 25px 0px rgba(161, 18, 18, 0.2);\n  -moz-box-shadow: 0px 10px 25px 0px rgba(161, 18, 18, 0.2);\n  box-shadow: 0px 10px 25px 0px rgba(161, 18, 18, 0.2);*/ }\n.all-categories-button {\n  width: 100%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #d32039;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.all-categories-button:hover {\n  background-color: #d32039;\n  color: #ffffdf;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  border: 1.2px solid #ffffdf;\n  border-radius: 5px; }\n.all-categories-button:focus {\n  outline: 0; }\n.header {\n  color: #770000;\n  font-size: 21px;\n  font-family: \"Berlin Sans FB\";\n  text-align: left;\n  margin-top: 10px;\n  border: 1px;\n  border-radius: 5px;\n  padding-top: 5px;\n  padding-bottom: 5px; }\n.main-row {\n  border-bottom: 2px double #dfdfdf; }\n::-webkit-scrollbar {\n  width: 4px; }\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px; }\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.61);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n.hodoo {\n  font-family: 'Berkshire Swash', cursive;\n  font-size: 40px;\n  text-align: right;\n  color: #7e0000; }\n.hodoo:focus {\n  outline: 0; }\n.dashboard {\n  width: 20%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #aa0909;\n  background-color: ghostwhite;\n  /*border: 1.2px solid #ae0000;\n  border-radius: 5px;*/\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold;\n  text-align: center;\n  margin-top: 15px; }\n.dashboard:hover {\n  color: #6a0d0e;\n  background-color: ghostwhite;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  /* border: 1.2px solid #ffffdf;\n   border-radius: 5px;*/ }\n.box {\n  width: 230px;\n  height: 25px;\n  background: #fcfcfc;\n  border: 2px solid #9c0000;\n  border-radius: 10px;\n  text-indent: 32px;\n  color: #9c0000;\n  font-size: 11px;\n  font-family: \"Lato\",\"Lucida Grande\", \"Helvetica\", \"Verdana\", \"Arial\"; }\n.box:focus {\n  outline: 0; }\n.fa-search {\n  position: absolute;\n  top: 7px;\n  left: 23px;\n  font-size: 11px; }\n.search-bar {\n  margin-top: 10px; }\n.body {\n  max-height: 45vh;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  border: 1px solid #cbc6cb;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding-left: 0;\n  padding-right: 0;\n  color: #6a0d0e; }\n.items {\n  background-color: white;\n  color: #6a0d0e;\n  font-family: \"Times New Roman\";\n  font-size: 13px;\n  font-weight: bold;\n  border: 1px double #dfdfdf;\n  border-radius: 10px;\n  margin-bottom: 8px; }\n.money {\n  border: 1px solid white;\n  background-color: #a50f10;\n  color: white;\n  border-radius: 8px;\n  padding-left: 2px;\n  padding-right: 2px;\n  text-align: center; }\n.order-date {\n  font-weight: normal;\n  padding-top: 1px;\n  padding-bottom: 3px; }\n.order-id {\n  padding-top: 3px; }\n.table-and-money {\n  padding-top: 6px;\n  padding-right: 6px;\n  padding-bottom: 10px;\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  font-weight: bold; }\na {\n  color: #6a0d0e; }\n.Summary {\n  font-family: \"Times New Roman\";\n  color: #520606;\n  font-size: 16px;\n  font-weight: bold;\n  padding-top: 3px;\n  padding-bottom: 3px; }\n.detail {\n  font-family: \"Times New Roman\";\n  color: #630606;\n  font-size: 15px;\n  font-weight: bold;\n  padding-top: 8px;\n  padding-bottom: 2px; }\n.empty {\n  font-family: \"Times New Roman\";\n  color: #630606;\n  font-size: 20px;\n  font-weight: bold;\n  padding-top: 20px;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/admin/inventory/inventory-grid-view/inventory-grid-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryGridViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__our_offers_our_offers_service__ = __webpack_require__("./src/app/our-offers/our-offers.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InventoryGridViewComponent = (function () {
    function InventoryGridViewComponent(router, _route, _ourOfferService) {
        this.router = router;
        this._route = _route;
        this._ourOfferService = _ourOfferService;
        this.totalProducts = 0;
    }
    InventoryGridViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.data.
            subscribe(function (data) {
            _this._ourOfferService.inventory = data['inventories'];
        });
        this.inventories = this._ourOfferService.inventory;
        this.subscription = this._ourOfferService.inventoryChanged
            .subscribe(function (inventories) {
            _this.inventories = inventories;
        });
        this.totalProducts = this._ourOfferService.inventory.length;
    };
    InventoryGridViewComponent.prototype.ngDoCheck = function () {
        this.totalProducts = this._ourOfferService.inventory.length;
    };
    InventoryGridViewComponent.prototype.viewDetails = function (inventory) {
        var inventoryId = inventory.Id;
        this.router.navigate(['admin/inventory/grid-details', inventoryId]);
    };
    return InventoryGridViewComponent;
}());
InventoryGridViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-inventory-grid-view',
        template: __webpack_require__("./src/app/admin/inventory/inventory-grid-view/inventory-grid-view.component.html"),
        styles: [__webpack_require__("./src/app/admin/inventory/inventory-grid-view/inventory-grid-view.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__our_offers_our_offers_service__["a" /* OurOffersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__our_offers_our_offers_service__["a" /* OurOffersService */]) === "function" && _c || Object])
], InventoryGridViewComponent);

var _a, _b, _c;
//# sourceMappingURL=inventory-grid-view.component.js.map

/***/ }),

/***/ "./src/app/admin/inventory/inventory-list-view/inventory-list-details/inventory-list-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-offset-1 col-md-9 order-detail\">\n    <div class=\"row buttons\">\n      <div class=\"col-md-2 back\">\n        <button class=\"back-button\" (click)=\"goBack()\"><i class=\"fa fa-arrow-circle-o-left\" aria-hidden=\"true\"></i>\n          Back</button>\n      </div>\n      <div class=\"col-md-offset-6 col-md-2 edit\">\n        <button class=\"back-button\" (click)=\"edit(inventory)\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n          Edit</button>\n      </div>\n      <div class=\"col-md-2 delete\">\n        <button class=\"back-button\" (click)=\"deleteInventoryItem()\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n          Delete</button>\n      </div>\n    </div>\n    <div class=\"fixed-div\">\n    <div class=\"row\">\n      <div class=\"col-md-12 general\">\n        General Information\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6 name\">\n        Name: {{ inventory.Name }}\n      </div>\n      <div class=\"col-md-6 price\">\n        Average Price: {{ inventory.AveragePrice }} BDT\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12 general\">\n        Additional Information\n      </div>\n    </div>\n    <div class=\"row header\">\n      <div class=\"col-md-6\">\n      Available Quantity\n      </div>\n      <div class=\"col-md-6\">\n        Used Quantity\n      </div>\n    </div>\n    <div class=\"row header table-bordered\">\n      <div class=\"col-md-6\">\n        {{ inventory.RemainingQuantity }} {{ inventory.Unit }} (s)\n      </div>\n      <div class=\"col-md-6\">\n        {{ inventory.UsedQuantity }} {{ inventory.Unit }} (s)\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-offset-5 col-md-2 update\">\n        <button class=\"update-button\" (click)=\"update(inventory)\">\n          <i class=\"fa fa-wrench\" aria-hidden=\"true\"></i> Update</button>\n      </div>\n    </div>\n\n    <div class=\"row general\">\n      <div class=\"col-md-12\">\n        Update History\n      </div>\n    </div>\n      <div class=\"row units \">\n        <div class=\"col-md-3\">\n          Product's Quantity\n        </div>\n        <div class=\"col-md-3\">\n          Product's Unit\n        </div>\n        <div class=\"col-md-3\">\n          Current Price\n        </div>\n        <div class=\"col-md-3\">\n          Update Date and Time\n        </div>\n\n      </div>\n\n\n      <div class=\"scrollable-div\" >\n        <div class=\"row table-bordered units-details\" *ngFor=\"let history of inventoryHistory\">\n          <div class=\"col-md-3\">\n            {{ history.UpdatedQuantity }}\n          </div>\n          <div class=\"col-md-3\">\n            {{ inventory.Unit }}\n          </div>\n          <div class=\"col-md-3\">\n            {{ history.CurrentPrice }}\n          </div>\n          <div class=\"col-md-3\">\n            {{ history.UpdateTime }}\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/admin/inventory/inventory-list-view/inventory-list-details/inventory-list-details.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Acme|Aladin|Berkshire+Swash|Cabin+Sketch|Chewy|Fredoka+One|Kanit|Lobster|Londrina+Solid|Righteous|Rock+Salt\");\n.item-name {\n  font-family: \"Times New Roman\";\n  font-size: 18px;\n  color: #6a0d0e;\n  font-weight: bold;\n  text-align: left; }\n.selling-price {\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  color: #6a0d0e;\n  text-align: left;\n  font-weight: bold; }\n.making-price {\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  color: #6a0d0e;\n  font-weight: bold;\n  text-align: center; }\n.fixed-div {\n  max-height: 60vh;\n  overflow-y: scroll;\n  overflow-x: hidden; }\n.image {\n  height: 100%;\n  width: 100%;\n  border: 1px solid #ffffff;\n  border-radius: 10px; }\n.other {\n  text-align: center; }\n.additional {\n  font-family: \"Times New Roman\";\n  font-size: 12px;\n  color: #6a0d0e;\n  font-weight: bold;\n  text-align: center;\n  padding-top: 10px; }\n.all-categories-button {\n  width: 100%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #d32039;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.general {\n  font-size: 15px;\n  font-weight: bold;\n  padding-top: 13px;\n  padding-bottom: 13px;\n  border-bottom: 1px double #dfdfdf;\n  text-align: center;\n  color: #221d1f;\n  background-color: #f6f6f6; }\n.all-categories-button:hover {\n  background-color: #d32039;\n  color: #ffffdf;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  border: 1.2px solid #ffffdf;\n  border-radius: 5px; }\n.all-categories-button:focus {\n  outline: 0; }\n.header {\n  padding-top: 15px;\n  padding-bottom: 10px;\n  padding-right: 0;\n  text-align: center;\n  font-family: \"Times New Roman\";\n  color: #6a0d0e;\n  font-weight: bold; }\n.main-row {\n  border-bottom: 2px double #dfdfdf; }\n.body {\n  height: 350px;\n  overflow-y: scroll;\n  border: 1px solid #cbc6cb;\n  border-radius: 5px; }\n::-webkit-scrollbar {\n  width: 4px; }\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px; }\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.61);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n.hodoo {\n  font-family: 'Berkshire Swash', cursive;\n  font-size: 40px;\n  text-align: right;\n  color: #7e0000; }\n.hodoo:focus {\n  outline: 0; }\n.dashboard {\n  width: 20%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #aa0909;\n  background-color: ghostwhite;\n  /*border: 1.2px solid #ae0000;\n  border-radius: 5px;*/\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold;\n  text-align: center;\n  margin-top: 15px; }\n.dashboard:hover {\n  color: #6a0d0e;\n  background-color: ghostwhite;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  /* border: 1.2px solid #ffffdf;\n   border-radius: 5px;*/ }\n.order-detail {\n  background-color: #fcfcfc;\n  color: #910000;\n  font-family: \"Times New Roman\";\n  border: 2px double #e2e2e2;\n  border-radius: 5px;\n  margin-top: 10px;\n  padding-top: 10px;\n  padding-bottom: 20px;\n  background-color: white; }\n.order-ref, .order-date {\n  border-right: 2px double #c5bdbf;\n  font-weight: bold;\n  font-size: 16px; }\n.upper-div {\n  border-bottom: 2px double #dfdfdf; }\n.id, .date {\n  font-size: 15px;\n  font-weight: bold; }\n.prod {\n  font-size: 15px;\n  font-weight: bold;\n  padding-top: 13px;\n  padding-bottom: 13px;\n  border-bottom: 1px double #dfdfdf;\n  text-align: center;\n  color: #221d1f;\n  background-color: #f6f6f6; }\n.units {\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  border-bottom: 1px double #dfdfdf;\n  text-align: center; }\n.units-details {\n  font-size: 13px;\n  font-weight: bold;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  text-align: center;\n  border-bottom: 1px double #dfdfdf; }\n.total {\n  font-weight: bold;\n  padding-top: 20px;\n  padding-bottom: 5px;\n  text-align: right;\n  font-size: 20px; }\n.bdt {\n  font-weight: bold;\n  padding-top: 20px;\n  padding-bottom: 5px;\n  text-align: left;\n  font-size: 20px; }\n.scrollable-div {\n  max-height: 17vh;\n  overflow-y: scroll;\n  overflow-x: hidden; }\n::-webkit-scrollbar {\n  width: 3px; }\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px; }\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.61);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n.back-button {\n  width: 60%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #9b0f12;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.back {\n  text-align: center; }\n.edit {\n  text-align: right;\n  padding-right: 0; }\n.delete {\n  text-align: left;\n  padding-right: 0; }\n.back-button:hover {\n  width: 60%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #ffffdf;\n  background-color: #9b0f12;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.back-button:focus {\n  outline: 0; }\n.update-button {\n  width: 70%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #9b0f12;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold;\n  text-align: center; }\n.update-button:hover {\n  width: 70%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #ffffdf;\n  background-color: #9b0f12;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.update-button:focus {\n  outline: 0; }\n.update {\n  text-align: center;\n  padding-top: 6px;\n  padding-bottom: 6px; }\n.buttons {\n  padding-top: 5px;\n  padding-bottom: 10px;\n  border-bottom: 2px double #dfdfdf; }\n.sub-links {\n  color: #b3acaf;\n  font-family: \"Arial Narrow\";\n  font-size: 15px;\n  font-weight: bold; }\n.sub-links:hover {\n  color: #6a0d0e;\n  font-family: \"Arial Narrow\";\n  font-size: 15px;\n  font-weight: bold; }\na {\n  color: #b3acaf; }\n.link {\n  color: #6a0d0e; }\n.pop-up {\n  color: #7e0000;\n  font-size: 14px;\n  font-family: \"Times New Roman\";\n  text-align: center;\n  font-weight: bold; }\n.name, .price {\n  font-size: 18px;\n  font-family: \"Times New Roman\";\n  font-weight: bold;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/admin/inventory/inventory-list-view/inventory-list-details/inventory-list-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryListDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__ = __webpack_require__("./src/app/shared/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__our_offers_our_offers_service__ = __webpack_require__("./src/app/our-offers/our-offers.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InventoryListDetailsComponent = (function () {
    function InventoryListDetailsComponent(_route, router, _dataStorageService, _ourOfferService) {
        var _this = this;
        this._route = _route;
        this.router = router;
        this._dataStorageService = _dataStorageService;
        this._ourOfferService = _ourOfferService;
        this.inventoryList = [];
        this.inventoryHistory = [];
        this._route.params
            .subscribe(function (params) {
            _this.inventoryId = params['id'];
        });
    }
    InventoryListDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.data.
            subscribe(function (data) {
            _this._ourOfferService.inventory = data['inventories'];
        });
        this.inventoryList = this._ourOfferService.inventory;
        this.subscription = this._ourOfferService.inventoryChanged
            .subscribe(function (inventories) {
            _this.inventoryList = inventories;
        });
        for (var i = 0; i < this.inventoryList.length; i++) {
            if (this.inventoryList[i].Id === this.inventoryId) {
                this.inventory = this.inventoryList[i];
                this.inventoryHistory = this.inventoryList[i].InventoryHistoryModel;
                this.index = i;
            }
        }
    };
    InventoryListDetailsComponent.prototype.goBack = function () {
        this.router.navigate(['admin/inventory/list-view']);
    };
    InventoryListDetailsComponent.prototype.confirmEvent = function () {
        var _this = this;
        this._dataStorageService.deleteInventoryItem(this.inventory).
            subscribe(function (data) {
            _this.router.navigate(['admin/inventory/list-view']);
        });
    };
    InventoryListDetailsComponent.prototype.edit = function (inventory) {
        this.router.navigate(['admin/inventory/edit-inventory-item', inventory.Id]);
    };
    InventoryListDetailsComponent.prototype.update = function (inventory) {
        this.router.navigate(['admin/inventory/update-inventory-item', inventory.Id]);
    };
    InventoryListDetailsComponent.prototype.deleteInventoryItem = function () {
        var dialog = confirm('Delete this item?\n' +
            'You will lose any kind of data associated with the current item!');
        if (dialog) {
            this.confirmEvent();
        }
    };
    return InventoryListDetailsComponent;
}());
InventoryListDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-inventory-list-details',
        template: __webpack_require__("./src/app/admin/inventory/inventory-list-view/inventory-list-details/inventory-list-details.component.html"),
        styles: [__webpack_require__("./src/app/admin/inventory/inventory-list-view/inventory-list-details/inventory-list-details.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__["a" /* DataStorageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__our_offers_our_offers_service__["a" /* OurOffersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__our_offers_our_offers_service__["a" /* OurOffersService */]) === "function" && _d || Object])
], InventoryListDetailsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=inventory-list-details.component.js.map

/***/ }),

/***/ "./src/app/admin/inventory/inventory-list-view/inventory-list-view.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"row empty\" *ngIf=\"totalProducts === 0; else notEmpty\">\n  <div class=\"col-md-12\">\n    No item available. Click \"Add New Item\" to populate.\n  </div>\n</div>\n\n<ng-template #notEmpty>\n\n<div class=\"sum-of-inv-body\">\n  <div class=\"row\">\n    <div class=\"col-md-4 search-bar\">\n      <span class=\"fa fa-search\"></span>\n      <input class=\"box\" type=\"text\" [(ngModel)]=\"term\" placeholder=\"Search by Receipt Ref...\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"col-md-3 receipt\">\n        Product Name\n      </div>\n      <div class=\"col-md-3 price\">\n        Average Price\n      </div>\n      <div class=\"col-md-2 price\">\n        Unit\n      </div>\n      <div class=\"col-md-2 name\">\n          Available Quantity\n      </div>\n      <div class=\"col-md-2 price\">\n        Used Quantity\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-12 body\">\n      <div class=\"row\" *ngFor=\"let inventory of inventories | filter:term; let i = index\">\n        <a title=\"View This Item's Details\"\n           style=\"cursor: pointer\" (click)=\"viewDetails(inventory)\">\n          <div class=\"col-md-12 f-name table-bordered\">\n            <div class=\"col-md-3 column-receipt\">\n            {{ inventory.Name }}\n            </div>\n            <div class=\"col-md-3 column\">\n              {{ inventory.AveragePrice }} BDT\n            </div>\n            <div class=\"col-md-2 column\">\n              {{inventory.Unit }}\n            </div>\n            <div class=\"col-md-2 column\">\n               {{inventory.RemainingQuantity }}\n            </div>\n            <div class=\"col-md-2 column\">\n              {{inventory.UsedQuantity }}\n            </div>\n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12 detail\">\n    Total Products: {{ totalProducts }} (s)\n  </div>\n</div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/admin/inventory/inventory-list-view/inventory-list-view.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Acme|Aladin|Berkshire+Swash|Cabin+Sketch|Chewy|Fredoka+One|Kanit|Lobster|Londrina+Solid|Righteous|Rock+Salt\");\n.name, .price {\n  margin-top: 20px;\n  color: #6a0d0e;\n  font-family: \"Berlin Sans FB\";\n  font-size: 17px;\n  text-align: center;\n  padding-left: 0;\n  padding-right: 0; }\n.receipt {\n  text-align: left;\n  margin-top: 20px;\n  color: #6a0d0e;\n  font-family: \"Berlin Sans FB\";\n  font-size: 17px;\n  padding-left: 0;\n  padding-right: 0; }\n.column {\n  border-left: 2px double #c5bdbf;\n  padding-left: 0;\n  padding-right: 0;\n  text-align: center; }\n.column-receipt {\n  border-left: none; }\n.f-name {\n  padding-top: 20px;\n  color: #6a0d0e;\n  font-family: \"Times New Roman\";\n  font-size: 13px;\n  font-weight: bold;\n  padding-left: 0;\n  padding-right: 0; }\n.all-categories-button {\n  width: 100%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #d32039;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.all-categories-button:hover {\n  background-color: #d32039;\n  color: #ffffdf;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  border: 1.2px solid #ffffdf;\n  border-radius: 5px; }\n.all-categories-button:focus {\n  outline: 0; }\n.header {\n  color: #770000;\n  font-size: 21px;\n  font-family: \"Berlin Sans FB\";\n  text-align: left;\n  margin-top: 10px;\n  border: 1px;\n  border-radius: 5px;\n  padding-top: 5px;\n  padding-bottom: 5px; }\n.main-row {\n  border-bottom: 2px double #dfdfdf; }\n.body {\n  max-height: 42vh;\n  overflow-y: scroll;\n  border: 1px solid #cbc6cb;\n  border-radius: 5px;\n  background-color: white; }\n::-webkit-scrollbar {\n  width: 4px; }\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px; }\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.61);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n.hodoo {\n  font-family: 'Berkshire Swash', cursive;\n  font-size: 40px;\n  text-align: right;\n  color: #7e0000; }\n.hodoo:focus {\n  outline: 0; }\n.dashboard {\n  width: 20%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #aa0909;\n  background-color: ghostwhite;\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold;\n  text-align: center;\n  margin-top: 15px; }\n.dashboard:hover {\n  color: #6a0d0e;\n  background-color: ghostwhite;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  /* border: 1.2px solid #ffffdf;\n   border-radius: 5px;*/ }\n.box {\n  width: 230px;\n  height: 25px;\n  background: #fcfcfc;\n  border: 2px solid #9c0000;\n  border-radius: 10px;\n  text-indent: 32px;\n  color: #9c0000;\n  font-size: 11px;\n  font-family: \"Lato\",\"Lucida Grande\", \"Helvetica\", \"Verdana\", \"Arial\"; }\n.box:focus {\n  outline: 0; }\n.fa-search {\n  position: absolute;\n  top: 7px;\n  left: 23px;\n  font-size: 11px; }\n.search-bar {\n  margin-top: 10px; }\n.Summary {\n  font-family: \"Times New Roman\";\n  color: #520606;\n  font-size: 16px;\n  font-weight: bold;\n  padding-top: 3px;\n  padding-bottom: 3px; }\n.detail {\n  font-family: \"Times New Roman\";\n  color: #630606;\n  font-size: 15px;\n  font-weight: bold;\n  padding-top: 8px;\n  padding-bottom: 2px; }\n.empty {\n  font-family: \"Times New Roman\";\n  color: #630606;\n  font-size: 20px;\n  font-weight: bold;\n  padding-top: 20px;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/admin/inventory/inventory-list-view/inventory-list-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryListViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__our_offers_our_offers_service__ = __webpack_require__("./src/app/our-offers/our-offers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InventoryListViewComponent = (function () {
    function InventoryListViewComponent(_route, router, _ourOfferService) {
        this._route = _route;
        this.router = router;
        this._ourOfferService = _ourOfferService;
        this.inventories = [];
        this.totalProducts = 0;
    }
    InventoryListViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.data.
            subscribe(function (data) {
            _this._ourOfferService.inventory = data['inventories'];
        });
        this.inventories = this._ourOfferService.inventory;
        this.subscription = this._ourOfferService.inventoryChanged
            .subscribe(function (inventories) {
            _this.inventories = inventories;
        });
        this.totalProducts = this._ourOfferService.inventory.length;
    };
    InventoryListViewComponent.prototype.ngDoCheck = function () {
        // this.totalProducts = this._ourOfferService.inventory.length;
    };
    InventoryListViewComponent.prototype.viewDetails = function (inventory) {
        var inventoryId = inventory.Id;
        this.router.navigate(['admin/inventory/list-details', inventoryId]);
    };
    return InventoryListViewComponent;
}());
InventoryListViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-inventory-list-view',
        template: __webpack_require__("./src/app/admin/inventory/inventory-list-view/inventory-list-view.component.html"),
        styles: [__webpack_require__("./src/app/admin/inventory/inventory-list-view/inventory-list-view.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__our_offers_our_offers_service__["a" /* OurOffersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__our_offers_our_offers_service__["a" /* OurOffersService */]) === "function" && _c || Object])
], InventoryListViewComponent);

var _a, _b, _c;
//# sourceMappingURL=inventory-list-view.component.js.map

/***/ }),

/***/ "./src/app/admin/inventory/inventory-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__ = __webpack_require__("./src/app/shared/data-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InventoryResolverService = (function () {
    function InventoryResolverService(_dataStorageService) {
        this._dataStorageService = _dataStorageService;
    }
    InventoryResolverService.prototype.resolve = function (route, state) {
        return this._dataStorageService.getInventories();
    };
    return InventoryResolverService;
}());
InventoryResolverService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__["a" /* DataStorageService */]) === "function" && _a || Object])
], InventoryResolverService);

var _a;
//# sourceMappingURL=inventory-resolver.service.js.map

/***/ }),

/***/ "./src/app/admin/inventory/inventory.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"row main-row\">\n  <div class=\"col-md-8 header\">\n    Manage Your Inventory\n  </div>\n  <a routerLink=\"/control-panel\">\n    <div class=\"col-md-offset-1 col-md-2 dashboard\">\n      Back to Dashboard\n    </div>\n  </a>\n</div>\n\n\n<div class=\"row\">\n  <a routerLink=\"/admin/inventory/add-new-inventory\">\n    <div class=\"col-md-offset-9 col-md-2 add-new\">\n      <i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i> Add New Item\n    </div>\n  </a>\n  <div class=\"col-md-1\">\n    <div class=\"row icons\">\n      <a title=\"List View\" routerLink=\"/admin/inventory/list-view\" routerLinkActive=\"icon-active\">\n        <div class=\"col-md-6 list\">\n          <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n        </div>\n      </a>\n      <a title=\"Grid View\" routerLink=\"/admin/inventory/grid-view\" routerLinkActive=\"icon-active\">\n        <div class=\"col-md-6 grid\">\n          <i class=\"fa fa-th-large\" aria-hidden=\"true\"></i>\n        </div>\n      </a>\n    </div>\n  </div>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/admin/inventory/inventory.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Acme|Aladin|Berkshire+Swash|Cabin+Sketch|Chewy|Fredoka+One|Kanit|Lobster|Londrina+Solid|Righteous|Rock+Salt\");\n.name, .price {\n  margin-top: 24px;\n  color: #ae0000;\n  font-family: \"Berlin Sans FB\";\n  font-size: 20px; }\n.whole {\n  /*margin-top: 20px;*/ }\n.sum-of-inv-body {\n  /*padding-right: 0;\n  padding-left: 155px;*/ }\n.f-name {\n  padding-top: 20px;\n  color: #ae0000;\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  font-weight: bold;\n  /*-webkit-box-shadow: 0px 10px 25px 0px rgba(161, 18, 18, 0.2);\n  -moz-box-shadow: 0px 10px 25px 0px rgba(161, 18, 18, 0.2);\n  box-shadow: 0px 10px 25px 0px rgba(161, 18, 18, 0.2);*/ }\n.all-categories-button {\n  width: 100%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #d32039;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.all-categories-button:hover {\n  background-color: #d32039;\n  color: #ffffdf;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  border: 1.2px solid #ffffdf;\n  border-radius: 5px; }\n.all-categories-button:focus {\n  outline: 0; }\n.header {\n  color: #770000;\n  font-size: 21px;\n  font-family: \"Berlin Sans FB\";\n  text-align: left;\n  margin-top: 10px;\n  border: 1px;\n  border-radius: 5px;\n  padding-top: 5px;\n  padding-bottom: 5px; }\n.main-row {\n  border-bottom: 2px double #dfdfdf; }\n.body {\n  height: 350px;\n  overflow-y: scroll;\n  border: 1px solid #cbc6cb;\n  border-radius: 5px; }\n::-webkit-scrollbar {\n  width: 4px; }\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px; }\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.61);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n.hodoo {\n  font-family: 'Berkshire Swash', cursive;\n  font-size: 40px;\n  text-align: right;\n  color: #7e0000; }\n.hodoo:focus {\n  outline: 0; }\n.dashboard {\n  width: 20%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #aa0909;\n  background-color: ghostwhite;\n  /*border: 1.2px solid #ae0000;\n  border-radius: 5px;*/\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold;\n  text-align: center;\n  margin-top: 15px; }\n.dashboard:hover {\n  color: #6a0d0e;\n  background-color: ghostwhite;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  /* border: 1.2px solid #ffffdf;\n   border-radius: 5px;*/ }\n.icons {\n  /*text-align: center;*/\n  font-size: 23px;\n  color: #bcb4b6;\n  margin-top: 10px; }\n.icons:hover {\n  /*text-align: center;*/\n  font-size: 23px;\n  color: #690e0f;\n  margin-top: 10px; }\n.list, grid {\n  text-align: right;\n  padding-left: 0;\n  padding-right: 0; }\n.grid {\n  text-align: left; }\n.icon-active {\n  color: #690e0f; }\na {\n  color: #ada5a7; }\n.add-new {\n  font-family: \"Times New Roman\";\n  width: 13%;\n  font-size: 13px;\n  color: #b50909;\n  margin-top: 10px;\n  background-color: #ffffdf;\n  border: 1px solid #6a0d0e;\n  border-radius: 5px;\n  text-align: center;\n  font-weight: bold;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  margin-top: 10px; }\n.add-new:hover {\n  width: 13%;\n  font-size: 13px;\n  font-family: \"Times New Roman\";\n  color: #ffffdf;\n  margin-top: 10px;\n  background-color: #b50909;\n  border: 1px solid #ffffdf;\n  border-radius: 5px;\n  text-align: center;\n  font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/admin/inventory/inventory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InventoryComponent = (function () {
    function InventoryComponent() {
    }
    InventoryComponent.prototype.ngOnInit = function () {
    };
    return InventoryComponent;
}());
InventoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-inventory',
        template: __webpack_require__("./src/app/admin/inventory/inventory.component.html"),
        styles: [__webpack_require__("./src/app/admin/inventory/inventory.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], InventoryComponent);

//# sourceMappingURL=inventory.component.js.map

/***/ }),

/***/ "./src/app/admin/inventory/update-inventory-item/update-inventory-item.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"row\">\n  <form (ngSubmit) = \"onUpdateItem(updateItem)\" #updateItem = \"ngForm\">\n    <div class=\"col-md-offset-1 col-md-9 order-detail\">\n      <div class=\"row buttons\">\n        <div class=\"col-md-2 back\">\n          <button\n            type=\"button\"\n            class=\"back-button-cancel\"\n            (click)=\"onCancel()\"><i class=\"fa fa-times-circle-o\" aria-hidden=\"true\"></i>\n            Cancel</button>\n        </div>\n        <div class=\"col-md-8 edit-mode\">\n          Update Mode\n        </div>\n        <div class=\"col-md-2 delete\">\n          <button class=\"back-button\"\n                  [disabled]=\"!updateItem.valid\"\n                  type=\"submit\"\n                  title=\"Update this item\"\n          ><i class=\"fa fa-wrench\" aria-hidden=\"true\"></i>\n            Save</button>\n        </div>\n      </div>\n\n      <div class=\"row prod-name\">\n        <div class=\"col-md-offset-4 col-md-4\">\n          <div class=\"form-group\">\n            <label  for=\"quantity\">Add New Quantity for {{ name }}:</label>\n            <input\n              min=\"1\"\n              type=\"number\"\n              id=\"quantity\"\n              class=\"form-control\"\n              ngModel\n              name=\"quantity\"\n              required\n            >\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row prod-name\">\n        <div class=\"col-md-offset-4 col-md-4\">\n          <div class=\"form-group\">\n            <label  for=\"currentPrice\">Current Price</label>\n            <input\n              min=\"1\"\n              type=\"number\"\n              id=\"currentPrice\"\n              class=\"form-control\"\n              ngModel\n              name=\"currentPrice\"\n              required\n            >\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </form>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/admin/inventory/update-inventory-item/update-inventory-item.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Acme|Aladin|Berkshire+Swash|Cabin+Sketch|Chewy|Fredoka+One|Kanit|Lobster|Londrina+Solid|Righteous|Rock+Salt\");\n.name, .price {\n  margin-top: 24px;\n  color: #ae0000;\n  font-family: \"Berlin Sans FB\";\n  font-size: 20px; }\n.whole {\n  /*margin-top: 20px;*/ }\n.sum-of-inv-body {\n  /*padding-right: 0;\n  padding-left: 155px;*/ }\n.f-name {\n  padding-top: 20px;\n  color: #ae0000;\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  font-weight: bold;\n  /*-webkit-box-shadow: 0px 10px 25px 0px rgba(161, 18, 18, 0.2);\n  -moz-box-shadow: 0px 10px 25px 0px rgba(161, 18, 18, 0.2);\n  box-shadow: 0px 10px 25px 0px rgba(161, 18, 18, 0.2);*/ }\n.all-categories-button {\n  width: 80%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #941628;\n  background-color: #ffffdf;\n  border: 1.2px solid #941628;\n  border-radius: 5px;\n  font-size: 13px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  text-align: center; }\n.all-categories-button:hover {\n  background-color: #941628;\n  color: #ffffdf;\n  font-family: \"Arial Narrow\";\n  border: 1.2px solid #ffffdf;\n  border-radius: 5px; }\n.all-categories-button:focus {\n  outline: 0; }\n.header {\n  color: #770000;\n  font-size: 21px;\n  font-family: \"Berlin Sans FB\";\n  text-align: left;\n  margin-top: 1px;\n  border: 1px;\n  border-radius: 5px;\n  padding-top: 1px;\n  padding-bottom: 5px; }\n.main-row {\n  border-bottom: 2px double #dfdfdf; }\n.body {\n  height: 350px;\n  overflow-y: scroll;\n  border: 1px solid #cbc6cb;\n  border-radius: 5px; }\n::-webkit-scrollbar {\n  width: 4px; }\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px; }\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.61);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n.hodoo {\n  font-family: 'Berkshire Swash', cursive;\n  font-size: 40px;\n  text-align: right;\n  color: #7e0000; }\n.hodoo:focus {\n  outline: 0; }\n.dashboard {\n  width: 20%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #aa0909;\n  background-color: ghostwhite;\n  /*border: 1.2px solid #ae0000;\n  border-radius: 5px;*/\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold;\n  text-align: center;\n  margin-top: 15px; }\n.dashboard:hover {\n  color: #6a0d0e;\n  background-color: ghostwhite;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  /* border: 1.2px solid #ffffdf;\n   border-radius: 5px;*/ }\n.order-detail {\n  background-color: #fcfcfc;\n  color: #910000;\n  font-family: \"Times New Roman\";\n  border: 2px double #e2e2e2;\n  border-radius: 5px;\n  margin-top: 6px;\n  padding-top: 6px;\n  padding-bottom: 15px;\n  background-color: white; }\n.order-ref, .order-date {\n  border-right: 2px double #c5bdbf;\n  font-weight: bold;\n  font-size: 16px; }\n.upper-div {\n  border-bottom: 2px double #dfdfdf; }\n.id, .date {\n  font-size: 15px;\n  font-weight: bold; }\n.prod {\n  font-size: 15px;\n  font-weight: bold;\n  padding-top: 13px;\n  padding-bottom: 13px;\n  border-bottom: 1px double #dfdfdf;\n  text-align: center;\n  color: #221d1f;\n  background-color: #f6f6f6; }\n.units {\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  border-bottom: 1px double #dfdfdf; }\n.units-details {\n  font-size: 13px;\n  font-weight: bold;\n  padding-top: 4px;\n  padding-bottom: 4px; }\n.total {\n  font-weight: bold;\n  padding-top: 20px;\n  padding-bottom: 5px;\n  text-align: right;\n  font-size: 20px; }\n.bdt {\n  font-weight: bold;\n  font-family: \"Times New Roman\";\n  padding-top: 30px;\n  text-align: left;\n  font-size: 15px; }\n.scrollable-div {\n  max-height: 20vh;\n  overflow-y: scroll;\n  overflow-x: hidden; }\n::-webkit-scrollbar {\n  width: 3px; }\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px; }\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.61);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n.back-button {\n  width: 60%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #9b0f12;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.back-button-cancel {\n  width: 65%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #9b0f12;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.delete {\n  text-align: right; }\n.back-button:hover {\n  width: 60%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #ffffdf;\n  background-color: #9b0f12;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.back-button-cancel:hover {\n  width: 65%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #ffffdf;\n  background-color: #9b0f12;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.back-button-cancel:focus {\n  outline: 0; }\n.back-button:focus {\n  outline: 0; }\n.buttons {\n  padding-top: 2px;\n  padding-bottom: 2px; }\n.sub-links {\n  color: #b3acaf;\n  font-family: \"Arial Narrow\";\n  font-size: 15px;\n  font-weight: bold; }\n.sub-links:hover {\n  color: #6a0d0e;\n  font-family: \"Arial Narrow\";\n  font-size: 15px;\n  font-weight: bold; }\na {\n  color: #b3acaf; }\n.link {\n  color: #6a0d0e; }\n.pop-up {\n  color: #7e0000;\n  font-size: 14px;\n  font-family: \"Times New Roman\";\n  text-align: center;\n  font-weight: bold; }\n.item-name {\n  font-family: \"Times New Roman\";\n  font-size: 18px;\n  color: #840d0f;\n  font-weight: bold;\n  text-align: left; }\n.selling-price {\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  color: #a80d0f;\n  text-align: left;\n  font-weight: bold; }\n.winning-price {\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  color: #a80d0f;\n  text-align: left;\n  font-weight: bold;\n  padding-top: 5px;\n  padding-bottom: 5px; }\n.loss {\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  color: white;\n  background-color: #840d0f;\n  border: 1px soild white;\n  border-radius: 5px;\n  text-align: left;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  margin-left: 14px;\n  margin-top: 5px; }\nlabel {\n  color: #6a0d0e;\n  font-family: \"Times New Roman\"; }\n.making-price {\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  color: #6a0d0e;\n  font-weight: bold;\n  text-align: center;\n  padding-top: 30px; }\n.image {\n  height: 100%;\n  width: 100%;\n  border: 1px solid #ffffff;\n  border-radius: 10px; }\n.header {\n  padding-top: 15px;\n  padding-bottom: 10px; }\n.general {\n  font-size: 15px;\n  font-weight: bold;\n  padding-top: 13px;\n  padding-bottom: 13px;\n  border-bottom: 1px double #dfdfdf;\n  text-align: center;\n  color: #221d1f;\n  background-color: #f6f6f6; }\n.other {\n  text-align: center; }\n.units {\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  border-bottom: 1px double #dfdfdf; }\n.select {\n  font-family: \"Times New Roman\";\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  text-align: center; }\n.del-ing {\n  color: #9c0000;\n  font-size: 15px;\n  background-color: white;\n  border-right: 5px; }\n.del-ing:hover {\n  color: #8f0000; }\n.save-ingredient {\n  width: 100%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #ffffdf;\n  background-color: #a90f12;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.save-ingredient:hover {\n  font-family: \"Arial Narrow\";\n  color: #ffffdf;\n  background-color: #880f12;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.save-ingredient:focus {\n  outline: 0; }\n.warning {\n  color: #9c0000;\n  font-size: 14px;\n  font-family: \"Times New Roman\";\n  text-align: center;\n  font-weight: bold;\n  padding-top: 12px;\n  padding-bottom: 7px; }\n.scrollable-div {\n  max-height: 20vh;\n  overflow-y: scroll;\n  overflow-x: hidden; }\ninput {\n  color: #9c0000;\n  font-family: \"Times New Roman\"; }\n.prod-name {\n  margin-top: 30px; }\n.extra {\n  padding-left: 0;\n  padding-right: 0; }\n.edit-mode {\n  text-align: center;\n  font-family: \"Times New Roman\";\n  font-size: 18px;\n  color: #6a0d0e;\n  font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/admin/inventory/update-inventory-item/update-inventory-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateInventoryItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__ = __webpack_require__("./src/app/shared/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__our_offers_our_offers_service__ = __webpack_require__("./src/app/our-offers/our-offers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_inventory_history_model__ = __webpack_require__("./src/app/shared/inventory-history.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_uuid__ = __webpack_require__("./node_modules/ng2-uuid/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UpdateInventoryItemComponent = (function () {
    function UpdateInventoryItemComponent(_route, router, uuid, _ourOfferService, _dataStorageService) {
        var _this = this;
        this._route = _route;
        this.router = router;
        this.uuid = uuid;
        this._ourOfferService = _ourOfferService;
        this._dataStorageService = _dataStorageService;
        this.name = '';
        this.inventoryList = [];
        this._route.params
            .subscribe(function (params) {
            _this.id = params['id'];
        });
    }
    UpdateInventoryItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.data.
            subscribe(function (data) {
            _this._ourOfferService.inventory = data['inventories'];
        });
        this.inventoryList = this._ourOfferService.inventory;
        this.subscription = this._ourOfferService.inventoryChanged
            .subscribe(function (inventories) {
            _this.inventoryList = inventories;
        });
        for (var i = 0; i < this.inventoryList.length; i++) {
            if (this.inventoryList[i].Id === this.id) {
                this.unit = this.inventoryList[i].Unit;
                this.name = this.inventoryList[i].Name;
            }
        }
    };
    UpdateInventoryItemComponent.prototype.onUpdateItem = function (form) {
        var _this = this;
        var inventoryId = this.id;
        var updateHistoryId = this.uuid.v1();
        var quantity = form.value.quantity;
        var currentPrice = form.value.currentPrice;
        var time = new Date().toLocaleString();
        var updateHistory = new __WEBPACK_IMPORTED_MODULE_4__shared_inventory_history_model__["a" /* InventoryHistoryModel */](updateHistoryId, inventoryId, quantity, time, this.unit, currentPrice);
        for (var i = 0; i < this._ourOfferService.inventory.length; i++) {
            if (this._ourOfferService.inventory[i].Id === this.id) {
                this._ourOfferService.inventory[i].InventoryHistoryModel.push(updateHistory);
                this._ourOfferService.inventory[i].RemainingQuantity =
                    Number.parseInt(this._ourOfferService.inventory[i].RemainingQuantity.toString())
                        + Number.parseInt(quantity.toString());
            }
        }
        this._dataStorageService.updateInventoryHistory(updateHistory).
            subscribe(function (data) {
            form.reset();
            _this.router.navigate(['admin/inventory/list-details', inventoryId]);
        });
    };
    UpdateInventoryItemComponent.prototype.onCancel = function () {
        this.router.navigate(['admin/inventory/list-view']);
    };
    return UpdateInventoryItemComponent;
}());
UpdateInventoryItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-update-inventory-item',
        template: __webpack_require__("./src/app/admin/inventory/update-inventory-item/update-inventory-item.component.html"),
        styles: [__webpack_require__("./src/app/admin/inventory/update-inventory-item/update-inventory-item.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_uuid__["a" /* Uuid */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_uuid__["a" /* Uuid */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__our_offers_our_offers_service__["a" /* OurOffersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__our_offers_our_offers_service__["a" /* OurOffersService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__["a" /* DataStorageService */]) === "function" && _e || Object])
], UpdateInventoryItemComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=update-inventory-item.component.js.map

/***/ }),

/***/ "./src/app/admin/orders/order-grid-view/order-grid-view-details/order-grid-view-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-offset-1 col-md-9 order-detail\">\n    <div class=\"row buttons\">\n      <div class=\"col-md-2 back\">\n        <button class=\"back-button\" (click)=\"goBack()\"><i class=\"fa fa-arrow-circle-o-left\" aria-hidden=\"true\"></i>\n          Back</button>\n      </div>\n      <div class=\"col-md-offset-8 col-md-2 delete\">\n        <button class=\"back-button\" (click)=\"deleteOrder()\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n          Delete</button>\n      </div>\n    </div>\n\n\n    <div class=\"row upper-div\">\n      <div class=\"col-md-6 order-header\">\n        <div class=\"row\">\n          <div class=\"col-md-4 order-ref\">\n            Order Ref\n          </div>\n          <div class=\"col-md-6 id\">\n            {{ order.Id }}\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"row\">\n          <div class=\"col-md-4 order-date\">\n            Order Date\n          </div>\n          <div class=\"col-md-6 date\">\n            {{ order.DateTime }}\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row prod\">\n      <div class=\"col-md-12\">\n        Products\n      </div>\n    </div>\n    <div class=\"row units \">\n      <div class=\"col-md-3\">\n        Product\n      </div>\n      <div class=\"col-md-3 \">\n        Quantity\n      </div>\n      <div class=\"col-md-3 \">\n        Unit Price\n      </div>\n      <div class=\"col-md-3 \">\n        Sub Total\n      </div>\n    </div>\n\n\n    <div *ngIf=\"order.OrderedItems !== null\" class=\"scrollable-div\" >\n      <div class=\"row table-bordered units-details\" *ngFor=\"let products of order.OrderedItems\">\n        <div class=\"col-md-3\" >\n          {{ products.FoodItemName }}\n        </div>\n        <div class=\"col-md-3\">\n          {{ products.FoodItemQuantity }}\n        </div>\n        <div class=\"col-md-3\">\n          {{ products.Price}}\n        </div>\n        <div class=\"col-md-3\">\n          {{ products.FoodItemSubTotal }}\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row \">\n      <div class=\"col-md-offset-8 col-md-1 total\">\n        Total:\n      </div>\n      <div class=\"col-md-2 bdt\">\n        {{ order.TotalPrice }} BDT\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12 prod\">\n        Payments and Additional Informations\n      </div>\n    </div>\n    <div class=\"row units\">\n      <div class=\"col-md-2\">\n        Total\n      </div>\n      <div class=\"col-md-2\">\n        Tendered\n      </div>\n      <div class=\"col-md-2\">\n        Change\n      </div>\n      <div class=\"col-md-2\">\n        Inventory Cost\n      </div>\n      <div class=\"col-md-2\">\n        Profit\n      </div>\n      <div class=\"col-md-2\">\n        Table\n      </div>\n    </div>\n\n    <div class=\"row units-details\">\n      <div class=\"col-md-2\">\n        {{ order.TotalPrice }}\n      </div>\n      <div class=\"col-md-2\">\n        {{ order.Tendered }}\n      </div>\n      <div class=\"col-md-2\">\n        {{ order.Change }}\n      </div>\n      <div class=\"col-md-2\">\n        {{ order.InventoryCost }}\n      </div>\n      <div class=\"col-md-2\">\n        {{ order.Profit }}\n      </div>\n      <div class=\"col-md-2\">\n        {{ order.TableNo }}\n      </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/admin/orders/order-grid-view/order-grid-view-details/order-grid-view-details.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Acme|Aladin|Berkshire+Swash|Cabin+Sketch|Chewy|Fredoka+One|Kanit|Lobster|Londrina+Solid|Righteous|Rock+Salt\");\n.name, .price {\n  margin-top: 24px;\n  color: #ae0000;\n  font-family: \"Berlin Sans FB\";\n  font-size: 20px; }\n.whole {\n  /*margin-top: 20px;*/ }\n.sum-of-inv-body {\n  /*padding-right: 0;\n  padding-left: 155px;*/ }\n.f-name {\n  padding-top: 20px;\n  color: #ae0000;\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  font-weight: bold;\n  /*-webkit-box-shadow: 0px 10px 25px 0px rgba(161, 18, 18, 0.2);\n  -moz-box-shadow: 0px 10px 25px 0px rgba(161, 18, 18, 0.2);\n  box-shadow: 0px 10px 25px 0px rgba(161, 18, 18, 0.2);*/ }\n.all-categories-button {\n  width: 100%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #d32039;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.all-categories-button:hover {\n  background-color: #d32039;\n  color: #ffffdf;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  border: 1.2px solid #ffffdf;\n  border-radius: 5px; }\n.all-categories-button:focus {\n  outline: 0; }\n.header {\n  color: #770000;\n  font-size: 21px;\n  font-family: \"Berlin Sans FB\";\n  text-align: left;\n  margin-top: 10px;\n  border: 1px;\n  border-radius: 5px;\n  padding-top: 5px;\n  padding-bottom: 5px; }\n.main-row {\n  border-bottom: 2px double #dfdfdf; }\n.body {\n  height: 350px;\n  overflow-y: scroll;\n  border: 1px solid #cbc6cb;\n  border-radius: 5px; }\n::-webkit-scrollbar {\n  width: 4px; }\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px; }\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.61);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n.hodoo {\n  font-family: 'Berkshire Swash', cursive;\n  font-size: 40px;\n  text-align: right;\n  color: #7e0000; }\n.hodoo:focus {\n  outline: 0; }\n.dashboard {\n  width: 20%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #aa0909;\n  background-color: ghostwhite;\n  /*border: 1.2px solid #ae0000;\n  border-radius: 5px;*/\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold;\n  text-align: center;\n  margin-top: 15px; }\n.dashboard:hover {\n  color: #6a0d0e;\n  background-color: ghostwhite;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  /* border: 1.2px solid #ffffdf;\n   border-radius: 5px;*/ }\n.order-detail {\n  background-color: #fcfcfc;\n  color: #910000;\n  font-family: \"Times New Roman\";\n  border: 2px double #e2e2e2;\n  border-radius: 5px;\n  margin-top: 15px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  background-color: white; }\n.order-ref, .order-date {\n  border-right: 2px double #c5bdbf;\n  font-weight: bold;\n  font-size: 16px; }\n.upper-div {\n  border-bottom: 2px double #dfdfdf; }\n.id, .date {\n  font-size: 15px;\n  font-weight: bold; }\n.prod {\n  font-size: 15px;\n  font-weight: bold;\n  padding-top: 13px;\n  padding-bottom: 13px;\n  border-bottom: 1px double #dfdfdf;\n  text-align: center;\n  color: #221d1f;\n  background-color: #f6f6f6; }\n.units {\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  border-bottom: 1px double #dfdfdf; }\n.units-details {\n  font-size: 13px;\n  font-weight: bold;\n  padding-top: 4px;\n  padding-bottom: 4px; }\n.total {\n  font-weight: bold;\n  padding-top: 20px;\n  padding-bottom: 5px;\n  text-align: right;\n  font-size: 20px; }\n.bdt {\n  font-weight: bold;\n  padding-top: 20px;\n  padding-bottom: 5px;\n  text-align: left;\n  font-size: 20px; }\n.scrollable-div {\n  max-height: 20vh;\n  overflow-y: scroll;\n  overflow-x: hidden; }\n::-webkit-scrollbar {\n  width: 3px; }\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px; }\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.61);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n.back-button {\n  width: 60%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #9b0f12;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.delete {\n  text-align: right; }\n.back-button:hover {\n  width: 60%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #ffffdf;\n  background-color: #9b0f12;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.back-button:focus {\n  outline: 0; }\n.buttons {\n  padding-top: 8px;\n  padding-bottom: 30px; }\n.sub-links {\n  color: #b3acaf;\n  font-family: \"Arial Narrow\";\n  font-size: 15px;\n  font-weight: bold; }\n.sub-links:hover {\n  color: #6a0d0e;\n  font-family: \"Arial Narrow\";\n  font-size: 15px;\n  font-weight: bold; }\na {\n  color: #b3acaf; }\n.link {\n  color: #6a0d0e; }\n.pop-up {\n  color: #7e0000;\n  font-size: 14px;\n  font-family: \"Times New Roman\";\n  text-align: center;\n  font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/admin/orders/order-grid-view/order-grid-view-details/order-grid-view-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderGridViewDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__our_offers_our_offers_service__ = __webpack_require__("./src/app/our-offers/our-offers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data_storage_service__ = __webpack_require__("./src/app/shared/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderGridViewDetailsComponent = (function () {
    function OrderGridViewDetailsComponent(_route, router, _dataStorageService, _ourOfferService) {
        var _this = this;
        this._route = _route;
        this.router = router;
        this._dataStorageService = _dataStorageService;
        this._ourOfferService = _ourOfferService;
        this.orderLists = [];
        this.orderedItems = [];
        this._route.params
            .subscribe(function (params) {
            _this.orderId = params['id'];
        });
    }
    OrderGridViewDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.data.
            subscribe(function (data) {
            _this._ourOfferService.ordersList = data['orders'];
        });
        this.orderLists = this._ourOfferService.ordersList;
        this._ourOfferService.ordersListChanged
            .subscribe(function (order) {
            _this.orderLists = order;
        });
        for (var i = 0; i < this.orderLists.length; i++) {
            if (this.orderLists[i].Id === this.orderId) {
                this.order = this.orderLists[i];
                this.orderedItems = this.orderLists[i].OrderedItems;
            }
        }
    };
    OrderGridViewDetailsComponent.prototype.goBack = function () {
        this.router.navigate(['admin/orders/grid-view']);
    };
    OrderGridViewDetailsComponent.prototype.confirmEvent = function () {
        var _this = this;
        this._ourOfferService.deleteOrder(this.order);
        this._dataStorageService.deleteOrder(this.order).
            subscribe(function (data) {
            _this.router.navigate(['admin/orders/grid-view']);
        });
    };
    OrderGridViewDetailsComponent.prototype.deleteOrder = function () {
        var dialog = confirm('Delete this item?\n' +
            'You will lose any kind of data associated with the current item!');
        if (dialog === true) {
            this.confirmEvent();
        }
    };
    return OrderGridViewDetailsComponent;
}());
OrderGridViewDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-order-grid-view-details',
        template: __webpack_require__("./src/app/admin/orders/order-grid-view/order-grid-view-details/order-grid-view-details.component.html"),
        styles: [__webpack_require__("./src/app/admin/orders/order-grid-view/order-grid-view-details/order-grid-view-details.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_data_storage_service__["a" /* DataStorageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__our_offers_our_offers_service__["a" /* OurOffersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__our_offers_our_offers_service__["a" /* OurOffersService */]) === "function" && _d || Object])
], OrderGridViewDetailsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=order-grid-view-details.component.js.map

/***/ }),

/***/ "./src/app/admin/orders/order-grid-view/order-grid-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row empty\" *ngIf=\"totalOrder === 0; else notEmpty\">\n  <div class=\"col-md-12\">\n    No order has arrived yet.\n  </div>\n</div>\n\n\n<ng-template #notEmpty>\n\n<div class=\"row\">\n  <div class=\"col-md-4 search-bar\">\n    <span class=\"fa fa-search\"></span>\n    <input class=\"box\" type=\"text\" [(ngModel)]=\"term\" placeholder=\"Search by Receipt Ref...\">\n  </div>\n</div>\n\n\n\n<div class=\"row body\">\n  <div class=\"col-md-4 items\" *ngFor=\"let orderList of orderLists | order:term\">\n    <a title=\"View This Order's Details\"\n       style=\"cursor: pointer\" (click)=\"viewDetails(orderList)\">\n    <div class=\"row table-and-money\">\n      <div class=\"col-md-6\">\n        {{ orderList.TableNo }}\n      </div>\n      <div class=\"col-md-offset-3 col-md-3 money\">\n        <i class=\"fa fa-money\" aria-hidden=\"true\"></i> {{ orderList.TotalPrice }}\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12 order-id\">\n        Order {{ orderList.Id }}\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12 order-date\">\n        {{ orderList.DateTime }}\n      </div>\n    </div>\n    </a>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12 Summary\">\n    Summary\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12 detail\">\n    Total Order: {{ totalOrder }} (s)\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12 detail\">\n    Total Sale: {{ grossSale }} BDT\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12 detail\">\n    Total Inventory Cost: {{ grossCost }} BDT\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12 detail\">\n    Total Profit: {{ grossProfit }} BDT\n  </div>\n</div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/admin/orders/order-grid-view/order-grid-view.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Acme|Aladin|Berkshire+Swash|Cabin+Sketch|Chewy|Fredoka+One|Kanit|Lobster|Londrina+Solid|Righteous|Rock+Salt\");\n.name, .price {\n  margin-top: 24px;\n  color: #ae0000;\n  font-family: \"Berlin Sans FB\";\n  font-size: 20px; }\n.whole {\n  /*margin-top: 20px;*/ }\n.sum-of-inv-body {\n  /*padding-right: 0;\n  padding-left: 155px;*/ }\n.f-name {\n  padding-top: 20px;\n  color: #ae0000;\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  font-weight: bold;\n  /*-webkit-box-shadow: 0px 10px 25px 0px rgba(161, 18, 18, 0.2);\n  -moz-box-shadow: 0px 10px 25px 0px rgba(161, 18, 18, 0.2);\n  box-shadow: 0px 10px 25px 0px rgba(161, 18, 18, 0.2);*/ }\n.all-categories-button {\n  width: 100%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #d32039;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.all-categories-button:hover {\n  background-color: #d32039;\n  color: #ffffdf;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  border: 1.2px solid #ffffdf;\n  border-radius: 5px; }\n.all-categories-button:focus {\n  outline: 0; }\n.header {\n  color: #770000;\n  font-size: 21px;\n  font-family: \"Berlin Sans FB\";\n  text-align: left;\n  margin-top: 10px;\n  border: 1px;\n  border-radius: 5px;\n  padding-top: 5px;\n  padding-bottom: 5px; }\n.main-row {\n  border-bottom: 2px double #dfdfdf; }\n::-webkit-scrollbar {\n  width: 4px; }\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px; }\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.61);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n.hodoo {\n  font-family: 'Berkshire Swash', cursive;\n  font-size: 40px;\n  text-align: right;\n  color: #7e0000; }\n.hodoo:focus {\n  outline: 0; }\n.dashboard {\n  width: 20%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #aa0909;\n  background-color: ghostwhite;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold;\n  text-align: center;\n  margin-top: 15px; }\n.dashboard:hover {\n  color: #6a0d0e;\n  background-color: ghostwhite;\n  font-family: \"Arial Narrow\";\n  font-weight: bold; }\n.box {\n  width: 230px;\n  height: 25px;\n  background: #fcfcfc;\n  border: 2px solid #9c0000;\n  border-radius: 10px;\n  text-indent: 32px;\n  color: #9c0000;\n  font-size: 11px;\n  font-family: \"Lato\",\"Lucida Grande\", \"Helvetica\", \"Verdana\", \"Arial\"; }\n.box:focus {\n  outline: 0; }\n.fa-search {\n  position: absolute;\n  top: 7px;\n  left: 23px;\n  font-size: 11px; }\n.search-bar {\n  margin-top: 10px; }\n.body {\n  max-height: 45vh;\n  overflow-y: scroll;\n  border: 1px solid #cbc6cb;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding-left: 0;\n  padding-right: 0;\n  color: #6a0d0e; }\n.items {\n  background-color: white;\n  color: #6a0d0e;\n  font-family: \"Times New Roman\";\n  font-size: 13px;\n  font-weight: bold;\n  border: 1px double #dfdfdf;\n  border-radius: 10px;\n  margin-bottom: 8px; }\n.money {\n  border: 1px solid white;\n  background-color: #a50f10;\n  color: white;\n  border-radius: 8px;\n  padding-left: 2px;\n  padding-right: 2px;\n  text-align: center; }\n.order-date {\n  font-weight: normal;\n  padding-top: 1px;\n  padding-bottom: 3px; }\n.order-id {\n  padding-top: 3px; }\n.table-and-money {\n  padding-top: 6px;\n  padding-right: 6px; }\na {\n  color: #6a0d0e; }\n.Summary {\n  font-family: \"Times New Roman\";\n  color: #520606;\n  font-size: 16px;\n  font-weight: bold;\n  padding-top: 3px;\n  padding-bottom: 3px; }\n.detail {\n  font-family: \"Times New Roman\";\n  color: #630606;\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: 2px;\n  padding-bottom: 2px; }\n.empty {\n  font-family: \"Times New Roman\";\n  color: #630606;\n  font-size: 20px;\n  font-weight: bold;\n  padding-top: 20px;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/admin/orders/order-grid-view/order-grid-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderGridViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__our_offers_our_offers_service__ = __webpack_require__("./src/app/our-offers/our-offers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderGridViewComponent = (function () {
    function OrderGridViewComponent(_route, router, _ourOfferService) {
        this._route = _route;
        this.router = router;
        this._ourOfferService = _ourOfferService;
        this.orderLists = [];
        this.grossSale = 0;
        this.grossCost = 0;
        this.grossProfit = 0;
        this.totalOrder = 0;
    }
    OrderGridViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.data.
            subscribe(function (data) {
            _this._ourOfferService.ordersList = data['orders'];
        });
        this.orderLists = this._ourOfferService.ordersList;
        this._ourOfferService.ordersListChanged
            .subscribe(function (order) {
            _this.orderLists = order;
        });
        for (var i = 0; i < this.orderLists.length; i++) {
            this.grossSale = this.grossSale
                + Number.parseInt(this.orderLists[i].TotalPrice.toString());
            this.grossCost = this.grossCost
                + Number.parseInt(this.orderLists[i].InventoryCost.toString());
            this.grossProfit = this.grossProfit
                + Number.parseInt(this.orderLists[i].Profit.toString());
        }
        this.totalOrder = this._ourOfferService.ordersList.length;
    };
    OrderGridViewComponent.prototype.viewDetails = function (orderList) {
        var orderId = orderList.Id;
        this.router.navigate(['admin/orders/grid-details', orderId]);
    };
    return OrderGridViewComponent;
}());
OrderGridViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-order-grid-view',
        template: __webpack_require__("./src/app/admin/orders/order-grid-view/order-grid-view.component.html"),
        styles: [__webpack_require__("./src/app/admin/orders/order-grid-view/order-grid-view.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__our_offers_our_offers_service__["a" /* OurOffersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__our_offers_our_offers_service__["a" /* OurOffersService */]) === "function" && _c || Object])
], OrderGridViewComponent);

var _a, _b, _c;
//# sourceMappingURL=order-grid-view.component.js.map

/***/ }),

/***/ "./src/app/admin/orders/order-list-view/order-list-view-details/order-list-view-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-offset-1 col-md-9 order-detail\">\n    <div class=\"row buttons\">\n      <div class=\"col-md-2 back\">\n        <button class=\"back-button\" (click)=\"goBack()\"><i class=\"fa fa-arrow-circle-o-left\" aria-hidden=\"true\"></i>\n          Back</button>\n      </div>\n      <div class=\"col-md-offset-8 col-md-2 delete\">\n        <button class=\"back-button\" (click)=\"deleteOrder()\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n          Delete</button>\n      </div>\n    </div>\n\n\n    <div class=\"row upper-div\">\n      <div class=\"col-md-6 order-header\">\n        <div class=\"row\">\n          <div class=\"col-md-4 order-ref\">\n            Order Ref\n          </div>\n          <div class=\"col-md-6 id\">\n            {{ order.Id }}\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"row\">\n          <div class=\"col-md-4 order-date\">\n            Order Date\n          </div>\n          <div class=\"col-md-6 date\">\n            {{ order.DateTime }}\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row prod\">\n      <div class=\"col-md-12\">\n        Products\n      </div>\n    </div>\n    <div class=\"row units \">\n      <div class=\"col-md-3\">\n        Product\n      </div>\n      <div class=\"col-md-3 \">\n        Quantity\n      </div>\n      <div class=\"col-md-3 \">\n        Unit Price\n      </div>\n      <div class=\"col-md-3 \">\n        Sub Total\n      </div>\n    </div>\n\n\n<div *ngIf=\"order.OrderedItems !== null\" class=\"scrollable-div\" >\n    <div class=\"row table-bordered units-details\" *ngFor=\"let products of order.OrderedItems\">\n      <div class=\"col-md-3\" >\n        {{ products.FoodItemName }}\n      </div>\n      <div class=\"col-md-3\">\n        {{ products.FoodItemQuantity }}\n      </div>\n      <div class=\"col-md-3\">\n        {{ products.Price}}\n      </div>\n      <div class=\"col-md-3\">\n        {{ products.FoodItemSubTotal }}\n      </div>\n    </div>\n</div>\n\n    <div class=\"row \">\n      <div class=\"col-md-offset-8 col-md-1 total\">\n        Total:\n      </div>\n      <div class=\"col-md-2 bdt\">\n        {{ order.TotalPrice }} BDT\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12 prod\">\n        Payments and Additional Informations\n      </div>\n    </div>\n    <div class=\"row units\">\n      <div class=\"col-md-2\">\n        Total\n      </div>\n      <div class=\"col-md-2\">\n        Tendered\n      </div>\n      <div class=\"col-md-2\">\n        Change\n      </div>\n      <div class=\"col-md-2\">\n        Inventory Cost\n      </div>\n      <div class=\"col-md-2\">\n        Profit\n      </div>\n      <div class=\"col-md-2\">\n        Table\n      </div>\n    </div>\n\n    <div class=\"row units-details\">\n      <div class=\"col-md-2\">\n        {{ order.TotalPrice }}\n      </div>\n      <div class=\"col-md-2\">\n        {{ order.Tendered }}\n      </div>\n      <div class=\"col-md-2\">\n        {{ order.Change }}\n      </div>\n      <div class=\"col-md-2\">\n        {{ order.InventoryCost }}\n      </div>\n      <div class=\"col-md-2\">\n        {{ order.Profit }}\n      </div>\n      <div class=\"col-md-2\">\n        {{ order.TableNo }}\n      </div>\n    </div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/admin/orders/order-list-view/order-list-view-details/order-list-view-details.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Acme|Aladin|Berkshire+Swash|Cabin+Sketch|Chewy|Fredoka+One|Kanit|Lobster|Londrina+Solid|Righteous|Rock+Salt\");\n.name, .price {\n  margin-top: 24px;\n  color: #ae0000;\n  font-family: \"Berlin Sans FB\";\n  font-size: 20px; }\n.whole {\n  /*margin-top: 20px;*/ }\n.sum-of-inv-body {\n  /*padding-right: 0;\n  padding-left: 155px;*/ }\n.f-name {\n  padding-top: 20px;\n  color: #ae0000;\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  font-weight: bold;\n  /*-webkit-box-shadow: 0px 10px 25px 0px rgba(161, 18, 18, 0.2);\n  -moz-box-shadow: 0px 10px 25px 0px rgba(161, 18, 18, 0.2);\n  box-shadow: 0px 10px 25px 0px rgba(161, 18, 18, 0.2);*/ }\n.all-categories-button {\n  width: 100%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #d32039;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.all-categories-button:hover {\n  background-color: #d32039;\n  color: #ffffdf;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  border: 1.2px solid #ffffdf;\n  border-radius: 5px; }\n.all-categories-button:focus {\n  outline: 0; }\n.header {\n  color: #770000;\n  font-size: 21px;\n  font-family: \"Berlin Sans FB\";\n  text-align: left;\n  margin-top: 10px;\n  border: 1px;\n  border-radius: 5px;\n  padding-top: 5px;\n  padding-bottom: 5px; }\n.main-row {\n  border-bottom: 2px double #dfdfdf; }\n.body {\n  height: 350px;\n  overflow-y: scroll;\n  border: 1px solid #cbc6cb;\n  border-radius: 5px; }\n::-webkit-scrollbar {\n  width: 4px; }\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px; }\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.61);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n.hodoo {\n  font-family: 'Berkshire Swash', cursive;\n  font-size: 40px;\n  text-align: right;\n  color: #7e0000; }\n.hodoo:focus {\n  outline: 0; }\n.dashboard {\n  width: 20%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #aa0909;\n  background-color: ghostwhite;\n  /*border: 1.2px solid #ae0000;\n  border-radius: 5px;*/\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold;\n  text-align: center;\n  margin-top: 15px; }\n.dashboard:hover {\n  color: #6a0d0e;\n  background-color: ghostwhite;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  /* border: 1.2px solid #ffffdf;\n   border-radius: 5px;*/ }\n.order-detail {\n  background-color: #fcfcfc;\n  color: #910000;\n  font-family: \"Times New Roman\";\n  border: 2px double #e2e2e2;\n  border-radius: 5px;\n  margin-top: 15px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  background-color: white; }\n.order-ref, .order-date {\n  border-right: 2px double #c5bdbf;\n  font-weight: bold;\n  font-size: 16px; }\n.upper-div {\n  border-bottom: 2px double #dfdfdf; }\n.id, .date {\n  font-size: 15px;\n  font-weight: bold; }\n.prod {\n  font-size: 15px;\n  font-weight: bold;\n  padding-top: 13px;\n  padding-bottom: 13px;\n  border-bottom: 1px double #dfdfdf;\n  text-align: center;\n  color: #221d1f;\n  background-color: #f6f6f6; }\n.units {\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  border-bottom: 1px double #dfdfdf; }\n.units-details {\n  font-size: 13px;\n  font-weight: bold;\n  padding-top: 4px;\n  padding-bottom: 4px; }\n.total {\n  font-weight: bold;\n  padding-top: 20px;\n  padding-bottom: 5px;\n  text-align: right;\n  font-size: 20px; }\n.bdt {\n  font-weight: bold;\n  padding-top: 20px;\n  padding-bottom: 5px;\n  text-align: left;\n  font-size: 20px; }\n.scrollable-div {\n  max-height: 20vh;\n  overflow-y: scroll;\n  overflow-x: hidden; }\n::-webkit-scrollbar {\n  width: 3px; }\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px; }\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.61);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n.back-button {\n  width: 60%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #9b0f12;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.delete {\n  text-align: right; }\n.back-button:hover {\n  width: 60%;\n  height: 80%;\n  font-family: \"Arial Narrow\";\n  color: #ffffdf;\n  background-color: #9b0f12;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.back-button:focus {\n  outline: 0; }\n.buttons {\n  padding-top: 8px;\n  padding-bottom: 30px; }\n.sub-links {\n  color: #b3acaf;\n  font-family: \"Arial Narrow\";\n  font-size: 15px;\n  font-weight: bold; }\n.sub-links:hover {\n  color: #6a0d0e;\n  font-family: \"Arial Narrow\";\n  font-size: 15px;\n  font-weight: bold; }\na {\n  color: #b3acaf; }\n.link {\n  color: #6a0d0e; }\n.pop-up {\n  color: #7e0000;\n  font-size: 14px;\n  font-family: \"Times New Roman\";\n  text-align: center;\n  font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/admin/orders/order-list-view/order-list-view-details/order-list-view-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderListViewDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__our_offers_our_offers_service__ = __webpack_require__("./src/app/our-offers/our-offers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_data_storage_service__ = __webpack_require__("./src/app/shared/data-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderListViewDetailsComponent = (function () {
    function OrderListViewDetailsComponent(_route, router, _dataStorageService, _ourOfferService) {
        var _this = this;
        this._route = _route;
        this.router = router;
        this._dataStorageService = _dataStorageService;
        this._ourOfferService = _ourOfferService;
        this.orderLists = [];
        this.orderedItems = [];
        this._route.params
            .subscribe(function (params) {
            _this.orderId = params['id'];
        });
    }
    OrderListViewDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.data.
            subscribe(function (data) {
            _this._ourOfferService.ordersList = data['orders'];
        });
        this.orderLists = this._ourOfferService.ordersList;
        this._ourOfferService.ordersListChanged
            .subscribe(function (order) {
            _this.orderLists = order;
        });
        for (var i = 0; i < this.orderLists.length; i++) {
            if (this.orderLists[i].Id === this.orderId) {
                this.order = this.orderLists[i];
                this.orderedItems = this.orderLists[i].OrderedItems;
            }
        }
    };
    OrderListViewDetailsComponent.prototype.goBack = function () {
        this.router.navigate(['admin/orders/list-view']);
    };
    OrderListViewDetailsComponent.prototype.confirmEvent = function () {
        var _this = this;
        this._ourOfferService.deleteOrder(this.order);
        this._dataStorageService.deleteOrder(this.order).
            subscribe(function (data) {
            _this.router.navigate(['admin/orders/grid-view']);
        });
    };
    OrderListViewDetailsComponent.prototype.deleteOrder = function () {
        var dialog = confirm('Delete this item?\n' +
            'You will lose any kind of data associated with the current item!');
        if (dialog === true) {
            this.confirmEvent();
        }
    };
    return OrderListViewDetailsComponent;
}());
OrderListViewDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-order-list-view-details',
        template: __webpack_require__("./src/app/admin/orders/order-list-view/order-list-view-details/order-list-view-details.component.html"),
        styles: [__webpack_require__("./src/app/admin/orders/order-list-view/order-list-view-details/order-list-view-details.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_data_storage_service__["a" /* DataStorageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__our_offers_our_offers_service__["a" /* OurOffersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__our_offers_our_offers_service__["a" /* OurOffersService */]) === "function" && _d || Object])
], OrderListViewDetailsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=order-list-view-details.component.js.map

/***/ }),

/***/ "./src/app/admin/orders/order-list-view/order-list-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row empty\" *ngIf=\"totalOrder === 0; else notEmpty\">\n  <div class=\"col-md-12\">\n    No order has arrived yet.\n  </div>\n</div>\n\n\n<ng-template #notEmpty>\n\n<div class=\"sum-of-inv-body\">\n<div class=\"row\">\n  <div class=\"col-md-4 search-bar\">\n    <span class=\"fa fa-search\"></span>\n    <input class=\"box\" type=\"text\" [(ngModel)]=\"term\" placeholder=\"Search by Receipt Ref...\">\n  </div>\n</div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"col-md-2 receipt\">\n        Receipt Ref\n      </div>\n      <div class=\"col-md-2 name\">\n        Order Date\n      </div>\n      <div class=\"col-md-2 name\">\n        Table No\n      </div>\n      <div class=\"col-md-2 price\">\n        Selling Price\n      </div>\n      <div class=\"col-md-2 price\">\n        Inventory Cost\n      </div>\n      <div class=\"col-md-2 price\">\n        Profit in Order\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-12 body\">\n      <div class=\"row\" *ngFor=\"let orderList of orderLists | order:term; let i = index\">\n        <a title=\"View This Order's Details\"\n          style=\"cursor: pointer\" (click)=\"viewDetails(orderList)\">\n        <div class=\"col-md-12 f-name table-bordered\">\n          <div class=\"col-md-2 column-receipt\">\n          {{ orderList.Id }}\n          </div>\n          <div class=\"col-md-2 column\">\n            {{ orderList.DateTime }}\n          </div>\n          <div class=\"col-md-2 column\">\n            {{orderList.TableNo }}\n          </div>\n\n          <div class=\"col-md-2 column\">\n            {{ orderList.TotalPrice }} BDT\n          </div>\n\n          <div class=\"col-md-2 column\">\n            {{ orderList.InventoryCost }} BDT\n          </div>\n\n          <div class=\"col-md-2 column\">\n            {{ orderList.Profit }} BDT\n          </div>\n        </div>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12 Summary\">\n    Summary\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12 detail\">\n    Total Order: {{ totalOrder }} (s)\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12 detail\">\n    Total Sale: {{ grossSale }} BDT\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12 detail\">\n    Total Inventory Cost: {{ grossCost }} BDT\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12 detail\">\n    Total Profit: {{ grossProfit }} BDT\n  </div>\n</div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/admin/orders/order-list-view/order-list-view.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Acme|Aladin|Berkshire+Swash|Cabin+Sketch|Chewy|Fredoka+One|Kanit|Lobster|Londrina+Solid|Righteous|Rock+Salt\");\n.name, .price {\n  margin-top: 20px;\n  color: #6a0d0e;\n  font-family: \"Berlin Sans FB\";\n  font-size: 17px;\n  text-align: center;\n  padding-left: 0;\n  padding-right: 0; }\n.receipt {\n  text-align: left;\n  margin-top: 20px;\n  color: #6a0d0e;\n  font-family: \"Berlin Sans FB\";\n  font-size: 17px;\n  padding-left: 0;\n  padding-right: 0; }\n.column {\n  border-left: 2px double #c5bdbf;\n  padding-left: 0;\n  padding-right: 0;\n  text-align: center; }\n.column-receipt {\n  border-left: none; }\n.f-name {\n  padding-top: 20px;\n  color: #6a0d0e;\n  font-family: \"Times New Roman\";\n  font-size: 13px;\n  font-weight: bold;\n  padding-left: 0;\n  padding-right: 0; }\n.all-categories-button {\n  width: 100%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #d32039;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.all-categories-button:hover {\n  background-color: #d32039;\n  color: #ffffdf;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  border: 1.2px solid #ffffdf;\n  border-radius: 5px; }\n.all-categories-button:focus {\n  outline: 0; }\n.header {\n  color: #770000;\n  font-size: 21px;\n  font-family: \"Berlin Sans FB\";\n  text-align: left;\n  margin-top: 10px;\n  border: 1px;\n  border-radius: 5px;\n  padding-top: 5px;\n  padding-bottom: 5px; }\n.main-row {\n  border-bottom: 2px double #dfdfdf; }\n.body {\n  max-height: 42vh;\n  overflow-y: scroll;\n  border: 1px solid #cbc6cb;\n  border-radius: 5px;\n  background-color: white; }\n::-webkit-scrollbar {\n  width: 4px; }\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px; }\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.61);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n.hodoo {\n  font-family: 'Berkshire Swash', cursive;\n  font-size: 40px;\n  text-align: right;\n  color: #7e0000; }\n.hodoo:focus {\n  outline: 0; }\n.dashboard {\n  width: 20%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #aa0909;\n  background-color: ghostwhite;\n  /*border: 1.2px solid #ae0000;\n  border-radius: 5px;*/\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold;\n  text-align: center;\n  margin-top: 15px; }\n.dashboard:hover {\n  color: #6a0d0e;\n  background-color: ghostwhite;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  /* border: 1.2px solid #ffffdf;\n   border-radius: 5px;*/ }\n.box {\n  width: 230px;\n  height: 25px;\n  background: #fcfcfc;\n  border: 2px solid #9c0000;\n  border-radius: 10px;\n  text-indent: 32px;\n  color: #9c0000;\n  font-size: 11px;\n  font-family: \"Lato\",\"Lucida Grande\", \"Helvetica\", \"Verdana\", \"Arial\"; }\n.box:focus {\n  outline: 0; }\n.fa-search {\n  position: absolute;\n  top: 7px;\n  left: 23px;\n  font-size: 11px; }\n.search-bar {\n  margin-top: 10px; }\n.Summary {\n  font-family: \"Times New Roman\";\n  color: #520606;\n  font-size: 16px;\n  font-weight: bold;\n  padding-top: 3px;\n  padding-bottom: 3px; }\n.detail {\n  font-family: \"Times New Roman\";\n  color: #630606;\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: 2px;\n  padding-bottom: 2px; }\n.empty {\n  font-family: \"Times New Roman\";\n  color: #630606;\n  font-size: 20px;\n  font-weight: bold;\n  padding-top: 20px;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/admin/orders/order-list-view/order-list-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderListViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__our_offers_our_offers_service__ = __webpack_require__("./src/app/our-offers/our-offers.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderListViewComponent = (function () {
    function OrderListViewComponent(_route, router, _ourOfferService) {
        this._route = _route;
        this.router = router;
        this._ourOfferService = _ourOfferService;
        this.orderLists = [];
        this.grossSale = 0;
        this.grossCost = 0;
        this.grossProfit = 0;
        this.totalOrder = 0;
    }
    OrderListViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.data.
            subscribe(function (data) {
            _this._ourOfferService.ordersList = data['orders'];
        });
        this.orderLists = this._ourOfferService.ordersList;
        this._ourOfferService.ordersListChanged
            .subscribe(function (order) {
            _this.orderLists = order;
        });
        for (var i = 0; i < this.orderLists.length; i++) {
            this.grossSale = this.grossSale
                + Number.parseInt(this.orderLists[i].TotalPrice.toString());
            this.grossCost = this.grossCost
                + Number.parseInt(this.orderLists[i].InventoryCost.toString());
            this.grossProfit = this.grossProfit
                + Number.parseInt(this.orderLists[i].Profit.toString());
        }
        this.totalOrder = this._ourOfferService.ordersList.length;
    };
    OrderListViewComponent.prototype.viewDetails = function (orderList) {
        var orderId = orderList.Id;
        this.router.navigate(['admin/orders/list-details', orderId]);
    };
    return OrderListViewComponent;
}());
OrderListViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-order-list-view',
        template: __webpack_require__("./src/app/admin/orders/order-list-view/order-list-view.component.html"),
        styles: [__webpack_require__("./src/app/admin/orders/order-list-view/order-list-view.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__our_offers_our_offers_service__["a" /* OurOffersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__our_offers_our_offers_service__["a" /* OurOffersService */]) === "function" && _c || Object])
], OrderListViewComponent);

var _a, _b, _c;
//# sourceMappingURL=order-list-view.component.js.map

/***/ }),

/***/ "./src/app/admin/orders/order-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__ = __webpack_require__("./src/app/shared/data-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderResolverService = (function () {
    function OrderResolverService(_dataStorageService) {
        this._dataStorageService = _dataStorageService;
    }
    OrderResolverService.prototype.resolve = function (route, state) {
        return this._dataStorageService.getOrders();
    };
    return OrderResolverService;
}());
OrderResolverService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__["a" /* DataStorageService */]) === "function" && _a || Object])
], OrderResolverService);

var _a;
//# sourceMappingURL=order-resolver.service.js.map

/***/ }),

/***/ "./src/app/admin/orders/order.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderPipe = (function () {
    function OrderPipe() {
    }
    OrderPipe.prototype.transform = function (orderLists, term) {
        if (term === undefined) {
            return orderLists;
        }
        return orderLists.filter(function (orderList) {
            return orderList.Id.toLowerCase()
                .includes(term.toLowerCase());
        });
    };
    return OrderPipe;
}());
OrderPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'order'
    })
], OrderPipe);

//# sourceMappingURL=order.pipe.js.map

/***/ }),

/***/ "./src/app/admin/orders/orders.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"row main-row\">\n    <div class=\"col-md-8 header\">\n      Order History\n    </div>\n    <a routerLink=\"/control-panel\">\n      <div class=\"col-md-offset-1 col-md-2 dashboard\">\n        Back to Dashboard\n      </div>\n    </a>\n  </div>\n\n\n\n\n\n  <div class=\"row\">\n  <div class=\"col-md-offset-11 col-md-1\">\n    <div class=\"row icons\">\n      <a title=\"List View\" routerLink=\"/admin/orders/list-view\" routerLinkActive=\"icon-active\">\n      <div class=\"col-md-6 list\">\n        <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n      </div>\n      </a>\n      <a title=\"Grid View\" routerLink=\"/admin/orders/grid-view\" routerLinkActive=\"icon-active\">\n      <div class=\"col-md-6 grid\">\n        <i class=\"fa fa-th-large\" aria-hidden=\"true\"></i>\n      </div>\n      </a>\n    </div>\n  </div>\n</div>\n  <router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/admin/orders/orders.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Acme|Aladin|Berkshire+Swash|Cabin+Sketch|Chewy|Fredoka+One|Kanit|Lobster|Londrina+Solid|Righteous|Rock+Salt\");\n.name, .price {\n  margin-top: 24px;\n  color: #ae0000;\n  font-family: \"Berlin Sans FB\";\n  font-size: 20px; }\n.f-name {\n  padding-top: 20px;\n  color: #ae0000;\n  font-family: \"Times New Roman\";\n  font-size: 15px;\n  font-weight: bold; }\n.all-categories-button {\n  width: 100%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #d32039;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.all-categories-button:hover {\n  background-color: #d32039;\n  color: #ffffdf;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  border: 1.2px solid #ffffdf;\n  border-radius: 5px; }\n.all-categories-button:focus {\n  outline: 0; }\n.header {\n  color: #770000;\n  font-size: 21px;\n  font-family: \"Berlin Sans FB\";\n  text-align: left;\n  margin-top: 10px;\n  border: 1px;\n  border-radius: 5px;\n  padding-top: 5px;\n  padding-bottom: 5px; }\n.main-row {\n  border-bottom: 2px double #dfdfdf; }\n.body {\n  height: 350px;\n  overflow-y: scroll;\n  border: 1px solid #cbc6cb;\n  border-radius: 5px; }\n::-webkit-scrollbar {\n  width: 4px; }\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px; }\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.61);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n.hodoo {\n  font-family: 'Berkshire Swash', cursive;\n  font-size: 40px;\n  text-align: right;\n  color: #7e0000; }\n.hodoo:focus {\n  outline: 0; }\n.dashboard {\n  width: 20%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #aa0909;\n  background-color: ghostwhite;\n  /*border: 1.2px solid #ae0000;\n  border-radius: 5px;*/\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold;\n  text-align: center;\n  margin-top: 15px; }\n.dashboard:hover {\n  color: #6a0d0e;\n  background-color: ghostwhite;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  /* border: 1.2px solid #ffffdf;\n   border-radius: 5px;*/ }\n.icons {\n  /*text-align: center;*/\n  font-size: 23px;\n  color: #bcb4b6;\n  margin-top: 10px; }\n.icons:hover {\n  /*text-align: center;*/\n  font-size: 23px;\n  color: #690e0f;\n  margin-top: 10px; }\n.list, grid {\n  text-align: right;\n  padding-left: 0;\n  padding-right: 0; }\n.grid {\n  text-align: left; }\n.icon-active {\n  color: #690e0f; }\na {\n  color: #ada5a7; }\n"

/***/ }),

/***/ "./src/app/admin/orders/orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrdersComponent = (function () {
    function OrdersComponent() {
    }
    OrdersComponent.prototype.ngOnInit = function () {
    };
    return OrdersComponent;
}());
OrdersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-orders',
        template: __webpack_require__("./src/app/admin/orders/orders.component.html"),
        styles: [__webpack_require__("./src/app/admin/orders/orders.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], OrdersComponent);

//# sourceMappingURL=orders.component.js.map

/***/ }),

/***/ "./src/app/admin/tables/add-new-table/add-new-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 name\">\n  <form (ngSubmit) = \"onAddNewTable(newTable)\" #newTable = \"ngForm\">\n    <div id=\"user-data\">\n      <div class=\"form-group\">\n        <label for=\"name\">Table's Name:</label>\n        <input\n          type=\"text\"\n          id=\"name\"\n          class=\"form-control\"\n          ngModel\n          name=\"name\"\n          required\n        >\n      </div>\n\n      <div class=\"form-group\">\n\n        <div class=\"action\">\n          <button class=\"all-categories-button\"\n                  type=\"submit\"\n                  [disabled]=\"!newTable.valid\">\n            <i class=\"fa fa-bookmark\" aria-hidden=\"true\"></i> Save</button>\n        </div>\n        <div class=\"action\">\n          <button class=\"all-categories-button\" type=\"button\" (click)=\"onCancel()\">\n            <i class=\"fa fa-times-circle-o\" aria-hidden=\"true\"></i> Cancel</button>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/tables/add-new-table/add-new-table.component.scss":
/***/ (function(module, exports) {

module.exports = ".name {\n  color: #840d0f;\n  padding-top: 15px;\n  font-size: 17px;\n  font-family: \"Times New Roman\"; }\n\n.all-categories-button {\n  width: 100%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #840d0f;\n  background-color: white;\n  border: 1.2px solid #840d0f;\n  border-radius: 5px;\n  font-size: 14px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n\n.all-categories-button:hover {\n  background-color: #840d0f;\n  color: white;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  border: 1.2px solid #ffffdf;\n  border-radius: 5px; }\n\n.all-categories-button:focus {\n  outline: 0; }\n\n.action {\n  padding: 5px; }\n"

/***/ }),

/***/ "./src/app/admin/tables/add-new-table/add-new-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_uuid__ = __webpack_require__("./node_modules/ng2-uuid/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__our_offers_our_offers_service__ = __webpack_require__("./src/app/our-offers/our-offers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_data_storage_service__ = __webpack_require__("./src/app/shared/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_table_model__ = __webpack_require__("./src/app/shared/table.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddNewTableComponent = (function () {
    function AddNewTableComponent(router, uuid, _ourOfferService, _dataStorageService) {
        this.router = router;
        this.uuid = uuid;
        this._ourOfferService = _ourOfferService;
        this._dataStorageService = _dataStorageService;
    }
    AddNewTableComponent.prototype.ngOnInit = function () {
    };
    AddNewTableComponent.prototype.onAddNewTable = function (form) {
        var id = this.uuid.v1();
        var name = form.value.name;
        var newTable = new __WEBPACK_IMPORTED_MODULE_5__shared_table_model__["a" /* Table */](id, name);
        this._ourOfferService.addToTableList(newTable);
        this._dataStorageService.addNewTable(newTable);
        form.controls['name'].reset();
    };
    AddNewTableComponent.prototype.onCancel = function () {
        this.router.navigate(['admin/tables']);
    };
    return AddNewTableComponent;
}());
AddNewTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-add-new-table',
        template: __webpack_require__("./src/app/admin/tables/add-new-table/add-new-table.component.html"),
        styles: [__webpack_require__("./src/app/admin/tables/add-new-table/add-new-table.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_uuid__["a" /* Uuid */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_uuid__["a" /* Uuid */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__our_offers_our_offers_service__["a" /* OurOffersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__our_offers_our_offers_service__["a" /* OurOffersService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_data_storage_service__["a" /* DataStorageService */]) === "function" && _d || Object])
], AddNewTableComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=add-new-table.component.js.map

/***/ }),

/***/ "./src/app/admin/tables/edit-table/edit-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 name\">\n  <form (ngSubmit) = \"onEditTable(newTable)\" #newTable = \"ngForm\">\n    <div id=\"user-data\">\n      <div class=\"form-group\">\n        <label for=\"tableName\">Edit Table's Name:</label>\n        <input\n          type=\"text\"\n          id=\"tableName\"\n          class=\"form-control\"\n          [ngModel] = \"tableName\"\n          name=\"tableName\"\n          required\n        >\n      </div>\n\n      <div class=\"form-group\">\n\n        <div class=\"action\">\n          <button class=\"all-categories-button\"\n                  type=\"submit\"\n                  [disabled]=\"!newTable.valid\">\n            <i class=\"fa fa-wrench\" aria-hidden=\"true\"></i> Update</button>\n        </div>\n        <div class=\"action\">\n          <button class=\"all-categories-button\" type=\"button\" (click)=\"onCancel()\">\n            <i class=\"fa fa-times-circle-o\" aria-hidden=\"true\"></i> Cancel</button>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/tables/edit-table/edit-table.component.scss":
/***/ (function(module, exports) {

module.exports = ".name {\n  color: #840d0f;\n  padding-top: 15px;\n  font-size: 17px;\n  font-family: \"Times New Roman\"; }\n\n.all-categories-button {\n  width: 100%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #840d0f;\n  background-color: white;\n  border: 1.2px solid #840d0f;\n  border-radius: 5px;\n  font-size: 14px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n\n.all-categories-button:hover {\n  background-color: #840d0f;\n  color: white;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  border: 1.2px solid #ffffdf;\n  border-radius: 5px; }\n\n.all-categories-button:focus {\n  outline: 0; }\n\n.action {\n  padding: 5px; }\n"

/***/ }),

/***/ "./src/app/admin/tables/edit-table/edit-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_table_model__ = __webpack_require__("./src/app/shared/table.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__our_offers_our_offers_service__ = __webpack_require__("./src/app/our-offers/our-offers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_data_storage_service__ = __webpack_require__("./src/app/shared/data-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditTableComponent = (function () {
    function EditTableComponent(route, router, _ourOfferService, _dataStorageService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this._ourOfferService = _ourOfferService;
        this._dataStorageService = _dataStorageService;
        this.tableName = '';
        this.route.params
            .subscribe(function (params) {
            _this.tableId = params['id'];
        });
    }
    EditTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tables = this._ourOfferService.table;
        this.subscription = this._ourOfferService.tableChanged
            .subscribe(function (tables) {
            _this.tables = tables;
        });
        for (var i = 0; i < this.tables.length; i++) {
            if (this.tables[i].Id === this.tableId) {
                this.tableName = this.tables[i].Name;
            }
        }
    };
    EditTableComponent.prototype.ngDoCheck = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.tableId = params['id'];
        });
        for (var i = 0; i < this.tables.length; i++) {
            if (this.tables[i].Id === this.tableId) {
                this.tableName = this.tables[i].Name;
            }
        }
    };
    EditTableComponent.prototype.onEditTable = function (form) {
        var name = form.value.tableName;
        var editedTable = new __WEBPACK_IMPORTED_MODULE_1__shared_table_model__["a" /* Table */](this.tableId, name);
        var ifExist = this._ourOfferService.editTable(editedTable);
        if (ifExist) {
            this._dataStorageService.editTable(editedTable);
        }
        form.reset();
        this.router.navigate(['admin/tables']);
    };
    EditTableComponent.prototype.onCancel = function () {
        this.router.navigate(['admin/tables']);
    };
    return EditTableComponent;
}());
EditTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-edit-table',
        template: __webpack_require__("./src/app/admin/tables/edit-table/edit-table.component.html"),
        styles: [__webpack_require__("./src/app/admin/tables/edit-table/edit-table.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__our_offers_our_offers_service__["a" /* OurOffersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__our_offers_our_offers_service__["a" /* OurOffersService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_data_storage_service__["a" /* DataStorageService */]) === "function" && _d || Object])
], EditTableComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=edit-table.component.js.map

/***/ }),

/***/ "./src/app/admin/tables/table-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__ = __webpack_require__("./src/app/shared/data-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TableResolverService = (function () {
    function TableResolverService(_dataStorageService) {
        this._dataStorageService = _dataStorageService;
    }
    TableResolverService.prototype.resolve = function (route, state) {
        return this._dataStorageService.getTables();
    };
    return TableResolverService;
}());
TableResolverService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__["a" /* DataStorageService */]) === "function" && _a || Object])
], TableResolverService);

var _a;
//# sourceMappingURL=table-resolver.service.js.map

/***/ }),

/***/ "./src/app/admin/tables/tables.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row main-row\">\n  <div class=\"col-md-8 header\">\n    Manage Your Tables\n  </div>\n  <a routerLink=\"/control-panel\">\n    <div class=\"col-md-offset-1 col-md-2 dashboard\">\n    Back to Dashboard\n    </div>\n  </a>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-offset-9 col-md-2 add-new\">\n    <button class=\"all-categories-button\" (click)=\"addNewTable()\">\n      <i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i> Add New Table</button>\n  </div>\n</div>\n<div class=\"row title\" *ngIf=\"totalTable !== 0\">\n  <div class=\"col-md-8\">\n    <div class=\"col-md-3 name\">\n      Table's Name\n    </div>\n    <div class=\"col-md-offset-5 col-md-2 quantity\">\n      <span class=\"fa fa-search\"></span>\n      <input class=\"box\" type=\"text\" [(ngModel)]=\"term\" placeholder=\"Search Tables...\">\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-8\" *ngIf=\"totalTable !== 0; else empty\">\n\n    <div class=\"row f-name\">\n\n      <div class=\"col-md-12 body table-bordered\" *ngFor=\"let table of tables | filter:term; let i = index\">\n\n        <div class=\"col-md-8 body\">\n        {{ table.Name }}\n        </div>\n\n        <div class=\"col-md-2 body\">\n            <button\n              class=\"all-categories-button\"\n              (click)=\"editTable(table,i)\">\n              <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> Edit</button>\n        </div>\n\n        <div class=\"col-md-2 body\">\n          <button class=\"all-categories-button\"\n                  (click)=\"deleteTable(table,i)\">\n            <i class=\" fa fa-trash\" aria-hidden=\"true\"></i> Delete</button>\n        </div>\n\n      </div>\n\n\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12 total-table\">\n        Total Table: {{ totalTable }} (s)\n      </div>\n    </div>\n  </div>\n  <ng-template #empty>\n    <div class=\"col-md-8 empty\">\n      No table available. Click \"Add New Table\" to populate\n    </div>\n  </ng-template>\n  <div class=\"col-md-4\">\n        <router-outlet></router-outlet>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/admin/tables/tables.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Acme|Aladin|Berkshire+Swash|Cabin+Sketch|Chewy|Fredoka+One|Kanit|Lobster|Londrina+Solid|Righteous|Rock+Salt\");\n.name, .price {\n  padding-top: 15px;\n  color: #840d0f;\n  font-family: \"Berlin Sans FB\";\n  font-size: 21px; }\n.f-name {\n  color: #840d0f;\n  font-family: \"Times New Roman\";\n  font-size: 17px;\n  font-weight: bold;\n  background-color: white;\n  max-height: 55vh;\n  overflow-y: scroll;\n  overflow-x: hidden; }\n.all-categories-button {\n  width: 100%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #840d0f;\n  background-color: white;\n  border: 1.2px solid #840d0f;\n  border-radius: 5px;\n  font-size: 14px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.all-categories-button:hover {\n  background-color: #840d0f;\n  color: white;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  border: 1.2px solid #ffffdf;\n  border-radius: 5px; }\n.all-categories-button:focus {\n  outline: 0; }\n.quantity {\n  padding-top: 15px;\n  color: #ae0000;\n  font-family: \"Berlin Sans FB\";\n  font-size: 21px; }\n.body {\n  padding-top: 5px;\n  padding-bottom: 5px; }\n::-webkit-scrollbar {\n  width: 4px; }\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px; }\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.61);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n.box {\n  width: 200px;\n  height: 30px;\n  background: #fcfcfc;\n  border: 2px solid #9c0000;\n  border-radius: 15px;\n  text-indent: 32px;\n  color: #9c0000;\n  font-size: 12px;\n  font-family: \"Lato\",\"Lucida Grande\", \"Helvetica\", \"Verdana\", \"Arial\"; }\n.box:focus {\n  outline: 0; }\n.fa-search {\n  position: absolute;\n  top: 26px;\n  left: 30px;\n  font-size: 13px; }\n.edit-delete {\n  padding-bottom: 10px; }\n.header {\n  color: #770000;\n  font-size: 21px;\n  font-family: \"Berlin Sans FB\";\n  text-align: left;\n  margin-top: 10px;\n  border: 1px;\n  border-radius: 5px;\n  padding-top: 5px;\n  padding-bottom: 5px; }\n.hodoo {\n  font-family: 'Berkshire Swash',\"Berlin Sans FB\",\"Times New Roman\";\n  font-size: 40px;\n  text-align: right;\n  color: #7e0000; }\n.hodoo:focus {\n  outline: 0; }\n.dashboard {\n  width: 20%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #aa0909;\n  background-color: ghostwhite;\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold;\n  text-align: center;\n  margin-top: 15px; }\n.dashboard:hover {\n  color: #6a0d0e;\n  background-color: ghostwhite;\n  font-family: \"Arial Narrow\";\n  font-weight: bold; }\n.main-row {\n  border-bottom: 2px double #dfdfdf;\n  padding-right: 0; }\n.total-table {\n  font-family: \"Times New Roman\";\n  font-size: 18px;\n  color: #6a0d0e;\n  font-weight: bold;\n  padding-top: 10px; }\n.empty {\n  font-family: \"Times New Roman\";\n  color: #630606;\n  font-size: 20px;\n  font-weight: bold;\n  padding-top: 20px;\n  text-align: center; }\n.add-new {\n  padding-top: 15px;\n  text-align: right; }\n"

/***/ }),

/***/ "./src/app/admin/tables/tables.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__our_offers_our_offers_service__ = __webpack_require__("./src/app/our-offers/our-offers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data_storage_service__ = __webpack_require__("./src/app/shared/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TablesComponent = (function () {
    function TablesComponent(_route, router, _dataStorageService, _ourOfferService) {
        this._route = _route;
        this.router = router;
        this._dataStorageService = _dataStorageService;
        this._ourOfferService = _ourOfferService;
        this.totalTable = 0;
    }
    TablesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.data.
            subscribe(function (data) {
            _this._ourOfferService.table = data['tables'];
        });
        this.tables = this._ourOfferService.table;
        this.subscription = this._ourOfferService.tableChanged
            .subscribe(function (tables) {
            _this.tables = tables;
        });
        this.totalTable = this.tables.length;
    };
    TablesComponent.prototype.ngDoCheck = function () {
        this.totalTable = this.tables.length;
    };
    TablesComponent.prototype.addNewTable = function () {
        this.router.navigate(['admin/tables/add-new-table']);
    };
    TablesComponent.prototype.editTable = function (table) {
        this.router.navigate(['admin/tables/edit-table', table.Id]);
    };
    TablesComponent.prototype.deleteTable = function (table, index) {
        var dialog = confirm('Delete this table?\n' +
            'You will lose any kind of data associated with the current table!');
        if (dialog === true) {
            this.confirmEvent(table, index);
        }
    };
    TablesComponent.prototype.confirmEvent = function (table, index) {
        this._dataStorageService.deleteTable(table);
        this.tables.splice(index, 1);
        this._ourOfferService.table.splice(index, 1);
    };
    return TablesComponent;
}());
TablesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-tables',
        template: __webpack_require__("./src/app/admin/tables/tables.component.html"),
        styles: [__webpack_require__("./src/app/admin/tables/tables.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_data_storage_service__["a" /* DataStorageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__our_offers_our_offers_service__["a" /* OurOffersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__our_offers_our_offers_service__["a" /* OurOffersService */]) === "function" && _d || Object])
], TablesComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=tables.component.js.map

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__our_offers_our_offers_component__ = __webpack_require__("./src/app/our-offers/our-offers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_us_contact_us_component__ = __webpack_require__("./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_admin_component__ = __webpack_require__("./src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_inventory_inventory_component__ = __webpack_require__("./src/app/admin/inventory/inventory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__admin_inventory_add_new_inventory_add_new_inventory_component__ = __webpack_require__("./src/app/admin/inventory/add-new-inventory/add-new-inventory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admin_inventory_edit_inventory_item_edit_inventory_item_component__ = __webpack_require__("./src/app/admin/inventory/edit-inventory-item/edit-inventory-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__our_offers_food_items_food_items_component__ = __webpack_require__("./src/app/our-offers/food-items/food-items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__admin_food_item_food_item_component__ = __webpack_require__("./src/app/admin/food-item/food-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__admin_food_item_add_new_food_item_add_new_food_item_component__ = __webpack_require__("./src/app/admin/food-item/add-new-food-item/add-new-food-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__admin_food_item_edit_food_item_edit_food_item_component__ = __webpack_require__("./src/app/admin/food-item/edit-food-item/edit-food-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__our_offers_payment_payment_component__ = __webpack_require__("./src/app/our-offers/payment/payment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__our_offers_receipt_receipt_component__ = __webpack_require__("./src/app/our-offers/receipt/receipt.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__admin_tables_tables_component__ = __webpack_require__("./src/app/admin/tables/tables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__admin_tables_add_new_table_add_new_table_component__ = __webpack_require__("./src/app/admin/tables/add-new-table/add-new-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__control_panel_control_panel_component__ = __webpack_require__("./src/app/control-panel/control-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__admin_orders_orders_component__ = __webpack_require__("./src/app/admin/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__admin_orders_order_list_view_order_list_view_component__ = __webpack_require__("./src/app/admin/orders/order-list-view/order-list-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__admin_orders_order_list_view_order_list_view_details_order_list_view_details_component__ = __webpack_require__("./src/app/admin/orders/order-list-view/order-list-view-details/order-list-view-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__admin_orders_order_grid_view_order_grid_view_component__ = __webpack_require__("./src/app/admin/orders/order-grid-view/order-grid-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__admin_orders_order_grid_view_order_grid_view_details_order_grid_view_details_component__ = __webpack_require__("./src/app/admin/orders/order-grid-view/order-grid-view-details/order-grid-view-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__admin_food_item_fooditem_list_view_fooditem_list_view_component__ = __webpack_require__("./src/app/admin/food-item/fooditem-list-view/fooditem-list-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__admin_food_item_fooditem_list_view_list_details_list_details_component__ = __webpack_require__("./src/app/admin/food-item/fooditem-list-view/list-details/list-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__admin_food_item_fooditem_grid_view_fooditem_grid_view_component__ = __webpack_require__("./src/app/admin/food-item/fooditem-grid-view/fooditem-grid-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__admin_food_item_fooditem_grid_view_grid_details_grid_details_component__ = __webpack_require__("./src/app/admin/food-item/fooditem-grid-view/grid-details/grid-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__admin_inventory_inventory_list_view_inventory_list_view_component__ = __webpack_require__("./src/app/admin/inventory/inventory-list-view/inventory-list-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__admin_inventory_inventory_grid_view_inventory_grid_details_inventory_grid_details_component__ = __webpack_require__("./src/app/admin/inventory/inventory-grid-view/inventory-grid-details/inventory-grid-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__admin_inventory_inventory_list_view_inventory_list_details_inventory_list_details_component__ = __webpack_require__("./src/app/admin/inventory/inventory-list-view/inventory-list-details/inventory-list-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__admin_inventory_inventory_grid_view_inventory_grid_view_component__ = __webpack_require__("./src/app/admin/inventory/inventory-grid-view/inventory-grid-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__admin_inventory_update_inventory_item_update_inventory_item_component__ = __webpack_require__("./src/app/admin/inventory/update-inventory-item/update-inventory-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__admin_tables_edit_table_edit_table_component__ = __webpack_require__("./src/app/admin/tables/edit-table/edit-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__admin_tables_table_resolver_service__ = __webpack_require__("./src/app/admin/tables/table-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__admin_food_item_food_item_resolver_service__ = __webpack_require__("./src/app/admin/food-item/food-item-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__admin_orders_order_resolver_service__ = __webpack_require__("./src/app/admin/orders/order-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__admin_inventory_inventory_resolver_service__ = __webpack_require__("./src/app/admin/inventory/inventory-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__page_not_found_page_not_found_component__ = __webpack_require__("./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__forbidden_forbidden_component__ = __webpack_require__("./src/app/forbidden/forbidden.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__role_resolver__ = __webpack_require__("./src/app/role-resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__reset_password_reset_password_component__ = __webpack_require__("./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__new_password_new_password_component__ = __webpack_require__("./src/app/new-password/new-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__shared_modified_user_resolver_service__ = __webpack_require__("./src/app/shared/modified-user-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__admin_food_item_add_food_item_image_add_food_item_image_component__ = __webpack_require__("./src/app/admin/food-item/add-food-item-image/add-food-item-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__admin_food_item_edit_food_item_image_edit_food_item_image_component__ = __webpack_require__("./src/app/admin/food-item/edit-food-item-image/edit-food-item-image.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














































var appRoutes = [
    { path: 'control-panel',
        component: __WEBPACK_IMPORTED_MODULE_18__control_panel_control_panel_component__["a" /* ControlPanelComponent */],
    },
    { path: 'payment', component: __WEBPACK_IMPORTED_MODULE_14__our_offers_payment_payment_component__["a" /* PaymentComponent */],
        resolve: { inventories: __WEBPACK_IMPORTED_MODULE_37__admin_inventory_inventory_resolver_service__["a" /* InventoryResolverService */],
            tables: __WEBPACK_IMPORTED_MODULE_34__admin_tables_table_resolver_service__["a" /* TableResolverService */],
            foodItems: __WEBPACK_IMPORTED_MODULE_35__admin_food_item_food_item_resolver_service__["a" /* FoodItemResolverService */]
        }
    },
    { path: 'receipt', component: __WEBPACK_IMPORTED_MODULE_15__our_offers_receipt_receipt_component__["a" /* ReceiptComponent */], },
    { path: 'forbidden', component: __WEBPACK_IMPORTED_MODULE_39__forbidden_forbidden_component__["a" /* ForbiddenComponent */] /*, canActivate: [AuthGuard]*/ },
    { path: 'our-offers', component: __WEBPACK_IMPORTED_MODULE_2__our_offers_our_offers_component__["a" /* OurOffersComponent */] /*, canActivate: [AuthGuard]*/,
        resolve: {
            inventories: __WEBPACK_IMPORTED_MODULE_37__admin_inventory_inventory_resolver_service__["a" /* InventoryResolverService */],
            foodItems: __WEBPACK_IMPORTED_MODULE_35__admin_food_item_food_item_resolver_service__["a" /* FoodItemResolverService */]
        },
        children: [
            { path: 'regulars', component: __WEBPACK_IMPORTED_MODULE_10__our_offers_food_items_food_items_component__["a" /* FoodItemsComponent */] /*, canActivate: [AuthGuard]*/
            }
        ]
    },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: 'reset-password', component: __WEBPACK_IMPORTED_MODULE_41__reset_password_reset_password_component__["a" /* ResetPasswordComponent */] },
    { path: 'new-password', component: __WEBPACK_IMPORTED_MODULE_42__new_password_new_password_component__["a" /* NewPasswordComponent */] },
    { path: 'contact-us', component: __WEBPACK_IMPORTED_MODULE_5__contact_us_contact_us_component__["a" /* ContactUsComponent */],
        /*canActivate: [AuthGuard], */ data: { roles: ['Admin'] } },
    { path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_6__admin_admin_component__["a" /* AdminComponent */],
        /* canActivate: [AuthGuard],
          data: { roles: ['Admin'] },*/
        children: [
            { path: 'register',
                component: __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */],
                /* canActivate: [AuthGuard],*/
                resolve: { roles: __WEBPACK_IMPORTED_MODULE_40__role_resolver__["a" /* RoleResolverService */], users: __WEBPACK_IMPORTED_MODULE_43__shared_modified_user_resolver_service__["a" /* ModifiedUserResolverService */] } },
            { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_19__admin_orders_orders_component__["a" /* OrdersComponent */],
                /*canActivate: [AuthGuard],*/
                children: [
                    { path: 'list-view', component: __WEBPACK_IMPORTED_MODULE_20__admin_orders_order_list_view_order_list_view_component__["a" /* OrderListViewComponent */],
                        resolve: { orders: __WEBPACK_IMPORTED_MODULE_36__admin_orders_order_resolver_service__["a" /* OrderResolverService */] } },
                    { path: 'list-details/:id', component: __WEBPACK_IMPORTED_MODULE_21__admin_orders_order_list_view_order_list_view_details_order_list_view_details_component__["a" /* OrderListViewDetailsComponent */],
                        resolve: { orders: __WEBPACK_IMPORTED_MODULE_36__admin_orders_order_resolver_service__["a" /* OrderResolverService */] } },
                    { path: 'grid-view', component: __WEBPACK_IMPORTED_MODULE_22__admin_orders_order_grid_view_order_grid_view_component__["a" /* OrderGridViewComponent */],
                        resolve: { orders: __WEBPACK_IMPORTED_MODULE_36__admin_orders_order_resolver_service__["a" /* OrderResolverService */] } },
                    { path: 'grid-details/:id', component: __WEBPACK_IMPORTED_MODULE_23__admin_orders_order_grid_view_order_grid_view_details_order_grid_view_details_component__["a" /* OrderGridViewDetailsComponent */],
                        resolve: { orders: __WEBPACK_IMPORTED_MODULE_36__admin_orders_order_resolver_service__["a" /* OrderResolverService */] } }
                ]
            },
            { path: 'food-item', component: __WEBPACK_IMPORTED_MODULE_11__admin_food_item_food_item_component__["a" /* FoodItemComponent */],
                /*canActivate: [AuthGuard],*/
                children: [
                    { path: 'list-view', component: __WEBPACK_IMPORTED_MODULE_24__admin_food_item_fooditem_list_view_fooditem_list_view_component__["a" /* FooditemListViewComponent */],
                        resolve: { foodItems: __WEBPACK_IMPORTED_MODULE_35__admin_food_item_food_item_resolver_service__["a" /* FoodItemResolverService */] } },
                    { path: 'list-details/:id', component: __WEBPACK_IMPORTED_MODULE_25__admin_food_item_fooditem_list_view_list_details_list_details_component__["a" /* ListDetailsComponent */],
                        resolve: { foodItems: __WEBPACK_IMPORTED_MODULE_35__admin_food_item_food_item_resolver_service__["a" /* FoodItemResolverService */] } },
                    { path: 'grid-view', component: __WEBPACK_IMPORTED_MODULE_26__admin_food_item_fooditem_grid_view_fooditem_grid_view_component__["a" /* FooditemGridViewComponent */],
                        resolve: { foodItems: __WEBPACK_IMPORTED_MODULE_35__admin_food_item_food_item_resolver_service__["a" /* FoodItemResolverService */] } },
                    { path: 'grid-details/:id', component: __WEBPACK_IMPORTED_MODULE_27__admin_food_item_fooditem_grid_view_grid_details_grid_details_component__["a" /* GridDetailsComponent */],
                        resolve: { foodItems: __WEBPACK_IMPORTED_MODULE_35__admin_food_item_food_item_resolver_service__["a" /* FoodItemResolverService */] } },
                    { path: 'add-new-food-item', component: __WEBPACK_IMPORTED_MODULE_12__admin_food_item_add_new_food_item_add_new_food_item_component__["a" /* AddNewFoodItemComponent */],
                        resolve: { inventories: __WEBPACK_IMPORTED_MODULE_37__admin_inventory_inventory_resolver_service__["a" /* InventoryResolverService */] } },
                    { path: 'add-food-item-image/:id', component: __WEBPACK_IMPORTED_MODULE_44__admin_food_item_add_food_item_image_add_food_item_image_component__["a" /* AddFoodItemImageComponent */],
                    },
                    { path: 'edit-food-item/:id', component: __WEBPACK_IMPORTED_MODULE_13__admin_food_item_edit_food_item_edit_food_item_component__["a" /* EditFoodItemComponent */],
                        resolve: { foodItems: __WEBPACK_IMPORTED_MODULE_35__admin_food_item_food_item_resolver_service__["a" /* FoodItemResolverService */], inventories: __WEBPACK_IMPORTED_MODULE_37__admin_inventory_inventory_resolver_service__["a" /* InventoryResolverService */] }
                    },
                    { path: 'edit-food-item-image/:id', component: __WEBPACK_IMPORTED_MODULE_45__admin_food_item_edit_food_item_image_edit_food_item_image_component__["a" /* EditFoodItemImageComponent */],
                        resolve: { foodItems: __WEBPACK_IMPORTED_MODULE_35__admin_food_item_food_item_resolver_service__["a" /* FoodItemResolverService */] }
                    }
                ] },
            { path: 'tables', component: __WEBPACK_IMPORTED_MODULE_16__admin_tables_tables_component__["a" /* TablesComponent */],
                resolve: { tables: __WEBPACK_IMPORTED_MODULE_34__admin_tables_table_resolver_service__["a" /* TableResolverService */] }, children: [
                    { path: 'add-new-table', component: __WEBPACK_IMPORTED_MODULE_17__admin_tables_add_new_table_add_new_table_component__["a" /* AddNewTableComponent */], },
                    { path: 'edit-table/:id', component: __WEBPACK_IMPORTED_MODULE_33__admin_tables_edit_table_edit_table_component__["a" /* EditTableComponent */],
                    }
                ]
            },
            { path: 'inventory',
                component: __WEBPACK_IMPORTED_MODULE_7__admin_inventory_inventory_component__["a" /* InventoryComponent */],
                /*canActivate: [AuthGuard],*/
                children: [
                    { path: 'add-new-inventory', component: __WEBPACK_IMPORTED_MODULE_8__admin_inventory_add_new_inventory_add_new_inventory_component__["a" /* AddNewInventoryComponent */], },
                    { path: 'edit-inventory-item/:id', component: __WEBPACK_IMPORTED_MODULE_9__admin_inventory_edit_inventory_item_edit_inventory_item_component__["a" /* EditInventoryItemComponent */],
                        resolve: { inventories: __WEBPACK_IMPORTED_MODULE_37__admin_inventory_inventory_resolver_service__["a" /* InventoryResolverService */] } },
                    { path: 'update-inventory-item/:id', component: __WEBPACK_IMPORTED_MODULE_32__admin_inventory_update_inventory_item_update_inventory_item_component__["a" /* UpdateInventoryItemComponent */],
                        /* canActivate: [AuthGuard],*/
                        resolve: { inventories: __WEBPACK_IMPORTED_MODULE_37__admin_inventory_inventory_resolver_service__["a" /* InventoryResolverService */] } },
                    { path: 'list-view', component: __WEBPACK_IMPORTED_MODULE_28__admin_inventory_inventory_list_view_inventory_list_view_component__["a" /* InventoryListViewComponent */],
                        /* canActivate: [AuthGuard],*/
                        resolve: { inventories: __WEBPACK_IMPORTED_MODULE_37__admin_inventory_inventory_resolver_service__["a" /* InventoryResolverService */] } },
                    { path: 'list-details/:id', component: __WEBPACK_IMPORTED_MODULE_30__admin_inventory_inventory_list_view_inventory_list_details_inventory_list_details_component__["a" /* InventoryListDetailsComponent */],
                        /* canActivate: [AuthGuard],*/
                        resolve: { inventories: __WEBPACK_IMPORTED_MODULE_37__admin_inventory_inventory_resolver_service__["a" /* InventoryResolverService */] } },
                    { path: 'grid-view', component: __WEBPACK_IMPORTED_MODULE_31__admin_inventory_inventory_grid_view_inventory_grid_view_component__["a" /* InventoryGridViewComponent */],
                        /* canActivate: [AuthGuard],*/
                        resolve: { inventories: __WEBPACK_IMPORTED_MODULE_37__admin_inventory_inventory_resolver_service__["a" /* InventoryResolverService */] } },
                    { path: 'grid-details/:id', component: __WEBPACK_IMPORTED_MODULE_29__admin_inventory_inventory_grid_view_inventory_grid_details_inventory_grid_details_component__["a" /* InventoryGridDetailsComponent */],
                        /*  canActivate: [AuthGuard],*/
                        resolve: { inventories: __WEBPACK_IMPORTED_MODULE_37__admin_inventory_inventory_resolver_service__["a" /* InventoryResolverService */] } }
                ] }
        ] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'not-found', component: __WEBPACK_IMPORTED_MODULE_38__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
    },
    { path: '**', redirectTo: '/not-found' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid body-content\">\n  <div class=\"row \">\n    <div class=\"col-md-12\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ".body-content {\n  padding-left: 5vw;\n  padding-right: 5vw;\n  overflow-x: hidden; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_uuid__ = __webpack_require__("./node_modules/ng2-uuid/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular4_carousel__ = __webpack_require__("./node_modules/angular4-carousel/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular4_collapsible__ = __webpack_require__("./node_modules/angular4-collapsible/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_loading__ = __webpack_require__("./node_modules/ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__our_offers_our_offers_component__ = __webpack_require__("./src/app/our-offers/our-offers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__our_offers_our_offers_service__ = __webpack_require__("./src/app/our-offers/our-offers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_data_storage_service__ = __webpack_require__("./src/app/shared/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__contact_us_contact_us_component__ = __webpack_require__("./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__admin_admin_component__ = __webpack_require__("./src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__our_offers_food_items_food_items_component__ = __webpack_require__("./src/app/our-offers/food-items/food-items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__admin_inventory_inventory_component__ = __webpack_require__("./src/app/admin/inventory/inventory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__admin_inventory_add_new_inventory_add_new_inventory_component__ = __webpack_require__("./src/app/admin/inventory/add-new-inventory/add-new-inventory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__admin_inventory_edit_inventory_item_edit_inventory_item_component__ = __webpack_require__("./src/app/admin/inventory/edit-inventory-item/edit-inventory-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__admin_food_item_food_item_component__ = __webpack_require__("./src/app/admin/food-item/food-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__admin_food_item_add_new_food_item_add_new_food_item_component__ = __webpack_require__("./src/app/admin/food-item/add-new-food-item/add-new-food-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__admin_food_item_edit_food_item_edit_food_item_component__ = __webpack_require__("./src/app/admin/food-item/edit-food-item/edit-food-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_search_pipe__ = __webpack_require__("./src/app/shared/search.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__our_offers_filter_pipe__ = __webpack_require__("./src/app/our-offers/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__our_offers_payment_payment_component__ = __webpack_require__("./src/app/our-offers/payment/payment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__our_offers_receipt_receipt_component__ = __webpack_require__("./src/app/our-offers/receipt/receipt.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__admin_tables_tables_component__ = __webpack_require__("./src/app/admin/tables/tables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__admin_tables_add_new_table_add_new_table_component__ = __webpack_require__("./src/app/admin/tables/add-new-table/add-new-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__control_panel_control_panel_component__ = __webpack_require__("./src/app/control-panel/control-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__admin_orders_orders_component__ = __webpack_require__("./src/app/admin/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__admin_orders_order_list_view_order_list_view_component__ = __webpack_require__("./src/app/admin/orders/order-list-view/order-list-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__admin_orders_order_list_view_order_list_view_details_order_list_view_details_component__ = __webpack_require__("./src/app/admin/orders/order-list-view/order-list-view-details/order-list-view-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__admin_orders_order_grid_view_order_grid_view_component__ = __webpack_require__("./src/app/admin/orders/order-grid-view/order-grid-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__admin_orders_order_grid_view_order_grid_view_details_order_grid_view_details_component__ = __webpack_require__("./src/app/admin/orders/order-grid-view/order-grid-view-details/order-grid-view-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__admin_orders_order_pipe__ = __webpack_require__("./src/app/admin/orders/order.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__admin_food_item_fooditem_list_view_fooditem_list_view_component__ = __webpack_require__("./src/app/admin/food-item/fooditem-list-view/fooditem-list-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__admin_food_item_fooditem_grid_view_fooditem_grid_view_component__ = __webpack_require__("./src/app/admin/food-item/fooditem-grid-view/fooditem-grid-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__admin_food_item_fooditem_list_view_list_details_list_details_component__ = __webpack_require__("./src/app/admin/food-item/fooditem-list-view/list-details/list-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__admin_food_item_fooditem_grid_view_grid_details_grid_details_component__ = __webpack_require__("./src/app/admin/food-item/fooditem-grid-view/grid-details/grid-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__admin_inventory_inventory_list_view_inventory_list_view_component__ = __webpack_require__("./src/app/admin/inventory/inventory-list-view/inventory-list-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__admin_inventory_inventory_grid_view_inventory_grid_view_component__ = __webpack_require__("./src/app/admin/inventory/inventory-grid-view/inventory-grid-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__admin_inventory_inventory_list_view_inventory_list_details_inventory_list_details_component__ = __webpack_require__("./src/app/admin/inventory/inventory-list-view/inventory-list-details/inventory-list-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__admin_inventory_inventory_grid_view_inventory_grid_details_inventory_grid_details_component__ = __webpack_require__("./src/app/admin/inventory/inventory-grid-view/inventory-grid-details/inventory-grid-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__admin_inventory_update_inventory_item_update_inventory_item_component__ = __webpack_require__("./src/app/admin/inventory/update-inventory-item/update-inventory-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__admin_tables_edit_table_edit_table_component__ = __webpack_require__("./src/app/admin/tables/edit-table/edit-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__admin_tables_table_resolver_service__ = __webpack_require__("./src/app/admin/tables/table-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__admin_orders_order_resolver_service__ = __webpack_require__("./src/app/admin/orders/order-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__admin_inventory_inventory_resolver_service__ = __webpack_require__("./src/app/admin/inventory/inventory-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__admin_food_item_food_item_resolver_service__ = __webpack_require__("./src/app/admin/food-item/food-item-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__page_not_found_page_not_found_component__ = __webpack_require__("./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__logout_logout_component__ = __webpack_require__("./src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__auth_guard__ = __webpack_require__("./src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__auth_interceptor__ = __webpack_require__("./src/app/auth.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__forbidden_forbidden_component__ = __webpack_require__("./src/app/forbidden/forbidden.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__role_resolver__ = __webpack_require__("./src/app/role-resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__reset_password_reset_password_component__ = __webpack_require__("./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__new_password_new_password_component__ = __webpack_require__("./src/app/new-password/new-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__shared_modified_user_resolver_service__ = __webpack_require__("./src/app/shared/modified-user-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__admin_food_item_add_food_item_image_add_food_item_image_component__ = __webpack_require__("./src/app/admin/food-item/add-food-item-image/add-food-item-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__admin_food_item_edit_food_item_image_edit_food_item_image_component__ = __webpack_require__("./src/app/admin/food-item/edit-food-item-image/edit-food-item-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__shared_user_filter_pipe__ = __webpack_require__("./src/app/shared/user-filter.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__our_offers_our_offers_component__["a" /* OurOffersComponent */],
            __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_13__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_15__contact_us_contact_us_component__["a" /* ContactUsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_20__admin_inventory_inventory_component__["a" /* InventoryComponent */],
            __WEBPACK_IMPORTED_MODULE_19__our_offers_food_items_food_items_component__["a" /* FoodItemsComponent */],
            __WEBPACK_IMPORTED_MODULE_23__admin_food_item_food_item_component__["a" /* FoodItemComponent */],
            __WEBPACK_IMPORTED_MODULE_24__admin_food_item_add_new_food_item_add_new_food_item_component__["a" /* AddNewFoodItemComponent */],
            __WEBPACK_IMPORTED_MODULE_25__admin_food_item_edit_food_item_edit_food_item_component__["a" /* EditFoodItemComponent */],
            __WEBPACK_IMPORTED_MODULE_22__admin_inventory_edit_inventory_item_edit_inventory_item_component__["a" /* EditInventoryItemComponent */],
            __WEBPACK_IMPORTED_MODULE_26__shared_search_pipe__["a" /* SearchPipe */],
            __WEBPACK_IMPORTED_MODULE_27__our_offers_filter_pipe__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_28__our_offers_payment_payment_component__["a" /* PaymentComponent */],
            __WEBPACK_IMPORTED_MODULE_29__our_offers_receipt_receipt_component__["a" /* ReceiptComponent */],
            __WEBPACK_IMPORTED_MODULE_30__admin_tables_tables_component__["a" /* TablesComponent */],
            __WEBPACK_IMPORTED_MODULE_31__admin_tables_add_new_table_add_new_table_component__["a" /* AddNewTableComponent */],
            __WEBPACK_IMPORTED_MODULE_32__control_panel_control_panel_component__["a" /* ControlPanelComponent */],
            __WEBPACK_IMPORTED_MODULE_21__admin_inventory_add_new_inventory_add_new_inventory_component__["a" /* AddNewInventoryComponent */],
            __WEBPACK_IMPORTED_MODULE_33__admin_orders_orders_component__["a" /* OrdersComponent */],
            __WEBPACK_IMPORTED_MODULE_34__admin_orders_order_list_view_order_list_view_component__["a" /* OrderListViewComponent */],
            __WEBPACK_IMPORTED_MODULE_35__admin_orders_order_list_view_order_list_view_details_order_list_view_details_component__["a" /* OrderListViewDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_36__admin_orders_order_grid_view_order_grid_view_component__["a" /* OrderGridViewComponent */],
            __WEBPACK_IMPORTED_MODULE_37__admin_orders_order_grid_view_order_grid_view_details_order_grid_view_details_component__["a" /* OrderGridViewDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_38__admin_orders_order_pipe__["a" /* OrderPipe */],
            __WEBPACK_IMPORTED_MODULE_39__admin_food_item_fooditem_list_view_fooditem_list_view_component__["a" /* FooditemListViewComponent */],
            __WEBPACK_IMPORTED_MODULE_40__admin_food_item_fooditem_grid_view_fooditem_grid_view_component__["a" /* FooditemGridViewComponent */],
            __WEBPACK_IMPORTED_MODULE_41__admin_food_item_fooditem_list_view_list_details_list_details_component__["a" /* ListDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_42__admin_food_item_fooditem_grid_view_grid_details_grid_details_component__["a" /* GridDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_43__admin_inventory_inventory_list_view_inventory_list_view_component__["a" /* InventoryListViewComponent */],
            __WEBPACK_IMPORTED_MODULE_44__admin_inventory_inventory_grid_view_inventory_grid_view_component__["a" /* InventoryGridViewComponent */],
            __WEBPACK_IMPORTED_MODULE_45__admin_inventory_inventory_list_view_inventory_list_details_inventory_list_details_component__["a" /* InventoryListDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_46__admin_inventory_inventory_grid_view_inventory_grid_details_inventory_grid_details_component__["a" /* InventoryGridDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_47__admin_inventory_update_inventory_item_update_inventory_item_component__["a" /* UpdateInventoryItemComponent */],
            __WEBPACK_IMPORTED_MODULE_48__admin_tables_edit_table_edit_table_component__["a" /* EditTableComponent */],
            __WEBPACK_IMPORTED_MODULE_53__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_55__logout_logout_component__["a" /* LogoutComponent */],
            __WEBPACK_IMPORTED_MODULE_59__forbidden_forbidden_component__["a" /* ForbiddenComponent */],
            __WEBPACK_IMPORTED_MODULE_61__reset_password_reset_password_component__["a" /* ResetPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_62__new_password_new_password_component__["a" /* NewPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_64__admin_food_item_add_food_item_image_add_food_item_image_component__["a" /* AddFoodItemImageComponent */],
            __WEBPACK_IMPORTED_MODULE_65__admin_food_item_edit_food_item_image_edit_food_item_image_component__["a" /* EditFoodItemImageComponent */],
            __WEBPACK_IMPORTED_MODULE_66__shared_user_filter_pipe__["a" /* UserFilterPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_uuid__["b" /* UuidModule */],
            __WEBPACK_IMPORTED_MODULE_3_angular4_carousel__["a" /* CarouselModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular4_collapsible__["a" /* CollapsibleModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_loading__["a" /* LoadingModule */],
            __WEBPACK_IMPORTED_MODULE_16__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: ''
            })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__our_offers_our_offers_service__["a" /* OurOffersService */],
            __WEBPACK_IMPORTED_MODULE_11__shared_data_storage_service__["a" /* DataStorageService */],
            __WEBPACK_IMPORTED_MODULE_49__admin_tables_table_resolver_service__["a" /* TableResolverService */],
            __WEBPACK_IMPORTED_MODULE_50__admin_orders_order_resolver_service__["a" /* OrderResolverService */],
            __WEBPACK_IMPORTED_MODULE_51__admin_inventory_inventory_resolver_service__["a" /* InventoryResolverService */],
            __WEBPACK_IMPORTED_MODULE_52__admin_food_item_food_item_resolver_service__["a" /* FoodItemResolverService */],
            __WEBPACK_IMPORTED_MODULE_60__role_resolver__["a" /* RoleResolverService */],
            __WEBPACK_IMPORTED_MODULE_63__shared_modified_user_resolver_service__["a" /* ModifiedUserResolverService */],
            __WEBPACK_IMPORTED_MODULE_54__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_56__auth_guard__["a" /* AuthGuard */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_57__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                useClass: __WEBPACK_IMPORTED_MODULE_58__auth_interceptor__["a" /* AuthInterceptor */],
                multi: true
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('userToken') != null) {
            var roles = next.data['roles'];
            if (roles) {
                var match = this.userService.roleMatch(roles);
                if (match) {
                    return true;
                }
                else {
                    this.router.navigate(['/forbidden']);
                    return false;
                }
            }
            else {
                return true;
            }
        }
        this.router.navigate(['/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "./src/app/auth.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthInterceptor = (function () {
    function AuthInterceptor(router) {
        this.router = router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (req.headers.get('No-Auth') === 'True')
            return next.handle(req.clone());
        if (localStorage.getItem('userToken') != null) {
            var clonedreq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('userToken'))
            });
            return next.handle(clonedreq)
                .do(function (succ) { }, function (err) {
                if (err.status === 401)
                    _this.router.navigateByUrl('/login');
                else
                    (err.status === 403);
                _this.router.navigateByUrl('/forbidden');
            });
        }
        else {
            this.router.navigateByUrl('/login');
        }
    };
    return AuthInterceptor;
}());
AuthInterceptor = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthInterceptor);

var _a;
//# sourceMappingURL=auth.interceptor.js.map

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12 c-office\">\n    Corporate Office\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-8 c-office-details\">\n    Level 4, Software Technology Park,<br>\n    Janata Tower, Karwaan Bazar, Dhaka-1215\n  </div>\n  <div class=\"col-md-4\">\n    <button onclick=\"window.open('https://www.facebook.com/HeadBlocks/')\" class=\"loginBtn loginBtn--facebook\">\n      Like us on Facebook\n    </button>\n\n    <button onclick=\"window.open('https://www.facebook.com/HeadBlocks/')\" class=\"loginBtn loginBtn--google\">\n      Follow us on Google\n    </button>\n  </div>\n</div>\n\n\n<div class=\"row\">\n  <div class=\"col-md-12 map\">\n    <agm-map  [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\"  >\n      <agm-marker  [latitude]=\"lat\" [longitude]=\"lng\">\n      </agm-marker>\n    </agm-map>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.scss":
/***/ (function(module, exports) {

module.exports = ".c-office {\n  font-family: \"Times New Roman\";\n  font-size: 30px;\n  color: #b40000;\n  margin-top: 20px;\n  padding-left: 20px; }\n\n.c-office-details {\n  font-family: \"Times New Roman\";\n  font-size: 17px;\n  color: #b40000;\n  margin-top: 20px;\n  padding-left: 20px; }\n\nagm-map {\n  height: 395px;\n  width: 87%; }\n\n.map {\n  margin-top: 40px;\n  padding-left: 20px; }\n\nbody {\n  padding: 2em; }\n\n/* Shared */\n\n.loginBtn {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: relative;\n  /* width: 13em;  - apply for fixed size */\n  margin: 0.2em;\n  padding: 0 15px 0 46px;\n  border: none;\n  text-align: left;\n  line-height: 34px;\n  white-space: nowrap;\n  border-radius: 0.2em;\n  font-size: 16px;\n  color: #FFF; }\n\n.loginBtn:before {\n  content: \"\";\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 34px;\n  height: 100%; }\n\n.loginBtn:focus {\n  outline: none; }\n\n.loginBtn:active {\n  -webkit-box-shadow: inset 0 0 0 32px rgba(0, 0, 0, 0.1);\n          box-shadow: inset 0 0 0 32px rgba(0, 0, 0, 0.1); }\n\n/* Facebook */\n\n.loginBtn--facebook {\n  background-color: #4C69BA;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#4C69BA), to(#3B55A0));\n  background-image: linear-gradient(#4C69BA, #3B55A0);\n  /*font-family: \"Helvetica neue\", Helvetica Neue, Helvetica, Arial, sans-serif;*/\n  text-shadow: 0 -1px 0 #354C8C; }\n\n.loginBtn--facebook:before {\n  border-right: #364e92 1px solid;\n  background: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png\") 6px 6px no-repeat; }\n\n.loginBtn--facebook:hover,\n.loginBtn--facebook:focus {\n  background-color: #5B7BD5;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#5B7BD5), to(#4864B1));\n  background-image: linear-gradient(#5B7BD5, #4864B1); }\n\n/* Google */\n\n.loginBtn--google {\n  /*font-family: \"Roboto\", Roboto, arial, sans-serif;*/\n  background: #DD4B39; }\n\n.loginBtn--google:before {\n  border-right: #BB3F30 1px solid;\n  background: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png\") 6px 6px no-repeat; }\n\n.loginBtn--google:hover,\n.loginBtn--google:focus {\n  background: #E74B37; }\n"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactUsComponent = (function () {
    function ContactUsComponent() {
        this.lat = 23.754093;
        this.lng = 90.393267;
        this.zoom = 18;
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    return ContactUsComponent;
}());
ContactUsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contact-us',
        template: __webpack_require__("./src/app/contact-us/contact-us.component.html"),
        styles: [__webpack_require__("./src/app/contact-us/contact-us.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ContactUsComponent);

//# sourceMappingURL=contact-us.component.js.map

/***/ }),

/***/ "./src/app/control-panel/control-panel.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-logout></app-logout>\n\n\n\n<div class=\"row dashboard\">\n  <a routerLink=\"/our-offers/regulars\">\n    <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 pos\">\n      Point of Sale <i class=\"fa fa-shopping-cart cart\" aria-hidden=\"true\"></i>\n    </div>\n  </a>\n  <a routerLink=\"/admin/food-item/grid-view\">\n    <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 admin\">\n    Administration <i class=\"fa fa-user-circle\" aria-hidden=\"true\"></i>\n    </div>\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/app/control-panel/control-panel.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Acme|Aladin|Berkshire+Swash|Cabin+Sketch|Chewy|Fredoka+One|Kanit|Lobster|Londrina+Solid|Righteous|Rock+Salt\");\n.hodoo {\n  font-family: 'Berkshire Swash', cursive;\n  font-size: 100px;\n  padding-left: 38px;\n  text-align: center;\n  color: #7e0000;\n  padding-top: 40px; }\n.hodoo:focus {\n  outline: 0; }\n.pos, .admin {\n  font-family: \"Berlin Sans FB\";\n  font-size: 4vmax;\n  text-align: center;\n  color: #aa0909; }\n.pos:hover, .admin:hover {\n  color: #6a0d0e; }\n.log-out {\n  text-align: right;\n  padding-top: 20px; }\n.btn-primary {\n  background-color: #9c0000;\n  color: white; }\n.btn-primary:hover {\n  background-color: #7f0000;\n  color: white; }\n.btn-primary:focus {\n  outline: 0; }\n.dashboard {\n  padding-top: 120px; }\n"

/***/ }),

/***/ "./src/app/control-panel/control-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__our_offers_our_offers_service__ = __webpack_require__("./src/app/our-offers/our-offers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ControlPanelComponent = (function () {
    function ControlPanelComponent(_ourOfferService, route, router, userService) {
        this._ourOfferService = _ourOfferService;
        this.route = route;
        this.router = router;
        this.userService = userService;
    }
    ControlPanelComponent.prototype.ngOnInit = function () {
        this.userName
            = JSON.parse(JSON.stringify(localStorage.getItem('userName')));
    };
    ControlPanelComponent.prototype.logOut = function () {
        localStorage.removeItem('userToken');
        localStorage.removeItem('userName');
        this.router.navigate(['/login']);
    };
    return ControlPanelComponent;
}());
ControlPanelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-control-panel',
        template: __webpack_require__("./src/app/control-panel/control-panel.component.html"),
        styles: [__webpack_require__("./src/app/control-panel/control-panel.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__our_offers_our_offers_service__["a" /* OurOffersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__our_offers_our_offers_service__["a" /* OurOffersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _d || Object])
], ControlPanelComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=control-panel.component.js.map

/***/ }),

/***/ "./src/app/forbidden/forbidden.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"\n  col-lg-12\n  col-md-12\n  col-sm-12\n  col-xs-12\n  not-found\">\n    You have no permission to view this page!\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/forbidden/forbidden.component.scss":
/***/ (function(module, exports) {

module.exports = ".not-found {\n  font-family: \"Times New Roman\";\n  font-size: 4.2vw;\n  color: #6a0d0e;\n  text-align: center;\n  padding-top: 30vh; }\n"

/***/ }),

/***/ "./src/app/forbidden/forbidden.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForbiddenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForbiddenComponent = (function () {
    function ForbiddenComponent() {
    }
    ForbiddenComponent.prototype.ngOnInit = function () {
    };
    return ForbiddenComponent;
}());
ForbiddenComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-forbidden',
        template: __webpack_require__("./src/app/forbidden/forbidden.component.html"),
        styles: [__webpack_require__("./src/app/forbidden/forbidden.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ForbiddenComponent);

//# sourceMappingURL=forbidden.component.js.map

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12 hodoo\">\n    hodoo\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12 header\">\n    User Login\n  </div>\n</div>\n\n<div class=\"row small\">\n  <div class=\"col-lg-offset-4 col-md-offset-4 col-sm-offset-3\n    col-lg-4 col-md-4 col-sm-6 col-xs-12\">\n    <form #userLoginForm=\"ngForm\" (ngSubmit)=\"OnSubmit(UserName.value,Password.value)\">\n      <div class=\"row\">\n        <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12 form-group\">\n          <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\n            <label\n            >User Name</label>\n          </div>\n          <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\n            <input class=\"validate form-control\"\n                   type=\"text\"\n                   name=\"UserName\"\n                   #UserName\n                   ngModel\n                   required>\n          </div>\n        </div>\n      </div>\n\n        <div class=\"row\">\n        <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12 form-group\">\n          <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\n            <label\n              [attr.data-error]=\"Password.errors!=null?(Password.errors.required?\n            'Required field!':'Minimum 3 characters needed'):''\">Password</label>\n          </div>\n          <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\n            <input\n              class=\"validate form-control\"\n              type=\"password\"\n              name=\"Password\"\n              #Password\n              ngModel\n              required\n              minlength=\"3\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12 forgot-password\">\n          <a routerLink=\"/reset-password\">Forgot your password?</a>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12 button\">\n          <button [disabled]=\"!userLoginForm.valid\"\n                  class=\"btn btn-primary\"\n                  type=\"submit\">\n            Login</button>\n\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Acme|Aladin|Berkshire+Swash|Cabin+Sketch|Chewy|Fredoka+One|Kanit|Lobster|Londrina+Solid|Righteous|Rock+Salt\");\n.hodoo {\n  font-family: 'Berkshire Swash', \"Times New Roman\", \"Arial Narrow\";\n  font-size: 7vw;\n  text-align: center;\n  color: #7e0000;\n  padding-top: 5vh; }\n.hodoo:focus {\n  outline: 0; }\n.header {\n  text-align: center;\n  font-size: 2.4vw;\n  font-family: \"Times New Roman\";\n  padding-top: 2vh;\n  padding-bottom: 2vh;\n  color: #680000; }\nlabel {\n  font-size: 16px;\n  font-family: \"Arial Narrow\";\n  color: #6b0000;\n  font-weight: normal; }\n.btn-primary {\n  background-color: #9c0000;\n  color: white; }\n.btn-primary:hover {\n  background-color: #7f0000;\n  color: white; }\n.btn-primary:focus {\n  outline: 0; }\n.button {\n  text-align: center; }\ninput {\n  font-size: 14px; }\na {\n  color: #950000;\n  font-size: 14px;\n  font-family: \"Arial Narrow\";\n  text-decoration: none;\n  font-weight: bold; }\na:hover {\n  color: #6b0000; }\n.forgot-password {\n  text-align: center;\n  padding-bottom: 20px; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.isLoginError = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.OnSubmit = function (userName, password) {
        var _this = this;
        this.userService.userAuthentication(userName, password).subscribe(function (data) {
            console.log(data.json().access_token);
            console.log(data.json().role);
            localStorage.setItem('userToken', data.json().access_token);
            localStorage.setItem('userRoles', data.json().role);
            localStorage.setItem('userName', userName);
            if (_this.userService.roleMatch(['Cashier'])) {
                _this.router.navigate(['our-offers/regulars']);
            }
            else {
                _this.router.navigate(['/control-panel']);
            }
        }, function (err) {
            _this.isLoginError = true;
            if (_this.isLoginError === true) {
                alert('Incorrect username or password');
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("./src/app/login/login.component.html"),
        styles: [__webpack_require__("./src/app/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"row main-row\">\n  <div class=\"\n  col-lg-1\n  col-md-1\n  col-sm-12\n  col-xs-12\n  hodoo\">\n    hodoo\n  </div>\n  <div class=\"\n  col-md-offset-6\n   col-lg-offset-6\n   col-lg-4\n   col-md-4\n   col-sm-6\n   col-xs-6\n   user\">\n    <i class=\"fa fa-user-o\" aria-hidden=\"true\"></i> <!--{{ userName }}--> Admin4\n  </div>\n  <div class=\"\n  col-lg-1\n   col-md-1\n   col-sm-6\n   col-xs-6\n   log-out\">\n    <button class=\"logout-button\" (click)=\"logOut()\">Logout</button>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/logout/logout.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Acme|Aladin|Berkshire+Swash|Cabin+Sketch|Chewy|Fredoka+One|Kanit|Lobster|Londrina+Solid|Righteous|Rock+Salt\");\n.log-out {\n  text-align: right;\n  padding-top: 10px;\n  font-family: \"Times New Roman\"; }\n.logout-button {\n  max-width: 100%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #ae0000;\n  background-color: white;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold; }\n.logout-button:hover {\n  background-color: #ae0000;\n  color: white;\n  font-family: \"Arial Narrow\";\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  border: 1.2px solid #ffffdf;\n  border-radius: 5px; }\n.logout-button:focus {\n  outline: 0; }\n.user {\n  text-align: right;\n  padding-top: 10px;\n  font-family: \"Times New Roman\";\n  color: rgba(127, 0, 0, 0.93);\n  font-size: 20px;\n  font-weight: bold; }\n.hodoo {\n  font-family: 'Berkshire Swash', cursive;\n  font-size: 50px;\n  text-align: right;\n  color: #7e0000; }\n.hodoo:focus {\n  outline: 0; }\n.main-row {\n  border-bottom: 2px double #dfdfdf; }\n@media screen and (min-width: 320px) and (max-width: 991px) {\n  .hodoo {\n    font-family: 'Berkshire Swash', \"Times New Roman\", \"Berlin Sans FB\";\n    font-size: 50px;\n    text-align: center;\n    color: #7e0000; }\n  .log-out {\n    text-align: right;\n    padding-top: 10px;\n    font-family: \"Times New Roman\"; }\n  .user {\n    text-align: left;\n    padding-top: 10px;\n    font-family: \"Times New Roman\";\n    color: rgba(127, 0, 0, 0.93);\n    font-size: 20px;\n    font-weight: bold; } }\n@media screen and (max-width: 400px) {\n  .hodoo {\n    font-family: 'Berkshire Swash', \"Times New Roman\", \"Berlin Sans FB\";\n    font-size: 30px;\n    text-align: center;\n    color: #7e0000; }\n  .log-out {\n    text-align: right;\n    font-family: \"Times New Roman\"; }\n  .user {\n    text-align: left;\n    font-family: \"Times New Roman\";\n    color: rgba(127, 0, 0, 0.93);\n    font-size: 12px;\n    font-weight: bold; }\n  .logout-button {\n    max-width: 100%;\n    height: 100%;\n    font-family: \"Arial Narrow\";\n    color: #ae0000;\n    background-color: white;\n    border: 1px solid #ae0000;\n    border-radius: 2px;\n    font-size: 10px;\n    padding-top: 2px;\n    padding-bottom: 2px;\n    font-weight: bold;\n    text-align: center; }\n  .logout-button:hover {\n    background-color: #ae0000;\n    color: white;\n    font-family: \"Arial Narrow\";\n    font-weight: bold;\n    border: 1px solid #ffffdf;\n    border-radius: 2px; }\n  .logout-button:focus {\n    outline: 0; } }\n@media screen and (min-width: 992px) and (max-width: 1199px) {\n  .user {\n    text-align: right;\n    font-family: \"Times New Roman\";\n    color: rgba(127, 0, 0, 0.93);\n    font-size: 19px;\n    font-weight: bold; }\n  .logout-button {\n    max-width: 100%;\n    height: 100%;\n    font-family: \"Arial Narrow\";\n    color: #ae0000;\n    background-color: white;\n    border: 1px solid #ae0000;\n    border-radius: 2px;\n    font-size: 1vw;\n    padding-top: 4px;\n    padding-bottom: 4px;\n    font-weight: bold;\n    text-align: center; }\n  .logout-button:hover {\n    background-color: #ae0000;\n    color: white;\n    font-family: \"Arial Narrow\";\n    font-weight: bold;\n    border: 1px solid #ffffdf;\n    border-radius: 2px; }\n  .logout-button:focus {\n    outline: 0; } }\n"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = (function () {
    function LogoutComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.userName
            = JSON.parse(JSON.stringify(localStorage.getItem('userName')));
    };
    LogoutComponent.prototype.logOut = function () {
        localStorage.removeItem('userToken');
        localStorage.removeItem('userName');
        this.router.navigate(['/login']);
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-logout',
        template: __webpack_require__("./src/app/logout/logout.component.html"),
        styles: [__webpack_require__("./src/app/logout/logout.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _b || Object])
], LogoutComponent);

var _a, _b;
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ "./src/app/new-password/new-password.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12 hodoo\">\n    hodoo\n  </div>\n</div>\n\n\n\n<div class=\"row\">\n  <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12 main\">\n\n    <form #newPassword=\"ngForm\" (ngSubmit)=\"resetPassword(newPassword)\">\n      <div class=\"row space\">\n\n        <div class=\"col-lg-offset-4 col-md-offset-4 col-sm-offset-4 col-xs-offset-2\n       col-lg-4 col-md-4 col-sm-4 col-xs-8 space\">\n          <label>Enter reset code</label>\n          <input class=\"form-control\"\n                 type=\"text\"\n                 name=\"code\"\n                 #code\n                 ngModel\n                 required>\n        </div>\n      </div>\n      <div class=\"row\">\n\n        <div class=\"col-lg-offset-4 col-md-offset-4 col-sm-offset-4 col-xs-offset-2\n       col-lg-4 col-md-4 col-sm-4 col-xs-8 space\">\n          <label>New password</label>\n          <input class=\"form-control\"\n                 type=\"password\"\n                 name=\"password\"\n                 #password\n                 ngModel\n                 required>\n        </div>\n      </div>\n      <div class=\"row\">\n\n        <div class=\"col-lg-offset-4 col-md-offset-4 col-sm-offset-4 col-xs-offset-2\n       col-lg-4 col-md-4 col-sm-4 col-xs-8 space\">\n          <label>Confirm new password</label>\n          <input class=\"form-control\"\n                 type=\"password\"\n                 name=\"confirmPassword\"\n                 #confirmPassword\n                 ngModel\n                 required>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-offset-4 col-md-offset-4 col-sm-offset-4 col-xs-offset-2\n       col-lg-4 col-md-4 col-sm-4 col-xs-8 button\">\n          <button\n            class=\"btn btn-primary \"\n            type=\"submit\"\n            [disabled]=\"!newPassword.valid\"\n          >Reset Password</button>\n        </div>\n      </div>\n    </form>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/new-password/new-password.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Acme|Aladin|Berkshire+Swash|Cabin+Sketch|Chewy|Fredoka+One|Kanit|Lobster|Londrina+Solid|Righteous|Rock+Salt\");\n.hodoo {\n  font-family: 'Berkshire Swash', \"Times New Roman\", \"Arial Narrow\";\n  font-size: 7vw;\n  text-align: center;\n  color: #7e0000;\n  padding-top: 5vh; }\n.hodoo:focus {\n  outline: 0; }\nlabel {\n  font-size: 16px;\n  font-family: \"Arial Narrow\";\n  color: #6b0000;\n  font-weight: normal; }\n.btn-primary {\n  background-color: #9c0000;\n  color: white; }\n.btn-primary:hover {\n  background-color: #7f0000;\n  color: white; }\n.btn-primary:focus {\n  outline: 0; }\ninput {\n  font-size: 14px; }\na {\n  color: #950000;\n  font-size: 14px;\n  font-family: \"Arial Narrow\";\n  text-decoration: none;\n  font-weight: bold; }\na:hover {\n  color: #6b0000; }\n.button {\n  text-align: center;\n  padding-top: 20px; }\n.main {\n  padding-top: 20px; }\n.space {\n  padding-top: 3px;\n  padding-bottom: 3px; }\n"

/***/ }),

/***/ "./src/app/new-password/new-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewPasswordComponent = (function () {
    function NewPasswordComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    NewPasswordComponent.prototype.ngOnInit = function () {
    };
    NewPasswordComponent.prototype.resetPassword = function (form) {
        var _this = this;
        if (form.value.password !== form.value.confirmPassword) {
            alert('Your password did not match!');
            form.controls['password'].reset();
            form.controls['confirmPassword'].reset();
        }
        else {
            this.userService.newPassword(form.value.password, form.value.code)
                .subscribe(function (data) {
                console.log(data.json());
                if (data.json() === 'Successful') {
                    alert('password changed successfully! You can login now.');
                    _this.router.navigate(['/login']);
                }
                else {
                    alert('Incorrect reset code! Try again.');
                }
            });
        }
    };
    return NewPasswordComponent;
}());
NewPasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-new-password',
        template: __webpack_require__("./src/app/new-password/new-password.component.html"),
        styles: [__webpack_require__("./src/app/new-password/new-password.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NewPasswordComponent);

var _a, _b;
//# sourceMappingURL=new-password.component.js.map

/***/ }),

/***/ "./src/app/our-offers/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (foodItems, term) {
        if (term === undefined) {
            return foodItems;
        }
        return foodItems.filter(function (foodItem) {
            return foodItem.Name.toLowerCase()
                .includes(term.toLowerCase());
        });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'filter'
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "./src/app/our-offers/food-items/food-items.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row empty\" *ngIf=\"total === 0; else notEmpty\">\n  <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\n  No item is available\n  </div>\n</div>\n\n<ng-template #notEmpty>\n\n<div class=\"row\">\n  <div class=\"col-lg-3 col-md-3 food-body\">\n      <i class=\"fa fa-search\"></i>\n      <input class=\"box\" type=\"text\" [(ngModel)]=\"term\" placeholder=\"Search Products...\">\n  </div>\n</div>\n\n\n\n\n<div class=\"row left\">\n    <div class=\"col-lg-4 col-md-4\"\n         *ngFor=\"let foodItems of FoodItem | filter:term\n        ; let i = index\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 col-md-8 name\">\n       SN-{{ foodItems.SerialNo }}.   {{ foodItems.Name }}\n        </div>\n        <div class=\"col-lg-4 col-md-4 price\">\n          {{ foodItems.Price }} BDT\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12 \">\n          <img [src]=\"foodItems.FoodItemImage\"\n               class=\"image\"\n          >\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-4 col-md-4\">\n          <button\n            class=\"all-categories-button\"\n            (click)=\"UpdateCart(foodItems.Id, foodItems.Price,\n            foodItems.Name, foodItems.SerialNo, foodItems.MakingCost, true, i)\">\n            Add\n          </button>\n        </div>\n        <div class=\"col-lg-4 col-md-4 input-box\">\n          <input type=\"number\"\n                 min=\"1\"\n                 id=\"amount\"\n                 class=\"form-control\"\n                 [(ngModel)]=\"selectedQuantity[i]\"\n                 #amountInput\n          >\n        </div>\n        <div class=\"col-lg-4 col-md-4\">\n          <button\n            class=\"all-categories-button\"\n            (click)=\"UpdateCart(foodItems.Id, foodItems.Price,foodItems.Name,\n             foodItems.MakingCost, false, i)\">\n            Remove\n          </button>\n        </div>\n      </div>\n    </div>\n</div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/our-offers/food-items/food-items.component.scss":
/***/ (function(module, exports) {

module.exports = ".all-categories-button {\n  width: 100%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #d32039;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: 5px;\n  font-size: 1vw;\n  padding-top: 1vh;\n  padding-bottom: 1vh;\n  font-weight: bold; }\n\n.all-categories-button:hover {\n  background-color: #d32039;\n  color: #ffffdf;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  border: 1.2px solid #ffffdf;\n  border-radius: 5px; }\n\n.all-categories-button:focus {\n  outline: 0; }\n\n.name {\n  color: #8e0017;\n  font-family: \"Times New Roman\";\n  text-align: left;\n  font-size: 1vw;\n  padding-top: 1vh;\n  font-weight: bold; }\n\n.price {\n  color: #8e0017;\n  font-family: \"Times New Roman\";\n  text-align: right;\n  font-size: 1vw;\n  padding-top: 1vh;\n  font-weight: bold; }\n\n.image {\n  border: 1px solid ghostwhite;\n  border-radius: 10px;\n  height: 36vh;\n  width: 100%; }\n\n.food-body {\n  position: fixed;\n  z-index: 999;\n  background-color: ghostwhite;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  margin-top: -2px; }\n\n.left {\n  height: 70vh;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: auto;\n  margin-top: 50px; }\n\n.fa-search {\n  position: absolute;\n  padding-top: 1.4vh;\n  padding-left: .9vw;\n  font-size: 1vw; }\n\n.box {\n  width: 20vw;\n  height: 4.5vh;\n  background: #fcfcfc;\n  border: .15vw solid #9c0000;\n  border-radius: 9vw;\n  text-indent: 2.1vw;\n  color: #9c0000;\n  font-size: .9vw;\n  font-family: \"Lato\",\"Lucida Grande\", \"Helvetica\", \"Verdana\", \"Arial\"; }\n\n.box:focus {\n  outline: 0; }\n\n::-webkit-scrollbar {\n  width: 4px; }\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px; }\n\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.61);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n\n.empty {\n  font-family: \"Times New Roman\";\n  color: #630606;\n  font-size: 1.5vw;\n  font-weight: bold;\n  padding-top: 3vh;\n  text-align: center; }\n\ninput {\n  height: 4.8vh;\n  font-size: 1vw; }\n\n.input-box {\n  padding-right: 0;\n  padding-left: 0; }\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0; }\n"

/***/ }),

/***/ "./src/app/our-offers/food-items/food-items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodItemsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__our_offers_service__ = __webpack_require__("./src/app/our-offers/our-offers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_ordered_items_model__ = __webpack_require__("./src/app/shared/ordered-items.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_uuid__ = __webpack_require__("./node_modules/ng2-uuid/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FoodItemsComponent = (function () {
    function FoodItemsComponent(_ourOfferService, uuid) {
        this._ourOfferService = _ourOfferService;
        this.uuid = uuid;
        this.FoodItem = [];
        this.inventories = [];
        this.selectedQuantity = [];
        this.condition = false;
        this.uuidCodeOne = '';
        this.uuidCodeTwo = '';
        this.uuidCodeThree = '';
        this.imageUrl = '/assets/noImage.png';
        this.rootUrl = 'http://localhost:1548/Content/';
        this.uuidCodeOne = this.uuid.v1();
        this.uuidCodeTwo = this.uuid.v1();
        this.uuidCodeThree = this.uuid.v1();
    }
    FoodItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.FoodItem = this._ourOfferService.FoodItem;
        this._ourOfferService.foodItemChanged
            .subscribe(function (FoodItem) {
            _this.FoodItem = FoodItem;
        });
        this.inventories = this._ourOfferService.inventory;
        this.subscription = this._ourOfferService.inventoryChanged
            .subscribe(function (inventories) {
            _this.inventories = inventories;
        });
        this.total = this.FoodItem.length;
        for (var i = 0; i < this.FoodItem.length; i++) {
            if (this.FoodItem[i].FoodItemImage === null || this.FoodItem[i].FoodItemImage === '') {
                this.FoodItem[i].FoodItemImage = this.imageUrl;
            }
            else {
                this.FoodItem[i].FoodItemImage = this.rootUrl + this.FoodItem[i].FoodItemImage;
            }
        }
    };
    FoodItemsComponent.prototype.UpdateCart = function (id, price, name, serialNo, makingCost, isAdd, index) {
        this.quantity = this.selectedQuantity[index];
        if (this.quantity > 0) {
            var foodItemId = id;
            var foodItemName = name;
            var Price = price;
            var orderId = null;
            if (this._ourOfferService.checkIfOrderedItemExist(id, orderId) === null) {
                var orderItemId = this.uuid.v1();
                if (isAdd === true) {
                    this.AddToCart(orderItemId, orderId, this.quantity, foodItemId, foodItemName, serialNo, Price, makingCost);
                }
                else {
                    this.RemoveFromCart(orderItemId, orderId, this.quantity, foodItemId, foodItemName, Price, makingCost);
                }
            }
            else {
                var orderItemId = this._ourOfferService.checkIfOrderedItemExist(id, orderId);
                if (isAdd === true) {
                    this.AddToCart(orderItemId, orderId, this.quantity, foodItemId, foodItemName, serialNo, Price, makingCost);
                }
                else {
                    this.RemoveFromCart(orderItemId, orderId, this.quantity, foodItemId, foodItemName, Price, makingCost);
                }
            }
        }
    };
    FoodItemsComponent.prototype.AddToCart = function (orderItemId, orderId, quantity, foodItemId, foodItemName, serialNo, price, makingCost) {
        for (var j = 0; j < this.FoodItem.length; j++) {
            if (this.FoodItem[j].Id === foodItemId) {
                var check = 0;
                for (var k = 0; k < this.FoodItem[j].Ingredients.length; k++) {
                    var inventoryQuantity = this.FoodItem[j].Ingredients[k].Quantity;
                    var totalQuantity = inventoryQuantity * quantity;
                    var inventoryId = this.FoodItem[j].Ingredients[k].InventoryId;
                    for (var l = 0; l < this.inventories.length; l++) {
                        if (this._ourOfferService.inventory[l].Id === inventoryId) {
                            if (this._ourOfferService.inventory[l].RemainingQuantity > totalQuantity) {
                                check++;
                                if (check === this.FoodItem[j].Ingredients.length) {
                                    this._ourOfferService.inventory[l].RemainingQuantity -= totalQuantity;
                                    var subTotal = this._ourOfferService.FoodItemSubTotalPrice(price, quantity);
                                    this._ourOfferService.grandTotalPrice(subTotal);
                                    this.condition = this._ourOfferService.checkExistingFoodItem(foodItemId);
                                    if (this.condition) {
                                        this._ourOfferService.increaseOnExistingFoodItem(foodItemId, quantity, subTotal);
                                    }
                                    else {
                                        var purchasedFood = new __WEBPACK_IMPORTED_MODULE_2__shared_ordered_items_model__["a" /* OrderedItems */](orderItemId, orderId, foodItemId, quantity, foodItemName, serialNo, price, subTotal, makingCost);
                                        this._ourOfferService.addToOrderedItemsList(purchasedFood);
                                    }
                                    this._ourOfferService.totalQuantity
                                        = Number.parseInt(this._ourOfferService.totalQuantity.toString())
                                            + Number.parseInt(quantity.toString());
                                }
                            }
                        }
                    }
                }
                if (check < this.FoodItem[j].Ingredients.length) {
                    alert('Insufficient inventory, please update your inventory first');
                }
                break;
            }
        }
    };
    FoodItemsComponent.prototype.RemoveFromCart = function (orderItemId, orderId, quantity, foodItemId, foodItemName, price, makingCost) {
        var subTotal = this._ourOfferService.FoodItemSubTotalPrice(price, quantity);
        this._ourOfferService.removeFromFoodItemCart(foodItemId, quantity, subTotal);
    };
    return FoodItemsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('amountInput'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], FoodItemsComponent.prototype, "amountInputRef", void 0);
FoodItemsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-food-items',
        template: __webpack_require__("./src/app/our-offers/food-items/food-items.component.html"),
        styles: [__webpack_require__("./src/app/our-offers/food-items/food-items.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__our_offers_service__["a" /* OurOffersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__our_offers_service__["a" /* OurOffersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_uuid__["a" /* Uuid */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_uuid__["a" /* Uuid */]) === "function" && _c || Object])
], FoodItemsComponent);

var _a, _b, _c;
//# sourceMappingURL=food-items.component.js.map

/***/ }),

/***/ "./src/app/our-offers/our-offers.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-logout></app-logout>\n\n<div class=\"row\">\n  <div class=\"col-lg-9 col-md-9\">\n    <app-food-items></app-food-items>\n  </div>\n\n\n\n  <div class=\"col-lg-3 col-md-3\">\n    <div class=\"row dashboard\" *ngIf=\"checkOut === true\">\n      <div class=\"col-lg-12 col-md-12\"\n           (click)=\"goToDashboard()\" >\n        Back to Dashboard\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 note\">\n        Add or Remove Here Quickly\n      </div>\n    </div>\n    <div class=\"row other-adding-option\">\n      <div class=\"col-lg-6 col-md-6 serial\">\n        <input\n          type=\"text\"\n          id=\"serial\"\n          class=\"form-control\"\n          name=\"serial\"\n          required\n          placeholder=\"Enter serial no\"\n          #serial\n        >\n      </div>\n      <div class=\"col-lg-6 col-md-6 quantity\">\n        <input\n          type=\"number\"\n          min=\"1\"\n          id=\"quantity\"\n          name=\"quantity\"\n          class=\"form-control\"\n          required\n          placeholder=\"Enter quantity\"\n          #quantity\n        >\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-6 col-md-6 add\">\n        <button\n\n          class=\"add-remove-button\"\n          (click)=\"add()\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\n           Add</button>\n      </div>\n      <div class=\"col-lg-6 col-md-6 remove\">\n        <button\n          class=\"add-remove-button\"\n          (click)=\"remove()\"><i class=\"fa fa-minus-circle\" aria-hidden=\"true\"></i>\n        Remove </button>\n      </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12 cart-empty\" *ngIf=\"grandTotal==0; else itemIsSold\">\n          <div class=\"col-lg-12 col-md-12 icon\">\n            <i class=\"fa fa-shopping-cart\"></i>\n          </div>\n          <div class=\"col-lg-12 col-md-12 text\">\n            Your food cart is empty!\n          </div>\n        </div>\n    </div>\n\n\n      <ng-template #itemIsSold>\n        <div class=\"whole\" >\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-md-12 your-purchased-Foods\">\n            Your purchased foods:\n          </div>\n        </div>\n          <div class=\"cash-memo\" >\n       <div class=\"row\">\n         <div *ngIf=\"checkFoodItemCount()!=0\">\n        <div class=\"row list-detail\" *ngFor=\"let order of orderedItems; let i = index\">\n              <div *ngIf=\"order.FoodItemQuantity !== 0\">\n                <div class=\"row\">\n                  <div class=\"col-lg-offset-1 col-md-offset-1 col-lg-7 col-md-7 name\">\n                   {{ i+1 }}. {{ order.FoodItemName }}  (SN-{{ order.FoodItemSerialNo }})\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 sub-total\">\n                    {{ order.FoodItemSubTotal }} BDT\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-offset-1 col-lg-8 col-md-offset-1 col-md-8 quantity\">\n                    {{ order.FoodItemQuantity }} Unit(s) at {{ order.Price }} BDT/Unit(s)\n                  </div>\n                  <div class=\"col-lg-1 col-md-1\">\n                    <i\n                      title=\"Remove this ordered item\"\n                      style=\"cursor: pointer\"\n                      (click)=\"removeFromCart(i)\"\n                      class=\"fa fa-times-circle-o remove-order\"\n                      aria-hidden=\"true\"></i>\n                  </div>\n                </div>\n              <hr class=\"content\">\n              </div>\n            </div>\n          </div>\n\n          </div>\n          </div>\n         <div class=\"row\">\n           <div class=\"col-lg-12 col-md-12 grand-total\">\n             Total Price: {{ grandTotal }} BDT\n           </div>\n         </div>\n\n\n         <div class=\"row cash-memo-buttons\">\n           <div class=\"col-lg-6 col-md-6 confirm-div\">\n             <button class=\"confirm-purchase\" (click)=\"AddToOrderedList()\">Payment</button>\n           </div>\n           <div class=\"col-lg-6 col-md-6 discard-div\">\n             <button class=\"confirm-purchase\" (click)=\"discardOrder()\">Discard</button>\n           </div>\n         </div>\n\n        </div>\n      </ng-template>\n    </div>\n  </div>\n\n\n\n"

/***/ }),

/***/ "./src/app/our-offers/our-offers.component.scss":
/***/ (function(module, exports) {

module.exports = ".buttons {\n  padding-right: 0px;\n  padding-left: 0px;\n  padding-top: 10px; }\n\n.add-remove-button {\n  width: 100%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #a50f10;\n  background-color: #ffffdf;\n  border: 1.2px solid #a50f10;\n  border-radius: 5px;\n  font-size: 1vw;\n  padding-top: 1vh;\n  padding-bottom: 1vh;\n  margin-top: 5px;\n  font-weight: bold;\n  text-align: center; }\n\n.add-remove-button:hover {\n  background-color: #a50f10;\n  color: #ffffdf;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  border: 1.2px solid #ffffdf;\n  border-radius: 5px; }\n\n.add-remove-button:focus {\n  outline: 0; }\n\n.text {\n  color: #7e0000;\n  font-size: 1.4vw;\n  text-align: center;\n  font-family: \"Times New Roman\";\n  font-weight: bold;\n  opacity: 0.3; }\n\n.icon {\n  font-size: 5vw;\n  text-align: center; }\n\n.fa-shopping-cart {\n  color: #7e0000;\n  opacity: 0.3; }\n\n.your-purchased-Foods {\n  padding-top: 1px;\n  color: #7e0000;\n  font-size: 1.1vw;\n  font-family: \"Times New Roman\";\n  font-weight: bold;\n  padding-bottom: 10px;\n  text-align: center; }\n\n.list-detail {\n  padding-top: 1px;\n  color: #7e0000;\n  font-size: .9vw;\n  font-family: \"Times New Roman\";\n  font-weight: bold; }\n\nhr {\n  padding-top: 0px;\n  padding-bottom: 0px; }\n\n.grand-total {\n  padding-top: 20px;\n  color: #7e0000;\n  font-size: 1.2vw;\n  font-family: \"Times New Roman\";\n  font-weight: bold;\n  text-align: center; }\n\n.confirm-purchase {\n  width: 100%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #d32039;\n  background-color: #ffffdf;\n  border: 1px solid #ae0000;\n  border-radius: 3px;\n  font-size: 1vw;\n  padding-top: 1vh;\n  padding-bottom: 1vh;\n  margin-left: 0px;\n  margin-top: 0px;\n  font-weight: bold; }\n\n.confirm-purchase:hover {\n  background-color: #d32039;\n  color: #ffffdf;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  border: 1px solid #ffffdf;\n  border-radius: 3px; }\n\n.confirm-div {\n  padding-left: 20px;\n  padding-right: 2px; }\n\n.discard-div {\n  padding-left: 2px;\n  padding-right: 20px; }\n\n.confirm-purchase:focus {\n  outline: 0; }\n\n.cart-empty {\n  border: 2px solid rgba(201, 191, 197, 0.87);\n  border-radius: 6px;\n  margin-top: 40px;\n  margin-left: 2px;\n  padding-top: 15vh;\n  padding-bottom: 15vh; }\n\n.whole {\n  border: 2px solid rgba(201, 191, 197, 0.87);\n  border-radius: 6px;\n  padding-top: 20px;\n  margin-top: 8px;\n  margin-left: 2px; }\n\n.name {\n  padding-left: 26px;\n  font-size: 1.1vw; }\n\n.sub-total {\n  font-size: 1.1vw;\n  padding-left: 0px; }\n\n.quantity {\n  padding-left: 0px; }\n\n.cash-memo-buttons {\n  padding-bottom: 15px;\n  padding-top: 10px; }\n\n::-webkit-scrollbar {\n  width: 4px; }\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px; }\n\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.61);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n\n.cash-memo {\n  height: 35vh;\n  overflow-y: scroll;\n  overflow-x: hidden; }\n\n.dashboard {\n  text-align: center;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  font-size: 1.2vw;\n  padding-top: 2vh; }\n\na {\n  color: #970000;\n  text-decoration: none; }\n\na:hover {\n  color: #650d0e;\n  text-decoration: none; }\n\n.dashboard:hover {\n  color: #6a0d0e;\n  background-color: ghostwhite;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  cursor: pointer; }\n\n.pop-up {\n  color: #7e0000;\n  font-size: 19px;\n  font-family: \"Berlin Sans FB\";\n  text-align: center; }\n\n.quantity, .serial {\n  text-align: center;\n  padding-left: 5px;\n  padding-right: 5px; }\n\n.add, .remove {\n  text-align: center;\n  padding-left: 5px;\n  padding-right: 5px; }\n\n.other-adding-option {\n  padding-top: 5px; }\n\n.note {\n  font-size: 1.1vw;\n  font-family: \"Times New Roman\";\n  color: #6a0d0e;\n  font-weight: bold;\n  text-align: center;\n  padding-top: 20px; }\n\n.remove-order {\n  font-size: 1.2vw; }\n\ninput {\n  font-size: 1vw;\n  padding-right: 0;\n  height: 4.8vh; }\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0; }\n"

/***/ }),

/***/ "./src/app/our-offers/our-offers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OurOffersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__our_offers_service__ = __webpack_require__("./src/app/our-offers/our-offers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_ordered_items_model__ = __webpack_require__("./src/app/shared/ordered-items.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_uuid__ = __webpack_require__("./node_modules/ng2-uuid/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OurOffersComponent = (function () {
    function OurOffersComponent(_ourOfferService, router, route, uuid, userService) {
        this._ourOfferService = _ourOfferService;
        this.router = router;
        this.route = route;
        this.uuid = uuid;
        this.userService = userService;
        this.checkOut = false;
        this.quantity = 0;
        this.FoodItem = [];
        this.condition = false;
        this.uuidCodeOne = '';
        this.uuidCodeTwo = '';
        this.uuidCodeThree = '';
        this.foodItemCount = 0;
        this.setMenuCount = 0;
        this.inventories = [];
        this.uuidCodeOne = this.uuid.v1();
        this.uuidCodeTwo = this.uuid.v1();
        this.uuidCodeThree = this.uuid.v1();
        this.uuidCodeOne = this.uuid.v1();
    }
    OurOffersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orderedItems = this._ourOfferService.getOrderedItemsList();
        if (this.userService.roleMatch(['Admin'])) {
            this.checkOut = true;
        }
        this.route.data.
            subscribe(function (data) {
            _this._ourOfferService.FoodItem = data['foodItems'];
        });
        this.FoodItem = this._ourOfferService.FoodItem;
        this._ourOfferService.foodItemChanged
            .subscribe(function (FoodItem) {
            _this.FoodItem = FoodItem;
        });
        this.route.data.
            subscribe(function (data) {
            _this._ourOfferService.inventory = data['inventories'];
        });
        this.inventories = this._ourOfferService.inventory;
        this.subscription = this._ourOfferService.inventoryChanged
            .subscribe(function (inventories) {
            _this.inventories = inventories;
        });
    };
    OurOffersComponent.prototype.ngDoCheck = function () {
        this.orderedItems = this._ourOfferService.getOrderedItemsList();
        this.grandTotal = this._ourOfferService.TotalPrice;
    };
    OurOffersComponent.prototype.removeFromCart = function (index) {
        this._ourOfferService.TotalPrice = Number.parseInt(this._ourOfferService.TotalPrice.toString())
            - Number.parseInt(this.orderedItems[index].FoodItemSubTotal.toString());
        this.orderedItems.splice(index, 1);
        this._ourOfferService.orderedItems.splice(index, 1);
    };
    OurOffersComponent.prototype.checkFoodItemCount = function () {
        for (var i = 0; i < this.orderedItems.length; i++) {
            if (this.orderedItems[i].FoodItemName != null) {
                this.foodItemCount += 1;
            }
        }
        return this.foodItemCount;
    };
    OurOffersComponent.prototype.AddToOrderedList = function () {
        this.router.navigate(['payment']);
    };
    OurOffersComponent.prototype.add = function () {
        var serialNumber = this.serialNo.nativeElement.value;
        var quantity = this.quantityOfItem.nativeElement.value;
        if (serialNumber !== '' && quantity !== '') {
            for (var i = 0; i < this.FoodItem.length; i++) {
                if (this.FoodItem[i].SerialNo === serialNumber) {
                    this.UpdateCart(this.FoodItem[i].Id, this.FoodItem[i].Price, this.FoodItem[i].Name, this.FoodItem[i].SerialNo, this.FoodItem[i].MakingCost, true, quantity);
                }
            }
        }
        document.getElementById('quantity').value = '';
        document.getElementById('serial').value = '';
    };
    OurOffersComponent.prototype.remove = function () {
        var serialNumber = this.serialNo.nativeElement.value;
        var quantity = this.quantityOfItem.nativeElement.value;
        if (serialNumber !== '' && quantity !== '') {
            for (var i = 0; i < this.FoodItem.length; i++) {
                if (this.FoodItem[i].SerialNo === serialNumber) {
                    this.UpdateCart(this.FoodItem[i].Id, this.FoodItem[i].Price, this.FoodItem[i].Name, this.FoodItem[i].SerialNo, this.FoodItem[i].MakingCost, false, quantity);
                }
            }
        }
        document.getElementById('quantity').value = '';
        document.getElementById('serial').value = '';
    };
    OurOffersComponent.prototype.UpdateCart = function (id, price, name, serialNo, makingCost, isAdd, quantity) {
        if (quantity > 0) {
            var foodItemId = id;
            var foodItemName = name;
            var Price = price;
            var orderId = null;
            if (this._ourOfferService.checkIfOrderedItemExist(id, orderId) === null) {
                var orderItemId = this.uuid.v1();
                if (isAdd === true) {
                    this.AddToCart(orderItemId, orderId, quantity, foodItemId, foodItemName, serialNo, Price, makingCost);
                }
                else {
                    this.RemoveFromCart(orderItemId, orderId, quantity, foodItemId, foodItemName, Price, makingCost);
                }
            }
            else {
                var orderItemId = this._ourOfferService.checkIfOrderedItemExist(id, orderId);
                if (isAdd === true) {
                    this.AddToCart(orderItemId, orderId, quantity, foodItemId, foodItemName, serialNo, Price, makingCost);
                }
                else {
                    this.RemoveFromCart(orderItemId, orderId, quantity, foodItemId, foodItemName, Price, makingCost);
                }
            }
        }
    };
    OurOffersComponent.prototype.AddToCart = function (orderItemId, orderId, quantity, foodItemId, foodItemName, serialNo, price, makingCost) {
        for (var j = 0; j < this.FoodItem.length; j++) {
            if (this.FoodItem[j].Id === foodItemId) {
                var check = 0;
                for (var k = 0; k < this.FoodItem[j].Ingredients.length; k++) {
                    var inventoryQuantity = this.FoodItem[j].Ingredients[k].Quantity;
                    var totalQuantity = inventoryQuantity * quantity;
                    var inventoryId = this.FoodItem[j].Ingredients[k].InventoryId;
                    for (var l = 0; l < this.inventories.length; l++) {
                        if (this._ourOfferService.inventory[l].Id === inventoryId) {
                            if (this._ourOfferService.inventory[l].RemainingQuantity > totalQuantity) {
                                check++;
                                if (check === this.FoodItem[j].Ingredients.length) {
                                    this._ourOfferService.inventory[l].RemainingQuantity -= totalQuantity;
                                    var subTotal = this._ourOfferService.FoodItemSubTotalPrice(price, quantity);
                                    this._ourOfferService.grandTotalPrice(subTotal);
                                    this.condition = this._ourOfferService.checkExistingFoodItem(foodItemId);
                                    if (this.condition) {
                                        this._ourOfferService.increaseOnExistingFoodItem(foodItemId, quantity, subTotal);
                                    }
                                    else {
                                        var purchasedFood = new __WEBPACK_IMPORTED_MODULE_3__shared_ordered_items_model__["a" /* OrderedItems */](orderItemId, orderId, foodItemId, quantity, foodItemName, serialNo, price, subTotal, makingCost);
                                        this._ourOfferService.addToOrderedItemsList(purchasedFood);
                                    }
                                    this._ourOfferService.totalQuantity
                                        = Number.parseInt(this._ourOfferService.totalQuantity.toString())
                                            + Number.parseInt(quantity.toString());
                                }
                            }
                        }
                    }
                }
                if (check < this.FoodItem[j].Ingredients.length) {
                    alert('Insufficient inventory, please update your inventory first');
                }
                break;
            }
        }
    };
    OurOffersComponent.prototype.RemoveFromCart = function (orderItemId, orderId, quantity, foodItemId, foodItemName, price, makingCost) {
        var subTotal = this._ourOfferService.FoodItemSubTotalPrice(price, quantity);
        this._ourOfferService.removeFromFoodItemCart(foodItemId, quantity, subTotal);
    };
    OurOffersComponent.prototype.discardOrder = function () {
        var dialog = confirm('Delete this order?\n' +
            'You will lose any kind of data associated with the current order!');
        if (dialog === true) {
            this.confirmEvent();
        }
    };
    OurOffersComponent.prototype.goToDashboard = function () {
        if (this.orderedItems.length !== 0) {
            var dialog = confirm('Go Back to Dashboard?\n' +
                'You will lose any kind of data associated with the current order!');
            if (dialog) {
                this.confirmEvent();
                this.router.navigate(['/control-panel']);
            }
        }
        else {
            this.router.navigate(['/control-panel']);
        }
    };
    OurOffersComponent.prototype.confirmEvent = function () {
        this._ourOfferService.clearOrders();
        this._ourOfferService.TotalPrice = 0;
        this._ourOfferService.totalQuantity = 0;
    };
    return OurOffersComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('serial'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], OurOffersComponent.prototype, "serialNo", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('quantity'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object)
], OurOffersComponent.prototype, "quantityOfItem", void 0);
OurOffersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-our-offers',
        template: __webpack_require__("./src/app/our-offers/our-offers.component.html"),
        styles: [__webpack_require__("./src/app/our-offers/our-offers.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__our_offers_service__["a" /* OurOffersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__our_offers_service__["a" /* OurOffersService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_uuid__["a" /* Uuid */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_uuid__["a" /* Uuid */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */]) === "function" && _g || Object])
], OurOffersComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=our-offers.component.js.map

/***/ }),

/***/ "./src/app/our-offers/our-offers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OurOffersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_uuid__ = __webpack_require__("./node_modules/ng2-uuid/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OurOffersService = (function () {
    function OurOffersService(uuid) {
        this.uuid = uuid;
        this.uuidCodeOne = '';
        this.TotalPrice = 0;
        this.orderedItemsChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
        this.totalQuantity = 0;
        this.orderedItems = [];
        this.ordersChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
        this.ordersList = [];
        this.ordersListChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
        this.foodItemSubTotal = 0;
        this.ingredients = [];
        this.ingredientsChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
        this.FoodItem = [];
        this.foodItemChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
        this.inventory = [];
        this.inventoryChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
        this.table = [];
        this.tableChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
        this.uuidCodeOne = this.uuid.v1();
    }
    OurOffersService.prototype.clearOrders = function () {
        this.orderedItems = [];
    };
    OurOffersService.prototype.updateInventoryList = function (inventoryId, editedInventoryItem) {
        for (var i = 0; i < this.inventory.length; i++) {
            if (this.inventory[i].Id === inventoryId) {
                this.inventory[i].Name = editedInventoryItem.Name;
                this.inventory[i].Unit = editedInventoryItem.Unit;
                this.inventoryChanged.next(this.inventory.slice());
            }
        }
    };
    OurOffersService.prototype.addToInventoryList = function (inventory) {
        this.inventory.push(inventory);
        this.inventoryChanged.next(this.inventory.slice());
    };
    OurOffersService.prototype.addToTableList = function (table) {
        this.table.push(table);
        this.tableChanged.next(this.table.slice());
    };
    OurOffersService.prototype.editTable = function (editedTable) {
        for (var i = 0; i < this.table.length; i++) {
            if (this.table[i].Id === editedTable.Id) {
                this.table[i].Name = editedTable.Name;
                this.tableChanged.next(this.table.slice());
                return true;
            }
        }
        return false;
    };
    OurOffersService.prototype.getInventories = function () {
        return this.inventory.slice();
    };
    OurOffersService.prototype.addToFoodItemList = function (foodItem) {
        this.FoodItem.push(foodItem);
        this.foodItemChanged.next(this.FoodItem.slice());
    };
    OurOffersService.prototype.updateFoodItemList = function (editedFoodItem) {
        for (var i = 0; i < this.FoodItem.length; i++) {
            if (this.FoodItem[i].Id === editedFoodItem.Id) {
                this.FoodItem[i] = editedFoodItem;
                this.foodItemChanged.next(this.FoodItem.slice());
            }
        }
    };
    OurOffersService.prototype.removeFromFoodItemCart = function (foodItemId, quantity, subTotal) {
        for (var i = 0; i < this.orderedItems.length; i++) {
            if (this.orderedItems[i].FoodItemId === foodItemId) {
                if (this.orderedItems[i].FoodItemQuantity >= quantity) {
                    this.orderedItems[i].FoodItemQuantity =
                        this.orderedItems[i].FoodItemQuantity
                            - quantity;
                    this.orderedItems[i].FoodItemSubTotal =
                        this.orderedItems[i].FoodItemSubTotal
                            - subTotal;
                    this.TotalPrice -= Number.parseInt(subTotal.toString());
                    this.totalQuantity -= Number.parseInt(quantity.toString());
                    if (this.orderedItems[i].FoodItemQuantity === 0) {
                        this.orderedItems.splice(i, 1);
                    }
                }
            }
        }
    };
    OurOffersService.prototype.checkIfOrderedItemExist = function (foodItemId, orderId) {
        for (var i = 0; i < this.orderedItems.length; i++) {
            if (this.orderedItems[i].FoodItemId === foodItemId
                && this.orderedItems[i].OrderId === orderId) {
                return this.orderedItems[i].OrderItemId;
            }
        }
        return null;
    };
    OurOffersService.prototype.getOrderedItemsList = function () {
        return this.orderedItems.slice();
    };
    OurOffersService.prototype.deleteOrder = function (order) {
        for (var i = 0; i < this.ordersList.length; i++) {
            if (this.ordersList[i].Id === order.Id) {
                this.ordersList.splice(i, 1);
            }
        }
    };
    OurOffersService.prototype.addToOrderedItemsList = function (orderedItems) {
        this.orderedItems.push(orderedItems);
        this.orderedItemsChanged.next(this.orderedItems.slice());
    };
    OurOffersService.prototype.addToOrderedList = function (order) {
        this.orders = order;
        this.ordersChanged.next(order);
        this.ordersList.push(order);
        this.ordersListChanged.next(this.ordersList.slice());
    };
    OurOffersService.prototype.grandTotalPrice = function (price) {
        this.TotalPrice = Number.parseInt(price.toString()) + Number.parseInt(this.TotalPrice.toString());
        return this.TotalPrice;
    };
    OurOffersService.prototype.FoodItemSubTotalPrice = function (price, quantity) {
        this.foodItemSubTotal = price * quantity;
        return this.foodItemSubTotal;
    };
    OurOffersService.prototype.checkExistingFoodItem = function (foodItemId) {
        for (var i = 0; i < this.orderedItems.length; i++) {
            if (this.orderedItems[i].FoodItemId === foodItemId) {
                return true;
            }
        }
    };
    OurOffersService.prototype.increaseOnExistingFoodItem = function (foodItemId, quantity, subTotal) {
        for (var i = 0; i < this.orderedItems.length; i++) {
            if (this.orderedItems[i].FoodItemId === foodItemId) {
                this.orderedItems[i].FoodItemQuantity =
                    Number.parseInt(this.orderedItems[i].FoodItemQuantity.toString())
                        + Number.parseInt(quantity.toString());
                this.orderedItems[i].FoodItemSubTotal =
                    Number.parseInt(this.orderedItems[i].FoodItemSubTotal.toString())
                        + Number.parseInt(subTotal.toString());
            }
        }
    };
    return OurOffersService;
}());
OurOffersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_uuid__["a" /* Uuid */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_uuid__["a" /* Uuid */]) === "function" && _a || Object])
], OurOffersService);

var _a;
//# sourceMappingURL=our-offers.service.js.map

/***/ }),

/***/ "./src/app/our-offers/payment/payment.component.html":
/***/ (function(module, exports) {

module.exports = "<app-logout></app-logout>\n\n<div class=\"row main-row\">\n<div class=\"col-lg-offset-9 col-md-offset-9 col-lg-3 col-md-3 col-sm-12 col-xs-12\">\n  <a style=\"cursor: pointer\"\n     (click)=\"discardOrder()\"\n     title=\"Destroy Current Order\">\n    <div class=\"col-lg-1 col-md-1 col-sm-6 col-xs-6 dashboard\">\n      <i class=\"fa fa-times-circle-o\" aria-hidden=\"true\"></i>\n    </div>\n  </a>\n</div>\n</div>\n\n\n\n<div class=\"row\">\n  <div class=\"\n  col-lg-offset-2\n   col-md-offset-2\n   col-sm-offset-2\n   col-lg-2 col-md-2 col-sm-2 col-xs-4\">\n    <button\n      class=\"back\"\n      (click)=\"back()\">\n      <i class=\"fa fa-angle-double-left\"></i>\n       Back</button>\n  </div>\n  <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4 payment\">\n    Payment\n  </div>\n  <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-4\">\n    <button\n      class=\"back \"\n      [ngClass]=\"[!checkCertainAmount() ? 'back' : 'un-back']\"\n      [disabled] = \"!checkCertainAmount()\"\n      (click)=\"validate()\">\n      Validate\n      <i class=\"fa fa-angle-double-right\"></i></button>\n  </div>\n</div>\n\n\n\n<div class=\"row\">\n  <div class=\"\n  col-lg-offset-3\n  col-md-offset-3\n  col-sm-offset-3\n  col-xs-offset-3\n  col-lg-6\n  col-md-6\n  col-sm-6\n  col-xs-6\n  grand-total\">\n    {{ grandTotal }} BDT\n  </div>\n</div>\n\n<div class=\"bar\">\n\n<div class=\"row title-row\">\n  <div class=\"col-lg-offset-2 col-md-offset-2 col-lg-8 col-md-8 col-sm-12 col-xs-12\">\n    <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 due\">\n      Due\n    </div>\n    <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 change\">\n      Remaining\n    </div>\n    <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 tendered\">\n      Tendered\n    </div>\n    <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 change\">\n      Change\n    </div>\n  </div>\n</div>\n\n<div class=\"row content-row\">\n  <div class=\"col-lg-offset-2 col-md-offset-2 col-lg-8 col-md-8 col-sm-12 col-xs-12 content\">\n    <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 due-box\">\n      {{ grandTotal }}\n    </div>\n    <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 due-box\" *ngIf=\"!checkCertainChange(); else showZero\">\n      {{ grandTotal - tendered }}\n    </div>\n      <ng-template #showZero>\n        <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 due-box\">\n          0\n        </div>\n      </ng-template>\n    <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n      <input type=\"number\"\n             min=\"0\"\n             id=\"amount\"\n             class=\"form-control\"\n             [(ngModel)]=\"tendered\"\n      >\n    </div>\n    <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 change-box\" *ngIf=\"checkCertainAmount()\">\n      {{ tendered - grandTotal }}\n    </div>\n  </div>\n</div>\n</div>\n\n<div class=\"row table\">\n    <div class=\"col-lg-offset-2 col-md-offset-2 col-lg-8 col-md-8 col-sm-12 col-xs-12\">\n      <select\n        (change)=\"selectChangeHandler($event)\">\n        <option value=\"\">Select a Table</option>\n        <option *ngFor=\"let table of tables\" value=\"{{ table.Name }}\"\n                > {{ table.Name }} </option>\n      </select>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/our-offers/payment/payment.component.scss":
/***/ (function(module, exports) {

module.exports = ".back {\n  width: 100%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #d32039;\n  background-color: #ffffdf;\n  border: 1.2px solid #ae0000;\n  border-radius: .4vw;\n  font-size: 2vw;\n  padding-top: 1vh;\n  padding-bottom: 1vh;\n  margin-top: 3vh;\n  font-weight: bold;\n  display: inline-block; }\n\n.back:hover {\n  background-color: white;\n  color: #7e0000;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  border: 1.2px solid #7e0000;\n  border-radius: .4vw; }\n\n.back:focus {\n  outline: 0; }\n\n.un-back {\n  width: 100%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #ffffdf;\n  background-color: #d32039;\n  border: 1.2px solid #ae0000;\n  border-radius: .4vw;\n  font-size: 2vw;\n  padding-top: 1vh;\n  padding-bottom: 1vh;\n  margin-top: 3vh;\n  font-weight: bold; }\n\n.un-back:hover {\n  background-color: #d32039;\n  color: #ffffdf;\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  border: 1.2px solid #ae0000;\n  border-radius: .4vw; }\n\n.un-back:focus {\n  outline: 0; }\n\n.payment {\n  font-family: \"Arial Narrow\";\n  color: #7e0000;\n  font-weight: bold;\n  font-size: 2.5vw;\n  text-align: center;\n  padding-top: 5vh; }\n\n.bar {\n  margin-top: 40px; }\n\n.grand-total {\n  font-family: \"Arial Narrow\";\n  color: #7e0000;\n  font-size: 7vw;\n  text-align: center;\n  padding-top: 2vh; }\n\n.content {\n  border: .17vw solid #7e0000;\n  border-radius: .8vw;\n  background-color: #ffffdf; }\n\n.due, .tendered, .change {\n  font-family: \"Arial Narrow\";\n  color: #7e0000;\n  font-size: 3vw; }\n\n.due-box {\n  font-family: \"Arial Narrow\";\n  color: #7e0000;\n  font-size: 3vw; }\n\n.change-box {\n  font-family: \"Arial Narrow\";\n  color: #7e0000;\n  font-size: 3vw; }\n\ninput {\n  font-size: 3vw;\n  color: #7e0000;\n  font-family: \"Arial Narrow\";\n  border: .2vw solid #d32039;\n  width: 11.6vw;\n  height: auto;\n  padding-top: 0;\n  padding-left: .9vw; }\n\ninput:focus {\n  border: .2vw solid #7e0000; }\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0; }\n\n.table {\n  text-align: center;\n  margin-top: 1vh; }\n\n.drop-down {\n  text-align: center; }\n\nselect {\n  background-color: #ffffdf;\n  color: #7e0000;\n  font-family: \"align-self: ;\";\n  font-size: 2vw;\n  text-align: center;\n  border: 1px solid #7e0000;\n  border-radius: .5vw;\n  outline: none;\n  text-align: left;\n  cursor: pointer;\n  padding-right: 4vw;\n  padding-left: 4vw;\n  padding-top: .5vw;\n  padding-bottom: .5vw;\n  font-weight: bold; }\n\noption {\n  color: #7e0000;\n  text-align: left;\n  cursor: pointer;\n  font-weight: bold; }\n\n.dashboard {\n  width: 20%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #aa0909;\n  background-color: ghostwhite;\n  font-size: 2.8vw;\n  font-weight: bold;\n  text-align: center;\n  margin-top: 1vh; }\n\n.dashboard:hover {\n  color: #6a0d0e;\n  background-color: ghostwhite;\n  font-family: \"Arial Narrow\";\n  font-weight: bold; }\n\n.pop-up {\n  color: #7e0000;\n  font-size: 16px;\n  font-family: \"Berlin Sans FB\";\n  text-align: center; }\n\n.main-row {\n  border-bottom: 2px double #dfdfdf; }\n"

/***/ }),

/***/ "./src/app/our-offers/payment/payment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data_storage_service__ = __webpack_require__("./src/app/shared/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__our_offers_service__ = __webpack_require__("./src/app/our-offers/our-offers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_order_model__ = __webpack_require__("./src/app/shared/order.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_uuid__ = __webpack_require__("./node_modules/ng2-uuid/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PaymentComponent = (function () {
    function PaymentComponent(_ourOfferService, _dataStorageService, router, _route, uuid) {
        this._ourOfferService = _ourOfferService;
        this._dataStorageService = _dataStorageService;
        this.router = router;
        this._route = _route;
        this.uuid = uuid;
        this.onCheck = 0;
        this.change = 0;
        this.selectedTable = '';
        this.inventoryCost = 0;
        this.orderProfit = 0;
        this.inventories = [];
        this.tables = [];
        this.FoodItemList = [];
        this.tendered = 0;
    }
    PaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.grandTotal = this._ourOfferService.TotalPrice;
        this._route.data.
            subscribe(function (data) {
            _this._ourOfferService.table = data['tables'];
        });
        this.tables = this._ourOfferService.table;
        this.subscription = this._ourOfferService.tableChanged
            .subscribe(function (tables) {
            _this.tables = tables;
        });
    };
    PaymentComponent.prototype.ngDoCheck = function () {
    };
    PaymentComponent.prototype.discardOrder = function () {
        var dialog = confirm('Delete this order?\n' +
            'You will lose any kind of data associated with the current order!');
        if (dialog === true) {
            this.confirmEvent();
        }
    };
    PaymentComponent.prototype.confirmEvent = function () {
        this._ourOfferService.clearOrders();
        this._ourOfferService.TotalPrice = 0;
        this._ourOfferService.totalQuantity = 0;
        this.router.navigate(['our-offers/regulars']);
    };
    PaymentComponent.prototype.back = function () {
        this.router.navigate(['our-offers']);
    };
    PaymentComponent.prototype.checkCertainAmount = function () {
        if (this.tendered < this.grandTotal || this.grandTotal === 0) {
            return false;
        }
        else {
            return true;
        }
    };
    PaymentComponent.prototype.selectChangeHandler = function (event) {
        this.selectedTable = event.target.value;
    };
    PaymentComponent.prototype.checkCertainChange = function () {
        if (this.tendered < this.grandTotal || this.tendered === 0) {
            return false;
        }
        else {
            return true;
        }
    };
    PaymentComponent.prototype.validate = function () {
        var orderId = this.uuid.v1();
        this.onCheck = 1;
        this.orderedItems = this._ourOfferService.orderedItems;
        for (var i = 0; i < this._ourOfferService.orderedItems.length; i++) {
            this._ourOfferService.orderedItems[i].OrderId = orderId;
        }
        var totalPrice = this._ourOfferService.TotalPrice;
        if (this.selectedTable === '' || this.selectedTable === 'Select a Table') {
            this.table = 'No Table';
        }
        else {
            this.table = this.selectedTable;
        }
        for (var i = 0; i < this.orderedItems.length; i++) {
            this.inventoryCost = Number.parseInt(this.inventoryCost.toString()) +
                (Number.parseInt(this.orderedItems[i].FoodItemQuantity.toString()) *
                    Number.parseInt(this.orderedItems[i].FoodItemMakingCost.toString()));
        }
        this.orderProfit = totalPrice - this.inventoryCost;
        this.change = Number.parseInt(this.tendered.toString())
            - Number.parseInt(totalPrice.toString());
        var dateTime = new Date().toLocaleString();
        this.orders = new __WEBPACK_IMPORTED_MODULE_4__shared_order_model__["a" /* Order */](orderId, this._ourOfferService.orderedItems, totalPrice, this.tendered, this.change, dateTime, this.table, this.inventoryCost, this.orderProfit);
        this._ourOfferService.addToOrderedList(this.orders);
        this._dataStorageService.saveOrder(this.orders);
        this.router.navigate(['receipt']);
    };
    return PaymentComponent;
}());
PaymentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-payment',
        template: __webpack_require__("./src/app/our-offers/payment/payment.component.html"),
        styles: [__webpack_require__("./src/app/our-offers/payment/payment.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__our_offers_service__["a" /* OurOffersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__our_offers_service__["a" /* OurOffersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_data_storage_service__["a" /* DataStorageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_uuid__["a" /* Uuid */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_uuid__["a" /* Uuid */]) === "function" && _e || Object])
], PaymentComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=payment.component.js.map

/***/ }),

/***/ "./src/app/our-offers/receipt/receipt.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<app-logout></app-logout>\n<div *ngIf=\"order\">\n  <div class=\"row main-row\">\n    <div class=\"col-md-offset-9 col-md-3\">\n      <a style=\"cursor: pointer\"\n         (click)=\"discardOrder()\"\n         title=\"Destroy Current Order\">\n        <div class=\"col-md-1 dashboard\">\n          <i class=\"fa fa-times-circle-o\" aria-hidden=\"true\"></i>\n        </div>\n      </a>\n    </div>\n  </div>\n\n\n  <div class=\"row upper-div\" >\n    <div class=\"col-md-offset-3 col-md-6 change\">\n      Change: {{ order.Change }} BDT\n    </div>\n    <div class=\"col-md-3 next-order-div\">\n      <button\n        (click)=\"nextOrder()\"\n        class=\"back\">\n        Next Order\n        <i class=\"fa fa-angle-double-right\"></i></button>\n    </div>\n  </div>\n\n\n  <div class=\"row\" >\n    <div class=\"col-md-offset-2 col-md-8 receipt\">\n      <button (click)=\"print()\" class=\"back\"><i class=\"fa fa-print\"></i> Print Receipt</button>\n    </div>\n  </div>\n\n\n  <div class=\"row print-row\">\n    <div class=\"col-md-offset-4 col-md-4\" id=\"print-section\">\n      <div class=\"col-md-12 intro\">\n        <div class=\"col-md-6 date-time\">{{ order.DateTime }}</div>\n        <div class=\"col-md-6 id\">{{ order.Id }}</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12 table-no\">\n          Table: {{ order.TableNo }}\n        </div>\n      </div>\n\n      <div class=\"col-md-12 hodoo\">\n        Hodoo\n      </div>\n\n\n      <div class=\"col-md-12 main\" *ngFor=\"let orders of order.OrderedItems\">\n        <div class=\"col-md-4 name\">{{ orders.FoodItemName }}</div>\n        <div class=\"col-md-2 price\">{{ orders.Price }}</div>\n        <div class=\"col-md-1 mul\">x</div>\n        <div class=\"col-md-2 quantity\">{{ orders.FoodItemQuantity }}</div>\n        <div class=\"col-md-1 equal\">=</div>\n        <div class=\"col-md-2 sub-total\">{{ orders.FoodItemSubTotal }}</div>\n      </div>\n      <div class=\"col-md-12 total-div\">\n        <div class=\"col-md-6 total\">Total:</div>\n        <div class=\"col-md-6 total-bdt\">{{ order.TotalPrice }} BDT</div>\n      </div>\n\n      <div class=\"col-md-12 tendered-div\">\n        <div class=\"col-md-6 tendered\">Tendered:</div>\n        <div class=\"col-md-6 tendered-bdt\">{{ order.Tendered }} BDT</div>\n      </div>\n\n      <div class=\"col-md-12 change-div\">\n        <div class=\"col-md-6 change-cash\">Change:</div>\n        <div class=\"col-md-6 change-bdt\">{{ order.Change }} BDT</div>\n      </div>\n\n      <div class=\"col-md-12 choosing-hodoo\">\n        Thank you for choosing Hodoo!\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"row\" *ngIf=\"!order\">\n  <div class=\"col-md-12 no-receipt\">\n    You have no receipt to print\n  </div>\n  <div class=\"col-md-12 go-back-to-pos\">\n    <a routerLink=\"/our-offers/regulars\">Go Back to Point of Sale</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/our-offers/receipt/receipt.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Acme|Aladin|Berkshire+Swash|Cabin+Sketch|Chewy|Fredoka+One|Kanit|Lobster|Londrina+Solid|Righteous|Rock+Salt\");\n@media screen {\n  .change {\n    margin-top: 37px;\n    font-size: 25px;\n    color: #7e0000;\n    font-family: \"Arial Narrow\";\n    text-align: center;\n    font-weight: bold; }\n  #print-section {\n    background-color: white;\n    border: 1px solid #cbc6cb;\n    margin-top: 10px;\n    height: 50vh;\n    overflow-y: scroll;\n    overflow-x: hidden; }\n  .table-no {\n    text-align: center;\n    font-family: \"Inconsolata\";\n    font-size: 11px; }\n  .print-row {\n    padding-left: 90px;\n    padding-right: 90px; }\n  hr {\n    border-top: 1px solid #cbc6cb;\n    margin: 1em 0;\n    padding: 0; }\n  .receipt {\n    text-align: center; }\n  .back {\n    width: 50%;\n    height: 100%;\n    font-family: \"Arial Narrow\";\n    color: #d32039;\n    background-color: #ffffdf;\n    border: 1.2px solid #ae0000;\n    border-radius: 5px;\n    font-size: 20px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    margin-left: 5px;\n    margin-top: 22px;\n    font-weight: bold; }\n  .back:hover {\n    background-color: #d32039;\n    color: #ffffdf;\n    font-family: \"Arial Narrow\";\n    font-weight: bold;\n    border: 1.2px solid #ffffdf;\n    border-radius: 5px; }\n  .back:focus {\n    outline: 0; }\n  .next-order-div {\n    margin-top: 10px; }\n  .intro {\n    text-align: center;\n    margin-top: 15px; }\n  .date-time {\n    padding-right: 0px;\n    padding-left: 0px;\n    font-family: \"Inconsolata\";\n    font-size: 11px; }\n  .id {\n    padding-right: 0px;\n    padding-left: 0px;\n    font-family: \"Inconsolata\";\n    font-size: 11px; }\n  .name, .price, .quantity, .equal, .sub-total, .mul {\n    padding-right: 0px;\n    padding-left: 0px;\n    font-family: \"Inconsolata\";\n    font-size: 11px;\n    padding-top: 2px;\n    padding-bottom: 2px; }\n  .price {\n    text-align: right; }\n  .quantity {\n    padding-left: 20px; }\n  .mul {\n    padding-left: 20px; }\n  .main {\n    padding-left: 0px;\n    padding-right: 0px;\n    padding-top: 2px;\n    padding-bottom: 4px; }\n  .hodoo {\n    font-family: \"Inconsolata\";\n    font-size: 13px;\n    text-align: center;\n    padding-top: 5px;\n    padding-bottom: 8px; }\n  .choosing-hodoo {\n    font-family: \"Inconsolata\";\n    font-size: 11px;\n    text-align: center;\n    padding-top: 15px;\n    padding-bottom: 20px; }\n  .change-bdt {\n    font-family: \"Inconsolata\";\n    font-size: 11px;\n    text-align: right; }\n  .change-cash {\n    font-family: \"Inconsolata\";\n    font-size: 11px;\n    text-align: left; }\n  .tendered {\n    font-family: \"Inconsolata\";\n    font-size: 11px;\n    text-align: left; }\n  .intro {\n    padding-top: 5px;\n    padding-bottom: 5px; }\n  .tendered-bdt {\n    font-family: \"Inconsolata\";\n    font-size: 11px;\n    text-align: right; }\n  .total-div {\n    padding-bottom: 5px;\n    padding-top: 5px;\n    text-align: center; }\n  .total {\n    font-family: \"Inconsolata\";\n    font-size: 16px;\n    text-align: left; }\n  .total-bdt {\n    font-family: \"Inconsolata\";\n    font-size: 16px;\n    text-align: right; }\n  .change-div {\n    padding-top: 4px;\n    padding-bottom: 4px;\n    text-align: center; }\n  .tendered-div {\n    padding-top: 4px;\n    padding-bottom: 4px;\n    text-align: center; }\n  .fa {\n    display: inline-block;\n    font: normal normal normal 14px/1 FontAwesome;\n    font-size: inherit;\n    text-rendering: auto;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; }\n  .table-no {\n    text-align: center;\n    font-family: \"Inconsolata\";\n    font-size: 11px; }\n  .hodoo-logo {\n    font-family: 'Berkshire Swash', \"Times New Roman\", \"Berlin Sans FB\";\n    font-size: 40px;\n    text-align: right;\n    color: #7e0000;\n    padding-top: 5px; }\n  .hodoo:focus {\n    outline: 0; }\n  .dashboard {\n    width: 20%;\n    height: 100%;\n    font-family: \"Arial Narrow\";\n    color: #aa0909;\n    background-color: ghostwhite;\n    font-size: 33px;\n    font-weight: bold;\n    text-align: center;\n    margin-top: 12px; }\n  .dashboard:hover {\n    color: #6a0d0e;\n    background-color: ghostwhite;\n    font-family: \"Arial Narrow\";\n    font-weight: bold; }\n  .pop-up {\n    color: #7e0000;\n    font-size: 19px;\n    font-family: \"Berlin Sans FB\";\n    text-align: center; }\n  .main-row {\n    border-bottom: 2px double #dfdfdf; }\n  ::-webkit-scrollbar {\n    width: 1px; }\n  ::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n    border-radius: 10px; }\n  ::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    background-color: rgba(0, 0, 0, 0.61);\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n  .go-back-to-pos {\n    text-align: center;\n    font-size: 1vw;\n    padding-top: 13px; }\n  a {\n    color: #a30000;\n    text-decoration: none; }\n  a:hover {\n    color: #550d0e;\n    text-decoration: none; }\n  .no-receipt {\n    padding-top: 15vh;\n    font-size: 2vw;\n    color: #7e0000;\n    font-weight: bold;\n    font-family: \"Times New Roman\";\n    text-align: center;\n    opacity: .9; } }\n@media print {\n  header nav, footer {\n    display: none; }\n  @page {\n    margin: 0.5cm; } }\n"

/***/ }),

/***/ "./src/app/our-offers/receipt/receipt.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceiptComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data_storage_service__ = __webpack_require__("./src/app/shared/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__our_offers_service__ = __webpack_require__("./src/app/our-offers/our-offers.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReceiptComponent = (function () {
    function ReceiptComponent(_ourOfferService, _dataStorageService, router) {
        this._ourOfferService = _ourOfferService;
        this._dataStorageService = _dataStorageService;
        this.router = router;
    }
    ReceiptComponent.prototype.ngOnInit = function () {
        this.order = this._ourOfferService.orders;
    };
    ReceiptComponent.prototype.discardOrder = function () {
        var dialog = confirm('Delete this order?\n' +
            'You will lose any kind of data associated with the current order!');
        if (dialog === true) {
            this.confirmEvent();
        }
    };
    ReceiptComponent.prototype.confirmEvent = function () {
        this._ourOfferService.clearOrders();
        this._ourOfferService.TotalPrice = 0;
        this._ourOfferService.totalQuantity = 0;
        this.router.navigate(['our-offers/regulars']);
        this._ourOfferService.deleteOrder(this.order);
        this._dataStorageService.deleteOrder(this.order);
    };
    ReceiptComponent.prototype.print = function () {
        var printContents, popupWin;
        printContents = document.getElementById('print-section').innerHTML;
        popupWin = window.open('document.URL,', '_blank');
        popupWin.document.open();
        popupWin.document.write("\n      <html>\n        <head>\n          <title></title>\n        <style>\n @media print\n {\n  header nav, footer {\n      display: none;\n  }\n  @page {\n      margin: 0.5cm;\n  }\n  .intro{\n  text-align: center;\n  }\n  .hodoo{\n    font-family:\"Inconsolata\";\n    font-size: 21px;\n    text-align: center;\n    padding-top: 10px;\n  }\n  .date-time{\n   font-family:\"Inconsolata\";\n   font-size: 21px;\n   display: inline-block;\n   padding-right: 66px;\n   text-align:right;\n  }\n.id{\n   font-family:\"Inconsolata\";\n   font-size: 21px;\n   display: inline;\n   padding-left: -25px;\n  text-align: right;\n}\n.name, .price, .quantity, .equal, .sub-total, .mul{\n    font-family:\"Inconsolata\";\n    font-size: 20px;\n    padding-top: 2px;\n    padding-bottom: 2px;\n    display: inline;\n    text-align:left;\n  }\n  .main{\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-align: center;\n  }\n  .name{\n  text-align:left;\n  }\n.intro{\n    margin-top: 15px;\n  }\n.price{\n /* padding-left: 60px;*/\n  }\n.sub-total{\n/*padding-left: 70px;*/\ntext-align: right;\n}\n.quantity{\n   /* padding-left: 70px;*/\n  }\n  .mul{\n   /* padding-left: 90px;*/\n  }\n  .equal{\n  /*padding-left: 50px;*/\n  }\n  .choosing-hodoo{\n    font-family:\"Inconsolata\";\n    font-size: 21px;\n    padding-top: 15px;\n    padding-bottom: 20px;\n    text-align: center;\n  }\n  .total-div{\n    padding-bottom: 8px;\n    padding-top: 8px;\n    text-align:center;\n  }\n  .total{\n    font-family:\"Inconsolata\";\n    font-size: 24px;\n     display: inline-block;\n  }\n  .total-bdt{\n    font-family:\"Inconsolata\";\n    font-size: 24px;\n     display: inline-block;\n  }\n   .change-div{\n    padding-top: 8px;\n    padding-bottom: 8px;\n    text-align: center;\n  }\n  .change-bdt{\n    font-family:\"Inconsolata\";\n    font-size: 21px;\n     display: inline-block;\n  }\n  .change-cash{\n    font-family:\"Inconsolata\";\n    font-size: 21px;\n    display: inline-block;\n  }\n.tendered-div{\n    padding-top: 8px;\n    padding-bottom: 8px;\n    text-align: center;\n  }\n  .tendered{\n    font-family:\"Inconsolata\";\n    font-size: 21px;\n    display: inline-block;\n  }\n  .tendered-bdt{\n    font-family:\"Inconsolata\";\n    font-size: 21px;\n    display: inline-block;\n  }\n  .table-no{\n    text-align: center;\n    font-family:\"Inconsolata\";\n    font-size: 21px;\n\n  }\n }\n</style>\n        </head>\n     <body onload=\"window.print();window.close()\">" + printContents + "</body>\n      </html>");
        popupWin.document.close();
    };
    ReceiptComponent.prototype.nextOrder = function () {
        this._ourOfferService.clearOrders();
        this._ourOfferService.TotalPrice = 0;
        this._ourOfferService.totalQuantity = 0;
        this.router.navigate(['our-offers']);
    };
    return ReceiptComponent;
}());
ReceiptComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-receipt',
        template: __webpack_require__("./src/app/our-offers/receipt/receipt.component.html"),
        styles: [__webpack_require__("./src/app/our-offers/receipt/receipt.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__our_offers_service__["a" /* OurOffersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__our_offers_service__["a" /* OurOffersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_data_storage_service__["a" /* DataStorageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ReceiptComponent);

var _a, _b, _c;
//# sourceMappingURL=receipt.component.js.map

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"\n  col-lg-12\n  col-md-12\n  col-sm-12\n  col-xs-12\n  not-found\">\n    This page is not found!\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.scss":
/***/ (function(module, exports) {

module.exports = ".not-found {\n  font-family: \"Times New Roman\";\n  font-size: 4.2vw;\n  color: #6a0d0e;\n  text-align: center;\n  padding-top: 30vh; }\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-not-found',
        template: __webpack_require__("./src/app/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("./src/app/page-not-found/page-not-found.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"row main-row\">\n    <div class=\"col-md-8 header\">\n      User Registration\n    </div>\n    <a routerLink=\"/control-panel\">\n      <div class=\"col-md-offset-1 col-md-2 dashboard\">\n        Back to Dashboard\n      </div>\n    </a>\n</div>\n\n\n<div class=\"row\">\n  <div class=\"col-md-offset-1 col-md-5\">\n    <form #userRegistrationForm=\"ngForm\" (ngSubmit)=\"OnSubmit(userRegistrationForm)\">\n\n      <div class=\"row\">\n        <div class=\"col-md-12 new-user\">\n          Create a new user\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12 form-group\">\n          <div class=\"col-md-12\">\n            <label\n            >User Name</label>\n          </div>\n          <div class=\"col-md-12\">\n          <input class=\"validate form-control\"\n                 type=\"text\"\n                 name=\"UserName\"\n                 #UserName=\"ngModel\"\n                 [(ngModel)]=\"user.UserName\"\n                 placeholder=\"Should be unique and cannot contain any space\"\n                 required>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-12 form-group\">\n          <div class=\"col-md-12\">\n            <label\n              [attr.data-error]=\"Password.errors!=null?(Password.errors.required?\n            'Required field!':'Minimum 3 characters needed'):''\">Password</label>\n          </div>\n          <div class=\"col-md-12\">\n          <input\n            class=\"validate form-control\"\n            type=\"password\"\n            name=\"Password\"\n            #Password=\"ngModel\"\n            [(ngModel)]=\"user.Password\"\n            placeholder=\"At least 3 characters long\"\n            required\n            minlength=\"3\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12 form-group\">\n          <div class=\"col-md-12\">\n            <label\n            >Email\n            </label>\n          </div>\n          <div class=\"col-md-12\">\n          <input class=\"validate form-control\"\n                 type=\"text\"\n                 name=\"Email\"\n                 #Email=\"ngModel\"\n                 [(ngModel)]=\"user.Email\"\n                 [pattern]=\"emailPattern\"\n                 required>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-12 form-group\">\n        <label>Choose a role from here</label>\n        <select\n          id=\"roleName\"\n          name=\"roleName\"\n          class=\"form-control\"\n          ngModel\n          required\n          >\n          <option  *ngFor=\"let item of roles\" [value] =\"item.Name\" selected > {{ item.Name }} </option>\n        </select>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12 button\">\n          <button [disabled]=\"!userRegistrationForm.valid\"\n                  class=\"btn btn-primary\"\n                  type=\"submit\">\n            Submit</button>\n\n        </div>\n      </div>\n    </form>\n  </div>\n\n  <div class=\"col-md-5\">\n    <div class=\"row users\">\n      <div class=\"col-md-4\">\n        Users\n      </div>\n      <div class=\"col-md-6\">\n        <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n        <input class=\"box\"\n               type=\"text\"\n               [(ngModel)]=\"term\"\n               placeholder=\"Search by User Name...\">\n      </div>\n    </div>\n\n    <div class=\"row body\">\n      <div class=\"col-md-12 table-bordered\" *ngFor=\"let user of modifiedUser | userFilter:term; let i= index\">\n        <div class=\"row\">\n          <div class=\"col-md-12 content\">\n            {{ i+1 }}. {{ user.UserName }}\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12 content\">\n           Role assigned: {{ user.Role }}\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12 content\">\n            Email: {{ user.Email }}\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-10 content\">\n            Added on: {{ user.DateTime }}\n          </div>\n          <div class=\"col-md-2\" *ngIf=\"user.UserName !== 'DefaultUser'\">\n            <i\n              title=\"Remove this user\"\n              style=\"cursor: pointer\"\n              (click)=\"deleteUser(user, i)\"\n              class=\"fa fa-times-circle-o remove-order\"\n              aria-hidden=\"true\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12 total\">\n        Total {{ totalUsers }} (s)\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/***/ (function(module, exports) {

module.exports = ".header {\n  color: #770000;\n  font-size: 21px;\n  font-family: \"Berlin Sans FB\";\n  text-align: left;\n  margin-top: 10px;\n  border: 1px;\n  border-radius: 5px;\n  padding-top: 5px;\n  padding-bottom: 5px; }\n\nlabel {\n  font-size: 13px;\n  font-family: \"Arial Narrow\";\n  color: #6b0000; }\n\n.btn-primary {\n  background-color: #9c0000;\n  color: white; }\n\n.btn-primary:hover {\n  background-color: #7f0000;\n  color: white; }\n\n.btn-primary:focus {\n  outline: 0; }\n\n.button {\n  text-align: center; }\n\ninput {\n  font-size: 12px; }\n\n.main-row {\n  border-bottom: 2px double #dfdfdf; }\n\n.dashboard {\n  width: 20%;\n  height: 100%;\n  font-family: \"Arial Narrow\";\n  color: #aa0909;\n  background-color: ghostwhite;\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold;\n  text-align: center;\n  margin-top: 15px; }\n\n.new-user {\n  text-align: center;\n  color: #6a0d0e;\n  font-family: \"Berlin Sans FB\";\n  font-size: 20px;\n  padding-top: 20px;\n  padding-bottom: 20px; }\n\n.users {\n  text-align: left;\n  color: #6a0d0e;\n  font-family: \"Berlin Sans FB\";\n  font-size: 20px;\n  padding-top: 20px;\n  padding-bottom: 6px;\n  padding-left: 0; }\n\n.body {\n  background-color: #fcfcfc;\n  border: 1px solid #eee4ea;\n  color: #6a0d0e;\n  border-radius: 5px;\n  font-weight: bold;\n  font-family: \"Times New Roman\";\n  font-size: 14px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  max-height: 63vh;\n  overflow-y: scroll;\n  overflow-x: hidden; }\n\n::-webkit-scrollbar {\n  width: 3px; }\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px; }\n\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.61);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n\n.content {\n  padding-top: 10px;\n  padding-bottom: 3px;\n  padding-left: 30px; }\n\n.remove-order {\n  font-size: 17px; }\n\n.total {\n  font-family: \"Arial Narrow\";\n  font-weight: bold;\n  font-size: 18px;\n  color: #6a0d0e;\n  text-align: center;\n  padding-top: 5px; }\n\n.pop-up {\n  color: #7e0000;\n  font-size: 14px;\n  font-family: \"Times New Roman\";\n  text-align: center;\n  font-weight: bold; }\n\n.box {\n  width: 250px;\n  height: 25px;\n  background: #fcfcfc;\n  border: 2px solid #9c0000;\n  border-radius: 28px;\n  text-indent: 32px;\n  color: #9c0000;\n  font-size: 11px;\n  font-family: \"Lato\",\"Lucida Grande\", \"Helvetica\", \"Verdana\", \"Arial\"; }\n\n.box:focus {\n  outline: 0; }\n\n.fa-search {\n  position: absolute;\n  top: 12px;\n  left: 23px;\n  font-size: 11px; }\n\n.search-bar {\n  margin-top: 10px; }\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_modified_user_model__ = __webpack_require__("./src/app/shared/modified-user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(userService, route) {
        this.userService = userService;
        this.route = route;
        this.term = '';
        this.modifiedUser = [];
        this.modifiedUserChanged = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["b" /* Subject */]();
        this.emailPattern = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
        this.roles = [];
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resetForm();
        this.route.data.
            subscribe(function (data) {
            _this.roles = data['roles'];
        });
        this.route.data.
            subscribe(function (data) {
            _this.modifiedUser = data['users'];
        });
        this.totalUsers = this.modifiedUser.length;
    };
    RegisterComponent.prototype.ngDoCheck = function () {
        this.totalUsers = this.modifiedUser.length;
    };
    RegisterComponent.prototype.resetForm = function (form) {
        if (form != null) {
            form.reset();
        }
        this.user = {
            UserName: '',
            Password: '',
            Email: ''
        };
    };
    RegisterComponent.prototype.OnSubmit = function (form) {
        var _this = this;
        var dateTime = new Date().toLocaleString();
        this.userService.registerUser(form.value.UserName, form.value.Password, form.value.Email, form.value.roleName, dateTime)
            .subscribe(function (data) {
            if (data.json().Succeeded === true) {
                var newUser = new __WEBPACK_IMPORTED_MODULE_3__shared_modified_user_model__["a" /* ModifiedUserModel */](form.value.UserName, form.value.Email, form.value.roleName, dateTime);
                _this.modifiedUser.push(newUser);
                _this.modifiedUserChanged.next(_this.modifiedUser.slice());
                alert('Registration Successful!');
                _this.resetForm(form);
            }
            else {
                alert(data.json().Errors[0]);
            }
        });
    };
    RegisterComponent.prototype.deleteUser = function (user, index) {
        var dialog = confirm('Delete this user?\n' +
            'You will lose any kind of data associated with the current user!');
        if (dialog === true) {
            this.confirmEvent(user, index);
        }
    };
    RegisterComponent.prototype.confirmEvent = function (user, index) {
        this.modifiedUser.splice(index, 1);
        this.userService.deleteUser(user);
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("./src/app/register/register.component.html"),
        styles: [__webpack_require__("./src/app/register/register.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12 hodoo\">\n    hodoo\n  </div>\n</div>\n\n\n\n<div class=\"row\">\n  <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12 main\">\n\n    <form #resetForm=\"ngForm\" (ngSubmit)=\"getResetCode(resetForm)\">\n      <div class=\"row\">\n\n      <div class=\"col-lg-offset-4 col-md-offset-4 col-sm-offset-4 col-xs-offset-2\n       col-lg-4 col-md-4 col-sm-4 col-xs-8\">\n        <label>Enter your user name</label>\n        <input class=\"form-control\"\n               type=\"text\"\n               name=\"UserName\"\n               #UserName\n               ngModel\n               required>\n      </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-lg-offset-4 col-md-offset-4 col-sm-offset-4 col-xs-offset-2\n       col-lg-4 col-md-4 col-sm-4 col-xs-8 button\">\n          <button\n            class=\"btn btn-primary \"\n            type=\"submit\"\n            [disabled]=\"!resetForm.valid\"\n          >Send Reset Code</button>\n        </div>\n      </div>\n    </form>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Acme|Aladin|Berkshire+Swash|Cabin+Sketch|Chewy|Fredoka+One|Kanit|Lobster|Londrina+Solid|Righteous|Rock+Salt\");\n.hodoo {\n  font-family: 'Berkshire Swash', \"Times New Roman\", \"Arial Narrow\";\n  font-size: 7vw;\n  text-align: center;\n  color: #7e0000;\n  padding-top: 5vh; }\n.hodoo:focus {\n  outline: 0; }\nlabel {\n  font-size: 16px;\n  font-family: \"Arial Narrow\";\n  color: #6b0000;\n  font-weight: normal; }\n.btn-primary {\n  background-color: #9c0000;\n  color: white; }\n.btn-primary:hover {\n  background-color: #7f0000;\n  color: white; }\n.btn-primary:focus {\n  outline: 0; }\ninput {\n  font-size: 14px; }\na {\n  color: #950000;\n  font-size: 14px;\n  font-family: \"Arial Narrow\";\n  text-decoration: none;\n  font-weight: bold; }\na:hover {\n  color: #6b0000; }\n.button {\n  text-align: center;\n  padding-top: 20px; }\n.main {\n  padding-top: 20px; }\n"

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResetPasswordComponent = (function () {
    function ResetPasswordComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
    };
    ResetPasswordComponent.prototype.getResetCode = function (form) {
        var _this = this;
        this.userService.resetPassword(form.value.UserName).subscribe(function (data) {
            console.log(data.json());
            if (data.json() === 'User Name Found') {
                form.reset();
                alert('A password recovery code has sent to your email');
                _this.router.navigate(['/new-password']);
            }
            else {
                alert('Incorrect user name!');
            }
        });
    };
    return ResetPasswordComponent;
}());
ResetPasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-reset-password',
        template: __webpack_require__("./src/app/reset-password/reset-password.component.html"),
        styles: [__webpack_require__("./src/app/reset-password/reset-password.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ResetPasswordComponent);

var _a, _b;
//# sourceMappingURL=reset-password.component.js.map

/***/ }),

/***/ "./src/app/role-resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoleResolverService = (function () {
    function RoleResolverService(userService) {
        this.userService = userService;
    }
    RoleResolverService.prototype.resolve = function (route, state) {
        return this.userService.getAllRoles();
    };
    return RoleResolverService;
}());
RoleResolverService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */]) === "function" && _a || Object])
], RoleResolverService);

var _a;
//# sourceMappingURL=role-resolver.js.map

/***/ }),

/***/ "./src/app/shared/data-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__our_offers_our_offers_service__ = __webpack_require__("./src/app/our-offers/our-offers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataStorageService = (function () {
    function DataStorageService(_http, _ourOffersService) {
        this._http = _http;
        this._ourOffersService = _ourOffersService;
        this._foodItemJson = 'assets/food-item.json';
        this._foodItemApi = 'http://localhost:1548/api/GetFoodItems';
        this._inventoryJson = 'assets/inventories.json';
        this._inventoryApi = 'http://localhost:1548/api/GetInventories';
        this._tableJson = 'assets/tables.json';
        this._tableApi = 'http://localhost:1548/api/GetTables';
        this._orderJson = 'assets/order.json';
        this._orderApi = 'http://localhost:1548/api/GetOrders';
    }
    DataStorageService.prototype.saveFoodItemImage = function (foodItemId, fileToUpload) {
        if (fileToUpload.name !== null || fileToUpload.name !== '') {
            var endpoint = 'http://localhost:1548/api/SaveFoodItemImage';
            var formData = new FormData();
            formData.append('Image', fileToUpload, fileToUpload.name);
            formData.append('FoodItemId', foodItemId);
            return this._http
                .post(endpoint, formData);
        }
    };
    DataStorageService.prototype.getFoodItems = function () {
        return this._http.get(this._foodItemJson)
            .map(function (response) {
            var foodItems = response.json();
            console.log(foodItems);
            return foodItems;
        });
    };
    DataStorageService.prototype.saveOrder = function (order) {
        return this._http.post('http://localhost:1548/api/StoreOrder', order).subscribe(function (response) {
            console.log(response);
        });
    };
    DataStorageService.prototype.deleteOrder = function (order) {
        return this._http.post('http://localhost:1548/api/DeleteOrder', order);
    };
    DataStorageService.prototype.getOrders = function () {
        return this._http.get(this._orderJson)
            .map(function (response) {
            var orders = response.json();
            return orders;
        });
    };
    DataStorageService.prototype.getInventories = function () {
        return this._http.get(this._inventoryJson)
            .map(function (response) {
            var inventories = response.json();
            console.log(inventories);
            return inventories;
        });
    };
    DataStorageService.prototype.getTables = function () {
        return this._http.get(this._tableJson)
            .map(function (response) {
            var tables = response.json();
            console.log(tables);
            return tables;
        });
    };
    DataStorageService.prototype.addNewTable = function (table) {
        return this._http.post('http://localhost:1548/api/AddNewTable', table)
            .subscribe(function (response) {
            console.log(response);
        });
    };
    DataStorageService.prototype.editTable = function (table) {
        return this._http.post('http://localhost:1548/api/EditTable', table)
            .subscribe(function (response) {
            console.log(response);
        });
    };
    DataStorageService.prototype.deleteTable = function (table) {
        return this._http.post('http://localhost:1548/api/DeleteTable', table)
            .subscribe(function (response) {
            console.log(response);
        });
    };
    DataStorageService.prototype.addNewInventoryItem = function (inventory) {
        return this._http.post('http://localhost:1548/api/AddNewInventory', inventory)
            .subscribe(function (response) {
            console.log(response);
        });
    };
    DataStorageService.prototype.editInventoryItem = function (inventory) {
        return this._http.post('http://localhost:1548/api/EditInventoryItem', inventory)
            .subscribe(function (response) {
            console.log(response);
        });
    };
    DataStorageService.prototype.updateInventoryHistory = function (updateHistory) {
        return this._http.post('http://localhost:1548/api/UpdateInventoryHistory', updateHistory);
    };
    DataStorageService.prototype.deleteInventoryItem = function (inventory) {
        return this._http.post('http://localhost:1548/api/DeleteInventoryItem', inventory);
    };
    DataStorageService.prototype.addFoodItem = function (foodItem) {
        return this._http.post('http://localhost:1548/api/AddFoodItem', foodItem)
            .subscribe(function (response) {
            console.log(response);
        });
    };
    DataStorageService.prototype.deleteFoodItem = function (foodItem) {
        return this._http.post('http://localhost:1548/api/DeleteFoodItem', foodItem);
    };
    DataStorageService.prototype.editFoodItem = function (foodItem) {
        return this._http.post('http://localhost:1548/api/EditFoodItem', foodItem);
    };
    return DataStorageService;
}());
DataStorageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__our_offers_our_offers_service__["a" /* OurOffersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__our_offers_our_offers_service__["a" /* OurOffersService */]) === "function" && _b || Object])
], DataStorageService);

var _a, _b;
//# sourceMappingURL=data-storage.service.js.map

/***/ }),

/***/ "./src/app/shared/food-item.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodItems; });
var FoodItems = (function () {
    function FoodItems(id, serialNo, name, price, makingCost, profit, totalSale, foodItemImage, ingredients) {
        this.Id = id;
        this.SerialNo = serialNo;
        this.Name = name;
        this.Price = price;
        this.MakingCost = makingCost;
        this.Profit = profit;
        this.TotalSale = totalSale;
        this.Ingredients = ingredients;
        this.FoodItemImage = foodItemImage;
    }
    return FoodItems;
}());

//# sourceMappingURL=food-item.model.js.map

/***/ }),

/***/ "./src/app/shared/ingredients.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ingredients; });
var Ingredients = (function () {
    function Ingredients(id, name, quantity, unit, inventoryId, inventoryPrice, subTotal, foodItemId) {
        this.Id = id;
        this.Name = name;
        this.Quantity = quantity;
        this.Unit = unit;
        this.InventoryId = inventoryId;
        this.InventoryPrice = inventoryPrice;
        this.SubTotal = subTotal;
        this.FoodItemId = foodItemId;
    }
    return Ingredients;
}());

//# sourceMappingURL=ingredients.model.js.map

/***/ }),

/***/ "./src/app/shared/inventory-history.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryHistoryModel; });
var InventoryHistoryModel = (function () {
    function InventoryHistoryModel(id, inventoryId, updatedQuantity, updateTime, unit, currentPrice) {
        this.Id = id;
        this.InventoryId = inventoryId;
        this.UpdatedQuantity = updatedQuantity;
        this.UpdateTime = updateTime;
        this.Unit = unit;
        this.CurrentPrice = currentPrice;
    }
    return InventoryHistoryModel;
}());

//# sourceMappingURL=inventory-history.model.js.map

/***/ }),

/***/ "./src/app/shared/inventory.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Inventory; });
var Inventory = (function () {
    function Inventory(id, name, usedQuantity, remainingQuantity, unit, averagePrice, inventoryHistoryModel) {
        if (inventoryHistoryModel === void 0) { inventoryHistoryModel = []; }
        this.Id = id;
        this.Name = name;
        this.UsedQuantity = usedQuantity;
        this.RemainingQuantity = remainingQuantity;
        this.Unit = unit;
        this.AveragePrice = averagePrice;
        this.InventoryHistoryModel = inventoryHistoryModel;
    }
    return Inventory;
}());

//# sourceMappingURL=inventory.model.js.map

/***/ }),

/***/ "./src/app/shared/modified-user-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifiedUserResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModifiedUserResolverService = (function () {
    function ModifiedUserResolverService(_userService) {
        this._userService = _userService;
    }
    ModifiedUserResolverService.prototype.resolve = function (route, state) {
        return this._userService.getUsers();
    };
    return ModifiedUserResolverService;
}());
ModifiedUserResolverService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */]) === "function" && _a || Object])
], ModifiedUserResolverService);

var _a;
//# sourceMappingURL=modified-user-resolver.service.js.map

/***/ }),

/***/ "./src/app/shared/modified-user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifiedUserModel; });
var ModifiedUserModel = (function () {
    function ModifiedUserModel(userName, email, role, dateTime) {
        this.UserName = userName;
        this.Email = email;
        this.Role = role;
        this.DateTime = dateTime;
    }
    return ModifiedUserModel;
}());

//# sourceMappingURL=modified-user.model.js.map

/***/ }),

/***/ "./src/app/shared/order.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Order; });
var Order = (function () {
    function Order(id, orderedItems, totalPrice, tendered, change, dateTime, tableNo, inventoryCost, profit) {
        this.Id = id;
        this.OrderedItems = orderedItems;
        this.TotalPrice = totalPrice;
        this.Tendered = tendered;
        this.Change = change;
        this.DateTime = dateTime;
        this.TableNo = tableNo;
        this.InventoryCost = inventoryCost;
        this.Profit = profit;
    }
    return Order;
}());

//# sourceMappingURL=order.model.js.map

/***/ }),

/***/ "./src/app/shared/ordered-items.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderedItems; });
var OrderedItems = (function () {
    function OrderedItems(orderItemId, orderId, foodItemId, foodItemQuantity, foodItemName, foodItemSerialNo, price, foodItemSubTotal, foodItemMakingCost) {
        this.OrderItemId = orderItemId;
        this.OrderId = orderId;
        this.FoodItemId = foodItemId;
        this.FoodItemQuantity = foodItemQuantity;
        this.FoodItemName = foodItemName;
        this.FoodItemSerialNo = foodItemSerialNo;
        this.Price = price;
        this.FoodItemSubTotal = foodItemSubTotal;
        this.FoodItemMakingCost = foodItemMakingCost;
    }
    return OrderedItems;
}());

//# sourceMappingURL=ordered-items.model.js.map

/***/ }),

/***/ "./src/app/shared/search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, filterString, itemName) {
        if (filterString === '') {
            return value;
        }
        var resultArray = [];
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var item = value_1[_i];
            if (item[itemName] === filterString) {
                resultArray.push(item);
            }
        }
        return resultArray;
    };
    return SearchPipe;
}());
SearchPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'search'
    })
], SearchPipe);

//# sourceMappingURL=search.pipe.js.map

/***/ }),

/***/ "./src/app/shared/table.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Table; });
var Table = (function () {
    function Table(id, name) {
        this.Id = id;
        this.Name = name;
    }
    return Table;
}());

//# sourceMappingURL=table.model.js.map

/***/ }),

/***/ "./src/app/shared/user-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserFilterPipe = (function () {
    function UserFilterPipe() {
    }
    UserFilterPipe.prototype.transform = function (users, term) {
        if (term === undefined) {
            return users;
        }
        return users.filter(function (user) {
            return user.UserName.toLowerCase()
                .includes(term.toLowerCase());
        });
    };
    return UserFilterPipe;
}());
UserFilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'userFilter'
    })
], UserFilterPipe);

//# sourceMappingURL=user-filter.pipe.js.map

/***/ }),

/***/ "./src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this.rootUrl = 'http://localhost:1548';
        this._modifiedUserJson = 'assets/modified-user.json';
        this._modifiedUserApi = 'http://localhost:1548/api/GetUsersList';
    }
    UserService.prototype.registerUser = function (name, password, email, role, dateTime) {
        var body = {
            UserName: name,
            Password: password,
            Email: email,
            Role: role,
            DateTime: dateTime
        };
        var reqHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpHeaders */]({ 'No-Auth': 'True' });
        return this._http.post(this.rootUrl + '/api/User/Register', body);
    };
    UserService.prototype.userAuthentication = function (userName, password) {
        var data = 'username=' + userName + '&password=' + password + '&grant_type=password';
        var reqHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpHeaders */]({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });
        return this._http.post(this.rootUrl + '/token', data);
    };
    UserService.prototype.getAllRoles = function () {
        return this._http.get('/assets/role.json').map(function (response) {
            var role = response.json();
            console.log(role);
            return role;
        });
    };
    UserService.prototype.resetPassword = function (userName) {
        var body = {
            UserName: userName,
            Id: '',
            NewPassword: ''
        };
        return this._http.post(this.rootUrl + '/api/ResetPassword', body);
    };
    UserService.prototype.newPassword = function (password, code) {
        var body = {
            UserName: '',
            Id: code,
            NewPassword: password
        };
        return this._http.post(this.rootUrl + '/api/NewPassword', body);
    };
    UserService.prototype.roleMatch = function (allowedRoles) {
        var isMatch = false;
        var userRoles = JSON.parse(JSON.stringify(localStorage.getItem('userRoles')));
        allowedRoles.forEach(function (element) {
            if (userRoles.indexOf(element) > -1) {
                isMatch = true;
                return false;
            }
        });
        return isMatch;
    };
    UserService.prototype.deleteUser = function (user) {
        return this._http.post(this.rootUrl + '/api/DeleteUser', user).subscribe(function (response) {
            console.log(response);
        });
    };
    UserService.prototype.getUsers = function () {
        return this._http.get(this._modifiedUserJson).map(function (response) {
            var users = response.json();
            console.log(users);
            return users;
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js__ = __webpack_require__("./node_modules/zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_zone_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reflect_metadata__ = __webpack_require__("./node_modules/reflect-metadata/Reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reflect_metadata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reflect_metadata__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polyfills__ = __webpack_require__("./src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("./src/environments/environment.ts");







if (__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_5__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "./src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__ = __webpack_require__("./node_modules/core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone__ = __webpack_require__("./node_modules/zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect';
/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.

/**
 * Required to support Web Animations `@angular/platform-browser/animations`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
/**
 * Need to import at least one locale-data with intl.
 */
// import 'intl/locale-data/jsonp/en';
//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map