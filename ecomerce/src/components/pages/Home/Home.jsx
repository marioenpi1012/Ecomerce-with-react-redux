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
    const state = useSelector(state => state.cart.products)
    const highestRated = state.filter((item, i) => Number(item.rating.rate) > 3.5 && i <= 4 )
    
    return (
        <AnimatedComponent className={Style.Home} >
            <Landing />
            <HomeProductCard products={highestRated} />
            <CategoryShow />
        </AnimatedComponent>
    )
}

export default Home
