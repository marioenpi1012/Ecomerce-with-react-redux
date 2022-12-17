import './App.scss'
import {useEffect, useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios'
import {Routes, Route, useLocation} from 'react-router-dom';
import {products} from './redux/actions-creator';
import Nav from './components/Nav';
import Home from './components/pages/Home/Home'
import SelectedProduct from './components/pages/Viewing/SelectedProduct';
import Shop from './components/pages/Shop/Shop';
import Cart from './components/pages/Cart/Cart';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import Footer from './components/Footer';
import Skeleton from './components/UI/Skeleton';
import ProductCategory from './components/pages/Category/ProductCategory'
import { AnimatePresence } from 'framer-motion';

function App() {
    const ref = useRef(null)
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true)
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
        <div className='App' id='App' 
            > 
            < Nav /> 
            <AnimatePresence mode='wait'>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' exact element={<Home isLoading={isLoading} />} />
                    <Route path='/shop' element={isLoading ? <Skeleton /> : <Shop />} />
                    <Route 
                        path='/shop/:categoryName' 
                        element={<ProductCategory isLoading={isLoading} />}
                        />
                    <Route path='/viewing' element={<SelectedProduct />}/>
                    <Route path='/cart' element={<Cart />}/>
                    <Route path='/about' element={<About />}/>
                    <Route path='/contact' element={<Contact />}/>
                </Routes>
            </AnimatePresence>
            <Footer/>
        </div>
    )
}

export default App;
