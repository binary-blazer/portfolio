import Head from 'next/head'
import { useState } from 'react'
import config from '../../site.config'
import Button from 'components/Global/Button'
import Input from 'components/Global/Input'
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
            <h1 className="text-5xl font-semibold">
                Contect
            </h1>
            <p className="text-xl text-white/50 font-normal text-center mb-5">
                If you have any questions, please feel free to contact me.
                </p>
            <br />

            <div className="flex flex-col mt-16 position-center items-center justify-center w-full max-w-2xl px-4 py-8 space-y-4 bg-gray-300/50 dark:bg-zinc-900/50 rounded-lg shadow-lg">
            <form className="flex flex-col w-full space-y-4" onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    startsWith={<i className="fa fa-user" />}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    startsWith={<i className="fa fa-envelope" />}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input 
                    name="message" 
                    wrapper="textarea" 
                    placeholder="Message"
                    startsWith={<i className="fa fa-comment" />} 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    />
                <Button type="submit" disabled={loading}>
                {loading && <i className="fal fa-spinner-third fa-spin" />}
                                {!loading && (
                                    <>
                                        <i className="fa fa-paper-plane" />
                                        <span> Send</span>
                                    </>
                                )}
                </Button>
                </form>
                {!success && !error && <div />}
                            {!success && error && <p className="bg-red-500/5 px-4 py-2 rounded-lg shadow-xl text-red-500 italic flex items-center gap-2">
                                <i className="fa fa-exclamation-circle" />
                                {errorMessage}
                            </p>}
                            {success && <p className="bg-green-500/5 px-4 py-2 rounded-lg shadow-xl text-green-500 italic flex items-center gap-2">
                                <i className="fa fa-check-circle" />
                                Message sent successfully
                                </p>}
            </div>
        </div>
        </div>
        </motion.div>
    )
}