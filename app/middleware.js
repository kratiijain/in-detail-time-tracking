import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("authToken")?.value;
  const { pathname } = request.nextUrl;
  const isLoggedIn = !!token;

  // Redirect unauthenticated users trying to access dashboard
  if (pathname.startsWith("/dashboard/dashboard-admin") && !isLoggedIn) {
    return NextResponse.redirect(new URL("/authStack/login", request.url));
  }

  // Redirect logged-in users away from login page
  if (pathname === "/authStack/login" && isLoggedIn) {
    return NextResponse.redirect(
      new URL("/dashboard/dashboard-admin", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/dashboard-admin/:path*", "/authStack/login"],
};
