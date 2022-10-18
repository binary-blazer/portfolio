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

    AboutMePage: {
        yourLand: 'Germany',
        developerGrade: 'Full Stack Developer',
        developerGrade2: 'Full Stack',
    },

    contact: {	
        webhook: 'https://discord.com/api/webhooks/996454141197025391/gtwGkipX_Ce6x16PVvPjqzDTE6y9FpRmCJrcRVijtITF7gz4rivb7j6INBjy3brkp0yu'
    },

    social: {
        twitter: 'https://twitter.com/JanjyTapYT',
        github: 'https://github.com/JanjyTapYT',
        linkedin: 'https://www.linkedin.com/in/janjytapyt/',
        instagram: 'https://www.instagram.com/janjytap.yt/',
        facebook: 'https://www.facebook.com/janjytapyt',
    },

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

    skills: [
        
    ]
}