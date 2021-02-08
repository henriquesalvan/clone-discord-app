(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/henrique/code/clone-discord-app/src/main.ts */"zUnb");


/***/ }),

/***/ "4krI":
/*!*********************************************!*\
  !*** ./src/@core/services/login.service.ts ***!
  \*********************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "JgJg");



class LoginService extends _http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] {
    resource() {
        return "auth";
    }
    login(login) {
        return this.httpClient.post(`${this.uri}/login`, login);
    }
    acknowledge() {
        return this.httpClient.get(`${this.uri}/acknowledge`);
    }
    logout() {
        return this.httpClient.get(`${this.uri}/logout`);
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return ɵLoginService_BaseFactory(t || LoginService); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac });
const ɵLoginService_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](LoginService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "AG0W":
/*!**********************************************************!*\
  !*** ./src/@core/http-interceptors/token.interceptor.ts ***!
  \**********************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _helpers_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/storage */ "UtGM");



class TokenInterceptor {
    intercept(req, next) {
        let authReq;
        const token = _helpers_storage__WEBPACK_IMPORTED_MODULE_1__["AuthStorage"].getToken();
        if (token && token.token) {
            authReq = req.clone({
                headers: req.headers.set("Authorization", `Bearer ${token.token}`)
            });
        }
        return next.handle(authReq || req);
    }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(); };
TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    storage: {
        key: "clone-discord-app",
    },
    getPrefixApi: () => "/api",
    ws: "ws://localhost:4201",
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "JgJg":
/*!********************************************!*\
  !*** ./src/@core/services/http.service.ts ***!
  \********************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class HttpService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.uri = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getPrefixApi()}/${this.resource()}`;
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "N4Vm":
/*!****************************************!*\
  !*** ./src/@core/helpers/functions.ts ***!
  \****************************************/
/*! exports provided: __isNull, __isUndefined, __isNullOrUndefined, __isBoolean, __isFunction, __isNumber, __isString, __nativeWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__isNull", function() { return __isNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__isUndefined", function() { return __isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__isNullOrUndefined", function() { return __isNullOrUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__isBoolean", function() { return __isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__isFunction", function() { return __isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__isNumber", function() { return __isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__isString", function() { return __isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__nativeWindow", function() { return __nativeWindow; });
function __isNull(object) {
    return object === null;
}
function __isUndefined(object) {
    return object === undefined;
}
function __isNullOrUndefined(object) {
    return __isNull(object) || __isUndefined(object);
}
function __isBoolean(object) {
    return !__isUndefined(object) && typeof object === "boolean";
}
function __isFunction(object) {
    return !__isUndefined(object) && typeof object === "function";
}
function __isNumber(object) {
    return !__isUndefined(object) && typeof object === "number";
}
function __isString(object) {
    return !__isUndefined(object) && typeof object === "string";
}
function __nativeWindow() {
    return window;
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _route_transition_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./route-transition-animations */ "jJ8u");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    prepareRoute(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData["routeAnimation"];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 1, consts: [[1, "container"], ["src", "assets/images/discord.svg", "alt", "Logo Nubank", "title", "Logo Nubank"], ["outlet", "outlet"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeAnimations", ctx.prepareRoute(_r0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".container[_ngcontent-%COMP%] {\n  background-color: #2F3136;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100px;\n  left: 40px;\n  top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUNSIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRjMxMzY7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBpbWcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgbGVmdDogNDBweDtcbiAgICAgICAgdG9wOiAyMHB4O1xuICAgIH1cbn1cbiJdfQ== */"], data: { animation: [_route_transition_animations__WEBPACK_IMPORTED_MODULE_1__["routeTransitionAnimations"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-root",
                templateUrl: "./app.component.html",
                styleUrls: ["./app.component.scss"],
                animations: [_route_transition_animations__WEBPACK_IMPORTED_MODULE_1__["routeTransitionAnimations"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "UAA4":
/*!**********************************************!*\
  !*** ./src/@core/http-client/http.module.ts ***!
  \**********************************************/
/*! exports provided: HttpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpModule", function() { return HttpModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-interceptors/token.interceptor */ "AG0W");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/login.service */ "4krI");
/* harmony import */ var _http_routing_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http.routing.guard */ "r6Vd");






class HttpModule {
}
HttpModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HttpModule });
HttpModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function HttpModule_Factory(t) { return new (t || HttpModule)(); }, providers: [
        _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
        _http_routing_guard__WEBPACK_IMPORTED_MODULE_4__["HttpRoutingGuard"],
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _http_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_2__["TokenInterceptor"], multi: true },
    ], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        ], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HttpModule, { imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]], exports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HttpModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                ],
                exports: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                ],
                providers: [
                    _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
                    _http_routing_guard__WEBPACK_IMPORTED_MODULE_4__["HttpRoutingGuard"],
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _http_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_2__["TokenInterceptor"], multi: true },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "UtGM":
/*!**************************************!*\
  !*** ./src/@core/helpers/storage.ts ***!
  \**************************************/
