import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Movies from '../Movies/Movies'
import Details from '../Details/Details'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import Loading from '../Loading/Loading'
import greenTomato from '../../images/icon-tomato-green.png'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      display: 'all',
      isLoading: false,
      errorStatus: 0,
      movies: [],
      currentMovie: '',
    }
  }

  // handleClick = (event) => {
  //   Promise.all([currentMovie])
  //     .then(response => {
  //       this.setState({ display: 'movie', currentMovie: response[0].movie })
  //     })
  //
  // }

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
      this.setState({ movies: response.movies, isLoading: false })
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
            <img className='header-icon' src={greenTomato} alt='tomatillo logo' />
            <h1>RANCID TOMATILLOS</h1>
          </header>
          {this.state.errorStatus > 0 && <ErrorMessage />}
          {this.state.isLoading && <Loading />}
          <Switch>
            <Route
              path='/movies/:id'
              render={({ match }) => {
                const movieId = match.params.id
                const movieData = this.fetchData(`movies/${movieId}`)
                movieData.then(response => {
                  console.log('response', response.movie);
                  return <Details currentMovie={response.movie} />
                })
              }}
            />
            <Route
              path='/error'
              render={() => {
                return <ErrorMessage status={this.state.errorStatus} />
              }}
            />
            <Route
              exact path='/'
              render={() => {
                return <Movies movies={this.state.movies} />
              }}
            />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
