import {Component, OnInit} from "@angular/core";
import {Router}            from "@angular/router";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {

    public submitLoading: boolean = false;

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    public chat() {
        this.submitLoading = true;
        setTimeout(() => {
            this.submitLoading = false;
            this.router.navigate(["/chat"]);
        }, 1000);
    }

}