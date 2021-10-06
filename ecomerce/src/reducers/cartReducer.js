import * as actions from '../actions/actionsTypes'

const initState = {
    products:[],
    cart : [],
    itemsInCart:0,
    total: 0
}
export const cartReducer = (state = initState, action)=>{
    
    switch (action.type) {
        case actions.PRODUCTS:{
            return{
                ...state,
                ...action.payload
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
            let itemsToRemove = state.cart.find(product => action.payload.id === product.id)
            let newTotal = state.total - (itemsToRemove.price * itemsToRemove.qty)
            return {
                ...state, 
                cart: state.cart.filter(product => product.id !== action.payload.id),
                total:newTotal
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
        case actions.ADDED_QTY:{

        }
        case actions.CHANGE_QTY:{
            const product = state.cart.find(product => product.id === action.payload.id)
            const originalQty = product.qty
            const newQty = document.getElementById('qty').value;
            const differentQty = newQty - originalQty
            const newTotal = state.total + (product.price * differentQty)
            product.qty = newQty
            console.log(newQty)
            return {
                ...state,
                cart:[
                        ...state.cart,
                        product
                ],
                total:newTotal
                
            }
        }
        default:
            return state
    }
}

export default cartReducer;