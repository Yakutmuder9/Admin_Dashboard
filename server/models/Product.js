const mongoose = require("mongoose");

const reviewScema = mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true},
  comment: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId , require: true, ref: "User"},

})

const ProductSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    rating: { type: Number, required: true, default : 0 },
    reviews: [reviewScema],
    numReviews:{type: Number, required: true, default : 0},
    categories: { type: Array },
    size: { type: Array },
    color: { type: Array },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
