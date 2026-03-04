const productRepo = require("../repositories/product.repo");

async function getAllProducts(req, res, next) {
  try {
    const produtos = await productRepo.getAll();
    
    // Se a tabela estiver vazia, retorna um aviso ou array vazio
    if (!produtos || produtos.length === 0) {
        return res.status(200).json([]);
    }

    res.json(produtos);
  } catch (e) {
    next(e);
  }
}

module.exports = { getAllProducts };