import React ,{useState , useEffect} from 'react'
import "../styles.css" ;
import {API} from "../backend";
import Base from "./Base";
import Card from "./Card"
import { getProducts } from './helper/coreapicalls';


export default function Home() {
  
  const [products,setProducts] =useState([])
  const[error ,setError] =useState (false)

  const loadAllProduct = () => {
    getProducts().then(data => {
      if(data.error) {
        setError (data.error)
      } else {
        setProducts(data);
      }
    })
  }

  useEffect ( () => {
    loadAllProduct()
  } , [])


    return (
    <Base title = "Home page" description = "Welcome to the Store" >    
        <div className = "row text-center">
          <h1 className = "text-white"> All T Shirts</h1>
            <div className ="row">
            {products.map ((product ,index) => {
              return (
                  <div key={index} className = "col-3 mb-4">
                    <Card product = {product}/>
                  </div>
              )
            })}
            </div>          
        </div>
    </Base>
  )
}
 