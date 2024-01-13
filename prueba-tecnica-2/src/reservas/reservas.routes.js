const express = require('express');
const router = express.Router();
const reservaService = require('./reservas.service');

router.get('/agentes/:agenteId/reservas', reservaService.getAllReservasByAgente);

router.post('/reservas', reservaService.createReserva);

module.exports = router;