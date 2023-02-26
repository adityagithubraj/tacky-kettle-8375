const mongoose=require('mongoose');

const pSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:[true,"price most be provides"],
    },
    featured:{
        type:Boolean,
        default:false,
    },
    rating:{
        type:Number,
        default:4.9,
    },
    createdAt:{
        type: Date,
        default:Date.now(),
    },
    company:{
        type:String,
        enum:{
            values:["apple","mi","nokiya"],
            message:`{VALUE} is nt support`
        },
    },
});


module.exports=mongoose.model("p",pSchema)