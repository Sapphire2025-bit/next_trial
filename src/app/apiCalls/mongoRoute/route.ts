import { NextRequest, NextResponse } from "next/server";
import connect from "@/app/lib/db/mongodb";
import User from "@/app/lib/models/user";

export async function GET(){
    try{
        await connect();
        const data = await User.find()
        return NextResponse.json({message: "successfull", data});
    }catch (error){
        return NextResponse.json("Error in fetching posts " + error);
    }
}

export async function POST(request: NextRequest){
    try{
        await connect();
        const {username, email, password} = await request.json();
        const newUser = new User({username, email, password});
        await newUser.save();
        return NextResponse.json({message: "user created successfully", user: newUser});
    }catch (error){
        return NextResponse.json("Error in creating user " + error);
    }
}