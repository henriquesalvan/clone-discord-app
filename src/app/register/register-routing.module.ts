import {NgModule}             from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HttpRoutingGuard}     from "../../@core/http-client/http.routing.guard";
import {RegisterComponent}    from "./register.component";

const routes: Routes = [
    {path: "", component: RegisterComponent, data: HttpRoutingGuard.needsCredentials(false)}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegisterRoutingModule {
}
