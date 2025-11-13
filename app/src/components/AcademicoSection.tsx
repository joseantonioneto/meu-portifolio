// src/components/AcademicoSection.tsx
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

export const AcademicoSection = () => {
  return (
    <section
      id="academico"
      className="my-24 rounded-lg bg-gray-900/50 p-8 shadow-lg md:p-12"
    >
      <h2 className="text-3xl font-bold text-center mb-12">
        Atuação Acadêmica e Voluntariado
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Card Acadêmico */}
        <div className="flex flex-col justify-between rounded-lg bg-gray-800/60 p-6 shadow-lg">
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-3">
              Pesquisa (GESID)
            </h3>
            <p className="text-gray-300">
              Membro do Grupo de Estudos em Sistemas de Informação e Inovação
              Digital (GESID).
            </p>
          </div>

          {/* ATUALIZADO: Lista de links acadêmicos */}
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href="https://sol.sbc.org.br/index.php/washes/article/view/35918/35705"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-gray-300 transition-all hover:text-white"
              >
                Artigo publicado no SBC (WASHES)
                <FiArrowUpRight size={16} />
              </a>
            </li>
            <li>
              <a
                href="https://sites.ufca.edu.br/ebooks/wp-content/uploads/sites/22/2025/09/ANAIS-SEPEC-EXATAS_.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-gray-300 transition-all hover:text-white"
              >
                Resumo expandido na SEPEC da UFCA
                <FiArrowUpRight size={16} />
              </a>
            </li>
            <li>
              <a
                href="https://datawashes.pythonanywhere.com/#/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-gray-300 transition-all hover:text-white"
              >
                Projeto DataWASHES
                <FiArrowUpRight size={16} />
              </a>
            </li>
            <li>
              <a
                href="https://gesid.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-gray-300 transition-all hover:text-white"
              >
                Site do Grupo GESID
                <FiArrowUpRight size={16} />
              </a>
            </li>
          </ul>
        </div>

        {/* Card Voluntariado */}
        <div className="flex flex-col justify-between rounded-lg bg-gray-800/60 p-6 shadow-lg">
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-3">
              Voluntariado (PROEIDI)
            </h3>
            <p className="text-gray-300">
              Participante do Projeto de Extensão Inclusão Digital para Idosos,
              ajudando a diminuir a lacuna digital.
            </p>
          </div>

          {/* ATUALIZADO: Link do Instagram */}
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href="https://www.instagram.com/proeidi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-gray-300 transition-all hover:text-white"
              >
                Ver projeto no Instagram
                <FiArrowUpRight size={16} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}