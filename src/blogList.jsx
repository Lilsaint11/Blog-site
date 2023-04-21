import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

    const BlogList = ({blog,id}) => {
    const [sidebar,setSidebar] =  useState(false);
    useEffect(() =>{
        if(blog.type == "sidebar"){
            setSidebar(true)
        }
    },[sidebar])
    return ( 
        <>
        {!sidebar && <div className="blog-preview" key={id}>
                <img src={ blog.image } alt="img" />
                <div className="blog">
                    <h2>{blog.title }</h2>
                    <p>{blog.body.slice(0, 145)}...</p>
                </div>
                <Link to={`/blog/${id}`} className="details">
                    <button>Details</button>
                </Link>
            </div>}
        </>
     );
}
 
export default BlogList;