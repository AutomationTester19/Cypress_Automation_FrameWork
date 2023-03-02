const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'j18y1i',
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});