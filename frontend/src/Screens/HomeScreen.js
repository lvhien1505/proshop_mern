import React from 'react';
import {Row,Col} from 'react-bootstrap';

import Product from '../components/Product';

import products from '../products';

const HomeScreen = () => {
    return (
        <>
           <h1 className="mt-3">Sản phẩm mới</h1>
           <Row>
            {
               products.map((product,key)=>(
                <Col sm={12} md={6} lg={4} xl={3} key={key}>
                      <Product product={product}/>
                </Col>
             ))
            }    
           </Row> 
        </>
    )
}

export default HomeScreen;
