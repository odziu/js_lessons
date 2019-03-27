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