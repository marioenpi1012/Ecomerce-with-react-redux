import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useFilterPrice from "../hooks/filterPrice/useFilterPrice";
import Style from '../style/Filter.module.scss'
import { maxPrice } from "./utils/utils";
import { useLocation } from "react-router-dom";
const Filter = ({setFilterByPrice, priceRange, setPriceRange}) =>{
    const { pathname } = useLocation()
    const products = useSelector(state => state.cart.filterBy)
    const allProducts = useSelector(state => state.cart.products)
    let maxRangeValue = maxPrice(pathname === '/shop' ? allProducts : products)
    const handleCheckboxInput = (e) =>{
        const currentCheckbox = e;
        let allUnCheck = true
        const checkboxes = document.querySelectorAll(`.${Style.roundInput}`)
        for (let checkbox of checkboxes) {
            if(currentCheckbox !== checkbox && checkbox.checked){
                checkbox.checked = !checkbox.checked;
            }
            if(checkbox.checked) {allUnCheck = false}
        }
        if(allUnCheck) return setFilterByPrice('');
        return setFilterByPrice(currentCheckbox.name)
        
    }
    return(
        <div className={Style.Filter}>
            <div className={Style.Filter__container}>
                <div className={Style.category}>
                    <h2 className={Style.title}>Filter by price</h2>
                    <ul className={Style.selections}>
                        <li className={Style.selections__category}>
                            <label htmlFor="price">0</label>
                            <input 
                                type="range" 
                                name="price" 
                                id="price" 
                                min='0' 
                                max={maxRangeValue}
                                value={priceRange}
                                onChange={(e)=>setPriceRange(e.target.value)}
                                />
                                <label htmlFor="price">{maxRangeValue}</label>
                        </li>
                    </ul>
                </div>
                <div className={Style.category}>
                    <h2 className={Style.title}>Sort by</h2>
                    <ul className={Style.selections}>
                        <li className={Style.selections__category}>
                            <input 
                                type="checkbox" 
                                name="lowestPrice" 
                                id="lowestPrice" 
                                className={Style.roundInput}
                                onChange={(e)=>handleCheckboxInput(e.target)}
                                />
                            <label htmlFor="lowestPrice">Price (Lowest first)</label>
                        </li>
                        <li className={Style.selections__category}> 
                            <input 
                                type="checkbox" 
                                name="highestPrice" 
                                id="highestPrice" 
                                className={Style.roundInput}
                                onChange={(e)=>handleCheckboxInput(e.target)}
                                />
                            <label htmlFor="highestPrice">Price (Highest first)</label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Filter;