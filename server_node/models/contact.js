import mongoose from 'mongoose';
const { Schema } = mongoose;
const ContactSchema= new mongoose.Schema({
  name:{type:String,
    required:true},

  email:{type:String,
    required:true},

  contact_number:{type:Number,
  required:true},

  work_Title:{type:String,
    required:true},

  desc:{type:String,
      required:true},
  


         
})
export default  mongoose.model("Contact",ContactSchema) //phone number //company phone  number