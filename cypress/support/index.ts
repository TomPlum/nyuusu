declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            getByTestID(id: string): Chainable<JQuery<HTMLElement>>
        }
    }
}

export {}