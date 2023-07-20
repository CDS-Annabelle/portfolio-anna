import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer>
      <a href="https://cds-annabelle.github.io/portfolio-anna/">
        Annabelle - Intégrateur / Développeur Web
      </a>

      <div className={styles.footerCopyright}>
        <small>&copy; Portfolio Annabelle. Tous droits réservés</small>
      </div>
    </footer>
  )
}

export default Footer
