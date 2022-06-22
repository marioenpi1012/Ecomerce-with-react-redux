import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion/dist/framer-motion'
const Footer = () => {
    return (
        <div className='Footer'>
            <div className="container">
                <div className="logo">
                    <NavLink to='/'>Narvick's Luxury Store</NavLink>
                </div>
                <div className="links">
                    <div className="nav-links" >
                        <NavLink to='/' >Home</NavLink>
                        <NavLink to='/shop'>Shop </NavLink>
                        <NavLink to='/about' >About </NavLink>
                        <NavLink to='/contact' >Contact </NavLink>
                    </div>
                    <div className="info-links" >
                        <ul>
                            <li>FAQ</li>
                            <li>Shipping & Returns</li>
                            <li>Store Policy</li>
                        </ul>
                    </div>
                    <div className="social-links">
                        <ul>
                            <li>Instagram</li>
                            <li>Facebook</li>
                        </ul>
                    </div>
                </div>
                <div className="join">
                    <div className="header">Join Us!</div>
                        <form action="">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" />
                            <motion.input 
                                type="submit" 
                                value='Submit'
                                whileHover={{scale:1.1}}
                                whileTap={{scale:0.90}}
                                />
                        </form>
                </div>
            </div>
        </div>
    )
}

export default Footer