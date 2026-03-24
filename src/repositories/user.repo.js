const db = require("../config/db");

async function findByEmail(email) {
  const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
  return rows[0] || null;
}

async function findById(id) {
  const [rows] = await db.query(
    "SELECT id, name, email, created_at FROM users WHERE id = ?", 
    [id]
  );
  return rows[0] || null;
}

async function createUser({ name, email, passwordHash }) {
  const [result] = await db.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, passwordHash]
  );
  return result.insertId;
}

async function update(id, { name, email }) {
  await db.query(
    "UPDATE users SET name = ?, email = ? WHERE id = ?",
    [name, email, id]
  );
}

async function remove(id) {
  await db.query("DELETE FROM users WHERE id = ?", [id]);
}

module.exports = { findByEmail, findById, createUser, update, remove };