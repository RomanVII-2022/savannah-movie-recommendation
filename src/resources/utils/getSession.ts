import { cookies } from 'next/headers';

export async function getSessionIdFromCookies() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('session_id')?.value;
  return sessionId;
}
