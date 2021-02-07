import {Component, Input} from "@angular/core";

@Component({
    selector: "app-button",
    styleUrls: ["./button.component.scss"],
    template: `
        <button [disabled]="loading" class="btn {{class}}">
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
    @Input("loading") public loading: boolean = false;

}
