import { Router } from 'express';
import { BarbeariaController } from '../controller/BaberariaController';
import * as bcrypt from 'bcrypt';
import { Barbearia } from '../entity/Barbearia';
import { ClienteController } from '../controller/ClienteController';
import { Cliente } from '../entity/Cliente';

export const routerBarbearia = Router();
const barbeariaCtrl = new BarbeariaController();
const clienteCtrl = new ClienteController();
/* 
    Create barbearia
 */

routerBarbearia.post('/', async (req, res) => {
    const { nome, email, senha, telefone, cep, logradouro, bairro, cidade, numero, estado, cnpj, telefoneFixo } = req.body;

    /* 
    Validação dos campos
    */
    if (nome == null || nome == "" || email == null || email == "" || senha == "" || senha == null || telefone == null || telefone == "" || cep == null || cep == ""
        || logradouro == null || logradouro == "" || bairro == null || bairro == "" || cidade == null || cidade == "" || numero == null || numero == ""
        || estado == null || estado == "" || cnpj == null || cnpj == "" || telefoneFixo == null || telefoneFixo == "") {
        res.status(500).json({ mensagem: 'Error, Dados Incompletos' })
    } else {
        const barbeariaValidaEmail = await barbeariaCtrl.findByEmail(email);
        const clienteValidaEmail = await clienteCtrl.findByEmail(email);
        if (barbeariaValidaEmail || clienteValidaEmail) {
            res.status(500).json({ mensagem: 'Email já cadastrado' })
        } else {
            /* 
            Armazenando senha HASH
         */
            const salt = await bcrypt.genSalt(10);
            const senhaHash = await bcrypt.hash(senha, salt);


            const barbearia = new Barbearia(nome, email, senhaHash, telefone, cep, logradouro, bairro, cidade, numero, estado, cnpj, telefoneFixo);
            barbearia.CidadeToLowerCase();
            const barbeariaSalva = await barbeariaCtrl.save(barbearia);
            res.json(barbeariaSalva);
        }
    }


});

routerBarbearia.get('/', async (req, res) => {
    const cidade = req.query.cidade;

    if (!cidade) {
        const barbearias = await barbeariaCtrl.findAll();
        res.status(200).json(barbearias);
        return;
    }

    const listaBarbearias = await barbeariaCtrl.findByCidade(cidade.toString());

    if (listaBarbearias.length > 0) {
        res.status(200).json(listaBarbearias);
    } else {
        res.status(401).json({ error: "Não possuem barbearias cadastradas nesta cidade" })
    }

});


