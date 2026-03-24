const productRepo = require("../repositories/product.repo");

async function getAllProducts(req, res, next) {
    try {
        const produtos = await productRepo.getAll();
        res.json(produtos);
    } catch (e) { next(e); }
}

async function getProductById(req, res, next) {
    try {
        const produto = await productRepo.getById(req.params.id);
        if (!produto) return res.status(404).json({ message: "Produto não encontrado" });
        res.json(produto);
    } catch (e) { next(e); }
}

async function createProduct(req, res, next) {
    try {
        const { name, price, image } = req.body;
        const productId = await productRepo.create({ name, price, image });
        res.status(201).json({ id: productId, name, price, image });
    } catch (e) { next(e); }
}

async function updateProduct(req, res, next) {
    try {
        const { name, price, image } = req.body;
        await productRepo.update(req.params.id, { name, price, image });
        res.json({ message: "Produto atualizado" });
    } catch (e) { next(e); }
}

async function deleteProduct(req, res, next) {
    try {
        await productRepo.remove(req.params.id);
        res.status(204).send();
    } catch (e) { next(e); }
}

module.exports = { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };