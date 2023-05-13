
import  renderer  from 'react-test-renderer';
import { ProductImage,ProductCar } from '../../src/components';
import React from 'react';
import { product2 } from '../data/products';


describe('ProductImage', () => {
  test('debe de mostrar el componente correctamente con la imagen personalizada', () => {
    
    const wraper=renderer.create(
        <ProductImage img='CustomProduct.jpg'/>
    );

    expect(wraper.toJSON()).toMatchSnapshot();

  });

  test('debe de mostrar el componente con la imagen del producto', () => {
    
    const wraper=renderer.create(
        <ProductCar product={product2}>
            {
                ()=>(
                    <ProductImage/>
                )
            }
        </ProductCar>
    );

    expect(wraper.toJSON()).toMatchSnapshot();
  })
  
  
})

