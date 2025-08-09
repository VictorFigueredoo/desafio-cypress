# Documentação dos Casos de Teste

## 1. Cadastro de Usuário
### Objetivo
Cadastrar um novo usuário com e-mail aleatório para evitar duplicidade.

### Passos
1. Acessar a página de cadastro.
2. Preencher os campos Nome, E-mail (gerado aleatoriamente), Senha.
3. Submeter o formulário.
4. Verificar mensagem "Usuário criado com sucesso".
5. Confirmar redirecionamento para a página de login.

### Validações
- E-mail deve ser único.
- Campos obrigatórios devem ser preenchidos.

---

## 2. Fluxo de Login
### Objetivo
Realizar login com usuário válido e tratar tentativas inválidas.

### Passos
1. Acessar página de login.
2. Inserir e-mail e senha.
3. Submeter o formulário.
4. Verificar redirecionamento para a página Home.
5. Verificar mensagem de boas-vindas.

### Validações
- Login com usuário inexistente exibe mensagem "Usuário não encontrado".

---

## 3. Criação de Movimentações
### Objetivo
Adicionar movimentações do tipo Receita e Despesa.

### Passos
1. Acessar a tela de criação de movimentação.
2. Preencher campos (tipo, datas, descrição, valor, conta, status).
3. Salvar a movimentação.
4. Verificar mensagem "Movimentação adicionada com sucesso".

---

## 4. Validações de Campos
### Objetivo
Testar entradas inválidas para datas e valores.

### Exemplos
- Datas inválidas geram mensagem de erro específica.
- Valores não numéricos são rejeitados.

---

## 5. Exclusão de Movimentações e Contas
### Objetivo
Validar exclusão e bloqueio da exclusão quando vinculada.

---

## Observações Gerais
- Testes automatizados em Cypress com JavaScript.
- Dados dinâmicos gerados para evitar conflitos.
- Vídeos e relatórios gerados automaticamente.

---

