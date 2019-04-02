// +++++++ Video #5 Homework +++++++ 

const movieTitle = element(by.xpath('//div[2]/movies/div[2]/div[1]/movie-card//a[@title]'));
const pageTitle = element(by.css(`[class='col-md-8'] h2`));

const HomePage = require('../../pages/home_page.js');
const homePage = new HomePage();

describe('Movie details', () => {
    beforeEach(async () => {
        await homePage.open();
    });

    it('should have movie name as header', async () => {
        const savedTitle = await movieTitle.getText();
        await homePage.clickOnMovie();
        expect(await pageTitle.getText()).toContain(savedTitle);
    })

    it('should have rating', async () => {
        const movieRating = await $('.label-warning');
        expect(movieRating.isPresent() && movieRating.isDisplayed());
        // !!! Should edit this:
        // console.log('Movie rating:', movieRating.getText());
    })

    it('should have similar movie block with at least one movie', async () => {
        await homePage.clickOnMovie();
    })

    describe('cast block', () => {
        it('should show at least one actor', async () => {
            await homePage.clickOnMovie();
        })
    })

    describe('reviews block', () => {
        beforeEach(async () => {
            await homePage.clickOnMovie();
        })
        
        it('should be at least one review', async () => {
            expect(await $('.text-justify').isPresent() && await $('.text-justify').isDisplayed());
            console.log(await $('.text-justify').getText());
        })

        it('should have reviewer name as link to source', async () => {
            // xpath:
            // app-root/div/div[@class='row']/div[2]/app-movie//cite[@title='futuretv']/a[@href='https://www.themoviedb.org/review/5346fa840e0a265ffa001e20']
                        
            expect(await $('cite').isPresent() && await $('cite').isDisplayed());
            console.log(await element(by.xpath('//cite//a[@href]')).getText());
            // const reviewer = await $('cite').getText();
            // await $('cite').click();

        })
    })
})