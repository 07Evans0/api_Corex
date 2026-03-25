const { Router } = require('express');
const categoryController = require('../controllers/categories.controller');

const routes = new Router();

routes.post('/', categoryController.store);
routes.get('/', categoryController.index);
routes.get('/:id', categoryController.show);
routes.put('/:id', categoryController.update);
routes.delete('/:id', categoryController.delete);

module.exports = routes;