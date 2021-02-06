import React from 'react'

export default function ErrorMessage({ status }) {
  let display

  if (status > 399 && status < 500) {
    display = <h2>{status}</h2>
  } else if (status > 499) {
    display = <h2>{status}</h2>
  }

  return (
    <section>
      {display}
    </section>
  )
}
