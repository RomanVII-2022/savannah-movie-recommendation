import { getSessionIdFromCookies } from '@/resources/utils/getSession';
import { NextResponse } from 'next/server';

export async function GET() {
  const sessionId = await getSessionIdFromCookies();

  if (!sessionId) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  const res = await fetch(`https://api.themoviedb.org/3/account?session_id=${sessionId}`, {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`,
    },
  });

  const userData = await res.json();

  return NextResponse.json(userData);
}
