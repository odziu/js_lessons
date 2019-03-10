// Do not need this:
// import {browser, element, By, $, $$, Key} from 'protractor'

// describe('Protractor searching', () => {
//     it('should calculate the sum of two numbers', async () => {
//         await browser.get('');
// 		let a = element.all(By.css('movie-card')).first();
// 	});
// });

describe('browserName', function () {
    it('can open URLs', async function () {
        //await browser.waitForAngularEnabled(false)
        await browser.get('http://movies-finder.firebaseapp.com/')

        console.time('sleep')
        await browser.sleep(5000)
        console.timeEnd('sleep')
    });
    
    it('can fork new driver instance', async function () {
        //await browser.waitForAngularEnabled(false)
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

describe('Protractor searching', () => {
    it('should calculate the sum of two numbers', async () => {
        await browser.get('http://movies-finder.firebaseapp.com/');
 	});
});


describe('Element finder', function () {
    it('can be clicked', async function () {
        await browser.waitForAngularEnabled(false)
        await browser.get('https://the-internet.herokuapp.com/checkboxes')
        // $$('[type="checkbox"]')
        await $('[type="checkbox"]').click()
        await browser.sleep(3000)
    });
    
    it('can be checked for display', async function () {
        await browser.waitForAngularEnabled(false)
        await browser.get('https://the-internet.herokuapp.com/checkboxes')
        await console.log(await $('NOT_EXISTING_ELEMENT').isDisplayed().then(null, err => false))
        await browser.sleep(3000)
    });
    
    it('can be checked for presence', async function () {
        await browser.waitForAngularEnabled(false)
        await browser.get('https://the-internet.herokuapp.com/checkboxes')
        await console.log(await $('NOT_EXISTING_ELEMENT').isPresent())
        await browser.sleep(3000)
    });
    
    it('can send keys into it', async function () {
        // Key does not work
        await browser.waitForAngularEnabled(false)
        await browser.get('https://the-internet.herokuapp.com/login')
        await $('#username').sendKeys('abc')
        // await $('#usrrname').submit()
        await browser.sleep(15000)
    });
    
    it('can work with ElementArrayFinder', async function () {
        await browser.waitForAngularEnabled(false)
        await browser.get('https://the-internet.herokuapp.com/checkboxes')
        
        // Returns array with all selected statuses of found elements
        console.log(await $$('[type="checkbox"]').isSelected())
        await browser.sleep(3000)
    });

    it('can work with ElementArrayFinder', async function () {
        await browser.waitForAngularEnabled(false)
        await browser.get('https://the-internet.herokuapp.com/checkboxes')
        
        // Returns number of found elements
        console.log(await $$('[type="checkbox"]').count())

        console.log(await $$('[type="checkbox"]').each(async (elem, index)=> {
            console.log(elem.isSelected(), 'INDEX:', index)
            if(!(await elem.isSelected())) {
                await elem.click()
            }
            console.log(elem.isSelected(), 'INDEX:', index)
        }))
    });

    it('can work with ElementArrayFinder', async function () {
        await browser.waitForAngularEnabled(false)
        await browser.get('https://the-internet.herokuapp.com/checkboxes')
        
        // Returns number of found elements
        console.log(await $$('[type="checkbox"]').count())

        console.log(await $$('[type="checkbox"]').map(async (elem, index)=> {
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

describe('Expect', function () {
    it('should assert something', function () {
        expect('HELLO WORLD').toContain('WORLD')
        expect('HELLO WORLD').toContain('TAM')
    })
});

describe('Movie card', async () => {
    it('should have name', async () => {

    });

    it('should have "rating" pointer', async () => {

    });

    it('should open appropriate "movie details" page, after click on "name" field', async () => {

    });
});
