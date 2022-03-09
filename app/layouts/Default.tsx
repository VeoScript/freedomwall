import React from 'react'
import CreatePost from '~/components/CreatePost'

interface TypeProps {
  children: any
}

const DefaultLayout: React.FC<TypeProps> = ({ children }) => {
  return (
    <main className="flex flex-row w-full h-screen overflow-hidden">
      <div className="flex flex-col w-full max-w-md h-full space-y-10 p-10 overflow-y-auto border-r border-blue-400">
        <div className="flex flex-col">
          <h1 className="header font-unifrakturmaguntia">Freedom Wall</h1>
          <h5 className="title">Global access, free and anonymous</h5>
        </div>
        <CreatePost />
      </div>
      <div className="flex flex-col w-full max-w-full h-full p-10 overflow-y-auto space-y-5">
        {children}
      </div>
    </main>
  )
}

export default DefaultLayout