import { user } from "@/Schemas/userSchema";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function POST(req){
    const db = await mongoose.connect(process.env.MONGO_URI)
    const body =await req.json();
    const {userName,email,mobileNo,password} = body
    if(!userName||!email||!mobileNo || !password){
        return NextResponse.json({msg:'Invalid Feilds'},{status:400})
    }
    const isExisting = await user.findOne({email})
    if(isExisting){
        return NextResponse.json({msg:'User Already exist'},{status:400})
    }
    
    const hashedPass =await bcrypt.hash(password,10)
    try{
        const newUser = await new user({
            userName,
            email,
            mobileNo,
            password:hashedPass
        })
        await newUser.save()
        const token = jwt.sign({userName,email,mobileNo},'thisisSecret')
        const response = NextResponse.json({msg:'user created sucessfully',token},{status:200})
        response.cookies.set('token',token)
        return response

    }catch(err){
        return NextResponse.json({msg:'Error While Creating the User'},{status:400})
    }
}