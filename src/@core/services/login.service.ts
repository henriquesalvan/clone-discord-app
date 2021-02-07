import {Injectable}            from "@angular/core";
import {Observable}            from "rxjs";
import {HttpResponseInterface} from "../interfaces/http.response.interface";
import {LoginInterface}        from "../interfaces/login.interface";
import {UserInterface}         from "../interfaces/models/user.interface";
import {TokenInterface}        from "../interfaces/token.interface";
import {HttpService}           from "./http.service";

@Injectable()
export class LoginService extends HttpService<UserInterface> {

    resource() {
        return "auth";
    }

    login(login: LoginInterface): Observable<HttpResponseInterface<TokenInterface>> {
        return this.httpClient.post<HttpResponseInterface<TokenInterface>>(`${this.uri}/login`, login);
    }

    acknowledge(): Observable<HttpResponseInterface<UserInterface>> {
        return this.httpClient.get<HttpResponseInterface<UserInterface>>(`${this.uri}/acknowledge`);
    }

    logout(): Observable<HttpResponseInterface<any>> {
        return this.httpClient.get<HttpResponseInterface<any>>(`${this.uri}/logout`);
    }

}