/*! exports provided: LocalStorage, SessionStorage, AuthStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorage", function() { return LocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionStorage", function() { return SessionStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthStorage", function() { return AuthStorage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions */ "N4Vm");




class AbstractStorage {
    static set(wildCard, key, content) {
        if (!Object(_functions__WEBPACK_IMPORTED_MODULE_2__["__isNullOrUndefined"])(content)) {
            AbstractStorage.getStorage(wildCard).setItem(AbstractStorage.getKey(key), JSON.stringify({ content: content }));
        }
    }
    static get(wildCard, key) {
        let content = AbstractStorage.getStorage(wildCard).getItem(AbstractStorage.getKey(key));
        if (!Object(_functions__WEBPACK_IMPORTED_MODULE_2__["__isNullOrUndefined"])(content)) {
            return JSON.parse(content).content;
        }
        return null;
    }
    static remove(wildCard, key) {
        AbstractStorage.getStorage(wildCard).removeItem(AbstractStorage.getKey(key));
    }
    static getKey(key) {
        return (AbstractStorage.appKey + key);
    }
    static getStorage(wildCard) {
        return Object(_functions__WEBPACK_IMPORTED_MODULE_2__["__nativeWindow"])()[wildCard + "Storage"];
    }
}
AbstractStorage.appKey = "__" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].storage.key + "__";
class LocalStorage extends AbstractStorage {
    static set(key, content) {
        super.set(LocalStorage.wildCard, key, content);
    }
    static get(key) {
        return super.get(LocalStorage.wildCard, key);
    }
    static remove(key) {
        super.remove(LocalStorage.wildCard, key);
    }
}
LocalStorage.wildCard = "local";
LocalStorage.ɵfac = function LocalStorage_Factory(t) { return ɵLocalStorage_BaseFactory(t || LocalStorage); };
LocalStorage.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStorage, factory: LocalStorage.ɵfac });
const ɵLocalStorage_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](LocalStorage);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalStorage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
class SessionStorage extends AbstractStorage {
    static set(key, content) {
        super.set(SessionStorage.wildCard, key, content);
    }
    static get(key) {
        return super.get(SessionStorage.wildCard, key);
    }
    static remove(key) {
        super.remove(SessionStorage.wildCard, key);
    }
}
SessionStorage.wildCard = "session";
SessionStorage.ɵfac = function SessionStorage_Factory(t) { return ɵSessionStorage_BaseFactory(t || SessionStorage); };
SessionStorage.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SessionStorage, factory: SessionStorage.ɵfac });
const ɵSessionStorage_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](SessionStorage);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SessionStorage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
class AuthStorage extends SessionStorage {
    static setToken(token) {
        this.set(AuthStorage.token, token);
    }
    static getToken() {
        return this.get(AuthStorage.token);
    }
    static setLoggedUser(currentUser) {
        this.set(AuthStorage.loggedUser, currentUser);
    }
    static getLoggedUser() {
        return this.get(AuthStorage.loggedUser);
    }
    static deleteLoggedUserAndToken() {
        this.remove(AuthStorage.token);
        this.remove(AuthStorage.loggedUser);
    }
}
AuthStorage.loggedUser = "logged-user";
AuthStorage.token = "token";
AuthStorage.ɵfac = function AuthStorage_Factory(t) { return ɵAuthStorage_BaseFactory(t || AuthStorage); };
AuthStorage.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthStorage, factory: AuthStorage.ɵfac });
const ɵAuthStorage_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](AuthStorage);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthStorage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _core_http_client_http_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@core/http-client/http.module */ "UAA4");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _core_http_client_http_module__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _core_http_client_http_module__WEBPACK_IMPORTED_MODULE_4__["HttpModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _core_http_client_http_module__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "jJ8u":
/*!************************************************!*\
  !*** ./src/app/route-transition-animations.ts ***!
  \************************************************/
/*! exports provided: routeTransitionAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeTransitionAnimations", function() { return routeTransitionAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const routeTransitionAnimations = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("routeAnimations", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("login => register, login => chat", [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, "margin-left": "0px" })]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.2s ease-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, "margin-left": "-500px" }))]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.2s ease-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, "margin-left": "-250px", }))]),
        ]),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("register => login, chat => login", [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, "margin-left": "-500px" })]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.2s ease-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, "margin-left": "0px" }))]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.2s ease-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, "margin-left": "-250px", }))]),
        ]),
    ])
]);


/***/ }),

