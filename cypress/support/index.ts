declare global {
    namespace Cypress {
        interface Chainable {
            getByTestID(id: string): Chainable<JQuery<HTMLElement>>
        }
    }
}