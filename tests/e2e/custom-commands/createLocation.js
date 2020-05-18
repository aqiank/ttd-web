
module.exports = {
  command: async function () {
    // Other Nightwatch commands are available via "this"
    // .init() simply calls .url() command with the value of the "launch_url" setting
    this.init()
    this.waitForElementVisible('#app')

    const result = await this.elements('css selector', '.location button')
    result.click()
  }
}