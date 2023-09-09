function getProducts(searchQuery){
   return async (dispatch,getState) =>{
    let url = `https://my-json-server.typicode.com/kimvs2001/2023-08-23-hnm-re/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    //setProductList(data);

    dispatch({type:"GET_PRODUCT_SUCCESS",payload:{data}});
   }; 
}

export const productAction={getProducts};