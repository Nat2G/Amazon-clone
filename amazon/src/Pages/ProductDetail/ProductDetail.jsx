import React, { useEffect, useState } from 'react';
import LayOut from '../../Components/LayOut/LayOut';
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/EndPoints";
import ProductCard from "../../Components/product/ProductCard";
import Loader from "../../Components/Loader/Loader"; // ✅ Ensure Loader is imported

function ProductDetail() {
  const [product, setProduct] = useState({});
  const [isloading, setIsloading] = useState(false);
  const { productId } = useParams(); 

  console.log("Product ID:", productId); 

  useEffect(() => {
    if (!productId) return; // ✅ Prevent API call if productId is undefined

    setIsloading(true);

    axios.get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsloading(false); // ✅ Corrected state update
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        setIsloading(false);
      });
  }, [productId]); 

  return (
    <LayOut>
      {isloading ? <Loader /> : <ProductCard product={product} />}
    </LayOut>
  );
}

export default ProductDetail;
