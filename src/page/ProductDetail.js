import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    // let url = `http://localhost:5000/products/${id}`;
    let url = `https://my-json-server.typicode.com/4OUCS/hnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  console.log(id);
  return (
    <Container>
      <Row>
        <Col className="detail-product-img">
          <img src={product?.img} alt="" />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>{product?.price}원</div>
          <div>{product?.choice ? 'Conscious choice' : ''}</div>
          <div>
            <select name="" id="">
              {product?.size.map((select) => (
                <option>{select}</option>
              ))}
            </select>
          </div>
          <div>
            <button className="add-btn">추가</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
