import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Sidebar() {
  const router = useRouter()
  const [currentHover, setCurrentHover] = useState(0)

  const pages = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Projects',
      href: '/projects',
    },
    {
        name: 'Resume',
        href: '/resume',
    },
    {
        name: 'Technologies',
        href: '/technologies',
    },
    {
      name: 'Contact',
      href: '/contact',
    },
  ]

  useEffect(() => {
    pages.map((page, index) => {
        if (page.href === router.pathname) {
            if (router.pathname === '/contact') return setCurrentHover(6)
            setCurrentHover(index)
        }
    })
  }, [router.pathname])

  /*
  useEffect(() => {
    const timeout = setTimeout(() => {
        if (pages[currentHover].href !== router.pathname) {
            pages.map((page, index) => {
                if (page.href === router.pathname) {
                    setCurrentHover(index)
                }
            })
        }
    }, 8000)

    return () => clearTimeout(timeout)
  }, [currentHover])
    */

  return (
    <>
    <div className="z-[-1] absolute top-[-10%] left-[0%] rotate-45 bg-gradient-to-tr max-h-[15rem] max-w-[15rem] h-[15rem] w-[15rem] from-blue-400 via-purple-500 to-pink-500 w-full h-full blur-[250px]" />

    <div className="flex flex-col items-center justify-between w-96 h-screen max-h-screen min-h-screen py-2 border-r border-gray-200/5 p-5">
        <div className="flex flex-col items-center justify-center mt-4 w-full gap-4">
        <div className="flex flex-col mt-4 items-center justify-center">
            <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                BinaryBlazer
            </h1>
            <h2 className="text-md font-bold text-center text-white">
                Fullstack Developer
            </h2>
        </div>

        <div className="border-b border-gray-200/5 w-full mt-4" />

        <div className="flex flex-col items-center justify-center mt-4 w-full gap-4"
        onMouseLeave={() => {
            pages.filter(page => !page.disabled).map((page, index) => {
                if (page.href === router.pathname) {
                    setCurrentHover(index + 1)
                } else {
                    const currentPageIndex = pages.findIndex(page => page.href === router.pathname)
                    router.pathname.includes('/technologies') ? setCurrentHover(5) : setCurrentHover(currentPageIndex + 1)
                }
        })}}>
            {pages.filter(page => !page.disabled).map((page, index) => (
                <a
                    key={index}
                    id={page.name}
                    className={`flex items-center cursor-pointer w-full px-4 py-2 text-lg font-bold text-white text-left rounded-md transition duration-300 ease-in-out`}
                    onClick={() => router.push(page.href)}
                    onMouseEnter={() => {
                        setCurrentHover(index + 1)
                    }}>
                    {page.name}
                </a>
            ))}

            <div className={`z-[-1] block h-12 w-[19.5rem] bg-gray-800/5 rounded-lg relative top-0 left-0`}
                style={{
                    top: `${currentHover === 0 ? "-26.4rem" : currentHover === 1 ? "-22.6rem" : currentHover === 2 ? "-18.9rem" : currentHover === 3 ? "-15.1rem" : currentHover === 4 ? "-11.4rem" : currentHover === 5 ? "-7.6rem": currentHover === 6 ? "-3.85rem" : currentHover === 7 ? "-7.6rem" : "0rem"}`,
                    transition: 'top 0.13s ease-in-out',
                }}
            >
                <div className="bg-gradient-to-t from-purple-500 via-blue-500 to-pink-500 h-3/4 w-1 mt-1.5 rounded-full" />
            </div>
        </div>
        </div>
        <>
        <div className="flex flex-col items-center justify-center mt-4 w-full gap-4 mb-3">
            <div className="border-b border-gray-200/5 w-full" />

            <h2 className="text-md font-bold text-center mt-1 -mb-4 text-neutral-500">
                &copy; 2018 - {new Date().getFullYear()} BinaryBlazer
            </h2>
            <h2 className="text-sm font-bold text-center text-neutral-500">
                All rights reserved.
            </h2>
        </div>
        </>
    </div>
    </>
  )
}