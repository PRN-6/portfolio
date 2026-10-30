import React from 'react'
import './Hero.css'
import profilePic from '../../assets/profile_pic.png'

const Hero = () => {
  return (
    <div className='hero' id='hero'> 
        <img src={profilePic} alt=""/>
        <h1><span>I'm Prinson Royal Nazareth,</span> just a developer.</h1>
        <p>I'm a developer with a passion for creating beautiful and functional web applications. I love to learn new technologies and improve my skills.</p>
        <div className="hero-actions">
            <div className='hero-connect animate' onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>Connect with me</div>
            <div className='hero-resume animate' onClick={() => window.open('#', '_blank')}>Resume</div>
        </div>
    </div>
  )
}

export default Hero