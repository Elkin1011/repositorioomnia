
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementa los escuchadores de eventos aquí si es necesario
    },
  },
});

// cypress/e2e/view_cart_spec.js
describe('Visualización del Carrito', () => {
    it('Debería mostrar los productos en el carrito', () => {
      cy.visit('https://www.demoblaze.com/index.html');
      cy.get('a[href="cart.html"]').click();
      cy.url().should('include', 'cart.html');
      cy.get('.success').should('contain', 'Samsung');
    });
  });
  