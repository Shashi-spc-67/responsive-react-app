import React, { useEffect, useState } from 'react'
import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./module.Products.css"
// import { Link } from 'react-router-dom';
function Products() {

    let [product,setproducts]=useState([])
    let [isLoading,setisLoading]=useState(false)
    let [isError,setisError]=useState(false)
        let getProduct=async()=>{
            try{
                let fakeproducts=await fetch("https://fakestoreapi.com/products");
                fakeproducts=await fakeproducts.json();
                setproducts(fakeproducts);
                setisLoading(false)
                setisError(false)
            }
            catch(err){
                  console.log(err);
                  setisError(true)
                  setisLoading(false)
            }
        }
        // console.log(product);
        useEffect(()=>{
            setisLoading(true)
            getProduct()
        },[])  

return(
    <div className='container'>
     <div className='row'>
      <div className='d-flex flex-md-wrap justify-content-evenly'>
        {/* {isLoading && <Loader/>} */}
        {isError && <h1 style={{color:"red"}}>OOPS SOMETHING WENT WRONG!!!!!</h1>}

        { !isLoading && product.map((product)=>{
            return<div className='map order-5 p-5 m-2 d-flex-col align-items-center justify-content-center'>
            <img key={product.id} src={product.image} height={200} width={200} className='img d-flex justify-content-center'/>
            <h6 key={product.id}>{product.title}</h6>
            <h1 key={product.id}>{product.price}$</h1>
            {/* <Link to="/ProductDetails" path='./ProductDetails'>viewDetails</Link> */}
            </div>
        
        })}
       

            </div>
            </div> 
           </div>
  
  )
}

export default Products