// Importo File System 
const fs = require("fs");

// Importo path
const path = require("path");

// Recupero le prenotazioni
const Reservation = require('./Reservation');

// Definisco un istanza di Event
class MyEvent {
    #id;
    #title;
    #description;
    #date;
    #maxSeats;

    constructor(id, title, description, date, maxSeats) {
        this.#id = id;
        this.#title = title;
        this.#description = description;
        this.#date = date;
        this.#maxSeats = maxSeats;
    }

    // Definisco un metodo statico per poter leggere e salvare dati su un file json
    static readJson(file) {
        // Recupero il percorso del file
        const filePath = path.join(__dirname, '..', 'db', `${file}.json`);
        // Leggo il contenuto del file
        const fileData = fs.readFileSync(filePath, 'utf-8');
        // Converto la stringa JSON in un oggetto JS
        return JSON.parse(fileData);
    }   

    // Definisco un metodo statico per poter salvare i dati su un file json
    static putJsonData(file, newData) {
        // Recupero il percorso del file
        const filePath = path.join(__dirname, '..', 'db', `${file}.json`);
        // Converto il nuovo dato in un oggetto JSON
        const string = JSON.stringify(newData);
        // Inserisco il dato all'interno del file
        fs.writeFileSync(filePath, string);
    }

    // Creo una funzione che restituisca un oggetto con le proprietà pubbliche
    toJSON() {
        return {
            id: this.#id,
            title: this.#title,
            description: this.#description,
            date: this.#date,
            maxSeats: this.#maxSeats
        };
    }

    // Definisco un metodo per recuperare un evento tramite ID
    static filterEvents(file, filters) {
        // Recupero il percorso del file
        const filePath = path.join(__dirname, '..', 'db', `${file}.json`)
        // Leggo il contenuto del file
        const fileData = fs.readFileSync(filePath, 'utf-8');
        // Converto la stringa JSON in un array di oggetti JS
        const events = JSON.parse(fileData);

        // Applico i filtri agli eventi
        let filteredEvents = events;

        // Cerco l'evento con l'ID fornito
        if(filters.id) {
            filteredEvents = filteredEvents.filter(e => e.id === filters.id);
        }

        // Cerco l'evento per titolo
        if(filters.title) {
            filteredEvents = filteredEvents.filter(e => e.title?.toLowerCase().includes(filters.title.toLowerCase()));
        }

        // Cerco l'evento per data
        if(filters.date) {
            filteredEvents = filteredEvents.filter(e => e.date === filters.date);
        }

        return filteredEvents;
    }

    static updateEvents(file, id, updates) {

        // Recupero gli eventi
        const events = MyEvent.readJson(file);

        // Trovo l'indice dell'evento da aggiornare
        const eventIndex = events.findIndex(e => e.id === parseInt(id))

        // Se l'evento non viene trovato, lancio un errore
        if (eventIndex === -1) {
            throw new Error(`Evento con ID ${id} non trovato`);
        }

        // Recupero l'evento da aggiornare
        const event = events[eventIndex];

        if(updates.title) {
            event.title = updates.title;
        }

        if(updates.description) {
            event.description = updates.description;
        }

        if(updates.date) {
            event.date = updates.date;
        }

        if(updates.maxSeats) {
            event.maxSeats = updates.maxSeats;
        }

        MyEvent.putJsonData(file, events);

        return event;
    }

    // Definisco un metodo per recuperare tutte le prenotazioni associate
    static getReservations(eventId) {

        const reservations = MyEvent.readJson('reservations');
        return reservations.filter(r => r.eventId === eventId);

    }

    // Definico i setter e i getter
    set id(id) {
        this.#id = id;
    }

    get id() {
        return this.#id;
    }

    set title(title) {
        this.#title = title;
    }

    get title() {
        return this.#title;
    }

    set description(description) {
        this.#description = description;
    }

    get description() {
        return this.#description;
    }

    set date(date) {
        this.#date = date;
    }

    get date() {
        return this.#date;
    }

    set maxSeats(maxSeats) {
        this.#maxSeats = maxSeats;
    }

    get maxSeats() {
        return this.#maxSeats;
    }


}

module.exports = MyEvent;