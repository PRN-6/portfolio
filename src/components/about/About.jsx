import React, { useState } from 'react'
import './About.css'
import aboutImg from '../../assets/about_profile.svg'
import arrowIcon from '../../assets/arrow_icon.svg'

const About = () => {
  const [tab, setTab] = useState('skills')

  const skills = [
    'HTML & CSS',
    'JavaScript (ES6+)',
    'React.js',
    'Node.js',
    'Responsive Design',
    'Git & GitHub',
  ]

  const experience = [
    { year: '2023 - Present', role: 'Frontend Developer', company: 'Freelance' },
    { year: '2022 - 2023', role: 'Web Developer Intern', company: 'Startup' },
  ]

  const education = [
    { year: '2019 - 2023', title: 'B.Tech in Computer Science', school: 'University' },
    { year: '2017 - 2019', title: 'Higher Secondary', school: 'College' },
  ]

  return (
    <div className='about' id='about'>
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={aboutImg} alt="About" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm a passionate developer with a strong foundation in front-end
              technologies. I love turning ideas into interactive, user-friendly
              web experiences and I'm always learning something new.
            </p>
            <p>
              When I'm not coding, you can find me exploring new tools,
              contributing to open source, or designing in Figma.
            </p>
          </div>

          <div className="about-tabs">
            <button
              className={tab === 'skills' ? 'active' : ''}
              onClick={() => setTab('skills')}
            >
              Skills
            </button>
            <button
              className={tab === 'experience' ? 'active' : ''}
              onClick={() => setTab('experience')}
            >
              Experience
            </button>
            <button
              className={tab === 'education' ? 'active' : ''}
              onClick={() => setTab('education')}
            >
              Education
            </button>
          </div>

          <div className="about-tab-content">
            {tab === 'skills' && (
              <ul className="skills-list">
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            )}
            {tab === 'experience' && (
              <ul className="timeline-list">
                {experience.map((item) => (
                  <li key={item.year}>
                    <span className="tl-year">{item.year}</span>
                    <span className="tl-role">{item.role}</span>
                    <span className="tl-place">{item.company}</span>
                  </li>
                ))}
              </ul>
            )}
            {tab === 'education' && (
              <ul className="timeline-list">
                {education.map((item) => (
                  <li key={item.year}>
                    <span className="tl-year">{item.year}</span>
                    <span className="tl-role">{item.title}</span>
                    <span className="tl-place">{item.school}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="about-achievements">
            <div className="achievement">
              <h2>2+</h2>
              <p>Years of experience</p>
            </div>
            <div className="achievement">
              <h2>10+</h2>
              <p>Projects completed</p>
            </div>
            <div className="achievement">
              <h2>5+</h2>
              <p>Happy clients</p>
            </div>
          </div>

          <div className="about-resume">
            <a href="#" className="resume-link">
              My resume <img src={arrowIcon} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
