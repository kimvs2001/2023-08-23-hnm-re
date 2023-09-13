import { productActions } from "../reducers/productReducer";

function getProducts(searchQuery){
   return async (dispatch,getState) =>{
    let url = `https://my-json-server.typicode.com/kimvs2001/2023-08-23-hnm-re/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    //setProductList(data);

    //dispatch({type:"GET_PRODUCT_SUCCESS",payload:{data}});
    dispatch(productActions.getAllProducts({data}));
   }; 
}

function getProductDetail(id){
   return async (dispatch,getState)=>{
      let url = `https://my-json-server.typicode.com/kimvs2001/2023-08-23-hnm-re/products/${id}`
      let response = await fetch(url);
      let data = await response.json();
      

      dispatch({type:"GET_PRODUCT_DETAIL_SUCCESS",payload:{data}});
   };
}

export const productAction={getProducts,getProductDetail};