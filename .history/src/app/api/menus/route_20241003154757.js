import { NextResponse } from "next/server";
import conncetMongoDB from "../../../../libs/mongodb";
import menus from "../../../../models/Menus";






export async function POST (request){
    const {category, name,description,ingredient,price,image}= await request.json();
    await conncetMongoDB();
    await menus.create({category,name,description,ingredient,price,image});
    return NextResponse.json({message:'Menu created'},{status:201});
}



// 
export async function GET (){
    await conncetMongoDB();
    const menu = await menus.find();
    return NextResponse.json({menu});
}



export async function DELETE(request){
    const id =request.nextUrl.searchParams.get('id');
    await conncetMongoDB();
    await menus.findByIdAndDelete(id);
    return NextResponse.json({message:"Menu deleted"},{status:200});
}



