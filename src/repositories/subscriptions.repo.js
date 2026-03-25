class SubscriptionRepository {
  async create(data) {
    // Futuro INSERT INTO subscriptions...
    return { id: Math.random(), ...data };
  }

  async findAll() {
    return [];
  }

  async findById(id) {
    return {};
  }

  async update(id, data) {
    return { id, ...data };
  }

  async delete(id) {
    return true;
  }
}

// Exportando no padrão CommonJS
module.exports = new SubscriptionRepository();