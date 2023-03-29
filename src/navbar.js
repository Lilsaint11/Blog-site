import { Link,NavLink } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <Link to="/" className='logo'><h1>Stephen's Blog</h1></Link>
            <div className="links">
                <NavLink to="/" className='navlink'>Home</NavLink>
                <NavLink to="/about" className='navlink'>About</NavLink>
                <NavLink to="/blogs" className='navlink'>Blogs</NavLink>
                <NavLink to="/contact" className='navlink'>Contact</NavLink>
            </div>
        </nav>
     );
}
 
export default Navbar;