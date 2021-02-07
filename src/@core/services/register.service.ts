import {Injectable}            from "@angular/core";
import {Observable}            from "rxjs";
import {HttpResponseInterface} from "../interfaces/http.response.interface";
import {UserInterface}         from "../interfaces/models/user.interface";
import {HttpService}           from "./http.service";

@Injectable()
export class RegisterService extends HttpService<UserInterface> {

    resource() {
        return "auth";
    }

    register(user: UserInterface): Observable<HttpResponseInterface<UserInterface>> {
        return this.httpClient.post<HttpResponseInterface<UserInterface>>(`${this.uri}/register`, user);
    }

    userExistsByCPF(cpf: string): Observable<HttpResponseInterface<{ exists: boolean }>> {
        return this.httpClient.post<HttpResponseInterface<{ exists: boolean }>>(`${this.uri}/register/checkCPF`, {cpf: cpf});
    }

}
