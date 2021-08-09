const login = require('../functions/login.js');
const envstage  = require('../enviroments/stage-env.js');

module.exports = {
  '@tags': ['NightwatchSuite'],

  //FUNCTION OPEN BROWSER
  before: async (browser) => {
    await envstage(browser).openBrowser();
  },
  //LOGIN PAGE VALIDATE

  'Validate: Login Swag Labs Page': async (browser) =>{
    await login(browser).validatePage();
   },
  //CREDENTIALS
  'Login: Standar User': async (browser) =>{
    await login(browser).invalidUser();
  },

  //FUNCTION CLOSE BROWSER
  after: async (browser) => {
    await envstage(browser).closeBrowser();
    browser.pause(1000)
  }


};