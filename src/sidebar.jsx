import { Link } from "react-router-dom";

const SideBar = ({blogs}) => {
    const sideBlogs = blogs.filter(blog => blog.id > 6); 
    console.log(sideBlogs)
    
    return ( 
        <div className="sidebar">
            <div className="related-posts">
                <h3>Related posts</h3>
                {sideBlogs.map(sideBlog => (
                 <Link to={`/blogs/${sideBlog.id}`} className="details">
                    <div className="post" key={sideBlog.id}>
                        <img src={ sideBlog.image } alt="img" />
                        <p>{ sideBlog.title }</p>
                    </div>
                </Link>
            ))}
            </div>

            <div className="article">
                <h3>Article</h3>
                <p>
                Why do we use it?\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, porro sit tenetur cupiditate quidem dolor ad laborum eius? Unde incidunt et veniam, expedita suscipit sint maxime hic laborum quisquam corrupti?
                </p>
                <p>
                Why do we use it?\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, porro sit tenetur cupiditate quidem dolor ad laborum eius? Unde incidunt et veniam, expedita suscipit sint maxime hic laborum quisquam corrupti?
                </p>
            </div>
        </div>
     );
}
 
export default SideBar;