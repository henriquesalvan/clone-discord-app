(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_services_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@core/services/register.service */ "6iY5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layouts_card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@layouts/card/card.component */ "ahNA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _layouts_fieldrow_fieldrow_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../@layouts/fieldrow/fieldrow.component */ "PwkD");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-mask */ "tmjD");
/* harmony import */ var _layouts_button_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../@layouts/button/button.component */ "LJbi");
/* harmony import */ var _layouts_alert_alert_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../@layouts/alert/alert.component */ "f7yR");















function RegisterComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-alert", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
} }
const _c0 = function () { return ["/login"]; };
class RegisterComponent {
    constructor(registerService, router) {
        this.registerService = registerService;
        this.router = router;
        this.submitLoading = false;
        this.payload = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]),
            cpf: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(14)],
                asyncValidators: this.validationUniqueCpf(),
                updateOn: "blur"
            }),
        });
    }
    ngOnInit() {
    }
    get name() {
        return this.payload.get("name");
    }
    get cpf() {
        return this.payload.get("cpf");
    }
    get password() {
        return this.payload.get("password");
    }
    validationUniqueCpf() {
        return (control) => {
            let mapHttpResponse = (httpResponse) => {
                var _a;
                if (httpResponse.success && ((_a = httpResponse === null || httpResponse === void 0 ? void 0 : httpResponse.content) === null || _a === void 0 ? void 0 : _a.exists)) {
                    return { anotherUserAlreadyTaken: true };
                }
                else {
                    return null;
                }
            };
            return this.registerService.userExistsByCPF(control.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(mapHttpResponse), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null)));
        };
    }
    informError(message) {
        this.payload.reset();
        this.errorMessage = message;
    }
    submit() {
        if (!this.payload.valid) {
            this.payload.markAllAsTouched();
            return;
        }
        this.submitLoading = true;
        this.registerService.register(this.payload.getRawValue()).subscribe(httpResponse => {
            if (httpResponse.success && httpResponse.content) {
                this.router.navigate(["/login"], { state: { newUser: httpResponse.content } });
            }
            else {
                this.informError("Ops, aconteceu algum problema, tente novamente mais tarde!");
            }
            this.submitLoading = false;
        }, httpErrorResponse => {
            this.informError("Ops, aconteceu algum problema, tente novamente mais tarde!");
            this.submitLoading = false;
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_core_services_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"]])], decls: 22, vars: 10, consts: [[3, "formGroup", "ngSubmit"], ["title", "Crie sua conta"], ["card-content", ""], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-xs-12"], ["label", "Nome Completo", 3, "abstractControl"], ["type", "text", "name", "name", "placeholder", "Nome Completo", "formControlName", "name"], ["label", "CPF", 3, "abstractControl"], ["type", "text", "name", "cpf", "placeholder", "CPF", "formControlName", "cpf", 3, "mask", "dropSpecialCharacters"], ["label", "Senha", 3, "abstractControl"], ["type", "password", "name", "password", "placeholder", "Senha", "formControlName", "password", "autocomplete", "off"], ["card-footer", ""], ["type", "submit", 1, "btn-block", "btn-secondary", 3, "loading"], [1, "login"], [3, "routerLink"], [1, "alert-danger"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_0_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegisterComponent_div_3_Template, 4, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-fieldrow", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-fieldrow", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-fieldrow", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Criar Agora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "J\u00E1 tem uma conta?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.payload);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage && ctx.errorMessage.length >= 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("abstractControl", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("abstractControl", ctx.cpf);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mask", "000.000.000-00")("dropSpecialCharacters", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("abstractControl", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _layouts_card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _layouts_fieldrow_fieldrow_component__WEBPACK_IMPORTED_MODULE_8__["FieldrowComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], ngx_mask__WEBPACK_IMPORTED_MODULE_9__["MaskDirective"], _layouts_button_button_component__WEBPACK_IMPORTED_MODULE_10__["ButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _layouts_alert_alert_component__WEBPACK_IMPORTED_MODULE_11__["AlertComponent"]], styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  margin-left: -250px;\n  left: 50%;\n}\n\n  .card-footer button {\n  padding: 15px !important;\n}\n\n  .card-footer p.login {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFDSjs7QUFHSTtFQUNJLHdCQUFBO0FBQVI7O0FBR0k7RUFDSSxnQkFBQTtBQURSIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tbGVmdDogLTI1MHB4O1xuICAgIGxlZnQ6IDUwJTtcbn1cblxuOjpuZy1kZWVwIC5jYXJkLWZvb3RlciB7XG4gICAgYnV0dG9uIHtcbiAgICAgICAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIHAubG9naW4ge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-register",
                templateUrl: "./register.component.html",
                styleUrls: ["./register.component.scss"],
                providers: [_core_services_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"]]
            }]
    }], function () { return [{ type: _core_services_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "2t07":
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegisterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterRoutingModule", function() { return RegisterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_http_client_http_routing_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../@core/http-client/http.routing.guard */ "r6Vd");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.component */ "1W4x");






const routes = [
    { path: "", component: _register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"], data: _core_http_client_http_routing_guard__WEBPACK_IMPORTED_MODULE_2__["HttpRoutingGuard"].needsCredentials(false) }
];
class RegisterRoutingModule {
}
RegisterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RegisterRoutingModule });
RegisterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RegisterRoutingModule_Factory(t) { return new (t || RegisterRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RegisterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "6iY5":
/*!************************************************!*\
  !*** ./src/@core/services/register.service.ts ***!
  \************************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "JgJg");



class RegisterService extends _http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] {
    resource() {
        return "auth";
    }
    register(user) {
        return this.httpClient.post(`${this.uri}/register`, user);
    }
    userExistsByCPF(cpf) {
        return this.httpClient.post(`${this.uri}/register/checkCPF`, { cpf: cpf });
    }
}
RegisterService.ɵfac = function RegisterService_Factory(t) { return ɵRegisterService_BaseFactory(t || RegisterService); };
RegisterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RegisterService, factory: RegisterService.ɵfac });
const ɵRegisterService_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](RegisterService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "x5bZ":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-mask */ "tmjD");
/* harmony import */ var _layouts_alert_alert_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@layouts/alert/alert.module */ "NxI2");
/* harmony import */ var _layouts_button_button_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@layouts/button/button.module */ "6n7m");
/* harmony import */ var _layouts_card_card_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@layouts/card/card.module */ "7OSY");
/* harmony import */ var _layouts_fieldrow_fieldrow_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@layouts/fieldrow/fieldrow.module */ "FutI");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register-routing.module */ "2t07");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register.component */ "1W4x");












