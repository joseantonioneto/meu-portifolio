// src/components/ProjetosSection.tsx
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'


const projetos = [
  {
    title: 'OneRequest (MDR Advocacia)',
    description:
      'Sistema de gerenciamento do módulo de solicitações do portal do cliente, com Web Scraping, painel com dashboard e integração via API com o sistema de gerenciamento.',
    tags: ['Web Scraping', 'Dashboard', 'API', 'JS', 'Python'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/MDR-Advocacia/OneRequest',
      },
    ],
  },
  {
    title: 'OneSid (MDR Advocacia)',
    description:
      'Plataforma de monitoramento de solicitação de subsídios, também com Web Scraping, painel gerencial e integrações com ERP.',
    tags: ['Web Scraping', 'Monitoramento', 'Integração', 'React', 'Python'],
    links: [
      { label: 'GitHub', href: 'https://github.com/MDR-Advocacia/OneSid' },
    ],
  },
  {
    title: 'Site Institucional (MDR Advocacia)',
    description:
      'Desenvolvimento e manutenção do site institucional da MDR Advocacia, servindo como o principal canal de comunicação digital do escritório.',
    tags: ['Frontend', 'Institucional', 'php'],
    links: [
      { label: 'Ver ao vivo', href: 'https://mdradvocacia.com/' },
    ],
  },
  
  {
    title: 'Portal Interno (MDR Advocacia)',
    description:
      'Portal interno para colaboradores, acessarem mais facilmente os PJEs.',
    tags: ['JS', 'Frontend',  'Portal'],
    links: [
      { label: 'Acessar', href: 'https://mdradvocacia.com/interno/' },
    ],
  },
]

export const ProjetosSection = () => {
  return (
    <section id="projetos" className="my-24">
      <h2 className="text-3xl font-bold text-center mb-12">
        Projetos em Destaque
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projetos.map((projeto) => (
          <div
            key={projeto.title}
            className="flex transform flex-col justify-between rounded-lg bg-gray-900/50 p-6 shadow-lg 
                       transition duration-300 hover:bg-gray-800/60 hover:shadow-blue-500/20"
          >
            <div>
              <h3 className="text-2xl font-bold text-blue-400">
                {projeto.title}
              </h3>
              <p className="mt-3 text-gray-400">{projeto.description}</p>

              <div className="mt-4 flex flex-wrap gap-4">
                {projeto.links?.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-300 transition-all hover:text-white"
                  >
                    {link.label}
                    <FiArrowUpRight />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {projeto.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-700 px-3 py-1 text-sm font-medium text-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}