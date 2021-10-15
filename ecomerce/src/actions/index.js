import axios from 'axios';
import * as actions from './actionsTypes';


export const products = (products)=>{
    return {
        type: actions.PRODUCTS,
        payload:{
            products
        }
    }
}

export const selectedProduct = id =>{
    return {
        type: actions.SELECTED_PRODUCT,
        payload:{
            id
        }
    }
}

export const addedToCart = id =>{
    return {
        type:actions.ADDED_TO_CART,
        payload: {
            id
        }
    }
}

export const removedFromCart = id =>{
    return {
        type:actions.REMOVED_FROM_CART,
        payload:{
            id
        }
    }
}

export const addedQty = id =>{
    return{
        type:actions.ADDED_QTY,
        payload:{
            id
        }
    }
}

export const subQty = id =>{
    return {
        type:actions.SUB_QTY,
        payload:{
            id
        }
    }
}

export const changeQty = id =>{
    return {
        type: actions.CHANGE_QTY,
        payload:{
            id
        }
    }
}

export const filter = type =>{
    return{
        type: actions.FILTER,
        payload:{
            type
        }
    }
}