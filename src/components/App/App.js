import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from 'react-router-dom'
import Movies from '../Movies/Movies'
import Details from '../Details/Details'
import TopFive from '../TopFive/TopFive'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import Loading from '../Loading/Loading'
import greenTomato from '../../images/icon-tomato-green.png'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: false,
      errorStatus: 0,
      movies: [],
      displayedMovies: [],
      currentMovie: '',
      searchBar: '',
    }
  }

  handleClick = (event) => {
    this.setState({ isLoading: true })
    const movieId = event.target.closest('article').id

    if (movieId) {
      const movieData = this.fetchData(`movies/${movieId}`)

      movieData.then(response => {
        this.setState({ currentMovie: response.movie, isLoading: false  })
      })
    }
  }

  handleChange = (event) => {
    const { value } = event.target

    const filteredMovies = this.state.movies.filter(movie => {
      return movie.title.toLowerCase().includes(value.toLowerCase())
    })

    this.setState({ displayedMovies: filteredMovies, searchBar: value })
  }

  fetchData = (input) => {
    let fetchResponse

    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${input}`)
      .then(response => {
        fetchResponse = response.status
        return response.json()
      })
      .catch(error => {
        this.setState({ errorStatus: fetchResponse, isLoading: false })
      })
  }

  handleResponse(response) {
    if (this.state.errorStatus === 0) {
      this.setState({
        movies: response.movies,
        displayedMovies: response.movies,
        isLoading: false
      })
    }
  }

  componentDidMount = () => {
    this.setState({ isLoading: true })
    const fetchData = this.fetchData('movies')
    fetchData.then(response => this.handleResponse(response))
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <header className='header'>
            <div className='header-company'>
              <img className='header-icon' src={greenTomato} alt='tomatillo logo' />
              <h1>RANCID TOMATILLOS</h1>
            </div>
            <div className='navigation'>
              <div className='navigation-input'>
                <label htmlFor='search'></label>
                <input
                  id='search'
                  name='searchBar'
                  value={this.state.searchBar}
                  onChange={this.handleChange}
                  placeholder='Search by movie title'
                />
              </div>
              <NavLink exact to='/' className='nav-link'>Home</NavLink>
            </div>
          </header>
          {this.state.errorStatus > 0 && <ErrorMessage status={this.state.errorStatus}/>}
          {this.state.isLoading ? <Loading /> :
            <Switch>
              <Route
                path='/movies/:id'
                render={() => <Details currentMovie={this.state.currentMovie} />}
                />
              <Route
                exact path='/'
                render={() =>
                  <div>
                    <TopFive movies={this.state.movies} handleClick={this.handleClick} />
                    <Movies movies={this.state.displayedMovies} handleClick={this.handleClick} />
                  </div>
                }
              />
            </Switch>
          }
        </div>
      </Router>
    )
  }
}

export default App
