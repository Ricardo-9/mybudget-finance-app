# My Budget – Personal Finance Manager (EM ANDAMENTO)

Aplicação full stack para gerenciamento de despesas pessoais, desenvolvida com Next.js, TypeScript e arquitetura modular. O projeto foi criado com foco em boas práticas de desenvolvimento, separação de responsabilidades e evolução para um backend real com autenticação e banco relacional.

O objetivo é construir uma aplicação financeira completa, escalável e pronta para produção, enquanto consolido conhecimentos em front-end, back-end e banco de dados.

## Visão geral

O My Budget é um sistema de controle financeiro pessoal que permite (atualmente) ao usuário:

- Registrar despesas
- Visualizar lista de gastos
- Editar valores e categorias
- Remover despesas

O projeto está sendo desenvolvido de forma incremental, começando por um backend simulado para validação de regras de negócio e evoluindo para uma arquitetura completa com autenticação e banco de dados real.

## Principais conceitos aplicados

- Arquitetura em camadas (components, hooks, services, types)
- Separação de responsabilidades
- Reutilização de lógica com hooks customizados
- Tipagem forte com TypeScript
- Comunicação com API via camada de services
- Organização de rotas com App Router do Next.js

## Status atual

Em desenvolvimento ativo

### Funcionalidades implementadas

- CRUD completo de despesas
- Estrutura modular e escalável
- Tipagem completa das entidades
- Consumo de API com tratamento de erros
- Hooks personalizados para lógica de dados

## Próximas etapas

- Autenticação de usuários
- Associação de despesas por usuário
- Proteção de rotas privadas
- Migração do backend para PostgreSQL
- Integração com Prisma ORM
- Dashboard financeiro
- Sistema de metas e economias
- Deploy completo da aplicação

## Tecnologias utilizadas

### Front-end

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

### Back-end (atual)

- JSON Server (API simulada)

### Back-end (planejado)

- Node.js
- PostgreSQL
- Prisma ORM
- Sistema de autenticação com sessões seguras

## Endpoints principais

| Método | Rota               | Descrição             |
|--------|--------------------|-----------------------|
| GET    | /expenses          | Listar despesas       |
| POST   | /expenses          | Criar nova despesa    |
| PUT    | /expenses/:id      | Atualizar despesa     |
| DELETE | /expenses/:id      | Remover despesa       |


   ## Estrutura de Pastas

O projeto segue uma estrutura organizada dentro do diretório `src/`:

```text
src/
├── app/                  # Rotas e páginas (Next.js App Router)
│   ├── onboarding/       # Fluxo de integração inicial
│   ├── dashboard/        # Painel principal
│   ├── expenses/         # Gestão de despesas
│   ├── new-expense/      # Cadastro de nova despesa
│   ├── edit-expense/
│   │   └── [id]/         # Edição de despesa dinâmica
│   ├── fixed-expenses/   # Despesas fixas
│   ├── savings/          # Área de economias/metas
│   ├── layout.tsx        # Layout raiz e global
│   └── page.tsx          # Página inicial/landing
├── components/           # Componentes reutilizáveis
│   ├── categories/       # Componentes de categorias
│   ├── expenses/         # Componentes específicos de despesas
│   ├── layout/           # Componentes de estrutura (nav, sidebar)
│   └── ui/               # Componentes básicos (buttons, inputs)
├── hooks/                # Hooks customizados (lógica de negócios)
│   ├── useCategories.ts
│   ├── useExpense.ts
│   └── useExpenses.ts
├── services/             # Comunicação com API / Banco de Dados
│   ├── categoryService.ts
│   └── expenseService.ts
├── types/                # Tipagens TypeScript
│   └── expenses.ts
├── constants/            # Constantes globais e configurações
└── styles/               # Estilos globais (CSS/Tailwind)
```



## Como executar o projeto

1. Clonar o repositório
   ```bash
   git clone https://github.com/Ricardo-9/mybudget-finance-app

2. Instalar dependências
   ```bash
   npm install

3. Iniciar o BackEnd simulado
   ```bash
   npx json-server --watch db.json --port 3001

4. Rodar o projeto
   ```bash
   npm run dev

## Objetivo profissional
Este projeto faz parte da minha preparação para atuar como desenvolvedor full stack júnior, com foco em:

- Construção de aplicações completas

- Integração entre front-end e back-end

- Autenticação e segurança

- Banco de dados relacional

- Boas práticas de arquitetura

## Autor
Ricardo Rocha Alves
Desenvolvedor Full Stack em formação

### Experiência com React, Next.js e TypeScript

Projeto desenvolvido como parte do processo de evolução profissional

Foco em aplicações completas e prontas para produção
