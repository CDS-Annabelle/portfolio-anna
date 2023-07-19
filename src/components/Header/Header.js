import React from 'react'
import styles from './Header.module.css'
import Socials from '../Socials/Socials'
import Nav from '../Nav/Nav'

const Header = () => {
  return (
    <header>
      <Nav />
      <Socials />
      <div className={styles.topBar}>
        <div className={styles.subBar}>
          <div className={styles.headerContainer}>
            <h1>Portfolio</h1>
            <h2 className={styles.subTitle}>Intégrateur / Développeur Web</h2>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
