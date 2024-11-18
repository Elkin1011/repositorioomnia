
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementa los escuchadores de eventos aquí si es necesario
    },
  },
});
// cypress/integration/navigation_spec.js
describe('Navegación', () => {
    it('Debería navegar a la sección de laptops', () => {
      cy.visit('https://www.demoblaze.com/index.html');
      cy.get('a[href="prod.html?idp_=8"]').click();
      cy.url().should('include', 'prod.html?idp_=8');
      cy.get('.name').should('contain', 'Sony vaio i5');
    });
  });