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

routerBarbearia.put('/:id', async (req, res) => {
    const { nome, email, senha, telefone, cep, logradouro, bairro, cidade, numero, estado, telefoneFixo } = req.body;
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

        const barbeariaBD = await barbeariaCtrl.findById(id);
        const salt = await bcrypt.genSalt(10);

        (nome != null) ? barbeariaBD.nome = nome : null;
        (email != null) ? barbeariaBD.email = email : null;
        (senha != null) ? barbeariaBD.senha = await bcrypt.hash(senha, salt) : null;
        (telefone != null) ? barbeariaBD.telefone = telefone : null;
        (cep != null) ? barbeariaBD.cep = cep : null;
        (logradouro != null) ? barbeariaBD.logradouro = logradouro : null;
        (bairro != null) ? barbeariaBD.bairro = bairro : null;
        (cidade != null) ? barbeariaBD.cidade = cidade : null;
        (numero != null) ? barbeariaBD.numero = numero : null;
        (estado != null) ? barbeariaBD.estado = estado : null;
        (telefoneFixo != null) ? barbeariaBD.telefoneFixo = telefoneFixo : null;

        const clienteSalvo = await clienteCtrl.save(barbeariaBD);
        res.json(clienteSalvo);
    }



});


