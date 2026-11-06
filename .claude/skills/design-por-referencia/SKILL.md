---
name: design-por-referencia
description: Processo para criar ou modernizar o visual do portfólio partindo de imagens de referência e mockups gerados por IA de imagem (e opcionalmente um vídeo animado), em vez de pedir "um design bonito" direto no código. Use sempre que a tarefa for redesenhar, modernizar, mudar o estilo ou criar uma seção nova do site.
---

# Design por referência

Baseado no processo que o Rodrigo Tadewald mostra neste vídeo:
https://www.instagram.com/p/DfP75YOsDdy/

## A ideia central

Quando uma IA de código recebe "faça um site com design legal", ela cria preso ao
código e entrega algo genérico. A criatividade fica muito maior num gerador de
imagens. Por isso o design nasce **fora do código**, como imagem. O código só entra
depois, para reproduzir fielmente algo que já foi aprovado visualmente.

**Regra para o Claude:** não invente um visual novo do zero. Se não houver mockup
aprovado em `design/mockups/`, a primeira tarefa é ajudar a produzir um (fase 2),
não escrever componentes.

## Estrutura de pastas

```
design/
  referencias/   imagens de inspiração (Pinterest, ilustrações, fotos, arte)
  mockups/       telas geradas por IA: v1.png, v2.png ... e APROVADO.png
  video/         animação gerada a partir do mockup aprovado (opcional)
  assets/        recortes para usar no site (fundo sem interface, ilustrações)
```

## Fase 1: referência

- Escolha uma imagem que **não seja** de site ou de interface: ilustração, arte
  conceitual, foto, pôster. É dela que vem a identidade visual (cores, luz,
  textura, clima).
- Salve em `design/referencias/` com um nome que descreva a imagem (`orbita-dourada.jpg`).

## Fase 2: mockup gerado por IA de imagem

Feito pelo Neto num gerador de imagens (Nano Banana, GPT Image ou similar). O papel
do Claude é **escrever o prompt** com o layout e o conteúdo reais do site, para que
o mockup já saia com a estrutura certa.

Modelo de prompt (o Claude preenche com o conteúdo atual dos componentes):

```
Usando a imagem anexada apenas como referência de identidade visual (paleta,
iluminação, texturas, formas, clima), crie o design de uma página de portfólio
pessoal, desktop, 1440px de largura, vista completa de cima a baixo.

Mantenha exatamente esta estrutura e estes textos:
1. Barra de navegação: logo "A N"; links Sobre, Tecnologias, Projetos,
   Acadêmico, Contato; ícones do GitHub e do LinkedIn
2. Hero: foto redonda, nome "Antônio Neto", frase "<frase do HeroSection>"
3. Sobre Mim: <resumo>
4. Tecnologias: grupos <lista de categorias>
5. Projetos em destaque: <N> cards com título, descrição e tags
6. Atuação Acadêmica e Voluntariado: 2 cards
7. Contato: formulário com nome, e-mail e mensagem
8. Rodapé

Não copie a imagem de referência literalmente: absorva o estilo e aplique numa
interface legível, com contraste alto no texto.
```

- Gere várias versões e salve como `v1.png`, `v2.png`... Misture conceitos entre
  elas ("o fundo da v2 com os cards da v4") até gostar do resultado.
- Peça também a **versão mobile** do mockup aprovado e o **fundo sem a interface**
  (só a ilustração ou a atmosfera). O fundo vira asset em `design/assets/`.
- Salve a versão escolhida como `design/mockups/APROVADO.png` (e `APROVADO-mobile.png`).

## Fase 3: animação (opcional)

- Leve o mockup aprovado para um modelo de imagem para vídeo (Seedance ou
  similar) e peça uma animação curta: como os elementos entram, o que se move no
  fundo, o que acontece no hover.
- Salve em `design/video/`. O vídeo é a **especificação de movimento**, não um
  arquivo para colocar no site.

## Fase 4: implementação (Claude Code)

1. **Estudar o material.** Ler o mockup aprovado e as referências. Se houver vídeo,
   extrair quadros com
   `ffmpeg -i design/video/x.mp4 -vf "fps=2,scale=480:-1,tile=6x4" quadros.jpg`
   e descrever os movimentos (o que anima, duração, easing, ordem).
2. **Tokens primeiro.** Antes de mexer em componentes, definir em `app/globals.css`
   (bloco `@theme` do Tailwind v4): cores, fontes, raios, sombras, brilhos e
   tempos de animação. Os componentes usam só os tokens, nunca cores soltas.
3. **Layout seção por seção.** Reproduzir o mockup em `app/src/components/`,
   uma seção por vez, mantendo os textos e links atuais, a não ser que o Neto peça
   para mudar.
4. **Efeitos, do mais leve ao mais pesado:** CSS (gradientes, blur, máscaras) →
   SVG (linhas, órbitas, ícones) → imagem de `design/assets/` → canvas/WebGL só se
   não houver outro jeito.
5. **Movimento.** Seguir o vídeo. Tudo que anima respeita
   `prefers-reduced-motion` e não causa salto de layout.
6. **Mobile.** Seguir o mockup mobile. Sem ele, adaptar: uma coluna, efeitos de
   fundo mais leves, áreas de toque de pelo menos 44px.
7. **Conferir.** Rodar `npm run dev`, tirar um print da página e comparar lado a
   lado com o mockup. Listar as diferenças, corrigir e repetir. Rodar
   `npm run build` antes de dar como pronto.

## Regras que valem sempre

- O texto precisa ser legível em cima de qualquer fundo (contraste WCAG AA).
- Links com ícone e sem texto precisam de `aria-label`.
- Imagens via `next/image`, com `alt` descritivo.
- Nada de bibliotecas pesadas só para um efeito que CSS resolve.
- A branch `main` publica direto em antonioneto.dev pela Vercel. Trabalhe em
  outra branch e só junte na `main` com o OK do Neto.
