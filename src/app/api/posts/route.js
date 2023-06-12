import Post from "@/models/Post";
import connection from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  await connection();
  try {
    const posts = await Post.find();

    console.log(posts);
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("could not fetch all posts", { status: 500 });
  }
};
