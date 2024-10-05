import { NextResponse } from "next/server";
import conncetMongoDB from "../../../../../libs/mongodb";
import menus from "../../../../../models/Menus";


// Update single menu

export async function PUT(request,{params}){
    const {id}=params;
    const {category, name,description,ingredient,price,image}=await request.json();
    await conncetMongoDB();
    await menus.findByIdAndUpdate(id,{category, name,description,ingredient,price,image});
    return NextResponse.json({message:"Menu Updated"},{status: 200});
}


// get single menu
export async function GET(request,{params}){
    const id = params;
    await conncetMongoDB();
    const menu = await menus.findOne({_id: id});
    return Next

}