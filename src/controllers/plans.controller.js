const plansRepo = require("../repositories/plans.repo");

async function getAllPlans(req, res, next) {
  try {
    const planos = await plansRepo.getAll();
    res.json(planos); // Agora retorna os 3 planos que vi na sua foto (Básico, Intermediário, Avançado)
  } catch (e) {
    next(e); // Envia para o seu error.middleware
  }
}

module.exports = { getAllPlans };