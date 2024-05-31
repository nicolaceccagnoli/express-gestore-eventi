// Importo express
const express = require("express");
// Importo il router
const router = express.Router();


// Importo il controller
const eventsController = require('../controllers/events');

// Rotta per l'index
router.get('/', eventsController.index);

// Rotta per lo store
router.post('/', eventsController.store);

// Rotta per l'update
router.put('/:id', eventsController.update);

module.exports = router;