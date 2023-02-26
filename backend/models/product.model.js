const mongoose=require("mongoose")

const productschema=mongoose.Schema({
    title:String,
    content: String,
    author:String
    
},{versionkey:false})

const productmodel=mongoose.model("product",productschema)

module.exports={productmodel}

