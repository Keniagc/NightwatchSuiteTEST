const login = require('../pages/login.js');
const envstage  = require('../env/stage-env.js');

module.exports = {
  '@tags': ['NightwatchSuite'],

  //FUNCTION OPEN BROWSER
  before: async (browser) => {
    await envstage(browser).openBrowser();
  },
  //LOGIN PAGE VALIDATE
  'Login: Login Standar User': async (browser) =>{
    await login(browser).loginUser();
   },
  //FUNCTION CLOSE BROWSER
  after: async (browser) => {
    await envstage(browser).closeBrowser();
    browser.pause(1000)
  }
};