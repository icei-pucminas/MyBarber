import { Router } from 'express';
import { BarbeariaController } from '../controller/BaberariaController';
import * as bcrypt from 'bcrypt';
import { Barbearia } from '../entity/Barbearia';

export const routerBarbearia = Router();
const barbeariaCtrl = new BarbeariaController();
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
        if (barbeariaValidaEmail) {
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

    /* 
         LOGIN
         */
    routerBarbearia.post('/auth', async (req, res) => {
        const { email, senha } = req.body;
        const barbearia = await barbeariaCtrl.findByEmail(email);
        if (!barbearia) {
            return res.status(404);
        }
        const senhaValida = await bcrypt.compare(senha, barbearia.senha);
        if (!senhaValida) {
            return res.status(401).json({
                message: "E-mail/Senha incorreta"
            })
        }

        return res.json({ mensagem: 'Login Completo' })
        /* 
        Falta gerar token 
         */
    })
})


