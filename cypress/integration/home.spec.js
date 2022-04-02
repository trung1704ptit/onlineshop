
// navigate to the shop page
describe('Natigation', () => {
  it('should navigate to the shop page', () => {
    cy.visit('http://localhost:3000')

    cy.get('a[href*="shop"]').click()

    cy.url().should('include', '/shop')
  })
})