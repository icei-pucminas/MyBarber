import { response } from 'express';
import * as jwt from 'jsonwebtoken';

export const gerarToken = (user, res) => {
    const token = jwt.sign({ id: user.id}, 'secret', {expiresIn: '1d'});
    delete user.senha;
    return res.json({
        user,
        token,
    });
}
