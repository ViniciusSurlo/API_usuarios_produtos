
import Produto from "../models/produto.js";

class ProdutoController{
    static async novoProduto(req, res){
        const {nome, preco, imagem, link_produto, categoria, frete_gratis} = req.body;

        // Validando Dados
        if(!nome || !preco || !imagem || !link_produto || !categoria || !frete_gratis){
            return res.status(400).json({erro: "Todos os campos são obrigatórios"}) // Todos os campos são obrigatórios
        }
        try{
            // Chama o metodo na classe Usuario para criar um novo usuario 
            const produto = await Produto.novoProduto(nome, preco, imagem, link_produto, categoria, frete_gratis)
            return res.status(201).json(produto) // Produto criado com sucesso status 201
        } catch (error){
            return res.status(500).json({erro: "Erro ao criar Produto", error: error.message}) // Erro ao criar produto
            
        }
    }
}

export default ProdutoController;    