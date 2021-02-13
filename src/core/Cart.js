import React ,{useState , useEffect} from 'react'
import "../styles.css" ;
import {API} from "../backend";
import Base from "./Base";
import Card from "./Card"
import { getProducts } from './helper/coreapicalls';
import { loadCart } from './helper/cartHelper';
import Paymentb from './Paymentb';


const Cart = () => {
    const[products , setProducts] = useState ([])

    const[reload , setReload] = useState (false)  //Please refer Section 17 Video 7


    useEffect(()=> {
        setProducts(loadCart())
    } ,[reload]);

    const loadAllProducts = (products) => {
        return(
            <div>
                <h2>Load Prods</h2>
                {products.map((product ,index) => (
                    <Card
                    key = {index}
                    product = {product}
                    removeFromCart = {true}
                    addtoCart = {false} 
                    setReload = {setReload}  //Please refer Section 17 Video 7
                    reload = {reload}                   //Please refer Section 17 Video 7
                    />
                ))}
            </div>
        )
    }

   /* const loadCheckout = () => {
        return(
            <div>
                <h2>Checkout</h2>
            </div>
        )
    }*/
  
return (
    <Base title = "Cart Page" description = "Ready to Checkout" >    
        <div className = "row text-center">
            <div className ="col-6">{products.length > 0 ? loadAllProducts(products) : (<h3>Empty Cart</h3>)}</div>
            <div className ="col-6"><Paymentb products = {products} setReload = {setReload}/></div>         
        </div>
    </Base>
  )
}
 
export default Cart