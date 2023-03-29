import BlogList from './blogList';
import SideBar from './sidebar';
import useFetch from './useFetch';

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className='main'>
            <div className="home">
                { error && <div>{ error }</div>}
                { isPending && <div>Loading...</div>}
                {blogs && <BlogList blogs = {blogs} />}
            </div>
            {blogs && <SideBar  blogs = {blogs}/>}
        </div>
     );
}
 
export default Home; 