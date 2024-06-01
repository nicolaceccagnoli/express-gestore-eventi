// Importo express
const express = require("express");
// Importo il router
const router = express.Router();


// Importo il controller
const eventsController = require('../controllers/events');

// Rotta per l'index
router.get('/', eventsController.index);

// Rotta per l'index delle prenotazioni
router.get('/:eventId/reservations', eventsController.indexReservation);

// Rotta per lo store
router.post('/', eventsController.store);

// Rotta per lo store delle prenotazioni
router.post('/:eventId/reservations', eventsController.addReservation)

// Rotta per l'update
router.put('/:id', eventsController.update);

module.exports = router;