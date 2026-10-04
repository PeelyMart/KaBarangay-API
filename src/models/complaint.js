import mongoose from "mongoose" 




const complaintSchema = new mongoose.Schema({ 
  complaintType: String, 
  description: String, 
  involvedParties: [String], 

  requestBy: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Citizen", 
  },  

  processedBy:  {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Staff", 
  },  

  email: {
    type: String,
    required: true,
  }, 

  status:{
    type: String, 
    enum: ["open, processing, processed, closed"], 
    default: "open",
  },
}); 
 

complaintSchema.index({
  title: 'text', 
  description: 'text',
}); 


const Complaint = mongoose.model('Complaint', complaintSchema);

export default Complaint;
