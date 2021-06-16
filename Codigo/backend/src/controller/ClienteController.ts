import { getManager } from "typeorm";
import { Cliente } from "../entity/Cliente";
import { getRepository } from 'typeorm';
import { Agenda } from "../entity/Agenda";


export class ClienteController {

    async save(cliente: Cliente) {
        const clienteSalvo = await getManager().save(cliente);
        return clienteSalvo;
    }

    async findByEmail(email: string) {
        const repository = getRepository(Cliente);
        const cliente = await repository.findOne({ where: { email } });
        return cliente;
    }
    async findById(id: string) {
        const cliente = await getManager().findOne(Cliente, id);
        return cliente;

    }

    async getAgendasByClientes(id: string) {
        const date = new Date();
        const cliente = await getManager().findOne(Cliente, {
            where: {id : id},
            relations: ['agendas']
        });
        const agendasDataCerta = cliente.agendas.filter(a => a.data >= date);
        return agendasDataCerta;
    }
}

