import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import Product from '../../Product'
import landingPage from '../../../assets/images/landingPage.png'
import { FaArrowDown } from "react-icons/fa";
import Slider from '../../UI/Slider'
import { motion } from 'framer-motion'
import Style from './Home.module.scss'
import AnimatedComponent from '../../UI/AnimatedComponent'
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
                duration:1
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
                when:"beforeChildren",
                staggerChildren:0.4,
                duration:1
            }
        },
        exit:{
            x: "-100vw",
            transition:{
                ease:"easeInOut",
                duration:1
            }
        }
    }
    
    return (
        <AnimatedComponent className={Style.Home} >
            <section className={Style.landing}>
                <div className={Style.bgImage}  style={{
                backgroundImage:`url("${landingPage}")`
            }}></div>
                <div className={Style.container}>
                    <div className={Style.text}>
                        <p>Shop our awesome inventory of clothing, jewelry, and electronics </p>
                    </div>
                    <div className={Style.btn}>
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
                <div className={Style.arrow}>
                    <Link to="/#topRated" > 
                        <motion.div
                            whileHover={{scale:1.1}}
                            whileTap={{scale:0.9}}
                        >
                            <FaArrowDown />
                        </motion.div>
                    </Link>
                </div>
            </section>
            <div id='topRated' ></div>
            <section className={Style.sliderWrapper}>
                <motion.div className={Style.topRated}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{once:false, amount:.8, margin:"0% 0px -30% 0px"}}
                    transition={{delay:1}}
                >
                    <motion.div variants={variants}>Top Rated</motion.div>
                </motion.div>
                <Slider data={highestRated}/>
            </section>
            
        </AnimatedComponent>

        
    )
}

export default Home
