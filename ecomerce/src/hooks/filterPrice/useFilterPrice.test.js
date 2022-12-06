import useFilterPrice from "./useFilterPrice";

describe('Test useFilter hook', ()=>{
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
    let priceRange;
    test('Should return all products, when price range equals 0', ()=>{
        priceRange = 0;
        const filterProducts = useFilterPrice(priceRange, products)
        expect(filterProducts.length).toBe(products.length)
    })
    test('Should return all products, when price range less than 0', ()=>{
        priceRange = -1;
        const filterProducts = useFilterPrice(priceRange, products)
        expect(filterProducts.length).toBe(products.length)
    })
    test('Should return all products that are LESS THAN OR EQUAL to price range', ()=>{
        priceRange = 20;
        const filterProducts = useFilterPrice(priceRange, products);
        expect(filterProducts).toStrictEqual([{price:10}, {price:20}, {price:15}])
    })
    test('Should return all products, when price range EXCEEDS max product price', ()=>{
        priceRange = 500;
        const filterProducts = useFilterPrice(priceRange, products)
        expect(filterProducts.length).toBe(products.length)
    })

})