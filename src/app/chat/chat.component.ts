import {AfterContentChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {FormControl, FormGroup, Validators}                                           from "@angular/forms";
import {Router}                                                  from "@angular/router";
import {AuthStorage}                                             from "../../@core/helpers/storage";
import {UserInterface}                                           from "../../@core/interfaces/models/user.interface";

@Component({
    selector: "app-chat",
    templateUrl: "./chat.component.html",
    styleUrls: ["./chat.component.scss"]
})
export class ChatComponent implements OnInit, AfterContentChecked {

    public submitLoading: boolean = false;

    @ViewChild("messages", {static: true}) public elementMessages: ElementRef | undefined | null;

    @ViewChild("inputMessage", {static: true}) public elementMessage: ElementRef | undefined | null;

    public userLogged: UserInterface = AuthStorage.getLoggedUser();

    public payload: FormGroup = new FormGroup({
        user_id: new FormControl(this.userLogged.id, [Validators.required, Validators.min(1)]),
        message: new FormControl("", [Validators.required, Validators.minLength(1)]),
    });

    public messagesCount = new Array(45);

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    ngAfterContentChecked(): void {
        this.messagesScroll();
    }

    private messagesScroll() {
        this.elementMessages?.nativeElement.scrollTo({
            left: 0,
            top: this.elementMessages?.nativeElement?.scrollHeight + 100
        });
    }

    get firstName() {
        return this.userLogged.name.split(" ")[0];
    }

    get message() {
        return this.payload.get("message");
    }

    public logout() {
        AuthStorage.deleteLoggedUserAndToken();
        this.router.navigate(["/login"]);
    }

    public submit() {

        if (!this.payload.valid) {
            this.payload.markAllAsTouched();
            return;
        }

        this.submitLoading = true;

    }

}
