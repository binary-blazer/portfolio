import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
  } from "@material-tailwind/react";

import Head from 'next/head'

export default function Resume({ }) {
    const experiences = [
        {
            title: "Full Stack Developer",
            company: "SDEVS",
            description: "I am currently working as a Full Stack Developer at SDEVS. I am working on SDEVS's website and their project websites and backend.",
            date: "2021 - Present",
            icon: "fas fa-code",
            color: "blue"
        },
        {
            title: "Joined SDEVS",
            company: "SDEVS",
            description: "I joined SDEVS as a Full Stack Developer. I am working on SDEVS's website and their project websites and backend.",
            date: "2021",
            icon: "fas fa-code",
            color: "purple"
        },
        {   
            title: "Started learning React",
            company: "Self Taught",
            description: "I started learning React in 2020. I am currently working on a project with React.",
            date: "2020",
            icon: "fab fa-react",
            color: "pink"
        },
        {
            title: "Started learning JavaScript",
            company: "Self Taught",
            description: "I started learning JavaScript in 2019. I am currently working on a project with JavaScript.",
            date: "2019",
            icon: "fab fa-js",
            color: "blue"
        },
        {
            title: "Started learning Golang & Elixir",
            company: "Self Taught",
            description: "I started learning Golang & Elixir in 2021. I am currently working on a project with Golang & Elixir.",
            date: "2018",
            icon: "fas fa-code",
            color: "purple"
        },
        {
            title: "Started learning HTML & CSS",
            company: "Self Taught",
            description: "I started learning HTML & CSS in 2018. I am currently working on a project with HTML & CSS.",
            date: "2018",
            icon: "fab fa-html5",
            color: "pink"
        }
    ]
    return (
        <>
           <Head>
            <title>Resume - BinaryBlazer - Portfolio</title>
           </Head>

           <div className="flex flex-col items-center justify-center p-24 w-full h-screen">
           <div className="flex flex-col items-center justify-center p-24 mt-[40rem] w-full">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-5xl h-[4rem] font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                        Resume
                    </h1>
                    <h2 className="text-xl font-semibold text-center text-white/80 max-w-3xl -mt-4">
                        Here you can find my resume. I will try to keep this list up to date.
                    </h2>
                </div>

                <div className="flex flex-col items-start justify-start w-full mt-24">
                <Timeline>
                        {experiences.map((experience) => (
                            <TimelineItem className="pb-8" key={experience.title}>
                            <TimelineConnector />
                            <TimelineHeader className="h-3 w-full">
                              <TimelineIcon color={experience.color} className="h-4 w-4" />
                              <Typography variant="h6" className="leading-none text-sm font-bold text-white">
                                {experience.title} - <span className="text-sm font-normal text-white/80">{experience.date}</span>
                              </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                              <Typography variant="small" color="white" className="font-normal leading-relaxed mt-0 mb-2 text-white/80">
                                {experience.description}
                              </Typography>
                            </TimelineBody>
                          </TimelineItem>
                        ))}
                    </Timeline>
                </div>
            </div>
            </div>
        </>
    )
}