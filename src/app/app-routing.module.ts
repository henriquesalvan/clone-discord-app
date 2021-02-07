import {NgModule}             from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HttpRoutingGuard}     from "../@core/http-client/http.routing.guard";

const routes: Routes = [{
    path: "",
    canActivateChild: [HttpRoutingGuard],
    children: [
        {
            path: "login",
            loadChildren: () => import("./login/login.module").then((module) => module.LoginModule),
            data: {routeAnimation: "login"}
        },
        {
            path: "register",
            loadChildren: () => import("./register/register.module").then((module) => module.RegisterModule),
            data: {routeAnimation: "register"}
        },
        {
            path: "chat",
            loadChildren: () => import("./chat/chat.module").then((module) => module.ChatModule),
            data: {routeAnimation: "chat"}
        },

        {path: "", redirectTo: "login", pathMatch: "full"},
    ]
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
