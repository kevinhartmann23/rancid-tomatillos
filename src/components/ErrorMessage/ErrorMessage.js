import React from 'react'

export default function ErrorMessage({ status }) {
  let display

  if (status > 399 && status < 500) {
    display = (
      <div>
        <p>Domain unavailable, please try again.</p>
        <img src='./error-display.png' alt='error banner'/>
      </div>
    )
  } else if (status > 499) {
    display = (
      <div>
        <p>Server unavailable, please refresh the page.</p>
        <img src='./error-display.png' alt='error banner'/>
      </div>
    )
  }

  return (
    <section>
      {display}
      <h2 className='error-message'>Error Status:</h2>
      <h2 className='error-message'>{status}</h2>
    </section>
  )
}
