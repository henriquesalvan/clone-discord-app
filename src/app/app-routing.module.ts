import {NgModule}             from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [

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

    //importante manter sempre no final
    {path: "", redirectTo: "login", pathMatch: "full"},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
