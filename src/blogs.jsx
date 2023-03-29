import { Link } from "react-router-dom";
import useFetch from './useFetch';

const Blogs = () => {

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    console.log(blogs)

    return ( 
        <div className="blog-list">
             {blogs && blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <img src={ blog.image } alt="img" />
                    <div className="blog">
                        <h2>{ blog.title }</h2>
                        <p>{blog.body.slice(0, 145)}...</p>
                    </div>
                    <Link to={`/blogs/${blog.id}`} className="details">
                        <button>Details</button>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default Blogs;