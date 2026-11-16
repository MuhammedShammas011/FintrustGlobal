import Hero from '../components/Hero'
import TrustStatement from '../components/TrustStatement'
import LogoBlocksScroll from '../components/LogoBlocksScroll'
import Services from '../components/Services'
import ProcessSteps from '../components/ProcessSteps'
import Industries from '../components/Industries'
import WhyFintrust from '../components/WhyFintrust'
import Testimonials from '../components/Testimonials'
import Insights from '../components/Insights'
import FinalCTA from '../components/FinalCTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="relative z-10">
        <TrustStatement />
        <LogoBlocksScroll />
        <Services />
        <ProcessSteps />
        <Industries />
        <WhyFintrust />
        <Testimonials />
        <Insights />
        <FinalCTA />
      </div>
    </main>
  )
}
