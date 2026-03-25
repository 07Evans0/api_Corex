class CategoryRepository {
    async create(data) {
        // Por enquanto apenas retorna o que recebe
        return { id: Math.random(), ...data };
    }

    async findAll() {
        return [];
    }

    async findById(id) {
        return { id };
    }

    async update(id, data) {
        return { id, ...data };
    }

    async delete(id) {
        return true;
    }
}

module.exports = new CategoryRepository();