import { useDispatch } from "react-redux";
import { filter } from "../../redux/actions-creator";
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
const useSortCategory = (category) =>{
    const dispatch = useDispatch()
    const location = useLocation()
    console.log({location})
    const [image, setImage] = useState('')
    useEffect(()=>{
        let data = null
        switch(category){
            case "women":
                data = "women's clothing"
                setImage('women')
                break;
            case "men":
                data = "men's clothing"
                setImage('men')
                break;
            case "accessories":
                data = "jewelery"
                setImage('accessories')
                break;
            case "electronics":
                data = "electronics"
                setImage('electronics')
                break;
            default:
                break; 
        }
        dispatch(filter(data))
    }, [category, dispatch, image])
    return image
}

export default useSortCategory;