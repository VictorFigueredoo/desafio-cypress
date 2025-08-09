// cypress/support/commands.js
    //Cadastro
Cypress.Commands.add('acessarPaginaCadastro', () => {
  cy.get('a[href="/cadastro"]').click()
})
Cypress.Commands.add('preencherCadastro', (nome, email, senha) => {
  cy.get('input#nome').type(nome)
  cy.get('input#email').type(email)
  cy.get('input#senha').type(senha)
})
Cypress.Commands.add('clicarCadastrar', () => {
  cy.get('input[type="submit"][value="Cadastrar"]').click()
})

    //Login
Cypress.Commands.add('acessarLogin', () => {
  cy.get('a[href="/login"]').click()
})

Cypress.Commands.add('preencherLogin', (email, senha) => {
  cy.get('input#email').type(email)
  cy.get('input#senha').type(senha)
})

Cypress.Commands.add('clicarEntrar', () => {
  cy.get('button[type="submit"]').contains('Entrar').click()
})

Cypress.Commands.add('fazerLogin', (email, senha) => {
  cy.visit('/login')            // Vai direto para a página de login
  cy.preencherLogin(email, senha)
  cy.clicarEntrar()
})

    //Contas
// Navegar para Contas > Adicionar
Cypress.Commands.add('acessarAdicionarConta', () => {
  cy.get('a.dropdown-toggle').contains('Contas').click()
  cy.get('a[href="/addConta"]').click()
})

// Preencher nome da conta e salvar
Cypress.Commands.add('adicionarConta', (nome) => {
  cy.get('input#nome').clear().type(nome)
  cy.get('button[type="submit"]').contains('Salvar').click()
})

// Listar contas - abre a lista de contas (geralmente clicando em Contas > Listar)
Cypress.Commands.add('acessarListarContas', () => {
  cy.get('a.dropdown-toggle').contains('Contas').click()
  cy.get('a[href="/contas"]').contains('Listar').click() // ajuste se necessário, pois o href é '/'
})

// Editar conta pelo nome atual e alterar para novo nome
Cypress.Commands.add('editarConta', (nomeAtual, nomeNovo) => {
  cy.acessarListarContas()
  cy.contains('td', nomeAtual)
    .parent('tr')
    .within(() => {
      cy.get('span.glyphicon-edit').click()
    })

  cy.get('input#nome').clear().type(nomeNovo)
  cy.get('button[type="submit"]').contains('Salvar').click()
})

// Excluir conta pelo nome
Cypress.Commands.add('excluirConta', (nome) => {
  cy.acessarListarContas()
  cy.contains('td', nome)
    .parent('tr')
    .within(() => {
      cy.get('span.glyphicon-remove-circle').click()
    })
})

    //Criar Movimentação
Cypress.Commands.add('acessarCriarMovimentacao', () => {
  cy.get('a[href="/movimentacao"]').click()
})

Cypress.Commands.add('preencherMovimentacao', ({
  tipo,
  dataTransacao,
  dataPagamento,
  descricao,
  interessado,
  valor,
  conta,
  status // "1" para pago, "0" para pendente
}) => {
  cy.get('select#tipo').select(tipo)
  cy.get('input#data_transacao').clear().type(dataTransacao)
  cy.get('input#data_pagamento').clear().type(dataPagamento)
  cy.get('input#descricao').clear().type(descricao)
  cy.get('input#interessado').clear().type(interessado)
  cy.get('input#valor').clear().type(valor)
  cy.get('select#conta').select(conta)
  if (status === '1') {
    cy.get('input#status_pago').check()
  } else {
    cy.get('input#status_pendente').check()
  }
})

Cypress.Commands.add('salvarMovimentacao', () => {
  cy.get('button[type="submit"]').contains('Salvar').click()
})

    //Resumo Mensal
Cypress.Commands.add('acessarResumoMensal', () => {
  cy.get('a[href="/extrato"]').click()
})

Cypress.Commands.add('selecionarMesAnoResumo', (mes, ano) => {
  cy.get('select#mes').select(mes)
  cy.get('select#ano').select(ano)
})

Cypress.Commands.add('clicarBuscarResumo', () => {
  cy.get('input[type="submit"][value="Buscar"]').click()
})

Cypress.Commands.add('excluirMovimentacaoResumo', (descricaoMov) => {
  // Busca a movimentação pela descrição na lista e clica no botão excluir
  cy.contains('td', descricaoMov)
    .parent('tr')
    .within(() => {
      cy.get('span.glyphicon-remove-circle').click()
    })
})

    //Logout
Cypress.Commands.add('fazerLogout', () => {
  cy.get('a[href="/logout"]').click()
})

    //Gerar email aleatório
Cypress.Commands.add('gerarEmailAleatorio', () => {
  const timestamp = Date.now();
  return `joao.victor.${timestamp}@example.com`;
});
