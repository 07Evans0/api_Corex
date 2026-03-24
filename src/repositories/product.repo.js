const db = require("../config/db");

async function getAll() {
    const [rows] = await db.query("SELECT id, name, price, image FROM products ORDER BY id ASC");
    return rows;
}

async function getById(id) {
    const [rows] = await db.query("SELECT * FROM products WHERE id = ?", [id]);
    return rows[0] || null;
}

async function create({ name, price, image }) {
    const [result] = await db.query(
        "INSERT INTO products (name, price, image) VALUES (?, ?, ?)",
        [name, price, image]
    );
    return result.insertId;
}

async function update(id, { name, price, image }) {
    await db.query(
        "UPDATE products SET name = ?, price = ?, image = ? WHERE id = ?",
        [name, price, image, id]
    );
}

async function remove(id) {
    await db.query("DELETE FROM products WHERE id = ?", [id]);
}

module.exports = { getAll, getById, create, update, remove };