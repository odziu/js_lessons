// Do not need this:
// import {browser, element, By, $, $$} from 'protractor'

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
    
    fit('can switch to iframe', async () => {
        await browser.waitForAngularEnabled(false)
        await browser.get('http://the-internet.herokuapp.com/iframe')
        let iframe = $('#mce_0_ifr')
        // BUG - test stops when passing ElementFinder into .frame()
        // await browser.switchTo().frame(iframe)
        await browser.switchTo().frame(iframe.getWebElement())
        //console.log(await $('body#tinymce').getText())

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





// describe('Element finder', function () {
//     it('can be clicked', function () {
//         browser
// 	});
// });
