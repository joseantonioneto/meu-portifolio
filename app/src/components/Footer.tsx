// src/components/Footer.tsx
import React from 'react'

export const Footer = () => {
    return (
        <footer className="text-center text-gray-500 py-12 border-t border-gray-700 mt-16">
            <p>&copy; {new Date().getFullYear()} Antônio Neto. Feito com Next.js e Tailwind CSS.</p>
            <p className="mt-2">Natal-RN, Brasil</p>
        </footer>
    )
}