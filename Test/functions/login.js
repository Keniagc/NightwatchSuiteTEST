const usersTest = require('../data/userData.json');
const dataTest = require('../data/testData.json');
                                 
module.exports = function (browser) {
    const mainPage = browser.page.loginPage();
    
        this.loginUser = async () => {
            await mainPage.click('@username')
            await mainPage.setValue('@username', usersTest.userName[0])
            await mainPage.click('@password')
            await mainPage.setValue('@password', usersTest.password)
            await mainPage.click('@loginbutton')
            await mainPage.assert.visible('@mainPageView')
            await mainPage.assert.containsText('@mainPageView',dataTest.ProductsText)
        };
        
        //INVALID USER VALIDATION
        this.invalidUser = async () => {
            await mainPage.click('@username')
            await mainPage.setValue('@username', usersTest.invalidUser)
            await mainPage.click('@password')
            await mainPage.setValue('@password', usersTest.password)
            await mainPage.click('@loginbutton')
            await mainPage.assert.visible('@errorLoginText')
            await mainPage.assert.containsText('@errorLoginText', dataTest.WrongUserText)
            await this.clearFields()
        };

        //VALIDATE LOGIN FORM 
        this.validatePage = async ()  => {
            await mainPage.assert.visible('@username')
            await mainPage.assert.visible('@password')
            await mainPage.assert.visible('@loginbutton')
        };

        this.clearFields = async () => {
            await mainPage.clearValue('@username')
            await mainPage.clearValue('@password')
        }
        
        
    
        this.sortItems = async () => {
            await mainPage.assert.visible('@username')
            await mainPage.assert.visible('@password')
        };

     return this;
    };