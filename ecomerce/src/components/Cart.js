import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeQty, removedFromCart } from '../actions'
import { NavLink } from 'react-router-dom'
import { totalPrice } from './getPrice'
const Cart = () => {
    const products = useSelector(state => state.cart.cart)
    const total = useSelector(state => state.cart.total)
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    console.log('cart',products)
    console.log('total', total.toFixed(2))

    console.log(totalPrice(products))
    
    return (
        <div className='Cart'>
            {products.length >0 ? (
            <div className="container">
                <div className="labels">
                    <div className="title">Title</div>
                    <div className="quantity">Quantity</div>
                    <div className="price">Price</div>
                </div>
                <div className="items">
                {products.map(product =>
                    (<div className="item" key={product.id}>
                    <div className="remove">
                                <input type="button" value="X" 
                                onClick={()=>dispatch(removedFromCart(product.id))}
                                />
                            </div>
                        <div className="info">
                            
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
                            data-id={product.id}
                            onChange={()=>dispatch(changeQty(product.id))}
                            />
                        </div>
                        <div className="price">${(product.price).toFixed(2)}</div>
                    </div>)
                )}
                    
                    <div className="subtotal">Subtotal: {totalPrice(products)} </div>
                    <div className="checkout">
                        <input type="button" value='checkout' />
                    </div>
                </div>
            </div>
        ):
    (<div>The cart is empty, continue <NavLink to='/shop'>Shopping</NavLink>.</div>)
    }

        </div>
    )
}
export default Cart
