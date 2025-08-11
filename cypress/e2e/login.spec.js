describe('Fluxo de Login', () => {
  it('Não permite login se não existir usuário cadastrado', () => {
    cy.visit('/login');

    cy.preencherLogin('usuario.inexistente@example.com', 'SenhaQualquer123');
    cy.clicarEntrar();

    cy.contains('Problemas com o login do usuário').should('be.visible');
  });

  it('Realiza login com sucesso e redireciona para Home', () => {
    cy.fazerLogin('joao.teste@teste.com', 'Senha123!');

    cy.url().should('not.include', '/login'); 
    cy.url().should('include', '/');        
    cy.contains('Bem vindo').should('be.visible');
  });
});
