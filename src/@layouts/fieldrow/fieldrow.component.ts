import {Component, Input} from "@angular/core";
import {AbstractControl}  from "@angular/forms";

@Component({
    selector: "app-fieldrow",
    styleUrls: ["./fieldrow.component.scss"],
    template: `
        <div [class]="classes">
            <label *ngIf="label.length >= 1">{{label}} <i *ngIf="labelHelper.length >= 1">{{labelHelper}}</i></label>
            <ng-content></ng-content>
        </div>
    `
})
export class FieldrowComponent {

    @Input("label") public label: string = "";
    @Input("abstractControl") public abstractControl: AbstractControl | undefined = undefined;

    get labelHelper() {
        return this.isInvalid ? "- campo obrigatório" : "";
    }

    get classes() {
        return this.isInvalid ? "form-group form-group-invalid" : "form-group";
    }

    get isInvalid() {
        return this.abstractControl && this.abstractControl.invalid && this.abstractControl.touched;
    }

}
