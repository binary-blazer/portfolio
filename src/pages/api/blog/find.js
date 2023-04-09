import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

export default async function handler(req, res) {
    const { slug } = req.query;

        const postsDirectory = path.join(process.cwd(), 'src', 'data', 'blog', 'posts', `${slug}`);

        const dataFilePath = path.join(postsDirectory, 'data.json');
        const dataFileContents = fs.readFileSync(dataFilePath, 'utf8');
        const postData = JSON.parse(dataFileContents);

        const contentFilePath = path.join(postsDirectory, 'content.md');
        const contentFileContents = fs.readFileSync(contentFilePath, 'utf8');

        const post = {
            name: postData.name,
            author: postData.author,
            authorAvatar: postData.authorAvatar,
            description: postData.description,
            slug: postData.slug,
            banner: postData.banner,
            releaseDate: postData.releaseDate,
            tags: postData.tags,
            content: contentFileContents,
        };
        
    res.status(200).json(post);
}
