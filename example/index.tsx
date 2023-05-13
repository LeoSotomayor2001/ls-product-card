import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ProductCar,ProductTitle,ProductImage,ProductButtons } from '../.';

const product={
  id:'1',
  title:'Coffee Mug!',
  // img:'./coffee-mug.png'
}

const App = () => {
  return (
    <>
      
 <ProductCar 
          product={product}
          initialValues={{
            count:4,
            maxCount:10
          }}
          >
           {
              ({reset,count,increaseBy,isMaxCountReached})=>(
                <>
                  <ProductImage  />
                  <ProductTitle />
                  <ProductButtons />
                </>
               )
           }       
             
 </ProductCar>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
