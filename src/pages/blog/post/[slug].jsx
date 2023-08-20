import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import config from '../../../../site.config';
import axios from 'axios';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MDXRemote } from 'next-mdx-remote'

export default function Post() {
  const { slug } = useRouter().query;

  const [post, setPost] = useState({});

  useEffect(() => {
    if (slug !== undefined) {
      axios.get(`/api/blog/find?slug=${slug}`)
        .then(res => {
          setPost(res.data);
        })
    }
  }, [slug]);


  if (!post && !slug) return (
    <div className="flex flex-col items-center justify-center w-full h-full text-center mt-20">
      <i className="fas fa-spinner fa-spin text-5xl"></i>
    </div>
  )

  return (
    <div className="flex flex-col items-center justify-center w-full h-full mt-20 mb-96">
      <Head>
        <title>{"Post:" + " " + post.name || "Loading Blog Post"} | { config.siteMetadata.title }</title>
      </Head>

        <div className="flex flex-col items-center justify-center w-full h-full text-center mt-20" style={{ width: "calc(100% + 120px)" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center w-full h-full flex-10 px-10 text-center mt-20"
        >

        <div className="flex flex-col items-center justify-center w-full h-full select-none">
            <h1 className="text-left text-5xl underline underline-offset-4 font-bold mt-6">{post.name || "No Name Provided."}</h1>
              <p className="text-2xl font-light text-zinc-300 mt-2">{post.description || "No Description Provided."}</p>
        </div>
        
        <img src={post.banner} className="w-full h-96 object-cover -mt-32 rounded-2xl opacity-10 select-none border border-2 border-primary/20 " draggable="false" />

        <div className="flex flex-col items-center justify-center w-full h-full flex-10 px-10 text-center">
          <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full flex-10 px-10 text-center -mt-40 select-none">
            <div className="flex flex-col items-center justify-center w-full h-full flex-10 px-10 text-center">
              <h1 className="text-left text-3xl underline underline-offset-4 font-bold mt-6">Author:</h1>
              <div className="flex flex-row mt-2">
              <img src={post.authorAvatar} className="w-10 h-10 object-cover rounded-full opacity-100 select-none border border-2 border-primary/20" draggable="false" />
              <p className="text-2xl font-light text-zinc-300 mt-1 ml-2">{post.author || "JanjyTapYT"}</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full flex-10 px-10 text-center">
              <h1 className="text-left text-3xl underline underline-offset-4 font-bold mt-6">Date:</h1>
              <p className="text-2xl font-light text-zinc-300 mt-2">{post.releaseDate}</p>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full flex-10 px-10 text-center">
              <h1 className="text-left text-3xl underline underline-offset-4 font-bold mt-6">Tags:</h1>
              <div className="flex flex-row mt-2">
              {post.tags ?
              post.tags.slice(0, 4).map((tag, i) => (
                <span key={i} className="mr-1 text-right text-sm bg-primary/10 border border-2 border-primary text-black dark:text-white font-bold px-2 py-1 rounded-md button button-text">
                  {tag}
                </span>
              )) : <>
                <div className="flex flex-row items-center justify-center w-full h-full flex-10 px-10 text-center mt-20">
                  <i className="fas fa-spinner-thirc fa-spin text-2xl"></i>
                </div>
              </>}
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center justify-center h-full flex-10 text-center mt-20" style={{ width: "calc(100% + 80px)" }}>
            <div className="leading-8 bg-black/10 text-left text-zinc-200 rounded-2xl p-10 border border-2 border-primary/5 w-full h-full flex flex-col select-none">
            <ReactMarkdown>
              {post.content}
            </ReactMarkdown>
            </div>
          </div>
        </div>
        </motion.div>
      </div>
    </div>
  );
}
