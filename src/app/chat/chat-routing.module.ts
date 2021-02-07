import {NgModule}             from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HttpRoutingGuard}     from "../../@core/http-client/http.routing.guard";
import {ChatComponent}        from "./chat.component";

const routes: Routes = [
    {path: "", component: ChatComponent, data: HttpRoutingGuard.needsCredentials(true)}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChatRoutingModule {
}
