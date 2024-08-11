import { useNavigate } from 'react-router-dom'
import './Navbar.css'

const NavBar = () => {
  const navigate = useNavigate()
  return (
    <div>
<nav className="navbar">
        <div className="logo">
            <a href="#">MyLogo</a>
        </div>
        <ul className="nav-links">
            <li><a onClick={()=> navigate ('/')}>Home</a></li>
            <li><a onClick={() => navigate('/createBlog')}>Create Blog</a></li>
            {/* <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li> */}
        </ul>
        <div className="menu-toggle" id="menu-toggle">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
    </nav>
    </div>
  )
}

export default NavBar