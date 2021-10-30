import {React, useEffect} from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { filter, products, selectedProduct } from '../actions'
import Product from './Product'
const Products = () => {
    const dispatch = useDispatch()
    const fetchProducts = async () =>{
    const response = await axios
        .get('https://fakestoreapi.com/products')
        .then((response)=>{dispatch(products(response.data))})
        .catch((err)=>{
            console.log('err',err)
        })
    }
    const getValue = (e) =>{
        const filterBy = e.target.value
        dispatch(filter(filterBy))
    }
    useEffect(() => {
        fetchProducts()
        
    }, [])
    
    return (
        <div className='Shop'>
        <div className="filter">
            <select name="filter" id="filter" onChange={(e)=> getValue(e)} >
                <option value="default">Filter Item: </option>
                <option value="desc">Highest to lowest</option>
                <option value="asc">Lowest to highest</option>
                <option value="men's clothing">Men's clothing</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
            </select>
        </div>
            <div className="container">
                <div className="items">
                    <Product />
                </div>
            </div>
        </div>
    )
}

export default Products
