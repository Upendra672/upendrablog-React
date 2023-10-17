import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Util/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );

  return (
    <div className="blog-details">
      {(error && <div>{error}</div>) || (isLoading && <div>Laoding...</div>)}
      {data && (
       <article>
        <h2>{data.title}</h2>
        <small>Written by : {data.author}</small>
        <div>{data.body}</div>
       </article>
      )}
    </div>
  );
};

export default BlogDetails;
