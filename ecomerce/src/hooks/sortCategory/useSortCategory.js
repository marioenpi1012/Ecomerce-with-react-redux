import { useDispatch, useSelector } from "react-redux";
import { filter } from "../../redux/actions-creator";
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import electronics from '../../assets/images/electronics.jpg'
import men from '../../assets/images/men.jpg'
import women from '../../assets/images/women.jpg'
import accessories from '../../assets/images/accessories.jpg';

const useSortCategory =  (category) =>{
    const dispatch = useDispatch()
    const location = useLocation()
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const products =  useSelector(state => state.cart.products)
    useEffect(()=>{
        let data = null
        
        switch(category){
            case "women":
                data = "women's clothing"
                setTitle('Women')
                setImage(women)
                break;
            case "men":
                data = "men's clothing"
                setTitle('men')
                setImage(men)
                break;
            case "accessories":
                data = "jewelery"
                setTitle('accessories')
                setImage(accessories)
                break;
            case "electronics":
                data = "electronics"
                setTitle('electronics')
                setImage(electronics)
                break;
            default:
                break; 
        }
        if(products){
            dispatch(filter(data))
        }
        else{
            console.log('no')
        }
    }, [category, dispatch, image])
    return [image, title]
}

export default useSortCategory;