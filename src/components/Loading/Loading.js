import React from 'react'
import './Loading.css'
import loadingImg from '../../images/loading-tomato.png'

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-wrapper">
        <img className='tomato-splat' src={loadingImg} alt='tomato splat' />
        <h2 className='loading'>Loading</h2>
      </div>
    </div>
  )
}
