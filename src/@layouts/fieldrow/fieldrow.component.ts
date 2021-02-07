import {Component, Input} from "@angular/core";

@Component({
    selector: "app-fieldrow",
    styleUrls: ["./fieldrow.component.scss"],
    template: `
        <div class="form-group">
            <label *ngIf="label.length >= 1">{{label}}</label>
            <ng-content></ng-content>
        </div>
    `
})
export class FieldrowComponent {
    @Input("label") public label: string = "";
}
