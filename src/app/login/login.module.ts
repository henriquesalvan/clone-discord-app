import {CommonModule}        from "@angular/common";
import {NgModule}            from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxMaskModule}       from "ngx-mask";
import {ButtonModule}        from "../../@layouts/button/button.module";
import {CardModule}          from "../../@layouts/card/card.module";
import {FieldrowModule}      from "../../@layouts/fieldrow/fieldrow.module";

import {LoginRoutingModule} from "./login-routing.module";
import {LoginComponent}     from "./login.component";


@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        LoginRoutingModule,
        ButtonModule,
        FieldrowModule,
        CardModule,
        NgxMaskModule.forRoot(),
        ReactiveFormsModule,
    ]
})
export class LoginModule {
}
