// +++++++ Video #??? Homework +++++++ 

const movieTitle = element(by.xpath('//div[2]/movies/div[2]/div[1]/movie-card//a[@title]'));
const pageTitle = element(by.css(`[class='col-md-8'] h2`));
const ratingPointer = element.all(by.xpath(`//small[@class='label label-success pull-right']`)).first();

describe('Movie card', () => {
    beforeEach(async () => {
        await browser.get('http://movies-finder.firebaseapp.com/');
        await browser.wait(async () =>
            await movieTitle.isPresent() && await movieTitle.isDisplayed(), 5000, 'Cannot find element'
        );
    })
    fit('should have name', async () => {
        expect(await movieTitle.getText()).toContain('Dilwale Dulhania Le Jayenge');
    });

    it('should have "rating" pointer', async () => {
        expect(await ratingPointer.isPresent() && await ratingPointer.isDisplayed());
        // Bad idea to use code below, because rating is changing
        // expect(await ratingPointer.getText()).toContain('9')
    });

    it('should open appropriate "movie details" page, after click on "name" field', async () => {
        const savedTitle = await movieTitle.getText();
        await movieTitle.click();
        await browser.wait(async () =>
            await pageTitle.isPresent(), 5000, 'Element is not present => Appropriate page is not downloaded'
        );
        expect(await pageTitle.getText()).toContain(savedTitle);
    });
});