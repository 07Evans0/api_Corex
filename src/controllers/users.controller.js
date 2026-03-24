const userRepo = require("../repositories/user.repo");

async function me(req, res, next) {
  try {
    const user = await userRepo.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "Usuário não encontrado" });
    return res.json(user);
  } catch (err) { next(err); }
}

async function updateUser(req, res, next) {
  try {
    const { name, email } = req.body;
    // req.user.id vem do seu authMiddleware
    await userRepo.update(req.user.id, { name, email });
    res.json({ message: "Perfil atualizado com sucesso" });
  } catch (err) { next(err); }
}

async function deleteUser(req, res, next) {
  try {
    await userRepo.remove(req.user.id);
    res.status(204).send();
  } catch (err) { next(err); }
}

module.exports = { me, updateUser, deleteUser };