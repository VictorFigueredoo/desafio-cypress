describe('Logout', () => {
  beforeEach(() => {
    cy.fazerLogin('joao.teste@teste.com', 'Senha123!')
  })

  it('Deve deslogar o usuário com sucesso', () => {
    cy.fazerLogout()

    // Validar que redirecionou para página de login
    cy.url().should('include', '/logout')

    // Validar que o botão login está visível (ou outra validação na página de login)
    cy.get('button[type="submit"]').contains('Entrar').should('be.visible')
  })
})
