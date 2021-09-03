const usersTest = require('../data/userData.json');
const dataTest = require('../data/testData.json');
                                 
module.exports = function (browser) {
    const mainPage = browser.page.mainPage();


    this.loginPage = async () =>{
        mainPage.assert.visible('')

    }
    
        

     return this;
};