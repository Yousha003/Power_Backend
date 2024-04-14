import React, { useState } from "react";
import { CartItem } from "./cartItem";
import { useCart } from "./cartContext";
import axios from "axios";

export const ShoppingCart = ({ isCheckoutPage, setIsOpen }) => {
  const { cart, totalPrice, clearCart } = useCart();

  const { addtoCart } = useCart();

  const [confirmation, setConfirmation] = useState("");

  const handleOrder = async () => {
    const order = {
      products: cart.map((item) => ({
        productId: item.product._id,
        quantity: item.quantity,
      })),
    };

    try {
      const res = await axios.post(
        `https://js2-ecommerce-api.vercel.app/api/orders`,
        order
      );
      console.log(res);

      setConfirmation("Tack för din order! Vi återkommer så snart vi kan.");

      if (res.status === 201) {
        clearCart();
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cart.length < 1 && (
          <div className="empty-cart">
            <p> Din varukorg är tom! </p>
          </div>
        )}
        {cart.map((item) => (
          <CartItem key={`cart_${item.product._id}`} item={item} />
        ))}
      </div>

      <hr className="divider" />

      <div className="total-section">
        <div className="total-price">
          <p>Totala Priset: {totalPrice} </p>
          <small>Inkl. moms</small>
        </div>
        <div className="checkout-buttons">
          {isCheckoutPage ? (
            <></>
          ) : (
            <button onClick={handleOrder} className="checkout-link">
              {" "}
              Lägg till order!{" "}
            </button>
          )}
        </div>
        {confirmation && <p>{confirmation}</p>}
      </div>
    </div>
  );
};
