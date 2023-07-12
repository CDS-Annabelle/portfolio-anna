import React from 'react'
import './about.css'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h2>A propos</h2>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h4>Expérience</h4>
              <small>15+</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h4>Projets</h4>
              <small>50+</small>
            </article>
          </div>

          <p>
            En freelance, depuis 17 ans, je suis spécialisée dans la création de
            site, principalement ecommerce.
          </p>

          <a href="#contact" className="btn btn-primary">
            Contact
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
