import {NgModule}             from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HttpRoutingGuard}     from "../../@core/http-client/http.routing.guard";
import {LoginComponent}       from "./login.component";

const routes: Routes = [
    {path: "", component: LoginComponent, data: HttpRoutingGuard.needsCredentials(false)}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule {
}
