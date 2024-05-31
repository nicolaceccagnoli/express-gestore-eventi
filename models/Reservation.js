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
        if (!id) {
            throw new Error('ID is required')
        }
        this.#id = id;
    }

    get id() {
        return this.#id
    }

    set firstName(firstName) {
        if (!firstName) {
            throw new Error('First name is required')
        }

        this.#firstName = firstName;
    }

    get firstName() {
        return this.#firstName
    }

    set lastName(lastName) {
        if (!lastName) {
            throw new Error('Last name is required')
        }

        this.#lastName = lastName;
    }

    get lastName() {
        return this.#lastName
    }

    set email(email) {
        if (!email) {
            throw new Error('Email is required')
        }

        this.#email = email;
    }

    get email() {
        return this.#email
    }

    set eventId(eventId) {
        if (!eventId) {
            throw new Error('Event ID is required')
        }

        this.#eventId = eventId;
    }

    get eventId() {
        return this.#eventId
    }

}