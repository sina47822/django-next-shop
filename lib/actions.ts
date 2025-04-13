'use server';

import { cookies } from "next/headers";

export async function handleLogin(userId: string, accessToken: string, refreshToken: string) {
    const cookieStore = await cookies();  // استفاده از await
    cookieStore.set('session_userid', userId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // یک هفته
        path: '/',
    });
    cookieStore.set('session_accessToken', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60, // یک ساعت
        path: '/',
    });
    cookieStore.set('session_refreshToken', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
    });

}

export async function resetAuthCookies() {
    const cookieStore = await cookies();  // استفاده از await

    cookieStore.set('session_userid', '', {
        path: '/',
        maxAge: 0,
    });

    cookieStore.set('session_accessToken', '', {
        path: '/',
        maxAge: 0,
    });

    cookieStore.set('session_refreshToken', '', {
        path: '/',
        maxAge: 0,
    });
}

export async function getUserId() {
    const cookieStore = await cookies();  // استفاده از await
    const userId = cookieStore.get('session_userid')?.value;
    return userId ? userId : null;
}
