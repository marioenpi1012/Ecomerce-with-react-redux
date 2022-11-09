import {React, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {filter, products} from '../../../actions'
import Product from '../../Product'
import {motion, LayoutGroup, AnimatePresence} from 'framer-motion'
import Style from './Products.module.scss'
import AnimatedComponent from '../../UI/AnimatedComponent'
const Products = ({loading}) => {
    const dispatch = useDispatch()
    const filterBy = useSelector(state => state.cart.filterBy)
    const [filterByPrice, setFilterByPrice] = useState('')
    const getValue = (e) => {
        const filterBy = e.target.value
        dispatch(filter(filterBy))
    }
    const value = () => {
        switch (filterByPrice) {
            case 'asc':
                return filterBy
                    .slice()
                    .sort((a, b) => a.price - b.price)
            case 'desc':
                return filterBy
                    .slice()
                    .sort((a, b) => b.price - a.price)
            default:
                return filterBy
        }
    }
    const data = value()
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
                staggerChildren: 0.4
            }
        },
        exit: {
            x: "-100vw",
            opacity: 0,
            delay: 1,
            transition: {
                ease: "easeInOut",
                delayChildren: 0.8
            }
        }
    }

    return (
        <AnimatedComponent>
            <motion.div
                className={Style.Shop}
                variants={containerVariants}
                initial="hidden"
                animate="start"
                exit="exit"
                transition={{
                    delay: 1,
                    duration: 2
                }}>
                <div className={Style.filter}>
                    <select
                        name="filter-category"
                        id="filter-category"
                        onChange={(e) => getValue(e)}>
                        <option value="default">Filter By Category (Default):
                        </option>
                        <option value="women's clothing">Women's Clothing</option>
                        <option value="men's clothing">Men's Clothing</option>
                        <option value="jewelery">Jewelery</option>
                        <option value="electronics">Electronics</option>
                    </select>
                </div>
                <div className={`${Style.filter} ${Style.filterPrice}`}>
                    <select
                        name="filter-price"
                        id="filter-price"
                        onChange={(e) => setFilterByPrice(e.target.value)}>
                        <option value="normal">Filter By Price (Default)
                        </option>
                        <option value="desc">Highest Price</option>
                        <option value="asc">Lowest Price</option>
                    </select>
                </div>
                <div className={Style.Product}>
                    <div className={Style.container}>
                        <LayoutGroup>
                            <motion.div className={Style.items}>
                                <AnimatePresence>
                                    {
                                        data.map(
                                            product => (<Product key={product.id} loading={loading} product={product}/>)
                                        )
                                    }
                                </AnimatePresence>
                            </motion.div>
                        </LayoutGroup>
                    </div>
                </div>
            </motion.div>
        </AnimatedComponent>
    )
}

export default Products
