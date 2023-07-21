import React from 'react'
import styles from './About.module.css'
import anna from '../../assets/picture-anna.jpg'

const About = () => {
  return (
    <section id="about">
      <div className={styles.parallax}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutMe}>
            <div className={styles.aboutMeImage}>
              <img src={anna} alt="Annabelle Portfolio" />
            </div>
          </div>

          <div className={styles.aboutContent}>
            <div className={styles.aboutCards}>
              <h2>A propos</h2>
              <p className={styles.textAbout}>
                En freelance, depuis 17 ans, je me suis spécialisée dans la
                création de site, principalement ecommerce. <br />
                Après avoir travaillé sur plusieurs CMS (Prestahashop et Joomla)
                pour mes clients, j'ai une nette préférence désormais pour
                Wordpress/ Woocommerce. <br />
                J'ai depuis suivi en parallèle ces deux dernières années deux
                formations pour améliorer mes compétences en développement
                backend et frontend.
                <br />
                <br />
                <span className={styles.firstname}>Annabelle</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
