const userRepo = require("../repositories/user.repo");
const { hashPassword, comparePassword } = require("../utils/password");
const { generateAccessToken } = require("../utils/token");

async function register(req, res, next) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ 
        message: "name, email e password são obrigatórios" 
      });
    }

    const existing = await userRepo.findByEmail(email);
    if (existing) {
      return res.status(409).json({ message: "E-mail já cadastrado" });
    }

    const passwordHash = await hashPassword(password);
    const userId = await userRepo.createUser({ name, email, passwordHash });

    return res.status(201).json({ id: userId, name, email });
  } catch (err) {
    return next(err);
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ 
        message: "email e password são obrigatórios" 
      });
    }

    const user = await userRepo.findByEmail(email);
    if (!user) {
      return res.status(401).json({ message: "Credenciais inválidas" });
    }

    const ok = await comparePassword(password, user.password_hash);
    if (!ok) {
      return res.status(401).json({ message: "Credenciais inválidas" });
    }

    const accessToken = generateAccessToken({ id: user.id, email: user.email });
    return res.json({ accessToken });
  } catch (err) {
    return next(err);
  }
}

module.exports = { register, login };