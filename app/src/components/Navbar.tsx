// src/components/Navbar.tsx

"use client" // Essencial para usar o useState (menu mobile)

import React, { useState } from 'react'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { HiOutlineMenu, HiX } from 'react-icons/hi' // Ícones de Menu e Fechar

export const Navbar = () => {
  // Estado para controlar se o menu mobile está aberto ou fechado
  const [isOpen, setIsOpen] = useState(false)

  // Links de navegação para facilitar a manutenção
  // AGORA INCLUINDO O "CONTATO"
  const navLinks = [
    { title: 'Sobre', href: '#sobre' },
    { title: 'Tecnologias', href: '#skills' },
    { title: 'Projetos', href: '#projetos' },
    { title: 'Acadêmico', href: '#academico' },
    { title: 'Contato', href: '#contato' }, // <-- LINHA ADICIONADA
  ]

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-gray-700 bg-gray-900/80 backdrop-blur-md">
      {/* Container principal do Navbar */}
      <div className="container mx-auto flex max-w-5xl items-center justify-between px-4 py-4 md:px-8">
        
        {/* Seu Nome/Logo */}
        <a href="#" className="text-2xl font-bold text-white">
          A N
        </a>

        {/* Links de Navegação (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-gray-300 transition duration-300 hover:text-blue-400"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Divisor e Ícones Sociais (Desktop) */}
          <div className="flex items-center space-x-4 border-l border-gray-700 pl-6">
            <a
              href="https://github.com/joseantonioneto" // Link do GitHub
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 transition duration-300 hover:text-blue-400"
            >
              <SiGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/tomsouzaneto" // Link do LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 transition duration-300 hover:text-blue-400"
            >
              <SiLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Botão do Menu Mobile (Hambúrguer) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 focus:outline-none"
          >
            {isOpen ? <HiX size={30} /> : <HiOutlineMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile (Dropdown) */}
      {/* Aparece condicionalmente com base no estado 'isOpen' */}
      {isOpen && (
        <div className="bg-gray-900 pb-6 md:hidden">
          <ul className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-lg text-gray-300 transition duration-300 hover:text-blue-400"
                  onClick={() => setIsOpen(false)} // Fecha o menu ao clicar
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Ícones Sociais (Mobile) */}
          <div className="mt-6 flex justify-center space-x-6 border-t border-gray-700 pt-6">
            <a
              href="https://github.com/joseantonioneto" // Link do GitHub
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 transition duration-300 hover:text-blue-400"
            >
              <SiGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/tomsouzaneto" // Link do LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 transition duration-300 hover:text-blue-400"
            >
              <SiLinkedin size={28} />
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}