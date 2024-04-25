import { NextRequest, NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function middleware(req: NextRequest) {
  const { isAuthenticated } = getKindeServerSession(req);

  const isAuth = await isAuthenticated();

  return isAuth
    ? NextResponse.rewrite(new URL(req.nextUrl))
    : NextResponse.redirect(new URL("/", req.nextUrl));
}

export const config = {
  matcher: "/dashboard",
};
