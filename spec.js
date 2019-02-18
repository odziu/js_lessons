import {browser, element, By, $, $$} from 'protractor'

describe('Protractor searching', () => {
    it('should calculate the sum of two numbers', async () => {
        await browser.get('');
		let a = element.all(By.css('movie-card')).first();
	});
});
