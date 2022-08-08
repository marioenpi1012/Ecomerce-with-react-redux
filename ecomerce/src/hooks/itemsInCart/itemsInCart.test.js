import { itemsInCart } from "../itemsInCart";

test('Should return the total of items in the cart',()=>{
    const items = [{qty:5},{qty:5}]
    expect(itemsInCart(items)).toBe(10)
    const items2 = [{qty:0}]
    expect(itemsInCart(items2)).toBe(0)
})
