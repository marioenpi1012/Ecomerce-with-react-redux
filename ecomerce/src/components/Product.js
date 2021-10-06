import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink} from 'react-router-dom'
import { selectedProduct } from '../actions'

const Product = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.cart.products)
    const productsRender = products.map(product =>{
        return (
                <div className="item" key={product.id}>
                    <div className="image">
                        <img src={product.image} alt="image"  />
                    </div>
                    <div className="title">{product.title}</div>
                    <div className="price">${product.price}</div>
                    <ul>
                        <li>
                            <NavLink to='/viewing' >
                                <input type="button" value="quick view" onClick={() => dispatch(selectedProduct(product.id))} />
                            </NavLink>
                        </li>
                    </ul>
                    
                </div>
        )
    })
    return (
        <>
            {productsRender}
        </>
    )
}

export default Product
