import React, { useState } from 'react'
import { Stepper, Step, CardHeader, Typography, Input, Textarea } from "@material-tailwind/react";
import Head from 'next/head'

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            label: 'Name',
            content: (
                <Input label="Name" type="text" color="purple" variant="standart" size='lg' className='text-white' onChange={(e) => setName(e.target.value)} value={name} />
            )
        },
        {
            label: 'Email',
            content: (
                <Input label="Email" type="email" color="purple" variant="standart" size='lg' className='text-white' onChange={(e) => setEmail(e.target.value)} value={email} />
            )
        },
        {
            label: 'Message',
            content: (
                <Textarea label="Message" color="purple" rows={5} className='text-white' size='lg' onChange={(e) => setMessage(e.target.value)} value={message} />
            )
        }
    ]

    const prev = () => {
        setActiveStep(activeStep - 1)
    }

    const next = () => {
        setActiveStep(activeStep + 1)
    }

    const submit = async () => {
        if (name.length < 3) return alert('Your name is too short.')
        if (email.length < 3) return alert('Your email is too short.')
        if (message.length < 3) return alert('Your message is too short.')

        if (!email.includes('@') || !email.includes('.')) return alert('Your email is invalid.')

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                message
            })
        })

        if (res.status === 200) {
            setName('')
            setEmail('')
            setMessage('')
            return alert('Your message has been sent.') && setActiveStep(0)
        } else {
            return alert('An error occurred. Please try again later.')
        }
    }

    return (
        <>
            <Head>
                <title>Contact - BinaryBlazer - Portfolio</title>
            </Head>
            <div className="flex flex-col items-center justify-center p-24 w-full h-screen">
                <div className="flex flex-col items-center justify-center p-24 w-full">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-5xl h-[4rem] font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                            Contact Me
                        </h1>
                        <h2 className="text-xl font-semibold text-center text-white/80 mt-2 max-w-3xl -mt-2">
                            You want to contact me? Then you can do it here. I will try to answer as soon as possible, but it can take a few days.
                        </h2>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center w-full">
                    <div className="grid h-24 bg-gradient-to-tr from-blue-600/5 via-purple-600/5 to-pink-600/5 rounded-lg shadow-xl shadow-purple-600/5 m-0 place-items-center w-full max-w-3xl mb-10">
                        <div className="w-full px-20 pt-4 pb-8">
                            <Stepper
                                activeStep={activeStep}
                                lineClassName="bg-white/50"
                                activeLineClassName="bg-white"
                            >
                                {steps.map((step, index) => (
                                    <Step
                                        key={index} // Add a unique key for each step
                                        className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
                                        activeClassName="ring-0 !bg-white text-white"
                                        completedClassName="!bg-white text-white"
                                        onClick={() => setActiveStep(index)}
                                    >
                                        <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                                            <Typography variant="h6" color="inherit">
                                                {step.label}
                                            </Typography>
                                        </div>
                                    </Step>
                                ))}
                            </Stepper>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full max-w-3xl">
                        <div className="flex flex-col items-center justify-center w-full m-0 p-2">
                            {steps[activeStep].content}
                        </div>

                        <div className="flex flex-row items-start justify-between w-full">
                            {activeStep > 0 && (
                                <button className="flex flex-row items-center justify-center max-w-sm w-full h-10 p-2 m-2 rounded-md bg-gradient-to-tr from-blue-400/20 via-purple-500/20 to-pink-500/20 backdrop-filter backdrop-blur-[10px] transition duration-200 ease-in-out hover:opacity-90 transform hover:-translate-y-0.5" onClick={prev}>
                                    <h1 className="text-x font-bold text-center text-white">
                                        Previous
                                    </h1>
                                </button>
                            )}

                            {activeStep < 2 && (
                                <button className="flex flex-row items-center justify-center max-w-sm w-full h-10 p-2 m-2 rounded-md bg-gradient-to-tr from-blue-400/20 via-purple-500/20 to-pink-500/20 backdrop-filter backdrop-blur-[10px] transition duration-200 ease-in-out hover:opacity-90 transform hover:-translate-y-0.5" onClick={next}>
                                    <h1 className="text-x font-bold text-center text-white">
                                        Next
                                    </h1>
                                </button>
                            )}

                            {activeStep === 2 && (
                                <button className="flex flex-row items-center justify-center max-w-sm w-full h-10 p-2 m-2 rounded-md bg-gradient-to-tr from-green-400/40 to-green-500/40 backdrop-filter backdrop-blur-[10px] transition duration-200 ease-in-out hover:opacity-90 transform hover:-translate-y-0.5" onClick={submit}>
                                    <h1 className="text-x font-bold text-center text-white">
                                        Submit
                                    </h1>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}