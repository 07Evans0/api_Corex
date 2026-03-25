const { Router } = require('express');
const subscriptionController = require('../controllers/subscriptions.controller');

const routes = new Router();

// Lembre-se: no app.js você já definiu o prefixo /subscriptions
routes.post('/', subscriptionController.store);
routes.get('/', subscriptionController.index);
routes.get('/:id', subscriptionController.show);
routes.put('/:id', subscriptionController.update);
routes.delete('/:id', subscriptionController.delete);

module.exports = routes;