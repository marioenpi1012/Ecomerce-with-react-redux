import { totalPrice, total } from "../getPrice";

test('Should return x * y',()=>{
    expect(total(2,15.99)).toBe(31.98)
})

test('Should return the total price with "$"', ()=>{
    const products = [{qty:2,price:150}]
    expect(totalPrice(products)).toBe('$300.00')
})