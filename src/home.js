import BlogList from './blogList';
import SideBar from './sidebar';
import { useState,useEffect } from "react";
import {getDocs,collection, onSnapshot} from "firebase/firestore";
import {db} from "./firebase"
import Spinner from './spinner';

const Home = () => {
    const [blogs,setblogs] = useState(null)
    const [loading,setLoading] = useState(true)
    const [dataFetched,setDataFetched] = useState(false)
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
        <div className='main'>
            <div className="home">
                <div className="blog-list">
                    {dataFetched && blogs.map((blog) => (
                                <BlogList
                                id={blog.id}
                                blog={blog.data}
                                />
                    ))}
                </div>    
            </div>
            {dataFetched &&   
                <SideBar blogs = {blogs}/>
            }
        </div>
     );
}
 
export default Home; 