import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


const public_routes = ["/login", "/forgot-password", "/reset-password"]

export async function proxy(request: NextRequest) {
    const token = (await cookies()).get("token")?.value
    const path = request.nextUrl.pathname
    if (!token && !public_routes.includes(path))
        return NextResponse.redirect(new URL("/login", request.url))
    if (token && public_routes.includes(path))
        return NextResponse.redirect(new URL("/", request.url))
    return NextResponse.next();
}
export const config = {
    matcher: [
        "/((?!_next|static|favicon.ico|images|\\.well-known).*)" // mention route on which proxy should not work
    ],
};
