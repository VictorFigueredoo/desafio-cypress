describe('Logout', () => {
  beforeEach(() => {
    cy.fazerLogin('joao.teste@teste.com', 'Senha123!')
  })

  it('Deve deslogar o usuário com sucesso', () => {
    cy.fazerLogout()

    // Valida que redirecionou para página de login
    cy.url().should('include', '/logout')

    // Valida que o botão login está visível
    cy.get('button[type="submit"]').contains('Entrar').should('be.visible')
  })
})
