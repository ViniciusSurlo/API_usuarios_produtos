import express from 'express';
import {testarConexao} from './db.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import usuarioRoutes from './src/routes/usuarioRoutes.js';
import produtoRoutes from './src/routes/produtoRoutes.js';

const app = express(); //Criar instancia do express
testarConexao();
app.use(cors());
// Uso do bodyParser para receber os valores do corpo na requisição json
app.use(bodyParser.json());
// Definir as rotas de usuario importadas no arquivo 
app.use(usuarioRoutes);
app.use(produtoRoutes)

const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor rodando na porta http://localhost:${porta}`);
})