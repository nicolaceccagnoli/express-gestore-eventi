// Definisco un istanza di Reservation
class Reservation {
    #id;
    #firstName;
    #lastName;
    #email;
    #eventId;

    constructor(id, firstName, lastName, email, eventId) {
        this.#id = id;
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#email = email;
        this.#eventId = eventId;
    }

    set id(id) {
        this.#id = id;
    }

    get id() {
        return this.#id
    }

    set firstName(firstName) {
        this.#firstName = firstName;
    }

    get firstName() {
        return this.#firstName
    }

    set lastName(lastName) {
        this.#lastName = lastName;
    }

    get lastName() {
        return this.#lastName
    }

    set email(email) {
        this.#email = email;
    }

    get email() {
        return this.#email
    }

    set eventId(eventId) {
        this.#eventId = eventId;
    }

    get eventId() {
        return this.#eventId
    }

}