// Do not need this for JS, because it is a Type Script:
// import {browser, element, By, $, $$, Key} from 'protractor'


// Old School function syntax 
describe('Expect', function () {
    it('should assert something', function () {
        expect('HELLO WORLD').toContain('WORLD')
        // expect('HELLO WORLD').toContain('TAM')
    })
});

describe('browserName', function () {
    it('can open URLs', async function () {
        await browser.get('http://movies-finder.firebaseapp.com/')
        console.time('sleep')
        await browser.sleep(5000)
        console.timeEnd('sleep')
    });
});

// Arrow function
describe('browserName', () => {
    it('can open URLs', async () => {
        await browser.get('http://movies-finder.firebaseapp.com/')

        console.time('sleep')
        await browser.sleep(5000)
        console.timeEnd('sleep')
    });
    
    it('Should return elements by css', async () => {
        await browser.get('/');
        let a = element.all(by.css('movie-card')).first()
        let b = $('movie-card') // the same as element(by.css('movie-card'))
        let c = $$('movie-card').last()

        console.log(await a.getText())
        console.log(await b.getText())
        console.log(await c.getText())
    })

    it('can fork new driver instance', async () => {
        await browser.get('http://movies-finder.firebaseapp.com/')

        let browser2 = await browser.forkNewDriverInstance().ready;
        await browser2.get('https://www.protractortest.org/#/')
        await browser2.sleep(5000)
        await browser2.close()
        // Direct search in specified browser
        await browser2.$('div')
    });
    
    it('can switch to iframe', async () => {
        await browser.waitForAngularEnabled(false)
        await browser.get('http://the-internet.herokuapp.com/iframe')
        let iframe = $('#mce_0_ifr')
        // BUG - test stops when passing ElementFinder into .frame()
        // await browser.switchTo().frame(iframe)
        await browser.switchTo().frame(iframe.getWebElement())
        console.log(await $('body#tinymce').getText())

        // Should check text
        //let tinymce = await element.$('body#tinymce');
        //expect(await tinymce.getText().toEqual('Your content goes here.'))
        // expect(await element.$('body#tinymce').getText().toEqual('Your content goes here.'))
        await browser.switchTo().defaultContent()
    });
});

describe('Element finder', () => {
    it('can be clicked', async () => {
        await browser.waitForAngularEnabled(false)
        await browser.get('https://the-internet.herokuapp.com/checkboxes')
        // $$('[type="checkbox"]')
        await $('[type="checkbox"]').click()
        await browser.sleep(3000)
    });
    
    it('can be checked for display', async () => {
        await browser.waitForAngularEnabled(false)
        await browser.get('https://the-internet.herokuapp.com/checkboxes')
        await console.log(await $('NOT_EXISTING_ELEMENT').isDisplayed().then(null, err => false))
        await browser.sleep(3000)
    });
    
    it('can be checked for presence', async () => {
        await browser.waitForAngularEnabled(false)
        await browser.get('https://the-internet.herokuapp.com/checkboxes')
        await console.log(await $('NOT_EXISTING_ELEMENT').isPresent())
        await browser.sleep(3000)
    });
    
    it('can send keys into it', async () => {
        // Key does not work
        await browser.waitForAngularEnabled(false)
        await browser.get('https://the-internet.herokuapp.com/login')
        await $('#username').sendKeys('abc')
        // await $('#username').submit()
        await browser.sleep(15000)
    });
    
    it('can work with ElementArrayFinder', async () => {
        await browser.waitForAngularEnabled(false)
        await browser.get('https://the-internet.herokuapp.com/checkboxes')
        
        // Returns array with all selected statuses of found elements
        console.log(await $$('[type="checkbox"]').isSelected())
        await browser.sleep(3000)
    });

    it('can work with ElementArrayFinder', async () => {
        await browser.waitForAngularEnabled(false)
        await browser.get('https://the-internet.herokuapp.com/checkboxes')
        
        // Returns number of found elements
        console.log(await $$('[type="checkbox"]').count())

        console.log(await $$('[type="checkbox"]').each(async (elem, index) => {
            console.log(elem.isSelected(), 'INDEX:', index)
            if(!(await elem.isSelected())) {
                await elem.click()
            }
            console.log(elem.isSelected(), 'INDEX:', index)
        }))
    });

    it('can work with ElementArrayFinder', async () => {
        await browser.waitForAngularEnabled(false)
        await browser.get('https://the-internet.herokuapp.com/checkboxes')
        console.log(await $$('[type="checkbox"]').map(async (elem, index) => {
            console.log(elem.isSelected(), 'INDEX:', index)
            if(!(await elem.isSelected())) {
                await elem.click()
                return `${index} was checked!` 
            }
            console.log(elem.isSelected(), 'INDEX:', index)
            return `${index} was NOT checked!`
        }))
    });
});


