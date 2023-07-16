import React from 'react'
import data from '../../assets/data.json'
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
      <h2>Portfolio</h2>

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
            React
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
            Javascript
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            voluptates laudantium nihil perspiciatis qui voluptatum explicabo,
            nemo dignissimos id harum enim earum minus est vel, ad iure ab
            provident quae temporibus voluptatem quibusdam fuga vero commodi! At
            culpa quidem quam libero atque. Maiores esse ut earum rerum ad,
            alias dolorum!
          </p>
        </div>

        <div
          id="panel-2"
          role="tabpanel"
          tabIndex="0"
          aria-labelledby="tab-2"
          className="tab-content"
        >
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus nemo eveniet alias quo, dolor quisquam ut a eligendi
            vero, consequatur, quis cum. Saepe esse debitis ducimus? Quod fugiat
            obcaecati veritatis amet voluptatum doloribus neque commodi qui
            quasi illo eum placeat odio ipsam, at, tempore accusamus dicta
            deleniti explicabo! Quisquam ullam minima iure! Assumenda adipisci
            consequuntur soluta provident alias fuga quidem ad aperiam magnam
            nesciunt quibusdam, et qui. Omnis dignissimos pariatur consequatur
            eos aut, iste voluptatum!
          </p>
        </div>

        <div
          id="panel-3"
          role="tabpanel"
          tabIndex="0"
          aria-labelledby="tab-3"
          className="tab-content"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            facere ducimus quas harum provident assumenda atque delectus odio.
            Blanditiis totam optio vitae placeat alias. Fugiat magnam cupiditate
            ab ipsum qui sapiente pariatur doloribus reiciendis adipisci enim
            aliquam vero reprehenderit a quibusdam quas, dolores, debitis cumque
            dolor ut atque voluptatem nobis voluptatibus velit accusamus! A ea
            laudantium maxime eaque consequuntur veritatis!
          </p>
        </div>
      </div>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
