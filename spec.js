describe('Calculator', () => {
    it('should calculate the sum of two numbers', async () => {
        await browser.get('');
		await element(by.css('.ng-pristine .input-small.ng-valid:nth-of-type(1)')).sendKeys('10');
		await element(by.xpath('html//form/select/option[@value='SUBTRACTION'])).click();
		await element(by.xpath('html//form/input[2]')).sendKeys('3');
		await element(by.id('gobutton')).click();
		let subtraction = element(by.css('.ng-binding'));
		expect(await subtraction.getText()).toEqual('7');
		//await element(by.css('.ng-pristine .input-small.ng-valid:nth-of-type(1)')).sendKeys('10');
		//await element(by.xpath('html//form/input[2]')).sendKeys('2');
		//await element(by.id('gobutton')).click();
		//let guru= element(by.css('.ng-binding'));
		//expect(await guru.getText()).toEqual('12');
	});
});