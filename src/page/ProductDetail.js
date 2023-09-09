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
  
  const product = useSelector(state=>state.product);
  

  const getProductDetail= async()=>{
    // let url = `http://localhost:5000/products/${id}`
    // let response = await fetch(url);
    // let data = await response.json();
    // console.log('data',data);
    // setProduct(data);
    
    dispatch(productAction.getProductDetail(id))
  }
  useEffect(()=>{
    getProductDetail();
  },[])

  return (
    
   <Container>
    <Row>
      <Col className='product-img'>
        <img src={product?.img}/>
      </Col>
      <Col>
      <div>{product?.title}</div>
      <div>{product?.price}</div>
      <div>{product?.choice?"Conscious choice":""}</div>
      <DropdownButton id="dropdown-basic-button" title="사이즈 선택">
        {product?.size.map((item)=><Dropdown.Item>{item}</Dropdown.Item>)}
      
    </DropdownButton>
    <div className="d-grid gap-2 my-button">
    <Button variant="dark">추가</Button>
    </div>
      </Col>
    </Row>
   </Container>
  )
}

export default ProductDetail
