import './App.css'
import ControlledCarousel from './Pages/Carousel'
import Contact from './Pages/Contact'
import CustomerReviews from './Pages/CustomerReviews'
import FAQ from './Pages/FAQ'
import Footer from './Pages/Footer'
import Hero from './Pages/Hero'
import NavBar from './Pages/NavBar'
import OurWorks from './Pages/OurWorks'
import Services from './Pages/Services'
import TopIcon from './Pages/TopIcon'
import TrustedBrands from './Pages/TrustedBrands'
import WhatsAppIcon from './Pages/WhatsAppIcon'
import WhyChooseUs from './Pages/WhyChooseUs'

function App() {

  return (
    <>
    <NavBar/>
    <Hero/>
    <ControlledCarousel/>
    <Services/>
    <WhyChooseUs/>
    <OurWorks/>
    <TrustedBrands/>
    <CustomerReviews/>
    <FAQ/>
    <Contact/>
    <Footer/>
    <WhatsAppIcon/>
    <TopIcon/>
    </>
  )
}

export default App
