const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://test3.dev.lazr.io",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
