import { Link } from "react-router-dom";

    const BlogList = ({blogs}) => {
    const mainBlogs = blogs.filter(blog => blog.id < 7); 
    return ( 
        <div className="blog-list">
             {mainBlogs.map(mainBlog => (
                <div className="blog-preview" key={mainBlog.id}>
                    <img src={ mainBlog.image } alt="img" />
                    <div className="blog">
                        <h2>{ mainBlog.title }</h2>
                        <p>{mainBlog.body.slice(0, 145)}...</p>
                    </div>
                    <Link to={`/blogs/${mainBlog.id}`} className="details">
                        <button>Details</button>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;