import Navbar from "./components/Layout/Navbar";
import BlogDetails from "./components/Pages/BlogDetails";
import Home from "./components/Pages/Home";
import CreateBlog from "./components/Pages/CreateBlog";
import NotFound from "./components/Util/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/create" Component={CreateBlog}/>
            <Route path="/blogs/:id" Component={BlogDetails}/>
            <Route path="*" Component={NotFound}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
