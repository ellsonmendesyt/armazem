const mongoose=require('mongoose')

const locationSchema = mongoose.Schema({
 name:{type:String,required:true,unique:true},
 desc:{type:String}
},{timestamps:true})


module.exports=mongoose.model('Location',locationSchema);