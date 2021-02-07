import {ModelInterface} from "./model.interface";
import {UserInterface}  from "./user.interface";

export interface MessageInterface extends ModelInterface {
    message: string;
    user_id: number;
    user?: UserInterface;
}
