import { NextResponse } from "next/server";
import conncetMongoDB from "../../../../libs/mongodb";






export async function POST (request){
    const {title, description}= await request.json();
    await conncetMongoDB();
    await Menu.create({title,description});
    return NextResponse.json({message:'Topic created'},{status:201});
}




export async function GET (){
    await conncetMongoDB();
    const topics = await Topic.find();
    return NextResponse.json({topics});
}



export async function DELETE(request){
    const id =request.nextUrl.searchParams.get('id');
    await conncetMongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message:"Topic deleted"},{status:200});
}