// src/components/SkillsSection.tsx
import React from 'react'

// Importando todos os ícones que você precisa
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  // SiJava, -- REMOVIDO DAQUI
  SiPython,
  SiGo,
  SiPhp,
  SiLaravel,
  SiDocker,
  SiJenkins,
  SiMysql,
  SiPostgresql,
  //SiPlaywright,
  SiSelenium,
  SiGrafana,
  SiPrometheus,
  SiGit,
} from 'react-icons/si'

// ADICIONADO A IMPORTAÇÃO CORRETA PARA O JAVA
import { FaJava } from 'react-icons/fa'

// Helper: Define o tamanho e o efeito de hover padrão para todos os ícones
const iconSize = 48 // 3rem
const iconClass = 'transform transition duration-300 hover:scale-125'

const skillCategories = [
  {
    title: 'Linguagens & Frameworks',
    icons: [
      // AQUI ESTÁ A MUDANÇA: Usando FaJava em vez de SiJava
      <FaJava size={iconSize} className={`${iconClass} text-red-500`} />,
      <SiPython size={iconSize} className={`${iconClass} text-yellow-400`} />,
      <SiGo size={iconSize} className={`${iconClass} text-cyan-400`} />,
      <SiPhp size={iconSize} className={`${iconClass} text-purple-400`} />,
      <SiLaravel size={iconSize} className={`${iconClass} text-red-600`} />,
    ],
  },
  {
    title: 'Front-End',
    icons: [
      <SiJavascript size={iconSize} className={`${iconClass} text-yellow-300`} />,
      <SiReact size={iconSize} className={`${iconClass} text-blue-400`} />,
      <SiNextdotjs size={iconSize} className={`${iconClass} text-gray-200`} />,
      <SiVuedotjs size={iconSize} className={`${iconClass} text-green-500`} />,
    ],
  },
  {
    title: 'Banco de Dados',
    icons: [
      <SiMysql size={iconSize} className={`${iconClass} text-blue-500`} />,
      <SiPostgresql size={iconSize} className={`${iconClass} text-blue-600`} />,
    ],
  },
  {
    title: 'DevOps & CI/CD',
    icons: [
      <SiDocker size={iconSize} className={`${iconClass} text-blue-500`} />,
      <SiJenkins size={iconSize} className={`${iconClass} text-gray-700`} />,
    ],
  },
  {
    title: 'Automação de Testes',
    icons: [
     // <SiPlaywright size={iconSize} className={`${iconClass} text-green-500`} />,
      <SiSelenium size={iconSize} className={`${iconClass} text-green-600`} />,
    ],
  },
  {
    title: 'Monitoramento & Ferramentas',
    icons: [
      <SiGrafana size={iconSize} className={`${iconClass} text-orange-500`} />,
      <SiPrometheus size={iconSize} className={`${iconClass} text-red-600`} />,
      <SiGit size={iconSize} className={`${iconClass} text-orange-600`} />,
    ],
  },
]

export const SkillsSection = () => {
  return (
    <section id="skills" className="my-24">
      <h2 className="text-3xl font-bold text-center mb-12">Tecnologias</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-lg bg-gray-800 p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-center text-blue-400 mb-6">
              {category.title}
            </h3>
            
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6">
              {category.icons.map((icon, index) => (
                <span key={index}>{icon}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}