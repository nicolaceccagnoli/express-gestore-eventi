// Definisco la rotta per l'index
const index = (req, res) => {
    // Content negotiation
    res.format({

        html: () => {
            let html = `<h1> Scopri tutti gli eventi </h1>`;

            res.send(html);
        },
        json: () => {
            res.json({
                data: 'Scopri tutti gli eventi'
            })
        }
    })
    
}

// Definisco la rotta per lo store
const store = (req, res) => {
    // Content negotiation
    res.format({
        html: () => {
            res.redirect(`/events`);
        },
        json: () => {
            res.json({
                data: 'Eventi'
            })
        }
    })
}

// Definisco la rotta per l'update
const update = (req, res) => {
    // Content negotiation
    res.format({
        html: () => {
            let html = `<h1> Aggiornamento Evento X </h1>`;

            res.send(html);
        },
        json: () => {
            res.json({
                data: 'Evento aggiornato'
            })
        }
    })
}

module.exports = {
    index,
    store,
    update
}