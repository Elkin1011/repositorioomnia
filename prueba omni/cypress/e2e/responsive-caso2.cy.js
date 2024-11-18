const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementa los escuchadores de eventos aquí si es necesario
    },
  },
});
describe('Pruebas de Diseño Responsive', () => {
  const url = 'http://tusitioweb.com'; // Cambia esta URL a la de tu página web

  beforeEach(() => {
    cy.visit(url);
  });

  it('Debería mostrarse correctamente en una pantalla de PC', () => {
    cy.viewport('macbook-15'); // Ajusta el viewport a un tamaño de pantalla de PC
    cy.get('header').should('be.visible');
    cy.get('nav').should('be.visible');
    cy.get('main').should('be.visible');
    cy.get('footer').should('be.visible');
  });

  it('Debería mostrarse correctamente en una pantalla de móvil', () => {
    cy.viewport('iphone-6'); // Ajusta el viewport a un tamaño de pantalla de móvil
    cy.get('header').should('be.visible');
    cy.get('nav').should('be.visible');
    cy.get('main').should('be.visible');
    cy.get('footer').should('be.visible');
    cy.get('.menu-toggle').should('be.visible'); // Verifica que el menú toggle sea visible en móvil
  });

  it('Debería mostrarse correctamente en una pantalla de tablet', () => {
    cy.viewport('ipad-2'); // Ajusta el viewport a un tamaño de pantalla de tablet
    cy.get('header').should('be.visible');
    cy.get('nav').should('be.visible');
    cy.get('main').should('be.visible');
    cy.get('footer').should('be.visible');
  });
});