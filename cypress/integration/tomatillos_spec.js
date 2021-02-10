describe('Rancid Tomatillos', () => {
  const baseUrl = 'http://localhost:3000'

  beforeEach('Visiting baseUrl', () => {
    cy.visit(baseUrl)
  })
  
  it('should display all possible movie cards on visit to home page', () => {
    cy.get('h1').should('have.text', 'RANCID TOMATILLOS')
  })
})