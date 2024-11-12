
import './App.css';
import NavBar from './components/nav/navBar';
import HeroProfile from './components/hero/Hero';
import TileBackground from './components/TileBackground/TileBackground';
import Skills from './components/skills/Skills';
import About from './components/about/About';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
      <TileBackground />
      <NavBar />
      <HeroProfile id="home"/>
      <Skills id="skills"/>
      <About id="about"/>
      <Contact id="contact"/>
    </>
  )
}

export default App
