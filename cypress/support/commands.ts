/// <reference types="cypress" />

Cypress.Commands.add('getByTestID', (id) => {
    return cy.get(`[data-testid="${id}"]`)
})