let initialState={
    productList:[],
    productDetail:[],
}

function productReducer(state=initialState,action){
    let {type,payload} = action;

    switch(type){
        case "GET_PRODUCT_SUCCESS":
            return{...state,productList:payload.data};

        case "GET_PRODUCT_DETAIL_SUCCESS":
            console.log('product detail reducer',payload.data);
            return{...state,productDetail:payload.data};
        default:
            return {...state};
    }

}

export default productReducer;