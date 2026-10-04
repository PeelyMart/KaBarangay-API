import mongoose from "mongoose" 

const userSchema = new mongoose.Schema({ 
 isActive: {
    type: Boolean, 
    default: true,
  }, 

  position: {
    type: String,
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

}); 

const Staff = mongoose.model("Staff", userSchema); 

export default Staff;

