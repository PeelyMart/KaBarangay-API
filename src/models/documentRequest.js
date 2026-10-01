import mongoose from "mongoose"; 



const requestSchema = new mongoose.Schema({ 
  docType: {
    type: String,
    required: true,
  }, 

  status: {
    type:String,
    enum: ["for validation", "open", "processing", "closed"],
    default: "for validation"
  }, 

  processedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Staff",
  },  

  requestBy: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: "Citizen",
    required: true,
  },

  sendTo: {
    type: "String",
    required: true,
  },

  receipt: {
    type: "String", 
    required: true, 
  }, 

}); 

const docRequest = mongoose.model("docRequest", requestSchema);

export default docRequest;
