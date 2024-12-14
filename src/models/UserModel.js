const mongoose = mongoose('require');

const DataSchema = mongoose.DataSchema({
    email:{type:String, require:true, unique:true, lowercase:true},
    opt:{type:String, require: true}
},
{
    timestamps:true, versionKey:false
})
const UserModel= mongoose.model('users', DataSchema)
module.exports=UserModel