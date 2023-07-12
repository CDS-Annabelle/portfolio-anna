import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/annabelle-gaffet/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/CDS-Annabelle"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.facebook.com/people/CDS-cr%C3%A9ation-de-site/100085218595014/"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebook />
      </a>
    </div>
  )
}

export default HeaderSocials
