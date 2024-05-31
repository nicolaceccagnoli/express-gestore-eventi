// Recupero gli eventi dal db
const events = require('../db/events.json')

// Recupero il model del singolo evento
const MyEvent = require("../models/MyEvent.js");

// Definisco la rotta per l'index
const index = (req, res) => {

    const { id, title, date } = req.query;

    // Se non sono stati inseriti dei parametri nella query
    if(!id && !title && !date) {
        const allEvents = MyEvent.readJson('events');
        // Restituisco tutti gli eventi
        return res.json({
            data: allEvents
        })
    }
    
    // Filtro gli eventi
    const filteredEvents = MyEvent.filterEvents('events', {id, title, date});

    // Restituisco gli eventi filtrati
    res.json({
        data: filteredEvents
    })

}

// Definisco la rotta per lo store
const store = (req, res) => {
    // Recupero i dati inviati dal client
    const { title, description, date, maxSeats } = req.body;

    // Se il body della request non soddisfa questi requisiti
    if (!title || title.trim().replaceAll('/', '').length == 0 || !description || !date || !maxSeats) {
        // Restituisco un errore
        return res.status(400).send('Alcuni dati non sono stati inseriti');
    }

    // Leggo gli eventi esistenti
    const currentEvents = MyEvent.readJson('events');

    // Creo un nuovo evento
    const newEvent = new MyEvent(currentEvents.length +1, title, description, date, maxSeats);

    // Aggiungo il nuovo evento alla lista
    currentEvents.push(newEvent);

    // Salvo gli eventi aggiornati
    MyEvent.putJsonData('events', currentEvents);

    if(newEvent) {
        // Qui viene chiamata toJSON della classe MyEvent
        res.json({
            ...newEvent
        })
    } else {
        res.status(400).json({
            message: 'Qualcosa è andato storto',
        })
    }

}

// Definisco la rotta per l'update
const update = (req, res) => {

    // Recupero l'evento tramite id
    const { id } = req.params;

    // Recupero i dati inviati dal client
    const { title, description, date, maxSeats } = req.body;

    // Se il body della request non soddisfa questi requisiti
    if ( !id ) {
        // Restituisco un errore
        return res.status(400).send('Alcuni dati non sono stati inseriti');
    }

    try {
        // Aggiorno l'evento
        const updatedEvent = MyEvent.updateEvents('events', id, { title, description, date, maxSeats });

        res.json({
            data: updatedEvent
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

module.exports = {
    index,
    store,
    update
}