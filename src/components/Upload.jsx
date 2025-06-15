import React from 'react'

const Upload = (props) => {
  const showImgHandler=(e)=>{
    const file=e.target.files[0]
    if(file){
      props.uploadImageHandler(file)
    }
  }
  return (
    <div className="bg-white w-1/4 text-lg shadow-lg rounded-xl max-w-2xl p-6">
      <label htmlFor="Upload" className="block cursor-pointer w-full  border-2 border-dashed border-gray-500 text-center hover:border-blue-800 transition-all p-2">

        <input type="file" id='Upload' className='hidden' onChange={showImgHandler} />
        <p className='text-lg font-medium text-gray-800'>Upload Your Image</p>

      </label>
    </div>
  )
}

export default Upload