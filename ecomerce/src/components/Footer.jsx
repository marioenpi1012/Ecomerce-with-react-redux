import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion/dist/framer-motion'
import Style from '../style/Footer.module.scss';
const Footer = () => {
    return (
        <div className={Style.Footer}>
            <div className={Style.container}>
                <div className={Style.logo}>
                    <NavLink to='/'>Narvick's Luxury Store</NavLink>
                </div>
                <div className={Style.links}>
                    <div className={Style.navLinks} >
                        <NavLink to='/' >Home</NavLink>
                        <NavLink to='/shop'>Shop </NavLink>
                        <NavLink to='/about' >About </NavLink>
                        <NavLink to='/contact' >Contact </NavLink>
                    </div>
                    <div className={Style.infoLinks} >
                        <ul>
                            <li>FAQ</li>
                            <li>Shipping & Returns</li>
                            <li>Store Policy</li>
                        </ul>
                    </div>
                    <div className={Style.socialLinks}>
                        <ul>
                            <li>Instagram</li>
                            <li>Facebook</li>
                        </ul>
                    </div>
                </div>
                <div className={Style.join}>
                    <div className={Style.header}>Join Us!</div>
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