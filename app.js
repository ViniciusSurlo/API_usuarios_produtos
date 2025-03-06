import express from 'express';
import {testarConexao} from './db.js';

const app = express(); //Criar instancia do express
testarConexao();

const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor rodando na porta http://localhost:${porta}`);
})