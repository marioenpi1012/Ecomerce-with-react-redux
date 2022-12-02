import React, { useRef, useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import Product from '../../Product'
import landingPage from '../../../assets/images/landingPage.png'
import { FaArrowDown } from "react-icons/fa";
import { motion } from 'framer-motion'
import Style from './Home.module.scss'
import AnimatedComponent from '../../UI/AnimatedComponent'
import HomeProductCard from '../../HomeProductCard'
import CategoryShow from '../../UI/CategoryShow'
import Landing from '../../Landing'
import useLocoScroll from '../../../hooks/useLocoScroll';
const Home = () => {
    const ref = useRef(null);
    const [preloader, setPreload] = useState(true);
    useLocoScroll(!preloader)
    useEffect(() => {
        if (!preloader && ref) {
            if (typeof window === "undefined" || !window.document) {
                return;
            }
        }
    }, [preloader]);

    const state = useSelector(state => state.cart.products)
    const highestRated = state.filter((item, i) => Number(item.rating.rate) > 3.5 && i <= 4 )
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
        // <AnimatedComponent 
        // >
            <div className={Style.Home} ref={ref} data-scroll-container >
                <Landing  />
                <HomeProductCard products={highestRated} />
                <CategoryShow />
            </div>

            
        // </AnimatedComponent>

        
    )
}

export default Home
