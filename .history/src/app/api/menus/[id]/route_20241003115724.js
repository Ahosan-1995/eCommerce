import conncetMongoDB from "../../../../../libs/mongodb";

export async function PUT(request,{params}){
    const {id}=params;
    const {category, name,description,ingredient,price,image}=await request.json();
    await conncetMongoDB();
    await Men
}