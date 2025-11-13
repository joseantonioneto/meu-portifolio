// src/components/HeroSection.tsx
import React from 'react'
import Image from 'next/image' 

export const HeroSection = () => {
  return (
    <section id="hero" className="py-20 text-center md:text-left">
      <div className="flex flex-col md:flex-row items-center">
        
        {/* 2. AQUI ESTÁ A MUDANÇA:
          Trocamos aquele <div> cinza por este componente <Image> 
        */}
        <Image
          src="/neto.png" // <-- 3. MUDE AQUI para o nome exato do seu arquivo
          alt="Foto de perfil de Antônio Neto"
          width={192} // 192px (equivalente ao w-48)
          height={192} // 192px (equivalente ao h-48)
          className="mb-8 h-48 w-48 flex-shrink-0 rounded-full object-cover shadow-lg md:mb-0 md:mr-10"
        />

        <div>
          <h1 className="text-4xl font-bold md:text-6xl">Antônio Neto</h1>
          <h3 className="text-2xl md:text-3xl text-blue-400 mt-2">
            Desenvolvedor Fullstack & Pesquisador
          </h3>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Transformando problemas complexos em soluções de software eficientes, com
            experiência em desenvolvimento de sistemas (PHP, Python, JS) e
            pesquisa acadêmica em inovação digital.
          </p>
          <div className="mt-6 flex justify-center space-x-4 md:justify-start">
            <a
              href="#projetos"
              className="rounded-md bg-blue-600 px-6 py-2 font-medium text-white transition hover:bg-blue-700"
            >
              Ver Projetos
            </a>
            <a
              href="https://www.linkedin.com/in/tomsouzaneto" // Seu link do LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-gray-400 px-6 py-2 font-medium text-gray-300 transition hover:bg-gray-800"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}