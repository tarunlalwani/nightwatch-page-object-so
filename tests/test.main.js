module.exports = {

    'Login' : function (browser) {
        var page = browser.page.main();

        page.navigate()
            .setValue('@username', 'peterlalwani')
            .click('@next')
            .waitForElementNotPresent("@username", 10000);

        browser.saveScreenshot("./so.png")
        browser.end()

    }


};