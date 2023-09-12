import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../redux/actions/productAction';

const ProductAll = () => {

  // const [productList,setProductList] = useState([]);
  const productList = useSelector(state=>state.product.productList);
  const [query,setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const getProducts=  ()=>{

    let searchQuery=query.get('q')||"" ;
    console.log("쿼리값은",searchQuery);
    
    // let url = `https://my-json-server.typicode.com/kimvs2001/2023-08-23-hnm-re/products?q=${searchQuery}`;
    // let response = await fetch(url);
    // let data = await response.json();
    // setProductList(data);

    dispatch(productAction.getProducts(searchQuery));
  }
  useEffect(()=>{
    getProducts();
  },[query]);
  return (
    <div>
      
      

      <Container>
        <Row>
          
          {productList?.map((item)=><Col lg={3}> <ProductCard item={item}/> </Col>)}

        </Row>

      </Container>
    </div>
  )
}

export default ProductAll
