import { Link,NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import {AiOutlineClose} from 'react-icons/ai';
import { useState } from 'react';

const Navbar = () => {
    const [burgerClicked, setBurgerClicked] = useState(false);
    const [linksClass, setLinksClass] = useState("links")
    const dislayMenu = () => {
        setBurgerClicked((prevState) => !prevState);
        if(!burgerClicked) {
            setLinksClass("links active")
        }else{
            setLinksClass("links")
        }
    }
    return ( 
        <nav className="navbar">
            <Link to="/" className='logo'><h1>Stephen's Blog</h1></Link>
            <div className={linksClass}>
                <NavLink to="/" className='navlink'>Home</NavLink>
                <NavLink to="/about" className='navlink'>About</NavLink>
                <NavLink to="/blogs" className='navlink'>Blogs</NavLink>
                <NavLink to="/contact" className='navlink'>Contact</NavLink>
            </div>
            <div className='hamburger' onClick={dislayMenu}>
                {burgerClicked ? <AiOutlineClose/> : <RxHamburgerMenu />}
            </div>
        </nav>
     );
}
 
export default Navbar;