class RegisterModule {
}
RegisterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RegisterModule });
RegisterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function RegisterModule_Factory(t) { return new (t || RegisterModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_8__["RegisterRoutingModule"],
            _layouts_button_button_module__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"],
            _layouts_fieldrow_fieldrow_module__WEBPACK_IMPORTED_MODULE_7__["FieldrowModule"],
            _layouts_card_card_module__WEBPACK_IMPORTED_MODULE_6__["CardModule"],
            _layouts_alert_alert_module__WEBPACK_IMPORTED_MODULE_4__["AlertModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_3__["NgxMaskModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RegisterModule, { declarations: [_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _register_routing_module__WEBPACK_IMPORTED_MODULE_8__["RegisterRoutingModule"],
        _layouts_button_button_module__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"],
        _layouts_fieldrow_fieldrow_module__WEBPACK_IMPORTED_MODULE_7__["FieldrowModule"],
        _layouts_card_card_module__WEBPACK_IMPORTED_MODULE_6__["CardModule"],
        _layouts_alert_alert_module__WEBPACK_IMPORTED_MODULE_4__["AlertModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_3__["NgxMaskModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegisterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _register_routing_module__WEBPACK_IMPORTED_MODULE_8__["RegisterRoutingModule"],
                    _layouts_button_button_module__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"],
                    _layouts_fieldrow_fieldrow_module__WEBPACK_IMPORTED_MODULE_7__["FieldrowModule"],
                    _layouts_card_card_module__WEBPACK_IMPORTED_MODULE_6__["CardModule"],
                    _layouts_alert_alert_module__WEBPACK_IMPORTED_MODULE_4__["AlertModule"],
                    ngx_mask__WEBPACK_IMPORTED_MODULE_3__["NgxMaskModule"].forRoot(),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map