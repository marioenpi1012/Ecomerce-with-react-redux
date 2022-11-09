import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { totalPrice } from '../../hooks/getPrice/getPrice'
import { itemsInCart } from '../../hooks/itemsInCart/itemsInCart'
import { motion } from 'framer-motion/dist/framer-motion'
import Style from '../../style/AddedToCart.module.scss'
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
        <div className={Style.cartPreview} style={added ?{display:'block'}:{display:'none'}}>
            <div className={Style.titles}>
                <div className={Style.controlBtn}>
                    <NavLink to='/shop'>Continue Shopping</NavLink>
                    <NavLink to='/viewing' className={Style.close} 
                    onClick={()=>returnToViewing()}>X</NavLink>
                </div>
            </div>
            <div className={Style.container}>
                <div className={Style.addedItem}>
                    <div className={Style.itemImg}>
                        <img src={item.image} alt="" />
                    </div>
                    <div className={Style.addedItemInfo}>
                        <div className={Style.addedItemQty}>QTY: {(item.qty)}</div>
                        <div className={Style.addedItemPrice}>${(item.price)}</div>
                    </div>
                </div>
            </div>
            <div className={Style.cartContainer}>
                <div className={Style.cartInfo}>
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
