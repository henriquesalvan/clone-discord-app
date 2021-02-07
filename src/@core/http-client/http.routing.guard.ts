import {Injectable}                                                            from "@angular/core";
import {ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot} from "@angular/router";
import {Observable}                                                            from "rxjs";
import {__isNullOrUndefined}                                                   from "../helpers/functions";
import {AuthStorage}                                                           from "../helpers/storage";
import {LoginService}                                                          from "../services/login.service";

@Injectable()
export class HttpRoutingGuard implements CanActivateChild {

    private authenticatedRouter = ["/chat"];
    private nonAuthenticatedRouter = ["/login"];

    constructor(
        private router: Router,
        private loginService: LoginService,
    ) {
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return new Observable((observer) => {

            let token = AuthStorage.getToken();

            if (route.data && __isNullOrUndefined(route.data.needsCredentials)) {
                return observer.next(true);
            }

            if (route.data.needsCredentials === false && (!token || !token.token)) {
                return observer.next(true);
            }

            this.loginService.acknowledge().subscribe(httpResponse => {
                if (httpResponse.success && httpResponse.content) {

                    AuthStorage.setLoggedUser(httpResponse.content);

                    if (route.data.needsCredentials === false) {
                        this.router.navigate(this.authenticatedRouter);
                        observer.next(false);
                    } else {
                        observer.next(true);
                    }

                } else {

                    AuthStorage.deleteLoggedUserAndToken();

                    if (route.data.needsCredentials === true) {
                        this.router.navigate(this.nonAuthenticatedRouter);
                        observer.next(false);
                    } else {
                        observer.next(true);
                    }

                }
            });

        });
    }

    public static needsCredentials(value: boolean = true, data: any = {}) {
        data.needsCredentials = value;
        return data;
    }

}
