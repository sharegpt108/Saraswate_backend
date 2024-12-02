const mongoose = require('mongoose');

const Contactdetails = mongoose.Schema({ 
    name: {
        type: String,
    },
    phone: {
        type: Number,
    },
    massage: {
        type: String, 
    },
    email: {
        type: String,
        default: null, // Default to null if email is not provided
      },
})

const contactlist = mongoose.model('ContactDetails',Contactdetails);
module.exports = contactlist;
