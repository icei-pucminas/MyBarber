import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

interface TokenPayload {
    id: string;
    iat: number;
    exp: number;
}

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).send({ error: 'User not authenticated' });
    }
    const token = authorization.replace('Bearer', '').trim();
    try {
        const data = jwt.verify(token, 'secret');
        const { id } = data as TokenPayload;
        req.userId = id;

        return next();

    } catch {
        return res.status(401);
    }
}