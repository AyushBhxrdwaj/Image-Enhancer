import React from 'react'
import Load from './Load'

const Preview = (props) => {
  return (
    <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl'>
      {/* Original Image */}
      <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
        <h2 className='text-xl font-semibold text-center bg-gray-800 text-white py-2 px-3'>Original Image</h2>
        {props.uploaded ?
          <img className='w-full h-full object-cover' src={props.uploaded} alt="" />
          : <div className='flex items-center justify-center h-80 bg-gray-200'>No Image Selected</div>}

      </div>

      {/* Enhanced Image */}
      <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
        <h2 className='text-xl font-semibold text-center bg-blue-900 text-white py-2 px-3'>Enhanced Image</h2>
        
        {props.enhanced && !props.loading && (<img className='w-full h-full object-cover' src="" alt="" />)}
        
        
        {props.loading?<Load/>:(
          <div className='flex items-center justify-center h-80 bg-gray-200'>No enhanced Image</div>
        )}
        
        
      </div>
    </div>
  )
}

export default Preview