import Head from 'next/head'
import { useState, useEffect } from 'react'
import config from '../../../site.config'
import axios from 'axios'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Tilt from 'react-parallax-tilt';

export default function Contact() {
    const router = useRouter()

    const [posts, setPosts] = useState([])

    useEffect(() => {
      fetch("/api/blog/posts")
        .then((res) => res.json())
        .then((data) => {
          setPosts(data);
        });
    }, []);
    
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        >
        <Head>
        <title>Blog | { config.siteMetadata.title }</title>
        <link rel="icon" href={config.siteMetadata.favicon} type="image/x-icon" />
        </Head>

        <div className="mb-10 flex flex-col py-20 mx-auto mt-24 w-full h-full">
        <div className="mt-[4rem] flex flex-col items-center justify-center w-full flex-10 px-10 text-center">
            <h1 className="text-5xl font-semibold text-underline-2px button-text">
                Blog
            </h1>
            <p className="text-xl text-gray-600/90 dark:text-white/50 font-bold text-center mb-5 mt-3 button-text">
                This is my blog where I write about my journey as a developer and other things I find interesting.
            </p>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full flex-10 px-10 text-center mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full h-full">
            {posts.map((post, i) => (
                <Tilt key={i} options={{ tiltReverse: true, max: 10, scale: 1.05, speed: 500, transition: true, axis: null, reset: true, easing: "cubic-bezier(.03,.98,.52,.99)" }}
                    className="flex flex-col bg-gradient-to-t from-zinc-900/50 p-4 hover:bg-zinc-700/10 h-auto text-black rounded-lg w-auto button button-text hover:shadow-2xl hover:shadow-primary hover:outline hover:outline-2 hover:outline-primary border border-gray-300/50 dark:border-zinc-900/90" 
                    style={{ cursor: "pointer" }}
                    >
                      <div
                        onClick={() => router.push(`/blog/post/${post.slug}`)}
                      >
                            <div className="w-full relative">
                              <div className="flex flex-row justify-between items-center justify-center md:justify-start">
                              <img
                                src={`${post.banner}`}
                                alt={post.name}
                                width={1000}
                                height={1000}
                                className="rounded-lg button-text button"
                                draggable={false}
                              />
                              </div>
                            </div>
                            <p className="flex flex-col text-sm mt-4 md:mt-4">
                              <span className="text-left text-3xl underline underline-offset-4 text-black dark:text-white font-bold px-2 py-1 rounded-md button button-text">
                              {post.name.substring(0, 40) + " ..." || "No Name Provided."}
                              </span>
                              <span className="text-left text-sm ont-bold px-2 py-1 rounded-md button button-text text-white/50">
                              {post.description.substring(0, 160) + " ..." || "No Description Provided."}
                              </span>
                            </p>

                            <div className="mt-6">
                              <div className="flex flex-row justify-between items-center justify-center md:justify-start">
                               {post.tags.slice(0, 3).map((tag, i) => (
                                 <span key={i} className="mr-1 text-right text-sm bg-primary/10 border border-2 border-primary text-black dark:text-white font-bold px-2 py-1 rounded-md button button-text">
                                  {tag}
                                </span>
                              ))}
                              </div>
                            </div>
                            </div>
                         </Tilt>
            ))}
            </div>
        </div>
        </div>
        </motion.div>
    )
}
