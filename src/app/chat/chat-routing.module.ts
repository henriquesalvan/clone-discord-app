import {NgModule}             from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ChatRoutingGuard}     from "./chat-routing.guard";
import {ChatComponent}        from "./chat.component";

const routes: Routes = [
    {path: "", component: ChatComponent, canActivate: [ChatRoutingGuard]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChatRoutingModule {
}
