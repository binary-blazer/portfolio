import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-center">
          Hi there, I'm{' '}
          <span className={`text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500`}>
            BinaryBlazer
          </span>{' '}
          <span className="hi">👋</span>
        </h1>
        <h2 className="text-2xl font-bold text-center mt-2">Fullstack Developer</h2>
      </div>

      <div className="flex flex-row items-center justify-center mt-6 w-full max-w-md">
        <button
          className={`flex flex-row items-center justify-center w-full h-10 p-2 m-2 rounded-md bg-gradient-to-tr from-blue-400/20 via-purple-500/20 to-pink-500/20 backdrop-filter backdrop-blur-[10px] transition duration-200 ease-in-out hover:opacity-90 transform hover:-translate-y-0.5`}
          onClick={() => router.push('/resume')}
        >
          <h1 className="text-x font-bold text-center">Resume</h1>
        </button>
        <button
          className={`flex flex-row items-center justify-center w-full h-10 p-2 m-2 rounded-md bg-gradient-to-tr from-blue-400/20 via-purple-500/20 to-pink-500/20 backdrop-filter backdrop-blur-[10px] transition duration-200 ease-in-out hover:opacity-90 transform hover:-translate-y-0.5`}
          onClick={() => router.push('/contact')}
        >
          <h1 className="text-x font-bold text-center">Contact</h1>
        </button>
      </div>
    </div>
  )
}