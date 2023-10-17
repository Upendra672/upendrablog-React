import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../Util/useFetch";
import axios from "axios";

const BlogDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );

  const handleDelete = ()=>{
    const deleteBlog = async () => {
      try{
        const response = await axios.delete("http://localhost:8000/blogs/" + data.id)
        // console.log(response)
        navigate("/");
      }catch(e){
        console.log("Error deleting the blog", e.message)
      }
    }
    deleteBlog();
  }

  return (
    <div className="blog-details">
      {(error && <div>{error}</div>) || (isLoading && <div>Laoding...</div>)}
      {data && (
       <article>
        <h2>{data.title}</h2>
        <small>Written by : {data.author}</small>
        <div>{data.body}</div>
        <button onClick={handleDelete}>Delete Blog</button>
       </article>
      )}
    </div>
  );
};

export default BlogDetails;
