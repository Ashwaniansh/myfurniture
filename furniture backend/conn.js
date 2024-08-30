const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.URL);
mongoose.connection.on('connected', () => console.log('connected'));

const { Schema } = mongoose;
const contactSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    message: String
});
const Contact = mongoose.model('Contact', contactSchema);

const orderschema = new Schema({
    formData: {
      country: String,
      firstname: String,
      lastname: String,
      companyname: String,
      address: String,
      pincode: String,
      state: String,
      zip: String,
      email: String,        
      phoneno: String
    },
    cartdata: [
      {
        id: Number,
        productImage: String,
        productName: String,
        productPrice: Number,
        pQuantity: Number
      },
    ]
  })

const Order = mongoose.model('Order' ,orderschema)


module.exports = {Contact,Order}




