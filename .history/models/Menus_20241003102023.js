import mongoose,{Schema} from "mongoose";


const menuSchema= new Schema (
    {
        category:String,     //Dta that we want to send format
        name:String,
        description:String,
        ingredient:String,
        price:String,
        image:String,

    },
    {
        timestamps:true,
    }
);


const menus = mongoose.models.menus || mongoose.model("Menus",menuSchema);

export default menus;