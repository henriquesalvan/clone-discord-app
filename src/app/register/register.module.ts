import {CommonModule}   from "@angular/common";
import {NgModule}       from "@angular/core";
import {NgxMaskModule}  from "ngx-mask";
import {ButtonModule}   from "../../@layouts/button/button.module";
import {CardModule}     from "../../@layouts/card/card.module";
import {FieldrowModule} from "../../@layouts/fieldrow/fieldrow.module";

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
        NgxMaskModule.forRoot(),
    ]
})
export class RegisterModule {
}
