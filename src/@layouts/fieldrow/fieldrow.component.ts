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
    @Input("abstractControl") public abstractControl?: AbstractControl | null | undefined;

    get labelHelper() {

        if (this.isInvalid && this?.abstractControl?.errors?.minlength?.requiredLength) {
            return ` - o valor mínimo é de ${this?.abstractControl?.errors?.minlength?.requiredLength} caracteres`;
        }

        if (this.isInvalid && this?.abstractControl?.errors?.anotherUserAlreadyTaken) {
            return " - já existe em nosso banco de dados";
        }

        return this.isInvalid ? "- campo obrigatório" : "";

    }

    get classes() {
        return this.isInvalid ? "form-group form-group-invalid" : "form-group";
    }

    get isInvalid() {
        return this.abstractControl && this.abstractControl.invalid && this.abstractControl.touched;
    }

}
