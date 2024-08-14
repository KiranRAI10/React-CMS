import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import './SingleBlog.css'  // Import the CSS file for styling

const SingleBlog = () => {

    const { id } = useParams()
    const [blog, setBlog] = useState({})
    const navigate = useNavigate()

    // Delete Blog
    const deleteBlog = async () => {
        const response = await axios.delete("http://localhost:3000/blogs/" + id)
        if (response.status === 200) {
            navigate("/")
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
        <div className="single-blog-container">
            <div className="single-blog-card">
                <h1 className="blog-title">{blog.title}</h1>
                <h3 className="blog-subtitle">{blog.subTitle}</h3>
                <p className="blog-description">{blog.description}</p>
                <button className="delete-button" onClick={deleteBlog}>Delete</button>
            </div>
        </div>
    )
}

export default SingleBlog
