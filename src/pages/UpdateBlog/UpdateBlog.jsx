import { useNavigate, useParams } from 'react-router-dom'
import NavBar from '../../component/Navbar/NavBar'
import './UpdateBlog.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

const UpdateBlog = () => {

    const navigate = useNavigate()
    const {id} = useParams();
    const [blog,setBlog] = useState({})

    //handle change of the input
    const handleChange = (e) =>{
        const {name , value} = e.target
        setBlog({
            ...blog,
            [name] : value
        })

    }

    const keyToExclude = ['createdAt','updatedAt']
    keyToExclude.forEach ((key) =>{
        delete blog[key]
    })

    const updateBlog = async (e) =>{
        e.preventDefault()
        const response = await axios.patch("http://localhost:3000/blogs/" + id, blog)
        console.log(response.data)
        if(response.status == 200){
            navigate("/singleBlog/" + id)

        }

    }
    
    const fetchSingleBlog = async () => {
        const response = await axios.get("http://localhost:3000/blogs/" + id)
        if (response.status === 200) {
            setBlog(response.data.Blogs)
        }
    }

    useEffect(() => {
        fetchSingleBlog()
    }, [])

  return (

    <>
    <NavBar/>
    <div className="form-container">
        <h1 className="form-title">Update Blog</h1>
        
        <p className="form-description">Please fill out the form below and submit your details.</p>
        
        <form onSubmit={updateBlog} >
            <div className="form-group">
                <label htmlFor="name">Title:</label>
                <input type="text" name="title" value={blog.title} onChange={handleChange}  required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Sub Title:</label>
                <input type="text" name="subTitle" value={blog.subTitle} onChange={handleChange}  required />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="description" value={blog.description} onChange={handleChange} rows="5" required />
            </div>
            <button type="submit" className="submit-button">Submit</button>
        </form>
    </div>
    </>
  )
}

export default UpdateBlog