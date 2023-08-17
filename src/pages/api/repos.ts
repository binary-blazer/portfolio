import { NextApiRequest, NextApiResponse } from "next";
import config from "../../../site.config.js"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const username = config.github.username;
  const token = process.env.GITHUB_ACCESS_TOKEN;

  const response = await fetch(
    "https://api.github.com/users/" +
      username +
      "/repos?sort=updated&per_page=8",
    {
      headers: {
        Authorization: "token " + token,
      },
    },
  );

  const data = await response.json();

  res.status(200).json(data);
}
