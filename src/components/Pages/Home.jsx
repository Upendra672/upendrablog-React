import React, { useEffect, useState } from "react";
import BlogList from "../Util/BlogList";
import axios from "axios";
const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // const handleDelete = (id) => {
  //   const newBlog = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlog);
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/blogs");
        setBlogs(response.data);
        setIsLoading(false);
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home">
      {(error && <div>{error}</div>) ||
      (isLoading && <div>Loading......</div>)}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      {/* <BlogList blogs={blogs.filter(blog => blog.author === "upendra")} title= "Upendra Blog!"/ > */}
    </div>
  );
};

export default Home;
