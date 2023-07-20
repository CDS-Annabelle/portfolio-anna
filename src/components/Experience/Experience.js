import React from 'react'
import styles from './Experience.module.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h2>Expérience</h2>

      <div className={styles.experienceContainer}>
        <div>
          <h3>Frontend Development & Design</h3>
          <div className={styles.experienceContent}>
            <article className={styles.experienceDetails}>
              <BsPatchCheckFill className={styles.experienceDetailsIcon} />
              <div>
                <h4>HTML</h4>
                <small className={styles.textLight}>Expérimentée</small>
              </div>
            </article>
            <article className={styles.experienceDetails}>
              <BsPatchCheckFill className={styles.experienceDetailsIcon} />
              <div>
                <h4>CSS</h4>
                <small className={styles.textLight}>Expérimentée</small>
              </div>
            </article>
            <article className={styles.experienceDetails}>
              <BsPatchCheckFill className={styles.experienceDetailsIcon} />
              <div>
                <h4>SASS</h4>
                <small className={styles.textLight}>Expérimentée</small>
              </div>
            </article>
            <article className={styles.experienceDetails}>
              <BsPatchCheckFill className={styles.experienceDetailsIcon} />
              <div>
                <h4>JavaScript</h4>
                <small className={styles.textLight}>Expérimentée</small>
              </div>
            </article>
            <article className={styles.experienceDetails}>
              <BsPatchCheckFill className={styles.experienceDetailsIcon} />
              <div>
                <h4>Bootstrap</h4>
                <small className={styles.textLight}>Expérimentée</small>
              </div>
            </article>
            <article className={styles.experienceDetails}>
              <BsPatchCheckFill className={styles.experienceDetailsIcon} />
              <div>
                <h4>React</h4>
                <small className={styles.textLight}>Expérimentée</small>
              </div>
            </article>
            <article className={styles.experienceDetails}>
              <BsPatchCheckFill className={styles.experienceDetailsIcon} />
              <div>
                <h4>Photoshop</h4>
                <small className={styles.textLight}>Expérimentée</small>
              </div>
            </article>
          </div>
        </div>

        <div>
          <h3>Backend Development</h3>
          <div className={styles.experienceContent}>
            <article className={styles.experienceDetails}>
              <BsPatchCheckFill className={styles.experienceDetailsIcon} />
              <div>
                <h4>Node JS</h4>
                <small className={styles.textLight}>Basic</small>
              </div>
            </article>
            <article className={styles.experienceDetails}>
              <BsPatchCheckFill className={styles.experienceDetailsIcon} />
              <div>
                <h4>MongoDB</h4>
                <small className={styles.textLight}>Basic</small>
              </div>
            </article>
            <article className={styles.experienceDetails}>
              <BsPatchCheckFill className={styles.experienceDetailsIcon} />
              <div>
                <h4>PHP</h4>
                <small className={styles.textLight}>Intermédiaire</small>
              </div>
            </article>
            <article className={styles.experienceDetails}>
              <BsPatchCheckFill className={styles.experienceDetailsIcon} />
              <div>
                <h4>MySQL</h4>
                <small className={styles.textLight}>Intermédiaire</small>
              </div>
            </article>
          </div>
        </div>

        <div>
          <h3>CMS</h3>
          <div className={styles.experienceContent}>
            <article className={styles.experienceDetails}>
              <BsPatchCheckFill className={styles.experienceDetailsIcon} />
              <div>
                <h4>Wordpress</h4>
                <small className={styles.textLight}>Expérimentée</small>
              </div>
            </article>
            <article className={styles.experienceDetails}>
              <BsPatchCheckFill className={styles.experienceDetailsIcon} />
              <div>
                <h4>Woocommerce</h4>
                <small className={styles.textLight}>Expérimentée</small>
              </div>
            </article>
            <article className={styles.experienceDetails}>
              <BsPatchCheckFill className={styles.experienceDetailsIcon} />
              <div>
                <h4>Prestashop</h4>
                <small className={styles.textLight}>Expérimentée</small>
              </div>
            </article>
            <article className={styles.experienceDetails}>
              <BsPatchCheckFill className={styles.experienceDetailsIcon} />
              <div>
                <h4>Joomla</h4>
                <small className={styles.textLight}>Expérimentée</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
