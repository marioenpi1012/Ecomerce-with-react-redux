import './App.scss'
import { addedQty, addedToCart, products, removedFromCart, selectedProduct, subQty} from './actions';
import {useDispatch, useSelector} from 'react-redux'
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import SelectedProduct from './components/SelectedProduct';
import Shop from './components/Shop'
import Products from './components/Products';
import Home from './components/Home';
import Cart from './components/Cart';
function App() {
  const dispatch = useDispatch()
  // const products = useSelector((state) => state.cart.products)
  const cart = useSelector((state)=> state.cart.cart)
  const total  = useSelector(state => state.cart.total)
  
  
  

  return (
    <Router>
      <div className="App">
        <Nav/>        
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
