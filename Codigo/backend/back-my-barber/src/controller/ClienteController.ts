import { getManager } from "typeorm";
import { Cliente } from "../entity/Cliente";

export class ClienteController { 
    async save(cliente: Cliente) {
        const clienteSalvo = await getManager().save(cliente);
        return clienteSalvo;
    }
}