import React, { useState } from 'react'
import data from '../../assets/data.json'
import clients from '../../assets/clients.json'
import './portfolio.css'

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (index) => {
    setActiveTab(index)
  }

  return (
    <section id="portfolio">
      <h2 className="titlePortfolio">Portfolio</h2>

      <div className="tabs">
        <div
          role="tablist"
          aria-label="tabs component"
          className="tabs-btn-container"
        >
          <button
            role="tab"
            aria-controls="panel-1"
            id="tab-1"
            type="button"
            aria-selected={activeTab === 0 ? 'true' : 'false'}
            tabIndex={activeTab === 0 ? '0' : '-1'}
            className={activeTab === 0 ? 'tab active-tab' : 'tab'}
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
            className={activeTab === 1 ? 'tab active-tab' : 'tab'}
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
            activeTab === 0 ? 'tab-content active-tab-content' : 'tab-content'
          }
        >
          <div className="portfolio__container">
            {data.map(({ id, image, title, github, text }) => {
              return (
                <article key={id} className="portfolio__item">
                  <div className="card1">
                    <div className="portfolio__item-image">
                      <img src={image} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <div className="portfolio__item-cta">
                      <a
                        href={github}
                        className="btn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                  <div className="card2">
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
            activeTab === 1 ? 'tab-content active-tab-content' : 'tab-content'
          }
        >
          <div className="portfolio__container">
            {clients.map(({ id, image, title, demo, text }) => {
              return (
                <article key={id} className="portfolio__item">
                  <div className="card1">
                    <div className="portfolio__item-image">
                      <img src={image} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <div className="portfolio__item-cta">
                      <a
                        href={demo}
                        className="btn btn-primary"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                  <div className="card2">
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
