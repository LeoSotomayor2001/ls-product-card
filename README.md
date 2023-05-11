#LS-product-card

Este es un paquete de pruebas de despliegue en NPM
### Leodomí Sotomayor

# Ejemplo
```
import{ProductCar,ProductTitle,ProductImage,ProductButtons  } from 'ls-product-cart'
```

```

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
 ```