
import  renderer  from 'react-test-renderer';
import { ProductCar } from '../../src/components';
import React from 'react';
import { product1 } from '../data/products';


const {act}=renderer;

describe('ProductCar', () => {
  test('debe de mostrar el componente correctamente ', () => {
    
    const wraper=renderer.create(
          <ProductCar product={product1}>
              {
                ()=> (
                  <h1>Hola ProductCar</h1>
                )
              }
          </ProductCar>
    );

    expect(wraper.toJSON()).toMatchSnapshot();
      
  });
  
  test('debe de incrementar el contador', () => {
      const wraper=renderer.create(
          <ProductCar product={product1}>
              {
                ({count,increaseBy})=> (
                  <>
                    <h1>Product CARD</h1>

                    <span>{count}</span>
                    <button onClick={()=> increaseBy(1)}></button>
                  
                  </>
                )
              }
          </ProductCar>
      );

      let tree=wraper.toJSON();
      expect(tree).toMatchSnapshot();

      act(()=>{

        (tree as any).children[2].props.onClick();
      })
      
      
      tree=wraper.toJSON();

      expect( (tree as any).children[1].children[0] ).toBe('1');
      
  })
  

  
})

