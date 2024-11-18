const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementa los escuchadores de eventos aquí si es necesario
    },
  },
});
describe('Pruebas en la subpágina "Quiénes Somos"', () => {
    beforeEach(() => {
      // Visitar la página principal
      cy.visit('https://www.zappos.com/'); 
    });
  
    it('debería navegar a la subpágina "Quiénes Somos"', () => {
      // Supongamos que tienes un enlace en el menú de navegación
      cy.get('a[href="/quienes-somos"]').click(); // Cambia el selector según sea necesario
  
      // Verificar que la URL es la correcta
      cy.url().should('include', '/quienes-somos');
  
      // Comprobar que la cabecera de la página está visible
      cy.get('h1').should('contain', 'Quiénes Somos'); // Asegúrate de que esta cabecera exista en la página
  
      // Comprobar que hay una sección de información sobre la empresa
      cy.get('.informacion-empresa') 
        .should('be.visible')
        .and('contain', 'vendemos dispositivos móviles'); // Verifica que contenga información relevante
  
      // También puedes comprobar otros elementos que creas necesarios
      cy.get('footer').should('be.visible'); // Asegúrate de que el pie de página también esté visible
    });
  });
  