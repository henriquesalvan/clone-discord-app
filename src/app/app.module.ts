import {CommonModule}            from "@angular/common";
import {NgModule}                from "@angular/core";
import {BrowserModule}           from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpModule}              from "../@core/http-client/http.module";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent}     from "./app.component";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
