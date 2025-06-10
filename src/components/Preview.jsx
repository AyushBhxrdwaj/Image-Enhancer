import React from 'react'

const Preview = () => {
  return (
    <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl'>
      {/* Original Image */}
      <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
        <h2 className='text-xl font-semibold text-center bg-gray-800 text-white py-2 px-3'>Original Image</h2>
        <img className='w-full h-full object-cover' src="" alt="" />

        <div className='flex items-center justify-center h-80 bg-gray-200'>No Image Selected</div>
      </div>

      {/* Enhanced Image */}
      <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
        <h2 className='text-xl font-semibold text-center bg-blue-900 text-white py-2 px-3'>Enhanced Image</h2>
        <img className='w-full h-full object-cover' src="" alt="" />
        <div className='flex items-center justify-center h-80 bg-gray-200'>No enanced Image</div>
      </div>
    </div>
  )
}

export default Preview