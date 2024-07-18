import { getContent } from "@contenthook/browser";

export async function POST(request) {
  try {
    const { fileName } = await request.clone().json();

    const content = await getContent({
      api_key: process.env.CONTENTHOOK_API_KEY,
      fileName,
    });

    return new Response(JSON.stringify(content), { status: 200 });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
}
