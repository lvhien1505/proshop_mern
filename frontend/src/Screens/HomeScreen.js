import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../actions/productActions";

import Product from "../components/Product";
import Loader from '../components/Loader';
import Message from '../components/Message'

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
 
  const { loading, error, products } = productList;
  
  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);

  return (
    <>
      <h1 className="mt-3">Latest Product</h1>
      {loading ? (
        <Loader/>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          
          {products.map((product, key) => (
            <Col sm={12} md={6} lg={4} xl={3} key={key}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
