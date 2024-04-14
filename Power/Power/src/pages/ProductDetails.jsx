import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../components/cartContext";

function ProductDetails() {

  const {productId} = useParams();

  const {addToCart} = useCart();


  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    setLoading(true);

    const getProducts = async () => {
      const res = await axios.get(
        `http://localhost:8080/api/${id}`);
      setProduct(res.data);
      setLoading(false);
        
    };
    getProducts();
   
  }, []);

  const handleClick = () => { 
    addToCart(product);
  }



  return(
    <div>
    { loading && <p>Loading..</p> }
    {
    product && (
      
      <div className="details">
       
        <div className="image-containerdetails">
        </div>
        <div className="small-image-containerdetails">
        <img src={product.images[0]} alt={product.images} />
        <img src={product.images[1]} alt={product.images} />
        <img src={product.images[2]} alt={product.images} />
        {/* <img src={product.images[3]} alt={product.images} /> */}

         
        </div>
        
        <p className="product-name">
        { product?.name } 
        </p>

        <p className="product-description">
          { product?.description }
        </p>
        
        <p className="product-price">
        { product?.price}:-
        </p>
        {/* <NavLink to="/ShoppingCart">  */}
        {/* <button className="buy-btn" onClick={() => addToCart(product) } >Lägg till i korgen</button> */}

        <button className="buy-btn" onClick={() => { addToCart(product); window.alert('Produkten har lagts till i din kundvagn!'); } } >Lägg till i korgen</button>
         
      </div>
  )
    } 
  </div>
  )
    

}
export default ProductDetails;
