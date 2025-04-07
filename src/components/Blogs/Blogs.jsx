import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookmark, handleMarkAsRead}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogData.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold my-3">Total : {blogs.length}</h1>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
