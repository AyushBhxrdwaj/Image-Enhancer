import {config} from 'dotenv'
import {axios} from 'axios'
config()
const key = process.env.API_KEY
const base_Url="https://techhk.aoscdn.com/"

export const enhancedImageAPI = async (file)=>{
    try {
        const taskID = await upload(file);
        console.log("Img Uploaded")
        // /api/tasks/visual/scale/{task_id} --get
        
        const enhancedData = await fetchImg(taskID);
        console.log("Enhanced data , enhancedData")

        // return enhancedData
        
    } catch (err) {
        console.log(err.message)
        
    }
}

const upload = async (file)=>{
    const formData = new FormData()
    formData.append("image_file",file)

    const {data}=await axios.post(`${base_Url}/api/tasks/visual/scale`,formData,{
        headers:{
            "Content-Type":"multipart/form-data",
            "X-API-KEY":key
        }
    })
    if(!data?.data?.task_id){
        throw new Error("Failed to upload Img! Task ID not found")
    }

    return data.data.task_id;


}

const fetchImg = async (taskID)=>{
    const {data}=await axios.get(`${base_Url}/api/tasks/visual/scale/${taskID}`,{
        headers:{
            "X-API-KEY":key
        }
    })
    if(!data?.data){
        throw new Error("Failed to fetch Image")
    }
    return data.data

}