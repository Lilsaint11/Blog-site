import { useParams } from "react-router-dom";
import {getDoc,doc, onSnapshot} from "firebase/firestore";
import {db} from "./firebase"
import { useEffect } from "react";
import { useState } from "react";
import Spinner from "./spinner";


const BlogDetails = () => {
    const { id } = useParams();
    const[blogData, setBlogData] = useState();
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        async function fetchUserblogs(){
            const blogRef = doc(db,"blogs",id);
            await getDoc(blogRef)
            .then((doc)=> {
                let blogData
                blogData = doc.data()
                setBlogData(blogData)
                setLoading(false)
            })
            onSnapshot(blogRef, (doc) => {
                let blogData
                blogData = doc.data()
                setBlogData(blogData)
                setLoading(false)
            })
        
        }
        fetchUserblogs()
    },[])

    if (loading) {
        return <Spinner />;
      }
    return ( 
        <div className="blog-details">
            {blogData && (
                <article>
                    <div><img src={ blogData.image}></img></div>
                    <div>
                    <h2>{ blogData.title}</h2>
                    <div className="full-article">{ blogData.body }</div>
                    <p>Written by { blogData.author }.</p>
                    </div>
                </article>
            ) }
        </div>
     );
}
 
export default BlogDetails;