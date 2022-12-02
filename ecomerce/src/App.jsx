import './App.scss'
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios'
import {Switch, Route, useLocation} from 'react-router-dom';
import {products} from './actions';
import Nav from './components/Nav';
import Home from './components/pages/Home/Home'
import SelectedProduct from './components/pages/Viewing/SelectedProduct';
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
        < Nav /> 
        <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
                <Route path='/' exact>
                    <Home/></Route>
                <Route path='/shop'>
                    {
                        isLoading
                            ? <Skeleton data={fetchProducts}/>
                            : <Products/>

                    }
                </Route>
                <Route path='/viewing' component={SelectedProduct}/>
                <Route path='/cart' component={Cart}/>
                <Route path='/about' component={About}/>
                <Route path='/contact' component={Contact}/>
            </Switch>
        </AnimatePresence>
        <Footer/>
    </>
    )
}

export default App;
