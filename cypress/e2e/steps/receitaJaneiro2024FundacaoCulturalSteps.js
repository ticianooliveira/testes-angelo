import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const url = 'https://transparencia.joaopessoa.pb.gov.br/#/';

Given('que eu acesso o site de transparência de João Pessoa', () => {
  cy.visit(url);
  cy.contains('Acesso Rápido').should('be.visible');
});


When('eu clico no botão de Receitas', () => {
  cy.get('a.cartao-componente')
    .contains('Receitas')
    .should('be.visible')
    .click();
});


And('devo clicar no dropdown {string}', (dropdownName) => {
  if (dropdownName === 'Entidade') {
   
    cy.get('.ui-dropdown-label-container')
      .contains('TODOS (AS)')
      .parent()
      .click();
  } else if (dropdownName === 'Ano') {
      
    cy.get('.ui-dropdown-label-container')
      .contains('2025')
      .parent()
      .click();
  }
});


And('devo selecionar a opção {string}', (opcao) => {
  if (opcao === 'Fundação Cultural de João Pessoa') {
    
    cy.get('p-dropdownitem li[aria-label="Fundação Cultural de João Pessoa"]')
      .should('be.visible')
      .click();
  } else if (opcao === '2024') {
    
    cy.get('p-dropdownitem li[aria-label="2024"]')
      .should('be.visible')
      .click();
  }
});


Then('devo clicar no botão {string}', (botao) => {
  if (botao === 'Pesquisar') {
    cy.get('button')
      .contains('Pesquisar')
      .should('be.visible')
      .click();
  }
});


And('devo ver na tabela de receitas a coluna {string}', (nomeColuna) => {
 
  cy.get('table', { timeout: 10000 })
    .should('be.visible');
    
  cy.get('table th, table td')
    .contains(nomeColuna)
    .should('be.visible');
});