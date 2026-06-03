# Mary's Brinq - Landing Page

🎉 Landing page profissional para Mary's Brinq, empresa especializada em locação de brinquedos, mesas e cadeiras para festas infantis.

## 🚀 Características

- ✨ Design moderno e responsivo
- 🎨 Gradiente profissional em tons de roxo
- 📱 Otimizado para mobile, tablet e desktop
- ⚡ Construído com React + TypeScript
- 🏗️ Vite para build rápido
- 🖼️ Galeria de fotos
- 📲 Links diretos para Instagram e Facebook
- 🎯 SEO otimizado

## 📋 Requisitos

- Node.js 16+ 
- npm ou yarn

## 🛠️ Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/juliusdigitale-cpu/mary-brinquedos.git
cd mary-brinquedos
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev
```

4. **Acesse a aplicação:**
Abra seu navegador em `http://localhost:4173/`

## 📦 Build para Produção

```bash
npm run build
```

Isso gera a pasta `dist/` pronta para deployment.

## 🗂️ Estrutura do Projeto

```
projeto2/
├── src/
│   ├── imagens/           # Fotos da galeria
│   ├── App.tsx            # Componente principal
│   ├── main.tsx           # Ponto de entrada
│   ├── styles.css         # Estilos globais
│   └── vite-env.d.ts      # Tipos do Vite
├── index.html             # HTML principal
├── package.json           # Dependências
├── tsconfig.json          # Configuração TypeScript
├── vite.config.ts         # Configuração Vite
└── README.md              # Este arquivo
```

## 🎨 Customização

### Cores
As cores principais estão definidas em `src/styles.css`:
- Primária: `#6d45ff` (roxo)
- Secundária: `#4b40a5` (roxo escuro)

### Imagens
As imagens da galeria estão em `src/imagens/`. Para adicionar novas fotos:
1. Coloque a imagem em `src/imagens/`
2. Importe no `src/App.tsx`
3. Adicione ao array `gallery`

### Redes Sociais
Atualize os links em `src/App.tsx`:
```typescript
href="https://www.instagram.com/marysbrinqsbc"
href="https://www.facebook.com/marysbrinq"
```

## 📱 Responsividade

A página é totalmente responsiva com breakpoints em:
- **Tablets:** 920px
- **Mobile:** 660px

## 🔗 Links Importantes

- **Instagram:** https://www.instagram.com/marysbrinqsbc
- **Facebook:** https://www.facebook.com/marysbrinq

## 📝 Tecnologias Utilizadas

- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool moderno
- **CSS3** - Estilos responsivos
- **Fontes Google** - Inter

## 🤝 Contribuições

Para contribuir, faça um fork do projeto, crie uma branch com suas alterações e abra um pull request.

## 📄 Licença

Este projeto é de uso privado da Mary's Brinq.

---

**Desenvolvido com ❤️ para Mary's Brinq**
