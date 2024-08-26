import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/libs/dbConnect";
import user from "@/model/user";

export async function GET(request: any) {

    await dbConnect()
    // Do whatever you want
    return NextResponse.json({ message: "Hello World" }, { status: 200 });
}

export async function POST(request: NextRequest) {
    await dbConnect()
    const body = await request.json()

    const existingUser = await user.findOne({
        email: body.email
    })

    // if (existingUser) {
    //     throw new Error('Email Already Exist')
    // }
    let savedInfo
    try {
        savedInfo = await user.create({
            password: body.password,
            email: body.email,
            role: body.role,
        })
    } catch (err) {
        throw new Error(`big error : ${err}`)
    }
    // console.log(savedInfo, 'main saved')
    return NextResponse.json(savedInfo);
}