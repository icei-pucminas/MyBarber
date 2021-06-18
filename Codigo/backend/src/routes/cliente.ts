import { Router } from 'express';
import { ClienteController } from '../controller/ClienteController';
import { Cliente } from '../entity/Cliente';
import * as bcrypt from 'bcrypt';
import { BarbeariaController } from '../controller/BaberariaController';
import { emailContaCreate } from '../helper/emailSender';


export const routerCliente = Router();
const clienteCtrl = new ClienteController();
const barbeariaCtrl = new BarbeariaController();
/* 
    Create Cliente
 */
routerCliente.post('/', async (req, res) => {
    const { nome, email, senha, telefone, imagem } = req.body;

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
            const cliente = new Cliente(nome, email, senhaHash, telefone, imagem);
            const clienteSalvo = await clienteCtrl.save(cliente)
            emailContaCreate(cliente);
            res.json(clienteSalvo);
        }

    }
});
routerCliente.put('/:id', async (req, res) => {
    const { nome, email, senha, telefone, imagem } = req.body;
    const { id } = req.params;
    let clienteEmailValida;
    let barbeariaEmailValida;
    if (email != null) {
        clienteEmailValida = await clienteCtrl.findByEmail(email);
        barbeariaEmailValida = await barbeariaCtrl.findByEmail(email);
    }
    if ((clienteEmailValida && clienteEmailValida.id !== id) || (barbeariaEmailValida && barbeariaEmailValida.id !== id)) {
        res.status(500).json({ mensagem: 'Email já cadastrado em outro usuário' })
    } else {

        const clienteBD = await clienteCtrl.findById(id);
        if (clienteBD) {
            const salt = await bcrypt.genSalt(10);

            (nome != null) ? clienteBD.nome = nome : null;
            (email != null) ? clienteBD.email = email : null;
            (senha != null) ? clienteBD.senha = await bcrypt.hash(senha, salt) : null;
            (telefone != null) ? clienteBD.telefone = telefone : null;
            (imagem != null) ? clienteBD.imagem = imagem : null;

            const clienteSalvo = await clienteCtrl.save(clienteBD);
            res.json(clienteSalvo);
        } else {
            res.status(404).json({ mensagem: 'Cliente não encontrado' })
        }

    }
});

routerCliente.get('/agendamentos/:id', async (req, res) => {
    const { id } = req.params;
    const agendas = await clienteCtrl.getAgendasByClientes(id);
    if (agendas.length === 0) {
        res.status(404).json({ mensagem: 'Sem agendas' });
    } else {
        res.json(agendas);
        
    }
 
})