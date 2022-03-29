import React from 'react'
import './WorkCard.scss'
import WinWeb from '../../assets/images/winweb.jpg'
import BangComic from '../../assets/images/bangcomic.jpg'
import BlackJack from '../../assets/images/blackjack.jpg'
import ScoreKeeper from '../../assets/images/scorekeeper.jpg'
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMicrosoftoffice,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiFigma,
  SiCloudways,
} from 'react-icons/si'
import { tsParticles } from 'tsparticles'

const WorkCard = () => {
  return (
    <>
      <div className="workCard-wrapper">
        <h2>My Projects</h2>
        <div className="workCard-container">
          <div class="workCard wCard1">
            <img src={WinWeb} alt="" />
            <h3>Win Web</h3>

            <p>
              This is the very first website I wrote after learning basic HTML
              CSS and JavaScript. I used a free template I found. It is not
              great but still was my first step.
            </p>

            <a target="_blank" href="https://winhtet.netlify.app/">
              Visit
            </a>
            <SiHtml5 />
            <SiCss3 />
            <SiJavascript />
          </div>

          <div class="workCard wCard2">
            <img src={BangComic} alt="" />
            <h3>Bang Comic</h3>

            <p>
              This is a comic blog and news website. I wrote this website
              especially to practice CSS. The log-in is just a protoype, you can
              fill up anything to access.
            </p>

            <a target="_blank" href="https://comicbang.netlify.app/">
              Visit
            </a>
            <SiHtml5 />
            <SiCss3 />
          </div>
          <div class="workCard wCard3">
            <img src={BlackJack} alt="" />
            <h3>Black Jack</h3>

            <p>
              This is a simple BlackJack game with a banking system. I wrote
              this with some guidelines when I was practicing JavaScript. The
              site is in Burmese Language.
            </p>

            <a target="_blank" href="https://awinbj.netlify.app/">
              Visit
            </a>
            <SiJavascript />
          </div>
          <div class="workCard wCard4">
            <img src={ScoreKeeper} alt="" />
            <h3>Score Keeper</h3>

            <p>
              This is the Ping Pong Score Tracking site. I used DOM with vanilla
              JavaScript. This site is not very mobile responsive since I was
              focusing on DOM.
            </p>

            <a target="_blank" href="https://pingpongscorekeep.netlify.app/">
              Visit
            </a>
            <SiHtml5 />
            <SiCss3 />
            <SiJavascript />
          </div>
        </div>
        <h4>I am currently working on 2 big projects. I will update soon.</h4>
      </div>
    </>
  )
}

export default WorkCard
