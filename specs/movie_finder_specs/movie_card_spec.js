// +++++++ Video #??? Homework +++++++ 

const movieTitle = element(by.xpath('//div[2]/movies/div[2]/div[1]/movie-card//a[@title]'));
const pageTitle = element(by.css(`[class='col-md-8'] h2`));
const ratingPointer = element.all(by.xpath(`//small[@class='label label-success pull-right']`)).first();

const HomePage = require('../../pages/home_page.js');
const homePage = new HomePage();

describe('Movie card', () => {
    beforeEach(async () => {
        await homePage.open();
    })

    it('should have name', async () => {
        expect(await movieTitle.getText()).toContain('Dilwale Dulhania Le Jayenge');
    });

    it('should have "rating" pointer', async () => {
        expect(await ratingPointer.isPresent() && await ratingPointer.isDisplayed());
        // fucking log
        console.log('Movie rating is: ', ratingPointer.getText(), '<= should be number')
        // Bad idea to use code below, because rating is changing
        // expect(await ratingPointer.getText()).toContain('9')
    });

    it('should open appropriate "movie details" page, after click on "name" field', async () => {
        const savedTitle = await movieTitle.getText();
        await homePage.clickOnMovie();
        expect(await pageTitle.getText()).toContain(savedTitle);
    });
});