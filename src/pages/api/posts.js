export default async (req, res) => {
    const data = [
        { 
            id: 1, 
            title: 'Post 1', 
            slug: 'post-1', 
            description: 'Content 1', 
            image: 'https://cdn.discordapp.com/attachments/964255324687200328/1004455491365240872/Ukraine_Logo_No_Backround.png', 
            date: 'October 18, 2022', 
            author: 'JanjyTapYT',
            authorImage: 'https://cdn.discordapp.com/attachments/964255324687200328/1017078499217002496/Cool-Profile-Picture.jpg',
            tags: ['Test', 'Test2', 'Test3'],
            mdxFile: `${process.cwd()}/src/data/blog/post-1.mdx`
        },
    ]

    res.status(200).json(data)
};