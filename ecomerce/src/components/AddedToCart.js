import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { totalPrice } from './getPrice'
import { itemsInCart } from './itemsInCart'
export const items = () =>{
    return true
}
const AddedToCart = ({item, added, setAdded}) => {
    const cartItems = useSelector(state=>state.cart.itemsInCart)
    const products = useSelector(state => state.cart.cart)
    const returnToViewing = ()=>{
        setAdded(!added)
    }
    return (
        <div className="cartPreview" style={added ?{display:'block'}:{display:'none'}}>
            <div className="titles">
                <div>Added To Cart</div>
                <div className="control-btn">
                    <NavLink to='/shop'>Continue Shopping</NavLink>
                    <NavLink to='/viewing' className="close" 
                    onClick={()=>returnToViewing()}>X</NavLink>
                </div>
            </div>
            <div className="container">
                <div className="added-item">
                    <div className="item-img">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="item-price">${(item.price)}</div>
                </div>
                <div className="cart-container">
                    <div className="cart-info">
                        Cart Subtotal ({itemsInCart(products)} {itemsInCart(products) <2 ? 'item' : 'items'}): {totalPrice(products)}
                    </div>
                    <NavLink to='/cart'>
                        <input type="button" value="Go to Cart" />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default AddedToCart