describe('Movie card', () => {
    it('should have name', async () => {
        await browser.get('http://movies-finder.firebaseapp.com/')
        const movieTitle = element(by.xpath('//div[2]/movies/div[2]/div[1]/movie-card//a[@title]'));
        await browser.wait(async () =>
            await movieTitle.isPresent() && await movieTitle.isDisplayed(), 5000, 'Cannot find element'
        );
        expect(await movieTitle.getText()).toContain('Dilwale Dulhania Le Jayenge')
    });

    it('should have "rating" pointer', async () => {
        const ratingPointer = element.all(by.xpath(`//small[@class='label label-success pull-right']`)).first();
        await browser.get('http://movies-finder.firebaseapp.com/')
        await browser.wait(async () =>
            await ratingPointer.isPresent() && await ratingPointer.isDisplayed(), 5000, 'Cannot find Rating pointer'
        );
        expect(await ratingPointer.getText()).toContain('9.1')
    });

    it('should open appropriate "movie details" page, after click on "name" field', async () => {
        const movieTitle = element(by.xpath('//div[2]/movies/div[2]/div[1]/movie-card//a[@title]'));
        const pageTitle = element(by.css(`[class='col-md-8'] h2`));
        await browser.get('http://movies-finder.firebaseapp.com/');
        await browser.wait(async () => 
            await movieTitle.isPresent() && await movieTitle.isDisplayed(), 5000, 'Cannot find element'
        );
        const savedTitle = await movieTitle.getText();
        await movieTitle.click();
        await browser.wait(async () =>
            await pageTitle.isPresent(), 5000, 'Element is not present => Appropriate page is not downloaded'
        );
        expect(await pageTitle.getText()).toContain(savedTitle);
    });
});

// describe('Search', () => {
//     it('should search movie', async () => {
//         await browser.get('http://movies-finder.firebaseapp.com/');
//         const searchField = $('');
//         await browser.wait(async () =>
//             await searchField.isPresent() && await searchField.isDisplayed(), 5000, 'Cannot find search field'
//         );
//         await searchField.clear();
//         await searchField.sendKeys('');
//         const movieTitle = element(by.xpath(''));
//         await browser.wait(async () => 
//             await movieTitle.isPresent() && await movieTitle.isDisplayed(), 5000, 'Cannot find movie title'
//         );
//         expect(await movieTitle.getText()).toContain('');
//     });
// });

