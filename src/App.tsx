import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CabinCrew from './components/CabinCrew'
import CPLClasses from './components/CPLClasses'
import WhyChooseUs from './components/WhyChooseUs'
import About from './components/About'
import TrainingModules from './components/TrainingModules'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Terms from './components/Terms'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <CabinCrew />
      <CPLClasses />

      <WhyChooseUs />
      {/* <About /> */}

      <TrainingModules />

      <Pricing />

      <FAQ />

      <Terms />

      <Footer />
    </>
  )
}

export default App