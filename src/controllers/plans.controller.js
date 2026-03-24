const plansRepo = require("../repositories/plans.repo");

async function getAllPlans(req, res, next) {
  try {
    const planos = await plansRepo.getAll();
    res.json(planos);
  } catch (e) {
    next(e);
  }
}

async function getPlanById(req, res, next) {
  try {
    const plano = await plansRepo.getById(req.params.id);
    if (!plano) {
      return res.status(404).json({ message: "Plano não encontrado" });
    }
    res.json(plano);
  } catch (e) {
    next(e);
  }
}

async function createPlan(req, res, next) {
  try {
    const { nome, preco, descricao } = req.body;
    if (!nome || !preco) {
      return res.status(400).json({ message: "Nome e preço são obrigatórios" });
    }
    const planId = await plansRepo.create({ nome, preco, descricao });
    return res.status(201).json({ id: planId, nome, preco, descricao });
  } catch (err) {
    next(err);
  }
}

async function updatePlan(req, res, next) {
  try {
    const { nome, preco, descricao } = req.body;
    await plansRepo.update(req.params.id, { nome, preco, descricao });
    res.json({ message: "Plano atualizado com sucesso" });
  } catch (e) {
    next(e);
  }
}

async function deletePlan(req, res, next) {
  try {
    await plansRepo.remove(req.params.id);
    res.status(204).send(); 
  } catch (e) {
    next(e);
  }
}

module.exports = { getAllPlans, getPlanById, createPlan, updatePlan, deletePlan };