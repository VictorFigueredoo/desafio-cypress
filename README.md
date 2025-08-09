# Desafio Cypress - Automação de Testes

Este projeto contém testes automatizados para a aplicação **Seu Barriga** utilizando o **Cypress** e o **Mochawesome** para geração de relatórios.

---

## 📋 Pré-requisitos

Antes de iniciar, você precisa ter instalado:
- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [Git](https://git-scm.com/)
- [Cypress](https://www.cypress.io/) (instalado via npm)

---

## 🚀 Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/SEU-USUARIO/desafio-cypress.git
cd desafio-cypress
npm install
▶️ Executando os testes
Abrir o Cypress no modo interativo:

bash
Copiar
Editar
npx cypress open
Executar no modo headless (com geração de relatório Mochawesome):

bash
Copiar
Editar
npx cypress run
📊 Relatórios de Testes
Após executar os testes no modo headless, o relatório HTML estará disponível em:

bash
Copiar
Editar
cypress/reports/mochawesome.html
🎥 Gravação de Vídeos
O Cypress grava vídeos automaticamente quando executado com npx cypress run.
Os vídeos ficam salvos em:

bash
Copiar
Editar
cypress/videos/
🛠 Estrutura do Projeto
bash
Copiar
Editar
📂 cypress
 ┣ 📂 e2e               # Casos de teste
 ┣ 📂 fixtures          # Massa de dados
 ┣ 📂 reports           # Relatórios Mochawesome
 ┣ 📂 videos            # Vídeos dos testes
 ┣ 📂 support           # Comandos customizados
📜 cypress.config.js     # Configuração do Cypress
📜 package.json          # Dependências do projeto
📜 README.md             # Este arquivo
👤 Autor
Feito por João Victor Bezerra Figueredo 🚀