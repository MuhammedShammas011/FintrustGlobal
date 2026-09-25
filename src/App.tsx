import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStatement from './components/TrustStatement'
import ScrollSteps from './components/ScrollSteps'
import Services from './components/Services'
import ProcessSteps from './components/ProcessSteps'
import Industries from './components/Industries'
import WhyFintrust from './components/WhyFintrust'
import Testimonials from './components/Testimonials'
import Insights from './components/Insights'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TrustStatement />
        <ScrollSteps />
        <Services />
        <ProcessSteps />
        <Industries />
        <WhyFintrust />
        <Testimonials />
        <Insights />
        <FinalCTA />
      </main>

      <Footer />
    </>
  )
}
