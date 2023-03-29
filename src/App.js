import Navbar from './navbar';
import Home from './home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogDetails from './blogsDetails';
import NotFound from './notFound';
import Footer from './footer';
import Banner from './banner';
import Blogs from './blogs';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Banner />
        <div className="content">
          <Routes>
            <Route exact path = "/" element={<Home />} />
            <Route path = "/blogs" element={<Blogs />} />
            <Route path = "/blogs/:id" element={<BlogDetails />} />
            <Route path = "*" element={<NotFound/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
