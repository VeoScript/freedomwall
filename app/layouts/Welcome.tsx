import React from 'react'

interface TypeProps {
  children: any
}

const Welcome: React.FC<TypeProps> = ({ children }) => {
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen">
      {children}
    </main>
  )
}

export default Welcome