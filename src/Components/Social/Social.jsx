import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaCodepen,
  FaInstagram,
} from 'react-icons/fa'
import './Social.scss'

const Social = () => {
  return (
    <div className="social-wrapper">
      <div className="social-container">
        <a target="_blank" href="https://www.facebook.com/qqpandai">
          <FaFacebook className="fb-icon" />
        </a>
        <a target="_blank" href="https://twitter.com/home">
          <FaTwitter className="tt-icon" />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/alta_panda_iso/?hl=en"
        >
          <FaInstagram className="in-icon" />
        </a>
        <a target="_blank" href="https://github.com/queenPandai">
          <FaGithub className="git-icon" />
        </a>
        <a target="_blank" href="https://codepen.io/queenpandai">
          <FaCodepen className="ln-icon" />
        </a>
      </div>
    </div>
  )
}

export default Social
