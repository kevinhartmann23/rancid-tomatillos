import { isElementOfType } from "react-dom/test-utils"

describe('Rancid Tomatillos', () => {
  const baseUrl = 'http://localhost:3000/'
  const apiUrl = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'


  it('should display movie cards', () => {
    cy.intercept('GET', apiUrl, { fixture: 'allMovies' })

     cy.visit(baseUrl)
      .get('h1').should('have.text', 'RANCID TOMATILLOS')
      .get('article:first img').should('have.attr', 'src').should('include', 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
  })

  it('should be able to click anywhere on a movie card to view more details', () => {
    cy.intercept('GET', `${apiUrl}/694919`, {fixture: 'movie-money-plane'})
    
    cy.get('article:first').click().as('clickButton')
    
        .get('h2').should('have.text', 'Money Plane')
        .get('.details-date').should('contain', 'Release Date:')
        .get('.details-overview').should('contain', 'Overview:')
        .get('.details-genres').should('contain', 'Genres:')
        .get('.details-budget').should('contain', 'Budget:')
        .get('.details-revenue').should('contain', 'Revenue:')
        .get('.details-runtime').should('contain', 'Runtime:')
        .get('.details-rating').should('contain', 'Average Rating:')
  })

})