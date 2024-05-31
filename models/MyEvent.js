// Recupero il db degli eventi
const events = require('../db/events.json');

// Importo File System 
const fs = require("fs");

// Importo path
const path = require("path");

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