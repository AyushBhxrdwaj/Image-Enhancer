import React, { useState } from 'react'
import Upload from './Upload'
import Preview from './Preview'
const Home = () => {
    const [uploadImg, setuploadImg] = useState(null);
    const [enhancedImg, setenhancedImg] = useState(null);
    const [loading,setloading]=useState(false);
    

    const uploadImageHandler=(file)=>{
        setuploadImg(URL.createObjectURL(file))
        setloading(true)

    }

    return (
        <>

            <Upload uploadImageHandler={uploadImageHandler} />
            <Preview loading={loading} uploaded={uploadImg} enhanced={enhancedImg} />
        </>
    )
}

export default Home