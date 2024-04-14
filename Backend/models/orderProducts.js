const mongoose = require("mongoose");

const orderProductSchema = mongoose.Schema({
  product: { required: true, type: String },
  quantity: { required: true, type: Number },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const OrderProductModel = mongoose.model("orderproduct", orderProductSchema);

module.exports = { OrderProductModel };
