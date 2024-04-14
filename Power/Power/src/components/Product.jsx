import { Link } from "react-router-dom"

export const Product = ({product}) => {
    console.log(product)
  return (
    <Link to={`/details/${product._id}`} className="product"> 
        <div className="image-container">
            <img src={product.images[0]} alt={product.name} />
        </div>
        <p> { product.name } </p>
    
    </Link>
  )
}