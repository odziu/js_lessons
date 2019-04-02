// +++++++ Video #6 Lesson +++++++ 
// // const foundMovies = $$('movies > div > div.row.is-flex movie-card');
// const foundMovies = element(by.xpath(`//div[@class='caption']/h4[@class='text-ellipsis']`))

const HomePage = require('../../pages/home_page.js');
const homePage = new HomePage();

describe('Search', () => {
    beforeEach(async () => {
        await homePage.open();
    })
    
    it('by existing name, should show first movie with', async () => {
        const search_request = 'Dreams';
        await homePage.searchFor(search_request);
        
        // await homePage.foundMovies.click();
    });

    it('results(all of them) should contain search request', async () => {
        const search_request = 'Dreams';
        await homePage.searchFor(search_request);
        let titles = await homePage.getFoundMoviesTitles()

        // expect(titles.length).toBe(20, 'Number of found movies should be 20');
        // titles.forEach(title => expect(title).toContain(search_request))
        expect(titles.toContain(search_request))
    });

    it('result should be empty, after request for nonexistent movie', async () => {
        const search_request = 'NON-EXIST!';
        await homePage.searchFor(search_request);
        let titles = await homePage.getFoundMoviesTitles()

        expect(titles.length).toBe(20, 'Number of found movies should be 20');
        // titles.forEach(title => expect(title).toContain(search_request))
    });

    it('should search movie', async () => {
        // await browser.wait(async () =>
        //     await searchField.isPresent() && await searchField.isDisplayed(), 5000, 'Cannot find search field'
        // );
        // const movieTitle = element(by.xpath(''));
        // await browser.wait(async () => 
        //     await movieTitle.isPresent() && await movieTitle.isDisplayed(), 5000, 'Cannot find movie title'
        // );
        // expect(await movieTitle.getText()).toContain('');
    });
}); 