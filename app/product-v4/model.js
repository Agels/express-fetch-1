const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:{
        type: String,
    required:[
        true,
        "field not be null"
    ],
    minlength:2,
    maxlength:100
},
    price: {
        type:Number,
        required:true
    },
    stock: {
        type:Number
    },

    status : {
        type : Boolean,
        default:true
    }
    
})

const products = mongoose.model('products',productSchema);
module.exports = products