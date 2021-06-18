import { Router } from "express";
import { AgendaController } from "../controller/AgendaController";
import { BarbeariaController } from "../controller/BaberariaController";
import { ClienteController } from "../controller/ClienteController";
import { FuncionarioController } from "../controller/FuncionarioController";
import { Agenda } from "../entity/Agenda";
import { emailCancelaSender, emailSender } from "../helper/emailSender";


export const routerAgenda = Router();
const agendaCtrl = new AgendaController();
const clienteCtrl = new ClienteController();
const funcionarioCtrl = new FuncionarioController();
const barbeariaCtrl = new BarbeariaController();

routerAgenda.post('/', async (req, res) => {
    const { data, horario, idCliente, idBarbeiro } = req.body;
    const dateTimestamp = Date.parse(data);
    const today = new Date();
    const cliente = await clienteCtrl.findById(idCliente);
    const barbeiro = await funcionarioCtrl.findById(idBarbeiro);
    const barbearia = await barbeariaCtrl.findById(barbeiro.barbearia.id);

    if (barbeiro && cliente) {
        if (dateTimestamp >= today.getTime()) {
            const temAgenda = await agendaCtrl.findByDataAndHorarioAndBarbeiro(new Date(data), horario, barbeiro);
            if (temAgenda) {
                res.status(401).json({ mensagem: "Horário Indisponível" });
        }else{
                const agenda = new Agenda(data, horario, cliente, barbeiro);
                const agendaSalva = await agendaCtrl.save(agenda);
                emailSender(cliente, agendaSalva, barbearia);
                return res.json(agendaSalva);
                
            }
        } else {
            res.status(401).json({ mensagem: 'Data inválida' });
        }

    } else {
        res.status(404).json({ mensagem: 'Cliente ou funcionários não encontrados' });
    }
});
routerAgenda.delete('/cancelar/:id', async (req, res) => {
    const { id } = req.params;
    const agenda = await agendaCtrl.findById(id);
    const msg = await agendaCtrl.deleteById(id);
    emailCancelaSender(agenda);
    res.json({ mensagem: msg });
});