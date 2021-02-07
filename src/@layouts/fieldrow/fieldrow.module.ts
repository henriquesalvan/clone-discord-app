import {CommonModule}      from "@angular/common";
import {NgModule}          from "@angular/core";
import {FieldrowComponent} from "./fieldrow.component";


@NgModule({
    declarations: [
        FieldrowComponent
    ],
    exports: [
        FieldrowComponent
    ],
    imports: [
        CommonModule
    ]
})
export class FieldrowModule {
}
