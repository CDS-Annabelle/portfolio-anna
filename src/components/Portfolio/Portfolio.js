import React, { useState } from 'react'
import data from '../../assets/data.json'
import clients from '../../assets/clients.json'
import styles from './Portfolio.module.css'

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (index) => {
    setActiveTab(index)
  }

  return (
    <section id="portfolio">
      <h2 className={styles.titlePortfolio}>Portfolio</h2>

      <div className={styles.tabs}>
        <div
          role="tablist"
          aria-label="tabs component"
          className={styles.tabsBtnContainer}
        >
          <button
            role="tab"
            aria-controls="panel-1"
            id="tab-1"
            type="button"
            aria-selected={activeTab === 0 ? 'true' : 'false'}
            tabIndex={activeTab === 0 ? '0' : '-1'}
            className={
              activeTab === 0 ? `${styles.tab} ${styles.activeTab}` : styles.tab
            }
            onClick={() => handleTabClick(0)}
          >
            Projets Perso
          </button>
          <button
            role="tab"
            aria-controls="panel-2"
            id="tab-2"
            type="button"
            aria-selected={activeTab === 1 ? 'true' : 'false'}
            tabIndex={activeTab === 1 ? '0' : '-1'}
            className={
              activeTab === 1 ? `${styles.tab} ${styles.activeTab}` : styles.tab
            }
            onClick={() => handleTabClick(1)}
          >
            Projets Clients
          </button>
        </div>

        <div
          id="panel-1"
          role="tabpanel"
          tabIndex="0"
          aria-labelledby="tab-1"
          className={
            activeTab === 0
              ? `${styles.tabContent} ${styles.activeTabContent}`
              : styles.tabContent
          }
        >
          <div className={styles.portfolioContainer}>
            {data.map(({ id, image, title, github, text }) => {
              return (
                <article key={id} className={styles.portfolioItem}>
                  <div className={styles.card1}>
                    <div className={styles.portfolioItemImage}>
                      <img src={image} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <div className={styles.portfolioItemCta}>
                      <a
                        href={github}
                        className={styles.btn}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                  <div className={styles.card2}>
                    <p>{text}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        <div
          id="panel-2"
          role="tabpanel"
          tabIndex="0"
          aria-labelledby="tab-2"
          className={
            activeTab === 1
              ? `${styles.tabContent} ${styles.activeTabContent}`
              : styles.tabContent
          }
        >
          <div className={styles.portfolioContainer}>
            {clients.map(({ id, image, title, demo, text }) => {
              return (
                <article key={id} className={styles.portfolioItem}>
                  <div className={styles.card1}>
                    <div className={styles.portfolioItemImage}>
                      <img src={image} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <div className={styles.portfolioItemCta}>
                      <a
                        href={demo}
                        className={styles.btnPrimary}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                  <div className={styles.card2}>
                    <p>{text}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
