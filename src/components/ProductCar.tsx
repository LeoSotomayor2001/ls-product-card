
import { useProduct } from "../hooks/useProduct";
import React,{createContext } from "react";
import { InitialValues, Product, ProductCardHandlers, ProductContextProps, onChangeArgs } from '../interfaces/interfaces';
import styles from "../styles/styles.module.css";

export interface Props{
  product:Product;
  // children?:ReactElement | ReactElement[];
  children:(args:ProductCardHandlers)=> JSX.Element,
  className?:string;
  style?:React.CSSProperties ;
  onChange?:(args: onChangeArgs)=> void;
  value?:number;
  initialValues?:InitialValues;
}

export const ProductContext =createContext({} as ProductContextProps);

const {Provider}= ProductContext;

export const ProductCar = ({children,product,className,style,onChange,value,initialValues}:Props) => {

  const {counter,increaseBy,maxCount,isMaxCountReached,reset}= useProduct({onChange,product,value,initialValues});

  return (
   <Provider value={{counter,increaseBy,product,maxCount}}>

         <div 
            className={`${styles.productCard} ${className}`}
            style={style}  
          >

            {
              children({
                count:counter,
                isMaxCountReached,
                maxCount:initialValues?.maxCount,
                product,
                increaseBy,
                reset
              })
            }
        
        </div>

   </Provider>
  )
}