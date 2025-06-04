import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const url = 'https://transparencia.joaopessoa.pb.gov.br/#/';

Given('que eu acesso o site de transparência de João Pessoa', () => {
  cy.visit(url);
  cy.contains('Acesso Rápido').should('be.visible');
});

// Step para clicar no botão de Despesas
When('eu clico no botão de Despesas', () => {
  cy.get('a.cartao-componente')
      .contains('Despesas')
      .should('be.visible')
      .click();
});

Then('devo ser redirecionado para a página de Despesas', () => {
  cy.url().should('include', '/despesas');
});

And('a página deve conter o texto "Despesas - Quadro Geral"', () => {
  cy.contains('Despesas - Quadro Geral').should('be.visible');
});

Then('devo clicar no botão "Pesquisar"', () => {
  cy.get('button[pbutton]')
    .contains('Pesquisar')
    .should('be.visible')
    .click();
  
  // Aguarda o carregamento da tabela após a pesquisa
  cy.wait(2000); // Ajuste o tempo conforme necessário
});

And('devo ver na tabela de despesas a função "ADMINISTRACAO"', () => {
  // Aguarda a tabela carregar e verifica se contém "ADMINISTRACAO"
  cy.get('td')
    .contains('ADMINISTRACAO')
    .should('be.visible');
  
  // Alternativa mais específica usando o seletor exato do HTML fornecido
  // cy.get('td[style*="text-align: left"]')
  //   .contains('ADMINISTRACAO')
  //   .should('be.visible');
});