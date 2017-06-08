import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div>
    <h1>Phoenix React Redux Starter Kit</h1>

    <Link to='/counter' activeClassName='route--active'>
      Counter
    </Link>

  </div>
)

export default Header
