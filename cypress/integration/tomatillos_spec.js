describe('Rancid Tomatillos', () => {
  const baseUrl = 'http://localhost:3000/'
  const apiUrl = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'

  beforeEach('Visiting baseUrl', () => {
    cy.visit(baseUrl)
  })
  
  it.skip('should display all possible movie cards on visit to home page', () => {
    cy.fixture('testData.json')
      .then((res) => {
        console.log(Array.isArray(res.moviesData))
        cy.intercept('GET', apiUrl, res.moviesData).as('moviesData')
      })
      cy.visit(baseUrl)
      cy.wait('@moviesData').its('request.body').should('')
          .get('h1').should('have.text', 'RANCID TOMATILLOS')
          .get('.movie').should('have.text')
  })

  it('should display movie cards', () => {
    cy
      .get('h1').should('have.text', 'RANCID TOMATILLOS')
      .get('article:first h2').should('have.text', 'Money Plane')
      .get('article:first p').should('have.text', 'Rating: 6.1')
      .get('article:first img').should('have.attr', 'src').should('include', 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
  })

  it('should be able to click anywhere on a movie card to view more details', () => {
    cy
      .get('article:first').click()
      .get('section')
        .get('h2').should('have.text', 'Money Plane')
        .get('.details-date').should('contain', 'Release Date:')
        .get('.details-overview').should('contain', 'Overview:')
        .get('.details-genres').should('contain', 'Genres:')
        .get('.details-budget').should('contain', 'Budget:')
        .get('.details-revenue').should('contain', 'Revenue:')
        .get('.details-runtime').should('contain', 'Runtime:')
        .get('.details-rating').should('contain', 'Average Rating:')
        .get('.poster').should('have.attr', 'src').should('include', '/')
  })

})