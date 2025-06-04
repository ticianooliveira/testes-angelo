import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const url = 'https://transparencia.joaopessoa.pb.gov.br/#/';

Given('que eu acesso o site de transparência de João Pessoa', () => {
  cy.visit(url);
  cy.contains('Acesso Rápido').should('be.visible');
});

When('eu clico no botão de VACINAÇÃO COVID-19', () => {
  cy.contains('div', 'VACINAÇÃO')
    .contains('COVID-19')
    .should('be.visible')
    .click();
});

And('devo clicar em "Lista de Vacinados"', () => {
  cy.get('a[href="#/covid-vacinacao/lista"]')
    .contains('Lista de Vacinados')
    .should('be.visible')
    .click();
});

Then('devo ser redirecionado para a página de Vacinados', () => {
  cy.url().should('include', '/covid-vacinacao/lista');
});

And('a página deve conter o texto "Lista de Vacinados contra COVID-19"', () => {
  cy.contains('Lista de Vacinados contra COVID-19').should('be.visible');
});

Then('devo clicar no botão "Pesquisar"', () => {
  cy.get('button[pbutton]')
    .contains('Pesquisar')
    .should('be.visible')
    .click();
});

And('devo ver na tabela de vacinados a coluna "Nome"', () => {
  cy.wait(30000); 
  
  cy.get('th')
    .contains('Nome')
    .should('be.visible');
});