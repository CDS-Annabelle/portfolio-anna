import React from 'react'
import styles from './Contact.module.css'
import { MdOutlineEmail } from 'react-icons/md'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_USER_ID
    )

    e.target.reset()
  }

  return (
    <section id="contact">
      <h2>Contactez-moi</h2>

      <div className={styles.contactContainer}>
        <div className={styles.contactOptions}>
          <article className={styles.contactOption}>
            <MdOutlineEmail className={styles.contactOptionIcon} />
            <h4>Pour toutes demandes</h4>
            <span className={styles.sendMessage}>Envoyez-moi un message</span>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Votre nom et prénom"
            required
          />
          <input type="email" name="email" placeholder="Votre email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Votre message"
            required
          ></textarea>
          <button type="submit" className={styles.btnPrimary}>
            Envoyez
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
