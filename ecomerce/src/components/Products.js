import {React, useState, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filter, products,  } from '../actions'
import Product from './Product'
const Products = () => {
    const dispatch = useDispatch()
    const filterBy = useSelector(state => state.cart.filterBy)
    const [filterByPrice, setFilterByPrice] = useState('')
    const getValue = (e) =>{
        const filterBy = e.target.value
        dispatch(filter(filterBy))
    }
    const value = () =>{
        switch (filterByPrice) {
            case 'asc':
                return filterBy.slice().sort((a,b)=>a.price - b.price)
            case 'desc':
                return filterBy.slice().sort((a,b)=>b.price - a.price)
            default:
                return filterBy
        }
    }
    const data = value()
    
    return (
        <div className='Shop'>
        <div className="filter">
            <select name="filter-category" id="filter-category" onChange={(e)=> getValue(e)} >
                <option value="default">Filter By Category: </option>
                <option value="women's clothing">Women's Clothing</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
            </select>
        </div>
        <div className="filter filter-price">
                        <select name="filter-price" id="filter-price" onChange={(e)=> setFilterByPrice(e.target.value)}>
                            <option value="normal">Filter By Price (Default) </option>
                            <option value="desc">Highest Price</option>
                            <option value="asc">Lowest Price</option>
                        </select>
                    </div>
            <Product data={data} />
        </div>
    )
}

export default Products
