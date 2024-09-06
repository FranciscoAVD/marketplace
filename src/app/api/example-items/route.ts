import data from "@/lib/data/items.json"
import { NextResponse } from "next/server"
export async function GET(){

    return NextResponse.json({items: data})
}