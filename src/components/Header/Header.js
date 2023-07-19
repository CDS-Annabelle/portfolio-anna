import React from 'react'
import styles from './Header.module.css'
import Socials from '../Socials/Socials'
import Nav from '../Nav/Nav'

const Header = () => {
  return (
    <>
      <Nav />
      <header>
        <Socials />

        <div className={styles.containerHeader} id="header">
          <div className={styles.box}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className={styles.content}>
              <h1>Portfolio</h1>
              <h2 className={styles.subTitle}>Intégrateur / Développeur Web</h2>
            </div>
          </div>
        </div>

        <div className={styles.subBar}></div>
      </header>
    </>
  )
}

export default Header
