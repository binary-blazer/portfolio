import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";

import Head from 'next/head'

export default function Technologies({}) {
    const router = useRouter()
    const { tech } = router.query

    const technologies = [
        { name: "Languages", value: "languages", technologies: [
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
            { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
            { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
            { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
            { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { name: "SCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
            { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
            { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
            { name: "Elixir", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg" }
        ] },
        { name: "Frontend", value: "frontend", technologies: [
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "NextJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
            { name: "Vue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
            { name: "NuxtJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg" },
            { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
            { name: "Svelte", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" }
        ] },
        { name: "Backend", value: "backend", technologies: [
            { name: "NodeJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
            { name: "Deno", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/denojs/denojs-original.svg" },
            { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
            { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
            { name: "Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
            { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" }
        ] },
        { name: "Databases", value: "databases", technologies: [
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
            { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" }
        ] },
        { name: "DevOps", value: "devops", technologies: [
            { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
            { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
            { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
            { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
            { name: "GitLab CI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
            { name: "Travis CI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/travis/travis-plain.svg" },
            { name: "Heroku", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" },
            { name: "Netlify", icon: "https://cdn.discordapp.com/attachments/971049189377179718/1142850980828946472/cm1hdA.png" },
            { name: "Vercel", icon: "https://cdn.discordapp.com/attachments/971049189377179718/1142851823057784933/vercel.png" }
        ] },
        { name: "Cloud", value: "cloud", technologies: [
            { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
            { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
            { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
            { name: "DigitalOcean", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg" },
            { name: "Linode", icon: "https://cdn.discordapp.com/attachments/971049189377179718/1142774912096931890/dmc.png" },
            { name: "Vultr", icon: "https://cdn.discordapp.com/attachments/971049189377179718/1142775028593737828/LmNvbS5wbmc.png" }
        ] },
        { name: "OSes", value: "oses", technologies: [
            { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
            { name: "Windows", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" }
        ] },
        { name: "Tools", value: "tools", technologies: [
            { name: "VSCode", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
            { name: "IntelliJ IDEA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
            { name: "PyCharm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" },
            { name: "WebStorm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webstorm/webstorm-original.svg" },
            { name: "CLion", icon: "https://cdn.discordapp.com/attachments/971049189377179718/1142775235494559855/Zw.png" }
        ] },
        { name: "Other", value: "other", technologies: [
            { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
            { name: "REST", icon: "https://cdn.discordapp.com/attachments/971049189377179718/1142852665387253800/bmc.png" },
            { name: "Socket.IO", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
            { name: "RabbitMQ", icon: "https://cdn.discordapp.com/attachments/971049189377179718/1142852797390405750/b2dvLndpbmUuc3Zn.png" },
            { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
            { name: "Apache", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" }
        ] }
    ]

    const [activeTab, setActiveTab] = useState(0)

    useEffect(() => {
        technologies.map((technology, index) => {
            if (technology.name === tech) {
                setActiveTab(index)
            }
        })
    }, [tech])

    useEffect(() => {
        router.push(`/technologies/${technologies[activeTab].name}`)
    }, [activeTab])

    useEffect(() => {
        technologies.map((technology) => {
            technology.technologies.map((tech) => {
                new Image().src = tech.icon
            })
        })
    }, [])

    useEffect(() => {
        Tabs.tabsRole = 'TabList';
        Tab.tabRole = 'Tab';
    }, []);

    return (
        <>
            <Head>
                <title>Technologies: {tech} - BinaryBlazer - Portfolio</title>
            </Head>
            <div className="flex flex-col items-center justify-center p-24 w-full">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-5xl h-[4rem] font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                        Technologies - {tech}
                    </h1>
                    <h2 className="text-xl font-semibold text-center text-white/80 mt-2 max-w-3xl -mt-0.5">
                        Below you can see all the technologies I use. You can also see the technologies I use for the frontend, backend, databases, devops and more such as other.
                    </h2>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center w-full max-w-7xl -mt-14">
            <Tabs value={technologies[activeTab].value} onChange={(value) => setActiveTab(value)}>
                <div className="flex flex-row items-center justify-center max-w-5xl min-w-5xl w-full gap-6 bg-gradient-to-tr from-blue-400/5 via-purple-500/5 to-pink-500/5 backdrop-filter backdrop-blur-[10px] h-14 rounded-lg">
                    <TabsHeader className="bg-transparent w-full h-full max-w-5xl min-w-5xl gap-10" indicatorProps={{ className: "bg-gray-800/10 w-1/9 h-full" }}>
                        {technologies.map(({ name, value }) => (
                            <Tab key={value} value={value} className="text-white/75 hover:text-white h-full transition duration-200 ease-in-out font-semibold" onClick={() => router.push(`/technologies/${name}`)} >
                                {name}
                            </Tab>
                        ))}
                    </TabsHeader>
                </div>
                <TabsBody>
                    <div className="flex flex-row items-center justify-center w-full max-w-5xl gap-6 mt-2 bg-gradient-to-tl from-pink-400/5 via-purple-500/5 to-blue-400/5 backdrop-filter backdrop-blur-[10px] p-4 rounded-lg">
                        {technologies[activeTab].technologies.map((technology, index) => {
                            return (
                                <div className="flex flex-col items-center justify-center w-1/6 gap-2" key={index}>
                                    <img src={technology.icon} className="w-16 h-16 rounded-xl" draggable="false" />
                                    <h1 className="text-md font-bold text-center text-white">
                                        {technology.name}
                                    </h1>
                                </div>
                            )
                        })}
                    </div>
                </TabsBody>
             </Tabs>
            </div>
        </>
    )
}