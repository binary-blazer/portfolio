module.exports = {
    base: 'https://janjytapyt.me',
    siteMetadata: {
        title: 'JanjyTapYT | Website | Developer from Germany',
        description: 'Im JanjyTapYT, a pro full stack developer from Germany',
        author: 'JanjyTapYT',
        authorImage: "https://cdn.discordapp.com/attachments/964255324687200328/1017078499217002496/Cool-Profile-Picture.jpg",
        image: '/banner.png',
        favicon: '/favicon.png',
        url: 'https://janjytapyt.me',
        themeColor: '#0055ff',
        email: 'me@janjytapyt.me',
    },
    
    IndexPage: {
        lanyard: {
            enabled: true,
            id: '679407120743137300',
        }
    },

    AboutMePage: {
        yourLand: 'Germany',
        developerGrade: 'Full Stack Developer',
        developerGrade2: 'Full Stack',
    },

    github: {
        enabled: true,
        accessToken: process.env.GITHUB_ACCESS_TOKEN,
        username: 'JanjyTapYT',
    },

    social: {
        twitter: 'https://twitter.com/JanjyTapYT',
        github: 'https://github.com/JanjyTapYT',
        linkedin: 'https://www.linkedin.com/in/janjytapyt/',
        instagram: 'https://www.instagram.com/janjytap.yt/',
        facebook: 'https://www.facebook.com/janjytapyt',
        discord: 'https://discord.gg/4Z7Y4Z7',
    },

    projects: {
        enabled: true,
        data: [
            { 
                id: 1,
                image: "https://cdn.discordapp.com/attachments/1003714890638303232/1008044425722740797/22-modified_1.png",
                slug: "GiveAways",
                name: "GiveAways",
                github: false,
                githubLink: "",
                website: true,
                websiteLink: "https://giveaways-bot.com",
                invite: false,
                inviteLink: "",
                description: "A Discord bot that allows you to host giveaways on your server.",
              },
              { 
                id: 2,
                image: "https://cdn.discordapp.com/attachments/971049189377179718/1031863674903728128/Design_ohne_Titel2.png", 
                slug: "Janjyfy",
                name: "Janjyfy", 
                github: true,
                githubLink: "https://github.com/Stoneclane-Development/Janjyfy-Bot",
                website: false,
                websiteLink: "",
                invite: false,
                inviteLink: "",
                invite: true,
                inviteLink: "https://discord.com/api/oauth2/authorize?client_id=995397263130112081&permissions=8&scope=bot%20applications.commands",
                description: "A Discord Moderation bot. This bot is easy to use.",
              },
              { 
                id: 3,
                image: "https://cdn.discordapp.com/attachments/952628698807414785/963460672811835442/Stoneclane_List_Banner.png", 
                slug: "Stoneclane-Botlist",
                name: "Stoneclane Botlist", 
                github: false,
                githubLink: "",
                website: true,
                websiteLink: "https://stoneclane.xyz",
                invite: false,
                inviteLink: "",
                description: "Do you want to grow your discord bot / server? Then you are right.", 
              },
              { 
                id: 4,
                image: "https://cdn.discordapp.com/attachments/971049189377179718/1031863899244482692/unknown.png", 
                slug: "portfolio",
                name: "My Portfolio", 
                github: true,
                githubLink: "https://github.com/JanjyTapYT/portfolio",
                website: true,
                websiteLink: "https://janjytapyt.me",
                invite: false,
                inviteLink: "",
                description: "My Portfolio Website. It Is insane cool and it is open source.",
              }
        ]
    },

    skills: {
        enabled: true,
        data: [
        { name: "HTML", src: "/images/html.svg" },
        { name: "Bootstrap", src: "/images/bootstrap.svg" },
        { name: "CSS", src: "/images/css.svg" },
        { name: "Javascript", src: "/images/javascript.svg" },
        { name: "Node.js", src: "/images/nodejs.svg" },
        { name: "Sass", src: "/images/sass.svg" },
        { name: "C#", src: "/images/csharp.svg" },
        { name: "Mongo DB", src: "/images/mongodb.svg" },
        { name: "Prisma", src: "/images/prisma.svg" },
        { name: "PHP", src: "/images/php.svg" },
        { name: "TailwindCSS", src: "/images/tailwindcss.svg" },
        { name: "Next.js", src: "/images/nextjs.svg" },
        { name: "MySQL", src: "/images/mysql.svg" },
        { name: "Express", src: "/images/expressjs.svg" },
        { name: "Fastify", src: "/images/fastify.svg" },
        { name: "React", src: "/images/react.svg" },
        { name: "Bulma", src: "/images/bulmacss.svg" },
        { name: "Git", src: "/images/git.svg" },
        { name: "Alpine.js", src: "/images/alpinejs.svg" },
        { name: "Yarn", src: "/images/yarn.svg" },
        { name: "Sails.js", src: "/images/sailsjs.png" },
        { name: "Figma", src: "/images/figma.svg" },
        { name: "Photoshop CC", src: "/images/photoshop.svg" },
        { name: "Github", src: "/images/github.svg" },
        { name: "Firebase", src: "/images/firebase.svg" },
        { name: "Heroku", src: "/images/heroku.svg" },
        { name: "pnpm", src: "/images/pnpm.svg" },
        { name: "Webpack", src: "/images/webpack.svg" },
        { name: "Iconscout", src: "/images/iconscout.png" },
        { name: "Typescript", src: "/images/typescript.svg" },
        { name: "Nest.js", src: "/images/nestjs.svg" }
        ]
    },

    socials: [
        { name: "Discord", src: "/images/discord.svg", link: "https://discord.gg/2Z8Y4Z9" },
        { name: "Twitter", src: "/images/twitter.svg", link: "https://twitter.com/JanjyTapYT" },
        { name: "Github", src: "/images/github.svg", link: "https://github.com/JanjyTapYT" },
        { name: "Instagram", src: "/images/instagram.svg", link: "https://instagram.com/janjytapyt" },
        { name: "Twitch", src: "/images/twitch.svg", link: "https://twitch.tv/janjytapyt" },
    ],

    pages: [
        {
            name: "Home",
            href: "/",
            icon: {
                default: 'fal fa-home',
                active: 'fas fa-home'
            },
            current: false,
        },
        {
            name: "About",
            href: "/about",
            icon: {
                default: 'fal fa-user',
                active: 'fas fa-user'
            },
            current: false,
        },
        {
            name: "Projects",
            href: "/projects",
            icon: {
                default: 'fal fa-project-diagram',
                active: 'fas fa-project-diagram'
            },
            current: false,
        },
        {
            name: "Contact",
            href: "/contact",
            icon: {
                default: 'fal fa-envelope',
                active: 'fas fa-envelope'
            },
            current: false,
        }
    ],
};
