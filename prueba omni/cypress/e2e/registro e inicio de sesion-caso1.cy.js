const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementa los escuchadores de eventos aquí si es necesario
    },
  },
});
describe('Registro e inicio de sesión', () => {
    it('Debe crear una cuenta y permitir el inicio de sesión', () => {
      // Visita la página de registro
      cy.visit('https://www.zappos.com/');
  
      // Completa el formulario de registro
      cy.get('input#nombre').type('TuNombre');
      cy.get('input#email').type('tunombre@correo.com');
      cy.get('input#password').type('tucontraseña');
      cy.get('button#registrarse').click();
  
      // Verifica que la cuenta se creó correctamente
      cy.contains('Cuenta creada con éxito').should('be.visible');
  
      // Visita la página de inicio de sesión
      cy.visit('https://www.zappos.com/');
  
      // Completa el formulario de inicio de sesión
      cy.get('input#email').type('tunombre@correo.com');
      cy.get('input#password').type('tucontraseña');
      cy.get('button#iniciar-sesion').click();
  
      // Verifica que el inicio de sesión fue exitoso
      cy.contains('Bienvenido, TuNombre').should('be.visible');
    });
  });
  