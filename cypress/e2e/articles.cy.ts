describe('Articles Page', () => {
  it('should render a list of articles', () => {
    cy.visit('/articles')
    cy.getByTestID('cards-loading').should('be.visible')
    cy.getByTestID('article-card-0').should('be.visible')
  })
})