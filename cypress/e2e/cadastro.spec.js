describe('Cadastro de novo usuário', () => {
  it('Deve cadastrar novo usuário com e-mail aleatório', () => {
    cy.visit('/cadastro');

    cy.gerarEmailAleatorio().then(emailAleatorio => {
      cy.get('input[name="nome"]').type('João Victor');
      cy.get('input[name="email"]').type(emailAleatorio);
      cy.get('input[name="senha"]').type('Senha123!');
      cy.get('input[type="submit"][value="Cadastrar"]').click();

      // Aceita que a URL final seja /login ou /cadastrarUsuario
      cy.url().should(url => {
        expect(url).to.satisfy(u => u.includes('/login') || u.includes('/cadastrarUsuario'))
      });

      cy.contains('Usuário inserido com sucesso').should('be.visible');
    });
  });
});

describe('Fluxo de Login', () => {
  it('Não permite login se não existir usuário cadastrado', () => {
    // Ajusta URL para a página correta de login
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
