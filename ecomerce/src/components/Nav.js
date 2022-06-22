import {useState} from 'react'
import {FaShoppingCart, FaBars} from 'react-icons/fa'
import {BrowserRouter as Router, NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {itemsInCart} from './itemsInCart'
import {motion, useCycle} from 'framer-motion/dist/framer-motion'
import {useEffect} from 'react'
const Nav = () => {
    const [navOpened, setNavOpened] = useCycle(false, true)
    const cartData = useSelector(state => state.cart.cart)
    const body = document.querySelector('body')
    const [shouldShowAction, setShouldShowActions] = useState(true)
    const [lastYpos, setLastYPos] = useState(0)
    useEffect(() => {
        const handleScroll = () => {
            const yPos = window.scrollY
            const isScrollingUp = yPos < lastYpos
            setShouldShowActions(isScrollingUp)
            setLastYPos(yPos)
        }
        window.addEventListener('scroll', handleScroll, false)
        return() => {
            window.removeEventListener('scroll', handleScroll, false)
        }
    }, [lastYpos])
    if (navOpened) {
        body.style.overflowY = 'hidden'
    } else {
        body.style.overflowY = 'auto'
    }
    const variants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                y: {
                    stiffness: 1000,
                    velocity: -100
                }
            }
        },
        closed: {
            y: 50,
            opacity: 0,
            transition: {
                y: {
                    stiffness: 1000
                }
            }
        }
    }
    const ulVariants = {
        open: {
            transition: {
                staggerChildren: 0.07,
                delayChildren: 0.90
            }
        },
        closed: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            },
            opacity: shouldShowAction
                ? 1
                : 0
        }
    }

    return (
        <motion.nav
            className='Nav'
            initial={false, {opacity: 1}}
            animate={{
                opacity: shouldShowAction
                    ? 1
                    : 0
            }}
            transition={{
                opacity: {
                    duration: 0.2
                }
            }}>
            <div className="logo">
                <NavLink to=''>Narvick's Luxury Store</NavLink>
            </div>
            <motion.ul
                className={navOpened
                    ? "links open"
                    : "links"}
                variants={ulVariants}
                animate={navOpened
                    ? "open"
                    : "closed"}>
                <motion.li
                    variants={variants}
                    whileHover={{
                        scale: 1.1
                    }}
                    whileTap={{
                        scale: 0.95
                    }}>
                    <NavLink to='/shop' onClick={() => setNavOpened()} activeClassName="current">shop</NavLink>
                </motion.li>
                <motion.li
                    variants={variants}
                    whileHover={{
                        scale: 1.1
                    }}
                    whileTap={{
                        scale: 0.95
                    }}>
                    <NavLink to='/about' onClick={() => setNavOpened()} activeClassName="current">about</NavLink>
                </motion.li>
                <motion.li
                    variants={variants}
                    whileHover={{
                        scale: 1.1
                    }}
                    whileTap={{
                        scale: 0.95
                    }}>
                    <NavLink to='/contact' onClick={() => setNavOpened()} activeClassName="current">contact</NavLink>
                </motion.li>
            </motion.ul>
            <div
                className={navOpened
                    ? "menu open"
                    : "menu"}>
                <motion.div 
                    className="cart"
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}
                    >
                    <NavLink to='/cart'><FaShoppingCart/>
                    </NavLink>
                    <span>{itemsInCart(cartData)}</span>
                </motion.div>
                <div className="mobileMenu" onClick={() => setNavOpened()}>
                    <div className="burgerMenu"></div>
                </div>

            </div>

        </motion.nav>
    )
}

export default Nav
