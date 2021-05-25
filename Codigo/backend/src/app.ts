import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as logger from 'morgan';

import { conectarServidorNoBD } from './config/db';
import { routerCliente } from './routes/cliente';
import { routerBarbearia } from './routes/barbearia';
import { routerAuth } from './routes/authenticade';
import authMiddleware from './middlewares/authMiddleware'
import { routerProtected } from './routes/protected';
import { routerFuncionario } from './routes/funcionario';

/*  Cria aplicação */

export const app = express();

/* 
 Libera o acesso aos serviços
 */
app.use(cors());

/* 
    Permite receber e enviar json
 */
app.use(express.json());

/*
    Configura os logs
 */
app.use(logger('dev'));

/* 
    Conecta no BD
*/
conectarServidorNoBD();

/* 
    Configuração de rotas

 */

app.use('/cliente', routerCliente);
app.use('/barbearia', routerBarbearia);
app.use('/funcionario', routerFuncionario);
app.use('/auth', routerAuth);
app.use('/protected', routerProtected);