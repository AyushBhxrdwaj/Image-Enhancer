import React from 'react'
import Home from './components/Home'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-300 py-8 px-4'>
      <div className='text-center mb-5'>
        <h1 className='text-5xl font-bold text-gray-800 mb-2'>AI Image Enhancer</h1>
        <p className='text-lg text-gray-500 mt-5'>Upload Your Image and let Ai Enhance it for you in seconds!</p>
      </div>
      <Home/>
      <div className='text-lg text-gray-500 mt-4'>
        <a className='text-md font-semibold' href="#">By @Ayush Bhardwaj</a>
      </div>
    </div>
  )
}

export default App