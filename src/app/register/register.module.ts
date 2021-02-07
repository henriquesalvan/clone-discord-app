import {CommonModule}        from "@angular/common";
import {NgModule}            from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxMaskModule}       from "ngx-mask";
import {AlertModule}         from "../../@layouts/alert/alert.module";
import {ButtonModule}        from "../../@layouts/button/button.module";
import {CardModule}          from "../../@layouts/card/card.module";
import {FieldrowModule}      from "../../@layouts/fieldrow/fieldrow.module";

import {RegisterRoutingModule} from "./register-routing.module";
import {RegisterComponent}     from "./register.component";


@NgModule({
    declarations: [RegisterComponent],
    imports: [
        CommonModule,
        RegisterRoutingModule,
        ButtonModule,
        FieldrowModule,
        CardModule,
        AlertModule,
        NgxMaskModule.forRoot(),
        ReactiveFormsModule,
    ]
})
export class RegisterModule {
}
