// Importo express
const express = require("express");
// Importo il router
const router = express.Router();

// Importo il middleware per le rotte non trovate
const routesNotFound = require('../middleware/routesNotFound');

// Importo il middleware per la gestione degli errori
const errorsFormatter = require('../middleware/errorsFormatter');


// Importo il controller
const eventsController = require('../controllers/events');

// Rotta per l'index
router.get('/', routesNotFound, eventsController.index);

// Rotta per lo store
router.post('/', errorsFormatter, eventsController.store);

// Rotta per l'update
router.put('/:events', errorsFormatter, eventsController.update);

module.exports = router;