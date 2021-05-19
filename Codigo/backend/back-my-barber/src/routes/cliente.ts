import { Router } from 'express';
import { ClienteController } from '../controller/ClienteController';
import { Cliente } from '../entity/Cliente';
import * as bcrypt from 'bcrypt';
import { BarbeariaController } from '../controller/BaberariaController';


export const routerCliente = Router();
const clienteCtrl = new ClienteController();
const barbeariaCtrl = new BarbeariaController();
/* 
    Create Cliente
 */
routerCliente.post('/', async (req, res) => {
    const { nome, email, senha, telefone } = req.body;

    /* Realizar validaçoes de os dados chegaram corretamente */
    if (nome == null || nome == "" || email == null || email == "" || senha == "" || senha == null || telefone == null || telefone == "") {
        res.status(500).json({ mensagem: 'Error, Dados Incompletos' })
    } else {
        const clienteEmailValida = await clienteCtrl.findByEmail(email);
        const barbeariaEmailValida = await barbeariaCtrl.findByEmail(email);
        if (clienteEmailValida || barbeariaEmailValida) {
            res.status(500).json({ mensagem: 'Email já cadastrado' })
        } else {
            /* 
                Armazenando senha HASH
            */
            const salt = await bcrypt.genSalt(10);
            const senhaHash = await bcrypt.hash(senha, salt);

            /* 
            Salvando o cliente no banco 
            */
            const cliente = new Cliente(nome, email, senhaHash, telefone);
            const clienteSalvo = await clienteCtrl.save(cliente)
            res.json(clienteSalvo);
        }

    }



});
