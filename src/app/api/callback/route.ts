import { NextResponse } from 'next/server';

const APIREADACCESSTOKEN = process.env.API_READ_ACCESS_TOKEN;

export async function GET(request: Request) {
  const url = new URL(request.url);
  const requestToken = url.searchParams.get('request_token');
  const approved = url.searchParams.get('approved');
  const redirectPath = url.searchParams.get('state') || '/';

  if (approved !== 'true' || !requestToken) {
    return NextResponse.redirect(new URL('/login-error', request.url));
  }

  const tmdbResponse = await fetch('https://api.themoviedb.org/3/authentication/session/new', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: `Bearer ${APIREADACCESSTOKEN}`,
    },
    body: JSON.stringify({ request_token: requestToken }),
  });

  const data = await tmdbResponse.json();

  if (!data.session_id) {
    return NextResponse.redirect(new URL('/login-error', request.url));
  }

  const response = NextResponse.redirect(new URL(redirectPath, request.url));
  response.cookies.set({
    name: 'session_id',
    value: data.session_id,
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}
