import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function About({ }) {
    const router = useRouter()
    const [avatar, setAvatar] = useState('https://api.presencecord.tech/v4/avatar/679407120743137300')

    return (
        <>
          <Head>
            <title>About - BinaryBlazer - Portfolio</title>
          </Head>

           <div className="flex flex-row items-center justify-between p-24 w-full max-w-7xl">
                <div className="flex flex-col items-start justify-start">
                    <h1 className="text-5xl font-bold text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                        About Me
                    </h1>
                    <h2 className="text-xl font-semibold text-left text-white/80 mt-2 max-w-2xl mt-4">
                        I'm a fullstack developer who loves to code and learn new things. My journey started 2018 when I was 11 years old. I started with HTML and CSS, then I learned basic JavaScript and NodeJS. I'm currently learning Python and I'am already working with it. I'am also working with the below mentioned programming languages. You want to know more about the technologies I use? Then click <a href="/technologies" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">here</a>.
                    </h2>
                    <div className="flex flex-row items-center justify-start mt-6 w-full max-w-[13rem]">
                        <button className="flex flex-row items-center justify-center w-full h-10 p-2 rounded-md bg-gradient-to-tr from-blue-400/20 via-purple-500/20 to-pink-500/20 backdrop-filter backdrop-blur-[10px] transition duration-200 ease-in-out hover:opacity-90 transform hover:-translate-y-0.5" onClick={() => router.push('/resume')}>
                            <h1 className="text-x font-bold text-center text-white">
                                Resume
                            </h1>
                        </button>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <img src={avatar} className="aboutAvatar w-[18rem] h-[18rem] rounded-2xl border border-2 border-purple-500" draggable="false" />
                </div>
           </div>
        </>
    )
}