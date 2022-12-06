import useSortPrice from "./useSortPrice";

describe('Should test useSortPrice hook', ()=>{
    const products = [
        {price:2},
        {price:1},
        {price:3},
    ]

    test('Should return highest numbers first', ()=>{
        expect(useSortPrice('highestPrice', products)).toStrictEqual([{price:3}, {price:2}, {price:1}])
    })
    test('Should return lowest numbers first', ()=>{
        expect(useSortPrice('lowestPrice', products)).toStrictEqual([{price:1}, {price:2}, {price:3}])
    })
    test('Should return initial order', ()=>{
        expect(useSortPrice('', products)).toStrictEqual(products)
    })
})