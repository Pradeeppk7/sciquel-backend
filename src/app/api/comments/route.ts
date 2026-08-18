import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();



export async function GET(req: NextRequest){
    // fill here in
//    const comments = await prisma.comment.findMany({
//   orderBy: {
//     createdAt: "desc",
//   },
//   take: 50,
// });
try {
    const { searchParams } = new URL(req.url);

    const skip = Number(searchParams.get("skip") ?? 0);

    const comments = await prisma.comment.findMany({
      orderBy: {
        createdAt: "desc",
      },
      skip: skip,
      take: 50,
    });

    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch comments" },
      { status: 500 }
    );
  }

}

export async function POST(req: NextRequest){
    // fill here in
    const body = await req.json();

  const comment = await prisma.comment.create({
    data: {
      name: body.name,
      email: body.email,
      comment: body.comment,
    },
  });
    return NextResponse.json(comment, { status: 200 })
}