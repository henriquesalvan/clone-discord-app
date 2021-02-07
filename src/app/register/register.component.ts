import {Component, OnInit}                                                                       from "@angular/core";
import {AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {Router}                                                                                  from "@angular/router";
import {Observable, of}                                                                          from "rxjs";
import {catchError, map}                                                                         from "rxjs/operators";
import {HttpResponseInterface}                                                                   from "../../@core/interfaces/http.response.interface";
import {RegisterService}                                                                         from "../../@core/services/register.service";

@Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.scss"],
    providers: [RegisterService]
})
export class RegisterComponent implements OnInit {

    public submitLoading: boolean = false;

    public errorMessage?: string | undefined | null;

    public payload: FormGroup = new FormGroup({
        name: new FormControl("", [Validators.required, Validators.minLength(4)]),
        password: new FormControl("", [Validators.required, Validators.minLength(6)]),
        cpf: new FormControl("", {
            validators: [Validators.required, Validators.minLength(14)],
            asyncValidators: this.validationUniqueCpf(),
            updateOn: "blur"
        }),
    });

    constructor(private registerService: RegisterService, private router: Router) {
    }

    ngOnInit(): void {
    }

    get name() {
        return this.payload.get("name");
    }

    get cpf() {
        return this.payload.get("cpf");
    }

    get password() {
        return this.payload.get("password");
    }

    private validationUniqueCpf(): AsyncValidatorFn {

        return (control: AbstractControl): Observable<ValidationErrors | null> => {

            let mapHttpResponse = (httpResponse: HttpResponseInterface<{ exists: boolean }>) => {
                if (httpResponse.success && httpResponse?.content?.exists) {
                    return {anotherUserAlreadyTaken: true};
                } else {
                    return null;
                }
            };

            return this.registerService.userExistsByCPF(control.value).pipe(
                map(mapHttpResponse), catchError(() => of(null))
            );

        };

    }

    public informError(message: string) {
        this.payload.reset();
        this.errorMessage = message;
    }

    public submit() {

        if (!this.payload.valid) {
            this.payload.markAllAsTouched();
            return;
        }

        this.submitLoading = true;

        this.registerService.register(this.payload.getRawValue()).subscribe(httpResponse => {

            if (httpResponse.success && httpResponse.content) {
                this.router.navigate(["/login"], {state: {newUser: httpResponse.content}});
            } else {
                this.informError("Ops, aconteceu algum problema, tente novamente mais tarde!");
            }

            this.submitLoading = false;

        }, httpErrorResponse => {

            this.informError("Ops, aconteceu algum problema, tente novamente mais tarde!");
            this.submitLoading = false;

        });
    }

}
