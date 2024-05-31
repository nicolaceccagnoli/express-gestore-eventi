const { route } = require("../router/events");

// Definisco un middleware per gestire le rotte non trovate
const routesNotFound = (req, res, next) => {
    const statusCode = 400;

    res.json({
        statusCode,
        error: 'Pagina non trovata'
    })
}

module.exports = routesNotFound;