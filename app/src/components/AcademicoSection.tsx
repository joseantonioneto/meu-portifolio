// src/components/AcademicoSection.tsx
import React from 'react'

export const AcademicoSection = () => {
  return (
    <section id="academico" className="my-24">
      <h2 className="text-3xl font-bold text-center mb-12">
        Atuação Acadêmica e Voluntariado
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card Acadêmico */}
        <div className="rounded-lg bg-gray-800 p-6">
          <h3 className="text-xl font-semibold text-blue-400 mb-3">
            Pesquisa (GESID)
          </h3>
          <p className="text-gray-300">
            Membro do Grupo de Estudos em Sistemas de Informação e Inovação
            Digital, atuando no projeto <strong className="text-white">DataWASHES</strong>.
          </p>
          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-300">
            <li>Artigo publicado no SBC (WASHES)</li>
            <li>Resumo expandido na SEPEC da UFCA</li>
          </ul>
        </div>
        
        {/* Card Voluntariado */}
        <div className="rounded-lg bg-gray-800 p-6">
          <h3 className="text-xl font-semibold text-blue-400 mb-3">
            Voluntariado (PROEIDI)
          </h3>
          <p className="text-gray-300">
            Participante do Projeto de Extensão Inclusão Digital para Idosos,
            ajudando a diminuir a lacuna digital e facilitando o acesso à
            tecnologia.
          </p>
        </div>
      </div>
    </section>
  )
}