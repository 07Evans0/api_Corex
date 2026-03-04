const db = require("../config/db");

async function listByUserId(userId) {
  const [rows] = await db.query(
    "SELECT id, title, done, created_at FROM tasks WHERE user_id = ? ORDER BY id DESC",
    [userId]
  );
  return rows;
}

async function createTask({ userId, title }) {
  const [result] = await db.query(
    "INSERT INTO tasks (user_id, title) VALUES (?, ?)",
    [userId, title]
  );
  return result.insertId;
}

module.exports = { listByUserId, createTask };