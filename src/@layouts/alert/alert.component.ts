import {Component, Input} from "@angular/core";

@Component({
    selector: "app-alert",
    styleUrls: ["./alert.component.scss"],
    template: `
        <div [class]="classes">
            <ng-content></ng-content>
        </div>
    `
})
export class AlertComponent {

    @Input("class") public class: string = "";

    get classes() {
        return this.class.length >= 1 ? `alert ${this.class}` : "alert";
    }

}
