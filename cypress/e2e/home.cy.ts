describe('home page', () => {
  it('should render the home page correctly', () => {
    cy.visit('/')
    cy.getByTestID('home-view').should('be.visible')
  })
})