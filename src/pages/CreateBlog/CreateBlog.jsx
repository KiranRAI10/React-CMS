import { useState } from 'react'
import NavBar from '../../component/Navbar/NavBar'
import axios from 'axios'
import './CreateBlog.css'
import { useNavigate } from 'react-router-dom'


const CreateBlog = () => {

    const navigate = useNavigate()
    const [data,setData] = useState({
        title : "",
        subTitle : "",
        description : ""
       })

    // console.log(title,subTitle,description)

    const createBlog = async (e) =>{
        e.preventDefault()

        const response = await axios.post("http://localhost:3000/createBlog",data)
        // console.log(response)
        if( response.status == 201) {
            navigate("/")
        } else {    
            alert("Something is wrong")
        }

    }
    const handleChange = (e) =>{
        const {name,value} = e.target
        setData({
            ...data,
            [name] : value
        })
        // console.log(data)

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
                <input type="text" name="title" required onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Sub Title:</label>
                <input type="text" name="subTitle" required onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="description" rows="5" required onChange={handleChange}/>
            </div>
            <button type="submit" className="submit-button">Submit</button>
        </form>
    </div>
    </>
  )
}

export default CreateBlog