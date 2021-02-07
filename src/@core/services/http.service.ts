import {HttpClient}  from "@angular/common/http";
import {Injectable}  from "@angular/core";
import {environment} from "../../environments/environment";

@Injectable()
export abstract class HttpService<T> {

    protected readonly uri: string;

    public constructor(protected httpClient: HttpClient) {
        this.uri = `${environment.getPrefixApi()}/${this.resource()}`;
    }

    abstract resource(): string;

}
