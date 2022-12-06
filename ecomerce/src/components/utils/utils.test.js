import  { maxPrice } from './utils'

describe('Should test maxPrice', ()=>{
    const products = [
        {
            price:10
        },{
            price:100,
        }, {
            price:20,
        },{
            price:15
        }
    ]
    test('Should return the highest price of the products array', ()=>{
        expect(maxPrice(products)).toBe(100)
    })
    test('Should return max number rounded up to the nearest hundreds', ()=>{
        products.push({price:199})
        expect(maxPrice(products)).toBe(200)
    })
})
