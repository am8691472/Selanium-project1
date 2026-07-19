const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    experimentalSessionAndOrigin: true,
    chromeWebSecurity: false,  // Cross-origin errors ko disable karega
  },
});