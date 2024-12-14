const mongoose = require('mongoose');
const DataSchema = mongoose.Schema({
  img1:{type:String, require: true },
  img2:{type:String, require: true },
  img3:{type:String, require: true },
  img4:{type:String, require: true },
  img5:{type:String},
  img6:{type:String},
  img7:{type:String},
  img8:{type:String},
  des:{type:String, require: true},
  color:{type:String, require: true},
  size:{type:String, require: true},


  productID: {type:mongoose.Schema.Types.ProductID, require: true},
},
{timestamps: true, versionKey:false}
)
const ProductDetailModel =mongoose.model('productdetails', DataSchema) 
module.exports=ProductDetailModel