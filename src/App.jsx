import React from 'react'
import NavBar from './components/navbar/NavBar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Services from './components/services/Services'
import MyWork from './components/mywork/MyWork'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <NavBar />
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
