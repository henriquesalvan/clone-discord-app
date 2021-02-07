import {Component, Input} from "@angular/core";

@Component({
    selector: "app-button",
    styleUrls: ["./button.component.scss"],
    template: `
        <button [type]="type" [disabled]="loading" [class]="classes">
            <ng-template [ngIf]="!loading">
                <ng-content></ng-content>
            </ng-template>
            <span class="loading" *ngIf="loading">
                Aguarde ...
            </span>
        </button>
    `
})
export class ButtonComponent {

    @Input("class") public class: string = "";
    @Input("type") public type: string = "button";
    @Input("loading") public loading: boolean = false;

    get classes() {
        return this.class.length >= 1 ? `btn ${this.class}` : "btn";
    }

}
