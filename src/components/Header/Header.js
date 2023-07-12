import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/photo-anna-06-06-2023.jpg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Annabelle</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img className="anna" src={ME} alt="portfolio Annabelle Gaffet" />
        </div>
      </div>
    </header>
  )
}

export default Header
