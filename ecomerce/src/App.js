import './App.scss'
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios'
import {Switch, Route, useLocation} from 'react-router-dom';
import {products} from './actions';
import Nav from './components/Nav';
import Home from './components/Home'
import SelectedProduct from './components/SelectedProduct';
import Products from './components/Products';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skeleton from './components/Skeleton';
import {AnimatePresence} from 'framer-motion/dist/framer-motion'
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
            <Switch location={location} key={location.pathname}>
                <Route path='/' exact>
                    <Home/></Route>
                <Route path='/shop'>
                    {
                        isLoading
                            ? <Skeleton />
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
