import React, { Component } from 'react'
import './Details.css'

export default class Details extends Component {
  constructor() {
    super()
    this.state = {
      currentMovie: '',
      isLoading: true
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true })

    const movieResponse = this.props.fetchData(`movies/${this.props.id}`)

    movieResponse.then(data => {
      if (data && data.error) {
        this.props.handleError(data.error)

      } else if (this.props.errorStatus < 300) {
        this.setState({ currentMovie: data.movie, isLoading: false })
      }
    })
  }

  formatCurrency(amount) {
    if (amount === 0) {
      return 'Not Reported'
    }

    return amount.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      style: 'currency',
      currency: 'USD'
    })
  }

  render() {
    const { title, release_date, backdrop_path, overview, genres, budget, revenue, runtime, average_rating } = this.state.currentMovie
    let fixedRating
    let genreList
    let formattedBudget
    let formattedRevenue

    if (!this.state.isLoading) {
      fixedRating = average_rating.toFixed(1)
      genreList = genres.join(', ')
      formattedBudget = this.formatCurrency(budget)
      formattedRevenue = this.formatCurrency(revenue)
    }

    return (
      <div>
        {!this.state.isLoading &&
          <section className='details'>
            <div className='details-wrapper'>
              <h2 className='details-title'>{title}</h2>
              <p className='details-date'>Release Date: {release_date}</p>
              <p className='details-overview'>Overview: {overview}</p>
              <p className='details-genres'>Genres: {genreList}</p>
              <p className='details-budget'>Budget: {formattedBudget}</p>
              <p className='details-revenue'>Revenue: {formattedRevenue}</p>
              <p className='details-runtime'>Runtime: {runtime} minutes</p>
              <p className='details-rating'>Average Rating: {fixedRating}</p>
            </div>
            <div
              className='details-image'
              style={{ backgroundImage: `linear-gradient(to top, rgba(255,255,255,0), #FBF7EF), url(${backdrop_path})` }}
            >
            </div>
          </section>
        }
      </div>
    )
  }
}
