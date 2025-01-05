import { NextResponse } from 'next/server';

export async function middleware(request) {
    const token = request.cookies.get('token');
    console.log(token, "Tanhssssssss")

    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    return NextResponse.next();
}

export const config = {
    // áp dụng cho trang info
    matcher: '/info'
}