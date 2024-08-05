import {combineReducers} from "redux"
import feedsReducer from "./feedsReducers"
import cartReducer from "./cartReducers"

const myReducer = combineReducers({
    feeds: feedsReducer,
    cartItems: cartReducer
})

export default myReducer