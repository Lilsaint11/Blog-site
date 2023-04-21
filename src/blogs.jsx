import { Link } from "react-router-dom";
import {getDocs,collection, onSnapshot} from "firebase/firestore";
import {db} from "./firebase";
import { useState,useEffect } from "react";
import Spinner from "./spinner";

const Blogs = () => {
    const [blogs,setblogs] = useState(null)
    const [dataFetched,setDataFetched] = useState(false)
    const [loading,setLoading] = useState(true)
    useEffect(() =>{
        async function fetchUserblogs(){
            const listingRef = collection(db,"blogs");
            const querySnap = await getDocs(listingRef);
            let blogs = [];
            querySnap.forEach((doc)=>{
                return blogs.push({
                    id:doc.id,
                    data:doc.data()
                })
            })
            onSnapshot(listingRef, (snapshot) => {
                let blogs = [];
                snapshot.forEach((doc)=>{
                     blogs.push({
                        id:doc.id,
                        data:doc.data()
                    })
                })
                setblogs(blogs)    
            })
            setblogs(blogs)
            setDataFetched(true)
            setLoading(false)
        }
        fetchUserblogs()
    },[])

    if (loading) {
        return <Spinner />;
      }

    return ( 
        <div className="blog-list">
            <div className="container">
            {blogs && blogs.map(blog => (
                <div className="blog-preview all-blogs" key={blog.id}>
                    <div className="blog-info">
                        <img src={ blog.data.image } alt="img" />
                        <div className="blog">
                            <h2>{ blog.data.title }</h2>
                            <p>{blog.data.body.slice(0, 145)}...</p>
                        </div>
                    </div>
                    <Link to={`/blog/${blog.id}`} className="details">
                        <button>Details</button>
                    </Link>
                </div>
            ))}
            </div>
        </div>
     );
}
 
export default Blogs;