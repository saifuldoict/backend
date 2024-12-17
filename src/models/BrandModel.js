const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    brandName: {type:String, require:true, unique:true},
    brandImg: {type:String, require:true}
},
{timestamps:true, versionKey: false}
)

const BrandModel = mongoose.model('brands', DataSchema)

module.exports= BrandModel