import { getManager } from "typeorm";
import { Cliente } from "../entity/Cliente";
import {getRepository} from 'typeorm';


export class ClienteController { 
    
    async save(cliente: Cliente) {
        const clienteSalvo = await getManager().save(cliente);
        return clienteSalvo;
    }

    async findByEmail(email:string){
        const repository = getRepository(Cliente);
        const cliente = await repository.findOne({ where: {email} });
        return cliente;
    }
    async findById( id: string) {
        const cliente = await getManager().findOne(Cliente, id);
        return cliente;

    }
}

