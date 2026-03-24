const app = require("./app"); // O "../" sai da pasta 'src' e entra na raiz onde o app.js está agora

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
 console.log(`Servidor rodando na porta ${PORT}`);
});