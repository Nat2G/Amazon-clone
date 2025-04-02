import React, {useEffect,useState} from 'react'
import axios from 'axios'
import ProductCard from "./ProductCard"
import classes from "./product.module.css"


function Product() {
  const [products, setProducts] = useState()
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    
    axios.get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsloading(false);
        
      })
      .catch((error) => {
        console.error(error);
        setIsloading(false);
        
      });
  }, []); 


  return (
    <>
    { isloading?(<Loader>):<section className={classes.products__container}>
      {
        products?.map((singleproduct)=>{
          return <ProductCard product={singleproduct} key={singleproduct.id}/>

        })
      }

      </section>}
    

    </>
    


  )
}

export default Product