import {
    motion,
    LayoutGroup, 
    AnimatePresence
} from 'framer-motion'
import Product from './Product'
import Style from '../style/Products.module.scss'
const Products = ({data}) =>{
    return (
        <LayoutGroup>
            <motion.div className={Style.Products}>
                <AnimatePresence>
                    {
                        data.map(
                            product => (<Product key={product.id} product={product}/>)
                        )
                    }
                </AnimatePresence>
            </motion.div>
        </LayoutGroup>
    )
}

export default Products;