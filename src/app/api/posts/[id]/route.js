import Post from "@/models/Post";
import connection from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    await connection();
    const post = await Post.findById(id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("couldn't fetch single post", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;
  try {
    await connection();

    await Post.findByIdAndDelete(id);

    return new NextResponse("Your post has been deleted", { status: 201 });
  } catch (error) {
    return new NextResponse("couldn't delete your post", { status: 500 });
  }
};
