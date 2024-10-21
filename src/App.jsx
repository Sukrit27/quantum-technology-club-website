import { useState } from 'react'
import ButtonGradient from "./assests/svg/ButtonGradient"
import viteLogo from '/vite.svg'
import Button from './components/Button'
import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Collaboration from './components/Collaboration'
import Roadmap from './components/Roadmap'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
      <Header />
      <Hero />
      <Benefits />
      <Collaboration />
      <Roadmap/>
      <Footer/>
    </div>
    <ButtonGradient />
    </>
  )
}

export default App
