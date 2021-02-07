import {Injectable}            from "@angular/core";
import {Observable}            from "rxjs";
import {HttpResponseInterface} from "../interfaces/http.response.interface";
import {MessageInterface}      from "../interfaces/models/message.interface";
import {HttpService}           from "./http.service";

@Injectable()
export class MessageService extends HttpService<MessageInterface> {

    resource() {
        return "messages";
    }

    index(): Observable<HttpResponseInterface<MessageInterface[]>> {
        return this.httpClient.get<HttpResponseInterface<MessageInterface[]>>(`${this.uri}`);
    }

    store(message: MessageInterface): Observable<HttpResponseInterface<MessageInterface>> {
        return this.httpClient.post<HttpResponseInterface<MessageInterface>>(`${this.uri}`, message);
    }

}
