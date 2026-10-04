import mongoose from "mongoose" 

const announceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  }, 


  body: {
    type: String,
  }, 

  dateCreated: {
  type: Date.now,
  default: Date.now,
  }
}); 

const Announcement = mongoose.model('Announcement', announceSchema); 

export default Announcement;
