import Head from 'next/head'
import { useState } from 'react'
import config from '../../site.config'
import axios from 'axios'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

export default function Contact() {
    const router = useRouter()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
        const res = await axios.post('/api/contact', {
            name,
            email,
            message,
        })
        if (res.status === 200) {
            setSuccess(true)
            setLoading(false)
            setName('')
            setEmail('')
            setMessage('')
            setTimeout(() => {
            router.push('/')
            }, 3000)
        }
        } catch (err) {
        setLoading(false)
        setError(true)
        setErrorMessage(err.response.data.message)
        }
    }
    
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        >
        <Head>
        <title>Contact | { config.siteMetadata.title }</title>
        <link rel="icon" href={config.siteMetadata.favicon} type="image/x-icon" />
        </Head>

        <div className="mb-10 flex flex-col py-20 mx-auto">
        <div className="flex flex-col items-center justify-center w-full flex-10 px-10 text-center">
            <h1 className="text-5xl font-semibold text-underline-2px button-text">
                Contact
            </h1>
            <p className="text-xl text-gray-600/90 dark:text-white/50 font-bold text-center mb-5 mt-3 button-text">
                If you have any questions, please feel free to contact me.
                </p>
            <br />

            <div className="flex flex-col mt-16 position-center items-center justify-center w-full max-w-2xl px-4 py-8 space-y-4 bg-gray-300/50 dark:bg-zinc-900/50 rounded-lg shadow-lg">
            <form className="flex flex-col w-full space-y-4" onSubmit={handleSubmit}>
                <div className="flex flex-col w-full space-y-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    className="w-full px-4 py-2 rounded-lg transition-all duration-200 group text-white bg-gray-400/10 dark:bg-gray-500/5 dark:hover:bg-gray-500/10 hover:bg-gray-400/20 active:bg-gray-400/30 active:outline-none focus:outline-none active:ring-2 active:ring-primary active:ring-opacity-50 focus:ring-2 focus:ring-primary focus:ring-opacity-50 text-gray-900/50 dark:text-white hover:-translate-y-1 hover:scale-[1.02]"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                >
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 rounded-lg transition-all duration-200 group text-white bg-gray-400/10 dark:bg-gray-500/5 dark:hover:bg-gray-500/10 hover:bg-gray-400/20 active:bg-gray-400/30 active:outline-none focus:outline-none active:ring-2 active:ring-primary active:ring-opacity-50 focus:ring-2 focus:ring-primary focus:ring-opacity-50 text-gray-900/50 dark:text-white hover:-translate-y-1 hover:scale-[1.02]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                >
                <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    className="w-full px-4 py-2 rounded-lg transition-all duration-200 group text-white bg-gray-400/10 dark:bg-gray-500/5 dark:hover:bg-gray-500/10 hover:bg-gray-400/20 active:bg-gray-400/30 active:outline-none focus:outline-none active:ring-2 active:ring-primary active:ring-opacity-50 focus:ring-2 focus:ring-primary focus:ring-opacity-50 text-gray-900/50 dark:text-white hover:-translate-y-1 hover:scale-[1.02]"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                </motion.div>
                </div>
                <motion.button
                    type="submit"
                    disabled={loading}
                    className="min-h-[44px] relative overflow-hidden px-4 py-2 rounded-lg shadow-2xl shadow-primary transition-all duration-200 bg-primary group text-white button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                >
                {loading ? (
                    <i className="fas fa-spinner fa-spin" />
                ) : (
                    'Submit'
                )}
                </motion.button>
                </form>
                <div className="mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                >
                {!success && !error && (
                    <div />
                )}
                {!error && success && (
                    <div className="flex flex-col items-center justify-center w-full max-w-md px-4 py-8 space-y-4 bg-green-500/10 rounded-lg shadow-lg">
                    <p className="text-lg text-green-500 font-bold text-center button-text">
                    <i className="fas fa-check-circle text-green-500 button-text" /> Thank you for your message!
                    </p>
                    </div>
                )}
                {!success && error && (
                    <div className="flex flex-col items-center justify-center w-full max-w-md px-4 py-8 space-y-4 bg-red-500/10 rounded-lg shadow-lg">
                    <p className="text-lg text-red-500 font-bold text-center button-text">
                        <i className="fas fa-times-circle text-red-500 button-text" /> {errorMessage}
                    </p>
                    </div>
                )}
                </motion.div>
            </div>
            </div>
        </div>
        </div>
        </motion.div>
    )
}
