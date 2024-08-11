import { useState } from 'react'
import NavBar from '../../component/Navbar/NavBar'
import axios from 'axios'
import './CreateBlog.css'
import { useNavigate } from 'react-router-dom'


const CreateBlog = () => {

    const navigate = useNavigate()
    const [title,setTitle] = useState("")
    const [subTitle, setSubTitle] = useState("")
    const [description,setDescription] =useState("")

    // console.log(title,subTitle,description)

    const createBlog = async (e) =>{
        e.preventDefault()

        const data = {
            title : title,
            subTitle : subTitle,
            description : description
        }


        const response = await axios.post("http://localhost:3000/createBlog",data)
        // console.log(response)
        if( response.status == 201) {
            navigate("/")
        } else {    
            alert("Something is wrong")
        }

    }
  return (
    <>
    <NavBar/>
    <div className="form-container">
        <h1 className="form-title">Form Title</h1>
        <h2 className="form-subtitle">Form Subtitle</h2>
        <p className="form-description">Please fill out the form below and submit your details.</p>
        
        <form onSubmit={createBlog}>
            <div className="form-group">
                <label htmlFor="name">Title:</label>
                <input type="text" id="name" name="name" required onChange={(e) =>setTitle (e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Sub Title:</label>
                <input type="text" id="email" name="email" required onChange={(e) => setSubTitle (e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="5" required onChange={(e) => setDescription (e.target.value)}/>
            </div>
            <button type="submit" className="submit-button">Submit</button>
        </form>
    </div>
    </>
  )
}

export default CreateBlog