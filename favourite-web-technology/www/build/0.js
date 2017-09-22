webpackJsonp([0],{

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTechnologyModule", function() { return AddTechnologyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_technology__ = __webpack_require__(264);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddTechnologyModule = (function () {
    function AddTechnologyModule() {
    }
    return AddTechnologyModule;
}());
AddTechnologyModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__add_technology__["a" /* AddTechnology */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_technology__["a" /* AddTechnology */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__add_technology__["a" /* AddTechnology */]
        ]
    })
], AddTechnologyModule);

//# sourceMappingURL=add-technology.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTechnology; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddTechnology = (function () {
    // Initialise module classes
    function AddTechnology(navCtrl, http, NP, fb, toastCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.NP = NP;
        this.fb = fb;
        this.toastCtrl = toastCtrl;
        // Flag to be used for checking whether we are adding/editing an entry
        this.isEdited = false;
        // Flag to hide the form upon successful completion of remote operation
        this.hideForm = false;
        // Property to store the recordID for when an existing entry is being edited
        this.recordID = null;
        this.baseURI = "http://localhost/ionic-php-mysql/";
        // Create form builder validation rules
        this.form = fb.group({
            "name": ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            "description": ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    // Determine whether we adding or editing a record
    // based on any supplied navigation parameters
    AddTechnology.prototype.ionViewWillEnter = function () {
        this.resetFields();
        if (this.NP.get("record")) {
            this.isEdited = true;
            this.selectEntry(this.NP.get("record"));
            this.pageTitle = 'Amend entry';
        }
        else {
            this.isEdited = false;
            this.pageTitle = 'Create entry';
        }
    };
    // Assign the navigation retrieved data to properties
    // used as models on the page's HTML form
    AddTechnology.prototype.selectEntry = function (item) {
        this.technologyName = item.name;
        this.technologyDescription = item.description;
        this.recordID = item.id;
    };
    // Save a new record that has been added to the page's HTML form
    // Use angular's http post method to submit the record data 
    // to our remote PHP script (note the body variable we have created which 
    // supplies a variable of key with a value of create followed by the key/value pairs
    // for the record data
    AddTechnology.prototype.createEntry = function (name, description) {
        var _this = this;
        var body = "key=create&name=" + name + "&description=" + description, type = "application/x-www-form-urlencoded; charset=UTF-8", headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': type }), options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers }), url = this.baseURI + "manage-data.php";
        this.http.post(url, body, options)
            .subscribe(function (data) {
            // If the request was successful notify the user
            if (data.status === 200) {
                _this.hideForm = true;
                _this.sendNotification("Congratulations the technology: " + name + " was successfully added");
            }
            else {
                _this.sendNotification('Something went wrong!');
            }
        });
    };
    // Update an existing record that has been edited in the page's HTML form
    // Use angular's http post method to submit the record data 
    // to our remote PHP script (note the body variable we have created which 
    // supplies a variable of key with a value of update followed by the key/value pairs
    // for the record data
    AddTechnology.prototype.updateEntry = function (name, description) {
        var _this = this;
        var body = "key=update&name=" + name + "&description=" + description + "&recordID=" + this.recordID, type = "application/x-www-form-urlencoded; charset=UTF-8", headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': type }), options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers }), url = this.baseURI + "manage-data.php";
        this.http.post(url, body, options)
            .subscribe(function (data) {
            // If the request was successful notify the user
            if (data.status === 200) {
                _this.hideForm = true;
                _this.sendNotification("Congratulations the technology: " + name + " was successfully updated");
            }
            else {
                _this.sendNotification('Something went wrong!');
            }
        });
    };
    // Remove an existing record that has been selected in the page's HTML form
    // Use angular's http post method to submit the record data 
    // to our remote PHP script (note the body variable we have created which 
    // supplies a variable of key with a value of delete followed by the key/value pairs
    // for the record ID we want to remove from the remote database
    AddTechnology.prototype.deleteEntry = function () {
        var _this = this;
        var name = this.form.controls["name"].value, body = "key=delete&recordID=" + this.recordID, type = "application/x-www-form-urlencoded; charset=UTF-8", headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': type }), options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers }), url = this.baseURI + "manage-data.php";
        this.http.post(url, body, options)
            .subscribe(function (data) {
            // If the request was successful notify the user
            if (data.status === 200) {
                _this.hideForm = true;
                _this.sendNotification("Congratulations the technology: " + name + " was successfully deleted");
            }
            else {
                _this.sendNotification('Something went wrong!');
            }
        });
    };
    // Handle data submitted from the page's HTML form
    // Determine whether we are adding a new record or amending an
    // existing record
    AddTechnology.prototype.saveEntry = function () {
        var name = this.form.controls["name"].value, description = this.form.controls["description"].value;
        if (this.isEdited) {
            this.updateEntry(name, description);
        }
        else {
            this.createEntry(name, description);
        }
    };
    // Clear values in the page's HTML form fields
    AddTechnology.prototype.resetFields = function () {
        this.technologyName = "";
        this.technologyDescription = "";
    };
    // Manage notifying the user of the outcome
    // of remote operations
    AddTechnology.prototype.sendNotification = function (message) {
        var notification = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        notification.present();
    };
    return AddTechnology;
}());
AddTechnology = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-technology',template:/*ion-inline-start:"D:\ionic\favourite-web-technologies\src\pages\add-technology\add-technology.html"*/'<ion-header>\n   <ion-navbar>\n      <ion-title>{{ pageTitle }}</ion-title>\n   </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n   <div>\n      <ion-item *ngIf="isEdited && !hideForm">\n         <button \n            ion-button \n            item-right\n            color="secondary" \n            text-center \n            block \n            (click)="deleteEntry()">Remove this Entry?</button>\n      </ion-item>\n\n\n      <div *ngIf="hideForm">\n         <ion-item class="post-entry-message" text-wrap>\n            <h2>Success!</h2>\n            <p>Maybe you\'d like to edit an existing entry or add a new record?</p>\n            <p>Simply go back to the home page and select the option you want to pursue.</p>\n         </ion-item>\n      </div>\n\n\n      <div *ngIf="!hideForm">\n         <form [formGroup]="form" (ngSubmit)="saveEntry()">\n\n            <ion-list>\n               <ion-item-group>\n                  <ion-item-divider color="light">Technology Name *</ion-item-divider>\n                  <ion-item>\n                     <ion-input \n                        type="text" \n                        placeholder="Enter a name..." \n                        formControlName="name" \n                        [(ngModel)]="technologyName"></ion-input>\n                  </ion-item>\n               </ion-item-group>\n\n\n               <ion-item-group>\n                  <ion-item-divider color="light">Technology Description *</ion-item-divider>\n                  <ion-item>\n                     <ion-textarea \n                        placeholder="Description..." \n                        formControlName="description" \n                        rows="6"\n                        [(ngModel)]="technologyDescription"></ion-textarea>\n                  </ion-item>\n               </ion-item-group>\n\n\n               <ion-item>\n                  <button \n                     ion-button \n                     color="primary" \n                     text-center \n                     block \n                     [disabled]="!form.valid">Save Entry</button>\n               </ion-item>\n\n            </ion-list>\n\n         </form>\n      </div>\n   </div>\n\n\n</ion-content>'/*ion-inline-end:"D:\ionic\favourite-web-technologies\src\pages\add-technology\add-technology.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
], AddTechnology);

//# sourceMappingURL=add-technology.js.map

/***/ })

});
//# sourceMappingURL=0.js.map