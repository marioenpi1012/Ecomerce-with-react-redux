import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
const Nav = () => {
    const items = useSelector(state => state.cart.itemsInCart)
    return (
            <div className='Nav'>
                <div className="logo">
                    <NavLink to='' >Narvick's Luxury Store</NavLink>
                </div>
                <div className="links">
                    <NavLink to='/shop'>Shop</NavLink>
                    <NavLink to='/about' >About</NavLink>
                    <NavLink to='/contact' >Contact</NavLink>
                    
                    
                </div>
                <div className="cart">
                    <NavLink to='/cart'><FaShoppingCart/> </NavLink>
                    <span>{items}</span>
                </div>
            </div>
    )
}

export default Nav
