const db = require("../config/db");

async function getAll() {
  const [rows] = await db.query("SELECT * FROM planos ORDER BY id ASC");
  return rows;
}

async function getById(id) {
  const [rows] = await db.query("SELECT * FROM planos WHERE id = ?", [id]);
  return rows[0] || null;
}

async function create({ nome, preco, descricao }) {
  const [result] = await db.query(
    "INSERT INTO planos (nome, preco, descricao) VALUES (?, ?, ?)",
    [nome, preco, descricao]
  );
  return result.insertId;
}

async function update(id, { nome, preco, descricao }) {
  await db.query(
    "UPDATE planos SET nome = ?, preco = ?, descricao = ? WHERE id = ?",
    [nome, preco, descricao, id]
  );
}

async function remove(id) {
  await db.query("DELETE FROM planos WHERE id = ?", [id]);
}

module.exports = { getAll, getById, create, update, remove };