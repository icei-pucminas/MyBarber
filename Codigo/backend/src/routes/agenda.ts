import { Router } from "express";
import { AgendaController } from "../controller/AgendaController";
import { ClienteController } from "../controller/ClienteController";
import { FuncionarioController } from "../controller/FuncionarioController";
import { Agenda } from "../entity/Agenda";

export const routerAgenda = Router();
const agendaCtrl = new AgendaController();
const clienteCtrl = new ClienteController();
const funcionarioCtrl = new FuncionarioController();

routerAgenda.post('/', async (req, res) => {
   const {data, horario, idCliente, idBarbeiro} = req.body;
   const date = new Date();
    const cliente = await clienteCtrl.findById(idCliente);
    const barbeiro = await funcionarioCtrl.findById(idBarbeiro);
    if(barbeiro&&cliente){
        if(data >= date){
            const temAgenda = await agendaCtrl.findByDataAndHorarioAndBarbeiro(data, horario, barbeiro);
            if(temAgenda){
                res.status(401).json({mensagem: "Horário Indisponível"});
            }else{
                const agenda = new Agenda(data, horario, cliente, barbeiro);
                const agendaSalva = await agendaCtrl.save(agenda);
                return res.json(agendaSalva);
            }
        }else{
            res.status(401).json({mensagem: 'Data inválida'});
        }
        
    }else{
        res.status(404).json({ mensagem: 'Cliente ou funcionários não encontrados' });
    }
});