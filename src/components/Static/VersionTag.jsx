import { useState } from 'react'

export default function VersionTag() {
    const textsOnClick = [
        '👀',
        '👁️',
        '👁️‍🗨️',
        '👁️‍🩹'
    ]

    const [currentText, setCurrentText] = useState(0)
    const [fade, setFade] = useState(false)
    const [visible, setVisible] = useState(false)

    return (
        <>
        <div className="z-[40] absolute select-none cursor-pointer hover:opacity-80 top-2 right-2 z-50 flex flex-col items-center justify-center w-32 h-10 p-2 m-2 rounded-md bg-gradient-to-tr from-blue-400/20 via-purple-500/20 to-pink-500/20 backdrop-filter backdrop-blur-[10px] transition duration-200 ease-in-out"
             onClick={() => {
                if (currentText === textsOnClick.length - 1) {
                    setCurrentText(0)
                    setFade(true)
                    setVisible(true)

                    setTimeout(() => {
                        setFade(false)
                        setVisible(false)
                    }, 2000)
                } else {
                    setCurrentText(currentText + 1)
                    setFade(true)
                    setVisible(true)

                    setTimeout(() => {
                        setFade(false)
                        setVisible(false)
                    }, 2000)
                }
        }}>
            <h1 className="text-xs font-bold text-center text-white">
                v2.0.0
            </h1>
        </div>

        <div className="z-[-1] absolute select-none top-2 right-2 z-50 flex flex-col items-center justify-center w-10 h-10 p-2 m-2 rounded-md bg-gradient-to-tr from-blue-400/20 via-purple-500/20 to-pink-500/20 backdrop-filter backdrop-blur-[10px] transition duration-200 ease-in-out" style={{ transform: visible ? 'translate(-8.7rem, 0rem)' : 'translate(0rem, 0rem)', opacity: fade ? 1 : 0, transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out' }}>
            <h1 className="text-xs font-bold text-center text-white">
                {textsOnClick[currentText]}
            </h1>
        </div>
        </>
    )
}