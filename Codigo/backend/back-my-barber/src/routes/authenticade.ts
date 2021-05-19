import { Router } from 'express';
import { ClienteController } from '../controller/ClienteController';
import { BarbeariaController } from '../controller/BaberariaController';
import * as bcrypt from 'bcrypt';
import { validaSenha } from '../helper/validaSenhaUser';
import { gerarToken } from '../helper/geraToken';


export const routerAuth = Router();
const barbeariaCtrl = new BarbeariaController();
const clienteCtrl = new ClienteController();

/* 
        LOGIN
        */
        
        routerAuth.post('/', async (req, res) => {
            const login = false;
            const { email, senha } = req.body;
            const barbearia = await barbeariaCtrl.findByEmail(email);
            const cliente = await clienteCtrl.findByEmail(email);
            if(barbearia){
                    const senhaValida = await validaSenha(senha, barbearia.senha);
                    senhaValida?gerarToken(barbearia, res):res.status(401).json({
                        message: "E-mail/Senha incorreta"
                    })
            }else{
                if(cliente){
                    const senhaValida = await validaSenha(senha, cliente.senha);
                    senhaValida?gerarToken(cliente, res):res.status(401).json({
                        message: "E-mail/Senha incorreta"
                    })
                    
                }else{
                    return res.status(401).json({
                        message: "E-mail/Senha incorreta"
                    })
                }
            }
            
        });