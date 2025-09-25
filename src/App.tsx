import { AnimatePresence } from 'framer-motion'
import './App.css'
import GalaxyBackground from './components/Hero/galaxyBackground'
import BodyPage from './components/layout/body'
import './index.css'
import Header from './components/layout/hearder'
import IntroPage from './components/Hero/introPage'




function App() {

  return (
    <>
      <GalaxyBackground />
      <AnimatePresence mode="wait">

        {/* <IntroPage /> */}

        <Header />

        <BodyPage /> 

        {/* <FooterPage /> */}

      </AnimatePresence>
    </>
  )
}

export default App
