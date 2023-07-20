import React from 'react'
import data from '../../assets/data.json'
import clients from '../../assets/clients.json'
import './portfolio.css'

const tabs = [...document.querySelectorAll('.tab')]

tabs.forEach((tab) => tab.addEventListener('click', tabsAnimation))

const tabContents = [...document.querySelectorAll('.tab-content')]

function tabsAnimation(e) {
  const indexToRemove = tabs.findIndex((tab) =>
    tab.classList.contains('active-tab')
  )

  tabs[indexToRemove].setAttribute('aria-selected', 'false')
  tabs[indexToRemove].setAttribute('tabIndex', '-1')
  tabs[indexToRemove].classList.remove('active-tab')
  tabContents[indexToRemove].classList.remove('active-tab-content')

  const indexToShow = tabs.indexOf(e.target)

  tabs[indexToShow].setAttribute('tabIndex', '0')
  tabs[indexToShow].setAttribute('aria-selected', 'true')
  tabs[indexToShow].classList.add('active-tab')
  tabContents[indexToShow].classList.add('active-tab-content')
}

tabs.forEach((tab) => tab.addEventListener('keydown', arrowNavigation))

let tabFocus = 0
function arrowNavigation(e) {
  if (e.keyCode === 39 || e.keyCode === 37) {
    tabs[tabFocus].setAttribute('tabIndex', -1)

    if (e.keyCode === 39) {
      tabFocus++

      if (tabFocus >= tabs.length) {
        tabFocus = 0
      }
    } else if (e.keyCode === 37) {
      tabFocus--

      if (tabFocus < 0) {
        tabFocus = tabs.length - 1
      }
    }

    tabs[tabFocus].setAttribute('tabIndex', 0)
    tabs[tabFocus].focus()
  }
}

const Portfolio = () => {
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
            aria-selected="true"
            tabIndex="0"
            className="tab active-tab"
          >
            Projets Perso
          </button>
          <button
            role="tab"
            aria-controls="panel-2"
            id="tab-2"
            type="button"
            aria-selected="false"
            tabIndex="-1"
            className="tab"
          >
            Projets Clients
          </button>
          <button
            role="tab"
            aria-controls="panel-3"
            id="tab-3"
            type="button"
            aria-selected="false"
            tabIndex="-1"
            className="tab"
          >
            Wordpress
          </button>
        </div>
        <div
          id="panel-1"
          role="tabpanel"
          tabIndex="0"
          aria-labelledby="tab-1"
          className="tab-content active-tab-content"
        >
          <div className="portfolio__container">
            {data.map(({ id, image, title, github, demo, text }) => {
              return (
                <article key={id} className="portfolio__item">
                  <div className="card1">
                    <div className="portfolio__item-image">
                      <img src={image} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <div className="portfolio__item-cta">
                      <a href={github} className="btn" target="_blank">
                        Github
                      </a>
                      <a
                        href={demo}
                        className="btn btn-primary"
                        target="_blank"
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

        <div
          id="panel-2"
          role="tabpanel"
          tabIndex="0"
          aria-labelledby="tab-2"
          className="tab-content"
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
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                  <div className="card2">
                    <p>{text} </p>
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
