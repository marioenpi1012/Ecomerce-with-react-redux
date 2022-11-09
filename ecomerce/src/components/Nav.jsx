import {useRef, useState} from 'react'
import {FaShoppingCart, FaBars} from 'react-icons/fa'
import { NavLink} from 'react-router-dom'
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
            if(navRef.current.clientHeight > yPos){
                setShouldShowActions(true)
            }else{
                setShouldShowActions(isScrollingUp)
            }
            setLastYPos(yPos)
        }
        window.addEventListener('scroll', handleScroll, false)
        return() => {
            window.removeEventListener('scroll', handleScroll, false)
        }

    }, [lastYpos])
    if (navOpened & window.innerWidth <= 769) {
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
            className={Style.Nav}
            ref={navRef}
            initial={[false, {opacity: 1}]}
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
            <div className={Style.logo}>
                <NavLink to=''>Narvick's Luxury Store</NavLink>
            </div>
            <motion.ul
                className={navOpened
                    ? `${Style.links} ${Style.open}`
                    : `${Style.links}`
                }
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
                    <NavLink to='/about' onClick={() => setNavOpened()} >about</NavLink>
                </motion.li>
                <motion.li
                    variants={variants}
                    whileHover={{
                        scale: 1.1
                    }}
                    whileTap={{
                        scale: 0.95
                    }}>
                    <NavLink to='/contact' onClick={() => setNavOpened()} >contact</NavLink>
                </motion.li>
            </motion.ul>
            <div
                className={navOpened
                    ? `${Style.menu} ${Style.open}`
                    : `${Style.menu}`
                    }
                >
                <motion.div 
                    className={Style.cart}
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}
                    data-items={itemsInCart(cartData)}
                    >
                    <NavLink to='/cart'><FaShoppingCart/>
                    </NavLink>
                </motion.div>
                <div className={Style.mobileMenu} onClick={() => setNavOpened()}>
                    <div className={Style.burgerMenu}></div>
                </div>
            </div>

        </motion.nav>
    )
}

export default Nav
