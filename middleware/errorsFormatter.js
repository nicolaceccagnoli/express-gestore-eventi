// Definsco un middleware per la definizione degli  errori
const errorsFormatter = (err, req, res, next) => {
    const statusCode = 500;

    res.json({
        statusCode,
        error: err.message,
        stack: err.stack
    })
}

module.exports = errorsFormatter;