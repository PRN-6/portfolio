import React from 'react'
import './Services.css'
import Services_Data from '../../assets/services_data'
import arrowIcon from '../../assets/arrow_icon.svg'

const Services = () => {
  return (
    <div className='services' id='services'>
      <div className="services-title">
        <h1>My Services</h1>
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => (
          <div className="services-card" key={index}>
            <h2>{service.s_no}</h2>
            <h3>{service.s_name}</h3>
            <p>{service.s_desc}</p>
            <a href="#contact" className="read-more">
              Read more <img src={arrowIcon} alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
