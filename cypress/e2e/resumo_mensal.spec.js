describe('Resumo Mensal', () => {
  beforeEach(() => {
    cy.fazerLogin('joao.teste@teste.com', 'Senha123!')
    cy.acessarResumoMensal()
  })

  it('Deve filtrar movimentações por mês e ano', () => {
    cy.selecionarMesAnoResumo('08', '2025')  
    cy.clicarBuscarResumo()

    
    cy.contains('Venda produto X').should('be.visible')
    cy.contains('Compra material Z').should('be.visible')
  })

  it('Deve excluir uma movimentação', () => {
    cy.selecionarMesAnoResumo('08', '2025')
    cy.clicarBuscarResumo()

    cy.excluirMovimentacaoResumo('Venda produto X')

   
    cy.contains('Movimentação removida com sucesso!').should('be.visible')
  })
})
