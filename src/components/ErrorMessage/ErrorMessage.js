import React from 'react'
import './ErrorMessage.css'
import errorBanner from '../../images/error-banner.png'
import errorGhostLarge from '../../images/error-ghost-large.png'
import errorGhostSmall from '../../images/error-ghost-small.png'

export default function ErrorMessage({ status }) {
  let errorMessage

  if (status > 399 && status < 500) {
    errorMessage = <h2>Domain unavailable, please try a different domain.</h2>

  } else if (status > 499) {
    errorMessage = <h2>Server unavailable, please refresh the page.</h2>
  }

  return (
    <section className='error-page'>
      {errorMessage}
      <div className='error-container'>
        <img className='error-banner' src={errorBanner} alt='error banner'/>
        <img className='error-ghost-large' src={errorGhostLarge} alt='error banner'/>
        <img className='error-ghost-small' src={errorGhostSmall} alt='error banner'/>
        <h2 className='error-message-top'>Error Status:</h2>
        <h2 className='error-message-bottom'>{status}</h2>
      </div>
    </section>
  )
}
