import * as actions from '../actions/actionsTypes'

const initState = {
    products:[],
    cart : [],
    filterBy: [],
    itemsInCart:0,
    total: 0
}
export const cartReducer = (state = initState, action)=>{
    
    switch (action.type) {
        case actions.PRODUCTS:{
            return{
                ...state,
                ...action.payload,
                filterBy:action.payload.products
            }
        }
        case actions.ADDED_TO_CART:{
            const productID = action.payload.id
            const product = state.products.find(product => product.id === productID)
            const productQTy = Number(document.getElementById('add-qty').value)
            console.log(productQTy)
            const added = state.cart.find(item => item.id === productID)
            if(!added){
                product.qty = productQTy
                let newTotal = state.total + (product.price * product.qty)
                let newItemsInCart = state.itemsInCart + productQTy
                return{
                    ...state,
                    cart:[
                        ...state.cart,
                        product,
                    ],
                    itemsInCart:newItemsInCart,
                    total:newTotal
                }
            }else{
                return{
                    ...state,
                    total: state.total + (product.price * productQTy),
                    cart: state.cart.map(item => item.id === productID ? {...item, qty:item.qty + productQTy}:item),
                    itemsInCart: state.itemsInCart + productQTy
                }
        }
    }
            
        case actions.REMOVED_FROM_CART:{
            let itemToRemove = state.cart.find(product => action.payload.id === product.id)
            let newTotal = state.total - (itemToRemove.price * itemToRemove.qty)
            return {
                ...state, 
                cart: state.cart.filter(product => product.id !== action.payload.id),
                total:newTotal,
                itemsInCart: state.itemsInCart - itemToRemove.qty
            }}

        case actions.ADDED_QTY:{
            let addedItem = state.products.find(product => product.id === action.payload.id)
            addedItem.qty += 1
            let newTotal = state.total + addedItem.price
            return{
                ...state,
                total:newTotal
            }   }    
        case actions.SUB_QTY:{
            let addedItem = state.products.find(item => item.id === action.payload.id)
            if(addedItem.qty === 1){
                let newItems = state.cart.filter(item => item.id !== action.payload.id)
                let newTotal = state.total - addedItem.price
                return{
                    ...state,
                    cart: newItems,
                    total: newTotal
                }
            }else{
                addedItem.qty -= 1
                let newTotal = state.total - addedItem.price
                return{
                    ...state,
                    total:newTotal
                }
            }
        }
        case actions.SELECTED_PRODUCT:{
            const productID = action.payload.id
            const selectedProduct = state.products.find(item => item.id === productID)
            return {
                ...state,
                viewing: selectedProduct}
        }
        case actions.CHANGE_QTY:{
            const product = state.cart.find(product => product.id === action.payload.id)
            const originalQty = product.qty
            const newQty = document.querySelector(`[data-id="${product.id}"]`).value
            const differentQty = newQty - originalQty
            const newTotal = state.total + (product.price * differentQty)
            product.qty = newQty
            if(product.qty == 0 ){
                const newTotal = state.total - product.price
                return{
                    ...state,
                    cart:state.cart.filter(product => product.id !== action.payload.id),
                    total:newTotal,
                    itemsInCart: state.itemsInCart - 1
                }
            }
            return {
                ...state,
                cart:[
                        ...state.cart,
                ],
                total:newTotal,
                itemsInCart: state.itemsInCart + differentQty
            }
        }
        case actions.FILTER:{
            switch (action.payload.type) {
                case "default":
                    return {
                        ...state,
                        filterBy: state.products
                    }
                case "women's clothing":
                    return {
                        ...state,
                        filterBy: state.products.filter(product => product.category === action.payload.type)
                    }
                case "men's clothing":
                    return {
                        ...state,
                        filterBy:state.products.filter(product => product.category === action.payload.type)
                    }
                case "jewelery":
                    return {
                        ...state,
                        filterBy: state.products.filter(product => product.category === action.payload.type)
                    }
                case "electronics":
                    return {
                        ...state,
                        filterBy: state.products.filter(product => product.category === action.payload.type)
                    }
                case 'asc':
                    return {
                        ...state,
                        filterBy: state.products.slice().sort((a,b) => a.price - b.price)
                    }
                default:
                    return state
                    break;
            }
            
        }
        default:
            return state
    }
}

export default cartReducer;