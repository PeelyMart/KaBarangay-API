import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
  nameOfEquipment: {
    type: String, 
    required: true
  }, 


  requestBy: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Citizen", 
    required: true,
  },

  processedBy: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Citizen",
  },

  retuenedDate: {
    type: Date, 
  },

  staus: {
    type: String,
    enum: "requesting, borrowing, returned, rejected",
    default: "requesting",
  }, 

  rejectionReason: String, 

});

const EquipRequest = mongoose.model("EquipRequest", requestSchema); 

export default EquipRequest; 

