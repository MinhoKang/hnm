import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import SideMenu from '../component/SideMenu';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    let searchQuery = query.get('q') || '';
    console.log(searchQuery);
    // let url = `http://localhost:5000/products?q=${searchQuery}`;
    let url = ` https://my-json-server.typicode.com/4OUCS/hnm/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
    console.log(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
