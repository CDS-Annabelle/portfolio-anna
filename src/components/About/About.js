import React from 'react'
import './about.css'
import anna from '../../assets/picture-anna.jpg'

const About = () => {
  return (
    <section id="about">
      <div className="parallax">
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={anna} alt="Annabelle Portfolio" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <h2>A propos</h2>
              <p className="textAbout">
                En freelance, depuis 17 ans, je me suis spécialisée dans la
                création de site, principalement ecommerce. Après avoir
                travaillé sur plusieurs CMS, j'ai suivi deux formations ces deux
                dernières années pour améliorer mes compétences en
                développement, backend et frontend.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
