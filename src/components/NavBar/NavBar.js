import React from 'react'
import { NavLink } from 'react-router-dom'
import greenTomato from '../../images/icon-tomato-green.png'
import './NavBar.css'

export default function NavBar({ searchBar, handleChange, resetError }) {
  return (
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
            value={searchBar}
            onChange={handleChange}
            placeholder='Search by movie title'
          />
        </div>
        <NavLink
          exact to='/'
          className='nav-link'
          onClick={resetError}>
          Home
        </NavLink>
      </div>
    </header>
  )
}
