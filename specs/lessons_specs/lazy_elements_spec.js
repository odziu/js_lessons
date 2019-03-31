describe('Lazy Elements', () => {
    let goneMessage =  element(by.cssContainingText('p#message', `It's gone!`));
    let button = $('#checkbox-example [autocomplete]');
    var EC = protractor.ExpectedConditions;

    it('should not be searced if no manipulations', async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('https://the-internet.herokuapp.com/dynamic_controls');

        try {
            console.log('Got text: ', await goneMessage.getText());
        } catch (error) {
            console.log(error.message);
        }
        
        await button.click();
        await browser.wait(EC.visibilityOf(goneMessage), 10000);
        try {
            console.log('Got text: ', await goneMessage.getText());
        } catch (error) {
            console.log(error.message);
        }
    });
})