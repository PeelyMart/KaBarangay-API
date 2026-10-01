const mongoose = ("mongoose");

const productSchema = new mongoose.Schema({
  isActive: {
    type: Boolean, 
    default: true,
  }, 

  isVerified: {
    type: Boolean,
    default: false,
  },

  firstName: {
    type: String, 
    required: true,
  }, 

  lastName: {
    type: String, 
    required: true,
  }, 

  password: {
    type: String,
    required: true,
  }, 

  email: {
    type: String, 
    required: true,
  },

  idPath: {
    type: String,
  },

  }); 

const Product = mongoose.model("Product", productSchema);

export default Product;
