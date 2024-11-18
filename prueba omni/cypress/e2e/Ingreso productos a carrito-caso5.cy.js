const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementa los escuchadores de eventos aquí
    },
  },
});
describe('Agregar producto al carrito', () => {
    it('Debe agregar el producto al carrito y redirigir a la página del carrito', () => {
      // Visita la página del producto
      cy.visit('https://www.zappos.com/');
  
      // Encuentra y hace clic en el botón "llevar al carrito"
      cy.get('button#agregar-al-carrito').click();
  
      // Verifica que el producto fue añadido al carrito (puede depender de la lógica de tu aplicación)
      cy.get('div.carrito').should('contain', '1 producto');
  
      // Verifica la redirección a la página del carrito
      cy.url().should('include', '/carrito');
    });
  });
  