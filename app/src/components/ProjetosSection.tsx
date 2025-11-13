// src/components/ProjetosSection.tsx
import React from 'react'

// Array com os dados dos projetos
const projetos = [
  {
    title: 'OneRequest (MDR Advocacia)',
    description:
      'Sistema de gerenciamento de solicitações de clientes com Web Scraping, painel com dashboard e integração via API com o ERP principal.',
    tags: ['Web Scraping', 'Dashboard', 'API', 'PHP', 'Python'],
  },
  {
    title: 'OneSid (MDR Advocacia)',
    description:
      'Plataforma de monitoramento de solicitação de subsídios, também com Web Scraping, painel gerencial e integrações com ERP.',
    tags: ['Web Scraping', 'Monitoramento', 'Integração', 'PHP'],
  },
  {
    title: 'Site Institucional (MDR Advocacia)',
    description:
      'Desenvolvimento e manutenção do site institucional da MDR Advocacia, servindo como o principal canal de comunicação digital do escritório.',
    tags: ['Frontend', 'Institucional', 'Next.js'], // Exemplo de tags
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
            className="flex transform flex-col justify-between rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-[1.02] hover:shadow-blue-500/20"
          >
            <div>
              <h3 className="text-2xl font-bold text-blue-400">
                {projeto.title}
              </h3>
              <p className="mt-3 text-gray-300">{projeto.description}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
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