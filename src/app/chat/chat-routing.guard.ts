import {Injectable}                                                       from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable}                                                       from "rxjs";
import {AuthStorage}                                                      from "../../@core/helpers/storage";
import {LoginService}                                                     from "../../@core/services/login.service";

@Injectable()
export class ChatRoutingGuard implements CanActivate {

    constructor(
        private router: Router,
        private loginService: LoginService,
    ) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

        return new Observable((observer) => {
            this.loginService.acknowledge().subscribe(httpResponse => {
                if (httpResponse.success && httpResponse.content) {
                    AuthStorage.setLoggedUser(httpResponse.content);
                    observer.next(true);
                } else {
                    this.router.navigate(["/login"]);
                    observer.next(false);
                }
            });
        });

    }

}
