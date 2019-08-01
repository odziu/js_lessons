
// Lesson 9
describe('execute script', function () {
    it('can return something', async () => {
        await browser.get('http://movies-finder.firebaseapp.com/movie/19404');
        await browser.sleep(2000);

        let text = await browser.executeScript(() => {
            return $('app-movie > div:nth-child(1) > div.col-md-8 > h2').text().trim()
            .replace($('app-movie > div:nth-child(1) > div.col-md-8 > h2 small').text().trim(), '')
        })
        
        console.log('Got text by js: ', text);
    });

    it('can return something', async () => {
        await browser.get('http://movies-finder.firebaseapp.com/movie/19404');
        await browser.sleep(2000);

        let text = await browser.executeAsyncScript(`
            var callback = arguments[arguments.length - 1]    
            window.setTimeout(function () {callback('Hello world')}, 500);
        `)
        
        console.log('Got text by js: ', text);
    });

    it('can return something', async () => {
        await browser.get('http://movies-finder.firebaseapp.com/');
        await browser.sleep(2000);

        let a = element('buttonTextOWN', `var buttons = document buttons.forEach(but=> 
            if(but.innerText.includes('Go!)) {
                return but
            }
        })`);
        
        By.addLocator(By.js(`var buttons = document buttons.forEach(but=> 
            if(but.innerText.includes('Go!)) {
                return but
        })`));
        
        let b = element(By['buttonTextOWN'])

        console.log('Got text by js: ', b);
        await browser.sleep(2000);
    });

    it('can send some HTTP request from page', async () => {

    });

    it('can accept arguments', async () => {
        await browser.get('http://movies-finder.firebaseapp.com/movie/19404');
        await browser.sleep(2000);

        let text = await browser.executeScript(`
            console.log(arguments[0]);
            console.log(arguments[1]);
            console.log('BODY:', arguments[2]);
            return arguments[0] + ' ' + arguments[1]
        `, 'hello', 'world', $('body'));
        
        console.log('Got text by js: ', text);
        await browser.sleep(2000);
    });
})