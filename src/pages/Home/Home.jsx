import './Home.css'
import NavBar from '../../component/Navbar/NavBar'
import Card from '../../component/Card/Card'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  
  const [blogs, setBlogs] = useState([])
  
  // API call
  const fetchBlogs = async () =>{
    try {
      const response = await axios.get('http://localhost:3000/blogs')
      setBlogs(response.data.Blogs)
    } catch (error) {
      alert("Something went wrong")
    }
  }

  useEffect (()=>{
    fetchBlogs()
  },[])

  return (
    <div>
      <NavBar/>
      <div className="blogs-container">
        {blogs.map((blog) => (
          <div key={blog._id} className="blog-card">
            <div className="card-body">
              <h5 className="card-title">{blog.title}</h5>
              <h6 className="card-subtitle">{blog.subTitle}</h6>
              <p className="card-text">{blog.description}</p>
              <Link to={`/singleBlog/${blog._id}`} className="see-more-link">See More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
