import {AfterContentChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {FormControl, FormGroup, Validators}                                           from "@angular/forms";
import {Router}                                                                       from "@angular/router";
import {io}                                                                           from "socket.io-client";
import {AuthStorage}                                                                  from "../../@core/helpers/storage";
import {MessageInterface}                                                             from "../../@core/interfaces/models/message.interface";
import {UserInterface}                                                                from "../../@core/interfaces/models/user.interface";
import {MessageService}                                                               from "../../@core/services/message.service";
import {environment}                                                                  from "../../environments/environment";

@Component({
    selector: "app-chat",
    templateUrl: "./chat.component.html",
    styleUrls: ["./chat.component.scss"]
})
export class ChatComponent implements OnInit, AfterContentChecked {

    public submitLoading: boolean = false;

    public userLogged: UserInterface = AuthStorage.getLoggedUser();

    public messages: MessageInterface[] = [];

    @ViewChild("elementMessages", {static: true}) public elementMessages: ElementRef | undefined | null;

    public payload: FormGroup = new FormGroup({
        user_id: new FormControl(this.userLogged.id, [Validators.required, Validators.min(1)]),
        message: new FormControl("", [Validators.required, Validators.minLength(1)]),
    });

    private socket: any;

    constructor(private router: Router, private messageService: MessageService) {
    }

    ngOnInit(): void {

        this.messageService.index().subscribe(httpResponse => {
            if (httpResponse.success && httpResponse.content) {
                this.messages = httpResponse.content;
            }
        }, error => {

        });

        this.socket = io(environment.ws);

        this.socket.on("connect", () => {
            this.socket.on("new-message", (message: MessageInterface) => {
                if (message.user_id !== this.userLogged.id) {
                    this.messages.push(message);
                    this.payload.markAsUntouched();
                    setTimeout(() => this.messagesScroll(), 100);
                }
            });
        });

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

        this.messageService.store(this.payload.getRawValue()).subscribe(httpResponse => {

            if (httpResponse.success && httpResponse.content) {
                this.messages.push(httpResponse.content);
                this.socket.emit("new-message", httpResponse.content);
                this.payload.markAsUntouched();
                this.messagesScroll();
            }

            this.submitLoading = false;
            this.message?.setValue("");

        });

    }

}
