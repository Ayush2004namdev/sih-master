import { user } from "@/Schemas/userSchema"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export async function POST(req){
    try{
    
    const data = await req.json()
    console.log(data)
    const {name,mobileNo} = data
    console.log(name,mobileNo)
    await mongoose.connect(process.env.MONGO_URI)
    const newUser = await user.findOne({userName:name,mobileNo})
    const certificates = newUser.certificates
    return NextResponse.json({certificates})
    }catch(e){
        return NextResponse.json({msg:'error while fetching certificates',e})
    }
}
