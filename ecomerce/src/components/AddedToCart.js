import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { totalPrice } from './getPrice'
import { itemsInCart } from './itemsInCart'
import { motion } from 'framer-motion/dist/framer-motion'
export const items = () =>{
    return true
}
const AddedToCart = ({item, added, setAdded}) => {
    const cartItems = useSelector(state=>state.cart.itemsInCart)
    const products = useSelector(state => state.cart.cart)
    const returnToViewing = ()=>{
        setAdded(!added);
        
    }
    return (
        <div className="cartPreview" style={added ?{display:'block'}:{display:'none'}}>
            <div className="titles">
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
                    <div className="added-item-info">
                        <div className="added-item-qty">QTY: {(item.qty)}</div>
                        <div className="added-item-price">${(item.price)}</div>
                    </div>
                </div>
            </div>
            <div className="cart-container">
                <div className="cart-info">
                    Cart Subtotal ({itemsInCart(products)} {itemsInCart(products) <2 ? 'item' : 'items'}): {totalPrice(products)}
                </div>
                <NavLink to='/cart'>
                    <motion.input 
                        type="button" 
                        value="Go to Cart"
                        whileHover={{scale:1.1}}
                        whileTap={{scale:0.9}}
                        />
                </NavLink>
            </div>
        </div>
    )
}

export default AddedToCart
