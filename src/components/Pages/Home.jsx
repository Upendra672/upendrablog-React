import React from "react";
import BlogList from "../Util/BlogList";
import useFetch from "../Util/useFetch";
const Home = () => {
  const {
    data: blog,
    isLoading,
    error
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {(error && <div>{error}</div>) || (isLoading && <div>Loading......</div>)}
      {blog && <BlogList blogs={blog} title="All Blogs!" />}
    </div>
  );
};

export default Home;
