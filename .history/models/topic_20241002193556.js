import mongoose,{Schema} from "mongoose";


const topicSchema= new Schema (
    {
        title:String,     //Dta that we want to send format
        description:String,
    },
    {
        timestamps:true,
    }
);


const Topic = mongoose.models.Topic || mongoose.model("Topic",topicSchema);

export default Topic;