import express, { Request, Response } from 'express';

export const authRouter = express.Router();

authRouter.get('/login', async (req: Request, res: Response) => {
   res.send('success !')
})