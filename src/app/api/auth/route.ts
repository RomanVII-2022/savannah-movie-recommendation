const APIREADACCESSTOKEN = process.env.API_READ_ACCESS_TOKEN;

export async function GET() {
  const createTokenResponse = await fetch('https://api.themoviedb.org/3/authentication/token/new', {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${APIREADACCESSTOKEN}`,
    },
  });
  const data = await createTokenResponse.json();
  return Response.json({ data });
}
