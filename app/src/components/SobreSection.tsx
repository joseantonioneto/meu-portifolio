// src/components/SobreSection.tsx
import React from 'react'

export const SobreSection = () => {
  return (
    <section
      id="sobre"
      
      className="my-24 rounded-lg bg-gray-900/50 p-8 shadow-lg md:p-12"
    >
      <h2 className="text-3xl font-bold text-center mb-8">Sobre Mim</h2>
      <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
        Chamo-me Antônio Neto, sou formado em Análise e Desenvolvimento de Sistemas pela UFCA, tenho 27 anos, sou natural de
        São Paulo-SP e atualmente residente em Natal-RN.
        <br />
        <br />
        Desde dezembro de 2024, atuo como{' '}
        <strong className="text-blue-400">
          Desenvolvedor Fullstack na MDR Advocacia
        </strong>
        , onde atuo na criação de sistemas internos que otimizam processos e
        integram dados. Paralelamente, sou{' '}
        <strong className="text-blue-400">
          Pesquisador convidado no Programa Eficiência
        </strong>{' '}
        e membro ativo do grupo de pesquisa{' '}
        <strong className="text-blue-400">GESID</strong>.
        <br />
        <br />
        Desde criança acredito que o voluntariado é parte essencial para tudo na vida, e por isso
        participo do <strong className="text-blue-400">PROEIDI</strong>, um
        projeto de inclusão digital para idosos.
      </p>
    </section>
  )
}