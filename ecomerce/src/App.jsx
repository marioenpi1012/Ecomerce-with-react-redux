import './App.scss'
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios'
import { Routes, Route, useLocation} from 'react-router-dom';
import {products} from './actions';
import Nav from './components/Nav';
import Home from './components/pages/Home/Home'
import SelectedProduct from './components/SelectedProduct';
import Products from './components/pages/Shop/Products';
import Cart from './components/pages/Cart/Cart';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import Footer from './components/Footer';
import Skeleton from './components/UI/Skeleton';
import { AnimatePresence } from 'framer-motion'
function App() {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState('')
    const location = useLocation()

    const fetchProducts = async () => {
        setIsLoading(true)
        const response = await axios
            .get('https://fakestoreapi.com/products')
            .then((response) => {
                dispatch(products(response.data))
            },)
            .catch((err) => {
                console.log('err', err)
            })
            setIsLoading(false)

    }
    useEffect(() => {
        fetchProducts()

    }, [])

    return (
        <> 
        <Nav /> 
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path='/' exact element={<Home />}/>
                <Route path='/shop' element={isLoading ? <Skeleton /> : <Products />}/>
                <Route path='/viewing' element={<SelectedProduct />}/>
                <Route path='/cart' element={<Cart />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/contact' element={<Contact />}/>
            </Routes>
        </AnimatePresence>
        <Footer/>
    </>
    )
}

export default App;
