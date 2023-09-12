import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../redux/actions/productAction';

const ProductDetail = () => {

  let {id} = useParams();
  //const [product,setProduct] = useState(null);
  
  const dispatch = useDispatch();
  
  const product = useSelector(state=>state.product.productDetail);
  

  const getProductDetail= ()=>{
    // let url = `http://localhost:5000/products/${id}`
    // let response = await fetch(url);
    // let data = await response.json();
    // console.log('data',data);
    // setProduct(data);
    
    dispatch(productAction.getProductDetail(id));
  }
  useEffect(()=>{
    console.log('product Detail.js useEffect');
    getProductDetail();
  },[])

  console.log('productDetail.js : ',product?.img);
  
  return (
   <Container>
    <Row>
      <Col className='product-img'>
        <img src={product?.img}/>
      </Col>
      <Col className='product-detail-col'>
        <h2>{product?.title}</h2>
        <div  className='product-price product-detail-left-margin produc-detail-bot-margin'>₩{product?.price}</div>
        <div className='product-detail-left-margin produc-detail-bot-margin'>{product?.choice?"Conscious choice":""}</div>
        <DropdownButton variant='danger' id="dropdown-basic-button" title="사이즈 선택" className='product-sizes product-detail-left-margin produc-detail-bot-margin'>
          {product?.sizes?.map((item)=><Dropdown.Item>{item}</Dropdown.Item>)}
        </DropdownButton>
        <div className="d-grid gap-2 my-button product-detail-left-margin produc-detail-bot-margin">
          <Button variant="secondary" className='prouct-add-button'>추가</Button>
        </div>
      </Col>
    </Row>
   </Container>
  )
}

export default ProductDetail
