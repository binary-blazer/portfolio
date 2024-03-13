import { config } from "@/main.config";

export async function GET(request) {
  try {
    const username = config.github.username;
    const token = process.env.GITHUB_TOKEN;
    const url = `https://api.github.com/users/${username}/repos?sort=updated&per_page=8`;

    if (!token) throw new Error("No GITHUB_TOKEN in .env file found");

    const response = await fetch(url, {
      headers: {
        Authorization: `token ${token}`,
      },
    });

    const repositories = await response.json();
    return new Response(JSON.stringify(repositories), {
      headers: {
        "content-type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
}
