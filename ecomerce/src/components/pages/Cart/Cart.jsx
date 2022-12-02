    import React, {useEffect, useState} from 'react'
    import {useDispatch, useSelector} from 'react-redux'
    import {Link, useLocation} from 'react-router-dom'
    import {motion, AnimatePresence, usePresence} from 'framer-motion'
    import {totalPrice} from '../../../hooks/getPrice/getPrice'
    import Style from './Cart.module.scss'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../../redux'
    const Cart = () => {
    const products = useSelector(state => state.cart.cart)
    const total = useSelector(state => state.cart.total)
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const location = useLocation()
    const [loaded, setLoaded] = useState(false)
    const [isPresent, safeToRemove] = usePresence()
    const { removedFromCart, changeQty } = bindActionCreators(actionCreators,dispatch)
    useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 1000)
    if (document.readyState === 'complete') {
        console.log(location.pathname)
        setLoaded(true)
    }
    }, [isPresent])
    const variants = {
    hidden: {
        y: -50,
        opacity: 0,
        transition: {
            y: {
                stiffness: 1000
            }
        }
    },
    start: {
        y: 0,
        opacity: 1,
        transition: {
            y: {
                stiffness: 1000,
                velocity: -100
            }
        }
    },
    end: {
        y: -50,
        opacity: 0,
        transition: {
            y: {
                stiffness: 1000,
                velocity: -100
            },
        }
    }
    }
    const itemsVariants = {
    start: {
        transition: {
            staggerChildren: 0.07,
            delayChildren: .90
        }
    },
    end: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        }
    }
    }
    const containerVariants = {
    hidden: {
        opacity: 0,
        x: "100vw"
    },
    start: {
        opacity: 1,
        x: 0,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.4,
            duration:1,
        }
    },
    end: {
        x: "-100vw",
        transition: {
            ease: "easeInOut",
            when: "afterChildren",
            delay: 1,
            delayChildren: 0.5
        }
    }
    }

    return (

    <motion.div
        className={Style.Cart}
        key='Cart'
        variants={containerVariants}
        initial="hidden"
        animate="start"
        exit="end">
        {
            products.length > 0
                ? (
                    <div className={Style.container}>
                        <div className={Style.labels}>
                            <div className={Style.title}>Title</div>
                            <div className={Style.quantity}>Quantity</div>
                            <div className={Style.price}>Price</div>
                        </div>
                            <motion.div
                                key="itemsAnimation"
                                id="itemsAnimation"
                                className={Style.items}
                                variants={itemsVariants}
                                transition={{
                                    opacity: {
                                        duration: 0.2
                                    }
                                }}
                                initial="hidden"
                                animate="start"
                                exit="end"
                                >
                                {
                                    products.map(product => (
                                        <motion.div className={Style.item} 
                                            key={product.id} 
                                            variants={variants}
                                            >
                                            <div className={Style.remove}>
                                                <input
                                                    type="button"
                                                    value="X"
                                                    onClick={() => dispatch(removedFromCart(product.id))}/>
                                            </div>
                                            <div className={Style.info}>
                                                <div className={Style.image}>
                                                    <img src={product.image} alt=""/>
                                                </div>
                                                <div className={Style.title}>{product.title}</div>
                                            </div>
                                            <div className={Style.qty}>
                                                <input
                                                    type="number"
                                                    name="qty"
                                                    min='1'
                                                    max='100'
                                                    id="qty"
                                                    defaultValue={product.qty}
                                                    data-id={product.id}
                                                    onChange={() => dispatch(changeQty(product.id))}/>
                                            </div>
                                            <div className={Style.price}>${(product.price).toFixed(2)}</div>
                                        </motion.div>
                                    ))
                                }
                                <div className={Style.subtotal}>Subtotal: {totalPrice(products)}
                                </div>
                                <div className={Style.checkout}>
                                    <motion.input 
                                        className={Style.checkoutBtn} 
                                        type="button" 
                                        value='checkout'
                                        whileHover={{scale:1.1}}
                                        whileTap={{scale:0.9}}
                                        />
                                </div>
                            </motion.div>
                    </div>
                )
                : (
                    <div className={Style.msg}>The cart is empty, continue 
                        <Link to='/shop'>Shopping</Link>.</div>
                )
        }

    </motion.div>
    )
    }
    export default Cart
