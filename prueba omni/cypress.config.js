const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    browser: 'electron' // Cambiar a 'chrome' o 'firefox' si deseas usar otro navegador
  },
});

