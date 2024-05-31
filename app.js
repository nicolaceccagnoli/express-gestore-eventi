// Importo express
const express = require("express");

// Invoco express
const app = express();
const port = 3000;

// Invoco il router degli eventi
const eventsRouter = require("./router/events");

// Definisco le rotte
app.use('/events', eventsRouter);

// Avvio il server
app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`);
})