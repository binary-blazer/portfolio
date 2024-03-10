import { useRouter } from 'next/router'

export default function ErrorPage({ statusCode }) {
  const router = useRouter()

  const messages = [
    'You\'re not supposed to be here.',
    'You\'re lost.',
    'You\'re in the wrong place.',
    'You\'re in the wrong neighborhood.'
  ]

  return (
    <>
    <div className="flex flex-col items-center justify-center w-full h-screen max-h-screen py-2 overflow-y-auto">
      <h1 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
        {statusCode}
        </h1>
      <h2 className="text-xl font-bold text-center text-white">
        {messages[Math.floor(Math.random() * messages.length)]}
      </h2>
    </div>
    </>
  )
}