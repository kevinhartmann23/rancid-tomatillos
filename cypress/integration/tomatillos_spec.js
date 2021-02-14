
const baseUrl = 'http://localhost:3000/'
const apiUrl = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'

describe('Rancid Tomatillos Home Page', () => {


  it('should display a navigation bar with functionality', () => {
    cy.intercept('GET', apiUrl, { fixture: 'allMovies' })
    cy
      .visit(baseUrl)
        .get('.header')
          .find('img').should('be.visible')
          .get('h1').should('have.text', 'RANCID TOMATILLOS')
          .get('input').should('have.attr', 'placeholder').should('include', 'by Movie Title')
          .get('input').should('have.value', '')
        .get('.navigation a').should('have.text', 'Home')      
  })
    
  it('should display movie cards', () => {
    cy
      .get('.movies article:first img').should('have.attr', 'src').should('include', 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
      .get('.movies article:first .rating-container').children().should('have.length', 8)
    })  
})

  
describe('Top Five Functionality', () => {
  it('should show a user the top 5 picks', () => {
    cy
      .get('.topfive-container')
      .get('.section-header:first').should('have.text', 'Top Five Picks')
      .get('.topfive').children().should('have.length', 5)
      .get('.topfive:first img').should('have.attr', 'src').should('include', 'https://image.tmdb.org/t/p/original//sy6DvAu72kjoseZEjocnm2ZZ09i.jpg')
  })

  it('should be able to click on any top 5 movie to view details on selected movie', () => {
    cy.intercept('GET', `${apiUrl}/718444`, { fixture: 'movie-rogue' })
    cy 
      .get('.topfive #718444').click()
  })

  it('should change url path to selected movies/:id page', () => {
    cy.on("url:changed", newUrl => {
      expect(newUrl).to.contain('movies/694919')
    })
  })

  it('should have ability to navigate home by clicking the home button, returning user to main page', () => { 
    cy.get('.nav-link').click()
    
  })

  it('should change url path to home page', () => {
    cy.on("url:changed", newUrl => {
      expect(newUrl).to.equal(baseUrl)
    })
  })
})

describe('Individual Movie Details', () => {
  it('should be able to click anywhere on a movie card on the home page to view more details', () => {
    cy.intercept('GET', `${apiUrl}/694919`, { fixture: 'movie-money-plane' })

    cy.get('.movies article:first').click()

      .get('h2').should('have.text', 'Money Plane')
      .get('.details-date').should('contain', 'Release Date:')
      .get('.details-overview').should('contain', 'Overview:')
      .get('.details-genres').should('contain', 'Genres:')
      .get('.details-budget').should('contain', 'Budget:')
      .get('.details-revenue').should('contain', 'Revenue:')
      .get('.details-runtime').should('contain', 'Runtime:')
      .get('.details-rating').should('contain', 'Average Rating:')
  })

  it('should change url path to selected movies/:id page', () => {
    cy.on("url:changed", newUrl => {
      expect(newUrl).to.contain('movies/694919')
    })
  })
})

describe('Search Movie Functionality', () => {
  
  it('should be able to type text into search bar', () => {
    cy.intercept('GET', apiUrl, { fixture: 'allMovies' })
      .visit(baseUrl)
        .get('input').type('mulan')
  })

  it('should display the movies related to search keyword or text', () => {
    cy.pause()
      .get('.movies article:first img').should('have.attr', 'src').should('include', 'https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg')
      .get('.movies article:first .rating-container').children().should('have.length', 6)
  })

  it('search input value and filtered movies should clear out after clicking home page nav-link', () => {
      cy
        .get('.nav-link').click()     
        .get('input').should('have.value', '')
        .get('.movies article:first img').should('have.attr', 'src').should('include', 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
        .get('.movies article:first .rating-container').children().should('have.length', 8)
  })

  it('search input value and filtered movies should clear out selecting a filtered movie to view details', () => {
    cy
      .get('.movies article:first').click()
      .get('input').should('have.value', '')
      .get('.nav-link').click()   
      .get('input').should('have.value', '')
      .get('.movies article:first img').should('have.attr', 'src').should('include', 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
      .get('.movies article:first .rating-container').children().should('have.length', 8)
  })
})

describe('Error Display', () => {
  it('should display an error if incorrect url path or fetch response is an error', () => {
    cy.intercept('GET', apiUrl, { statusCode: 404 })
    cy.visit(`${baseUrl}movies/48734832`)
      .get('h2:first').should('contain', 'Domain unavailable, please return to home and try again.')
      .get('.error-container h2').should('contain', 'Error Status: 404')
  })
})
