import { createSlice } from "@reduxjs/toolkit"

let initialState={
    productList:[],
    productDetail:[],
}

// function productReducer(state=initialState,action){
//     let {type,payload} = action;

//     switch(type){
//         case "GET_PRODUCT_SUCCESS":
//             return{...state,productList:payload.data};

//         case "GET_PRODUCT_DETAIL_SUCCESS":
//             console.log('product detail reducer',payload.data);
//             return{...state,productDetail:payload.data};
//         default:
//             return {...state};
//     }

// }

// export default productReducer;
const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        getAllProducts(state,action){
            state.productList=action.payload.data;
        },
        getProductDetail(state,action){
            state.productDetail = action.payload.data;
        },
    },
});

console.log("product Reducer slices : ",productSlice);
export const productActions = productSlice.actions
export default productSlice.reducer;