const searchField = $('input[name="searchStr"]');
// const foundMovies = $$('movies > div > div.row.is-flex movie-card');
const foundMovies = element(by.xpath(`//div[@class='caption']/h4[@class='text-ellipsis']`))
const goBtn = $('.input-group-btn [type]');
var EC = protractor.ExpectedConditions;


const movieTitle = element(by.xpath('//div[2]/movies/div[2]/div[1]/movie-card//a[@title]'));
const pageTitle = element(by.css(`[class='col-md-8'] h2`));

class HomePage {
        
    async open() {
        await browser.get('http://movies-finder.firebaseapp.com/');
        await browser.wait(async () =>
            await movieTitle.isPresent() && await movieTitle.isDisplayed(), 5000, 'Cannot find element'
        );
    };

    async clickOnMovie() {
        await movieTitle.click();
        await browser.wait(async () =>
            await pageTitle.isPresent(), 5000, 'Element is not present => Appropriate page is not downloaded'
        );
    };

    async searchFor(searchRequest) {
        // !!!! should learn this:
        // await searchField.sendKeys(searchRequest, Key.ENTER);
        await searchField.clear();
        await searchField.sendKeys(searchRequest);
        await goBtn.click();
    };

    async getFoundMovies() {
        // await browser.sleep(5000);
        // await browser.wait(EC.visibilityOf(this.foundMovies.first()), 5000), 'Movies not loaded.';
        await browser.wait(EC.visibilityOf(this.foundMovies), 5000), 'Movies not loaded.';
        return this.foundMovies;
    };

    async getFoundMoviesTitles() {
        // return ((await this.getFoundMovies()).$$('a[title]')).getAttribute('title')
        return (await this.getFoundMovies()).getAttribute('title')
    };
};

module.exports = HomePage;
