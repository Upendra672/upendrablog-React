import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar">
        <h1>The Upendra Blog</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create"> NewBlog</Link>
        </div>
    </nav>
  )
}

export default Navbar;