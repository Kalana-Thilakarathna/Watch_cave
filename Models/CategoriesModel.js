import mongoose from "mongoose";

const CategoriesSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true,
    }   
);

export default mongoose.model("Categories", CategoriesSchema);