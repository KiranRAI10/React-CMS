import './Navbar.css'

const NavBar = () => {
  return (
    <div>
<nav className="navbar">
        <div className="logo">
            <a href="#">MyLogo</a>
        </div>
        <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
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