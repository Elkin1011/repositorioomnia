const { defineConfig } = require('cypress');

// //module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // Implementa los escuchadores de eventos aquí si es necesario
//     },
//   },
// });
describe('Página de Contáctanos', () => {
  beforeEach(() => {
    cy.viewport('macbook-15') // Para pruebas en PC
    cy.visit('https://tu-sitio-web.com/contacto')
  })

  it('Debería enviar el formulario de contacto correctamente en PC', () => {
    cy.get('input[name="nombre"]').type('Juan Pérez')
    cy.get('input[name="email"]').type('juan.perez@example.com')
    cy.get('textarea[name="mensaje"]').type('Este es un mensaje de prueba.')
    cy.get('form').submit()
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Formulario enviado!')
    })
  })

  it('Debería enviar el formulario de contacto correctamente en móvil', () => {
    cy.viewport('iphone-6') // Para pruebas en móvil
    cy.visit('https://tu-sitio-web.com/contacto')
    cy.get('input[name="nombre"]').type('Juan Pérez')
    cy.get('input[name="email"]').type('juan.perez@example.com')
    cy.get('textarea[name="mensaje"]').type('Este es un mensaje de prueba.')
    cy.get('form').submit()
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Formulario enviado!')
    })
  })
})