/***/ "r6Vd":
/*!*****************************************************!*\
  !*** ./src/@core/http-client/http.routing.guard.ts ***!
  \*****************************************************/
/*! exports provided: HttpRoutingGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRoutingGuard", function() { return HttpRoutingGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _helpers_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/functions */ "N4Vm");
/* harmony import */ var _helpers_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/storage */ "UtGM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/login.service */ "4krI");







class HttpRoutingGuard {
    constructor(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.authenticatedRouter = ["/chat"];
        this.nonAuthenticatedRouter = ["/login"];
    }
    canActivateChild(route, state) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            let token = _helpers_storage__WEBPACK_IMPORTED_MODULE_3__["AuthStorage"].getToken();
            if (route.data && Object(_helpers_functions__WEBPACK_IMPORTED_MODULE_2__["__isNullOrUndefined"])(route.data.needsCredentials)) {
                return observer.next(true);
            }
            if (route.data.needsCredentials === false && (!token || !token.token)) {
                return observer.next(true);
            }
            this.loginService.acknowledge().subscribe(httpResponse => {
                if (httpResponse.success && httpResponse.content) {
                    _helpers_storage__WEBPACK_IMPORTED_MODULE_3__["AuthStorage"].setLoggedUser(httpResponse.content);
                    if (route.data.needsCredentials === false) {
                        this.router.navigate(this.authenticatedRouter);
                        observer.next(false);
                    }
                    else {
                        observer.next(true);
                    }
                }
                else {
                    _helpers_storage__WEBPACK_IMPORTED_MODULE_3__["AuthStorage"].deleteLoggedUserAndToken();
                    if (route.data.needsCredentials === true) {
                        this.router.navigate(this.nonAuthenticatedRouter);
                        observer.next(false);
                    }
                    else {
                        observer.next(true);
                    }
                }
            });
        });
    }
    static needsCredentials(value = true, data = {}) {
        data.needsCredentials = value;
        return data;
    }
}
HttpRoutingGuard.ɵfac = function HttpRoutingGuard_Factory(t) { return new (t || HttpRoutingGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"])); };
HttpRoutingGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpRoutingGuard, factory: HttpRoutingGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpRoutingGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_http_client_http_routing_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@core/http-client/http.routing.guard */ "r6Vd");





const routes = [{
        path: "",
        canActivateChild: [_core_http_client_http_routing_guard__WEBPACK_IMPORTED_MODULE_2__["HttpRoutingGuard"]],
        children: [
            {
                path: "login",
                loadChildren: () => Promise.all(/*! import() | login-login-module */[__webpack_require__.e("default~chat-chat-module~login-login-module~register-register-module"), __webpack_require__.e("default~login-login-module~register-register-module"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then((module) => module.LoginModule),
                data: { routeAnimation: "login" }
            },
            {
                path: "register",
                loadChildren: () => Promise.all(/*! import() | register-register-module */[__webpack_require__.e("default~chat-chat-module~login-login-module~register-register-module"), __webpack_require__.e("default~login-login-module~register-register-module"), __webpack_require__.e("register-register-module")]).then(__webpack_require__.bind(null, /*! ./register/register.module */ "x5bZ")).then((module) => module.RegisterModule),
                data: { routeAnimation: "register" }
            },
            {
                path: "chat",
                loadChildren: () => Promise.all(/*! import() | chat-chat-module */[__webpack_require__.e("default~chat-chat-module~login-login-module~register-register-module"), __webpack_require__.e("chat-chat-module")]).then(__webpack_require__.bind(null, /*! ./chat/chat.module */ "2yxt")).then((module) => module.ChatModule),
                data: { routeAnimation: "chat" }
            },
            { path: "", redirectTo: "login", pathMatch: "full" },
        ]
    }];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map