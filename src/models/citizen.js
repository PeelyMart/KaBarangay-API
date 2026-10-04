import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
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

const Citizen = mongoose.model("Citizen", userSchema);

export default Citizen;
