# cypress-Igor-H-Silva-compass

Repositório criado para as atividades práticas de automação de testes com Cypress.

---

## Tecnologias

- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/)

---

## Como executar

1. Clone o repositório e instale as dependências:

```bash
npm install
```

2. Abra o Cypress em modo interativo:

```bash
npx cypress open
```

3. Ou execute os testes via terminal:

```bash
npx cypress run
```

---

## Automação Web

### Primeiro Teste — Your First Test

**Arquivo:** `cypress/e2e/primeiro_teste.cy.js`  
**Site utilizado:** [Front ServeRest](https://front.serverest.dev/login)

Este teste foi desenvolvido seguindo o guia oficial do Cypress [Writing Your First End-to-End Test](https://docs.cypress.io/app/end-to-end-testing/writing-your-first-end-to-end-test), com o objetivo de aprender os conceitos básicos de automação E2E.

**O que o teste faz:**

1. Visita a página de login do Front ServeRest (`/login`)
2. Valida que a URL contém `/login`
3. Localiza o campo de e-mail pelo seletor `data-testid="email"`, digita um valor e valida que o campo foi preenchido corretamente
4. Localiza o campo de senha pelo seletor `data-testid="senha"`, digita um valor e valida que o campo foi preenchido corretamente

**Conceitos praticados:** `cy.visit()`, `cy.url()`, `cy.get()`, `.type()`, `.should()`

---

## Checklist da Atividade

- [x] Instalação: `package.json` e `package-lock.json` presentes na raiz
- [x] Configuração: `cypress.config.js` gerado corretamente
- [x] O Teste: pasta `cypress/e2e/` contendo `primeiro_teste.cy.js`
- [x] README atualizado com a seção "Automação Web"
- [x] Commit e Push na branch `main`
