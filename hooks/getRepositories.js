import "dotenv/config";
import { config } from "@/main.config";

export default async function GetRepositories() {
    const username = config.github.username;
    const token = process.env.GITHUB_TOKEN;
    
    const response = await fetch(
        'https://api.github.com/users/' + username + '/repos?sort=updated&per_page=8',
        {
        headers: {
            Authorization: 'token ' + token,
        },
        }
    );
    
    const repositories = await response.json();
    return repositories;
}