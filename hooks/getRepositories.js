import { config } from "@/main.config";

export default function GetRepositories() {
  let repositories = [];

  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  const GITHUB_USERNAME = config.github.username;

  const fetchRepositories = async () => {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      },
    );
    const data = await response.json();
    repositories = data;
  };

  fetchRepositories();

  return repositories;
}
