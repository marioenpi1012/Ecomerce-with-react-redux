import AnimatedComponent from "../../UI/AnimatedComponent";
import { useParams } from 'react-router-dom';
import useSortCategory from "../../../hooks/sortCategory/useSortCategory";
import { useSelector } from "react-redux";
import Filter from "../../Filter";
import{ useState, useEffect } from 'react'
import useFilterPrice from "../../../hooks/filterPrice/useFilterPrice";
import useSortPrice from "../../../hooks/sortPrice/useSortPrice";
import Banner from "../../UI/Banner";
import Products from "../../Products";
import Style from './ProductCategory.module.scss';
const ProductCategory = ({isLoading}) =>{
    const { categoryName } = useParams()
    const [image, title] = useSortCategory(categoryName)
    const preventUndefinedSelector = () => undefined;
    let  products = useSelector(state => state.cart.filterBy)

    const [filterByPrice, setFilterByPrice] = useState('')
    const [priceRange, setPriceRange] = useState(0);
    products = useFilterPrice(priceRange, products)
    products = useSortPrice(filterByPrice, products)
    
    return (
        <AnimatedComponent className={Style.ProductCategory}>
            <div className={Style.container}>
                <Filter
                    setFilterByPrice={setFilterByPrice}
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                />
                <div className={Style.section}>
                    <Banner image={image} title={title} />
                    <Products data={products} />
                </div>
            </div>
        </AnimatedComponent>
    )
}

export default ProductCategory;