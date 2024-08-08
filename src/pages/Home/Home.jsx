import './Home.css'
import NavBar from '../../component/Navbar/NavBar'
import Card from '../../component/Card/Card'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Home = () => {
  
  const [blogs, setBlogs] = useState([])
  //API call
  const fetchBlogs = async () =>{
    const response = await axios.get('http://localhost:3000/blogs')
    setBlogs(response.data.Blogs)
  }

  useEffect (()=>{
    fetchBlogs()
  },[])

  // console.log(blogs,"blogs")
  return (
    <div>

      <NavBar/>
      <div className="card" style={{width: "18rem"}}>
    
    {blogs.map((blog) =>{
      return(

<div key={blog._id} className="card-body">
  <h5 className="card-title">{blog.title}</h5>
  <h5 className="card-title">{blog.subTitle}</h5>
  <p className="card-text">{blog.description}</p>
  <a href="#" className="btn btn-primary">Go somewhere</a>
</div>

      )


    })}
  </div>

    </div>
  )
    
}

export default Home