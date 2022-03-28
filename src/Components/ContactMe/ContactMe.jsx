import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './ContactMe.scss'

const ContactMe = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_po0144b',
        'template_4rv8828',
        form.current,
        'leQkctiP2PZgNusCg'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <h1>Say Hello!</h1>
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li className="half">
                <input type="email" name="email" placeholder="Email" required />
              </li>
              <li className="full">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </li>
              <li>
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" className="flat-btn" value="Send" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
