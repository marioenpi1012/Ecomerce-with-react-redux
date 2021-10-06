import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import { storeReducer } from "./productReducers";

const reducers = combineReducers({
    cart: cartReducer,
})

export default reducers