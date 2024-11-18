
+
// cypress/integration/homepage_spec.js
describe('Página de Inicio', () => {
    it('Debería cargar correctamente', () => {
      cy.visit('https://www.demoblaze.com/index.html');
      cy.get('title').should('contain', 'STORE');
    });
  });
  
  