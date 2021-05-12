import { getManager } from "typeorm";
import { Barbearia } from "../entity/Barbearia";

export class BarbeariaController{
        async save (barbearia: Barbearia){
            const barbeariaSalva = await getManager().save(barbearia);
            return barbeariaSalva;
        }
}