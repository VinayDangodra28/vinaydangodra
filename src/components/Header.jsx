import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='header'>
        header
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </header>
  )
}

export default Header