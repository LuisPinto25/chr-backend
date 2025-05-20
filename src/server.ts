import express, { type Request, type Response } from 'express';
import userRouter from './routers/userRouter';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send({ hola: 'mundo' });
});

app.use('/users', userRouter);

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
