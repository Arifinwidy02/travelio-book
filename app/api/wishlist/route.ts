import { handleApiError } from "@/lib/api-error";
import { connectDB } from "@/lib/mongodb";
import { Wishlist } from "@/models/Wishlist";
import { NextResponse } from "next/server";


export const POST = async (req: Request) => {
  try {
    await connectDB();
    const body = await req.json();
    const item = await Wishlist.create(body);
    return NextResponse.json(item, { status: 200 });
  } catch (error: any) {
    return handleApiError(error)
  }
}

export const GET = async () => {
try {
    await connectDB();
    const items = await Wishlist.find({}).sort({createdAt: -1});
    return NextResponse.json(items, { status: 200 });
} catch (error) {
    return handleApiError(error);
}
}