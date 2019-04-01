// For Type Script

describe('Model Pattern', () => {
    // interface IMovie {
    //     title: string,
    //     rating: number,
    //     cast: {
    //         img: string
    //         name: string
    //     }[]
    // }

    // class Movie implements IMovie {
    //     public readonly title: string = null
    //     public readonly rating: number = null
    //     public cast: {img:string, name:string}[] = []

    //     setTitle(title:string) {
    //         this.title = title
    //     }
    //     setRating(rating:number) {
    //         this.rating = rating
    //     }
    //     pushToCast(actor:{img:string, name:string}) {
    //         this.cast.push(actor)
    //     }
    // };

    // it('can be created for data from page', async () => {
    //     await browser.get('https://movies-finder.firebaseapp.com/movie/278');
    //     await browser.sleep(1500);
        
    //     let movieModel = new Movie()

    //     let rating = await($('.app-movie .row .col-md-8 h2 .label'))
    //     movieModel.setRating(parseFloat(rating))

    //     let casts = await($$('.app-movie .row .col-md-3 .thumbnail'))
    //     await Promise.all(casts.map(async function(elem) {
    //         let imgLink = await elem.$('img').getAttribute('src')
    //         let name = await elem.$('a').getText('')
    //         await movieModel.pushToCast({img: imgLink, name: name})
    //     }));
        
    //     console.log('Model is', JSON.stringify(movieModel))
    // });
})