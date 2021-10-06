import React from 'react'
import { selectedProduct } from '../actions'
import { useDispatch } from 'react-redux'

const Shop = () => {
    const dispatch = useDispatch()
    return (
        <div className='Shop'>
            <div className="container">
                <div className="items">
                    <div className="item">
                        <div className="image"><img src="" alt="image" srcset="" /></div>
                        <div className="title">Title</div>
                        <div className="price">price</div>
                        <input type="button" value="quick view" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop
