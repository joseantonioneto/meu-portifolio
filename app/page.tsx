// src/app/page.tsx

import { Navbar } from './src/components/Navbar'
import { HeroSection } from './src/components/HeroSection'
import { SobreSection } from './src/components/SobreSection'
import { SkillsSection } from './src/components/SkillsSection'
import { ProjetosSection } from './src/components/ProjetosSection'
import { AcademicoSection } from './src/components/AcademicoSection'
import { ContatoSection } from './src/components/ContatoSection'
import { Footer } from './src/components/Footer'
import { MouseTracker } from './src/components/MouseTracker' // <-- 1. IMPORTE AQUI

export default function Home() {
  return (
    // 2. MUDE DE 'bg-gray-900' para 'bg-black'
    <main className="flex min-h-screen flex-col bg-black text-white">
      
      <MouseTracker /> {/* <-- 3. ADICIONE O COMPONENTE AQUI */}
      
      <Navbar />

      {/* O 'z-40' abaixo coloca seu conteúdo ACIMA do brilho (z-30) */}
      <div className="container relative z-40 mx-auto mt-24 max-w-5xl px-4 md:px-8">
        <HeroSection />
        <SobreSection />
        <SkillsSection />
        <ProjetosSection />
        <AcademicoSection />
        <ContatoSection />
        <Footer />
      </div>
    </main>
  )
}