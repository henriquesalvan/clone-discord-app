import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NgModule}                            from "@angular/core";
import {TokenInterceptor}                    from "../http-interceptors/token.interceptor";
import {LoginService}                        from "../services/login.service";
import {HttpRoutingGuard}                    from "./http.routing.guard";


@NgModule({
    imports: [
        HttpClientModule,
    ],
    exports: [
        HttpClientModule,
    ],
    providers: [
        LoginService,
        HttpRoutingGuard,
        {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    ],
})
export class HttpModule {
}
