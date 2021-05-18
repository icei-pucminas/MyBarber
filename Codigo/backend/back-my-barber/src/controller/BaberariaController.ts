import { getManager } from "typeorm";
import { Barbearia } from "../entity/Barbearia";
import {getRepository} from 'typeorm';

export class BarbeariaController{
        async save (barbearia: Barbearia){
            const barbeariaSalva = await getManager().save(barbearia);
            return barbeariaSalva;
        }
        async findByEmail(email:string){
            const repository = getRepository(Barbearia);
            const barbearia = await repository.findOne({ where: {email} });
            return barbearia;
        }
        async findByCidade(cidade:string){
            const repository = getRepository(Barbearia);
            cidade = cidade.toLowerCase();
            const listaBarbearias = await repository.find( {where: {cidade}});
            return listaBarbearias;
        }
}