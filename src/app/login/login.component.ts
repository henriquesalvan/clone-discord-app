import {Component, OnInit}                  from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router}                             from "@angular/router";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {

    public submitLoading: boolean = false;

    public payload: FormGroup = new FormGroup({
        cpf: new FormControl("", [Validators.required, Validators.minLength(14)]),
        password: new FormControl("", [Validators.required, Validators.minLength(6)]),
    });

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    get cpf() {
        return this.payload.get("cpf");
    }

    get password() {
        return this.payload.get("password");
    }

    public submit() {

        if (!this.payload.valid) {
            this.payload.markAllAsTouched();
            return;
        }

        this.submitLoading = true;

        setTimeout(() => {
            this.submitLoading = false;
            this.router.navigate(["/chat"]);
        }, 1000);
    }

}
