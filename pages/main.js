module.exports = {
    url: 'https://gmail.com',
    elements: {
        username: {
            selector: '//*[@id="identifierId"]',
            locateStrategy: 'xpath'
        },
        next: {
            selector: '#identifierNext span',
            locateStrategy: 'css'
        }
    }
};
