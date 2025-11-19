    📘Axis — MVP Project
<p align="center"> <img src="https://via.placeholder.com/900x250?text=AXIS+MVP+PROJECT" /> </p> <p align="center">Projeto MVP utilizando Next.js, Prisma e TypeScript. Estrutura limpa, escalável e ideal para iniciar aplicações profissionais.</p>

🚀 Tecnologias Utilizadas
<p> <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" /> <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" /> <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white" /> <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" /> <img src="https://img.shields.io/badge/Node.js-20-green?style=for-the-badge&logo=node.js" /> <img src="https://img.shields.io/badge/Prisma-ORM-blue?style=for-the-badge&logo=prisma" /> <img src="https://img.shields.io/badge/MySQL-8.0-4479A1?style=for-the-badge&logo=mysql&logoColor=white" /> <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" /> </p>
📚 Bibliotecas & Ferramentas
<p> <img src="https://img.shields.io/badge/FullCalendar-%23007BFF?style=for-the-badge&logo=google-calendar&logoColor=white" /> <img src="https://img.shields.io/badge/bcrypt-%23F0A500?style=for-the-badge&logo=lock&logoColor=white" /> <img src="https://img.shields.io/badge/clsx-%23000000?style=for-the-badge" /> <img src="https://img.shields.io/badge/lucide--react-%23111111?style=for-the-badge&logo=lucide&logoColor=white" /> <img src="https://img.shields.io/badge/radix--ui-%23212121?style=for-the-badge&logo=radix-ui&logoColor=white" /> <img src="https://img.shields.io/badge/Motion-%23000000?style=for-the-badge&logo=framer&logoColor=white" /> </p>


## 📁 Estrutura do Projeto

A seguir está a estrutura principal da aplicação, organizada para facilitar manutenção, escalabilidade e clareza:

```plaintext

.
├── 📂 .vscode/               → Configurações do VSCode
├── 📂 app/                   → Diretório principal da aplicação Next.js
│   ├── 📂 api/               → Rotas de API (App Router)
│   │   └── 📄 ...            → Endpoints da aplicação
│   ├── 📄 page.tsx           → Página inicial
│   └── 📂 components/        → Componentes reutilizáveis
├── 📂 prisma/                → Configurações do Prisma ORM
│   └── 📄 schema.prisma      → Schema do banco de dados
├── 📂 public/                → Arquivos públicos (imagens, ícones, etc)
├── 📄 axis-db.session.sql    → Export do banco / sessão
├── 📄 package.json           → Dependências e scripts
├── 📄 tsconfig.json          → Configuração do TypeScript
├── 📄 next.config.ts         → Configurações do Next.js
└── 📄 README.md              → Documentação do projeto
```

| Pasta / Arquivo       | Função                     |
| --------------------- | -------------------------- |
| `app/`                | Páginas e rotas do Next.js |
| `app/api/`            | Rotas de API               |
| `prisma/`             | Schema do banco            |
| `public/`             | Arquivos estáticos         |
| `axis-db.session.sql` | Dump do banco              |
| `next.config.ts`      | Configurações do Next      |

⚙️ Instalação 

1️⃣ Clone o repositório

git clone https://github.com/Gustavo-RSantos/Axis---MVP-project.git <br>

cd Axis---MVP-project

2️⃣ Instale dependências
npm install

3️⃣ Configure o .env
DATABASE_URL="sua_url_aqui"

4️⃣ Migrações do Prisma
npx prisma migrate dev

5️⃣ Rode o projeto
npm run dev

Acesse:
👉 http://localhost:3000
