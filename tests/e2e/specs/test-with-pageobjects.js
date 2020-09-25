/// /////////////////////////////////////////////////////////////
// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide
//
// For more information on working with page objects see:
//   https://nightwatchjs.org/guide/working-with-page-objects/
/// /////////////////////////////////////////////////////////////

module.exports = {
  beforeEach: (browser) => browser.init(),

  'e2e test c4it-button color': (browser) => {
    browser.waitForElementVisible('#app')
    // .assert.visible('button')
    .assert.cssProperty('#app', 'background-color', '#2c3e50')
    .end();
  },
};
