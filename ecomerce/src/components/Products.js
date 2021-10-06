import {React, useEffect} from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { products, selectedProduct } from '../actions'
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

    useEffect(() => {
        fetchProducts()
        
    }, [])
    
    return (
        <div className='Shop'>
            <div className="container">
                <div className="items">
                    <Product />
                </div>
            </div>
        </div>
    )
}

export default Products
