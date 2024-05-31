// Importo express
const express = require("express");

// Invoco express
const app = express();
const port = 3000;

// Invoco il router degli eventi
const eventsRouter = require("./router/events");

// Importo il middleware per le rotte non trovate
const routesNotFound = require('./middleware/routesNotFound');

// Importo il middleware per la gestione degli errori
const errorsFormatter = require('./middleware/errorsFormatter');

// application/json
app.use(express.json());

// application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Definisco le rotte
app.use('/events', eventsRouter);

app.use(routesNotFound);

app.use(errorsFormatter);

// Avvio il server
app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`);
})