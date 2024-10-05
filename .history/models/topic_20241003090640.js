import mongoose,{Schema} from "mongoose";


const menuSchema= new Schema (
    {
        title:String,     //Dta that we want to send format
        description:String,
    },
    {
        timestamps:true,
    }
);


const Menus = mongoose.models.Menus || mongoose.model("Menus",topicSchema);

export default Menus;