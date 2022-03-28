import React from 'react'
import './Contact.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Social from '../../Components/Social/Social'
import ContactMe from '../../Components/ContactMe/ContactMe'
const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-main-container">
        <ContactMe />
      </div>
      <Social />
    </>
  )
}

export default Contact
