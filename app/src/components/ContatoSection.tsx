// src/components/ContatoSection.tsx
import React from 'react'

export const ContatoSection = () => {
  const formSubmitEmail = 'antonio.souzneto@gmail.com'

  return (
    <section
      id="contato"
      // ATUALIZADO: Fundo e Sombra
      className="my-24 rounded-lg bg-gray-900/50 p-8 shadow-lg md:p-12"
    >
      <h2 className="text-center text-3xl font-bold">Vamos Conversar</h2>
      <p className="mx-auto mt-2 max-w-lg text-center text-gray-400">
        Tem um projeto, uma oportunidade ou só quer trocar uma ideia? Me mande
        uma mensagem.
      </p>

      <form
        action={`https://formsubmit.co/${formSubmitEmail}`}
        method="POST"
        className="mx-auto mt-10 max-w-lg"
      >
        {/* Campo de Nome */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-gray-300">
            Seu Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-md border-0 bg-gray-700 p-3 text-white placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-inset focus:ring-blue-500"
            placeholder="Antônio Neto"
          />
        </div>

        {/* Campo de Email */}
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-gray-300">
            Seu Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-md border-0 bg-gray-700 p-3 text-white placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-inset focus:ring-blue-500"
            placeholder="email@exemplo.com"
          />
        </div>

        {/* Campo de Mensagem */}
        <div className="mb-6">
          <label htmlFor="message" className="mb-2 block text-gray-300">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full rounded-md border-0 bg-gray-700 p-3 text-white placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-inset focus:ring-blue-500"
            placeholder="Olá, vi seu portfólio e..."
          ></textarea>
        </div>

        {/* Botão de Envio */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full rounded-md bg-gray-800 px-8 py-3 text-lg font-medium text-white transition duration-300 hover:bg-gray-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Enviar Mensagem
          </button>
        </div>
      </form>
    </section>
  )
}