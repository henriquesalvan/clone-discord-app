import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {FormControl, FormGroup, Validators}                      from "@angular/forms";
import {Router}                                   from "@angular/router";
import {__nativeWindow}                           from "../../@core/helpers/functions";
import {AuthStorage}                              from "../../@core/helpers/storage";
import {LoginService}                             from "../../@core/services/login.service";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {

    public submitLoading: boolean = false;

    public errorMessage?: string | undefined | null;

    public successMessage?: string | undefined | null;

    public payload: FormGroup = new FormGroup({
        cpf: new FormControl("", [Validators.required, Validators.minLength(14)]),
        password: new FormControl("", [Validators.required, Validators.minLength(6)]),
    });

    constructor(private router: Router, private loginService: LoginService) {
    }

    ngOnInit(): void {

        let newUser = __nativeWindow().history.state?.newUser;

        if (newUser && newUser.id) {
            this.successMessage = "Conta criada com sucesso!";
        }

    }

    get cpf() {
        return this.payload.get("cpf");
    }

    get password() {
        return this.payload.get("password");
    }

    public informError(message: string) {
        this.payload.reset();
        this.errorMessage = message;
        this.successMessage = undefined;
    }

    public submit() {

        if (!this.payload.valid) {
            this.payload.markAllAsTouched();
            return;
        }

        this.submitLoading = true;

        this.loginService.login(this.payload.getRawValue()).subscribe(httpResponse => {

            if (httpResponse.success && httpResponse.content) {
                AuthStorage.setToken(httpResponse.content);
                this.router.navigate(["/chat"]);
            } else {
                this.informError("Ops, aconteceu algum problema, tente novamente mais tarde!");
            }

            this.submitLoading = false;

        }, httpErrorResponse => {

            if (httpErrorResponse?.error?.errors[0]?.message === "Invalid user credentials") {
                this.informError("CPF ou senha incorretos!");
            } else {
                this.informError("Ops, aconteceu algum problema, tente novamente mais tarde!");
            }

            this.submitLoading = false;

        });
    }

}
