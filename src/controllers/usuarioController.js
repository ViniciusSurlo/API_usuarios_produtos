
import Usuario from "../models/usuario.js";

class UsuarioController{
    static async novoUsuario(req, res){
        const {nome, email, senha} = req.body;

        // Validando Dados
        if(!nome || !email || !senha){
            return res.status(400).json({erro: "Todos os campos são obrigatórios"}) // Todos os campos são obrigatórios
        }
        try{
            // Chama o metodo na classe Usuario para criar um novo usuario 
            const usuario = await Usuario.novoUsuario(nome, email, senha)
            return res.status(201).json(usuario) // Usuario criado com sucesso status 201
        } catch (error){
            return res.status(500).json({erro: "Erro ao criar usuário", error: error.message}) // Erro ao criar usuário
            
        }
    }
}

export default UsuarioController;    