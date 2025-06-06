const APIREADACCESSTOKEN = process.env.API_READ_ACCESS_TOKEN;

export async function GET(request: Request) {
  if (request.url.includes('approved=true')) {
    const url = new URL(request.url).searchParams;
    const token = url.get('request_token');
    const response = await fetch('https://api.themoviedb.org/3/authentication/session/new', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: `Bearer ${APIREADACCESSTOKEN}`,
      },
      body: JSON.stringify({ request_token: token }),
    });

    const responseData = await response.json();

    console.log('response was okay', responseData);

    if (!responseData.session_id) {
      throw new Error('Failed to create session');
    }

    return Response.json({ responseData });
  }
}
