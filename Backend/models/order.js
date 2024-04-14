const mongoose = require("mongoose");

const orderModelSchema = mongoose.Schema({
  user: { required: true, type: mongoose.Schema.Types.ObjectId, ref: "user" },
  products: [
    {
      quantity: { type: Number, required: true },
      product: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
    },
  ],
  totalPrice: { type: Number },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const OrderModel = mongoose.model("order", orderModelSchema);

module.exports = { OrderModel };
