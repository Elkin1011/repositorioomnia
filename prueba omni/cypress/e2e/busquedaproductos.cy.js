
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementa los escuchadores de eventos aquí si es necesario
    },
  },
});

// cypress/integration/search_spec.js
describe('Búsqueda de Productos', () => {
    it('Debería realizar una búsqueda y mostrar resultados', () => {
      cy.visit('https://www.demoblaze.com/index.html');
      cy.get('#searchbox').type('Samsung{enter}');
      cy.get('.card-title').should('contain', 'Samsung');
    });
  });
  