
import  renderer  from 'react-test-renderer';
import { ProductTitle,ProductCar } from '../../src/components';
import React from 'react';
import { product1 } from '../data/products';


describe('ProductTitle', () => {
  test('debe de mostrar el componente correctamente con el titulo personalizado', () => {
    
    const wraper=renderer.create(
        <ProductTitle title='CustomProduct'/>
    );

    expect(wraper.toJSON()).toMatchSnapshot();

  });

  test('debe de mostrar el componente con el nombre del producto', () => {
    
    const wraper=renderer.create(
        <ProductCar product={product1}>
            {
                ()=>(
                    <ProductTitle />
                )
            }
        </ProductCar>
    );

    expect(wraper.toJSON()).toMatchSnapshot();
  })
  
  
})

