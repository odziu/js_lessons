// let fs = require('fs');
// console.time('fileread');
// fs.readFile('./package.json',
//     'utf8',
//     (err, data) => {
//         if (err) throw err;
//         console.log(data); 
//     });

// console.timeEnd('fileread')

describe('ASYNC code', () => {
    it('can work with callbacks', () => {
        let fs = require('fs');
        console.time('fileread');
        fs.readFile('./package.json',
            'utf8',
            (err, data) => {
                if (err) throw err;
                console.log(data); 
        });
        console.timeEnd('fileread')
    });

    // it('can work with promises', () => {
    //     let fs = require('fs');
    //     console.time('fileread');
    //     let a = new.Promise((resolve, reject) => {
    //         fs.readFile('./package.json',
    //         'utf8',
    //         (err, data) => {
    //             if (err) { reject(err) };
    //             resolve(data) 
    //         });
    //     });
    //     console.log(a) // Promise {}
    //     // a.then((data) => {
    //     //     console.log(data)
    //     //     console.timeEnd('fileread')
    //     // }, console.log)
    //     a.then(console.log, console.log)
    //         .then(() => console.timeEnd('fileread'))
    // });

     
    fit('promises can be used for protractor synchronization', async () => {
        let a = element.all(by.css('movie-card')).first()
        let b = $('movie-card') // the same as element(by.css('movie-card'))
        let c = $$('movie-card').last()

        return browser.get('/')
            .then(() => {
                return a.getText().then((text) => {
                    console.log('1', text)
                })
            }).then(() => {
                return b.getText().then((text) => {
                    console.log('2', text)
                })
            }).then(() => {
                return c.getText().then((text) => {
                    console.log('3', text)
                })
            })

            
    })
});