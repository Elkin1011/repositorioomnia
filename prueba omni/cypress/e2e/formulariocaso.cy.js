
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementa los escuchadores de eventos aquí si es necesario
    },
  },
});

// cypress/integration/contact_form_spec.js
describe('Formulario de Contacto', () => {
    it('Debería enviar el formulario de contacto correctamente', () => {
      cy.visit('https://www.demoblaze.com/index.html');
      cy.get('a[data-target="#exampleModal"]').click();
      cy.get('#recipient-email').type('test@example.com');
      cy.get('#recipient-name').type('Juan Pérez');
      cy.get('#message-text').type('Este es un mensaje de prueba.');
      cy.get('#exampleModal .btn-primary').click();
      cy.on('window:alert', (text) => {
        expect(text).to.contains('Thanks for the message!!');
      });
    });
  });
  