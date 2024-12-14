const mongoose = require('mongoose');
const DataSchema = mongoose.Schema({
 title:{type:String, require:true},
 des:{type:String, require:true},
 price:{type:String, require:true},
 image:{type:String, require:true},
 productID:{type: mongoose.Schema.Types.ProductID, require:true}
},
{timestamps: true, versionKey:false}
)
const productSliderModel = mongoose.model('productsliders', DataSchema)

module.exports = productSliderModel