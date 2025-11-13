// src/components/HeroSection.tsx
import React from 'react'
import Image from 'next/image' 
import { SiGithub, SiLinkedin } from 'react-icons/si'

export const HeroSection = () => {
  return (
    
    <section id="hero" className="py-20 text-center md:text-left">
      
      {/* Container flex para a foto e o texto */}
      <div className="flex flex-col items-center md:flex-row">
        
        
        <Image
          src="/neto.png" 
          alt="Foto de perfil de Antônio Neto"
          width={192} // 192px (equivalente ao w-48)
          height={192} // 192px (equivalente ao h-48)
          className="mb-8 h-48 w-48 flex-shrink-0 rounded-full object-cover shadow-lg md:mb-0 md:mr-10"
        />

        {/* Bloco de Texto */}
        <div>
          <h1 className="text-4xl font-bold md:text-5xl text-white">
            Antônio Neto
          </h1>
          
          <p className="mt-6 text-lg max-w-2xl text-gray-400">
            Olá! Sou Desenvolvedor de Software Fullstack e Pesquisador 
            focado em transformar problemas complexos em soluções de 
            software eficientes, com foco e inovação digital.
          </p>

          
          <div className="mt-8 flex items-center justify-center gap-6 md:justify-start">
            <a
              href="https://github.com/joseantonioneto"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 transition-all hover:text-white"
            >
              <SiGithub size={20} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tomsouzaneto"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 transition-all hover:text-white"
            >
              <SiLinkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}