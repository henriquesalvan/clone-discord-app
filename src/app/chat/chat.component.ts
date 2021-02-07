import {Component, OnInit} from "@angular/core";
import {Router}            from "@angular/router";

@Component({
    selector: "app-chat",
    templateUrl: "./chat.component.html",
    styleUrls: ["./chat.component.scss"]
})
export class ChatComponent implements OnInit {

    public messagesCount = new Array(45);

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    public logout() {
        this.router.navigate(["/login"]);
    }

}
