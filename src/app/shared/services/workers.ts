/*
Interface for gathering workers as an object from MySQL server.
 */
export interface Workers {
    id: string,
    userId: string,
    name: string,
    surname: string,
    mail: string,
    telephone: string,
    addressCity: string
}