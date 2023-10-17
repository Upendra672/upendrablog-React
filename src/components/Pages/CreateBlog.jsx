import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewBlog = () => {

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Elizabeth Kolbert");
  const [isLoading, setIsLoading] = useState(false);


  const data = {
    title: title,
    body: body,
    author: author,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitData = async () => {
      try {
        setIsLoading(true)
        const response = await axios.post("http://localhost:8000/blogs", data);
        console.log("Blog added successfully:", response.data);
        setTitle('')
        setBody('')
        setAuthor('')
        setIsLoading(false)
        navigate("/");
      } catch (error) {
        console.error("Error adding the blog:", error.message);
      }
    };

    submitData();
  };

  return (
    <div className="create-blog">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Blog Title:</label>
        <input
          type="text"
          id="title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="body">Blog Body:</label>
        <textarea
          id="body"
          value={body}
          required
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label htmlFor="author">Blog Author:</label>
        <select
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        >
          <option value="Elizabeth Kolbert">Elizabeth Kolbert</option>
          <option value="Henry David Thoreau">Henry David Thoreau</option>
          <option value="Alan Weisman">Alan Weisman</option>
        </select>
        {!isLoading && <button>Add Blog</button>}
        {isLoading && <button>Adding Blog...</button>}
      </form>
    </div>
  );
};

export default NewBlog;
