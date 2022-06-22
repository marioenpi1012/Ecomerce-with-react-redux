import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {NavLink, useHistory, useLocation} from 'react-router-dom'
import {addedToCart} from '../actions'
import AddedToCart from './AddedToCart'
import {motion, AnimatePresence} from 'framer-motion/dist/framer-motion'
import {useEffect} from 'react'
const SelectedProduct = () => {
    const selectedProduct = useSelector(state => state.cart.viewing)
    const productViewingFromCart = useSelector(state => state.cart.cart)
    const updatedQty = productViewingFromCart.find(
        product => product.id === selectedProduct.id
    )
    const [qty, setQty] = useState("1")
    const location = useLocation()
    const prevLocation = location
        ?.state
            ?.prevPath
    const dispatch = useDispatch()
    // False if the item hasn't been added to cart; and true if it has
    const [added, setAdded] = useState(false)

    const addedBtn = (id) => {
        dispatch(addedToCart(id))
        setAdded(!added)

        //After 5 seconds the added variable becomes false
        setTimeout(() => {
            setAdded(added)
        }, 3000);
    }
    const onChange = (e) => {
        setQty(e.target.value)
    }
    const containerVariants = {
        hidden: {
            backgroundColor: "#ffffff",
        },
        start: {
            transition: {
                type: "spring",
                stiffness: 300,
                mass: 0.4,
                damping: 8,
                when: "beforeChildren",
            }
        },
        exit: {
            backgroundColor: "#ffffff",
            transition: {
                ease: "easeIn",
            }
        }
    }
    const itemsVariants = {
        hidden: {
            opacity: 0
        },
        start: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren:0.07
            }
        },
        end: {
            transition: {
                staggerChildren:0.05,
                stagerDirection:-1
            }
        }
    }
    const itemVariants = {
        hidden: {
            x: "100vw",
            opacity:0
        },
        start: {
            x: 0,
            opacity:1,
            transition: {
                type: "spring",
                stiffness: 100,
            }
        },
        end: {
            x: "100vw",
            opacity: 0,
            
        }
    }
    return (
        <motion.div
            className='SelectedProduct'
            variants={containerVariants}
            exit="exit">
            <motion.div 
                className="close"
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                >
                <NavLink to={prevLocation}>X</NavLink>
            </motion.div>
            <motion.div
                className="container"
                id="container"
                style={added
                    ? {
                        filter: "blur(1px)"
                    }
                    : {}}
                variants={itemsVariants}
                
                exit='end'>
                <motion.div
                    className="image"
                    variants={itemVariants}
                    initial="hidden"
                    animate="start"
                    exit="end"
                    >
                    <img src={selectedProduct.image} alt="image"/>
                </motion.div>
                <motion.div 
                    className="item-info"
                    variants={itemVariants}
                    initial="hidden"
                    animate="start"
                    exit="end"
                    >
                    <div className="title">{selectedProduct.title}</div>
                    <div className="price">${selectedProduct.price}</div>
                    <div className="description">{selectedProduct.description}</div>
                    <div className="qty">
                        <input
                            type="number"
                            name="add-qty"
                            value={updatedQty
                                ? updatedQty.qty
                                : qty }
                            onChange={(e) => onChange(e)}
                            id="add-qty"
                            min='1'/>
                    </div>
                    <motion.input
                        type="submit"
                        value='Add To Cart'
                        className="add-to-cart"
                        onClick={() => addedBtn(selectedProduct.id)}
                        whileHover={{
                            scale: 1.1
                        }}
                        whileTap={{
                            scale: 0.9
                        }}/>
                </motion.div>
            </motion.div>

            <AddedToCart added={added} setAdded={setAdded} item={selectedProduct}/>;

        </motion.div>
    )
}

export default SelectedProduct
