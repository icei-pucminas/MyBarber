import { getManager, MissingDeleteDateColumnError } from "typeorm";
import {getRepository} from 'typeorm';
import { objectConstants } from "../constants/Errors";
import {Funcionario} from '../entity/Funcionario'


export class FuncionarioController { 
    
    async save(funcionario: Funcionario) {
        const funcionarioSalvo = await getManager().save(funcionario);
        return funcionarioSalvo;
    }
    async findById( id : string ) {
        const funcionario = await getManager().findOne(Funcionario, id);
        return funcionario;
    }

    async deleteById( id : string ){
      
      const msg = await getManager().delete(Funcionario, id).then(() => {
        return objectConstants.MSG_OK;
      }).catch(() => {
        return objectConstants.MSG_ERROR;
      })
       return msg;
    }
   
}

