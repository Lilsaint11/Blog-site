import { Link,NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import {AiOutlineClose} from 'react-icons/ai';
import { useState } from 'react';
import { useEffect } from 'react';

const Navbar = () => {
    const [burgerClicked, setBurgerClicked] = useState(false);
    const [linksClass, setLinksClass] = useState("links")
    const displayMenu = () => {
        setBurgerClicked((prevState) => !prevState);
        if(!burgerClicked) {
            setLinksClass("links active")
        }else{
            setLinksClass("links")
        }
    }
    useEffect(()=>{
        setLinksClass("links")
    },[])
    return ( 
        <nav className="navbar">
            <Link to="/" className='logo'><h1>Stephen's Blog</h1></Link>
            <div className={linksClass}>
                <NavLink to="/" className='navlink' onClick={()=>{
                    setLinksClass("links");
                    setBurgerClicked(false);
                }}>Home</NavLink>
                <NavLink to="/about" className='navlink' onClick={()=>{
                    setLinksClass("links");
                    setBurgerClicked(false);
                }}>About</NavLink>
                <NavLink to="/blogs" className='navlink' onClick={()=>{
                    setLinksClass("links");
                    setBurgerClicked(false);
                }}>Blogs</NavLink>
                <NavLink to="/contact" className='navlink' onClick={()=>{
                    setLinksClass("links");
                    setBurgerClicked(false);
                }}>Contact</NavLink>
            </div>
            <div className='hamburger' onClick={displayMenu}>
                {burgerClicked ? <AiOutlineClose/> : <RxHamburgerMenu />}
            </div>
        </nav>
     );
}
 
export default Navbar;