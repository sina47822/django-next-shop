// app/api/user/route.ts
import { getUserId } from '@/lib/actions';
import { NextResponse } from 'next/server';

export async function GET() {
  const userId = await getUserId(); // مثلاً از session یا JWT
  return NextResponse.json({ userId });
}
