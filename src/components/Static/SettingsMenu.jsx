import { Transition, Listbox } from '@headlessui/react'
import { useState, useEffect, Fragment } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

export default function SettingsMenu({}) {
    const router = useRouter()

    const [buttonHovered, setButtonHovered] = useState(false)
    const [visible, setVisible] = useState(false)

    const [pageHeight, setPageHeight] = useState(0)
    const [pageWidth, setPageWidth] = useState(0)

    useEffect(() => {
        if (typeof window === 'undefined') return
        setPageHeight(window.innerHeight)
        setPageWidth(window.innerWidth)
    }, [])

    return (
        <>
           <div className={`z-[43] absolute select-none cursor-pointer hover:opacity-80 bottom-2 right-2 z-50 flex flex-col items-center justify-center w-10 h-10 p-2 m-2 rounded-lg bg-gradient-to-tr from-blue-400/20 via-purple-500/20 to-pink-500/20 backdrop-filter backdrop-blur-[10px] transition duration-200 ease-in-out`} onMouseEnter={() => setButtonHovered(true)} onMouseLeave={() => setButtonHovered(false)} onClick={() => setVisible(!visible)}>
                <i className={`fas fa-cog text-lg transition duration-700 ease-in-out ${buttonHovered ? 'rotate-180' : ''}`} />
           </div>

           {visible && (
              <div className="z-[43] absolute top-0 left-0 h-screen w-screen bg-black/50 backdrop-filter backdrop-blur-[20px]" onClick={() => setVisible(false)} />
            )}

           <div className="z-[44] items-center justify-center flex flex-col">
                <Transition
                    as={Fragment}
                    show={visible}
                    enter="transition duration-300 ease-in-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition duration-300 ease-in-out"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">
                        <div className={`z-[44] absolute rounded-lg shadow-lg w-[35rem] h-[30rem] p-4 flex flex-col items-center justify-between bg-gradient-to-tr from-blue-400/5 via-purple-500/5 to-pink-500/5 backdrop-filter backdrop-blur-[60px]`} style={{ left: pageWidth / 2 - 250 }}>
                            <div className="flex flex-col items-center justify-center w-full">
                                <h1 className={`text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500`}>
                                    Settings
                                </h1>
                                <div className="border-b border-gray-200/5 w-full mt-4" />

                                <h1 className="text-md font-bold text-center mt-8">
                                    Nothing here yet.
                                </h1>
                            </div>

                            <div className="flex flex-row w-full items-center justify-between"> 
                                <button className="sticky right-0 flex flex-row items-center justify-center max-w-sm w-full h-10 p-2 m-2 rounded-md bg-gradient-to-tr from-blue-400/20 via-purple-500/20 to-pink-500/20 backdrop-filter backdrop-blur-[10px] transition duration-200 ease-in-out hover:opacity-90 transform hover:-translate-y-0.5" onClick={() => setVisible(false)}>
                                    <h1 className="text-x font-bold text-center text-white">
                                        Close
                                    </h1>
                                </button>
                                <div className="flex flex-row text-right items-center justify-center w-full max-w-sm cursor-pointer rounded-md h-10 p-2 hover:bg-white/5 transition duration-200 ease-in-out" onClick={() => window.open('https://github.com/binary-blazer/portfolio', '_blank')}>
                                    <h1 className="text-x font-bold text-right text-white">
                                        View Source (v1)
                                    </h1>
                                    <i className="fas fa-external-link-alt text-white ml-2" />
                                </div>
                            </div>
                        </div>
                </Transition>
            </div>
        </>
    )
}