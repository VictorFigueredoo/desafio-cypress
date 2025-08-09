const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://seubarriga.wcaquino.me',
    specPattern: 'cypress/e2e/**/*.spec.js',
  },

  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  },

  video: true,
  videosFolder: 'cypress/videos',
})
