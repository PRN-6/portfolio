import React, { useState } from 'react'
import './Contact.css'
import callIcon from '../../assets/call_icon.svg'
import mailIcon from '../../assets/mail_icon.svg'
import locationIcon from '../../assets/location_icon.svg'
import arrowIcon from '../../assets/arrow_icon.svg'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.')
      return
    }
    const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}

${formData.message}`
    )
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`
    setStatus('Thanks for reaching out! Your email client has been opened.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className='contact' id='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h2>Let's work together</h2>
          <p>
            I'm currently available for freelance work and full-time roles. If
            you have a project in mind, feel free to reach out.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mailIcon} alt="" />
              <p>hello@example.com</p>
            </div>
            <div className="contact-detail">
              <img src={callIcon} alt="" />
              <p>+1 234 567 890</p>
            </div>
            <div className="contact-detail">
              <img src={locationIcon} alt="" />
              <p>City, Country</p>
            </div>
          </div>
        </div>
        <form className="contact-right" onSubmit={handleSubmit}>
          <label htmlFor="name">Your name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="email">Your email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="message">Your message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit" className="submit-btn">
            Send message <img src={arrowIcon} alt="" />
          </button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </div>
  )
}

export default Contact
