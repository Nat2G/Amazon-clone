import React,{useState,useEffect} from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import {useParams} from 'react-router-dom'
import axios from "axios"
import {productUrl} from "../../Api/EndPoints"
import ProductCard from "../../Components/Header/Catagory/CatagoryCard"    
// is this one corect
import classes from "./Results.module.css"; 




function Results() {
  const [results,setResults]=useState([])
  const {catagoryName}=useParams()
  console.log("Category from URL:", catagoryName);
  
  
  useEffect(() => {
    console.log("Fetching from:", `${productUrl}/products/category/${catagoryName}`);
     // ✅ Check URL
    axios.get(`${productUrl}/products/category/${catagoryName}`)
      .then((res) => {
        console.log("Fetched data:", res.data); // Debugging log
        setResults(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        
      });
  }, [catagoryName]);
  
  
  return (
    <LayOut>
    <section>
    <h1 style={{padding:"30px"}}>Results</h1>
    <p style={{padding:"30px"}}> catagory/{catagoryName}</p>
    <hr/>
    <div className={classes.products__container}>
    {results?.map((product)=>(
      <ProductCard 
      key={product.id}
      product={product}
      />
    ))}
      
    </div>
    </section>
    
    
    
    
    </LayOut>
  )
}

export default Results