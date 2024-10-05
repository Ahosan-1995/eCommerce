import mongoose,{Schema} from "mongoose";


const menuSchema= new Schema (
    {
        category:String,     //Dta that we want to send format
        name:String,
        description:String,
        ingredient:String,
        price:String,
        image:String,
        io:L

    },
    {
        timestamps:true,
    }
);


const Menus = mongoose.models.Menus || mongoose.model("Menus",menuSchema);

export default Menus;