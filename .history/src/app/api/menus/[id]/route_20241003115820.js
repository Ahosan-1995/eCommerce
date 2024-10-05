import conncetMongoDB from "../../../../../libs/mongodb";
import menus from "../../../../../models/Menus";

export async function PUT(request,{params}){
    const {id}=params;
    const {category, name,description,ingredient,price,image}=await request.json();
    await conncetMongoDB();
    await menus.findByIdAndUpdate(id,{category, name,description,ingredient,price,image});
    return Next
}