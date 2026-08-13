# Corte & Navalha — Landing Page

Landing page de portfólio para uma barbearia fictícia de estilo vintage/clássico, desenvolvida com HTML, CSS e JavaScript puros (sem frameworks).

🔗 **Site no ar:** _[adicionar link da Netlify aqui após o deploy]_

## Sobre o projeto

Projeto criado como peça de portfólio para atuação como desenvolvedor front-end freelancer, simulando um pedido real de cliente: uma barbearia que precisa de presença online para atrair clientes e permitir agendamento rápido via WhatsApp.

## Identidade visual

- **Paleta:** preto carvão, vinho e dourado envelhecido, remetendo a barbearias clássicas
- **Tipografia:** Bebas Neue (títulos, estilo "placa de barbearia antiga") + Source Serif 4 (texto)
- **Elemento de assinatura:** divisor com listras diagonais inspirado no poste de barbeiro

## Funcionalidades

- Menu fixo (sticky) com destaque automático da seção ativa ao rolar a página (via `IntersectionObserver`)
- Seções: Hero, Sobre, Serviços, Galeria, Depoimentos, Contato
- Formulário de depoimentos integrado ao **Netlify Forms**, com proteção anti-spam (honeypot) e envio via `fetch` sem recarregar a página
- Layout responsivo (mobile, tablet, desktop)
- Fundo do Hero com efeito de vinheta + textura de grão em CSS puro (SVG embutido, sem imagens externas)

## Tecnologias

- HTML5 semântico
- CSS3 (Grid, Flexbox, variáveis CSS, `backdrop-filter`)
- JavaScript vanilla (ES6+)
- [Netlify](https://netlify.com) para hospedagem e formulários
- Fontes via Google Fonts (Bebas Neue, Source Serif 4)

## Estrutura de arquivos

```
barbearia-landing/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Como rodar localmente

Não é necessário nenhuma instalação. Basta clonar o repositório e abrir o `index.html` no navegador:

```bash
git clone https://github.com/SEU-USUARIO/barbearia-corte-e-navalha.git
cd barbearia-corte-e-navalha
```

Depois é só abrir o arquivo `index.html` diretamente no navegador (ou usar a extensão "Live Server" no VS Code para recarregamento automático).

> **Nota:** o formulário de depoimentos usa o Netlify Forms e só funciona quando o site está publicado na Netlify — localmente, o envio não será processado.

## Autor

Projeto desenvolvido por **Cauet** como parte do portfólio para atuação como freelancer de desenvolvimento web.
