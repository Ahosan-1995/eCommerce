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


const Menu = mongoose.models.Menu || mongoose.model("Menu",topicSchema);

export default Menu;