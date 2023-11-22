import express from 'express';
import cors from 'cors';
import routePatients from './routes/patients'

const app = express();
app.use(cors());
app.use(express.json());

app.use('/patients', routePatients);









const port = 3001;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
