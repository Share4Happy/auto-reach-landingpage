import Header from './components/sections/Header'
import HeroSection from './components/sections/HeroSection'
import ChallengesSection from './components/sections/ChallengesSection'
import SolutionSection from './components/sections/SolutionSection'
import ProcessSection from './components/sections/ProcessSection'
import FeaturesSection from './components/sections/FeaturesSection'
import ArticleCatalogSection from './components/sections/ArticleCatalogSection'
import ValueSection from './components/sections/ValueSection'
import TargetAudienceSection from './components/sections/TargetAudienceSection'
import FAQSection from './components/sections/FAQSection'
import CTASection from './components/sections/CTASection'
import Footer from './components/sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ChallengesSection />
        <SolutionSection />
        <ProcessSection />
        <FeaturesSection />
        <ArticleCatalogSection />
        <ValueSection />
        <TargetAudienceSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
