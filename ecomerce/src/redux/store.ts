import reducers from './reducers';
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'


const preloadedState = {}
const store = configureStore({
    reducer:reducers,
    middleware:[thunk],
    preloadedState
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch