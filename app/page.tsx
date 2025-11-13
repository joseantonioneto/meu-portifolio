// src/app/page.tsx

import { Navbar } from './src/components/Navbar'
import { HeroSection } from './src/components/HeroSection'
import { SobreSection } from './src/components/SobreSection'
import { SkillsSection } from './src/components/SkillsSection'
import { ProjetosSection } from './src/components/ProjetosSection'
import { AcademicoSection } from './src/components/AcademicoSection'
import { ContatoSection } from './src/components/ContatoSection' // <-- 1. IMPORTE AQUI
import { Footer } from './src/components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-900 text-white">
      
      <Navbar />

      <div className="container mx-auto mt-24 max-w-5xl px-4 md:px-8">
        <HeroSection />
        <SobreSection />
        <SkillsSection />
        <ProjetosSection />
        <AcademicoSection />
        <ContatoSection /> {/* <-- 2. ADICIONE AQUI */}
        <Footer />
      </div>
    </main>
  )
}