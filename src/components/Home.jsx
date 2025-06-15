import React, { useState } from 'react'
import Upload from './Upload'
import Preview from './Preview'
import { enhancedImageAPI } from '../utils/enhanceImageApi'
const Home = () => {
    const [uploadImg, setuploadImg] = useState(null);
    const [enhancedImg, setenhancedImg] = useState(null);
    const [loading,setloading]=useState(false);
    

    const uploadImageHandler= async(file)=>{
        setuploadImg(URL.createObjectURL(file))
        setloading(true)
        try{
            const enhancedURL=await enhancedImageAPI(file)
            setenhancedImg(enhancedURL)
            setloading(false)

        }catch(err){
            console.log(err)
            alert("Error while enhancing the Image,please try again later😞")

        }

    }

    return (
        <>

            <Upload uploadImageHandler={uploadImageHandler} />
            <Preview loading={loading} uploaded={uploadImg} enhanced={enhancedImg} />
        </>
    )
}

export default Home