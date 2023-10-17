import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  // instead of this normal method of props we are using destructred properties
  //   const blogs = props.blogs;
  //   const title = props.title;

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-previews" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by <b>{blog.author}</b></p>
          </Link>

          {/* <button onClick={() => handleDelete(blog.id)}>Delete Blog</button> */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
