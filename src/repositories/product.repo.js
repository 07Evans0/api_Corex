const db = require("../config/db");

async function getAll() {
    // Busca todos os campos da sua tabela atual
    const [rows] = await db.query("SELECT id, name, price, image FROM products ORDER BY id ASC");
    return rows;
}

async function create({ name, price, image }) {
    const [result] = await db.query(
        "INSERT INTO products (name, price, image) VALUES (?, ?, ?)",
        [name, price, image]
    );
    return result.insertId;
}

module.exports = { getAll, create };