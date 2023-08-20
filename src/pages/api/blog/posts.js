import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

export default async function handler(req, res) {
  const postsDirectory = path.join(process.cwd(), 'src', 'data', 'blog', 'posts');

  const postDirectories = fs.readdirSync(postsDirectory);

  const posts = [];

  for (const postDirectory of postDirectories) {
    const postDirectoryPath = path.join(postsDirectory, postDirectory);

    const dataFilePath = path.join(postDirectoryPath, 'data.json');
    const dataFileContents = fs.readFileSync(dataFilePath, 'utf8');
    const postData = JSON.parse(dataFileContents);

    const contentFilePath = path.join(postDirectoryPath, 'content.md');
    const contentFileContents = fs.readFileSync(contentFilePath, 'utf8');

    const post = {
      name: postData.name,
      description: postData.description,
      slug: postData.slug,
      banner: postData.banner,
      releaseDate: postData.releaseDate,
      tags: postData.tags,
      content: contentFileContents,
    };
    posts.push(post);
  }

  res.status(200).json(posts);
}