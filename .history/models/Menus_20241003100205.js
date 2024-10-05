import mongoose,{Schema} from "mongoose";


const menuSchema= new Schema (
    {
        category:String,     //Dta that we want to send format
        description:String,
    },
    {
        timestamps:true,
    }
);


const Menus = mongoose.models.Menus || mongoose.model("Menus",menuSchema);

export default Menus;