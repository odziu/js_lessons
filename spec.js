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
        await browser.get('http://movies-finder.firebaseapp.com/')
	});
});

// describe('Element finder', function () {
//     it('can be clicked', function () {
//         browser
// 	});
// });
