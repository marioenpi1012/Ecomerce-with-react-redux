import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import Product from './Product'
import landingPage from '../images/landingPage.png'
import { FaArrowDown } from "react-icons/fa";
import Slider from './Slider'
import { motion } from 'framer-motion/dist/framer-motion'
const Home = () => {
    const state = useSelector(state => state.cart.products)
    const highestRated = state.filter(item => Number(item.rating.rate) > 3.5)
    const variants = {
        offscreen:{
            x:"100%",
            opacity:0
        },
        onscreen:{
            x: 0,
            opacity:1,
            transition:{
                type:"spring",
                bounce:0.4,
                duration:0.8,
                stiffness:300
            }
        }
    }
    const containerVariants ={
        hidden:{
            opacity:0,
            x:"100vw"
        },
        start:{
            opacity:1,
            x:0,
            transition:{
                type:"spring",
                stiffness:300,
                mass:0.4,
                damping:8,
                when:"beforeChildren",
                staggerChildren:0.4,
                duration:1
            }
        },
        exit:{
            x: "-100vw",
            transition:{ease:"easeInOut"}
        }
    }
    
    return (
        <motion.div 
            className='Home'
            variants={containerVariants}
            initial="hidden"
            animate="start"
            exit="exit"
            >
            <div className="landing">
                <div className='bg-image'  style={{
                backgroundImage:`url("${landingPage}")`
            }}></div>
                <div className="container">
                    <div className="text">
                        <p>Shop our awesome inventory of clothing, jewelry, and electronics </p>
                    </div>
                    <div className="btn">
                        <NavLink to='/shop'>
                            <motion.input 
                                type="button" 
                                id='collectionBtn' 
                                value="Check Our Collection" 
                                whileHover={{scale:1.1}}
                                whileTap={{scale:0.9}}
                                />
                        </NavLink>
                    </div>
                </div>
                <div className="arrow">
                    <Link to="/#topRated" > 
                        <motion.div
                            whileHover={{scale:1.1}}
                            whileTap={{scale:0.9}}
                        >
                            <FaArrowDown />
                        </motion.div>
                    
                        </Link>
                </div>
            </div>
            <div id='topRated' ></div>
            <div className='sliderWrapper'>
                <motion.div className='topRated'
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{once:false, amount:.8, margin:"0% 0px -30% 0px"}}
                    transition={{delay:1}}
                >
                    <motion.div variants={variants}>Top Rated</motion.div>
                </motion.div>
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{once:false, amount:.8}}
                    >
                    <motion.div
                        variants={variants}
                    >
                        <Slider data={highestRated}/>
                    </motion.div>
                </motion.div>
            </div>
            
        </motion.div>
        
    )
}

export default Home
