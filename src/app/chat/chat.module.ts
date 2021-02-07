import {CommonModule}        from "@angular/common";
import {NgModule}            from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {MessageService}      from "../../@core/services/message.service";
import {ButtonModule}        from "../../@layouts/button/button.module";
import {CardModule}          from "../../@layouts/card/card.module";
import {FieldrowModule}      from "../../@layouts/fieldrow/fieldrow.module";

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
        ReactiveFormsModule,
    ],
    providers: [
        MessageService,
    ]
})
export class ChatModule {
}
