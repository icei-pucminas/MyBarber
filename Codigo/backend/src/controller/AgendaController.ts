import { getManager, getRepository } from "typeorm";
import { Agenda } from "../entity/Agenda";
import { Funcionario } from "../entity/Funcionario";

export class AgendaController {
    async save(agenda: Agenda) {
        const agendaSalva = await getManager().save(agenda);
        return agendaSalva;
    }
    async findByDataAndHorarioAndBarbeiro(data: Date, horario: string, barbeiro: Funcionario) {
        const repository = getRepository(Agenda);
        const temAgenda = await repository.find({
            where: { data: data, horario: horario, barbeiro: barbeiro }
        });
        console.log(temAgenda);
        if (temAgenda.length> 0 ) {
            return true;
        } else return false;
    }
}