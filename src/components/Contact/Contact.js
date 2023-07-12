import React from 'react'
import './contact.css'

import { useRef } from 'react'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    e.target.reset()
  }

  return (
    <section id="contact">
      <h2>Contactez-moi</h2>

      <div className="container contact__container">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Nom $ Prénom" required />
          <input type="email" name="email" placeholder="Votre Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Votre Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Envoyez un message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
