// Usando require para importar o repositório
const subscriptionRepo = require('../repositories/subscriptions.repo');

class SubscriptionController {
  async store(req, res) {
    const subscription = await subscriptionRepo.create(req.body);
    return res.status(201).json(subscription);
  }

  async index(req, res) {
    const subscriptions = await subscriptionRepo.findAll();
    return res.json(subscriptions);
  }

  async show(req, res) {
    const { id } = req.params;
    const subscription = await subscriptionRepo.findById(id);
    return res.json(subscription);
  }

  async update(req, res) {
    const { id } = req.params;
    const updated = await subscriptionRepo.update(id, req.body);
    return res.json(updated);
  }

  async delete(req, res) {
    const { id } = req.params;
    await subscriptionRepo.delete(id);
    return res.status(204).send();
  }
}

module.exports = new SubscriptionController();