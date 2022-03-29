import React, { useEffect, useRef } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Social from '../../Components/Social/Social'
import './About.scss'
import Profile from '../../assets/images/profile.png'
import AnimatedBg from '../../Components/AnimatedBg/AnimatedBg'
const About = () => {
  return (
    <>
      <div className="box-wrapper">
        <Navbar />
        <div className="box">
          <div className="box-l">
            <div className="twinkling"></div>
            <div className="subbox-l">
              <h1>About Me</h1>
              <p>
                I am a very ambitious learner. I want to learn many things
                especially related to technologies and futurists.I code simple
                yet beautiful websites. I love to take on challenges on diverse
                fields.
              </p>
              <p>
                I love watching all kinds of entertainment, movies, series,
                k-drama, anime, etc. I love reading. I read and listen to almost
                every genre out there. I am quietly confident, naturally
                curious, and a kinda fun guy.
              </p>
              <p>
                If I need to define myself in one word, <br />
                that would be "<i>Jack of All Trades</i>".
              </p>
            </div>
          </div>

          <div className="box-r">
            <div className="subbox-r">
              <img src={Profile} alt="" />
            </div>
          </div>
        </div>
        <AnimatedBg />
        <Social />
      </div>
    </>
  )
}

export default About
