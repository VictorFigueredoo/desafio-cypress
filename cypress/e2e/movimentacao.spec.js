describe('Criar Movimentações', () => {
  beforeEach(() => {
    cy.fazerLogin('joao.teste@teste.com', 'Senha123!')
    cy.acessarCriarMovimentacao()
  })

  it('Deve criar movimentação do tipo Receita', () => {
    cy.preencherMovimentacao({
      tipo: 'REC',
      dataTransacao: '01/08/2025',
      dataPagamento: '02/08/2025',
      descricao: 'Venda produto X',
      interessado: 'Cliente Y',
      valor: '1000',
      conta: 'vitoria',
      status: '1'
    })
    cy.salvarMovimentacao()

    cy.contains('Movimentação adicionada com sucesso').should('be.visible')
  })

  it('Deve criar movimentação do tipo Despesa', () => {
    cy.preencherMovimentacao({
      tipo: 'DESP',
      dataTransacao: '01/08/2025',
      dataPagamento: '02/08/2025',
      descricao: 'Compra material Z',
      interessado: 'Fornecedor W',
      valor: '500',
      conta: 'ana',
      status: '0'
    })
    cy.salvarMovimentacao()

    cy.contains('Movimentação adicionada com sucesso').should('be.visible')
  })

  it('Deve criar movimentações para meses diferentes', () => {
    cy.preencherMovimentacao({
      tipo: 'REC',
      dataTransacao: '01/07/2025',
      dataPagamento: '02/07/2025',
      descricao: 'Venda mês 7',
      interessado: 'Cliente M',
      valor: '700',
      conta: 'vitoria',
      status: '1'
    })
    cy.salvarMovimentacao()

    cy.acessarCriarMovimentacao()

    cy.preencherMovimentacao({
      tipo: 'DESP',
      dataTransacao: '01/08/2025',
      dataPagamento: '02/08/2025',
      descricao: 'Despesa mês 8',
      interessado: 'Fornecedor N',
      valor: '300',
      conta: 'ana',
      status: '0'
    })
    cy.salvarMovimentacao()

    cy.contains('Movimentação adicionada com sucesso').should('be.visible')
  })

  it('Deve validar campos de data inválidos', () => {
    cy.preencherMovimentacao({
      tipo: 'REC',
      dataTransacao: '99/99/9999',
      dataPagamento: '99/99/9999',
      descricao: 'Data inválida',
      interessado: 'Teste',
      valor: '100',
      conta: 'vitoria',
      status: '1'
    })
    cy.salvarMovimentacao()

    cy.contains(/Data da Movimentação inválida|Data da Movimentação deve ser menor ou igual à data atual|Data do pagamento inválida/i).should('be.visible')
  })

  it('Deve validar campo valor inválido', () => {
    cy.preencherMovimentacao({
      tipo: 'REC',
      dataTransacao: '01/08/2025',
      dataPagamento: '02/08/2025',
      descricao: 'Valor inválido',
      interessado: 'Teste',
      valor: 'abc',
      conta: 'vitoria',
      status: '1'
    })
    cy.salvarMovimentacao()
   
    cy.contains('Valor deve ser um número')
  .should('be.visible')
})
})
