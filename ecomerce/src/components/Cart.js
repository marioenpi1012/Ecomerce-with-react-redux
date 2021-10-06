import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeQty, removedFromCart } from '../actions'

const Cart = () => {
    const products = useSelector(state => state.cart.cart)
    const total = useSelector(state => state.cart.total)
    const dispatch = useDispatch()
    console.log('cart',products)
    console.log('total', total.toFixed(2))
    return (
        <div className='Cart'>
            <div className="container">
                <div className="items">
                {products.map(product =>
                    (<div className="item" key={product.id}>
                        <div className="info">
                            <div className="remove">
                                <input type="button" value="X" onClick={()=>dispatch(removedFromCart(product.id))} />
                            </div>
                            <div className="image">
                                <img src={product.image} alt="" />
                            </div>
                            <div className="title">{product.title}</div>
                        </div>
                        <div className="qty">
                            <input 
                            type="number" 
                            name="qty"  
                            min='1' max='100' 
                            id="qty" 
                            defaultValue={product.qty}
                            onChange={()=>dispatch(changeQty(product.id))}
                            />
                        </div>
                        <div className="price">${product.price}</div>
                    </div>)
                )}
                    
                    <div className="subtotal">Subtotal: ${total.toFixed(2)}</div>
                    <div className="checkout">
                        <input type="button" value='checkout' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
