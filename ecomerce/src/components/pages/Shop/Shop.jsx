import { useState} from 'react'
import { useSelector} from 'react-redux'
import Style from './Products.module.scss'
import AnimatedComponent from '../../UI/AnimatedComponent';
import useSortPrice from '../../../hooks/sortPrice/useSortPrice'
import useFilterPrice from '../../../hooks/filterPrice/useFilterPrice'
import Filter from '../../Filter'
import Products from '../../Products'
const Shop = () => {
    let filterBy = useSelector(state => state.cart.products)
    const [filterByPrice, setFilterByPrice] = useState('')
    const [priceRange, setPriceRange] = useState(0);

    filterBy =  useFilterPrice(priceRange, filterBy)
    filterBy = useSortPrice(filterByPrice, filterBy)
    const data = filterBy
    return (
        <AnimatedComponent className={Style.Shop}>
            <div className={Style.Product}>
                <div className={Style.container}>
                    <Filter 
                        setFilterByPrice={setFilterByPrice}
                        priceRange={priceRange}
                        setPriceRange={setPriceRange}
                    />
                    <Products data={data}  />
                </div>
            </div>
        </AnimatedComponent>
    )
}

export default Shop
