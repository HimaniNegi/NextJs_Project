import { NextResponse } from "next/server";
import Cookies from "js-cookie";

export default function middleware(req) {
  // const config = {
  //   matcher: ["/user/:path*", "/dashboard/:path*"],
  // };

  let verify = Cookies.get("loggedIn");
  let url = req.url;

  if (!verify && url.includes("/dashboard")) {
    return NextResponse.redirect("http://localhost:3000/");
  } else if (verify && url === "http://localhost:3000/") {
    return NextResponse.redirect("http://localhost:3000/dashboard");
  }
}
