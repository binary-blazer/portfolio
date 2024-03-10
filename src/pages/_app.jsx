import '@/styles/globals.css'
import 'tippy.js/dist/tippy.css';

import Sidebar from '@/components/Static/Sidebar'
import VersionTag from '@/components/Static/VersionTag'
import SettingsMenu from '@/components/Static/SettingsMenu'

import { ThemeProvider } from "@material-tailwind/react";
import Head from 'next/head'

import { Analytics } from '@vercel/analytics/react';


export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>Home - BinaryBlazer - Portfolio</title>
    </Head>

    <Analytics />

    <ThemeProvider defaultTheme='system'>
    <div className="z-[-1] absolute top-[40%] left-[60%] bg-gradient-to-tr max-h-[19rem] max-w-[29rem] h-[19rem] w-[29rem] from-blue-400 via-purple-500 to-pink-500 w-full h-full blur-[400px]" />

    <main className="hidden md:flex flex-row items-center justify-center h-screen py-2 select-none">
      <Sidebar />
      <VersionTag />
      <div className="items-center justify-center flex flex-col">
        <SettingsMenu />
      </div>
      <div className="flex flex-col items-center justify-center w-full h-screen max-h-screen py-2 overflow-y-auto">
          <Component {...pageProps} />
      </div>
    </main>

    <main className="md:hidden flex flex-col items-center justify-center w-full h-screen max-h-screen py-2 overflow-y-auto">
      <div className="flex flex-col items-center justify-center w-14 mb-5 p-2 h-14 bg-gradient-to-tr from-blue-400/10 via-purple-500/10 to-pink-500/10 rounded-lg shadow-xl">
        <i className="fas fa-exclamation-triangle text-2xl text-white/75" />
      </div>

        <h1 className="text-5xl h-[7rem] font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Mobile devices are not supported yet.
        </h1>
        <h2 className="text-xl font-semibold text-center text-white/80 mt-2 max-w-3xl -mt-3.5">
            Please use a desktop device to view this website.
        </h2>
    </main>
    </ThemeProvider>
    </>
  )
}
