import React, { useState } from 'react'
import Upload from './Upload'
import Preview from './Preview'
const Home = () => {
    const [uploadImg, setuploadImg] = useState(null);
    const [enhancedImg, setenhancedImg] = useState(null);
    const [loading,setloading]=useState(false);

    return (
        <>

            <Upload />
            <Preview loading={loading} uploaded={uploadImg} enhanced={enhancedImg} />
        </>
    )
}

export default Home