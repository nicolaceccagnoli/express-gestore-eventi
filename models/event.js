// Recupero il db degli eventi
const events = require('../db/events.json');

// Definisco un istanza di Event
class Event {
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