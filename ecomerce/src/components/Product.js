import { useSelector, useDispatch } from 'react-redux'
import { NavLink} from 'react-router-dom'
import { filter, selectedProduct } from '../actions'
import { useState } from 'react'

const Product = ({data}) => {
    const dispatch = useDispatch()
    const Hover =(id) =>{
        const btn = document.querySelector(`[data-button-id="${id}"]`)
        btn.style.display = 'flex'
    }
    const notHover =(id) =>{
        const btn = document.querySelector(`[data-button-id="${id}"]`)
        btn.style.display = ''
    }

    const productsRender = data.map(product =>{
        return (
                <div className="item" key={product.id} id={product.id} onMouseOver={()=>Hover(product.id)} onMouseOut={()=>notHover(product.id)} >
                    <div className="image">
                        <img src={product.image} alt="image"  />
                    </div>
                    <div className="title">{product.title}</div>
                    <div className="price">${product.price}</div>
                    <NavLink to='/viewing' >
                        <input 
                        type="button" 
                        value="quick view" 
                        data-button-id={product.id}  
                        onClick={() => dispatch(selectedProduct(product.id))} 
                        />
                    </NavLink>
                </div>
        )
    })
    
    return (
        <div className="Product">
            <div className='container'>
                <div className="items">
                    {productsRender}
                </div>
            </div>
        </div>
    )
}

export default Product
