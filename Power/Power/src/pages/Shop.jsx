import { useEffect, useState } from "react"
import axios from 'axios'
import { Product } from "../components/Product"


function Shop() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            const res = await axios.get(`http://localhost:8080/api/products/${_id}`)
            setProducts(res.data)
        }
        getProducts()

    }, [])

  return (
    <div>
        <h1 className="home-title">
        Välkommen till Power!
      </h1>


    <div className="shop">

        {products.map(product => (
            <Product key={product._id} product={product} />

            

        ))
    
    }
        
    </div>

    </div>
  )
}
export default Shop