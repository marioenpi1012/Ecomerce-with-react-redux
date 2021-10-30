import { useSelector, useDispatch } from 'react-redux'
import { NavLink} from 'react-router-dom'
import { filter, selectedProduct } from '../actions'

const Product = () => {
    const dispatch = useDispatch()
    const filterBy = useSelector(state => state.cart.filterBy)
    
    const Hover =(id) =>{
        const btn = document.querySelector(`[data-button-id="${id}"]`)
        btn.style.display = 'flex'
    }
    const notHover =(id) =>{
        const btn = document.querySelector(`[data-button-id="${id}"]`)
        btn.style.display = ''
    }

    console.log(filterBy)
    
    const sorted = filterBy.sort((a,b) =>{
        if(a.price - b.price){
            return a.price - b.price
        }else if (b.price - a.price){
            return b.price - a.price
        }
    })

    const productsRender = sorted.map(product =>{
        
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
        <>
            {productsRender}
        </>
    )
}

export default Product
