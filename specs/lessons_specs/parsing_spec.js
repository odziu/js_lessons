class Counter {
    constructor() {
        this.innerC = 0
    }
    get c() {
        this.innerC = this.innerC + 1
        return this.innerC
    }
}

let counter = new Counter()

console.log(`${counter.c} - file parsing`)
describe('parent DESCRIBE block', () => {
    console.log(`${counter.c} - file parsing - reading content of describe block`)

    beforeAll(() => {
        console.log(`${counter.c} - beforeAll execution`)
    })

    beforeAll(() => {
        console.log(`${counter.c} - beforeAll execution - execution in declaration order`)
    })

    beforeEach(() => {
        console.log(`${counter.c} - beforeEach execution`)
    })

    beforeEach(() => {
        console.log(`${counter.c} - beforeEach execution - execution in declaration order`)
    })

    afterAll(() => {
        console.log(`${counter.c} - afterAll execution`)
    })

    afterEach(() => {
        console.log(`${counter.c} - afterEach execution`)
    })

    describe('Nested describe block', () => {
        console.log(`${counter.c} - file parsing - reading nested     content of describe block`)

        beforeEach(() => {
            console.log(`${counter.c} - Nested beforeEach executed`)
        })

        it('NESTED TEST', () => {
            console.log(`${counter.c} - NESTED TEST executed`)
        })
    })

    //  DATAPROVIDER
    let dataCollection = [1, 2, 3, 4, 5]
    dataCollection.map(data => {
        it(`${counter.c} TEST for ${data}`, () => {
            console.log(`TEST for ${data} executed!`)
        })
    })
})
console.log(`${counter.c} - file parsing finished`)