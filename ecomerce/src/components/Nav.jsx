import {useRef, useState} from 'react'
import {FaShoppingCart, FaBars} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {itemsInCart} from '../hooks/itemsInCart/itemsInCart'
import {motion, useCycle} from 'framer-motion'
import {useEffect} from 'react'
import Style from '../style/Nav.module.scss'
const Nav = () => {
    const [navOpened, setNavOpened] = useCycle(false, true)
    const cartData = useSelector(state => state.cart.cart)
    const body = document.querySelector('body')
    const [shouldShowAction, setShouldShowActions] = useState(true)
    const navRef = useRef()
    const [lastYpos, setLastYPos] = useState(0)
    useEffect(() => {
        const handleScroll = () => {
            const yPos = window.scrollY
            const isScrollingUp = yPos < lastYpos
            if (navRef.current.clientHeight > yPos) {
                setShouldShowActions(true)
            } else {
                setShouldShowActions(isScrollingUp)
            }
            setLastYPos(yPos)
        }
        window.addEventListener('scroll', handleScroll, false)
        return() => {
            window.removeEventListener('scroll', handleScroll, false)
        }

    }, [lastYpos])
    // navOpened ? body.style.overflowY = 'hidden' : body.style.overflowY = 'auto'
    if (navOpened & window.innerWidth <= 769) {
        body.style.overflow = 'hidden'
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
        <header>
            <motion.nav
                className={Style.Nav}
                ref={navRef}
                initial={[
                    false, {
                        opacity: 1
                    }
                ]}
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
                <motion.div
                    className={Style.container}
                    initial={[
                        false, {
                            opacity: 1
                        }
                    ]}
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
                    <ul
                        className={`${Style.links} ${Style.links__left}`}>
                        <li>
                            <NavLink to='/shop/men'>Men</NavLink>
                        </li>
                        <li>
                            <NavLink to="/shop/women">Women</NavLink>
                        </li>
                        <li>
                            <NavLink to="/shop/accessories">Accessories</NavLink>
                        </li>
                        <li>
                            <NavLink to="/shop/electronics">Electronics</NavLink>
                        </li>
                    </ul>
                    <div className={Style.logo}>
                        <NavLink to='/'>Narvick's Luxury Store</NavLink>
                    </div>
                    <div
                        className={navOpened
                            ? `${Style.menu} ${Style.open}`
                            : `${Style.menu}`}>
                        
                        <button 
                            className={Style.mobileMenu} 
                            onClick={() => setNavOpened()}
                            aria-controls='primary-navigation'
                            aria-expanded={navOpened ? true : false}
                            >
                            <span className={Style.visuallyHidden}>Menu</span>
                            <div className={Style.burgerMenu} aria-hidden='true'></div>
                        </button>
                    </div>
                    <motion.ul
                        id='primary-navigation'
                        className={navOpened
                            ? `${Style.links} ${Style.open}`
                            : `${Style.links} ${Style.links__right}`}
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
                                <NavLink to='/shop' onClick={() => setNavOpened()}>shop</NavLink>
                            
                        </motion.li>
                        <motion.li
                            variants={variants}
                            whileHover={{
                                scale: 1.1
                            }}
                            whileTap={{
                                scale: 0.95
                            }}>
                            <NavLink to='/about' onClick={() => setNavOpened()}>about</NavLink>
                        </motion.li>
                        <motion.li
                            variants={variants}
                            whileHover={{
                                scale: 1.1
                            }}
                            whileTap={{
                                scale: 0.95
                            }}>
                            <NavLink to='/contact' onClick={() => setNavOpened()}>contact</NavLink>
                        </motion.li>
                    </motion.ul>
                            <motion.div
                            className={Style.cart}
                            whileHover={{
                                scale: 1.1
                            }}
                            whileTap={{
                                scale: 0.9
                            }}
                            data-items={itemsInCart(cartData)}>
                            <NavLink to='/cart'><FaShoppingCart/>
                            </NavLink>
                        </motion.div>
                </motion.div>
            </motion.nav>

        </header>
    )
}

export default Nav
