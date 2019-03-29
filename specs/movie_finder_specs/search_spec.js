import { ExpectedConditions } from "protractor";

// +++++++ Video #??? Homework +++++++ 
const searchField = $('input[name="searchStr"]');
const foundMovies = $$('movies > div > div.row.is-flex movie-card')

class HomePage {
        
    async open() {
        await browser.get('http://movies-finder.firebaseapp.com/');
    };

    async searchFor(search_request) {
        await searchField.sendKeys(search_request, Key.ENTER);
    };

    async getFoundMovies() {
        await browser.sleep(5000);
        return this.foundMovies
    };
};


describe('Search', () => {
    beforeEach(async () => {
        let homePage = new HomePage()
        await homePage.open();
    })
    
    it('should search movie', async () => {
        
        // const searchField = $('');
        // await browser.wait(async () =>
        //     await searchField.isPresent() && await searchField.isDisplayed(), 5000, 'Cannot find search field'
        // );
        // await searchField.clear();
        // await searchField.sendKeys('');
        // const movieTitle = element(by.xpath(''));
        // await browser.wait(async () => 
        //     await movieTitle.isPresent() && await movieTitle.isDisplayed(), 5000, 'Cannot find movie title'
        // );
        // expect(await movieTitle.getText()).toContain('');
    });

    it('by existing name, should show first movie with', async () => {

    });

    it('results(all of them) should contain search request', async () => {
        const search_request = 'Dreams';
        await homePage.searchFor(search_request);
        let titles = (await homePage.getFoundMovies()).$$('a[title]').getAttribute('title')

        expect(titles.length).toBe(20, 'Number of found movies should be 20');
        titles.forEach(title => expect(title).toContain(search_request))
    });

    it('result should be empty', async () => {

    });
});