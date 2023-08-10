import mongoose from "mongoose";


const reviewSchema = mongoose.Schema({
    userName:{type:String,required:true},
    userImage:{type:String},
    rating:{type:Number,required:true},
    comment:{type:String,required:true},  
    userID:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},  
},
{
    timestamps:true,
}

)


const MoviesSchema = mongoose.Schema({
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        
    },
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    titleImage:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    time:{
        type:Number,
        required:true
    },
    video:{
        type:String,
        //required:true
    },
    rate:{
        type:Number,
        required:true,
        default:0
    },
    numberOfReviews:{
        type:Number,
        required:true,
        default:0
    },
    reviews:[reviewSchema],
    Casts:[
        {
            name:{ type:String, required:true},
            image:{ type:String, required:true},


        }
        ]
    },
    {
        timestamps:true,
    }
);
    
export default mongoose.model("Movies",MoviesSchema);



    