describe('Waits', () => {
    beforeEach(async () => {
        await browser.manage().timeouts().implicitlyWait(0)
    })
    
    it('implicit wait should wait for element to be present', async () => {
        // 'implicit wait' waits for element presence
        await browser.manage().timeouts().implicitlyWait(10000)
        await browser.waitForAngularEnabled(false)
        await browser.get('https://the-internet.herokuapp.com/dynamic_loading/2')
        await $('#start button').click()
        // 10 sec waiting
        console.log(await $('#finish h4').getText())
    })
    
    it('explicit wait should wait for element to be present', async () => {
        // await browser.manage().timeouts().implicitlyWait(10000)
        await browser.waitForAngularEnabled(false)
        await browser.get('https://the-internet.herokuapp.com/dynamic_loading/2')
        await $('#start button').click()
        // 20 sec waiting
        let i = 0
        await browser.wait(async () => {
            console.log('Doing searc', i)
            i++
            return await $('#finish h4').isPresent()
        }, 20000, 'result should appear in 20 seconds, but it does not')
        console.log(await $('#finish h4').getText())
    })

    //-------Expected conditions------

    var EC = protractor.ExpectedConditions;

    it('explicit wait should wait for element to be didplayed', async () => {
        // await browser.manage().timeouts().implicitlyWait(10000)
        await browser.waitForAngularEnabled(false)
        await browser.get('https://the-internet.herokuapp.com/dynamic_loading/2')
        await $('#start button').click()
        // 20 sec waiting
        await browser.wait(EC.visibilityOf($('#finish h4')), 20000, 'result should appear in 20 seconds, but it does not')
        console.log(await $('#finish h4').getText())
    })

    it('explicit wait should wait for element to be didplayed', async () => {
        // await browser.manage().timeouts().implicitlyWait(10000)
        await browser.waitForAngularEnabled(false)
        await browser.get('https://the-internet.herokuapp.com/dynamic_loading/2')
        await $('#start button').click()
        // 20 sec waiting
        await browser.wait(EC.and(
            EC.visibilityOf($('#finish h4')),
            EC.invisibilityOf($('#loading'))
        ), 20000, 'result should appear in 20 seconds, but it does not')
        console.log(await $('#finish h4').getText())
    })

    it('explicit wait should wait for element to be didplayed', async () => {
        // await browser.manage().timeouts().implicitlyWait(10000)
        await browser.waitForAngularEnabled(false)
        await browser.get('https://the-internet.herokuapp.com/dynamic_loading/2')
        await $('#start button').click()
        // 20 sec waiting
        await browser.wait(EC.or(
            EC.visibilityOf($('#finish h4')),
            // Same as previous example - vaiting for invisibility
            EC.not(EC.visibilityOf($('#loading')))
        ), 20000, 'result should appear in 20 seconds, but it does not')

        // Extended usage (example for future)
        // await browser.wait(EC.not(purchaseIsCompletedSuccessfully), 20000)
        console.log(await $('#finish h4').getText())
    })

    it('explicit wait should iteract with implicit wait very strange', async () => {
        await browser.manage().timeouts().implicitlyWait(9000)
        await browser.waitForAngularEnabled(false)
        await browser.get('https://the-internet.herokuapp.com/dynamic_loading/2')
        // await $('#start button').click()
        // 20 sec waiting
        let i = 0
        await browser.wait(async () => {
            console.log(i)
            i++
            return EC.visibilityOf($('#finish h4'))()
            // Dirty hack abow
        },
        20000, 'result should appear in 20 seconds, but it does not')
    })
})

describe('Movie details', () => {
    it('should have movie name as header', async () => {
        const movieTitle = element(by.xpath('//div[2]/movies/div[2]/div[1]/movie-card//a[@title]'));
        const pageTitle = element(by.css(`[class='col-md-8'] h2`));
        await browser.get('http://movies-finder.firebaseapp.com/');
        await browser.wait(async () => 
            await movieTitle.isPresent() && await movieTitle.isDisplayed(), 5000, 'Cannot find element'
        );
        const savedTitle = await movieTitle.getText();
        await movieTitle.click();
        await browser.wait(async () =>
            await pageTitle.isPresent(), 5000, 'Element is not present => Appropriate page is not downloaded'
        );
        expect(await pageTitle.getText()).toContain(savedTitle);
    })

    it('should have rating', async () => {

    })

    it('should have similar movie block with at least one movie', async () => {
        
    })

    describe('cast block', () => {
        it('should show at least one actor', async () => {

        })
    })

    describe('reviews block', () => {
        beforeEach(async () => {
            const movieTitle = element(by.xpath('//div[2]/movies/div[2]/div[1]/movie-card//a[@title]'));
            const pageTitle = element(by.css(`[class='col-md-8'] h2`));
            await browser.get('http://movies-finder.firebaseapp.com/');
            await browser.wait(async () => 
                await movieTitle.isPresent() && await movieTitle.isDisplayed(), 5000, 'Cannot find element'
            );
            await movieTitle.click();
            await browser.wait(async () =>
                await pageTitle.isPresent(), 5000, 'Element is not present => Appropriate page is not downloaded'
            );
        })
        
        it('should be at least one review', async () => {
            expect(await $('cite').getText()).toContain(savedTitle);
        })

        fit('should have reviewer name as link to source', async () => {
            
            // xpath
            //app-root/div/div[@class='row']/div[2]/app-movie//cite[@title='futuretv']/a[@href='https://www.themoviedb.org/review/5346fa840e0a265ffa001e20']
            //cite[@title='futuretv']/a
            //cite
            console.log(await $('cite').getText())

            // const reviewer = await $('cite').getText()
            // await $('cite').click()
            // await browser.wait(async () => {
            //     await
            // })
            
        })
    })

    describe('Popular series', () => {
        it('should not have search bar', async () => {

        })

        it('should have "First Air Date" instead "Release Date"', async () => {

        })
    })
})