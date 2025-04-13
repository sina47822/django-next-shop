// pages/api/user.ts
import { getUserId } from '@/lib/actions';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const userId = await getUserId();
  return NextResponse.json({ userId });
}