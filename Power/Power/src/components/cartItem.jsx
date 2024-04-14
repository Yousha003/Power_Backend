import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useCart } from "./cartContext";

export const CartItem = ({ item }) => { 
    const { addToCart, removeOne, removeItem } = useCart()

    const removeOneFromCart = () => {
        removeOne(item.product._id)
    }

    const addOneToCart = () => {
        addToCart(item.product)
    }

    const deleteProduct = () => {
        removeItem(item.product._id)

    }


    return(
        <div className="cart-item">

  <div className="item-details">
    <img src={item.product.images[0]} alt="product-image" className="item-image" />
    <div className="item-info">
      <p className="item-name">{item.product.name}</p>
      <p className="item-quantity-price">{item.quantity} x {item.product.price}</p>
    </div>
  </div>

  <div className="item-actions">

    <div className="item-buttons">
      <button onClick={removeOneFromCart} className="item-button"><FaMinus /></button>
      <button onClick={addOneToCart} className="item-button"><FaPlus /></button>
    </div>

    <button onClick={deleteProduct} className="delete-button"><FaTrash /></button>

  </div>

</div>

    )

}