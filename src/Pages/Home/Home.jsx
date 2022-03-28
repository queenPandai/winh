import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Mainpage from '../../Components/Mainpage/Mainpage'
import './Home.scss'
import Social from '../../Components/Social/Social'

const Home = () => {
  return (
    <>
      <Navbar />
      <Mainpage />
      <Social />
    </>
  )
}

export default Home
