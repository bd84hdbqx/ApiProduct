const mongoose = require('mongoose');
const ProductSchema=mongoose.Schema({
    name:{type:String,required:true},
    count:{type:Number,required:true}
},
{
    timestapms:true
}
)
const Product=mongoose.model("Product",ProductSchema)
module.exports=Product