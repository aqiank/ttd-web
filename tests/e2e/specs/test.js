// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  'create location': browser => {
    browser
      .init()
      .waitForElementVisible('#app')
      .assert.elementPresent('.btn-create-location')
      .click('.btn-create-location')
      .assert.elementPresent('.dialog-create-location')
      .setValue('.input-location-title input', 'Test')
      .setValue('.input-location-description textarea', 'Lorem ipsum dolor sit amet adipiscing')
      .setValue('.input-location-address input', '123 Lame Avenue')
      .setValue('.input-location-latitude input', 1.23)
      .setValue('.input-location-longitude input', 130.12)
      .setValue('.input-location-phone input', '8888 8888')
      .setValue('.input-location-website-url input', 'https://test.example.com')
      .setValue('.input-location-opening-hours-monday input', '9-22')
      .setValue('.input-location-opening-hours-tuesday input', '9-22')
      .setValue('.input-location-opening-hours-wednesday input', '9-22')
      .setValue('.input-location-opening-hours-thursday input', '9-22')
      .setValue('.input-location-opening-hours-friday input', '9-22')
      .setValue('.input-location-opening-hours-saturday input', '9-22')
      .setValue('.input-location-opening-hours-sunday input', '9-22')
      .end()
  },

  'create event': browser => {
    browser
      .init()
      .waitForElementVisible('#app')
      .assert.elementPresent('.btn-create-event')
      .click('#tab-event')
      .click('.btn-create-event')
      .assert.elementPresent('.dialog-create-event')
      .setValue('.input-event-title input', 'Test')
      .setValue('.input-event-description textarea', 'Lorem ipsum dolor sit amet adipiscing')
      .setValue('.input-event-address input', '123 Lame Avenue')
      .setValue('.input-event-latitude input', 1.23)
      .setValue('.input-event-longitude input', 130.12)
      .setValue('.input-event-phone input', '8888 8888')
      .setValue('.input-event-website-url input', 'https://test.example.com')
      .end()
  },
}
