import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required."],
  },
  brand: {
    type: String,
  },
  category: {
    type: String,
    required: [true, "Category is required."],
  },
  price: {
    type: Number,
    required: true,
    min: [1, "Price must be greater than 0"],
    max: [1000000, "Price must be less than 10,00,000."],
  },
  stock: {
    type: Number,
    default: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  }
});

export default mongoose.model('Product', productSchema);