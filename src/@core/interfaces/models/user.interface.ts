import {ModelInterface} from "./model.interface";

export interface UserInterface extends ModelInterface {
    name: string;
    cpf: string;
    password: string;
}
