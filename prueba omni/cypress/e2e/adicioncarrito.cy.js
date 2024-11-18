
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementa los escuchadores de eventos aquí si es necesario
    },
  },
});

// cypress/integration/add_to_cart_spec.js
describe('Adición al Carrito', () => {
    it('Debería añadir un producto al carrito', () => {
      cy.visit('https://www.demoblaze.com/index.html');
      cy.get('a[href="prod.html?idp_=2"]').click();
      cy.get('.btn-success').click();
      cy.on('window:alert', (text) => {
        expect(text).to.contains('Product added');
      });
    });
  });
  
  