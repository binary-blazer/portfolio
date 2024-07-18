import { getContents } from "@contenthook/browser";

export async function GET(request) {
  try {
    const contents = await getContents({
      api_key: process.env.CONTENTHOOK_API_KEY,
    });

    return new Response(JSON.stringify(contents), { status: 200 });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
}
