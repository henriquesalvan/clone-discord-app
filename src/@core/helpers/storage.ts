import {Injectable}                          from "@angular/core";
import {environment}                         from "../../environments/environment";
import {UserInterface}                       from "../interfaces/models/user.interface";
import {TokenInterface}                      from "../interfaces/token.interface";
import {__isNullOrUndefined, __nativeWindow} from "./functions";

abstract class AbstractStorage {

    private static appKey = "__" + environment.storage.key + "__";

    protected static set(wildCard: string, key: string, content: Object): void {
        if (!__isNullOrUndefined(content)) {
            AbstractStorage.getStorage(wildCard).setItem(
                AbstractStorage.getKey(key), JSON.stringify({content: content}),
            );
        }
    }

    protected static get(wildCard: string, key: string): any {
        let content = AbstractStorage.getStorage(wildCard).getItem(AbstractStorage.getKey(key));
        if (!__isNullOrUndefined(content)) {
            return JSON.parse(content).content;
        }
        return null;
    }

    protected static remove(wildCard: string, key: string): void {
        AbstractStorage.getStorage(wildCard).removeItem(AbstractStorage.getKey(key));
    }

    private static getKey(key: string): string {
        return (AbstractStorage.appKey + key);
    }

    private static getStorage(wildCard: string) {
        return __nativeWindow()[wildCard + "Storage"];
    }

}

@Injectable()
export class LocalStorage extends AbstractStorage {

    private static wildCard = "local";

    public static set(key: string, content: Object): void {
        super.set(LocalStorage.wildCard, key, content);
    }

    public static get(key: string): any {
        return super.get(LocalStorage.wildCard, key);
    }

    public static remove(key: string): void {
        super.remove(LocalStorage.wildCard, key);
    }

}

@Injectable()
export class SessionStorage extends AbstractStorage {

    private static wildCard = "session";

    public static set(key: string, content: Object): void {
        super.set(SessionStorage.wildCard, key, content);
    }

    public static get(key: string): any {
        return super.get(SessionStorage.wildCard, key);
    }

    public static remove(key: string): void {
        super.remove(SessionStorage.wildCard, key);
    }

}

@Injectable()
export class AuthStorage extends SessionStorage {

    public static loggedUser = "logged-user";
    public static token = "token";

    public static setToken(token: TokenInterface) {
        this.set(AuthStorage.token, token);
    }

    public static getToken(): TokenInterface {
        return <TokenInterface>this.get(AuthStorage.token);
    }

    public static setLoggedUser(currentUser: UserInterface) {
        this.set(AuthStorage.loggedUser, currentUser);
    }

    public static getLoggedUser(): UserInterface {
        return <UserInterface>this.get(AuthStorage.loggedUser);
    }

    public static deleteLoggedUserAndToken() {
        this.remove(AuthStorage.token);
        this.remove(AuthStorage.loggedUser);
    }

}
