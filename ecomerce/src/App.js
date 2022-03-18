import './App.scss'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import { HashRouter as Router, Route } from 'react-router-dom';
import { products } from './actions';
import Nav from './components/Nav';
import Home from './components/Home'
import SelectedProduct from './components/SelectedProduct';
import Products from './components/Products';
import Cart from './components/Cart';
function App() {
  const dispatch = useDispatch()
  
  
  const fetchProducts = async () =>{
    const response = await axios
        .get('https://fakestoreapi.com/products')
        .then((response)=>{dispatch(products(response.data))})
        .catch((err)=>{
            console.log('err',err)
        })
    }
    useEffect(() => {
        fetchProducts()
        
    }, [])
  

  return (
    <Router>
      <div className="App">
        <Nav />        
        <Route path='/' exact> <Home /></Route>
        <Route path='/shop'>
          <Products />
        </Route>
        <Route path='/viewing' component={SelectedProduct} />
        <Route path='/cart' component={Cart} />
      </div>
    </Router>
  )
}

export default App;
