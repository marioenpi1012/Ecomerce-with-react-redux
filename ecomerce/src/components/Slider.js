import React, { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { useDispatch } from "react-redux";
import { selectedProduct } from "../actions";
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import {FaGreaterThan, FaLessThan} from 'react-icons/fa'

const Slider = ({data, children, activeSlide}) =>{
    const dispatch = useDispatch()
    const location = useLocation()
    const [[page, direction],setPage] = useState([0,0])
    const variants = {
        enter: (direction)=>{
            return {
                x: direction > 0 ? 1000 : - 1000,
                opacity:0
            }
        },
        center:{
            zIndex:1,
            x:0,
            opacity:1
        },
        exit: direction =>{
            return {
                zIndex: 0,
                x: direction < 0 ? 1000 : -1000,
                opacity:0
            }
        }
    }
    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    
    const paginate = (newDirection)=>{
        // if page is equal to the length of data (products) and the direction is forward 
        // we set the page back to the first element (product)
        if(page >= data.length - 1 && newDirection === 1){
            setPage([0,newDirection])
        }
        // However if the page is equal to zero and the direction is backwards 
        // we set the page equal to the last element (product)
        else if(page <= 0 && newDirection === -1){
            setPage([data.length - page - 1, newDirection])
        }//Else we continue moving forward/backwards
        else{
            setPage([page + newDirection, newDirection])
        }
        
    }
    return(
        <div className="Slider">
                <div className='container'>
                
                    <AnimatePresence  initial={false} custom={direction} className="items" >
                    {data.map((product, i)=>(
                    page === i &&
                    <motion.div 
                            className='item'
                            key={product.id}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x:{type:"spring",stiffness:300, damping:30},
                                opacity:{duration:0.2}
                            }}
                            drag="x"
                            dragConstraint={{left:0,right:0}}
                            dragElastic={1}
                            onDragEnd={(e,{offset,velocity})=>{
                                const swipe = swipePower(offset.x,velocity.x);
                                if(swipe < -swipeConfidenceThreshold){
                                    paginate(1)
                                }else if(swipe > swipeConfidenceThreshold){
                                    paginate(-1)
                                }
                            }}
                            >
                            <div className="image" >
                                <img src={product.image} alt="image" width='200' height="200" /> 
                            </div>
                            <div className="title">{product.title}</div>
                            <div className="price">${product.price}</div>
                            <NavLink to={{pathname: "/viewing",state:{prevPath:location.pathname}}}>
                                <input
                                id='quickView' 
                                type="button" 
                                value="quick view" 
                                data-button-id={product.id}  
                                onClick={() => dispatch(selectedProduct(product.id))} 
                                />
                            </NavLink>
                        </motion.div>
                    ))}   
                    </AnimatePresence>  
                    
                    
                    <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}} className='prev' onClick={()=>paginate(-1)} type="button"><FaLessThan /></motion.div>
                    <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}} className='next' onClick={()=>paginate(1)} type="button"><FaGreaterThan /></motion.div>
                </div>
                </div>
    )
}

export default Slider