import pkg from 'pg'
import dotenv from 'dotenv'

// Pacote Pull
const { Pool } = pkg
dotenv.config()

const BD = new Pool({
    connectionString: process.env.DATABASE_URL
})

const testarConexao = async () => {
    try {
        const client = await BD.connect() //Tenta estabelecer a conexão com o banco de dados
        console.log(`Conexão com o banco de dados estabelecida`);
        client.release() //Libera a conexão ao cliente
        
    } catch(error){
        console.error(`Erro ao conectar ao banco de Dados: ${error.message}`);
    }
}

export {BD, testarConexao}
