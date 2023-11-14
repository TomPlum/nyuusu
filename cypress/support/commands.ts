/// <reference types="cypress" />

Cypress.Commands.add('getByTestID', (id: string) => {
  return cy.get(`[data-testid="${id}"]`)
})