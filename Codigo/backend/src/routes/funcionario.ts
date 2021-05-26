import { Router } from 'express';
import { objectConstants } from '../constants/Errors';
import { BarbeariaController } from '../controller/BaberariaController';
import { FuncionarioController } from '../controller/FuncionarioController';
import { Funcionario } from '../entity/Funcionario';



export const routerFuncionario = Router();
const barbeariaCtrl = new BarbeariaController();
const funcionarioCtrl = new FuncionarioController();


routerFuncionario.post('/', async (req, res) => {
    const { idBarbearia, nome, horarioInicial, horarioFinal, telefone, imagem } = req.body;
    const barbearia = await barbeariaCtrl.findById(idBarbearia);
    if (barbearia) {
        if (nome == null || nome == "" || horarioInicial == null || horarioInicial == "" || horarioFinal == "" || horarioFinal == null || telefone == null || telefone == ""
        ) {
            res.status(500).json({ mensagem: 'Error, Dados Incompletos' })
        } else {
            const funcionario = new Funcionario(nome, horarioInicial, horarioFinal, telefone, barbearia, imagem);
            const funcionarioSalvo = await funcionarioCtrl.save(funcionario);
            res.json(funcionarioSalvo);
        }

    } else {
        res.status(404).json({ mensagem: 'Barbearia do Funcionário não encontrada' })
    }

});
routerFuncionario.put('/:id', async (req, res) => {
    const { nome, horarioInicial, horarioFinal, telefone, imagem } = req.body;
    const { id } = req.params;
    const funcionarioBD = await funcionarioCtrl.findById(id);
    if (funcionarioBD) {
        (nome != null) ? funcionarioBD.nome = nome : null;
        (horarioInicial != null) ? funcionarioBD.horarioInicial = horarioInicial : null;
        (horarioFinal != null) ? funcionarioBD.horarioFinal = horarioFinal : null;
        (telefone != null) ? funcionarioBD.telefone = telefone : null;
        (imagem != null) ? funcionarioBD.imagem = imagem : null;
        const funcionarioSalvo = await funcionarioCtrl.save(funcionarioBD);
        res.json(funcionarioSalvo);
    } else {
        res.status(404).json({ mensagem: 'Funcionario não encontrado' })
    }

});
routerFuncionario.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    const msg = await funcionarioCtrl.deleteById(id);
    res.json({ mensagem: msg });
});