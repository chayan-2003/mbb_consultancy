import mongoose from 'mongoose';
const { Schema } = mongoose;
const ContactSchema= new mongoose.Schema({
  name:{type:String,
    required:true},

  email:{type:String,
    required:true},

  contact_number: {
    type: Number,
    required: true,
    validate: {
      validator: function (value) {
        // Custom validation function to check if the contact_number is a 10-digit number
        const isValidNumber = /^\d{10}$/.test(value);
        return isValidNumber;
      },
      message: 'Enter a 10-digit number',
      },
    },
  work_Title:{type:String,
    required:true},

  desc:{type:String,
      required:false},     
})
export default  mongoose.model("Contact",ContactSchema) //phone number //company phone  number