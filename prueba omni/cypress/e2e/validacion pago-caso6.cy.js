
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementa los escuchadores de eventos aquí si es necesario
    },
  },
});
describe('Validar compra y venta de un producto', () => {
    it('Debe permitir la compra de un producto usando cualquier medio de pago', () => {
      // Visita la página del producto
      cy.visit('https://zappos.com/');
  
      // Agrega el producto al carrito
      cy.get('button#agregar-al-carrito').click();
  
      // Navega a la página del carrito
      cy.visit('https://zappos.com/');
  
      // Procede a la página de pago
      cy.get('button#proceder-al-pago').click();
  
      // Selecciona un medio de pago (Tarjeta de crédito)
      cy.get('select#medio-pago').select('Tarjeta de crédito');
      cy.get('input#numero-tarjeta').type('4111111111111111');
      cy.get('input#fecha-expiracion').type('12/25');
      cy.get('input#codigo-seguridad').type('123');
  
      // Completa la compra
      cy.get('button#confirmar-compra').click();
  
      // Verifica que la compra fue exitosa
      cy.contains('Compra realizada con éxito').should('be.visible');
  
      // (Opcional) Verifica otros medios de pago
      cy.get('select#medio-pago').select('PayPal');
      cy.get('input#correo-paypal').type('usuario@paypal.com');
      cy.get('button#confirmar-compra').click();
      cy.contains('Compra realizada con éxito').should('be.visible');
    });
  });
  
