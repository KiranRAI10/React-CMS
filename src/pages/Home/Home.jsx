import './Home.css'
import NavBar from '../../component/Navbar/NavBar'
import Card from '../../component/Card/Card'
import axios from 'axios'
import { useEffect } from 'react'

const Home = () => {
  //API call

  const fetchBlogs = async() =>{
    const response = await axios.get('http://localhost:2000/blogs')
    console.log(response)
  }

  useEffect (()=>{
    fetchBlogs()
  },[])
  return (
    <div>

      <NavBar/>
      <Card />

    </div>
    
  )
}

export default Home