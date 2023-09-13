import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import productReducer from "./reducers/productReducer";
import rootReducer from  "./reducers"
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구
import { configureStore } from "@reduxjs/toolkit";


// let store =createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(thunk))
// );

const store = configureStore({
    reducer:{
        auth : authenticateReducer,
        product :productSlice,
    }
});

export default store;