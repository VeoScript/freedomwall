import React from 'react'

interface TypeProps {
  post: any
}

const Card: React.FC<TypeProps> = ({ post }) => {
  return (
    <div className="flex flex-col w-full p-5 space-y-5 rounded-xl border border-blue-400">
      <div className="inline-flex items-center space-x-2">
        <h3 className="font-bold text-xl">Title:</h3>
        <h3 className="font-light text-xl">{ post.title }</h3>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="inline-flex items-center">
        <p className="font-black text-3xl font-unifrakturmaguntia">
          { post.content }
        </p>
      </div>
      <div className="flex flex-row items-center justify-between w-full">
        <span className="text-sm">8 mins ago</span>
        <span className="text-sm">Poser: { post.name }</span>
      </div>
    </div>
  )
}

export default Card