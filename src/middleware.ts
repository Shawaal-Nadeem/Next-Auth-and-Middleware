import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
    const session=true;
    const pathName=request.nextUrl.pathname
    // console.log(request.url);
    console.log(pathName);
    if(pathName.startsWith('/dashboard')){
        if(session){
            return NextResponse.next();
        }
        else{
            return NextResponse.rewrite(new URL('/auth/login', request.url));
        }
    }
//   return NextResponse.redirect(new URL('/home', request.url))
}
 
export const config = {
  matcher: '/dashboard/:path*',
}