/*
Interface for gathering customers as an object from MySQL server.
 */
export interface Customers {
    id: string,
    userId: string,
    name: string,
    surname: string,
    mail: string,
    telephone: string
}