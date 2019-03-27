describe('Waits', () => {
    beforeEach(async () => {
        await browser.manage().timeouts().implicitlyWait(0)
    })
    
    it('implicit wait should wait for element to be present', async () => {
        // 'implicit wait' waits for element presence
        await browser.manage().timeouts().implicitlyWait(10000);
        await browser.waitForAngularEnabled(false);
        await browser.get('https://the-internet.herokuapp.com/dynamic_loading/2');
        await $('#start button').click();
        // 10 sec waiting
        console.log(await $('#finish h4').getText());
    })
    
    it('explicit wait should wait for element to be present', async () => {
        // await browser.manage().timeouts().implicitlyWait(10000)
        await browser.waitForAngularEnabled(false);
        await browser.get('https://the-internet.herokuapp.com/dynamic_loading/2');
        await $('#start button').click();
        // 20 sec waiting
        let i = 0
        await browser.wait(async () => {
            console.log('Doing searc', i)
            i++
            return await $('#finish h4').isPresent()
        }, 20000, 'result should appear in 20 seconds, but it does not');
        console.log(await $('#finish h4').getText());
    })


    //-------Expected conditions------
    var EC = protractor.ExpectedConditions;

    it('explicit wait should wait for element to be didplayed', async () => {
        // await browser.manage().timeouts().implicitlyWait(10000)
        await browser.waitForAngularEnabled(false);
        await browser.get('https://the-internet.herokuapp.com/dynamic_loading/2');
        await $('#start button').click();
        // 20 sec waiting
        await browser.wait(EC.visibilityOf($('#finish h4')), 20000, 'result should appear in 20 seconds, but it does not');
        console.log(await $('#finish h4').getText());
    })

    it('explicit wait should wait for element to be didplayed', async () => {
        // await browser.manage().timeouts().implicitlyWait(10000)
        await browser.waitForAngularEnabled(false);
        await browser.get('https://the-internet.herokuapp.com/dynamic_loading/2');
        await $('#start button').click();
        // 20 sec waiting
        await browser.wait(EC.and(
            EC.visibilityOf($('#finish h4')),
            EC.invisibilityOf($('#loading'))
        ), 20000, 'result should appear in 20 seconds, but it does not');
        console.log(await $('#finish h4').getText());
    })

    it('explicit wait should wait for element to be didplayed', async () => {
        // await browser.manage().timeouts().implicitlyWait(10000)
        await browser.waitForAngularEnabled(false);
        await browser.get('https://the-internet.herokuapp.com/dynamic_loading/2');
        await $('#start button').click();
        // 20 sec waiting
        await browser.wait(EC.or(
            EC.visibilityOf($('#finish h4')),
            // Same as previous example - vaiting for invisibility
            EC.not(EC.visibilityOf($('#loading')))
        ), 20000, 'result should appear in 20 seconds, but it does not');

        // Extended usage (example for future)
        // await browser.wait(EC.not(purchaseIsCompletedSuccessfully), 20000)
        console.log(await $('#finish h4').getText());
    })

    it('explicit wait should iteract with implicit wait very strange', async () => {
        await browser.manage().timeouts().implicitlyWait(9000);
        await browser.waitForAngularEnabled(false);
        await browser.get('https://the-internet.herokuapp.com/dynamic_loading/2');
        // await $('#start button').click()
        // 20 sec waiting
        let i = 0
        await browser.wait(async () => {
            console.log(i)
            i++
            return EC.visibilityOf($('#finish h4'))();
            // Dirty hack above
        },
        20000, 'result should appear in 20 seconds, but it does not');
    })
})