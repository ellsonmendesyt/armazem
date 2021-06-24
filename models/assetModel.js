const mongoose=require('mongoose')

const assetSchema = mongoose.Schema({
 name:{type:String,required:true,unique:true},
 desc:{type:String},
 category:{
    type:mongoose.ObjectId,
    ref:'Category'
 },
 location:{
    type:mongoose.ObjectId,
    ref:'Location'
 }
},{timestamps:true})


module.exports=mongoose.model('Asset',assetSchema);