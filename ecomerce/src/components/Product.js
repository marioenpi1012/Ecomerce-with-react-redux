import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {NavLink, useLocation} from 'react-router-dom'
import {selectedProduct} from '../actions'
import {motion} from 'framer-motion/dist/framer-motion'
const Product = ({product, loading}) => {
    const dispatch = useDispatch()
    const location = useLocation()
    const productVariants = {
        hidden:{
            opacity:0
        },
        start:{
            opacity:1
        },
        end:{
            opacity:0,
            scale:1
        }
    }
    return (
        <motion.div
            variants={productVariants}
            initial="hidden"
            animate="start"
            exit="end"
            className="item"
            key={product.id}
            id={product.id}>
            <div className="image">
                <img src={product.image} alt="image" width='200' height="200"/>
            </div>
            <div className="title">{product.title}</div>
            <div className="price">${product.price}</div>
            <NavLink
                to={{ pathname: '/viewing',state: {prevPath: location.pathname}}}>
                <input
                    id='quickView'
                    type="button"
                    value="quick view"
                    data-button-id={product.id}
                    onClick={() => dispatch(selectedProduct(product.id))}/>
            </NavLink>
        </motion.div>
    )
}

export default Product
