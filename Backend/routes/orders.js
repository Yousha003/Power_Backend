const express = require("express");
const { OrderModel } = require("../models/order");
const { v4: uuidv4 } = require("uuid");
const { OrderProductModel } = require("../models/orderProducts");

const orderRouter = express.Router();

// Create a new product
orderRouter.post("/orders", async (req, res) => {
  const { products, user } = req.body;

  try {
    let finalProducts = await OrderProductModel.insertMany(products);
    let orderData = await OrderModel({ user, products: finalProducts }).save();

    res
      .status(201)
      .json({ message: "Order created successfully", order: orderData });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all orders
orderRouter.get("/orders", async (req, res) => {
  // req.body.user
  const { user } = req.body;

  try {
    const ordersWithData = await OrderModel.find({ user }).populate(
      "products.product"
    );
    ordersWithData.forEach((order) => {
      let totalPrice = 0;
      order.products.forEach((product) => {
        totalPrice += product.quantity * product.product.price;
      });
      order.totalPrice = totalPrice;
    });

    res.status(200).json({ data: ordersWithData });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

orderRouter.get("/orders/:id", async (req, res) => {
  const { id } = req.params;
  const { user } = req.body;
  try {
    const order = await OrderModel.findById({ _id: id, user }).populate(
      "products.product"
    );

    if (!order) {
      return res.status(404).json({ message: "Order not found !" });
    }

    let totalPrice = 0;
    order.products.forEach((product) => {
      totalPrice += product.quantity * product.product.price;
    });
    order.totalPrice = totalPrice;

    res.status(200).json({ data: order });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update any orders
orderRouter.patch("/orders/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await OrderModel.findByIdAndUpdate(id, req.body);
    res.status(200).json({ message: "Product Updated Success" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete any product

orderRouter.delete("/orders/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await OrderModel.findByIdAndDelete(id);
    res.status(204).json({ message: "Order Deleted Success" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = { orderRouter };
