import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable}                                from "@angular/core";
import {AuthStorage}                               from "../helpers/storage";
import {TokenInterface}                            from "../interfaces/token.interface";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        let authReq;
        const token: TokenInterface = AuthStorage.getToken();

        if (token && token.token) {
            authReq = req.clone({
                headers: req.headers.set("Authorization", `Bearer ${token.token}`)
            });
        }

        return next.handle(authReq || req);
    }
}
