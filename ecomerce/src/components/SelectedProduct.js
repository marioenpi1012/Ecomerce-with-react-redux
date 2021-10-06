import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addedToCart } from '../actions'

const SelectedProduct = () => {
    const selectedProduct = useSelector(state=>state.cart.viewing)
    const dispatch = useDispatch()
    return (
        <div className='SelectedProduct'>
        <div className="close">
            <NavLink to='/shop'>X</NavLink>
        </div>
            <div className="container">
                <div className="image">
                    <img src={selectedProduct.image} alt="image" />
                </div>
                <div className="item-info">
                    <div className="title">{selectedProduct.title}</div>
                    <div className="price">${selectedProduct.price}</div>
                    <div className="description">{selectedProduct.description}</div>
                    <div className="qty">
                        <input type="number" name="add-qty" id="add-qty" min='1' max='100' defaultValue='1' />
                    </div>
                    <input type="submit" 
                        value='Add To Cart' 
                        className="add-to-cart"
                        onClick={()=>dispatch(addedToCart(selectedProduct.id))}
                        />
                </div>
            </div>
        </div>
    )
}

export default SelectedProduct
