const express = require('express');
const crypto = require('crypto');
const OngController = require('./controllers/ongcontroller');
const incidentsController = require('./controllers/incidentcontroller');
const profileController = require('./controllers/profilecontroller');
const sessionController = require('./controllers/SessionsController');

const routes = express.Router();

routes.post('/sessions',sessionController.create);

routes.get('/ongs',OngController.index);
routes.post('/ongs',OngController.create);

routes.get('/incidents',incidentsController.index);
routes.post('/incidents',incidentsController.create);
routes.delete('/incidents/:id',incidentsController.delete);

routes.get('/profile',profileController.index);



module.exports = routes;