import { user } from "@/Schemas/userSchema";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function POST(req){
    try{
    const db = await mongoose.connect(process.env.MONGO_URI)
    const body =await req.json();
    const {email,password} = body
    if(!email||!password){
        return NextResponse.json({msg:'Invalid Feilds'},{status:400})
    }
    const isExisting = await user.findOne({email})
    if(!isExisting){
        return NextResponse.json({msg:"invalid credentials"},{status:200})
    }

    const data = await bcrypt.compare(password,isExisting.password)
        const mobileNo = isExisting.mobileNo
        const userName = isExisting.userName
        const token = jwt.sign({userName,email,mobileNo},'thisisSecret')
        const response = NextResponse.json({msg:'ok',token},{status:200})
        response.cookies.set('token',token)
        return response 

    }catch(err){
        return NextResponse.json({msg:'Error While Creating the User'},{status:400})
    }
}