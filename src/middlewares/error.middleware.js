function errorMiddleware(err, req, res, next) {
    console.error(err);
    // Se o controller lançar { statusCode, message }, usamos isso
    const statusCode = err.statusCode || 500;
    const message = err.message || "Erro interno no servidor";

 return res.status(statusCode).json({ message });
}

module.exports = errorMiddleware;
