import {CommonModule}                        from "@angular/common";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NgModule}                            from "@angular/core";
import {TokenInterceptor}                    from "../../@core/http-interceptors/token.interceptor";
import {LoginService}                        from "../../@core/services/login.service";
import {ButtonModule}                        from "../../@layouts/button/button.module";
import {CardModule}                          from "../../@layouts/card/card.module";
import {FieldrowModule}                      from "../../@layouts/fieldrow/fieldrow.module";
import {ChatRoutingGuard}                    from "./chat-routing.guard";

import {ChatRoutingModule} from "./chat-routing.module";
import {ChatComponent}     from "./chat.component";


@NgModule({
    declarations: [ChatComponent],
    imports: [
        CommonModule,
        ChatRoutingModule,
        ButtonModule,
        FieldrowModule,
        CardModule,
        HttpClientModule,
    ],
    providers: [
        LoginService,
        ChatRoutingGuard,
        {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    ],
})
export class ChatModule {
}
