describe('Gerenciamento de Contas', () => {
  beforeEach(() => {
    cy.fazerLogin('joao.teste@teste.com', 'Senha123!')
  })

  it('Deve adicionar duas contas com sucesso', () => {
    cy.acessarAdicionarConta()
    cy.adicionarConta('Conta Teste 1')
    cy.acessarAdicionarConta()
    cy.adicionarConta('Conta Teste 2')

    // Validar que as contas aparecem na listagem
    cy.acessarListarContas()
    cy.contains('td', 'Conta Teste 1').should('be.visible')
    cy.contains('td', 'Conta Teste 2').should('be.visible')
  })

  it('Deve alterar o nome de uma conta', () => {
    cy.editarConta('Conta Teste 1', 'Conta Teste 1 Alterada')

    // Validar alteração
    cy.acessarListarContas()
    cy.contains('td', 'Conta Teste 1 Alterada').should('be.visible')
  })

  it('Não deve permitir adicionar conta com nome já existente', () => {
    cy.acessarAdicionarConta()
    cy.adicionarConta('Conta Teste 2')

    // Ajuste a mensagem de erro conforme seu sistema
    cy.contains('Já existe uma conta com esse nome!').should('be.visible')
  })

  it('Não deve permitir excluir conta vinculada a movimentação', () => {
    // Tenta excluir conta que sabemos que está vinculada

    cy.excluirConta('vitoria')

    // Ajuste a mensagem de erro conforme seu sistema
    cy.contains('Conta em uso na movimentações').should('be.visible')
  })
})
