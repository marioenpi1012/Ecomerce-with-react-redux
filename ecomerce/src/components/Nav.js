import { useState } from 'react'
import {FaShoppingCart, FaBars} from 'react-icons/fa'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { itemsInCart } from './itemsInCart'
const Nav = () => {
    const [navOpened, setNavOpened] = useState(false)
    const cartData = useSelector(state => state.cart.cart)
    console.log(cartData)
    return (
            <div className='Nav'>
                <div className="logo">
                    <NavLink to='' >Narvick's Luxury Store</NavLink>
                </div>
                <div className="links" style={navOpened ? {display:"flex"} : {}}>
                        <NavLink to='/shop' activeClassName='current'>Shop</NavLink>
                        <NavLink to='/about' activeClassName='current' >About</NavLink>
                        <NavLink to='/contact' activeClassName='current'>Contact</NavLink>
                    </div>
                    
                <div className="menu" >
                    <div className="cart">
                        <NavLink to='/cart'><FaShoppingCart/> </NavLink>
                        <span>{itemsInCart(cartData)}</span>
                    </div>
                    <div className="burgerMenu" onClick={() => setNavOpened(!navOpened)}>
                        {navOpened ? (<div className='mobileMenu'>X</div>) 
                    : ( <FaBars  className='mobileMenu'/>)
                    }
                    </div>
                    
                </div>
                
            </div>
    )
}

export default Nav
