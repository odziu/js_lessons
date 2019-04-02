const HomePage = require('../../pages/home_page.js');
const homePage = new HomePage();

describe('Popular series', () => {
    beforeEach(async () => {
        await homePage.open();
    })
    
    it('should not have search bar', async () => {

    })

    it('should have "First Air Date" instead "Release Date"', async () => {

    })
})