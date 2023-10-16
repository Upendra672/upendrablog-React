import React, { useState } from "react";
import BlogList from "../Util/BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new Website",
      body: "lorem ipsem lorem ipsem lorem ipsem",
      author: "upendra",
      id: 1,
    },
    {
      title: "Welcome Party!",
      body: "lorem ipsem lorem ipsem lorem ipsem",
      author: "aditi",
      id: 2,
    },
    {
      title: "Web dev top tips!",
      body: "lorem ipsem lorem ipsem lorem ipsem",
      author: "upendra",
      id: 3,
    },
  ]);

  const handleDelete = (id) =>{
    const newBlog = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlog);
}

  return (

    <div className="home">
      <BlogList blogs={blogs} title= "All Blogs!" handleDelete={handleDelete}/ >
      {/* <BlogList blogs={blogs.filter(blog => blog.author === "upendra")} title= "Upendra Blog!"/ > */}
    </div>
  );
};

export default Home;
