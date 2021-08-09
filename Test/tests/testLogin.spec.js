const login = require('../functions/login.js');
const envstage  = require('../enviroments/stage-env.js');

module.exports = {
  '@tags': ['NightwatchSuite'],

  //FUNCTION OPEN BROWSER
  before: async (browser) => {
    await envstage(browser).openBrowser();
  },
  //LOGIN PAGE VALIDATE
  'Login: Login Standar User': async (browser) =>{
    await login(browser).validatePage();
   },
  //INVALID CREDENTIALS
  'Login: Invalid user validation': async (browser) =>{
    await login(browser).invalidUser();
  },
  //NORMAL USER 
  'Login: Validate Standar User Access': async (browser) =>{
    await login(browser).loginUser();
    //await login(browser).loginSuccess();
  },
  //FUNCTION CLOSE BROWSER
  after: async (browser) =>{
    await envstage(browser).closeBrowser();
  }


};