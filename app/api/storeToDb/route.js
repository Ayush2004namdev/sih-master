import { user } from "@/Schemas/userSchema";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req){
    await mongoose.connect(process.env.MONGO_URI)
    const data = await req.json();
    const {title,userName} = data;

    const existinguser = await user.findOne({userName}) 
    if(!existinguser){
        return NextResponse.json({msg:'No User Found'});
    }
    if(existinguser.certificates.find((e) => e === title)){
        return NextResponse.json({msg:'Already Done'})
    }

    const newUser = await user.findOneAndUpdate((existinguser._id) , { $push:{certificates : title}})

    return NextResponse.json({newUser})
}

