import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export function proxy(request: NextRequest) {
 if (request.nextUrl.pathname === "/Contact") {
  const url = request.nextUrl.clone();
  url.pathname = "/contact";
  return NextResponse.redirect(url, 308);
 }
 return NextResponse.next();
}
export const config = { matcher: ["/Contact", "/contact"] };
