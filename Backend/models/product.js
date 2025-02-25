const mongoose = require("mongoose");

const productModelSchema = mongoose.Schema({
  name: { required: true, type: String },
  images: [{ required: true, type: String }],
  description: { required: true, type: String },
  category: { required: true, type: String },
  price: { required: true, type: Number },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const ProductModel = mongoose.model("product", productModelSchema);

module.exports = { ProductModel };
