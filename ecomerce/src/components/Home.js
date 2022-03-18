import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Product from './Product'
import {FaGreaterThan, FaLessThan} from 'react-icons/fa'
const Home = () => {
    const state = useSelector(state => state.cart.products)
    const highestRated = state.filter(item => Number(item.rating.rate) > 3.5)
    
    const min = Math.ceil(0)
    const max = Math.floor(19)
    const id =  Math.floor(Math.random()* (max - min + 1))
    const item = state.find(item => item.id === id)
   

    const next = () =>{
        console.log('working')
        const containerLength = document.querySelector('.container')
        const itemLength = document.querySelector('.item')
        const itemsLength = document.querySelector('.items').scrollWidth
        let scroll = 0;
        if(itemsLength >= scroll){
            scroll = document.querySelector('.items').scrollLeft += containerLength.scrollWidth - itemLength.scrollWidth
            
        }
        const sections = itemsLength / containerLength
        console.log(sections)
    }
    const previous = () =>{
        const containerLength = document.querySelector(".container").scrollWidth
        const itemLength = document.querySelector('.item')
        const itemsLength = document.querySelector('.items').scrollWidth
        const scroll = document.querySelector('.items').scrollLeft -= containerLength + itemLength.scrollWidth
    }
    const slider = ()=>{
        

    }
    return (
        <div className='Home'>
            <div className="landing">
                <div className="container">
                    <div className="item-info">
                        <div className="title"></div>
                        <div className="img"></div>
                    </div>
                    <div className="text">
                        <p>Shop our awesome inventory of clothing, jewelry, and electronics </p>
                    </div>
                    <div className="btn">
                        <NavLink to='/shop'>
                            <input type="button" value="Check Our Collection" />
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className='top-rated'>Our Top Rated Items:</div>
            
            <div className="sections">
                
            </div>
            <div className="carousel">
            <div className="controllers">
                <div className="prev" onClick={()=> previous()}><FaLessThan/></div>
                <div className="next" onClick={()=> next()}><FaGreaterThan/></div>
            </div>
                <Product data={highestRated} />
            </div>
            
            
        </div>
    )
}

export default Home
