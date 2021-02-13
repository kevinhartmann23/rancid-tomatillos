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
    const movieResponse = this.props.fetchData(`movies/${this.props.id}`)

    movieResponse.then(data => {
      if (data && data.error) {
        this.props.handleError(data.error)
      }

      if (!this.props.error) {
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
      <>
        {!this.state.isLoading &&
          <section className='details-container'>
            <article className='details'>
              <div className='details-text'>
                <h2 className='details-title'>{title}</h2>
                <p className='details-date'><span>Release Date:</span> {release_date}</p>
                <p className='details-overview'><span>Overview:</span> {overview}</p>
                <p className='details-genres'><span>Genres:</span> {genreList}</p>
                <p className='details-budget'><span>Budget:</span> {formattedBudget}</p>
                <p className='details-revenue'><span>Revenue:</span> {formattedRevenue}</p>
                <p className='details-runtime'><span>Runtime:</span> {runtime} minutes</p>
                <p className='details-rating'><span>Average Rating:</span> {fixedRating}</p>
              </div>
              <div
                className='details-image'
                style={{ backgroundImage: `linear-gradient(to top, rgba(255,255,255,0), #FBF7EF), url(${backdrop_path})` }}
                >
              </div>
            </article>
          </section>
        }
      </>
    )
  }
}
