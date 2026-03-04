const db = require("../config/db"); //

async function getAll() {
  // Usando o nome exato da tabela da sua imagem: 'planos'
  const [rows] = await db.query("SELECT * FROM planos ORDER BY idplanos ASC");
  return rows;
}

module.exports = { getAll };