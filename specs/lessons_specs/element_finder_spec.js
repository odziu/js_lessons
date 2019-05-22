// +++++++ Video #??? +++++++ 
describe('Element finder', () => {
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false)
    });

    it('can be clicked', async () => {
        await browser.get('https://the-internet.herokuapp.com/checkboxes')
        // $$('[type="checkbox"]')
        await $('[type="checkbox"]').click()
        await browser.sleep(3000)
    });
    
    it('can be checked for display', async () => {
        await browser.get('https://the-internet.herokuapp.com/checkboxes')
        await console.log(await $('NOT_EXISTING_ELEMENT').isDisplayed().then(null, err => false))
        await browser.sleep(3000)
    });
    
    it('can be checked for presence', async () => {
        await browser.get('https://the-internet.herokuapp.com/checkboxes')
        await console.log(await $('NOT_EXISTING_ELEMENT').isPresent())
        await browser.sleep(3000)
    });
    
    it('can send keys into it', async () => {
        // Key does not work
        await browser.get('https://the-internet.herokuapp.com/login')
        await $('#username').sendKeys('abc')
        // await $('#username').submit()
        await browser.sleep(15000)
    });
    
    it('can work with ElementArrayFinder', async () => {
        await browser.get('https://the-internet.herokuapp.com/checkboxes')
        
        // Returns array with all selected statuses of found elements
        console.log(await $$('[type="checkbox"]').isSelected())
        await browser.sleep(3000)
    });

    it('can work with ElementArrayFinder', async () => {
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