const searchField = $('input[name="searchStr"]');
// const foundMovies = $$('movies > div > div.row.is-flex movie-card');
const foundMovies = element(by.xpath(`//div[@class='caption']/h4[@class='text-ellipsis']`))
const goBtn = $('.input-group-btn [type]');

class HomePage {
        
    async open() {
        await browser.get('http://movies-finder.firebaseapp.com/');
    };

    async searchFor(searchRequest) {
        // !!!! should learn this:
        // await searchField.sendKeys(searchRequest, Key.ENTER);
        await searchField.sendKeys(searchRequest);
        await goBtn.click();
    };

    async getFoundMovies() {
        // await browser.sleep(5000);
        await browser.wait(EC.visibilityOf(this.foundMovies.first()), 5000), 'Movies not loaded.';
        return this.foundMovies;
    };

    async getFoundMoviesTitles() {
        // return ((await this.getFoundMovies()).$$('a[title]')).getAttribute('title')
        return (await this.getFoundMovies()).getAttribute('title')
    };
};
