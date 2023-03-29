import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();

    return ( 
        <div className="blog-details">
            { isPending && <div> Loading... </div> }
            { error && <div>{ error }</div> }
            {blog && (
                <article>
                    <div><img src={ blog.image}></img></div>
                    <div>
                    <h2>{ blog.title}</h2>
                    <div className="full-article">{ blog.body }</div>
                    <p>Written by { blog.author }.</p>
                    </div>
                </article>
            ) }
        </div>
     );
}
 
export default BlogDetails;