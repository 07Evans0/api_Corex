const categoryRepo = require('../repositories/categories.repo'); // <--- ISSO RESOLVE O ERRO

class CategoryController {
    async store(req, res) {
        const category = await categoryRepo.create(req.body);
        return res.status(201).json(category);
    }

    async index(req, res) {
        const categories = await categoryRepo.findAll();
        return res.json(categories);
    }

    async show(req, res) {
        const { id } = req.params;
        const category = await categoryRepo.findById(id);
        return res.json(category);
    }

    async update(req, res) {
        const { id } = req.params;
        const updated = await categoryRepo.update(id, req.body);
        return res.json(updated);
    }

    async delete(req, res) {
        const { id } = req.params;
        await categoryRepo.delete(id);
        return res.status(204).send();
    }
}

module.exports = new CategoryController();