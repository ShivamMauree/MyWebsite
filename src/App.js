import React from 'react'
import './App.css';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Qualifications from "./components/qualifications/Qualifications"
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () =>{
  return(
      <>
      <Header/>
          <main className="main">
              <Home/>
              <About/>
              <Services/>
              <Skills/>
              <Qualifications/>
              <Portfolio/>
              <Contact/>
              <Footer />
          </main>
      </>
  )
}

export default App;
