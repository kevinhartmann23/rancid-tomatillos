import React, { Component } from 'react'
import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch, 
  Redirect,
  useParams
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

  handleClick = (event) => {
    if (event.target.id === 'button-back') {
      this.setState({ display: 'all' })

    } else {
      const movieId = event.target.closest('article').id
      const currentMovie = this.fetchData(`movies/${movieId}`)
      Promise.all([currentMovie])
        .then(response => {
          this.setState({ display: 'movie', currentMovie: response[0].movie })
        })
    }
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
      this.setState({ movies: response[0].movies, isLoading: false })
    }
  }

  componentDidMount = () => {
    this.setState({ isLoading: true })
    const fetchData = this.fetchData('movies')
    Promise.all([fetchData])
      .then(response => this.handleResponse(response))
  }

  render() {
    
    return (
      <Router>
        <div className='App'>
          <header className='header'>
            <img className='header-icon' src={greenTomato} alt='tomatillo logo' />
            <h1>RANCID TOMATILLOS</h1>
          </header>
          {this.state.errorStatus > 0 && <Redirect push to='/error' />}
          {this.state.isLoading && <Loading />}
          {this.state.display === 'movie' ? 
            <Redirect push to={`/movies/${this.state.currentMovie.id}`} /> :
            <Redirect push to='/' />
          }
          <Switch>
            <Route path='/movies/:id' render={() => {
              return <Details currentMovie={this.state.currentMovie} handleClick={this.handleClick} /> 
            }}/>
            <Route path='/error' render={() => {
             return <ErrorMessage status={this.state.errorStatus} />
            }}/>
            <Route path='/' render={() => {
              return <Movies movies={this.state.movies} handleClick={this.handleClick} /> 
            }}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
